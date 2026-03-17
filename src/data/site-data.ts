export interface Project {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  content: string;
  year: string;
  location: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image: string;
  category: string;
  excerpt: string;
  content: string;
}

export interface Service {
  slug: string;
  id: string;
  title: string;
  desc: string;
  image: string;
  content: string;
}

export const projects: Project[] = [
  {
    slug: "fashion-narrative",
    title: "Fashion Narrative",
    category: "Photography / Web",
    image: "/fashion.png",
    description: "A deep dive into the intersection of high fashion and abstract digital textures.",
    content: "The Fashion Narrative project was conceived as a multi-sensory experience. We combined high-speed strobe photography with custom GLSL shaders to create a visual language that feels both grounded and ethereal.",
    year: "2025",
    location: "Paris / NYC"
  },
  {
    slug: "urban-pulse",
    title: "Urban Pulse",
    category: "Motion / Sound",
    image: "/urban.png",
    description: "Capturing the rhythmic chaos of modern cityscapes through slow-burn cinematography.",
    content: "Urban Pulse captures the silent rhythms of the city. Using 1000fps phantom cameras, we extracted the micro-movements of urban life, turning everyday traffic and construction into a cinematic ballet.",
    year: "2024",
    location: "Mumbai / London"
  },
  {
    slug: "minimal-essence",
    title: "Minimal Essence",
    category: "Branding",
    image: "/minimal.png",
    description: "Stripping back the layers of excessive design to find the core identity of a legacy brand.",
    content: "Minimal Essence was about restraint. We worked with a legacy watchmaker to modernize their identity without losing a century of heritage. The resulting visual system is built on a grid of 'zero-gravity' typography.",
    year: "2024",
    location: "Zurich"
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "the-future-of-cinematic-web",
    title: "The Future Of Cinematic Web",
    date: "March 15, 2026",
    image: "/This Post was tough… selecting pictures was a task in this post. I loved every single photo that.jpg",
    category: "Digital Trends",
    excerpt: "Exploring how WebGL and Shaders are redefining user interactions in luxury digital spaces.",
    content: "The web is no longer a static medium. As computing power grows, we are seeing a shift towards immersive, shader-driven experiences that bridge the gap between cinema and interface design."
  },
  {
    slug: "minimalism-in-the-age-of-noise",
    title: "Minimalism In The Age Of Noise",
    date: "February 28, 2026",
    image: "/468333594_18473797480038665_4473156711760818505_n.jpg",
    category: "Design Philosophy",
    excerpt: "Why staying quiet is the loudest way to be heard in a saturated market.",
    content: "True minimalism isn't just about 'less'. It's about 'right'. In a world where every brand is screaming for attention, the brands that offer a moment of silence and clarity are the ones that win."
  }
];

export const services: Service[] = [
  { 
    slug: "visual-storytelling",
    id: "01", 
    title: "Visual Storytelling", 
    desc: "Crafting narratives that resonate through powerful imagery and cinematography.",
    image: "/Video-64.mp4",
    content: "Our visual storytelling goes beyond mere documentation. We capture the essence of every moment, turning raw footage into cinematic masterpieces that tell your brand's unique story."
  },
  { 
    slug: "premium-branding",
    id: "02", 
    title: "Premium Branding", 
    desc: "Identity design that defines industry standards and captures the essence of luxury.",
    image: "/Image-50.jpg",
    content: "We define the visual language of luxury. Our branding process is a deep dive into your brand's DNA, resulting in an identity that is both timeless and cutting-edge."
  },
  { 
    slug: "digital-artistry",
    id: "03", 
    title: "Digital Artistry", 
    desc: "Bespoke digital experiences that blend fine art with cutting-edge technology.",
    image: "/get.webp",
    content: "The digital space is our canvas. We create immersive digital experiences that push the boundaries of technology while maintaining the emotional depth of fine art."
  },
  { 
    slug: "motion-direction",
    id: "04", 
    title: "Motion Direction", 
    desc: "Translating brand energy into fluid motion graphics and high-impact video.",
    image: "/Video-158.mp4",
    content: "Motion is the heartbeat of modern design. We translate your brand's energy into fluid animations and high-impact videos that capture attention and never let go."
  },
];
