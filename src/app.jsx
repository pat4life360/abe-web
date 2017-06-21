import * as React from "react";
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
// import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react';
import PageHeader from './components/header.jsx';
import AddEditEventScene from './scenes/AddEdit/add-edit-event.jsx';
import CalendarScene from './scenes/Calendar/calendar.jsx';
import Footer from "./components/footer.jsx";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {title: 'ABE | Olin College of Engineering'}
    }

    setPageTitle(newTitle) {
        this.setState({title: newTitle + ' | Olin College of Engineering'});
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <PageHeader/>
                    <Main/>
                </div>
                <Footer/>
            </div>
        )
    }
}

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={CalendarScene} />
            <Route path='/edit' component={AddEditEventScene} />
        </Switch>
    </main>
);

//$(document).foundation()
render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('app')
);