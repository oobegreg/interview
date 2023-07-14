import { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { FluentProvider, webLightTheme, webDarkTheme, useThemeClassName } from '@fluentui/react-components';

// This is an override to add all classNames of Fluent UI to the <body> tag for dark mode
// Was copied from https://github.com/microsoft/fluentui/issues/23626
const ApplyFluentUiStylesToBody = () => {
	const classes = useThemeClassName();

	useEffect(() => {
		const classList = classes.split(' ');
		document.body.classList.add(...classList);

		return () => document.body.classList.remove(...classList);
	}, [classes]);

	return null;
}

// Define light and dark themes
const themeList = {
	light: webLightTheme,
	dark: webDarkTheme
}

// Define ThemeContext
const ThemeContext = createContext({
	theme: 'light',
	changeTheme: name => { }
});

const ThemeWrapper = ({ children }) => {
	return (
		<ThemeContext.Consumer>
			{({ theme }) => (
				<FluentProvider theme={themeList[theme]}>
					<ApplyFluentUiStylesToBody />
					{children}
				</FluentProvider>
			)}
		</ThemeContext.Consumer>
	)
}

const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState<'light'|'dark'>('light');

	const handleSetThemeState = () => {
		// Get local storage
		const localStorageTheme = localStorage.getItem('theme');

		// If local storage doesn't exist, create and set default theme
		if (!localStorageTheme) {
			// Get device theme and if it prefers dark mode then set it to dark, else set it to light
			const deviceTheme = (window.matchMedia('(prefers-color-scheme: dark)')) ? 'dark' : 'light';
			localStorage.setItem('theme', deviceTheme);
		} else {
			setTheme(localStorageTheme);
		}
	}

	useEffect(() => {
		void handleSetThemeState();
	}, [setTheme]);

	const changeTheme = (themeName) => themeList[name] && setTheme(name);
	const value = { theme, changeTheme };

	return (
		<ThemeContext.Provider value={value}>
			<ThemeWrapper>{children}</ThemeWrapper>
		</ThemeContext.Provider>
	)
}

const useTheme = () => useContext(ThemeContext);

export {
	ThemeContext,
	ThemeContextProvider,
	useTheme
}