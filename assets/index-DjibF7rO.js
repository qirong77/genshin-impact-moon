var op=Object.defineProperty;var ap=(i,t,e)=>t in i?op(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var yr=(i,t,e)=>ap(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _c="174",Hr={ROTATE:0,DOLLY:1,PAN:2},Nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lp=0,uh=1,cp=2,Ou=1,hp=2,ai=3,Kn=0,Je=1,Ze=2,Pi=0,Di=1,Ps=2,dh=3,fh=4,up=5,er=100,dp=101,fp=102,pp=103,mp=104,_p=200,gp=201,vp=202,xp=203,ol=204,al=205,yp=206,Mp=207,Sp=208,Ep=209,bp=210,Tp=211,Ap=212,wp=213,Cp=214,ll=0,cl=1,hl=2,Kr=3,ul=4,dl=5,fl=6,pl=7,Bu=0,Rp=1,Pp=2,Li=0,Dp=1,Lp=2,Ip=3,Up=4,Fp=5,Np=6,Op=7,zu=300,jr=301,Jr=302,ml=303,_l=304,jo=306,gl=1e3,ir=1001,vl=1002,Bn=1003,Bp=1004,Qs=1005,Wn=1006,_a=1007,rr=1008,fi=1009,ku=1010,Hu=1011,Ds=1012,gc=1013,ur=1014,hi=1015,Gs=1016,vc=1017,xc=1018,Qr=1020,Gu=35902,Vu=1021,Wu=1022,On=1023,Xu=1024,Yu=1025,Gr=1026,ts=1027,$u=1028,yc=1029,qu=1030,Mc=1031,Sc=1033,To=33776,Ao=33777,wo=33778,Co=33779,xl=35840,yl=35841,Ml=35842,Sl=35843,El=36196,bl=37492,Tl=37496,Al=37808,wl=37809,Cl=37810,Rl=37811,Pl=37812,Dl=37813,Ll=37814,Il=37815,Ul=37816,Fl=37817,Nl=37818,Ol=37819,Bl=37820,zl=37821,Ro=36492,kl=36494,Hl=36495,Zu=36283,Gl=36284,Vl=36285,Wl=36286,zp=3200,kp=3201,Hp=0,Gp=1,Ti="",Ue="srgb",es="srgb-linear",zo="linear",Jt="srgb",Mr=7680,ph=519,Vp=512,Wp=513,Xp=514,Ku=515,Yp=516,$p=517,qp=518,Zp=519,mh=35044,_h="300 es",ui=2e3,ko=2001;class _r{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Po=Math.PI/180,Xl=180/Math.PI;function Vs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function Nt(i,t,e){return Math.max(t,Math.min(e,i))}function Kp(i,t){return(i%t+t)%t}function ga(i,t,e){return(1-e)*i+e*t}function _s(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const jp={DEG2RAD:Po};class Ut{constructor(t=0,e=0){Ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Nt(this.x,t.x,e.x),this.y=Nt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Nt(this.x,t,e),this.y=Nt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Nt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Nt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(t,e,n,r,s,o,a,l,c){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=r[0],m=r[3],f=r[6],b=r[1],E=r[4],v=r[7],A=r[2],C=r[5],T=r[8];return s[0]=o*_+a*b+l*A,s[3]=o*m+a*E+l*C,s[6]=o*f+a*v+l*T,s[1]=c*_+h*b+u*A,s[4]=c*m+h*E+u*C,s[7]=c*f+h*v+u*T,s[2]=d*_+p*b+g*A,s[5]=d*m+p*E+g*C,s[8]=d*f+p*v+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,p=c*s-o*l,g=e*u+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(r*c-h*n)*_,t[2]=(a*n-r*o)*_,t[3]=d*_,t[4]=(h*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(va.makeScale(t,e)),this}rotate(t){return this.premultiply(va.makeRotation(-t)),this}translate(t,e){return this.premultiply(va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const va=new Pt;function ju(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jp(){const i=Ls("canvas");return i.style.display="block",i}const gh={};function Ji(i){i in gh||(gh[i]=!0,console.warn(i))}function Qp(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function tm(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function em(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const vh=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xh=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nm(){const i={enabled:!0,workingColorSpace:es,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Jt&&(r.r=di(r.r),r.g=di(r.g),r.b=di(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Jt&&(r.r=Vr(r.r),r.g=Vr(r.g),r.b=Vr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ti?zo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[es]:{primaries:t,whitePoint:n,transfer:zo,toXYZ:vh,fromXYZ:xh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:Jt,toXYZ:vh,fromXYZ:xh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),i}const Yt=nm();function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Sr;class im{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Sr===void 0&&(Sr=Ls("canvas")),Sr.width=t.width,Sr.height=t.height;const n=Sr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Sr}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ls("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=di(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rm=0;class Ec{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=Vs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(xa(r[o].image)):s.push(xa(r[o]))}else s=xa(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function xa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?im.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sm=0;class We extends _r{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=ir,r=ir,s=Wn,o=rr,a=On,l=fi,c=We.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=Vs(),this.name="",this.source=new Ec(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gl:t.x=t.x-Math.floor(t.x);break;case ir:t.x=t.x<0?0:1;break;case vl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gl:t.y=t.y-Math.floor(t.y);break;case ir:t.y=t.y<0?0:1;break;case vl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=zu;We.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,r=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,v=(p+1)/2,A=(f+1)/2,C=(h+d)/4,T=(u+_)/4,R=(g+m)/4;return E>v&&E>A?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=C/n,s=T/n):v>A?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=C/r,s=R/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=T/s,r=R/s),this.set(n,r,s,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Nt(this.x,t.x,e.x),this.y=Nt(this.y,t.y,e.y),this.z=Nt(this.z,t.z,e.z),this.w=Nt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Nt(this.x,t,e),this.y=Nt(this.y,t,e),this.z=Nt(this.z,t,e),this.w=Nt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Nt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class om extends _r{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new We(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Ec(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dr extends om{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ju extends We{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class am extends We{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*_,b=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const A=Math.sqrt(E),C=Math.atan2(A,f*b);m=Math.sin(m*C)/A,a=Math.sin(a*C)/A}const v=a*b;if(l=l*m+d*v,c=c*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),d=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Nt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Nt(this.x,t.x,e.x),this.y=Nt(this.y,t.y,e.y),this.z=Nt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Nt(this.x,t,e),this.y=Nt(this.y,t,e),this.z=Nt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Nt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ya.copy(this).projectOnVector(t),this.sub(ya)}reflect(t){return this.sub(ya.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Nt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ya=new N,yh=new fr;class Ws{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,In):In.fromBufferAttribute(s,o),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),to.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox)),to.applyMatrix4(t.matrixWorld),this.union(to)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gs),eo.subVectors(this.max,gs),Er.subVectors(t.a,gs),br.subVectors(t.b,gs),Tr.subVectors(t.c,gs),vi.subVectors(br,Er),xi.subVectors(Tr,br),Wi.subVectors(Er,Tr);let e=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Wi.z,Wi.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Wi.z,0,-Wi.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Wi.y,Wi.x,0];return!Ma(e,Er,br,Tr,eo)||(e=[1,0,0,0,1,0,0,0,1],!Ma(e,Er,br,Tr,eo))?!1:(no.crossVectors(vi,xi),e=[no.x,no.y,no.z],Ma(e,Er,br,Tr,eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ni=[new N,new N,new N,new N,new N,new N,new N,new N],In=new N,to=new Ws,Er=new N,br=new N,Tr=new N,vi=new N,xi=new N,Wi=new N,gs=new N,eo=new N,no=new N,Xi=new N;function Ma(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Xi.fromArray(i,s);const a=r.x*Math.abs(Xi.x)+r.y*Math.abs(Xi.y)+r.z*Math.abs(Xi.z),l=t.dot(Xi),c=e.dot(Xi),h=n.dot(Xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const lm=new Ws,vs=new N,Sa=new N;class Jo{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):lm.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);const e=vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(vs,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(Sa)),this.expandByPoint(vs.copy(t.center).sub(Sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new N,Ea=new N,io=new N,yi=new N,ba=new N,ro=new N,Ta=new N;class Qo{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ea.copy(t).add(e).multiplyScalar(.5),io.copy(e).sub(t).normalize(),yi.copy(this.origin).sub(Ea);const s=t.distanceTo(e)*.5,o=-this.direction.dot(io),a=yi.dot(this.direction),l=-yi.dot(io),c=yi.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ea).addScaledVector(io,d),p}intersectSphere(t,e){ii.subVectors(t.center,this.origin);const n=ii.dot(this.direction),r=ii.dot(ii)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,r,s){ba.subVectors(e,t),ro.subVectors(n,t),Ta.crossVectors(ba,ro);let o=this.direction.dot(Ta),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,t);const l=a*this.direction.dot(ro.crossVectors(yi,ro));if(l<0)return null;const c=a*this.direction.dot(ba.cross(yi));if(c<0||l+c>o)return null;const h=-a*yi.dot(Ta);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,r,s,o,a,l,c,h,u,d,p,g,_,m){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,h,u,d,p,g,_,m)}set(t,e,n,r,s,o,a,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Ar.setFromMatrixColumn(t,0).length(),s=1/Ar.setFromMatrixColumn(t,1).length(),o=1/Ar.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cm,t,hm)}lookAt(t,e,n){const r=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Mi.crossVectors(n,ln),Mi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Mi.crossVectors(n,ln)),Mi.normalize(),so.crossVectors(ln,Mi),r[0]=Mi.x,r[4]=so.x,r[8]=ln.x,r[1]=Mi.y,r[5]=so.y,r[9]=ln.y,r[2]=Mi.z,r[6]=so.z,r[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],b=n[3],E=n[7],v=n[11],A=n[15],C=r[0],T=r[4],R=r[8],x=r[12],M=r[1],P=r[5],k=r[9],F=r[13],X=r[2],Y=r[6],G=r[10],$=r[14],H=r[3],et=r[7],at=r[11],mt=r[15];return s[0]=o*C+a*M+l*X+c*H,s[4]=o*T+a*P+l*Y+c*et,s[8]=o*R+a*k+l*G+c*at,s[12]=o*x+a*F+l*$+c*mt,s[1]=h*C+u*M+d*X+p*H,s[5]=h*T+u*P+d*Y+p*et,s[9]=h*R+u*k+d*G+p*at,s[13]=h*x+u*F+d*$+p*mt,s[2]=g*C+_*M+m*X+f*H,s[6]=g*T+_*P+m*Y+f*et,s[10]=g*R+_*k+m*G+f*at,s[14]=g*x+_*F+m*$+f*mt,s[3]=b*C+E*M+v*X+A*H,s[7]=b*T+E*P+v*Y+A*et,s[11]=b*R+E*k+v*G+A*at,s[15]=b*x+E*F+v*$+A*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+s*l*u-r*c*u-s*a*d+n*c*d+r*a*p-n*l*p)+_*(+e*l*p-e*c*d+s*o*d-r*o*p+r*c*h-s*l*h)+m*(+e*c*u-e*a*p-s*o*u+n*o*p+s*a*h-n*c*h)+f*(-r*a*h-e*l*u+e*a*d+r*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],b=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,E=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,v=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,A=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,C=e*b+n*E+r*v+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return t[0]=b*T,t[1]=(_*d*s-u*m*s-_*r*p+n*m*p+u*r*f-n*d*f)*T,t[2]=(a*m*s-_*l*s+_*r*c-n*m*c-a*r*f+n*l*f)*T,t[3]=(u*l*s-a*d*s-u*r*c+n*d*c+a*r*p-n*l*p)*T,t[4]=E*T,t[5]=(h*m*s-g*d*s+g*r*p-e*m*p-h*r*f+e*d*f)*T,t[6]=(g*l*s-o*m*s-g*r*c+e*m*c+o*r*f-e*l*f)*T,t[7]=(o*d*s-h*l*s+h*r*c-e*d*c-o*r*p+e*l*p)*T,t[8]=v*T,t[9]=(g*u*s-h*_*s-g*n*p+e*_*p+h*n*f-e*u*f)*T,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*f+e*a*f)*T,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*p-e*a*p)*T,t[12]=A*T,t[13]=(h*_*r-g*u*r+g*n*d-e*_*d-h*n*m+e*u*m)*T,t[14]=(g*a*r-o*_*r-g*n*l+e*_*l+o*n*m-e*a*m)*T,t[15]=(o*u*r-h*a*r+h*n*l-e*u*l-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,p=s*h,g=s*u,_=o*h,m=o*u,f=a*u,b=l*c,E=l*h,v=l*u,A=n.x,C=n.y,T=n.z;return r[0]=(1-(_+f))*A,r[1]=(p+v)*A,r[2]=(g-E)*A,r[3]=0,r[4]=(p-v)*C,r[5]=(1-(d+f))*C,r[6]=(m+b)*C,r[7]=0,r[8]=(g+E)*T,r[9]=(m-b)*T,r[10]=(1-(d+_))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Ar.set(r[0],r[1],r[2]).length();const o=Ar.set(r[4],r[5],r[6]).length(),a=Ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Un.copy(this);const c=1/s,h=1/o,u=1/a;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,e.setFromRotationMatrix(Un),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=ui){const l=this.elements,c=2*s/(e-t),h=2*s/(n-r),u=(e+t)/(e-t),d=(n+r)/(n-r);let p,g;if(a===ui)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ko)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=ui){const l=this.elements,c=1/(e-t),h=1/(n-r),u=1/(o-s),d=(e+t)*c,p=(n+r)*h;let g,_;if(a===ui)g=(o+s)*u,_=-2*u;else if(a===ko)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ar=new N,Un=new ce,cm=new N(0,0,0),hm=new N(1,1,1),Mi=new N,so=new N,ln=new N,Mh=new ce,Sh=new fr;class jn{constructor(t=0,e=0,n=0,r=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sh.setFromEuler(this),this.setFromQuaternion(Sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class bc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let um=0;const Eh=new N,wr=new fr,ri=new ce,oo=new N,xs=new N,dm=new N,fm=new fr,bh=new N(1,0,0),Th=new N(0,1,0),Ah=new N(0,0,1),wh={type:"added"},pm={type:"removed"},Cr={type:"childadded",child:null},Aa={type:"childremoved",child:null};class Qe extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DEFAULT_UP.clone();const t=new N,e=new jn,n=new fr,r=new N(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ce},normalMatrix:{value:new Pt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wr.setFromAxisAngle(t,e),this.quaternion.multiply(wr),this}rotateOnWorldAxis(t,e){return wr.setFromAxisAngle(t,e),this.quaternion.premultiply(wr),this}rotateX(t){return this.rotateOnAxis(bh,t)}rotateY(t){return this.rotateOnAxis(Th,t)}rotateZ(t){return this.rotateOnAxis(Ah,t)}translateOnAxis(t,e){return Eh.copy(t).applyQuaternion(this.quaternion),this.position.add(Eh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bh,t)}translateY(t){return this.translateOnAxis(Th,t)}translateZ(t){return this.translateOnAxis(Ah,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oo.copy(t):oo.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(xs,oo,this.up):ri.lookAt(oo,xs,this.up),this.quaternion.setFromRotationMatrix(ri),r&&(ri.extractRotation(r.matrixWorld),wr.setFromRotationMatrix(ri),this.quaternion.premultiply(wr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wh),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pm),Aa.child=t,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wh),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,dm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,fm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Qe.DEFAULT_UP=new N(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new N,si=new N,wa=new N,oi=new N,Rr=new N,Pr=new N,Ch=new N,Ca=new N,Ra=new N,Pa=new N,Da=new me,La=new me,Ia=new me;class Nn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Fn.subVectors(t,e),r.cross(Fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Fn.subVectors(r,e),si.subVectors(n,e),wa.subVectors(t,e);const o=Fn.dot(Fn),a=Fn.dot(si),l=Fn.dot(wa),c=si.dot(si),h=si.dot(wa),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Da.setScalar(0),La.setScalar(0),Ia.setScalar(0),Da.fromBufferAttribute(t,e),La.fromBufferAttribute(t,n),Ia.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Da,s.x),o.addScaledVector(La,s.y),o.addScaledVector(Ia,s.z),o}static isFrontFacing(t,e,n,r){return Fn.subVectors(n,e),si.subVectors(t,e),Fn.cross(si).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Fn.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Nn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Rr.subVectors(r,n),Pr.subVectors(s,n),Ca.subVectors(t,n);const l=Rr.dot(Ca),c=Pr.dot(Ca);if(l<=0&&c<=0)return e.copy(n);Ra.subVectors(t,r);const h=Rr.dot(Ra),u=Pr.dot(Ra);if(h>=0&&u<=h)return e.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Rr,o);Pa.subVectors(t,s);const p=Rr.dot(Pa),g=Pr.dot(Pa);if(g>=0&&p<=g)return e.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Pr,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ch.subVectors(s,r),a=(u-h)/(u-h+(p-g)),e.copy(r).addScaledVector(Ch,a);const f=1/(m+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(Rr,o).addScaledVector(Pr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},ao={h:0,s:0,l:0};function Ua(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Yt.workingColorSpace){if(t=Kp(t,1),e=Nt(e,0,1),n=Nt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ua(o,s,t+1/3),this.g=Ua(o,s,t),this.b=Ua(o,s,t-1/3)}return Yt.toWorkingColorSpace(this,r),this}setStyle(t,e=Ue){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=Qu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=Vr(t.r),this.g=Vr(t.g),this.b=Vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return Yt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Nt(Ie.r*255,0,255))*65536+Math.round(Nt(Ie.g*255,0,255))*256+Math.round(Nt(Ie.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,r=Ie.g,s=Ie.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Ue){Yt.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,r=Ie.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+e,Si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Si),t.getHSL(ao);const n=ga(Si.h,ao.h,e),r=ga(Si.s,ao.s,e),s=ga(Si.l,ao.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Ft;Ft.NAMES=Qu;let mm=0;class Xs extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=Vs(),this.name="",this.type="Material",this.blending=Di,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=al,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ol&&(n.blendSrc=this.blendSrc),this.blendDst!==al&&(n.blendDst=this.blendDst),this.blendEquation!==er&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ph&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Oi extends Xs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new N,lo=new Ut;let _m=0;class Ne{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_m++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=mh,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)lo.fromBufferAttribute(this,e),lo.applyMatrix3(t),this.setXY(e,lo.x,lo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_s(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_s(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_s(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_s(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),r=$e(r,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mh&&(t.usage=this.usage),t}}class td extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ed extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class wn extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}}let gm=0;const yn=new ce,Fa=new Qe,Dr=new N,cn=new Ws,ys=new Ws,Te=new N;class Rn extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ju(t)?ed:td)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Pt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return Fa.lookAt(t),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new wn(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors(cn.min,ys.min),cn.expandByPoint(Te),Te.addVectors(cn.max,ys.max),cn.expandByPoint(Te)):(cn.expandByPoint(ys.min),cn.expandByPoint(ys.max))}cn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Te.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Te));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Te.fromBufferAttribute(a,c),l&&(Dr.fromBufferAttribute(t,c),Te.add(Dr)),r=Math.max(r,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new N,l[R]=new N;const c=new N,h=new N,u=new N,d=new Ut,p=new Ut,g=new Ut,_=new N,m=new N;function f(R,x,M){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,x),g.fromBufferAttribute(s,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[R].add(_),a[x].add(_),a[M].add(_),l[R].add(m),l[x].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let R=0,x=b.length;R<x;++R){const M=b[R],P=M.start,k=M.count;for(let F=P,X=P+k;F<X;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const E=new N,v=new N,A=new N,C=new N;function T(R){A.fromBufferAttribute(r,R),C.copy(A);const x=a[R];E.copy(x),E.sub(A.multiplyScalar(A.dot(x))).normalize(),v.crossVectors(C,x);const P=v.dot(l[R])<0?-1:1;o.setXYZW(R,E.x,E.y,E.z,P)}for(let R=0,x=b.length;R<x;++R){const M=b[R],P=M.start,k=M.count;for(let F=P,X=P+k;F<X;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Ne(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Rn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rh=new ce,Yi=new Qo,co=new Jo,Ph=new N,ho=new N,uo=new N,fo=new N,Na=new N,po=new N,Dh=new N,mo=new N;class Ae extends Qe{constructor(t=new Rn,e=new Oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){po.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Na.fromBufferAttribute(u,t),o?po.addScaledVector(Na,h):po.addScaledVector(Na.sub(e),h))}e.add(po)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(s),Yi.copy(t.ray).recast(t.near),!(co.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(co,Ph)===null||Yi.origin.distanceToSquared(Ph)>(t.far-t.near)**2))&&(Rh.copy(s).invert(),Yi.copy(t.ray).applyMatrix4(Rh),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,A=E;v<A;v+=3){const C=a.getX(v),T=a.getX(v+1),R=a.getX(v+2);r=_o(this,f,t,n,c,h,u,C,T,R),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const b=a.getX(m),E=a.getX(m+1),v=a.getX(m+2);r=_o(this,o,t,n,c,h,u,b,E,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,A=E;v<A;v+=3){const C=v,T=v+1,R=v+2;r=_o(this,f,t,n,c,h,u,C,T,R),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const b=m,E=m+1,v=m+2;r=_o(this,o,t,n,c,h,u,b,E,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function vm(i,t,e,n,r,s,o,a){let l;if(t.side===Je?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Kn,a),l===null)return null;mo.copy(a),mo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(mo);return c<e.near||c>e.far?null:{distance:c,point:mo.clone(),object:i}}function _o(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,ho),i.getVertexPosition(l,uo),i.getVertexPosition(c,fo);const h=vm(i,t,e,n,ho,uo,fo,Dh);if(h){const u=new N;Nn.getBarycoord(Dh,ho,uo,fo,u),r&&(h.uv=Nn.getInterpolatedAttribute(r,a,l,c,u,new Ut)),s&&(h.uv1=Nn.getInterpolatedAttribute(s,a,l,c,u,new Ut)),o&&(h.normal=Nn.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};Nn.getNormal(ho,uo,fo,d.normal),h.face=d,h.barycoord=u}return h}class Ys extends Rn{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new wn(c,3)),this.setAttribute("normal",new wn(h,3)),this.setAttribute("uv",new wn(u,2));function g(_,m,f,b,E,v,A,C,T,R,x){const M=v/T,P=A/R,k=v/2,F=A/2,X=C/2,Y=T+1,G=R+1;let $=0,H=0;const et=new N;for(let at=0;at<G;at++){const mt=at*P-F;for(let Tt=0;Tt<Y;Tt++){const qt=Tt*M-k;et[_]=qt*b,et[m]=mt*E,et[f]=X,c.push(et.x,et.y,et.z),et[_]=0,et[m]=0,et[f]=C>0?1:-1,h.push(et.x,et.y,et.z),u.push(Tt/T),u.push(1-at/R),$+=1}}for(let at=0;at<R;at++)for(let mt=0;mt<T;mt++){const Tt=d+mt+Y*at,qt=d+mt+Y*(at+1),W=d+(mt+1)+Y*(at+1),Q=d+(mt+1)+Y*at;l.push(Tt,qt,Q),l.push(qt,W,Q),H+=6}a.addGroup(p,H,x),p+=H,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ys(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ns(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ge(i){const t={};for(let e=0;e<i.length;e++){const n=ns(i[e]);for(const r in n)t[r]=n[r]}return t}function xm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const ym={clone:ns,merge:Ge};var Mm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends Xs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mm,this.fragmentShader=Sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ns(t.uniforms),this.uniformsGroups=xm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class id extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=ui}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new N,Lh=new Ut,Ih=new Ut;class En extends id{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xl*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,Lh,Ih),e.subVectors(Ih,Lh)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Po*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Lr=-90,Ir=1;class Em extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(Lr,Ir,t,e);r.layers=this.layers,this.add(r);const s=new En(Lr,Ir,t,e);s.layers=this.layers,this.add(s);const o=new En(Lr,Ir,t,e);o.layers=this.layers,this.add(o);const a=new En(Lr,Ir,t,e);a.layers=this.layers,this.add(a);const l=new En(Lr,Ir,t,e);l.layers=this.layers,this.add(l);const c=new En(Lr,Ir,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===ui)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ko)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class rd extends We{constructor(t,e,n,r,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:jr,super(t,e,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bm extends dr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new rd(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ys(5,5,5),s=new sn({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:Pi});s.uniforms.tEquirect.value=e;const o=new Ae(r,s),a=e.minFilter;return e.minFilter===rr&&(e.minFilter=Wn),new Em(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}class dn extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tm={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tm)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new dn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Am extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ba=new N,wm=new N,Cm=new Pt;class bi{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ba.subVectors(n,e).cross(wm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ba),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Cm.getNormalMatrix(t),r=this.coplanarPoint(Ba).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new Jo,go=new N;class sd{constructor(t=new bi,e=new bi,n=new bi,r=new bi,s=new bi,o=new bi){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ui){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],f=r[12],b=r[13],E=r[14],v=r[15];if(n[0].setComponents(l-s,d-c,m-p,v-f).normalize(),n[1].setComponents(l+s,d+c,m+p,v+f).normalize(),n[2].setComponents(l+o,d+h,m+g,v+b).normalize(),n[3].setComponents(l-o,d-h,m-g,v-b).normalize(),n[4].setComponents(l-a,d-u,m-_,v-E).normalize(),e===ui)n[5].setComponents(l+a,d+u,m+_,v+E).normalize();else if(e===ko)n[5].setComponents(a,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(t){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(t.matrixWorld),this.intersectsSphere($i)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(go.x=r.normal.x>0?t.max.x:t.min.x,go.y=r.normal.y>0?t.max.y:t.min.y,go.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(go)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rm extends Xs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Uh=new ce,Yl=new Qo,vo=new Jo,xo=new N;class Tc extends Qe{constructor(t=new Rn,e=new Rm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(r),vo.radius+=s,t.ray.intersectsSphere(vo)===!1)return;Uh.copy(r).invert(),Yl.copy(t.ray).applyMatrix4(Uh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);xo.fromBufferAttribute(u,m),Fh(xo,m,l,r,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)xo.fromBufferAttribute(u,g),Fh(xo,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fh(i,t,e,n,r,s,o){const a=Yl.distanceSqToPoint(i);if(a<e){const l=new N;Yl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class od extends We{constructor(t,e,n,r,s,o,a,l,c,h=Gr){if(h!==Gr&&h!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Gr&&(n=ur),n===void 0&&h===ts&&(n=Qr),super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Bn,this.minFilter=l!==void 0?l:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ec(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class zn extends Rn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const b=f*d-o;for(let E=0;E<c;E++){const v=E*u-s;g.push(v,-b,0),_.push(0,0,1),m.push(E/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<a;b++){const E=b+c*f,v=b+c*(f+1),A=b+1+c*(f+1),C=b+1+c*f;p.push(E,v,C),p.push(v,A,C)}this.setIndex(p),this.setAttribute("position",new wn(g,3)),this.setAttribute("normal",new wn(_,3)),this.setAttribute("uv",new wn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zn(t.width,t.height,t.widthSegments,t.heightSegments)}}class ta extends Rn{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new N,d=new N,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const b=[],E=f/n;let v=0;f===0&&o===0?v=.5/e:f===n&&l===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const C=A/e;u.x=-t*Math.cos(r+C*s)*Math.sin(o+E*a),u.y=t*Math.cos(o+E*a),u.z=t*Math.sin(r+C*s)*Math.sin(o+E*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(C+v,1-E),b.push(c++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<e;b++){const E=h[f][b+1],v=h[f][b],A=h[f+1][b],C=h[f+1][b+1];(f!==0||o>0)&&p.push(E,v,C),(f!==n-1||l<Math.PI)&&p.push(v,A,C)}this.setIndex(p),this.setAttribute("position",new wn(g,3)),this.setAttribute("normal",new wn(_,3)),this.setAttribute("uv",new wn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ta(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pm extends Xs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Dm extends Xs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Nh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Lm{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Im=new Lm;class Ac{constructor(t){this.manager=t!==void 0?t:Im,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ac.DEFAULT_MATERIAL_NAME="__DEFAULT";class Um extends Ac{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Nh.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Ls("img");function l(){h(),Nh.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),r&&r(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class kn extends Ac{constructor(t){super(t)}load(t,e,n,r){const s=new We,o=new Um(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class Fm extends id{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Nm extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Om{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Oh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Oh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Oh(){return performance.now()}const Bh=new ce;class Bm{constructor(t,e,n=0,r=1/0){this.ray=new Qo(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new bc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Bh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bh),this}intersectObject(t,e=!0,n=[]){return $l(t,this,n,e),n.sort(zh),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)$l(t[r],this,n,e);return n.sort(zh),n}}function zh(i,t){return i.distance-t.distance}function $l(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)$l(s[o],t,e,!0)}}class kh{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Nt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class zm extends _r{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Hh(i,t,e,n){const r=km(n);switch(e){case Vu:return i*t;case Xu:return i*t;case Yu:return i*t*2;case $u:return i*t/r.components*r.byteLength;case yc:return i*t/r.components*r.byteLength;case qu:return i*t*2/r.components*r.byteLength;case Mc:return i*t*2/r.components*r.byteLength;case Wu:return i*t*3/r.components*r.byteLength;case On:return i*t*4/r.components*r.byteLength;case Sc:return i*t*4/r.components*r.byteLength;case To:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wo:case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yl:case Sl:return Math.max(i,16)*Math.max(t,8)/4;case xl:case Ml:return Math.max(i,8)*Math.max(t,8)/2;case El:case bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case zl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ro:case kl:case Hl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Zu:case Gl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Vl:case Wl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function km(i){switch(i){case fi:case ku:return{byteLength:1,components:1};case Ds:case Hu:case Gs:return{byteLength:2,components:1};case vc:case xc:return{byteLength:2,components:4};case ur:case gc:case hi:return{byteLength:4,components:1};case Gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_c}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_c);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ad(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Hm(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Gm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Km=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,e_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,n_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,u_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,d_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,f_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,p_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,__=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v_="gl_FragColor = linearToOutputTexel( gl_FragColor );",x_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,S_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,T_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,P_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,U_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,F_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,k_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,H_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,G_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,V_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,j_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ng=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ig=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,og=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_g=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ag=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ug=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ng=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,o0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,l0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,d0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,x0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Lt={alphahash_fragment:Gm,alphahash_pars_fragment:Vm,alphamap_fragment:Wm,alphamap_pars_fragment:Xm,alphatest_fragment:Ym,alphatest_pars_fragment:$m,aomap_fragment:qm,aomap_pars_fragment:Zm,batching_pars_vertex:Km,batching_vertex:jm,begin_vertex:Jm,beginnormal_vertex:Qm,bsdfs:t_,iridescence_fragment:e_,bumpmap_pars_fragment:n_,clipping_planes_fragment:i_,clipping_planes_pars_fragment:r_,clipping_planes_pars_vertex:s_,clipping_planes_vertex:o_,color_fragment:a_,color_pars_fragment:l_,color_pars_vertex:c_,color_vertex:h_,common:u_,cube_uv_reflection_fragment:d_,defaultnormal_vertex:f_,displacementmap_pars_vertex:p_,displacementmap_vertex:m_,emissivemap_fragment:__,emissivemap_pars_fragment:g_,colorspace_fragment:v_,colorspace_pars_fragment:x_,envmap_fragment:y_,envmap_common_pars_fragment:M_,envmap_pars_fragment:S_,envmap_pars_vertex:E_,envmap_physical_pars_fragment:U_,envmap_vertex:b_,fog_vertex:T_,fog_pars_vertex:A_,fog_fragment:w_,fog_pars_fragment:C_,gradientmap_pars_fragment:R_,lightmap_pars_fragment:P_,lights_lambert_fragment:D_,lights_lambert_pars_fragment:L_,lights_pars_begin:I_,lights_toon_fragment:F_,lights_toon_pars_fragment:N_,lights_phong_fragment:O_,lights_phong_pars_fragment:B_,lights_physical_fragment:z_,lights_physical_pars_fragment:k_,lights_fragment_begin:H_,lights_fragment_maps:G_,lights_fragment_end:V_,logdepthbuf_fragment:W_,logdepthbuf_pars_fragment:X_,logdepthbuf_pars_vertex:Y_,logdepthbuf_vertex:$_,map_fragment:q_,map_pars_fragment:Z_,map_particle_fragment:K_,map_particle_pars_fragment:j_,metalnessmap_fragment:J_,metalnessmap_pars_fragment:Q_,morphinstance_vertex:tg,morphcolor_vertex:eg,morphnormal_vertex:ng,morphtarget_pars_vertex:ig,morphtarget_vertex:rg,normal_fragment_begin:sg,normal_fragment_maps:og,normal_pars_fragment:ag,normal_pars_vertex:lg,normal_vertex:cg,normalmap_pars_fragment:hg,clearcoat_normal_fragment_begin:ug,clearcoat_normal_fragment_maps:dg,clearcoat_pars_fragment:fg,iridescence_pars_fragment:pg,opaque_fragment:mg,packing:_g,premultiplied_alpha_fragment:gg,project_vertex:vg,dithering_fragment:xg,dithering_pars_fragment:yg,roughnessmap_fragment:Mg,roughnessmap_pars_fragment:Sg,shadowmap_pars_fragment:Eg,shadowmap_pars_vertex:bg,shadowmap_vertex:Tg,shadowmask_pars_fragment:Ag,skinbase_vertex:wg,skinning_pars_vertex:Cg,skinning_vertex:Rg,skinnormal_vertex:Pg,specularmap_fragment:Dg,specularmap_pars_fragment:Lg,tonemapping_fragment:Ig,tonemapping_pars_fragment:Ug,transmission_fragment:Fg,transmission_pars_fragment:Ng,uv_pars_fragment:Og,uv_pars_vertex:Bg,uv_vertex:zg,worldpos_vertex:kg,background_vert:Hg,background_frag:Gg,backgroundCube_vert:Vg,backgroundCube_frag:Wg,cube_vert:Xg,cube_frag:Yg,depth_vert:$g,depth_frag:qg,distanceRGBA_vert:Zg,distanceRGBA_frag:Kg,equirect_vert:jg,equirect_frag:Jg,linedashed_vert:Qg,linedashed_frag:t0,meshbasic_vert:e0,meshbasic_frag:n0,meshlambert_vert:i0,meshlambert_frag:r0,meshmatcap_vert:s0,meshmatcap_frag:o0,meshnormal_vert:a0,meshnormal_frag:l0,meshphong_vert:c0,meshphong_frag:h0,meshphysical_vert:u0,meshphysical_frag:d0,meshtoon_vert:f0,meshtoon_frag:p0,points_vert:m0,points_frag:_0,shadow_vert:g0,shadow_frag:v0,sprite_vert:x0,sprite_frag:y0},nt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},Gn={basic:{uniforms:Ge([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:Ge([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:Ge([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:Ge([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:Ge([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:Ge([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:Ge([nt.points,nt.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:Ge([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:Ge([nt.common,nt.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:Ge([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:Ge([nt.sprite,nt.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Lt.backgroundCube_vert,fragmentShader:Lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distanceRGBA:{uniforms:Ge([nt.common,nt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distanceRGBA_vert,fragmentShader:Lt.distanceRGBA_frag},shadow:{uniforms:Ge([nt.lights,nt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};Gn.physical={uniforms:Ge([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};const yo={r:0,b:0,g:0},qi=new jn,M0=new ce;function S0(i,t,e,n,r,s,o){const a=new Ft(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?e:t).get(v)),v}function _(E){let v=!1;const A=g(E);A===null?f(a,l):A&&A.isColor&&(f(A,1),v=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===jo)?(h===void 0&&(h=new Ae(new Ys(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:ns(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),qi.copy(v.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(M0.makeRotationFromEuler(qi)),h.material.toneMapped=Yt.getTransfer(A.colorSpace)!==Jt,(u!==A||d!==A.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Ae(new zn(2,2),new sn({name:"BackgroundMaterial",uniforms:ns(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(A.colorSpace)!==Jt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,v){E.getRGB(yo,nd(i)),n.buffers.color.setClear(yo.r,yo.g,yo.b,v,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,v=1){a.set(E),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(a,l)},render:_,addToRenderList:m,dispose:b}}function E0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(M,P,k,F,X){let Y=!1;const G=u(F,k,P);s!==G&&(s=G,c(s.object)),Y=p(M,F,k,X),Y&&g(M,F,k,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(M,P,k,F),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,P,k){const F=k.wireframe===!0;let X=n[M.id];X===void 0&&(X={},n[M.id]=X);let Y=X[P.id];Y===void 0&&(Y={},X[P.id]=Y);let G=Y[F];return G===void 0&&(G=d(l()),Y[F]=G),G}function d(M){const P=[],k=[],F=[];for(let X=0;X<e;X++)P[X]=0,k[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:F,object:M,attributes:{},index:null}}function p(M,P,k,F){const X=s.attributes,Y=P.attributes;let G=0;const $=k.getAttributes();for(const H in $)if($[H].location>=0){const at=X[H];let mt=Y[H];if(mt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(mt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(mt=M.instanceColor)),at===void 0||at.attribute!==mt||mt&&at.data!==mt.data)return!0;G++}return s.attributesNum!==G||s.index!==F}function g(M,P,k,F){const X={},Y=P.attributes;let G=0;const $=k.getAttributes();for(const H in $)if($[H].location>=0){let at=Y[H];at===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(at=M.instanceColor));const mt={};mt.attribute=at,at&&at.data&&(mt.data=at.data),X[H]=mt,G++}s.attributes=X,s.attributesNum=G,s.index=F}function _(){const M=s.newAttributes;for(let P=0,k=M.length;P<k;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){const k=s.newAttributes,F=s.enabledAttributes,X=s.attributeDivisors;k[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),X[M]!==P&&(i.vertexAttribDivisor(M,P),X[M]=P)}function b(){const M=s.newAttributes,P=s.enabledAttributes;for(let k=0,F=P.length;k<F;k++)P[k]!==M[k]&&(i.disableVertexAttribArray(k),P[k]=0)}function E(M,P,k,F,X,Y,G){G===!0?i.vertexAttribIPointer(M,P,k,X,Y):i.vertexAttribPointer(M,P,k,F,X,Y)}function v(M,P,k,F){_();const X=F.attributes,Y=k.getAttributes(),G=P.defaultAttributeValues;for(const $ in Y){const H=Y[$];if(H.location>=0){let et=X[$];if(et===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(et=M.instanceColor)),et!==void 0){const at=et.normalized,mt=et.itemSize,Tt=t.get(et);if(Tt===void 0)continue;const qt=Tt.buffer,W=Tt.type,Q=Tt.bytesPerElement,_t=W===i.INT||W===i.UNSIGNED_INT||et.gpuType===gc;if(et.isInterleavedBufferAttribute){const st=et.data,St=st.stride,$t=et.offset;if(st.isInstancedInterleavedBuffer){for(let bt=0;bt<H.locationSize;bt++)f(H.location+bt,st.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let bt=0;bt<H.locationSize;bt++)m(H.location+bt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let bt=0;bt<H.locationSize;bt++)E(H.location+bt,mt/H.locationSize,W,at,St*Q,($t+mt/H.locationSize*bt)*Q,_t)}else{if(et.isInstancedBufferAttribute){for(let st=0;st<H.locationSize;st++)f(H.location+st,et.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let st=0;st<H.locationSize;st++)m(H.location+st);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let st=0;st<H.locationSize;st++)E(H.location+st,mt/H.locationSize,W,at,mt*Q,mt/H.locationSize*st*Q,_t)}}else if(G!==void 0){const at=G[$];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(H.location,at);break;case 3:i.vertexAttrib3fv(H.location,at);break;case 4:i.vertexAttrib4fv(H.location,at);break;default:i.vertexAttrib1fv(H.location,at)}}}}b()}function A(){R();for(const M in n){const P=n[M];for(const k in P){const F=P[k];for(const X in F)h(F[X].object),delete F[X];delete P[k]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const k in P){const F=P[k];for(const X in F)h(F[X].object),delete F[X];delete P[k]}delete n[M.id]}function T(M){for(const P in n){const k=n[P];if(k[M.id]===void 0)continue;const F=k[M.id];for(const X in F)h(F[X].object),delete F[X];delete k[M.id]}}function R(){x(),o=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function b0(i,t,e){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function T0(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==On&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===Gs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==fi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==hi&&!R)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:A,maxSamples:C}}function A0(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new bi,a=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||r;return r=d,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const b=s?0:n,E=b*4;let v=f.clippingState||null;l.value=v,v=h(g,d,E,p);for(let A=0;A!==E;++A)v[A]=e[A];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,v=p;E!==_;++E,v+=4)o.copy(u[E]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function w0(i){let t=new WeakMap;function e(o,a){return a===ml?o.mapping=jr:a===_l&&(o.mapping=Jr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ml||a===_l)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bm(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Or=4,Gh=[.125,.215,.35,.446,.526,.582],nr=20,za=new Fm,Vh=new Ft;let ka=null,Ha=0,Ga=0,Va=!1;const Qi=(1+Math.sqrt(5))/2,Ur=1/Qi,Wh=[new N(-Qi,Ur,0),new N(Qi,Ur,0),new N(-Ur,0,Qi),new N(Ur,0,Qi),new N(0,Qi,-Ur),new N(0,Qi,Ur),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],C0=new N;class Xh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=C0}=s;ka=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ka,Ha,Ga),this._renderer.xr.enabled=Va,t.scissorTest=!1,Mo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===jr||t.mapping===Jr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ka=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Gs,format:On,colorSpace:es,depthBuffer:!1},r=Yh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=R0(s)),this._blurMaterial=P0(s,t,e)}return r}_compileMaterial(t){const e=new Ae(this._lodPlanes[0],t);this._renderer.compile(e,za)}_sceneToCubeUV(t,e,n,r,s){const l=new En(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Vh),u.toneMapping=Li,u.autoClear=!1;const g=new Oi({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),_=new Ae(new Ys,g);let m=!1;const f=t.background;f?f.isColor&&(g.color.copy(f),t.background=null,m=!0):(g.color.copy(Vh),m=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[b],s.y,s.z)):E===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[b]));const v=this._cubeSize;Mo(r,E*v,b>2?v:0,v,v),u.setRenderTarget(r),m&&u.render(_,l),u.render(t,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===jr||t.mapping===Jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$h());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ae(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Mo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,za)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Wh[(r-s-1)%Wh.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ae(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*nr-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):nr;m>nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${nr}`);const f=[];let b=0;for(let T=0;T<nr;++T){const R=T/_,x=Math.exp(-R*R/2);f.push(x),T===0?b+=x:T<m&&(b+=2*x)}for(let T=0;T<f.length;T++)f[T]=f[T]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const v=this._sizeLods[r],A=3*v*(r>E-Or?r-E+Or:0),C=4*(this._cubeSize-v);Mo(e,A,C,3*v,2*v),l.setRenderTarget(e),l.render(u,za)}}function R0(i){const t=[],e=[],n=[];let r=i;const s=i-Or+1+Gh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Or?l=Gh[o-i+Or-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,b=new Float32Array(_*g*p),E=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let C=0;C<p;C++){const T=C%3*2/3-1,R=C>2?0:-1,x=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];b.set(x,_*g*C),E.set(d,m*g*C);const M=[C,C,C,C,C,C];v.set(M,f*g*C)}const A=new Rn;A.setAttribute("position",new Ne(b,_)),A.setAttribute("uv",new Ne(E,m)),A.setAttribute("faceIndex",new Ne(v,f)),t.push(A),r>Or&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Yh(i,t,e){const n=new dr(i,t,e);return n.texture.mapping=jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mo(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function P0(i,t,e){const n=new Float32Array(nr),r=new N(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function $h(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function qh(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function D0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ml||l===_l,h=l===jr||l===Jr;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Xh(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(e===null&&(e=new Xh(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function L0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Ji("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function I0(i,t,e,n){const r={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const b=p.array;_=p.version;for(let E=0,v=b.length;E<v;E+=3){const A=b[E+0],C=b[E+1],T=b[E+2];d.push(A,C,C,T,T,A)}}else if(g!==void 0){const b=g.array;_=g.version;for(let E=0,v=b.length/3-1;E<v;E+=3){const A=E+0,C=E+1,T=E+2;d.push(A,C,C,T,T,A)}}else return;const m=new(ju(d)?ed:td)(d,1);m.version=_;const f=s.get(u);f&&t.remove(f),s.set(u,m)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function U0(i,t,e){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,s,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,_,0,g);let f=0;for(let b=0;b<g;b++)f+=p[b]*_[b];e.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function F0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function N0(i,t,e){const n=new WeakMap,r=new me;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let A=a.attributes.position.count*v,C=1;A>t.maxTextureSize&&(C=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const T=new Float32Array(A*C*4*u),R=new Ju(T,A,C,u);R.type=hi,R.needsUpdate=!0;const x=v*4;for(let P=0;P<u;P++){const k=f[P],F=b[P],X=E[P],Y=A*C*4*P;for(let G=0;G<k.count;G++){const $=G*x;g===!0&&(r.fromBufferAttribute(k,G),T[Y+$+0]=r.x,T[Y+$+1]=r.y,T[Y+$+2]=r.z,T[Y+$+3]=0),_===!0&&(r.fromBufferAttribute(F,G),T[Y+$+4]=r.x,T[Y+$+5]=r.y,T[Y+$+6]=r.z,T[Y+$+7]=0),m===!0&&(r.fromBufferAttribute(X,G),T[Y+$+8]=r.x,T[Y+$+9]=r.y,T[Y+$+10]=r.z,T[Y+$+11]=X.itemSize===4?r.w:1)}}d={count:u,texture:R,size:new Ut(A,C)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function O0(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const ld=new We,Zh=new od(1,1),cd=new Ju,hd=new am,ud=new rd,Kh=[],jh=[],Jh=new Float32Array(16),Qh=new Float32Array(9),tu=new Float32Array(4);function hs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Kh[r];if(s===void 0&&(s=new Float32Array(r),Kh[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ea(i,t){let e=jh[t];e===void 0&&(e=new Int32Array(t),jh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function B0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function k0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function H0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function G0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,n))return;tu.set(n),i.uniformMatrix2fv(this.addr,!1,tu),be(e,n)}}function V0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,n))return;Qh.set(n),i.uniformMatrix3fv(this.addr,!1,Qh),be(e,n)}}function W0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,n))return;Jh.set(n),i.uniformMatrix4fv(this.addr,!1,Jh),be(e,n)}}function X0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Y0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function $0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function Z0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function K0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function j0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function J0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function Q0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Zh.compareFunction=Ku,s=Zh):s=ld,e.setTexture2D(t||s,r)}function tv(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||hd,r)}function ev(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||ud,r)}function nv(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||cd,r)}function iv(i){switch(i){case 5126:return B0;case 35664:return z0;case 35665:return k0;case 35666:return H0;case 35674:return G0;case 35675:return V0;case 35676:return W0;case 5124:case 35670:return X0;case 35667:case 35671:return Y0;case 35668:case 35672:return $0;case 35669:case 35673:return q0;case 5125:return Z0;case 36294:return K0;case 36295:return j0;case 36296:return J0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return tv;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return nv}}function rv(i,t){i.uniform1fv(this.addr,t)}function sv(i,t){const e=hs(t,this.size,2);i.uniform2fv(this.addr,e)}function ov(i,t){const e=hs(t,this.size,3);i.uniform3fv(this.addr,e)}function av(i,t){const e=hs(t,this.size,4);i.uniform4fv(this.addr,e)}function lv(i,t){const e=hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cv(i,t){const e=hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function hv(i,t){const e=hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function uv(i,t){i.uniform1iv(this.addr,t)}function dv(i,t){i.uniform2iv(this.addr,t)}function fv(i,t){i.uniform3iv(this.addr,t)}function pv(i,t){i.uniform4iv(this.addr,t)}function mv(i,t){i.uniform1uiv(this.addr,t)}function _v(i,t){i.uniform2uiv(this.addr,t)}function gv(i,t){i.uniform3uiv(this.addr,t)}function vv(i,t){i.uniform4uiv(this.addr,t)}function xv(i,t,e){const n=this.cache,r=t.length,s=ea(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||ld,s[o])}function yv(i,t,e){const n=this.cache,r=t.length,s=ea(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||hd,s[o])}function Mv(i,t,e){const n=this.cache,r=t.length,s=ea(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||ud,s[o])}function Sv(i,t,e){const n=this.cache,r=t.length,s=ea(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||cd,s[o])}function Ev(i){switch(i){case 5126:return rv;case 35664:return sv;case 35665:return ov;case 35666:return av;case 35674:return lv;case 35675:return cv;case 35676:return hv;case 5124:case 35670:return uv;case 35667:case 35671:return dv;case 35668:case 35672:return fv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return _v;case 36295:return gv;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return xv;case 35679:case 36299:case 36307:return yv;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return Sv}}class bv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=iv(e.type)}}class Tv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ev(e.type)}}class Av{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Wa=/(\w+)(\])?(\[|\.)?/g;function eu(i,t){i.seq.push(t),i.map[t.id]=t}function wv(i,t,e){const n=i.name,r=n.length;for(Wa.lastIndex=0;;){const s=Wa.exec(n),o=Wa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){eu(e,c===void 0?new bv(a,i,t):new Tv(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Av(a),eu(e,u)),e=u}}}class Do{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);wv(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function nu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Cv=37297;let Rv=0;function Pv(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const iu=new Pt;function Dv(i){Yt._getMatrix(iu,Yt.workingColorSpace,i);const t=`mat3( ${iu.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case zo:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ru(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Pv(i.getShaderSource(t),o)}else return r}function Lv(i,t){const e=Dv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Iv(i,t){let e;switch(t){case Dp:e="Linear";break;case Lp:e="Reinhard";break;case Ip:e="Cineon";break;case Up:e="ACESFilmic";break;case Np:e="AgX";break;case Op:e="Neutral";break;case Fp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const So=new N;function Uv(){Yt.getLuminanceCoefficients(So);const i=So.x.toFixed(4),t=So.y.toFixed(4),e=So.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function Nv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ov(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ss(i){return i!==""}function su(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ou(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Bv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(i){return i.replace(Bv,kv)}const zv=new Map;function kv(i,t){let e=Lt[t];if(e===void 0){const n=zv.get(t);if(n!==void 0)e=Lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ql(e)}const Hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function au(i){return i.replace(Hv,Gv)}function Gv(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Vv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ou?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===hp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ai&&(t="SHADOWMAP_TYPE_VSM"),t}function Wv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case jr:case Jr:t="ENVMAP_TYPE_CUBE";break;case jo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Jr:t="ENVMAP_MODE_REFRACTION";break}return t}function Yv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bu:t="ENVMAP_BLENDING_MULTIPLY";break;case Rp:t="ENVMAP_BLENDING_MIX";break;case Pp:t="ENVMAP_BLENDING_ADD";break}return t}function $v(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function qv(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Vv(e),c=Wv(e),h=Xv(e),u=Yv(e),d=$v(e),p=Fv(e),g=Nv(s),_=r.createProgram();let m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ss).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ss).join(`
`),f.length>0&&(f+=`
`)):(m=[lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),f=[lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Li?"#define TONE_MAPPING":"",e.toneMapping!==Li?Lt.tonemapping_pars_fragment:"",e.toneMapping!==Li?Iv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Lt.colorspace_pars_fragment,Lv("linearToOutputTexel",e.outputColorSpace),Uv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ss).join(`
`)),o=ql(o),o=su(o,e),o=ou(o,e),a=ql(a),a=su(a,e),a=ou(a,e),o=au(o),a=au(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===_h?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=b+m+o,v=b+f+a,A=nu(r,r.VERTEX_SHADER,E),C=nu(r,r.FRAGMENT_SHADER,v);r.attachShader(_,A),r.attachShader(_,C),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(P){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(A).trim(),X=r.getShaderInfoLog(C).trim();let Y=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,A,C);else{const $=ru(r,A,"vertex"),H=ru(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+$+`
`+H)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||X==="")&&(G=!1);G&&(P.diagnostics={runnable:Y,programLog:k,vertexShader:{log:F,prefix:m},fragmentShader:{log:X,prefix:f}})}r.deleteShader(A),r.deleteShader(C),R=new Do(r,_),x=Ov(r,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,Cv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=C,this}let Zv=0;class Kv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new jv(t),e.set(t,n)),n}}class jv{constructor(t){this.id=Zv++,this.code=t,this.usedTimes=0}}function Jv(i,t,e,n,r,s,o){const a=new bc,l=new Kv,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,M,P,k,F){const X=k.fog,Y=F.geometry,G=x.isMeshStandardMaterial?k.environment:null,$=(x.isMeshStandardMaterial?e:t).get(x.envMap||G),H=$&&$.mapping===jo?$.image.height:null,et=g[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const at=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,mt=at!==void 0?at.length:0;let Tt=0;Y.morphAttributes.position!==void 0&&(Tt=1),Y.morphAttributes.normal!==void 0&&(Tt=2),Y.morphAttributes.color!==void 0&&(Tt=3);let qt,W,Q,_t;if(et){const jt=Gn[et];qt=jt.vertexShader,W=jt.fragmentShader}else qt=x.vertexShader,W=x.fragmentShader,l.update(x),Q=l.getVertexShaderID(x),_t=l.getFragmentShaderID(x);const st=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),$t=F.isInstancedMesh===!0,bt=F.isBatchedMesh===!0,fe=!!x.map,oe=!!x.matcap,zt=!!$,D=!!x.aoMap,gn=!!x.lightMap,kt=!!x.bumpMap,Ht=!!x.normalMap,xt=!!x.displacementMap,ie=!!x.emissiveMap,vt=!!x.metalnessMap,w=!!x.roughnessMap,y=x.anisotropy>0,O=x.clearcoat>0,Z=x.dispersion>0,j=x.iridescence>0,q=x.sheen>0,gt=x.transmission>0,ot=y&&!!x.anisotropyMap,ut=O&&!!x.clearcoatMap,Vt=O&&!!x.clearcoatNormalMap,tt=O&&!!x.clearcoatRoughnessMap,dt=j&&!!x.iridescenceMap,Et=j&&!!x.iridescenceThicknessMap,At=q&&!!x.sheenColorMap,ft=q&&!!x.sheenRoughnessMap,Gt=!!x.specularMap,Dt=!!x.specularColorMap,ne=!!x.specularIntensityMap,L=gt&&!!x.transmissionMap,it=gt&&!!x.thicknessMap,V=!!x.gradientMap,K=!!x.alphaMap,ct=x.alphaTest>0,lt=!!x.alphaHash,Rt=!!x.extensions;let he=Li;x.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(he=i.toneMapping);const De={shaderID:et,shaderType:x.type,shaderName:x.name,vertexShader:qt,fragmentShader:W,defines:x.defines,customVertexShaderID:Q,customFragmentShaderID:_t,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:bt,batchingColor:bt&&F._colorsTexture!==null,instancing:$t,instancingColor:$t&&F.instanceColor!==null,instancingMorph:$t&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:es,alphaToCoverage:!!x.alphaToCoverage,map:fe,matcap:oe,envMap:zt,envMapMode:zt&&$.mapping,envMapCubeUVHeight:H,aoMap:D,lightMap:gn,bumpMap:kt,normalMap:Ht,displacementMap:d&&xt,emissiveMap:ie,normalMapObjectSpace:Ht&&x.normalMapType===Gp,normalMapTangentSpace:Ht&&x.normalMapType===Hp,metalnessMap:vt,roughnessMap:w,anisotropy:y,anisotropyMap:ot,clearcoat:O,clearcoatMap:ut,clearcoatNormalMap:Vt,clearcoatRoughnessMap:tt,dispersion:Z,iridescence:j,iridescenceMap:dt,iridescenceThicknessMap:Et,sheen:q,sheenColorMap:At,sheenRoughnessMap:ft,specularMap:Gt,specularColorMap:Dt,specularIntensityMap:ne,transmission:gt,transmissionMap:L,thicknessMap:it,gradientMap:V,opaque:x.transparent===!1&&x.blending===Di&&x.alphaToCoverage===!1,alphaMap:K,alphaTest:ct,alphaHash:lt,combine:x.combine,mapUv:fe&&_(x.map.channel),aoMapUv:D&&_(x.aoMap.channel),lightMapUv:gn&&_(x.lightMap.channel),bumpMapUv:kt&&_(x.bumpMap.channel),normalMapUv:Ht&&_(x.normalMap.channel),displacementMapUv:xt&&_(x.displacementMap.channel),emissiveMapUv:ie&&_(x.emissiveMap.channel),metalnessMapUv:vt&&_(x.metalnessMap.channel),roughnessMapUv:w&&_(x.roughnessMap.channel),anisotropyMapUv:ot&&_(x.anisotropyMap.channel),clearcoatMapUv:ut&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:At&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ft&&_(x.sheenRoughnessMap.channel),specularMapUv:Gt&&_(x.specularMap.channel),specularColorMapUv:Dt&&_(x.specularColorMap.channel),specularIntensityMapUv:ne&&_(x.specularIntensityMap.channel),transmissionMapUv:L&&_(x.transmissionMap.channel),thicknessMapUv:it&&_(x.thicknessMap.channel),alphaMapUv:K&&_(x.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ht||y),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(fe||K),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:St,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Tt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:fe&&x.map.isVideoTexture===!0&&Yt.getTransfer(x.map.colorSpace)===Jt,decodeVideoTextureEmissive:ie&&x.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(x.emissiveMap.colorSpace)===Jt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ze,flipSided:x.side===Je,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Rt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&x.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return De.vertexUv1s=c.has(1),De.vertexUv2s=c.has(2),De.vertexUv3s=c.has(3),c.clear(),De}function f(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)M.push(P),M.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(b(M,x),E(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function b(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function E(x,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){const M=g[x.type];let P;if(M){const k=Gn[M];P=ym.clone(k.uniforms)}else P=x.uniforms;return P}function A(x,M){let P;for(let k=0,F=h.length;k<F;k++){const X=h[k];if(X.cacheKey===M){P=X,++P.usedTimes;break}}return P===void 0&&(P=new qv(i,M,x,s),h.push(P)),P}function C(x){if(--x.usedTimes===0){const M=h.indexOf(x);h[M]=h[h.length-1],h.pop(),x.destroy()}}function T(x){l.remove(x)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:A,releaseProgram:C,releaseShaderCache:T,programs:h,dispose:R}}function Qv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function tx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function cu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hu(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||tx),n.length>1&&n.sort(d||cu),r.length>1&&r.sort(d||cu)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function ex(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new hu,i.set(n,[o])):r>=s.length?(o=new hu,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function nx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Ft};break;case"SpotLight":e={position:new N,direction:new N,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function ix(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let rx=0;function sx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ox(i){const t=new nx,e=ix(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const r=new N,s=new ce,o=new ce;function a(c){let h=0,u=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,b=0,E=0,v=0,A=0,C=0,T=0;c.sort(sx);for(let x=0,M=c.length;x<M;x++){const P=c[x],k=P.color,F=P.intensity,X=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=k.r*F,u+=k.g*F,d+=k.b*F;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],F);T++}else if(P.isDirectionalLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,H=e.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=P.shadow.matrix,b++}n.directional[p]=G,p++}else if(P.isSpotLight){const G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(k).multiplyScalar(F),G.distance=X,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[_]=G;const $=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,$.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[_]=$.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=Y,v++}_++}else if(P.isRectAreaLight){const G=t.get(P);G.color.copy(k).multiplyScalar(F),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const $=P.shadow,H=e.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=G,g++}else if(P.isHemisphereLight){const G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(F),G.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[f]=G,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==b||R.numPointShadows!==E||R.numSpotShadows!==v||R.numSpotMaps!==A||R.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=T,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=b,R.numPointShadows=E,R.numSpotShadows=v,R.numSpotMaps=A,R.numLightProbes=T,n.version=rx++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){const E=c[f];if(E.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),u++}else if(E.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function uu(i){const t=new ox(i),e=[],n=[];function r(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ax(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new uu(i),t.set(r,[a])):s>=o.length?(a=new uu(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hx(i,t,e){let n=new sd;const r=new Ut,s=new Ut,o=new me,a=new Pm({depthPacking:kp}),l=new Dm,c={},h=e.maxTextureSize,u={[Kn]:Je,[Je]:Kn,[Ze]:Ze},d=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:lx,fragmentShader:cx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Rn;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ae(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ou;let f=this.type;this.render=function(C,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const x=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Pi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=f!==ai&&this.type===ai,X=f===ai&&this.type!==ai;for(let Y=0,G=C.length;Y<G;Y++){const $=C[Y],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const et=H.getFrameExtents();if(r.multiply(et),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/et.x),r.x=s.x*et.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/et.y),r.y=s.y*et.y,H.mapSize.y=s.y)),H.map===null||F===!0||X===!0){const mt=this.type!==ai?{minFilter:Bn,magFilter:Bn}:{};H.map!==null&&H.map.dispose(),H.map=new dr(r.x,r.y,mt),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const at=H.getViewportCount();for(let mt=0;mt<at;mt++){const Tt=H.getViewport(mt);o.set(s.x*Tt.x,s.y*Tt.y,s.x*Tt.z,s.y*Tt.w),k.viewport(o),H.updateMatrices($,mt),n=H.getFrustum(),v(T,R,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===ai&&b(H,R),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(x,M,P)};function b(C,T){const R=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new dr(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(T,null,R,d,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(T,null,R,p,_,null)}function E(C,T,R,x){let M=null;const P=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=M.uuid,F=T.uuid;let X=c[k];X===void 0&&(X={},c[k]=X);let Y=X[F];Y===void 0&&(Y=M.clone(),X[F]=Y,T.addEventListener("dispose",A)),M=Y}if(M.visible=T.visible,M.wireframe=T.wireframe,x===ai?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=i.properties.get(M);k.light=R}return M}function v(C,T,R,x,M){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===ai)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const F=t.update(C),X=C.material;if(Array.isArray(X)){const Y=F.groups;for(let G=0,$=Y.length;G<$;G++){const H=Y[G],et=X[H.materialIndex];if(et&&et.visible){const at=E(C,et,x,M);C.onBeforeShadow(i,C,T,R,F,at,H),i.renderBufferDirect(R,null,F,at,C,H),C.onAfterShadow(i,C,T,R,F,at,H)}}}else if(X.visible){const Y=E(C,X,x,M);C.onBeforeShadow(i,C,T,R,F,Y,null),i.renderBufferDirect(R,null,F,Y,C,null),C.onAfterShadow(i,C,T,R,F,Y,null)}}const k=C.children;for(let F=0,X=k.length;F<X;F++)v(k[F],T,R,x,M)}function A(C){C.target.removeEventListener("dispose",A);for(const R in c){const x=c[R],M=C.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}const ux={[ll]:cl,[hl]:fl,[ul]:pl,[Kr]:dl,[cl]:ll,[fl]:hl,[pl]:ul,[dl]:Kr};function dx(i,t){function e(){let L=!1;const it=new me;let V=null;const K=new me(0,0,0,0);return{setMask:function(ct){V!==ct&&!L&&(i.colorMask(ct,ct,ct,ct),V=ct)},setLocked:function(ct){L=ct},setClear:function(ct,lt,Rt,he,De){De===!0&&(ct*=he,lt*=he,Rt*=he),it.set(ct,lt,Rt,he),K.equals(it)===!1&&(i.clearColor(ct,lt,Rt,he),K.copy(it))},reset:function(){L=!1,V=null,K.set(-1,0,0,0)}}}function n(){let L=!1,it=!1,V=null,K=null,ct=null;return{setReversed:function(lt){if(it!==lt){const Rt=t.get("EXT_clip_control");it?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT);const he=ct;ct=null,this.setClear(he)}it=lt},getReversed:function(){return it},setTest:function(lt){lt?st(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(lt){V!==lt&&!L&&(i.depthMask(lt),V=lt)},setFunc:function(lt){if(it&&(lt=ux[lt]),K!==lt){switch(lt){case ll:i.depthFunc(i.NEVER);break;case cl:i.depthFunc(i.ALWAYS);break;case hl:i.depthFunc(i.LESS);break;case Kr:i.depthFunc(i.LEQUAL);break;case ul:i.depthFunc(i.EQUAL);break;case dl:i.depthFunc(i.GEQUAL);break;case fl:i.depthFunc(i.GREATER);break;case pl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=lt}},setLocked:function(lt){L=lt},setClear:function(lt){ct!==lt&&(it&&(lt=1-lt),i.clearDepth(lt),ct=lt)},reset:function(){L=!1,V=null,K=null,ct=null,it=!1}}}function r(){let L=!1,it=null,V=null,K=null,ct=null,lt=null,Rt=null,he=null,De=null;return{setTest:function(jt){L||(jt?st(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(jt){it!==jt&&!L&&(i.stencilMask(jt),it=jt)},setFunc:function(jt,Dn,ei){(V!==jt||K!==Dn||ct!==ei)&&(i.stencilFunc(jt,Dn,ei),V=jt,K=Dn,ct=ei)},setOp:function(jt,Dn,ei){(lt!==jt||Rt!==Dn||he!==ei)&&(i.stencilOp(jt,Dn,ei),lt=jt,Rt=Dn,he=ei)},setLocked:function(jt){L=jt},setClear:function(jt){De!==jt&&(i.clearStencil(jt),De=jt)},reset:function(){L=!1,it=null,V=null,K=null,ct=null,lt=null,Rt=null,he=null,De=null}}}const s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,b=null,E=null,v=null,A=null,C=null,T=new Ft(0,0,0),R=0,x=!1,M=null,P=null,k=null,F=null,X=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,$=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=$>=2);let et=null,at={};const mt=i.getParameter(i.SCISSOR_BOX),Tt=i.getParameter(i.VIEWPORT),qt=new me().fromArray(mt),W=new me().fromArray(Tt);function Q(L,it,V,K){const ct=new Uint8Array(4),lt=i.createTexture();i.bindTexture(L,lt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<V;Rt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(it+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return lt}const _t={};_t[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(Kr),kt(!1),Ht(uh),st(i.CULL_FACE),D(Pi);function st(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function St(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function $t(L,it){return u[L]!==it?(i.bindFramebuffer(L,it),u[L]=it,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function bt(L,it){let V=p,K=!1;if(L){V=d.get(it),V===void 0&&(V=[],d.set(it,V));const ct=L.textures;if(V.length!==ct.length||V[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Rt=ct.length;lt<Rt;lt++)V[lt]=i.COLOR_ATTACHMENT0+lt;V.length=ct.length,K=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,K=!0);K&&i.drawBuffers(V)}function fe(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const oe={[er]:i.FUNC_ADD,[dp]:i.FUNC_SUBTRACT,[fp]:i.FUNC_REVERSE_SUBTRACT};oe[pp]=i.MIN,oe[mp]=i.MAX;const zt={[_p]:i.ZERO,[gp]:i.ONE,[vp]:i.SRC_COLOR,[ol]:i.SRC_ALPHA,[bp]:i.SRC_ALPHA_SATURATE,[Sp]:i.DST_COLOR,[yp]:i.DST_ALPHA,[xp]:i.ONE_MINUS_SRC_COLOR,[al]:i.ONE_MINUS_SRC_ALPHA,[Ep]:i.ONE_MINUS_DST_COLOR,[Mp]:i.ONE_MINUS_DST_ALPHA,[Tp]:i.CONSTANT_COLOR,[Ap]:i.ONE_MINUS_CONSTANT_COLOR,[wp]:i.CONSTANT_ALPHA,[Cp]:i.ONE_MINUS_CONSTANT_ALPHA};function D(L,it,V,K,ct,lt,Rt,he,De,jt){if(L===Pi){_===!0&&(St(i.BLEND),_=!1);return}if(_===!1&&(st(i.BLEND),_=!0),L!==up){if(L!==m||jt!==x){if((f!==er||v!==er)&&(i.blendEquation(i.FUNC_ADD),f=er,v=er),jt)switch(L){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ps:i.blendFunc(i.ONE,i.ONE);break;case dh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ps:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case dh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,E=null,A=null,C=null,T.set(0,0,0),R=0,m=L,x=jt}return}ct=ct||it,lt=lt||V,Rt=Rt||K,(it!==f||ct!==v)&&(i.blendEquationSeparate(oe[it],oe[ct]),f=it,v=ct),(V!==b||K!==E||lt!==A||Rt!==C)&&(i.blendFuncSeparate(zt[V],zt[K],zt[lt],zt[Rt]),b=V,E=K,A=lt,C=Rt),(he.equals(T)===!1||De!==R)&&(i.blendColor(he.r,he.g,he.b,De),T.copy(he),R=De),m=L,x=!1}function gn(L,it){L.side===Ze?St(i.CULL_FACE):st(i.CULL_FACE);let V=L.side===Je;it&&(V=!V),kt(V),L.blending===Di&&L.transparent===!1?D(Pi):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ie(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function Ht(L){L!==lp?(st(i.CULL_FACE),L!==P&&(L===uh?i.cullFace(i.BACK):L===cp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),P=L}function xt(L){L!==k&&(G&&i.lineWidth(L),k=L)}function ie(L,it,V){L?(st(i.POLYGON_OFFSET_FILL),(F!==it||X!==V)&&(i.polygonOffset(it,V),F=it,X=V)):St(i.POLYGON_OFFSET_FILL)}function vt(L){L?st(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function w(L){L===void 0&&(L=i.TEXTURE0+Y-1),et!==L&&(i.activeTexture(L),et=L)}function y(L,it,V){V===void 0&&(et===null?V=i.TEXTURE0+Y-1:V=et);let K=at[V];K===void 0&&(K={type:void 0,texture:void 0},at[V]=K),(K.type!==L||K.texture!==it)&&(et!==V&&(i.activeTexture(V),et=V),i.bindTexture(L,it||_t[L]),K.type=L,K.texture=it)}function O(){const L=at[et];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Z(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Vt(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(L){qt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),qt.copy(L))}function ft(L){W.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),W.copy(L))}function Gt(L,it){let V=c.get(it);V===void 0&&(V=new WeakMap,c.set(it,V));let K=V.get(L);K===void 0&&(K=i.getUniformBlockIndex(it,L.name),V.set(L,K))}function Dt(L,it){const K=c.get(it).get(L);l.get(it)!==K&&(i.uniformBlockBinding(it,K,L.__bindingPointIndex),l.set(it,K))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},et=null,at={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,b=null,E=null,v=null,A=null,C=null,T=new Ft(0,0,0),R=0,x=!1,M=null,P=null,k=null,F=null,X=null,qt.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:st,disable:St,bindFramebuffer:$t,drawBuffers:bt,useProgram:fe,setBlending:D,setMaterial:gn,setFlipSided:kt,setCullFace:Ht,setLineWidth:xt,setPolygonOffset:ie,setScissorTest:vt,activeTexture:w,bindTexture:y,unbindTexture:O,compressedTexImage2D:Z,compressedTexImage3D:j,texImage2D:dt,texImage3D:Et,updateUBOMapping:Gt,uniformBlockBinding:Dt,texStorage2D:Vt,texStorage3D:tt,texSubImage2D:q,texSubImage3D:gt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ut,scissor:At,viewport:ft,reset:ne}}function fx(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ut,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return p?new OffscreenCanvas(w,y):Ls("canvas")}function _(w,y,O){let Z=1;const j=vt(w);if((j.width>O||j.height>O)&&(Z=O/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const q=Math.floor(Z*j.width),gt=Math.floor(Z*j.height);u===void 0&&(u=g(q,gt));const ot=y?g(q,gt):u;return ot.width=q,ot.height=gt,ot.getContext("2d").drawImage(w,0,0,q,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+gt+")."),ot}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){i.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,y,O,Z,j=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=y;if(y===i.RED&&(O===i.FLOAT&&(q=i.R32F),O===i.HALF_FLOAT&&(q=i.R16F),O===i.UNSIGNED_BYTE&&(q=i.R8)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.R8UI),O===i.UNSIGNED_SHORT&&(q=i.R16UI),O===i.UNSIGNED_INT&&(q=i.R32UI),O===i.BYTE&&(q=i.R8I),O===i.SHORT&&(q=i.R16I),O===i.INT&&(q=i.R32I)),y===i.RG&&(O===i.FLOAT&&(q=i.RG32F),O===i.HALF_FLOAT&&(q=i.RG16F),O===i.UNSIGNED_BYTE&&(q=i.RG8)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RG8UI),O===i.UNSIGNED_SHORT&&(q=i.RG16UI),O===i.UNSIGNED_INT&&(q=i.RG32UI),O===i.BYTE&&(q=i.RG8I),O===i.SHORT&&(q=i.RG16I),O===i.INT&&(q=i.RG32I)),y===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(q=i.RGB16UI),O===i.UNSIGNED_INT&&(q=i.RGB32UI),O===i.BYTE&&(q=i.RGB8I),O===i.SHORT&&(q=i.RGB16I),O===i.INT&&(q=i.RGB32I)),y===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),O===i.UNSIGNED_INT&&(q=i.RGBA32UI),O===i.BYTE&&(q=i.RGBA8I),O===i.SHORT&&(q=i.RGBA16I),O===i.INT&&(q=i.RGBA32I)),y===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),y===i.RGBA){const gt=j?zo:Yt.getTransfer(Z);O===i.FLOAT&&(q=i.RGBA32F),O===i.HALF_FLOAT&&(q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(q=gt===Jt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function v(w,y){let O;return w?y===null||y===ur||y===Qr?O=i.DEPTH24_STENCIL8:y===hi?O=i.DEPTH32F_STENCIL8:y===Ds&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ur||y===Qr?O=i.DEPTH_COMPONENT24:y===hi?O=i.DEPTH_COMPONENT32F:y===Ds&&(O=i.DEPTH_COMPONENT16),O}function A(w,y){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Bn&&w.minFilter!==Wn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function C(w){const y=w.target;y.removeEventListener("dispose",C),R(y),y.isVideoTexture&&h.delete(y)}function T(w){const y=w.target;y.removeEventListener("dispose",T),M(y)}function R(w){const y=n.get(w);if(y.__webglInit===void 0)return;const O=w.source,Z=d.get(O);if(Z){const j=Z[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&x(w),Object.keys(Z).length===0&&d.delete(O)}n.remove(w)}function x(w){const y=n.get(w);i.deleteTexture(y.__webglTexture);const O=w.source,Z=d.get(O);delete Z[y.__cacheKey],o.memory.textures--}function M(w){const y=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let j=0;j<y.__webglFramebuffer[Z].length;j++)i.deleteFramebuffer(y.__webglFramebuffer[Z][j]);else i.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)i.deleteFramebuffer(y.__webglFramebuffer[Z]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=w.textures;for(let Z=0,j=O.length;Z<j;Z++){const q=n.get(O[Z]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(O[Z])}n.remove(w)}let P=0;function k(){P=0}function F(){const w=P;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),P+=1,w}function X(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function Y(w,y){const O=n.get(w);if(w.isVideoTexture&&xt(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(O,w,y);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function G(w,y){const O=n.get(w);if(w.version>0&&O.__version!==w.version){W(O,w,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function $(w,y){const O=n.get(w);if(w.version>0&&O.__version!==w.version){W(O,w,y);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function H(w,y){const O=n.get(w);if(w.version>0&&O.__version!==w.version){Q(O,w,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}const et={[gl]:i.REPEAT,[ir]:i.CLAMP_TO_EDGE,[vl]:i.MIRRORED_REPEAT},at={[Bn]:i.NEAREST,[Bp]:i.NEAREST_MIPMAP_NEAREST,[Qs]:i.NEAREST_MIPMAP_LINEAR,[Wn]:i.LINEAR,[_a]:i.LINEAR_MIPMAP_NEAREST,[rr]:i.LINEAR_MIPMAP_LINEAR},mt={[Vp]:i.NEVER,[Zp]:i.ALWAYS,[Wp]:i.LESS,[Ku]:i.LEQUAL,[Xp]:i.EQUAL,[qp]:i.GEQUAL,[Yp]:i.GREATER,[$p]:i.NOTEQUAL};function Tt(w,y){if(y.type===hi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Wn||y.magFilter===_a||y.magFilter===Qs||y.magFilter===rr||y.minFilter===Wn||y.minFilter===_a||y.minFilter===Qs||y.minFilter===rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,et[y.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,et[y.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,et[y.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,at[y.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,at[y.minFilter]),y.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,mt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Bn||y.minFilter!==Qs&&y.minFilter!==rr||y.type===hi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function qt(w,y){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",C));const Z=y.source;let j=d.get(Z);j===void 0&&(j={},d.set(Z,j));const q=X(y);if(q!==w.__cacheKey){j[q]===void 0&&(j[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),j[q].usedTimes++;const gt=j[w.__cacheKey];gt!==void 0&&(j[w.__cacheKey].usedTimes--,gt.usedTimes===0&&x(y)),w.__cacheKey=q,w.__webglTexture=j[q].texture}return O}function W(w,y,O){let Z=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=i.TEXTURE_3D);const j=qt(w,y),q=y.source;e.bindTexture(Z,w.__webglTexture,i.TEXTURE0+O);const gt=n.get(q);if(q.version!==gt.__version||j===!0){e.activeTexture(i.TEXTURE0+O);const ot=Yt.getPrimaries(Yt.workingColorSpace),ut=y.colorSpace===Ti?null:Yt.getPrimaries(y.colorSpace),Vt=y.colorSpace===Ti||ot===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let tt=_(y.image,!1,r.maxTextureSize);tt=ie(y,tt);const dt=s.convert(y.format,y.colorSpace),Et=s.convert(y.type);let At=E(y.internalFormat,dt,Et,y.colorSpace,y.isVideoTexture);Tt(Z,y);let ft;const Gt=y.mipmaps,Dt=y.isVideoTexture!==!0,ne=gt.__version===void 0||j===!0,L=q.dataReady,it=A(y,tt);if(y.isDepthTexture)At=v(y.format===ts,y.type),ne&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,At,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,At,tt.width,tt.height,0,dt,Et,null));else if(y.isDataTexture)if(Gt.length>0){Dt&&ne&&e.texStorage2D(i.TEXTURE_2D,it,At,Gt[0].width,Gt[0].height);for(let V=0,K=Gt.length;V<K;V++)ft=Gt[V],Dt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,ft.width,ft.height,dt,Et,ft.data):e.texImage2D(i.TEXTURE_2D,V,At,ft.width,ft.height,0,dt,Et,ft.data);y.generateMipmaps=!1}else Dt?(ne&&e.texStorage2D(i.TEXTURE_2D,it,At,tt.width,tt.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,dt,Et,tt.data)):e.texImage2D(i.TEXTURE_2D,0,At,tt.width,tt.height,0,dt,Et,tt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Dt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,At,Gt[0].width,Gt[0].height,tt.depth);for(let V=0,K=Gt.length;V<K;V++)if(ft=Gt[V],y.format!==On)if(dt!==null)if(Dt){if(L)if(y.layerUpdates.size>0){const ct=Hh(ft.width,ft.height,y.format,y.type);for(const lt of y.layerUpdates){const Rt=ft.data.subarray(lt*ct/ft.data.BYTES_PER_ELEMENT,(lt+1)*ct/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,lt,ft.width,ft.height,1,dt,Rt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,ft.width,ft.height,tt.depth,dt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,At,ft.width,ft.height,tt.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,ft.width,ft.height,tt.depth,dt,Et,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,At,ft.width,ft.height,tt.depth,0,dt,Et,ft.data)}else{Dt&&ne&&e.texStorage2D(i.TEXTURE_2D,it,At,Gt[0].width,Gt[0].height);for(let V=0,K=Gt.length;V<K;V++)ft=Gt[V],y.format!==On?dt!==null?Dt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,V,At,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,ft.width,ft.height,dt,Et,ft.data):e.texImage2D(i.TEXTURE_2D,V,At,ft.width,ft.height,0,dt,Et,ft.data)}else if(y.isDataArrayTexture)if(Dt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,At,tt.width,tt.height,tt.depth),L)if(y.layerUpdates.size>0){const V=Hh(tt.width,tt.height,y.format,y.type);for(const K of y.layerUpdates){const ct=tt.data.subarray(K*V/tt.data.BYTES_PER_ELEMENT,(K+1)*V/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,dt,Et,ct)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,dt,Et,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,tt.width,tt.height,tt.depth,0,dt,Et,tt.data);else if(y.isData3DTexture)Dt?(ne&&e.texStorage3D(i.TEXTURE_3D,it,At,tt.width,tt.height,tt.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,dt,Et,tt.data)):e.texImage3D(i.TEXTURE_3D,0,At,tt.width,tt.height,tt.depth,0,dt,Et,tt.data);else if(y.isFramebufferTexture){if(ne)if(Dt)e.texStorage2D(i.TEXTURE_2D,it,At,tt.width,tt.height);else{let V=tt.width,K=tt.height;for(let ct=0;ct<it;ct++)e.texImage2D(i.TEXTURE_2D,ct,At,V,K,0,dt,Et,null),V>>=1,K>>=1}}else if(Gt.length>0){if(Dt&&ne){const V=vt(Gt[0]);e.texStorage2D(i.TEXTURE_2D,it,At,V.width,V.height)}for(let V=0,K=Gt.length;V<K;V++)ft=Gt[V],Dt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,dt,Et,ft):e.texImage2D(i.TEXTURE_2D,V,At,dt,Et,ft);y.generateMipmaps=!1}else if(Dt){if(ne){const V=vt(tt);e.texStorage2D(i.TEXTURE_2D,it,At,V.width,V.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Et,tt)}else e.texImage2D(i.TEXTURE_2D,0,At,dt,Et,tt);m(y)&&f(Z),gt.__version=q.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Q(w,y,O){if(y.image.length!==6)return;const Z=qt(w,y),j=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);const q=n.get(j);if(j.version!==q.__version||Z===!0){e.activeTexture(i.TEXTURE0+O);const gt=Yt.getPrimaries(Yt.workingColorSpace),ot=y.colorSpace===Ti?null:Yt.getPrimaries(y.colorSpace),ut=y.colorSpace===Ti||gt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Vt=y.isCompressedTexture||y.image[0].isCompressedTexture,tt=y.image[0]&&y.image[0].isDataTexture,dt=[];for(let K=0;K<6;K++)!Vt&&!tt?dt[K]=_(y.image[K],!0,r.maxCubemapSize):dt[K]=tt?y.image[K].image:y.image[K],dt[K]=ie(y,dt[K]);const Et=dt[0],At=s.convert(y.format,y.colorSpace),ft=s.convert(y.type),Gt=E(y.internalFormat,At,ft,y.colorSpace),Dt=y.isVideoTexture!==!0,ne=q.__version===void 0||Z===!0,L=j.dataReady;let it=A(y,Et);Tt(i.TEXTURE_CUBE_MAP,y);let V;if(Vt){Dt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Gt,Et.width,Et.height);for(let K=0;K<6;K++){V=dt[K].mipmaps;for(let ct=0;ct<V.length;ct++){const lt=V[ct];y.format!==On?At!==null?Dt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,0,0,lt.width,lt.height,At,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,Gt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,0,0,lt.width,lt.height,At,ft,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,Gt,lt.width,lt.height,0,At,ft,lt.data)}}}else{if(V=y.mipmaps,Dt&&ne){V.length>0&&it++;const K=vt(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Gt,K.width,K.height)}for(let K=0;K<6;K++)if(tt){Dt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,dt[K].width,dt[K].height,At,ft,dt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Gt,dt[K].width,dt[K].height,0,At,ft,dt[K].data);for(let ct=0;ct<V.length;ct++){const Rt=V[ct].image[K].image;Dt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,0,0,Rt.width,Rt.height,At,ft,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,Gt,Rt.width,Rt.height,0,At,ft,Rt.data)}}else{Dt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,At,ft,dt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Gt,At,ft,dt[K]);for(let ct=0;ct<V.length;ct++){const lt=V[ct];Dt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,0,0,At,ft,lt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,Gt,At,ft,lt.image[K])}}}m(y)&&f(i.TEXTURE_CUBE_MAP),q.__version=j.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function _t(w,y,O,Z,j,q){const gt=s.convert(O.format,O.colorSpace),ot=s.convert(O.type),ut=E(O.internalFormat,gt,ot,O.colorSpace),Vt=n.get(y),tt=n.get(O);if(tt.__renderTarget=y,!Vt.__hasExternalTextures){const dt=Math.max(1,y.width>>q),Et=Math.max(1,y.height>>q);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,q,ut,dt,Et,y.depth,0,gt,ot,null):e.texImage2D(j,q,ut,dt,Et,0,gt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Ht(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,j,tt.__webglTexture,0,kt(y)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,j,tt.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(w,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),y.depthBuffer){const Z=y.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,q=v(y.stencilBuffer,j),gt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=kt(y);Ht(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,q,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,q,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,q,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,w)}else{const Z=y.textures;for(let j=0;j<Z.length;j++){const q=Z[j],gt=s.convert(q.format,q.colorSpace),ot=s.convert(q.type),ut=E(q.internalFormat,gt,ot,q.colorSpace),Vt=kt(y);O&&Ht(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,ut,y.width,y.height):Ht(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt,ut,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ut,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(y.depthTexture);Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const j=Z.__webglTexture,q=kt(y);if(y.depthTexture.format===Gr)Ht(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(y.depthTexture.format===ts)Ht(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function $t(w){const y=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=Z}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");St(y.__webglFramebuffer,w)}else if(O){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=i.createRenderbuffer(),st(y.__webglDepthbuffer[Z],w,!1);else{const j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),st(y.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(w,y,O){const Z=n.get(w);y!==void 0&&_t(Z.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&$t(w)}function fe(w){const y=w.texture,O=n.get(w),Z=n.get(y);w.addEventListener("dispose",T);const j=w.textures,q=w.isWebGLCubeRenderTarget===!0,gt=j.length>1;if(gt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=y.version,o.memory.textures++),q){O.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ot]=[];for(let ut=0;ut<y.mipmaps.length;ut++)O.__webglFramebuffer[ot][ut]=i.createFramebuffer()}else O.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ot=0;ot<y.mipmaps.length;ot++)O.__webglFramebuffer[ot]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(gt)for(let ot=0,ut=j.length;ot<ut;ot++){const Vt=n.get(j[ot]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&Ht(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ot=0;ot<j.length;ot++){const ut=j[ot];O.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ot]);const Vt=s.convert(ut.format,ut.colorSpace),tt=s.convert(ut.type),dt=E(ut.internalFormat,Vt,tt,ut.colorSpace,w.isXRRenderTarget===!0),Et=kt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,dt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,O.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),st(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Tt(i.TEXTURE_CUBE_MAP,y);for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0)for(let ut=0;ut<y.mipmaps.length;ut++)_t(O.__webglFramebuffer[ot][ut],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else _t(O.__webglFramebuffer[ot],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(y)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let ot=0,ut=j.length;ot<ut;ot++){const Vt=j[ot],tt=n.get(Vt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),Tt(i.TEXTURE_2D,Vt),_t(O.__webglFramebuffer,w,Vt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),m(Vt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ot=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,Z.__webglTexture),Tt(ot,y),y.mipmaps&&y.mipmaps.length>0)for(let ut=0;ut<y.mipmaps.length;ut++)_t(O.__webglFramebuffer[ut],w,y,i.COLOR_ATTACHMENT0,ot,ut);else _t(O.__webglFramebuffer,w,y,i.COLOR_ATTACHMENT0,ot,0);m(y)&&f(ot),e.unbindTexture()}w.depthBuffer&&$t(w)}function oe(w){const y=w.textures;for(let O=0,Z=y.length;O<Z;O++){const j=y[O];if(m(j)){const q=b(w),gt=n.get(j).__webglTexture;e.bindTexture(q,gt),f(q),e.unbindTexture()}}}const zt=[],D=[];function gn(w){if(w.samples>0){if(Ht(w)===!1){const y=w.textures,O=w.width,Z=w.height;let j=i.COLOR_BUFFER_BIT;const q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(w),ot=y.length>1;if(ot)for(let ut=0;ut<y.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ut=0;ut<y.length;ut++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[ut]);const Vt=n.get(y[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,O,Z,0,0,O,Z,j,i.NEAREST),l===!0&&(zt.length=0,D.length=0,zt.push(i.COLOR_ATTACHMENT0+ut),w.depthBuffer&&w.resolveDepthBuffer===!1&&(zt.push(q),D.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let ut=0;ut<y.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,gt.__webglColorRenderbuffer[ut]);const Vt=n.get(y[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function kt(w){return Math.min(r.maxSamples,w.samples)}function Ht(w){const y=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function xt(w){const y=o.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function ie(w,y){const O=w.colorSpace,Z=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==es&&O!==Ti&&(Yt.getTransfer(O)===Jt?(Z!==On||j!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function vt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.setTexture2D=Y,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=bt,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Ht}function px(i,t){function e(n,r=Ti){let s;const o=Yt.getTransfer(r);if(n===fi)return i.UNSIGNED_BYTE;if(n===vc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ku)return i.BYTE;if(n===Hu)return i.SHORT;if(n===Ds)return i.UNSIGNED_SHORT;if(n===gc)return i.INT;if(n===ur)return i.UNSIGNED_INT;if(n===hi)return i.FLOAT;if(n===Gs)return i.HALF_FLOAT;if(n===Vu)return i.ALPHA;if(n===Wu)return i.RGB;if(n===On)return i.RGBA;if(n===Xu)return i.LUMINANCE;if(n===Yu)return i.LUMINANCE_ALPHA;if(n===Gr)return i.DEPTH_COMPONENT;if(n===ts)return i.DEPTH_STENCIL;if(n===$u)return i.RED;if(n===yc)return i.RED_INTEGER;if(n===qu)return i.RG;if(n===Mc)return i.RG_INTEGER;if(n===Sc)return i.RGBA_INTEGER;if(n===To||n===Ao||n===wo||n===Co)if(o===Jt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===To)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===To)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ao)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Co)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xl||n===yl||n===Ml||n===Sl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===xl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ml)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===El||n===bl||n===Tl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===El||n===bl)return o===Jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Tl)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Al||n===wl||n===Cl||n===Rl||n===Pl||n===Dl||n===Ll||n===Il||n===Ul||n===Fl||n===Nl||n===Ol||n===Bl||n===zl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Al)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wl)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cl)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rl)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pl)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dl)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ll)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Il)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ul)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fl)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nl)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ol)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bl)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zl)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ro||n===kl||n===Hl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ro)return o===Jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zu||n===Gl||n===Vl||n===Wl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ro)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Gl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_x=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new We,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new sn({vertexShader:mx,fragmentShader:_x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vx extends _r{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new gx,m=e.getContextAttributes();let f=null,b=null;const E=[],v=[],A=new Ut;let C=null;const T=new En;T.viewport=new me;const R=new En;R.viewport=new me;const x=[T,R],M=new Nm;let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=E[W];return Q===void 0&&(Q=new Oa,E[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=E[W];return Q===void 0&&(Q=new Oa,E[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=E[W];return Q===void 0&&(Q=new Oa,E[W]=Q),Q.getHandSpace()};function F(W){const Q=v.indexOf(W.inputSource);if(Q===-1)return;const _t=E[Q];_t!==void 0&&(_t.update(W.inputSource,W.frame,c||o),_t.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Y);for(let W=0;W<E.length;W++){const Q=v[W];Q!==null&&(v[W]=null,E[W].disconnect(Q))}P=null,k=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,r=null,b=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,st=null,St=null;m.depth&&(St=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=m.stencil?ts:Gr,st=m.stencil?Qr:ur);const $t={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:s};u=new XRWebGLBinding(r,e),d=u.createProjectionLayer($t),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new dr(d.textureWidth,d.textureHeight,{format:On,type:fi,depthTexture:new od(d.textureWidth,d.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const _t={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,_t),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new dr(p.framebufferWidth,p.framebufferHeight,{format:On,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),qt.setContext(r),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(W){for(let Q=0;Q<W.removed.length;Q++){const _t=W.removed[Q],st=v.indexOf(_t);st>=0&&(v[st]=null,E[st].disconnect(_t))}for(let Q=0;Q<W.added.length;Q++){const _t=W.added[Q];let st=v.indexOf(_t);if(st===-1){for(let $t=0;$t<E.length;$t++)if($t>=v.length){v.push(_t),st=$t;break}else if(v[$t]===null){v[$t]=_t,st=$t;break}if(st===-1)break}const St=E[st];St&&St.connect(_t)}}const G=new N,$=new N;function H(W,Q,_t){G.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(_t.matrixWorld);const st=G.distanceTo($),St=Q.projectionMatrix.elements,$t=_t.projectionMatrix.elements,bt=St[14]/(St[10]-1),fe=St[14]/(St[10]+1),oe=(St[9]+1)/St[5],zt=(St[9]-1)/St[5],D=(St[8]-1)/St[0],gn=($t[8]+1)/$t[0],kt=bt*D,Ht=bt*gn,xt=st/(-D+gn),ie=xt*-D;if(Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ie),W.translateZ(xt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),St[10]===-1)W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const vt=bt+xt,w=fe+xt,y=kt-ie,O=Ht+(st-ie),Z=oe*fe/w*vt,j=zt*fe/w*vt;W.projectionMatrix.makePerspective(y,O,Z,j,vt,w),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function et(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let Q=W.near,_t=W.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),M.near=R.near=T.near=Q,M.far=R.far=T.far=_t,(P!==M.near||k!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,k=M.far),T.layers.mask=W.layers.mask|2,R.layers.mask=W.layers.mask|4,M.layers.mask=T.layers.mask|R.layers.mask;const st=W.parent,St=M.cameras;et(M,st);for(let $t=0;$t<St.length;$t++)et(St[$t],st);St.length===2?H(M,T,R):M.projectionMatrix.copy(T.projectionMatrix),at(W,M,st)};function at(W,Q,_t){_t===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(_t.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Xl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let mt=null;function Tt(W,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){const _t=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let st=!1;_t.length!==M.cameras.length&&(M.cameras.length=0,st=!0);for(let bt=0;bt<_t.length;bt++){const fe=_t[bt];let oe=null;if(p!==null)oe=p.getViewport(fe);else{const D=u.getViewSubImage(d,fe);oe=D.viewport,bt===0&&(t.setRenderTargetTextures(b,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(b))}let zt=x[bt];zt===void 0&&(zt=new En,zt.layers.enable(bt),zt.viewport=new me,x[bt]=zt),zt.matrix.fromArray(fe.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(fe.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(oe.x,oe.y,oe.width,oe.height),bt===0&&(M.matrix.copy(zt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),st===!0&&M.cameras.push(zt)}const St=r.enabledFeatures;if(St&&St.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){const bt=u.getDepthInformation(_t[0]);bt&&bt.isValid&&bt.texture&&_.init(t,bt,r.renderState)}}for(let _t=0;_t<E.length;_t++){const st=v[_t],St=E[_t];st!==null&&St!==void 0&&St.update(st,Q,c||o)}mt&&mt(W,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const qt=new ad;qt.setAnimationLoop(Tt),this.setAnimationLoop=function(W){mt=W},this.dispose=function(){}}}const Zi=new jn,xx=new ce;function yx(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,nd(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,b,E,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,b,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Je&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Je&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=t.get(f),E=b.envMap,v=b.envMapRotation;E&&(m.envMap.value=E,Zi.copy(v),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),m.envMapRotation.value.setFromMatrix4(xx.makeRotationFromEuler(Zi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=E*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Je&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Mx(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){const v=E.program;n.uniformBlockBinding(b,v)}function c(b,E){let v=r[b.id];v===void 0&&(g(b),v=h(b),r[b.id]=v,b.addEventListener("dispose",m));const A=E.program;n.updateUBOMapping(b,A);const C=t.render.frame;s[b.id]!==C&&(d(b),s[b.id]=C)}function h(b){const E=u();b.__bindingPointIndex=E;const v=i.createBuffer(),A=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const E=r[b.id],v=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,T=v.length;C<T;C++){const R=Array.isArray(v[C])?v[C]:[v[C]];for(let x=0,M=R.length;x<M;x++){const P=R[x];if(p(P,C,x,A)===!0){const k=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let Y=0;Y<F.length;Y++){const G=F[Y],$=_(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,k+X,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,X),X+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,E,v,A){const C=b.value,T=E+"_"+v;if(A[T]===void 0)return typeof C=="number"||typeof C=="boolean"?A[T]=C:A[T]=C.clone(),!0;{const R=A[T];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return A[T]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function g(b){const E=b.uniforms;let v=0;const A=16;for(let T=0,R=E.length;T<R;T++){const x=Array.isArray(E[T])?E[T]:[E[T]];for(let M=0,P=x.length;M<P;M++){const k=x[M],F=Array.isArray(k.value)?k.value:[k.value];for(let X=0,Y=F.length;X<Y;X++){const G=F[X],$=_(G),H=v%A,et=H%$.boundary,at=H+et;v+=et,at!==0&&A-at<$.storage&&(v+=A-at),k.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=$.storage}}}const C=v%A;return C>0&&(v+=A-C),b.__size=v,b.__cache={},this}function _(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function m(b){const E=b.target;E.removeEventListener("dispose",m);const v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function f(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Sx{constructor(t={}){const{canvas:e=Jp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const b=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ue,this.toneMapping=Li,this.toneMappingExposure=1;const v=this;let A=!1,C=0,T=0,R=null,x=-1,M=null;const P=new me,k=new me;let F=null;const X=new Ft(0);let Y=0,G=e.width,$=e.height,H=1,et=null,at=null;const mt=new me(0,0,G,$),Tt=new me(0,0,G,$);let qt=!1;const W=new sd;let Q=!1,_t=!1;this.transmissionResolutionScale=1;const st=new ce,St=new ce,$t=new N,bt=new me,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function zt(){return R===null?H:1}let D=n;function gn(S,I){return e.getContext(S,I)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_c}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",lt,!1),D===null){const I="webgl2";if(D=gn(I,S),D===null)throw gn(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let kt,Ht,xt,ie,vt,w,y,O,Z,j,q,gt,ot,ut,Vt,tt,dt,Et,At,ft,Gt,Dt,ne,L;function it(){kt=new L0(D),kt.init(),Dt=new px(D,kt),Ht=new T0(D,kt,t,Dt),xt=new dx(D,kt),Ht.reverseDepthBuffer&&d&&xt.buffers.depth.setReversed(!0),ie=new F0(D),vt=new Qv,w=new fx(D,kt,xt,vt,Ht,Dt,ie),y=new w0(v),O=new D0(v),Z=new Hm(D),ne=new E0(D,Z),j=new I0(D,Z,ie,ne),q=new O0(D,j,Z,ie),At=new N0(D,Ht,w),tt=new A0(vt),gt=new Jv(v,y,O,kt,Ht,ne,tt),ot=new yx(v,vt),ut=new ex,Vt=new ax(kt),Et=new S0(v,y,O,xt,q,p,l),dt=new hx(v,q,Ht),L=new Mx(D,ie,Ht,xt),ft=new b0(D,kt,ie),Gt=new U0(D,kt,ie),ie.programs=gt.programs,v.capabilities=Ht,v.extensions=kt,v.properties=vt,v.renderLists=ut,v.shadowMap=dt,v.state=xt,v.info=ie}it();const V=new vx(v,D);this.xr=V,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=kt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=kt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(S){S!==void 0&&(H=S,this.setSize(G,$,!1))},this.getSize=function(S){return S.set(G,$)},this.setSize=function(S,I,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,$=I,e.width=Math.floor(S*H),e.height=Math.floor(I*H),B===!0&&(e.style.width=S+"px",e.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(G*H,$*H).floor()},this.setDrawingBufferSize=function(S,I,B){G=S,$=I,H=B,e.width=Math.floor(S*B),e.height=Math.floor(I*B),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(mt)},this.setViewport=function(S,I,B,z){S.isVector4?mt.set(S.x,S.y,S.z,S.w):mt.set(S,I,B,z),xt.viewport(P.copy(mt).multiplyScalar(H).round())},this.getScissor=function(S){return S.copy(Tt)},this.setScissor=function(S,I,B,z){S.isVector4?Tt.set(S.x,S.y,S.z,S.w):Tt.set(S,I,B,z),xt.scissor(k.copy(Tt).multiplyScalar(H).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(S){xt.setScissorTest(qt=S)},this.setOpaqueSort=function(S){et=S},this.setTransparentSort=function(S){at=S},this.getClearColor=function(S){return S.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(S=!0,I=!0,B=!0){let z=0;if(S){let U=!1;if(R!==null){const J=R.texture.format;U=J===Sc||J===Mc||J===yc}if(U){const J=R.texture.type,rt=J===fi||J===ur||J===Ds||J===Qr||J===vc||J===xc,ht=Et.getClearColor(),pt=Et.getClearAlpha(),wt=ht.r,Ct=ht.g,yt=ht.b;rt?(g[0]=wt,g[1]=Ct,g[2]=yt,g[3]=pt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=wt,_[1]=Ct,_[2]=yt,_[3]=pt,D.clearBufferiv(D.COLOR,0,_))}else z|=D.COLOR_BUFFER_BIT}I&&(z|=D.DEPTH_BUFFER_BIT),B&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Et.dispose(),ut.dispose(),Vt.dispose(),vt.dispose(),y.dispose(),O.dispose(),q.dispose(),ne.dispose(),L.dispose(),gt.dispose(),V.dispose(),V.removeEventListener("sessionstart",rh),V.removeEventListener("sessionend",sh),Gi.stop()};function K(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const S=ie.autoReset,I=dt.enabled,B=dt.autoUpdate,z=dt.needsUpdate,U=dt.type;it(),ie.autoReset=S,dt.enabled=I,dt.autoUpdate=B,dt.needsUpdate=z,dt.type=U}function lt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Rt(S){const I=S.target;I.removeEventListener("dispose",Rt),he(I)}function he(S){De(S),vt.remove(S)}function De(S){const I=vt.get(S).programs;I!==void 0&&(I.forEach(function(B){gt.releaseProgram(B)}),S.isShaderMaterial&&gt.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,B,z,U,J){I===null&&(I=fe);const rt=U.isMesh&&U.matrixWorld.determinant()<0,ht=tp(S,I,B,z,U);xt.setMaterial(z,rt);let pt=B.index,wt=1;if(z.wireframe===!0){if(pt=j.getWireframeAttribute(B),pt===void 0)return;wt=2}const Ct=B.drawRange,yt=B.attributes.position;let Wt=Ct.start*wt,Zt=(Ct.start+Ct.count)*wt;J!==null&&(Wt=Math.max(Wt,J.start*wt),Zt=Math.min(Zt,(J.start+J.count)*wt)),pt!==null?(Wt=Math.max(Wt,0),Zt=Math.min(Zt,pt.count)):yt!=null&&(Wt=Math.max(Wt,0),Zt=Math.min(Zt,yt.count));const _e=Zt-Wt;if(_e<0||_e===1/0)return;ne.setup(U,z,ht,B,pt);let ue,Xt=ft;if(pt!==null&&(ue=Z.get(pt),Xt=Gt,Xt.setIndex(ue)),U.isMesh)z.wireframe===!0?(xt.setLineWidth(z.wireframeLinewidth*zt()),Xt.setMode(D.LINES)):Xt.setMode(D.TRIANGLES);else if(U.isLine){let Mt=z.linewidth;Mt===void 0&&(Mt=1),xt.setLineWidth(Mt*zt()),U.isLineSegments?Xt.setMode(D.LINES):U.isLineLoop?Xt.setMode(D.LINE_LOOP):Xt.setMode(D.LINE_STRIP)}else U.isPoints?Xt.setMode(D.POINTS):U.isSprite&&Xt.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ji("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Xt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))Xt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Mt=U._multiDrawStarts,Re=U._multiDrawCounts,Kt=U._multiDrawCount,Ln=pt?Z.get(pt).bytesPerElement:1,xr=vt.get(z).currentProgram.getUniforms();for(let an=0;an<Kt;an++)xr.setValue(D,"_gl_DrawID",an),Xt.render(Mt[an]/Ln,Re[an])}else if(U.isInstancedMesh)Xt.renderInstances(Wt,_e,U.count);else if(B.isInstancedBufferGeometry){const Mt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Re=Math.min(B.instanceCount,Mt);Xt.renderInstances(Wt,_e,Re)}else Xt.render(Wt,_e)};function jt(S,I,B){S.transparent===!0&&S.side===Ze&&S.forceSinglePass===!1?(S.side=Je,S.needsUpdate=!0,Js(S,I,B),S.side=Kn,S.needsUpdate=!0,Js(S,I,B),S.side=Ze):Js(S,I,B)}this.compile=function(S,I,B=null){B===null&&(B=S),f=Vt.get(B),f.init(I),E.push(f),B.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),S!==B&&S.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const z=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const J=U.material;if(J)if(Array.isArray(J))for(let rt=0;rt<J.length;rt++){const ht=J[rt];jt(ht,B,U),z.add(ht)}else jt(J,B,U),z.add(J)}),f=E.pop(),z},this.compileAsync=function(S,I,B=null){const z=this.compile(S,I,B);return new Promise(U=>{function J(){if(z.forEach(function(rt){vt.get(rt).currentProgram.isReady()&&z.delete(rt)}),z.size===0){U(S);return}setTimeout(J,10)}kt.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Dn=null;function ei(S){Dn&&Dn(S)}function rh(){Gi.stop()}function sh(){Gi.start()}const Gi=new ad;Gi.setAnimationLoop(ei),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(S){Dn=S,V.setAnimationLoop(S),S===null?Gi.stop():Gi.start()},V.addEventListener("sessionstart",rh),V.addEventListener("sessionend",sh),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(I),I=V.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,I,R),f=Vt.get(S,E.length),f.init(I),E.push(f),St.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),W.setFromProjectionMatrix(St),_t=this.localClippingEnabled,Q=tt.init(this.clippingPlanes,_t),m=ut.get(S,b.length),m.init(),b.push(m),V.enabled===!0&&V.isPresenting===!0){const J=v.xr.getDepthSensingMesh();J!==null&&pa(J,I,-1/0,v.sortObjects)}pa(S,I,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(et,at),oe=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,oe&&Et.addToRenderList(m,S),this.info.render.frame++,Q===!0&&tt.beginShadows();const B=f.state.shadowsArray;dt.render(B,S,I),Q===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,U=m.transmissive;if(f.setupLights(),I.isArrayCamera){const J=I.cameras;if(U.length>0)for(let rt=0,ht=J.length;rt<ht;rt++){const pt=J[rt];ah(z,U,S,pt)}oe&&Et.render(S);for(let rt=0,ht=J.length;rt<ht;rt++){const pt=J[rt];oh(m,S,pt,pt.viewport)}}else U.length>0&&ah(z,U,S,I),oe&&Et.render(S),oh(m,S,I);R!==null&&T===0&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(v,S,I),ne.resetDefaultState(),x=-1,M=null,E.pop(),E.length>0?(f=E[E.length-1],Q===!0&&tt.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function pa(S,I,B,z){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||W.intersectsSprite(S)){z&&bt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(St);const rt=q.update(S),ht=S.material;ht.visible&&m.push(S,rt,ht,B,bt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||W.intersectsObject(S))){const rt=q.update(S),ht=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),bt.copy(S.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),bt.copy(rt.boundingSphere.center)),bt.applyMatrix4(S.matrixWorld).applyMatrix4(St)),Array.isArray(ht)){const pt=rt.groups;for(let wt=0,Ct=pt.length;wt<Ct;wt++){const yt=pt[wt],Wt=ht[yt.materialIndex];Wt&&Wt.visible&&m.push(S,rt,Wt,B,bt.z,yt)}}else ht.visible&&m.push(S,rt,ht,B,bt.z,null)}}const J=S.children;for(let rt=0,ht=J.length;rt<ht;rt++)pa(J[rt],I,B,z)}function oh(S,I,B,z){const U=S.opaque,J=S.transmissive,rt=S.transparent;f.setupLightsView(B),Q===!0&&tt.setGlobalState(v.clippingPlanes,B),z&&xt.viewport(P.copy(z)),U.length>0&&js(U,I,B),J.length>0&&js(J,I,B),rt.length>0&&js(rt,I,B),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function ah(S,I,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new dr(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?Gs:fi,minFilter:rr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const J=f.state.transmissionRenderTarget[z.id],rt=z.viewport||P;J.setSize(rt.z*v.transmissionResolutionScale,rt.w*v.transmissionResolutionScale);const ht=v.getRenderTarget();v.setRenderTarget(J),v.getClearColor(X),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),oe&&Et.render(B);const pt=v.toneMapping;v.toneMapping=Li;const wt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),Q===!0&&tt.setGlobalState(v.clippingPlanes,z),js(S,B,z),w.updateMultisampleRenderTarget(J),w.updateRenderTargetMipmap(J),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let yt=0,Wt=I.length;yt<Wt;yt++){const Zt=I[yt],_e=Zt.object,ue=Zt.geometry,Xt=Zt.material,Mt=Zt.group;if(Xt.side===Ze&&_e.layers.test(z.layers)){const Re=Xt.side;Xt.side=Je,Xt.needsUpdate=!0,lh(_e,B,z,ue,Xt,Mt),Xt.side=Re,Xt.needsUpdate=!0,Ct=!0}}Ct===!0&&(w.updateMultisampleRenderTarget(J),w.updateRenderTargetMipmap(J))}v.setRenderTarget(ht),v.setClearColor(X,Y),wt!==void 0&&(z.viewport=wt),v.toneMapping=pt}function js(S,I,B){const z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,J=S.length;U<J;U++){const rt=S[U],ht=rt.object,pt=rt.geometry,wt=z===null?rt.material:z,Ct=rt.group;ht.layers.test(B.layers)&&lh(ht,I,B,pt,wt,Ct)}}function lh(S,I,B,z,U,J){S.onBeforeRender(v,I,B,z,U,J),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(v,I,B,z,S,J),U.transparent===!0&&U.side===Ze&&U.forceSinglePass===!1?(U.side=Je,U.needsUpdate=!0,v.renderBufferDirect(B,I,z,U,S,J),U.side=Kn,U.needsUpdate=!0,v.renderBufferDirect(B,I,z,U,S,J),U.side=Ze):v.renderBufferDirect(B,I,z,U,S,J),S.onAfterRender(v,I,B,z,U,J)}function Js(S,I,B){I.isScene!==!0&&(I=fe);const z=vt.get(S),U=f.state.lights,J=f.state.shadowsArray,rt=U.state.version,ht=gt.getParameters(S,U.state,J,I,B),pt=gt.getProgramCacheKey(ht);let wt=z.programs;z.environment=S.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(S.isMeshStandardMaterial?O:y).get(S.envMap||z.environment),z.envMapRotation=z.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,wt===void 0&&(S.addEventListener("dispose",Rt),wt=new Map,z.programs=wt);let Ct=wt.get(pt);if(Ct!==void 0){if(z.currentProgram===Ct&&z.lightsStateVersion===rt)return hh(S,ht),Ct}else ht.uniforms=gt.getUniforms(S),S.onBeforeCompile(ht,v),Ct=gt.acquireProgram(ht,pt),wt.set(pt,Ct),z.uniforms=ht.uniforms;const yt=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(yt.clippingPlanes=tt.uniform),hh(S,ht),z.needsLights=np(S),z.lightsStateVersion=rt,z.needsLights&&(yt.ambientLightColor.value=U.state.ambient,yt.lightProbe.value=U.state.probe,yt.directionalLights.value=U.state.directional,yt.directionalLightShadows.value=U.state.directionalShadow,yt.spotLights.value=U.state.spot,yt.spotLightShadows.value=U.state.spotShadow,yt.rectAreaLights.value=U.state.rectArea,yt.ltc_1.value=U.state.rectAreaLTC1,yt.ltc_2.value=U.state.rectAreaLTC2,yt.pointLights.value=U.state.point,yt.pointLightShadows.value=U.state.pointShadow,yt.hemisphereLights.value=U.state.hemi,yt.directionalShadowMap.value=U.state.directionalShadowMap,yt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,yt.spotShadowMap.value=U.state.spotShadowMap,yt.spotLightMatrix.value=U.state.spotLightMatrix,yt.spotLightMap.value=U.state.spotLightMap,yt.pointShadowMap.value=U.state.pointShadowMap,yt.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Ct,z.uniformsList=null,Ct}function ch(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=Do.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function hh(S,I){const B=vt.get(S);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function tp(S,I,B,z,U){I.isScene!==!0&&(I=fe),w.resetTextureUnits();const J=I.fog,rt=z.isMeshStandardMaterial?I.environment:null,ht=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:es,pt=(z.isMeshStandardMaterial?O:y).get(z.envMap||rt),wt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ct=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),yt=!!B.morphAttributes.position,Wt=!!B.morphAttributes.normal,Zt=!!B.morphAttributes.color;let _e=Li;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_e=v.toneMapping);const ue=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Xt=ue!==void 0?ue.length:0,Mt=vt.get(z),Re=f.state.lights;if(Q===!0&&(_t===!0||S!==M)){const He=S===M&&z.id===x;tt.setState(z,S,He)}let Kt=!1;z.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Re.state.version||Mt.outputColorSpace!==ht||U.isBatchedMesh&&Mt.batching===!1||!U.isBatchedMesh&&Mt.batching===!0||U.isBatchedMesh&&Mt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Mt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Mt.instancing===!1||!U.isInstancedMesh&&Mt.instancing===!0||U.isSkinnedMesh&&Mt.skinning===!1||!U.isSkinnedMesh&&Mt.skinning===!0||U.isInstancedMesh&&Mt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Mt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Mt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Mt.instancingMorph===!1&&U.morphTexture!==null||Mt.envMap!==pt||z.fog===!0&&Mt.fog!==J||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==tt.numPlanes||Mt.numIntersection!==tt.numIntersection)||Mt.vertexAlphas!==wt||Mt.vertexTangents!==Ct||Mt.morphTargets!==yt||Mt.morphNormals!==Wt||Mt.morphColors!==Zt||Mt.toneMapping!==_e||Mt.morphTargetsCount!==Xt)&&(Kt=!0):(Kt=!0,Mt.__version=z.version);let Ln=Mt.currentProgram;Kt===!0&&(Ln=Js(z,I,U));let xr=!1,an=!1,ms=!1;const re=Ln.getUniforms(),vn=Mt.uniforms;if(xt.useProgram(Ln.program)&&(xr=!0,an=!0,ms=!0),z.id!==x&&(x=z.id,an=!0),xr||M!==S){xt.buffers.depth.getReversed()?(st.copy(S.projectionMatrix),tm(st),em(st),re.setValue(D,"projectionMatrix",st)):re.setValue(D,"projectionMatrix",S.projectionMatrix),re.setValue(D,"viewMatrix",S.matrixWorldInverse);const Ye=re.map.cameraPosition;Ye!==void 0&&Ye.setValue(D,$t.setFromMatrixPosition(S.matrixWorld)),Ht.logarithmicDepthBuffer&&re.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&re.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,an=!0,ms=!0)}if(U.isSkinnedMesh){re.setOptional(D,U,"bindMatrix"),re.setOptional(D,U,"bindMatrixInverse");const He=U.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),re.setValue(D,"boneTexture",He.boneTexture,w))}U.isBatchedMesh&&(re.setOptional(D,U,"batchingTexture"),re.setValue(D,"batchingTexture",U._matricesTexture,w),re.setOptional(D,U,"batchingIdTexture"),re.setValue(D,"batchingIdTexture",U._indirectTexture,w),re.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&re.setValue(D,"batchingColorTexture",U._colorsTexture,w));const xn=B.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&At.update(U,B,Ln),(an||Mt.receiveShadow!==U.receiveShadow)&&(Mt.receiveShadow=U.receiveShadow,re.setValue(D,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(vn.envMap.value=pt,vn.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(vn.envMapIntensity.value=I.environmentIntensity),an&&(re.setValue(D,"toneMappingExposure",v.toneMappingExposure),Mt.needsLights&&ep(vn,ms),J&&z.fog===!0&&ot.refreshFogUniforms(vn,J),ot.refreshMaterialUniforms(vn,z,H,$,f.state.transmissionRenderTarget[S.id]),Do.upload(D,ch(Mt),vn,w)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Do.upload(D,ch(Mt),vn,w),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&re.setValue(D,"center",U.center),re.setValue(D,"modelViewMatrix",U.modelViewMatrix),re.setValue(D,"normalMatrix",U.normalMatrix),re.setValue(D,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const He=z.uniformsGroups;for(let Ye=0,ma=He.length;Ye<ma;Ye++){const Vi=He[Ye];L.update(Vi,Ln),L.bind(Vi,Ln)}}return Ln}function ep(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function np(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,I,B){vt.get(S.texture).__webglTexture=I,vt.get(S.depthTexture).__webglTexture=B;const z=vt.get(S);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,I){const B=vt.get(S);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0};const ip=D.createFramebuffer();this.setRenderTarget=function(S,I=0,B=0){R=S,C=I,T=B;let z=!0,U=null,J=!1,rt=!1;if(S){const pt=vt.get(S);if(pt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(D.FRAMEBUFFER,null),z=!1;else if(pt.__webglFramebuffer===void 0)w.setupRenderTarget(S);else if(pt.__hasExternalTextures)w.rebindTextures(S,vt.get(S.texture).__webglTexture,vt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const yt=S.depthTexture;if(pt.__boundDepthTexture!==yt){if(yt!==null&&vt.has(yt)&&(S.width!==yt.image.width||S.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(S)}}const wt=S.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(rt=!0);const Ct=vt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ct[I])?U=Ct[I][B]:U=Ct[I],J=!0):S.samples>0&&w.useMultisampledRTT(S)===!1?U=vt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ct)?U=Ct[B]:U=Ct,P.copy(S.viewport),k.copy(S.scissor),F=S.scissorTest}else P.copy(mt).multiplyScalar(H).floor(),k.copy(Tt).multiplyScalar(H).floor(),F=qt;if(B!==0&&(U=ip),xt.bindFramebuffer(D.FRAMEBUFFER,U)&&z&&xt.drawBuffers(S,U),xt.viewport(P),xt.scissor(k),xt.setScissorTest(F),J){const pt=vt.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,pt.__webglTexture,B)}else if(rt){const pt=vt.get(S.texture),wt=I;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,pt.__webglTexture,B,wt)}else if(S!==null&&B!==0){const pt=vt.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pt.__webglTexture,B)}x=-1},this.readRenderTargetPixels=function(S,I,B,z,U,J,rt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=vt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&rt!==void 0&&(ht=ht[rt]),ht){xt.bindFramebuffer(D.FRAMEBUFFER,ht);try{const pt=S.texture,wt=pt.format,Ct=pt.type;if(!Ht.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-z&&B>=0&&B<=S.height-U&&D.readPixels(I,B,z,U,Dt.convert(wt),Dt.convert(Ct),J)}finally{const pt=R!==null?vt.get(R).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(S,I,B,z,U,J,rt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=vt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&rt!==void 0&&(ht=ht[rt]),ht){const pt=S.texture,wt=pt.format,Ct=pt.type;if(!Ht.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=S.width-z&&B>=0&&B<=S.height-U){xt.bindFramebuffer(D.FRAMEBUFFER,ht);const yt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,yt),D.bufferData(D.PIXEL_PACK_BUFFER,J.byteLength,D.STREAM_READ),D.readPixels(I,B,z,U,Dt.convert(wt),Dt.convert(Ct),0);const Wt=R!==null?vt.get(R).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,Wt);const Zt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Qp(D,Zt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,yt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,J),D.deleteBuffer(yt),D.deleteSync(Zt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,I=null,B=0){S.isTexture!==!0&&(Ji("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,S=arguments[1]);const z=Math.pow(2,-B),U=Math.floor(S.image.width*z),J=Math.floor(S.image.height*z),rt=I!==null?I.x:0,ht=I!==null?I.y:0;w.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,B,0,0,rt,ht,U,J),xt.unbindTexture()};const rp=D.createFramebuffer(),sp=D.createFramebuffer();this.copyTextureToTexture=function(S,I,B=null,z=null,U=0,J=null){S.isTexture!==!0&&(Ji("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,S=arguments[1],I=arguments[2],J=arguments[3]||0,B=null),J===null&&(U!==0?(Ji("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=U,U=0):J=0);let rt,ht,pt,wt,Ct,yt,Wt,Zt,_e;const ue=S.isCompressedTexture?S.mipmaps[J]:S.image;if(B!==null)rt=B.max.x-B.min.x,ht=B.max.y-B.min.y,pt=B.isBox3?B.max.z-B.min.z:1,wt=B.min.x,Ct=B.min.y,yt=B.isBox3?B.min.z:0;else{const xn=Math.pow(2,-U);rt=Math.floor(ue.width*xn),ht=Math.floor(ue.height*xn),S.isDataArrayTexture?pt=ue.depth:S.isData3DTexture?pt=Math.floor(ue.depth*xn):pt=1,wt=0,Ct=0,yt=0}z!==null?(Wt=z.x,Zt=z.y,_e=z.z):(Wt=0,Zt=0,_e=0);const Xt=Dt.convert(I.format),Mt=Dt.convert(I.type);let Re;I.isData3DTexture?(w.setTexture3D(I,0),Re=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(w.setTexture2DArray(I,0),Re=D.TEXTURE_2D_ARRAY):(w.setTexture2D(I,0),Re=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const Kt=D.getParameter(D.UNPACK_ROW_LENGTH),Ln=D.getParameter(D.UNPACK_IMAGE_HEIGHT),xr=D.getParameter(D.UNPACK_SKIP_PIXELS),an=D.getParameter(D.UNPACK_SKIP_ROWS),ms=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ue.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ue.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,wt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ct),D.pixelStorei(D.UNPACK_SKIP_IMAGES,yt);const re=S.isDataArrayTexture||S.isData3DTexture,vn=I.isDataArrayTexture||I.isData3DTexture;if(S.isDepthTexture){const xn=vt.get(S),He=vt.get(I),Ye=vt.get(xn.__renderTarget),ma=vt.get(He.__renderTarget);xt.bindFramebuffer(D.READ_FRAMEBUFFER,Ye.__webglFramebuffer),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,ma.__webglFramebuffer);for(let Vi=0;Vi<pt;Vi++)re&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(S).__webglTexture,U,yt+Vi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(I).__webglTexture,J,_e+Vi)),D.blitFramebuffer(wt,Ct,rt,ht,Wt,Zt,rt,ht,D.DEPTH_BUFFER_BIT,D.NEAREST);xt.bindFramebuffer(D.READ_FRAMEBUFFER,null),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(U!==0||S.isRenderTargetTexture||vt.has(S)){const xn=vt.get(S),He=vt.get(I);xt.bindFramebuffer(D.READ_FRAMEBUFFER,rp),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,sp);for(let Ye=0;Ye<pt;Ye++)re?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xn.__webglTexture,U,yt+Ye):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xn.__webglTexture,U),vn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,He.__webglTexture,J,_e+Ye):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,He.__webglTexture,J),U!==0?D.blitFramebuffer(wt,Ct,rt,ht,Wt,Zt,rt,ht,D.COLOR_BUFFER_BIT,D.NEAREST):vn?D.copyTexSubImage3D(Re,J,Wt,Zt,_e+Ye,wt,Ct,rt,ht):D.copyTexSubImage2D(Re,J,Wt,Zt,wt,Ct,rt,ht);xt.bindFramebuffer(D.READ_FRAMEBUFFER,null),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else vn?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(Re,J,Wt,Zt,_e,rt,ht,pt,Xt,Mt,ue.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(Re,J,Wt,Zt,_e,rt,ht,pt,Xt,ue.data):D.texSubImage3D(Re,J,Wt,Zt,_e,rt,ht,pt,Xt,Mt,ue):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,J,Wt,Zt,rt,ht,Xt,Mt,ue.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,J,Wt,Zt,ue.width,ue.height,Xt,ue.data):D.texSubImage2D(D.TEXTURE_2D,J,Wt,Zt,rt,ht,Xt,Mt,ue);D.pixelStorei(D.UNPACK_ROW_LENGTH,Kt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ln),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xr),D.pixelStorei(D.UNPACK_SKIP_ROWS,an),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ms),J===0&&I.generateMipmaps&&D.generateMipmap(Re),xt.unbindTexture()},this.copyTextureToTexture3D=function(S,I,B=null,z=null,U=0){return S.isTexture!==!0&&(Ji("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,S=arguments[2],I=arguments[3],U=arguments[4]||0),Ji('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,I,B,z,U)},this.initRenderTarget=function(S){vt.get(S).__webglFramebuffer===void 0&&w.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),xt.unbindTexture()},this.resetState=function(){C=0,T=0,R=null,xt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class $n{constructor(t,e,n,r,s="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),$n.nextNameID=$n.nextNameID||0,this.$name.id="lil-gui-name-"+ ++$n.nextNameID,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled||(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t)),this}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Ex extends $n{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Zl(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),!!e&&"#"+e}const bx={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Zl,toHexString:Zl},Is={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},Tx={isPrimitive:!1,match:Array.isArray,fromHexString(i,t,e=1){const n=Is.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(255&n)/255*e},toHexString:([i,t,e],n=1)=>Is.toHexString(i*(n=255/n)<<16^t*n<<8^e*n<<0)},Ax={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=Is.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(255&n)/255*e},toHexString:({r:i,g:t,b:e},n=1)=>Is.toHexString(i*(n=255/n)<<16^t*n<<8^e*n<<0)},wx=[bx,Is,Tx,Ax];class Cx extends $n{constructor(t,e,n,r){var s;super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(s=this.initialValue,wx.find(o=>o.match(s))),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=Zl(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Xa extends $n{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Rx extends $n{constructor(t,e,n,r,s,o){super(t,e,n,"number"),this._initInput(),this.min(r),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=100*e+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=h=>{const u=parseFloat(this.$input.value);isNaN(u)||(this._snapClampSetValue(u+h),this.$input.value=this.getValue())};let e,n,r,s,o,a=!1;const l=h=>{if(a){const u=h.clientX-e,d=h.clientY-n;Math.abs(d)>5?(h.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(u)>5&&c()}if(!a){const u=h.clientY-r;o-=u*this._step*this._arrowKeyMultiplier(h),s+o>this._max?o=this._max-s:s+o<this._min&&(o=this._min-s),this._snapClampSetValue(s+o)}r=h.clientY},c=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c)};this.$input.addEventListener("input",()=>{let h=parseFloat(this.$input.value);isNaN(h)||(this._stepExplicit&&(h=this._snap(h)),this.setValue(this._clamp(h)))}),this.$input.addEventListener("keydown",h=>{h.code==="Enter"&&this.$input.blur(),h.code==="ArrowUp"&&(h.preventDefault(),t(this._step*this._arrowKeyMultiplier(h))),h.code==="ArrowDown"&&(h.preventDefault(),t(this._step*this._arrowKeyMultiplier(h)*-1))}),this.$input.addEventListener("wheel",h=>{this._inputFocused&&(h.preventDefault(),t(this._step*this._normalizeMouseWheel(h)))},{passive:!1}),this.$input.addEventListener("mousedown",h=>{e=h.clientX,n=r=h.clientY,a=!0,s=this.getValue(),o=0,window.addEventListener("mousemove",l),window.addEventListener("mouseup",c)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=d=>{const p=this.$slider.getBoundingClientRect();let g=(_=d,m=p.left,f=p.right,b=this._min,E=this._max,(_-m)/(f-m)*(E-b)+b);var _,m,f,b,E;this._snapClampSetValue(g)},e=d=>{t(d.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",n)};let r,s,o=!1;const a=d=>{d.preventDefault(),this._setDraggingStyle(!0),t(d.touches[0].clientX),o=!1},l=d=>{if(o){const p=d.touches[0].clientX-r,g=d.touches[0].clientY-s;Math.abs(p)>Math.abs(g)?a(d):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c))}else d.preventDefault(),t(d.touches[0].clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c)},h=this._callOnFinishChange.bind(this);let u;this.$slider.addEventListener("mousedown",d=>{this._setDraggingStyle(!0),t(d.clientX),window.addEventListener("mousemove",e),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",d=>{d.touches.length>1||(this._hasScrollBar?(r=d.touches[0].clientX,s=d.touches[0].clientY,o=!0):a(d),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",c))},{passive:!1}),this.$slider.addEventListener("wheel",d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const p=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+p),this.$input.value=this.getValue(),clearTimeout(u),u=setTimeout(h,400)},{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle("lil-gui-"+e,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Px extends $n{constructor(t,e,n,r){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(s=>{const o=document.createElement("option");o.innerHTML=s,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class Dx extends $n{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let du=!1;class Cc{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:r,title:s="Controls",injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{l.code!=="Enter"&&l.code!=="Space"||(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!du&&o&&(function(l){const c=document.createElement("style");c.innerHTML=l;const h=document.querySelector("head link[rel=stylesheet], head style");h?document.head.insertBefore(c,h):document.head.appendChild(c)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),du=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(t,e,n,r,s){if(Object(n)===n)return new Px(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new Rx(this,t,e,n,r,s);case"boolean":return new Ex(this,t,e);case"string":return new Dx(this,t,e);case"function":return new Xa(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new Cx(this,t,e,n)}addFolder(t){return new Cc({parent:this,title:t})}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Xa||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Xa)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const na=new Cc,Cn={dispatchEvent(i,t){const e=new CustomEvent(i,{detail:t});window.dispatchEvent(e)},addEventListener(i,t){window.addEventListener(i,e=>{t(e.detail)})}},Xe=new Am,Ot=new En(45,window.innerWidth/window.innerHeight,.1,100),Wr={x:0,y:0,z:3.7};Ot.position.set(Wr.x,Wr.y,Wr.z);Ot.lookAt(0,0,0);const ia=na.addFolder("camera");ia.close();const ra=ia.addFolder("位置控制");ra.add(Ot.position,"x").min(-10).max(10).name("X轴位置");ra.add(Ot.position,"y").min(-10).max(10).name("Y轴位置");ra.add(Ot.position,"z").min(-10).max(10).name("Z轴位置");const dd=!0,us=ia.addFolder("视角控制"),Me={fov:Ot.fov,near:Ot.near,far:Ot.far,lookAtX:0,lookAtY:0,lookAtZ:0,isMove:dd};us.add(Me,"fov",30,120).name("视场角").onChange(i=>{Ot.fov=i,Ot.updateProjectionMatrix()});us.add(Me,"near",.1,10).name("近平面").onChange(i=>{Ot.near=i,Ot.updateProjectionMatrix()});us.add(Me,"far",10,1e3).name("远平面").onChange(i=>{Ot.far=i,Ot.updateProjectionMatrix()});us.add(Me,"isMove").name("相机移动").onChange(i=>{});const sa=ia.addFolder("朝向控制");sa.add(Me,"lookAtX",-10,10).name("X轴朝向").onChange(()=>{Ot.lookAt(Me.lookAtX,Me.lookAtY,Me.lookAtZ)});sa.add(Me,"lookAtY",-10,10).name("Y轴朝向").onChange(()=>{Ot.lookAt(Me.lookAtX,Me.lookAtY,Me.lookAtZ)});sa.add(Me,"lookAtZ",-10,10).name("Z轴朝向").onChange(()=>{Ot.lookAt(Me.lookAtX,Me.lookAtY,Me.lookAtZ)});us.add;us.open();ra.open();sa.open();const Bi=new Sx;Bi.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(Bi.domElement);Bi.render(Xe,Ot);const fd=new Om;function pd(){if(requestAnimationFrame(pd),Me.isMove){const i=fd.getElapsedTime(),t=.1,e=.2;Ot.position.x=Wr.x+Math.sin(i*e)*t,Ot.position.y=Wr.y+Math.cos(i*e)*t,Ot.position.z=Wr.z+Math.sin(i*e*.5)*t*.5}Bi.render(Xe,Ot)}pd();Cn.addEventListener("custom-solar-animate",()=>{Me.isMove=!1});Cn.addEventListener("custom-solar-reset",()=>{Me.isMove=dd});const fu={type:"change"},Rc={type:"start"},md={type:"end"},Eo=new Qo,pu=new bi,Lx=Math.cos(70*jp.DEG2RAD),ye=new N,qe=2*Math.PI,Qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ya=1e-6;class Ix extends zm{constructor(t,e=null){super(t,e),this.state=Qt.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hr.ROTATE,MIDDLE:Hr.DOLLY,RIGHT:Hr.PAN},this.touches={ONE:Nr.ROTATE,TWO:Nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new fr,this._lastTargetPosition=new N,this._quat=new fr().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new kh,this._sphericalDelta=new kh,this._scale=1,this._panOffset=new N,this._rotateStart=new Ut,this._rotateEnd=new Ut,this._rotateDelta=new Ut,this._panStart=new Ut,this._panEnd=new Ut,this._panDelta=new Ut,this._dollyStart=new Ut,this._dollyEnd=new Ut,this._dollyDelta=new Ut,this._dollyDirection=new N,this._mouse=new Ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Fx.bind(this),this._onPointerDown=Ux.bind(this),this._onPointerUp=Nx.bind(this),this._onContextMenu=Vx.bind(this),this._onMouseWheel=zx.bind(this),this._onKeyDown=kx.bind(this),this._onTouchStart=Hx.bind(this),this._onTouchMove=Gx.bind(this),this._onMouseDown=Ox.bind(this),this._onMouseMove=Bx.bind(this),this._interceptControlDown=Wx.bind(this),this._interceptControlUp=Xx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fu),this.update(),this.state=Qt.NONE}update(t=null){const e=this.object.position;ye.copy(e).sub(this.target),ye.applyQuaternion(this._quat),this._spherical.setFromVector3(ye),this.autoRotate&&this.state===Qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=qe:n>Math.PI&&(n-=qe),r<-Math.PI?r+=qe:r>Math.PI&&(r-=qe),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(ye.setFromSpherical(this._spherical),ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ye.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Eo.origin.copy(this.object.position),Eo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Eo.direction))<Lx?this.object.lookAt(this.target):(pu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Eo.intersectPlane(pu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ya||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ya||this._lastTargetPosition.distanceToSquared(this.target)>Ya?(this.dispatchEvent(fu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qe/60*this.autoRotateSpeed*t:qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ye.setFromMatrixColumn(e,0),ye.multiplyScalar(-t),this._panOffset.add(ye)}_panUp(t,e){this.screenSpacePanning===!0?ye.setFromMatrixColumn(e,1):(ye.setFromMatrixColumn(e,0),ye.crossVectors(this.object.up,ye)),ye.multiplyScalar(t),this._panOffset.add(ye)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;ye.copy(r).sub(this.target);let s=ye.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Ux(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Fx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Nx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(md),this.state=Qt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Ox(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Hr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Qt.DOLLY;break;case Hr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qt.ROTATE}break;case Hr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qt.PAN}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(Rc)}function Bx(i){switch(this.state){case Qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function zx(i){this.enabled===!1||this.enableZoom===!1||this.state!==Qt.NONE||(i.preventDefault(),this.dispatchEvent(Rc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(md))}function kx(i){this.enabled!==!1&&this._handleKeyDown(i)}function Hx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Nr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Qt.TOUCH_ROTATE;break;case Nr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Qt.TOUCH_PAN;break;default:this.state=Qt.NONE}break;case 2:switch(this.touches.TWO){case Nr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Qt.TOUCH_DOLLY_PAN;break;case Nr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Qt.TOUCH_DOLLY_ROTATE;break;default:this.state=Qt.NONE}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(Rc)}function Gx(i){switch(this._trackPointer(i),this.state){case Qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Qt.NONE}}function Vx(i){this.enabled!==!1&&i.preventDefault()}function Wx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Xx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Yx=new Ix(Ot,Bi.domElement);_d(Bi,!0);function _d(i,t=!1){const e=i.domElement,n=window.devicePixelRatio,r=Math.floor(e.clientWidth*n),s=Math.floor(e.clientHeight*n),o=e.width!==r||e.height!==s;return Ot.updateProjectionMatrix(),(o||t)&&i.setSize(r,s,!1),o}window.addEventListener("resize",()=>_d(Bi));const gd="/genshin-impact-moon/assets/FrostmoonScions-C6L032-i.png";function $x(i,t=gd){const e=new zn(1,1),n=new kn().load(t),r=i.addFolder("Satellites"),s=new sn({transparent:!0,depthWrite:!1,side:Ze,uniforms:{u_time:{value:0},u_opacity:{value:.5},u_texture:{value:n},u_scanWidth:{value:.05},u_scanSpeed:{value:.32},u_scanIntensity:{value:1.2},u_scanSmoothness:{value:.22},u_starCount:{value:10},u_starSize:{value:.005},u_starBrightness:{value:.9},u_twinkleSpeed:{value:2.5},u_starMovementSpeed:{value:.12},u_movementRange:{value:.2}},vertexShader:`
    varying vec2 v_uv;
    uniform float u_time;
    void main(){
        v_uv = uv;
        vec4 modelPosition = modelMatrix * vec4( position, 1.0 );
        gl_Position = projectionMatrix * viewMatrix * modelPosition;
    }
    `,fragmentShader:`
    precision lowp float;
    varying vec2 v_uv;
    uniform sampler2D u_texture;
    uniform float u_time;
    uniform float u_opacity;
    uniform float u_scanWidth;
    uniform float u_scanSpeed;
    uniform float u_scanIntensity;
    uniform float u_scanSmoothness;
    uniform float u_starCount;
    uniform float u_starSize;
    uniform float u_starBrightness;
    uniform float u_twinkleSpeed;
    uniform float u_starMovementSpeed;
    uniform float u_movementRange;
    
    // 简单的伪随机函数
    float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }
    
    // 星星函数，根据位置和时间生成星星
    float star(vec2 uv, float index) {
        // 为每个星星生成一个随机位置
        float randomX = random(vec2(index, 0.5));
        float randomY = random(vec2(index, 0.8));
        
        // 添加基于时间的移动，并使用u_movementRange限制移动范围
        float moveX = sin(u_time * 0.1 * random(vec2(index, 0.3))) * u_starMovementSpeed * u_movementRange;
        float moveY = cos(u_time * 0.1 * random(vec2(index, 0.7))) * u_starMovementSpeed * u_movementRange;
        
        // 星星位置
        vec2 starPos = vec2(randomX + moveX, randomY + moveY);
        
        // 计算当前像素到星星中心的距离
        float dist = distance(uv, starPos);
        
        // 星星闪烁效果
        float twinkle = sin(u_time * u_twinkleSpeed * random(vec2(index, 0.9))) * 0.5 + 0.5;
        
        // 如果距离小于星星大小，则显示星星
        return smoothstep(u_starSize, 0.0, dist) * u_starBrightness * twinkle;
    }
    
    void main(){
        vec4 text_color = texture2D(u_texture, v_uv);
        
        // 获取当前扫描位置
        float scanPos = mod(u_time * u_scanSpeed, 1.0);
        
        // 创建柔和的扫描线效果
        float scanStart = scanPos;
        float scanEnd = scanPos + u_scanWidth;
        
        // 使用smoothstep创建平滑过渡的扫描线
        float scanLine = smoothstep(scanStart - u_scanSmoothness, scanStart + u_scanSmoothness, v_uv.x) - 
                         smoothstep(scanEnd - u_scanSmoothness, scanEnd + u_scanSmoothness, v_uv.x);
        
        // 添加星星
        // float starLight = 0.0;
        // for(float i = 0.0; i < 10.0; i++) {
        //     if(i >= u_starCount) break; // 限制星星数量
        //     starLight += star(v_uv, i);
        // }
        
        // 混合原始纹理、扫描线和星星
        vec3 finalColor = text_color.rgb + vec3(scanLine * u_scanIntensity) /* + vec3(starLight) */;
        gl_FragColor = vec4(finalColor, text_color.a * u_opacity);
    }
    `,blending:Ps}),o=new Ae(e,s);r.add(s.uniforms.u_scanWidth,"value",.01,.5).name("扫描宽度"),r.add(s.uniforms.u_scanSpeed,"value",.1,3).name("扫描速度"),r.add(s.uniforms.u_scanIntensity,"value",.1,5).name("扫描强度"),r.add(s.uniforms.u_scanSmoothness,"value",0,.5).name("扫描柔和度");function a(){requestAnimationFrame(a),!hr.isAnimation&&(s.uniforms.u_time.value+=.01,s.uniforms.u_opacity.value=1.5+Math.sin(s.uniforms.u_time.value*2)*.5)}return a(),o}function li(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function vd(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},is={duration:.5,overwrite:!1,delay:0},Pc,Pe,se,qn=1e8,Oe=1/qn,Kl=Math.PI*2,qx=Kl/4,Zx=0,xd=Math.sqrt,Kx=Math.cos,jx=Math.sin,Ce=function(t){return typeof t=="string"},de=function(t){return typeof t=="function"},pi=function(t){return typeof t=="number"},Dc=function(t){return typeof t>"u"},Jn=function(t){return typeof t=="object"},tn=function(t){return t!==!1},Lc=function(){return typeof window<"u"},bo=function(t){return de(t)||Ce(t)},yd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Be=Array.isArray,jl=/(?:-?\.?\d|\.)+/gi,Md=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Br=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$a=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Sd=/[+-]=-?[.\d]+/,Ed=/[^,'"\[\]\s]+/gi,Jx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ae,Hn,Jl,Ic,mn={},Ho={},bd,Td=function(t){return(Ho=rs(t,mn))&&on},Uc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Us=function(t,e){return!e&&console.warn(t)},Ad=function(t,e){return t&&(mn[t]=e)&&Ho&&(Ho[t]=e)||mn},Fs=function(){return 0},Qx={suppressEvents:!0,isStart:!0,kill:!1},Lo={suppressEvents:!0,kill:!1},ty={suppressEvents:!0},Fc={},Ii=[],Ql={},wd,hn={},qa={},mu=30,Io=[],Nc="",Oc=function(t){var e=t[0],n,r;if(Jn(e)||de(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=Io.length;r--&&!Io[r].targetTest(e););n=Io[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new jd(t[r],n)))||t.splice(r,1);return t},or=function(t){return t._gsap||Oc(Tn(t))[0]._gsap},Cd=function(t,e,n){return(n=t[e])&&de(n)?t[e]():Dc(n)&&t.getAttribute&&t.getAttribute(e)||n},en=function(t,e){return(t=t.split(",")).forEach(e)||t},pe=function(t){return Math.round(t*1e5)/1e5||0},xe=function(t){return Math.round(t*1e7)/1e7||0},Xr=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},ey=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},Go=function(){var t=Ii.length,e=Ii.slice(0),n,r;for(Ql={},Ii.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Rd=function(t,e,n,r){Ii.length&&!Pe&&Go(),t.render(e,n,Pe&&e<0&&(t._initted||t._startAt)),Ii.length&&!Pe&&Go()},Pd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Ed).length<2?e:Ce(t)?t.trim():t},Dd=function(t){return t},_n=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ny=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},rs=function(t,e){for(var n in e)t[n]=e[n];return t},_u=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Jn(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},Vo=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},Ts=function(t){var e=t.parent||ae,n=t.keyframes?ny(Be(t.keyframes)):_n;if(tn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},iy=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},Ld=function(t,e,n,r,s){var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},oa=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},Fi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ar=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},ry=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},tc=function(t,e,n,r){return t._startAt&&(Pe?t._startAt.revert(Lo):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},sy=function i(t){return!t||t._ts&&i(t.parent)},gu=function(t){return t._repeat?ss(t._tTime,t=t.duration()+t._rDelay)*t:0},ss=function(t,e){var n=Math.floor(t=xe(t/e));return t&&n===t?n-1:n},Wo=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},aa=function(t){return t._end=xe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Oe)||0))},la=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=xe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),aa(t),n._dirty||ar(n,t)),t},Id=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Wo(t.rawTime(),e),(!e._dur||$s(0,e.totalDuration(),n)-e._tTime>Oe)&&e.render(n,!0)),ar(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-1e-8}},Vn=function(t,e,n,r){return e.parent&&Fi(e),e._start=xe((pi(n)?n:n||t!==ae?Sn(t,n,e):t._time)+e._delay),e._end=xe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Ld(t,e,"_first","_last",t._sort?"_start":0),ec(e)||(t._recent=e),r||Id(t,e),t._ts<0&&la(t,t._tTime),t},Ud=function(t,e){return(mn.ScrollTrigger||Uc("scrollTrigger",e))&&mn.ScrollTrigger.create(e,t)},Fd=function(t,e,n,r,s){if(zc(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Pe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&wd!==un.frame)return Ii.push(t),t._lazy=[s,r],1},oy=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},ec=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},ay=function(t,e,n,r){var s=t.ratio,o=e<0||!e&&(!t._start&&oy(t)&&!(!t._initted&&ec(t))||(t._ts<0||t._dp._ts<0)&&!ec(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=$s(0,t._tDur,e),h=ss(l,a),t._yoyo&&h&1&&(o=1-o),h!==ss(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Pe||r||t._zTime===Oe||!e&&t._zTime){if(!t._initted&&Fd(t,e,r,n,l))return;for(u=t._zTime,t._zTime=e||(n?Oe:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&tc(t,e,n,!0),t._onUpdate&&!n&&fn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&fn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Fi(t,1),!n&&!Pe&&(fn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},ly=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},os=function(t,e,n,r){var s=t._repeat,o=xe(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:xe(o*(s+1)+t._rDelay*s):o,a>0&&!r&&la(t,t._tTime=t._tDur*a),t.parent&&aa(t),n||ar(t.parent,t),t},vu=function(t){return t instanceof Ve?ar(t):os(t,t._dur)},cy={_start:0,endTime:Fs,totalDuration:Fs},Sn=function i(t,e,n){var r=t.labels,s=t._recent||cy,o=t.duration()>=qn?s.endTime(!1):t._dur,a,l,c;return Ce(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Be(n)?n[0]:n).totalDuration()),a>1?i(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},As=function(t,e,n){var r=pi(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=tn(l.vars.inherit)&&l.parent;o.immediateRender=tn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new ve(e[0],o,e[s+1])},zi=function(t,e){return t||t===0?e(t):e},$s=function(t,e,n){return n<t?t:n>e?e:n},Fe=function(t,e){return!Ce(t)||!(e=Jx.exec(t))?"":e[1]},hy=function(t,e,n){return zi(n,function(r){return $s(t,e,r)})},nc=[].slice,Nd=function(t,e){return t&&Jn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Jn(t[0]))&&!t.nodeType&&t!==Hn},uy=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return Ce(r)&&!e||Nd(r,1)?(s=n).push.apply(s,Tn(r)):n.push(r)})||n},Tn=function(t,e,n){return se&&!e&&se.selector?se.selector(t):Ce(t)&&!n&&(Jl||!as())?nc.call((e||Ic).querySelectorAll(t),0):Be(t)?uy(t,n):Nd(t)?nc.call(t,0):t?[t]:[]},ic=function(t){return t=Tn(t)[0]||Us("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Tn(e,n.querySelectorAll?n:n===t?Us("Invalid scope")||Ic.createElement("div"):t)}},Od=function(t){return t.sort(function(){return .5-Math.random()})},Bd=function(t){if(de(t))return t;var e=Jn(t)?t:{each:t},n=lr(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=e.axis,h=r,u=r;return Ce(r)?h=u={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(h=r[0],u=r[1]),function(d,p,g){var _=(g||e).length,m=o[_],f,b,E,v,A,C,T,R,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,qn])[1],!x){for(T=-1e8;T<(T=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=o[_]=[],f=l?Math.min(x,_)*h-.5:r%x,b=x===qn?0:l?_*u/x-.5:r/x|0,T=0,R=qn,C=0;C<_;C++)E=C%x-f,v=b-(C/x|0),m[C]=A=c?Math.abs(c==="y"?v:E):xd(E*E+v*v),A>T&&(T=A),A<R&&(R=A);r==="random"&&Od(m),m.max=T-R,m.min=R,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Fe(e.amount||e.each)||0,n=n&&_<0?qd(n):n}return _=(m[d]-m.min)/m.max||0,xe(m.b+(n?n(_):_)*m.v)+m.u}},rc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=xe(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(pi(n)?0:Fe(n))}},zd=function(t,e){var n=Be(t),r,s;return!n&&Jn(t)&&(r=n=t.radius||qn,t.values?(t=Tn(t.values),(s=!pi(t[0]))&&(r*=r)):t=rc(t.increment)),zi(e,n?de(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=qn,h=0,u=t.length,d,p;u--;)s?(d=t[u].x-a,p=t[u].y-l,d=d*d+p*p):d=Math.abs(t[u]-a),d<c&&(c=d,h=u);return h=!r||c<=r?t[h]:o,s||h===o||pi(o)?h:h+Fe(o)}:rc(t))},kd=function(t,e,n,r){return zi(Be(t)?!e:n===!0?!!(n=0):!r,function(){return Be(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},dy=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,o){return o(s)},r)}},fy=function(t,e){return function(n){return t(parseFloat(n))+(e||Fe(n))}},py=function(t,e,n){return Gd(t,e,0,1,n)},Hd=function(t,e,n){return zi(n,function(r){return t[~~e(r)]})},my=function i(t,e,n){var r=e-t;return Be(t)?Hd(t,i(0,t.length),e):zi(n,function(s){return(r+(s-t)%r)%r+t})},_y=function i(t,e,n){var r=e-t,s=r*2;return Be(t)?Hd(t,i(0,t.length-1),e):zi(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},Ns=function(t){for(var e=0,n="",r,s,o,a;~(r=t.indexOf("random(",e));)o=t.indexOf(")",r),a=t.charAt(r+7)==="[",s=t.substr(r+7,o-r-7).match(a?Ed:jl),n+=t.substr(e,r-e)+kd(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Gd=function(t,e,n,r,s){var o=e-t,a=r-n;return zi(s,function(l){return n+((l-t)/o*a||0)})},gy=function i(t,e,n,r){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var o=Ce(t),a={},l,c,h,u,d;if(n===!0&&(r=1)&&(n=null),o)t={p:t},e={p:e};else if(Be(t)&&!Be(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(i(t[c-1],t[c]));u--,s=function(g){g*=u;var _=Math.min(d,~~g);return h[_](g-_)},n=e}else r||(t=rs(Be(t)?[]:{},t));if(!h){for(l in e)Bc.call(a,t,l,"get",e[l]);s=function(g){return Gc(g,a)||(o?t.p:t)}}}return zi(n,s)},xu=function(t,e,n){var r=t.labels,s=qn,o,a,l;for(o in r)a=r[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},fn=function(t,e,n){var r=t.vars,s=r[e],o=se,a=t._ctx,l,c,h;if(s)return l=r[e+"Params"],c=r.callbackScope||t,n&&Ii.length&&Go(),a&&(se=a),h=l?s.apply(c,l):s.call(c),se=o,h},Es=function(t){return Fi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Pe),t.progress()<1&&fn(t,"onInterrupt"),t},zr,Vd=[],Wd=function(t){if(t)if(t=!t.name&&t.default||t,Lc()||t.headless){var e=t.name,n=de(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Fs,render:Gc,add:Bc,kill:Iy,modifier:Ly,rawVars:0},o={targetTest:0,get:0,getSetter:Hc,aliases:{},register:0};if(as(),t!==r){if(hn[e])return;_n(r,_n(Vo(t,s),o)),rs(r.prototype,rs(s,Vo(t,o))),hn[r.prop=e]=r,t.targetTest&&(Io.push(r),Fc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ad(e,r),t.register&&t.register(on,r,nn)}else Vd.push(t)},te=255,bs={aqua:[0,te,te],lime:[0,te,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,te],navy:[0,0,128],white:[te,te,te],olive:[128,128,0],yellow:[te,te,0],orange:[te,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[te,0,0],pink:[te,192,203],cyan:[0,te,te],transparent:[te,te,te,0]},Za=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*te+.5|0},Xd=function(t,e,n){var r=t?pi(t)?[t>>16,t>>8&te,t&te]:0:bs.black,s,o,a,l,c,h,u,d,p,g;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),bs[t])r=bs[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&te,r&te,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&te,t&te]}else if(t.substr(0,3)==="hsl"){if(r=g=t.match(jl),!e)l=+r[0]%360/360,c=+r[1]/100,h=+r[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,r.length>3&&(r[3]*=1),r[0]=Za(l+1/3,s,o),r[1]=Za(l,s,o),r[2]=Za(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(Md),n&&r.length<4&&(r[3]=1),r}else r=t.match(jl)||bs.transparent;r=r.map(Number)}return e&&!g&&(s=r[0]/te,o=r[1]/te,a=r[2]/te,u=Math.max(s,o,a),d=Math.min(s,o,a),h=(u+d)/2,u===d?l=c=0:(p=u-d,c=h>.5?p/(2-u-d):p/(u+d),l=u===s?(o-a)/p+(o<a?6:0):u===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(h*100+.5)),n&&r.length<4&&(r[3]=1),r},Yd=function(t){var e=[],n=[],r=-1;return t.split(Ui).forEach(function(s){var o=s.match(Br)||[];e.push.apply(e,o),n.push(r+=o.length+1)}),e.c=n,e},yu=function(t,e,n){var r="",s=(t+r).match(Ui),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return t;if(s=s.map(function(d){return(d=Xd(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Yd(t),l=n.c,l.join(r)!==h.c.join(r)))for(c=t.replace(Ui,"1").split(Br),u=c.length-1;a<u;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Ui),u=c.length-1;a<u;a++)r+=c[a]+s[a];return r+c[u]},Ui=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in bs)i+="|"+t+"\\b";return new RegExp(i+")","gi")}(),vy=/hsl[a]?\(/,$d=function(t){var e=t.join(" "),n;if(Ui.lastIndex=0,Ui.test(e))return n=vy.test(e),t[1]=yu(t[1],n),t[0]=yu(t[0],n,Yd(t[1])),!0},Os,un=function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,h,u,d,p,g=function _(m){var f=i()-r,b=m===!0,E,v,A,C;if((f>t||f<0)&&(n+=f-e),r+=f,A=r-n,E=A-o,(E>0||b)&&(C=++u.frame,d=A-u.time*1e3,u.time=A=A/1e3,o+=E+(E>=s?4:s-E),v=1),b||(l=c(_)),v)for(p=0;p<a.length;p++)a[p](A,d,C,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){bd&&(!Jl&&Lc()&&(Hn=Jl=window,Ic=Hn.document||{},mn.gsap=on,(Hn.gsapVersions||(Hn.gsapVersions=[])).push(on.version),Td(Ho||Hn.GreenSockGlobals||!Hn.gsap&&Hn||{}),Vd.forEach(Wd)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},Os=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Os=0,c=Fs},lagSmoothing:function(m,f){t=m||1/0,e=Math.min(f||33,t)},fps:function(m){s=1e3/(m||240),o=u.time*1e3+s},add:function(m,f,b){var E=f?function(v,A,C,T){m(v,A,C,T),u.remove(E)}:m;return u.remove(m),a[b?"unshift":"push"](E),as(),E},remove:function(m,f){~(f=a.indexOf(m))&&a.splice(f,1)&&p>=f&&p--},_listeners:a},u}(),as=function(){return!Os&&un.wake()},Bt={},xy=/^[\d.\-M][\d.\-,\s]/,yy=/["']/g,My=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[r]=isNaN(c)?c.replace(yy,"").trim():+c,r=l.substr(a+1).trim();return e},Sy=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},Ey=function(t){var e=(t+"").split("("),n=Bt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[My(e[1])]:Sy(t).split(",").map(Pd)):Bt._CE&&xy.test(t)?Bt._CE("",t):n},qd=function(t){return function(e){return 1-t(1-e)}},Zd=function i(t,e){for(var n=t._first,r;n;)n instanceof Ve?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},lr=function(t,e){return t&&(de(t)?t:Bt[t]||Ey(t))||e},gr=function(t,e,n,r){n===void 0&&(n=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},o;return en(t,function(a){Bt[a]=mn[a]=s,Bt[o=a.toLowerCase()]=n;for(var l in s)Bt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Bt[a+"."+l]=s[l]}),s},Kd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ka=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Kl*(Math.asin(1/r)||0),a=function(h){return h===1?1:r*Math.pow(2,-10*h)*jx((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Kd(a);return s=Kl/s,l.config=function(c,h){return i(t,c,h)},l},ja=function i(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Kd(n);return r.config=function(s){return i(t,s)},r};en("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;gr(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Bt.Linear.easeNone=Bt.none=Bt.Linear.easeIn;gr("Elastic",Ka("in"),Ka("out"),Ka());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(a){return a<e?i*a*a:a<n?i*Math.pow(a-1.5/t,2)+.75:a<r?i*(a-=2.25/t)*a+.9375:i*Math.pow(a-2.625/t,2)+.984375};gr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);gr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});gr("Circ",function(i){return-(xd(1-i*i)-1)});gr("Sine",function(i){return i===1?1:-Kx(i*qx)+1});gr("Back",ja("in"),ja("out"),ja());Bt.SteppedEase=Bt.steps=mn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,o=1-Oe;return function(a){return((r*$s(0,o,a)|0)+s)*n}}};is.ease=Bt["quad.out"];en("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Nc+=i+","+i+"Params,"});var jd=function(t,e){this.id=Zx++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Cd,this.set=e?e.getSetter:Hc},Bs=function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,os(this,+e.duration,1,1),this.data=e.data,se&&(this._ctx=se,se.data.push(this)),Os||un.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,os(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(as(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(la(this,n),!s._dp||s.parent||Id(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Vn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Oe||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Rd(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+gu(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+gu(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?ss(this._tTime,s)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Wo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime($s(-Math.abs(this._delay),this._tDur,s),r!==!1),aa(this),ry(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(as(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Oe&&(this._tTime-=Oe)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Vn(r,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(tn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wo(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=ty);var r=Pe;return Pe=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Pe=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,vu(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,vu(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(Sn(this,n),tn(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,tn(r)),this._dur||(this._zTime=-1e-8),this},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Oe)},t.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},t.then=function(n){var r=this;return new Promise(function(s){var o=de(n)?n:Dd,a=function(){var c=r.then;r.then=null,de(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},t.kill=function(){Es(this)},i}();_n(Bs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Ve=function(i){vd(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=tn(n.sortChildren),ae&&Vn(n.parent||ae,li(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ud(li(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return As(0,arguments,this),this},e.from=function(r,s,o){return As(1,arguments,this),this},e.fromTo=function(r,s,o,a){return As(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,Ts(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ve(r,s,Sn(this,o),1),this},e.call=function(r,s,o){return Vn(this,ve.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new ve(r,o,Sn(this,l)),this},e.staggerFrom=function(r,s,o,a,l,c,h){return o.runBackwards=1,Ts(o).immediateRender=tn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,h)},e.staggerFromTo=function(r,s,o,a,l,c,h,u){return a.startAt=o,Ts(a).immediateRender=tn(a.immediateRender),this.staggerTo(r,s,a,l,c,h,u)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=r<=0?0:xe(r),u=this._zTime<0!=r<0&&(this._initted||!c),d,p,g,_,m,f,b,E,v,A,C,T;if(this!==ae&&h>l&&r>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,r+=this._time-a),d=h,v=this._start,E=this._ts,f=!E,u&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(d=xe(h%m),h===l?(_=this._repeat,d=c):(A=xe(h/m),_=~~A,_&&_===A&&(d=c,_--),d>c&&(d=c)),A=ss(this._tTime,m),!a&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),C&&_&1&&(d=c-d,T=1),_!==A&&!this._lock){var R=C&&A&1,x=R===(C&&_&1);if(_<A&&(R=!R),a=R?0:h%c?c:h,this._lock=1,this.render(a||(T?0:xe(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&fn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;Zd(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=ly(this,xe(a),xe(d)),b&&(h-=d-(d=b._start))),this._tTime=h,this._time=d,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&d&&!s&&!_&&(fn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||d>=p._start)&&p._ts&&b!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,o),d!==this._time||!this._ts&&!f){b=0,g&&(h+=this._zTime=-1e-8);break}}p=g}else{p=this._last;for(var M=r<0?r:d;p;){if(g=p._prev,(p._act||M<=p._end)&&p._ts&&b!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(M-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(M-p._start)*p._ts,s,o||Pe&&(p._initted||p._startAt)),d!==this._time||!this._ts&&!f){b=0,g&&(h+=this._zTime=M?-1e-8:Oe);break}}p=g}}if(b&&!s&&(this.pause(),b.render(d>=a?0:-1e-8)._zTime=d>=a?1:-1,this._ts))return this._start=v,aa(this),this.render(r,s,o);this._onUpdate&&!s&&fn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Fi(this,1),!s&&!(r<0&&!a)&&(h||a||!l)&&(fn(this,h===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(pi(s)||(s=Sn(this,s,r)),!(r instanceof Bs)){if(Be(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Ce(r))return this.addLabel(r,s);if(de(r))r=ve.delayedCall(0,r);else return this}return this!==r?Vn(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ve?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return Ce(r)?this.removeLabel(r):de(r)?this.killTweensOf(r):(r.parent===this&&oa(this,r),r===this._recent&&(this._recent=this._last),ar(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xe(un.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=Sn(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=ve.delayedCall(0,s||Fs,o);return a.data="isPause",this._hasPause=1,Vn(this,a,Sn(this,r))},e.removePause=function(r){var s=this._first;for(r=Sn(this,r);s;)s._start===r&&s.data==="isPause"&&Fi(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)wi!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=Tn(r),l=this._first,c=pi(s),h;l;)l instanceof ve?ey(l._targets,a)&&(c?(!wi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=Sn(o,r),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,p,g=ve.to(o,_n({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Oe,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&os(g,m,0,1).render(g._time,!0,!0),p=1}h&&h.apply(g,u||[])}},s));return d?g.render(0):g},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,_n({startAt:{time:Sn(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),xu(this,Sn(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),xu(this,Sn(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Oe)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return ar(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ar(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=qn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Vn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;os(o,o===ae&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(ae._ts&&(Rd(ae,Wo(r,ae)),wd=un.frame),un.frame>=mu){mu+=pn.autoSleep||120;var s=ae._first;if((!s||!s._ts)&&pn.autoSleep&&un._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||un.sleep()}}},t}(Bs);_n(Ve.prototype,{_lock:0,_hasPause:0,_forcing:0});var by=function(t,e,n,r,s,o,a){var l=new nn(this._pt,t,e,0,1,rf,null,s),c=0,h=0,u,d,p,g,_,m,f,b;for(l.b=n,l.e=r,n+="",r+="",(f=~r.indexOf("random("))&&(r=Ns(r)),o&&(b=[n,r],o(b,t,e),n=b[0],r=b[1]),d=n.match($a)||[];u=$a.exec(r);)g=u[0],_=r.substring(c,u.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?Xr(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=$a.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Sd.test(r)||f)&&(l.e=0),this._pt=l,l},Bc=function(t,e,n,r,s,o,a,l,c,h){de(r)&&(r=r(s||0,t,o));var u=t[e],d=n!=="get"?n:de(u)?c?t[e.indexOf("set")||!de(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,p=de(u)?c?Ry:ef:kc,g;if(Ce(r)&&(~r.indexOf("random(")&&(r=Ns(r)),r.charAt(1)==="="&&(g=Xr(d,r)+(Fe(d)||0),(g||g===0)&&(r=g))),!h||d!==r||sc)return!isNaN(d*r)&&r!==""?(g=new nn(this._pt,t,e,+d||0,r-(d||0),typeof u=="boolean"?Dy:nf,0,p),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!u&&!(e in t)&&Uc(e,r),by.call(this,t,e,d,r,p,l||pn.stringFilter,c))},Ty=function(t,e,n,r,s){if(de(t)&&(t=ws(t,s,e,n,r)),!Jn(t)||t.style&&t.nodeType||Be(t)||yd(t))return Ce(t)?ws(t,s,e,n,r):t;var o={},a;for(a in t)o[a]=ws(t[a],s,e,n,r);return o},Jd=function(t,e,n,r,s,o){var a,l,c,h;if(hn[t]&&(a=new hn[t]).init(s,a.rawVars?e[t]:Ty(e[t],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new nn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==zr))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},wi,sc,zc=function i(t,e,n){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,h=r.runBackwards,u=r.yoyoEase,d=r.keyframes,p=r.autoRevert,g=t._dur,_=t._startAt,m=t._targets,f=t.parent,b=f&&f.data==="nested"?f.vars.targets:m,E=t._overwrite==="auto"&&!Pc,v=t.timeline,A,C,T,R,x,M,P,k,F,X,Y,G,$;if(v&&(!d||!s)&&(s="none"),t._ease=lr(s,is.ease),t._yEase=u?qd(lr(u===!0?s:u,is.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!v&&!!r.runBackwards,!v||d&&!r.stagger){if(k=m[0]?or(m[0]).harness:0,G=k&&r[k.prop],A=Vo(r,Fc),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!p?_.render(-1,!0):_.revert(h&&g?Lo:Qx),_._lazy=0),o){if(Fi(t._startAt=ve.set(m,_n({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!_&&tn(l),startAt:null,delay:0,onUpdate:c&&function(){return fn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Pe||!a&&!p)&&t._startAt.revert(Lo),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),T=_n({overwrite:!1,data:"isFromStart",lazy:a&&!_&&tn(l),immediateRender:a,stagger:0,parent:f},A),G&&(T[k.prop]=G),Fi(t._startAt=ve.set(m,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Pe?t._startAt.revert(Lo):t._startAt.render(-1,!0)),t._zTime=e,!a)i(t._startAt,Oe,Oe);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&tn(l)||l&&!g,C=0;C<m.length;C++){if(x=m[C],P=x._gsap||Oc(m)[C]._gsap,t._ptLookup[C]=X={},Ql[P.id]&&Ii.length&&Go(),Y=b===m?C:b.indexOf(x),k&&(F=new k).init(x,G||A,t,Y,b)!==!1&&(t._pt=R=new nn(t._pt,x,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(H){X[H]=R}),F.priority&&(M=1)),!k||G)for(T in A)hn[T]&&(F=Jd(T,A,t,Y,x,b))?F.priority&&(M=1):X[T]=R=Bc.call(t,x,T,"get",A[T],Y,b,0,r.stringFilter);t._op&&t._op[C]&&t.kill(x,t._op[C]),E&&t._pt&&(wi=t,ae.killTweensOf(x,X,t.globalTime(e)),$=!t.parent,wi=0),t._pt&&l&&(Ql[P.id]=1)}M&&sf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!$,d&&e<=0&&v.render(qn,!0,!0)},Ay=function(t,e,n,r,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,p;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,p=t._targets.length;p--;){if(h=d[p][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return sc=1,t.vars[e]="+=0",zc(t,a),sc=0,l?Us(e+" not eligible for reset"):1;c.push(h)}for(p=c.length;p--;)u=c[p],h=u._pt||u,h.s=(r||r===0)&&!s?r:h.s+(r||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=pe(n)+Fe(u.e)),u.b&&(u.b=h.s+Fe(u.b))},wy=function(t,e){var n=t[0]?or(t[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return e;s=rs({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Cy=function(t,e,n,r){var s=e.ease||r||"power1.inOut",o,a;if(Be(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},ws=function(t,e,n,r,s){return de(t)?t.call(e,n,r,s):Ce(t)&&~t.indexOf("random(")?Ns(t):t},Qd=Nc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",tf={};en(Qd+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return tf[i]=1});var ve=function(i){vd(t,i);function t(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:Ts(r))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,f=l.yoyoEase,b=r.parent||ae,E=(Be(n)||yd(n)?pi(n[0]):"length"in r)?[n]:Tn(n),v,A,C,T,R,x,M,P;if(a._targets=E.length?Oc(E):Us("GSAP target "+n+" not found. https://gsap.com",!pn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||d||bo(c)||bo(h)){if(r=a.vars,v=a.timeline=new Ve({data:"nested",defaults:_||{},targets:b&&b.data==="nested"?b.vars.targets:E}),v.kill(),v.parent=v._dp=li(a),v._start=0,d||bo(c)||bo(h)){if(T=E.length,M=d&&Bd(d),Jn(d))for(R in d)~Qd.indexOf(R)&&(P||(P={}),P[R]=d[R]);for(A=0;A<T;A++)C=Vo(r,tf),C.stagger=0,f&&(C.yoyoEase=f),P&&rs(C,P),x=E[A],C.duration=+ws(c,li(a),A,x,E),C.delay=(+ws(h,li(a),A,x,E)||0)-a._delay,!d&&T===1&&C.delay&&(a._delay=h=C.delay,a._start+=h,C.delay=0),v.to(x,C,M?M(A,x,E):0),v._ease=Bt.none;v.duration()?c=h=0:a.timeline=0}else if(g){Ts(_n(v.vars.defaults,{ease:"none"})),v._ease=lr(g.ease||r.ease||"none");var k=0,F,X,Y;if(Be(g))g.forEach(function(G){return v.to(E,G,">")}),v.duration();else{C={};for(R in g)R==="ease"||R==="easeEach"||Cy(R,g[R],C,g.easeEach);for(R in C)for(F=C[R].sort(function(G,$){return G.t-$.t}),k=0,A=0;A<F.length;A++)X=F[A],Y={ease:X.e,duration:(X.t-(A?F[A-1].t:0))/100*c},Y[R]=X.v,v.to(E,Y,k),k+=Y.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return p===!0&&!Pc&&(wi=li(a),ae.killTweensOf(E),wi=0),Vn(b,li(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(u||!c&&!g&&a._start===xe(b._time)&&tn(u)&&sy(li(a))&&b.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-h)||0)),m&&Ud(li(a),m),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,h=r<0,u=r>l-Oe&&!h?l:r<Oe?0:r,d,p,g,_,m,f,b,E,v;if(!c)ay(this,r,s,o);else if(u!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+r,s,o);if(d=xe(u%_),u===l?(g=this._repeat,d=c):(m=xe(u/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),f=this._yoyo&&g&1,f&&(v=this._yEase,d=c-d),m=ss(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=u,this;g!==m&&(E&&this._yEase&&Zd(E,f),this.vars.repeatRefresh&&!f&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(xe(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Fd(this,h?r:d,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(v||this._ease)(d/c),this._from&&(this.ratio=b=1-b),d&&!a&&!s&&!g&&(fn(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(b,p.d),p=p._next;E&&E.render(r<0?r:E._dur*E._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(h&&tc(this,r,s,o),fn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&fn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&tc(this,r,!0,!0),(r||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Fi(this,1),!s&&!(h&&!a)&&(u||a||f)&&(fn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){Os||un.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||zc(this,c),h=this._ease(c/this._dur),Ay(this,r,s,o,a,h,c,l)?this.resetTo(r,s,o,a,1):(la(this,0),this.parent||Ld(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Es(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Pe),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,wi&&wi.vars.overwrite!==!0)._first||Es(this),this.parent&&o!==this.timeline.totalDuration()&&os(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Tn(r):a,c=this._ptLookup,h=this._pt,u,d,p,g,_,m,f;if((!s||s==="all")&&iy(a,l))return s==="all"&&(this._pt=0),Es(this);for(u=this._op=this._op||[],s!=="all"&&(Ce(s)&&(_={},en(s,function(b){return _[b]=1}),s=_),s=wy(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){d=c[f],s==="all"?(u[f]=s,g=d,p={}):(p=u[f]=u[f]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&oa(this,m,"_pt"),delete d[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&h&&Es(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return As(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return As(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return ae.killTweensOf(r,s,o)},t}(Bs);_n(ve.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});en("staggerTo,staggerFrom,staggerFromTo",function(i){ve[i]=function(){var t=new Ve,e=nc.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var kc=function(t,e,n){return t[e]=n},ef=function(t,e,n){return t[e](n)},Ry=function(t,e,n,r){return t[e](r.fp,n)},Py=function(t,e,n){return t.setAttribute(e,n)},Hc=function(t,e){return de(t[e])?ef:Dc(t[e])&&t.setAttribute?Py:kc},nf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Dy=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},rf=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},Gc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Ly=function(t,e,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,n),s=o},Iy=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?oa(this,e,"_pt"):e.dep||(n=1),e=r;return!n},Uy=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},sf=function(t){for(var e=t._pt,n,r,s,o;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=n}t._pt=s},nn=function(){function i(e,n,r,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||nf,this.d=l||this,this.set=c||kc,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=Uy,this.m=n,this.mt=s,this.tween=r},i}();en(Nc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Fc[i]=1});mn.TweenMax=mn.TweenLite=ve;mn.TimelineLite=mn.TimelineMax=Ve;ae=new Ve({sortChildren:!1,defaults:is,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pn.stringFilter=$d;var cr=[],Uo={},Fy=[],Mu=0,Ny=0,Ja=function(t){return(Uo[t]||Fy).map(function(e){return e()})},oc=function(){var t=Date.now(),e=[];t-Mu>2&&(Ja("matchMediaInit"),cr.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Hn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Ja("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Mu=t,Ja("matchMedia"))},of=function(){function i(e,n){this.selector=n&&ic(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ny++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){de(n)&&(s=r,r=n,n=de);var o=this,a=function(){var c=se,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=ic(s)),se=o,u=r.apply(o,arguments),de(u)&&o._r.push(u),se=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===de?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var r=se;se=null,n(this),se=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof ve&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ve?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ve)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=cr.length;o--;)cr[o].id===this.id&&cr.splice(o,1)},t.revert=function(n){this.kill(n||{})},i}(),Oy=function(){function i(e){this.contexts=[],this.scope=e,se&&se.data.push(this)}var t=i.prototype;return t.add=function(n,r,s){Jn(n)||(n={matches:n});var o=new of(0,s||this.scope),a=o.conditions={},l,c,h;se&&!o.selector&&(o.selector=se.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?h=1:(l=Hn.matchMedia(n[c]),l&&(cr.indexOf(o)<0&&cr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(oc):l.addEventListener("change",oc)));return h&&r(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Xo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return Wd(r)})},timeline:function(t){return new Ve(t)},getTweensOf:function(t,e){return ae.getTweensOf(t,e)},getProperty:function(t,e,n,r){Ce(t)&&(t=Tn(t)[0]);var s=or(t||{}).get,o=n?Dd:Pd;return n==="native"&&(n=""),t&&(e?o((hn[e]&&hn[e].get||s)(t,e,n,r)):function(a,l,c){return o((hn[a]&&hn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Tn(t),t.length>1){var r=t.map(function(h){return on.quickSetter(h,e,n)}),s=r.length;return function(h){for(var u=s;u--;)r[u](h)}}t=t[0]||{};var o=hn[e],a=or(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;zr._pt=0,u.init(t,n?h+n:h,zr,0,[t]),u.render(1,u),zr._pt&&Gc(1,zr)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var r,s=on.to(t,_n((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return ae.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=lr(t.ease,is.ease)),_u(is,t||{})},config:function(t){return _u(pn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!hn[a]&&!mn[a]&&Us(e+" effect requires "+a+" plugin.")}),qa[e]=function(a,l,c){return n(Tn(a),_n(l||{},s),c)},o&&(Ve.prototype[e]=function(a,l,c){return this.add(qa[e](a,Jn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Bt[t]=lr(e)},parseEase:function(t,e){return arguments.length?lr(t,e):Bt},getById:function(t){return ae.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ve(t),r,s;for(n.smoothChildTiming=tn(t.smoothChildTiming),ae.remove(n),n._dp=0,n._time=n._tTime=ae._time,r=ae._first;r;)s=r._next,(e||!(!r._dur&&r instanceof ve&&r.vars.onComplete===r._targets[0]))&&Vn(n,r,r._start-r._delay),r=s;return Vn(ae,n,0),n},context:function(t,e){return t?new of(t,e):se},matchMedia:function(t){return new Oy(t)},matchMediaRefresh:function(){return cr.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||oc()},addEventListener:function(t,e){var n=Uo[t]||(Uo[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Uo[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:my,wrapYoyo:_y,distribute:Bd,random:kd,snap:zd,normalize:py,getUnit:Fe,clamp:hy,splitColor:Xd,toArray:Tn,selector:ic,mapRange:Gd,pipe:dy,unitize:fy,interpolate:gy,shuffle:Od},install:Td,effects:qa,ticker:un,updateRoot:Ve.updateRoot,plugins:hn,globalTimeline:ae,core:{PropTween:nn,globals:Ad,Tween:ve,Timeline:Ve,Animation:Bs,getCache:or,_removeLinkedListItem:oa,reverting:function(){return Pe},context:function(t){return t&&se&&(se.data.push(t),t._ctx=se),se},suppressOverwrites:function(t){return Pc=t}}};en("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Xo[i]=ve[i]});un.add(Ve.updateRoot);zr=Xo.to({},{duration:0});var By=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},zy=function(t,e){var n=t._targets,r,s,o;for(r in e)for(s=n.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=By(o,r)),o&&o.modifier&&o.modifier(e[r],t,n[s],r))},Qa=function(t,e){return{name:t,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Ce(s)&&(l={},en(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}zy(a,s)}}}},on=Xo.registerPlugin({name:"attr",init:function(t,e,n,r,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Pe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Qa("roundProps",rc),Qa("modifiers"),Qa("snap",zd))||Xo;ve.version=Ve.version=on.version="3.12.7";bd=1;Lc()&&as();Bt.Power0;Bt.Power1;Bt.Power2;Bt.Power3;Bt.Power4;Bt.Linear;Bt.Quad;Bt.Cubic;Bt.Quart;Bt.Quint;Bt.Strong;Bt.Elastic;Bt.Back;Bt.SteppedEase;Bt.Bounce;Bt.Sine;Bt.Expo;Bt.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Su,Ci,Yr,Vc,sr,Eu,Wc,ky=function(){return typeof window<"u"},mi={},tr=180/Math.PI,$r=Math.PI/180,Fr=Math.atan2,bu=1e8,Xc=/([A-Z])/g,Hy=/(left|right|width|margin|padding|x)/i,Gy=/[\s,\(]\S/,Xn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ac=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Vy=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Wy=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Xy=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},af=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},lf=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Yy=function(t,e,n){return t.style[e]=n},$y=function(t,e,n){return t.style.setProperty(e,n)},qy=function(t,e,n){return t._gsap[e]=n},Zy=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Ky=function(t,e,n,r,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},jy=function(t,e,n,r,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},le="transform",rn=le+"Origin",Jy=function i(t,e){var n=this,r=this.target,s=r.style,o=r._gsap;if(t in mi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Xn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=ci(r,a)}):this.tfm[t]=o.x?o[t]:ci(r,t),t===rn&&(this.tfm.zOrigin=o.zOrigin);else return Xn.transform.split(",").forEach(function(a){return i.call(n,a,e)});if(this.props.indexOf(le)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(rn,e,"")),t=le}(s||e)&&this.props.push(t,e,s[t])},cf=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Qy=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Xc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Wc(),(!s||!s.isStart)&&!n[le]&&(cf(n),r.zOrigin&&n[rn]&&(n[rn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},hf=function(t,e){var n={target:t,props:[],revert:Qy,save:Jy};return t._gsap||on.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return n.save(r)}),n},uf,lc=function(t,e){var n=Ci.createElementNS?Ci.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ci.createElement(t);return n&&n.style?n:Ci.createElement(t)},Zn=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(Xc,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,ls(e)||e,1)||""},Tu="O,Moz,ms,Ms,Webkit".split(","),ls=function(t,e,n){var r=e||sr,s=r.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Tu[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Tu[o]:"")+t},cc=function(){ky()&&window.document&&(Su=window,Ci=Su.document,Yr=Ci.documentElement,sr=lc("div")||{style:{}},lc("div"),le=ls(le),rn=le+"Origin",sr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",uf=!!ls("perspective"),Wc=on.core.reverting,Vc=1)},Au=function(t){var e=t.ownerSVGElement,n=lc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Yr.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Yr.removeChild(n),s},wu=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},df=function(t){var e,n;try{e=t.getBBox()}catch{e=Au(t),n=1}return e&&(e.width||e.height)||n||(e=Au(t)),e&&!e.width&&!e.x&&!e.y?{x:+wu(t,["x","cx","x1"])||0,y:+wu(t,["y","cy","y1"])||0,width:0,height:0}:e},ff=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&df(t))},pr=function(t,e){if(e){var n=t.style,r;e in mi&&e!==rn&&(e=le),n.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(r==="--"?e:e.replace(Xc,"-$1").toLowerCase())):n.removeAttribute(e)}},Ri=function(t,e,n,r,s,o){var a=new nn(t._pt,e,n,0,1,o?lf:af);return t._pt=a,a.b=r,a.e=s,t._props.push(n),a},Cu={deg:1,rad:1,turn:1},tM={grid:1,flex:1},Ni=function i(t,e,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=sr.style,l=Hy.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=r==="px",p=r==="%",g,_,m,f;if(r===o||!s||Cu[r]||Cu[o])return s;if(o!=="px"&&!d&&(s=i(t,e,n,"px")),f=t.getCTM&&ff(t),(p||o==="%")&&(mi[e]||~e.indexOf("adius")))return g=f?t.getBBox()[l?"width":"height"]:t[h],pe(p?s/g*u:s/100*g);if(a[l?"width":"height"]=u+(d?o:r),_=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,f&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Ci||!_.appendChild)&&(_=Ci.body),m=_._gsap,m&&p&&m.width&&l&&m.time===un.time&&!m.uncache)return pe(s/m.width*u);if(p&&(e==="height"||e==="width")){var b=t.style[e];t.style[e]=u+r,g=t[h],b?t.style[e]=b:pr(t,e)}else(p||o==="%")&&!tM[Zn(_,"display")]&&(a.position=Zn(t,"position")),_===t&&(a.position="static"),_.appendChild(sr),g=sr[h],_.removeChild(sr),a.position="absolute";return l&&p&&(m=or(_),m.time=un.time,m.width=_[h]),pe(d?g*s/u:g&&s?u/g*s:0)},ci=function(t,e,n,r){var s;return Vc||cc(),e in Xn&&e!=="transform"&&(e=Xn[e],~e.indexOf(",")&&(e=e.split(",")[0])),mi[e]&&e!=="transform"?(s=ks(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:$o(Zn(t,rn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Yo[e]&&Yo[e](t,e,n)||Zn(t,e)||Cd(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ni(t,e,s,n)+n:s},eM=function(t,e,n,r){if(!n||n==="none"){var s=ls(e,t,1),o=s&&Zn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Zn(t,"borderTopColor"))}var a=new nn(this._pt,t.style,e,0,1,rf),l=0,c=0,h,u,d,p,g,_,m,f,b,E,v,A;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(_=t.style[e],t.style[e]=r,r=Zn(t,e)||r,_?t.style[e]=_:pr(t,e)),h=[n,r],$d(h),n=h[0],r=h[1],d=n.match(Br)||[],A=r.match(Br)||[],A.length){for(;u=Br.exec(r);)m=u[0],b=r.substring(l,u.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(p=parseFloat(_)||0,v=_.substr((p+"").length),m.charAt(1)==="="&&(m=Xr(p,m)+v),f=parseFloat(m),E=m.substr((f+"").length),l=Br.lastIndex-E.length,E||(E=E||pn.units[e]||v,l===r.length&&(r+=E,a.e+=E)),v!==E&&(p=Ni(t,e,_,E)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:p,c:f-p,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?lf:af;return Sd.test(r)&&(a.e=0),this._pt=a,a},Ru={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},nM=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=Ru[n]||n,e[1]=Ru[r]||r,e.join(" ")},iM=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],mi[a]&&(l=1,a=a==="transformOrigin"?rn:le),pr(n,a);l&&(pr(n,le),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",ks(n,1),o.uncache=1,cf(r)))}},Yo={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var o=t._pt=new nn(t._pt,e,n,0,0,iM);return o.u=r,o.pr=-10,o.tween=s,t._props.push(n),1}}},zs=[1,0,0,1,0,0],pf={},mf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Pu=function(t){var e=Zn(t,le);return mf(e)?zs:e.substr(7).match(Md).map(pe)},Yc=function(t,e){var n=t._gsap||or(t),r=t.style,s=Pu(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?zs:s):(s===zs&&!t.offsetParent&&t!==Yr&&!n.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Yr.appendChild(t)),s=Pu(t),l?r.display=l:pr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Yr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},hc=function(t,e,n,r,s,o){var a=t._gsap,l=s||Yc(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],f=l[4],b=l[5],E=e.split(" "),v=parseFloat(E[0])||0,A=parseFloat(E[1])||0,C,T,R,x;n?l!==zs&&(T=p*m-g*_)&&(R=v*(m/T)+A*(-_/T)+(_*b-m*f)/T,x=v*(-g/T)+A*(p/T)-(p*b-g*f)/T,v=R,A=x):(C=df(t),v=C.x+(~E[0].indexOf("%")?v/100*C.width:v),A=C.y+(~(E[1]||E[0]).indexOf("%")?A/100*C.height:A)),r||r!==!1&&a.smooth?(f=v-c,b=A-h,a.xOffset=u+(f*p+b*_)-f,a.yOffset=d+(f*g+b*m)-b):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=A,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!n,t.style[rn]="0px 0px",o&&(Ri(o,a,"xOrigin",c,v),Ri(o,a,"yOrigin",h,A),Ri(o,a,"xOffset",u,a.xOffset),Ri(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+A)},ks=function(t,e){var n=t._gsap||new jd(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Zn(t,rn)||"0",h,u,d,p,g,_,m,f,b,E,v,A,C,T,R,x,M,P,k,F,X,Y,G,$,H,et,at,mt,Tt,qt,W,Q;return h=u=d=_=m=f=b=E=v=0,p=g=1,n.svg=!!(t.getCTM&&ff(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[le]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[le]!=="none"?l[le]:"")),r.scale=r.rotate=r.translate="none"),T=Yc(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",$=""):$=!e&&t.getAttribute("data-svg-origin"),hc(t,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,T)),A=n.xOrigin||0,C=n.yOrigin||0,T!==zs&&(P=T[0],k=T[1],F=T[2],X=T[3],h=Y=T[4],u=G=T[5],T.length===6?(p=Math.sqrt(P*P+k*k),g=Math.sqrt(X*X+F*F),_=P||k?Fr(k,P)*tr:0,b=F||X?Fr(F,X)*tr+_:0,b&&(g*=Math.abs(Math.cos(b*$r))),n.svg&&(h-=A-(A*P+C*F),u-=C-(A*k+C*X))):(Q=T[6],qt=T[7],at=T[8],mt=T[9],Tt=T[10],W=T[11],h=T[12],u=T[13],d=T[14],R=Fr(Q,Tt),m=R*tr,R&&(x=Math.cos(-R),M=Math.sin(-R),$=Y*x+at*M,H=G*x+mt*M,et=Q*x+Tt*M,at=Y*-M+at*x,mt=G*-M+mt*x,Tt=Q*-M+Tt*x,W=qt*-M+W*x,Y=$,G=H,Q=et),R=Fr(-F,Tt),f=R*tr,R&&(x=Math.cos(-R),M=Math.sin(-R),$=P*x-at*M,H=k*x-mt*M,et=F*x-Tt*M,W=X*M+W*x,P=$,k=H,F=et),R=Fr(k,P),_=R*tr,R&&(x=Math.cos(R),M=Math.sin(R),$=P*x+k*M,H=Y*x+G*M,k=k*x-P*M,G=G*x-Y*M,P=$,Y=H),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,f=180-f),p=pe(Math.sqrt(P*P+k*k+F*F)),g=pe(Math.sqrt(G*G+Q*Q)),R=Fr(Y,G),b=Math.abs(R)>2e-4?R*tr:0,v=W?1/(W<0?-W:W):0),n.svg&&($=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!mf(Zn(t,le)),$&&t.setAttribute("transform",$))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(p*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=pe(p),n.scaleY=pe(g),n.rotation=pe(_)+a,n.rotationX=pe(m)+a,n.rotationY=pe(f)+a,n.skewX=b+a,n.skewY=E+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(r[rn]=$o(c)),n.xOffset=n.yOffset=0,n.force3D=pn.force3D,n.renderTransform=n.svg?sM:uf?_f:rM,n.uncache=0,n},$o=function(t){return(t=t.split(" "))[0]+" "+t[1]},tl=function(t,e,n){var r=Fe(e);return pe(parseFloat(e)+parseFloat(Ni(t,"x",n+"px",r)))+r},rM=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,_f(t,e)},Ki="0deg",Ms="0px",ji=") ",_f=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,f=n.force3D,b=n.target,E=n.zOrigin,v="",A=f==="auto"&&t&&t!==1||f===!0;if(E&&(u!==Ki||h!==Ki)){var C=parseFloat(h)*$r,T=Math.sin(C),R=Math.cos(C),x;C=parseFloat(u)*$r,x=Math.cos(C),o=tl(b,o,T*x*-E),a=tl(b,a,-Math.sin(C)*-E),l=tl(b,l,R*x*-E+E)}m!==Ms&&(v+="perspective("+m+ji),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(A||o!==Ms||a!==Ms||l!==Ms)&&(v+=l!==Ms||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ji),c!==Ki&&(v+="rotate("+c+ji),h!==Ki&&(v+="rotateY("+h+ji),u!==Ki&&(v+="rotateX("+u+ji),(d!==Ki||p!==Ki)&&(v+="skew("+d+", "+p+ji),(g!==1||_!==1)&&(v+="scale("+g+", "+_+ji),b.style[le]=v||"translate(0, 0)"},sM=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,p=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,f=n.yOffset,b=n.forceCSS,E=parseFloat(o),v=parseFloat(a),A,C,T,R,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=$r,c*=$r,A=Math.cos(l)*u,C=Math.sin(l)*u,T=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(h*=$r,x=Math.tan(c-h),x=Math.sqrt(1+x*x),T*=x,R*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),A*=x,C*=x)),A=pe(A),C=pe(C),T=pe(T),R=pe(R)):(A=u,R=d,C=T=0),(E&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(E=Ni(p,"x",o,"px"),v=Ni(p,"y",a,"px")),(g||_||m||f)&&(E=pe(E+g-(g*A+_*T)+m),v=pe(v+_-(g*C+_*R)+f)),(r||s)&&(x=p.getBBox(),E=pe(E+r/100*x.width),v=pe(v+s/100*x.height)),x="matrix("+A+","+C+","+T+","+R+","+E+","+v+")",p.setAttribute("transform",x),b&&(p.style[le]=x)},oM=function(t,e,n,r,s){var o=360,a=Ce(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?tr:1),c=l-r,h=r+c+"deg",u,d;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),u==="cw"&&c<0?c=(c+o*bu)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*bu)%o-~~(c/o)*o)),t._pt=d=new nn(t._pt,e,n,r,c,Vy),d.e=h,d.u="deg",t._props.push(n),d},Du=function(t,e){for(var n in e)t[n]=e[n];return t},aM=function(t,e,n){var r=Du({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,p,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[le]=e,a=ks(n,1),pr(n,le),n.setAttribute("transform",c)):(c=getComputedStyle(n)[le],o[le]=e,a=ks(n,1),o[le]=c);for(l in mi)c=r[l],h=a[l],c!==h&&s.indexOf(l)<0&&(p=Fe(c),g=Fe(h),u=p!==g?Ni(n,l,c,g):parseFloat(c),d=parseFloat(h),t._pt=new nn(t._pt,a,l,u,d-u,ac),t._pt.u=g||0,t._props.push(l));Du(a,r)};en("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",o=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(a){return t<2?i+a:"border"+a+i});Yo[t>1?"border"+i:i]=function(a,l,c,h,u){var d,p;if(arguments.length<4)return d=o.map(function(g){return ci(a,g,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(h+"").split(" "),p={},o.forEach(function(g,_){return p[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,p,u)}});var gf={name:"css",register:cc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,d,p,g,_,m,f,b,E,v,A,C,T,R;Vc||cc(),this.styles=this.styles||hf(t),R=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(hn[_]&&Jd(_,e,n,r,t,s)))){if(p=typeof h,g=Yo[_],p==="function"&&(h=h.call(n,r,t,s),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=Ns(h)),g)g(this,t,_,h,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",Ui.lastIndex=0,Ui.test(c)||(m=Fe(c),f=Fe(h)),f?m!==f&&(c=Ni(t,_,c,f)+f):m&&(h+=m),this.add(a,"setProperty",c,h,r,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,t,s):l[_],Ce(c)&&~c.indexOf("random(")&&(c=Ns(c)),Fe(c+"")||c==="auto"||(c+=pn.units[_]||Fe(ci(t,_))||""),(c+"").charAt(1)==="="&&(c=ci(t,_))):c=ci(t,_),d=parseFloat(c),b=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),u=parseFloat(h),_ in Xn&&(_==="autoAlpha"&&(d===1&&ci(t,"visibility")==="hidden"&&u&&(d=0),R.push("visibility",0,a.visibility),Ri(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Xn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in mi,E){if(this.styles.save(_),v||(A=t._gsap,A.renderTransform&&!e.parseTransform||ks(t,e.parseTransform),C=e.smoothOrigin!==!1&&A.smooth,v=this._pt=new nn(this._pt,a,le,0,1,A.renderTransform,A,0,-1),v.dep=1),_==="scale")this._pt=new nn(this._pt,A,"scaleY",A.scaleY,(b?Xr(A.scaleY,b+u):u)-A.scaleY||0,ac),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(rn,0,a[rn]),h=nM(h),A.svg?hc(t,h,0,C,0,this):(f=parseFloat(h.split(" ")[2])||0,f!==A.zOrigin&&Ri(this,A,"zOrigin",A.zOrigin,f),Ri(this,a,_,$o(c),$o(h)));continue}else if(_==="svgOrigin"){hc(t,h,1,C,0,this);continue}else if(_ in pf){oM(this,A,_,d,b?Xr(d,b+h):h);continue}else if(_==="smoothOrigin"){Ri(this,A,"smooth",A.smooth,h);continue}else if(_==="force3D"){A[_]=h;continue}else if(_==="transform"){aM(this,h,t);continue}}else _ in a||(_=ls(_)||_);if(E||(u||u===0)&&(d||d===0)&&!Gy.test(h)&&_ in a)m=(c+"").substr((d+"").length),u||(u=0),f=Fe(h)||(_ in pn.units?pn.units[_]:m),m!==f&&(d=Ni(t,_,c,f)),this._pt=new nn(this._pt,E?A:a,_,d,(b?Xr(d,b+u):u)-d,!E&&(f==="px"||_==="zIndex")&&e.autoRound!==!1?Xy:ac),this._pt.u=f||0,m!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=Wy);else if(_ in a)eM.call(this,t,_,c,b?b+h:h);else if(_ in t)this.add(t,_,c||t[_],b?b+h:h,r,s);else if(_!=="parseTransform"){Uc(_,h);continue}E||(_ in a?R.push(_,0,a[_]):typeof t[_]=="function"?R.push(_,2,t[_]()):R.push(_,1,c||t[_])),o.push(_)}}T&&sf(this)},render:function(t,e){if(e.tween._time||!Wc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ci,aliases:Xn,getSetter:function(t,e,n){var r=Xn[e];return r&&r.indexOf(",")<0&&(e=r),e in mi&&e!==rn&&(t._gsap.x||ci(t,"x"))?n&&Eu===n?e==="scale"?Zy:qy:(Eu=n||{})&&(e==="scale"?Ky:jy):t.style&&!Dc(t.style[e])?Yy:~e.indexOf("-")?$y:Hc(t,e)},core:{_removeProperty:pr,_getMatrix:Yc}};on.utils.checkPrefix=ls;on.core.getStyleSaver=hf;(function(i,t,e,n){var r=en(i+","+t+","+e,function(s){mi[s]=1});en(t,function(s){pn.units[s]="deg",pf[s]=1}),Xn[r[13]]=i+","+t,en(n,function(s){var o=s.split(":");Xn[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");en("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){pn.units[i]="px"});on.registerPlugin(gf);var It=on.registerPlugin(gf)||on;It.core.Tween;const vf=na.addFolder("SceneWheel");vf.close();function Pn(i){return vf.addFolder(i)}const lM="/genshin-impact-moon/assets/VoynichGuild-D5LITOrY.png",cM="/genshin-impact-moon/assets/AdventurersGuild-BCz89zFr.png",hM="/genshin-impact-moon/assets/Clink-ClankKrumkakeCraftshop-DjiTQle1.png",uM="/genshin-impact-moon/assets/Fatui-BOHMnhFc.png",dM="/genshin-impact-moon/assets/Hexenzirkel-CbcS9HAW.png",fM="/genshin-impact-moon/assets/KnightsofFavonious-DV5nBroB.png",pM="/genshin-impact-moon/assets/Lightkeepers-BocMaIb6.png",mM="/genshin-impact-moon/assets/SnowlandFae-DQH4JQWy.png",_M="/genshin-impact-moon/assets/TheWildHunt-CWZbBg_z.png",gM="/genshin-impact-moon/assets/TreasureHoarders-DGZujGce.png",xf={FrostmoonScions:gd,VoynichGuild:lM,AdventurersGuild:cM,ClinkClankKrumkakeCraftshop:hM,Fatui:uM,Hexenzirkel:dM,KnightsofFavonious:fM,Lightkeepers:pM,SnowlandFae:mM,TheWildHunt:_M,TreasureHoarders:gM},vM=[{title:"霜月之子",titleEn:"FrostmoonScions",description:"传说中黄金国的遗胤，在抛弃旧日的文明后，选择了在山林之间的生活。他们所唯一不曾抛舍的，只有对「月神」的信仰。但随着愚人众的到来，从来如此的宁静或许也到了最后的时刻……"},{title:"愚人众",titleEn:"Fatui",description:"来自至冬国的神秘组织，他们以外交使团的身份出现在诺德克莱，但其真实目的却令人生疑。他们对这片土地上的古老遗迹表现出异常的兴趣，特别是那些与「月之民」有关的传说。"},{title:"西风骑士团",titleEn:"KnightsofFavonious",description:"蒙德城的守护者们在这片遥远的土地上建立了前哨站。他们不仅要应对严酷的自然环境，还要调查各种神秘事件，维护这片区域的和平。"},{title:"冒险家协会",titleEn:"AdventurersGuild",description:"即使在这样偏远的地区，冒险家协会依然设立了分部。他们为旅行者提供各种委托，同时也在收集关于这片土地上的秘密。"},{title:"沃尼奇公会",titleEn:"VoynichGuild",description:"一个专注于研究古老文字和神秘学的学者组织。他们对诺德克莱地区的古代文明遗迹特别感兴趣，尤其是那些与月之民有关的神秘符号。"},{title:"叮铃哐啷蛋卷工坊",titleEn:"ClinkClankKrumkakeCraftshop",description:"这家独特的工坊不仅制作美味的点心，还是一个秘密情报交换的场所。店主似乎知道许多不为人知的故事。"},{title:"魔女学会",titleEn:"Hexenzirkel",description:"一个神秘的魔女组织，她们在这片土地上寻找着古老的魔法知识。她们对月神的力量特别感兴趣，但她们的真实目的仍是个谜。"},{title:"守光人",titleEn:"Lightkeepers",description:"这些守护者世代守护着诺德克莱的古老灯塔，他们掌握着独特的引导之术，能够在迷雾中为旅人指明方向。"},{title:"雪境精灵",titleEn:"SnowlandFae",description:"传说中居住在永冻之地的神秘生物，它们与自然有着深厚的联系。有人说它们是月神的使者，但很少有人能真正见到它们。"},{title:"狂猎团",titleEn:"TheWildHunt",description:"一群神秘的猎手，他们在暴风雪中追寻着古老的猎物。他们似乎知道一些关于这片土地上远古秘密的线索。"},{title:"盗宝团",titleEn:"TreasureHoarders",description:"这群投机分子被诺德克莱丰富的宝藏传说所吸引。他们四处寻找值钱的文物，但往往会惹上更多麻烦。"}],Lu="data:image/svg+xml,%3csvg%20width='100'%20height='20'%20viewBox='0%200%20100%2020'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3clinearGradient%20id='starGradient'%20x1='0%25'%20y1='0%25'%20x2='100%25'%20y2='0%25'%3e%3cstop%20offset='0%25'%20style='stop-color:%23ffffff;stop-opacity:0.05'/%3e%3cstop%20offset='50%25'%20style='stop-color:%23ffffff;stop-opacity:0.3'/%3e%3cstop%20offset='100%25'%20style='stop-color:%23ffffff;stop-opacity:0.05'/%3e%3c/linearGradient%3e%3cfilter%20id='glow'%3e%3cfeGaussianBlur%20stdDeviation='1'%20result='coloredBlur'/%3e%3cfeMerge%3e%3cfeMergeNode%20in='coloredBlur'/%3e%3cfeMergeNode%20in='SourceGraphic'/%3e%3c/feMerge%3e%3c/filter%3e%3c/defs%3e%3cg%20transform='translate(20,10)'%20filter='url(%23glow)'%3e%3cpath%20d='M10,0%20L11.9,6.2%20L18.5,6.2%20L13.3,10%20L15.2,16.2%20L10,12.4%20L4.8,16.2%20L6.7,10%20L1.5,6.2%20L8.1,6.2%20Z'%20transform='scale(0.6)'%20fill='url(%23starGradient)'/%3e%3c/g%3e%3cg%20transform='translate(50,10)'%20filter='url(%23glow)'%3e%3crect%20x='-5'%20y='-5'%20width='10'%20height='10'%20transform='rotate(45)'%20fill='url(%23starGradient)'/%3e%3c/g%3e%3cg%20transform='translate(80,10)'%20filter='url(%23glow)'%3e%3cpath%20d='M10,0%20L11.9,6.2%20L18.5,6.2%20L13.3,10%20L15.2,16.2%20L10,12.4%20L4.8,16.2%20L6.7,10%20L1.5,6.2%20L8.1,6.2%20Z'%20transform='scale(0.6)'%20fill='url(%23starGradient)'/%3e%3c/g%3e%3c/svg%3e",xM=i=>{const t=document.createElement("div");t.className="caption";const e=document.createElement("div");e.className="side-tab";const n=document.createElement("div");n.className="back-button",n.innerText="返回",n.addEventListener("click",()=>{i.onClickReturn()});const r=document.createElement("div");r.className="title-container";const s=document.createElement("img");s.src=Lu,s.className="title-decoration left";const o=document.createElement("h2"),a=document.createElement("img");a.src=Lu,a.className="title-decoration right",r.appendChild(s),r.appendChild(o),r.appendChild(a);const l=document.createElement("p");t.appendChild(r),t.appendChild(l),vM.forEach(h=>{const u=document.createElement("div");u.className="side-tab-item",u.innerText=h.title,u.style.backgroundImage=`url(${xf[h.titleEn]})`,u.addEventListener("click",()=>{document.querySelectorAll(".side-tab-item").forEach(d=>{d.classList.remove("active")}),u.classList.add("active"),o.textContent=h.title,i.onTabChange(h.titleEn),l.textContent=h.description,t.classList.remove("show"),requestAnimationFrame(()=>{t.classList.add("show")})}),e.appendChild(u)});const c=e.firstElementChild;return c&&c.click(),document.body.appendChild(e),document.body.appendChild(t),document.body.appendChild(n),{hide(){e.classList.add("hide"),t.classList.add("hide"),n.classList.add("hide"),window.dispatchEvent(new CustomEvent("custom-back"))},show(){e.classList.remove("hide"),t.classList.remove("hide"),n.classList.remove("hide")}}},hr={isAnimation:!1,isFirstShow:!0},yM=Pn("Nod-Krai"),cs=$x(yM),Qn=new dn;Qn.add(cs);cs.material.uniforms.u_time;Qn.scale.set(1.2,1.2,1.2);Xe.add(Qn);const qr={x:0,y:0,z:0};Qn.position.copy(new N(qr.x,qr.y,qr.z));const MM=i=>{hr.isAnimation=!0,hr.isFirstShow=!1,It.to(Qn.position,{x:-2,z:-2,duration:.8,ease:"power2.inOut"}),It.to(cs.material.uniforms.u_opacity,{value:0,duration:.8,ease:"power2.inOut",onComplete:()=>{cs.material.uniforms.u_texture.value=new kn().load(i),SM()}})},SM=()=>{Qn.position.set(2,0,2),cs.material.uniforms.u_opacity.value=0,It.to(Qn.position,{x:qr.x,y:qr.y,z:qr.z,duration:.8,ease:"power2.inOut"}),It.to(cs.material.uniforms.u_opacity,{value:1,duration:hr.isFirstShow?5:1,ease:hr.isFirstShow?"circ.in":"power1.inOut",onComplete:()=>{hr.isAnimation=!1}})},$c=xM({onClickReturn:()=>{Xe.remove(Qn),Cn.dispatchEvent("custom-solar-reset",{detail:"reset"}),$c.hide()},onTabChange:i=>{MM(xf[i])}});Cn.addEventListener("custom-solar-node-krai-click",i=>{hr.isFirstShow=!0,setTimeout(()=>{Xe.add(Qn),$c.show()},1500)});$c.hide();Xe.remove(Qn);const yf="/genshin-impact-moon/assets/moon-bg-CrXP2I7C.png";function ki(i={brightness:.27,opacity:.3,positionX:.55,positionY:2.08,positionZ:-5,scale:6.6,rotationX:-.45,rotationY:0,rotationZ:0,texture:""},t){const n=new kn().load(i.texture),r=new zn(2,2),s=new Oi({map:n,transparent:!0,opacity:i.opacity,depthWrite:!1,depthTest:!0});s.opacity=i.opacity,n.colorSpace=Ue;const o=new Ae(r,s);return o.scale.set(i.scale,i.scale,i.scale),o.position.set(i.positionX,i.positionY,i.positionZ),o.rotation.set(i.rotationX,i.rotationY,i.rotationZ),s.color.setRGB(i.brightness,i.brightness,i.brightness),t.close(),t.add(i,"brightness",0,5).name("亮度").onChange(()=>{s.color.setRGB(i.brightness,i.brightness,i.brightness)}),t.add(i,"opacity",0,1).name("透明度").onChange(()=>{s.opacity=i.opacity}),t.add(i,"positionX",-5,5).name("X轴位置").onChange(()=>{o.position.x=i.positionX}),t.add(i,"positionY",-5,5).name("Y轴位置").onChange(()=>{o.position.y=i.positionY}),t.add(i,"positionZ",-10,10).name("Z轴位置").onChange(()=>{o.position.z=i.positionZ}),t.add(i,"scale",.1,20).name("缩放比例").onChange(()=>{o.scale.set(i.scale,i.scale,i.scale)}),t.add(i,"rotationX",-Math.PI,Math.PI).name("X轴旋转").onChange(()=>{o.rotation.x=i.rotationX}),t.add(i,"rotationY",-Math.PI,Math.PI).name("Y轴旋转").onChange(()=>{o.rotation.y=i.rotationY}),t.add(i,"rotationZ",-Math.PI,Math.PI).name("Z轴旋转").onChange(()=>{o.rotation.z=i.rotationZ}),t.open(),o.position.z=i.positionZ,o}const Mf=na.addFolder("SceneMoon");Mf.close();function Hi(i){const t=Mf.addFolder(i);return t.close(),t}const Sf="/genshin-impact-moon/assets/meteor-sFjuQ5E3.png",Ef=.32,Fo=ki({brightness:.81,opacity:Ef,positionX:-1.67,positionY:-.1,positionZ:-10,scale:14.535,rotationX:.01884,rotationY:0,rotationZ:0,texture:yf},Hi("moon-main-bg")),bf=.15,Zr=ki({brightness:1,opacity:bf,positionX:-0,positionY:15,positionZ:-15,scale:15,rotationX:0,rotationY:0,rotationZ:0,texture:Sf},Hi("moon-meteor-bg"));function Tf(){requestAnimationFrame(Tf),Zr.rotation.x=0,Zr.rotation.z+=1e-4}Tf();const qc=new dn;qc.add(Fo);qc.add(Zr);const Zc={name:"GIMSceneItemMoonBg",item:qc,opacityShow:(i,t)=>{Zr.material.opacity=0,Fo.material.opacity=0,It.to(Zr.material,{opacity:bf,duration:t,ease:i}),It.to(Fo.material,{opacity:Ef,duration:t,ease:i})},opacityHide:(i,t,e)=>{It.to(Zr.material,{opacity:e,duration:t,ease:i}),It.to(Fo.material,{opacity:e,duration:t,ease:i})}},ca=Hi("moon-stars"),el=20,Kc=2e3,jc=new Rn,No=new Float32Array(Kc*3),Af=new Float32Array(Kc);for(let i=0;i<Kc;i++)No[i*3]=(Math.random()-.5)*el,No[i*3+1]=(Math.random()-.5)*el,No[i*3+2]=(Math.random()-.5)*el,Af[i]=Math.random()*2+.5;jc.setAttribute("position",new Ne(No,3));jc.setAttribute("size",new Ne(Af,1));const mr=new sn({uniforms:{opacity:{value:1},uTime:{value:0},uStarSize:{value:4.55},uStarColor:{value:new Ft("#75d1ff")},uTwinkleSpeed:{value:1},uTwinkleIntensity:{value:.071}},vertexShader:`
        uniform float uTime;
        uniform float uStarSize;
        uniform float uTwinkleIntensity;
        attribute float size;
        varying float vBrightness;
        
        // 简单的伪随机函数
        float random(vec3 scale, float seed) {
            return fract(sin(dot(gl_Position.xyz + seed, scale)) * 43758.5453 + seed);
        }
        
        void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            
            // 基于位置和时间的闪烁效果
            float randomOffset = random(vec3(12.9898, 78.233, 37.719), length(position));
            float twinkle = sin(uTime + randomOffset * 100.0) * 0.5 + 0.5;
            vBrightness = mix(1.0, twinkle, uTwinkleIntensity);
            
            gl_PointSize = uStarSize * size * vBrightness;
        }
    `,fragmentShader:`
        uniform vec3 uStarColor;
        uniform float opacity;
        varying float vBrightness;
        
        void main() {
            float distance = length(gl_PointCoord - vec2(0.5));
            float alpha = 1.0 - distance * 2.0;
            
            // 应用亮度变化
            vec3 finalColor = uStarColor * vBrightness;
            gl_FragColor = vec4(finalColor, alpha * opacity);
        }
    `,transparent:!0}),kr=new Tc(jc,mr);ca.add(mr.uniforms.uStarSize,"value",1,15).name("基础星星大小");ca.add(mr.uniforms.uTwinkleSpeed,"value",.1,5).name("闪烁速度");ca.add(mr.uniforms.uTwinkleIntensity,"value",0,1).name("闪烁强度");ca.addColor({color:"#ffffff"},"color").name("星星颜色").onChange(i=>{mr.uniforms.uStarColor.value.setStyle(i)});function wf(){mr.uniforms.uTime.value+=.01*mr.uniforms.uTwinkleSpeed.value,kr.rotation.x+=1e-4,kr.rotation.y+=2e-4,requestAnimationFrame(wf)}wf();const Jc={name:"GIMSceneItemMoonStars",item:kr,opacityShow(i,t,e){kr.material.uniforms.opacity={value:0},It.to(kr.material.uniforms.opacity,{value:e,duration:t,ease:i})},opacityHide(i,t,e){It.to(kr.material.uniforms.opacity,{value:0,duration:t,ease:i})}},Cf="/genshin-impact-moon/assets/light-NE3iwVYu.png",Rf=.28,Oo=ki({brightness:.55,opacity:Rf,positionX:0,positionY:0,positionZ:-.03,scale:.6,rotationX:-.3958,rotationY:.01884,rotationZ:-1.954,texture:Cf},Hi("moon-light")),Pf=.2,Bo=ki({brightness:.55,opacity:Pf,positionX:0,positionY:0,positionZ:-.031,scale:.8,rotationX:-.3958,rotationY:.01884,rotationZ:-1.954,texture:Cf},Hi("moon-light")),Qc=new dn;Qc.add(Oo);Qc.add(Bo);const uc={name:"moon-light",item:Qc,opacityShow:(i,t)=>{Oo.material.opacity=0,Bo.material.opacity=0,It.to(Oo.material,{opacity:Rf,duration:t,ease:i}),It.to(Bo.material,{opacity:Pf,duration:t,ease:i})},opacityHide:(i,t)=>{It.to(Oo.material,{opacity:0,duration:t,ease:i}),It.to(Bo.material,{opacity:0,duration:t,ease:i})}},EM="/genshin-impact-moon/assets/moon-texture-XOu6tOaF.png",ze={scale:1.1,brightness:-.1,opacity:1,rotationX:.3,rotationY:0,rotationZ:0,rotationSpeed:.002,positionX:0,positionY:0,positionZ:0},th=new ta(.15,32,32),ti=Hi("moon-moon"),bM=new kn,Df=bM.load(EM);Df.colorSpace=Ue;const ha=new Oi({map:Df,opacity:1,transparent:!0,depthWrite:!1,blending:Di,side:Kn}),An=new Ae(th,ha);th.rotateX(ze.rotationX);ha.color.setScalar(ze.brightness+1);th.scale(ze.scale,ze.scale,ze.scale);ti.add(ze,"scale",.1,5).onChange(i=>{An.scale.set(i,i,i)});ti.add(ze,"brightness",-1,1).onChange(i=>{ha.color.setScalar(i+1)});ti.add(ze,"opacity",0,1).onChange(i=>{ha.opacity=i});ti.add(ze,"rotationX",0,Math.PI*2).onChange(i=>{An.rotation.x=i});ti.add(ze,"rotationY",0,Math.PI*2).onChange(i=>{An.rotation.y=i});ti.add(ze,"rotationZ",0,Math.PI*2).onChange(i=>{An.rotation.z=i});ti.add(ze,"rotationSpeed",0,.1);ti.add(ze,"positionX",-5,5).onChange(i=>{An.position.x=i});ti.add(ze,"positionY",-5,5).onChange(i=>{An.position.y=i});ti.add(ze,"positionZ",-5,5).onChange(i=>{An.position.z=i});const Lf=()=>{An.rotation.y+=ze.rotationSpeed,requestAnimationFrame(Lf)};Lf();const dc={name:"moon",item:An,opacityShow:(i,t,e=1)=>{An.material.opacity=.7,It.to(An.material,{opacity:e,duration:t,ease:i})},opacityHide:(i,t,e=0)=>{It.to(An.material,{opacity:e,duration:t,ease:i})}},TM=new zn(1,1),_i=Hi("moon-shadow"),we={positionZ:-.01,positionX:.02,positionY:0,scale:.5,rotationX:0,rotationY:0,rotationZ:0,color:"#575757"},ua=new sn({uniforms:{time:{value:0},color:{value:new Ft(we.color)}},transparent:!0,vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
    `,fragmentShader:`
        uniform float time;
        uniform vec3 color;
        varying vec2 vUv;
        void main() {
            float dist = length(vUv - vec2(0.5));
            float alpha = smoothstep(0.5, 0., dist);
            gl_FragColor = vec4(color, alpha);
        }
    `}),Ke=new Ae(TM,ua);Ke.scale.set(we.scale,we.scale,we.scale);Ke.position.set(we.positionX,we.positionY,we.positionZ);Ke.rotation.set(we.rotationX,we.rotationY,we.rotationZ);ua.uniforms.time.value=0;_i.addColor({color:we.color},"color").onChange(i=>{ua.uniforms.color.value.set(i)});_i.add(we,"scale",.1,5).onChange(i=>{Ke.scale.set(i,i,i)});_i.add(we,"positionX",-5,5).onChange(i=>{Ke.position.x=i});_i.add(we,"positionY",-5,5).onChange(i=>{Ke.position.y=i});_i.add(we,"positionZ",-5,5).onChange(i=>{Ke.position.z=i});_i.add(we,"rotationX",0,Math.PI*2).onChange(i=>{Ke.rotation.x=i});_i.add(we,"rotationY",0,Math.PI*2).onChange(i=>{Ke.rotation.y=i});_i.add(we,"rotationZ",0,Math.PI*2).onChange(i=>{Ke.rotation.z=i});_i.add({opacity:1},"opacity",0,1).onChange(i=>{ua.opacity=i});const fc={name:"moon-shadow",item:Ke,opacityShow:(i,t,e=1)=>{Ke.material.opacity=0,It.to(Ke.material,{opacity:e,duration:t,ease:i})},opacityHide:(i,t,e=0)=>{It.to(Ke.material,{opacity:e,duration:t,ease:i})}},AM="/genshin-impact-moon/assets/moon-2-LIRcGFBt.png",Se={scale:1.4,brightness:-.1,opacity:1,rotationX:1.5,rotationY:3,rotationZ:6.2,positionX:0,positionY:0,positionZ:-.02},wM=new ta(.15,32,32),gi=Hi("moon-second"),CM=new kn,If=CM.load(AM);If.colorSpace=Ue;const da=new Oi({map:If,opacity:1,transparent:!1,depthWrite:!1,blending:Di,side:Kn}),je=new Ae(wM,da);da.color.setScalar(Se.brightness+1);je.position.set(Se.positionX,Se.positionY,Se.positionZ);je.scale.set(Se.scale,Se.scale,Se.scale);je.rotation.set(Se.rotationX,Se.rotationY,Se.rotationZ);gi.add(Se,"scale",.1,5).onChange(i=>{je.scale.set(i,i,i)});gi.add(Se,"brightness",-1,1).onChange(i=>{da.color.setScalar(i+1)});gi.add(Se,"opacity",0,1).onChange(i=>{da.opacity=i});gi.add(Se,"rotationX",0,Math.PI*2).onChange(i=>{je.rotation.x=i});gi.add(Se,"rotationY",0,Math.PI*2).onChange(i=>{je.rotation.y=i});gi.add(Se,"rotationZ",0,Math.PI*2).onChange(i=>{je.rotation.z=i});gi.add(Se,"positionX",-5,5).onChange(i=>{je.position.x=i});gi.add(Se,"positionY",-5,5).onChange(i=>{je.position.y=i});gi.add(Se,"positionZ",-10,10).onChange(i=>{je.position.z=i});const pc={name:"moon-second",item:je,opacityShow:(i,t,e=1)=>{je.material.opacity=0,It.to(je.material,{opacity:e,duration:t,ease:i})},opacityHide:(i,t,e=0)=>{It.to(je.material,{opacity:e,duration:t,ease:i})}},qs=new dn;qs.add(dc.item);qs.add(uc.item);qs.add(pc.item);qs.add(fc.item);const eh={name:"GIMSceneItemMoonGroup",item:qs,opacityShow(i,t,e=1){dc.opacityShow(i,t,e),uc.opacityShow(i,t,e),pc.opacityShow(i,t,e),fc.opacityShow(i,t,e)},opacityHide(i,t,e){dc.opacityHide(i,t,e),uc.opacityHide(i,t,e),pc.opacityHide(i,t,e),fc.opacityHide(i,t,e)}},Yn=new dn,qo=5;Yn.position.setY(qo);Yn.add(eh.item);Yn.add(Zc.item);Yn.add(Jc.item);function RM(){It.to(Yn.position,{y:Yn.position.y+qo,duration:3,ease:"power2.in"}),eh.opacityHide("power2.in",3*1.5,0),Zc.opacityHide("power2.in",3*1.5,0),Jc.opacityHide("power2.in",3*1.5,0)}function PM(){Yn.position.setY(qo),Xe.add(Yn);const i=5;It.to(Yn.position,{y:Yn.position.y-qo,duration:i,ease:"power2.out"}),eh.opacityShow("power2.out",i,1),Zc.opacityShow("power2.out",i,1),Jc.opacityShow("power2.out",i,1)}const Iu={dispear:RM,show:PM},DM="/genshin-impact-moon/assets/bg-ByX5bduQ.mp3",LM="/genshin-impact-moon/assets/github-mark-white-BsLkggKK.png",nh="/genshin-impact-moon/assets/satellite-DzxXwxd8.png",IM="/genshin-impact-moon/assets/circle-E-Cp3hGt2-.png",Cs=document.createElement("div");Cs.classList.add("overlay");Cs.innerHTML=`
<div style="display: flex;flex-direction: column;">
  <div style="position: relative;height: 12.5rem;"> 
    <img style="position: absolute;width: 5rem;height: 5rem;" src="${nh}" alt=""> 
    <img style="position: absolute;width: 9rem;height: 9rem;" src="${IM}" alt=""> 
  </div>
  <div style="margin-top: 1.25rem;font-family: 'cursive', sans-serif;font-size: 1rem;letter-spacing: 0.125rem;animation: breathe 2s infinite ease-in-out;">
    🌟 点击开始 🌟
  </div>
</div>
`;function UM(){const i=document.createElement("img");i.src=LM,i.classList.add("github-icon"),i.classList.add("github"),i.addEventListener("click",()=>{window.open("https://github.com/qirong77/genshin-impact-moon","_blank")}),document.body.appendChild(i)}function FM(){const i=document.createElement("audio");i.src=DM,i.loop=!0,i.autoplay=!0,i.onerror=t=>{console.error("音频加载失败:",t)},document.body.appendChild(i)}const Uu=[],Uf={show(){document.body.appendChild(Cs),document.addEventListener("DOMContentLoaded",()=>{Cs.addEventListener("click",()=>{Cs.classList.add("fade-out"),Uu.forEach(i=>{i()}),UM(),FM()})})},onClick(i){Uu.push(i)}};class NM{constructor(t,e){yr(this,"geometryConfig",{starCounts:1500,innerRadius:1,outerRadius:2,color:new Ft(.47,.19,.87),opacity:1,randomness:.5,randomFrequency:.8,positionX:0,positionY:0,positionZ:0,rotationX:0,rotationY:0,rotationZ:0});yr(this,"currentGeometry",null);yr(this,"onChangeHanlders",[]);this.currentGeometry=this.createGeometry(),this.geometryConfig={...this.geometryConfig,...e};const n=()=>{var a;const o=this.createGeometry();(a=this.currentGeometry)==null||a.dispose(),this.currentGeometry=o,this.onChangeHanlders.forEach(l=>{l(o)})};n(),t.addColor(this.geometryConfig,"color").onChange(n),t.add(this.geometryConfig,"innerRadius",0,5).onChange(n),t.add(this.geometryConfig,"outerRadius",1,10).onChange(n),t.add(this.geometryConfig,"starCounts",0,8e3).onChange(n),t.add(this.geometryConfig,"randomness",0,1).name("位置随机性").onChange(n),t.add(this.geometryConfig,"randomFrequency",0,2).name("闪烁频率随机性").onChange(n);const r=t.addFolder("位置控制");r.add(this.geometryConfig,"positionX",-10,10).name("X轴位置").onChange(n),r.add(this.geometryConfig,"positionY",-10,10).name("Y轴位置").onChange(n),r.add(this.geometryConfig,"positionZ",-10,10).name("Z轴位置").onChange(n);const s=t.addFolder("旋转控制");s.add(this.geometryConfig,"rotationX",-Math.PI,Math.PI).name("X轴旋转").onChange(n),s.add(this.geometryConfig,"rotationY",-Math.PI,Math.PI).name("Y轴旋转").onChange(n),s.add(this.geometryConfig,"rotationZ",-Math.PI,Math.PI).name("Z轴旋转").onChange(n)}createGeometry(){const{starCounts:t,innerRadius:e,outerRadius:n,color:r,randomness:s,randomFrequency:o,positionX:a,positionY:l,positionZ:c,rotationX:h,rotationY:u,rotationZ:d}=this.geometryConfig,p=new Rn,g=new Float32Array(t*3),_=new Float32Array(t*3),m=new Float32Array(t),f=new Float32Array(t),b=new ce;b.makeRotationFromEuler(new jn(h,u,d));for(let E=0;E<t;E++){const v=E*3,A=Math.random()*Math.PI*2,C=e+Math.random()*(n-e),T=(Math.random()-.5)*s*(n-e),R=(Math.random()-.5)*s*Math.PI*.5,x=C+T,M=A+R,P=new N(Math.cos(M)*x,Math.sin(M)*x,0);P.applyMatrix4(b),g[v]=P.x+a,g[v+1]=P.y+l,g[v+2]=P.z+c,m[E]=Math.random()*2*Math.PI,f[E]=1+(Math.random()-.5)*o,_[v]=r.r,_[v+1]=r.g,_[v+2]=r.b}return p.setAttribute("position",new Ne(g,3)),p.setAttribute("color",new Ne(_,3)),p.setAttribute("offset",new Ne(m,1)),p.setAttribute("frequency",new Ne(f,1)),p}getGeometry(){return this.currentGeometry}onChangeConfig(t){this.onChangeHanlders.push(t)}}function OM(i,t){const e={time:{value:1},size:{value:12.5},opacity:{value:1},glowIntensity:{value:2.5},glowSpeed:{value:1.73},fixedGlowRadius:{value:.08},gradientGlowRadius:{value:.15}};Reflect.ownKeys(t).forEach(s=>{e[s]={value:t[s]}});const n=new sn({uniforms:e,vertexShader:`
            uniform float size;
            attribute float offset;
            attribute float frequency;
            varying float vOffset;
            varying float vFrequency;
            varying vec3 vColor; // 传递顶点颜色到片段着色器
            void main() {
                vOffset = offset;
                vFrequency = frequency;
                vColor = color; // 获取顶点颜色
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size;
                gl_Position = projectionMatrix * mvPosition;
            }
        `,fragmentShader:`
            uniform float time;
            uniform float glowIntensity;
            uniform float glowSpeed;
            uniform float fixedGlowRadius;
            uniform float gradientGlowRadius;
            uniform float opacity;
            varying float vOffset;
            varying float vFrequency;
            varying vec3 vColor; // 接收顶点颜色
            void main() {
                // 创建圆形点
                vec2 coord = gl_PointCoord - 0.5;
                float len = length(coord);
                
                // 固定亮度范围
                float fixedGlow = step(len, fixedGlowRadius);
                
                // 渐变范围（从内到外逐渐变亮）
                float gradientGlow = 1.0 - smoothstep(fixedGlowRadius, fixedGlowRadius + gradientGlowRadius, len);
                
                // 使用独立频率的光晕动画
                float glowAnimation = sin(time * glowSpeed * vFrequency + vOffset) * 0.5 + 0.5;
                gradientGlow *= glowAnimation * glowIntensity;
                
                if (len > 0.5) {
                    discard; // 丢弃超出圆形范围的像素
                }
                
                // 使用独立频率的亮度动画
                float brightness = (sin(time * vFrequency + vOffset) + 1.0) / 2.0;
                vec3 finalColor = vColor * brightness * (fixedGlow + gradientGlow);
                gl_FragColor = vec4(finalColor, opacity);
            }
        `,blending:Ps,side:Ze,transparent:!0,depthWrite:!0,vertexColors:!0});i.add(e.opacity,"value",0,1).name("opacity"),i.add(e.size,"value",0,100).name("size"),i.add(e.glowIntensity,"value",0,10).name("glowIntensity"),i.add(e.glowSpeed,"value",0,10).name("glowSpeed"),i.add(e.fixedGlowRadius,"value",0,10).name("fixedGlowRadius"),i.add(e.gradientGlowRadius,"value",0,10).name("gradientGlowRadius");function r(){requestAnimationFrame(r),n.uniforms.time.value=fd.getElapsedTime(),Bi.render(Xe,Ot)}return r(),n}let nl=0;function Zs(i={}){nl++;const t=Pn("wheel-star-ring-"+nl),e=new NM(t,i),n=OM(t,i),r=e.getGeometry(),s=new Tc(r,n);return e.onChangeConfig(o=>{s.geometry=o}),s.name="star-ring"+nl,s}const ke={opacity:.25,positionX:-5,positionY:2.92,rotationSpeed:.03,scale:8.33},BM=new kn,Ff=BM.load(Sf),zM=new zn(1,1),Nf=new Oi({map:Ff,transparent:!0,opacity:ke.opacity,side:Ze,depthWrite:!1,depthTest:!0});Ff.colorSpace=Ue;const vr=new Ae(zM,Nf);vr.position.set(ke.positionX,ke.positionY,-3);vr.scale.set(ke.scale,ke.scale,1);const ds=Pn("wheel-meteor-background");ds.add(ke,"opacity",0,1).name("透明度").onChange(()=>{Nf.opacity=ke.opacity});ds.add(ke,"positionX",-20,20).name("X轴位置").onChange(()=>{vr.position.x=ke.positionX});ds.add(ke,"positionY",-20,20).name("Y轴位置").onChange(()=>{vr.position.y=ke.positionY});ds.add(ke,"rotationSpeed",-1,1).name("旋转速度").onChange(()=>{});ds.add(ke,"scale",1,30).name("大小").onChange(()=>{vr.scale.set(ke.scale,ke.scale,1)});ds.open();Xe.add(vr);function Of(){vr.rotateZ(ke.rotationSpeed*.01),requestAnimationFrame(Of)}Of();const kM="/genshin-impact-moon/assets/bg-gradient-DrcYO8L7.png",HM=.3,Bf=ki({brightness:1.54,opacity:HM,positionX:.55,positionY:2.08,positionZ:-10,scale:20,rotationX:-.45,rotationY:0,rotationZ:0,texture:kM},Pn("wheel-main-background")),GM=Zs({starCounts:360,innerRadius:.9,outerRadius:3,color:new Ft(16777215)}),VM=.3,zf=ki({brightness:.315,opacity:VM,positionX:-4.69,positionY:-.29,positionZ:-5,scale:11.229,rotationX:.23876,rotationY:.32672,rotationZ:-.5277,texture:yf},Pn("wheel-galaxy-background")),Ai=new dn;Ai.add(Bf);Ai.add(GM);Ai.add(zf);const Fu={item:Ai,show(){Xe.add(Ai),Ai.position.setY(10),It.to(Ai.position,{y:Ai.position.y-10,duration:3,ease:"power1.out"}),[Bf,zf].forEach(i=>{i.material.opacity=0,It.to(i.material,{opacity:.3,value:.3,duration:3,ease:"power1.out"})})}};function WM(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ih={exports:{}};function kf(i,t=100,e={}){if(typeof i!="function")throw new TypeError(`Expected the first parameter to be a function, got \`${typeof i}\`.`);if(t<0)throw new RangeError("`wait` must not be negative.");const{immediate:n}=typeof e=="boolean"?{immediate:e}:e;let r,s,o,a,l;function c(){const d=r,p=s;return r=void 0,s=void 0,l=i.apply(d,p),l}function h(){const d=Date.now()-a;d<t&&d>=0?o=setTimeout(h,t-d):(o=void 0,n||(l=c()))}const u=function(...d){if(r&&this!==r&&Object.getPrototypeOf(this)===Object.getPrototypeOf(r))throw new Error("Debounced method called with different contexts of the same prototype.");r=this,s=d,a=Date.now();const p=n&&!o;return o||(o=setTimeout(h,t)),p&&(l=c()),l};return Object.defineProperty(u,"isPending",{get(){return o!==void 0}}),u.clear=()=>{o&&(clearTimeout(o),o=void 0)},u.flush=()=>{o&&u.trigger()},u.trigger=()=>{l=c(),u.clear()},u}ih.exports.debounce=kf;ih.exports=kf;var XM=ih.exports;const mc=WM(XM);function YM(i,t){const n=new kn().load(t),r=new Ft("#c9c5c5"),s=new Ft("#1e1e25"),o=new Ft("#f5f5f5"),a=new Ft("black"),l=new sn({transparent:!1,uniforms:{u_time:{value:0},u_borderWidth:{value:.01},u_borderColor:{value:r},u_borderSmoothness:{value:.01},u_borderRadius:{value:.1},u_texture:{value:n},u_rhombusSize:{value:.1},u_rhombusOffset:{value:.9},u_backgroundColor:{value:s}},vertexShader:`
        varying vec2 v_uv;
        uniform float u_time;
        void main(){
            v_uv = uv;
            vec4 modelPosition = modelMatrix * vec4( position, 1.0 );
            gl_Position = projectionMatrix * viewMatrix * modelPosition;
        }
        `,fragmentShader:`
        precision lowp float;
        varying vec2 v_uv;
        uniform sampler2D u_texture;
        uniform float u_time;
        uniform float u_borderWidth;
        uniform vec3 u_borderColor;
        uniform float u_borderSmoothness;
        uniform float u_borderRadius;
        uniform float u_rhombusSize;
        uniform float u_rhombusOffset;
        uniform vec3 u_backgroundColor;
    
        float rhombusSDF(vec2 st) {
            float x = abs(st.x);
            float y = abs(st.y);
            bool isInside = y < (-1. * x + u_rhombusSize);
            return isInside ? 0.0 : 1.0;
        }
    
        // 计算圆形SDF
        float circleSDF(vec2 st, float radius) {
            return length(st) - radius;
        }
    
        void main(){
            vec2 st = v_uv;
            st = st * 2.0 - 1.0;  // 将坐标范围调整为[-1,1]
            
            // 计算圆形边框
            float radius = 1.0 - u_borderRadius;
            float circleDist = circleSDF(st, radius);
            
            // 边框内外判断
            bool isInBorder = abs(circleDist) < u_borderWidth;
            
            // 平滑边框
            float borderMask = 1.0 - smoothstep(0.0, u_borderSmoothness, abs(circleDist) - u_borderWidth);
            
            // 计算四个菱形指针的位置
            vec2 rhombusPositions[4];
            rhombusPositions[0] = vec2(0.0, u_rhombusOffset);  // 上
            rhombusPositions[1] = vec2(0.0, -u_rhombusOffset); // 下
            rhombusPositions[2] = vec2(u_rhombusOffset, 0.0);  // 右
            rhombusPositions[3] = vec2(-u_rhombusOffset, 0.0); // 左
            
            // 判断是否在菱形内
            bool isInRhombus = false;
            for(int i = 0; i < 4; i++) {
                vec2 rhombusSt = st - rhombusPositions[i];
                float rhombusDist = rhombusSDF(rhombusSt);
                if(rhombusDist < 0.01) {
                    isInRhombus = true;
                    break;
                }
            }
            
            // 应用颜色
            vec4 text_color = texture2D(u_texture, v_uv);
            text_color.a -= 0.2; 
            // 如果在边框或菱形内，直接返回边框颜色
            if(isInBorder || isInRhombus) {
                gl_FragColor = vec4(u_borderColor, 1.0);
                return;
            }
            
            // 如果在圆外，返回透明
            if(circleDist > 0.0) {
                discard; // 丢弃圆形外的片元
                gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
                return;
            }
            
            // 在圆内，根据纹理透明度决定显示纹理或背景色
            if(text_color.a < 0.2) {
                gl_FragColor = vec4(u_backgroundColor, 1.0);
                return;
            }
            
            gl_FragColor = text_color;
        }
        `,blending:Ps}),c=new zn(.2,.2),h=new Ae(c,l),u=i.addFolder("texture-border");u.add(l.uniforms.u_borderWidth,"value",.01,.1,.01).name("边框宽度"),u.add(l.uniforms.u_borderSmoothness,"value",.001,.05,.001).name("边框平滑度"),u.add(l.uniforms.u_borderRadius,"value",0,.5,.01).name("圆角半径"),u.add(l.uniforms.u_rhombusSize,"value",.05,.2,.01).name("菱形大小"),u.add(l.uniforms.u_rhombusOffset,"value",.1,2.5,.01).name("菱形位置"),u.addColor(l.uniforms.u_borderColor,"value").name("边框颜色"),u.addColor(l.uniforms.u_backgroundColor,"value").name("背景颜色");function d(){l.uniforms.u_borderColor.value=o,l.uniforms.u_backgroundColor.value=a,h.scale.set(1.2,1.2,1.2)}function p(){l.uniforms.u_borderColor.value=r,l.uniforms.u_backgroundColor.value=s,h.scale.set(1,1,1)}function g(_){l.uniforms.u_time.value=_*.001,requestAnimationFrame(g)}return requestAnimationFrame(g),{mesh:h,highlight:mc(d,100),unhighlight:mc(p,100)}}class $M{constructor(){yr(this,"_cubes",[]);yr(this,"_cubesMap",new Map);const t=new Ut,e=new Bm,n=mc(r=>{t.x=r.clientX/window.innerWidth*2-1,t.y=-(r.clientY/window.innerHeight)*2+1,e.setFromCamera(t,Ot);const s=e.intersectObjects(this._cubes);let o=!1;s.forEach(l=>{const c=l.object,h=this._cubesMap.get(c.name);h&&(h.onHover&&h.onHover(),h.pointer&&(o=!0))});const a=new Set(s.map(l=>l.object.name));this._cubes.forEach(l=>{const c=this._cubesMap.get(l.name);c&&!a.has(l.name)&&c.onUnhover&&c.onUnhover()}),o?document.body.style.cursor="pointer":document.body.style.cursor="default"},5,{immediate:!0});window.addEventListener("mousemove",n,!1),window.addEventListener("click",r=>{t.x=r.clientX/window.innerWidth*2-1,t.y=-(r.clientY/window.innerHeight)*2+1,e.setFromCamera(t,Ot),e.intersectObjects(this._cubes).forEach(o=>{const a=o.object,l=this._cubesMap.get(a.name);l&&l.onClick&&l.onClick()})},!1)}addCube(t){if(!t.cube.name){console.error("cube must have name");return}this._cubes.push(t.cube),this._cubesMap.set(t.cube.name,t)}}const qM=new $M,ZM="/genshin-impact-moon/assets/FrostmoonScions-DtrFp5wh.png",KM="/genshin-impact-moon/assets/VoynichGuild-ClwGIIB6.png",jM="/genshin-impact-moon/assets/AdventurersGuild-CFLl6SRa.png",JM="/genshin-impact-moon/assets/Clink-ClankKrumkakeCraftshop-vFuDVf--.png",QM="/genshin-impact-moon/assets/Fatui-BiZQVFX4.png",tS="/genshin-impact-moon/assets/Hexenzirkel-CTUV7qlm.png",eS="/genshin-impact-moon/assets/KnightsofFavonious-CF06teM3.png",nS="/genshin-impact-moon/assets/Lightkeepers-B5Aldc8w.png",iS="/genshin-impact-moon/assets/SnowlandFae-dR9YkLNY.png",rS="/genshin-impact-moon/assets/TheWildHunt-CGs_tLa6.png",sS="/genshin-impact-moon/assets/TreasureHoarders-V7HpuJeK.png",Nu={FrostmoonScions:ZM,VoynichGuild:KM,AdventurersGuild:jM,ClinkClankKrumkakeCraftshop:JM,Fatui:QM,Hexenzirkel:tS,KnightsofFavonious:eS,Lightkeepers:nS,SnowlandFae:iS,TheWildHunt:rS,TreasureHoarders:sS},oS=Pn("wheel-nodeKrai");function aS(i,t){const e=[];for(let n=0;n<t;n++){const r=n/t*Math.PI*2,s=Math.cos(r)*i,o=Math.sin(r)*i;e.push([s,o,.15])}return e}function Hf(i,t,e,n){const r=aS(i,t),s=new dn,o=Object.keys(Nu).slice(e,n);return r.forEach((a,l)=>{if(l<o.length){const{mesh:c,highlight:h,unhighlight:u}=YM(oS,Nu[o[l]]);c.name=o[l],qM.addCube({cube:c,onClick(){Cn.dispatchEvent("custom-solar-animate",{detail:c.name}),Cn.dispatchEvent("custom-solar-node-krai-click",{detail:c.name})},onHover(){h()},onUnhover(){u()},pointer:!0}),c.rotation.x=Math.PI*.5,c.position.set(a[0],a[1],a[2]),s.add(c)}}),s}const fs=Hf(.6,3,0,3),ps=Hf(1.5,8,3);fs.rotation.x=-1.1;fs.rotation.y=-.18;fs.rotation.z=-.18;ps.rotation.x=-1.1;ps.rotation.y=-.18;ps.rotation.z=-.18;Xe.add(fs);Xe.add(ps);const Gf=[];[fs,ps].forEach(i=>{i.children.forEach(t=>{Gf.push({mesh:t,initialX:t.position.x,initialY:t.position.y})})});let il=0;function Vf(){il+=.001,Gf.forEach(i=>{const t=Math.cos(il),e=Math.sin(il),n=i.initialX*t-i.initialY*e,r=i.initialX*e+i.initialY*t;i.mesh.position.set(n,r,i.mesh.position.z)}),requestAnimationFrame(Vf)}Vf();const Rs=new dn;Rs.add(fs);Rs.add(ps);const Zo={item:Rs,hide(){Xe.remove(Rs)},show(){Xe.add(Rs)}};Cn.addEventListener("custom-solar-node-krai-click",i=>{Zo.hide()});Cn.addEventListener("custom-solar-reset",i=>{setTimeout(()=>{Zo.show()},2500)});const Mn={pointSize:3,axisLength:5.5,spacing:.02,color:"#9b9b9b"};function lS(){const i=new Rn,t=new sn({uniforms:{uPointSize:{value:Mn.pointSize},uColor:{value:new Ft(Mn.color)},opacity:{value:1}},vertexShader:`
            uniform float uPointSize;
            
            void main() {
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_Position = projectionMatrix * mvPosition;
                
                // 根据距离计算点的大小
                float distance = length(mvPosition.xyz);
                gl_PointSize = uPointSize;
            }
        `,fragmentShader:`
            uniform vec3 uColor;
            uniform float opacity;
            void main() {
                gl_FragColor = vec4(uColor, opacity);
            }
        `,transparent:!0}),e=[];for(let o=0;o<3;o++){const a=Mn.axisLength,l=-a/2,c=Math.floor(a/Mn.spacing);for(let h=0;h<c;h++){const u=[0,0,0],d=l+h*Mn.spacing;Math.abs(d)<=a/2&&(u[o]=d,e.push(...u))}}i.setAttribute("position",new wn(e,3));const n=new Tc(i,t),r=Pn("wheel-axis-stars");r.close(),r.add(Mn,"pointSize",.01,.05).onChange(o=>{t.uniforms.uPointSize.value=o}),r.add(Mn,"axisLength",5,20).onChange(()=>{s()}),r.add(Mn,"spacing",.01,.2).onChange(()=>{s()}),r.addColor(Mn,"color").onChange(o=>{t.uniforms.uColor.value.setStyle(o)}),r.open();function s(){const o=[];for(let a=0;a<3;a++){const l=Mn.axisLength,c=-l/2,h=Math.floor(l/Mn.spacing);for(let u=0;u<h;u++){const d=[0,0,0],p=c+u*Mn.spacing;Math.abs(p)<=l/2&&(d[a]=p,o.push(...d))}}i.setAttribute("position",new wn(o,3)),i.attributes.position.needsUpdate=!0}return n.rotation.z=-.2,n.name="axis-stars",n}const Wf="/genshin-impact-moon/assets/alpha-C12mi5Lq.png",Xf="/genshin-impact-moon/assets/circle-A-vcdIRDRr.png",cS=new kn().load(Wf);function Ks(i=Xf,t="circlename",e={circleSize:3.5,rotationSpeed:.5,opacity:.5}){const r=new kn().load(i),s=new zn(1,1),o=new Oi({map:r,transparent:!0,side:Ze,alphaMap:cS,opacity:e.opacity,alphaTest:.1}),a=new Ae(s,o);a.scale.set(Number(e.circleSize),Number(e.circleSize),1),a.position.z=.01;const l=Pn("wheel-"+t);l.close();const c={...e};l.add(c,"circleSize",1,10).onChange(g=>{a.scale.set(Number(g),Number(g),1)}),l.add(c,"rotationSpeed",-.1,.1).name("旋转速度");let h=1,u=1;const d=.1;function p(){requestAnimationFrame(p),h+=(u-h)*d,a.rotation.z+=c.rotationSpeed*.01*h}return Cn.addEventListener("custom-solar-animate",()=>{u=10,setTimeout(()=>{u=1},1e3)}),Cn.addEventListener("custom-solar-reset",()=>{u=10,setTimeout(()=>{u=1},1e3)}),p(),a}const hS=new kn().load(Wf);let uS=1;function Yf(i=nh,t={circleSize:1,xPosition:0,yPosition:0,rotationSpeed:.05,opacity:.45}){const n=new kn().load(i),r=new zn(1,1),s=new Oi({map:n,transparent:!0,side:Ze,alphaMap:hS,alphaTest:.1,opacity:t.opacity}),o=new Ae(r,s);o.scale.set(Number(t.circleSize),Number(t.circleSize),1),o.position.x=t.xPosition,o.position.y=t.yPosition,o.position.z=.05;const a=Pn("wheel-ringitem-"+uS++);a.close();const l={...t};a.add(l,"circleSize",.1,5).onChange(h=>{o.scale.set(Number(h),Number(h),1)}),a.add(l,"xPosition",-10,10).onChange(h=>{o.position.x=h}),a.add(l,"yPosition",-10,10).onChange(h=>{o.position.y=h}),a.add(l,"rotationSpeed",-.1,.1).name("旋转速度"),a.add(l,"opacity",0,1).name("透明度").onChange(h=>{s.opacity=h});function c(){requestAnimationFrame(c),o.rotation.z+=l.rotationSpeed*.01}return c(),o}const $f="/genshin-impact-moon/assets/space-purple-dream-BLwY8ETQ.png",dS="/genshin-impact-moon/assets/circle-B-KYMhGYNA.png",fS="/genshin-impact-moon/assets/circle-C-DSOtZX9q.png",pS="/genshin-impact-moon/assets/circle-D-DzddQ4em.png",mS="/genshin-impact-moon/assets/circle-F-Cw-3j8_-.png",_S="/genshin-impact-moon/assets/circle-G-BEQ_PZmc.png",ee=new dn,gS=lS(),qf=Zs({innerRadius:.57,outerRadius:.9,opacity:.8}),Zf=Zs({innerRadius:1.12,outerRadius:1.35,opacity:.6}),Kf=Zs({innerRadius:1.5,outerRadius:2.3,starCounts:5e3,opacity:.5}),vS=Zs({innerRadius:2.2,outerRadius:3,starCounts:5e3,opacity:.6}),xS=Ks(Xf,"innerDecorativeCircle",{circleSize:2.4,rotationSpeed:.05,opacity:1}),yS=Ks(_S,"middleGalaxyCircle",{circleSize:3.9,rotationSpeed:.1,opacity:1}),MS=Ks(fS,"outerGalaxyCircleA",{circleSize:4.5,rotationSpeed:-.08,opacity:1}),SS=Ks(dS,"outerGalaxyCircleB",{circleSize:4.5,rotationSpeed:-.08,opacity:1}),jf=Ks(pS,"outerDecorativeCircle",{circleSize:5.5,rotationSpeed:-.07,opacity:.8}),ES=Yf(nh,{circleSize:.95,xPosition:1.45,yPosition:0,rotationSpeed:.05,opacity:1}),Jf=Yf(mS,{circleSize:1.25,xPosition:1.1,yPosition:-1.9,rotationSpeed:.05,opacity:.4}),bS=ki({brightness:2.8,opacity:.95,positionX:-.55,positionY:.1,positionZ:-.35,scale:5,rotationX:0,rotationY:-0,rotationZ:0,texture:$f},Pn("wheel-purpleDreamOverlay")),TS=ki({brightness:2,opacity:.9,positionX:-.55,positionY:.1,positionZ:-.5,scale:2.8,rotationX:.1,rotationY:-0,rotationZ:0,texture:$f},Pn("wheel-purpleDreamOverlay2"));ee.add(ES);ee.add(Jf);ee.add(qf);ee.add(Zf);ee.add(Kf);ee.add(vS);ee.add(xS);ee.add(yS);ee.add(MS);ee.add(SS);ee.add(jf);ee.add(gS);ee.add(bS);ee.add(TS);const fa=Pn("wheel-galaxy-rotation");ee.rotation.x=-1.1;ee.rotation.y=-.18;ee.rotation.z=-.18;fa.add(ee.rotation,"x",-Math.PI,Math.PI).name("X轴旋转");fa.add(ee.rotation,"y",-Math.PI,Math.PI).name("Y轴旋转");fa.add(ee.rotation,"z",-Math.PI,Math.PI).name("Z轴旋转");fa.open();const bn="sine.inOut";function AS(){ee.children.forEach(i=>{if(i.name==="axis-stars"){It.to(i.material.uniforms.opacity,{value:0,duration:1,ease:bn});return}if(i.name.includes("star-ring")){It.to(i.material.uniforms.opacity,{value:.05,duration:2,ease:bn});return}if(i.material){It.to(i.material,{opacity:.2,duration:2,ease:bn});return}}),It.to(ee.rotation,{x:0,y:0,z:0,duration:2,ease:bn}),It.to(ee.position,{x:0,y:0,z:-2,duration:2,ease:bn})}function wS(){const{x:i,y:t,z:e}=Ot.position;It.to(Ot.position,{x:i,y:t,z:e-2,duration:1,ease:bn,onComplete:()=>{It.to(Ot.position,{x:i,y:t,z:e,duration:1,ease:bn})}})}function CS(){AS(),wS()}function RS(){ee.children.forEach(i=>{if(i.name==="axis-stars"){It.to(i.material.uniforms.opacity,{value:1,duration:1,ease:bn});return}if(i.name.includes("star-ring")){It.to(i.material.uniforms.opacity,{value:i===qf?.8:i===Zf?.6:i===Kf?.5:.6,duration:2,ease:bn});return}if(i.material){It.to(i.material,{opacity:i===Jf?.4:i===jf?.8:1,duration:2,ease:bn});return}}),It.to(ee.rotation,{x:-1.1,y:-.18,z:-.18,duration:2,ease:bn}),It.to(ee.position,{x:0,y:0,z:0,duration:2,ease:bn})}let rl=!1;const Ko={item:ee,animate(){rl||(CS(),rl=!0)},reset(){RS(),rl=!1}};Cn.addEventListener("custom-solar-animate",()=>{Ko.animate()});Cn.addEventListener("custom-solar-reset",()=>{Ko.reset()});const PS={sceneWheelBackground:Fu,sceneWheelNodeKrai:Zo,sceneWheelSolar:Ko,show(){const i=[Ko.item,Zo.item],t=Ot.position.clone();It.timeline().to(Ot.position,{z:t.z-1,duration:3,ease:"none"}).to(Ot.position,{z:t.z,duration:10,ease:"none"}),Fu.show(),Xe.add(...i),i.forEach(n=>{n.scale.set(0,0,0),setTimeout(()=>{It.timeline().to(n.scale,{x:1,y:1,z:1,duration:5,ease:"elastic.out(0.1)"})},2500)})},hide(){}},Hs=document.createElement("div");Hs.className="scene-next";Hs.innerHTML=`<div style="margin-top: 1.25rem;font-family: 'cursive', sans-serif;font-size: 0.8rem;letter-spacing: 0.125rem;animation: breathe 2s infinite ease-in-out;">
↓ Next Scene
  </div>`;const Qf=[];Hs.addEventListener("click",()=>{Qf.forEach(i=>i())});const sl={show(){document.body.appendChild(Hs)},hide(){Hs.remove()},onClick(i){Qf.push(i)}};na.destroy(),Yx.dispose();Uf.show();Uf.onClick(()=>{const i=It.timeline(),t=Ot.position.clone();i.to(Ot.position,{z:t.z+1,duration:2,ease:"none"}).to(Ot.position,{z:t.z,duration:5,ease:"none"}),setTimeout(()=>{sl.show(),sl.onClick(()=>{sl.hide(),Iu.dispear(),setTimeout(()=>{PS.show()},2e3)})},1e4),Iu.show()});
