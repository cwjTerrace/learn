import React from "react";
import ReactDOM from "react-dom";

import "./index.less";

interface SvgDemoProps {
  color: string;
}

function SvgDemo({ color }: SvgDemoProps) {
  return (
    <div style={{ "--stop-color": color } as React.CSSProperties} className="svg-demo">
      <svg
        height={"10em"}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient id="geek">
            <stop offset="0%" stopColor="currentColor" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="50%" />
          </linearGradient>
          <linearGradient id="geek1">
            <stop offset="50%" stopColor="currentColor" stopOpacity="50%" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
          <circle
            id="semi-circle"
            cx="50"
            cy="50"
            r="40"
            strokeWidth={20}
            strokeDasharray={`${Math.PI * 40} 1000`}
            fill="none"
          />
        </defs>

        <use href="#semi-circle" stroke="url('#geek')" />
        <use href="#semi-circle" stroke="url('#geek1')" transform="rotate(180)" style={{ transformOrigin: "center" }} />
      </svg>
    </div>
  );
}

export default SvgDemo;
