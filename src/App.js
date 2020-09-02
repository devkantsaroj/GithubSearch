import React, { Component } from 'react';
import './App.css';
import Navbar from './component/layouts/Navbar';
import Search from './component/layouts/Search';
import Users from './component/users/Users';
import axios from 'axios';
import spinner from './spinner.gif';

class App extends Component {
  state = {
    users:[],
    loading:false,
  }

   changeState = async (users) =>{
    this.setState({loading:true});
    if(users === ""){
      const result = await axios.get('https://api.github.com/users');
      this.setState({users:result.data,loading:false});
    }else{
      const result = await axios.get('https://api.github.com/search/users?q='+users);
      this.setState({users:result.data.items,loading:false});
    }
  }

  async componentDidMount(){
    this.setState({loading:true});
    const result = await axios.get('https://api.github.com/users')
    this.setState({users:result.data,loading:false});
  }

  render(){
    let output = <Users users={this.state.users}/>;
    if(this.state.loading){
      output = <img alt="Loading..." src={spinner}></img>;
    }
    return (
      <div className="App">
        <Navbar title="GitHub Explorer" icon="fa fa-github">
          <Search changeState={this.changeState} placeholder="Search for Users, Projects.." buttonIcon = "fa fa-search" value={this.state.value}/>
        </Navbar>
        {output}
      </div>
    );
  }
}

export default App;
