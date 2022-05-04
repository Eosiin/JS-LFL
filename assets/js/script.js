let teamsArray = [{
        equipe: "LDLC",
        play: 18,
        win: 13,
        lost: 5,
        photo: "LDLCOL"
    },
    {
        equipe: "BDS ACADEMY",
        play: 18,
        win: 12,
        lost: 6,
        photo: "BDSA"
    },
    {
        equipe: "KARMINE CORP",
        play: 18,
        win: 12,
        lost: 6,
        photo: "KC"
    },
    {
        equipe: "MISFITS PREMIER",
        play: 18,
        win: 11,
        lost: 7,
        photo: "MSFP"
    },
    {
        equipe: "VITALITY BEE",
        play: 18,
        win: 11,
        lost: 7,
        photo: "VITB"
    },
    {
        equipe: "GAMERSORIGIN",
        play: 18,
        win: 8,
        lost: 10,
        photo: "GO"
    },
    {
        equipe: "SOLARY",
        play: 18,
        win: 8,
        lost: 10,
        photo: "SLY"
    },
    {
        equipe: "GAMEWARD",
        play: 18,
        win: 7,
        lost: 11,
        photo: "GW"
    },
    {
        equipe: "MIRAGE ELYANDRA",
        play: 18,
        win: 6,
        lost: 12,
        photo: "MIRAGE"
    },
    {
        equipe: "TEAM OPLON",
        play: 18,
        win: 2,
        lost: 16,
        photo: "OPL"
    },


]


let index = 1;
let tbody = document.getElementById('tbody');

teamsArray.forEach(team => {
    tbody.innerHTML += `
        <tr>
            <td class="fw-bold">${index}</td>
            <td><img class="logo" src="assets/img/${team.photo}.webp">
            </td>           
            <td>${team.equipe}</td>
            <td>${team.play}</td> 
            <td>${team.win}</td>
            <td>${team.lost}</td> 
        </tr>
    `;
    index++
    //  console.log(team);
});