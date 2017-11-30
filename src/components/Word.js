import React, { PureComponent } from 'react'

export default class Word extends React.Component {
  render() {
    const {word, guesses} = this.props
    var wordArr = word.split("")
    var wordArr2 = wordArr.map(function(el) {
      if (guesses.includes(el)) return el;
      else return "_";
    })
    return (<h2>{wordArr2.join(" ")}</h2>)
  }
}
