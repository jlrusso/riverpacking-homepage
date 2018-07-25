window.onbeforeunload = function(){
  window.scrollTo(0, 0);
}
const headerWrapper = document.getElementById("header-wrapper");
const toTopBtn = document.getElementById("to-top-btn");
toTopBtn.addEventListener("click", () =>{
  $("html, body").animate({
    scrollTop: $("html, body").offset().top
  });
});
window.addEventListener("scroll", function(){
  var scrollT = document.documentElement.scrollTop;
  signUpWrapper.style.right = "-400px";
  loginWrapper.style.right = "-400px";
  suArrowRight.style.display = "none";
  loginArrowRight.style.display = "none";
  if(scrollT > 155){
    headerWrapper.style.backgroundColor = "black";
    toTopBtn.style.right = "10px";
  } else {
    headerWrapper.style.backgroundColor = "transparent";
    toTopBtn.style.right = "-50px";
  }
});
$("#nav-products").click(function(){
  $("html, body").animate({
    scrollTop: $("#products-wrapper").offset().top - 60
  }, "slow");
});
$("#nav-qa").click(function(){
  $("html, body").animate({
    scrollTop: $("#quality-wrapper").offset().top - 50
  }, "slow");
});
$("#nav-about").click(function(){
  $("html, body").animate({
    scrollTop: $("#about-wrapper").offset().top - 70
  }, "slow");
});
$("#nav-contact").click(function(){
  $("html, body").animate({
    scrollTop: $("#contact-wrapper").offset().top - 55
  }, "slow");
});
$("#nav-location").click(() => {
  $("html, body").animate({
    scrollTop: $("#location-wrap").offset().top
  });
});
var learnBtn = document.getElementById("learn-btn");
learnBtn.addEventListener("click", function(){
  $("html, body").animate({
    scrollTop: $("#products-wrapper").offset().top - 50
  });
});


// Sign up and Login Sections
var signInBtn = document.getElementById("sign-in-btn"),
    loginWrapper = document.getElementById("login-wrapper"),
    joinBtn = document.getElementById("join-btn"),
    signUpWrapper = document.getElementById("sign-up-wrapper"),
    loginArrowRight = document.getElementById("login-arrow-right"),
    suArrowRight = document.getElementById("su-arrow-right");
joinBtn.addEventListener("click", function(){
  signUpWrapper.style.right = "0px";
  suArrowRight.style.display = "block";
})
suArrowRight.addEventListener("click", function(){
  signUpWrapper.style.right = "-400px";
  suArrowRight.style.display = "none";
})
signInBtn.addEventListener("click", function(){
  loginWrapper.style.right = "0px";
  loginArrowRight.style.display = "block";
})
loginArrowRight.addEventListener("click", function(){
  loginWrapper.style.right = "-400px";
  loginArrowRight.style.display = "none";
})
var orLoginBtn = document.getElementById("or-login-btn"),
    orSignupBtn = document.getElementById("or-signup-btn");
orLoginBtn.addEventListener("click", function(){
  signUpWrapper.style.right = "-400px";
  suArrowRight.style.display = "none";
  loginWrapper.style.right = "0px";
  loginArrowRight.style.display = "block";
});
orSignupBtn.addEventListener("click", function(){
  loginWrapper.style.right = "-400px";
  loginArrowRight.style.display = "none";
  signUpWrapper.style.right = "0px";
  suArrowRight.style.display = "block";
})


/* Start of Location/Map Section */
function initMap(){
  var coords = {lat: 38.126999, lng: -121.271420};
  var centerZoom = {
    center: coords,
    zoom: 14
  }
  var map = new google.maps.Map(document.getElementById("map"), centerZoom);
  var marker = new google.maps.Marker({
    position: coords,
    map: map,
  });
}


/* Start of Data Btn Variables and Assoc. Functions */
var viewDataBtns = document.getElementsByClassName("data-btn");
for(let i = 0; i < viewDataBtns.length; i++){
  viewDataBtns[i].addEventListener("click", () => {
    var ggParent = viewDataBtns[i].parentNode.parentNode.parentNode;
    ggParent.style.left = "-100%";
  });
};


/* Start of Left Arrow Vars and Assoc. Functions */
var leftArrows = document.getElementsByClassName("fa-arrow-left");
for(let i = 0; i < leftArrows.length; i++){
  leftArrows[i].addEventListener("click", () => {
    var gParent = leftArrows[i].parentNode.parentNode;
    gParent.style.left = "0";
  });
};

/* Start of Creating Bar or Donut Charts based on window width */
window.addEventListener("load", function(){
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if(windowWidth < 820){
    createCherryDonut();
    createGrapeDonut();
    createPearDonut();
  } else {
    createCherryBar();
    createGrapeBar();
    createPearBar();
  }
});


