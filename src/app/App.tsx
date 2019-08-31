import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Dashboard } from './pages/dashboard/Dashboard';
import { MainLayout } from './shared/components/MainLayout/MainLayout';

const App: React.FC = () => {
	return (
		<Router>
			<MainLayout>
				<Route path='/' component={Dashboard} />
			</MainLayout>
		</Router>
	);
}

	export default App;
