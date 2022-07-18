import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route, Inde } from "react-router-dom";
import Home from './Home';
import Layout from "./components/Layout";
import AddUser from "./AddUser";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <IndexRoute component={Home} /> */}
          <Route index element={<Home />} />
          <Route path="/addUsers" element={<AddUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
    );
  }
}

export default App;
