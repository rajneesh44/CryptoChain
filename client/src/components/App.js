import React, {Component} from 'react';
import Blocks from "./Blocks";
import logo from '../assets/logo.png'

class App extends Component{
    state={walletInfo:{}};

    componentDidMount() {
        fetch('http://localhost:3000/api/wallet-info').then((response)=>{
            response.json().then((json)=>{
                console.log('json',json);
                this.setState({walletInfo:json});
            });
        });
    }


    render(){
        const {address, balance}= this.state.walletInfo;
        return (
            <div className='App'>
                <img className='logo' src={logo}></img>
                <br/>
                <div><h2>Welcome to the CryptoChain!</h2></div>
                <hr/><br/>
                <div className='WalletInfo'>
                    <div>Address: {address}</div>
                    <div>Balance: {balance}</div>
                </div>
                <br/>
                <Blocks/>
            </div>
        );
    }
}

export default App;