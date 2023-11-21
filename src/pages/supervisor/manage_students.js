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

  const updateComment = async (student) => {
    const collRef = collection(db, "users");
    const docRef = doc(collRef, student.email);
    const dataToUpdate = {
      "logBook.comment1": comment1 ?? student?.logBook?.comment1 ?? comment1,
      "logBook.comment2": comment2 ?? student?.logBook?.comment2 ?? comment2,
      "logBook.comment3": comment3 ?? student?.logBook?.comment3 ?? comment3,
      "logBook.comment4": comment4 ?? student?.logBook?.comment4 ?? comment4,
      "logBook.comment5": comment5 ?? student?.logBook?.comment5 ?? comment5,
      "logBook.comment6": comment6 ?? student?.logBook?.comment6 ?? comment6,
      "logBook.comment7": comment7 ?? student?.logBook?.comment7 ?? comment7,
      "logBook.comment8": comment8 ?? student?.logBook?.comment8 ?? comment8,
      "logBook.comment9": comment9 ?? student?.logBook?.comment9 ?? comment9,
      "logBook.comment10":
        comment10 ?? student?.logBook?.comment10 ?? comment10,
      "logBook.comment11":
        comment11 ?? student?.logBook?.comment11 ?? comment11,
      "logBook.comment12":
        comment12 ?? student?.logBook?.comment12 ?? comment12,
      "logBook.comment13":
        comment13 ?? student?.logBook?.comment13 ?? comment13,
      "logBook.comment14":
        comment14 ?? student?.logBook?.comment14 ?? comment14,
      "logBook.comment15":
        comment15 ?? student?.logBook?.comment15 ?? comment15,
      "logBook.comment16":
        comment16 ?? student?.logBook?.comment16 ?? comment16,
      "logBook.comment17":
        comment17 ?? student?.logBook?.comment17 ?? comment17,
      "logBook.comment18":
        comment18 ?? student?.logBook?.comment18 ?? comment18,
      "logBook.comment19":
        comment19 ?? student?.logBook?.comment19 ?? comment19,
      "logBook.comment20":
        comment20 ?? student?.logBook?.comment20 ?? comment20,
      "logBook.comment21":
        comment21 ?? student?.logBook?.comment21 ?? comment21,
      "logBook.comment22":
        comment22 ?? student?.logBook?.comment22 ?? comment22,
      "logBook.comment23":
        comment23 ?? student?.logBook?.comment23 ?? comment23,
      "logBook.comment24":
        comment24 ?? student?.logBook?.comment24 ?? comment24,
    };

    updateDoc(docRef, dataToUpdate)
      .then(() => toast.dark("Comment updated"))
      .catch((error) => {
        if (error.code == "not-found") {
          toast.dark("Student not found", { className: "text-danger" });
        } else {
          toast.dark(`Error occured: ${error.message}`, {
            className: "text-danger",
          });
        }
      });
  };

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
                      <th scope="col">Name</th>
                      <th scope="col">Matric No</th>
                      <th scope="col">Department</th>
                      <th scope="col">LogBook</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map(
                      (student, index) =>
                        student.bio && (
                          <tr key={index}>
                            <td scope="row">{student?.bio?.name}</td>
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
                        )
                    )}
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
                    <>
                      <tr>
                        <th scope="row">1</th>
                        <td>{selectedLogbook?.logBook?.startWeek1}</td>
                        <td>{selectedLogbook?.logBook?.endWeek1}</td>
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
                          <button
                            onClick={() => {
                              selectedLogbook && updateComment(selectedLogbook);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Save Comment
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">2</th>
                        <td>{selectedLogbook?.logBook?.startWeek2}</td>
                        <td>{selectedLogbook?.logBook?.endWeek2}</td>
                        <td>{selectedLogbook?.logBook?.desc2}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={
                              selectedLogbook?.logBook?.comment2
                                ? selectedLogbook?.logBook?.comment2
                                : "Comment"
                            }
                            onChange={(e) => setComment2(e.target.value)}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              selectedLogbook && updateComment(selectedLogbook);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Save Comment
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">3</th>
                        <td>{selectedLogbook?.logBook?.startWeek3}</td>
                        <td>{selectedLogbook?.logBook?.endWeek3}</td>
                        <td>{selectedLogbook?.logBook?.desc3}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={
                              selectedLogbook?.logBook?.comment3
                                ? selectedLogbook?.logBook?.comment3
                                : "Comment"
                            }
                            onChange={(e) => setComment3(e.target.value)}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              selectedLogbook && updateComment(selectedLogbook);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Save Comment
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">4</th>
                        <td>{selectedLogbook?.logBook?.startWeek4}</td>
                        <td>{selectedLogbook?.logBook?.endWeek4}</td>
                        <td>{selectedLogbook?.logBook?.desc4}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={
                              selectedLogbook?.logBook?.comment4
                                ? selectedLogbook?.logBook?.comment4
                                : "Comment"
                            }
                            onChange={(e) => setComment4(e.target.value)}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              selectedLogbook && updateComment(selectedLogbook);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Save Comment
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">5</th>
                        <td>{selectedLogbook?.logBook?.startWeek5}</td>
                        <td>{selectedLogbook?.logBook?.endWeek5}</td>
                        <td>{selectedLogbook?.logBook?.desc5}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={
                              selectedLogbook?.logBook?.comment5
                                ? selectedLogbook?.logBook?.comment5
                                : "Comment"
                            }
                            onChange={(e) => setComment5(e.target.value)}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              selectedLogbook && updateComment(selectedLogbook);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Save Comment
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">6</th>
                        <td>{selectedLogbook?.logBook?.startWeek6}</td>
                        <td>{selectedLogbook?.logBook?.endWeek6}</td>
                        <td>{selectedLogbook?.logBook?.desc6}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={
                              selectedLogbook?.logBook?.comment6
                                ? selectedLogbook?.logBook?.comment6
                                : "Comment"
                            }
                            onChange={(e) => setComment6(e.target.value)}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              selectedLogbook && updateComment(selectedLogbook);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Save Comment
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">7</th>
                        <td>{selectedLogbook?.logBook?.startWeek7}</td>
                        <td>{selectedLogbook?.logBook?.endWeek7}</td>
                        <td>{selectedLogbook?.logBook?.desc7}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={
                              selectedLogbook?.logBook?.comment7
                                ? selectedLogbook?.logBook?.comment7
                                : "Comment"
                            }
                            onChange={(e) => setComment7(e.target.value)}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              selectedLogbook && updateComment(selectedLogbook);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Save Comment
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">8</th>
                        <td>{selectedLogbook?.logBook?.startWeek8}</td>
                        <td>{selectedLogbook?.logBook?.endWeek8}</td>
                        <td>{selectedLogbook?.logBook?.desc8}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={
                              selectedLogbook?.logBook?.comment8
                                ? selectedLogbook?.logBook?.comment8
                                : "Comment"
                            }
                            onChange={(e) => setComment8(e.target.value)}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              selectedLogbook && updateComment(selectedLogbook);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Save Comment
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">9</th>
                        <td>{selectedLogbook?.logBook?.startWeek9}</td>
                        <td>{selectedLogbook?.logBook?.endWeek9}</td>
                        <td>{selectedLogbook?.logBook?.desc9}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={
                              selectedLogbook?.logBook?.comment9
                                ? selectedLogbook?.logBook?.comment9
                                : "Comment"
                            }
                            onChange={(e) => setComment9(e.target.value)}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              selectedLogbook && updateComment(selectedLogbook);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Save Comment
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">10</th>
                        <td>{selectedLogbook?.logBook?.startWeek10}</td>
                        <td>{selectedLogbook?.logBook?.endWeek10}</td>
                        <td>{selectedLogbook?.logBook?.desc10}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={
                              selectedLogbook?.logBook?.comment10
                                ? selectedLogbook?.logBook?.comment10
                                : "Comment"
                            }
                            onChange={(e) => setComment10(e.target.value)}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              selectedLogbook && updateComment(selectedLogbook);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Save Comment
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">11</th>
                        <td>{selectedLogbook?.logBook?.startWeek11}</td>
                        <td>{selectedLogbook?.logBook?.endWeek11}</td>
                        <td>{selectedLogbook?.logBook?.desc11}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={
                              selectedLogbook?.logBook?.comment11
                                ? selectedLogbook?.logBook?.comment11
                                : "Comment"
                            }
                            onChange={(e) => setComment11(e.target.value)}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              selectedLogbook && updateComment(selectedLogbook);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Save Comment
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">12</th>
                        <td>{selectedLogbook?.logBook?.startWeek12}</td>
                        <td>{selectedLogbook?.logBook?.endWeek12}</td>
                        <td>{selectedLogbook?.logBook?.desc12}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={
                              selectedLogbook?.logBook?.comment12
                                ? selectedLogbook?.logBook?.comment12
                                : "Comment"
                            }
                            onChange={(e) => setComment12(e.target.value)}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              selectedLogbook && updateComment(selectedLogbook);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Save Comment
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">13</th>
                        <td>{selectedLogbook?.logBook?.startWeek13}</td>
                        <td>{selectedLogbook?.logBook?.endWeek13}</td>
                        <td>{selectedLogbook?.logBook?.desc13}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={
                              selectedLogbook?.logBook?.comment13
                                ? selectedLogbook?.logBook?.comment13
                                : "Comment"
                            }
                            onChange={(e) => setComment13(e.target.value)}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              selectedLogbook && updateComment(selectedLogbook);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Save Comment
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">14</th>
                        <td>{selectedLogbook?.logBook?.startWeek14}</td>
                        <td>{selectedLogbook?.logBook?.endWeek14}</td>
                        <td>{selectedLogbook?.logBook?.desc14}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={
                              selectedLogbook?.logBook?.comment14
                                ? selectedLogbook?.logBook?.comment14
                                : "Comment"
                            }
                            onChange={(e) => setComment14(e.target.value)}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              selectedLogbook && updateComment(selectedLogbook);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Save Comment
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">15</th>
                        <td>{selectedLogbook?.logBook?.startWeek15}</td>
                        <td>{selectedLogbook?.logBook?.endWeek15}</td>
                        <td>{selectedLogbook?.logBook?.desc15}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={
                              selectedLogbook?.logBook?.comment15
                                ? selectedLogbook?.logBook?.comment15
                                : "Comment"
                            }
                            onChange={(e) => setComment15(e.target.value)}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              selectedLogbook && updateComment(selectedLogbook);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Save Comment
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">16</th>
                        <td>{selectedLogbook?.logBook?.startWeek16}</td>
                        <td>{selectedLogbook?.logBook?.endWeek16}</td>
                        <td>{selectedLogbook?.logBook?.desc16}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={
                              selectedLogbook?.logBook?.comment16
                                ? selectedLogbook?.logBook?.comment16
                                : "Comment"
                            }
                            onChange={(e) => setComment16(e.target.value)}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              selectedLogbook && updateComment(selectedLogbook);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Save Comment
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">17</th>
                        <td>{selectedLogbook?.logBook?.startWeek17}</td>
                        <td>{selectedLogbook?.logBook?.endWeek17}</td>
                        <td>{selectedLogbook?.logBook?.desc17}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={
                              selectedLogbook?.logBook?.comment17
                                ? selectedLogbook?.logBook?.comment17
                                : "Comment"
                            }
                            onChange={(e) => setComment17(e.target.value)}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              selectedLogbook && updateComment(selectedLogbook);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Save Comment
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">18</th>
                        <td>{selectedLogbook?.logBook?.startWeek18}</td>
                        <td>{selectedLogbook?.logBook?.endWeek18}</td>
                        <td>{selectedLogbook?.logBook?.desc18}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={
                              selectedLogbook?.logBook?.comment18
                                ? selectedLogbook?.logBook?.comment18
                                : "Comment"
                            }
                            onChange={(e) => setComment18(e.target.value)}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              selectedLogbook && updateComment(selectedLogbook);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Save Comment
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">19</th>
                        <td>{selectedLogbook?.logBook?.startWeek19}</td>
                        <td>{selectedLogbook?.logBook?.endWeek19}</td>
                        <td>{selectedLogbook?.logBook?.desc19}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={
                              selectedLogbook?.logBook?.comment19
                                ? selectedLogbook?.logBook?.comment19
                                : "Comment"
                            }
                            onChange={(e) => setComment19(e.target.value)}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              selectedLogbook && updateComment(selectedLogbook);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Save Comment
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">20</th>
                        <td>{selectedLogbook?.logBook?.startWeek20}</td>
                        <td>{selectedLogbook?.logBook?.endWeek20}</td>
                        <td>{selectedLogbook?.logBook?.desc20}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={
                              selectedLogbook?.logBook?.comment20
                                ? selectedLogbook?.logBook?.comment20
                                : "Comment"
                            }
                            onChange={(e) => setComment20(e.target.value)}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              selectedLogbook && updateComment(selectedLogbook);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Save Comment
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">21</th>
                        <td>{selectedLogbook?.logBook?.startWeek21}</td>
                        <td>{selectedLogbook?.logBook?.endWeek21}</td>
                        <td>{selectedLogbook?.logBook?.desc21}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={
                              selectedLogbook?.logBook?.comment21
                                ? selectedLogbook?.logBook?.comment21
                                : "Comment"
                            }
                            onChange={(e) => setComment21(e.target.value)}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              selectedLogbook && updateComment(selectedLogbook);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Save Comment
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">22</th>
                        <td>{selectedLogbook?.logBook?.startWeek22}</td>
                        <td>{selectedLogbook?.logBook?.endWeek22}</td>
                        <td>{selectedLogbook?.logBook?.desc22}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={
                              selectedLogbook?.logBook?.comment22
                                ? selectedLogbook?.logBook?.comment22
                                : "Comment"
                            }
                            onChange={(e) => setComment22(e.target.value)}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              selectedLogbook && updateComment(selectedLogbook);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Save Comment
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">23</th>
                        <td>{selectedLogbook?.logBook?.startWeek23}</td>
                        <td>{selectedLogbook?.logBook?.endWeek23}</td>
                        <td>{selectedLogbook?.logBook?.desc23}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={
                              selectedLogbook?.logBook?.comment23
                                ? selectedLogbook?.logBook?.comment23
                                : "Comment"
                            }
                            onChange={(e) => setComment23(e.target.value)}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              selectedLogbook && updateComment(selectedLogbook);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Save Comment
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">24</th>
                        <td>{selectedLogbook?.logBook?.startWeek24}</td>
                        <td>{selectedLogbook?.logBook?.endWeek24}</td>
                        <td>{selectedLogbook?.logBook?.desc24}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={
                              selectedLogbook?.logBook?.comment24
                                ? selectedLogbook?.logBook?.comment24
                                : "Comment"
                            }
                            onChange={(e) => setComment24(e.target.value)}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              selectedLogbook && updateComment(selectedLogbook);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Save Comment
                          </button>
                        </td>
                      </tr>
                    </>
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
