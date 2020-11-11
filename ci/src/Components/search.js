import React from 'react'
import {Emoji} from '../Components/Emoji'

class Mysearch extends React.Component{
    constructor(props){
        super(props)
        this.state = {searchText:''}
        this.EnterInput = this.EnterInput.bind(this)
    }
    EnterInput(e){
        this.setState({searchText:e.target.value})
        console.log(Emoji(st))
        let st = this.state.searchText
        return Emoji(st)
    }
    render(){ 
    return <div>
        <input type="text" onChange={this.EnterInput} id="text"></input>
        
    </div>
    
    }
}    

export default Mysearch

