import { Routes, Route, BrowserRouter } from "react-router-dom";

import IndexPage from "./pages/indexPage";
import { Footer, Header } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<IndexPage />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
