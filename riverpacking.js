window.onbeforeunload = function(){
  window.scrollTo(0, 0);
}
const headerWrapper = document.getElementById("header-wrapper");
window.addEventListener("scroll", function(){
  var scrollT = document.documentElement.scrollTop;
  signUpWrapper.style.right = "-400px";
  loginWrapper.style.right = "-400px";
  suArrowRight.style.display = "none";
  loginArrowRight.style.display = "none";
  if(scrollT > 155){
    headerWrapper.style.backgroundColor = "black";
  } else {
    headerWrapper.style.backgroundColor = "transparent";
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
  var mrLatLng = {lat: 38.126999, lng: -121.271420};
  var centerZoom = {
    center: mrLatLng,
    zoom: 14
  }
  var map = new google.maps.Map(document.getElementById("map"), centerZoom);
  var marker = new google.maps.Marker({
    position: mrLatLng,
    map: map,
  });
}

var viewDataBtns = document.getElementsByClassName("data-btn");
for(let i = 0; i < viewDataBtns.length; i++){
  viewDataBtns[i].addEventListener("click", () => {
    var ggParent = viewDataBtns[i].parentNode.parentNode.parentNode;
    ggParent.style.left = "-100%";
  });
};

var leftArrows = document.getElementsByClassName("fa-arrow-left");
for(let i = 0; i < leftArrows.length; i++){
  leftArrows[i].addEventListener("click", () => {
    var gParent = leftArrows[i].parentNode.parentNode;
    gParent.style.left = "0";
  });
};
/* Start of Cherry Chart JS */
var outputChart = document.getElementById("cherry-chart").getContext('2d');
var cherryVals = [150000, 50000, 100000, 200000, 10000, 400000, 70000, 30000];
Chart.defaults.global.defaultFontSize =  13;
Chart.defaults.global.defaultFontColor = '#777';
var barChart = new Chart(outputChart, {
  type: 'bar', //'bar', 'horizontalBar', 'pie', 'line', 'doughnut', 'radar', 'polarArea'
  data: {
    labels: ["Brooks", "Royal Hazel", "Tulare", "Coral", "Chelan", "Bing", "Lapin", "Rainier"],
    datasets: [{
        label: 'Expected Output',
        data: [
          cherryVals[0],
          cherryVals[1],
          cherryVals[2],
          cherryVals[3],
          cherryVals[4],
          cherryVals[5],
          cherryVals[6],
          cherryVals[7]
        ],
        backgroundColor: 'rgba(217, 136, 128, 0.2)',
        borderWidth: 1,
        borderColor: 'rgb(217, 136, 128)',
        hoverBorderWidth: 3,
        // hoverBorderColor: 'red'
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
      //display: false,
      //position: 'right',
      labels: {
        fontColor: 'black'
      }
    },
    layout: {
      padding: {
        /*
          right: 50,
          left: 50,
          bottom: 50,
          top: 50
        */
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
/* Start of Grapes Chart */
var outputChart = document.getElementById("grape-chart").getContext('2d');
var grapeVals = [100000, 80000, 210000, 145000, 160000, 95000, 45000, 170000];
var barChart = new Chart(outputChart, {
  type: 'bar', //'bar', 'horizontalBar', 'pie', 'line', 'doughnut', 'radar', 'polarArea'
  data: {
    labels: ["Cinsaut", "Gamay", "Mencia", "Mandilaria", "Bobal", "Ciliegiolo", "Scheurebe", "Aramon"],
    datasets: [{
        label: 'Expected Output',
        data: [
          grapeVals[0],
          grapeVals[1],
          grapeVals[2],
          grapeVals[3],
          grapeVals[4],
          grapeVals[5],
          grapeVals[6],
          grapeVals[7]
        ],
        backgroundColor: 'rgba(46, 204, 113, 0.2)',
        borderWidth: 1,
        borderColor: 'rgb(46, 204, 113)',
        hoverBorderWidth: 3,
        // hoverBorderColor: 'red'
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
      //display: false,
      //position: 'right',
      labels: {
        fontColor: 'black'
      }
    },
    layout: {
      padding: {
        /*
          right: 50,
          left: 50,
          bottom: 50,
          top: 50
        */
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
/* Start of Pear Chart */
var outputChart = document.getElementById("pear-chart").getContext('2d');
var pearVals = [30000, 50000, 100000, 15000, 60000, 130000, 200000, 180000];
var barChart = new Chart(outputChart, {
  type: 'bar', //'bar', 'horizontalBar', 'pie', 'line', 'doughnut', 'radar', 'polarArea'
  data: {
    labels: ["Bartletts", "Comice", "Sunsprite", "Seckel", "French Butter", "Anjou", "Starkrimson", "Asian"],
    datasets: [{
        label: 'Expected Output',
        data: [
          pearVals[0],
          pearVals[1],
          pearVals[2],
          pearVals[3],
          pearVals[4],
          pearVals[5],
          pearVals[6],
          pearVals[7]
        ],
        backgroundColor: 'rgba(241, 196, 15, 0.2)',
        borderWidth: 1,
        borderColor: 'rgb(241, 196, 15)',
        hoverBorderWidth: 3,
        // hoverBorderColor: 'red'
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
      //display: false,
      //position: 'right',
      labels: {
        fontColor: 'black'
      }
    },
    layout: {
      padding: {
        /*
          right: 50,
          left: 50,
          bottom: 50,
          top: 50
        */
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
