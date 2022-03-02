import React from "react";

import "./index.less";

interface SvgDemoProps {
  color: string;
}

function SvgDemo({ color }: SvgDemoProps) {
  return (
    <div style={{ "--stop-color": color } as React.CSSProperties} className="svg-demo">
      <p>css方案</p>
      <div className="circle">
        <div className="circle-left" />
        <div className="circle-right" />
        <div className="circle-inner" />
      </div>
      <div>
        <p>svg方案</p>
        <svg
          width="240"
          height="240"
          viewBox="0 0 240 240"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <linearGradient id="linear-gradient1">
              <stop offset="0%" stop-color="currentColor" />
              <stop offset="50%" stop-color="currentColor" stop-opacity="30%" />
            </linearGradient>
            <linearGradient id="linear-gradient2">
              <stop offset="50%" stop-color="currentColor" stop-opacity="30%" />
              <stop offset="100%" stop-color="currentColor" stop-opacity="0" />
            </linearGradient>
            <circle
              id="semi-circle"
              cx="120"
              cy="120"
              r="100"
              stroke-width="20"
              stroke-dasharray="314.15926 1000"
              fill="none"
            />
          </defs>
          <g>
            <use href="#semi-circle" stroke="url('#linear-gradient1')" />
            <use
              href="#semi-circle"
              stroke="url('#linear-gradient2')"
              style={{
                transform: "rotate(180deg)",
                transformOrigin: "center"
              }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default SvgDemo;
