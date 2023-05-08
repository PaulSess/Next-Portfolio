import Image from 'next/image'
import React from 'react';
import style from './techstack.css'


export default function Techstack() {

  if (typeof window !== 'undefined') {

    document.addEventListener("mousemove", parallax);
    function parallax(e){
      document.querySelectorAll(".object").forEach(function(move){

        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
      } );
    }

        //flying in by scroll
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // console.log(entry)
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      });

      const hiddenElements1 = document.querySelectorAll('.hiddenleft')
      const hiddenElements2 = document.querySelectorAll('.hiddenright')
      hiddenElements1.forEach((el) => observer.observe(el));
      hiddenElements2.forEach((el) => observer.observe(el));
  }
  return (
    <>
      <section id="techstack">
        <div class="container">
          <h2 class="object" data-value="1">Tech Stack</h2>
          <img src="./img/bootstrap-img.png"       class="object stack hiddenleft" data-value="-2" alt="tech stack image" />
          <img src="./img/scss img.svg"            class="object stack hiddenleft"   data-value="6"  alt="tech stack image" />
          <img src="./img/figma-img.png"           class="object stack hiddenleft"   data-value="4"  alt="tech stack image" />
          <img src="./img/git-img.png" id="git"    class="object stack hiddenright"  data-value="-6" alt="tech stack image" />
          <img src="./img/github-img.png"          class="object stack hiddenleft"   data-value="8"  alt="tech stack image" />
          <img src="./img/google-lighthouse-img.svg" class="object stack hiddenleft" data-value="-4" alt="tech stack image" />
          <img src="./img/heroku-img.png"          class="object stack hiddenright"  data-value="5"  alt="tech stack image" />
          <img src="./img/html-img.png"            class="object stack hiddenright"  data-value="-9" alt="tech stack image" />
          <img src="./img/jQuery-img.png"          class="object stack hiddenright"  data-value="-5" alt="tech stack image" />
          <img src="./img/js-img.png"              class="object stack hiddenright"  data-value="-6" alt="tech stack image" />
          <img src="./img/rails-img.png"           class="object stack hiddenright"  data-value="3"  alt="tech stack image" />
          <img src="./img/react-img.png"           class="object stack hiddenright"  data-value="19" alt="tech stack image" />
          <img src="./img/ruby-img.png"            class="object stack hiddenleft"   data-value="-16" alt="tech stack image" />
          <img src="./img/webpack-img.png"         class="object stack hiddenleft"   data-value="5"  alt="tech stack image" />
          <img src="./img/yarn-img.png"            class="object stack hiddenleft"   data-value="7"  alt="tech stack image" />
          <img src="./img/sql-img.svg"             class="object stack hiddenleft"   data-value="17" alt="tech stack image" />
          <img src="./img/next.js.svg"             class="object stack hiddenright"   data-value="17" alt="tech stack image" />
          <img src="./img/tailwind.svg"            class="object stack hiddenleft"   data-value="6"  alt="tech stack image" />
        </div>
      {/* <script src="./JavaScript files/tech-stack.js" type="text/javascript"></script> */}
      </section>

    </>
  )
}
