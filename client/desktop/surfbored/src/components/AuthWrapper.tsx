import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStatus } from "@/hooks/supabaseHooks";

export default function AuthWrapper({ children }: { children: ReactNode }) {
  const { authenticated, loading } = useAuthStatus();

  if (loading) return <h1>Loading...</h1>;

  if (!authenticated) return <Navigate to="/signin" replace />;

  return <>{children}</>;
}
