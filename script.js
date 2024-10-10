window.onload = (event) => {
    console.log("page is fully loaded");
  
      function hide(){
    const object_d = document.querySelector('.hov');
       object_d.style.visibility = 'hidden' ; 
      }
      function show(){
         const object_d = document.querySelector('.hov');
         object_d.style.visibility = 'visible';
      }
      document.querySelector('.img-hover').addEventListener('mouseenter', show);
      document.querySelector('.img-hover').addEventListener('mouseleave', hide);
  };
