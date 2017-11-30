import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import addGuess from '../actions/guesses/add'
import clearGuesses from '../actions/guesses/clear'
import Guesses from './Guesses'
import Hangman from './Hangman'
import LetterInput from './LetterInput'
import Word from './Word'
import styles from './Game.css'

class Game extends PureComponent {
  constructor(props) {
    super(props)

    this.words = [
      "moustache",
      "recipe",
      "coffee",
      "thingy",
      "cors"
    ]

    this.word = this.words[Math.floor(Math.random()*this.words.length)]

  }

  wrongGuessCount(word, guesses) {
    var count = 0;
    for (var i = 0 ; i < guesses.length ; i++) {
      if (word.indexOf(guesses[i]) === -1)
      count += 1;
    }
    this.isDead(count)

    return count
  }

  isDead(guessCount) {
    if (guessCount == this.props.hangman.guessCount){
      this.reset()
    }
  }

  showGuess(word, guesses) {
    var wordArr = word.split("");
    var wordArr2 = wordArr.map(function(el) {
      if (guesses.includes(el)) return el;
      else return "_";
    });
    this.youWon(word, guesses)
    return (<h2>{wordArr2.join(" ")}</h2>)
  }

  youWon(word, guesses) {
    let count = word.split("").filter(guess => {
      return guesses.includes(guess)
    })
    if (count.length === word.length){
      this.reset()
    }
  }

  reset() {
    this.generateWord()
    this.props.clearGuesses()
  }

  generateWord() {
    this.word = this.words[Math.floor(Math.random()*this.words.length)]
  }

  onChange(event) {
    const { guesses } = this.props.hangman
    const { value } = event.target
    if (!guesses.includes(value))
      this.props.addGuess(value)
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    const {guesses} = this.props.hangman
    const guessCount = this.wrongGuessCount(this.word, guesses)
    return (
      <div className="Hangman">
        <Hangman wrongs={guessCount}/>
        <Word word={this.word} guesses={guesses}/>
        <LetterInput onSubmit={this.handleSubmit} onChange={this.onChange.bind(this)} />
        <Guesses guesses={guesses}/>
      </div>
    )
  }
}

const mapStateToProps = ({ hangman }) => ({ hangman })
const mapDispatchToProps = { addGuess, clearGuesses }

export default connect(mapStateToProps, mapDispatchToProps)(Game)
