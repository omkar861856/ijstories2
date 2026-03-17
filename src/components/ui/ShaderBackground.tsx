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
  uniforms: {
    time: { value: number };
    resolution: { value: { x: number; y: number } | any };
    mosaicScale: { value: { x: number; y: number } | any };
    colorIntensity: { value: number };
    colorA: { value: any };
    colorB: { value: any };
    bgColor: { value: any };
  } | null;
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
      colorIntensity: 1.5, // Increased intensity
      mosaicScale: { x: 4, y: 4 } // Finer mosaic
    };

    const uniforms = {
      time: { type: "f", value: 0.0 },
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
        // High quality UV calculation
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        float aspect = resolution.x / resolution.y;
        uv.x *= aspect;

        // Dynamic Mosaic Scaling based on actual resolution
        vec2 grid = resolution.xy / (mosaicScale * 8.0);
        uv.x = floor(uv.x * grid.x) / grid.x;
        uv.y = floor(uv.y * grid.y) / grid.y;

        // Faster animation for "mesmerizing" feel
        float t = time * 0.15 + random(uv.x) * 0.4;
        float lineWidth = 0.0012;

        float intensity = 0.0;
        for(int j = 0; j < 3; j++) {
          for(int i = 0; i < 5; i++) {
            // Improved loop for smoother gradients
            intensity += lineWidth * float(i*i + 1) / abs(fract(t - 0.015*float(j) + float(i)*0.01) - length(uv - 0.5 * vec2(aspect, 1.0)));
          }
        }

        vec3 lineColor = mix(colorA, colorB, 0.5 + 0.5*sin(time*0.8 + uv.x * PI));
        vec3 finalColor = bgColor + (intensity * 0.5) * lineColor * colorIntensity;

        // Final color grading
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader,
      fragmentShader,
      transparent: true
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: false, // Better perf for background
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for perf
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    sceneRef.current.renderer = renderer;
    sceneRef.current.uniforms = uniforms;
    sceneRef.current.scene = scene;
    sceneRef.current.camera = camera;

    const animate = (t: number) => {
      if (sceneRef.current.uniforms) {
        sceneRef.current.uniforms.time.value = t / 1000.0;
      }
      if (sceneRef.current.renderer && sceneRef.current.scene && sceneRef.current.camera) {
        sceneRef.current.renderer.render(sceneRef.current.scene, sceneRef.current.camera);
      }
      sceneRef.current.animationId = requestAnimationFrame(animate);
    };
    sceneRef.current.animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      if (sceneRef.current.uniforms) {
        sceneRef.current.uniforms.resolution.value.set(width, height);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
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
      if (currentScene.renderer) {
        currentScene.renderer.dispose();
      }
      // Cleanup geometries and materials if it was more complex, but here simple
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-black">
      <div 
        ref={containerRef} 
        className="absolute inset-0 opacity-80" 
        style={{ mixBlendMode: 'screen' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-50" />
    </div>
  );
}
