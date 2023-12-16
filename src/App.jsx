import Documentation from "./components/Documentation/Documentation";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/News/News";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;