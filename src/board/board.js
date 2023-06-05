import './board.css'
export default function Board() {
    return (
        <div className="board">
            <div className="boardColumn" id='to-do'>
                <div className='card'>
                    <p className='cardText'>This is a very long card text to see how it wraps inside the card componenet</p>
                </div>
                <div className='card'></div>
                <div className='card'></div>
            </div>
            <div className="boardColumn" id='in-progress'></div>
            <div className="boardColumn" id='test'></div>
            <div className="boardColumn" id='done'></div>
        </div>
    );
}