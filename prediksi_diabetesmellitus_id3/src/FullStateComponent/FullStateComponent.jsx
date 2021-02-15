import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './FullStateComponent.css';
import Header from '../Component/Header/Header';
import MenuBar from '../Component/MenuComponent/MenuBar';
import Middle from '../Component/MiddleComponent/MiddleComponent';
import Home from '../Component/HomePage/HomePage';
import DiabetesDefinition from '../Component/DiabetesDefinitionPage/DiabetesDefinition';
import DiabetesMellitus from '../Component/DiabetesMellitusDefinitionPage/DiabetesMellitus';
import BmiObesitas from '../Component/BmiObesitasPage/BmiObesitas';

class Main extends Component{
    render(){
        return(
            <Router>
                <Fragment>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/test_diabetes_mellitus">
                            <Header/>
                            <MenuBar />
                            <Middle />
                        </Route>
                        <Route path="/definisi_diabetes">
                            <Header/>
                            <MenuBar />
                            <DiabetesDefinition />
                        </Route>
                        <Route path="/definisi_diabetes_mellitus">
                            <Header/>
                            <MenuBar />
                            <DiabetesMellitus />
                        </Route>
                        <Route path="/definisi_BMI_obesitas">
                            <Header/>
                            <MenuBar />
                            <BmiObesitas />
                        </Route>
                    </Switch>
                </Fragment>
            </Router>
        );
    }

}

export default Main;