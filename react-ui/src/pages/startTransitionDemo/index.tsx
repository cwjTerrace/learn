import React, { useState, useTransition, startTransition } from "react";
import CodeEditor from "../../components/CodeEditor";
import Pythagoras from "../../components/Pythagoras";

import "./index.less";

function StartTransitionDemo() {
  const svg = {
    width: 1280,
    height: 600
  };
  const baseWidth = 80;
  const heightFactor = 0.4;
  const maxTreeSize = 22;

  // we split state in two so we can update
  // visuals and inputs separately
  const [treeSizeInput, setTreeSizeInput] = useState(8);
  const [treeSize, setTreeSize] = useState(8);

  const [treeLeanInput, setTreeLeanInput] = useState(0);
  const [treeLean, setTreeLean] = useState(0);
  const [isLeaning, startLeaning] = useTransition();

  const [enableStartTransition, setEnableStartTransition] = useState(false);
  const [enableSlowdown, setEnableSlowdown] = useState(false);

  function changeTreeSize(event: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(event.target.value);
    setTreeSizeInput(value); // update input

    // update visuals
    if (enableStartTransition) {
      startTransition(() => {
        setTreeSize(value);
      });
    } else {
      setTreeSize(value);
    }
  }

  function changeTreeLean(event: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(event.target.value);
    setTreeLeanInput(value); // update input

    // update visuals
    if (enableStartTransition) {
      startLeaning(() => {
        setTreeLean(value);
      });
    } else {
      setTreeLean(value);
    }
  }

  function toggleStartTransition(event: React.ChangeEvent<HTMLInputElement>) {
    setEnableStartTransition(event.target.checked);
  }

  function toggleSlowdown(event: React.ChangeEvent<HTMLInputElement>) {
    setEnableSlowdown(event.target.checked);
  }

  return (
    <>
      <div className="start-transition-demo">
        <div className="header" style={{ marginBottom: "1rem" }}>
          <h2 style={{ marginTop: "-0.2rem" }}>
            这是一棵倾斜的毕达哥拉斯树
            <br />
            <small>{Number(2 ** treeSize - 1).toLocaleString()} 方块</small>
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: "1.2em" }}>
            <label>
              Use startTransition
              <br />
              <input type="checkbox" checked={enableStartTransition} onChange={toggleStartTransition} />
            </label>
          </div>
          <div>
            <label>Lean the tree:</label>
            <br />
            <input
              type="range"
              value={treeLeanInput}
              onChange={changeTreeLean}
              min="-0.5"
              max="0.5"
              step="0.05"
              style={{ width: svg.width / 3 }}
            />
          </div>
          <div>
            <label>
              让每个方块阻塞线程0.1ms
              <br />
              <input type="checkbox" checked={enableSlowdown} onChange={toggleSlowdown} />
            </label>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: 130 }}>
            <label>
              种树
              <br />
              越大越慢
            </label>
            <input
              type="range"
              value={treeSizeInput}
              onChange={changeTreeSize}
              min="0"
              max={maxTreeSize}
              step="1"
              style={{
                transform: `rotate(-90deg) translate(-${svg.height / 2}px, -90px)`,
                width: svg.height / 2
              }}
            />
          </div>

          <svg
            width={svg.width}
            height={svg.height}
            className={isLeaning ? "pending" : "done"}
            style={{
              border: "1px solid lightgray",
              width: 1280
            }}
          >
            <Pythagoras
              enableSlowdown={enableSlowdown}
              w={baseWidth}
              heightFactor={heightFactor}
              lean={-treeLean}
              x={svg.width / 2 - 40}
              y={svg.height - baseWidth}
              lvl={0}
              maxlvl={treeSize}
              left={null}
              right={null}
            />
          </svg>
        </div>
        <div className="explanation">
          <h1>这个Demo展示了什么？</h1>
          <p>
            演示向您展示了当每个状态更改更新1,000,000多个节点时发生的情况。左边的滑块增长
            树让问题变得更糟，呈指数增长。顶部的滑块倾斜树，更新每个节点。用它来看看 :会发生什么)
          </p>
          <p>
            切换“Use startTransition”复选框，比较使用和不使用新特性的行为。您应该看到，没有'
            startTransition'。当启用它时，紧急输入更新发生得很快 缓慢的分形更新之后。
          </p>
          <p>如果没有看到慢速，则启用人为的0.1ms延迟。</p>
        </div>

        <a href="https://react-fractals-git-react-18-swizec.vercel.app/">查看原地址</a>
      </div>
      <CodeEditor style={{ flexBasis: 800 }} />
    </>
  );
}

export default StartTransitionDemo;
