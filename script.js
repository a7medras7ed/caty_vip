const starsSmall=document.getElementById('starsSmall');
const starsMedium=document.getElementById('starsMedium');
const starsLarge=document.getElementById('starsLarge');
const shootingStars=document.getElementById('shootingStars');
const orbitRings=Array.from(document.querySelectorAll('.orbit-ring'));
const vipModal=document.getElementById('vipModal');
const vipModalBackdrop=document.getElementById('vipModalBackdrop');
const vipCloseBtn=document.getElementById('vipCloseBtn');
const vipBadge=document.getElementById('vipBadge');
const vipTitle=document.getElementById('vipTitle');
const vipSubtitle=document.getElementById('vipSubtitle');
const vipFeaturesGrid=document.getElementById('vipFeaturesGrid');

const vipContent={
  vip1:{title:'VIP1',subtitle:'العناصر الخاصة بالمستوى',features:[
    {title:'اطار افتار vip1',text:'الإطار الرسمي للمستوى الأول.',image:'frame_vip1.png'},
    {title:'علامه هويه',text:'العلامة الرسمية الخاصة بالمستوى الأول.',image:'badge_vip1.png'},
    {title:'وسام',text:'وسام VIP يظهر داخل الحساب.'},
    {title:'فقاعه دردشه',text:'فقاعة دردشة خاصة بالمستوى.'}
  ]},
  vip2:{title:'VIP2',subtitle:'العناصر الخاصة بالمستوى',features:[
    {title:'اطار افتار vip2',text:'الإطار الرسمي للمستوى الثاني.',image:'frame_vip2.png'},
    {title:'علامه هويه',text:'العلامة الرسمية الخاصة بالمستوى الثاني.',image:'badge_vip2.png'},
    {title:'وسام',text:'وسام VIP يظهر داخل الحساب.'},
    {title:'فقاعه دردشه',text:'فقاعة دردشة خاصة بالمستوى.'}
  ]},
  vip3:{title:'VIP3',subtitle:'العناصر الخاصة بالمستوى',features:[
    {title:'اطار افتار vip3',text:'الإطار الرسمي للمستوى الثالث.',image:'frame_vip3.png'},
    {title:'علامه هويه',text:'العلامة الرسمية الخاصة بالمستوى الثالث.',image:'badge_vip3.png'},
    {title:'وسام',text:'وسام VIP يظهر داخل الحساب.'},
    {title:'فقاعه دردشه',text:'فقاعة دردشة خاصة بالمستوى.'},
    {title:'تاثير دخول',text:'تأثير الدخول الرسمي الخاص بـ VIP3.',image:'entry_vip3.png'}
  ]},
  vip4:{title:'VIP4',subtitle:'العناصر الخاصة بالمستوى',features:[
    {title:'اطار افتار vip4',text:'الإطار الرسمي للمستوى الرابع.',image:'frame_vip4.png'},
    {title:'علامه هويه',text:'العلامة الرسمية الخاصة بالمستوى الرابع.',image:'badge_vip4.png'},
    {title:'وسام',text:'وسام VIP يظهر داخل الحساب.'},
    {title:'فقاعه دردشه',text:'فقاعة دردشة خاصة بالمستوى.'},
    {title:'تاثير دخول',text:'تأثير الدخول الرسمي الخاص بـ VIP4.',image:'entry_vip4.png'}
  ]},
  vip5:{title:'VIP5',subtitle:'العناصر الخاصة بالمستوى',features:[
    {title:'اطار افتار vip5',text:'الإطار الرسمي للمستوى الخامس.',image:'frame_vip5.png'},
    {title:'علامه هويه',text:'العلامة الرسمية الخاصة بالمستوى الخامس.',image:'badge_vip5.png'},
    {title:'وسام',text:'وسام VIP يظهر داخل الحساب.'},
    {title:'فقاعه دردشه',text:'فقاعة دردشة خاصة بالمستوى.'},
    {title:'تاثير دخول',text:'تأثير الدخول الرسمي الخاص بـ VIP5.',image:'entry_vip5.png'},
    {title:'مركبه',text:'المركبة قيد التجهيز.'}
  ]},
  vip6:{title:'VIP6',subtitle:'العناصر الخاصة بالمستوى',features:[
    {title:'اطار افتار vip6',text:'الإطار الرسمي للمستوى السادس.',image:'frame_vip6.png'},
    {title:'علامه هويه',text:'العلامة الرسمية الخاصة بالمستوى السادس.',image:'badge_vip6.png'},
    {title:'وسام',text:'وسام VIP يظهر داخل الحساب.'},
    {title:'فقاعه دردشه',text:'فقاعة دردشة خاصة بالمستوى.'},
    {title:'تاثير دخول',text:'تأثير الدخول الرسمي الخاص بـ VIP6.',image:'entry_vip6.png'},
    {title:'مركبه',text:'المركبة قيد التجهيز.'},
    {title:'الخلفيه',text:'الخلفية الرسمية الخاصة بـ VIP6.',image:'background_vip6.png'}
  ]},
  vip7:{title:'VIP7',subtitle:'العناصر الخاصة بالمستوى',features:[
    {title:'اطار افتار vip7',text:'الإطار الرسمي للمستوى السابع.',image:'frame_vip7.png'},
    {title:'علامه هويه',text:'العلامة الرسمية الخاصة بالمستوى السابع.',image:'badge_vip7.png'},
    {title:'وسام',text:'وسام VIP يظهر داخل الحساب.'},
    {title:'فقاعه دردشه',text:'فقاعة دردشة خاصة بالمستوى.'},
    {title:'تاثير دخول',text:'تأثير الدخول الرسمي الخاص بـ VIP7.',image:'entry_vip7.png'},
    {title:'مركبه',text:'المركبة قيد التجهيز.'},
    {title:'الخلفيه',text:'الخلفية الرسمية الخاصة بـ VIP7.',image:'background_vip7.png'}
  ]}
};

