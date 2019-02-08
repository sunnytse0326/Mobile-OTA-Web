import React, { Component } from "react";
import SearchBar from "./SearchBar";
import FileList from "./FileList";
import Favicon from 'react-favicon';

class iOS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      loadingText: 'Loading...',
      loadEnable: false,
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

  loadingDialog = (data) => {
    this.setState({loadEnable: data})
  }

  componentDidMount(){
    document.title = "MiTrade OTA iOS"
  }

  getDataFromLocal = () => {
    fetch("https://ota.mitrade.com/api/ota-file/ios")
      .then(data => data.json())
      .then(res => this.setState({ filelists: res }));
  };

  render() {
    return (
      <div >
        <Favicon url="https://ota.mitrade.com/api/download/icon" />
        <div >
          <h3>MiTrade Mobile OTA<br></br>(iOS)</h3>

          <img alt="App Icon"  class="rounded mx-auto d-block" src={require('../images/app_icon.png')}/>

          <h5>Please download the latest version for testing.</h5>

          <SearchBar
            filterText={this.state.filterText}
            onFilterTextInput={this.handleFilterTextInput}
          />

          <FileList
            filelists={this.state.filelists}
            filterText={this.state.filterText}
            loadingCallBack={this.loadingDialog}
          />

        </div>
      </div>
    );
  }
}

export default iOS;
