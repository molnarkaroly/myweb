function onSubmit() {
            var descript = "";
            const titkositottSzoveg = "bWljaW1hY2vz";
            const visszafejtettSzoveg = window.atob(titkositottSzoveg);
            descript = visszafejtettSzoveg;

            var jelszo = descript;


            if (document.getElementById('password').value == jelszo) 
            {
            window.menus.style.display="block";
            window.jelszobe.style.display="none";
            window.jelszobefull.style.display="none";

            document.body.style.backgroundImage = "linear-gradient(70deg,#00031b,#002b63,#00031b)";
            document.body.style.overflowY = "scroll" ;
            document.documentElement.style.height = "max-content";

            var script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
            script.integrity = 'sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL';
            script.crossOrigin = 'anonymous';
            document.head.appendChild(script);

            var link = document.createElement('link');
            link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
            link.rel = 'stylesheet';
            link.integrity = 'sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN';
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);


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

function filmek() {
     window.filmekp.style.display="block";



};

 
  

     // https://codepen.io/pailwriter/pen/EebvOG