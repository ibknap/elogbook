import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useAuth } from "@/firebase/fire_auth_context";
import { db } from "@/firebase/fire_config";
import { toast } from "react-toastify";
import { Modal } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function ELogbook() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const { authUser } = useAuth();
  const [selectedLogbook, setSelectedLogbook] = useState(null);
  const [showLogbook, setShowLogbook] = useState(false);
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
  const [activityMon, setActivityMon] = useState("");
  const [activityMonImg, setActivityMonImg] = useState(null);
  const [activityTue, setActivityTue] = useState("");
  const [activityTueImg, setActivityTueImg] = useState(null);
  const [activityWed, setActivityWed] = useState("");
  const [activityWedImg, setActivityWedImg] = useState(null);
  const [activityThu, setActivityThu] = useState("");
  const [activityThuImg, setActivityThuImg] = useState(null);
  const [activityFri, setActivityFri] = useState("");
  const [activityFriImg, setActivityFriImg] = useState(null);
  const [activitySat, setActivitySat] = useState("");
  const [activitySatImg, setActivitySatImg] = useState(null);
  const [activitySun, setActivitySun] = useState("");
  const [activitySunImg, setActivitySunImg] = useState(null);

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

  const updateActivities = async (e) => {
    e.preventDefault();

    const collRef = collection(db, "users");
    const docRef = doc(collRef, authUser.email);
    let dataToUpdate = {};

    if (selectedLogbook === 1) {
      dataToUpdate = {
        "logBook.activityMon1":
          activityMon ?? user?.logBook?.activityMon ?? activityMon,
        "logBook.activityTue1":
          activityTue ?? user?.logBook?.activityTue ?? activityTue,
        "logBook.activityWed1":
          activityWed ?? user?.logBook?.activityWed ?? activityWed,
        "logBook.activityThu1":
          activityThu ?? user?.logBook?.activityThu ?? activityThu,
        "logBook.activityFri1":
          activityFri ?? user?.logBook?.activityFri ?? activityFri,
        "logBook.activitySat1":
          activitySat ?? user?.logBook?.activitySat ?? activitySat,
        "logBook.activitySun1":
          activitySun ?? user?.logBook?.activitySun ?? activitySun,
      };
    }

    if (selectedLogbook === 2) {
      dataToUpdate = {
        "logBook.activityMon2":
          activityMon ?? user?.logBook?.activityMon ?? activityMon,
        "logBook.activityTue2":
          activityTue ?? user?.logBook?.activityTue ?? activityTue,
        "logBook.activityWed2":
          activityWed ?? user?.logBook?.activityWed ?? activityWed,
        "logBook.activityThu2":
          activityThu ?? user?.logBook?.activityThu ?? activityThu,
        "logBook.activityFri2":
          activityFri ?? user?.logBook?.activityFri ?? activityFri,
        "logBook.activitySat2":
          activitySat ?? user?.logBook?.activitySat ?? activitySat,
        "logBook.activitySun2":
          activitySun ?? user?.logBook?.activitySun ?? activitySun,
      };
    }

    if (selectedLogbook === 3) {
      dataToUpdate = {
        "logBook.activityMon3":
          activityMon ?? user?.logBook?.activityMon ?? activityMon,
        "logBook.activityTue3":
          activityTue ?? user?.logBook?.activityTue ?? activityTue,
        "logBook.activityWed3":
          activityWed ?? user?.logBook?.activityWed ?? activityWed,
        "logBook.activityThu3":
          activityThu ?? user?.logBook?.activityThu ?? activityThu,
        "logBook.activityFri3":
          activityFri ?? user?.logBook?.activityFri ?? activityFri,
        "logBook.activitySat3":
          activitySat ?? user?.logBook?.activitySat ?? activitySat,
        "logBook.activitySun3":
          activitySun ?? user?.logBook?.activitySun ?? activitySun,
      };
    }

    if (selectedLogbook === 4) {
      dataToUpdate = {
        "logBook.activityMon4":
          activityMon ?? user?.logBook?.activityMon ?? activityMon,
        "logBook.activityTue4":
          activityTue ?? user?.logBook?.activityTue ?? activityTue,
        "logBook.activityWed4":
          activityWed ?? user?.logBook?.activityWed ?? activityWed,
        "logBook.activityThu4":
          activityThu ?? user?.logBook?.activityThu ?? activityThu,
        "logBook.activityFri4":
          activityFri ?? user?.logBook?.activityFri ?? activityFri,
        "logBook.activitySat4":
          activitySat ?? user?.logBook?.activitySat ?? activitySat,
        "logBook.activitySun4":
          activitySun ?? user?.logBook?.activitySun ?? activitySun,
      };
    }

    if (selectedLogbook === 5) {
      dataToUpdate = {
        "logBook.activityMon5":
          activityMon ?? user?.logBook?.activityMon ?? activityMon,
        "logBook.activityTue5":
          activityTue ?? user?.logBook?.activityTue ?? activityTue,
        "logBook.activityWed5":
          activityWed ?? user?.logBook?.activityWed ?? activityWed,
        "logBook.activityThu5":
          activityThu ?? user?.logBook?.activityThu ?? activityThu,
        "logBook.activityFri5":
          activityFri ?? user?.logBook?.activityFri ?? activityFri,
        "logBook.activitySat5":
          activitySat ?? user?.logBook?.activitySat ?? activitySat,
        "logBook.activitySun5":
          activitySun ?? user?.logBook?.activitySun ?? activitySun,
      };
    }

    if (selectedLogbook === 6) {
      dataToUpdate = {
        "logBook.activityMon6":
          activityMon ?? user?.logBook?.activityMon ?? activityMon,
        "logBook.activityTue6":
          activityTue ?? user?.logBook?.activityTue ?? activityTue,
        "logBook.activityWed6":
          activityWed ?? user?.logBook?.activityWed ?? activityWed,
        "logBook.activityThu6":
          activityThu ?? user?.logBook?.activityThu ?? activityThu,
        "logBook.activityFri6":
          activityFri ?? user?.logBook?.activityFri ?? activityFri,
        "logBook.activitySat6":
          activitySat ?? user?.logBook?.activitySat ?? activitySat,
        "logBook.activitySun6":
          activitySun ?? user?.logBook?.activitySun ?? activitySun,
      };
    }

    if (selectedLogbook === 6) {
      dataToUpdate = {
        "logBook.activityMon6":
          activityMon ?? user?.logBook?.activityMon ?? activityMon,
        "logBook.activityTue6":
          activityTue ?? user?.logBook?.activityTue ?? activityTue,
        "logBook.activityWed6":
          activityWed ?? user?.logBook?.activityWed ?? activityWed,
        "logBook.activityThu6":
          activityThu ?? user?.logBook?.activityThu ?? activityThu,
        "logBook.activityFri6":
          activityFri ?? user?.logBook?.activityFri ?? activityFri,
        "logBook.activitySat6":
          activitySat ?? user?.logBook?.activitySat ?? activitySat,
        "logBook.activitySun6":
          activitySun ?? user?.logBook?.activitySun ?? activitySun,
      };
    }

    if (selectedLogbook === 7) {
      dataToUpdate = {
        "logBook.activityMon7":
          activityMon ?? user?.logBook?.activityMon ?? activityMon,
        "logBook.activityTue7":
          activityTue ?? user?.logBook?.activityTue ?? activityTue,
        "logBook.activityWed7":
          activityWed ?? user?.logBook?.activityWed ?? activityWed,
        "logBook.activityThu7":
          activityThu ?? user?.logBook?.activityThu ?? activityThu,
        "logBook.activityFri7":
          activityFri ?? user?.logBook?.activityFri ?? activityFri,
        "logBook.activitySat7":
          activitySat ?? user?.logBook?.activitySat ?? activitySat,
        "logBook.activitySun7":
          activitySun ?? user?.logBook?.activitySun ?? activitySun,
      };
    }

    if (selectedLogbook === 8) {
      dataToUpdate = {
        "logBook.activityMon8":
          activityMon ?? user?.logBook?.activityMon ?? activityMon,
        "logBook.activityTue8":
          activityTue ?? user?.logBook?.activityTue ?? activityTue,
        "logBook.activityWed8":
          activityWed ?? user?.logBook?.activityWed ?? activityWed,
        "logBook.activityThu8":
          activityThu ?? user?.logBook?.activityThu ?? activityThu,
        "logBook.activityFri8":
          activityFri ?? user?.logBook?.activityFri ?? activityFri,
        "logBook.activitySat8":
          activitySat ?? user?.logBook?.activitySat ?? activitySat,
        "logBook.activitySun8":
          activitySun ?? user?.logBook?.activitySun ?? activitySun,
      };
    }

    if (selectedLogbook === 9) {
      dataToUpdate = {
        "logBook.activityMon9":
          activityMon ?? user?.logBook?.activityMon ?? activityMon,
        "logBook.activityTue9":
          activityTue ?? user?.logBook?.activityTue ?? activityTue,
        "logBook.activityWed9":
          activityWed ?? user?.logBook?.activityWed ?? activityWed,
        "logBook.activityThu9":
          activityThu ?? user?.logBook?.activityThu ?? activityThu,
        "logBook.activityFri9":
          activityFri ?? user?.logBook?.activityFri ?? activityFri,
        "logBook.activitySat9":
          activitySat ?? user?.logBook?.activitySat ?? activitySat,
        "logBook.activitySun9":
          activitySun ?? user?.logBook?.activitySun ?? activitySun,
      };
    }

    if (selectedLogbook === 10) {
      dataToUpdate = {
        "logBook.activityMon10":
          activityMon ?? user?.logBook?.activityMon ?? activityMon,
        "logBook.activityTue10":
          activityTue ?? user?.logBook?.activityTue ?? activityTue,
        "logBook.activityWed10":
          activityWed ?? user?.logBook?.activityWed ?? activityWed,
        "logBook.activityThu10":
          activityThu ?? user?.logBook?.activityThu ?? activityThu,
        "logBook.activityFri10":
          activityFri ?? user?.logBook?.activityFri ?? activityFri,
        "logBook.activitySat10":
          activitySat ?? user?.logBook?.activitySat ?? activitySat,
        "logBook.activitySun10":
          activitySun ?? user?.logBook?.activitySun ?? activitySun,
      };
    }

    if (selectedLogbook === 11) {
      dataToUpdate = {
        "logBook.activityMon11":
          activityMon ?? user?.logBook?.activityMon ?? activityMon,
        "logBook.activityTue11":
          activityTue ?? user?.logBook?.activityTue ?? activityTue,
        "logBook.activityWed11":
          activityWed ?? user?.logBook?.activityWed ?? activityWed,
        "logBook.activityThu11":
          activityThu ?? user?.logBook?.activityThu ?? activityThu,
        "logBook.activityFri11":
          activityFri ?? user?.logBook?.activityFri ?? activityFri,
        "logBook.activitySat11":
          activitySat ?? user?.logBook?.activitySat ?? activitySat,
        "logBook.activitySun11":
          activitySun ?? user?.logBook?.activitySun ?? activitySun,
      };
    }

    if (selectedLogbook === 12) {
      dataToUpdate = {
        "logBook.activityMon12":
          activityMon ?? user?.logBook?.activityMon ?? activityMon,
        "logBook.activityTue12":
          activityTue ?? user?.logBook?.activityTue ?? activityTue,
        "logBook.activityWed12":
          activityWed ?? user?.logBook?.activityWed ?? activityWed,
        "logBook.activityThu12":
          activityThu ?? user?.logBook?.activityThu ?? activityThu,
        "logBook.activityFri12":
          activityFri ?? user?.logBook?.activityFri ?? activityFri,
        "logBook.activitySat12":
          activitySat ?? user?.logBook?.activitySat ?? activitySat,
        "logBook.activitySun12":
          activitySun ?? user?.logBook?.activitySun ?? activitySun,
      };
    }

    if (selectedLogbook === 13) {
      dataToUpdate = {
        "logBook.activityMon13":
          activityMon ?? user?.logBook?.activityMon ?? activityMon,
        "logBook.activityTue13":
          activityTue ?? user?.logBook?.activityTue ?? activityTue,
        "logBook.activityWed13":
          activityWed ?? user?.logBook?.activityWed ?? activityWed,
        "logBook.activityThu13":
          activityThu ?? user?.logBook?.activityThu ?? activityThu,
        "logBook.activityFri13":
          activityFri ?? user?.logBook?.activityFri ?? activityFri,
        "logBook.activitySat13":
          activitySat ?? user?.logBook?.activitySat ?? activitySat,
        "logBook.activitySun13":
          activitySun ?? user?.logBook?.activitySun ?? activitySun,
      };
    }

    if (selectedLogbook === 14) {
      dataToUpdate = {
        "logBook.activityMon14":
          activityMon ?? user?.logBook?.activityMon ?? activityMon,
        "logBook.activityTue14":
          activityTue ?? user?.logBook?.activityTue ?? activityTue,
        "logBook.activityWed14":
          activityWed ?? user?.logBook?.activityWed ?? activityWed,
        "logBook.activityThu14":
          activityThu ?? user?.logBook?.activityThu ?? activityThu,
        "logBook.activityFri14":
          activityFri ?? user?.logBook?.activityFri ?? activityFri,
        "logBook.activitySat14":
          activitySat ?? user?.logBook?.activitySat ?? activitySat,
        "logBook.activitySun14":
          activitySun ?? user?.logBook?.activitySun ?? activitySun,
      };
    }

    if (selectedLogbook === 15) {
      dataToUpdate = {
        "logBook.activityMon15":
          activityMon ?? user?.logBook?.activityMon ?? activityMon,
        "logBook.activityTue15":
          activityTue ?? user?.logBook?.activityTue ?? activityTue,
        "logBook.activityWed15":
          activityWed ?? user?.logBook?.activityWed ?? activityWed,
        "logBook.activityThu15":
          activityThu ?? user?.logBook?.activityThu ?? activityThu,
        "logBook.activityFri15":
          activityFri ?? user?.logBook?.activityFri ?? activityFri,
        "logBook.activitySat15":
          activitySat ?? user?.logBook?.activitySat ?? activitySat,
        "logBook.activitySun15":
          activitySun ?? user?.logBook?.activitySun ?? activitySun,
      };
    }

    if (selectedLogbook === 16) {
      dataToUpdate = {
        "logBook.activityMon16":
          activityMon ?? user?.logBook?.activityMon ?? activityMon,
        "logBook.activityTue16":
          activityTue ?? user?.logBook?.activityTue ?? activityTue,
        "logBook.activityWed16":
          activityWed ?? user?.logBook?.activityWed ?? activityWed,
        "logBook.activityThu16":
          activityThu ?? user?.logBook?.activityThu ?? activityThu,
        "logBook.activityFri16":
          activityFri ?? user?.logBook?.activityFri ?? activityFri,
        "logBook.activitySat16":
          activitySat ?? user?.logBook?.activitySat ?? activitySat,
        "logBook.activitySun16":
          activitySun ?? user?.logBook?.activitySun ?? activitySun,
      };
    }

    if (selectedLogbook === 17) {
      dataToUpdate = {
        "logBook.activityMon17":
          activityMon ?? user?.logBook?.activityMon ?? activityMon,
        "logBook.activityTue17":
          activityTue ?? user?.logBook?.activityTue ?? activityTue,
        "logBook.activityWed17":
          activityWed ?? user?.logBook?.activityWed ?? activityWed,
        "logBook.activityThu17":
          activityThu ?? user?.logBook?.activityThu ?? activityThu,
        "logBook.activityFri17":
          activityFri ?? user?.logBook?.activityFri ?? activityFri,
        "logBook.activitySat17":
          activitySat ?? user?.logBook?.activitySat ?? activitySat,
        "logBook.activitySun17":
          activitySun ?? user?.logBook?.activitySun ?? activitySun,
      };
    }

    if (selectedLogbook === 18) {
      dataToUpdate = {
        "logBook.activityMon18":
          activityMon ?? user?.logBook?.activityMon ?? activityMon,
        "logBook.activityTue18":
          activityTue ?? user?.logBook?.activityTue ?? activityTue,
        "logBook.activityWed18":
          activityWed ?? user?.logBook?.activityWed ?? activityWed,
        "logBook.activityThu18":
          activityThu ?? user?.logBook?.activityThu ?? activityThu,
        "logBook.activityFri18":
          activityFri ?? user?.logBook?.activityFri ?? activityFri,
        "logBook.activitySat18":
          activitySat ?? user?.logBook?.activitySat ?? activitySat,
        "logBook.activitySun18":
          activitySun ?? user?.logBook?.activitySun ?? activitySun,
      };
    }

    if (selectedLogbook === 19) {
      dataToUpdate = {
        "logBook.activityMon19":
          activityMon ?? user?.logBook?.activityMon ?? activityMon,
        "logBook.activityTue19":
          activityTue ?? user?.logBook?.activityTue ?? activityTue,
        "logBook.activityWed19":
          activityWed ?? user?.logBook?.activityWed ?? activityWed,
        "logBook.activityThu19":
          activityThu ?? user?.logBook?.activityThu ?? activityThu,
        "logBook.activityFri19":
          activityFri ?? user?.logBook?.activityFri ?? activityFri,
        "logBook.activitySat19":
          activitySat ?? user?.logBook?.activitySat ?? activitySat,
        "logBook.activitySun19":
          activitySun ?? user?.logBook?.activitySun ?? activitySun,
      };
    }

    if (selectedLogbook === 20) {
      dataToUpdate = {
        "logBook.activityMon20":
          activityMon ?? user?.logBook?.activityMon ?? activityMon,
        "logBook.activityTue20":
          activityTue ?? user?.logBook?.activityTue ?? activityTue,
        "logBook.activityWed20":
          activityWed ?? user?.logBook?.activityWed ?? activityWed,
        "logBook.activityThu20":
          activityThu ?? user?.logBook?.activityThu ?? activityThu,
        "logBook.activityFri20":
          activityFri ?? user?.logBook?.activityFri ?? activityFri,
        "logBook.activitySat20":
          activitySat ?? user?.logBook?.activitySat ?? activitySat,
        "logBook.activitySun20":
          activitySun ?? user?.logBook?.activitySun ?? activitySun,
      };
    }

    if (selectedLogbook === 21) {
      dataToUpdate = {
        "logBook.activityMon21":
          activityMon ?? user?.logBook?.activityMon ?? activityMon,
        "logBook.activityTue21":
          activityTue ?? user?.logBook?.activityTue ?? activityTue,
        "logBook.activityWed21":
          activityWed ?? user?.logBook?.activityWed ?? activityWed,
        "logBook.activityThu21":
          activityThu ?? user?.logBook?.activityThu ?? activityThu,
        "logBook.activityFri21":
          activityFri ?? user?.logBook?.activityFri ?? activityFri,
        "logBook.activitySat21":
          activitySat ?? user?.logBook?.activitySat ?? activitySat,
        "logBook.activitySun21":
          activitySun ?? user?.logBook?.activitySun ?? activitySun,
      };
    }

    if (selectedLogbook === 22) {
      dataToUpdate = {
        "logBook.activityMon22":
          activityMon ?? user?.logBook?.activityMon ?? activityMon,
        "logBook.activityTue22":
          activityTue ?? user?.logBook?.activityTue ?? activityTue,
        "logBook.activityWed22":
          activityWed ?? user?.logBook?.activityWed ?? activityWed,
        "logBook.activityThu22":
          activityThu ?? user?.logBook?.activityThu ?? activityThu,
        "logBook.activityFri22":
          activityFri ?? user?.logBook?.activityFri ?? activityFri,
        "logBook.activitySat22":
          activitySat ?? user?.logBook?.activitySat ?? activitySat,
        "logBook.activitySun22":
          activitySun ?? user?.logBook?.activitySun ?? activitySun,
      };
    }

    if (selectedLogbook === 23) {
      dataToUpdate = {
        "logBook.activityMon23":
          activityMon ?? user?.logBook?.activityMon ?? activityMon,
        "logBook.activityTue23":
          activityTue ?? user?.logBook?.activityTue ?? activityTue,
        "logBook.activityWed23":
          activityWed ?? user?.logBook?.activityWed ?? activityWed,
        "logBook.activityThu23":
          activityThu ?? user?.logBook?.activityThu ?? activityThu,
        "logBook.activityFri23":
          activityFri ?? user?.logBook?.activityFri ?? activityFri,
        "logBook.activitySat23":
          activitySat ?? user?.logBook?.activitySat ?? activitySat,
        "logBook.activitySun23":
          activitySun ?? user?.logBook?.activitySun ?? activitySun,
      };
    }

    if (selectedLogbook === 24) {
      dataToUpdate = {
        "logBook.activityMon24":
          activityMon ?? user?.logBook?.activityMon ?? activityMon,
        "logBook.activityTue24":
          activityTue ?? user?.logBook?.activityTue ?? activityTue,
        "logBook.activityWed24":
          activityWed ?? user?.logBook?.activityWed ?? activityWed,
        "logBook.activityThu24":
          activityThu ?? user?.logBook?.activityThu ?? activityThu,
        "logBook.activityFri24":
          activityFri ?? user?.logBook?.activityFri ?? activityFri,
        "logBook.activitySat24":
          activitySat ?? user?.logBook?.activitySat ?? activitySat,
        "logBook.activitySun24":
          activitySun ?? user?.logBook?.activitySun ?? activitySun,
      };
    }

    updateDoc(docRef, dataToUpdate)
      .then(() => {
        e.target.reset();
        toast.dark("Activities updated");
      })
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
                        <th scope="col">Activities</th>
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
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedLogbook(1);
                              setShowLogbook(true);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Add
                          </button>
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
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedLogbook(2);
                              setShowLogbook(true);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Add
                          </button>
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
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedLogbook(3);
                              setShowLogbook(true);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Add
                          </button>
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
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedLogbook(4);
                              setShowLogbook(true);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Add
                          </button>
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
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedLogbook(5);
                              setShowLogbook(true);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Add
                          </button>
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
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedLogbook(6);
                              setShowLogbook(true);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Add
                          </button>
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
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedLogbook(7);
                              setShowLogbook(true);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Add
                          </button>
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
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedLogbook(8);
                              setShowLogbook(true);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Add
                          </button>
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
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedLogbook(9);
                              setShowLogbook(true);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Add
                          </button>
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
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedLogbook(10);
                              setShowLogbook(true);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Add
                          </button>
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
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedLogbook(11);
                              setShowLogbook(true);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Add
                          </button>
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
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedLogbook(12);
                              setShowLogbook(true);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Add
                          </button>
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
                        <th scope="col">Activities</th>
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
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedLogbook(13);
                              setShowLogbook(true);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Add
                          </button>
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
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedLogbook(14);
                              setShowLogbook(true);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Add
                          </button>
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
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedLogbook(15);
                              setShowLogbook(true);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Add
                          </button>
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
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedLogbook(16);
                              setShowLogbook(true);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Add
                          </button>
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
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedLogbook(17);
                              setShowLogbook(true);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Add
                          </button>
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
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedLogbook(18);
                              setShowLogbook(true);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Add
                          </button>
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
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedLogbook(19);
                              setShowLogbook(true);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Add
                          </button>
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
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedLogbook(20);
                              setShowLogbook(true);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Add
                          </button>
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
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedLogbook(21);
                              setShowLogbook(true);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Add
                          </button>
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
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedLogbook(22);
                              setShowLogbook(true);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Add
                          </button>
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
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedLogbook(23);
                              setShowLogbook(true);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Add
                          </button>
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
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedLogbook(24);
                              setShowLogbook(true);
                            }}
                            className="btn btn-dark w-100"
                          >
                            Add
                          </button>
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

      <Modal
        size="lg"
        scrollable
        show={showLogbook}
        onHide={() => {
          setSelectedLogbook(null);
          setShowLogbook(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Activities</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="row">
            <div className="col-12">
              <b>Comment</b>
              <p>
                {user &&
                  user.logBook &&
                  (selectedLogbook === 1
                    ? user.logBook.comment1
                    : selectedLogbook === 2
                    ? user.logBook.comment2
                    : selectedLogbook === 3
                    ? user.logBook.comment3
                    : selectedLogbook === 4
                    ? user.logBook.comment4
                    : selectedLogbook === 5
                    ? user.logBook.comment5
                    : selectedLogbook === 6
                    ? user.logBook.comment6
                    : selectedLogbook === 7
                    ? user.logBook.comment7
                    : selectedLogbook === 8
                    ? user.logBook.comment8
                    : selectedLogbook === 9
                    ? user.logBook.comment9
                    : selectedLogbook === 10
                    ? user.logBook.comment10
                    : selectedLogbook === 11
                    ? user.logBook.comment11
                    : selectedLogbook === 12
                    ? user.logBook.comment12
                    : selectedLogbook === 13
                    ? user.logBook.comment13
                    : selectedLogbook === 14
                    ? user.logBook.comment14
                    : selectedLogbook === 15
                    ? user.logBook.comment15
                    : selectedLogbook === 16
                    ? user.logBook.comment16
                    : selectedLogbook === 17
                    ? user.logBook.comment17
                    : selectedLogbook === 18
                    ? user.logBook.comment18
                    : selectedLogbook === 19
                    ? user.logBook.comment19
                    : selectedLogbook === 20
                    ? user.logBook.comment20
                    : selectedLogbook === 21
                    ? user.logBook.comment21
                    : selectedLogbook === 22
                    ? user.logBook.comment22
                    : selectedLogbook === 23
                    ? user.logBook.comment23
                    : selectedLogbook === 24
                    ? user.logBook.comment24
                    : "")}
              </p>
            </div>

            <form
              onSubmit={updateActivities}
              className="col-12 table-responsive"
            >
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Day</th>
                    <th scope="col">Activities</th>
                    <th scope="col">Upload</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Monday</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="activityMon"
                        placeholder="Activity"
                        onChange={(e) => setActivityMon(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setActivityMonImg(e)}
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">Tuesday</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="activityTue"
                        placeholder="Activity"
                        onChange={(e) => setActivityTue(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setActivityTueImg(e)}
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">Wednesday</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="activityWed"
                        placeholder="Activity"
                        onChange={(e) => setActivityWed(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setActivityWedImg(e)}
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">Thursday</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="activityThu"
                        placeholder="Activity"
                        onChange={(e) => setActivityThu(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setActivityThuImg(e)}
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">Friday</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="activityFri"
                        placeholder="Activity"
                        onChange={(e) => setActivityFri(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setActivityFriImg(e)}
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">Saturday</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="activitySat"
                        placeholder="Activity"
                        onChange={(e) => setActivitySat(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setActivitySatImg(e)}
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">Sunday</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="activitySun"
                        placeholder="Activity"
                        onChange={(e) => setActivitySun(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setActivitySunImg(e)}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="col-12 mt-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-dark w-100"
                >
                  {isLoading ? "Updating Activities..." : "Update Activities"}
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
