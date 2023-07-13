import './Tour.css';
import { Link } from 'react-router-dom';

function Tour({ img, name, id }) {
    return (
        <div className="card">
            <Link to={`city/${id}`}>
                <img src={img} alt={name} className="card-img" />
            </Link>
            <div className="card-content">
                <h3 className="card-title">{name}</h3>
                {/* <div className='card-info'>
                    <div>{info.substr(0, 200) + ' .......'}</div>
                </div>
                <div className='card-footer'>
                    <button className='card-button'>Read More</button>
                </div> */}
            </div>
        </div>
    )
};

export default Tour;