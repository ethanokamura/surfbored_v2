import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import AuthFlow from "@/pages/auth/AuthFlow";
import AuthWrapper from "@/components/AuthWrapper";

function ProtectedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

const AppRoutes = () => {
  return (
    <Routes>
      {/** signin */}
      <Route path="/signin" element={<AuthFlow />} />
      {/** protected routes */}
      <Route path="/*" element={
        <AuthWrapper>
          <ProtectedRoutes />
        </AuthWrapper>
      } />
    </Routes>
  );
};

export default AppRoutes;