/* Start of Cherry Chart JS */
function createCherryDonut(){
  var cherryDonutChart = c3.generate({
    bindto: '#cherry-donut-chart',
    data: {
      columns: [
        ['Brooks', 150000],
        ['Royal Hazel', 50000],
        ['Tulare', 100000],
        ['Coral', 200000],
        ['Chelan', 10000],
        ['Bing', 400000],
        ['Lapin', 70000],
        ['Rainier', 30000]
      ],
      type: 'donut'
    },      
    donut: {
      title: "2018 Cherry Projections",
      label: {
        format: function (value) {return value;}
      }
    }
  });
}

function createCherryBar(){
  var outputChart = document.getElementById("cherry-chart").getContext('2d');
  var barChart = new Chart(outputChart, {
    type: 'bar',
    data: {
      labels: ["Brooks", "Royal Hazel", "Tulare", "Coral", "Chelan", "Bing", "Lapin", "Rainier"],
      datasets: [{
          label: 'Expected Output',
          data: [150000, 50000, 100000, 200000, 10000, 400000, 70000, 30000],
          backgroundColor: 'rgba(217, 136, 128, 0.2)',
          borderWidth: 1,
          borderColor: 'rgb(217, 136, 128)',
          hoverBorderWidth: 3
      }]
    },
    options: {
      title: {
        display: true,
        text: '2018 Cherry Projections',
        fontSize: 25
      },
      responsive: true,
      maintainAspectRation: false,
      legend: {
        labels: {
          fontColor: 'black'
        }
      },
      tooltips: {
        enabled: true,
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          },
          scaleLabel: {
            display: true,
            labelString: '# of Cartons'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Varities'
          }
        }]
      }
    }
  });
}



/* Start of Grapes Chart */
function createGrapeDonut(){
  var grapeDonutChart = c3.generate({
    bindto: '#grape-donut-chart',
    data: {
      columns: [
        ['Cinsaut', 100000],
        ['Gamay', 80000],
        ['Mencia', 210000],
        ['Mandilaria', 145000],
        ['Bobal', 160000],
        ['Ciliegiolo', 95000],
        ['Scheurebe', 45000],
        ['Aramon', 170000]
      ],
      type: 'donut'
    },      
    donut: {
      title: "2018 Grape Projections",
      label: {
        format: function (value) {return value;}
      }
    }
  })
}

function createGrapeBar(){
  var outputChart = document.getElementById("grape-chart").getContext('2d');
  var barChart = new Chart(outputChart, {
    type: 'bar',
    data: {
      labels: ["Cinsaut", "Gamay", "Mencia", "Mandilaria", "Bobal", "Ciliegiolo", "Scheurebe", "Aramon"],
      datasets: [{
          label: 'Expected Output',
          data: [100000, 80000, 210000, 145000, 160000, 95000, 45000, 170000],
          backgroundColor: 'rgba(46, 204, 113, 0.2)',
          borderWidth: 1,
          borderColor: 'rgb(46, 204, 113)',
          hoverBorderWidth: 3
      }]
    },
    options: {
      title: {
        display: true,
        text: '2018 Grape Projections',
        fontSize: 25
      },
      responsive: true,
      maintainAspectRation: false,
      legend: {
        labels: {
          fontColor: 'black'
        }
      },
      tooltips: {
        enabled: true,
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          },
          scaleLabel: {
            display: true,
            labelString: '# of Cartons'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Varities'
          }
        }]
      }
    }
  });
}



/* Start of Pear Chart */
function createPearDonut(){
  var pearDonutChart = c3.generate({
    bindto: '#pear-donut-chart',
    data: {
      columns: [
        ['Bartletts', 30000],
        ['Comice', 50000],
        ['Sunsprite', 100000],
        ['Seckel', 15000],
        ['French Butter', 60000],
        ['Anjou', 130000],
        ['Starkrimson', 200000],
        ['Asian', 180000]
      ],
      type: 'donut'
    },      
    donut: {
      title: "2018 Pear Projections",
      label: {
        format: function (value) {return value;}
      }
    }
  })
}

function createPearBar(){
  var outputChart = document.getElementById("pear-chart").getContext('2d');
  var barChart = new Chart(outputChart, {
    type: 'bar',
    data: {
      labels: ["Bartletts", "Comice", "Sunsprite", "Seckel", "French Butter", "Anjou", "Starkrimson", "Asian"],
      datasets: [{
          label: 'Expected Output',
          data: [30000, 50000, 100000, 15000, 60000, 130000, 200000, 180000],
          backgroundColor: 'rgba(241, 196, 15, 0.2)',
          borderWidth: 1,
          borderColor: 'rgb(241, 196, 15)',
          hoverBorderWidth: 3
      }]
    },
    options: {
      title: {
        display: true,
        text: '2018 Pear Projections',
        fontSize: 25
      },
      responsive: true,
      maintainAspectRation: false,
      legend: {
        labels: {
          fontColor: 'black'
        }
      },
      tooltips: {
        enabled: true,
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          },
          scaleLabel: {
            display: true,
            labelString: '# of Cartons'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Varities'
          }
        }]
      }
    }
  });
}

