function onSubmit() {
            var jelszo = "alma";
            if (document.getElementById('password').value == jelszo) 
            {
            window.azoldal.style.display="block";
            window.jelszobe.style.display="none";
            window.jelszobefull.style.display="none";
            document.body.style.backgroundImage = "linear-gradient(70deg,#00031b,#002b63,#00031b)";


            }
          
           else{ 
                alert('Hibás jelszó');
                document.getElementById('password').value="";
                document.getElementById('password').placeholder="Helytelen jelszó";
                document.getElementById('password').style.color="red";
                document.getElementById('login').style.color="red";
                document.getElementById('login').title='jelszó: "' + jelszo + '"';



            }



     }
     

     // https://codepen.io/pailwriter/pen/EebvOG