import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'; 

const App = () => {
    return(
        <Router>
            <div>
                <Switch>
                    {/* <Route exact path="/" component={componentName}/> */}
                </Switch>
            </div>
        </Router>
    )
}

export default App;
