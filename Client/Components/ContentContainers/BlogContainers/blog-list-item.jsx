import React from 'react'
import Radium from 'radium'
import {blogListItem as styles} from '../../component-styles.js'


class BlogListItem extends React.Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<div style={styles.main}>
				<img style={styles.img} src={this.props.img}/>
				<div style={styles.textContainer}>
					<h2 style={styles.text}>
						{this.props.title}
					</h2>
					<h4 style={styles.text}>
						{this.props.subtitle}
					</h4>
				</div>
				<span style={styles.date}>
					{this.props.date}
				</span>
			</div>
		)
	}
}


export default Radium(BlogListItem);


