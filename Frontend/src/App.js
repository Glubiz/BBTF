import React, {Suspense} from 'react'
import {Route, Switch} from 'react-router-dom'

import Loader from './components/UI/Loader'
import Header from './components/UI/Header/Header'
import Footer from './components/UI/Footer/Footer'

const Main = React.lazy(() => import('./Pages/Main'))
const Calculator = React.lazy(() => import('./Pages/Calculator'))
const About = React.lazy(() => import('./Pages/About'))

function App() {
    return (
        <div className="App lg:px-30 md:px-20 sm:px-10 lg:py-5 md:py-3 sm:py-1">
            <Header />
            <Switch>
                <Route path="/Calculator">
                    <Suspense fallback={<Loader/>}>
                        <Calculator/>
                    </Suspense>
                </Route>
                <Route path="/About">
                    <About/>
                </Route>
                <Route path="/">
                    <Suspense fallback={<Loader/>}>
                        <Main/>
                    </Suspense>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
