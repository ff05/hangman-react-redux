import hangman from '../fixtures/hangman'
import ADD_GUESS from '../actions/guesses/add'

export default (currentState = hangman, { type, payload } = {}) => {
  switch(type) {
    case ADD_GUESS:
      return {
        ...hangman,
        guesses: [...hangman.guesses, payload]
      }

    default :
      return currentState
  }
}
