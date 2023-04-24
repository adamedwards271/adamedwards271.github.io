function footerlinks() {
    console.log(location.pathname.split("/").splice(-1));
    const pathname = String(location.pathname.split("/").splice(-1));
    const links = {
        "1": {
            "url": "https://webpages.charlotte.edu/aedwa152/", 
            "text": "Webpages",
            "alt": "Webpages"
        }, 
        "2": {
            "url": "https://github.com/adamedwards271", 
            "text": "GitHub",
            "alt": "GitHub"
        },
        "3": {
            "url": "https://adamedwards271.github.io", 
            "text": "GitHub Pages",
            "alt": "GitHub Pages"
        },
        "4": {
            "url": "https://adamedwards271.github.io/itis3135/", 
            "text": "GitHub Course Page",
            "alt": "GitHub Course Page"
        }, 
        "5": {
            "url": "https://www.freecodecamp.org/adamedwards271", 
            "text": "FreeCodeCamp",
            "alt": "FreeCodeCamp"
        },
        "6": {
            "url": "https://www.codecademy.com/profiles/adamedwards271", 
            "text": "CodeAcademy",
            "alt": "CodeAcademy"
        },
        "7": {
            "url": "https://www.linkedin.com/in/adamedwards271/", 
            "text": "LinkedIn",
            "alt": "LinkedIn"
        }
    };

    const linkSeperator = " | ";
    let htmlString = "";

    for(var id in links) {
        if (pathname === links[id]['url']) {
            htmlString += links[id]['text'];
        } else {
            htmlString += '<a href="' + links[id]['url'] + '">' + links[id]['text'] + '</a>';
        }
        if(Number(id) < Object.keys(links).length) {
            htmlString += linkSeperator;
        }
    }

    $('#footerLinks').html(htmlString);

    $('footer').css('margin', '100 auto');

    document.getElementById("designLink").innerHTML = "Site designed by <a href=\"https://webpages.charlotte.edu/aedwa152/itis3135/edwards-software.com\">Edwards' Software</a> &copy;2023";
    document.getElementById("validatorLink").innerHTML = "<a href=\"https://validator.w3.org/check?uri=referer\" id=\"validation_link_html\">\
                                                        <img src=\"images/button_validation_html5.png\" width=\"88\" height=\"31\" alt=\"Validate webpage HTML.\"></a>\
                                                        <a href=\"https://jigsaw.w3.org/css-validator/check/referer\" id=\"validation_link_css\">\
                                                        <img src=\"images/button_validation_css.png\" width=\"88\" height=\"31\" alt=\"Validate webpage CSS.\"></a>";
}