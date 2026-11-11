import { useState } from 'react';
import './Flashcard.css';

function Flashcard({ card, current, total }) {
  const [flipped, setFlipped] = useState(false);

  function handleFlip() {
    setFlipped(!flipped);
  }

  return (
    <>
      <p className="card-counter">{current} / {total}</p>
      <p className="click-hint">Click card to reveal answer</p>
      <div className="card-container" onClick={handleFlip}>
        <div className={`card-inner ${flipped ? 'flipped' : ''}`}>
          <div className="card-front">
            <span className="card-label">Question</span>
            <p className="card-text">{card.question}</p>
          </div>
          <div className="card-back">
            <span className="card-label">Answer</span>
            <p className="card-text">{card.answer}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Flashcard;