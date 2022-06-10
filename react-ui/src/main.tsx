import React from "react";
import { createRoot } from "react-dom/client";
import Layout from "./layout";

import CodeEditor from "./components/CodeEditor";

const root = createRoot(document.getElementById("root")!);
root.render(
  <Layout>
    <CodeEditor />
  </Layout>
);
