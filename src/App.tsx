import './App.css'
import AdvancedForm from './components/AdvancedForm'
import CheckboxForm from './components/CheckboxForm'
import FeedbackForm from './components/FeedbackForm'
import FocusLoginForm from './components/FocusLoginForm'
import { Grid } from './components/Grid'
import Navbar from './components/Navbar'
import NestedForm from './components/NestedForm'
import { NestedGrid } from './components/NestedGrid'
import SignupForm from './components/SignupForm'
// import TaskContainer from './components/Taskcontainer'
import { ThemeProvider } from './context/ThemeProvider'
import { Onboarding } from './pages/Onboarding'
import TransactionPage from './pages/TransactionPage'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <ThemeProvider>
     {/* <TaskContainer />  */}
     <Navbar/>
     <Onboarding/>
     <TransactionPage/>
     <NestedForm/>
     <FeedbackForm/>
     <CheckboxForm/>
     <FocusLoginForm/>
     <SignupForm/>
     <AdvancedForm/>
     <Grid/>
     <NestedGrid/>
    </ThemeProvider>
     
    </>
  )
}

export default App
