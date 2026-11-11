import './Controls.css';

function Controls({ onPrev, onNext, onKnow, onDontKnow, onShuffle, onDelete }) {
  return (
    <div className="controls">
      <div className="nav-buttons">
        <button className="btn btn-nav" onClick={onPrev}>← Prev</button>
        <button className="btn btn-nav" onClick={onNext}>Next →</button>
      </div>
      <div className="action-buttons">
        <button className="btn btn-know" onClick={onKnow}>✓ Know it</button>
        <button className="btn btn-dontknow" onClick={onDontKnow}>✗ Don't know</button>
      </div>
      <div className="extra-buttons">
        <button className="btn btn-shuffle" onClick={onShuffle}>⇄ Shuffle</button>
        <button className="btn btn-delete" onClick={onDelete}>🗑 Delete</button>
      </div>
    </div>
  );
}

export default Controls;