// For Loop

var detail = [
    {
    "firstName": "velmurugan",
    "lastName": "r",
    "age": "26",
    "street": "tharamani",
    "city": "Chennai",
    "state": "TN"
    }
]
for(let i = 0; i < detail.length; i++){
    console.log(detail[i]);
}

//For in
for (var i = 0; i < detail.length; i++) {
  var obj = detail[i];
  for (var key in obj) {
      console.log(`
          Key: ${key}
          Value: ${obj[key]}
          `);
      }
  };
  

    //for Each
    console.log("For each loop------------")
    var details = 
      {
      firstName : "vel",
      lastName : "murugan",
      age: "26",
      street : "tharamani",
      city: "Chennai",
      state: "TN"
      }

 const objectkeys = Object.keys(details);
 console.log(objectkeys);
 for(let i = 0; i < objectkeys.length; i++){
    console.log(objectkeys[i]);
 } 
const objectvalues = Object.values(details);
 console.log(objectvalues);
 for(let i = 0; i < objectvalues.length; i++){
    console.log(objectvalues[i]);
 } 
 objectkeys.forEach((value) => {
  console.log(`
        key : ${value}
        value : ${details[value]}
  `)
}) 

//For of
console.log("for of-------------")
for (key of objectkeys) {
    console.log(`
     Key: ${key}
     Value: ${details[key]}
     `);
  }

  // Resume Data in JSON format
  const resumedata = {
    "personalInformation": {
      "firstName": "velmurugan",
      "lastName": "r",
      "email": "technovelloaded@gmail.com",
      "phone": "8870169435",
      "address": "namakkal",
       "githubProfile": "https://github.com/velmuruganrajamanickam"
    },
    "education": [
      {
        "degree": "Bachelor of engineering",
        "department":"EEE",
        "Passed year": "2014-2018"
      },
      {
        "school": "bharathi HighSchool",
        "Passed year": "2012-2014"
      }
    ],
    "skills": [
      
      "JavaScript",
      
      "Responsive Web Design",
    ],
    "languages": ["English", "Tamil"],
  }

  console.log(resumedata);