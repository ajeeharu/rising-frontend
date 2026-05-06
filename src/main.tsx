import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes"; // 作成したルートを読み込む
import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <BrowserRouter basename="/">
      <AppRoutes />
    </BrowserRouter>
  </AuthProvider>
);