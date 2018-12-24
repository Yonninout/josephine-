import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import './Loading.scss'


class Loading extends Component {
  type  = 'spinningBubbles'
  color = 'white'

  state = ({
    class: 'FadeIn'
  })

  render() {
    return (
      <div className={"Loading " + this.state.class}>
        <div className = "Group">
          <h1>INTERNET IS COMING</h1>
          <ReactLoading type={this.type} color={this.color} height={100} width={100} className="LoadingSvg"/>
        </div>
      </div>
    );
  }
  componentDidMount(){
    setTimeout(() => this.setState({class: 'FadeOut'}), 2500);
    setTimeout(() => this.props.update(),3200);
  }


}

export default Loading;
