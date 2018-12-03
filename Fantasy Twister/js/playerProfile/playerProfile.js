function navToPlayerProfile(response) {
    emptyContent();
    //TODO: playerProfileTemplate
	val=JSON.parse(response);
	console.log("response player "+val);

    $("#content").append(displayPlayer(val.data));
}