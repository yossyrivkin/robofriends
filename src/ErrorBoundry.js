import React, { Component } from 'react'

export class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasEerror: false,
        }
    }
    
    componentDidCatch(error, info) {
        this.setState({ hasEerror: true })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default ErrorBoundry

