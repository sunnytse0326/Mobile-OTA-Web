import React, { Component } from "react";
import Android from "./component/Android";
import iOS from "./component/iOS";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      filelists: []
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  componentWillMount() {
    this.getDataFromLocal();
  }

  getDataFromLocal = () => {
    fetch("https://ota.mitrade.com/api/ota-file/android")
      .then(data => data.json())
      .then(res => this.setState({ filelists: res }));
  };

  render() {
    return (
    <Router>
      <div>
        <Route path="/android" component={Android} />
        <Route path="/ios" component={iOS} />
      </div>
    </Router>
    );
  }
}

export default App;
