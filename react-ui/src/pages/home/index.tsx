import { useRef } from "react";
import CodeEditor from "../../components/CodeEditor";
import MemoTest from "../../components/MemoTest";

function HomePage() {
  const editRef = useRef<HTMLDivElement>(null);
  return (
    <div className="home-page">
      <CodeEditor ref={editRef} />
      <MemoTest />
    </div>
  );
}

export default HomePage;
