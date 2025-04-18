import { useRef, useEffect } from "react";

const MouseAnimationCanvas = () => {
  // Create a ref to the canvas element
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Track mouse position using a ref instead of state
  //The circle follows the mouse: Every time animate is called by requestAnimationFrame, it uses the most recent mouseRef.current values (which are updated by the mousemove event listener) to compute the new position of the circle, making the animation follow the mouse smoothly.
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Set up the canvas drawing context
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Add null check to ensure the canvas is available

    const ctx = canvas.getContext("2d");
    if (!ctx) return; // If the context is not available, exit early

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Circle animation state
    const circle = {
      radius: 10,
      color: "#eccd1f",
      speed: 0.05, // Speed of the circle following the mouse
      x: 0,
      y: 0,
    };

    // Function to update the position of the circle
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

      // Calculate the new position of the circle based on the most recent mouse position
      circle.x += (mouseRef.current.x - circle.x) * circle.speed;
      circle.y += (mouseRef.current.y - circle.y) * circle.speed;

      // Draw the circle
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
      ctx.fillStyle = circle.color;
      ctx.fill();
      ctx.closePath();

      // Request the next frame(The canvas paints the circle in the correct position because of the requestAnimationFrame(animate) inside the animate function.)
      //Every time animate is called, it updates the circle's position to smoothly follow the mouse pointer based on the values stored in mouseRef.current. The position of the circle is recalculated and rendered on the canvas in each frame.
      //The key here is that even though the useEffect is only triggered on mount, the animate function continues to run due to requestAnimationFrame. It continuously updates the canvas and draws the circle at the position stored in mouseRef.current.
      requestAnimationFrame(animate);
    };

    animate(); // Start the animation loop

    // Handle resizing of the window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    // Handle mousemove event
    const handleMouseMove = (e: MouseEvent) => {
      //Even though useEffect only runs once, the mousemove handler will update mouseRef.current with the current mouse position whenever the user moves the mouse.
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array ensures the effect only runs once
  //The useEffect runs only once when the component mounts to set up the canvas and the animation loop.
  //requestAnimationFrame ensures the animation loop continues running and keeps redrawing the circle on each frame.
  //In short, the canvas updates continuously because of requestAnimationFrame, and the correct mouse position is used in the animate function via the mouseRef.current value, which is kept up to date by the mousemove event listener.
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
        pointerEvents: "none",
      }}
    />
  );
};

export default MouseAnimationCanvas;
