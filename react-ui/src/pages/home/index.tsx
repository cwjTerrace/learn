import { useRef } from "react";
import CodeEditor from "../../components/CodeEditor";

function HomePage() {
  const editRef = useRef<HTMLDivElement>(null);
  return (
    <div className="home-page">
      <CodeEditor ref={editRef} />
    </div>
  );
}

export default HomePage;
