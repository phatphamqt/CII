import React from 'react'
import {Show} from './show'
import "firebase/firestore";
import firebase from 'firebase/app'
import {firebaseConfig} from '../config/firebase.config'

try{
    firebase.initializeApp(firebaseConfig);
} catch(e) {
    console.log(e.message)
}

  
const db = firebase.firestore();

let how=[]

export class Body extends React.Component{
    constructor(props){
        super(props)
        this.state={list:how  
        }

    }
    componentDidMount(){
        db.collection("todo").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
                console.log(doc.data().title)
                how.push(
                    doc.data()
                )
                this.setState({title:doc.data().title,
                    id:doc.data().id,
                    content:doc.data().content,
                    key:doc.data().key                    
                })
                
                // <Show key={this.state.key} id={this.state.id} title={this.state.title} content={this.state.content}/>                    
                

            });
            
        });
             
    }
    createNew(){
        let i=prompt("input id:")
        let tile=prompt("input title:")
        let cont=prompt("input content:")
        db.collection("todo").add({
            id: i,
            title: tile,
            content: cont
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
                
    }
    
    render(){
        console.log(how)

        console.log(this.state.list)
        let showthis=this.state.list.map(l=>{
            return (
                <Show id={l.id} title={l.title}  content={l.content} />
            )
        })
        return<div id="body">
        
        <div id="user">user</div>
        <div id="info">info
        <div id="det">
            {showthis}
        </div>
        <button id="add" onClick={this.createNew.bind(this)} >Add</button>
        </div>
        </div>
    }
 
}

    