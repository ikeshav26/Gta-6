import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import "remixicon/fonts/remixicon.css";

const App = () => {
  const [showContent, setShowContent] = useState(false)

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.to('.vi-mask-group', {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%"
    })
    .to('.vi-mask-group', {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function() {
        if(this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      }
    }) 
  })

  useGSAP(() => {
    if (showContent) {
      const main = document.querySelector(".main");
      if (main) {

        gsap.to(".main",{
          rotate:0,
          scale:1,
          duration:2,
          delay:-1,
          ease:"Expo.easeInOut"
        }) 

        gsap.to(".sky",{
          rotate:0,
          scale:1.1,
          duration:2,
          delay:-0.8,
          ease:"Expo.easeInOut"
        }) 

        gsap.to(".bg",{
          rotate:0,
          scale:1.1,
          duration:2,
          delay:-0.8,
          ease:"Expo.easeInOut"
        })
        
        gsap.to(".girl",{
          rotate:0,
          scale:1.4,
          duration:2,
          bottom:"-25%",
          x:"-50%",
          delay:-0.8,
          ease:"Expo.easeInOut"
        })

        gsap.to(".text",{
          rotate:0,
          scale:1,
          duration:2,
          delay:-0.8,
          ease:"Expo.easeInOut"
        })


        main.addEventListener("mousemove", function(dets) {
          const xMove=(dets.clientX/window.innerWidth-.5)*40;
          gsap.to(".text",{
            x:`${xMove}`
          })
          gsap.to(".sky",{
            x:`${xMove}`
          })
          gsap.to(".bg",{
            x:`${xMove*1.4}`
          })
        });
      }
    }
  }, [showContent]);

  return (
    <>
      <div className='svg flex items-center justify-center fixed top-0 left-0 overflow-hidden z-[100] w-full h-screen bg-black'>
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && <div className='main w-full -rotate-[10deg] scale-[1.7]'>
        <div className='landing  w-full h-screen bg-black'>
          <div className='navbar w-full h-20 z-[10] absolute top-0 p-10'>
            <div className='logo flex gap-7 items-center'>
              <div className='lines flex flex-col gap-1'>
                <div className='h-1 bg-white w-10'></div>
                <div className='h-1 bg-white w-7'></div>
                <div className='h-1 bg-white w-4'></div>
              </div>
              <h3 className='text-4xl text-white'>ROCKSTAR</h3>
            </div>
          </div>
          <div className='text text-[9rem] lg:text-[12rem] flex flex-col gap-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-[10] -rotate-[10deg] scale-[1.8]'>
            <h1 className='-ml-30 leading-none'>grand</h1>
            <h1 className='ml-30 leading-none'>theft</h1>
            <h1 className='-ml-30 leading-none'>auto</h1>
          </div>
          <div className='imagesdiv w-full h-screen relative overflow-hidden'>
            <img className='sky scale-[1.7] -rotate-[30deg] bg-cover h-full w-full absolute top-0 left-0' src="./sky.png"/>
            <img className='bg scale-[1.7] -rotate-[3deg] bg-cover h-full w-full absolute top-0 left-0' src="./bg.png"/>
            <img className='girl absolute -bottom-[70%] left-1/2 bg-cover h-full scale-[1.8] -rotate-[15deg] -translate-x-1/2 z-[11]' src="./girlbg.png"/>
          </div>
          <div className='w-full h-screen bg-black flex items-center justify-center'>
          <div className='container w-full h-[80%]  p-10 flex items-center justify-center'>
          <div className='left w-1/2 relative h-full'>
           <img src="./imag.png" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
          </div>
          <div className='right text-white w-1/2 flex flex-col items-center justify-center'>
            <h1 className='text-7xl'>Still Running</h1>
            <h1 className='text-7xl'>Not Hunting</h1>
            <p className='font-[Helvetica_Now_Display] mt-10 text-2xl'>Welcome to the official GTA 6 Download Page!</p>
            <p className='font-[Helvetica_Now_Display] mt-3 text-xl'>Get ready to experience the most immersive and expansive Grand Theft Auto game ever created. Whether you're exploring the streets of Vice City or completing high-stakes missions, GTA 6 delivers an unforgettable open-world experience.</p>
            <button className='bg-yellow-500 px-10 py-10 text-black mt-10 rounded-full text-3xl cursor-pointer'>DOWNLOAD NOW</button>
          </div>
          </div>
        </div>
          <div className='btmbar z-[12] flex items-center absolute w-full h-20 bottom-0 left-0 py-15 px-10 bg-gradient-to-t from-black to-transparent '>
            <div className='flex gap-3 items-center text-white'>
              <i className='ri-arrow-down-line text-3xl'></i>
              <h3 className='font-[Helvetica_Now_Display] text-lg'>Scroll Down</h3>
            </div>
            <img src="./ps5.png" className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
        
      </div>}
    </>
  )
}

export default App