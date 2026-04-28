'use client';

import React, { useEffect, useRef } from 'react';

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width: number, height: number;
    let stars: Star[] = [];
    const STAR_COUNT = 150;
    const SPEED_Y = 0.05;
    const MOUSE_SENSITIVITY = 0.005;

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    class Star {
      x!: number;
      y!: number;
      z!: number;
      size!: number;
      alpha!: number;
      blinkSpeed!: number;
      blinkOffset!: number;

      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -10;
        this.z = Math.random() * 2 + 0.5;
        this.size = Math.random() * 1.5;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.blinkSpeed = Math.random() * 0.02 + 0.005;
        this.blinkOffset = Math.random() * Math.PI * 2;
      }

      update() {
        this.y += (SPEED_Y * this.z) + ((targetY - mouseY) * MOUSE_SENSITIVITY * 0.1 * this.z);
        this.x += (targetX - mouseX) * MOUSE_SENSITIVITY * 0.1 * this.z;

        if (this.y > height) {
          this.reset();
          this.y = -5;
        }
        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;

        this.blinkOffset += this.blinkSpeed;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        const twinkle = Math.sin(this.blinkOffset) * 0.2 + 0.8;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha * twinkle})`;
        ctx.fill();
      }
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    }

    function initStars() {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push(new Star());
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, width, height);
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      requestAnimationFrame(animate);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX - width / 2;
      mouseY = e.clientY - height / 2;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-none"
    />
  );
}
