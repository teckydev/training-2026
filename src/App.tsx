import './App.css'
// import TaskContainer from './components/Taskcontainer'
import { ThemeProvider } from './context/ThemeProvider'
import { Onboarding } from './pages/Onboarding'

function App() {

  return (
    <>
    <ThemeProvider>
     {/* <TaskContainer />  */}
     <Onboarding/>
    </ThemeProvider>
     
    </>
  )
}

export default App
