import teams from "./data/teams.js";

const teamContainer = document.querySelector(".team-container");
const search = document.querySelector(".search");

let teamsToRender = teams;

teamsToRender.forEach(function(team) {
    teamContainer.innerHTML += `<div class="team">
                                    <h4>${team.full_name}</h4>
                                </div>`;
});


function renderTeams() {

    teamContainer.innerHTML = "";

    teamsToRender.forEach(function(team) {
        teamContainer.innerHTML += `<div class="team">
                                        <h4>${team.full_name}</h4>
                                    </div>`;
    });

}

renderTeams();

search.onkeyup = function() {
    console.log(event)

    const searchValue = event.target.value.trim().toLowerCase();

    const filteredTeams = teams.filter(function(team) {
        if(team.full_name.toLocaleLowerCase().startsWith(searchValue)) {
            return true;
        }
    })

    console.table(filteredTeams)

    teamsToRender = filteredTeams;

    renderTeams();
};