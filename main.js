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
const phoneInput= document.querySelector('#phone');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value===''|| emailInput.value===''|| phoneInput.value===''){
        msg.classList.add('error');
        msg.innerHTML= 'Please Enter all fields';
        setTimeout(() => {
            msg.remove()
        }, 3000);
    }
    else
    {
 const li= document.createElement('li');
 li.appendChild(document.createTextNode(` Name: ${nameInput.value}, Email: ${emailInput.value}, Phone No:${phoneInput.value}`));
 userList.appendChild(li);

 const deleBtn= document.createElement('button');
 deleBtn.className='delbtn';
 deleBtn.setAttribute("type", "submit");
 deleBtn.setAttribute("id", `${emailInput.value}`);
 deleBtn.innerText='Delete';
 userList.appendChild(deleBtn);
 console.log(userList);
 //adding into local storage
//  localStorage.setItem(`${nameInput.value}`,`${emailInput.value}`);

//adding to local storage as object 
const userdata= {
    userName:`${nameInput.value}`,
    userEmail:`${emailInput.value}`,
    userPhone:`${phoneInput.value}`
}

localStorage.setItem(`${emailInput.value}`,`${JSON.stringify(userdata)}`);
nameInput.value='';
emailInput.value='';
phoneInput.value='';
    }

}


//this is how we can add object to local storage
// const myObj={
//     fname:'mufil Rahman A',
//     lName:'rahman A',
//     age:27
// }

// localStorage.setItem('object',`${JSON.stringify(myObj)}`);
// console.log(localStorage);

//create delete function 

userList.addEventListener('click',onDelete);

function onDelete(e){
    e.preventDefault();
    if(e.target.classList.contains('delbtn')){
        const btnId=e.target.id;
        localStorage.removeItem(`${btnId}`);
        e.target.previousElementSibling.remove();
        e.target.remove();
    }
}