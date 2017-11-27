import React, {Component} from 'react'
import './App.css'

import Domain from './modules/Domain'
import Pin from './modules/Pin'
import Password from './modules/Password'
import PasswordHelper from './core/PasswordHelper'

class App extends Component {
    constructor() {
        super()
        this.state = {
            domain: '',
            pin: '',
            password: ''
        }
    }

    handleDomainChange = (event) => {
        this.setState({
            domain: event.target.value
        })
    }

    handlePinChange = (event) => {
        this.setState({
            pin: event.target.value
        })
    }

    handleGenerateClick = () => {
        let password = PasswordHelper.get(this.state.domain, this.state.pin)

        this.setState({
            password: password
        })
    }

    handleClearClick = () => {
        this.setState({
            domain: '',
            pin: '',
            password: ''
        })
    }

    render() {
        return (
            <div className="App">
                <Domain textChange={this.handleDomainChange}/>
                <Pin textChange={this.handlePinChange}/>
                <button onClick={this.handleGenerateClick}>Generate</button>
                <button onClick={this.handleClearClick}>Clear</button>
                <Password password={this.state.password}/>
            </div>
        )
    }
}

export default App