import React from "react";
import Header from "../header/Header";
import Footer from '../footer/Footer';
import Tours from "../tours/Tours";
import "./Home.css";
function Home(props) {
    return (
        <div className="home">
            <Header />
            <Tours data={props.data} />
            <Footer />
        </div>
    );
}

export default Home;