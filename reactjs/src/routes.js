import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/login/index'
import MonkChat from './pages/monkchat'



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Login} />
                <Route path="/chat" component={MonkChat} />
            </Switch>
        </BrowserRouter>
    )
}
