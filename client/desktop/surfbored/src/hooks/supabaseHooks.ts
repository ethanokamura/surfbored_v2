import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export function useAuthStatus() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setAuthenticated(!!session);
      setLoading(false);
    };

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthenticated(!!session);
    });

    checkSession();

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return { authenticated, loading };
}
