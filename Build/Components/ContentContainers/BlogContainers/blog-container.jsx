import React from 'react'
import BlogListItem from './blog-list-item.jsx'
import {map} from 'lodash'


const blogEntries = [{
	title: 'A fake title1',
	subtitle: 'A fake subtitle1'
},{
	title: 'A fake title1',
	subtitle: 'A fake subtitle1'
},{
	title: 'A fake title1',
	subtitle: 'A fake subtitle1'
}];

var styles = {
	backgroundColor: "#ccc",
	margin: "1em"
}

export default class BlogContainer extends React.Component {
	render () {
		return (
		<div>
			{map(blogEntries, function(entry) {
				return (
				<BlogListItem title={entry.title} subtitle={entry.subtitle}/>
				)
			})}
		</div>
		)
	}
} 