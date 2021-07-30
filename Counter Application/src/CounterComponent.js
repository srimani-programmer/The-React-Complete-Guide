class CounterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.subtractOne = this.subtractOne.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.buttonStyle = {
      margin: "5px",
    };
    this.state = {
      count: 0,
    };
  }

  addOne() {
    this.setState((state) => {
      return {
        count: state.count + 1,
        // count: state.count++,
      };
    });
  }

  subtractOne() {
    this.setState((state) => {
      return {
        count: state.count - 1,
      };
    });
  }

  resetCounter() {
    this.setState((state) => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Counter Application</h1>
        <hr />
        <h2 style={{ textAlign: "center" }}>Counter: {this.state.count}</h2>

        <button style={this.buttonStyle} onClick={this.addOne}>
          Add One
        </button>
        <button style={this.buttonStyle} onClick={this.subtractOne}>
          Subtract One
        </button>
        <button style={this.buttonStyle} onClick={this.resetCounter}>
          Reset One
        </button>
      </div>
    );
  }
}

ReactDOM.render(<CounterComponent />, document.getElementById("app"));
