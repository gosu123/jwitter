import React, { useState } from "react";
import AppRouter from "./Router";
import {authService} from "../fbInstance";

function App() {
  console.log(authService.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn}/>
      <footer>&copy; Jwitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
