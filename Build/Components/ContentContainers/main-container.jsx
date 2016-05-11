import React from 'react'

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
			Some content
		</div>
	)
}