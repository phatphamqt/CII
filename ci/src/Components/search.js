import React from 'react'
import { emojiList } from '../resources/emojiList'
import { Emoji } from './Emoji'

import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import {firebaseConfig} from '../config/firebase.config'


try{
    firebase.initializeApp(firebaseConfig);
} catch(e){
    console.log(e.message)
}



const db = firebase.firestore();


class Mysearch extends React.Component{
    constructor(props){
        super(props)
        this.state = {searchText:'',
        arr:''    
    }
        this.EnterInput = this.EnterInput.bind(this)       
    }

    EnterInput(e){
        this.setState({searchText:e.target.value})
        let st = this.state.searchText
        this.setState({arr:Emoji(st)})          
    }
    componentDidMount(){
        // db.collection("users").add({
        //     first: "Ada",
        //     last: "Lovelace",
        //     born: 1815
        // })
        // .then(function(docRef) {
        //     console.log("Document written with ID: ", docRef.id);
        // })
        // .catch(function(error) {
        //     console.error("Error adding document: ", error);
        // });
        let userRef = db.collection("users")
        userRef
        .where("job","==",'jobless')
        // .where()
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            });
        });
        
    }
    render(){ 

    return <div>
        <input type="text" onChange={this.EnterInput} id="text"></input>
        <div>{this.state.arr} </div>
        </div> 
    }  
}    

export default Mysearch

