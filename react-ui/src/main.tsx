import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout";
// Pages
import Home from "./pages/home";

const root = createRoot(document.getElementById("root")!);

root.render(
  <Layout>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </Layout>
);

// root.render(
//   <Layout>
//     <Home />
//   </Layout>
// );
