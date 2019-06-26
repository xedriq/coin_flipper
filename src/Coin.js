import React, { Component } from 'react'
import './Coin.css'

class Coin extends Component {
    render() {
        return (
            <div className="Coin" >
                <img src={this.props.face} alt={this.props.name} />
            </div>
        )
    }
}

export default Coin
