import { Component } from 'react';

class UpdateContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:this.props.data.title
        };
    }
  render() {
      console.log('UpdateContent가 랜더링됨');
        return(
            <article>
                <h2>수정하기(Update)</h2>
                <form action='/update_process' method='post'
                onSubmit={function (event) {
                    event.preventDefault();
                    this.props.onSubmit(
                        event.target.title.value,
                        event.target.desc.value
                    );
                    // debugger;
                    // alert('생성되었음');
                }.bind(this)}>
                <p><label>목차이름</label>
                    <input type='text' name='title' placeholder='목차이름'
                    value={this.state.title}
                    onChange={function (event) {
                        this.setState({
                            title:event.target.value
                        });
                    }.bind(this)}></input>
                </p>
                <p><label>세부설명</label>
                    <textarea name='desc' placeholder='세부설명'></textarea>
                </p>
                <p><input type='submit' value='수정'></input></p>
                </form>
            </article>
        );
    }
}

export default UpdateContent;