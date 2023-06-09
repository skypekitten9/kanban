import './card.css'
export default function Card(){
    return (
        <div className="card">
            <p className='cardTitle'>Title Example</p>
            <p className='cardDescription'>This is an example of a descriotion, it's super duper long so I can see how it looks</p>
            <div className='buttonsDiv'>
                <button className='cardButton'>🗑️</button>
                <button className='cardButton'>📝</button>
                <button className='cardButton'>←</button>
                <button className='cardButton'>→</button>
            </div>
        </div>
    );
}