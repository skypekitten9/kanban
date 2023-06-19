import { useState } from 'react';
import './board.css'
import './card.js'
import Card from './card.js';

var idCount = 0;
function GenerateId(){
    idCount = idCount + 1;
    return idCount;
}

export default function Board() {
    const [todoList, setTodoList] = useState([])
    const [inProgressList, setInProgressList] = useState([])
    const [testList, setTestList] = useState([])
    const [doneList, setDoneList] = useState([])

    const AddCard = () => {
        const id = GenerateId()
        setTodoList([...todoList, {
            title: "New Title",
            description: "This is a new description from props",
            id: id}]);
        console.log("id: " + id)
    };

    return (
        <div className="board">
            <div className="boardColumn" id='to-do'>
                {todoList.map(item => <Card title={item.title} description={item.description}></Card>)}
            </div>
            <div className="boardColumn" id='in-progress'>{inProgressList}</div>
            <div className="boardColumn" id='test'>{testList}</div>
            <div className="boardColumn" id='done'>
                {doneList}
                <button onClick={AddCard}>Add card</button>
            </div>
        </div>
    );
}