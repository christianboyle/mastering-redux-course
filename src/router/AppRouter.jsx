import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import ContactsList from '../components/ContactsList'
import Header from '../components/Header'

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <div className='main-container'>
      <Switch>
        <Route component={ContactForm} path='/' exact />
        <Route component={ContactsList} path='/list' />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
