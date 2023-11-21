import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useAuth } from "@/firebase/fire_auth_context";
import { db } from "@/firebase/fire_config";
import { toast } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

const date = `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`;

export default function StudentBio() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [matricNo, setMatricNo] = useState("");
  const [department, setDepartment] = useState("");
  const [faculty, setFaculty] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [supervisor, setSupervisor] = useState("");
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

  const updateBio = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const collRef = collection(db, "users");
    const docRef = doc(collRef, authUser.email);
    const dataToUpdate = {
      bio: {
        name: name.length === 0 && user && user.bio ? user.bio.name : name,
        matricNo:
          matricNo.length === 0 && user && user.bio
            ? user.bio.matricNo
            : matricNo,
        department:
          department.length === 0 && user && user.bio
            ? user.bio.department
            : department,
        faculty:
          faculty.length === 0 && user && user.bio ? user.bio.faculty : faculty,
        phoneNumber:
          phoneNumber.length === 0 && user && user.bio
            ? user.bio.phoneNumber
            : phoneNumber,
        email: email.length === 0 && user && user.bio ? user.bio.email : email,
        supervisor:
          supervisor.length === 0 && user && user.bio
            ? user.bio.supervisor
            : supervisor,
      },
    };

    updateDoc(docRef, dataToUpdate)
      .then(() => {
        e.target.reset();
        toast.dark("Org details updated");
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
            <div
              className={`col-md-4 ${
                user && user.bio ? "text-start" : "text-center mt-5"
              }`}
            >
              <img
                src="/me.png"
                alt="profile image"
                className={`shadow ${
                  user && user.bio ? "w-50 rounded-circle" : "profile_img"
                }`}
              />

              {user && user.bio && (
                <ul className="list-unstyled text-muted mt-3 text-start">
                  <li>
                    <b>Name: </b>
                    {user.bio.name}
                  </li>

                  <li>
                    <b>Matric No: </b>
                    {user.bio.matricNo}
                  </li>

                  <li>
                    <b>Department: </b>
                    {user.bio.department}
                  </li>

                  <li>
                    <b>Faculty: </b>
                    {user.bio.faculty}
                  </li>

                  <li>
                    <b>Phone Number: </b>
                    {user.bio.phoneNumber}
                  </li>

                  <li>
                    <b>Email: </b>
                    {user.bio.email}
                  </li>

                  <li>
                    <b>Supervisor: </b>
                    {user.bio.supervisor}
                  </li>
                </ul>
              )}
            </div>

            <div className="col-md-8 mt-5">
              <form
                onSubmit={updateBio}
                className="row d-flex justify-content-center align-items-center"
              >
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Full Name"
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
                      placeholder="Matric Number"
                      onChange={(e) => setMatricNo(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="department">
                      Department
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="department"
                      placeholder="Department"
                      onChange={(e) => setDepartment(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="faculty">
                      Faculty
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="faculty"
                      placeholder="Faculty"
                      onChange={(e) => setFaculty(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Phone Number"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="supervisor">
                      Supervisor
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="supervisor"
                      placeholder="Supervisor"
                      onChange={(e) => setSupervisor(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="form-label" htmlFor="date">
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

                <div className="col-md-6 mt-3">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn btn-dark w-100"
                  >
                    {isLoading ? "Updating..." : "Update"}
                  </button>
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
