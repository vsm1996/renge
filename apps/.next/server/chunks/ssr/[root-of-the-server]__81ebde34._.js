module.exports=[77300,a=>{a.v({className:"dm_serif_display_27ec275a-module__ZmmmdG__className",variable:"dm_serif_display_27ec275a-module__ZmmmdG__variable"})},76259,a=>{a.v({className:"outfit_93ba0792-module__m0TUxW__className",variable:"outfit_93ba0792-module__m0TUxW__variable"})},63576,a=>{"use strict";var b=a.i(89138),c=a.i(77300);let d={className:c.default.className,style:{fontFamily:"'DM Serif Display', 'DM Serif Display Fallback'",fontWeight:400,fontStyle:"normal"}};null!=c.default.variable&&(d.variable=c.default.variable);var e=a.i(76259);let f={className:e.default.className,style:{fontFamily:"'Outfit', 'Outfit Fallback'",fontStyle:"normal"}};null!=e.default.variable&&(f.variable=e.default.variable);var g=(1+Math.sqrt(5))/2,h=[1,2,3,5,8,13,21,34,55,89];function i(a,b,c){return 0===b?a:a*(1+(c()-.5)*2*b)}var j=[{key:"xs",exp:-2,lh:"1.5"},{key:"sm",exp:-1,lh:"1.5"},{key:"base",exp:0,lh:"1.6"},{key:"lg",exp:1,lh:"1.4"},{key:"xl",exp:2,lh:"1.3"},{key:"2xl",exp:3,lh:"1.2"},{key:"3xl",exp:4,lh:"1.2"},{key:"4xl",exp:5,lh:"1.2"}],k={"vortex-reveal":{value:"rengeVortexReveal var(--renge-duration-9) cubic-bezier(0.4, 0.0, 0.6, 1) forwards",keyframes:`@keyframes rengeVortexReveal {
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
}`}};Object.keys(k);var l={skyBlue:{l:75,c:.35,h:210},oceanBlue:{l:50,c:.5,h:190},riverBlue:{l:60,c:.45,h:200},slateBlue:{l:50,c:.4,h:210},cobaltBlue:{l:45,c:.55,h:210},indigo:{l:45,c:.25,h:280},deepIndigo:{l:30,c:.2,h:280},wildIndigo:{l:55,c:.3,h:275},twilightPurple:{l:40,c:.45,h:250},lavender:{l:75,c:.35,h:240},plumPurple:{l:45,c:.6,h:270},grassGreen:{l:70,c:.45,h:120},leafGreen:{l:75,c:.55,h:120},mossGreen:{l:50,c:.6,h:130},seaFoam:{l:80,c:.3,h:170},rainforest:{l:45,c:.6,h:130},pineGreen:{l:45,c:.65,h:140},appleGreen:{l:75,c:.45,h:120},oliveGreen:{l:55,c:.45,h:90},mossyRock:{l:45,c:.4,h:125},earthBrown:{l:45,c:.35,h:30},barkBrown:{l:40,c:.3,h:30},chocolate:{l:35,c:.5,h:30},sandBeige:{l:75,c:.15,h:40},desertTan:{l:80,c:.2,h:30},earthyOchre:{l:60,c:.5,h:40},sunsetOrange:{l:60,c:.6,h:40},leafYellow:{l:70,c:.45,h:60},wheatYellow:{l:75,c:.3,h:60},honeyYellow:{l:80,c:.35,h:50},lemonYellow:{l:85,c:.45,h:60},autumnRed:{l:60,c:.65,h:10},raspberryRed:{l:65,c:.7,h:0},firebrickRed:{l:55,c:.6,h:10},cranberryRed:{l:60,c:.55,h:0},coralPink:{l:80,c:.35,h:350},cherryBlossom:{l:85,c:.35,h:340},wildflowerPink:{l:80,c:.35,h:320},snowWhite:{l:100,c:.05,h:0},fogWhite:{l:90,c:.1,h:210},birchWhite:{l:90,c:.1,h:20},skyGrey:{l:60,c:.2,h:210},stoneGrey:{l:55,c:.2,h:10}};function m(a){return`oklch(${a.l}% ${a.c} ${a.h})`}var n={bg:m(l.snowWhite),bgSubtle:m(l.fogWhite),bgMuted:"oklch(95% 0.02 210)",bgInverse:m(l.slateBlue),fg:"oklch(20% 0.02 210)",fgSubtle:"oklch(35% 0.03 210)",fgMuted:m(l.skyGrey),fgInverse:m(l.snowWhite),border:"oklch(80% 0.02 210)",borderSubtle:"oklch(90% 0.01 210)",borderFocus:m(l.skyBlue),accent:m(l.skyBlue),accentHover:m(l.riverBlue),accentSubtle:"oklch(92% 0.08 210)",success:m(l.grassGreen),successSubtle:"oklch(92% 0.08 120)",warning:m(l.sunsetOrange),warningSubtle:"oklch(92% 0.08 40)",danger:m(l.cranberryRed),dangerSubtle:"oklch(92% 0.08 0)",info:m(l.riverBlue),infoSubtle:"oklch(92% 0.08 200)"},o={clear:n,earth:{bg:m(l.birchWhite),bgSubtle:m(l.sandBeige),bgMuted:"oklch(92% 0.04 30)",bgInverse:m(l.earthBrown),fg:"oklch(20% 0.03 30)",fgSubtle:"oklch(35% 0.04 30)",fgMuted:m(l.stoneGrey),fgInverse:m(l.birchWhite),border:"oklch(78% 0.04 30)",borderSubtle:"oklch(88% 0.02 30)",borderFocus:m(l.earthyOchre),accent:m(l.earthyOchre),accentHover:m(l.earthBrown),accentSubtle:"oklch(90% 0.08 40)",success:m(l.mossGreen),successSubtle:"oklch(90% 0.08 130)",warning:m(l.sunsetOrange),warningSubtle:"oklch(90% 0.08 40)",danger:m(l.autumnRed),dangerSubtle:"oklch(90% 0.08 10)",info:m(l.slateBlue),infoSubtle:"oklch(90% 0.08 210)"},twilight:{bg:m(l.deepIndigo),bgSubtle:"oklch(25% 0.15 270)",bgMuted:"oklch(22% 0.10 270)",bgInverse:m(l.fogWhite),fg:"oklch(92% 0.03 250)",fgSubtle:"oklch(78% 0.04 250)",fgMuted:"oklch(55% 0.08 260)",fgInverse:m(l.deepIndigo),border:"oklch(35% 0.08 270)",borderSubtle:"oklch(28% 0.06 270)",borderFocus:m(l.lavender),accent:m(l.lavender),accentHover:m(l.skyBlue),accentSubtle:"oklch(30% 0.12 250)",success:m(l.seaFoam),successSubtle:"oklch(28% 0.10 170)",warning:m(l.honeyYellow),warningSubtle:"oklch(28% 0.10 50)",danger:m(l.coralPink),dangerSubtle:"oklch(28% 0.10 350)",info:m(l.skyBlue),infoSubtle:"oklch(28% 0.10 210)"}},p={baseUnit:4,typeBase:16,scaleRatio:g,profile:"clear",variance:0,varianceSeed:"renge",includeReset:!1,selector:":root"};function q({children:a}){let c=function(a="clear"){return function(a={}){let b={...p,...a},{baseUnit:c,typeBase:d,scaleRatio:e,profile:f,variance:n,varianceSeed:q,selector:r,includeReset:s}=b,t=n>0?function(a){let b=0;for(let c=0;c<a.length;c++){let d=a.charCodeAt(c);b=(b<<5)-b+d,b&=b}return function(){return b=Math.imul((b=Math.imul(b^b>>>16,0x85ebca6b))^b>>>13,0xc2b2ae35),((b^=b>>>16)>>>0)/0x100000000}}(q):void 0,u=function(a,b=0,c){let d={0:"0px"};return h.forEach((e,f)=>{let g=e*a;b>0&&c&&(g=i(g,b,c)),d[String(f+1)]=`${g}px`}),d}(c,n,t),v=function(a,b=g){let c={};for(let d of j){let e=a*Math.pow(b,d.exp);c[d.key]={fontSize:`${e}px`,lineHeight:d.lh}}return c}(d,e),w=function(a=0,b){let c={0:"0ms"};return h.slice(0,10).forEach((d,e)=>{let f=100*d;a>0&&b&&(f=i(f,a,b)),c[String(e+1)]=`${f}ms`}),c}(n,t),x=function(a,b=0,c){let d={none:"0px",full:"9999px"};return h.slice(0,5).forEach((e,f)=>{let g=e*a;b>0&&c&&(g=i(g,b,c)),d[String(f+1)]=`${g}px`}),d}(c,n,t),y=function(){let a={};for(let[b,c]of Object.entries(l)){let d=b.replace(/([A-Z])/g,"-$1").toLowerCase();a[`--renge-palette-${d}`]=m(c)}return a}(),z=function(a){let b={};for(let[c,d]of Object.entries(a)){let a=c.replace(/([A-Z])/g,"-$1").toLowerCase();b[`--renge-color-${a}`]=d}return b}(o[f]),A={};for(let[a,b]of Object.entries(u))A[`--renge-space-${a}`]=b;for(let[a,{fontSize:b,lineHeight:c}]of Object.entries(v))A[`--renge-font-size-${a}`]=b,A[`--renge-line-height-${a}`]=c;for(let[a,b]of Object.entries(w))A[`--renge-duration-${a}`]=b;for(let[a,b]of Object.entries({linear:"linear","ease-out":"cubic-bezier(0.22, 1, 0.36, 1)","ease-in":"cubic-bezier(0.55, 0.055, 0.675, 0.19)","ease-in-out":"cubic-bezier(0.65, 0, 0.35, 1)",spring:"cubic-bezier(0.175, 0.885, 0.32, 1.275)"}))A[`--renge-easing-${a}`]=b;for(let[a,b]of Object.entries(x))A[`--renge-radius-${a}`]=b;for(let[a,b]of Object.entries(y))A[a]=b;for(let[a,b]of Object.entries(z))A[a]=b;for(let[a,b]of Object.entries(function(){let a={};for(let[b,c]of Object.entries(k))a[`--renge-animation-${b}`]=c.value;return a}()))A[a]=b;let B=function(a,b,c,d){let e=[];for(let{prefix:d,comment:f}of(c&&e.push(`*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
`),e.push(`${b} {`),[{prefix:"--renge-space-",comment:"/* Spacing */"},{prefix:"--renge-font-size-",comment:"/* Typography - Font Size */"},{prefix:"--renge-line-height-",comment:"/* Typography - Line Height */"},{prefix:"--renge-duration-",comment:"/* Motion - Duration */"},{prefix:"--renge-easing-",comment:"/* Motion - Easing */"},{prefix:"--renge-radius-",comment:"/* Border Radius */"},{prefix:"--renge-animation-",comment:"/* Animations */"},{prefix:"--renge-palette-",comment:"/* Palette Colors */"},{prefix:"--renge-color-",comment:"/* Semantic Colors */"}])){let b=Object.entries(a).filter(([a])=>a.startsWith(d)).sort(([a],[b])=>a.localeCompare(b,void 0,{numeric:!0}));if(b.length>0){for(let[a,c]of(e.push(`  ${f}`),b))e.push(`  ${a}: ${c};`);e.push("")}}return e.push("}"),d&&(e.push(""),e.push("/* Animation Keyframes */"),e.push(d)),e.join("\n")}(A,r,s,Object.values(k).map(a=>a.keyframes).join("\n\n"));return{config:b,vars:A,css:B}}({profile:a}).css}("clear");return(0,b.jsxs)("html",{lang:"en",className:`${d.variable} ${f.variable}`,"data-profile":"clear",suppressHydrationWarning:!0,children:[(0,b.jsx)("head",{children:(0,b.jsx)("style",{dangerouslySetInnerHTML:{__html:c},"data-renge-tokens":!0})}),(0,b.jsx)("body",{children:a})]})}a.s(["default",()=>q,"metadata",0,{title:"Renge — Proportion as a First Principle",description:"A design system built on natural mathematics. PHI. Fibonacci. The ratios that appear in every living thing.",openGraph:{title:"Renge — Proportion as a First Principle",description:"A design system built on natural mathematics. PHI. Fibonacci. The ratios that appear in every living thing.",type:"website"}}],63576)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__81ebde34._.js.map