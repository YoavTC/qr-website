const gridParent = document.getElementById('grid-parent');

window.onload = function() {
    projectsList.sort((a, b) => new Date(a.date) - new Date(b.date));
    projectsList.reverse();
    displayProjects();
}

//Projects array
var projectsList = [
    {date: '2023-02-02', name: "bamboo-flute", link: ""},
    {date: '2022-05-02', name: "chef-shooter", link: ""},
    {date: '2020-01-01', name: "minecraft-server", link: ""},
    {date: '2022-03-26', name: "de_jaffa", link: ""},
    {date: '2021-10-17', name: "Zombie Body Parts Resourcepack", link: "https://www.planetminecraft.com/texture-pack/zombie-body-parts/"},
    {date: '2022-08-16', name: "Rain Temple Datapack", link: "https://www.planetminecraft.com/data-pack/rain-temple/"},
    {date: '2022-08-22', name: "Simple Baking Datapack", link: "https://www.planetminecraft.com/data-pack/simple-baking/"},
    {date: '2022-10-25', name: "Halloween Decorations Datapack", link: "https://www.planetminecraft.com/data-pack/holiday-spirit-halloween-edition/"},
    {date: '2022-10-27', name: "Jumpscare Datapack", link: "https://www.planetminecraft.com/data-pack/jumpscare-traps-datapack/"},
    {date: '2021-05-04', name: "More Ice Mod", link: "https://www.curseforge.com/minecraft/mc-mods/more-ice"},
    {date: '2022-11-28', name: "Vineyard Mod", link: "https://www.curseforge.com/minecraft/mc-mods/vineyard-mod"},
    {date: '2022-12-15', name: "Mulberry Mod", link: "https://www.curseforge.com/minecraft/mc-mods/mulberry"},
    {date: '2023-01-13', name: "Kill Me Not Mod", link: "https://www.curseforge.com/minecraft/mc-mods/kill-me-not"},


    {date: '2022-09-14', name: "Minecraft Wipeout", link: "https://www.reddit.com/r/MinecraftCommands/comments/xe7bg2/i_made_a_working_wipeout_course_for_a_youtube/?utm_source=share&utm_medium=web2x&context=3"},
    {date: '2022-09-11', name: "Album Covers in Minecraft", link: "https://www.reddit.com/r/Minecraft/comments/yqw87q/my_friends_and_i_recreated_a_bunch_of_album/"},

    {date: '2021-04-27', name: "Valorant in Minecraft", link: "https://www.reddit.com/r/Minecraft/comments/mzq7av/i_created_jett_and_sova_from_valorant_in_minecraft/"},
    {date: '2023-05-15', name: "pizza-defender", link: ""},

    {date: '2023-05-02', name: "israel-wolfenstein", link: ""},
    {date: '2023-07-09', name: "catch-the-cat", link: ""},
    {date: '2023-09-19', name: "imaginary-flags", link: ""},
    {date: '2023-11-16', name: "Simple Baking+ Datapack", link: "https://www.planetminecraft.com/data-pack/simple-baking-6119369/"},
    {date: '2023-11-18', name: "roll-20", link: ""},
    {date: '2023-11-20', name: "snowboard-tapper", link: ""},
    {date: '2023-11-27', name: "Beer Brewing in Minecraft", link: "https://www.planetminecraft.com/data-pack/beer-brewing/"},
    {date: '2023-11-28', name: "unity-event-system", link: ""},
    {date: '2023-12-16', name: "vct-cards", link: ""}

    // {date: 'YYYY-MM-DD', name: "Project Name", link: ""}
    // {date: 'YYYY-MM-DD', name: "Project Name", link: ""}
    // {date: 'YYYY-MM-DD', name: "Project Name", link: ""}
    // {date: 'YYYY-MM-DD', name: "Project Name", link: ""}
    // {date: 'YYYY-MM-DD', name: "Project Name", link: ""}
    // {date: 'YYYY-MM-DD', name: "Project Name", link: ""}
    // {date: 'YYYY-MM-DD', name: "Project Name", link: ""}
    // {date: 'YYYY-MM-DD', name: "Project Name", link: ""}
]

//get sorting way list
var project_sort = document.querySelector('#sorting');

project_sort.addEventListener('change', function() {
    sortProjects();
});

function sortProjects() {
    //sort date
    if (project_sort.value == "newest") {
        projectsList.sort((a, b) => new Date(a.date) - new Date(b.date));
        projectsList.reverse();
        console.log("Sorting by newest!")
    } else {
        projectsList.sort((a, b) => new Date(a.date) - new Date(b.date));
        console.log("Sorting by oldest!")
    }

    console.log('-----------')
    //display projects
    for (let i = 0; i < projectsList.length; i++) {
        console.log(projectsList[i].date)
    }
    displayProjects();
}

function displayProjects() {
    //remove old entries
    while (gridParent.firstChild) {
        gridParent.removeChild(gridParent.firstChild);
    }

    //loop through all project entries
    for (i = 0; i < projectsList.length; i++) {

        //Create the div and name it
        let child = document.createElement('div');
        child.classList.add('grid-item');

        let childTitle = document.createElement('h2');
        childTitle.textContent = (projectsList[i].name).replace('-', ' ');

        //Create img & set it to the correct path
        var img = document.createElement("img");
        img.src = "../../projects/banners/" + projectsList[i].name + ".png";

        //Create the <a> link
        let button = document.createElement('a');
        
        //If the project has a blog page
        if (projectsList[i].link == '') {
            button.href = "../../projects/" + projectsList[i].name + ".html"; 
        } else {
            button.target = "_blank";
            button.href = projectsList[i].link;

            //placeholder image
            img.src = "../../projects/banners/placeHolder.png";
        }


        //Add each child to its parent: img -> text -> link -> grid
        button.appendChild(child);
        child.appendChild(img);
        child.appendChild(childTitle);
        gridParent.appendChild(button);
    }
}