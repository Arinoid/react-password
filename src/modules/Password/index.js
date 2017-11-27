import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Password extends Component {
    render() {
        return (
            <div className="Password">
                <input type="text" value={this.props.password} readOnly="readonly"/>
            </div>
        )
    }
}

Password.PropTypes = {
    password: PropTypes.string
}

export default Password