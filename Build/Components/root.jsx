import React from 'react'
import NavBar from './NavBar/nav-bar.jsx'
import MainContainer from './ContentContainers/main-container.jsx'

export default class Root extends React.Component {
	render () {
		return (
			<div>
				<NavBar/>
				<MainContainer/>
			</div>
		)
	}
}