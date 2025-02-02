import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

const SignInwithGoogle = () => {
  const allowedDomain = "bitsathy.ac.in";

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if the email ends with the allowed domain
      if (!user.email.endsWith(`@${allowedDomain}`)) {
        toast.error(`Only ${allowedDomain} email addresses are allowed.`, {
          position: "bottom-center",
        });
        await auth.signOut(); // Sign out the user if the domain is invalid
        return;
      }

      // Store token, role, and email in localStorage
      localStorage.setItem("token", await user.getIdToken());
      localStorage.setItem("role", "user"); // Replace with actual role
      localStorage.setItem("email", user.email);

      // Redirect based on role
      if (localStorage.getItem("role") === "admin") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/user";
      }

      toast.success("User logged in successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.error(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <button onClick={handleGoogleSignIn} className="btn btn-google">
      Sign in with Google
    </button>
  );
};

export default SignInwithGoogle;