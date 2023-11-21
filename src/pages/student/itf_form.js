import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useAuth } from "@/firebase/fire_auth_context";
import { db } from "@/firebase/fire_config";
import { toast } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export default function OrgDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [matricNo, setMatricNo] = useState("");
  const [courseOfStudy, setCourseOfStudy] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState("");
  const [institution, setInstitution] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [periodFrom, setPeriodFrom] = useState("");
  const [periodTo, setPeriodTo] = useState("");
  const [duration, setDuration] = useState("");
  const [outline, setOutline] = useState("");
  const [lastAttached, setLastAttached] = useState("");
  const [numberOfTraining, setNumberOfTraining] = useState("");
  const [date, setDate] = useState("");
  const { authUser } = useAuth();

  useEffect(() => {
    if (authUser) {
      const userRef = doc(db, "users", authUser.email);

      const unsubscribe = onSnapshot(userRef, (snapshot) => {
        if (snapshot.exists()) setUser(snapshot.data());
        else toast.dark("Student not found", { className: "text-danger" });
      });

      return () => unsubscribe();
    }
  }, [authUser]);

  const updateItf = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const collRef = collection(db, "users");
    const docRef = doc(collRef, authUser.email);
    const dataToUpdate = {
      itf: {
        name: name.length === 0 && user && user.itf ? user.itf.name : name,
        matricNo:
          matricNo.length === 0 && user && user.itf
            ? user.itf.matricNo
            : matricNo,
        courseOfStudy:
          courseOfStudy.length === 0 && user && user.itf
            ? user.itf.courseOfStudy
            : courseOfStudy,
        yearOfStudy:
          yearOfStudy.length === 0 && user && user.itf
            ? user.itf.yearOfStudy
            : yearOfStudy,
        institution:
          institution.length === 0 && user && user.itf
            ? user.itf.institution
            : institution,
        company:
          company.length === 0 && user && user.itf ? user.itf.company : company,
        address:
          address.length === 0 && user && user.itf ? user.itf.address : address,
        periodFrom:
          periodFrom.length === 0 && user && user.itf
            ? user.itf.periodFrom
            : periodFrom,
        periodTo:
          periodTo.length === 0 && user && user.itf
            ? user.itf.periodTo
            : periodTo,
        duration:
          duration.length === 0 && user && user.itf
            ? user.itf.duration
            : duration,
        outline:
          outline.length === 0 && user && user.itf ? user.itf.outline : outline,
        lastAttached:
          lastAttached.length === 0 && user && user.itf
            ? user.itf.lastAttached
            : lastAttached,
        numberOfTraining:
          numberOfTraining.length === 0 && user && user.itf
            ? user.itf.numberOfTraining
            : numberOfTraining,
        date: date.length === 0 && user && user.itf ? user.itf.date : date,
      },
    };

    updateDoc(docRef, dataToUpdate)
      .then(() => {
        e.target.reset();
        toast.dark("ITF form updated");
      })
      .catch((error) => {
        if (error.code == "not-found") {
          toast.dark("Student not found", { className: "text-danger" });
        } else {
          toast.dark(`Error occured: ${error.message}`, {
            className: "text-danger",
          });
        }
      })
      .finally(() => setIsLoading(false));
  };

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
          <form onSubmit={updateItf} className="row justify-content-center">
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
                  <label className="form-label" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder={user && user.itf ? user.itf.name : "Full Name"}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="matricNo">
                    Matric Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="matricNo"
                    placeholder={
                      user && user.itf ? user.itf.matricNo : "Matric number"
                    }
                    onChange={(e) => setMatricNo(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="course">
                    Course of study
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="course"
                    placeholder={
                      user && user.itf
                        ? user.itf.courseOfStudy
                        : "Course of study"
                    }
                    onChange={(e) => setCourseOfStudy(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="year">
                    Year of study
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="year"
                    placeholder={
                      user && user.itf ? user.itf.yearOfStudy : "Year of study"
                    }
                    onChange={(e) => setYearOfStudy(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="nameOfInt">
                    Name of institution
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameOfInt"
                    placeholder={
                      user && user.itf
                        ? user.itf.institution
                        : "Name of institution"
                    }
                    onChange={(e) => setInstitution(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <b>2</b>
              <div className="row">
                <div className="mb-3">
                  <label className="form-label" htmlFor="nameOfCom">
                    Name of company/establishment
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameOfCom"
                    placeholder={
                      user && user.itf
                        ? user.itf.company
                        : "Name of company/establishment"
                    }
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="address">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder={
                      user && user.itf ? user.itf.address : "Address"
                    }
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="periodOfAttFrom">
                    Period of attachment <b>FROM</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="periodOfAttFrom"
                    placeholder={
                      user && user.itf ? user.itf.periodFrom : "Day/Month/Year"
                    }
                    onChange={(e) => setPeriodFrom(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="periodOfAttTo">
                    Period of attachment <b>To</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="periodOfAttTo"
                    placeholder={
                      user && user.itf ? user.itf.periodTo : "Day/Month/Year"
                    }
                    onChange={(e) => setPeriodTo(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="duration">
                    Duration
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="duration"
                    placeholder={
                      user && user.itf ? user.itf.duration : "Duration"
                    }
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <b>3</b>
              <div className="row">
                <div className="mb-3">
                  <label className="form-label" htmlFor="outline">
                    Brief outline of experience of training provided
                  </label>
                  <textarea
                    style={{ height: 125 }}
                    type="text"
                    className="form-control"
                    id="outline"
                    placeholder={
                      user && user.itf ? user.itf.outline : "Brief outline"
                    }
                    onChange={(e) => setOutline(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <b>4</b>
              <div className="row">
                <div className="mb-3">
                  <label className="form-label" htmlFor="lastAtt">
                    Where were you attached last
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastAtt"
                    placeholder={
                      user && user.itf
                        ? user.itf.lastAttached
                        : "Day/Month/Year"
                    }
                    onChange={(e) => setLastAttached(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="totalNum">
                    Total numbers of weeks engaged in industrial training
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="totalNum"
                    placeholder={
                      user && user.itf
                        ? user.itf.numberOfTraining
                        : "Total numbers of weeks engaged in industrial training"
                    }
                    onChange={(e) => setNumberOfTraining(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="date">
                    Date
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="date"
                    placeholder={user && user.itf ? user.itf.date : "Date"}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-3">
              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-dark w-100"
              >
                {isLoading ? "Updating itf form..." : "Update IFT form"}
              </button>
            </div>

            <div className="col-12 mt-5 mb-2 text-center text-muted">
              <small>Copyrights © Habila David for MAU 2023</small>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
