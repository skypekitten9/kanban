import { useState } from 'react';
import './board.css'
import './card.js'
import Card from './card.js';
export default function Board() {
    const [list, setList] = useState([])

    const AddCard = () => {
        console.log("Adding card...");
        setList([...list, <Card></Card>]);

    };

    return (
        <div className="board">
            <div className="boardColumn" id='to-do'>
                {list.map((item) =>  {return item;})}
            </div>
            <div className="boardColumn" id='in-progress'></div>
            <div className="boardColumn" id='test'></div>
            <div className="boardColumn" id='done'>
                <button onClick={() => AddCard()}>Add card</button>
            </div>
        </div>
    );
}