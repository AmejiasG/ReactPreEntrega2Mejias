import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
