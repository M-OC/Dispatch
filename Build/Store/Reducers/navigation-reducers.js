import {extend} from 'lodash'

const initialState = {
	url: 'Blog'
}

export default (state = initialState, action) => {
	var newState = extend({}, state);
	switch (action.type) {
		case "MAIN_NAV":
			newState.url = action.url;
			return newState;
		default:
			return state;
	}
}