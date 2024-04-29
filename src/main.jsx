import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthProvider from "./contexts/AuthProv";
const root = createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);