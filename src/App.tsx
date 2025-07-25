import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Jobs from "./pages/Jobs";
import JobDetailsPage from "./pages/JobDetailsPage";
import Profile from "./pages/Profile";

const App: React.FC = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Jobs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/:jobId" element={<JobDetailsPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;