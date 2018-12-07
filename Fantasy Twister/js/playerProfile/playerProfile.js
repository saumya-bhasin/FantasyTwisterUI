function navToPlayerProfile(response) {
    emptyContent();
	val=JSON.parse(response);
	console.log("response player "+val);
    $("#content").append(displayPlayer(val.data));
}