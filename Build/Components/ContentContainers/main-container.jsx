import React from 'react'
import BlogContainer from './BlogContainers/blog-container.jsx'

var styling = {
	backgroundColor: "white",
	padding: "2em",
	display: "flex",
	flexDirection: "column",
	overflow: "scroll",
	height: "100vh"
}

export default () => {
	return (
		<div style={styling}>
			<BlogContainer/>
		</div>
	)
}