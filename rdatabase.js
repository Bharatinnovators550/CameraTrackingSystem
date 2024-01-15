const firebaseConfig = {
  apiKey: "AIzaSyD2VNtJEHFdZQRKPMDCKZPLb5ga-rdSBKg",
 authDomain: "project1-2ea55.firebaseapp.com",
 databaseURL: "https://project1-2ea55-default-rtdb.firebaseio.com",
 projectId: "project1-2ea55",
 storageBucket: "project1-2ea55.appspot.com",
 messagingSenderId: "130966411996",
 appId: "1:130966411996:web:4b65da345a4417720bf219",
 measurementId: "G-EMTP6Z7HN5"
};


firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("registrationForm");

document.getElementById("registrationForm").addEventListener("submit", submitForm);

function submitForm(e) {
 e.preventDefault();

 var username = getElementVal("username");
 var email = getElementVal("email");
 var password = getElementVal("password");
 var address = getElementVal("address");
 var latitude = getElementVal("latitude");
 var longitude = getElementVal("longitude");
 var cameraDetails = getElementVal("cameraDetails");

 saveMessages(username, email, password, address, latitude, longitude, cameraDetails);


 document.querySelector(".alert").style.display = "block";

 setTimeout(() => {
   document.querySelector(".alert").style.display = "none";
 }, 3000);

 document.getElementById("registrationForm").reset();
}

const saveMessages = (username, email, password, address, latitude, longitude, cameraDetails) => {
 var newContactForm = contactFormDB.push();
 newContactForm.set({
  username: username,
   email: email,
   password: password,
   address: address,
   latitude: latitude,
   longitude: longitude,
   cameraDetails: cameraDetails
 });
};

const getElementVal = (id) => {
 return document.getElementById(id).value;
};