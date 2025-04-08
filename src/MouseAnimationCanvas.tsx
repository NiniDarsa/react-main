import React, { useRef, useEffect, useState } from "react";

const MouseAnimationCanvas = () => {
  // Create a ref to the canvas element
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Track mouse position in state
  const [mouse, setMouse] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Set up the canvas drawing context
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Add null check to ensure the canvas is available

    const ctx = canvas.getContext("2d");
    if (!ctx) return; // If the context is not available, exit early

    // Set the canvas size to be full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Circle animation state
    const circle = {
      radius: 30,
      color: "#3498db",
      speed: 0.05, // Speed of the circle following the mouse
      x: 0,
      y: 0,
    };

    // Function to update the position of the circle
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

      // Calculate the new position of the circle
      circle.x += (mouse.x - circle.x) * circle.speed;
      circle.y += (mouse.y - circle.y) * circle.speed;

      // Draw the circle
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
      ctx.fillStyle = circle.color;
      ctx.fill();
      ctx.closePath();

      // Request the next frame
      requestAnimationFrame(animate);
    };

    animate(); // Start the animation loop

    // Handle resizing of the window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [mouse]); // Re-run the effect when mouse position changes

  // Handle mousemove event
  const handleMouseMove = (e: React.MouseEvent) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

export default MouseAnimationCanvas;
