import React, { Component } from 'react';
import FileSaver from 'file-saver';

class FileItem extends Component {
  render() {
    return (
      <tr>
        <td>
          <a href="javascript:handleClick()" onClick={this.handleClick.bind(this)} >
            {this.props.filelist.fileName}
          </a>
        </td>
        <td>{this.props.filelist.version}</td>
        <td>{this.props.filelist.time}</td>
      </tr>
    );
  }

  handleClick(e){
    var platform = this.props.filelist.platform

    this.props.loadingCallBack(true);

    fetch("https://ota.mitrade.com/api/ota-file/download/" + platform + "/" + this.props.filelist.fileName).then(function(response) {
      return response.blob();
    }).then(function(blob) {
      if(platform === 'android'){
        FileSaver.saveAs(blob, 'miTrade.apk');
        this.props.loadingCallBack(false);
      } else if(platform === 'ios'){
        //FileSaver.saveAs(blob, 'miTrade.ipa');
        var timeStamp = this.props.filelist.fileName.split("_")[1].split(".")[0];
        window.location = 'itms-services://?action=download-manifest&url=https://ota.mitrade.com/api/ota-file/download-manifest/manifest_' + timeStamp + '.plist';
        this.props.loadingCallBack(false);
      } 
    }.bind(this))
  }
}

export default FileItem;