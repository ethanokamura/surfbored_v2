import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import AuthFlow from "@/pages/auth/AuthFlow";
import AuthWrapper from "@/components/AuthWrapper";
import CreateBoard from "@/pages/boards/CreateBoard";

function ProtectedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/boards/create" element={<CreateBoard />} />
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

