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
      </main>
    </>
  );
}
