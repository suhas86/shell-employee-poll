import { _saveQuestion, _saveQuestionAnswer } from './_DATA';

describe('Test _DATA apis', () => {
  it('should throw error if no optionOneText, optionTwoText, or author', async () => {
    const question = {
      optionOneText: '',
      optionTwoText: '',
      author: '',
    };
    await expect(_saveQuestion(question)).rejects.toEqual(
      'Please provide optionOneText, optionTwoText, and author'
    );
  });
  it('should return saved question', async () => {
    const question = {
      optionOneText: 'Option one',
      optionTwoText: 'Option two',
      author: 'mtsamis',
    };
    const res = await _saveQuestion(question);
    expect(res).toHaveProperty('id');
    expect(res).toHaveProperty('optionOne');
    expect(res).toHaveProperty('optionTwo');
    expect(res).toHaveProperty('author');
  });
  it('Should return true if user has voted for option', async () => {
    const answer = {
      authedUser: 'mtsamis',
      qid: '8xf0y6ziyjabvozdd253nd',
      answer: 'optionOne',
    };
    const res = await _saveQuestionAnswer(answer);
    expect(res).toBe(true);
  });
  it('Should throw error if no authedUser, qid, or answer', async () => {
    const answer = {
      authedUser: '',
      qid: '',
      answer: '',
    };
    await expect(_saveQuestionAnswer(answer)).rejects.toEqual(
      'Please provide authedUser, qid, and answer'
    );
  });
});
