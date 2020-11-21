import React from 'react'
import {buyCake} from '../redux/index'
import {useSelector, useDispatch} from 'react-redux'

function CakeContainer2() {
    const numOfCake = useSelector(state => state.numOfCake)
    const dispatch = useDispatch()
    return (
        <div style={{color: "red", textAlign : "center"}}>
          <h1>Cake Calc - {numOfCake}</h1>
          <button onClick={() => dispatch(buyCake())}>Buy cake</button>  
        </div>
    )
}

export default CakeContainer2
//export default connect(mapStateToProps, mapDispatchProps)(cakeContainer)
