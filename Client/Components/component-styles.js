export var navBar = {
	backgroundColor: "#08334f",
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "space-around",
	fontFamily: "sans-serif",
	fontSize: "1.5em",
	alignItems: "stretch"
}

export var navBarIcon = {
	display: "inline-block",
	padding: "1.5rem",
	textAlign: "center",
	textDecoration: "none",
	color: "white",
	flexGrow: 1,
	":hover": {
		backgroundColor: "#1a6b9f"
	}
}

export var mainContainer = {
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

export var blogContainer = {
	backgroundColor: "#fbfbfb"
}

export var blogListItem = {
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
		},

		"@media (max-width: 850px)": {
			padding: ".25em 2em",
			flexDirection: "column",
			margin: ".5em 0"
		}
	},
	textContainer: {
		flex: "2 1",
		margin: "0 1.5em",
		"@media (max-width: 850px)": {
			margin: "auto"
		}
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
		height: "auto",
		"@media (max-width: 850px)": {
			display: "none"
		}
	}
}

export var projectContainer = {
	backgroundColor: "#fbfbfb"
}

export var projectListItem = {
	main: {
		margin: "1em 1em",
		padding: "0, 2em",
		backgroundColor: "#8cf",
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "space-between",
		alignContent: "space-between",

		":hover": {
			backgroundColor: "#bef"
		},

		"@media (max-width: 850px)": {
			padding: ".25em 2em",
			flexDirection: "column",
			margin: ".5em 0"
		}
	},
	textContainer: {
		textAlign: "center",
		flex: "2 1",
		margin: "0 1.5em",
		"@media (max-width: 850px)": {
			margin: "auto"
		}
	},
	text: {
		//margin: ".5em 0"
	},
	date: {
		margin: ".25em 0em",
		fontWeight: "bold"
	},
	img: {
		maxWidth: "12em",
		height: "auto",
		"@media (max-width: 850px)": {
			display: "none"
		}
	}
}









