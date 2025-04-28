import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.tsx";
import TodosContextProvider from "./contexts/TodosContextProvider.tsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <KindeProvider
      clientId="f93e8523974342499c0d9d3a57e60a58"
      domain="https://atodos.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173"
    >

      <TodosContextProvider>
        <App />
      </TodosContextProvider>
     
    </KindeProvider>
  </StrictMode>
);
