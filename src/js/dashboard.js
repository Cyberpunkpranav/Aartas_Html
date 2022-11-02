

let doctortab = $('.doctortab');
let alldoctortab = $('.alldoctortab');
let appointmenttab = $('.appointmenttab');
let timetab = $('.timetab');
let specialitytab = $('.specialitytab');
let adddoctorbtn = $('.adddoctorbtn');
let calender = $('#calender');
let starttime = $('.starttime');
let clinictime = document.getElementById('#clinictime');
let timeslots = $('.timeslots');
let cardslot=$('.cardslot');


$('.addoptions').hide();
$('.addbtn')[0].addEventListener('click', function () {
    $('.addoptions').toggle(500);
});


$('.patient')[0].addEventListener('click', function () {
    $('.patientinfosection').slideToggle();
    $('.appointmentinfosection').hide();
    $('.doctorinfosection').hide();
    $('.addoptions').hide(500);
    $('.parentclose').show();
})



$('.appointment')[0].addEventListener('click', function () {
    $('.appointmentinfosection').slideToggle();
    $('.patientinfosection').hide();
    $('.doctorinfosection').hide();
    $('.addoptions').hide(500);
    $('.parentclose').show();
})

$('.doctorinfosection').hide();
$('.doctorslot')[0].addEventListener('click', function () {
    $('.doctorinfosection').slideToggle();
    $('.patientinfosection').hide();
    $('.appointmentinfosection').hide();
    $('.addoptions').hide(500);
    $('.parentclose').show();
})
//------------------------------doctor name API----------------------------------------------------------
var doctorsName ;
  $.ajax({ 
    url: 'https://aartas-qaapp-as.azurewebsites.net/aartas_uat/public/api/doctors',
    type: "GET",
    dataType:'JSON',
    data:JSON.stringify({ }),
    success:function(data) {
    //  console.log(JSON.stringify(data));
  
     for (var i=0 ; i<=data.data.length; i++) { 
      doctorsName = data.data[i].doctor_name;
        $('#doctortab').append(`<button class="btn m-1 doctorbutton" value='${doctorsName}'><h6 class="m-0">${doctorsName}</h6><p class="m-0"></button>`);
      // console.log($(`.doctorbutton${i}`).attr('value'));
    }

    },
    error: function(data) {
        alert("Something went wrong please try again");
    }
})

//------------------------------doctor name API----------------------------------------------------------

// var adddoctorslotinarray = 1;
// for (var i = adddoctorslotinarray; i >= 0; i--) { 

//     let doctorarray = [];
//     doctorarray[i] = `<button class="btn m-1"><h6 class="m-0">Doctors Name ${[i]}</h6><p class="m-0"></button>`;
//     doctortab.html(doctorarray[i] += doctortab.html());
// }

for (var l = 10; l >= 0; l--) {
    let timearray = [];
    timearray[l] = `<button class="btn timebtns m-1"><h6 class="m-0">Time Slot ${[l]}</h6><p class="m-0"></button>`;
    timetab.html(timearray[l] += timetab.html());
}


for (var m = 10; m >= 0; m--) {
    let timeslotarray = [];
    timeslotarray[m] = `<button class="btn timeslotbtns m-1"><h6 class="m-0">Time Slot ${[m]}</h6><p class="m-0"></button>`;
    timeslots.html(timeslotarray[m] += timeslots.html());
}

// $(document).ready( function(){
//   document.getElementById('addslotbutton').addEventListener('click',function(){
//     cardslot.append('<div class="card m-2 ps-md-3 cardcss card1" id="card1"style="min-width:20rem;"><div class="card-body p-2"><button type="button" class="btn-close closebtn float-end" aria-label="Close"></button><div class="row"><div class="col-8"><h5 class="card-title fw-bolder text-center mt-1">Room Number</h5></div><div class="col-4"><select class="form-control bg-transparent border-0" id="clinicroom"><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option></select></div></div><div class="row"><div class="col-6"><p class="card-text text-center mt-2">Start Time</p></div><div class="col-6"><input type=time class="form-control starttime bg-transparent border-0 text-center" value="00:00:00"/></div></div><div class="row"><div class="col-6"><p class="card-text text-center mt-2">End Time</p></div><div class="col-6"><input type=time id="endtime" class="form-control bg-transparent border-0" value="00:00:00" /></div></div><div class="row"><div class="col-6"><p class="card-text text-center mt-2" >Total Hours</p></div><div class="col-6"><input type="text" id="totalhrs" class="form-control bg-transparent border-0 text-center" value="00"/></div></div><div class="col-12"><div class="row justify-content-around"><button disabled class="btn btn-success col-5 startbtn">Start Time</button><button class="btn btn-danger col-5" id="endbtn">End Time</button></div></div></div></div>');
//     console.log(cardslot.html());
//   })
//   })
 

