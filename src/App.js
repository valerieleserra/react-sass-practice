import Layout from './components/layout'
import {Route, Switch, Redirect} from 'react-router-dom'
import './styles/_main.scss'

import Home from './scenes/Home'
import About from './scenes/About'
import Services from './scenes/Services'

function App() {
  return (
    <>
    <Layout>
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/' >
            <Redirect to='/home' />
          </Route>
          
          

          {/* 404 page */}
          <Route path='*'>
            <h2>Sorry page could not be found</h2>
          </Route>
        </Switch>
      </Layout>
    </>
  )
}

export default App