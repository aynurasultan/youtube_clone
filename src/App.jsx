import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/feed";
import Detail from "./pages/detail";
import Results from "./pages/results";
import Header from "./components/header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/watch" element={<Detail />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
