// Dark Light Mode

var typed = new Typed(".input" , {
  strings:["Gajendra Prajapati.", "Web Developer.", "Video Editor.", "Typist."],
  typeSpeed: 70,
  backSpeed: 60,
  loop:true
});

var icon = document.getElementById('icon');

icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
}
