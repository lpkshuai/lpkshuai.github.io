"use client";
import { useState } from "react";

export default function GlassmorphismCard() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // 计算中心点偏移比例
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // 计算旋转角度 (最大旋转 15 度)
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative flex h-full w-full items-center justify-center bg-linear-to-br from-purple-900 to-black p-10"
      style={{ perspective: "1000px" }}
    >
      {/* 背景光斑 */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-purple-500 rounded-full filter blur-[100px] opacity-40" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cyan-500 rounded-full filter blur-[100px] opacity-40" />

      {/* 毛玻璃卡片 */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-[300px] h-[400px] rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md p-6 shadow-xl transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
          boxShadow: `${-rotation.y * 2}px ${rotation.x * 2}px 20px rgba(0,0,0,0.3)`,
        }}
      >
        {/* 卡片内容层 (拥有独立的 Z 轴高度) */}
        <div
          className="flex flex-col items-center justify-center h-full"
          style={{ transform: "translateZ(50px)" }}
        >
          <div className="w-20 h-20 rounded-full bg-linear-to-tr from-purple-400 to-cyan-400 mb-4 shadow-lg" />
          <h3 className="text-white font-bold text-xl mb-2">Neon User</h3>
          <p className="text-white/60 text-sm text-center">
            Hover me to see the 3D perspective effect.
          </p>
          <button className="mt-6 px-4 py-2 rounded bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition-colors">
            Confirm
          </button>
        </div>

        {/* 光泽层 (随旋转移动) */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${50 + rotation.y * 2}% ${50 - rotation.x * 2}%, rgba(255,255,255,0.2), transparent 60%)`,
          }}
        />
      </div>
    </div>
  );
}
