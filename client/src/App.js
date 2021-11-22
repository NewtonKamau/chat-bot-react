import "./App.css";
import { BrowserRouter ,  Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Chat from "./components/Chat";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
