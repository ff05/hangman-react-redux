import React, {PureComponent} from 'react'

class LetterInput extends PureComponent {
  render() {
    const {value, onChange, handleSubmit} = this.props
    return (

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={onChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default LetterInput
