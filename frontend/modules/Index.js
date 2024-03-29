export default class Index {
    init() {
        try {
            let newArticle = document.querySelector(".news-article");
            this.carousel();
            return;
        }catch(e) {}

        try {
            let btnSignin = document.querySelector("#signin");
              this.eventosLogin();
              return;
          }catch(e) {}
           
        try {
          const local = document.querySelector("#publicar");
          if (local) {
            this.publicacao();
            return
          }         
        } catch(e) {}          
    }
    carousel() {
      "use strict";
      let carouselSlider = document.querySelector(".carousel__slider");
      let list = document.querySelector(".carousel__list");
      let item = document.querySelectorAll(".carousel__item");
      let list2;
    
      const speed = .5;
    
      const width = list.offsetWidth;
      let x = 0;
      let x2 = width;
      
    
      function clone() {
        list2 = list.cloneNode(true);
        carouselSlider.appendChild(list2);
        list2.style.left = `${width}px`;
      }
    
      function moveFirst() {
        x -= speed;
    
        if (width >= Math.abs(x)) {
          list.style.left = `${x}px`;
        } else {
          x = width;
        }
      }
    
      function moveSecond() {
        x2 -= speed;
    
        if (list2.offsetWidth >= Math.abs(x2)) {
          list2.style.left = `${x2}px`;
        } else {
          x2 = width;
        }
      }
    
      function hover() {
        clearInterval(a);
        clearInterval(b);
      }
    
      function unhover() {
        a = setInterval(moveFirst, 10);
        b = setInterval(moveSecond, 10);
      }
     
      clone();
        
    
      let a = setInterval(moveFirst, 10);
      let b = setInterval(moveSecond, 10);
    
      carouselSlider.addEventListener("mouseenter", hover);
      carouselSlider.addEventListener("mouseleave", unhover);
    }

      eventosLogin() {
        const body = document.querySelector('body');
        body.className = "sign-in-js";
        let btnSignin = document.querySelector("#signin");
        let btnSignup = document.querySelector("#signup");

        btnSignin.addEventListener("click", function () {
           body.className = "sign-in-js"; 
        });

        btnSignup.addEventListener("click", function () {
            body.className = "sign-up-js";
        }); 
    }

    publicacao() {
      document.querySelector("#infoFlex").textContent = "Retornar";
      document.querySelector("#infoFlex").href = "/";
      document.querySelector(".d-flex").remove();
      document.querySelector("#cadastroColunista").remove();
    }
}     
