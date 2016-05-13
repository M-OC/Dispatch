import React from 'react'
import BlogListItem from './blog-list-item.jsx'
import {map} from 'lodash'


const blogEntries = [{
	title: 'A fake title1',
	subtitle: 'A fake subtitle containing text that might be a little more descriptive.',
	date: '5/10/1022',
	img: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Male_gorilla_in_SF_zoo.jpg'
},{
	title: 'A fake title2',
	subtitle: 'A fake subtitle containing text that might be a little more descriptive.',
	date: '10/20/3000',
	img: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Male_gorilla_in_SF_zoo.jpg'
},{
	title: 'A fake title3',
	subtitle: 'A fake subtitle containing text that might be a little more descriptive.',
	date: '10/20/3000',
	img: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Male_gorilla_in_SF_zoo.jpg'
}];

var styles = {
	backgroundColor: "#fbfbfb"
}

export default class BlogContainer extends React.Component {
	render () {
		return (
		<div style={styles}>
			{map(blogEntries, function(entry) {
				return (
				<BlogListItem title={entry.title} subtitle={entry.subtitle} date={entry.date} img={entry.img}/>
				)
			})}
		</div>
		)
	}
} 