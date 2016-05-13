import React from 'react'
import Radium from 'radium'

var styles = {
	main: {
		margin: "1em 1em",
		padding: "0 2em",
		backgroundColor: "#8cf",
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "space-between",
		alignContent: "space-between",

		":hover": {
			backgroundColor: "#bef"
		}
	},
	textContainer: {
		flex: "2 1",
		margin: "0 1.5em"
	},
	text: {
		margin: ".5em 0"
	},
	date: {
		margin: ".25em 0em",
		fontWeight: "bold"
	},
	img: {
		maxWidth: "8em",
		height: "auto"
	}
}

/*export default*/ class BlogListItem extends React.Component {
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


