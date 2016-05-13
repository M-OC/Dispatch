import React from 'react'

export default class BlogListItem extends React.Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h3>{this.props.subtitle}</h3>
			</div>
		)
	}
}