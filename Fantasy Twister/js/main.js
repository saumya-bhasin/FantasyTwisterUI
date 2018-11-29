/*function getmain() 
{
   var data="hello";
   $.get("http://localhost:5000/", function(response) {
        data = response;
   }).error(function(){
  alert("Sorry could not proceed");
});

   return JSON.stringify(data);
}*/
$(document).ready(function(){

	// $.ajax({
	// 	method: 'GET',
	// 	url: 'http://127.0.0.1:5000/api/home',
	// 	dataType: 'json'
	// }).done((response) => {
	// 	console.log('response', response);
	// });
    // $.get("api/home", function(response) {
    //     	// console.log('response', response);
    //     // });
$.ajax({
  type:'GET',
  url: "http://127.0.0.1:5000/api/home",
}).done(function(data) {
	console.log(data);
	val=JSON.parse(data);

	player=val.data .top_players;
	// player=val.data;
	for (x in player){
		//console.log("x "+player1[x].player_id);
        let playerId = player[x].player_id;
        let playerName = player[x].player_name;
        let teamId = player[x].team_id;
        let teamName = player[x].team_name;
        let profilePic = player[x].picture;
        let playerUrl = `http://localhost:5000/api/player/${playerId}`;
        let teamUrl = `http://localhost:5000/api/team/${teamId}`;
        let imageAlt = ${playerName} + "'s profile picture";
        const template = `
			<li class="media">
				<img class="mr-3" src=${profilePic} alt=${imageAlt}>
				<div class="media-body">
				  <h5 class="mt-0 mb-1" href=${playerUrl}>${playerName}</h5>
				  <a href=${teamUrl}>${teamName}</a>
				</div>
			</li>
		`;
        $("#player_list").append(template);
		// $("#player_list").append("<li class='list-group-item'><a href=http://localhost:5000/api/player/" +player[x].player_id+  ">" + "  " + player[x].player_name + "</li>");
	}

	team=val.data.top_teams;
	for (x in team){
		//console.log("x "+player1[x].player_id);
		$("#team_list").append("<li class='list-group-item'><a href=http://localhost:5000/api/team/" +team[x].team_id+  ">" + "  " + team[x].team_name + "</li>");
	}



  //$('#test').append(player)
})
});


    // <div class="list-group">
    //   <a href=" " class="list-group-item list-group-item-action flex-column align-items-start active">
    //     <div class="d-flex w-100 justify-content-between">
    //       <h5 class="mb-1">ID: ${id}</h5>
    //       <small>${time}</small>
    //     </div>
    //     <p class="mb-1">${text}</p >
    //   </a >
