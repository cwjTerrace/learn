import React, { useEffect, useRef } from "react";

// 核心文件
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript"; // 代码高亮必须引入

// 主题
import "codemirror/theme/abcdef.css";

// 代码错误检查
import "codemirror/addon/lint/lint.css";
import "codemirror/addon/lint/lint";
import "codemirror/addon/lint/javascript-lint";

import "./index.less";

interface SvgDemoProps {
  color: string;
}

function CodeEditor({ color }: SvgDemoProps) {
  const textareaRef = useRef(null);

  useEffect(() => {
    console.log(textareaRef.current);
    const editor = CodeMirror.fromTextArea(textareaRef.current!, {
      mode: "javascript",
      theme: "abcdef", // 主日样式
      lint: true,
      tabSize: 2,
      smartIndent: true, // 是否智能缩进
      lineNumbers: true, // 显示行号
      gutters: ["CodeMirror-lint-markers"],
      lineWrapping: true // 自动换行
    });

    editor.setValue(__CODE__);
  }, []);

  return (
    <div className="code-editor">
      <textarea ref={textareaRef}></textarea>
    </div>
  );
}

export default CodeEditor;
