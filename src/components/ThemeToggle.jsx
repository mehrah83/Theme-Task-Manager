import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/Theme";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button onClick={handleToggle}>
      Toggle Theme ({darkMode ? "dark" : "light"})
    </button>
  );
};

export default ThemeToggle;
