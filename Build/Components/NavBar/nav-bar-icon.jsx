import React from 'react';

var styles = {
	display: "inline-block"
}

export default ({label}) => {
	return (
		<div style={styles}>
			{label}
		</div>	
	)
}