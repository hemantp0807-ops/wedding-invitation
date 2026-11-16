(function(){
  var E=[["घी पिलाई","Ghee Pilai","2026-12-07T09:15"],["विनायक","Vinayak","2026-12-07T16:15"],["मायरा","Mayra","2026-12-10T10:15"],["प्रतिभोज","Pratibhoj","2026-12-10T17:15"],["महिला संगीत","Mahila Sangeet","2026-12-10T20:15"],["बारात प्रस्थान","Baraat Departure","2026-12-11T14:15"]];
  var now=new Date(),$=function(i){return document.getElementById(i)};
  function t12(d){var h=d.getHours(),m=d.getMinutes();return (h%12||12)+":"+(m<10?"0":"")+m+" "+(h<12?"AM":"PM")}
  $("tl").innerHTML=E.map(function(e){var d=new Date(e[2]+":00+05:30"),loc=new Date(e[2]);
    return '<div class="ev'+(d<now?" past":"")+'"><div class="dt"><b>'+("0"+loc.getDate()).slice(-2)+'</b><small>DEC</small></div><div class="bx"><b class="hi">'+e[0]+'</b><b class="en">'+e[1]+'</b><small>'+t12(loc)+' · '+loc.toLocaleDateString("en-IN",{weekday:"long"}).toUpperCase()+'</small></div></div>'}).join("");
    function cal(y,m,marks){var h='<div class="cal"><h4>'+new Date(y,m,1).toLocaleDateString("en-US",{month:"long",year:"numeric"})+'</h4><div class="grid">';
    ["Mo","Tu","We","Th","Fr","Sa","Su"].forEach(function(d){h+='<div class="h">'+d+'</div>'});
    for(var i=0;i<(new Date(y,m,1).getDay()+6)%7;i++)h+="<div></div>";
    for(var d=1;d<=new Date(y,m+1,0).getDate();d++)h+=marks.indexOf(d)>-1?'<div><div class="on">'+(m==10?"♥":d)+'</div></div>':"<div>"+d+"</div>";
    return h+'</div></div>'}
  $("cals").innerHTML=cal(2026,10,[11]);
  /* controls */
  var b=document.body;$("lang").onclick=function(){var en=b.classList.contains("hi");b.className=en?"en":"hi";this.textContent=en?"हिं":"EN"};
    $("share").onclick=function(){var u=location.href;if(navigator.share){navigator.share({title:"Shrikant & Ankita – Wedding Invitation",url:u}).catch(function(){})}else{try{navigator.clipboard.writeText(u);this.textContent="Link copied ✓"}catch(e){}}};
  var bar=$("bar"),maxS=1,tk=false;
  function meas(){maxS=Math.max(1,document.documentElement.scrollHeight-innerHeight)}
  addEventListener("resize",meas);addEventListener("load",meas);setInterval(meas,2000);
  addEventListener("scroll",function(){if(tk)return;tk=true;requestAnimationFrame(function(){tk=false;bar.style.transform="scaleX("+Math.min(1,scrollY/maxS)+")"})},{passive:true});
  /* auto scroll */
  var fab=$("fab"),on=false,pos=0,last=0,raf,rt,resume=false,SPEED=38;
  function step(t){if(!on)return;var dt=last?Math.min(t-last,50):16;last=t;pos+=SPEED*dt/1e3;
    var mx=document.documentElement.scrollHeight-innerHeight;if(pos>=mx){scrollTo(0,mx);setOn(false);resume=false;return}
    scrollTo(0,pos);raf=requestAnimationFrame(step)}
  function setOn(v){on=v;fab.classList.toggle("playing",v);last=0;cancelAnimationFrame(raf);if(v){pos=window.scrollY;raf=requestAnimationFrame(step)}}
  document.addEventListener("visibilitychange",function(){if(document.hidden&&on){setOn(false);resume=true}else if(!document.hidden&&resume){resume=false;setOn(true)}});
  function touched(e){if(e.target.closest&&e.target.closest(".ctl"))return;if(on){setOn(false);resume=true}clearTimeout(rt);if(resume)rt=setTimeout(function(){resume=false;setOn(true)},2500)}
  ["touchstart","touchmove","wheel","keydown"].forEach(function(n){addEventListener(n,touched,{passive:true})});
  fab.onclick=function(){clearTimeout(rt);resume=false;setOn(!on)};
  /* open */
  var cv=$("cover");
  for(var i=0;i<6;i++){var p=document.createElement("span");p.className="petal";p.textContent="✿";p.style.left=Math.random()*100+"%";p.style.animationDuration=(9+Math.random()*10)+"s";p.style.animationDelay=(-Math.random()*10)+"s";b.appendChild(p)}
  $("open").onclick=function(){$("env").classList.add("open");
    setTimeout(function(){cv.classList.add("gone")},1900);
    setTimeout(function(){cv.style.display="none";scrollTo(0,0);fab.classList.add("show");$("lang").classList.add("show");
      if(!matchMedia("(prefers-reduced-motion: reduce)").matches)setTimeout(function(){setOn(true)},1500)},2800)};
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.classList.add("in")})},{threshold:.08});
  document.querySelectorAll(".reveal").forEach(function(el){io.observe(el)});
})();
