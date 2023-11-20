import Link from "next/link";
import { useMediaQuery } from "@chakra-ui/react";
import { Menu } from "iconsax-react";
import { useAuth } from "@/firebase/fire_auth_context";
import { doc, onSnapshot } from "firebase/firestore";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { db } from "@/firebase/fire_config";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const { loading, authUser, logOut } = useAuth();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (authUser) {
      const userRef = doc(db, "users", authUser.email);
      const unsubscribe = onSnapshot(userRef, (doc) => {
        if (doc.exists()) setUser(doc.data());
        else toast.error("User not found");
      });
      return () => unsubscribe();
    }
  }, [authUser]);

  if (user && user.isStudent && authUser) {
    return (
      <nav className="navbar navbar-expand-md navbar-light p-0 bg-primary">
        <div className="container-fluid ps-0">
          <Link
            className="navbar-brand bg-white d-flex pe-2 align-items-center"
            href="/"
          >
            <img src="/logo.png" width={isMobile ? 60 : 100} alt="logo" />

            {!isMobile ? (
              <div>
                <h5 className="text-primary">
                  MODIBBO ADAMA
                  <br />
                  UNIVERSITY, YOLA
                </h5>
                <small className="fw-light">Established in 1981</small>
              </div>
            ) : (
              <div>
                <h6 className="text-primary">
                  MODIBBO ADAMA
                  <br />
                  UNIVERSITY, YOLA
                </h6>
                <small className="fw-light">Established in 1981</small>
              </div>
            )}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Menu size={28} className="text-white border-light" />
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link text-white" href="/student/student_bio">
                  Student Bio
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" href="/student/e_logbook">
                  E-LogBook
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  href="/student/org_details"
                >
                  Org Details
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" href="/student/itf_form">
                  ITF Form
                </Link>
              </li>

              <li className="nav-item">
                <button className="nav-link text-danger" onClick={logOut}>
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  if (user && user.isSupervisor && authUser) {
    return (
      <nav className="navbar navbar-expand-md navbar-light p-0 bg-primary">
        <div className="container-fluid ps-0">
          <Link
            className="navbar-brand bg-white d-flex pe-2 align-items-center"
            href="/"
          >
            <img src="/logo.png" width={isMobile ? 60 : 100} alt="logo" />

            {!isMobile ? (
              <div>
                <h5 className="text-primary">
                  MODIBBO ADAMA
                  <br />
                  UNIVERSITY, YOLA
                </h5>
                <small className="fw-light">Established in 1981</small>
              </div>
            ) : (
              <div>
                <h6 className="text-primary">
                  MODIBBO ADAMA
                  <br />
                  UNIVERSITY, YOLA
                </h6>
                <small className="fw-light">Established in 1981</small>
              </div>
            )}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Menu size={28} className="text-white border-light" />
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  href="/supervisor/profile"
                >
                  Profile
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  href="/supervisor/manage_students"
                >
                  Manage Students
                </Link>
              </li>

              <li className="nav-item">
                <button className="nav-link text-danger" onClick={logOut}>
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar navbar-expand-md navbar-light p-0 bg-primary">
      <div className="container-fluid ps-0">
        <Link
          className="navbar-brand bg-white d-flex pe-2 align-items-center"
          href="/"
        >
          <img src="/logo.png" width={isMobile ? 60 : 100} alt="logo" />

          {!isMobile ? (
            <div>
              <h5 className="text-primary">
                MODIBBO ADAMA
                <br />
                UNIVERSITY, YOLA
              </h5>
              <small className="fw-light">Established in 1981</small>
            </div>
          ) : (
            <div>
              <h6 className="text-primary">
                MODIBBO ADAMA
                <br />
                UNIVERSITY, YOLA
              </h6>
              <small className="fw-light">Established in 1981</small>
            </div>
          )}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Menu size={28} className="text-white border-light" />
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link text-white" href="/signin">
                Student Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" href="/signin">
                Industry-Based Supervisor
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" href="/signin">
                Institution Supervisor
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" href="/signin">
                ITF Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" href="/signin">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
