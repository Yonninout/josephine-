import React, { Component } from 'react';
import './Home.scss'
import logo from './jojo_white.png';
import background from './fleur_2_blur_crop.jpg';

class Home extends Component {

  state = ({
    back: '',
  })

  render() {
    return (
      <div className={"Home not-shadow "+this.state.back} style={{backgroundImage: `url(${background})`}}>
        <div className="Container">
          <img src={logo} alt="logo josephine" className="not-shadow"/>
        </div>
      </div>
    );
  }
  componentDidMount(){
    setTimeout(() => this.setState({back: 'Back'}), 2000);
    setTimeout(() => this.props.removeHome(), 2900);
  }
}

export default Home;
