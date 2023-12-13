var e=document.querySelector(".logo"),n=document.querySelector("body"),c=new Promise(function(n,c){e.addEventListener("click",function(){n("Promise was resolved!")})}),o=new Promise(function(e,n){setTimeout(function(){n(Error("Promise was rejected!"))},3e3)});c.then(function(e){n.insertAdjacentHTML("beforeend",'<div class="message">'.concat(e,"</div>"))}).catch(function(e){// console.log(result);
}),o.then(function(e){// console.log(result);
}).catch(function(e){n.insertAdjacentHTML("beforeend",'<div class="message error-message">'.concat(e,"</div>"))});//# sourceMappingURL=index.c96a3c14.js.map

//# sourceMappingURL=index.c96a3c14.js.map
