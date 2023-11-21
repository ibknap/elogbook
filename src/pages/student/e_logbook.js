import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useAuth } from "@/firebase/fire_auth_context";
import { db } from "@/firebase/fire_config";
import { toast } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export default function ELogbook() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const { authUser } = useAuth();
  const [startWeek1, setStartWeek1] = useState("");
  const [startWeek2, setStartWeek2] = useState("");
  const [startWeek3, setStartWeek3] = useState("");
  const [startWeek4, setStartWeek4] = useState("");
  const [startWeek5, setStartWeek5] = useState("");
  const [startWeek6, setStartWeek6] = useState("");
  const [startWeek7, setStartWeek7] = useState("");
  const [startWeek8, setStartWeek8] = useState("");
  const [startWeek9, setStartWeek9] = useState("");
  const [startWeek10, setStartWeek10] = useState("");
  const [startWeek11, setStartWeek11] = useState("");
  const [startWeek12, setStartWeek12] = useState("");
  const [startWeek13, setStartWeek13] = useState("");
  const [startWeek14, setStartWeek14] = useState("");
  const [startWeek15, setStartWeek15] = useState("");
  const [startWeek16, setStartWeek16] = useState("");
  const [startWeek17, setStartWeek17] = useState("");
  const [startWeek18, setStartWeek18] = useState("");
  const [startWeek19, setStartWeek19] = useState("");
  const [startWeek20, setStartWeek20] = useState("");
  const [startWeek21, setStartWeek21] = useState("");
  const [startWeek22, setStartWeek22] = useState("");
  const [startWeek23, setStartWeek23] = useState("");
  const [startWeek24, setStartWeek24] = useState("");
  const [endWeek1, setEndWeek1] = useState("");
  const [endWeek2, setEndWeek2] = useState("");
  const [endWeek3, setEndWeek3] = useState("");
  const [endWeek4, setEndWeek4] = useState("");
  const [endWeek5, setEndWeek5] = useState("");
  const [endWeek6, setEndWeek6] = useState("");
  const [endWeek7, setEndWeek7] = useState("");
  const [endWeek8, setEndWeek8] = useState("");
  const [endWeek9, setEndWeek9] = useState("");
  const [endWeek10, setEndWeek10] = useState("");
  const [endWeek11, setEndWeek11] = useState("");
  const [endWeek12, setEndWeek12] = useState("");
  const [endWeek13, setEndWeek13] = useState("");
  const [endWeek14, setEndWeek14] = useState("");
  const [endWeek15, setEndWeek15] = useState("");
  const [endWeek16, setEndWeek16] = useState("");
  const [endWeek17, setEndWeek17] = useState("");
  const [endWeek18, setEndWeek18] = useState("");
  const [endWeek19, setEndWeek19] = useState("");
  const [endWeek20, setEndWeek20] = useState("");
  const [endWeek21, setEndWeek21] = useState("");
  const [endWeek22, setEndWeek22] = useState("");
  const [endWeek23, setEndWeek23] = useState("");
  const [endWeek24, setEndWeek24] = useState("");
  const [desc1, setDesc1] = useState("");
  const [desc2, setDesc2] = useState("");
  const [desc3, setDesc3] = useState("");
  const [desc4, setDesc4] = useState("");
  const [desc5, setDesc5] = useState("");
  const [desc6, setDesc6] = useState("");
  const [desc7, setDesc7] = useState("");
  const [desc8, setDesc8] = useState("");
  const [desc9, setDesc9] = useState("");
  const [desc10, setDesc10] = useState("");
  const [desc11, setDesc11] = useState("");
  const [desc12, setDesc12] = useState("");
  const [desc13, setDesc13] = useState("");
  const [desc14, setDesc14] = useState("");
  const [desc15, setDesc15] = useState("");
  const [desc16, setDesc16] = useState("");
  const [desc17, setDesc17] = useState("");
  const [desc18, setDesc18] = useState("");
  const [desc19, setDesc19] = useState("");
  const [desc20, setDesc20] = useState("");
  const [desc21, setDesc21] = useState("");
  const [desc22, setDesc22] = useState("");
  const [desc23, setDesc23] = useState("");
  const [desc24, setDesc24] = useState("");

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

  const updateLogBook = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const collRef = collection(db, "users");
    const docRef = doc(collRef, authUser.email);
    const dataToUpdate = {
      logBook: {
        startWeek1:
          startWeek1.length === 0 && user && user.logBook
            ? user.logBook.startWeek1
            : startWeek1,
        endWeek1:
          endWeek1.length === 0 && user && user.logBook
            ? user.logBook.endWeek1
            : endWeek1,
        desc1:
          desc1.length === 0 && user && user.logBook
            ? user.logBook.desc1
            : desc1,

        startWeek2:
          startWeek2.length === 0 && user && user.logBook
            ? user.logBook.startWeek2
            : startWeek2,
        endWeek2:
          endWeek2.length === 0 && user && user.logBook
            ? user.logBook.endWeek2
            : endWeek2,
        desc2:
          desc2.length === 0 && user && user.logBook
            ? user.logBook.desc2
            : desc2,

        startWeek3:
          startWeek3.length === 0 && user && user.logBook
            ? user.logBook.startWeek3
            : startWeek3,
        endWeek3:
          endWeek3.length === 0 && user && user.logBook
            ? user.logBook.endWeek3
            : endWeek3,
        desc3:
          desc3.length === 0 && user && user.logBook
            ? user.logBook.desc3
            : desc3,

        startWeek4:
          startWeek4.length === 0 && user && user.logBook
            ? user.logBook.startWeek4
            : startWeek4,
        endWeek4:
          endWeek4.length === 0 && user && user.logBook
            ? user.logBook.endWeek4
            : endWeek4,
        desc4:
          desc4.length === 0 && user && user.logBook
            ? user.logBook.desc4
            : desc4,

        startWeek5:
          startWeek5.length === 0 && user && user.logBook
            ? user.logBook.startWeek5
            : startWeek5,
        endWeek5:
          endWeek5.length === 0 && user && user.logBook
            ? user.logBook.endWeek5
            : endWeek5,
        desc5:
          desc5.length === 0 && user && user.logBook
            ? user.logBook.desc5
            : desc5,

        startWeek6:
          startWeek6.length === 0 && user && user.logBook
            ? user.logBook.startWeek6
            : startWeek6,
        endWeek6:
          endWeek6.length === 0 && user && user.logBook
            ? user.logBook.endWeek6
            : endWeek6,
        desc6:
          desc6.length === 0 && user && user.logBook
            ? user.logBook.desc6
            : desc6,

        startWeek7:
          startWeek7.length === 0 && user && user.logBook
            ? user.logBook.startWeek7
            : startWeek7,
        endWeek7:
          endWeek7.length === 0 && user && user.logBook
            ? user.logBook.endWeek7
            : endWeek7,
        desc7:
          desc7.length === 0 && user && user.logBook
            ? user.logBook.desc7
            : desc7,

        startWeek8:
          startWeek8.length === 0 && user && user.logBook
            ? user.logBook.startWeek8
            : startWeek8,
        endWeek8:
          endWeek8.length === 0 && user && user.logBook
            ? user.logBook.endWeek8
            : endWeek8,
        desc8:
          desc8.length === 0 && user && user.logBook
            ? user.logBook.desc8
            : desc8,

        startWeek9:
          startWeek9.length === 0 && user && user.logBook
            ? user.logBook.startWeek9
            : startWeek9,
        endWeek9:
          endWeek9.length === 0 && user && user.logBook
            ? user.logBook.endWeek9
            : endWeek9,
        desc9:
          desc9.length === 0 && user && user.logBook
            ? user.logBook.desc9
            : desc9,

        startWeek10:
          startWeek10.length === 0 && user && user.logBook
            ? user.logBook.startWeek10
            : startWeek10,
        endWeek10:
          endWeek10.length === 0 && user && user.logBook
            ? user.logBook.endWeek10
            : endWeek10,
        desc10:
          desc10.length === 0 && user && user.logBook
            ? user.logBook.desc10
            : desc10,

        startWeek11:
          startWeek11.length === 0 && user && user.logBook
            ? user.logBook.startWeek11
            : startWeek11,
        endWeek11:
          endWeek11.length === 0 && user && user.logBook
            ? user.logBook.endWeek11
            : endWeek11,
        desc11:
          desc11.length === 0 && user && user.logBook
            ? user.logBook.desc11
            : desc11,

        startWeek12:
          startWeek12.length === 0 && user && user.logBook
            ? user.logBook.startWeek12
            : startWeek12,
        endWeek12:
          endWeek12.length === 0 && user && user.logBook
            ? user.logBook.endWeek12
            : endWeek12,
        desc12:
          desc12.length === 0 && user && user.logBook
            ? user.logBook.desc12
            : desc12,

        startWeek13:
          startWeek13.length === 0 && user && user.logBook
            ? user.logBook.startWeek13
            : startWeek13,
        endWeek13:
          endWeek13.length === 0 && user && user.logBook
            ? user.logBook.endWeek13
            : endWeek13,
        desc13:
          desc13.length === 0 && user && user.logBook
            ? user.logBook.desc13
            : desc13,

        startWeek14:
          startWeek14.length === 0 && user && user.logBook
            ? user.logBook.startWeek14
            : startWeek14,
        endWeek14:
          endWeek14.length === 0 && user && user.logBook
            ? user.logBook.endWeek14
            : endWeek14,
        desc14:
          desc14.length === 0 && user && user.logBook
            ? user.logBook.desc14
            : desc14,

        startWeek15:
          startWeek15.length === 0 && user && user.logBook
            ? user.logBook.startWeek15
            : startWeek15,
        endWeek15:
          endWeek15.length === 0 && user && user.logBook
            ? user.logBook.endWeek15
            : endWeek15,
        desc15:
          desc15.length === 0 && user && user.logBook
            ? user.logBook.desc15
            : desc15,

        startWeek16:
          startWeek16.length === 0 && user && user.logBook
            ? user.logBook.startWeek16
            : startWeek16,
        endWeek16:
          endWeek16.length === 0 && user && user.logBook
            ? user.logBook.endWeek16
            : endWeek16,
        desc16:
          desc16.length === 0 && user && user.logBook
            ? user.logBook.desc16
            : desc16,

        startWeek17:
          startWeek17.length === 0 && user && user.logBook
            ? user.logBook.startWeek17
            : startWeek17,
        endWeek17:
          endWeek17.length === 0 && user && user.logBook
            ? user.logBook.endWeek17
            : endWeek17,
        desc17:
          desc17.length === 0 && user && user.logBook
            ? user.logBook.desc17
            : desc17,

        startWeek18:
          startWeek18.length === 0 && user && user.logBook
            ? user.logBook.startWeek18
            : startWeek18,
        endWeek18:
          endWeek18.length === 0 && user && user.logBook
            ? user.logBook.endWeek18
            : endWeek18,
        desc18:
          desc18.length === 0 && user && user.logBook
            ? user.logBook.desc18
            : desc18,

        startWeek19:
          startWeek19.length === 0 && user && user.logBook
            ? user.logBook.startWeek19
            : startWeek19,
        endWeek19:
          endWeek19.length === 0 && user && user.logBook
            ? user.logBook.endWeek19
            : endWeek19,
        desc19:
          desc19.length === 0 && user && user.logBook
            ? user.logBook.desc19
            : desc19,

        startWeek20:
          startWeek20.length === 0 && user && user.logBook
            ? user.logBook.startWeek20
            : startWeek20,
        endWeek20:
          endWeek20.length === 0 && user && user.logBook
            ? user.logBook.endWeek20
            : endWeek20,
        desc20:
          desc20.length === 0 && user && user.logBook
            ? user.logBook.desc20
            : desc20,

        startWeek21:
          startWeek21.length === 0 && user && user.logBook
            ? user.logBook.startWeek21
            : startWeek21,
        endWeek21:
          endWeek21.length === 0 && user && user.logBook
            ? user.logBook.endWeek21
            : endWeek21,
        desc21:
          desc21.length === 0 && user && user.logBook
            ? user.logBook.desc21
            : desc21,

        startWeek22:
          startWeek22.length === 0 && user && user.logBook
            ? user.logBook.startWeek22
            : startWeek22,
        endWeek22:
          endWeek22.length === 0 && user && user.logBook
            ? user.logBook.endWeek22
            : endWeek22,
        desc22:
          desc22.length === 0 && user && user.logBook
            ? user.logBook.desc22
            : desc22,

        startWeek23:
          startWeek23.length === 0 && user && user.logBook
            ? user.logBook.startWeek23
            : startWeek23,
        endWeek23:
          endWeek23.length === 0 && user && user.logBook
            ? user.logBook.endWeek23
            : endWeek23,
        desc23:
          desc23.length === 0 && user && user.logBook
            ? user.logBook.desc23
            : desc23,

        startWeek24:
          startWeek24.length === 0 && user && user.logBook
            ? user.logBook.startWeek24
            : startWeek24,
        endWeek24:
          endWeek24.length === 0 && user && user.logBook
            ? user.logBook.endWeek24
            : endWeek24,
        desc24:
          desc24.length === 0 && user && user.logBook
            ? user.logBook.desc24
            : desc24,
      },
    };

    updateDoc(docRef, dataToUpdate)
      .then(() => {
        e.target.reset();
        toast.dark("LogBook updated");
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
        <title>E LogBook - E-LogBook</title>

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
              <h4 className="fw-bold text-center mb-4">LogBook Table</h4>
            </div>

            <form onSubmit={updateLogBook} className="col-12">
              <div className="row">
                <div className="col-md-6 table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">S/N</th>
                        <th scope="col">Start Week</th>
                        <th scope="col">End Week</th>
                        <th scope="col">Activity Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="startWeek1"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.startWeek1
                                : ""
                            }
                            onChange={(e) => setStartWeek1(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="endWeek1"
                            placeholder={
                              user && user.logBook ? user.logBook.endWeek1 : ""
                            }
                            onChange={(e) => setEndWeek1(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="desc1"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.desc1
                                : "Activity description"
                            }
                            onChange={(e) => setDesc1(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">2</th>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="startWeek2"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.startWeek2
                                : ""
                            }
                            onChange={(e) => setStartWeek2(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="endWeek2"
                            placeholder={
                              user && user.logBook ? user.logBook.endWeek2 : ""
                            }
                            onChange={(e) => setEndWeek2(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="desc2"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.desc2
                                : "Activity description"
                            }
                            onChange={(e) => setDesc2(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">3</th>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="startWeek3"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.startWeek3
                                : ""
                            }
                            onChange={(e) => setStartWeek3(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="endWeek3"
                            placeholder={
                              user && user.logBook ? user.logBook.endWeek3 : ""
                            }
                            onChange={(e) => setEndWeek3(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="desc3"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.desc3
                                : "Activity description"
                            }
                            onChange={(e) => setDesc3(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">4</th>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="startWeek4"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.startWeek4
                                : ""
                            }
                            onChange={(e) => setStartWeek4(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="endWeek4"
                            placeholder={
                              user && user.logBook ? user.logBook.endWeek4 : ""
                            }
                            onChange={(e) => setEndWeek4(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="desc4"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.desc4
                                : "Activity description"
                            }
                            onChange={(e) => setDesc4(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">5</th>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="startWeek5"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.startWeek5
                                : ""
                            }
                            onChange={(e) => setStartWeek5(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="endWeek5"
                            placeholder={
                              user && user.logBook ? user.logBook.endWeek5 : ""
                            }
                            onChange={(e) => setEndWeek5(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="desc5"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.desc5
                                : "Activity description"
                            }
                            onChange={(e) => setDesc5(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">6</th>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="startWeek6"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.startWeek6
                                : ""
                            }
                            onChange={(e) => setStartWeek6(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="endWeek6"
                            placeholder={
                              user && user.logBook ? user.logBook.endWeek6 : ""
                            }
                            onChange={(e) => setEndWeek6(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="desc6"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.desc6
                                : "Activity description"
                            }
                            onChange={(e) => setDesc6(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">7</th>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="startWeek7"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.startWeek7
                                : ""
                            }
                            onChange={(e) => setStartWeek7(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="endWeek7"
                            placeholder={
                              user && user.logBook ? user.logBook.endWeek7 : ""
                            }
                            onChange={(e) => setEndWeek7(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="desc7"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.desc7
                                : "Activity description"
                            }
                            onChange={(e) => setDesc7(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">8</th>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="startWeek8"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.startWeek8
                                : ""
                            }
                            onChange={(e) => setStartWeek8(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="endWeek8"
                            placeholder={
                              user && user.logBook ? user.logBook.endWeek8 : ""
                            }
                            onChange={(e) => setEndWeek8(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="desc8"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.desc8
                                : "Activity description"
                            }
                            onChange={(e) => setDesc8(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">9</th>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="startWeek9"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.startWeek9
                                : ""
                            }
                            onChange={(e) => setStartWeek9(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="endWeek9"
                            placeholder={
                              user && user.logBook ? user.logBook.endWeek9 : ""
                            }
                            onChange={(e) => setEndWeek9(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="desc9"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.desc9
                                : "Activity description"
                            }
                            onChange={(e) => setDesc9(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">10</th>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="startWeek10"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.startWeek10
                                : ""
                            }
                            onChange={(e) => setStartWeek10(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="endWeek10"
                            placeholder={
                              user && user.logBook ? user.logBook.endWeek10 : ""
                            }
                            onChange={(e) => setEndWeek10(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="desc10"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.desc10
                                : "Activity description"
                            }
                            onChange={(e) => setDesc10(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">11</th>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="startWeek11"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.startWeek11
                                : ""
                            }
                            onChange={(e) => setStartWeek11(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="endWeek11"
                            placeholder={
                              user && user.logBook ? user.logBook.endWeek11 : ""
                            }
                            onChange={(e) => setEndWeek11(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="desc11"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.desc11
                                : "Activity description"
                            }
                            onChange={(e) => setDesc11(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">12</th>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="startWeek12"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.startWeek12
                                : ""
                            }
                            onChange={(e) => setStartWeek12(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="endWeek12"
                            placeholder={
                              user && user.logBook ? user.logBook.endWeek12 : ""
                            }
                            onChange={(e) => setEndWeek12(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="desc12"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.desc12
                                : "Activity description"
                            }
                            onChange={(e) => setDesc12(e.target.value)}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="col-md-6 table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">S/N</th>
                        <th scope="col">Start Week</th>
                        <th scope="col">End Week</th>
                        <th scope="col">Activity Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">13</th>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="startWeek13"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.startWeek13
                                : ""
                            }
                            onChange={(e) => setStartWeek13(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="endWeek13"
                            placeholder={
                              user && user.logBook ? user.logBook.endWeek13 : ""
                            }
                            onChange={(e) => setEndWeek13(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="desc13"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.desc13
                                : "Activity description"
                            }
                            onChange={(e) => setDesc13(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">14</th>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="startWeek14"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.startWeek14
                                : ""
                            }
                            onChange={(e) => setStartWeek14(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="endWeek14"
                            placeholder={
                              user && user.logBook ? user.logBook.endWeek14 : ""
                            }
                            onChange={(e) => setEndWeek14(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="desc14"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.desc14
                                : "Activity description"
                            }
                            onChange={(e) => setDesc14(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">15</th>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="startWeek15"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.startWeek15
                                : ""
                            }
                            onChange={(e) => setStartWeek15(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="endWeek15"
                            placeholder={
                              user && user.logBook ? user.logBook.endWeek15 : ""
                            }
                            onChange={(e) => setEndWeek15(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="desc15"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.desc15
                                : "Activity description"
                            }
                            onChange={(e) => setDesc15(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">16</th>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="startWeek16"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.startWeek16
                                : ""
                            }
                            onChange={(e) => setStartWeek16(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="endWeek16"
                            placeholder={
                              user && user.logBook ? user.logBook.endWeek16 : ""
                            }
                            onChange={(e) => setEndWeek16(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="desc16"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.desc16
                                : "Activity description"
                            }
                            onChange={(e) => setDesc16(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">17</th>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="startWeek17"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.startWeek17
                                : ""
                            }
                            onChange={(e) => setStartWeek17(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="endWeek17"
                            placeholder={
                              user && user.logBook ? user.logBook.endWeek17 : ""
                            }
                            onChange={(e) => setEndWeek17(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="desc17"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.desc17
                                : "Activity description"
                            }
                            onChange={(e) => setDesc17(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">18</th>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="startWeek18"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.startWeek18
                                : ""
                            }
                            onChange={(e) => setStartWeek18(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="endWeek18"
                            placeholder={
                              user && user.logBook ? user.logBook.endWeek18 : ""
                            }
                            onChange={(e) => setEndWeek18(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="desc18"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.desc18
                                : "Activity description"
                            }
                            onChange={(e) => setDesc18(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">19</th>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="startWeek19"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.startWeek19
                                : ""
                            }
                            onChange={(e) => setStartWeek19(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="endWeek19"
                            placeholder={
                              user && user.logBook ? user.logBook.endWeek19 : ""
                            }
                            onChange={(e) => setEndWeek19(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="desc19"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.desc19
                                : "Activity description"
                            }
                            onChange={(e) => setDesc19(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">20</th>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="startWeek20"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.startWeek20
                                : ""
                            }
                            onChange={(e) => setStartWeek20(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="endWeek20"
                            placeholder={
                              user && user.logBook ? user.logBook.endWeek20 : ""
                            }
                            onChange={(e) => setEndWeek20(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="desc20"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.desc20
                                : "Activity description"
                            }
                            onChange={(e) => setDesc20(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">21</th>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="startWeek21"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.startWeek21
                                : ""
                            }
                            onChange={(e) => setStartWeek21(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="endWeek21"
                            placeholder={
                              user && user.logBook ? user.logBook.endWeek21 : ""
                            }
                            onChange={(e) => setEndWeek21(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="desc21"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.desc21
                                : "Activity description"
                            }
                            onChange={(e) => setDesc21(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">22</th>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="startWeek22"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.startWeek22
                                : ""
                            }
                            onChange={(e) => setStartWeek22(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="endWeek22"
                            placeholder={
                              user && user.logBook ? user.logBook.endWeek22 : ""
                            }
                            onChange={(e) => setEndWeek22(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="desc22"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.desc22
                                : "Activity description"
                            }
                            onChange={(e) => setDesc22(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">23</th>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="startWeek23"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.startWeek23
                                : ""
                            }
                            onChange={(e) => setStartWeek23(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="endWeek23"
                            placeholder={
                              user && user.logBook ? user.logBook.endWeek23 : ""
                            }
                            onChange={(e) => setEndWeek23(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="desc23"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.desc23
                                : "Activity description"
                            }
                            onChange={(e) => setDesc23(e.target.value)}
                          />
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">24</th>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="startWeek24"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.startWeek24
                                : ""
                            }
                            onChange={(e) => setStartWeek24(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            id="endWeek24"
                            placeholder={
                              user && user.logBook ? user.logBook.endWeek24 : ""
                            }
                            onChange={(e) => setEndWeek24(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            id="desc24"
                            placeholder={
                              user && user.logBook
                                ? user.logBook.desc24
                                : "Activity description"
                            }
                            onChange={(e) => setDesc24(e.target.value)}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="col-12 mt-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-dark w-100"
                >
                  {isLoading ? "Updating LogBook..." : "Update LogBook"}
                </button>
              </div>
            </form>

            <div className="col-12 mt-5 mb-2 text-center text-muted">
              <small>Copyrights © Habila David for MAU 2023</small>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
