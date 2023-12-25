import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Layout from "./Components/Layout/Layout";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/:username" element={<ProfilePage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
