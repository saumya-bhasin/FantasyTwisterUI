function navToSchedulePage() {
    console.log('coming here');
    emptyContent();
    $('#content').append(scheduleTemplate());
    getSchedulesData();
};

function getSchedulesData() {
    $.ajax({
        type:'GET',
        //TODO: correct api, date
        url: "http://127.0.0.1:5000/api/schedule/2018-12-01",
    }).done(function(data) {
        val=JSON.parse(data);
        renderScheduleList(val.data);
    });
}

function renderScheduleList(schedulesData) {
    console.log(schedulesData)
    $("#schedule_list").append(`<div>
    ${schedulesData.visitor}
    </div>`);

    // schedulesData.forEach((schedule) => {
    //     $("#schedule_list").append(scheduleListDataTemplate(schedule));
    // });
}