"use client";

export default function NeonPulse() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-black">
      <h1
        className="text-6xl font-bold text-white"
        style={{
          textShadow: `
          0 0 5px #fff,
          0 0 10px #fff,
          0 0 20px #ff00de,
          0 0 40px #ff00de
        `,
          animation: "flicker 1.5s infinite alternate",
        }}
      >
        NEON
      </h1>

      {/* 内联关键帧动画 */}
      <style jsx>{`
        @keyframes flicker {
          0%,
          19%,
          21%,
          23%,
          25%,
          54%,
          56%,
          100% {
            text-shadow:
              0 0 5px #fff,
              0 0 10px #fff,
              0 0 20px #ff00de;
            opacity: 1;
          }
          20%,
          24%,
          55% {
            text-shadow: none;
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
