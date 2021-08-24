!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Game=t()}(this,(function(){"use strict";class e{SPACE=void 0;WALL=1;FOOTPRINT=2;goal=void 0;footPrint=new Array;constructor(e,t,i){this.w=e,this.h=t,this.data=new Array(this.w*this.h),null!=i&&i(this)}get(e,t){return this.data[e+t*this.w]}set(e,t,i){delete this.data[e+t*this.w],this.data[e+t*this.w]=i}getDir(e,t,i,s){this.goal;var o=i-e,r=s-t;return 0==o&&0==r?[]:o>=0&&r<0?o>=-r?["E","N","S","W"]:["N","E","W","S"]:o<0&&r<0?-o>=-r?["W","N","S","E"]:["N","W","E","S"]:o<0&&r>=0?-o>=r?["W","S","N","E"]:["S","W","E","N"]:o>=0&&r>=0?o>=r?["E","S","N","W"]:["S","E","W","N"]:void 0}reachable(e,t){return!(e<0||e>=this.w||t<0||t>=this.h)&&this.SPACE==this.get(e,t)}getPosByDir(e,t,i){var s;switch(i){case"N":s={x:e,y:t-1};break;case"E":s={x:e+1,y:t};break;case"W":s={x:e-1,y:t};break;case"S":s={x:e,y:t+1}}return s}next(){if(0==this.footPrint.length)return!1;var e=this.footPrint[this.footPrint.length-1];if(e.x==this.goal.x&&e.y==this.goal.y)return!1;var t=this.getDir(e.x,e.y,this.goal.x,this.goal.y);for(var i in t){var s=this.getPosByDir(e.x,e.y,t[i]);if(this.reachable(s.x,s.y))return this.footPrint.push(s),this.set(s.x,s.y,this.FOOTPRINT),!0}return this.footPrint.pop(),!0}}const t=36,i=36;function s(e,s,o,r){s.drawImage(e.img,e.x*t,e.y*i,t,i,Math.floor(o*t),Math.floor(r*i),t,i)}var o=new Array;o[0]=new Image,o[0].src="image/1.gif",o[1]=new Image,o[1].src="image/2.gif",o[2]=new Image,o[2].src="image/3.gif",o[3]=new Image,o[3].src="image/4.gif";const r={undefined:{img:o[0],x:1,y:11},Apple:{img:o[1],x:1,y:0},AppleRotten:[{img:o[0],x:1,y:0},{img:o[0],x:1,y:1}],Ball:{img:o[1],x:1,y:1},Bomb:{normal:{img:o[0],x:1,y:2},ticking:[{img:o[0],x:1,y:3},{img:o[0],x:1,y:4}],detonate:{img:o[1],x:0,y:12}},Crystal:[{img:o[0],x:1,y:5},{img:o[0],x:1,y:6},{img:o[0],x:1,y:7}],Demon:{N:[{img:o[0],x:0,y:7},{img:o[0],x:0,y:6},{img:o[0],x:0,y:8}],E:[{img:o[0],x:0,y:0},{img:o[0],x:0,y:1},{img:o[0],x:0,y:2}],W:[{img:o[0],x:0,y:9},{img:o[0],x:0,y:10},{img:o[0],x:0,y:11}],S:[{img:o[0],x:0,y:4},{img:o[0],x:0,y:3},{img:o[0],x:0,y:5}]},Destroyed:{img:o[1],x:0,y:11},Door:{img:o[1],x:1,y:3},Egg:{img:o[1],x:1,y:4},Flower:[{img:o[1],x:1,y:6},{img:o[1],x:1,y:5}],Key:{img:o[1],x:1,y:7},LaserGun:{img:o[1],x:1,y:8},Mushroom:[{img:o[1],x:1,y:9},{img:o[1],x:1,y:10}],Player:{N:[{img:o[1],x:2,y:11},{img:o[1],x:2,y:10},{img:o[1],x:2,y:12}],E:[{img:o[1],x:2,y:5},{img:o[1],x:2,y:6},{img:o[1],x:2,y:7}],W:[{img:o[1],x:3,y:12},{img:o[1],x:3,y:13},{img:o[1],x:3,y:14}],S:[{img:o[1],x:2,y:0},{img:o[1],x:2,y:8},{img:o[1],x:2,y:9}],sleepy:[{img:o[1],x:2,y:0},{img:o[1],x:2,y:1},{img:o[1],x:2,y:2},{img:o[1],x:2,y:3},{img:o[1],x:2,y:4}],poisoned:[{img:o[1],x:3,y:0},{img:o[1],x:3,y:1},{img:o[1],x:3,y:2},{img:o[1],x:3,y:3},{img:o[1],x:3,y:4},{img:o[1],x:3,y:5},{img:o[1],x:3,y:6},{img:o[1],x:3,y:7},{img:o[1],x:3,y:8},{img:o[1],x:3,y:9},{img:o[1],x:3,y:10},{img:o[1],x:3,y:11},{img:o[1],x:2,y:0}]},PlayerGirl:{N:[{img:o[3],x:0,y:11},{img:o[3],x:0,y:10},{img:o[3],x:0,y:12}],E:[{img:o[3],x:0,y:5},{img:o[3],x:0,y:6},{img:o[3],x:0,y:7}],W:[{img:o[3],x:1,y:12},{img:o[3],x:1,y:13},{img:o[3],x:1,y:14}],S:[{img:o[3],x:0,y:0},{img:o[3],x:0,y:8},{img:o[3],x:0,y:9}],sleepy:[{img:o[3],x:0,y:0},{img:o[3],x:0,y:1},{img:o[3],x:0,y:2},{img:o[3],x:0,y:3},{img:o[3],x:0,y:4}],poisoned:[{img:o[3],x:1,y:0},{img:o[3],x:1,y:1},{img:o[3],x:1,y:2},{img:o[3],x:1,y:3},{img:o[3],x:1,y:4},{img:o[3],x:1,y:5},{img:o[3],x:1,y:6},{img:o[3],x:1,y:7},{img:o[3],x:1,y:8},{img:o[3],x:1,y:9},{img:o[3],x:1,y:10},{img:o[3],x:1,y:11},{img:o[3],x:0,y:0}]},PFlower:{digest:[{img:o[0],x:2,y:0},{img:o[0],x:2,y:7},{img:o[0],x:2,y:6},{img:o[0],x:2,y:5},{img:o[0],x:2,y:4}],open:[{img:o[0],x:2,y:3},{img:o[0],x:2,y:2},{img:o[0],x:2,y:1},{img:o[0],x:2,y:0}],player:[{img:o[0],x:1,y:8},{img:o[0],x:1,y:9},{img:o[0],x:1,y:10}],grab:{N:{img:o[2],x:0,y:1},E:{img:o[2],x:0,y:3},W:{img:o[2],x:1,y:2},S:{img:o[2],x:1,y:0}}},Pill:{img:o[1],x:1,y:11},SpacerLaser:[{img:o[0],x:2,y:8},{img:o[0],x:2,y:9}],SpacerPFlower:{grabApple:{N:{img:o[2],x:0,y:0},E:{img:o[2],x:1,y:3},W:{img:o[2],x:0,y:2},S:{img:o[2],x:1,y:1}},grabPlayer:{N:{img:o[2],x:2,y:0},E:{img:o[2],x:3,y:3},W:{img:o[2],x:2,y:2},S:{img:o[2],x:3,y:1}}},Treasure:{img:o[1],x:0,y:10},Wall:[{img:o[1],x:0,y:0},{img:o[1],x:0,y:1},{img:o[1],x:0,y:2},{img:o[1],x:0,y:3},{img:o[1],x:0,y:4},{img:o[1],x:0,y:5},{img:o[1],x:0,y:6},{img:o[1],x:0,y:7},{img:o[1],x:0,y:8},{img:o[1],x:0,y:9},{img:o[1],x:1,y:2}]},a="N",l="E",h="W",n="S";function c(e,t){var i;switch(e){case a:i={L:h,R:l,B:n};break;case l:i={L:a,R:n,B:h};break;case h:i={L:n,R:a,B:l};break;case n:i={L:l,R:h,B:a};break;default:throw TypeError}if(null==i[t])throw TypeError;return i[t]}function y(e,t,i,s){if(t!=s||e!=i)return t==s?e<i?l:h:e==i?t<s?n:a:void 0}class d{stepMax=8;colPrev=void 0;rowPrev=void 0;step=0;constructor(e,t,i){this.col=e,this.row=t,this.dir=i}isMoving(){return this.step>0}move(e){if(this.isMoving())return!1;switch(this.dir=e,this.step=this.stepMax,this.colPrev=this.col,this.rowPrev=this.row,e){case a:this.row--;break;case l:this.col++;break;case h:this.col--;break;case n:this.row++}return!0}onTick(){var e=void 0;return this.isMoving()&&(this.step--,this.isMoving()||(e={colPrev:this.colPrev,rowPrev:this.rowPrev},this.colPrev=this.rowPrev=void 0)),e}onDraw(e,t){switch(this.dir){case a:s(e,t,this.col,this.row+this.step/this.stepMax);break;case l:s(e,t,this.col-this.step/this.stepMax,this.row);break;case h:s(e,t,this.col+this.step/this.stepMax,this.row);break;case n:s(e,t,this.col,this.row-this.step/this.stepMax)}}}const g=new AudioContext;let u={bitten:null,crystal:null,detonate:null,grab:null,lasershot:null,pick:null,poisoned:null,step:null};function p(e){if(!document.querySelector("input#enableSound").checked||!u[e])return;let t=g.createBufferSource();t.buffer=u[e],t.loop=!1,t.connect(g.destination),t.start()}function v(t,i){for(var s=void 0;i.length>0&&t.Moveable.col==i[0].col&&t.Moveable.row==i[0].row;)i.splice(0,1);if(i.length>0){var o=y(t.Moveable.col,t.Moveable.row,i[0].col,i[0].row);if(null!=o)s=o;else{var r=function(t,i,s,o){for(var r=new Array,a=new e(t.cols,t.rows,(function(e){var r,a;for(a=0;a<t.rows;a++)for(r=0;r<t.cols;r++){let i=t.getObject(r,a);if(null!=i)if(null!=i.blackArea)for(var l=i.blackArea(t,r,a),h=0;h<l.length;h++)e.set(l[h].col,l[h].row,e.WALL);else 1!=i.pick&&e.set(r,a,e.WALL)}e.goal={x:s,y:o},e.footPrint=[{x:i.Moveable.col,y:i.Moveable.row}]}));a.next(););var l=a.footPrint;if(0==a.footPrint.length)r=void 0;else for(var h in a.footPrint)r.push({col:l[h].x,row:l[h].y});return r}(t.stage,t,i[0].col,i[0].row);if(null!=r){for(var a=r.length-1;a>=0;a--)i.splice(0,0,r[a]);r=[],s=y(t.Moveable.col,t.Moveable.row,i[0].col,i[0].row)}}}return s}(async function(e){let t=[],i={};for(let i of e)!function(e){t.push({fileName:e,task:new Promise((async t=>{let i=await fetch(`./audio/${e}.wav`);if(!i.ok)return console.error(`Failed to load ${e}.wav: ${i.statusText}`),void t(null);g.decodeAudioData(await i.arrayBuffer(),t)}))})}(i);let s=await Promise.all(t.map((e=>e.task)));return t.forEach(((e,t)=>{i[e.fileName]=s[t]||null})),i})(Object.keys(u)).then((e=>{u=e}));class b{score=0;speed=100;paused=!1;dirKeyPressed=[void 0,void 0];nextDir=[void 0,void 0];playerRoute=[new Array,new Array];playerRouteInUse=0;constructor(e,t){this.stage=e,this.ctx=t,document.addEventListener("keydown",this.keydownHandler),document.addEventListener("keyup",this.keyupHandler),document.querySelector("canvas#stage").addEventListener("mousedown",this.mousedownHandler),setTimeout(this.timeoutFunc,this.speed)}onFinish(e){this._onFinish=e}callOnFinish(e){document.removeEventListener("keydown",this.keydownHandler),document.removeEventListener("keyup",this.keyupHandler),document.querySelector("canvas#stage").removeEventListener("mousedown",this.mousedownHandler),this._onFinish&&this._onFinish(e)}timeoutFunc=()=>{try{if(this.paused)document.querySelector("div#paused").style.display=null;else{var e=this.stage.player;for(var t in e)if(e[t]&&!e[t].Moveable.isMoving())if(null!=this.dirKeyPressed[t])e[t].move(this.dirKeyPressed[t]),this.playerRoute[t]=[];else if(null!=this.nextDir[t])e[t].Moveable.dir!=this.nextDir[t]&&e[t].move(this.nextDir[t]),this.playerRoute[t]=[],this.nextDir[t]=void 0;else{var i=v(e[t],this.playerRoute[t]);null!=i&&e[t].move(i)}this.stage.tick(this.ctx),this.stage.draw(this.ctx),document.querySelector("div#paused").style.display="none",document.querySelector("span#score").innerHTML=this.stage.score}this.stage.finished?(this.score=this.stage.score,this.stage.reset(),this.callOnFinish(this.score)):setTimeout(this.timeoutFunc,this.speed)}catch(e){console.error(e),setTimeout(this.timeoutFunc,this.speed)}};keydownHandler=e=>{if(!this.paused){let t=this.nextDir,i=this.dirKeyPressed;switch(e.keyCode){case 37:t[0]=i[0]=DIR_WEST;break;case 38:t[0]=i[0]=DIR_NORTH;break;case 39:t[0]=i[0]=DIR_EAST;break;case 40:t[0]=i[0]=DIR_SOUTH;break;case 65:t[1]=i[1]=DIR_WEST;break;case 87:t[1]=i[1]=DIR_NORTH;break;case 68:t[1]=i[1]=DIR_EAST;break;case 83:t[1]=i[1]=DIR_SOUTH}}switch(e.keyCode){case 48:this.playerRouteInUse=0;break;case 57:this.playerRouteInUse=1;break;case 80:this.paused=!this.paused;break;case 82:for(var t in this.nextDir)this.nextDir[t]=void 0;for(var t in this.dirKeyPressed)this.dirKeyPressed[t]=void 0;for(var t in this.playerRoute)this.playerRoute[t]=[];this.stage.reset(),this.paused=!1;break;case 32:this.speed=20}};keyupHandler=e=>{if(!this.paused)switch(e.keyCode){case 37:case 38:case 39:case 40:this.dirKeyPressed[0]=void 0;break;case 65:case 87:case 68:case 83:this.dirKeyPressed[1]=void 0}switch(e.keyCode){case 32:this.speed=100}};mousedownHandler=e=>{if(this.paused)return;let s=e.offsetX,o=e.offsetY,r=Math.floor(s/t),a=Math.floor(o/i);e.shiftKey?this.playerRoute[this.playerRouteInUse].push({col:r,row:a}):this.playerRoute[this.playerRouteInUse]=[{col:r,row:a}]}}class m{type="SpacerDemon";destroy=!0;leaving=!1;constructor(e){this.src=e}onDestroy(e,t,i){if(!this.leaving){var s=this.src;null!=s.Moveable.colPrev&&null!=s.Moveable.rowPrev&&e.setObject(s.Moveable.colPrev,s.Moveable.rowPrev,void 0),e.destroyDemon(s)}}onTick(e,t,i){this.leaving&&(this.destroy=!1)}}class w{type="SpacerLaser";timeout=3;constructor(e){this.dir=e}onTick(e,t,i){this.timeout--,this.timeout<=0&&e.setObject(t,i,void 0)}onDraw(e,t,i){switch(this.dir){case DIR_NORTH:case DIR_SOUTH:s(r[this.type][1],e,t,i);break;case DIR_EAST:case DIR_WEST:s(r[this.type][0],e,t,i)}}}class f{type="SpacerObject";constructor(e){this.src=e}}class x{type="SpacerPFlower";timeout=24;constructor(e,t){this.dir=e,this.typeGrabbed=t}onTick(e,t,i){this.timeout--,this.timeout<=0&&e.setObject(t,i,void 0)}onDraw(e,t,i){let o;switch(this.typeGrabbed){case"SpacerPlayer":o=r[this.type].grabPlayer[this.dir];break;case"Apple":case"AppleRotten":o=r[this.type].grabApple[this.dir]}s(o,e,t,i)}}class D{type="SpacerPlayer";eat=!0;destroy=!0;leaving=!1;constructor(e){this.src=e}onEat(e,t,i,s){this.leaving||(this.src.poisoned||p("bitten"),this.src.poisoned=!0)}onDestroy(e,t,i){var s=this.src;null!=s.Moveable.colPrev&&null!=s.Moveable.rowPrev&&e.setObject(s.Moveable.colPrev,s.Moveable.rowPrev,void 0),e.destroyPlayer(s)}onTick(e,t,i){this.leaving?this.destroy=this.eat=!1:this.destroy=this.eat=!0}}class k{type="SpacerPlayerPoisoned";timeout=30;constructor(e){this.player=e,this.dir=e.Moveable.dir}onTick(e,t,i){0!=this.timeout?this.timeout--:e.destroyObject(t,i)}onDraw(e,t,i){var o=this.player.girl?"PlayerGirl":"Player";this.timeout>20?s(r[o][this.dir][0],e,t,i):s(r[o].poisoned[this.timeout>12?12:this.timeout],e,t,i),20==this.timeout&&p("poisoned")}}function M(e){var t=e.Moveable.dir;return[t,c(t,DIR_LEFT),c(t,DIR_RIGHT),c(t,DIR_BACK)]}function S(e,t){document.querySelector("canvas#stage").style.display="none",document.querySelector("div#footer").style.display="none",document.querySelector("div#gamefinished").style.display="block",document.querySelector("div#gamefinished h1#totalscore").innerHTML=t;try{let t=localStorage.getItem("puzzleProcess");t&&(t=JSON.parse(t),delete t[e+"_Level"],delete t[e+"_Score"],localStorage.setItem("puzzleProcess",JSON.stringify(t)))}catch(e){console.error(e)}}return Object.assign(window,{Stage:class{name="";cols=17;rows=12;data=new Array(204);player=new Array;demon=new Array;posDestroyed=new Array;finished=!1;score=0;constructor(e){null!=e&&(this.initfunc=e,e(this))}getObject(e,t){return this.data[t*this.cols+e]}setObject(e,t,i){delete this.data[t*this.cols+e],this.data[t*this.cols+e]=i}destroyObject(e,t){var i=this.getObject(e,t);null!=i&&(null!=i.onDestroy&&i.onDestroy(this,e,t),this.posDestroyed.push([e,t]),this.setObject(e,t,void 0))}destroyPlayer(e){this.player[this.player.indexOf(e)]=null,this.player[this.player.indexOf(e)]=void 0,e=null}destroyDemon(e){this.demon[this.demon.indexOf(e)]=null,this.demon[this.demon.indexOf(e)]=void 0,e=null}getNeighbour(e,t,i){switch(i){case DIR_NORTH:return t>0?{col:e,row:t-1}:void 0;case DIR_EAST:return e<this.cols-1?{col:e+1,row:t}:void 0;case DIR_WEST:return e>0?{col:e-1,row:t}:void 0;case DIR_SOUTH:return t<this.rows-1?{col:e,row:t+1}:void 0;default:var s=new Array;return t>0&&s.push({col:e,row:t-1,dir:DIR_NORTH}),e<this.cols-1&&s.push({col:e+1,row:t,dir:DIR_EAST}),e>0&&s.push({col:e-1,row:t,dir:DIR_WEST}),t<this.rows-1&&s.push({col:e,row:t+1,dir:DIR_SOUTH}),s}}tick(e){for(var t=this.player.length,i=0;i<t;i++)null!=this.player[i]&&this.player[i].onTick(this);for(t=this.demon.length,i=0;i<t;i++)null!=this.demon[i]&&this.demon[i].onTick(this);for(var s=0;s<this.rows;s++)for(var o=0;o<this.cols;o++){let e=this.data[s*this.cols+o];null!=e&&null!=e.onTick&&e.onTick(this,o,s)}}draw(e){for(var t=0;t<this.rows;t++)for(var i=0;i<this.cols;i++){let o=this.data[t*this.cols+i];null==o||null==o.onDraw?s(r[void 0],e,i,t):o.onDraw(e,i,t)}for(var o=this.posDestroyed.length,a=0;a<o;a++)i=this.posDestroyed[a][0],t=this.posDestroyed[a][1],s(r.Destroyed,e,i,t);delete this.posDestoryed,this.posDestroyed=[];for(o=this.demon.length,a=0;a<o;a++)null!=this.demon[a]&&this.demon[a].onDraw(e);for(o=this.player.length,a=0;a<o;a++)null!=this.player[a]&&this.player[a].onDraw(e)}reset(){delete this.data,delete this.player,delete this.demon,delete this.posDestoryed,this.data=new Array(this.rows*this.cols),this.player=new Array,this.demon=new Array,this.posDestroyed=new Array,this.finished=!1,this.score=0,null!=this.initfunc&&this.initfunc(this)}},Player:class{type="Player";finished=!1;poisoned=!1;objectPushing=void 0;invisible=0;sleepy=0;constructor(e,t,i,s){this.Moveable=new d(t,i,DIR_SOUTH),this.girl=s,this.stage=e,this.stage.setObject(t,i,new D(this))}onTick(e){var t=this.Moveable.onTick();if(null!=t&&(this.stage.setObject(t.colPrev,t.rowPrev,void 0),null!=this.objectPushing)){var i=this.stage.getNeighbour(this.Moveable.col,this.Moveable.row,this.Moveable.dir);this.stage.setObject(i.col,i.row,this.objectPushing),this.objectPushing=void 0}if(null!=t||!this.Moveable.isMoving()){if(1==this.poisoned)return this.stage.setObject(this.Moveable.col,this.Moveable.row,new k(this)),void this.stage.destroyPlayer(this);this.finished&&(this.stage.finished=!0)}null!=this.objectPushing&&null!=this.objectPushing.onTick&&this.objectPushing.onTick(this.stage,-1,-1),this.invisible>0&&this.invisible--}move(e){if(this.Moveable.step>0)return!1;this.Moveable.dir=e;var t=this.stage.getNeighbour(this.Moveable.col,this.Moveable.row,e);if(null==t)return!1;var i=this.stage.getObject(t.col,t.row);if(null!=i)if(1==i.pick)null!=i.onPick&&i.onPick(this),this.stage.destroyObject(t.col,t.row),p("pick");else{if(1!=i.push)return!1;{let s=this.stage.getNeighbour(t.col,t.row,e);if(null==s||null!=this.stage.getObject(s.col,s.row))return!1;this.objectPushing=i,this.stage.setObject(s.col,s.row,new f(i))}}return this.Moveable.move(e),this.stage.setObject(this.Moveable.col,this.Moveable.row,new D(this)),this.stage.getObject(this.Moveable.colPrev,this.Moveable.rowPrev).leaving=!0,!0}onDrawMoving(e){var t=this.girl?this.type+"Girl":this.type,i=this.invisible>0?r[void 0]:r[t][this.Moveable.dir][[0,1,0,2,0,1,0,2][this.Moveable.step]];if(this.Moveable.onDraw(i,e),this.Moveable.step%2&&p("step"),null!=this.objectPushing){var s,o;switch(this.Moveable.dir){case DIR_NORTH:s=this.Moveable.col,o=this.Moveable.row-1+this.Moveable.step/this.Moveable.stepMax;break;case DIR_EAST:s=this.Moveable.col+1-this.Moveable.step/this.Moveable.stepMax,o=this.Moveable.row;break;case DIR_WEST:s=this.Moveable.col-1+this.Moveable.step/this.Moveable.stepMax,o=this.Moveable.row;break;case DIR_SOUTH:s=this.Moveable.col,o=this.Moveable.row+1-this.Moveable.step/this.Moveable.stepMax}this.objectPushing.onDraw(e,s,o)}}onDrawSleepy(e){if(this.invisible>0)this.Moveable.onDraw(r[void 0],e);else{var t,i=this.girl?this.type+"Girl":this.type;this.sleepy<50?this.onDrawMoving(e):(t=this.sleepy<100?r[i].sleepy[0]:this.sleepy<300?r[i].sleepy[this.sleepy%50?0:1]:this.sleepy<400?r[i].sleepy[this.sleepy%50?2:3]:r[i].sleepy[4],this.Moveable.onDraw(t,e))}}onDraw(e){this.Moveable.isMoving()?(this.sleepy=0,this.onDrawMoving(e)):(this.sleepy++,this.onDrawSleepy(e))}},Demon:class{type="Demon";turning=M;constructor(e,t,i,s){this.Moveable=new d(t,i,s),this.stage=e,this.stage.setObject(t,i,new m(this)),this.dir=s}move(e){return!(this.Moveable.step>0)&&(this.Moveable.dir=e,this.Moveable.move(e),this.stage.setObject(this.Moveable.col,this.Moveable.row,new m(this)),this.stage.getObject(this.Moveable.colPrev,this.Moveable.rowPrev).leaving=!0,!0)}onTick(e){if(this.Moveable.isMoving()){var t=this.Moveable.onTick();return this.dir=this.Moveable.dir,void(null!=t&&this.stage.setObject(t.colPrev,t.rowPrev,void 0))}let i=this.turning(this),s=!0;for(let t of i){let i=e.getNeighbour(this.Moveable.col,this.Moveable.row,t);null!=i&&(e.getObject(i.col,i.row)||(s=!1))}if(s){let t=e.getNeighbour(this.Moveable.col,this.Moveable.row,this.dir);if(!t)return;let i=e.getObject(t.col,t.row);i&&!/Spacer.*/.test(i.type)&&i.eat&&(i.onEat&&i.onEat(this,e,t.col,t.row),e.destroyObject(t.col,t.row),this.move(this.dir)&&this.Moveable.step--)}else for(var o in i){this.dir=i[o];var r=e.getNeighbour(this.Moveable.col,this.Moveable.row,i[o]);if(null!=r){var a=e.getObject(r.col,r.row);if(null!=a){if(/Spacer.*/.test(a.type)&&(1==a.eat&&null!=a.onEat&&a.onEat(this,e,r.col,r.row),"SpacerDemon"!=a.type))break;if(1!=a.eat)continue;null!=a.onEat&&a.onEat(this,e,r.col,r.row),e.destroyObject(r.col,r.row)}if(this.move(i[o])){this.Moveable.step--;break}}}}onDraw(e){var t=r[this.type][this.dir][[0,1,0,2,0,1,0,2,0][this.Moveable.step]];this.Moveable.onDraw(t,e)}},Apple:class{type="Apple";push=!0;eat=!0;destroy=!0;onTick(e,t,i){this.leaving&&(this.destroy=!1)}onDraw(e,t,i){s(r[this.type],e,t,i)}},AppleRotten:class{type="AppleRotten";push=!0;eat=!0;destroy=!0;timer=1;img_index=0;onDraw(e,t,i){this.timer++,0==this.timer%2&&(this.img_index=0==this.img_index?1:0),s(r[this.type][this.img_index],e,t,i)}},Ball:class{type="Ball";push=!0;onDraw(e,t,i){s(r[this.type],e,t,i)}},Bomb:class{type="Bomb";push=!0;timeout=-1;detonated=!1;doActivate(){this.timeout<0&&(this.timeout=160)}doDetonate(e,t,i){this.push=void 0,this.detonated=!0;for(var s=e.getNeighbour(t,i),o=s.length,r=0;r<o;r++){var a=s[r].col,l=s[r].row,h=e.getObject(a,l);null!=h&&(h.destroy?e.destroyObject(a,l):h.type==this.type&&h.doActivate())}s.splice(0,s.length),p("detonate")}onTick(e,t,i){var s=!1;(t<0||i<0)&&(s=!0),s&&this.timeout<0?this.doActivate():this.timeout>0&&this.timeout--,0==this.timeout&&(this.detonated?e.setObject(t,i,void 0):s||this.doDetonate(e,t,i))}onDraw(e,t,i){this.timeout<0?s(r[this.type].normal,e,t,i):this.detonated?s(r[this.type].detonate,e,t,i):s(r[this.type].ticking[this.timeout%2],e,t,i)}},Crystal:class{type="Crystal";push=!0;triggered=-1;TRIGGER=35;trigger(){-1==this.triggered&&(this.triggered=this.TRIGGER,this.push=void 0)}onTick(e,t,i){if(0==this.triggered)return e.destroyObject(t,i),e.score+=200,void p("crystal");if(this.triggered>0)this.triggered--;else{for(var s=e.getNeighbour(t,i),o=s.length,r=0;r<o;r++){var a=e.getObject(s[r].col,s[r].row);if(null!=a&&a.type==this.type){-1!=a.triggered&&a.triggered!=this.TRIGGER||this.trigger();break}}s.splice(0,s.length)}}onDraw(e,t,i){this.triggered>0?s(r[this.type][this.triggered%3],e,t,i):s(r[this.type][0],e,t,i)}},Door:class{type="Door";destroy=!0;onPick(e){for(var t=e.stage.data.length,i=0;i<t;i++){var s=e.stage.data[i];if(null!=s)switch(s.type){case"Key":s.pick=!0;break;case"Door":s.pick=void 0}}}onDraw(e,t,i){s(r[this.type],e,t,i)}},Egg:class{type="Egg";pick=!0;eat=!0;destroy=!0;onPick(e){for(var t=e.stage.data.length,i=0;i<t;i++){var s=e.stage.data[i];null!=s&&"Flower"==s.type&&(s.poisonous=!s.poisonous)}e.stage.score+=100}onDraw(e,t,i){s(r[this.type],e,t,i)}blackArea(e,t,i){return[{col:t,row:i}]}},Flower:class{type="Flower";pick=!0;eat=!0;destroy=!0;constructor(e){this.poisonous=e}onPick(e){this.poisonous?e.poisoned=!0:e.stage.score+=50}onDraw(e,t,i){this.poisonous?s(r[this.type][1],e,t,i):s(r[this.type][0],e,t,i)}blackArea(e,t,i){return this.poisonous?[{col:t,row:i}]:[]}},Key:class{type="Key";pick=!0;destroy=!0;onPick(e){for(var t=e.stage.data.length,i=0;i<t;i++){var s=e.stage.data[i];if(null!=s)switch(s.type){case"Key":s.pick=void 0;break;case"Door":s.pick=!0}}}onDraw(e,t,i){s(r[this.type],e,t,i)}},LaserGun:class{type="LaserGun";destroy=!0;detectedPos=new Array;blackAreaDetected=new Array;doDetect(e,t,i){let s=new Array;this.blackAreaDetected.splice(0,this.blackAreaDetected.length);for(var o=i-1;o>=0;o--){var r=e.getObject(t,o);if(this.blackAreaDetected.push({col:t,row:o}),null!=r){s.push({col:t,row:o,dir:DIR_NORTH});break}}for(var a=t+1;a<e.cols;a++){r=e.getObject(a,i);if(this.blackAreaDetected.push({col:a,row:i}),null!=r){s.push({col:a,row:i,dir:DIR_EAST});break}}for(a=t-1;a>=0;a--){r=e.getObject(a,i);if(this.blackAreaDetected.push({col:a,row:i}),null!=r){s.push({col:a,row:i,dir:DIR_WEST});break}}for(o=i+1;o<e.rows;o++){r=e.getObject(t,o);if(this.blackAreaDetected.push({col:t,row:o}),null!=r){s.push({col:t,row:o,dir:DIR_SOUTH});break}}return s.length>0?s:void 0}setupLaser(e,t,i,s){switch(s.dir){case DIR_NORTH:for(var o=i-1;o>s.row;o--)e.setObject(t,o,new w(DIR_NORTH));break;case DIR_EAST:for(var r=t+1;r<s.col;r++)e.setObject(r,i,new w(DIR_EAST));break;case DIR_WEST:for(r=t-1;r>s.col;r--)e.setObject(r,i,new w(DIR_WEST));break;case DIR_SOUTH:for(o=i+1;o<s.row;o++)e.setObject(t,o,new w(DIR_SOUTH))}p("lasershot")}onTick(e,t,i){if(this.detectedPos=this.doDetect(e,t,i),null!=this.detectedPos)for(var s=0;s<this.detectedPos.length;s++){var o=this.detectedPos[s],r=e.getObject(o.col,o.row);null!=r&&"SpacerPlayer"==r.type&&r.src.invisible<=0&&!r.leaving&&!r.src.Moveable.isMoving()&&(e.setObject(o.col,o.row,new k(r.src)),e.destroyPlayer(r.src),this.setupLaser(e,t,i,o))}this.detectedPos.splice(0,this.detectedPos.length)}onDraw(e,t,i){s(r[this.type],e,t,i)}blackArea(e,t,i){return this.blackAreaDetected}},Mushroom:class{type="Mushroom";pick=!0;eat=!0;destroy=!0;constructor(e){this.poisonous=e}onPick(e){this.poisonous?e.poisoned=!0:(e.stage.score+=500,e.finished=!0)}onDraw(e,t,i){this.poisonous?s(r[this.type][1],e,t,i):s(r[this.type][0],e,t,i)}blackArea(e,t,i){return this.poisonous?[{col:t,row:i}]:[]}},PFlower:class{type="PFlower";eat=!0;destroy=!0;open=0;digest=0;grab={type:void 0,dir:void 0,timeout:0,spacerCol:void 0,spacerRow:void 0};constructor(e){this.status=e?"O":"C"}doOpen(){"C"==this.status&&(this.open=r[this.type].open.length,this.status="o")}doDigest(e,t,i){switch(this.status="D",e.setObject(this.grab.spacerCol,this.grab.spacerRow,void 0),this.grab.type){case"Player":this.digest=-1;break;case"Apple":this.digest=160;break;case"AppleRotten":this.digest=1600}}doDetect(e,t,i,s){for(var o=void 0,r=e.getNeighbour(t,i),a=r.length,l=0;l<a;l++){var h=e.getObject(r[l].col,r[l].row);if(null!=h&&h.type==s){if("SpacerPlayer"==s){h.src.invisible<=0&&(o={type:h.type,object:h,col:r[l].col,row:r[l].row,dir:r[l].dir})}else o={type:h.type,object:h,col:r[l].col,row:r[l].row,dir:r[l].dir};break}}return r.splice(0,r.length),o}doGrab(e,t,i,s){this.status="G",e.setObject(s.col,s.row,new x(s.dir,s.type)),this.grab.type=s.type,this.grab.dir=s.dir,this.grab.spacerCol=s.col,this.grab.spacerRow=s.row,this.grab.timeout=4,p("grab")}onTick(e,t,i){switch(this.status){case"C":null==(s=this.doDetect(e,t,i,"SpacerPlayer"))||s.object.src.Moveable.isMoving()||this.doOpen();break;case"o":this.open--,this.open<=0&&(this.status="O");break;case"O":var s=void 0;do{if(null!=(s=this.doDetect(e,t,i,"SpacerPlayer"))&&!s.object.leaving&&!s.object.src.Moveable.isMoving()){e.destroyPlayer(s.object.src);break}if(null!=(s=this.doDetect(e,t,i,"Apple")))break;if(null!=(s=this.doDetect(e,t,i,"AppleRotten")))break;s=void 0}while(0);null!=s&&this.doGrab(e,t,i,s);break;case"G":this.grab.timeout--,0==this.grab.timeout&&this.doDigest(e,t,i);break;case"D":this.digest>0&&(this.digest--,0==this.digest&&(this.status="C"))}}onDraw(e,t,i){var o,a,l;switch(this.status){case"C":o=r[this.type].digest[0];break;case"o":a=r[this.type].open.length,l=(l=this.open>=0?this.open:0)<a?l:a-1,o=r[this.type].open[l];break;case"O":o=r[this.type].open[0];break;case"G":o=r[this.type].grab[this.grab.dir];break;case"D":switch(a=r[this.type].digest.length,this.grab.type){case"Apple":l=(l=Math.ceil(this.digest/40))<a?l:a-1,o=r[this.type].digest[l];break;case"AppleRotten":l=(l=Math.ceil(this.digest/400))<a?l:a-1,o=r[this.type].digest[l];break;default:l=Math.floor(3*Math.random()),o=r[this.type].player[l]}}s(o,e,t,i)}blackArea(e,t,i){for(var s=new Array,o=e.getNeighbour(t,i,void 0),r=0;r<o.length;r++)s.push({col:o[r].col,row:o[r].row});return s.push({col:t,row:i}),o.splice(0,o.length),s}},Pill:class{type="Pill";pick=!0;eat=!0;destroy=!0;onPick(e){e.invisible+=200}onDraw(e,t,i){s(r[this.type],e,t,i)}},Treasure:class{type="Treasure";pick=!0;destroy=!0;onPick(e){e.stage.score+=1e3}onDraw(e,t,i){s(r[this.type],e,t,i)}},Wall:class{type="Wall";constructor(e){this.style=e}onDraw(e,t,i){s(r[this.type][this.style],e,t,i)}},IMAGE_W:t,IMAGE_H:i,DIR_NORTH:a,DIR_EAST:l,DIR_WEST:h,DIR_SOUTH:n,DIR_LEFT:"L",DIR_RIGHT:"R",DIR_BACK:"B",leftFirst:M,rightFirst:function(e){var t=e.Moveable.dir;return[t,c(t,DIR_RIGHT),c(t,DIR_LEFT),c(t,DIR_BACK)]},randomSelection:function(e){var t=e.Moveable.dir;return Math.random()>=.5?[t,c(t,DIR_LEFT),c(t,DIR_RIGHT),c(t,DIR_BACK)]:[t,c(t,DIR_RIGHT),c(t,DIR_LEFT),c(t,DIR_BACK)]},randomTurn:function(e){for(var t=[DIR_NORTH,DIR_EAST,DIR_WEST,DIR_SOUTH],i=1;i<t.length;i++){var s=Math.floor(Math.random()*(i+1)),o=t[s];t[s]=t[i],t[i]=o}return t}}),function(e,t){var i=document.querySelector("canvas#stage").getContext("2d"),s=0,o=0;document.querySelector("input#enableSound").checked=!1,document.querySelector("input#enableSound").addEventListener("change",(e=>{let t=localStorage.getItem("gameSetting");t=t?JSON.parse(t):{},t.soundOn=e.target.checked,localStorage.setItem("gameSetting",JSON.stringify(t)),e.target.blur()}));try{let e=localStorage.getItem("gameSetting");e&&(e=JSON.parse(e),document.querySelector("input#enableSound").checked=e.soundOn)}catch(e){console.error(e)}try{let t=localStorage.getItem("puzzleProcess");t&&(t=JSON.parse(t),s=t[e+"_Score"]||void 0,o=t[e+"_Level"]||void 0)}catch(e){console.error(e)}if(null==s||isNaN(s)||(s=Number(s)),(o=null==o||isNaN(o)?s=0:Number(o))>=t.length)return void S(e,s);var r=new b(t[o],i);document.querySelector("span#level").innerHTML=o+1;const a=function(l){s+=l,o++;try{let t=localStorage.getItem("puzzleProcess");t=t?JSON.parse(t):{},t[e+"_Level"]=o,t[e+"_Score"]=s,localStorage.setItem("puzzleProcess",JSON.stringify(t))}catch(e){console.error(e)}o<t.length?((r=new b(t[o],i)).onFinish(a),document.querySelector("span#level").innerHTML=o+1):(r=void 0,S(e,s))};r.onFinish(a)}}));//# sourceMappingURL=game.js.map
