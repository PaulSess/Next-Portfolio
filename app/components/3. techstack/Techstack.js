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
          {/* <Image src="./img/bootstrap-img.png"       class="object stack hiddenleft" data-value="-2" alt="tech stack image" /> */}
          <Image src={"/Images/techstack/scss img.svg"} width={150} height={150}         className={'object stack hiddenleft'}  data-value="6"  alt="tech stack image" />
          <Image src={"/Images/techstack/figma-img.png"} width={15} height={15}          className={'object stack hiddenleft'}  data-value="4"  alt="tech stack image" />
          <Image src={"/Images/techstack/git-img.png"} id="git" width={15} height={15}   className={'object stack hiddenright'}  data-value="-6" alt="tech stack image" />
          <Image src={"/Images/techstack/github-img.png"} width={15} height={15}         className={'object stack hiddenleft"'}  data-value="8"  alt="tech stack image" />
          <Image src={"/Images/techstack/google-lighthouse-img.svg"} width={15} height={15} className={'object stack hiddenleft'}data-value="-4" alt="tech stack image" />
          <Image src={"/Images/techstack/heroku-img.png"} width={15} height={15}         className={'object stack hiddenright'}  data-value="5"  alt="tech stack image" />
          <Image src={"/Images/techstack/html-img.png"}  width={15} height={15}          className={'object stack hiddenright'}  data-value="-9" alt="tech stack image" />
          <Image src={"/Images/techstack/jQuery-img.png"} width={15} height={15}         className={'object stack hiddenright'}  data-value="-5" alt="tech stack image" />
          <Image src={"/Images/techstack/js-img.png"} width={15} height={15}             className={'object stack hiddenright'}  data-value="-6" alt="tech stack image" />
          <Image src={"/Images/techstack/rails-img.png"}  width={15} height={15}         className={'object stack hiddenright'}  data-value="3"  alt="tech stack image" />
          <Image src={"/Images/techstack/react-img.png"}  width={15} height={15}         className={'object stack hiddenright'}  data-value="19" alt="tech stack image" />
          <Image src={"/Images/techstack/ruby-img.png"}  width={15} height={15}          className={'object stack hiddenleft'}  data-value="-16" alt="tech stack image" />
          <Image src={"/Images/techstack/webpack-img.png"} width={15} height={15}        className={'object stack hiddenleft'}  data-value="5"  alt="tech stack image" />
          <Image src={"/Images/techstack/yarn-img.png"}  width={15} height={15}          className={'object stack hiddenleft'}  data-value="7"  alt="tech stack image" />
          <Image src={"/Images/techstack/sql-img.svg"}   width={15} height={15}          className={'object stack hiddenleft'}  data-value="17" alt="tech stack image" />
          <Image src={"/Images/techstack/next.js.svg"}   width={15} height={15}          className={'object stack hiddenright'}   data-value="17" alt="tech stack image" />
          <Image src="/Images/techstack/tailwind.svg" width={15} height={15}             className={'object stack hiddenleft'}   data-value="6"  alt="tech stack image" />
        </div>
      {/* <script src="./JavaScript files/tech-stack.js" type="text/javascript"></script> */}
      </section>

    </>
  )
}
