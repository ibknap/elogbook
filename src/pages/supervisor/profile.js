import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { toast } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export default function Profile() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="E LogBook" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/logo.png" />
        <meta name="author" content="E LogBook" />
        <title>E LogBook - Profile</title>

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
          <div className="row">
            <div className="col-12 mb-5 text-center">
              <Link
                href="/supervisor/manage_students"
                className="btn btn-lg btn-dark rounded-1"
              >
                MANAGE STUDENT
              </Link>
            </div>

            <div className="col-12 text-center">
              <button
                onClick={() => toast.dark("Currently not availble")}
                className="btn btn-lg btn-outline-dark rounded-1"
              >
                VIEW PROFILE
              </button>
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
