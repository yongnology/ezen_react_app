import { Component } from 'react';

class ReadContent extends Component {
  render() {
      console.log('Content가 랜더링됨');
      return(
        <article>
          <h2>{this.props.title}</h2>
          <p>{this.props.desc}</p>
        </article>
      );
    }
  }

export default ReadContent;