import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function ELogbook() {
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

            <div className="col-md-8 table-responsive">
              <table class="table table-bordered">
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
                        id="fromDate1"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="toDate1"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="desc1"
                        placeholder="Activity description"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">2</th>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="fromDate2"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="toDate2"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="desc2"
                        placeholder="Activity description"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">3</th>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="fromDate3"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="toDate3"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="desc3"
                        placeholder="Activity description"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">4</th>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="fromDate4"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="toDate4"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="desc4"
                        placeholder="Activity description"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">5</th>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="fromDate5"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="toDate5"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="desc5"
                        placeholder="Activity description"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">6</th>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="fromDate6"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="toDate6"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="desc6"
                        placeholder="Activity description"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">7</th>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="fromDate7"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="toDate7"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="desc7"
                        placeholder="Activity description"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">8</th>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="fromDate8"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="toDate8"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="desc8"
                        placeholder="Activity description"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">9</th>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="fromDate9"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="toDate9"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="desc9"
                        placeholder="Activity description"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">10</th>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="fromDate10"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="toDate10"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="desc10"
                        placeholder="Activity description"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="fromDate11"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="toDate11"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="desc11"
                        placeholder="Activity description"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">12</th>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="fromDate12"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="toDate12"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="desc12"
                        placeholder="Activity description"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">13</th>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="fromDate13"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="toDate13"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="desc13"
                        placeholder="Activity description"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">14</th>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="fromDate14"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="toDate14"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="desc14"
                        placeholder="Activity description"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">15</th>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="fromDate15"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="toDate15"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="desc15"
                        placeholder="Activity description"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">16</th>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="fromDate16"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="toDate16"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="desc16"
                        placeholder="Activity description"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">17</th>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="fromDate17"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="toDate17"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="desc17"
                        placeholder="Activity description"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">18</th>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="fromDate18"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="toDate18"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="desc18"
                        placeholder="Activity description"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">19</th>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="fromDate19"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="toDate19"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="desc19"
                        placeholder="Activity description"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">20</th>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="fromDate20"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="toDate20"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="desc20"
                        placeholder="Activity description"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">21</th>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="fromDate21"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="toDate21"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="desc21"
                        placeholder="Activity description"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">22</th>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="fromDate22"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="toDate22"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="desc22"
                        placeholder="Activity description"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">23</th>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="fromDate23"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="toDate23"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="desc23"
                        placeholder="Activity description"
                      />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">24</th>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="fromDate24"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="toDate24"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="desc24"
                        placeholder="Activity description"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
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
