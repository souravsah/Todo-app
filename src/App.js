import { Fragment } from 'react/cjs/react.production.min';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './Core/Navbar/Navbar';
import EditFormPage from './Pages/EditFormPage/EditFormPage';
import AddTodoPage from './Pages/AddTodoPage/AddTodoPage'
import HomePage from './Pages/HomePage/HomePage';
import { GlobalProvider } from './Context/Expense/Expensecontext';
import SettingPage from './Pages/settingsPage/SettingPage';
function App() {
  return (
    <GlobalProvider>
    <Fragment>
    <Router>
    <Navbar/>

      <Switch>
      
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/editform" component={EditFormPage}/>
        <Route exact path="/addtodo" component={AddTodoPage}/>
        <Route exact path="/setting" component={SettingPage}/>
      </Switch>
    </Router>
    </Fragment>

    </GlobalProvider>
  );
}

export default App;
