import { useState } from 'react';
import './card.css'
export default function Card({cardData, NextColumn, PreviousColumn, RemoveCard}){
    var cardId;
    cardId = cardData.id
    return (
        <div className="card">
            <p className='cardTitle'>{cardData.title}</p>
            <p className='cardDescription'>{cardData.description}</p>
            <div className='buttonsDiv'>
                <button className='cardButton' onClick={() => RemoveCard(cardId)}>🗑️</button>
                <button className='cardButton'>📝</button>
                <button className='cardButton' onClick={() => PreviousColumn(cardId)}>←</button>
                <button className='cardButton' onClick={() => NextColumn(cardId)}>→</button>
            </div>
        </div>
    );
}