import React from 'react'
import {buyCake} from '../redux/index'
import {connect} from 'react-redux'

function cakeContainer(props) {
    return (
        <div style={{color: "red", textAlign : "center"}}>
          <h1>Cake Calc - {props.numOfCake}</h1>
          <button onClick={props.buyCake}>Buy cake</button>  
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    numOfCake : state.numOfCake
  }
}

const mapDispatchProps = dispatch => {
  return {
    buyCake : () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps, mapDispatchProps)(cakeContainer)
