import React, { Component } from 'react';

export class Counter extends Component {
    state={
        currentCount:1,
    }

    timer= () => {
    this.setState({ currentCount: this.state.currentCount +1 });
    }    

    startCounter= () =>{
        var intervalId = setInterval(this.timer, 100);
        this.setState({intervalId: intervalId});
    }

    stopCounter=()=>{
        clearInterval(this.state.intervalId);
        this.setState({ currentCount: this.state.currentCount});
    }

  render() {
    const {currentCount} = this.state;
      return(
            <div>
                <h1>{currentCount}</h1>
                <button
                label="Start"
                onClick={this.startCounter}
                >Start</button>

                <button
                label="Stop"
                onClick={this.stopCounter}
                >Stop</button>
            </div>
        )
      
  }
}

export default Counter
