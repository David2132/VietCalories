import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom'
import { Button } from 'reactstrap';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)

    if (window.location.href.includes('pho')) {
      this.state = {
        pho: true,
        com: false,
        bun: false
      }
    } else if (window.location.href.includes('com')) {
      this.state = {
        pho: false,
        com: true,
        bun: false
      }
    } else if (window.location.href.includes('bun')) {
      this.state = {
        pho: false,
        com: false,
        bun: true
      }
    }
    else {
      this.state = {
        pho: false,
        com: false,
        bun: false
      }
    }
  }
  handleChange(event) {


    this.setState({
      pho: false,
      com: false,
      bun: false,
      [event.target.name]: true
    })
    setTimeout(() => {
      if (this.state.pho)
        this.props.history.push('/pho')
      else if (this.state.com)
        this.props.history.push('/com')
      else
        this.props.history.push('/bun')

    }, 50);

  }


  render() {

    const { pho, com, bun } = this.state
    return (
      <div className="App">

        <header className="App-header">
          <h1 style={{ fontStyle: 'italic', textAlign: 'center' }}>
            Saigon Noodles
        </h1>
        </header>

        <Button
          className="button"
          onClick={this.handleChange}
          name='pho'
          style={pho ? { backgroundColor: '#f2e394', marginLeft: '5%' } : { textStyle: 'oblique', marginLeft: '5%' }}>
          Pho
              </Button>

        <Button
          className="button"
          onClick={this.handleChange}
          name='com'
          style={com ? { backgroundColor: '#f2e394' } : null}>
          Com
                </Button>

        <Button
          className="button"

          onClick={this.handleChange}
          name='bun'
          style={bun ? { backgroundColor: '#f2e394' } : null}>
          Bun
                </Button>

      </div>
    );
  }
}

export default withRouter(App);
