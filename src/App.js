import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import DisplayData from "./components/DisplayData";

function App() {
  return (
    <div className="bg-gray-100">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/display" element={<DisplayData />} />
      </Routes>
    </div>
  );
}

export default App;
