import Documentation from "./pages/Documentation/Documentation";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import News from "./pages/News/News";
import Register from "./pages/Register/Register";
import Step2 from "./pages/Register/Step2";
import Step3 from "./pages/Register/Step3";
import NotFound from "./pages/NotFound/NotFound";
import { useEffect, useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  useEffect(() => {
    const refresh_token = localStorage.getItem("refresh_token");
    if (!refresh_token) {
      setIsAuthenticated(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/docs" element={<Documentation />} />
        <Route path="/news" element={<News />} />
        <Route path="/register/*" element={isAuthenticated ? <Navigate to="/" /> : <Register />} />
        <Route path="/register/step2" element={isAuthenticated ? <Navigate to="/" /> : <Step2 />} />
        <Route path="/register/step3" element={isAuthenticated ? <Navigate to="/" /> : <Step3 />} />
        <Route path="/*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
