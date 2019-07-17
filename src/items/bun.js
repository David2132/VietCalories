import React from 'react'
import { Button } from 'reactstrap';
import DataService from '../DataService'

class Bun extends React.Component {
    constructor() {
        DataService.clearData()
        super()
        this.state = {

            shrimp: false,
            sugarcane: false,
            nem: false,
            carb: 'Bun',
            meat: "Beef",
            eggRoll: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        if (event.target.name === 'meat' || event.target.name === 'carb') {
            this.setState({
                ...this.state,
                [event.target.name]: event.target.value,
            })
        }
        else {

            this.setState({
                ...this.state,
                [event.target.name]: !this.state[event.target.name],
            })
        }
    }
    render() {
        console.log(this.state)
        return <div style={{ marginLeft: "5%", marginRight: '5%' }}>
            <div style={{ backgroundColor: "#f2e394", height: "35em" }}>
                <div style={{ marginLeft: '5pt' }}>

                    <label style={{ marginTop: '5pt' }}>
                        <b>
                            Meat:
                        </b>
                        <select style={{ marginLeft: '5pt' }} name='meat' value={this.state.meat} onChange={this.handleChange}>
                            <option value='Pork'>Pork</option>
                            <option value='Chicken'>Chicken</option>
                            <option value='Grilled Shrimp'>Grilled Shrimp</option>
                            <option value='Beef'>Beef</option>
                            <option value='Sugarcane Shrimp'>Sugarcane Shrimp</option>
                            <option value='Shaken Beef'>Shaken Beef</option>
                            <option value='Beef Short Ribs'>Beef Short Ribs</option>

                        </select>
                    </label>
                    <br></br>
                    <label>
                        <b>
                            Carbohydrate Source:
                        </b>
                        <select style={{ marginLeft: '5pt' }} name='carb' value={this.state.carb} onChange={this.handleChange}>
                            <option value='Bun'>Bun</option>
                            <option value='Rice'>Rice</option>
                            <option value='Egg Noodle'>Egg Noodle</option>
                            <option value='None'>None</option>


                        </select>
                    </label>
                    <br></br>
                    <label>
                        <b>
                            Egg Roll:
                        </b>
                        < input
                            style={{ marginLeft: '5pt' }}
                            checked={this.state.eggRoll}

                            name='eggRoll'
                            type='radio'
                            onChange={this.handleChange}
                            value='true'
                        /> Yes
                        < input
                            style={{ marginLeft: '5pt' }}
                            checked={!this.state.eggRoll}
                            name='eggRoll'
                            type='radio'
                            onChange={this.handleChange}
                            value='false'
                        /> No
                    </label>
                    <br></br>
                    <label>
                        <b>
                            Grilled Shrimp:
                        </b>
                        < input
                            style={{ marginLeft: '5pt' }}
                            name='shrimp'
                            type='radio'
                            onChange={this.handleChange}
                            value='true'
                            checked={this.state.shrimp}
                        /> Yes

                        < input
                            style={{ marginLeft: '5pt' }}
                            name='shrimp'
                            type='radio'
                            onChange={this.handleChange}
                            value='false'
                            checked={!this.state.shrimp}
                        /> No
                    </label>
                    <br></br>

                    <label>
                        <b>
                            Sugarcane Shrimp:
                        </b>
                        < input
                            style={{ marginLeft: '5pt' }}
                            checked={this.state.sugarcane}
                            name='sugarcane'
                            type='radio'
                            onChange={this.handleChange}
                            value='true'
                        /> Yes

                        < input
                            style={{ marginLeft: '5pt' }}
                            checked={!this.state.sugarcane}
                            name='sugarcane'
                            type='radio'
                            onChange={this.handleChange}
                            value='false'
                        /> No
                    </label>
                    <br></br>

                    <Button>Submit</Button>


                </div>
            </div>
        </div>
    }
}
export default Bun