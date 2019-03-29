function addReturn() {
    var dom = document.getElementById("mce-DOMAIN").value.toLowerCase();
    var nam = document.getElementById("mce-NAME").value;

    var domm = "https://hns.domains/";
    document.getElementById("mce-NEXT").value = domm + "confirmed.html#/" + dom + "/" + nam;
}

$(document).ready(function() {
  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyBFPSyyU4dxs4VyJrQust5dkTUeUV1uqz4",
      authDomain: "hashnameservice.firebaseapp.com",
      databaseURL: "https://hashnameservice.firebaseio.com",
      projectId: "hashnameservice",
      storageBucket: "hashnameservice.appspot.com",
      messagingSenderId: "850888270614"
  };
  firebase.initializeApp(config);


  var lots_of_stuff_already_done = false;


  Parsley.addValidator('domain', {
      validateString: function(value) {
          var db = firebase.firestore();
          //      var dom = document.getElementById("mce-DOMAIN").value;
          var docRef = db.collection("users").doc(value.toLowerCase());
          //return false;
          return docRef.get().then(function(doc) {
              if (doc.exists) {
                  console.log("Document data:", doc.data());
                  return false;
              } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");
                  return true;
              }
          });
      },
      messages: {
          en: 'This domain is taken'
      }
  });

  $('#mc-embedded-subscribe-form-1').parsley();


  $("#mc-embedded-subscribe-form-1").submit(function(e) {

      if (!lots_of_stuff_already_done) {
          e.preventDefault();
      }

      var form = $(this);

      if ($('#mc-embedded-subscribe-form-1').parsley('validate')) {

          var db = firebase.firestore();
          var dom = String(document.getElementById("mce-DOMAIN").value).toLowerCase();
          var mail = String(document.getElementById("mce-EMAIL").value).toLowerCase();
          var docRef = db.collection("users").doc(dom);
          
          if(( /[^a-zA-Z0-9]/.test( dom ) || /[^a-zA-Z0-9]/.test( dom ) )) {
               alert('Input is not alphanumeric');
               return false;
            }else{
    
          return docRef.get().then(function(doc) {
              if (doc.exists) {
                  console.log("Document data:", doc.data());
                  if (!lots_of_stuff_already_done) {
                      alert("Sorry. This domain is taken. Please try another one.")
                  }
              } else {
                  console.log("No such document!");

                  db.collection("users").doc(dom).set({
                      name: String(document.getElementById("mce-EMAIL").value).toLowerCase(),
                      Email: document.getElementById("mce-NAME").value
                  })

                  return db.collection("users").where("Name", "==", mail)
                    .get()
                    .then(function(querySnapshot) {
                        if(querySnapshot.size == 0){
                          if (!lots_of_stuff_already_done) {
                              lots_of_stuff_already_done = true;
                              $("#mc-embedded-subscribe-form-1").submit();
                          }
                            return true;
                        }else{
                            alert("This email has been registered already.")
                        }
                    })
                    .catch(function(error) {
                        console.log("Error getting documents: ", error);
                        return false;
                    });
              }
          }).catch(function(error) {
              console.log("Error getting document:", error);
              return false;
          });
          }
      }
  });
});
