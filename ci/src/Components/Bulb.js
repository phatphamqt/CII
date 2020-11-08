import React from 'react'
const onimg = './on.jpg'
const offimg = './off.jpg'

export class Bulb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOn: true
        }
        this.switchbulb = this.switchbulb.bind(this)
    }
    switchbulb(){
        
        this.setState({isOn: !this.state.isOn})
    }
    render() {
        return (
            <div>
                <img src={this.state.isOn ? onimg : offimg} />
                <input type="button" value="Switch" onClick={this.switchbulb} />
            </div>
        )
    }
}