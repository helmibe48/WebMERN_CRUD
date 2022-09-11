import {BrowserRouter, Routes, Route} from "react-router-dom";
import DataList from "./components/DataList";
import AddData from "./components/AddData";
import EditData from "./components/EditData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataList/>}/>
        <Route path="add" element={<AddData/>}/>
        <Route path="edit/:id" element={<EditData/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;