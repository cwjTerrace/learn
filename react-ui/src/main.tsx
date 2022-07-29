import { createRoot } from "react-dom/client";

import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout";
// Pages
import Home from "./pages/home";
import StartTransitionDemo from "./pages/startTransitionDemo";

const root = createRoot(document.getElementById("root")!);

root.render(
  <Layout>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start-transition-demo" element={<StartTransitionDemo />} />
      </Routes>
    </HashRouter>
  </Layout>
);
