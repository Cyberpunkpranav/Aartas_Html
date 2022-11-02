
var timecardarray = [];

let timecard = {
    timecarddiv: `<div class="card m-2 ps-md-3 cardcss card1" id="card1"style="min-width:20rem;"><div class="card-body p-2"><button type="button" class="btn-close closebtn float-end" aria-label="Close"></button><div class="row"><div class="col-8"><h5 class="card-title fw-bolder text-center mt-1">Room Number</h5></div><div class="col-4"><select class="form-control bg-transparent border-0 " id="clinicroom1"><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option></select></div></div><div class="row"><div class="col-6"><p class="card-text text-center mt-2">Start Time</p></div><div class="col-6"><input type=time class="form-control starttime bg-transparent border-0 text-center" value="00:00:00"/></div></div><div class="row"><div class="col-6"><p class="card-text text-center mt-2">End Time</p></div><div class="col-6"><input type=time id="endtime" class="form-control bg-transparent border-0" value="00:00:00" /></div></div><div class="row"><div class="col-6"><p class="card-text text-center mt-2" >Total Hours</p></div><div class="col-6"><input type="text" id="totalhrs" class="form-control bg-transparent border-0 text-center" value="00"/></div></div><div class="col-12"><div class="row justify-content-around"><button disabled class="btn btn-success col-5 startbtn">Start Time</button><button class="btn btn-danger col-5" id="endbtn">End Time</button></div></div></div></div>`,
    roomnumber: '',
    starttime: '',
    endtime: ''
}

$('#addslotbutton').on('mousedown', function () {
    timecardarray.push(timecard);
    console.log(timecardarray.length);
})

$('#addslotbutton').on('mouseup', function () {

    for (i = timecardarray.length-1; i <= timecardarray.length; i++) {
     $('#cardslot').html(timecardarray[i].timecarddiv + $('#cardslot').html());
     $('#clinicroom1').addClass(`roomnumber${i}`);
     console.log($('#cardslot').html());
     console.log(timecardarray);
    }

})

  // $('#cardslot').html(timecardarray[i].timecarddiv + $('#cardslot').html());

