import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const LipsAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create a more lip-like shape
    const lipsShape = new THREE.Shape();

    // Define a more organic lip curve
    lipsShape.moveTo(-10, 0);
    lipsShape.bezierCurveTo(-8, 5, 8, 5, 10, 0);
    lipsShape.bezierCurveTo(8, -5, -8, -5, -10, 0);

    // Extrude the shape to give it depth
    const extrudeSettings = {
      steps: 2,
      depth: 2,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 1,
      bevelOffset: 0,
      bevelSegments: 3
    };

    const geometry = new THREE.ExtrudeGeometry(lipsShape, extrudeSettings);
    
    // Hot red with a natural, slightly glossy finish
    const material = new THREE.MeshStandardMaterial({
      color: 0xFF2800,  // Vibrant hot red
      roughness: 0.4,   // Slight glossiness
      metalness: 0.1,   // Minimal metallic effect for natural sheen
    });

    const lips = new THREE.Mesh(geometry, material);
    scene.add(lips);

    // Realistic lighting setup
    // Soft ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Directional light to simulate natural, soft lighting
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    // Additional soft fill light
    const fillLight = new THREE.PointLight(0xffffff, 0.3);
    fillLight.position.set(-5, -10, -7);
    scene.add(fillLight);

    // Set camera position
    camera.position.z = 50;

    // Animation loop with subtle, natural-like movement
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Subtle, organic-like rotation
      lips.rotation.x = Math.sin(Date.now() * 0.001) * 0.05;
      lips.rotation.y = Math.cos(Date.now() * 0.001) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handling
    const onResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default LipsAnimation;