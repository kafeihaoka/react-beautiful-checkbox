import React from "react";
import ReactDOM from "react-dom";
// import Checkbox from "./../../lib/index";
import Checkbox from "react-beautiful-checkbox";

const data1 = [{
	value: 'apple',
	label: '苹果',
	color: 'rgb(248, 115, 87)'
},{
	value: 'banana',
	label: '香蕉',
	color: 'rgb(4, 192, 96)'
},{
	value: 'pear',
	label: '梨',
	color: 'rgb(255, 149, 2)'
}];

const data2 = [{
	value: 'apple',
	label: '苹果',
},{
	value: 'banana',
	label: '香蕉',
},{
	value: 'pear',
	label: '梨',
}];

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			tabValue1 : [],
			tabValue2 : []
		};
	}

    handleChange1 = (e) => {
        this.setState({
			tabValue1: e
        })
	}
	
	handleChange2 = (e) => {
        this.setState({
            tabValue2: e
        })
    }

	render() {
	    const { tabValue1, tabValue2 } = this.state;
		return (
            <div>
				<div>
					<p>多选</p>
					<Checkbox 
						options={data2} 
						defaultValue={tabValue1} 
						onChange={this.handleChange1} /> 
				</div>
				<div>
					<p>彩色字体多选</p>
					<Checkbox 
						options={data1} 
						defaultValue={tabValue2} 
						onChange={this.handleChange2} /> 
				</div>
			</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById("example"));
