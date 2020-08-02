

let pauseCounter = false;

//start timer
function counterincrement() {
  let counter = document.getElementById("counter");
  let counterValue=parseInt(counter.innerHTML,10);
  if(pauseCounter ===false){
    counterValue +=1;
    counter.innerHTML=`${counterValue}`;
}
}

let intervalID = window.setInterval(counterincrement,1000);

//pause the counter
function pauseCounter(){
  window.clearTimeout(intervalID);
  }

  let pause = document.getElementById('pause');
  pause.addEventListener('click',pauseCounter);

  function minCounter(){
     counter -=1;
  }
  const minus =document.getElementById('minus');
  minus.addEventListener('click',minCounter);

  function plusCounte(){
       counter +=1;
  }
  const plus =document.getElementById('minus');
  plus.addEventListener('click',plusCounter);

  const commnetForm= document.querySelector('#comment-form');
  commnetForm.addEventListener('submit',function(event){
    event.preventDefault();

    const commentForm=document.getElementById('comment-form');
    const commentLists =document.getElementById('list');
    const comment= document.createElement('p');
    comment.innerText=commentForm.value();
    commentLists.appendChild(comment);
    console.log(commentLists);
  });