const planets=[
  {key:'vip1',el:document.getElementById('planet-vip1'),orbitDuration:320,selfSpin:180,floatAmplitude:1.2,floatDuration:18,pulseDuration:13,startAngle:-18,arcStart:20,ringSpeed:260,desktopRadius:170,tabletRadius:150,mobileRadius:84,desktopSize:86,tabletSize:70,mobileSize:50,pulseMin:.995,pulseMax:1.010},
  {key:'vip2',el:document.getElementById('planet-vip2'),orbitDuration:420,selfSpin:220,floatAmplitude:1.4,floatDuration:20,pulseDuration:14,startAngle:42,arcStart:120,ringSpeed:320,desktopRadius:225,tabletRadius:195,mobileRadius:118,desktopSize:94,tabletSize:78,mobileSize:56,pulseMin:.996,pulseMax:1.012},
  {key:'vip3',el:document.getElementById('planet-vip3'),orbitDuration:520,selfSpin:260,floatAmplitude:1.6,floatDuration:22,pulseDuration:15,startAngle:98,arcStart:210,ringSpeed:390,desktopRadius:280,tabletRadius:240,mobileRadius:150,desktopSize:102,tabletSize:86,mobileSize:62,pulseMin:.997,pulseMax:1.014},
  {key:'vip4',el:document.getElementById('planet-vip4'),orbitDuration:650,selfSpin:300,floatAmplitude:1.8,floatDuration:24,pulseDuration:16,startAngle:154,arcStart:310,ringSpeed:470,desktopRadius:340,tabletRadius:285,mobileRadius:180,desktopSize:110,tabletSize:94,mobileSize:68,pulseMin:.998,pulseMax:1.016},
  {key:'vip5',el:document.getElementById('planet-vip5'),orbitDuration:820,selfSpin:360,floatAmplitude:2.0,floatDuration:26,pulseDuration:17,startAngle:210,arcStart:60,ringSpeed:560,desktopRadius:395,tabletRadius:330,mobileRadius:208,desktopSize:118,tabletSize:102,mobileSize:74,pulseMin:.999,pulseMax:1.018},
  {key:'vip6',el:document.getElementById('planet-vip6'),orbitDuration:980,selfSpin:420,floatAmplitude:2.2,floatDuration:28,pulseDuration:18,startAngle:286,arcStart:170,ringSpeed:660,desktopRadius:460,tabletRadius:375,mobileRadius:234,desktopSize:126,tabletSize:110,mobileSize:80,pulseMin:1.000,pulseMax:1.020},
  {key:'vip7',el:document.getElementById('planet-vip7'),orbitDuration:1180,selfSpin:520,floatAmplitude:2.4,floatDuration:30,pulseDuration:19,startAngle:332,arcStart:255,ringSpeed:780,desktopRadius:520,tabletRadius:420,mobileRadius:258,desktopSize:136,tabletSize:118,mobileSize:86,pulseMin:1.002,pulseMax:1.022}
];

function createStars(container,count,minDuration,maxDuration){
  const frag=document.createDocumentFragment();
  for(let i=0;i<count;i++){
    const star=document.createElement('span');
    star.className='star';
    star.style.left=`${Math.random()*100}%`;
    star.style.top=`${Math.random()*100}%`;
    star.style.animationDuration=`${(Math.random()*(maxDuration-minDuration)+minDuration).toFixed(2)}s`;
    star.style.animationDelay=`${(Math.random()*8).toFixed(2)}s`;
    frag.appendChild(star);
  }
  container.appendChild(frag);
}

function createShootingStar(config){
  const meteor=document.createElement('span');
  meteor.className='shooting-star';
  meteor.style.left=config.left;
  meteor.style.top=config.top;
  meteor.style.setProperty('--delay',config.delay);
  meteor.style.setProperty('--duration',config.duration);
  meteor.style.setProperty('--angle',config.angle);
  meteor.style.setProperty('--size',config.size);
  shootingStars.appendChild(meteor);
}

