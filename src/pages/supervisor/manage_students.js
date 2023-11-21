import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import {
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useAuth } from "@/firebase/fire_auth_context";
import { db } from "@/firebase/fire_config";
import { toast } from "react-toastify";
import { Modal } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function ManageStudents() {
  const [students, setStudents] = useState([]);
  const [selectedLogbook, setSelectedLogbook] = useState(null);
  const [showLogbook, setShowLogbook] = useState(false);
  const [comment1, setComment1] = useState("");
  const [comment2, setComment2] = useState("");
  const [comment3, setComment3] = useState("");
  const [comment4, setComment4] = useState("");
  const [comment5, setComment5] = useState("");
  const [comment6, setComment6] = useState("");
  const [comment7, setComment7] = useState("");
  const [comment8, setComment8] = useState("");
  const [comment9, setComment9] = useState("");
  const [comment10, setComment10] = useState("");
  const [comment11, setComment11] = useState("");
  const [comment12, setComment12] = useState("");
  const [comment13, setComment13] = useState("");
  const [comment14, setComment14] = useState("");
  const [comment15, setComment15] = useState("");
  const [comment16, setComment16] = useState("");
  const [comment17, setComment17] = useState("");
  const [comment18, setComment18] = useState("");
  const [comment19, setComment19] = useState("");
  const [comment20, setComment20] = useState("");
  const [comment21, setComment21] = useState("");
  const [comment22, setComment22] = useState("");
  const [comment23, setComment23] = useState("");
  const [comment24, setComment24] = useState("");

  useEffect(() => {
    const q = query(collection(db, "users"), where("isStudent", "==", true));

    const unsubscribe = onSnapshot(q, async (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return doc.data();
      });
      setStudents(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="E LogBook" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/logo.png" />
        <meta name="author" content="E LogBook" />
        <title>E LogBook - Manage Students</title>

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

        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-12">
              <h4 className="fw-bold text-center mb-4">Student List</h4>
            </div>

            {students.length > 0 && (
              <div className="col-md-8 table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">S/N</th>
                      <th scope="col">Name</th>
                      <th scope="col">Matric No</th>
                      <th scope="col">Department</th>
                      <th scope="col">LogBook</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{student?.bio?.name}</td>
                        <td>{student?.bio?.matricNo}</td>
                        <td>{student?.bio?.department}</td>
                        <td>
                          <button
                            onClick={() => {
                              setSelectedLogbook(student);
                              setShowLogbook(true);
                            }}
                            className="btn btn-sm btn-dark rounded-1 w-100"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="col-12 mt-5 mb-2 text-center text-muted">
              <small>Copyrights © Habila David for MAU 2023</small>
            </div>
          </div>
        </div>
      </main>

      <Modal
        centered
        size="xl"
        scrollable
        show={showLogbook}
        onHide={() => {
          setSelectedLogbook(null);
          setShowLogbook(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>LogBook</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="row">
            <div className="col-12 text-muted">
              <ul className="list-unstyled">
                <li>
                  <b>Name: </b>
                  {selectedLogbook?.bio?.name}
                </li>
                <li>
                  <b>Matric No: </b>
                  {selectedLogbook?.bio?.matricNo}
                </li>
                <li>
                  <b>Department: </b>
                  {selectedLogbook?.bio?.department}
                </li>
                <li>
                  <b>Phone Number: </b>
                  {selectedLogbook?.bio?.phoneNumber}
                </li>
                <li>
                  <b>Email: </b>
                  {selectedLogbook?.bio?.email}
                </li>
              </ul>
            </div>

            <div className="col-12 table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">Start Week</th>
                    <th scope="col">End Week</th>
                    <th scope="col">Activity</th>
                    <th scope="col">Industry-Base Supervisor Comment</th>
                    <th scope="col" className="text-center">
                      Save Comments
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {selectedLogbook?.logBook && (
                    <tr>
                      <th scope="row">1</th>
                      <td>{selectedLogbook?.logBook?.startWeek15}</td>
                      <td>{selectedLogbook?.logBook?.endWeek15}</td>
                      <td>{selectedLogbook?.logBook?.desc1}</td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          placeholder={
                            selectedLogbook?.logBook?.comment1
                              ? selectedLogbook?.logBook?.comment1
                              : "Comment"
                          }
                          onChange={(e) => setComment1(e.target.value)}
                        />
                      </td>
                      <td>
                        <button className="btn btn-dark w-100">
                          Save Comment
                        </button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
