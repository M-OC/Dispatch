import React from 'react'
import NavBarIcon from './nav-bar-icon.jsx'


var styling = {
	backgroundColor: "#8cf",
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "space-around",
	fontFamily: "sans-serif",
	fontSize: "1.5em",
	padding: "1em 0"
}


export default () => {
	return (
		<div style={styling}>
			<NavBarIcon label={"Blog"}/>
			<NavBarIcon label={"Projects"}/>
			<NavBarIcon label={"About"}/>
		</div>
	)
}