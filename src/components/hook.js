import React, {ate, useEffect}  from 'react'
import axios from 'axios'



function Hook() {
    // const initCount = 0;
    const [name, setName] = useState({firstName : '', lastName : ''});
    const [post, setPost] = useState({});
    const [id, setId] = useState(1)
    const [buttonWithId, setButtonWithId] = useState(1);

    console.log(name.firstName)

    const pickedId = () => {
        setButtonWithId(id)
    }
    useEffect(() => {
        console.log("firstNmae")
    }, [name.firstName])
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonWithId}`)
        .then(res => {
            console.log(res)
            console.log(res.data)
            setPost(res.data)
            })
        .catch(err => {
               console.log(err) 
            //    this.setState({errMessage : 'Error detected'})
            }) 

        return () => {
            console.log("unmounted")
        }
    }, [buttonWithId]) 
    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])
    return (
        <div>
           {/* <button onClick={() => setCount( prev => prev + 1)}>Increment</button>
           <button onClick={() => setCount( prev => prev - 1)}>Decrement</button>
           <h1>count {count}</h1>  */}
            <input
                value = {name.firstName}
                onChange = {e => setName({ ...name , firstName : e.target.value})}
            />
            <input
                value = {name.lastName}
                name = 'lastName'
                onChange = {(e) => setName({ ...name , [e.target.name] : e.target.value})}
            />
            <h4> Your name is - {name.firstName} {name.lastName}</h4>


            <div>
                <input value ={id} onChange = {e => {setId(e.target.value)}}/>
                <button onClick = {pickedId}>Shufle</button>
                 <h3 key = {post.id}>{post.title}</h3>
                
            </div>
        </div>
    )
}

export default Hook
