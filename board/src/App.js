// import components
import Header from "./components/header";
import ResetCSS from "./components/resetCSS";
import List from "./components/list";
import MoveToPage from "./components/moveToPage";
import WriteBtn from "./components/writeBtn";

// import pages
import ManToManQuestion from "./pages/ManToManQuestion";
import UsuallyQuestion from "./pages/UsuallyQuestion";

// import router
import { BrowserRouter, Route, Routes } from "react-router-dom";


function Board() {
  return (
    <>
      <ResetCSS />
      <BrowserRouter>
        <Header />
        <MoveToPage />
        <WriteBtn />
        <Routes>
          <Route path="/" element={<List/>}/>
          <Route path="/UsuallyQuestion" element={<UsuallyQuestion/>}/>
          <Route path="/ManToManQuestion" element={<ManToManQuestion/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Board; 
