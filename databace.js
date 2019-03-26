
// (function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD4XcTtMKKHVh92XdRQPu05aO3xT5HyCCo",
    authDomain: "webquickstart-9353d.firebaseapp.com",
    databaseURL: "https://webquickstart-9353d.firebaseio.com",
    projectId: "webquickstart-9353d",
    storageBucket: "webquickstart-9353d.appspot.com",
    messagingSenderId: "743315686245"
  };
  firebase.initializeApp(config);
  var firestore=firebase.firestore();
  const docRef = firestore.doc("samples/sandwichData");
 
  const outputHeader = document.querySelector("#hello");
  const inputTextfield = document.querySelector("#latestpost");
  const savebutton = document.querySelector("#Savebutton");

  savebutton.addEventListener('click', function(e) {
      const textTosave = inputTextfield.value;
      console.log("i an going to save"+ textTosave +"to firestore");

      docRef.set({
        mySucess : textTosave
      }).then(function(e){
          console.log("status saved");
      
  }).catch(function (error) {
    console.log("status saved",error);
});

  });



// })();