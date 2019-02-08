import React, { Component } from "react";
import SearchBar from "./SearchBar";
import FileList from "./FileList";
import LoadingOverlay from 'react-loading-overlay';
import Favicon from 'react-favicon';

class Android extends Component {
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

  componentDidMount(){
    document.title = "MiTrade OTA Android"
  }

  getDataFromLocal = () => {
    fetch("https://ota.mitrade.com/api/ota-file/android")
      .then(data => data.json())
      .then(res => this.setState({ filelists: res }));
  };

  loadingDialog = (data) => {
    this.setState({loadEnable: data})
  }

  render() {
    return (
      <div>
        <Favicon url="https://ota.mitrade.com/api/download/icon" />
        <LoadingOverlay
          active={this.state.loadEnable}
          spinner
          text={this.state.loadingText}
          >
          <div >
            <h3>MiTrade Mobile OTA<br></br>(Android)</h3>

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
        </LoadingOverlay>
      </div>
    );
  }
}

export default Android;
