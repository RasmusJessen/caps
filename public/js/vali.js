document.querySelector('#submit').addEventListener('click', function (event){
    event.preventDefault();
    validering();
    
    // siger fejl hvis der ikke står noget  
    function fejlbesked(err) {
        if (document.querySelector(err).nextElementSibling === null) {
            let fejl = document.createElement('span');
            let text = document.createTextNode('fejl');
            fejl.setAttribute('class', 'fejl');
            fejl.appendChild(text);
            document.querySelector(err).parentElement.appendChild(fejl);
        }
     }
    
    
    
    function validering () {
    
        // sletter alle fejl
        let allefejl = document.querySelectorAll('.fejl');
        //slette hver fejl hvor der står noget
        allefejl.forEach(function(en_fejl) { //fortæller hvad den skal fjerne
             en_fejl.remove();
        });
    
         
        // hvis der ikke står noget siger den fejl, og hvis der står noget går den videre
        if(document.querySelector('#name').value.length === 0) {
            fejlbesked('#name');
        } 
        
        if (document.querySelector('#mail').value.length === 0){
            fejlbesked('#mail');
        } 
        
        if (document.querySelector('#msg').value.length === 0) {
            fejlbesked('#msg');
        } else {
            alert("Vi har modtaget dine oplysinger");
            window.location.reload("pages/contact");
        }
    
        
        
        
    
    }
    
    });