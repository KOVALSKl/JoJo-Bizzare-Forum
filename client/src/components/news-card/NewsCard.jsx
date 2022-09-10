import { Link } from 'react-router-dom';
import './NewsCard.css'

function NewsCard({ card }) {

    return (
        <div className='card'>
            <div className="card-preview" style={
                { background: `url(http://localhost:3000/static/news/${card.image}) no-repeat center center` }
            }>

            </div>
            <div className="card-content">
                <div className="card-title">
                    <h2 className='title'>
                        {card.title}
                    </h2>
                    <div className='card-date'>
                        {new Date(card.date).toLocaleDateString()}
                    </div>
                </div>
                <div className="card-body">
                    {card.description}
                </div>
                <div className="more-btn">
                    <Link to={`/news/${card.id}`}>More</Link>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;