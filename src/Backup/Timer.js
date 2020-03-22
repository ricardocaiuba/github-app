import React, { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: 0
    };
    this.timer;
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps timer", this.props, nextProps);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        ...this.state,
        time: this.state.time + 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(
    //   "shouldComponentUpdate Timer",
    //   this.props,
    //   nextProps,
    //   this.state,
    //   nextState
    // );
    return this.props.time !== nextProps.time;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate Timer", this.props, nextProps);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate Timer", this.props, prevProps);
  }

  render() {
    console.log("render timer");
    return <div>Timer: {this.state.time}</div>;
  }
}

export default Timer;
