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
        <title>E LogBook - ITF Form</title>

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

        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-12">
              <h4 className="text-center">Industrial Training Fund</h4>
              <p className="text-center mb-0">Miango road, P.M.B 2199, Jos</p>

              <h5 className="text-decoration-underline text-center mb-5">
                STUDENTS INDUSTRIAL WORKEXPERIENCE SCHEME END OF YEAR PROGRAM
                REPORT SHEET
              </h5>

              <h6 className="fw-bold mb-3">
                PART A (TO BE COMPLETED BY THE STUDENT)
              </h6>
            </div>

            <div className="col-md-3">
              <b>1</b>
              <div className="row">
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
                  <label class="form-label" htmlFor="course">
                    Course of study
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="course"
                    required
                    placeholder="Course of study"
                  />
                </div>

                <div className="mb-3">
                  <label class="form-label" htmlFor="year">
                    Year of study
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="year"
                    required
                    placeholder="Year of study"
                  />
                </div>

                <div className="mb-3">
                  <label class="form-label" htmlFor="nameOfInt">
                    Name of institution
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameOfInt"
                    required
                    placeholder="Name of institution"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <b>2</b>
              <div className="row">
                <div className="mb-3">
                  <label class="form-label" htmlFor="nameOfCom">
                    Name of company/establishment
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameOfCom"
                    required
                    placeholder="Name of company/establishment"
                  />
                </div>

                <div className="mb-3">
                  <label class="form-label" htmlFor="address">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    required
                    placeholder="Address"
                  />
                </div>

                <div className="mb-3">
                  <label class="form-label" htmlFor="periodOfAttFrom">
                    Period of attachment <b>FROM</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="periodOfAttFrom"
                    required
                    placeholder="Period of attachment FROM"
                  />
                </div>

                <div className="mb-3">
                  <label class="form-label" htmlFor="periodOfAttTo">
                    Period of attachment <b>To</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="periodOfAttTo"
                    required
                    placeholder="Period of attachment To"
                  />
                </div>

                <div className="mb-3">
                  <label class="form-label" htmlFor="duration">
                    Duration
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="duration"
                    required
                    placeholder="Duration"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <b>3</b>
              <div className="row">
                <div className="mb-3">
                  <label class="form-label" htmlFor="outline">
                    Brief outline of experience of training provided
                  </label>
                  <textarea
                    style={{ height: 125 }}
                    type="text"
                    className="form-control"
                    id="outline"
                    required
                    placeholder="Brief outline"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <b>4</b>
              <div className="row">
                <div className="mb-3">
                  <label class="form-label" htmlFor="lastAtt">
                    Where were you attached last
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastAtt"
                    required
                    placeholder="Where were you attached last"
                  />
                </div>

                <div className="mb-3">
                  <label class="form-label" htmlFor="totalNum">
                    Total numbers of weeks engaged in industrial training
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="totalNum"
                    required
                    placeholder="Total numbers of weeks engaged in industrial training"
                  />
                </div>

                <div className="mb-3">
                  <label class="form-label" htmlFor="date">
                    Date
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="date"
                    required
                    placeholder="Date"
                  />
                </div>
              </div>
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
