//PAGE FormulaireAdd
    //Boite dialogue

//initalise laboite de dialogue
$("#openDialog").click(function () {
    $("#collapseForm").collapse("show");
});

//ferme la boite de dialogie
$("#closeDialog").click(function () {
    $("#collapseForm").collapse("hide");
});

//chagement de la boite dialogue
$("#boiteDialogue").dialog({
    autoOpen: false,
    modal: true,
    buttons: {

        Oui: function () {
            $(this).dialog("close");
            window.location.href = "Page_Principale.html";
        },
        Non: function () {
            $(this).dialog("close");
        }
    }
});

//Fonction qui vas enclancher la boite de dialogue
//ATTENTION J,ai une erreur que je ne comprend pas 
$(document) .ready(function () {
    $("#openDialog").click(function () {
        $("#collapseForm").collapse("show");
    });
    $("#boiteDialogue").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            Oui: function () {
                $(this).dialog("close");
                window.location.href = "Page_Principale.html";
            },
            Non: function () {
                $(this).dialog("close");
            }
        }
    });
    $("#closeDialog").click(function () {
        $("#collapseForm").collapse("hide");
    });
})