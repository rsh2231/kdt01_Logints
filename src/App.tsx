import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import Subway from "./components/Subway";
import TodoList from "./components/TodoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TstText from "./components/TstText";
import Lotto from "./components/Lotto";

function App() {
  return (
    <BrowserRouter>
    <div className="w-full xl:w-4/5 h-screen mx-auto
                  flex flex-col justify-start items-center">
      
      <Nav />
      <main className="w-full flex-grow flex flex-col items-center
                    overflow-y-auto">
      {/* 변경하고자 하는 부분에만 Routes 설정  */}
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/subway' element={<Subway />} />
            <Route path='/todolist' element={<TodoList />} />
            <Route path='/test' element={<TstText />} />
            <Route path='/lotto' element={<Lotto />} />
         </Routes>
      </main>

      <footer className="w-full h-24 min-h-24 flex justify-center items-center
                       bg-pink-100 shadow-lg text-gray-800 font-bold text-lg">
        [부산대학교 K-Digital] AI 데이터 분석 풀스택 웹 개발자 양성과정
      </footer>
    </div>
    </BrowserRouter>
  )
}

export default App;
