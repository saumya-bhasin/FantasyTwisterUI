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
    console.log(predictionData);
    $("#prediction_list").append(`<div>
    <!--${predictionData.champion.final_champion.team_name}-->
    </div>`);
	
	console.log(predictionData.champion);
	renderChampions(predictionData.champion);
	renderMVP(predictionData.MVP);
	//renderMIP(predictionData.MIP);
	//rendercoach(predictionData.coach_of_year);
	renderEast(predictionData.teams_to_play_off.east_candidates);
	renderWest(predictionData.teams_to_play_off.west_candidates);
	
}

function renderChampions(allchampions) {
    $("#champion").append(displayChampion(allchampions.east_champion,allchampions.west_champion,allchampions.final_champion));
}

function renderMVP(player){
	$("#MVP").append(displayMVP(player));	
}

// function renderMIP(player){
// 	$("#MIP").append(displayMIP(player));
// }
//
// function rendercoach(coach){
// 	$('#coach').append(displaycoach(coach));
//
// }

function renderEast(candidates){	
	candidates.forEach((team) => {
	
	$.ajax({
        type:'GET',
        //TODO: correct api, date
        url: "http://127.0.0.1:5000/api/team/"+ team,
    }).done(function(data) {
        value=JSON.parse(data);
		//renderTeam(team,value.data.team_name)
		//console.log("candidates "+candidates);
		
		$("#east_playoffs").append(displayTeam(team,value.data.team_name));
		
    });
    });
	
}

function renderWest(candidates){
	candidates.forEach((team) => {
	
	$.ajax({
        type:'GET',
        url: "http://127.0.0.1:5000/api/team/"+ team,
    }).done(function(data) {
        value=JSON.parse(data);
		//renderTeam(team,value.data.team_name)
		//console.log("candidates "+candidates);
		
		$("#west_playoffs").append(displayTeam(team,value.data.team_name));
		
    });
    });
	
}

function onclickTeamName(targetElem) {
    const teamUrl = targetElem.getAttribute('data-url');
    $.get(teamUrl, function(response) {
        navToTeamProfile(response);
    });
}
