 TimetableFunctionality = () => {
    var lefts = document.querySelectorAll("#PU_Result, #PU_Notice_Board, #PU_Donate, #PUMATE_Policy");
    document.getElementById("PU_Timetable").style.display = "block";
    var length = lefts.length;
    for (var i = 0; i < length; i++) {
        lefts[i].style.display = "none";
    }
}

    ResultFunctionality = () => {
    var lefts = document.querySelectorAll("#PU_Timetable, #PU_Notice_Board, #PU_Donate, #PUMATE_Policy");
    document.getElementById("PU_Result").style.display = "block";
    var length = lefts.length;
    for (var i = 0; i < length; i++) {
        lefts[i].style.display = "none";
    }
}

    NoticeFunctionality = () => {
    var lefts = document.querySelectorAll("#PU_Timetable, #PU_Result, #PU_Donate, #PUMATE_Policy");
    document.getElementById("PU_Notice_Board").style.display = "block";
    var length = lefts.length;
    for (var i = 0; i < length; i++) {
        lefts[i].style.display = "none";
    }
}

    DonateFunctionality = () => {
    var lefts = document.querySelectorAll("#PU_Timetable, #PU_Result, #PU_Notice_Board, #PUMATE_Policy");
    document.getElementById("PU_Donate").style.display = "block";
    var length = lefts.length;
    for (var i = 0; i < length; i++) {
        lefts[i].style.display = "none";
    }
}

    PUMATEPrivacyFunctionality = () => {
    var lefts = document.querySelectorAll("#PU_Timetable, #PU_Result, #PU_Notice_Board, #PU_Donate");
    document.getElementById("PUMATE_Policy").style.display = "block";
    var length = lefts.length;
    for (var i = 0; i < length; i++) {
        lefts[i].style.display = "none";
    }
}
