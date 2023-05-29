import Image from 'next/image';
import React from 'react';
import style from './welcome-section.css'


export default function WelcomeSection() {

  // const tween = KUTE.fromTo(
  //   '#blob1',
  //   { path: '#blob1'},
  //   { path: '#blob2'},
  //   { repeat: 999, duration: 3000, yoyo: true }
  // )
  // tween.start()

  return (
    <>
        <section id="start-animation-section">
          <div class="hero">
            <div className={'heroImage'}>
              <Image width={1000} height={1000} src="/Images/david-schultz-bg-img.jpg" alt="picture of paul dream computer setup in the dark" />
            </div>
            <div id="boxsh"></div>
            <h1 id="hello-h1">Hello, I'm <a id="paul" target="_blank" href="https://www.linkedin.com/in/paul-sess/">Paul</a>
            </h1>
            <h2 id="webdev-h2">I'm a junior web developer</h2>
            {/* <svg id="visual" class="blob sp" viewBox="0 0 900 450" width="550" height="450" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
              <g transform="translate(463.0496714436722 246.20678767314865)">
                <path id="blob1"
                  d="M83.7 -88.6C117.7 -49.7 160.9 -24.9 178.4 17.5C195.9 59.9 187.7 119.7 153.7 145.7C119.7 171.7 59.9 163.9 -1.4 165.3C-62.7 166.7 -125.4 177.4 -162.6 151.4C-199.7 125.4 -211.4 62.7 -213.2 -1.8C-215 -66.3 -206.9 -132.6 -169.7 -171.4C-132.6 -210.2 -66.3 -221.6 -20.7 -200.9C24.9 -180.2 49.7 -127.4 83.7 -88.6"
                  fill="#822323"></path>
              </g>
              <g style="visibility: hidden;" transform="translate(178.78420447635062 189.6327187999027)"><path id="blob2" d="M80.6 -135.3C113.2 -120.8 154.5 -116.9 176.5 -96.1C198.5 -75.3 201.2 -37.7 194.9 -3.7C188.5 30.3 173.1 60.7 151.4 82C129.7 103.4 101.9 115.8 75.6 142.3C49.3 168.8 24.7 209.4 -0.2 209.7C-25 210 -50 169.9 -74.1 142.2C-98.2 114.4 -121.4 99 -129.8 77.3C-138.1 55.7 -131.5 27.8 -136.6 -2.9C-141.7 -33.7 -158.3 -67.3 -155 -97.6C-151.6 -128 -128.3 -154.9 -99.2 -171.4C-70 -187.9 -35 -194 -5.5 -184.4C24 -174.9 48 -149.8 80.6 -135.3" fill="#822323"></path></g>
            </svg> */}


            <img id="me" class="sp" src="images/red shirt lewagon noo background.png"alt="image of paul in a red shirt, his long blond hair a floating in a soft autom breeze as he smiles gentle in the direction of the camera. A smile you wouldn't forget and a smile you can trust." />
          </div>
        </section>
        <a href="#techstack">
          <img id="scroll-arrow" class="scroll-down" src="./images/scroll-down.png" alt="scroll down to techstack" />
        </a>
        <img id="Thats-me-SVG" src="images/That's me!.svg" alt="That's me written in a cool animation that let's it look like I'm writing it myself" />
        <img id="arrow" src="./images/ArrowS.gif" alt="a handdrawen arrow that points towards my picture" />
        <div class="slider"></div>

        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"
          integrity="sha512-8Wy4KH0O+AuzjMm1w5QfZ5j5/y8Q/kcUktK9mPUVaUoBvh3QPUZB822W/vy7ULqri3yR8daH3F58+Y8Z08qzeg=="
          crossorigin="anonymous" referrerpolicy="no-referrer">
          </script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TimelineMax.min.js"
          integrity="sha512-lJDBw/vKlGO8aIZB8/6CY4lV+EMAL3qzViHid6wXjH/uDrqUl+uvfCROHXAEL0T/bgdAQHSuE68vRlcFHUdrUw=="
          crossorigin="anonymous" referrerpolicy="no-referrer">
          </script> */}
        {/* <script src="./JavaScript files/welcome-animation.js"></script> */}


    </>
  )
}
