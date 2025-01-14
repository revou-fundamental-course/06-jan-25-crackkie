let hamMenu = document.getElementById('hamMenu');
let navMenu = document.getElementById('navMenu');
let submitButton = document.getElementById('submit')
function menu(){
    navMenu.classList.toggle('active');
    hamMenu.classList.toggle('active');

}

function validation(){
    let name = document.getElementById('fname').value.trim();
    let dob = document.getElementById('fbirth').value;
    let genderMale = document.getElementById('genderMale');
    let genderFemale = document.getElementById('genderFemale');
    let message = document.getElementById('message').value;
    let notify = document.getElementById('alert');


    if (name === ''){
        notify.innerHTML = 'Name cannot be empty!';
        return
    }

    if (dob === '') {
        notify.innerHTML = 'Date Of Birth cannot be empty!';
        return
    } 

    if (genderMale.checked == false ==='' && genderFemale.checked == false) {
        notify.innerHTML = 'Gender cannot be empty!';
        return
    }
    
    if (message === '') {
        notify.innerHTML = 'At least write some messages';
        return
    }

}
submitButton.addEventListener("click", validation);