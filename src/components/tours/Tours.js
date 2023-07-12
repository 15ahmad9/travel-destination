import React from "react";
import "./Tours.css";
function Tours(props) {
    return (
        <div className="tours" >
            {
                props.data.map((obj, i) => (
                    < div key={i} className="tour" >
                        <h3>{obj.name}</h3>
                        <img src={obj.image} alt={obj.id} />
                    </div> 
                ))}
        </div>
    );
}

export default Tours;