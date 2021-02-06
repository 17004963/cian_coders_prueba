import React,{Component} from "react";
import {render} from "react-dom";
import Homepage from "./Homepage";
import {createStore} from 'redux';
import all_reducer from './Reducers/index'
import {Provider} from 'react-redux'

//store


function saveTolocal(state){
    try{
        const serilizedstate= JSON.stringify(state)
        localStorage.setItem('state',serilizedstate)
    }catch(e){
        console.log(e)
    }
}

function LoadFromLocal(){
    try{
        const serializedstate = localStorage.getItem('state')
        if(serializedstate===null){
            return undefined
        }
        return JSON.parse(serializedstate)
    }catch(e){
        console.log(e)
        return undefined
    }
}
const localstate =LoadFromLocal();
const store= createStore(all_reducer,localstate)


store.subscribe(()=>saveTolocal(store.getState()))


//action increment

//reducer



// disptach

export default class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Provider store={store}>         
               <Homepage>
                    
                </Homepage>
            </Provider>


        )
    }
}

const app_rendered= document.getElementById("app")
render(<App/>, app_rendered)