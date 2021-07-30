"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CounterComponent = function (_React$Component) {
  _inherits(CounterComponent, _React$Component);

  function CounterComponent(props) {
    _classCallCheck(this, CounterComponent);

    var _this = _possibleConstructorReturn(this, (CounterComponent.__proto__ || Object.getPrototypeOf(CounterComponent)).call(this, props));

    _this.addOne = _this.addOne.bind(_this);
    _this.subtractOne = _this.subtractOne.bind(_this);
    _this.resetCounter = _this.resetCounter.bind(_this);
    _this.buttonStyle = {
      margin: "5px"
    };
    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(CounterComponent, [{
    key: "addOne",
    value: function addOne() {
      this.setState(function (state) {
        return {
          count: state.count + 1
          // count: state.count++,
        };
      });
    }
  }, {
    key: "subtractOne",
    value: function subtractOne() {
      this.setState(function (state) {
        return {
          count: state.count - 1
        };
      });
    }
  }, {
    key: "resetCounter",
    value: function resetCounter() {
      this.setState(function (state) {
        return {
          count: 0
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          { style: { textAlign: "center" } },
          "Counter Application"
        ),
        React.createElement("hr", null),
        React.createElement(
          "h2",
          { style: { textAlign: "center" } },
          "Counter: ",
          this.state.count
        ),
        React.createElement(
          "button",
          { style: this.buttonStyle, onClick: this.addOne },
          "Add One"
        ),
        React.createElement(
          "button",
          { style: this.buttonStyle, onClick: this.subtractOne },
          "Subtract One"
        ),
        React.createElement(
          "button",
          { style: this.buttonStyle, onClick: this.resetCounter },
          "Reset One"
        )
      );
    }
  }]);

  return CounterComponent;
}(React.Component);

ReactDOM.render(React.createElement(CounterComponent, null), document.getElementById("app"));
