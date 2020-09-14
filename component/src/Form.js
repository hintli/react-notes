import React, { Component } from 'react'

 class Form extends Component {

	constructor(props)
	{
		super(props);
	}
	addButton()
	{	
		this.props.addnews();
		console.log("hi");
		
	}

	render() {
		return (
			<div>
				<button onClick={ () =>  this.addButton()}>Ekle</button>
			</div>
		)
	}
}

export default Form;