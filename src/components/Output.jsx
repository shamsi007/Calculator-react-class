import React from "react";
export class Output extends React.Component {
    render() {
      return (
        <div className="outputScreen" id="display">
          {this.props.currentValue}
        </div>
      );
    }
  }
  