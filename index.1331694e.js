var a={february:{labels:[1,2,3,4,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,27,28],datasets:[{label:"Corylus - ЛЮТИЙ",data:[6,4,0,19,7,3,5,23,104,57,18,2,10,62,41,315,111,264,187,193,107,142,9,10],borderWidth:2}]},march:{labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,23,24,25,26,27,28,29,30,31],datasets:[{label:"Corylus - БЕРЕЗЕНЬ",data:[30,4,54,304,25,8,10,54,135,213,57,49,19,48,7,5,11,8,21,5,2,13,5,5,7,4,6,7,3,5],borderWidth:2}]},april:{labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,20,21,22,23,24,25,26,27,28,29,30],datasets:[{label:"Corylus - КВІТЕНЬ",data:[11,13,11,3,4,3,3,5,11,3,16,31,70,124,25,24,255,457,676,657,492,162,133,92,89,6,40,32],borderWidth:2}]}};var n={february:{labels:[1,2,3,4,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,27,28],datasets:[{label:"Alnus - ЛЮТИЙ",data:[8,0,0,7,1,1,2,0,2,4,3,0,0,1,1,50,14,91,74,33,51,95,1,15],borderWidth:2}]},march:{labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,23,24,25,26,27,28,29,30,31],datasets:[{label:"Alnus - БЕРЕЗЕНЬ",data:[13,25,24,156,14,4,15,41,111,64,51,22,25,24,18,7,40,9,5,1,1,7,2,2,21,2,14,4,7,4],borderWidth:2}]},april:{labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,20,21,22,23,24,25,26,27,28,29,30],datasets:[{label:"Alnus - КВІТЕНЬ",data:[7,9,9,4,6,3,5,3,17,51,60,25,36,153,24,79,137,49,32,29,23,19,13,6,5,2,3,1],borderWidth:2}]}};var e={february:{labels:["Corylus","Alnus","Betula","Populus"],datasets:[{data:[1699,454,50,14],borderWidth:2}]},march:{labels:["Corylus","Alnus","Betula","Populus","Taxus","Carpinus"],datasets:[{data:[1124,733,85,257,168,37],borderWidth:2}]},april:{labels:["Corylus","Alnus","Betula","Populus","Taxus","Carpinus"],datasets:[{data:[3448,810,2509,391,194,68],borderWidth:2}]}};let t=0;[].map((a=>t+=a)),console.log(t);const l=document.querySelector(".container_for_pollen");document.querySelector(".button_pollen_corylus").addEventListener("click",(function(){l.innerHTML='\n    <div> \n    <div class="container">\n      <canvas id="corylus_february"></canvas>\n    </div>\n\n    <div class="container">\n      <canvas id="corylus_march"></canvas>\n    </div>\n\n    <div class="container">\n      <canvas id="corylus_april"></canvas>\n    </div>\n    </div>\n  ';const n=document.getElementById("corylus_february"),e=document.getElementById("corylus_march"),t=document.getElementById("corylus_april");new Chart(n,{type:"line",data:a.february,options:{scales:{y:{beginAtZero:!0}}}}),new Chart(e,{type:"line",data:a.march,options:{scales:{y:{beginAtZero:!0}}}}),new Chart(t,{type:"line",data:a.april,options:{scales:{y:{beginAtZero:!0}}}})}));document.querySelector(".button_pollen_Alnus").addEventListener("click",(function(){l.innerHTML='\n    <div> \n    <div class="container">\n      <canvas id="alnus_february"></canvas>\n    </div>\n\n    <div class="container">\n      <canvas id="alnus_march"></canvas>\n    </div>\n\n    <div class="container">\n      <canvas id="alnus_april"></canvas>\n    </div>\n    </div>\n  ';const a=document.getElementById("alnus_february"),e=document.getElementById("alnus_march"),t=document.getElementById("alnus_april");new Chart(a,{type:"line",data:n.february,options:{scales:{y:{beginAtZero:!0}}}}),new Chart(e,{type:"line",data:n.march,options:{scales:{y:{beginAtZero:!0}}}}),new Chart(t,{type:"line",data:n.april,options:{scales:{y:{beginAtZero:!0}}}})}));document.querySelector(".button_pollen_all").addEventListener("click",(function(){l.innerHTML='\n    <div> \n    <div class="container_doughnut">\n    <h2>Весь пилок за Лютий </h2>\n      <canvas id="all_february"></canvas>\n    </div>\n\n    <div class="container_doughnut">\n    <h2>Весь пилок за Березень</h2>\n      <canvas id="all_march"></canvas>\n    </div>\n\n    <div class="container_doughnut">\n    <h2>Весь пилок за Квітень</h2>\n      <canvas id="all_april"></canvas>\n    </div>\n    </div>\n  ';const a=document.getElementById("all_february"),n=document.getElementById("all_march"),t=document.getElementById("all_april");new Chart(a,{type:"doughnut",data:e.february}),new Chart(n,{type:"doughnut",data:e.march}),new Chart(t,{type:"doughnut",data:e.april})}));
//# sourceMappingURL=index.1331694e.js.map
