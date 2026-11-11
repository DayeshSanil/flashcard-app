import { useState, useEffect } from 'react';
import Flashcard from './components/Flashcard';
import Controls from './components/Controls';
import AddCard from './components/AddCard';
import './App.css';

const defaultCards = [
  { question: "What is Big O notation?", answer: "A way to describe the time/space complexity of an algorithm as input grows.", known: false },
  { question: "What is Binary Search?", answer: "Search algorithm that halves the search space each step. O(log n).", known: false },
  { question: "What is a Hash Map?", answer: "A data structure that stores key-value pairs with O(1) average lookup.", known: false },
];

function App() {
  const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem('flashcards');
    return saved ? JSON.parse(saved) : defaultCards;
  });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    localStorage.setItem('flashcards', JSON.stringify(cards));
  }, [cards]);

  function handleNext() {
    setIndex((prev) => (prev + 1) % cards.length);
  }

  function handlePrev() {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  }

  function handleKnow() {
    const updated = [...cards];
    updated[index].known = true;
    setCards(updated);
    handleNext();
  }

  function handleDontKnow() {
    const updated = [...cards];
    updated[index].known = false;
    setCards(updated);
    handleNext();
  }

  function handleShuffle() {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setIndex(0);
  }

  function handleDelete() {
    if (cards.length === 1) return;
    const updated = cards.filter((_, i) => i !== index);
    setCards(updated);
    setIndex(0);
  }

  function handleAdd(newCard) {
    setCards([...cards, newCard]);
  }

  const known = cards.filter(c => c.known).length;

  return (
    <div className="app">
      <div className="header">
        <h1>⚡ Flashcard Study</h1>
        <p>Click a card to flip it</p>
      </div>

      <div className="stats">
        <div className="stat-box">
          <span>{cards.length}</span>
          <p>Total Cards</p>
        </div>
        <div className="stat-box">
          <span style={{ color: '#34d399' }}>{known}</span>
          <p>Known</p>
        </div>
        <div className="stat-box">
          <span style={{ color: '#f87171' }}>{cards.length - known}</span>
          <p>To Learn</p>
        </div>
      </div>

      {cards.length === 0 ? (
        <p className="empty">No cards yet. Add one below!</p>
      ) : (
        <>
          <Flashcard
            card={cards[index]}
            current={index + 1}
            total={cards.length}
          />
          <Controls
            onNext={handleNext}
            onPrev={handlePrev}
            onKnow={handleKnow}
            onDontKnow={handleDontKnow}
            onShuffle={handleShuffle}
            onDelete={handleDelete}
          />
        </>
      )}

      <AddCard onAdd={handleAdd} />
    </div>
  );
}

export default App;