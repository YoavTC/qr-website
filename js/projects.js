//page load
window.onload = function() {
    sortProjects();
}

//projects
//TIME = int of approx days
//DATE = int from 0 to 100
//PRIDE = int from 0 to 100
//POPULARITY = num of downloads / views
//NAME = name of the project...     ._. duh
var projectList = [
    {time: 500, date: 1 , pride: 95, popularity: 2500, name: "CLAYTYNE Minecraft Server", link: "https://www.youtube.com/@claytyneserver3182"},
    {time: 4, date: 15, pride: 25, popularity: 4243,  name: "Zombie Body Parts Resourcepack", link: "https://www.planetminecraft.com/texture-pack/zombie-body-parts/"},
    {time: 2, date: 65, pride: 75, popularity: 3700,  name: "Rain Temple Datapack", link: "https://www.planetminecraft.com/data-pack/rain-temple/"},
    {time: 1, date: 50, pride: 25, popularity: 1000,  name: "Simple Baking Datapack", link: "https://www.planetminecraft.com/data-pack/simple-baking/"},
    {time: 3, date: 50, pride: 60, popularity: 1000,  name: "Halloween Datapack", link: "https://www.planetminecraft.com/data-pack/holiday-spirit-halloween-edition/"},
    {time: 1, date: 71, pride: 65, popularity: 2000,  name: "Jumpscare Datapack", link: "https://www.planetminecraft.com/data-pack/jumpscare-traps-datapack/"},
    {time: 15, date: 45, pride: 85, popularity: 52000,  name: "More Ice Mod", link: "https://www.curseforge.com/minecraft/mc-mods/more-ice"},
    {time: 20, date: 85, pride: 90, popularity: 300,  name: "Vineyard Mod", link: "https://www.curseforge.com/minecraft/mc-mods/vineyard-mod"},
    {time: 15, date: 88, pride: 60, popularity: 20,  name: "Mulberry Mod", link: "https://www.curseforge.com/minecraft/mc-mods/mulberry"},
    {time: 1, date: 90, pride: 70, popularity: 20,  name: "Kill Me Not Mod", link: "https://www.curseforge.com/minecraft/mc-mods/kill-me-not"},
    {time: 30, date: 91, pride: 77, popularity: 50,  name: "My YouTube", link: "https://www.youtube.com/@yoav_tc"},
    {time: 31, date: 60, pride: 85, popularity: 100,  name: "Chef Shooter Game", link: "https://yoav-tc.itch.io/chef-shooter"},
    {time: 18, date: 65, pride: 80, popularity: 400,  name: "Minecraft Wipeout", link: "https://www.reddit.com/r/MinecraftCommands/comments/xe7bg2/i_made_a_working_wipeout_course_for_a_youtube/?utm_source=share&utm_medium=web2x&context=3"},
    {time: 20, date: 75, pride: 70, popularity: 200,  name: "Minecraft Album Covers", link: "https://www.reddit.com/r/Minecraft/comments/yqw87q/my_friends_and_i_recreated_a_bunch_of_album/"},
    {time: 5, date: 55, pride: 45, popularity: 35,  name: "Valorant in Minecraft", link: "https://www.reddit.com/r/Minecraft/comments/mzq7av/i_created_jett_and_sova_from_valorant_in_minecraft/"},
    {time: 150, date: 80, pride: 88, popularity: 500,  name: "YouTube Channel with Friends", link: "https://www.youtube.com/@AktimelGroup"},
    




    //{time: 0, date: 0, pride: 0, popularity: 0,  name: "", link: ""},
    //{time: 0, date: 0, pride: 0, popularity: 0,  name: "", link: ""},
    //{time: 0, date: 0, pride: 0, popularity: 0,  name: "", link: ""},
]

//get dropdown list
var project_sort = document.querySelector('#sorting');

project_sort.addEventListener('change', function() {
    sortProjects();
});

function sortProjects() {
    //clear HTML div
    document.getElementById("projects_list").innerHTML = "";
    //sort
    console.log("SORTING BY:", project_sort.value);

    //TIME
    if (project_sort.value == "time") {
        projectList.sort(function(a, b) {
            return a.time - b.time;
        })
    }
    //DATE
    if (project_sort.value == "date") {  
        projectList.sort(function(a, b) {
            return a.date - b.date;
        })
    }
    //PRIDE
    if (project_sort.value == "pride") {
        projectList.sort(function(a, b) {
            return a.pride - b.pride;
        })
    }
    //POPULARITY
    if (project_sort.value == "popularity") {
        projectList.sort(function(a, b) {
            return a.popularity - b.popularity;
        })
    }


    //reverse (fix) & display list
    projectList.reverse();
    displayProjects();
}


function displayProjects() {
    for (i = 0; i < projectList.length; i++) {

        //create img variable & set it to the correct path
        var img = document.createElement("img");
        img.src = "assets/thumbnails/" + projectList[i].name + ".png";
        if (img.naturalWidth < 1) {
            img.src = "assets/thumbnails/placeHolder.png";
        }

        //draw the img, space, name of project then breakline
        //DRAW IMG
        //document.getElementById("projects_list").appendChild(img);
        document.getElementById("projects_list").innerHTML += (i + 1) + ". "
        document.getElementById("projects_list").innerHTML += ' ' + '<a href="' + projectList[i].link + '" target="_blank">' + projectList[i].name + '</a>' + '<br>'

    }
}