"use client";

import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    THREE: any;
  }
}

interface SceneRefs {
  camera: any;
  scene: any;
  renderer: any;
  uniforms: any;
  animationId: number | null;
}

export default function ShaderBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<SceneRefs>({
    camera: null,
    scene: null,
    renderer: null,
    uniforms: null,
    animationId: null
  });

  const initThreeJS = () => {
    if (!containerRef.current || !window.THREE) return;
    
    const THREE = window.THREE;
    const container = containerRef.current;
    
    container.innerHTML = "";

    const camera = new THREE.Camera();
    camera.position.z = 1;

    const scene = new THREE.Scene();
    const geometry = new THREE.PlaneBufferGeometry(2, 2);

    const params = {
      backgroundColor: "#000000",
      colorA: "#ffffff",
      colorB: "#86868b",
      colorIntensity: 1.2,
      mosaicScale: { x: 8, y: 8 }
    };

    const uniforms = {
      time: { type: "f", value: 1.0 },
      resolution: { type: "v2", value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      mosaicScale: { type: "v2", value: new THREE.Vector2(params.mosaicScale.x, params.mosaicScale.y) },
      colorIntensity: { type: "f", value: params.colorIntensity },
      colorA: { type: "v3", value: new THREE.Color(params.colorA) },
      colorB: { type: "v3", value: new THREE.Color(params.colorB) },
      bgColor: { type: "v3", value: new THREE.Color(params.backgroundColor) }
    };

    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      #define PI 3.14159265359
      precision highp float;

      uniform vec2 resolution;
      uniform float time;
      uniform vec2 mosaicScale;
      uniform float colorIntensity;
      uniform vec3 colorA;
      uniform vec3 colorB;
      uniform vec3 bgColor;

      float random (in float x) { return fract(sin(x)*1e4); }
      float random (vec2 st) { return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123); }

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);

        vec2 fMosaicScal = mosaicScale;
        vec2 vScreenSize = vec2(256.0,256.0);

        uv.x = floor(uv.x * vScreenSize.x / fMosaicScal.x) / (vScreenSize.x / fMosaicScal.x);
        uv.y = floor(uv.y * vScreenSize.y / fMosaicScal.y) / (vScreenSize.y / fMosaicScal.y);

        float t = time * 0.06 + random(uv.x) * 0.4;
        float lineWidth = 0.0008;

        float intensity = 0.0;
        for(int j = 0; j < 3; j++) {
          for(int i = 0; i < 5; i++) {
            intensity += lineWidth * float(i*i) / abs(fract(t - 0.01*float(j) + float(i)*0.01) - length(uv));
          }
        }

        vec3 lineColor = mix(colorA, colorB, 0.5 + 0.5*sin(time*0.5 + uv.x * 3.1415));
        vec3 finalColor = bgColor + intensity * lineColor * colorIntensity;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    sceneRef.current.renderer = renderer;
    sceneRef.current.uniforms = uniforms;

    const animate = (t: number) => {
      if (sceneRef.current.uniforms) {
        sceneRef.current.uniforms.time.value = t / 1000.0;
      }
      renderer.render(scene, camera);
      sceneRef.current.animationId = requestAnimationFrame(animate);
    };
    animate(0);

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (sceneRef.current.uniforms) {
        sceneRef.current.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
      }
    };
    window.addEventListener('resize', handleResize);
  };

  useEffect(() => {
    const scriptUrl = "https://cdnjs.cloudflare.com/ajax/libs/three.js/89/three.min.js";
    const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
    
    const initThree = () => {
      if (containerRef.current && window.THREE) {
        initThreeJS();
      }
    };

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.onload = initThree;
      document.head.appendChild(script);
    } else {
      initThree();
    }

    const currentScene = sceneRef.current;
    return () => {
      if (currentScene.animationId) cancelAnimationFrame(currentScene.animationId);
      if (currentScene.renderer) currentScene.renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-black">
      <div 
        ref={containerRef} 
        className="absolute inset-0 opacity-40" 
        style={{ mixBlendMode: 'screen' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-40" />
    </div>
  );
}
