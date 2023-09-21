function openTab(tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Deactivate all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the selected tab content and activate the tab link
    document.getElementById(tabName).style.display = "block";
    document.querySelector('button[data-tab="' + tabName + '"]').classList.add("active");
}

window.onload = function () {
    openTab('main');      // Set "main" as the default active main tab
    openEpisodeTab('season1'); // Set "season1" as the default active episode tab
}



function openEpisodeTab(tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("episode-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Deactivate all tab links
    tablinks = document.getElementsByClassName("episode-tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the selected tab content and activate the tab link
    document.getElementById(tabName).style.display = "block";
    document.querySelector('button[data-tab="' + tabName + '"]').classList.add("active");
}




