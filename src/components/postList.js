import React, { Component } from 'react'
import axios from 'axios'

class postList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts : [],
             errMessage : ''
        }
    }
    
    
    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            this.setState({posts : res.data})
            })
        .catch(err => {
               console.log(err) 
               this.setState({errMessage : 'Error detected'})
            }) 
            
    }
    
    render() {
        const {posts, errMessage} = this.state
        return (
            <div>
                <h1>List</h1>
                {posts.length ? 
                     posts.map(post => <div key = {post.id}>{post.title}</div>) : null
                }
                {
                    errMessage ? <div>{errMessage}</div> : null
                }
            </div>
        )
    }
}

export default postList
