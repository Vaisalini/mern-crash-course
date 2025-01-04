
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import {Route ,Routes} from "react-router-dom";

function App(){
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<CreatePage/>}/>
      </Routes>
    </>
  );
}
export default App;