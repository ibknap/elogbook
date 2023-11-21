import Link from "next/link";
import Cookies from "js-cookie";
import { useAuth } from "@/firebase/fire_auth_context";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Information } from "iconsax-react";
import { db } from "@/firebase/fire_config";
import { doc, getDoc } from "firebase/firestore";

export default function Signin() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, authUser, signIn, logOut } = useAuth();
  const router = useRouter();

  const onSignin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await signIn(email, password)
      .then((_) => {
        getDoc(doc(db, "users", email))
          .then(async (doc) => {
            if (doc.exists()) {
              const user = doc.data();
              if (user.isAdmin) {
                Cookies.set("ElogBookSignIn", true, {
                  expires: 14,
                });
                toast.dark("Welcome admin");
                router.push("/");
              } else if (user.isSupervisor) {
                Cookies.set("ElogBookSignIn", true, {
                  expires: 14,
                });
                toast.dark("Welcome supervisor");
                router.push("/supervisor/manage_students");
              } else if (user.isStudent) {
                Cookies.set("ElogBookSignIn", true, {
                  expires: 14,
                });
                toast.dark("Welcome student");
                router.push("/student/student_bio");
              } else {
                toast.dark("User has no access", { className: "text-danger" });
                logOut();
              }
            } else
              toast.dark("User does not exist", { className: "text-danger" });
          })
          .catch((error) => {
            toast.dark(`Error: ${error.message}`, { className: "text-danger" });
          })
          .finally((_) => setIsLoading(false));
      })
      .catch((error) => {
        if (error.code === "auth/invalid-login-credentials") {
          toast.dark("Invalid sign in credentials", {
            className: "text-danger",
          });
        } else if (error.code === "auth/too-many-requests") {
          toast.dark("Too many requests", {
            className: "text-danger",
          });
        } else {
          toast.dark(`Error: ${error.message}`, {
            className: "text-danger",
          });
        }
      })
      .finally((_) => setIsLoading(false));
  };

  if (authUser && Cookies.get("ElogBookSignIn")) {
    return (
      <div className="d-flex align-items-center vh-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6 text-primary text-center">
              <Information size={200} />
              <p>You logged in already.</p>

              <hr />

              <div className="d-flex justify-content-center">
                <Link
                  href="/"
                  className="btn btn-dark bg-primary border-0 w-50"
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex vh-100 text-center">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto" />

        <div className="row justify-content-center">
          <Link href="/">
            <img src="/logo.png" width={150} alt="logo" />
          </Link>

          <h4 className="mt-3">E-LogBook Sign In</h4>

          <form className="col-md-4 text-start mt-5" onSubmit={onSignin}>
            <div className="mb-3">
              <label className="form-label" htmlhtmlFor="emailAddress">
                Email address
              </label>
              <input
                type="email"
                required
                className="form-control cus-form-control"
                id="emailAddress"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="form-label" htmlhtmlFor="password">
                Password
              </label>
              <input
                type="password"
                required
                className="form-control cus-form-control"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-dark bg-primary border-0 w-100"
            >
              {isLoading ? "Signing..." : "Sign In"}
            </button>
          </form>
        </div>

        <footer className="mt-auto text-muted" />
      </div>
    </div>
  );
}
