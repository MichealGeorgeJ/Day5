// 2.Create your own data in JOSON format.

let resumeData=[
    [{
        "name":"Micheal George",
        "gender":"Male",
        "age":"21",
        "email":"michealmech2019@gmail.com",
        "contact":"6382141342",
        "address":{
            "door number":"26/125",
            "street":"Mangammalsalai",
            "village":"Devasahayammount",
            "town":"Aralvoimozhi",
            "district":"Kanyakumari",
            "state":"TamilNadu",
            "country":"India"
        },
        "education":{
            "10th":"CarmelHr.Sec.School",
            "12th":"CarmelHr.Sec.School",
            "B.E":"Vel Tech Multi Tech Engineering College"
        },
        "certification":"Mern Stack at Guvi",
        "github":"https://github.com/MichealGeorgeJ"
    }],
    [{
        "name":"Johnson",
        "gender":"Male",
        "age":"17",
        "email":"smileyj896@gmail.com",
        "contact":"9042770730",
        "address":{
            "door number":"26/125",
            "street":"Mangammalsalai",
            "village":"Devasahayammount",
            "town":"Aralvoimozhi",
            "district":"Kanyakumari",
            "state":"TamilNadu",
            "country":"India"
        },
        "education":{
            "10th":"CarmelHr.Sec.School",
            "12th":"CarmelHr.Sec.School",
            "B.E":"BET Engineering College"
        },
        "certification":"nil",
        "github":"Nil"
    }],
    [{
        "name":"Viyagulasharmi",
        "gender":"Female",
        "age":"19",
        "email":"sharmi2019@gmail.com",
        "contact":"9566395619",
        "address":{
            "door number":"26/125",
            "street":"Mangammalsalai",
            "village":"Devasahayammount",
            "town":"Aralvoimozhi",
            "district":"Kanyakumari",
            "state":"TamilNadu",
            "country":"India"
        },
        "education":{
            "10th":"CarmelHr.Sec.School",
            "12th":"CarmelHr.Sec.School",
            "B.E":"Vel Tech Multi Tech Engineering College"
        },
        "certification":"Nil",
        "github":"Nil"
    }]
];

// -----------------------------------
// 2.For the given JSON iterate over all for loops (for, for in, for of)
JSON.stringify(resumeData);
for(let i=0;i<resumeData.length;i++){
 console.log(resumeData[i]);
 }


for (let key in resumeData){
    console.log(resumeData[key]);
}
for (let val of resumeData){
    console.log(val)
}
console.log(resumeData[1]);