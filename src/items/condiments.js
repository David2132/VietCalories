import React from 'react'
import DataService from '../DataService'
class Condiments extends React.Component {
    constructor() {
        super()
        this.state = {
            index: DataService.getIndex(),
            meat: 'Tai',
            quantity: 'normal',
        }
        DataService.setMeat(this.state.meat, this.state.index)
        DataService.setQuantity(this.state.quantity, this.state.index)

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        if (event.target.name === 'meat') {
            const meat = event.target.value
            const quantity = "normal"
            this.setState({
                meat,
                quantity
            })
            DataService.setMeat(event.target.value, this.state.index)
            DataService.setQuantity(this.state.quantity, this.state.index)

        }
        else {
            const quantity = event.target.value
            this.setState({
                quantity
            })
            DataService.setQuantity(event.target.value, this.state.index)

        }

    }



    render() {
        console.log(DataService.getMeat())

        return <label>
            <select style={{ marginTop: '5pt' }}
                onChange={this.handleChange}
                name='meat'
            >
                <option
                    value='Tai'>Round Eye Steak</option>
                <option
                    value='WDB'>Well Done Brisket</option>
                <option
                    value='FB'>Fatty Brisket</option>
                <option
                    value='F'>Flank</option>
                <option
                    value='Shrimp'>Shrimp</option>
                <option
                    value='Wonton'>Wonton</option>
                <option
                    value='Cha'>Pork Patty</option>
                <option
                    value='WC'>White Chicken</option>
                    <option
                    value='DC'>Dark Chicken</option>
                <option
                    value='Tripe'>Tripe</option>
                <option
                    value='Tendon'>Tendon</option>
                <option
                    value='Meatball'>MeatBall</option>
                
            </select>
            <b>:</b>

            <input
                style={{ marginLeft: '5pt' }}
                checked={this.state.quantity === 'light'}

                type='radio'
                onChange={this.handleChange}
                name={Math.random()}
                value='light'
            />Light
                < input
                style={{ marginLeft: '5pt' }
                }
                checked={this.state.quantity === 'normal'}
                onChange={this.handleChange}
                type='radio'
                name={Math.random()}
                value='normal'
            /> Normal
        < input
                style={{ marginLeft: '5pt' }}
                checked={this.state.quantity === 'extra'}
                name={Math.random()}
                type='radio'
                onChange={this.handleChange}
                value='extra'
            /> Extra



    </label>
    }


}
export default Condiments