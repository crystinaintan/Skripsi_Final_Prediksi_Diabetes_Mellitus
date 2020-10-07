import React,  {Component, Fragment} from 'react';
import './MiddleComponent.css';
import FormTest from '../FormTest/FormTest';
import Result from '../ResultComponent/ResultComponent';
import diabetes from '../../Photo/diabetes.jpg';


class Middle extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            hasilCekFormDiabetes: 'Loading...',
            hasilCekFormImt:'Loading...',
            hasilCekFormObesitas:'Loading...',
            hasilCekFormTekananDarah:'Loading...'
        }
    }

    changeResultTestDiabetes(diabetes)
    {
        this.setState({hasilCekFormDiabetes : diabetes});
    }

    changeResultTestImt(imt)
    {
        this.setState({hasilCekFormImt : imt});
    }

    changeResultTestObesitas(obesitas)
    {
        this.setState({hasilCekFormObesitas : obesitas});
    }

    changeResultTestTekananDarah(darah)
    {
        this.setState({hasilCekFormTekananDarah : darah});
    }

    render(){
        console.log("Render MiddleComponent");
        return(
            <div className="main_page">
                <img className="wallpaper" src={diabetes} alt=""/>
                                <FormTest doTest = {
                                    {
                                        hasilCekFormDiabetes : this.state.hasilCekFormDiabetes,
                                        changeResultTestDiabetes : this.changeResultTestDiabetes.bind(this),
                                        changeResultTestImt : this.changeResultTestImt.bind(this),
                                        changeResultTestObesitas : this.changeResultTestObesitas.bind(this),
                                        changeResultTestTekananDarah : this.changeResultTestTekananDarah.bind(this)
                                    }
                                }/>
                                <Result data = {{
                                    hasilCekFormDiabetes: this.state.hasilCekFormDiabetes,
                                    hasilCekFormImt: this.state.hasilCekFormImt,
                                    hasilCekFormObesitas: this.state.hasilCekFormObesitas,
                                    hasilCekFormTekananDarah: this.state.hasilCekFormTekananDarah}
                                }/>
            </div>
        );
    }
    
}

export default Middle;