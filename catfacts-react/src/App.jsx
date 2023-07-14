import React from 'react';
import ThemeToggle from './components/themeToggle';
import { ThemeContextProvider } from './context/ThemeContextProvider';
import './App.css'
import FactsPage from './components/facts/facts';

export default function App() {
	return (
		<React.StrictMode>
			<ThemeContextProvider>
				<ThemeToggle />
				<FactsPage />
			</ThemeContextProvider>
		</React.StrictMode>
	)
}