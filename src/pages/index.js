import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import homeImgs from "@/components/home_imgs";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const carouselConfig = {
  autoplay: true,
  autoplayTimeout: 2500,
  dots: false,
  margin: 0,
  loop: true,
  items: 1,
};

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="E LogBook" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/logo.png" />
        <meta name="author" content="E LogBook" />
        <title>E LogBook By David</title>

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

        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-12 p-0">
              <OwlCarousel {...carouselConfig}>
                {homeImgs.map((img, index) => (
                  <img
                    src={img}
                    alt="image"
                    width="100%"
                    height="500px"
                    style={{ objectFit: "cover" }}
                    key={index}
                  />
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-6">
              <h5 className="mb-3">ABOUT THE e-LOGBOOK</h5>

              <p>
                the electronic logbook (e-logbook) is a digital tool used for
                recording and managing various types of data and information in
                a structured and organized manner. It provides a more efficient
                and convenient alternative to traditional paper-based logbooks.
                the e-logbook is a digital version of a traditional logbook used
                to record and track various activities, events or data it offers
                the advantage of convenience, accessibility and efficient data
                management compared to paper-based logbook
              </p>
            </div>

            <div className="col-sm-6">
              <h5 className="mb-3">ABOUT SIWES IN MAU. YOLA</h5>

              <p>
                Modibbo Adama University, Yola is one of the participating
                institutions. All the technological and Science related programs
                of the university with exception of those in school of
                management have been approved for SIWES by the National
                Universities Commission (NUC). An average of 1,100 students of
                the university has been participating in the scheme every year
                for the past decade. Modibbo Adama University, Yola believes, in
                the provision of an avenue for students to acquire practical
                industrial exposure in their respective disciplines during the
                years of their studies, this is because; such exposure would
                prepare students to fit more readily into industrial work
                environment after graduation. The scheme also offers lecturers
                the opportunity to evaluate the relevance of training to the
                needs of industries.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
