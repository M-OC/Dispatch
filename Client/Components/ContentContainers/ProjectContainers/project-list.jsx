import React from 'react'
import ProjectListItem from './project-list-item.jsx'
import {map} from 'lodash'


export const ProjectEntries = [{
	id: 'zzb',
	title: 'server-side-component',
	subtitle: 'PROJECT A fake subtitle containing text that might be a little more descriptive.',
	img: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Gorilla_gorilla11.jpg'
},{
	id: 'bzzc',
	title: 'A fake title2',
	subtitle: 'PROJECT A fake subtitle containing text that might be a little more descriptive.',
	img: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Gorilla_gorilla11.jpg'
},{
	id: 'czzd',
	title: 'A fake title3',
	subtitle: 'PROJECT A fake subtitle containing text that might be a little more descriptive.',
	img: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Gorilla_gorilla11.jpg'
}];


export default class ProjectList extends React.Component {
	render () {
		return (
			<div>
				{map(ProjectEntries, function (project) {
					return (
						<ProjectListItem key={project.id} title={project.title} subtitle={project.subtitle} img={project.img}/>
					)
				})}
			</div>
		)
	}
}