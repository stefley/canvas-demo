!function(t){var i={};function n(r){if(i[r])return i[r].exports;var e=i[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=i,n.d=function(t,i,r){n.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(i,"a",i),i},n.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},n.p="/",n(n.s="UwLk")}({UwLk:function(t,i,n){"use strict";n.r(i);i.default=class{constructor(t,i={}){this.ctx=t,this.radius=i.radius||5,this.count=i.count||6,this.duration=i.duration||8,this.margin=i.margin||10,this.color="#f48041",this.index=0,this.show=this.duration,this.point=this.computerPoint(),this.isLoading=!1}computerPoint(){let t=[],{ctx:i,count:n,radius:r,margin:e}=this,s=n*r*2+(n-1)*e,o=(i.canvas.width-s)/2;for(let i=0;i<n;i++)t[i]=o+r+(2*r+e)*i;return t}renderArc(t,i){let{ctx:n,radius:r,point:e}=this,s=e[t],o=n.canvas.height/2;n.save(),n.beginPath(),n.arc(s,o,r*i,0,2*Math.PI),n.fill(),n.restore()}startLoading(){let{index:t,count:i,margin:n,duration:r,show:e}=this;for(let n=0;n<i;n++)n===t?this.renderArc(n,.8+.6*r/e):this.renderArc(n,.8)}animate(){let{ctx:t,color:i,count:n,show:r}=this;this.duration<1&&(this.duration=r,this.index+=1),this.index>=n&&(this.index=0),this.duration-=1,t.clearRect(0,0,t.canvas.width,t.canvas.height),this.isLoading&&(t.save(),t.fillStyle=i,this.startLoading(),t.restore(),window.requestAnimationFrame(this.animate.bind(this)))}start(){this.isLoading=!0,this.animate()}stop(){let{ctx:t}=this;this.isLoading=!1}}}});
//# sourceMappingURL=loading.1529026192851.js.map