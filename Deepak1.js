const addButton=document.querySelector('#add');
const updateLSData=()=>{
    const taxtAreaData = document.querySelectorall('text');
    const notes=[];// empty array
    console.log(textAreaData);
    textAreaData.forEach((note)=>{
      return notes.push(note.value);
    })
    console.log(notes);
    localStorage.setItem('notes',JSON.stringify('notes'));
}

const addNewNote=(text='')=>{

  const note = document.createElement('div');
  note.classList.add('note');
  const htmlData=`
 
      <div class="operation">
          <button class="edit"> <i class="fas fa-edit"></i></button>
          <button class="delete"> <i class="fas fa-trash-alt"></i></button>
      </div>
      <div class="main ${text ?"":"hidden"}"></div>
         <textarea class ="${text ?"hidden":""}"></textarea>`;
  
  note.insertAdjacentHTML('afterbegin',htmlData);




const editButton=note.querySelector('.edit');
const delButton=note.querySelector('.delete');
const mainDiv=note.querySelector('.main');
const textArea=note.querySelector('textarea');


delButton.addEventListener('click',()=>{
note.remove(); // call
updateLSData();
})


textArea.value=text;
mainDiv.innerHTML=text;



editButton.addEventListener('click',()=>{
mainDiv.classList.toggle('hidden') ;
textArea.classList.toggle('hidden'); 
})

textArea.addEventListener('change',(event)=>{
const value=event.target.value;
mainDiv.innerHTML=value;

updateLSData();
})
 document.body.appendChild(note);
}
const notes=JSON.parse(localStorage.getItem('notes'))
if(notes){notes.forEach((note)=> addNewNote())};

addButton.addEventListener('click',()=>addNewNote());/// fat arrow function jab bhi use krte ho to usko pahale call krni hoti then define karni hoti hai