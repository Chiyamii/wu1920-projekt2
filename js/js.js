document.getElementById('menu_button').addEventListener('click', function () { //Kopplar in sig i dokumentet (menu_button är vad man har döpt id:t till)//När någon klickar (går att ta andra också, ex hover) då körs funktionen
    toggleClass(document.getElementById('main_menu'), "active") //togglar mellan aktiv och inaktiv som gör att meny-elementet kommer upp eller försvinner
})

document.getElementById('exit_menu').addEventListener('click', function () { //Kopplar in sig i dokumentet (menu_button är vad man har döpt id:t till)//När någon klickar (går att ta andra också, ex hover) då körs funktionen
    toggleClass(document.getElementById('main_menu'), "active") //togglar mellan aktiv och inaktiv som gör att meny-elementet kommer upp eller försvinner
})

//Flera kopior av samma då det är ett id som bara används en gång annars

var elementExists = document.getElementById("collapsible");         //En if-sats som kollar att elementen finns på sidan
if (typeof(elementExists) != 'undefined' && elementExists != null)
{

    document.getElementById('collapsible').addEventListener('click', function () { //Kopplar in sig i dokumentet (menu_button är vad man har döpt id:t till)//När någon klickar (går att ta andra också, ex hover) då körs funktionen
        toggleClass(document.getElementById('content'), "active") //togglar mellan aktiv och inaktiv som gör att meny-elementet kommer upp eller försvinner
    })

    document.getElementById('recall').addEventListener('click', function () { //Kopplar in sig i dokumentet (menu_button är vad man har döpt id:t till)//När någon klickar (går att ta andra också, ex hover) då körs funktionen
        toggleClass(document.getElementById('content'), "active") //togglar mellan aktiv och inaktiv som gör att meny-elementet kommer upp eller försvinner
    })

    document.getElementById('collapsible1').addEventListener('click', function () { //Kopplar in sig i dokumentet (menu_button är vad man har döpt id:t till)//När någon klickar (går att ta andra också, ex hover) då körs funktionen
        toggleClass(document.getElementById('content1'), "active") //togglar mellan aktiv och inaktiv som gör att meny-elementet kommer upp eller försvinner
    })

    document.getElementById('recall1').addEventListener('click', function () { //Kopplar in sig i dokumentet (menu_button är vad man har döpt id:t till)//När någon klickar (går att ta andra också, ex hover) då körs funktionen
        toggleClass(document.getElementById('content1'), "active") //togglar mellan aktiv och inaktiv som gör att meny-elementet kommer upp eller försvinner
    })

    document.getElementById('collapsible2').addEventListener('click', function () { //Kopplar in sig i dokumentet (menu_button är vad man har döpt id:t till)//När någon klickar (går att ta andra också, ex hover) då körs funktionen
        toggleClass(document.getElementById('content2'), "active") //togglar mellan aktiv och inaktiv som gör att meny-elementet kommer upp eller försvinner
    })

    document.getElementById('recall2').addEventListener('click', function () { //Kopplar in sig i dokumentet (menu_button är vad man har döpt id:t till)//När någon klickar (går att ta andra också, ex hover) då körs funktionen
        toggleClass(document.getElementById('content2'), "active") //togglar mellan aktiv och inaktiv som gör att meny-elementet kommer upp eller försvinner
    })

    document.getElementById('collapsible3').addEventListener('click', function () { //Kopplar in sig i dokumentet (menu_button är vad man har döpt id:t till)//När någon klickar (går att ta andra också, ex hover) då körs funktionen
        toggleClass(document.getElementById('content3'), "active") //togglar mellan aktiv och inaktiv som gör att meny-elementet kommer upp eller försvinner
    })

    document.getElementById('recall3').addEventListener('click', function () { //Kopplar in sig i dokumentet (menu_button är vad man har döpt id:t till)//När någon klickar (går att ta andra också, ex hover) då körs funktionen
        toggleClass(document.getElementById('content3'), "active") //togglar mellan aktiv och inaktiv som gör att meny-elementet kommer upp eller försvinner
    })

    document.getElementById('collapsible4').addEventListener('click', function () { //Kopplar in sig i dokumentet (menu_button är vad man har döpt id:t till)//När någon klickar (går att ta andra också, ex hover) då körs funktionen
        toggleClass(document.getElementById('content4'), "active") //togglar mellan aktiv och inaktiv som gör att meny-elementet kommer upp eller försvinner
    })

    document.getElementById('recall4').addEventListener('click', function () { //Kopplar in sig i dokumentet (menu_button är vad man har döpt id:t till)//När någon klickar (går att ta andra också, ex hover) då körs funktionen
        toggleClass(document.getElementById('content4'), "active") //togglar mellan aktiv och inaktiv som gör att meny-elementet kommer upp eller försvinner
    })

    document.getElementById('collapsible5').addEventListener('click', function () { //Kopplar in sig i dokumentet (menu_button är vad man har döpt id:t till)//När någon klickar (går att ta andra också, ex hover) då körs funktionen
        toggleClass(document.getElementById('content5'), "active") //togglar mellan aktiv och inaktiv som gör att meny-elementet kommer upp eller försvinner
    })

    document.getElementById('recall5').addEventListener('click', function () { //Kopplar in sig i dokumentet (menu_button är vad man har döpt id:t till)//När någon klickar (går att ta andra också, ex hover) då körs funktionen
        toggleClass(document.getElementById('content5'), "active") //togglar mellan aktiv och inaktiv som gör att meny-elementet kommer upp eller försvinner
    })

    document.getElementById('collapsible6').addEventListener('click', function () { //Kopplar in sig i dokumentet (menu_button är vad man har döpt id:t till)//När någon klickar (går att ta andra också, ex hover) då körs funktionen
        toggleClass(document.getElementById('content6'), "active") //togglar mellan aktiv och inaktiv som gör att meny-elementet kommer upp eller försvinner
    })

    document.getElementById('recall6').addEventListener('click', function () { //Kopplar in sig i dokumentet (menu_button är vad man har döpt id:t till)//När någon klickar (går att ta andra också, ex hover) då körs funktionen
        toggleClass(document.getElementById('content6'), "active") //togglar mellan aktiv och inaktiv som gör att meny-elementet kommer upp eller försvinner
    })

}

function toggleClass(element, className) {
    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
    }
    else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
    }
    element.className = classString
} 

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}