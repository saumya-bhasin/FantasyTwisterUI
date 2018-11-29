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
	// console.log(data);
	val=JSON.parse(data);
	player=val.data.top_players;
	for (x in player){
        let playerUrl = `http://localhost:5000/api/player/${player[x].player_id}`;
        let teamUrl = `http://localhost:5000/api/team/${player[x].team_id}`;
        let imageAlt = `${player[x].player_name}'s profile picture"`;

        const template = `
			<li class="media">
				<a href=${playerUrl}>
					<img class="mr-3" src=${player[x].picture} alt=${imageAlt}>
				</a>
				<div class="media-body">
				  	<a href=${playerUrl}>
				  		<h5 class="mt-0 mb-1">${player[x].player_name}</h5>
				  	</a>
				  	<a href=${teamUrl}>${player[x].team_name}</a>
				</div>
			</li>
		`;

        $("#player_list").append(template);
		// $("#player_list").append("<li class='list-group-item'><a href=http://localhost:5000/api/player/" +player[x].player_id+  ">" + "  " + player[x].player_name + "</li>");
	}

	team=val.data.top_teams;
	for (x in team){
        let teamUrl = `http://localhost:5000/api/team/${team[x].team_id}`;
        let imageAlt = `${team[x].team_name}'s profile picture"`;

        const template = `
			<li class="media">
				<a href=${teamUrl}>
					<img class="mr-3" src=${team[x].logo} alt=${imageAlt}>
				</a>
				<div class="media-body">
					<a href=${teamUrl}>
				  		<h5 class="mt-0 mb-1">${team[x].team_name}</h5>
				  	</a>
				  	${team[x].location}
				</div>
			</li>
		`;

        $("#team_list").append(template);
		// $("#team_list").append("<li class='list-group-item'><a href=http://localhost:5000/api/team/" +team[x].team_id+  ">" + "  " + team[x].team_name + "</li>");
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
