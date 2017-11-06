import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import addGuess from '../actions/guesses/add'
import Counter from './Counter'

class Hangman extends PureComponent {

  wrongGuessCount(word, guesses) {
    var count = 0;
    for (var i = 0 ; i < guesses.length ; i++) {
      if (word.indexOf(guesses[i]) === -1)
      count += 1;
    }
    return (<p>{6 - count} turns left</p>)
  }

  showGuess(word, guesses) {
    var wordArr = word.split("");
    var wordArr2 = wordArr.map(function(el) {
      if (guesses.includes(el)) return el;
      else return "_";
    });
    return (<h2>{wordArr2.join(" ")}</h2>)
  }

  handleSubmit(value) {
    return alert(value)
  }

  onChange(event) {
    console.log(this.props)
    this.props.addGuess(event.target.value)
  }

  showGuesses(guesses) {
    return (<p>Tries: {guesses.join(", ")}</p>)
  }

  next(word, guesses) {
    this.wrongGuessCount(word, guesses)
    this.showGuess(word, guesses)
  }

  render() {
    const {words, guesses} = this.props.hangman
    const word = words[Math.floor(Math.random()*words.length)]

    const guessCount = this.wrongGuessCount(word, guesses)
    const showGuess = this.showGuess(word, guesses)
    const showGuesses = this.showGuesses(guesses)
    const next = this.next(word, guesses)
    return (
      <div class="hangman">
        {showGuess}
        {guessCount}
        <form>
          <label>
            Enter letter:
            <input type="text" value="" onChange={this.onChange.bind(this)} />
          </label>
        </form>
        {showGuesses}
        <button onClick={() => addGuess("l")}>add letter</button>
      </div>
    )
  }
}

const mapStateToProps = ({ hangman }) => ({ hangman })
const mapDispatchToProps = { addGuess }

export default connect(mapStateToProps, mapDispatchToProps)(Hangman)
