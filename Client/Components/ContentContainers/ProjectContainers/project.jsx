import React from 'react'


export default class Project extends React.Component {
	getInitialState () {
		return {
			html: 'loading...' + this.props.title
		}
	}

	componentDidMount () {
		fetch('https://localhost:8000/Projects/' + this.props.title)
		.then(function (response) {
			import ServerSideComponent
			this.setState({html: response});
		}).catch(function (error) {
			this.setState({html: 'error loading project'});
		})
	}

	render () {
		return (
			<div dangrouslySetInnerHTML={this.state.html}>
			</div>
		)
	}
}