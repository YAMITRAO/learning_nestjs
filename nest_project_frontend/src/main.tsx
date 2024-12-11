// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { UserContexProvider } from "./context/UserContext.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <UserContexProvider>
    <App />
  </UserContexProvider>

  // </StrictMode>,
);
