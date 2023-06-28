import { useState } from 'react';
import './board.css'
import './card.js'
import Card from './card.js';

var idCount = 0;
const todoColumn = "to-do";
const inProgressColumn = "in-progress";
const testColumn = "test";
const doneColumn = "done";
function GenerateId(){
    idCount = idCount + 1;
    return idCount;
}

export default function Board() {
    const [cardList, setCardList] = useState([])

    const AddCard = () => {
        const id = GenerateId()
        setCardList([...cardList, {
            title: "New Title " + id,
            description: "This is a new description from props",
            id: id,
            column: todoColumn}]);
        console.log("id: " + id)
    };

    const NextColumn = (cardId) => {
        var cardIndex = cardList.map(card => { return card.id; }).indexOf(cardId);
        console.log(cardId)
        console.log(cardIndex)
        const oldColumn = cardList[cardIndex].column
        var newColumn = "";
        if(oldColumn == todoColumn){
            newColumn = inProgressColumn
        }
        else if(oldColumn == inProgressColumn){
            newColumn = testColumn
        }
        else{
            newColumn = doneColumn;
        }
        var newCardList = [...cardList]
        newCardList[cardIndex].column = newColumn
        setCardList(newCardList)
    };

    const PreviousColumn = (cardId) => {
        var cardIndex = cardList.map(card => { return card.id; }).indexOf(cardId);
        
        const oldColumn = cardList[cardIndex].column
        var newColumn = "";
        if(oldColumn == doneColumn){
            newColumn = testColumn
        }
        else if(oldColumn == testColumn){
            newColumn = inProgressColumn
        }
        else{
            newColumn = todoColumn;
        }
        
        var newCardList = [...cardList]
        newCardList[cardIndex].column = newColumn
        setCardList(newCardList)
    };

    const RemoveCard = (cardId) => {
        var cardIndex = cardList.map(card => { return card.id; }).indexOf(cardId);
        var newCardList = [...cardList]
        newCardList.splice(cardIndex, 1)
        setCardList(newCardList)
    };

    return (
        <div className="board">
            <div className="boardColumn" id='to-do'>
                {cardList.map(item => {if (item.column == todoColumn){return <Card cardData={item} NextColumn={NextColumn} PreviousColumn={PreviousColumn} RemoveCard={RemoveCard} key={item.id}></Card>}})}
            </div>
            <div className="boardColumn" id='in-progress'>
                {cardList.map(item => {if (item.column == inProgressColumn){return <Card cardData={item}  NextColumn={NextColumn} PreviousColumn={PreviousColumn} RemoveCard={RemoveCard} key={item.id}></Card>}})}
            </div>
            <div className="boardColumn" id='test'>
                {cardList.map(item => {if (item.column == testColumn){return <Card cardData={item}  NextColumn={NextColumn} PreviousColumn={PreviousColumn} RemoveCard={RemoveCard} key={item.id}></Card>}})}
            </div>
            <div className="boardColumn" id='done'>
            {cardList.map(item => {if (item.column == doneColumn){return <Card cardData={item}  NextColumn={NextColumn} PreviousColumn={PreviousColumn} RemoveCard={RemoveCard} key={item.id}></Card>}})}
                <button onClick={AddCard}>Add card</button>
            </div>
        </div>
    );
}