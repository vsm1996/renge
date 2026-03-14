module.exports=[18622,(a,b,c)=>{b.exports=a.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},80146,(a,b,c)=>{"use strict";b.exports=a.r(18622)},9637,(a,b,c)=>{"use strict";b.exports=a.r(80146).vendored["react-ssr"].ReactJsxRuntime},60940,(a,b,c)=>{"use strict";b.exports=a.r(80146).vendored["react-ssr"].React},3805,83103,a=>{"use strict";var b=a.i(9637),c=a.i(60940),d=(1+Math.sqrt(5))/2,e=360/(d*d),f=[1,2,3,5,8,13,21,34,55,89];function g(a,b,c){return 0===b?a:a*(1+(c()-.5)*2*b)}var h=[{key:"xs",exp:-2,lh:"1.5"},{key:"sm",exp:-1,lh:"1.5"},{key:"base",exp:0,lh:"1.6"},{key:"lg",exp:1,lh:"1.4"},{key:"xl",exp:2,lh:"1.3"},{key:"2xl",exp:3,lh:"1.2"},{key:"3xl",exp:4,lh:"1.2"},{key:"4xl",exp:5,lh:"1.2"}],i={"vortex-reveal":{value:"rengeVortexReveal var(--renge-duration-9) cubic-bezier(0.4, 0.0, 0.6, 1) forwards",keyframes:`@keyframes rengeVortexReveal {
  0%   { transform: scale(0.8) rotate(20deg); opacity: 0; }
  100% { transform: scale(1) rotate(0deg);   opacity: 1; }
}`},"helix-rise":{value:"rengeHelixRise var(--renge-duration-9) ease-out forwards",keyframes:`@keyframes rengeHelixRise {
  0%   { transform: translateY(50px) rotate(10deg); opacity: 0; }
  100% { transform: translateY(0) rotate(0deg);     opacity: 1; }
}`},"sacred-fade":{value:"rengeSacredFade var(--renge-duration-9) ease-in-out forwards",keyframes:`@keyframes rengeSacredFade {
  0%   { transform: scale(0.95); opacity: 0; }
  100% { transform: scale(1);    opacity: 1; }
}`},"spiral-in":{value:"rengeSpiralIn var(--renge-duration-9) cubic-bezier(0.75, 0.2, 0.5, 1) forwards",keyframes:`@keyframes rengeSpiralIn {
  0%   { transform: translate(-30px, 30px) rotate(-12deg); opacity: 0; }
  100% { transform: translate(0, 0) rotate(0deg);          opacity: 1; }
}`},"morph-fade-in":{value:"rengeMorphFadeIn var(--renge-duration-9) ease-in-out forwards",keyframes:`@keyframes rengeMorphFadeIn {
  0%   { opacity: 0; border-radius: 50% 30% 70% 50% / 50% 70% 30% 50%; transform: scale(0.8); }
  50%  { border-radius: 30% 50% 50% 70% / 70% 50% 50% 30%; }
  100% { opacity: 1; transform: scale(1); }
}`},bloom:{value:"rengeBloom var(--renge-duration-10) ease-in-out forwards",keyframes:`@keyframes rengeBloom {
  0%   { transform: scale(0.9); opacity: 0.8; }
  100% { transform: scale(1);   opacity: 1;   }
}`},pulse:{value:"rengePulse var(--renge-duration-9) infinite ease-in-out",keyframes:`@keyframes rengePulse {
  0%, 100% { transform: scale(1);    opacity: 1;   }
  50%       { transform: scale(1.05); opacity: 0.8; }
}`},vibrate:{value:"rengeVibrate var(--renge-duration-6) infinite linear",keyframes:`@keyframes rengeVibrate {
  0%   { transform: translate(0); }
  25%  { transform: translate(-1px, 1px); }
  50%  { transform: translate(1px, -1px); }
  75%  { transform: translate(-1px, 1px); }
  100% { transform: translate(0); }
}`},wave:{value:"rengeWave var(--renge-duration-9) infinite ease-in-out",keyframes:`@keyframes rengeWave {
  0%   { transform: rotate(0deg); }
  50%  { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
}`},breathe:{value:"rengeBreathe var(--renge-duration-10) ease-in-out infinite",keyframes:`@keyframes rengeBreathe {
  0%, 100% { transform: scale(1);    }
  50%       { transform: scale(1.08); }
}`},fall:{value:"rengeFall var(--renge-duration-9) ease-in-out infinite",keyframes:`@keyframes rengeFall {
  0%   { transform: translateY(0);    }
  50%  { transform: translateY(10px); }
  100% { transform: translateY(0);    }
}`},float:{value:"rengeFloat var(--renge-duration-9) ease-in-out infinite",keyframes:`@keyframes rengeFloat {
  0%   { transform: translateY(0);     }
  50%  { transform: translateY(-10px); }
  100% { transform: translateY(0);     }
}`},"float-wave":{value:"rengeFloatWave var(--renge-duration-9) ease-in-out infinite",keyframes:`@keyframes rengeFloatWave {
  0%   { transform: translateY(0);     }
  50%  { transform: translateY(-22px); }
  100% { transform: translateY(0);     }
}`},"pulse-color-shift":{value:"rengePulseColorShift var(--renge-duration-9) infinite ease-in-out",keyframes:`@keyframes rengePulseColorShift {
  0%, 100% { background: var(--renge-color-success); }
  50%       { background: var(--renge-color-danger);  }
}`},swelling:{value:"rengeSwelling var(--renge-duration-9) ease-in-out infinite",keyframes:`@keyframes rengeSwelling {
  0%, 100% { transform: scale(1);   opacity: 1;   }
  50%       { transform: scale(1.1); opacity: 0.8; }
}`}},j=Object.keys(i),k={skyBlue:{l:75,c:.35,h:210},oceanBlue:{l:50,c:.5,h:190},riverBlue:{l:60,c:.45,h:200},slateBlue:{l:50,c:.4,h:210},cobaltBlue:{l:45,c:.55,h:210},indigo:{l:45,c:.25,h:280},deepIndigo:{l:30,c:.2,h:280},wildIndigo:{l:55,c:.3,h:275},twilightPurple:{l:40,c:.45,h:250},lavender:{l:75,c:.35,h:240},plumPurple:{l:45,c:.6,h:270},grassGreen:{l:70,c:.45,h:120},leafGreen:{l:75,c:.55,h:120},mossGreen:{l:50,c:.6,h:130},seaFoam:{l:80,c:.3,h:170},rainforest:{l:45,c:.6,h:130},pineGreen:{l:45,c:.65,h:140},appleGreen:{l:75,c:.45,h:120},oliveGreen:{l:55,c:.45,h:90},mossyRock:{l:45,c:.4,h:125},earthBrown:{l:45,c:.35,h:30},barkBrown:{l:40,c:.3,h:30},chocolate:{l:35,c:.5,h:30},sandBeige:{l:75,c:.15,h:40},desertTan:{l:80,c:.2,h:30},earthyOchre:{l:60,c:.5,h:40},sunsetOrange:{l:60,c:.6,h:40},leafYellow:{l:70,c:.45,h:60},wheatYellow:{l:75,c:.3,h:60},honeyYellow:{l:80,c:.35,h:50},lemonYellow:{l:85,c:.45,h:60},autumnRed:{l:60,c:.65,h:10},raspberryRed:{l:65,c:.7,h:0},firebrickRed:{l:55,c:.6,h:10},cranberryRed:{l:60,c:.55,h:0},coralPink:{l:80,c:.35,h:350},cherryBlossom:{l:85,c:.35,h:340},wildflowerPink:{l:80,c:.35,h:320},snowWhite:{l:100,c:.05,h:0},fogWhite:{l:90,c:.1,h:210},birchWhite:{l:90,c:.1,h:20},skyGrey:{l:60,c:.2,h:210},stoneGrey:{l:55,c:.2,h:10}};function l(a){return`oklch(${a.l}% ${a.c} ${a.h})`}var m={bg:l(k.snowWhite),bgSubtle:l(k.fogWhite),bgMuted:"oklch(95% 0.02 210)",bgInverse:l(k.slateBlue),fg:"oklch(20% 0.02 210)",fgSubtle:"oklch(35% 0.03 210)",fgMuted:l(k.skyGrey),fgInverse:l(k.snowWhite),border:"oklch(80% 0.02 210)",borderSubtle:"oklch(90% 0.01 210)",borderFocus:l(k.skyBlue),accent:l(k.skyBlue),accentHover:l(k.riverBlue),accentSubtle:"oklch(92% 0.08 210)",success:l(k.grassGreen),successSubtle:"oklch(92% 0.08 120)",warning:l(k.sunsetOrange),warningSubtle:"oklch(92% 0.08 40)",danger:l(k.cranberryRed),dangerSubtle:"oklch(92% 0.08 0)",info:l(k.riverBlue),infoSubtle:"oklch(92% 0.08 200)"},n={clear:m,earth:{bg:l(k.birchWhite),bgSubtle:l(k.sandBeige),bgMuted:"oklch(92% 0.04 30)",bgInverse:l(k.earthBrown),fg:"oklch(20% 0.03 30)",fgSubtle:"oklch(35% 0.04 30)",fgMuted:l(k.stoneGrey),fgInverse:l(k.birchWhite),border:"oklch(78% 0.04 30)",borderSubtle:"oklch(88% 0.02 30)",borderFocus:l(k.earthyOchre),accent:l(k.earthyOchre),accentHover:l(k.earthBrown),accentSubtle:"oklch(90% 0.08 40)",success:l(k.mossGreen),successSubtle:"oklch(90% 0.08 130)",warning:l(k.sunsetOrange),warningSubtle:"oklch(90% 0.08 40)",danger:l(k.autumnRed),dangerSubtle:"oklch(90% 0.08 10)",info:l(k.slateBlue),infoSubtle:"oklch(90% 0.08 210)"},twilight:{bg:l(k.deepIndigo),bgSubtle:"oklch(25% 0.15 270)",bgMuted:"oklch(22% 0.10 270)",bgInverse:l(k.fogWhite),fg:"oklch(92% 0.03 250)",fgSubtle:"oklch(78% 0.04 250)",fgMuted:"oklch(55% 0.08 260)",fgInverse:l(k.deepIndigo),border:"oklch(35% 0.08 270)",borderSubtle:"oklch(28% 0.06 270)",borderFocus:l(k.lavender),accent:l(k.lavender),accentHover:l(k.skyBlue),accentSubtle:"oklch(30% 0.12 250)",success:l(k.seaFoam),successSubtle:"oklch(28% 0.10 170)",warning:l(k.honeyYellow),warningSubtle:"oklch(28% 0.10 50)",danger:l(k.coralPink),dangerSubtle:"oklch(28% 0.10 350)",info:l(k.skyBlue),infoSubtle:"oklch(28% 0.10 210)"}};function o(a){let b={};for(let[c,d]of Object.entries(a)){let a=c.replace(/([A-Z])/g,"-$1").toLowerCase();b[`--renge-color-${a}`]=d}return b}var p={baseUnit:4,typeBase:16,scaleRatio:d,profile:"clear",variance:0,varianceSeed:"renge",includeReset:!1,selector:":root"};function q(a={}){let b={...p,...a},{baseUnit:c,typeBase:e,scaleRatio:j,profile:m,variance:r,varianceSeed:s,selector:t,includeReset:u}=b,v=r>0?function(a){let b=0;for(let c=0;c<a.length;c++){let d=a.charCodeAt(c);b=(b<<5)-b+d,b&=b}return function(){return b=Math.imul((b=Math.imul(b^b>>>16,0x85ebca6b))^b>>>13,0xc2b2ae35),((b^=b>>>16)>>>0)/0x100000000}}(s):void 0,w=function(a,b=0,c){let d={0:"0px"};return f.forEach((e,f)=>{let h=e*a;b>0&&c&&(h=g(h,b,c)),d[String(f+1)]=`${h}px`}),d}(c,r,v),x=function(a,b=d){let c={};for(let d of h){let e=a*Math.pow(b,d.exp);c[d.key]={fontSize:`${e}px`,lineHeight:d.lh}}return c}(e,j),y=function(a=0,b){let c={0:"0ms"};return f.slice(0,10).forEach((d,e)=>{let f=100*d;a>0&&b&&(f=g(f,a,b)),c[String(e+1)]=`${f}ms`}),c}(r,v),z=function(a,b=0,c){let d={none:"0px",full:"9999px"};return f.slice(0,5).forEach((e,f)=>{let h=e*a;b>0&&c&&(h=g(h,b,c)),d[String(f+1)]=`${h}px`}),d}(c,r,v),A=function(){let a={};for(let[b,c]of Object.entries(k)){let d=b.replace(/([A-Z])/g,"-$1").toLowerCase();a[`--renge-palette-${d}`]=l(c)}return a}(),B=o(n[m]),C={};for(let[a,b]of Object.entries(w))C[`--renge-space-${a}`]=b;for(let[a,{fontSize:b,lineHeight:c}]of Object.entries(x))C[`--renge-font-size-${a}`]=b,C[`--renge-line-height-${a}`]=c;for(let[a,b]of Object.entries(y))C[`--renge-duration-${a}`]=b;for(let[a,b]of Object.entries({linear:"linear","ease-out":"cubic-bezier(0.22, 1, 0.36, 1)","ease-in":"cubic-bezier(0.55, 0.055, 0.675, 0.19)","ease-in-out":"cubic-bezier(0.65, 0, 0.35, 1)",spring:"cubic-bezier(0.175, 0.885, 0.32, 1.275)"}))C[`--renge-easing-${a}`]=b;for(let[a,b]of Object.entries(z))C[`--renge-radius-${a}`]=b;for(let[a,b]of Object.entries(A))C[a]=b;for(let[a,b]of Object.entries(B))C[a]=b;for(let[a,b]of Object.entries(function(){let a={};for(let[b,c]of Object.entries(i))a[`--renge-animation-${b}`]=c.value;return a}()))C[a]=b;let D=function(a,b,c,d){let e=[];for(let{prefix:d,comment:f}of(c&&e.push(`*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
`),e.push(`${b} {`),[{prefix:"--renge-space-",comment:"/* Spacing */"},{prefix:"--renge-font-size-",comment:"/* Typography - Font Size */"},{prefix:"--renge-line-height-",comment:"/* Typography - Line Height */"},{prefix:"--renge-duration-",comment:"/* Motion - Duration */"},{prefix:"--renge-easing-",comment:"/* Motion - Easing */"},{prefix:"--renge-radius-",comment:"/* Border Radius */"},{prefix:"--renge-animation-",comment:"/* Animations */"},{prefix:"--renge-palette-",comment:"/* Palette Colors */"},{prefix:"--renge-color-",comment:"/* Semantic Colors */"}])){let b=Object.entries(a).filter(([a])=>a.startsWith(d)).sort(([a],[b])=>a.localeCompare(b,void 0,{numeric:!0}));if(b.length>0){for(let[a,c]of(e.push(`  ${f}`),b))e.push(`  ${a}: ${c};`);e.push("")}}return e.push("}"),d&&(e.push(""),e.push("/* Animation Keyframes */"),e.push(d)),e.join("\n")}(C,t,u,Object.values(i).map(a=>a.keyframes).join("\n\n"));return{config:b,vars:C,css:D}}a.s(["ANIMATION_NAMES",()=>j,"FIBONACCI",()=>f,"GOLDEN_ANGLE",()=>e,"PHI",()=>d,"createRengeTheme",()=>q,"createSemanticColorVars",()=>o,"profiles",()=>n],83103);let r=(0,c.createContext)({profile:"clear",setProfile:()=>{}});function s(){return(0,c.useContext)(r)}function t({children:a}){let[d,e]=(0,c.useState)("clear"),f=(0,c.useCallback)(a=>{e(a);let b=o(n[a]),c=document.documentElement;for(let[d,e]of(c.setAttribute("data-profile",a),Object.entries(b)))c.style.setProperty(d,e)},[]);return(0,c.useEffect)(()=>{f("clear")},[f]),(0,b.jsx)(r.Provider,{value:{profile:d,setProfile:f},children:a})}let u=[{id:"clear",label:"Clear",description:"Sky blue. Light. Airy."},{id:"earth",label:"Earth",description:"Ochre. Warm. Grounded."},{id:"twilight",label:"Twilight",description:"Indigo. Deep. Nocturnal."}];function v(){let{profile:a,setProfile:c}=s();return(0,b.jsx)("div",{style:{display:"flex",gap:"var(--renge-space-2)",alignItems:"center"},role:"radiogroup","aria-label":"Color profile",children:u.map(d=>{let e=a===d.id;return(0,b.jsx)("button",{role:"radio","aria-checked":e,onClick:()=>c(d.id),title:d.description,style:{padding:"var(--renge-space-2) var(--renge-space-4)",borderRadius:"var(--renge-radius-full)",border:`1px solid ${e?"var(--renge-color-accent)":"var(--renge-color-border)"}`,background:e?"var(--renge-color-accent-subtle)":"transparent",color:e?"var(--renge-color-accent)":"var(--renge-color-fg-muted)",fontSize:"var(--renge-font-size-sm)",fontFamily:"var(--font-body)",cursor:"pointer",letterSpacing:"0.05em",transition:"all 300ms var(--renge-easing-ease-out)"},children:d.label},d.id)})})}a.s(["ProfileProvider",()=>t,"ProfileToggle",()=>v,"useProfile",()=>s],3805)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__8818361f._.js.map