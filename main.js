// const ul=document.querySelector('.items');

// ul.firstElementChild.textContent='Hello';
// ul.firstElementChild.style.color='green';
// ul.children[1].style.color='yellow';
 const btn = document.querySelector('.btn');

// btn.addEventListener('click', e => {  
//     console.log('event click');
// });

// btn.addEventListener('mouseover', e => {

//     console.log('event mouseover');
// });

// btn.addEventListener('mouseout', e => {

//     console.log('event mouseout');
// });


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value===''|| emailInput===''){
        msg.classList.add('error');
        msg.innerHTML= 'Please Enter all fields';
        setTimeout(() => {
            msg.remove()
        }, 3000);
    }
    else
    {
 const li= document.createElement('li');
 li.appendChild(document.createTextNode(` Name: ${nameInput.value}, Email: ${emailInput.value}`));
 userList.appendChild(li);

 //adding into local storage
 localStorage.setItem(`${nameInput.value}`,`${emailInput.value}`);
nameInput.value='';
emailInput.value='';
    }

}
