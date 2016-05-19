import 'normalize.css'
import './styles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {StyleRoot} from 'radium'
import Store from './Store/store.js'
import Root from './Components/root.jsx'
import MainContainer from './Components/ContentContainers/main-container.jsx'
import BlogContainer from './Components/ContentContainers/BlogContainers/blog-container.jsx'
import ProjectContainer from './Components/ContentContainers/ProjectContainers/project-container.jsx'
import ProjectList from './Components/ContentContainers/ProjectContainers/project-list.jsx'
import Project from './Components/ContentContainers/ProjectContainers/project.jsx'


ReactDOM.render(
	<Provider store={Store}>
		<StyleRoot>
			<Router history={browserHistory}>
				<Route path='/' component={Root}>
					<Route component={MainContainer}>
						<IndexRoute component={BlogContainer}/>
						<Route path='Blog' component={BlogContainer}>

						</Route>
						<Route path='Projects' component={ProjectContainer}>
							<IndexRoute component={ProjectList}/>
							<Route path=':project' component={Project}/>
						</Route>
					</Route>
				</Route>
			</Router>
		</StyleRoot>
	</Provider>, 
	document.getElementById('root'));
