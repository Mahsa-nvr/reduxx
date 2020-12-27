import React from 'react';
import { connect } from "react-redux"

class Counter extends React.Component {
    increment = () => {
       this.props.dispatch({
            type : 'INCREMENT'
        })
    }

    decrement = () =>{
       this.props.dispatch({
            type : 'DECREMENT'
        })
    } 
   
   
    render() {
        return (
            <div>
                <h2>counter</h2>
                <div>
                    <button onClick={this.increment}>+</button>
                     <span>{this.props.count1}</span>
                    <button onClick={this.decrement}>-</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count1: state.count
    }
}


export default connect(mapStateToProps)(Counter);