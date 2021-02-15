import React from 'react';
import './BmiObesitas.css';
import diabetes from '../../Photo/diabetes.jpg';
import bmi from '../../Photo/Rumus-menghitung-BMI.jpg';
import visceralOrgan from '../../Photo/Organ_Lemak_Verseral.png';
import visceral from '../../Photo/lemak_vericeral.jpg';
import obesitas from '../../Photo/BMI.jpg';

class BmiObesitas extends React.Component{
    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render(){
        return (
            <div className="main_page">
                <img className="wallpaper" src={diabetes} alt=""/>
                <h2>BMI & Obesitas</h2>
                <div className="definisi">        
                        <img className="gambar" src={obesitas} alt=""/>
                        <p className="itemList">Obesitas atau yang biasa dikenal degan sebutan kelebihan berat badan, 
                        merupakan faktor risiko utama untuk diabetes mellitus. 
                        Hal ini terjadi karena semakin tebal jaringan lemak, sel-sel semakin kebal juga terhadap insulin. Cara mengukur berat badan
                        adalah dengan menggunakna rumus perhitungan BMI (<i>Body Mass Index</i>) atau IMT (Index Massa Tubuh) sebagai berikut. 
                        
                        <figure>
                            <img className="gambar_li" src={bmi} alt=""/>
                            <figcaption>Rumus mengukur BMI atau IMT</figcaption>
                        </figure>
                        Arti dari hasil perhitungan BMI dapat dilihat sebagai berikut:
                        <ol>  
                            <li>BMI atau IMT di bawah 18,5 = Berat badan kurang</li>
                            <li>BMI atau IMT 18,5 – 22,9 = Berat badan normal</li>
                            <li>BMI atau IMT 23 – 29,9 = Berat badan berlebih (kecenderungan obesitas)</li>
                            <li>BMI atau IMT 30 ke atas = obesitas</li>
                        </ol>
                        Pada tubuh manusia, lemak akan terlebih dahulu disimpan ke lapisan <i>subkutan</i> 
                        (bagian bawah kulit/ kulit lemak/ jaringan ikat) seperti gambar berikut.
                        <figure>
                            <img className="gambar_li" src={visceral} alt=""/>
                            <figcaption>Lemak subkutan dan Lemak Visceral</figcaption>
                        </figure>
                        Namun bila lemak pada bagian subkutan sudah terlalu banyak hingga lapisan subkutan tidak dapat 
                        lagi menampung lemak tubuh maka lemak akan disimpan langsung di dekat organ-organ internal seperti gambar berikut.
                        <figure>
                            <img className="gambar_li" src={visceralOrgan} alt=""/>
                            <figcaption>Lemak Visceral pada Organ</figcaption>
                        </figure>
                        Lemak yang disimpan langsung di dekat organ-organ internal adalah lemak visceral atau lemak viseral. 
                        Meskipun lemak visceral berfungsi untuk melindungi organ internal (karena letaknya yang berdekatan langsung dengan organ-organ internal), 
                        namun lemak visceral juga mempunyai pengaruh yang buruk bagi tubuh. Selain mampu menghasilkan senyawa sitokin (senyawa peradangan dan hormon yang dapat mengganggu metabolisme tubuh), 
                        lemak visceral juga mengeluarkan senyawa lain yaitu asam lemak bebas. Hal ini dapat mengakibatkan terjadinya resisten insulin. 
                        </p>
                        <p className="itemList">
                        Resisten insulin adalah keadaan tubuh manusia ketika sel-sel tubuh tidak dapat menggunakan gula darah dengan baik karena 
                        terganggunya respon sel tubuh terhadap insulin. Lemak viseral adalah tipe lemak yang paling berbahaya. 
                        Kumpulan lemak viseral di dalam tubuh bisa mengeluarkan senyawa peradangan dan hormon yang dapat mengakibatkan terganggunya metabolisme tubuh (dalam kasus ini adalah terganggunya respon sel tubuh terhadap insulin). 
                        Oleh karena itu, risiko untuk mengalami diabetes mellitus semakin besar. 
                        </p>
                </div>
                
            </div>
        );
    }
}

export default BmiObesitas;
