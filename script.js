document.addEventListener('DOMContentLoaded', function(){
  // make the last button the primary one as in the reference
  const links = document.querySelectorAll('.card-links .btn');
  if(links.length) links[links.length-1].classList.add('primary');

  // small accessibility: allow Enter to open focused buttons (they're anchors so already fine)
});
