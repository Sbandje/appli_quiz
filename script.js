document.getElementById('name').addEventListener('submit' ,
    function(event) {
    event.preventDefault();
    const nameofInput = document.getElementById('nom');
    const valueNameofInput = nameofInput.value;

    const firstNameofInput = document.getElementById('first-name');
    const valuefirstNameofInput = firstNameofInput.value;
    

    const mailofInput = document.getElementById('mail');
    const valueMailofInput = mailofInput.value;
        
    const ageofInput = document.getElementById('age');
    const valueAgeofInput = ageofInput.value;

    let result 
    if(valueAgeofInput <= 25 & valueAgeofInput >= 15){

        document.getElementById('resultat').innerHTML = result;
        alert("Votre inscription a été enregistré avec succès" ,result);
         window.location.href = "./index2.html";

    }else{
        alert("vous n'êtes pas éligible, vous devez avoir 15 et 25 ans")
    };

    console.log(valueNameofInput);
    console.log(valuefirstNameofInput)
    console.log(valueMailofInput);
    
}
);

