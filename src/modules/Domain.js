import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Domain extends Component {
    handleChange = (event) => {
        this.props.textChange(event)
    }

    render() {
        return (
            <div className="Domain">
                <label htmlFor="domain">Domain</label>
                <input id="domain" type="text" onChange={this.handleChange} value={this.props.value}/>
            </div>
        )
    }
}

Domain.propTypes = {
    textChange: PropTypes.func,
    value: PropTypes.string,
}

export default Domain