function navToTeamsPage() {
    emptyContent();
    $('#content').append(teamListTemplate());
    getteamsData();
};

function getteamsData() {
    $.ajax({
        type:'GET',
        url: "http://127.0.0.1:5000/api/top-teams/16",
    }).done(function(data) {
        val=JSON.parse(data);
        renderTeamList(val.data);
    });
}

function renderTeamList(teamsData) {
    // console.log(teamsData);
    teamsData.forEach((team) => {
        $("#team_list").append(topTeamTemplate(team));
    });
}