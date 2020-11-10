import React, {Component, Fragment} from 'react';
import './Header.css';

class Header extends Component{
    render(){
        console.log("Component Header Render");
        return(
            <div className="header">
                <h1>Deteksi Gejala Diabetes Mellitus (untuk WANITA DEWASA)</h1>
            </div>
        );
    }

}

export default Header;