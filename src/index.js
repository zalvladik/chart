import corylus from './data/corylus.js'
import alnus from './data/alnus.js'
import all from './data/all.js'

const numbers = []
let total = 0
numbers.map(number => total = total + number)
console.log(total)

const mainbody = document.querySelector('.container_for_pollen')

const buttonCotylus = document.querySelector('.button_pollen_corylus')
buttonCotylus.addEventListener('click', addContainerCorylus)

const buttonAlnus = document.querySelector('.button_pollen_Alnus')
buttonAlnus.addEventListener('click', addContainerAlnus)

const buttonAll = document.querySelector('.button_pollen_all')
buttonAll.addEventListener('click', addContainerAll)

function addContainerAll(){
    mainbody.innerHTML = `
    <div> 
    <div class="container_doughnut">
    <h2>Весь пилок за Лютий </h2>
      <canvas id="all_february"></canvas>
    </div>

    <div class="container_doughnut">
    <h2>Весь пилок за Березень</h2>
      <canvas id="all_march"></canvas>
    </div>

    <div class="container_doughnut">
    <h2>Весь пилок за Квітень</h2>
      <canvas id="all_april"></canvas>
    </div>
    </div>
  `

    const ctx7 = document.getElementById('all_february');
    const ctx8 = document.getElementById('all_march');
    const ctx9 = document.getElementById('all_april');    
    
    new Chart(ctx7, {
        type: 'doughnut',
        data: all.february,
        
    });
    
    new Chart(ctx8, {
        type: 'doughnut',
        data: all.march,
    });
    
      new Chart(ctx9, {
        type: 'doughnut',
        data: all.april,
    });

}

function addContainerCorylus(){
    mainbody.innerHTML = `
    <div> 
    <div class="container">
      <canvas id="corylus_february"></canvas>
    </div>

    <div class="container">
      <canvas id="corylus_march"></canvas>
    </div>

    <div class="container">
      <canvas id="corylus_april"></canvas>
    </div>
    </div>
  `

    const ctx = document.getElementById('corylus_february');
    const ctx2 = document.getElementById('corylus_march');
    const ctx3 = document.getElementById('corylus_april');    
    
    new Chart(ctx, {
        type: 'line',
        data: corylus.february,
        options: {
    scales: {
    y: {
      beginAtZero: true
    }
    }
    }
      }
      );
    
    new Chart(ctx2, {
        type: 'line',
        data: corylus.march,
        options: {
    scales: {
    y: {
      beginAtZero: true
    }
    }
    }
      }
      );
    
      new Chart(ctx3, {
        type: 'line',
        data: corylus.april,
        options: {
    scales: {
    y: {
      beginAtZero: true
    }
    }
    }
      }
      );

}

function addContainerAlnus(){
    mainbody.innerHTML = `
    <div> 
    <div class="container">
      <canvas id="alnus_february"></canvas>
    </div>

    <div class="container">
      <canvas id="alnus_march"></canvas>
    </div>

    <div class="container">
      <canvas id="alnus_april"></canvas>
    </div>
    </div>
  `

    const ctx4 = document.getElementById('alnus_february');
    const ctx5 = document.getElementById('alnus_march');
    const ctx6 = document.getElementById('alnus_april');    
    
    new Chart(ctx4, {
        type: 'line',
        data: alnus.february,
        options: {
    scales: {
    y: {
      beginAtZero: true
    }
    }
    }
      }
      );
    
    new Chart(ctx5, {
        type: 'line',
        data: alnus.march,
        options: {
    scales: {
    y: {
      beginAtZero: true
    }
    }
    }
      }
      );
    
      new Chart(ctx6, {
        type: 'line',
        data: alnus.april,
        options: {
    scales: {
    y: {
      beginAtZero: true
    }
    }
    }
      }
      );

}








        
