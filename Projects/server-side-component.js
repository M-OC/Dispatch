import React from 'react'


export default class ServerSideComponent extends React.Component {
	render () {
		return (
			<div>
				<p>
					A react component rendered on the server.
					Foo is: {this.props.foo},
					Bar is: {this.props.bar}
				</p>
			</div>
		)
	}
}