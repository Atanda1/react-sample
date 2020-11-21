import React from 'react';
import './App.css';
import Greet from './components/greet'
import Warn from './components/warning'
import Form from './components/form'
import ParentInput from "./components/parentInput";
import ClickCounter from './components/clickCounter'
import Reducer from './components/reducer'
import HoverCounter from './components/hoverCounter'
// import {UserProvider} from './components/contexts/context'
// import PostList from './components/postList'
//import Hook from "./components/hook";
import HookCounter from './components/numberHook'
import FetchHook from './components/fetchHook'
import Cake from './components/numOfCake'
import {Provider} from 'react-redux'
import store from './redux/cakeStore'
import Cake2 from './components/cakeHook'

export const UserContext = React.createContext();

function App() {
  return (
    <Provider store = {store}>
      <div> 
      {/* <FetchHook/>
       <Greet name= "David">
         <p>that's the name</p>
       </Greet>
        <Warn/>
         <UserContext.Provider value = "Tunde">
           <Form/>
        </UserContext.Provider>  
           
        <ParentInput/>
        <ClickCounter/>
        <HoverCounter/> */}
        {/* <PostList/> */}
        {/* <Hook/>
        <Reducer/> */}
       <Cake/>
       <Cake2/>
       <FetchHook/>
       <HookCounter/>
    </div>
    </Provider>
    
   
  );
}

export default App;
