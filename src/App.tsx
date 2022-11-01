import React from 'react';

import './App.css';
import {Link,Route,Routes} from "react-router-dom";

import Home from "./home";
import Users from "./users";
function App() {
  return (
<>
    <ul>
      <li>
         <Link to="/">Anasayfa</Link>
      </li>
      <li>
         <Link to="/users">Kullanıcılar</Link>
      </li>

    </ul>


     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<Users/>}/>
     </Routes>
</>
  );
}

export default App;
