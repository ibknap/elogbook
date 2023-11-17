import Link from "next/link";
import { useMediaQuery } from "@chakra-ui/react";
import { Menu } from "iconsax-react";

export default function Navbar() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

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
              <Link className="nav-link text-white" href="/student_dashboard">
                Student Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-white"
                href="/industry_based_supervisor"
              >
                Industry-Based Supervisor
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-white"
                href="/institution_supervisor"
              >
                Institution Supervisor
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" href="/itf_dashboard">
                ITF Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" href="/admin">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
