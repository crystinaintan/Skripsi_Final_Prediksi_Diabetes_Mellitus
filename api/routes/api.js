var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');
var router = express.Router();
router.use(bodyParser.json());
router.use(cors());

var DecisionTree = require('decision-tree'); 

const csvFilePath='./dataset/diabetes.csv'; 
//const csvFilePath='./dataset/clear_diabetes.csv'; 
const csv=require('csvtojson'); //import modul csvtojson untuk mengubah data diabetes.csv menjadi kumpulan / array of json (Harus npm i --save csvtojson)
const fs = require('fs');       // import modul fs untuk membaca dan menulis data kedalam file (menyimpan model tree yang telah digenerate ke dalam file message.json)
    

function diabetesPedigreeFunction(n_keluargaDm, n_keluarga){
    const hasil = parseFloat((n_keluargaDm/n_keluarga).toFixed(3));
    if(hasil < 0.10)
    {
        return 0.10;
    }
    else{
        return hasil;
    }
    //return (n_keluargaDm/n_keluarga);
}

function calculate_bmi(berat, tinggi){
    console.log(berat/Math.pow((tinggi/100), 2));
    return berat/Math.pow((tinggi/100), 2);
}
    
function status_BMI(bmi){
    var status = "";
    if(bmi < 18.5)
    {
        status = "Berat badan kurang";
    }
    else if(bmi >= 18.5 && bmi<= 22.9 )
    {
        status = "Berat badan normal";
    }
    else if(bmi >= 23 && bmi<= 29.9 )
    {
        status = "Berat badan berlebih";
    }
    else if(bmi >= 30)
    {
        status = "Obesitas";
    }
    console.log(status);
    return status;
}
    
function status_hipertensi(sistol, diastol){
    var status = "";
    if(sistol < 90 && diastol <60)
    {
        status = "Hipotensi";
    }
    else if(sistol >= 90 && sistol < 120 && diastol >= 60 && diastol < 80)
    {
        status = "Normotensi";
    }
    else if(sistol >= 120 && sistol<= 129 && diastol >=80)
    {
        status = "Prahipertensi";
    }
    else if(sistol >= 130 && sistol<= 139 && diastol >=80 && diastol <=89)
    {
        status = "Hipertensi Derajat 1";
    }
    else if(sistol >= 140 && sistol <= 180 && diastol >=90 && diastol <=120)
    {
        status = "Hipertensi Derajat 2";
    }
    else if(sistol > 180 && diastol >120)
    {
        status = "Krisis Hipertensi";
    }
    else{
        status = "Tekanan darah anda di luar kasus normal"
    }
    console.log(status);
    return status;
} 

function status_diabetes(status){
    if(status == 1)
    {
        return "Anda terduga POSITIF Diabetes Mellitus.";
    }
    else if(status == 0)
    {
        return "Anda terduga NEGATIF Diabetes Mellitus.";
    }
} 

function convertC_peptide(value){
    return parseFloat(((value*0.333*1000)/6.9450).toFixed(3));
    //return ((value*7.1429)/6).toFixed(2);
}

function calculateSkinThickness(value){
    return parseFloat(value/2.0);
    //return ((value*7.1429)/6).toFixed(2);
}


router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

router.post("/prediksi_diabetes", function(req, res, next){
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{              //jsonObj adalah variable yang memuat data file diabetes.csv yang sudah dalam bentuk json
        var class_name_a = "Outcome"; //atribut yang akan ditebak
        var features_a = ["Pregnancies", "Glucose","BloodPressure","SkinThickness","Insulin","BMI","DiabetesPedigreeFunction","Age"]; //atribut feature
        var dt_a = new DecisionTree(jsonObj, class_name_a, features_a);  //generate model tree
        const body = req.body;
        console.log("Data Kiriman dari frontend : ", body.hamil);
        const imt = parseFloat(calculate_bmi(body.berat, body.tinggi).toFixed(2));
        const diabetesPedigree = diabetesPedigreeFunction(body.keluargaD, body.keluarga);
        const c_peptide = convertC_peptide(body.insulin);
        const skin_thickness = calculateSkinThickness(body.kulit);
        
        console.log("Ini C-Peptide Hasil Convert: ",c_peptide);
        console.log("Ini Skin Thickness: ",skin_thickness);
        console.log("Ini persetage diabetes Hasil Convert: ",diabetesPedigree);
        console.log("Ini umur : ",body.lahir);

        var predicted_class_a = dt_a.predict({                          //memprediksi berdasarkan data baru, predicted_class_a (hasil prediksi data baru)
            Pregnancies: body.hamil,
            Glucose: body.glukosa,
            BloodPressure: body.diastol,//diastolic
            SkinThickness: skin_thickness,
            Insulin: c_peptide,
            BMI: imt,
            DiabetesPedigreeFunction: diabetesPedigree,                          
            Age: body.lahir
        });

        var dataUser= 
        { 
            "lahir": body.userBD,
            "hamil": body.hamil,
            "glukosa": body.glukosa,
            "sistol": body.sistol,
            "diastol": body.diastol,
            "kulit": body.kulit,
            "insulin": body.insulin,
            "berat": body.berat,
            "tinggi": body.tinggi,
            "keluargaD":  body.keluargaD,
            "keluarga": body.keluarga
        };

        const hasil =  {
            "diabetes" : status_diabetes(predicted_class_a),
            "imt" : imt,
            "obesitas" : status_BMI(imt),
            "tekananDarah" : status_hipertensi(body.sistol, body.diastol)
        };
        console.log("Ini DIABETES Hasil Convert: ",predicted_class_a);
        res.send(JSON.stringify(hasil)); 
        
    });
});

module.exports = router; 