createStars(starsSmall,140,3.2,7.8);
createStars(starsMedium,58,4.4,8.8);
createStars(starsLarge,20,5.2,10.2);

[
  {left:'84%',top:'12%',delay:'3s',duration:'16s',angle:'-29deg',size:'140px'},
  {left:'76%',top:'18%',delay:'14s',duration:'18s',angle:'-31deg',size:'120px'},
  {left:'90%',top:'24%',delay:'28s',duration:'17s',angle:'-27deg',size:'135px'}
].forEach(createShootingStar);

function getMode(){const w=window.innerWidth; if(w<=600)return 'mobile'; if(w<=1100)return 'tablet'; return 'desktop';}
function getRadius(planet){const mode=getMode(); if(mode==='mobile')return planet.mobileRadius; if(mode==='tablet')return planet.tabletRadius; return planet.desktopRadius;}
function getPlanetSize(planet){const mode=getMode(); if(mode==='mobile')return planet.mobileSize; if(mode==='tablet')return planet.tabletSize; return planet.desktopSize;}

function applyRingLayout(){
  planets.forEach((planet,index)=>{
    const ring=orbitRings[index];
    if(!ring) return;
    const radius=getRadius(planet);
    const size=radius*2;
    ring.style.width=`${size}px`;
    ring.style.height=`${size}px`;
    ring.style.setProperty('--arc-start',`${planet.arcStart}deg`);
    ring.style.setProperty('--ring-speed',`${planet.ringSpeed}s`);
  });
}

function animatePlanets(time){
  const t=time/1000;
  planets.forEach((planet)=>{
    if(!planet.el) return;
    const radius=getRadius(planet);
    const angle=(planet.startAngle*Math.PI/180)+((t/planet.orbitDuration)*Math.PI*2);
    const x=Math.cos(angle)*radius;
    const y=Math.sin(angle)*radius;
    const baseSize=getPlanetSize(planet);
    const depth=(y/radius+1)/2;
    const scale=(0.84+depth*0.18);
    const z=Math.round(20+depth*80);
    const lightX=50+((-x/radius)*28);
    const lightY=50+((-y/radius)*28);
    const shadowX=50+((x/radius)*24);
    const shadowY=50+((y/radius)*24);

    planet.el.style.width=`${baseSize}px`;
    planet.el.style.height=`${baseSize}px`;
    planet.el.style.transform=`translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale.toFixed(3)})`;
    planet.el.style.zIndex=`${z}`;
    planet.el.style.setProperty('--light-x',`${lightX.toFixed(2)}%`);
    planet.el.style.setProperty('--light-y',`${lightY.toFixed(2)}%`);
    planet.el.style.setProperty('--shadow-x',`${shadowX.toFixed(2)}%`);
    planet.el.style.setProperty('--shadow-y',`${shadowY.toFixed(2)}%`);
    planet.el.style.setProperty('--float-amplitude',`${planet.floatAmplitude}px`);
    planet.el.style.setProperty('--float-duration',`${planet.floatDuration}s`);
    planet.el.style.setProperty('--pulse-duration',`${planet.pulseDuration}s`);
    planet.el.style.setProperty('--spin-duration',`${planet.selfSpin}s`);
    planet.el.style.setProperty('--pulse-min',`${planet.pulseMin}`);
    planet.el.style.setProperty('--pulse-max',`${planet.pulseMax}`);
  });
  requestAnimationFrame(animatePlanets);
}

function featureTemplate(item){
  if(item.image){
    return `
      <div class="vip-feature has-media">
        <div class="vip-feature-media">
          <img src="${item.image}" alt="${item.title}">
        </div>
        <div class="vip-feature-body">
          <span class="vip-feature-title">${item.title}</span>
          <p class="vip-feature-text">${item.text}</p>
        </div>
      </div>
    `;
  }
  return `
    <div class="vip-feature">
      <span class="vip-feature-title">${item.title}</span>
      <p class="vip-feature-text">${item.text}</p>
    </div>
  `;
}

function renderVipPopup(key){
  const data=vipContent[key];
  if(!data) return;
  vipBadge.textContent=data.title;
  vipTitle.textContent=data.title;
  vipSubtitle.textContent=data.subtitle;
  vipFeaturesGrid.innerHTML=data.features.map(featureTemplate).join('');
  vipModal.classList.add('is-open');
  vipModal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}

function closeVipPopup(){
  vipModal.classList.remove('is-open');
  vipModal.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}

planets.forEach(planet=>{
  if(!planet.el) return;
  planet.el.addEventListener('click',()=>renderVipPopup(planet.key));
});

vipCloseBtn.addEventListener('click',closeVipPopup);
vipModalBackdrop.addEventListener('click',closeVipPopup);
window.addEventListener('keydown',(e)=>{ if(e.key==='Escape') closeVipPopup(); });

applyRingLayout();
requestAnimationFrame(animatePlanets);
window.addEventListener('resize',applyRingLayout);
