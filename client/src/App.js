
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Box } from "@mui/material";
import DataProvider from "./context/DataProvider";
import DetailView from "./components/details/DetailView";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./components/Cart/Cart";



function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Header />
        <Box style={{ marginTop: "54px" }} >
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product/:id" element={<DetailView />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
              
            
          </Routes>
        </Box>

      </DataProvider>
    </BrowserRouter>


  );
}

export default App;
