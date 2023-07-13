// import React from "react";
// import "./Tours.css";
// function Tours(props) {
//     return (
//         <div className="tours" >
//             {
//                 props.data.map((obj, i) => (
//                     < div key={i} className="tour" >
//                         <h3>{obj.name}</h3>
//                         <img src={obj.image} alt={obj.id} />
//                     </div> 
//                 ))}
//         </div>
//     );
// }

// export default Tours;




import db from '../../data/db.json'
import Tour from './tour/Tour';
import './Tours.css';
function Tours() {
    return (
        <div>
            <div id='tours' className='services'>
                <h2 className='service-header'> Our Tours</h2>
            </div>
            <div className='flex'>
                {db.map((obj, i) => (
                    <Tour key={i} id={obj.id} name={obj.name} img={obj.image} info={obj.info} />
                ))
                }
            </div>
        </div>
    )
}
export default Tours;