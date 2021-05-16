import logo from './logo.svg';
import './App.css';

import React from "react";
import {useSelector, useDispatch} from "react-redux";

import { increment, decrement } from "./actions";
function App() {

  const counter = useSelector(state=>state.counter);
  const islogged = useSelector(state=>state.islogged);
  const dispatch = useDispatch();
  
  return (
    <div className="Ap2p">
      <header className="App-he2ader">
  <h1>counter {counter}</h1>
  <button onClick={()=>{dispatch(increment(5))}}>+</button>
  <button onClick={()=>{dispatch(decrement())}}>-</button>
  {islogged ? "yes aim logined" : ""}
       <h1>hello</h1>
      </header>
    </div>
  );
}

export default App;
