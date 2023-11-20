import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

const date = `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`;

export default function StudentBio() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="E LogBook" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/logo.png" />
        <meta name="author" content="E LogBook" />
        <title>E LogBook - Student Bio</title>

        <meta property="og:title" content="E LogBook By David" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:image:width" content="1277" />
        <meta property="og:image:height" content="473" />
        <meta property="og:url" content="/" />
        <meta property="og:description" content="E LogBook" />
        <meta property="og:site_name" content="E LogBook" />
      </Head>

      <main className={inter.className}>
        <Navbar />

        <div className="spacer" />

        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-4 text-center mt-5">
              <img
                src="/me.png"
                alt="profile image"
                className="shadow profile_img"
              />
            </div>

            <div className="col-md-8 mt-5">
              <form className="row d-flex align-items-center">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label class="form-label" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="mb-3">
                    <label class="form-label" htmlFor="matricNo">
                      Matric Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="matricNo"
                      required
                      placeholder="Matric Number"
                    />
                  </div>

                  <div className="mb-3">
                    <label class="form-label" htmlFor="department">
                      Department
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="department"
                      required
                      placeholder="Department"
                    />
                  </div>

                  <div className="mb-3">
                    <label class="form-label" htmlFor="faculty">
                      Faculty
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="faculty"
                      required
                      placeholder="Faculty"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label class="form-label" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      required
                      placeholder="Phone Number"
                    />
                  </div>

                  <div className="mb-3">
                    <label class="form-label" htmlFor="email">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                      placeholder="name@example.com"
                    />
                  </div>

                  <div className="mb-3">
                    <label class="form-label" htmlFor="supervisor">
                      Supervisor
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="supervisor"
                      required
                      placeholder="Supervisor"
                    />
                  </div>

                  <div>
                    <label class="form-label" htmlFor="date">
                      Date
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="date"
                      disabled
                      placeholder={date}
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="col-12 mt-5 mb-2 text-center text-muted">
              <small>Copyrights © Habila David for MAUTECH 2023</small>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
