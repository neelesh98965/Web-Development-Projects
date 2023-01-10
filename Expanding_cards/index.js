const panels = document.querySelectorAll(".panel");

panels.forEach(function(panel){
    panel.addEventListener("click",function(){
        removeactiveclasses();
        panel.classList.add("active");
    })
})

function removeactiveclasses(){
    panels.forEach(function(panel){
        panel.classList.remove("active");
    })
}