import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Layout from "./Components/Layout/Layout";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import { UseAuthStore } from "./Store/authStore";
function App() {
  const authUser = UseAuthStore((state) => state.user);
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to={"/auth"} />}
          />
          <Route
            path="/auth"
            element={!authUser ? <Auth /> : <Navigate to={"/"} />}
          />
          <Route path="/:username" element={<ProfilePage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
