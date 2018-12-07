function navToTeamProfile(response) {
    emptyContent();
    //TODO: teamProfileTemplate
	console.log("response "+response);
	val=JSON.parse(response);
	
	$("#content").append(displayTeamProfile(val.data));
	getPlayer(val.data.players);
}

function getPlayer(players){
	players.forEach((player) => {
	
	$.ajax({
        type:'GET',
        url: "http://127.0.0.1:5000/api/player/"+ player,
    }).done(function(data) {
        value=JSON.parse(data);
		//renderTeam(team,value.data.team_name)
		console.log("candidates "+value.data);
		$("#player_team").append(displayTeamPlayer(value.data));

    });
    });
	
}

