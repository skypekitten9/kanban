import './card.css'
export default function Card({title, description}){
    return (
        <div className="card">
            <p className='cardTitle'>{title}</p>
            <p className='cardDescription'>{description}</p>
            <div className='buttonsDiv'>
                <button className='cardButton'>🗑️</button>
                <button className='cardButton'>📝</button>
                <button className='cardButton'>←</button>
                <button className='cardButton'>→</button>
            </div>
        </div>
    );
}