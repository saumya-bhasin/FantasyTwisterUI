function navToSchedulePage() {
    console.log('coming here');
    emptyContent();
    $('#content').append(scheduleTemplate());
    getSchedulesData();
};

function getSchedulesData() {
	date=getDate();
	
    $.ajax({
        type:'GET',
        //TODO: correct api, date		
        url: "http://127.0.0.1:5000/api/schedule/" + date,
    }).done(function(data) {
        val=JSON.parse(data);
		 
        renderScheduleList(val.data);
    });
}

function renderScheduleList(schedulesData) {
    console.log("data "+schedulesData);

    $("#schedule_list").append(`<div>
    ${schedulesData.visitor}
    </div>`);
	
	$("#teamA_list").append(scheduleListDataTemplate(schedulesData.teamA));
	$("#teamB_list").append(scheduleListDataTemplate(schedulesData.teamB));
}


function getDate(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
		dd = '0'+dd
	} 

	if(mm<10) {
		mm = '0'+mm
	} 
	
	today = yyyy + "-" + mm + "-" + dd;
	
	return today
} 
