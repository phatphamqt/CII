import React from 'react'
import { emojiList } from '../resources/emojiList'
import { Emoji } from './Emoji'
class Mysearch extends React.Component{
    constructor(props){
        super(props)
        this.state = {searchText:'',
                array:[]
    }
        this.EnterInput = this.EnterInput.bind(this)

    }

    EnterInput(e){
        this.setState({searchText:e.target.value,
            array:Emoji(e.target.value)
        })
    }
    render(){ 

    return <div>
        <input type="text" onChange={this.EnterInput} id="text"></input>
        <p>{this.state.array} </p>
        </div> 
    }
}    

export default Mysearch

