import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./MainContent";
import LoginScreen from "./screens/auth/LoginScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" Component={LoginScreen} />
          <Route path="/" Component={MainContent} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
