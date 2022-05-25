import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    const array = [];
    for (var i = 1; i <= 4; i++) {
      const index = i;
      array.push(<button onClick={() => alert(index)}> {i}</button>);
    }

    return array;
  }
}

function ONPress() {
  const rootElement = document.getElementById("addButton");
  ReactDOM.render(<App />, rootElement);
}

function Exercise3() {
  return (
    <div>
      <div>
        <p>
          Create a custom Button component and render it four times. On click,
          it should alert which button was clicked, by displaying the name of
          the button.
        </p>
      </div>
      <div className="solution-container" id="addButton">
        <button onClick={ONPress} id="butonEx3">
          Press
        </button>
      </div>
    </div>
  );
}

export default Exercise3;
