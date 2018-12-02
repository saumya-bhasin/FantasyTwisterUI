function navToPlayerProfile(response) {
    emptyContent();
    //TODO: playerProfileTemplate
	console.log("response player "+response);
    $("#content").append(displayPlayer(response));
}