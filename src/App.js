import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import "./styles.css";
import NavBar from "./component/Navbar/Navbar";
const Home = React.lazy(() => import("./component/Home/Home"));
const MyPayment = React.lazy(() => import("./component/MyPayment/MyPayment"));
const MyOffer = React.lazy(() => import("./component/MyOfferAndCert/MyOffer"));
const MyJobs = React.lazy(() => import("./component/MyJobs/MyJobs"));
const MyCert = React.lazy(() => import("./component/MyOfferAndCert/MyCert"));
const Spinner = React.lazy(() => import("./component/spinner/spinner"));
export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="myjobs" element={<MyJobs />}></Route>
          <Route path="mypayment" element={<MyPayment />}></Route>
          <Route path="myoffer" element={<MyOffer />}></Route>
          <Route path="mycert" element={<MyCert />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}
