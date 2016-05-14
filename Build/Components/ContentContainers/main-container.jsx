import React from 'react'
import Radium from 'radium'
import BlogContainer from './BlogContainers/blog-container.jsx'

var styling = {
	backgroundColor: "white",
	padding: "2em",
	display: "flex",
	flexDirection: "column",
	overflow: "scroll",
	height: "100vh",
	"@media (max-width: 850px)": {
		padding: "0"
	}
}

var MainContainer = () => {
	return (
		<div style={styling}>
			<BlogContainer/>
		</div>
	)
}

export default Radium(MainContainer);