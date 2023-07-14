import { useTheme } from '../../context/ThemeContextProvider';
import { Button } from '@fluentui/react-components';
import {WeatherMoon24Filled, WeatherSunny24Regular} from '@fluentui/react-icons';

export default function ThemeToggle() {
    const {theme, changeTheme} = useTheme();

    const onClickChangeTheme = () => {
        // Get local storage
        const localStorageTheme = localStorage.getItem('theme');

        if(localStorageTheme === 'light') {
            localStorage.setItem('theme', 'dark');
            changeTheme('dark');
        } else {
            localStorage.setItem('theme', 'light');
            changeTheme('light');
        }
    }

    return (
        <Button icon={theme === 'light' ? <WeatherSunny24Regular /> : <WeatherMoon24Filled />} size='small' appearance='transparent' onClick={onClickChangeTheme} />
    )
}