import './assets/style.scss';
import gsap from "gsap";

/**
 * coded by ivan DZOIBO
 * github: https://github.com/dzoibo/Apple-HomePod-mini.git
 * 
 */

const homepodMainContainer= document.querySelector(".pod-main-container");
const discoverBtn= document.querySelector(".btn-discover");
const whiteGradiant= document.querySelector(".main-gradiant");
const initialTitle= document.querySelector(".initial-title");
const mainTitle = document.querySelector(".main-title");
const siriTitle= document.querySelector(".siri-title");

discoverBtn.addEventListener("click",()=>{
    discoverBtn.style.opacity=0;
    whiteGradiant.style.opacity=0
    gsap.to(homepodMainContainer,{
        top: 350,
        width: 489,
        height: 449
    });
    gsap.to(initialTitle,{
        scale: 0.5,
        top: 350
    })
    gsap.to(siriTitle,{opacity:1})
})