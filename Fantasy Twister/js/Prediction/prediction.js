function navToPredictionPage() {
    console.log('coming here');
    emptyContent();
    $('#content').append(predictionTemplate());
    getPredictionsData();
};

function getPredictionsData() {
    $.ajax({
        type:'GET',
        //TODO: correct api, date
        url: "http://127.0.0.1:5000/api/predictions",
    }).done(function(data) {
        val=JSON.parse(data);
        renderPridictionList(val.data);
    });
}

function renderPridictionList(predictionData) {
    console.log(predictionData)
    $("#prediction_list").append(`<div>
    ${predictionData.champion.final_champion.team_name}
    </div>`);

    // schedulesData.forEach((schedule) => {
    //     $("#schedule_list").append(scheduleListDataTemplate(schedule));
    // });
}