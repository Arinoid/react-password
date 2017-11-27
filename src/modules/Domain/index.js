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
                <input id="domain" type="text" onChange={this.handleChange}/>
            </div>
        )
    }
}

Domain.propTypes = {
    textChange: PropTypes.func,
}

export default Domain