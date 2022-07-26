import { Component } from 'react';

class Subject extends Component {
    render() {
      console.log('Subject가 랜더링됨');
      return (
        <header>
          <h1><a href="/" onClick={function(event) {
            event.preventDefault();
            this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
          <p>{this.props.sub}</p>
        </header>
      );
    }
}

export default Subject;