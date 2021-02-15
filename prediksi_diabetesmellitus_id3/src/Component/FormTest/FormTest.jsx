import React from 'react';
import ReactDOM from 'react-dom';
import './FormTest.css';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

class FormTest extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            lahir: '',
            hamil:'',
            glukosa:'',
            sistol:'',
            diastol:'',
            kulit:'',
            insulin:'',
            berat:'',
            tinggi:'',
            keluargaD: '',
            keluarga:'',
            tahun : '',

            resDiabetes :'Loading...',
            resImt:'Loading...',
            resObesitas:'Loading...',
            resTekananDarah:'Loading...',

            resultExist : false,
            statusInput : true
        }
        // console.log("Component FormTest Constructor");
    }

    handleLahirChange = event => {
        if(!this.state.resultExist)
        {
            this.setState({
                lahir : event.target.value
            })
           
            document.getElementById("myDate").style.borderColor = "";
        }
    }

    handleHamilChange = event => {
        var afterTrim = event.target.value.trim();
        if(!this.state.resultExist)
        {
            this.setState({
                hamil : afterTrim
            })
        }
        document.getElementById("quantity_pregnancy").style.borderColor = "";
        
        var status = this.isNumeric(afterTrim);
        // console.log("TEST ISNUMERIC : ", status);
        
        var length_input = (afterTrim+"").length;
        // console.log(length_input);
        // console.log("INI STATUS STATUS INPUT SEBELUM PANGGIL onlyNumberTest : ",this.state.statusInput);
        this.setState({
            statusInput :  status
        });
        // console.log("INI STATUS STATUS INPUT SETELAH PANGGIL onlyNumberTest : ",this.state.statusInput);

        var l = localStorage.getItem('statusInput');
        // console.log("Ini Value dari Local Storage : ", l);
            if(status && !this.state.resultExist){
                
                // console.log("STATE INPUT TRUE");
                // console.log((afterTrim+"").charAt(length_input-1) == '.');
                var posisi_koma_akhir = (afterTrim+"").charAt(length_input-1);
                var posisi_koma = afterTrim.indexOf('.');
                if(posisi_koma_akhir === '.' || posisi_koma>=0 || afterTrim < 0 || afterTrim == '-'+((afterTrim+"").substring(1,length_input)))
                {
                    this.setState({
                        hamil : JSON.parse(localStorage.getItem('duhamil')).trim()
                    })
                }
                else
                {
                    document.getElementById("quantity_pregnancy").style.borderColor = "";
                    this.setState({
                        hamil : afterTrim
                    }) 
                }
            }
            else if(!status){
                // console.log("STATE INPUT FALSE");
                if(length_input>0)
                {
                    this.setState({
                        hamil : JSON.parse(localStorage.getItem('duhamil')).trim()
                    })
                }
            }
            else if(this.state.resultExist)
            {
                this.callAlert();
            }
    }

    handleGlukosaChange = event => {
        var afterTrim = event.target.value.trim();
        
        var status2 = !(afterTrim.charAt(0) === '.');
        if(!this.state.resultExist)
        {
            this.setState({
                glukosa : afterTrim
            })
        }
        document.getElementById("quantity_glucose").style.borderColor = "";
        
        var val = document.getElementById("quantity_glucose").value;
        // console.log("Value dari Input : ", val);
        var status = this.isNumeric(val) && status2;
        // console.log("TEST ISNUMERIC : ", status);
        // console.log("INI STATUS STATUS INPUT SEBELUM PANGGIL onlyNumberTest : ",this.state.statusInput);
        this.setState({
            statusInput :  status
        });
        // console.log("INI STATUS STATUS INPUT SETELAH PANGGIL onlyNumberTest : ",this.state.statusInput);

        var l = localStorage.getItem('statusInput');
        // console.log("Ini Value dari Local Storage : ", l);
            if(status && !this.state.resultExist){
                // console.log("STATE INPUT TRUE");
                document.getElementById("quantity_glucose").style.borderColor = "";
                if(afterTrim < 0 ||afterTrim == '-'+((afterTrim+"").substring(1,length_input)))
                {
                    this.setState({
                        glukosa : JSON.parse(localStorage.getItem('duglukosa')).trim()
                    })
                }
                else{
                    this.setState({
                        glukosa : afterTrim
                    })
                }  
            }
            else if(!status){
                // console.log("STATE INPUT FALSE");
                var length_input = (val+"").length;
                // console.log(length_input);
                if(length_input>0)
                {
                    this.setState({
                        glukosa : JSON.parse(localStorage.getItem('duglukosa')).trim()
                    })
                }
            }
            else if(this.state.resultExist)
            {
                this.callAlert();
            }
    }

    handleSistolChange = event => {
        var afterTrim =  event.target.value.trim();

        var status2 = !(afterTrim.charAt(0) === '.');
        if(!this.state.resultExist)
        {
            this.setState({
                sistol : afterTrim
            })
        }
        document.getElementById("quantity_sistol").style.borderColor = "";
        
        var val = document.getElementById("quantity_sistol").value;
        // console.log("Value dari Input : ", val);
        var status = this.isNumeric(val)&& status2;
        // console.log("TEST ISNUMERIC : ", status);
        // console.log("INI STATUS STATUS INPUT SEBELUM PANGGIL onlyNumberTest : ",this.state.statusInput);
        this.setState({
            statusInput :  status
        });
        // console.log("INI STATUS STATUS INPUT SETELAH PANGGIL onlyNumberTest : ",this.state.statusInput);

        var l = localStorage.getItem('statusInput');
        // console.log("Ini Value dari Local Storage : ", l);
            if(status && !this.state.resultExist){
                // console.log("STATE INPUT TRUE");
                document.getElementById("quantity_sistol").style.borderColor = "";
                if(afterTrim < 0 ||afterTrim == '-'+((afterTrim+"").substring(1,length_input)))
                {
                    this.setState({
                        sistol : JSON.parse(localStorage.getItem('dusistol')).trim()
                    })
                }
                else{
                    this.setState({
                        sistol : afterTrim
                    })  
                }
            }
            else if(!status){
                // console.log("STATE INPUT FALSE");
                var length_input = (val+"").length;
                // console.log(length_input);
                if(length_input>0)
                {
                    this.setState({
                        sistol : JSON.parse(localStorage.getItem('dusistol')).trim()
                    })
                }
            }
            else if(this.state.resultExist)
            {
                this.callAlert();
            }
    }

    handleDiastolChange = event => {
        var afterTrim =  event.target.value.trim();
        
        var status2 = !(afterTrim.charAt(0) === '.');
        if(!this.state.resultExist)
        {
            this.setState({
                diastol : afterTrim
            })
        }
        document.getElementById("quantity_diastol").style.borderColor = "";
        
        var val = document.getElementById("quantity_diastol").value;
        // console.log("Value dari Input : ", val);
        var status = this.isNumeric(val) && status2;
        // console.log("TEST ISNUMERIC : ", status);
        // console.log("INI STATUS STATUS INPUT SEBELUM PANGGIL onlyNumberTest : ",this.state.statusInput);
        this.setState({
            statusInput :  status
        });
        // console.log("INI STATUS STATUS INPUT SETELAH PANGGIL onlyNumberTest : ",this.state.statusInput);

        var l = localStorage.getItem('statusInput');
        // console.log("Ini Value dari Local Storage : ", l);
            if(status && !this.state.resultExist){
                // console.log("STATE INPUT TRUE");
                document.getElementById("quantity_diastol").style.borderColor = "";
                if(afterTrim < 0 ||afterTrim == '-'+((afterTrim+"").substring(1,length_input)))
                {
                    this.setState({
                        diastol : JSON.parse(localStorage.getItem('dudiastol')).trim()
                    })
                }
                else{
                    this.setState({
                        diastol : afterTrim
                    }) 
                } 
            }
            else if(!status){
                // console.log("STATE INPUT FALSE");
                var length_input = (val+"").length;
                // console.log(length_input);
                if(length_input>0)
                {
                    this.setState({
                        diastol : JSON.parse(localStorage.getItem('dudiastol')).trim()
                    })
                }
            }
            else if(this.state.resultExist)
            {
                this.callAlert();
            }
    }

    handleKulitChange = event => {
        var afterTrim = event.target.value.trim();
        
        var status2 = !(afterTrim.charAt(0) === '.');
        if(!this.state.resultExist)
        {
            this.setState({
                kulit : afterTrim
            })
        }
        document.getElementById("quantity_skin_thickness").style.borderColor = "";

        var val = document.getElementById("quantity_skin_thickness").value;
        // console.log("Value dari Input : ", val);
        var status = this.isNumeric(val) && status2;
        // console.log("TEST ISNUMERIC : ", status);
        // console.log("INI STATUS STATUS INPUT SEBELUM PANGGIL onlyNumberTest : ",this.state.statusInput);
        this.setState({
            statusInput :  status
        });
        // console.log("INI STATUS STATUS INPUT SETELAH PANGGIL onlyNumberTest : ",this.state.statusInput);

        var l = localStorage.getItem('statusInput');
        // console.log("Ini Value dari Local Storage : ", l);
            if(status && !this.state.resultExist){
                // console.log("STATE INPUT TRUE");
                document.getElementById("quantity_skin_thickness").style.borderColor = "";
                if(afterTrim < 0||afterTrim == '-'+((afterTrim+"").substring(1,length_input)))
                {
                    this.setState({
                        kulit : JSON.parse(localStorage.getItem('dukulit')).trim()
                    })
                }
                else{
                    this.setState({
                        kulit : afterTrim
                    })  
                }
            }
            else if(!status){
                // console.log("STATE INPUT FALSE");
                var length_input = (val+"").length;
                // console.log(length_input);
                if(length_input>0)
                {
                    this.setState({
                        kulit : JSON.parse(localStorage.getItem('dukulit')).trim()
                    })
                }
            }
            else if(this.state.resultExist)
            {
                this.callAlert();
            }
    }

    handleInsulinChange = event => {
        var afterTrim = event.target.value.trim();
        
        var status2 = !(afterTrim.charAt(0) === '.');
        if(!this.state.resultExist)
        {
            this.setState({
                insulin : afterTrim
            })
        }
        document.getElementById("quantity_cpeptida").style.borderColor = "";

        var val = document.getElementById("quantity_cpeptida").value;
        // console.log("Value dari Input : ", val);
        var status = this.isNumeric(val) && status2;
        // console.log("TEST ISNUMERIC : ", status);
        // console.log("INI STATUS STATUS INPUT SEBELUM PANGGIL onlyNumberTest : ",this.state.statusInput);
        this.setState({
            statusInput :  status
        });
        // console.log("INI STATUS STATUS INPUT SETELAH PANGGIL onlyNumberTest : ",this.state.statusInput);

        var l = localStorage.getItem('statusInput');
        // console.log("Ini Value dari Local Storage : ", l);
            if(status && !this.state.resultExist){
                // console.log("STATE INPUT TRUE");
                document.getElementById("quantity_cpeptida").style.borderColor = "";
                if(afterTrim < 0 ||afterTrim == '-'+((afterTrim+"").substring(1,length_input)))
                {
                    this.setState({
                        insulin : JSON.parse(localStorage.getItem('duinsulin')).trim()
                    })
                }
                else{
                    this.setState({
                        insulin : afterTrim
                    }) 
                } 
            }
            else if(!status){
                // console.log("STATE INPUT FALSE");
                var length_input = (val+"").length;
                // console.log(length_input);
                if(length_input>0)
                {
                    this.setState({
                        insulin : JSON.parse(localStorage.getItem('duinsulin')).trim()
                    })
                }
            }
            else if(this.state.resultExist)
            {
                this.callAlert();
            }
    }

    handleBeratChange = event => {
        var afterTrim = event.target.value.trim();
        
        var status2 = !(afterTrim.charAt(0) === '.');
        if(!this.state.resultExist)
        {
            this.setState({
                berat : afterTrim
            })
        }
        document.getElementById("quantity_weight").style.borderColor = "";

        var val = document.getElementById("quantity_weight").value;
        // console.log("Value dari Input : ", val);
        var status = this.isNumeric(val) && status2;
        // console.log("TEST ISNUMERIC : ", status);
        // console.log("INI STATUS STATUS INPUT SEBELUM PANGGIL onlyNumberTest : ",this.state.statusInput);
        this.setState({
            statusInput :  status
        });
        // console.log("INI STATUS STATUS INPUT SETELAH PANGGIL onlyNumberTest : ",this.state.statusInput);

        var l = localStorage.getItem('statusInput');
        // console.log("Ini Value dari Local Storage : ", l);
            if(status && !this.state.resultExist){
                // console.log("STATE INPUT TRUE");
                document.getElementById("quantity_weight").style.borderColor = "";
                if(afterTrim < 0 ||afterTrim == '-'+((afterTrim+"").substring(1,length_input)))
                {
                    this.setState({
                        berat : JSON.parse(localStorage.getItem('duberat')).trim()
                    })
                }
                else{
                    this.setState({
                        berat : afterTrim
                    })
                }
                  
            }
            else if(!status){
                // console.log("STATE INPUT FALSE");
                var length_input = (val+"").length;
                // console.log(length_input);
                if(length_input>0)
                {
                    this.setState({
                        berat : JSON.parse(localStorage.getItem('duberat')).trim()
                    })
                }
            }
            else if(this.state.resultExist)
            {
                this.callAlert();
            }
    }

    handleTinggiChange = event => {
        var afterTrim = event.target.value.trim();
        
        var status2 = !(afterTrim.charAt(0) === '.');
        if(!this.state.resultExist)
        {
            this.setState({
                tinggi : afterTrim
            })
        }
        document.getElementById("quantity_height").style.borderColor = "";

        var val = document.getElementById("quantity_height").value;
        // console.log("Value dari Input : ", val);
        var status = this.isNumeric(val) && status2;
        // console.log("TEST ISNUMERIC : ", status);
        // console.log("INI STATUS STATUS INPUT SEBELUM PANGGIL onlyNumberTest : ",this.state.statusInput);
        this.setState({
            statusInput :  status
        });
        // console.log("INI STATUS STATUS INPUT SETELAH PANGGIL onlyNumberTest : ",this.state.statusInput);

        var l = localStorage.getItem('statusInput');
        // console.log("Ini Value dari Local Storage : ", l);
            if(status && !this.state.resultExist){
                // console.log("STATE INPUT TRUE");
                document.getElementById("quantity_height").style.borderColor = "";
                if(afterTrim < 0 ||afterTrim == '-'+((afterTrim+"").substring(1,length_input)))
                {
                    this.setState({
                        tinggi : JSON.parse(localStorage.getItem('dutinggi')).trim()
                    })
                }
                else{
                    this.setState({
                        tinggi : afterTrim
                    }) 
                } 
            }
            else if(!status){
                // console.log("STATE INPUT FALSE");
                var length_input = (val+"").length;
                // console.log(length_input);
                if(length_input>0)
                {
                    this.setState({
                        tinggi : JSON.parse(localStorage.getItem('dutinggi')).trim()
                    })
                }
            }
            else if(this.state.resultExist)
            {
                this.callAlert();
            }
    }

    handleKeluargaDChange = event => {
        var afterTrim = event.target.value.trim();
        if(!this.state.resultExist)
        {
            this.setState({
                keluargaD : afterTrim
            })
        }
        document.getElementById("quantity_family_diabetes").style.borderColor = "";

        var status = this.isNumeric(afterTrim);
        // console.log("TEST ISNUMERIC : ", status);

        var length_input = (afterTrim+"").length;
        // console.log(length_input);
        // console.log("INI STATUS STATUS INPUT SEBELUM PANGGIL onlyNumberTest : ",this.state.statusInput);
        this.setState({
            statusInput :  status
        });
        // console.log("INI STATUS STATUS INPUT SETELAH PANGGIL onlyNumberTest : ",this.state.statusInput);

        var l = localStorage.getItem('statusInput');
        // console.log("Ini Value dari Local Storage : ", l);
            if(status && !this.state.resultExist){
                // console.log("STATE INPUT TRUE");
                // console.log((afterTrim+"").charAt(length_input-1) == '.');
                var posisi_koma_akhir = (afterTrim+"").charAt(length_input-1);
                var posisi_koma = afterTrim.indexOf('.');
                if(posisi_koma_akhir === '.' || posisi_koma>=0 || afterTrim < 0 || afterTrim == '-'+((afterTrim+"").substring(1,length_input)))
                {
                    this.setState({
                        keluargaD : JSON.parse(localStorage.getItem('dukeluargaD')).trim()
                    })
                }
                else
                {
                    document.getElementById("quantity_family_diabetes").style.borderColor = "";
                    this.setState({
                        keluargaD : afterTrim
                    }) 
                }
            }
            else if(!status){
                // console.log("STATE INPUT FALSE");
                if(length_input>0)
                {
                    this.setState({
                        keluargaD : JSON.parse(localStorage.getItem('dukeluargaD')).trim()
                    })
                }
            }
            else if(this.state.resultExist)
            {
                this.callAlert();
            }
    }

    handleKeluargaChange = event => {
        var afterTrim = event.target.value.trim()
        if(!this.state.resultExist)
        {
            this.setState({
                keluarga : afterTrim
            })
        }
        document.getElementById("quantity_family").style.borderColor = "";
        
        var status = this.isNumeric(afterTrim);
        // console.log("TEST ISNUMERIC : ", status);

        var length_input = (afterTrim+"").length;
        // console.log(length_input);
        // console.log("INI STATUS STATUS INPUT SEBELUM PANGGIL onlyNumberTest : ",this.state.statusInput);
        this.setState({
            statusInput :  status
        });
        // console.log("INI STATUS STATUS INPUT SETELAH PANGGIL onlyNumberTest : ",this.state.statusInput);

        var l = localStorage.getItem('statusInput');
        // console.log("Ini Value dari Local Storage : ", l);
            if(status && !this.state.resultExist){
                // console.log("STATE INPUT TRUE");
                // console.log((afterTrim+"").charAt(length_input-1) == '.');
                var posisi_koma_akhir = (afterTrim+"").charAt(length_input-1);
                var posisi_koma = afterTrim.indexOf('.');
                if(posisi_koma_akhir === '.' || posisi_koma>=0 || afterTrim < 0 || afterTrim == '-'+((afterTrim+"").substring(1,length_input)))
                {
                    this.setState({
                        keluarga : JSON.parse(localStorage.getItem('dukeluarga')).trim()
                    })
                }
                else
                {
                    document.getElementById("quantity_family").style.borderColor = "";
                    this.setState({
                        keluarga : afterTrim
                    }) 
                }
            }
            else if(!status){
                // console.log("STATE INPUT FALSE");
                if(length_input>0)
                {
                    this.setState({
                        keluarga : JSON.parse(localStorage.getItem('dukeluarga')).trim()
                    })
                }
            }
            else if(this.state.resultExist)
            {
                this.callAlert();
            }
    }
    
    /*
        Transfer data ke api,
        Menerima hasil pengolahan api,
        Mengirim hasil ke ResultComponent (Diletakkan disini agar render dulu baru setState sehingga ga terjadi infinite loop)
    **/
    async callapi(){    //Knp async??
        // console.log("Component FormTest callapi");
        var data= 
            { 
                "lahir": this.state.tahun,
                "hamil": parseFloat(this.state.hamil),
                "glukosa": parseFloat(this.state.glukosa),
                "sistol": parseFloat(this.state.sistol),
                "diastol": parseFloat(this.state.diastol),
                "kulit": parseFloat(this.state.kulit),
                "insulin": parseFloat(this.state.insulin),
                "berat": parseFloat(this.state.berat),
                "tinggi": parseFloat(this.state.tinggi),
                "keluargaD":  parseFloat(this.state.keluargaD),
                "keluarga": parseFloat(this.state.keluarga),
                "userBD" : this.state.lahir
            };
        const url = "/api/prediksi_diabetes";
        console.log(data);
        
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        fetch(url, requestOptions)
        .then(res =>  res.json())
        .then(res => { 
              this.setState({resDiabetes : res.diabetes, 
                               resImt : res.imt,
                               resObesitas : res.obesitas,
                               resTekananDarah : res.tekananDarah})
              this.props.doTest.changeResultTestDiabetes(this.state.resDiabetes)
              this.props.doTest.changeResultTestImt(this.state.resImt)
              this.props.doTest.changeResultTestObesitas(this.state.resObesitas)
              this.props.doTest.changeResultTestTekananDarah(this.state.resTekananDarah)})
    }

    /*
        Method untuk get local storage data input user
    **/
    callBackDataUser = () =>{  
        const dateUser = localStorage.getItem('dulahir');
        const resDb = localStorage.getItem('resDiabetes');
        const resImt = localStorage.getItem('resImt');
        const resOb = localStorage.getItem('resObesitas');
        const resTD = localStorage.getItem('resTekananDarah');

        localStorage.getItem('dulahir') && this.setState(
            {
                lahir: JSON.parse(dateUser),
                hamil: JSON.parse(localStorage.getItem('duhamil')),
                glukosa: JSON.parse(localStorage.getItem('duglukosa')),
                sistol: JSON.parse(localStorage.getItem('dusistol')),
                diastol: JSON.parse(localStorage.getItem('dudiastol')),
                kulit: JSON.parse(localStorage.getItem('dukulit')),
                insulin: JSON.parse(localStorage.getItem('duinsulin')),
                berat: JSON.parse(localStorage.getItem('duberat')),
                tinggi: JSON.parse(localStorage.getItem('dutinggi')),
                keluargaD: JSON.parse(localStorage.getItem('dukeluargaD')),
                keluarga: JSON.parse(localStorage.getItem('dukeluarga')),
                resultExist: JSON.parse(localStorage.getItem('resultExist')),

                resDiabetes: JSON.parse(resDb),
                resImt: JSON.parse(resImt),
                resObesitas: JSON.parse(resOb),
                resTekananDarah: JSON.parse(resTD),
                statusInput: JSON.parse(localStorage.getItem('statusInput'))
            } 
        );
        this.props.doTest.changeResultTestDiabetes(resDb);
        this.props.doTest.changeResultTestImt(resImt);
        this.props.doTest.changeResultTestObesitas(resOb);
        this.props.doTest.changeResultTestTekananDarah(resTD);

        // console.log("Component FormTest callBackDataUser");
    }

    /*
        Method untuk set local storage untuk data input user
    **/
   setLocalStorageForDataUser = (nextProps, nextState) =>{  
        // console.log("Component FormTest setLocalStorageForDataUser");
        localStorage.setItem('dulahir', JSON.stringify(nextState.lahir));
        localStorage.setItem('duhamil', JSON.stringify(nextState.hamil));
        localStorage.setItem('duglukosa', JSON.stringify(nextState.glukosa));
        localStorage.setItem('dusistol', JSON.stringify(nextState.sistol));
        localStorage.setItem('dudiastol', JSON.stringify(nextState.diastol));
        localStorage.setItem('dukulit', JSON.stringify(nextState.kulit));
        localStorage.setItem('duinsulin', JSON.stringify(nextState.insulin));
        localStorage.setItem('duberat', JSON.stringify(nextState.berat));
        localStorage.setItem('dutinggi', JSON.stringify(nextState.tinggi));
        localStorage.setItem('dukeluargaD', JSON.stringify(nextState.keluargaD));
        localStorage.setItem('dukeluarga', JSON.stringify(nextState.keluarga));
        localStorage.setItem('resultExist', JSON.stringify(nextState.resultExist));
        localStorage.setItem('resDiabetes', JSON.stringify(nextState.resDiabetes));
        localStorage.setItem('resImt', JSON.stringify(nextState.resImt));
        localStorage.setItem('resObesitas', JSON.stringify(nextState.resObesitas));
        localStorage.setItem('resTekananDarah', JSON.stringify(nextState.resTekananDarah));
        localStorage.setItem('statusInput', JSON.stringify(nextState.statusInput));
   }

    alertReInputDataUser = () => {
        // console.log("Component FormTest alertReInputDataUser");
        var r = window.confirm("Ingin Mengulangi Tes?");
        if (r == true) {
            document.getElementById("hasil").style.display = "none";
            document.getElementById("prediksi").style.display = "inline-block";
            this.setState({resultExist : false}); 
        }
        else{
            document.getElementById("hasil").style.display = "block";
            document.getElementById("prediksi").style.display = "none";
        }
    }

    alertTanggalLahir = () => {
        alert("Umur Harus > 20 Tahun");
    }

    callAlert = () =>{
        console.log("Result Exist di Form Test : ", this.state.resultExist);
        // console.log("Component FormTest callAlert");
        if(this.state.resultExist)
        {
            this.alertReInputDataUser();
        }
    }

    componentWillMount = () =>{
        // console.log(this.state.statusInput);
        if(this.state.statusInput == true)
        {
            this.callBackDataUser()
        }
        // console.log("Component FormTest componentWillMount");
    }

    componentDidMount = () => {
        
        // console.log("Component FormTest componentDidMount");
        //Ini Untuk Bisa tetap munculin hasil kalau statusnya resultExist
        if(this.state.resultExist == true)
        {
            document.getElementById("hasil").style.display = "block";
            document.getElementById("prediksi").style.display = "none";
            // console.log("State resultExist");
        }

    }

    componentWillUpdate = (nextProps, nextState) => {
        this.setLocalStorageForDataUser(nextProps,nextState);
        // console.log("Component FormTest componentWillUpdate");
    }

    /**
     * Method untuk tetap mencatat value yang ada di form meski sudah melakukan submit
     */
    handleSubmit = event =>{
        event.preventDefault(); //ini harus ada, agar kalau ada error marknya ga ilang (seolah2 ga disubmit klo error)
        // console.log("Component FormTest handleSubmit");
    }

    isNumeric = (n) => {
        var status = !isNaN(parseFloat(n)) && isFinite(n);
        this.setState({
            statusInput :  status
        }); 
        return status;
    }

    go_predict_klik = ()=> {
        // console.log("Component FormTest onClick go_predict_klik");
        var x = document.getElementById("hasil");
        var y = document.getElementById("prediksi");
        var status = this.getAgeFromLahir();

        this.cek_Kolom(status);
        if (this.state.berat!='' && this.state.sistol!='' && this.state.diastol!='' && this.state.glukosa!='' && this.state.hamil!='' && this.state.insulin!=''
            && this.state.keluarga!='' && this.state.keluargaD!='' && this.state.kulit!='' && this.state.lahir!='' && this.state.tinggi!='' && status) 
        {
            this.callapi(); //Panggil Fungsi untuk mengisi div hasil prediksi dengan hasil prediksi yg benar
            x.style.display = "block";
            y.style.display = "none";
            this.setState({resultExist : true});
        }
        else if(!status)
        {
            this.alertTanggalLahir();
        }
        else
        {
          alert("Harap Isi Seluruh Kotak yang Ada!");
        }
    }

    go_predict_hover = ()=> {
        // console.log("Component FormTest onMouseHover go_predict_hover");
        var y = document.getElementById("prediksi");
        var status = this.getAgeFromLahir();

        this.cek_Kolom(status);
        if (this.state.berat=='' || this.state.sistol=='' || this.state.diastol=='' || this.state.glukosa=='' || this.state.hamil=='' || this.state.insulin==''
            || this.state.keluarga=='' || this.state.keluargaD=='' || this.state.kulit=='' || this.state.lahir=='' || this.state.tinggi=='') 
        {
            y.style.cursor = "not-allowed";
            alert("Harap Isi Seluruh Kotak yang Ada!");
        }
        if (parseFloat(this.state.berat) <= 0 || parseFloat(this.state.sistol) <= 0 || parseFloat(this.state.diastol) <=0 || parseFloat(this.state.glukosa) <=0  || parseFloat(this.state.insulin) <=0
            || parseFloat(this.state.keluarga) <= 0 || parseFloat(this.state.kulit) <=0 || parseFloat(this.state.tinggi) <=0) 
        {
            y.style.cursor = "not-allowed";
            alert("Harap mengisi dengan nilai > 0 !!");
        }
        if (parseFloat(this.state.keluarga) < parseFloat(this.state.keluargaD)) 
        {
            y.style.cursor = "not-allowed";
            alert("Jumlah total Anggota Keluarga HARUS LEBIH BESAR dari Jumlah Anggota Keluarga yang Terserang Diabetes Mellitus!!");
        }
        else{
            y.style.cursor = "pointer";
            y.style.backgroundColor = "rgb(156, 169, 182)";
        }
    }

    cek_Kolom = (status) =>{
        if(this.state.berat==''||parseFloat(this.state.berat) <= 0)
        {
            document.getElementById("quantity_weight").style.borderColor = "red";
        }
        if(this.state.sistol==''||parseFloat(this.state.sistol) <= 0)
        {
            document.getElementById("quantity_sistol").style.borderColor = "red";
        }
        if(this.state.diastol==''||parseFloat(this.state.diastol) <= 0)
        {
            document.getElementById("quantity_diastol").style.borderColor = "red";
        }
        if(this.state.glukosa==''||parseFloat(this.state.glukosa) <= 0)
        {
            document.getElementById("quantity_glucose").style.borderColor = "red";
        }
        if(this.state.hamil=='')
        {
            document.getElementById("quantity_pregnancy").style.borderColor = "red";
        }
        if(this.state.insulin==''||parseFloat(this.state.insulin) <= 0)
        {
            document.getElementById("quantity_cpeptida").style.borderColor = "red";
        }
        if(this.state.keluarga==''||parseFloat(this.state.keluarga) <= 0 || parseFloat(this.state.keluarga) < parseFloat(this.state.keluargaD))
        {
            document.getElementById("quantity_family").style.borderColor = "red";
        }
        if(parseFloat(this.state.keluarga) > parseFloat(this.state.keluargaD))
        {
            document.getElementById("quantity_family").style.borderColor = "";
        }
        if(this.state.keluargaD=='')
        {
            document.getElementById("quantity_family_diabetes").style.borderColor = "red";
        }
        if(this.state.kulit==''||parseFloat(this.state.kulit) <= 0)
        {
            document.getElementById("quantity_skin_thickness").style.borderColor = "red";
        }
        if(this.state.lahir=='' || !status)
        {
            document.getElementById("myDate").style.borderColor = "red";
        }
        if(this.state.tinggi==''||parseFloat(this.state.tinggi) <= 0)
        {
            document.getElementById("quantity_height").style.borderColor = "red";
        }
    }
    
    getAgeFromLahir = () =>{
        var mydate = document.getElementById('myDate').value;
        var date = new Date(mydate);
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        var curr_year = new Date().getFullYear();
        var age =  curr_year - year;
        // console.log("tahun lahir : ", year);
        this.setState({tahun : age});
        // console.log("Age : ", age);
        var status = (age>20)? true : false;
        return status;
    }

    render(){
        // console.log("Component FormTest Render");
        return(
            <form onSubmit={this.handleSubmit}>
                    <div className="content">
                        <div className="label">
                            <label>Tanggal Lahir</label><br></br><br></br>   
                            <label>Jumlah Kehamilan</label><br></br><br></br>
                            <label>Kadar Glukosa</label><br></br><br></br>
                            <label>Tekanan Darah</label><br></br><br></br>
                            <label>Ketebalan Kulit</label><br></br><br></br>
                            <label>Kadar C-Peptida</label><br></br><br></br>
                            <label>Berat Badan</label><br></br><br></br>
                            <label>Tinggi Badan</label><br></br><br></br>
                            <label>Riwayat Keluarga Terserang</label><br></br><br></br>
                            <label>Jumlah Anggota Keluarga</label><br></br><br></br>
                        </div>
                        <div className="input">
                            <Tippy content='Tanggal Lahir Anda'><input className="input_component" type="date" value={this.state.lahir} id="myDate" onChange={this.handleLahirChange} onClick={this.callAlert}></input></Tippy> <br></br>
                            <Tippy content='Jumlah Kehamilan yang telah dialami'><input className="input_component" type="" value={this.state.hamil} id="quantity_pregnancy" onChange={this.handleHamilChange} onClick={this.callAlert} name="pregnancy"></input></Tippy> <br></br>
                            <Tippy content='Kadar glukosa plasma setelah 2 jam dalam Tes Toleransi Glukosa Oral (TTGO). Kadar Glukosa Normal Adalah Sekitar < 140 mg/dL'><input className="input_component" type="" value={this.state.glukosa} id="quantity_glucose" onChange={this.handleGlukosaChange} onClick={this.callAlert} name="glucose"></input></Tippy><label className="input_component">mg/dL</label> <br></br>
                            <Tippy content='Tekanan Sistol / Batas Atas Tekanan Darah'><input className="input_component join" type="" value={this.state.sistol} id="quantity_sistol" onChange={this.handleSistolChange} onClick={this.callAlert} name="sistol"></input></Tippy>
                            <label className="icon">/</label>
                            <Tippy content='Tekanan Diastol / Batas Bawah Tekanan Darah'><input className="input_component join" type="" value={this.state.diastol} id="quantity_diastol" onChange={this.handleDiastolChange} onClick={this.callAlert} name="diastol"></input></Tippy><label className="input_component tipi">mmHg</label><br></br>
                            <Tippy content='Ketebalan Kulit Diukur dari Tebal Cubitan Kulit di Lengan Bagian Belakang Atas Kanan / Kiri dengan Menggunakan Alat Ukur Skinfold Capiler/ Alat Ukur Satuan Panjang (penggaris /meteran)'><input className="input_component" type="" value={this.state.kulit} id="quantity_skin_thickness" onChange={this.handleKulitChange} onClick={this.callAlert} name="skin_thickness"></input></Tippy><label className="input_component">mm</label> <br></br>
                            <Tippy content='Kadar Insulin dari Hasil Tes Darah. Kadar insulin Normal Adalah Sekitar 0,5 ng/mL hingga 2,0 ng/mL'><input className="input_component" type="" value={this.state.insulin} id="quantity_cpeptida" onChange={this.handleInsulinChange} onClick={this.callAlert} name="cpeptida"></input></Tippy><label className="input_component">ng/mL</label><br></br>
                            <Tippy content='Berat Badan Anda'><input className="input_component" type="" value={this.state.berat} id="quantity_weight" onChange={this.handleBeratChange} onClick={this.callAlert} name="weight"></input></Tippy><label className="input_component">Kg</label><br></br>
                            <Tippy content='Tinggi Badan Anda'><input className="input_component" type="" value={this.state.tinggi} id="quantity_height" onChange={this.handleTinggiChange} onClick={this.callAlert} name="height" ></input></Tippy><label className="input_component">Cm</label><br></br>
                            <Tippy content='Jumlah Anggota Keluarga yang Menderita Diabetes Mellitus'><input className="input_component" type="" value={this.state.keluargaD} id="quantity_family_diabetes" onChange={this.handleKeluargaDChange} onClick={this.callAlert} name="family_diabetes"></input></Tippy><label className="input_component">Orang</label><br></br>
                            <Tippy content='Jumlah Anggota Keluarga'><input className="input_component" type="" value={this.state.keluarga} id="quantity_family" name="family" onChange={this.handleKeluargaChange} onClick={this.callAlert} ></input></Tippy><label className="input_component">Orang</label>
                            <button className="button_proses" id="prediksi" onClick={this.go_predict_klik} onMouseOver={this.go_predict_hover}>Proses</button>
                        </div>
                    </div>
            </form>
        );
    } 

}

export default FormTest;