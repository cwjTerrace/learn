import { createRoot } from "react-dom/client";

import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout";
// Pages
import Home from "./pages/home";
import StartTransitionDemo from "./pages/startTransitionDemo";
import SuspenseDemo from "./pages/suspenseDemo";
import Throttle from "./pages/throttle";
import CodeEditor from "./pages/codeEditor";
import Commission from "./pages/commission";

const root = createRoot(document.getElementById("root")!);

root.render(
  <Layout>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start-transition-demo" element={<StartTransitionDemo />} />
        <Route path="/suspense-demo" element={<SuspenseDemo />} />
        <Route path="/throttle" element={<Throttle />} />
        <Route path="/code-editor" element={<CodeEditor />} />
        <Route path="/commission" element={<Commission />} />
      </Routes>
    </HashRouter>
  </Layout>
);
