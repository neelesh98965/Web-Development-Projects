const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

var currentactive = 1;

next.addEventListener("click",function(){
    currentactive++;

    if(currentactive > circles.length){
        currentactive = circles.length;
    }
    console.log(currentactive);
    update();
})

prev.addEventListener("click",function(){
    currentactive--;

    if(currentactive < 1){
        currentactive = 1;
    }
    console.log(currentactive);
    update();
})


function update(){
    circles.forEach(function(circle,ind){
        if(currentactive > ind){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
    })

    if(currentactive === 1){
        prev.disabled = true;
    }
    else if(currentactive === circles.length){
        next.disabled = true;
    }
    else{
        prev.disabled = false;
        next.disabled = false;
    }

    progress.style.width = ((currentactive-1)/(circles.length- 1)) * 100 + '%';
}