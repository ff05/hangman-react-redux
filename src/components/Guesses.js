import React, {PureComponent} from 'react'

export default class Guesses extends PureComponent {
  render() {
    const { guesses } = this.props
    return (<p>Guessed sofar: {guesses.join(", ")}</p>)
  }
}
