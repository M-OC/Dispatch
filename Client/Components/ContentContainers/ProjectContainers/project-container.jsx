import React from 'react'
import {projectContainer as styles} from '../../component-styles.js'


export default class ProjectContainer extends React.Component {
	render () {
		return (
			<div style={styles}>
				{this.props.children}
			</div>
		)
	}
}