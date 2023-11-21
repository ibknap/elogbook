import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useAuth } from "@/firebase/fire_auth_context";
import { db } from "@/firebase/fire_config";
import { toast } from "react-toastify";
import { Image } from "iconsax-react";
const storage = getStorage();

const inter = Inter({ subsets: ["latin"] });

export default function OrgDetails() {
  const [isLoadingOrg, setIsLoadingOrg] = useState(false);
  const [isLoadingSuper, setIsLoadingSuper] = useState(false);
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [orgContact, setOrgContact] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [supervisorName, setSupervisorName] = useState("");
  const [supervisorContact, setSupervisorContact] = useState("");
  const [supervisorRank, setSupervisorRank] = useState("");
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

  const updateOrg = async (e) => {
    e.preventDefault();
    setIsLoadingOrg(true);

    const collRef = collection(db, "users");
    const docRef = doc(collRef, authUser.email);

    const dataToUpdate = {
      org: {
        name: name.length === 0 && user && user.org ? user.org.name : name,
        specialization:
          specialization.length === 0 && user && user.org
            ? user.org.specialization
            : specialization,
        contact:
          orgContact.length === 0 && user && user.org
            ? user.org.contact
            : orgContact,
        address:
          address.length === 0 && user && user.org ? user.org.address : address,
        website:
          website.length === 0 && user && user.org ? user.org.website : website,
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
      .finally(() => setIsLoadingOrg(false));
  };

  const updateSupervisor = async (e) => {
    e.preventDefault();
    setIsLoadingSuper(true);

    const collRef = collection(db, "users");
    const docRef = doc(collRef, authUser.email);
    const dataToUpdate = {
      "supervisor.name":
        supervisorName.length === 0 && user && user.supervisor
          ? user.supervisor.name
          : supervisorName,
      "supervisor.contact":
        supervisorContact.length === 0 && user && user.supervisor
          ? user.supervisor.contact
          : supervisorContact,
      "supervisor.rank":
        supervisorRank.length === 0 && user && user.supervisor
          ? user.supervisor.rank
          : supervisorRank,
    };

    updateDoc(docRef, dataToUpdate)
      .then(() => {
        e.target.reset();
        toast.dark("Supervisor details updated");
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
      .finally(() => setIsLoadingSuper(false));
  };

  const updateImage = async (e) => {
    setIsLoadingImage(true);
    toast.dark("Updating supervisor image");

    const selectedImage = e.target.files[0];
    const imageRef = ref(storage, `images/${selectedImage.name}`);
    await uploadBytes(imageRef, selectedImage);

    getDownloadURL(imageRef)
      .then(async (image) => {
        const collRef = collection(db, "users");
        const docRef = doc(collRef, authUser.email);
        const dataToUpdate = {
          "supervisor.image": image,
        };

        updateDoc(docRef, dataToUpdate)
          .then(() => toast.dark("Supervisor image updated"))
          .catch((error) => {
            if (error.code == "not-found") {
              toast.dark("Supervisor not found", { className: "text-danger" });
            } else {
              toast.dark(`Error occured: ${error.message}`, {
                className: "text-danger",
              });
            }
          })
          .finally(() => setIsLoadingImage(false));
      })
      .catch((error) => {
        toast.dark(`Error occured uploading image: ${error.message}`, {
          className: "text-danger",
        });
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
          <div className="row">
            <div className="col-md-6 mt-5">
              <h4 className="text-center mb-4">Organization Details</h4>

              <form
                onSubmit={updateOrg}
                className="row d-flex justify-content-center align-items-center"
              >
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                      Org Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder={
                        user && user.org ? user.org.name : "Org Name"
                      }
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="specialization">
                      Specialization
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="specialization"
                      placeholder={
                        user && user.org
                          ? user.org.specialization
                          : "Specialization"
                      }
                      onChange={(e) => setSpecialization(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="contact">
                      Contact
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="contact"
                      placeholder={
                        user && user.org ? user.org.contact : "Contact"
                      }
                      onChange={(e) => setOrgContact(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="address">
                      Address
                    </label>
                    <textarea
                      style={{ height: 125 }}
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder={
                        user && user.org ? user.org.address : "Address"
                      }
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="website">
                      Website
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="website"
                      placeholder={
                        user && user.org ? user.org.website : "Website"
                      }
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-12 mt-3">
                  <button
                    type="submit"
                    disabled={isLoadingOrg}
                    className="btn btn-dark w-100"
                  >
                    {isLoadingOrg ? "Updating Org..." : "Update Org"}
                  </button>
                </div>
              </form>
            </div>

            <div className="col-md-6 mt-5">
              <h4 className="text-center mb-4">Industry-Based Supervisor</h4>

              <form onSubmit={updateSupervisor} className="row d-flex">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="supervisor">
                      Supervisor Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="supervisor"
                      placeholder={
                        user && user.supervisor
                          ? user.supervisor.name
                          : "Supervisor Name"
                      }
                      onChange={(e) => setSupervisorName(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="supervisorContact">
                      Contact
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="supervisorContact"
                      placeholder={
                        user && user.supervisor
                          ? user.supervisor.contact
                          : "Contact"
                      }
                      onChange={(e) => setSupervisorContact(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="rank">
                      Rank
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="rank"
                      placeholder={
                        user && user.supervisor ? user.supervisor.rank : "Rank"
                      }
                      onChange={(e) => setSupervisorRank(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-6 text-center">
                  <div className="mb-3">
                    {user && user.supervisor ? (
                      <img
                        src={user.supervisor.image}
                        alt="profile image"
                        className="shadow profile_img"
                        style={{ width: 150, height: 150, objectFit: "cover" }}
                      />
                    ) : (
                      <Image
                        size={150}
                        variant="Bold"
                        className="text-primary"
                      />
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="supervisorImg">
                      Supervisor Picture (optional)
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="supervisorImg"
                      disabled={isLoadingImage}
                      placeholder="Supervisor Picture (optional)"
                      onChange={(e) => updateImage(e)}
                    />
                  </div>
                </div>

                <div className="col-12 mt-3">
                  <button
                    type="submit"
                    disabled={isLoadingSuper}
                    className="btn btn-dark w-100"
                  >
                    {isLoadingSuper
                      ? "Updating Supervisor..."
                      : "Update Supervisor"}
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
