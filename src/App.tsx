import './App.css'
// import TaskContainer from './components/Taskcontainer'
import { ThemeProvider } from './context/ThemeProvider'
import { Onboarding } from './pages/Onboarding'
import TransactionPage from './pages/TransactionPage'

function App() {

  return (
    <>
    <ThemeProvider>
     {/* <TaskContainer />  */}
     <Onboarding/>
     <TransactionPage/>
    </ThemeProvider>
     
    </>
  )
}

export default App
