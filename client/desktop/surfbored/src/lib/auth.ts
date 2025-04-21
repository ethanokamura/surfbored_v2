import { supabase } from "./supabase"


export const sendOtp = async (phone: string) => {
  const { error } = await supabase.auth.signInWithOtp({
    phone,
  });

  if (error) {
    throw new Error(`Error sending OTP: ${error.message}`);
  }
}

export const verifyOtp = async (phone: string, token: string) => {
  const { data, error } = await supabase.auth.verifyOtp({
    phone,
    token,
    type: 'sms',
  });

  if (error) {
    throw new Error(`Error verifying OTP: ${error.message}`);
  }

  console.log('Logged in!', data.session);

  // Optionally store token for requests to backend
  const accessToken = data.session?.access_token;
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
  }
}

// Handle user logout
export const signOut = async() => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(`Error logging out: ${error.message}`);
  }
};

/**
 * 
 * Making Authenticated API Requests:
    const accessToken = localStorage.getItem('accessToken');

    const res = await fetch('http://localhost:3000/api/profile', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await res.text(); // or .json()
    console.log(data);

 * ✅ This will hit your backend, which uses the auth_middleware to verify the token and extract the user ID.
 */