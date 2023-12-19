import Documentation from "./components/Documentation/Documentation";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/News/News";
import Pricing from "./components/Pricing/Pricing";
import Register from "./components/Register/register";
import Step2 from "./components/Register/Step2";
import Step3 from "./components/Register/Step3";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/news" element={<News />} />
          <Route path="/register/*" element={<Register />} />
          <Route path="/register/step2" element={<Step2 />} />
          <Route path="/register/step3" element={<Step3 />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
