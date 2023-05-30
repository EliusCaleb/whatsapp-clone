import React from "react";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="app">
      <h1>Hello</h1>
      <div className="app_body">
        {/*sidebar*/}
        <Router>
        <Sidebar/>
          <Routes>    
            <Route path="/rooms/:roomId" element={<Chat/>}/>
             <Route path="/" element={<Chat/>} /> 
          </Routes>
        </Router>
      </div>
    </div>
  );
}

// function AppContainer() {
//   return (
//     <>
//       <Sidebar />
//       <Chat />
//     </>
//   );
// }


export default App;
