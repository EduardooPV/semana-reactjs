import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/pages/Home";
import Links from "../src/pages/Links";
import NotFound from '../src/pages/NotFound'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
