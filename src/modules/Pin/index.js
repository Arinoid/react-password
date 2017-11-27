import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Pin extends Component {
    handleChange = (event) => {
        this.props.textChange(event)
    }

    render() {
        return (
            <div className="Pin">
                <label htmlFor="pin">PIN</label>
                <input id="pin" type="password" onChange={this.handleChange}/>
            </div>
        )
    }
}

Pin.propTypes = {
    textChange: PropTypes.func,
};

export default Pin