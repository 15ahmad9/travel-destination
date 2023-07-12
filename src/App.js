import Home from "./components/home/Home";
import "./App.css";
import data from "./data/db.json";

// const data = require('./data/data.json')
function App() {
    return (
        <div className="App">
            <Home data={data} />
        </div> 
    );
}

export default App;