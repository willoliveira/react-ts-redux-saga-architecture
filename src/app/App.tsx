import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Dashboard } from './pages/dashboard/Dashboard';
import { MainLayout } from './shared/components/MainLayout/MainLayout';
import { Provider } from 'react-redux';
import { store } from './store';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Router>
				<MainLayout>
					<Route path='/' component={Dashboard} />
				</MainLayout>
			</Router>
		</Provider>
	);
}

	export default App;
