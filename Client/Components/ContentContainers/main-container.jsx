import React from 'react'
import Radium from 'radium'
import {Route} from 'react-router'
import BlogContainer from './BlogContainers/blog-container.jsx'
import ProjectContainer from './ProjectContainers/project-container.jsx'

var styling = {
	backgroundColor: "white",
	padding: "2em",
	display: "flex",
	flexDirection: "column",
	overflow: "scroll",
	height: "100vh",
	"@media (max-width: 850px)": {
		padding: "2em 0"
	}
}

class MainContainer extends React.Component {
	render () {
		return (
			<div style={styling}>
				{this.props.children}
			</div>
		)
	}
}

export default Radium(MainContainer);