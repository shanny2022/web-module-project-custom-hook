import useLocalStorage from './useLocalStorage'; // import useLocalStorage

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage('darkMode', false); // use useLocalStorage instead of useState

  return [isDarkMode, setIsDarkMode];
}
