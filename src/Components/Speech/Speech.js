import React from "react";
import "./speech.css";



class Speech extends React.Component {
  state = { content: "" };


  onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.content);

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const speech = new SpeechSynthesisUtterance();

    speech.text = ` ${this.state.content}`;
    speech.volume = 1;
    speech.rate = 0.8;
    speech.pitch = 0;
    window.speechSynthesis.speak(speech);
    this.setState({content: " "});
  };

  render() {
    return (
      <div className="input">
        <form onSubmit={this.onFormSubmit}>
          <label>Enter Some Text</label>
          <input
            type="text"
            value={this.state.content}
            onChange={(e) => this.setState({ content: e.target.value })}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Speech;
