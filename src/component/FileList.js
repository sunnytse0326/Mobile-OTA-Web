import React, { Component } from 'react';
import FileItem from './FileItem';

class FileList extends Component {
  render() {
    var rows = [];
    this.props.filelists.forEach((file) => {
      if (file.version.indexOf(this.props.filterText) === -1) {
        return;
      }
      rows.push(<FileItem loadingCallBack={this.props.loadingCallBack} filelist={file} />);
    });
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Version</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default FileList;