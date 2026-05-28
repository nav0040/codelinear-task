"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { preloaderEase } from "./preloader.motion";

interface StreamDef {
  id: number;
  d: string;
  delay: number;
  duration: number;
}

function buildStreams(): StreamDef[] {
  return [
    { id: 0, d: "M-20 120 Q 180 100 420 140", delay: 0.6, duration: 3.2 },
    { id: 1, d: "M-40 280 Q 200 260 440 300", delay: 0.9, duration: 3.6 },
    { id: 2, d: "M500 80 Q 320 120 100 100", delay: 0.75, duration: 3.4 },
    { id: 3, d: "M520 340 Q 300 300 80 320", delay: 1.1, duration: 3.8 },
    { id: 4, d: "M200 -20 Q 220 180 240 420", delay: 0.85, duration: 3.5 },
    { id: 5, d: "M360 440 Q 340 240 320 40", delay: 1.2, duration: 3.7 },
    { id: 6, d: "M-10 200 L 420 220", delay: 1.4, duration: 2.9 },
    { id: 7, d: "M80 460 L 360 60", delay: 1.0, duration: 3.3 },
  ];
}

export function PreloaderDataStreams() {
  const streams = useMemo(() => buildStreams(), []);

  return (
    <div className="preloader__streams" aria-hidden>
      <svg
        className="preloader__streams-svg"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="preloader-stream-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0)" />
            <stop offset="45%" stopColor="rgba(96, 165, 250, 0.55)" />
            <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
          </linearGradient>
        </defs>

        {streams.map((stream) => (
          <motion.path
            key={stream.id}
            d={stream.d}
            stroke="url(#preloader-stream-grad)"
            strokeWidth="0.75"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1],
              opacity: [0, 0.35, 0.12],
            }}
            transition={{
              pathLength: {
                duration: stream.duration,
                delay: stream.delay,
                ease: preloaderEase,
                repeat: Infinity,
                repeatDelay: 1.8,
              },
              opacity: {
                duration: stream.duration,
                delay: stream.delay,
                ease: preloaderEase,
                repeat: Infinity,
                repeatDelay: 1.8,
              },
            }}
          />
        ))}

        {[
          { cx: 120, cy: 140, delay: 1.3 },
          { cx: 280, cy: 200, delay: 1.6 },
          { cx: 200, cy: 300, delay: 1.9 },
          { cx: 340, cy: 120, delay: 2.1 },
        ].map((node) => (
          <motion.circle
            key={`${node.cx}-${node.cy}`}
            cx={node.cx}
            cy={node.cy}
            r="2"
            fill="rgba(186, 230, 253, 0.85)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.7, 0.25, 0.6, 0.2],
              scale: [0, 1, 0.8, 1.1, 0.9],
            }}
            transition={{
              duration: 4,
              delay: node.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
