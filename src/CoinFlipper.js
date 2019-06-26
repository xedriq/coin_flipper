import React, { Component } from 'react'
import './CoinFlipper.css'
import Coin from './Coin';

class CoinFlipper extends Component {
    static defaultProps = {
        faces: ['https://ipfs.io/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/I/m/Phil10pbmobv.jpg',
            'https://ipfs.io/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/I/m/Phil10pbmbk.jpg'],
    }

    state = {
        face: this.props.faces[1],
        flip_count: 0,
        head_count: 0,
        tail_count: 0
    }

    flip() {
        let ranIdx = Math.floor(Math.random() * this.props.faces.length)
        this.setState({
            face: this.props.faces[ranIdx],
            flip_count: this.state.flip_count + 1,
            head_count: ranIdx === 0 ? this.state.head_count + 1 : this.state.head_count,
            tail_count: ranIdx === 1 ? this.state.tail_count + 1 : this.state.tail_count
        })

    }


    clickHandler = () => {
        this.flip()
    }


    render() {
        const { face, flip_count, head_count, tail_count } = this.state
        return (

            < div >
                <h1>Coin Flipper (Cara Y Cruz)</h1>
                <Coin face={face} />
                <button onClick={this.clickHandler}>Flip Coin</button>
                <p>Flip Count: {flip_count} Head Count: {head_count} Tail Count: {tail_count}</p>
            </div >
        )
    }
}

export default CoinFlipper
