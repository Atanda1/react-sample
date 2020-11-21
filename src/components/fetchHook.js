import React, {useEffect, useReducer }from 'react'
import axios from 'axios';

const initialState = {
   loading : true,
   post : {},
   error : ''

};

  const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_DATA':
        return {
          loading : false,
          error : '',
          post : action.payload
        };
      case 'FETCH_ERROR':
        return { 
          loading : false,
          error : 'Something is wrong',
          post : {}
         };
      default:
        return state
    }
  };



function FetchHook() {
    const [ state, dispatch] = useReducer( reducer, initialState)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(res => {
            console.log(res.data)
            dispatch({type : 'FETCH_DATA', payload : res.data})
            })
        .catch(err => {
               console.log(err) 
               dispatch({type : 'FETCH_ERROR'})
            //    this.setState({errMessage : 'Error detected'})
            }) 

        return () => {
            console.log("unmounted")
        }
    }, []) 
    return (
        <div>
            {
                state.loading ? 'loading' : <h1>{state.post.title} IS A G</h1>
            }            
            {
                state.error ? state.error : null     
            }
        </div>
    )
}

export default FetchHook
