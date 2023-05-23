import corylus from './data/corylus.js'
import alnus from './data/alnus.js'
import all from './data/all.js'

const numbers = [3448,810,2509,391,194,68]
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
      <div class='text_container'>
      <p class='text_item'>Corylus: 1699</p>
      <p class='text_item'>Alnus: 454</p>
      <p class='text_item'>Betula: 50</p>
      <p class='text_item'>Populus: 14</p>
      </div>
    </div>

    <div class="container_doughnut">
    <h2>Весь пилок за Березень</h2>
      <canvas id="all_march"></canvas>
      <div class='text_container'>
      <p class='text_item'>Corylus: 1124</p>
      <p class='text_item'>Alnus: 733</p>
      <p class='text_item'>Betula: 85</p>
      <p class='text_item'>Populus: 257</p>
      <p class='text_item'>Taxus: 168</p>
      <p class='text_item'>Carpinus: 37</p>
      </div>
    </div>

    <div class="container_doughnut">
    <h2>Весь пилок за Квітень</h2>
      <canvas id="all_april"></canvas>
      <div class='text_container'> 
      <p class='text_item'>Corylus: 3448</p>
      <p class='text_item'>Alnus: 810</p>
      <p class='text_item'>Betula: 2509</p>
      <p class='text_item'>Populus: 391</p>
      <p class='text_item'>Taxus: 194</p>
      <p class='text_item'>Carpinus: 68</p>
      </div>
    </div>
    </div>
  `

    const ctx7 = document.getElementById('all_february');
    const ctx8 = document.getElementById('all_march');
    const ctx9 = document.getElementById('all_april');    
    
    new Chart(ctx7, {
        type: 'doughnut',
        data: all.february,
        options: {
          plugins: {
            
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 25
                    }
                }
            }
        }

      }
  
        
    });
    
    new Chart(ctx8, {
        type: 'doughnut',
        data: all.march,
        options: {
          plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 25
                    }
                }
            }
        }

      }
    });
    
      new Chart(ctx9, {
        type: 'doughnut',
        data: all.april,
        options: {
          plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 25
                    }
                }
            }
        }

      }
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
          
            plugins: {
              legend: {
                  labels: {
                      // This more specific font property overrides the global property
                      font: {
                          size: 25
                      }
                  }
              }
          },
  
        
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
          plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 25
                    }
                }
            }
        },
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
          plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 25
                    }
                }
            }
        },
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
          plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 25
                    }
                }
            }
        },
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
          plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 25
                    }
                }
            }
        },
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
          plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 25
                    }
                }
            }
        },
    scales: {
    y: {
      beginAtZero: true
    }
    }
    }
      }
      );

}








        
