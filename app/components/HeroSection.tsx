"use client";
import React, { useEffect, useRef } from 'react';
import { Button } from "@nextui-org/react";

declare global {
    interface Window {
        TweenLite: any;
        Circ: any;
    }
}

interface Point {
    x: number;
    originX: number;
    y: number;
    originY: number;
    active?: number;
    circle?: Circle;
    closest?: Point[];
}

class Circle {
    pos: Point;
    radius: number;
    color: string;
    active: number;

    constructor(pos: Point, rad: number, color: string) {
        this.pos = pos || { x: 0, y: 0, originX: 0, originY: 0 };
        this.radius = rad || 0;
        this.color = color || '#000000';
        this.active = 0;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        if (!this.active) return;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(156,217,249,${this.active})`;
        ctx.fill();
    }
}

const HeroSection: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let width: number, height: number, largeHeader: HTMLDivElement, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D | null, points: Point[], target: Point, animateHeader = true;

        function initHeader(): void {
            width = window.innerWidth;
            height = window.innerHeight;
            target = { x: width / 2, y: height / 2, originX: width / 2, originY: height / 2 };

            largeHeader = headerRef.current!;
            largeHeader.style.height = `${height}px`;

            canvas = canvasRef.current!;
            canvas.width = width;
            canvas.height = height;
            ctx = canvas.getContext('2d');

            // create points
            points = [];
            for (let x = 0; x < width; x = x + width / 20) {
                for (let y = 0; y < height; y = y + height / 20) {
                    const px = x + Math.random() * width / 20;
                    const py = y + Math.random() * height / 20;
                    const p = { x: px, originX: px, y: py, originY: py };
                    points.push(p);
                }
            }

            // for each point find the 5 closest points
            for (let i = 0; i < points.length; i++) {
                const closest: Point[] = [];
                const p1 = points[i];
                for (let j = 0; j < points.length; j++) {
                    const p2 = points[j];
                    if (!(p1 === p2)) {
                        let placed = false;
                        for (let k = 0; k < 5; k++) {
                            if (!placed) {
                                if (closest[k] === undefined) {
                                    closest[k] = p2;
                                    placed = true;
                                }
                            }
                        }

                        for (let k = 0; k < 5; k++) {
                            if (!placed) {
                                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                    closest[k] = p2;
                                    placed = true;
                                }
                            }
                        }
                    }
                }
                p1.closest = closest;
            }

            // assign a circle to each point
            for (let i in points) {
                const c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
                points[i].circle = c;
            }
        }

        function addListeners(): void {
            if (!('ontouchstart' in window)) {
                window.addEventListener('mousemove', mouseMove);
            }
            window.addEventListener('scroll', scrollCheck);
            window.addEventListener('resize', resize);
        }

        function mouseMove(e: MouseEvent): void {
            let posx = 0;
            let posy = 0;
            if (e.pageX || e.pageY) {
                posx = e.pageX;
                posy = e.pageY;
            } else if (e.clientX || e.clientY) {
                posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }
            target.x = posx;
            target.y = posy;
        }

        function scrollCheck(): void {
            animateHeader = document.body.scrollTop <= height;
        }

        function resize(): void {
            width = window.innerWidth;
            height = window.innerHeight;
            largeHeader.style.height = `${height}px`;
            canvas.width = width;
            canvas.height = height;
        }

        function initAnimation(): void {
            animate();
            for (let i in points) {
                shiftPoint(points[i]);
            }
        }

        function animate(): void {
            if (animateHeader) {
                ctx!.clearRect(0, 0, width, height);
                for (let i in points) {
                    // detect points in range
                    if (Math.abs(getDistance(target, points[i])) < 4000) {
                        points[i].active = 0.3;
                        points[i].circle!.active = 0.6;
                    } else if (Math.abs(getDistance(target, points[i])) < 20000) {
                        points[i].active = 0.1;
                        points[i].circle!.active = 0.3;
                    } else if (Math.abs(getDistance(target, points[i])) < 40000) {
                        points[i].active = 0.02;
                        points[i].circle!.active = 0.1;
                    } else {
                        points[i].active = 0;
                        points[i].circle!.active = 0;
                    }

                    drawLines(points[i]);
                    points[i].circle!.draw(ctx!);
                }
            }
            requestAnimationFrame(animate);
        }

        function shiftPoint(p: Point): void {
            if (window.TweenLite) {
                window.TweenLite.to(p, 1 + 1 * Math.random(), {
                    x: p.originX - 50 + Math.random() * 100,
                    y: p.originY - 50 + Math.random() * 100,
                    ease: window.Circ.easeInOut,
                    onComplete: function () {
                        shiftPoint(p);
                    }
                });
            }
        }

        function drawLines(p: Point): void {
            if (!p.active) return;
            for (let i = 0; i < p.closest!.length; i++) {
                ctx!.beginPath();
                ctx!.moveTo(p.x, p.y);
                ctx!.lineTo(p.closest![i].x, p.closest![i].y);
                ctx!.strokeStyle = `rgba(156,217,249,${p.active})`;
                ctx!.stroke();
            }
        }

        function getDistance(p1: Point, p2: Point): number {
            return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
        }

        // Main
        initHeader();
        initAnimation();
        addListeners();

        // Cleanup function
        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('scroll', scrollCheck);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <div ref={headerRef} className="large-header relative flex flex-col items-center justify-center pb-[70px] min-h-screen text-white text-center px-4 sm:px-8 bg-[#000040] overflow-hidden">
            <canvas ref={canvasRef} id="demo-canvas"></canvas>
            <div className="relative z-10 mb-2">
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 ">
                    Your Product
                    <span className='bg-gradient-to-r from-[#F915D7] to-[#160062] bg-clip-text text-transparent '>
                        Engineering
                    </span>
                </h1>
                <p className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-2">+ Growth Marketing</p>
                <p className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-2">For Startups</p>
                <p className="text-base sm:text-lg lg:text-xl mb-6">Empowering startups with expert product engineering and growth strategies to launch, scale, and dominate the market.</p>
                <Button className="hero-button rounded-full shadow-2xl bg-[#F915D7]" color="primary" size="lg">
                    LET'S GET STARTED
                </Button>
            </div>
        </div>
    );
};

export default HeroSection;
