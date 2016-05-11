import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {changeUrl} from '../../Store/Actions/navigation-actions.js'

var styles = {
	display: "inline-block"
}

class NavBarIcon extends React.Component {
	constructor (props) {
		super(props)
	}

	static defaultProps = {
		currentUrl: '/blog'
	}

	render(){
		return (
			<div style={styles} onClick={ () => this.props.ChangeUrl(this.props.label)}>
				{this.props.label}
				<p>Current: {this.props.currentUrl}</p>
			</div>	
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