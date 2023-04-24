function sitelinks() {
    console.log(location.pathname.split("/").splice(-1));
    const pathname = String(location.pathname.split("/").splice(-1));
    const links = {
        "1": {
            "url": "index.html", 
            "text": "Home",
            "alt": "Home"
        }, 
        "2": {
            "url": "introduction.html", 
            "text": "Introduction",
            "alt": "Introduction"
        },
        "3": {
            "url": "contract.html", 
            "text": "Contract",
            "alt": "Contract"
        },
        "4": {
            "url": "tables.html", 
            "text": "Tables",
            "alt": "Tables"
        }, 
        "5": {
            "url": "forms.html", 
            "text": "Forms",
            "alt": "Forms"
        },
        "6": {
            "url": "firstscripts.html", 
            "text": "First Scripts",
            "alt": "First Scripts"
        },
        "7": {
            "url": "polygons.html", 
            "text": "Polygons",
            "alt": "Polygons"
        },
        "8": {
            "url": "calculator_try.html", 
            "text": "Calculator",
            "alt": "Calculator"
        },
        "9": {
            "url": "arrays.html", 
            "text": "Arrays",
            "alt": "Arrays"
        },
        "10": {
            "url": "slideshow.html",
            "text": "Slideshow",
            "alt": "Slideshow"
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

    $('#siteLinks').html(htmlString);

    $('footer').css('margin', '100 auto');
}

function sitelinks2() {
    console.log(location.pathname.split("/").splice(-1));
    const pathname = String(location.pathname.split("/").splice(-1));
    const links = {
        "1": {
            "url": "./stuffff/CraPPY%20PagE-.htm", 
            "text": "Crappy Page",
            "alt": "Crappy Page"
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

    $('#siteLinks2').html(htmlString);

    $('footer').css('margin', '100 auto');
}