import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Can from "./Can";
import Form from "./Form";


class Arakatman extends Component {	
	
	static propTypes=
	{
		dizim:PropTypes.array
		
	}

	static defaultProps =
	{
		name : "Canan"
	};
	render() {
		const elements=this.props.dizim.map(dizim => 
			<Can key={dizim.id} newsData={dizim}/>
			)
		return (
			<div>
				{
					this.props.name
				}
				{

					elements
				}
				<Form addnews={this.props.addnews}/>
			</div>
		)
	}
}

export default Arakatman
