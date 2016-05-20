import React from 'react'
import Radium from 'radium'
import {Link} from 'react-router'
import {projectListItem as styles} from '../../component-styles.js'
var RadiumLink = Radium(Link);


class ProjectListItem extends React.Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<RadiumLink to={'/Projects/' + this.props.title} style={styles.main}>
				<img style={styles.img} src={this.props.img}/>
				<div style={styles.textContainer}>
					<h2 style={styles.text}>
						{this.props.title}
					</h2>
					<h4 style={styles.text}>
						{this.props.subtitle}
					</h4>
				</div>
			</RadiumLink>
		)
	}
}


export default Radium(ProjectListItem);