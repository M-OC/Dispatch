import React from 'react'
import BlogListItem from './blog-list-item.jsx'
import {map} from 'lodash'
import {blogContainer as styles} from '../../component-styles.js'


const blogEntries = [{
	id: 'ab',
	title: 'A fake title1',
	subtitle: 'A fake subtitle containing text that might be a little more descriptive.',
	date: '5/10/1022',
	img: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Gorilla_gorilla11.jpg'
},{
	id: 'bc',
	title: 'A fake title2',
	subtitle: 'A fake subtitle containing text that might be a little more descriptive.',
	date: '10/20/3000',
	img: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Gorilla_gorilla11.jpg'
},{
	id: 'cd',
	title: 'A fake title3',
	subtitle: 'A fake subtitle containing text that might be a little more descriptive.',
	date: '10/20/3000',
	img: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Gorilla_gorilla11.jpg'
},{
	id: 'dd',
	title: 'A fake title3',
	subtitle: 'A fake subtitle containing text that might be a little more descriptive.',
	date: '10/20/3000',
	img: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Gorilla_gorilla11.jpg'
},];


export default class BlogContainer extends React.Component {
	render () {
		return (
		<div style={styles}>
			{map(blogEntries, function(entry) {
				return (
				<BlogListItem key={entry.id} title={entry.title} subtitle={entry.subtitle} date={entry.date} img={entry.img}/>
				)
			})}
		</div>
		)
	}
} 