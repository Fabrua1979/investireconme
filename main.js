// reveal on scroll
const revealEl=document.querySelectorAll('.reveal');
const obs=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting)e.target.classList.add('visible');
  });
},{threshold:.25});
revealEl.forEach(el=>obs.observe(el));

// counter
const counters=document.querySelectorAll('.counter');
const runCounter=el=>{
  const target=+el.dataset.target;
  let c=0;
  const inc=target/80;
  const update=()=>{
    if(c<target){c+=inc;el.innerText=Math.ceil(c);requestAnimationFrame(update);}
    else el.innerText=target;
  };
  update();
};
const counterObs=new IntersectionObserver((entries,_)=>{
  entries.forEach(e=>{if(e.isIntersecting){runCounter(e.target);counterObs.unobserve(e.target);}});
},{threshold:.8});
counters.forEach(c=>counterObs.observe(c));