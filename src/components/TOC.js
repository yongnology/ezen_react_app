import { Component } from 'react';

class TOC extends Component {
    render() {
        console.log('TOC이 랜더링됨');
        var lists = [];
        var data = this.props.data;
        var i=0;
        while(i < data.length) {
            lists.push(<li key={data[i].id}><a
            // data-iddd={data[i].id} // i와 a태그를 구분하기 위해 data[i].id 값을 갖는 변수를 생성 
            // 아래 dataset에 의해 연결될 예정 ↓*4
            onClick={function(id, event) {
                // debugger;
                event.preventDefault();
                this.props.onChangePage(id);
                // this.props.onChangePage(event.target.dataset.iddd);
                    // dataset은 data- 로 시작하는 접두사 객체 속성을 접근
            }.bind(this, data[i].id)}
            href={"/content/" + data[i].id}>{data[i].title}</a></li>);
            i++;
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;