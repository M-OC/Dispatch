import React from 'react'
import Radium from 'radium'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {changeUrl} from '../../Store/Actions/navigation-actions.js'
import {navBarIcon as styles} from '../component-styles.js'
var RadiumLink = Radium(Link);


class NavBarIcon extends React.Component {
	constructor (props) {
		super(props)
	}

	render(){
		return (
			<RadiumLink to={this.props.label} style={styles}>
				{this.props.label}
			</RadiumLink>	
		)
	}
}


const mapStateToProps = function (state) {
	return {
		currentUrl: state.Navigation.url
	}
}

const mapDispatchToProps = function (dispatch) {
	return {
		ChangeUrl: bindActionCreators(changeUrl, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarIcon);