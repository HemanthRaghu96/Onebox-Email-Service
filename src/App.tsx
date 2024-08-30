import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Onebox from "./pages/Onebox";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/onebox" element={<Onebox />} />
      </Routes>
    </>
  );
};

export default App;
