!function(t){var i={};function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=0)}([function(t,i,e){"use strict";var n=document.getElementById("canvas");n.width=window.innerWidth,n.height=window.innerHeight;var r=n.getContext("2d"),o=["#FF005D","#0085B6","#0BB4C1","#00D49D","#00D49D"],h={x:innerWidth/2,y:innerHeight/2};function s(t,i){return Math.floor(Math.random()*(i-t+1)+t)}addEventListener("mousemove",function(t){h.x=t.clientX,h.y=t.clientY}),addEventListener("resize",function(){n.width=window.innerWidth,n.height=window.innerHeight,u()}),addEventListener("click",function(){u()});function d(t,i,e,n,r,o){this.x=t,this.y=i,this.dx=e,this.dy=n,this.radius=r,this.color=o}d.prototype.draw=function(){r.beginPath(),r.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),r.fillStyle=this.color,r.fill(),r.stroke(),r.closePath()},d.prototype.update=function(){this.y+this.radius+this.dy>n.height?this.dy=.5*-this.dy:this.dy+=1,(this.x+this.radius+this.dx>n.height||this.x-this.radius<=0)&&(this.dx=-this.dx),this.x+=this.dx,this.y+=this.dy,this.draw()};var a=void 0,u=function(){a=[];for(var t=0;t<500;t++){var i=s(8,20),e=s(i,n.width-i),r=s(0,n.height-i),h=s(-2,2),u=s(-2,2),c=(f=o)[Math.floor(Math.random()*f.length)];a.push(new d(e,r,h,u,i,c))}var f;console.log(a)};u(),function t(){requestAnimationFrame(t),r.clearRect(0,0,n.width,n.height),a.forEach(function(t){return t.update()})}()}]);
//# sourceMappingURL=bundle.js.map