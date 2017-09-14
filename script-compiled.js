class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: '00:00:00'
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: this.getTime() });
    }, 1000);
  }

  getTime() {
    return new Date().toString().slice(15, 24);
  }

  render() {
    return React.createElement(
      "div",
      { className: "clock-box" },
      React.createElement(
        "div",
        { className: "clock-face" },
        this.state.time
      )
    );
  }
}

ReactDOM.render(React.createElement(Clock, null), document.getElementById('app'));
