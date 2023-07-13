import Home from "./components/home/Home";
import Header from "./components/header/Header";
import "./App.css";
import data from "./data/db.json";
import Navbar from "./components/Navbar/Navbar";
import TourDetails from "./components/TourDetails/TourDetails"
import { Routes, Route } from "react-router";


// const data = require('./data/data.json')
function App() {
    return (
        // <div className="App">
            // <Home data={data} />
            
        // </div> 
<>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/city/:id" element={<TourDetails/>}/>
        </Routes>
        </>
    );

    // function handleMessage(data){
    //   console.log(data);
    // }
    // return (
    //   <div className="App">
    //   <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Home handleMessage={handleMessage} />} />
    //     </Routes>
    //   </div>
    // );



    


}

export default App;