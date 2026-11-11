import { useState } from 'react';
import './AddCard.css';

function AddCard({ onAdd }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [open, setOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!question.trim() || !answer.trim()) return;
    onAdd({ question, answer, known: false });
    setQuestion('');
    setAnswer('');
    setOpen(false);
  }

  return (
    <div className="add-section">
      <button className="btn-add-toggle" onClick={() => setOpen(!open)}>
        {open ? '✕ Cancel' : '+ Add Flashcard'}
      </button>

      {open && (
        <form className="add-form" onSubmit={handleSubmit}>
          <textarea
            placeholder="Question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={3}
          />
          <textarea
            placeholder="Answer..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            rows={3}
          />
          <button type="submit" className="btn-add-submit">Add Card</button>
        </form>
      )}
    </div>
  );
}

export default AddCard;