diff = 0

function navToSchedulePage() {
    console.log('coming here');
    emptyContent();
    $('#content').append(scheduleTopTemplate());
    getSchedulesData();
};

function getSchedulesData() {
	
    $.ajax({
        type:'GET',
        url: "http://127.0.0.1:5000/api/schedule/" + getDate(diff),
    }).done(function(data) {
        val=JSON.parse(data);
        console.log("details", val.data.details)
        val.data.details.forEach((detail) => {
            console.log("detail", detail)
            $('#schedule_list').append(scheduleTemplate(detail));
            // renderScheduleList(detail);
        });
    });
}

// function renderScheduleList(schedulesData) {
//     console.log("data "+schedulesData);
//     //
//     // $("#schedule_list").append(`<div>
//     // ${schedulesData.visitor}
//     // </div>`);
//
// 	//console.log("*************** "+schedulesData.details[0].teamA.team_name);
//
// 	$("#teamA_list").append(scheduleListDataTemplate(schedulesData.teamA));
// 	$("#teamB_list").append(scheduleListDataTemplate(schedulesData.teamB));
// }

function getDate(diff){
    var date = new Date();
    date.setDate(date.getDate() + diff);
    var dd = date.getDate();
    var mm = date.getMonth()+1; //January is 0!
    var yyyy = date.getFullYear();
    // if(dd<10) {
    // 	dd = '0'+dd
    // }
    if(mm<10) {
        mm = '0'+mm
    }
    dateStr = yyyy + "-" + mm + "-" + dd;
    return dateStr
}

function getPreviousDate(){
    diff -= 1;
    return getDate(diff)
}

function getNextDate(){
    diff += 1;
    return getDate(diff)
}

function getCurDate(){
    diff = 0;
    return getDate(diff)
}