import {BrowserRouter, Routes, Route} from "react-router-dom";
import DataList from "./components/DataList";
import AddData from "./components/AddData";
import EditData from "./components/EditData";
import Coba from "./components/Coba";
import CompareData from "./components/CompareData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataList/>}/>
        <Route path="add" element={<AddData/>}/>
        <Route path="edit/:id" element={<EditData/>}/>
        <Route path="coba" element={<Coba/>}/>
        <Route path="compare" element={<CompareData/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;