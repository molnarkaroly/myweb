function onSubmit() {
            var descript = "";
            const titkositottSzoveg = "bWljaW1hY2vz";
            const visszafejtettSzoveg = window.atob(titkositottSzoveg);
            descript = visszafejtettSzoveg;

            var jelszo = descript;


            if (document.getElementById('password').value == jelszo) 
            {
            window.azoldal.style.display="block";
            window.jelszobe.style.display="none";
            window.jelszobefull.style.display="none";
            document.body.style.backgroundImage = "linear-gradient(70deg,#00031b,#002b63,#00031b)";
            document.body.style.overflowY = "scroll" ;
            document.documentElement.style.height = "max-content";



            }
          
           else{ 
                alert('Hibás jelszó');
                

                document.getElementById('password').value="";
                document.getElementById('password').placeholder="Helytelen jelszó";
                document.getElementById('password').style.color="red";
                document.getElementById('login').style.color="red";
                document.getElementById('login').title='jelszó: "' + jelszo + '"';



            }
};

  

     // https://codepen.io/pailwriter/pen/EebvOG