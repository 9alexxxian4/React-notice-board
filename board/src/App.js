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

// import useState hook
import { useState } from "react"; 





function Board() {
  const pageTitles = {
    '/': '공지사항',
    '/UsuallyQuestion': '자주 묻는 질문',
    '/ManToManQuestion': '1:1 문의'
  };

  const [selectedPage, setSelectedPage] = useState('');
  return (
    <>
      <ResetCSS />
      <BrowserRouter>
        <Header />
        <MoveToPage setSelectedPage={setSelectedPage} />
        <WriteBtn pageTitles={pageTitles} selectedPage={selectedPage}/>
        <Routes>
          <Route path="/" element={<List/>}/>
          <Route path="/UsuallyQuestion" element={<UsuallyQuestion/>}/>
          <Route path="/ManToManQuestion" element={<ManToManQuestion/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Board; 
