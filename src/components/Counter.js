import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class Counter extends PureComponent {
  static propTypes = {
    count: PropTypes.number.isRequired
	}

  render() {

    return (
      <div className="counter">
        <p>You have {6 - this.props.count} turns left.</p>
      </div>
    )
  }
}

export default Counter
