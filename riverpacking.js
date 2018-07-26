window.onbeforeunload = function(){
  window.scrollTo(0, 0);
}
var headerWrapper = document.getElementById("header-wrapper");
const toTopBtn = document.getElementById("to-top-btn");
toTopBtn.addEventListener("click", () =>{
  $("html, body").animate({
    scrollTop: $("html, body").offset().top
  });
});
window.addEventListener("scroll", function(){
  var scrollT = document.documentElement.scrollTop;
  if(scrollT > 130){
    headerWrapper.classList.add("active");
    toTopBtn.classList.add("active");
  } else {
    headerWrapper.classList.remove("active");
    toTopBtn.classList.remove("active");
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
const signInBtn = document.getElementById("sign-in-btn"),
    loginWrapper = document.getElementById("login-wrapper"),
    joinBtn = document.getElementById("join-btn"),
    joinWrapper = document.getElementById("join-wrapper"),
    loginArrowRight = document.getElementById("login-arrow-right"),
    suArrowRight = document.getElementById("su-arrow-right");
joinBtn.addEventListener("click", function(){
  joinWrapper.classList.toggle("active");
});
suArrowRight.addEventListener("click", function(){
  joinWrapper.classList.toggle("active");
});
signInBtn.addEventListener("click", function(){
  loginWrapper.classList.toggle("active");
});
loginArrowRight.addEventListener("click", function(){
  loginWrapper.classList.toggle("active");
});

const orLoginBtn = document.getElementById("or-login-btn"),
      orSignupBtn = document.getElementById("or-signup-btn");
orLoginBtn.addEventListener("click", function(){
  joinWrapper.classList.toggle("active");
  loginWrapper.classList.toggle("active");
});
orSignupBtn.addEventListener("click", function(){
  loginWrapper.classList.toggle("active");
  joinWrapper.classList.toggle("active");
})

/* Start of Burger, Mobile Nav Vars and Functions */
var burgerWrap = document.getElementById("burger-wrap");
var mobileNav = document.getElementById("mobile-nav");
burgerWrap.addEventListener("click", () => {
  burgerWrap.classList.toggle("active");
  mobileNav.classList.toggle("active");
});


/* Vert User Entry Btn Vars and Assoc Functions */
const vertLoginBtn = document.getElementById("vert-login-btn");
const vertJoinBtn = document.getElementById("vert-join-btn");
vertLoginBtn.addEventListener("click", () => {
  loginWrapper.classList.toggle("active");
});
vertJoinBtn.addEventListener("click", () => {
  joinWrapper.classList.toggle("active");
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


/* Start of Cherry Chart JS */
var cherryDonutChart = document.getElementById("cherry-donut-chart");
var cherryBarChart = document.getElementById("cherry-bar-chart");
function createCherryDonut(){
  cherryDonutChart.classList.add("active");
  if(cherryBarChart.classList.contains("active")){
    cherryBarChart.classList.remove("active");
  }  
  var chart = c3.generate({
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
  cherryBarChart.classList.add("active");
  if(cherryDonutChart.classList.contains("active")){
    cherryDonutChart.classList.remove("active");
  }  
  var barChart = document.getElementById("cherry-bar-chart").getContext('2d');
  var chart = new Chart(barChart, {
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
const grapeDonutChart = document.getElementById("grape-donut-chart");
const grapeBarChart = document.getElementById("grape-bar-chart");
function createGrapeDonut(){
  grapeDonutChart.classList.add("active");
  if(grapeBarChart.classList.contains("active")){
    grapeBarChart.classList.remove("active");
  }
  var chart = c3.generate({
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
  });
}
function createGrapeBar(){
  grapeBarChart.classList.add("active");
  if(grapeDonutChart.classList.contains("active")){
    grapeDonutChart.classList.remove("active");
  }
  var barChart = document.getElementById("grape-bar-chart").getContext('2d');
  var chart = new Chart(barChart, {
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
const pearDonutChart = document.getElementById("pear-donut-chart");
const pearBarChart = document.getElementById("pear-bar-chart");
function createPearDonut(){
  pearDonutChart.classList.add("active");
  if(pearBarChart.classList.contains("active")){
    pearBarChart.classList.remove("active");
  }
  var chart = c3.generate({
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
  pearBarChart.classList.add("active");
  if(pearDonutChart.classList.contains("active")){
    pearDonutChart.classList.remove("active");
  }
  var barChart = document.getElementById("pear-bar-chart").getContext('2d');
  var chart = new Chart(barChart, {
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

/* Clone Product Imgs and Headings for appending when window width < 840px  */
var cherryTextImg = document.getElementById("cherry-text-img");
var grapeTextImg = document.getElementById("grape-text-img");
var pearTextImg = document.getElementById("pear-text-img");
var cherryImgWrapper = document.getElementById("cherry-img-wrapper");
var grapeImgWrapper = document.getElementById("grape-img-wrapper");
var pearImgWrapper = document.getElementById("pear-img-wrapper");
var cherryHeading = document.getElementById("cherry-heading");
var grapeHeading = document.getElementById("grape-heading");
var pearHeading = document.getElementById("pear-heading");
var cherryImgClone = cherryImgWrapper.cloneNode(true);
var grapeImgClone = grapeImgWrapper.cloneNode(true);
var pearImgClone = pearImgWrapper.cloneNode(true);
var cherryHeadingClone = cherryHeading.cloneNode(true);
var grapeHeadingClone = grapeHeading.cloneNode(true);
var pearHeadingClone = pearHeading.cloneNode(true);

/* Start of Creating Bar or Donut Charts based on window width */
window.addEventListener("load", function(){
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if(windowWidth < 905){
    createCherryDonut();
    createGrapeDonut();
    createPearDonut();
    hideDefaultHeadingsAndImgs();
    changeProductLayout();
  } else {
    createCherryBar();
    createGrapeBar();
    createPearBar();
  }
});

/* Window Resize Function to Close Mobile Nav if Opened */
window.addEventListener("resize", () => {
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if(windowWidth > 905){
    if(mobileNav.classList.contains("active")){
      mobileNav.classList.remove("active");
      burgerWrap.classList.remove("active");
    }    
    createCherryBar();
    createGrapeBar();
    createPearBar();
    removeProductClones();
    resetProductLayout();
  } else {
    createCherryDonut();
    createGrapeDonut();
    createPearDonut();
    hideDefaultHeadingsAndImgs();
    changeProductLayout();
  }
});

function hideDefaultHeadingsAndImgs(){
  cherryImgWrapper.classList.add("inactive");
  grapeImgWrapper.classList.add("inactive");
  pearImgWrapper.classList.add("inactive");
  cherryHeading.classList.add("inactive");
  grapeHeading.classList.add("inactive");
  pearHeading.classList.add("inactive");
}

function changeProductLayout(){
  cherryTextImg.prepend(cherryHeadingClone);
  cherryHeadingClone.after(cherryImgClone);
  grapeTextImg.prepend(grapeHeadingClone);
  grapeHeadingClone.after(grapeImgClone);
  pearTextImg.prepend(pearHeadingClone);
  pearHeadingClone.after(pearImgClone);
}

function removeProductClones(){
  cherryHeadingClone.remove();
  grapeHeadingClone.remove();
  pearHeadingClone.remove();
  cherryImgClone.remove();
  grapeImgClone.remove();
  pearImgClone.remove();
}

function resetProductLayout(){
  cherryImgWrapper.classList.remove("inactive");
  grapeImgWrapper.classList.remove("inactive");
  pearImgWrapper.classList.remove("inactive");
  cherryHeading.classList.remove("inactive");
  grapeHeading.classList.remove("inactive");
  pearHeading.classList.remove("inactive");
}
