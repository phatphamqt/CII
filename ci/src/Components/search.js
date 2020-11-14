import React from 'react'
import { emojiList } from '../resources/emojiList'
import { Emoji } from './Emoji'
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
    
    render(){ 

    return <div>
        <input type="text" onChange={this.EnterInput} id="text"></input>
        <p>{this.state.arr} </p>
        </div> 
    }
}    

export default Mysearch

