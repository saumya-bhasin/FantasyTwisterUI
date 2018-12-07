function navToPredictionPage() {
    console.log('coming here');
    emptyContent();
    $('#content').append(predictionTemplate());
    getPredictionsData();
};

function getPredictionsData() {
    $.ajax({
        type:'GET',
        url: "http://127.0.0.1:5000/api/predictions",
    }).done(function(data) {
        val=JSON.parse(data);
        renderPridictionList(val.data);
    });
}

function renderPridictionList(predictionData) {
    console.log(predictionData);
    $("#prediction_list").append();
	console.log(predictionData.champion);
    renderMVP(predictionData.MVP);
	renderChampions(predictionData.champion);
	renderEast(predictionData.teams_to_play_off.east_candidates);
	renderWest(predictionData.teams_to_play_off.west_candidates);
	
}

function renderChampions(allchampions) {
    $("#champion").append(displayChampion(allchampions.east_champion,allchampions.west_champion,allchampions.final_champion));
}

function renderMVP(player){
	$("#MVP").append(displayMVP(player));	
}

function renderEast(candidates){	
	candidates.forEach((team) => {
	
	$.ajax({
        type:'GET',
        url: "http://127.0.0.1:5000/api/team/"+ team,
    }).done(function(data) {
        value=JSON.parse(data);
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
		$("#west_playoffs").append(displayTeam(team,value.data.team_name));
		
    });
    });
	
}