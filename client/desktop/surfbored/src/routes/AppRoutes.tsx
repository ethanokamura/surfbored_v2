import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import AuthFlow from "@/pages/auth/AuthFlow";
import AuthWrapper from "@/components/AuthWrapper";
import CreateBoard from "@/pages/boards/CreateBoard";
import ExplorePage from "@/pages/user/Explore";
import FavoritesPage from "@/pages/user/Favorites";
import UserDashboard from "@/pages/user/Dashboard";
import FriendsPage from "@/pages/user/Friends";

function ProtectedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/boards/create" element={<CreateBoard />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/friends" element={<FriendsPage />} />
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

