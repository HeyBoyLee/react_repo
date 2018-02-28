import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {createStore} from 'redux'
import {connect, Provider} from 'react-redux'

class Counter extends Component {
  render(){
    const {value, onIncreaceClick} = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaceClick}>Increase</button>
      </div>
    )
  }
}

Counter.propTypes={
  value: PropTypes.number.isRequired,
  onIncreaceClick: PropTypes.func.isRequired
}

//action
const increateAction = {type: 'increase'}
//reducer
function counter(state={count:0}, action){
  const count = state.count
  switch(action.type){
    case 'increase':
      return {count: count+1}
    default:
      return state
  }
}
//store
const CounterStore = createStore(counter)

function mapStateProps(state){
  return {
    value: state.count
  }
}

function mapDispatchToProps(dispatch){
  return {
    onIncreaceClick: ()=> dispatch(increateAction)
  }
}

const CounterComponent = connect(mapStateProps, mapDispatchToProps)(Counter)

export {CounterStore, CounterComponent}