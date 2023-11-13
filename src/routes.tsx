import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "components/Layout";
import UserList from "pages/UserList/";
import UserDetail from "pages/UserDetail";

function AppRoutes(): React.ReactElement {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:userId" element={<UserDetail />} />
          <Route path="*" element={<Navigate to="/users" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRoutes;
