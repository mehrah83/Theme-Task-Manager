import TaskManager from "./components/TaskManage";
import ThemeToggle from "./components/ThemeToggle";
import { useSelector } from 'react-redux';

const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <>
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
    <ThemeToggle/>
    <TaskManager/>
    </div>
    </>
  )
}

export default App;
