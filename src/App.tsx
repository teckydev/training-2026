import './App.css'
import CheckboxForm from './components/CheckboxForm'
import FeedbackForm from './components/FeedbackForm'
import FocusLoginForm from './components/FocusLoginForm'
import NestedForm from './components/NestedForm'
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
     <NestedForm/>
     <FeedbackForm/>
     <CheckboxForm/>
     <FocusLoginForm/>
    </ThemeProvider>
     
    </>
  )
}

export default App
