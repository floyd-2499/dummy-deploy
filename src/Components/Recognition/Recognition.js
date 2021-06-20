import React from "react";
import "./Re.css";

class Recognition extends React.Component {
  state = { input: "" };
  state = { output: "" };

  fetchInput = (e) => {
    e.preventDefault();
    // console.log('you clicked me')

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recorder = new SpeechRecognition();
    let record = recorder.start();

    recorder.onstart = () => {
      // console.log("Voice activated");
    };

    recorder.onresult = (event) => {
      // console.log(event);
      const resultIndex = event.resultIndex;
      const transcript = event.results[resultIndex][0].transcript;
      // console.log(transcript);
      this.setState({ input: transcript });

      const speech = new SpeechSynthesisUtterance();

      if(this.state.input === "hello"){
        this.setState({output: "hello sir"})
      }
      if(this.state.input.includes("your name")){
        this.setState({output: "I'm  a dummy stuff.. I got no name"})
      }
      
      else{
        this.setState({output: "Sorry Boss! output for this is not coded yet"})
      }
      

      speech.text = `${this.state.output}`;
      // console.log(this.state.input);
      speech.volume = 5;
      speech.rate = 0.8;
      speech.pitch = 0;
      window.speechSynthesis.speak(speech);
    };


  };

  render() {
    return (
      <div className="Rcontainer">
        Assistant
        <button onClick={this.fetchInput}>Start Assistant</button>
      </div>
    );
  }
}

export default Recognition;
