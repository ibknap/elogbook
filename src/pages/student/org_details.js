import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function OrgDetails() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="E LogBook" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/logo.png" />
        <meta name="author" content="E LogBook" />
        <title>E LogBook - Organization Details</title>

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
          <div className="row d-flex">
            <div className="col-md-6 mt-5">
              <h4 className="text-center mb-4">Organization Details</h4>

              <form className="row d-flex align-items-center">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label class="form-label" htmlFor="name">
                      Org Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                      placeholder="Org Name"
                    />
                  </div>

                  <div className="mb-3">
                    <label class="form-label" htmlFor="specialization">
                      Specialization
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="specialization"
                      required
                      placeholder="Specialization"
                    />
                  </div>

                  <div className="mb-3">
                    <label class="form-label" htmlFor="contact">
                      Contact
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="contact"
                      required
                      placeholder="Contact"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label class="form-label" htmlFor="address">
                      Address
                    </label>
                    <textarea
                      style={{ height: 125 }}
                      type="text"
                      className="form-control"
                      id="address"
                      required
                      placeholder="Address"
                    />
                  </div>

                  <div className="mb-3">
                    <label class="form-label" htmlFor="website">
                      Website
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="website"
                      required
                      placeholder="Website"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="col-md-6 mt-5">
              <h4 className="text-center mb-4">Industry-Based Supervisor</h4>

              <form className="row d-flex">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label class="form-label" htmlFor="supervisor">
                      Supervisor Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="supervisor"
                      required
                      placeholder="Supervisor Name"
                    />
                  </div>

                  <div className="mb-3">
                    <label class="form-label" htmlFor="contact">
                      Contact
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="contact"
                      required
                      placeholder="Contact"
                    />
                  </div>

                  <div className="mb-3">
                    <label class="form-label" htmlFor="rank">
                      Rank
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="rank"
                      required
                      placeholder="Rank"
                    />
                  </div>
                </div>

                <div className="col-md-6 text-center">
                  <div className="mb-3">
                    <img
                      src="/me.png"
                      alt="profile image"
                      className="shadow profile_img"
                      style={{ width: 200 }}
                    />
                  </div>

                  <div className="mb-3">
                    <label class="form-label" htmlFor="supervisorImg">
                      Supervisor Picture (optional)
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="supervisorImg"
                      placeholder="Supervisor Picture (optional)"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="col-12 mt-5 mb-2 text-center text-muted">
              <small>Copyrights © Habila David for MAU 2023</small>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
