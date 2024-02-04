import React, { useState, useEffect } from "react";
import Content from "../components/Content/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Spinner from "./Spinner";
function Home() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {load ? (
        <div className="spinner__container">
          <Spinner />
        </div>
      ) : (
        <>
          <main className="main">
            <Header />
            <Main />
          </main>
          <Content />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
