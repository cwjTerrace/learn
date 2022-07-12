import { createRoot } from "react-dom/client";

import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout";
// Pages
import Home from "./pages/home";

const root = createRoot(document.getElementById("root")!);

root.render(
  <Layout>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  </Layout>
);

// root.render(
//   <Layout>
//     <Home />
//   </Layout>
// );
