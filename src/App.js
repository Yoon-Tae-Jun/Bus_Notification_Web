import MenuTab from "./Tabs/Tab";
import TimeTable from "./TimeTable/Table";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./Navbar"

function App() {
 

  return (
      <BrowserRouter>
     <div>
      <Header/>
      <Routes>
          <Route path="/home" element={<MenuTab/>} />
          <Route path="/time" element={<TimeTable/>} />
        </Routes>
     </div>
     </BrowserRouter>
    );
}

export default App;
