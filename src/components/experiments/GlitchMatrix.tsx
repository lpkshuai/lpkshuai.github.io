"use client";

export default function GlitchMatrix() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-black overflow-hidden">
      {/* 背景扫描线 */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,255,0.03)_2px,rgba(0,255,255,0.03)_4px)] pointer-events-none" />

      {/* 核心文字 */}
      <h1
        data-text="GLITCH"
        className="text-6xl md:text-8xl font-black tracking-widest text-white relative glitch-effect"
      >
        GLITCH
      </h1>

      {/* 内联 CSS 实现故障效果 */}
      <style jsx>{`
        .glitch-effect {
          text-shadow:
            2px 0 #ff00ff,
            -2px 0 #00ffff;
          animation: glitch-anim 3s infinite linear alternate-reverse;
        }

        .glitch-effect::before,
        .glitch-effect::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-effect::before {
          color: #0ff;
          z-index: -1;
          animation: glitch-top 2s infinite linear alternate-reverse;
          clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
        }

        .glitch-effect::after {
          color: #f0f;
          z-index: -2;
          animation: glitch-bottom 1.5s infinite linear alternate-reverse;
          clip-path: polygon(0 66%, 100% 66%, 100% 100%, 0 100%);
        }

        @keyframes glitch-top {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-3px, 3px);
          }
          40% {
            transform: translate(-3px, -3px);
          }
          60% {
            transform: translate(3px, 3px);
          }
          80% {
            transform: translate(3px, -3px);
          }
          100% {
            transform: translate(0);
          }
        }

        @keyframes glitch-bottom {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(3px, -3px);
          }
          40% {
            transform: translate(3px, 3px);
          }
          60% {
            transform: translate(-3px, -3px);
          }
          80% {
            transform: translate(-3px, 3px);
          }
          100% {
            transform: translate(0);
          }
        }
      `}</style>
    </div>
  );
}
