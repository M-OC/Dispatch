import React from 'react'

var styles = {
	backgroundColor: "#fbfbfb"
}

export default class ProjectContainer extends React.Component {
	render () {
		return (
			<div style={styles}>
				{this.props.children}
			</div>
		)
	}
}