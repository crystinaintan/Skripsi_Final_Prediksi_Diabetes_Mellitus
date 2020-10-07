import React from 'react';
import './DiabetesDefinition.css';
import diabetes from '../../Photo/diabetes.jpg';
import d from '../../Photo/d.jpg';

class Diabetes extends React.Component{
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    
    render(){
        return (
            <div className="main_page">
                <img className="wallpaper" src={diabetes} alt=""/>
                <h2>Diabetes</h2>
                <div className="definisi">        
                    <img className="gambar" src={d} alt=""/>
                    <p className="itemList">Diabetes adalah penyakit yang berlangsung lama atau kronis serta ditandai 
                    dengan kadar gula (glukosa) darah yang tinggi atau di atas nilai normal. Namun untuk mendeteksi diabetes, tidak cukup dengan 
                    hanya melihat kepada kadar glukosa pada darah saja melainkan diperlukan uji-uji lainnya yang dapat dilakukan dengan menempuh pengujian lab. 
                    Kadar gula (glukosa) darah manusia adalah salah satu indikator diabetes yang dapat diperoleh dari keterangan hasil pengujian Lab. 
                    Kondisi tubuh manusia yang ditandai dengan kadar gula (glukosa) darah yang tinggi atau di atas nilai normal biasa disebut juga dengan istilah <i>Hiperglikemia</i>. 
                    Sedangkan kondisi tubuh manusia yang ditandai dengan kadar gula (glukosa) darah yang rendah atau di bawah nilai normal biasa disebut juga dengan istilah <i>Hipoglikemia</i>. 
                    Kadar glukosa dalam darah manusia yang masih berada dalam batas normal adalah diantara <i>range</i> 70 mg/dL hingga 200 mg/dL. 
                    Sedangkan untuk kadar glukosa dalam darah manusia dapat dikatakan rendah bila gula darah berada di bawah 70 mg/dL. 
                    Sedangkan untuk kadar glukosa dalam darah manusia dapat dikatakan tinggi bila gula darah berada di atas 200 mg/dL. 
                    Menurut WHO, kadar gula (glukosa) darah yang rendah atau di bawah nilai normal adalah berkisar 6,0 mmol/L atau lebih rendah (di bawah 110 mg/dL). 
                    Selain karena kadar gula, resisten insulin dapat juga mengakibatkan penyakit diabetes mellitus. Kadar insulin Normal adalah sekitar 0,5 ng/mL hingga 2,0 ng/mL.
                    </p>
                    <p className="itemList">
                        Resisten insulin adalah keadaan tubuh manusia ketika sel-sel tubuh tidak dapat menggunakan gula darah dengan baik karena 
                        terganggunya respon sel tubuh terhadap insulin. Lemak viseral adalah tipe lemak yang paling berbahaya. 
                        Kumpulan lemak viseral di dalam tubuh bisa mengeluarkan senyawa peradangan dan hormon yang dapat mengakibatkan terganggunya metabolisme tubuh (dalam kasus ini adalah terganggunya respon sel tubuh terhadap insulin). 
                        Oleh karena itu, risiko untuk mengalami diabetes mellitus semakin besar. 
                    </p>
                    <p className="itemList">
                    Macam-macam atau tipe dari penyakit diabetes adalah sebagai berikut.

                    <ol>
                        <li>Diabetes tipe 1</li>

                        <p className="itemList"> Diabetes tipe 1 (satu) adalah penyakit autoimun kronis yang terjadi 
                        ketika tubuh kurang atau sama sekali tidak dapat menghasilkan hormon insulin. 
                        Kondisi ini disebabkan karena sistem imun Anda malah menyerang dan merusak sel beta penghasil insulin di dalam pankreas.
                        Insulin adalah hormon penting yang berfungsi menjaga kadar gula darah selalu dalam rentang normal. 
                        Jika produksi insulin terganggu maka tubuh akan kesulitan untuk mengendalikan gula darah. 
                        Akibatnya, gula darah orang dengan diabetes tipe 1 (satu) selalu tinggi.
                        Orang yang memiliki riwayat keluarga dengan kondisi ini berisiko tinggi terkena penyakit diabetes tipe 1 (satu). 
                        Tidak hanya itu, kondisi ini juga dapat disebabkan oleh faktor keturunan (seseorang memiliki riwayat penyakit tertentu yang memengaruhi pankreas, 
                        seperti <i>cystic fibrosis</i>, peradangan yang parah pada pankreas <i>pankreatitis</i>, dan pernah mengalami operasi pengangkatan pankreas. 
                        </p>


                        <li>Diabetes tipe 2</li>

                        <p className="itemList"> Pada diabetes tipe 2 (dua) atau biasa dikenal dengan diabetes mellitus, tubuh akan tetap menghasilkan hormon insulin tetapi dalam jumlah yang sedikit. 
                        Hal ini membuat tubuh tidak dapat menggunakan insulin untuk mengolah gula darah menjadi energi secara efektif. 
                        Dalam istilah medis, kondisi ini disebut dengan resistensi insulin.
                        </p>

                        <li>Diabetes Gestasional</li>

                        <p className="itemList"> Diabetes gestasional adalah gula darah tinggi yang terjadi selama kehamilan meski sebelumnya ibu hamil tidak memiliki riwayat diabetes. 
                        Tipe diabetes ini muncul karena plasenta ibu hamil terus menghasilkan sebuah hormon khusus. 
                        Hormon inilah yang menghambat insulin bekerja dengan efektif. Akibatnya, kadar gula darah ibu hamil menjadi tidak stabil selama kehamilan. 
                        Sebagian besar ibu hamil tidak menyadari bahwa dirinya mengalami kondisi ini karena diabetes gestasional sering tidak memunculkan gejala dan tanda yang spesifik.
                        Namun, jika ibu hamil merasa lemas, lesu, tidak bertenaga, sering lapar, kehausan, atau buang air kecil disarankan untuk segera periksakan diri Anda ke dokter. 
                        Jika dibiarkan tanpa pengobatan yang tepat, diabetes gestasional dapat menyebabkan komplikasi yang dapat meningkatkan risiko ibu mengalami <i>preeklampsia</i> 
                        dan menyebabkan bayi lahir cacat atau mengalami gangguan pernapasan. Ibu hamil yang mengidap penyakit ini akan lebih rentan terhadap kekambuhan diabetes di kemudian hari. 
                        Wanita yang hamil di usia 30 tahun, memiliki berat badan berlebih, pernah mengalami keguguran atau bayi lahir mati <i>stillbirth</i>, atau punya riwayat penyakit hipertensi dan PCOS, 
                        berisiko tinggi mengalami diabetes gestasional. 
                        </p>

                        <li>Diabetes labil</li>

                        <p className="itemList"> Diabetes labil biasa disebut dengan <i>"brittle diabetes"</i> atau diabetes rapuh merupakan tipe diabetes yang cukup parah. 
                        Kondisi ini terjadi ketika kadar gula darah dalam tubuh naik turun tidak menentu. 
                        Naik turunnya gula darah ini dapat terjadi dengan cepat dan tidak dapat diprediksi sehingga bagi beberapa orang, 
                        kondisi ini menyebabkan rasa tidak nyaman. Seseorang yang memiliki riwayat penyakit diabetes tipe 1 (satu) berisiko tinggi mengalami diabetes labil. 
                        Namun tidak berarti semua orang dengan penyakit diabetes tipe 1 (satu) sudah pasti akan mengalaminya, dan orang dengan diabetes tipe 2 (dua) tidak akan mengalaminya.
                        Beberapa dokter menggolongkan diabetes labil sebagai salah satu bentuk komplikasi diabetes. Sementara beberapa dokter lainnya menganggap diabetes labil sebagai turunan dari diabetes tipe 1 (satu). 
                        Wanita usia 20-30an yang tidak mempunyai hormon yang seimbang, memiliki kelebihan berat badan, punya riwayat gangguan <i>hipotiroidisme</i> (kadar hormon tiroid rendah), 
                        mengalami stres bahkan depresi, berisiko tinggi terkena diabetes rapuh. Kondisi ini sudah jarang terjadi berkat kemajuan dalam pengobatan diabetes. 
                        </p>
                    </ol>
                    </p>
                </div>
                
            </div>
        );
    }
}

export default Diabetes;
