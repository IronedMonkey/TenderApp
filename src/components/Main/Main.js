import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListTender from '../../pages/Tender/ListTender.js';
import ShowTender from '../../pages/Tender/ShowTender.js';
import AddTender from '../../pages/Tender/AddTender.js';
import EditTender from '../../pages/Tender/EditTender.js';

/*todo, route #1 does not work if placed below position #1*/


const Main = () => 	
	<div className="container">
		<main>
			<Switch>
				<Route exact path="/tender/add" render={()=> <AddTender />} />
				<Route exact path="/" render={()=> <ListTender />} />
				<Route path="/tender/show/:id" render={()=> <ShowTender />} />
				<Route path="/tender/edit/:id" render={()=> <EditTender />} />
			</Switch>
		</main>
	</div>



export default Main;