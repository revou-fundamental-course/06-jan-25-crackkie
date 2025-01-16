let slides = document.getElementsByClassName('image');
indexSlide = 0;

function changeIndex(n){
    indexSlide += n
   
    if (indexSlide >= slides.length) {
        indexSlide = 0; 
    } else if (indexSlide < 0) {
        indexSlide = slides.length - 1;  
    }
   
    changeSlide()
}

function changeSlide(){

    for (let i =0; i < slides.length; i++){
        slides[i].classList.remove('active');
    }

    slides[indexSlide].classList.add('active');

}
        

// changeSlide()
setInterval(changeIndex,3000,1);

window.onload = greetingPopup();

function greetingPopup(){
    let button = document.getElementById('submit-greeting');
    let popup = document.getElementById('popup');
    popup.style.display = 'flex'
    document.body.style.overflow = 'hidden'

    button.addEventListener('click', ()=>{
        let nameUser = document.getElementById('greeting-form').value;

        if(nameUser.trim() === ""){
            document.getElementById('eror').innerHTML = 'Please Enter Your Name ';
            document.getElementById('greeting-form').style.border = '2px solid red'
            return false;
    
        }else{
            document.body.style.overflow = ''
            document.getElementById('eror').innerHTML = '';
            popup.style.display = 'none'
            document.getElementById('user-name').innerHTML = nameUser;
        }

    })
};

document.getElementById('submit').addEventListener('click', ()=>{
    console.log('click')
    validation()
})

function validation(){
    let notify = document.getElementById('alert')
    let doneNotify = document.getElementById('doneNotify');
    let name = document.getElementById('fname').value;
    let dob = document.getElementById('fbirth').value;
    let genderMale = document.getElementById('genderMale');
    let genderFemale = document.getElementById('genderFemale');
    let message = document.getElementById('message').value;

    if (name ===''){
        notify.innerHTML = 'Name cannot be empty!';
        return;
    }
    if(dob ===''){
        notify.innerHTML = 'Date Of Birth cannot be empty!';
        return;
    }
   if(genderMale.checked === false && genderFemale.checked === false){
        notify.innerHTML = 'Gender cannot be empty!';
        return ;
   }
   if(message ===''){
        notify.innerHTML = 'At leas write one word!';
        return;
   }else{
        notify.innerHTML ='';
        doneNotify.innerHTML = 'Sent successfully'
        document.getElementById('time').innerHTML = Date();
        document.getElementById('name-message').innerHTML = name;
        document.getElementById('birth-message').innerHTML = dob;

        if(genderMale.checked === true){
            document.getElementById('gender-message').innerHTML = 'Male';
        }else{
            document.getElementById('gender-message').innerHTML = 'Female';
        }

        document.getElementById('message-container').innerHTML = message;
   }
}