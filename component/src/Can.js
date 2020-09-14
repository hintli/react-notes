import React, { Component } from 'react';
import PropTypes from 'prop-types';

 class Can extends Component {

	constructor(props)
	{
		super();
		console.log(props);
	}
	 static propTypes={
		 newsData:PropTypes.shape(
			{
				title:PropTypes.string,
				description:PropTypes.string
			}
		 )
	 }
	render() {

		console.log(this.props.newsData)
		const{title,description}=this.props.newsData;
		return (
			<div>
				
				
				
				<h1>{title}</h1>
				<p>{description}</p>
								
				
				
			</div>
			
		)
	}
}

export default Can;