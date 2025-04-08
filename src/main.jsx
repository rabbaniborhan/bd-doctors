import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AdminContextProvider from "../../admin/src/context/AdminContext";
import DoctorContextProvider from "../../admin/src/context/DoctorContext";
import { App } from "./App";
import AppContextProvider from "./context/AppContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AdminContextProvider>
      <DoctorContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </DoctorContextProvider>
    </AdminContextProvider>
  </BrowserRouter>
);
