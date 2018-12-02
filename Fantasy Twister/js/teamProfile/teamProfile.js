function navToTeamProfile(response) {
    emptyContent();
    //TODO: teamProfileTemplate
	console.log("response "+response);
    $("#content").append(displayTeam());
}