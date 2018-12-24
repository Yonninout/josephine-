import React, { Component } from 'react';
import './App.css';
import Loading from './components/Loading/Loading'
import Home from './components/Home/Home'
import Main from './components/Main/Main'

class App extends Component {
  constructor(props){
    super(props);
    this.removeLoading = this.removeLoading.bind(this);
    this.removeHome = this.removeHome.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }
  // state = ({
  //   loading: true,
  //   home: false,
  //   main: false,
  // })
  state = ({
    loading: true,
    home: false,
    main: false,
    domain: '',
  })

  handleForm(domain) {
    // event.preventDefault();
    this.setState({domain: domain})
    setTimeout(() => { console.log(this.state.domain)},500);
  }

  render() {
    const {loading,home, main} = this.state
    return (
      <div className="App">
        {loading && <Loading update={this.removeLoading}/>}
        {home && <Home removeHome = {this.removeHome}/>}
        {main && <Main domain={this.handleForm} domainName={this.state.domain}/>}
      </div>
    );
  }

  removeLoading() {
    this.setState({loading: false});
    this.setState({home: true});
    console.log('remove loading');
  }
  removeHome() {
    this.setState({home: false});
    this.setState({main: true});
    console.log('remove home');
  }
}

export default App;
