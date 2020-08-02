
let pauseC = false;

//start timer
function counterincrement() {
  let counter = document.getElementById("counter");
  let counterValue=parseInt(counter.innerHTML,10);
  if(pauseC == false){
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

 /////////////////////////////

  function minCounter(){
    let counter = document.getElementById("counter");
    let counterValue=parseInt(counter.innerHTML,10);
    if(pauseC == false){
      counterValue -=1;
      counter.innerHTML=`${counterValue}`;
      }
  }
  const minus =document.getElementById('minus');
  minus.addEventListener('click',minCounter);
  ///////////////////////

  function plusCounter(){
    let counter = document.getElementById("counter");
    let counterValue=parseInt(counter.innerHTML,10);
    if(pauseC == false){
      counterValue +=1;
      counter.innerHTML=`${counterValue}`;
      }
  }
  const plus =document.getElementById('plus');
  plus.addEventListener('click',plusCounter);

  /////////////////////////
  let like = document.getElementById("heart") ;
like.addEventListener("click" ,counterincrement);
//////////////////////////////

  const commnetForm= document.querySelector('#comment-form');
  commnetForm.addEventListener('submit',function(event){
    event.preventDefault();

    const commentForm=document.getElementById('comment-form');
    const commentLists =document.getElementById('list');
    const comment= document.createElement('p');
    comment.innerText=commentForm.value;
    commentLists.appendChild(comment);
    // console.log(commentLists);
  });
