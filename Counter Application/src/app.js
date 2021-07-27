const appId = document.getElementById("app");

const buttonStyle = {
  margin: "5px",
};

let count = 0;

const addOne = () => {
  count += 1;
  counterApplication();
};

const subtractOne = () => {
  count -= 1;
  counterApplication();
};

const resetCounter = () => {
  count = 0;
  counterApplication();
};

const counterApplication = () => {
  const template = (
    <div>
      <h1 style={{ textAlign: "center" }}>Counter Application</h1>
      <hr />
      <h2 style={{ textAlign: "center" }}>Counter: {count}</h2>

      <button style={buttonStyle} onClick={addOne}>
        Add One
      </button>
      <button style={buttonStyle} onClick={subtractOne}>
        Subtract One
      </button>
      <button style={buttonStyle} onClick={resetCounter}>
        Reset One
      </button>
    </div>
  );

  ReactDOM.render(template, appId);
};

counterApplication();
