(()=>{const r=document.documentElement,t=document.getElementById("themeToggle"),l=document.getElementById("themeLabel");
const ap=x=>{r.dataset.theme=x;t.setAttribute("aria-pressed",String(x==="dark"));l.textContent=x==="dark"?"Dark":"Light"};
let s=null;try{s=localStorage.getItem("portfolio-theme")}catch(e){}
ap(s||"light");
t.onclick=()=>{const n=r.dataset.theme==="dark"?"light":"dark";try{localStorage.setItem("portfolio-theme",n)}catch(e){}ap(n)};
const top=document.getElementById("top");addEventListener("scroll",()=>top.classList.toggle("show",scrollY>600),{passive:true});
top.onclick=()=>scrollTo({top:0});
const links=[...document.querySelectorAll(".rail-links a")];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>{const on=a.getAttribute("href")==="#"+e.target.id;on?a.setAttribute("aria-current","true"):a.removeAttribute("aria-current")})}),{rootMargin:"-40% 0px -55% 0px"});
document.querySelectorAll("main section[id]").forEach(x=>io.observe(x));
const c=document.getElementById("copy"),m=document.getElementById("toast");
c.onclick=async()=>{try{await navigator.clipboard.writeText("surendrakamble55184@gmail.com");m.textContent="Email copied to clipboard."}catch(e){m.textContent="Copy failed. Please select the address and copy it manually."}};
const collageTrigger=document.getElementById("aboutCollageTrigger"),collageDialog=document.getElementById("aboutCollageDialog"),collageClose=document.getElementById("aboutCollageClose");
collageTrigger.onclick=()=>collageDialog.showModal();
collageClose.onclick=()=>collageDialog.close();
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&collageDialog.open)collageDialog.close()});
})();
