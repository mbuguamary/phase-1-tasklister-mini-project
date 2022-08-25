document.addEventListener("DOMContentLoaded", () => {

  // your code here
  const form=document.getElementById("create-task-form");
  const tasksContainer=document.getElementById('tasks');
  form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const description=document.getElementById('new-task-description').value
     const itemElement =document.createElement('li');
     itemElement.innerHTML=description;
     tasksContainer.appendChild(itemElement);
  
  })
});
