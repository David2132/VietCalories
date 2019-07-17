import React from 'react'
import Condiments from './condiments'
import { Button } from 'reactstrap';
import DataService from '../DataService'

class Pho extends React.Component {
    constructor() {
        super()
        this.state = {
            broth: 'Beef',
            meat:[0],
            id:0,
            noodles:'Pho'
        }
        this.handleChange = this.handleChange.bind(this)
        this.addMeat = this.addMeat.bind(this)
        this.subtractMeat = this.subtractMeat.bind(this)
    }
    addMeat(){
    
        const id = this.state.id+1
        const meat = this.state.meat
        meat.push(id)
        if (meat.length > 5)
        alert('You can only add 5 meats at a time!')
        else
        this.setState({
            ...this.state,
            meat,
            id
        })
    }
    subtractMeat(){
        const id = this.state.id -1
        const meat = this.state.meat
        meat.pop()
        this.setState({
            id,
            meat
        })
        DataService.delete()
    }
    handleChange(event) {
       if (event.target.name === 'broth') {
            const broth = event.target.value
            this.setState({
                broth
            })
        }
        else {
            const noodles = event.target.value;
            this.setState({
                noodles
            })
        }
    }
    render() {
        const meat = this.state.meat
        return <div style={{ marginLeft: "5%", marginRight: '5%' }}>
            <div style={{ backgroundColor: "#f2e394", height: "35em" }}>
                <div style={{ marginLeft: '5pt' }}>
                    <label style={{ marginTop: '5pt' }}>
                        <b>
                            Broth:
                        </b>
                        <select style={{ marginLeft: '5pt' }} name ='broth' onChange={this.handleChange}>
                            <option value='Beef'>Beef</option>
                            <option value='Chicken'>Chicken</option>
                            <option value='Spicy Beef'>Spicy Beef</option>
                        </select>
                    </label>
                    <br></br>
                    <label>
                        <b>
                            Noodles: 
                        </b>
                        <select style={{ marginLeft: '5pt' }} name ='noodles' onChange={this.handleChange}>
                            <option value='Pho'>Pho</option>
                            <option value='Hue'>Thick</option>
                            <option value='Verm'>Vermicilli</option>
                            <option value='Mi'>Egg </option>
                            <option value='None'>None</option>
                        </select>
                    </label>
                    <br></br>
                    <label>
                        <b>
                            Meat:
                        </b>
                        <br></br>
                        {meat.map(item=>(
                            <div  key={item}>
                            <Condiments />
                            </div>
                        ))}
                        <Button style={{marginTop:'5pt',width:'30pt', backgroundColor:'blue'}} onClick={this.addMeat}> + </Button>
                        <Button style={{marginTop:'5pt',marginLeft:'2pt',width:'30pt',backgroundColor:'red'}} onClick={this.subtractMeat}> - </Button>

                        
                    </label>
                    <br></br>
                    <Button>Submit</Button>



                </div>
            </div>
        </div>
    }
}
export default Pho