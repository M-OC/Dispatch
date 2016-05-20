import React from 'react'
import Radium from 'radium'
import {Route} from 'react-router'
import BlogContainer from './BlogContainers/blog-container.jsx'
import ProjectContainer from './ProjectContainers/project-container.jsx'
import {mainContainer as styles} from '../component-styles.js'


class MainContainer extends React.Component {
	render () {
		return (
			<div style={styles}>
				{this.props.children}
			</div>
		)
	}
}


export default Radium(MainContainer);