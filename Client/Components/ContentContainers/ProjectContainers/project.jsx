import React from 'react'



export default class Project extends React.Component {
	componentWillReceiveProps () {

	}

	render () {
		return (
			<div>
				{this.props.params.project}
			</div>
		)
	}
}