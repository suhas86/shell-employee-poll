import './OptionCard.css';

const OptionCard = ({ option, onClick, voted, isMarkAnswer }) => {
  return (
    <div className={`option-card ${isMarkAnswer ? 'mark' : ''}`}>
      <p>{option}</p>
      {!voted && <button onClick={onClick}>Click</button>}
    </div>
  );
};

export default OptionCard;
