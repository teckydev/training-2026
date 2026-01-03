import './App.css'
import TaskContainer from './components/Taskcontainer'
import { ThemeProvider } from './context/ThemeProvider'

function App() {

  return (
    <>
    <ThemeProvider>
     <TaskContainer /> 

    </ThemeProvider>
     
    </>
  )
}

export default App
