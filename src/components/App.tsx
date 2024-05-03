import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Create from 'screens/Create'
import Home from 'screens/Home'
import Update from 'screens/Update'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/update/:id">
          <Update />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
