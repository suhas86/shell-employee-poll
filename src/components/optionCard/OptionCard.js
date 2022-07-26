import './OptionCard.css';

const OptionCard = ({ option, onClick }) => {
  return (
    <div className="option-card">
      <p>{option}</p>
      <button onClick={onClick}>Click</button>
    </div>
  );
};

export default OptionCard;
