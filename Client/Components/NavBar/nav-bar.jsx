import React from 'react'
import NavBarIcon from './nav-bar-icon.jsx'
import {navBar as styles} from '../component-styles.js'


export default () => {
	return (
		<div style={styles}>
			<NavBarIcon label={"Blog"}/>
			<NavBarIcon label={"Projects"}/>
			<NavBarIcon label={"About"}/>
		</div>
	)
}