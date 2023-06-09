import './board.css'
import './card.js'
import Card from './card.js';
export default function Board() {
    return (
        <div className="board">
            <div className="boardColumn" id='to-do'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <div className="boardColumn" id='in-progress'></div>
            <div className="boardColumn" id='test'></div>
            <div className="boardColumn" id='done'></div>
        </div>
    );
}