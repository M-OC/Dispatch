import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {changeUrl} from '../../Store/Actions/navigation-actions.js'


var styles = {
	display: "inline-block"
}


class NavBarIcon extends React.Component {
	constructor (props) {
		super(props)
	}

	render(){
		return (
			<Link to={this.props.label} style={styles}>
				{this.props.label}
			</Link>	
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