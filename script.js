const package = document.querySelectorAll('.package');





console.log(package)



// for(let i =0; i < package.length; i++){
 
//   package[i].addEventListener('click', function(e){
    
//     this.classList.contains('active')?this.classList.remove('active'): this.classList.add('active') 
//   } ) 
//   package[i].classList.remove('active')
// }
// Get the container element
var btnContainer = document.getElementById("packages");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("package");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}



// const packages = document.getElementById('packages');

// const prackageEl = packages.getElementsByClassName('package');

// for (let index = 0; index < prackageEl.length; index++) {
//     const element = prackageEl[index];
    
//     element.addEventListener('click', function(){
//         alert('clicked')
//     })
   
// }

