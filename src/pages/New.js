import { useState } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';

const New = ({ dispatch }) => {
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === 'optionOne') {
      setOptionOne(value);
    } else if (name === 'optionTwo') {
      setOptionTwo(value);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(optionOne, optionTwo));
    setOptionOne('');
    setOptionTwo('');
  };
  return (
    <div className="container">
      <h1>Would you rather</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="optionOne">
          First option
          <input
            id="optionOne"
            name="optionOne"
            type="text"
            onChange={handleOnChange}
          />
        </label>
        <label htmlFor="optionTwo">
          Second option
          <input
            id="optionTwo"
            name="optionTwo"
            type="text"
            onChange={handleOnChange}
          />
        </label>
        <button disabled={!optionOne || !optionTwo}>Submit</button>
      </form>
    </div>
  );
};

export default connect()(New);
