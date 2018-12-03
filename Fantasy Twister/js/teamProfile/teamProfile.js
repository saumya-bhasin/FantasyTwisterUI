function navToTeamProfile(response) {
    emptyContent();
    //TODO: teamProfileTemplate
	console.log("response "+response);
	val=JSON.parse(response);
    $("#content").append(displayTeamProfile(val.data));
}