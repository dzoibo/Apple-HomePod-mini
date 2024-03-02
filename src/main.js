import './assets/style.scss';
import gsap from "gsap";

/**
 * coded by ivan DZOIBO
 * github: https://github.com/dzoibo/Apple-HomePod-mini.git
 * 
 */


const nav=document.querySelector(".nav");
const homepodMainContainer= document.querySelector('.pod-main-container');
const discoverBtn= document.querySelector(".btn-discover");
const initialTitle= document.querySelector(".initial-title");
const firstPartMainTitle= document.querySelector(".nothing-text");
const secondPartMainTitle= document.querySelector(".amazing-text");
const subTitle= document.querySelector(".sub-title");


gsap.to(nav,{marginTop:0,duration:1.5});
gsap.to(firstPartMainTitle,{paddingTop:0,delay:0.5});
gsap.to(secondPartMainTitle,{paddingTop:0,delay:0.5});
gsap.to(subTitle,{paddingTop:0,opacity:1,delay:0.5});
gsap.to(homepodMainContainer,{
    top:410,
    opacity:1,
    width:1000,
    duration:1.5
});
gsap.to(discoverBtn,{
    opacity:1,
    marginTop: 190,
    duration:1.5
});

const ping= document.querySelector('.ping-1')
const whiteGradiant= document.querySelector(".main-gradiant");
const siriTitle= document.querySelector(".siri-title");
const homepod1= document.querySelector(".pod-1");
const homepod2= document.querySelector(".pod-2");
const homepod3= document.querySelector(".pod-3");
const homepod4= document.querySelector(".pod-4");
const miniImage= document.querySelector(".mini-image");
const textNever= document.querySelector(".text-never");
const homeScreen= document.querySelector(".screen");
const heyTitle= document.querySelector(".hey-title");
const siriMessage= document.querySelector(".siri-message");

discoverBtn.addEventListener("click",()=>{
    discoverBtn.style.zIndex=0;
    whiteGradiant.style.display="none"
    gsap.to(homepodMainContainer,{
        top: 350,
        width: 489,
        height: 449
    });
    gsap.to(initialTitle,{
        scale: 0.5,
        top: 350
    })
    gsap.to(siriTitle,{opacity:1});
    setTimeout(() => {
        ping.style.display="flex";

    }, 500);



    setTimeout(() => {
        document.addEventListener("click",()=>{
            discoverBtn.style.display="none";
            initialTitle.style.display="none";
            gsap.to(homepodMainContainer,{
                width: 467,
                height: 435,
                top: 320
            });
            gsap.to(homepod1,{
                opacity:1,
                x: -300
            });
            gsap.to(homepod2,{
                opacity:1,
                x: -200
            });
            gsap.to(homepod3,{
                opacity:1,
                x: 200
            });
            gsap.to(homepod4,{
                opacity:1,
                x: 300
            });
            gsap.to(miniImage,{
                opacity: 1,
                top:50
            })
            ping.style.display="none";
            gsap.to(siriTitle,{opacity:0,top:200});
            gsap.to(textNever,{bottom:50});

            setTimeout(()=>{
                gsap.to(textNever,{opacity: 0});
                gsap.to(miniImage, {top:-300,duration: 1,opacity:0});
                gsap.to(homepod3, {top:-300,duration: 1,opacity:0});
                gsap.to(homepod2, {top:-300,duration: 1,opacity:0});
                gsap.to(homepodMainContainer, {top:-300,opacity:0});
                gsap.to(homepod1,{
                    bottom:-10,
                    top: "initial",
                    scale:0.4,
                    left: 350,
                    duration:1,
                    x:"initial"
                    });
                gsap.to(homepod4,{
                    bottom:-10,
                    top: "initial",
                    scale:0.4,
                    right: 350,
                    duration: 1,
                    left: "initial",
                    });
                gsap.to(homeScreen,{
                    bottom:40,
                    duration: 1,
                    opacity:1});
            },1000)


            setTimeout(() => {
                gsap.to(homeScreen,{
                    bottom: "initial",
                    top:"-500",
                    duration: 1,
                    opacity:0});
                gsap.to(homepod1,{
                    scale:0.6,
                    right: 350,
                    duration: 1,
                    bottom:"44%",
                    left: "57%",
                });
                gsap.to(homepod2, {
                    top:"initial",
                    x:"50",
                    zIndex:1,
                    bottom: "40%"});
                gsap.to(homepod4,{
                    bottom:"40%",
                    right: 350,
                    scale:0.7,
                    x:"-100%",
                    zIndex:2,
                    duration: 1,
                    });
            }, 2000);

            setTimeout(() => {
                gsap.to(homepod1,{
                    scale:0.65,
                    right: 350,
                    duration: 1,
                    bottom:"34%",
                    left: "57%",
                });
                gsap.to(homepod2, {
                    top:"280px",
                    opacity:1,
                    duration: 1,
                    scale:0.5,
                });
                gsap.to(homepod4,{
                    bottom:"30%",
                    right: 350,
                    scale:0.8,
                    x:"-100%",
                    zIndex:3,
                    duration: 1,
                });
                gsap.to(siriMessage,{
                    opacity:1,
                    delay:0.5,
                    top:250
                });
                gsap.to(heyTitle,{
                    opacity:1,
                    delay:0.5,
                    top:200
                })
            }, 3000);
        })
    }, 1000);
    

})