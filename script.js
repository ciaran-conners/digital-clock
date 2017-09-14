class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: '00:00:00'
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({time: this.getTime()});
    }, 1000);
  }

  getTime() {
    return new Date().toString().slice(15, 24);
  }

  render() {
    return (
    <div className="clock-box">
      <div className="clock-face">
        {this.state.time}
      </div>
    </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById('app'));