var specialityvalue = [
    { id: 1, name: "Cardilogy" },
    { id: 2, name: "Internal Medicine" },
    { id: 12, name: "Child Health" },
    { id: 22, name: "Rheumatology" },
    { id: 23, name: "General Surgery" },
    { id: 24, name: "Urology" },
    { id: 25, name: "Endocrine" },
    { id: 26, name: "Family Medicine" },
    { id: 27, name: "Hemetology" },
    { id: 28, name: "Psychiatry" },
    { id: 29, name: "Men&#039;s Sexual Health" },
    { id: 30, name: "Dermatology" },
    { id: 31, name: "Digestive Diseases" },
    { id: 32, name: "Respiratory Medicine" },
    { id: 33, name: "Orthopedics" },
    { id: 34, name: "Spine Surgeon" },
    { id: 35, name: "Oncology" },
    { id: 36, name: "Physiotherapy" },
    { id: 37, name: "ENT, Head &amp; Neck" },
    { id: 38, name: "Nephrology" },
    { id: 39, name: "Women&#039;s health" },
    { id: 40, name: "Nutrition &amp; Dietics" },
].reverse();

for (var m = 0; m < specialityvalue.length; m++) {
    specialityvalue[m] = `<button class="btn specialitybtns m-1"><h6 class="m-0">${specialityvalue[m].name} [${specialityvalue[m].id}]</h6><p class="m-0"></button>`;
    specialitytab.html(specialityvalue[m] += specialitytab.html());
}


function reset() {
    window.reload();
}

function closeform() {
    if ($('.patientinfosection').show()) {
        $('.patientinfosection').hide();
        $('.parentclose').hide();
    }
    if ($('.appointmentinfosection').show()) {
        $('.appointmentinfosection').hide()
        $('.parentclose').hide();
    }
    if ($('.doctorinfosection').show()) {
        $('.doctorinfosection').hide()
        $('.parentclose').hide();
    }  
}


const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
let monthname = month[d.getMonth()];
var fullDate = new Date()
var currentDate = monthname + " " + fullDate.getDate() + "," + fullDate.getFullYear();
calender.html(currentDate);

$(document).ready(function() {
    clockUpdate();
    setInterval(clockUpdate, 1000);
  })
  
  function clockUpdate() {
    var date = new Date();
    $('.digital-clock').css({'color': '#fff', 'text-shadow': '0 0 6px #ff0'});
    function addZero(x) {
      if (x < 10) {
        return x = '0' + x;
      } else {
        return x;
      }
    }
  
    function twelveHour(x) {
      if (x > 12) {
        return x = x - 12;
      } else if (x == 0) {
        return x = 12;
      } else {
        return x;
      }
    }
  
    var h = addZero(twelveHour(date.getHours()));
    var m = addZero(date.getMinutes());
    var s = addZero(date.getSeconds());

    $('#livetime').text(h + ':' + m + ':' + s);
    
  }


//   $(document).on('input', function () {
//    this.closest('.startbtn').attr('disabled', false);
// })

var roomnumber = "";
$('#clinicroom').on('change', function() {
    roomnumber = this.value;
    console.log(roomnumber);
  });

$(document).on('click','.startbtn',function(){
  $(this).closest('.startbtn').attr('disabled', true);
  $(this).closest('.starttime').attr('disabled', true);
})


 $(document).on('click','.closebtn',function(){
 $(this).closest('.card1').remove();
 })

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}


 $('#livetime').on('click',function(){
  $(this).draggable();
 })

 $('.selectpatient').on('input',function(){
  var selectpatientinput = this.value;
if(isNaN(selectpatientinput) == false){
  $('.patientnumber').attr('value',selectpatientinput);
}else{
  $('.patientname').attr('value',selectpatientinput);
}
 })


 function formshift(){
  $('.patientinfosection').show()
  $('.appointmentinfosection').hide();
 }
 function displayschedule(){
  alert(this.value);
 }

 $(document).on('click',`.doctorbutton`,function(){
console.log($(this).attr('value'));
$('#doctorscheduledata').show();
  })