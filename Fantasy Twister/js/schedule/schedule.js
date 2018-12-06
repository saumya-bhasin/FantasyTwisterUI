function navToSchedulePage(date) {
    console.log('coming here');
    emptyContent();
    getSchedulesData(date);
};

function getSchedulesData(date) {
	
    $.ajax({
        type:'GET',
        //TODO: correct api, date		
        url: "x" + date,
    }).done(function(data) {
        val=JSON.parse(data);

		$('#content').append(scheduleTemplate(val.data.details[0]));
		renderScheduleList(val.data);

    });
}

function renderScheduleList(schedulesData) {
    console.log("data "+schedulesData);

    $("#schedule_list").append(`<div>
    ${schedulesData.visitor}
    </div>`);
	
	//console.log("*************** "+schedulesData.details[0].teamA.team_name);
	
	$("#teamA_list").append(scheduleListDataTemplate(schedulesData.details[0].teamA));
	$("#teamB_list").append(scheduleListDataTemplate(schedulesData.details[0].teamB));
}


function getCurrentDate(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	// if(dd<10) {
	// 	dd = '0'+dd
	// }
	if(mm<10) {
		mm = '0'+mm
	}
	today = yyyy + "-" + mm + "-" + dd;	
	return today
}

// function getDate(diff){
//     var date = date.setDate(date.getDate() + diff);
//     var dd = date.getDate();
//     var mm = date.getMonth()+1; //January is 0!
//     var yyyy = date.getFullYear();
//     // if(dd<10) {
//     // 	dd = '0'+dd
//     // }
//     if(mm<10) {
//         mm = '0'+mm
//     }
//     dateStr = yyyy + "-" + mm + "-" + dd;
//     return dateStr
// }

function getPreviousDate(curDate){
//
    return preDate
}

function getNextDate(curDate){
//
    return preDate
}