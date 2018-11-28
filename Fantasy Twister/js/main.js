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
$.ajax({
  type:'GET',
  url: "http://localhost:5000",
}).done(function(data) {
	
	val=JSON.parse(data);
	
	player=val.data.top_players;	
	for (x in player){
		//console.log("x "+player1[x].player_id);
		$("#player_list").append("<li class='list-group-item'><a href=http://localhost:5000/api/player/" +player[x].player_id+  ">" + "  " + player[x].player_name + "</li>");
	}
	
	team=val.data.top_teams;	
	for (x in team){
		//console.log("x "+player1[x].player_id);
		$("#team_list").append("<li class='list-group-item'><a href=http://localhost:5000/api/team/" +team[x].team_id+  ">" + "  " + team[x].team_name + "</li>");
	}
	
	
	
  //$('#test').append(player)
})
});
