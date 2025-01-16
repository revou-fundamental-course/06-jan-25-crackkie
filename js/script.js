let hamMenu = document.getElementById('hamMenu');
let navMenu = document.getElementById('navMenu');
let submitButton = document.getElementById('submit')
function menu(){
    navMenu.classList.toggle('active');
    hamMenu.classList.toggle('active');

}
var slideIndex = 1;
function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName('slide');
    if (n > imgList.length){slideIndex = 1};
    if (n < 1){slideIndex = imgList.length};
    for(i = 0; i < imgList.length; i ++){
        imgList[i].style.display = 'none';
    }
    imgList[slideIndex -1].style.display = 'block';
}
function plusDivs(n){
    showDivs(showDivs(slideIndex += n))
}
showDivs(slideIndex)
setInterval(() =>{
    plusDivs(1);
},3000)

window.onload = greeting()

function greeting(){
    document.getElementById('greting-input').style.display = 'flex';

    document.getElementById('button-greting').addEventListener('keydown', () =>{
        if (Event.key === "Enter") {
            console.log("Tombol Enter ditekan!");
            gretingForm = document.getElementById('gretingName').value;
            gretingName = document.getElementById('greeting-user');
            gretingName.innerHTML = gretingForm;
            document.getElementById('greting-input').style.display = 'none'
        }
    })


    document.getElementById('button-greting').addEventListener('click', () =>{
        gretingForm = document.getElementById('gretingName').value;
        gretingName = document.getElementById('greeting-user');
        gretingName.innerHTML = gretingForm;
        document.getElementById('greting-input').style.display = 'none'
    })


}

function validation(){
    let name = document.getElementById('fname').value.trim();
    let dob = document.getElementById('fbirth').value;
    let genderMale = document.getElementById('genderMale');
    let genderFemale = document.getElementById('genderFemale');
    let message = document.getElementById('message').value;
    let notify = document.getElementById('alert');
    let doneNotify = document.getElementById('doneNotify');


    if (name === ''){
        notify.innerHTML = 'Name cannot be empty!';
        return
    }

    if (dob === '') {
        notify.innerHTML = 'Date Of Birth cannot be empty!';
        return
    } 

    if (genderMale.checked === false && genderFemale.checked === false) {
        notify.innerHTML = 'Gender cannot be empty!';
        return
    }
    
    if (message === '') {
        notify.innerHTML = 'At least write some word!';
        return
    }else{
        notify.innerHTML = ''
        doneNotify.innerHTML = 'Sent successfully'
        const now = new Date();
        document.getElementById('time').innerHTML =  now;

        document.getElementById('name-message').innerHTML = name;
        document.getElementById('birth-message').innerHTML = dob;
        if(genderMale.checked === true){
            document.getElementById('gender-message').innerHTML ='Male';
        }else{
            document.getElementById('gender-message').innerHTML ='Female';
        }
        document.getElementById('message-container').innerHTML = message
    }

}
submitButton.addEventListener("click", validation);