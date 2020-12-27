import React from 'react';
import { connect } from 'react-redux';

class Counter2 extends React.Component {

    increment = () => {
     this.props.dispatch({
         type: 'INCREMENT'
     })
    }

    decrement = () => {
     this.props.dispatch({
         type: 'DECREMENT'
     })
    }
    render() {
        return (
            <div>
                <div>counter</div>
                <button onClick={this.increment}>+</button>
                <span>{this.props.count}</span>
                <button onClick={this.decrement}>-</button>
               
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count : state.count
    }
}

export default connect(mapStateToProps)(Counter2);