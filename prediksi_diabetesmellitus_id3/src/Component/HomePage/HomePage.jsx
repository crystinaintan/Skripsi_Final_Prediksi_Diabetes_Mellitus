import React from 'react';
import './HomePage.css';
import diabetes from '../../Photo/diabetes.jpg';
import { Link } from 'react-router-dom';

class Home extends React.Component{

    componentWillMount = () =>{
        localStorage.removeItem("dulahir");
        localStorage.removeItem("duhamil");
        localStorage.removeItem("duglukosa");
        localStorage.removeItem("dusistol");
        localStorage.removeItem("dudiastol");
        localStorage.removeItem("dukulit");
        localStorage.removeItem("duinsulin");
        localStorage.removeItem("duberat");
        localStorage.removeItem("dutinggi");
        localStorage.removeItem("dukeluargaD");
        localStorage.removeItem("dukeluarga");

        localStorage.removeItem("resultExist");
        localStorage.removeItem("resDiabetes");
        localStorage.removeItem("resImt");
        localStorage.removeItem("resObesitas");
        localStorage.removeItem("resTekananDarah");
        localStorage.removeItem("statusInput");

        localStorage.setItem("menubaritem", 0);
    }

    render(){
        return(
            <div className="page">
                <img className="wallpaper_page" src={diabetes} alt=""/>
                <Link to="/test_diabetes_mellitus">
                    <button className="button_login">Prediksi DiabetesMu</button>
                </Link>
            </div>
        );
    }
}

export default Home;