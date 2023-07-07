import { useRef, useState } from 'react';
import './board.css'
import './card.js'
import Card from './card.js';
import userEvent from '@testing-library/user-event';

var idCount = 0;
const todoColumn = "to-do";
const inProgressColumn = "in-progress";
const testColumn = "test";
const doneColumn = "done";
function GenerateId(){
    idCount = idCount + 1;
    return idCount;
}

function CloseOverlay(){
    document.getElementById("overlay").style.visibility = "hidden"
    document.getElementById("addCardButton").style.visibility = "visible"
}

function OpenOverlay(){
    document.getElementById("overlayTitle").value = ""
    document.getElementById("overlayDescription").value = ""
    document.getElementById("overlay").style.visibility = "visible"
    document.getElementById("addCardButton").style.visibility = "hidden"
}

export default function Board() {
    const [cardList, setCardList] = useState([])
    const titleRef = useRef(null)
    const descriptionRef = useRef(null)

    const AddCard = (id = null, column = todoColumn) => {
        id = "3"
        CloseOverlay()
        var title = titleRef.current.value
        var description = descriptionRef.current.value
        if(title == ""){
            title = "Untitled card"
        }
        if(description == ""){
            description = "Looks like you forgot to add a description to your card, press the pen & paper icon to edit your card."
        }
        if(typeof id != 'number'){
            id = GenerateId()
        }
        setCardList([...cardList, {
            title: title,
            description: description,
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
        var updatedCard = newCardList[cardIndex]
        newCardList.splice(cardIndex, 1)
        updatedCard.column = newColumn
        newCardList.push(updatedCard)
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
        var updatedCard = newCardList[cardIndex]
        newCardList.splice(cardIndex, 1)
        updatedCard.column = newColumn
        newCardList.push(updatedCard)
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
            <div id="overlay">
                <div className="cardTailor">
                    <textarea id="overlayTitle" ref={titleRef} placeholder="New card title"></textarea>
                    <textarea id="overlayDescription" ref={descriptionRef} placeholder="Description for my new card, hope I finish this card in time!"></textarea>
                    <div className='buttonsDiv'>
                        <button className='overlayButton' id='cancel' onClick={CloseOverlay}></button>
                        <button className='overlayButton' id='accept' onClick={AddCard}></button>
                    </div>
                </div>
            </div>
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
            </div>
            <button id='addCardButton' onClick={OpenOverlay}>+</button>
        </div>
        
    );
}