import React, {PureComponent} from 'react'

export default class LetterInput extends PureComponent {
  render() {
    const { onSubmit, onChange } = this.props
    return (
      <form onSubmit={onSubmit}>
        <label>
          Enter letter:
          <input type="text" value="" onChange={onChange} />
        </label>
      </form>
    )
  }
}
