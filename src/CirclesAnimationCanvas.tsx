import { useRef, useEffect } from "react";

const CircleAnimationCanvas = () => {
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

    // Set the canvas size to be full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //color
    var colorArray = ["#BF6B04", "#BF7E04", "#F29F05", "#2C592A", "#FAD24D"];

    // Circle animation state (using class syntax to fix 'this' issues)
    class Circle {
      x: number;
      y: number;
      dx: number;
      dy: number;
      radius: number;
      color: string;

      constructor(
        x: number,
        y: number,
        dx: number,
        dy: number,
        radius: number
      ) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color || "black";
        ctx?.fill();
      }

      update() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        //interactivity(shrink the circle if close to the mouse)
        if (
          mouseRef.current.x - this.x < 50 &&
          mouseRef.current.x - this.x > -50 &&
          mouseRef.current.y - this.y < 50 &&
          mouseRef.current.y - this.y > -50
        ) {
          if (this.radius < 40) {
            this.radius += 1.5; //increase radius when mouse is close
          }
        } else if (this.radius > 2) {
          this.radius -= 1.5; //Decrease radius when the mouse is far
        }
        this.draw();
      }
    }

    var circleArray: Circle[] = [];

    if (circleArray.length === 0) {
      for (let i = 0; i < 400; i++) {
        let radius = Math.random() * 3 + 1;
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = Math.random() - 0.5;
        let dy = Math.random() - 0.5;
        circleArray.push(new Circle(x, y, dx, dy, radius));
      }
    }
    // Function to update the position of the circle
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

      for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      } //   circleArray.forEach((circle)=>circle.update())

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
        zIndex: 2,
        pointerEvents: "none",
      }}
    />
  );
};

export default CircleAnimationCanvas;
