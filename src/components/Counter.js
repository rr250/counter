import React, { Component } from 'react';
import CountUp from 'react-countup'

export class Counter extends Component {
  render() {
      return(
            <div className="row">
                <div className="col s4">
                    <h1 className="large"><CountUp
                    start={0}
                    end={97}
                    duration={2}
                    separator=" "
                    decimal=","
                    delay={0}
                    >
                    </CountUp><sup className="per">%</sup></h1>
                </div>
                <div className="col s4">
                    <h1 className="large"><CountUp
                    start={0}
                    end={350}
                    duration={1.5}
                    separator=" "
                    decimal=","
                    delay={0}
                    >
                    </CountUp><sup>+</sup></h1>
                </div>
                <div className="col s4">
                    <h1 className="large"><CountUp
                    start={0}
                    end={16}
                    duration={2.75}
                    separator=" "
                    decimal=","
                    delay={0}
                    >
                    </CountUp><sup>x</sup></h1>
                </div>
            </div>
        )
      
  }
}

export default Counter
