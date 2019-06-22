function gotoPage(oForm) {
    var college = oForm.elements["pumateCollegeSelect"].options.selectedIndex;
    var stream = oForm.elements["pumateStreamSelect"].options.selectedIndex;
    var semester = oForm.elements["pumateSemesterSelect"].options.selectedIndex;

        if (college === 1 && stream === 1 && semester === 1) {
            window.location = "./html/cse/cse_sem1/cse_sem1.html";
            return false;
        }

        if(college===1 && stream===1 && semester===2) {
            window.location = "./html/cse/cse_sem2/cse_sem2.html";
            return false;
        } 

        if (college === 1 && stream === 1 && semester === 3) {
            window.location = "./html/cse/cse_sem3/cse_sem3.html";
            return false;
        }

        if (college === 1 && stream === 1 && semester === 4) {
            window.location = "./html/cse/cse_sem4/cse_sem4.html";
            return false;
        }

        if (college === 1 && stream === 1 && semester === 5) {
            window.location = "./html/cse/cse_sem5/cse_sem5.html";
            return false;
        }

        if (college === 1 && stream === 1 && semester === 6) {
            window.location = "./html/cse/cse_sem6/cse_sem6.html";
            return false;
        }

        if (college === 1 && stream === 1 && semester === 7) {
            window.location = "./html/cse/cse_sem7/cse_sem7.html";
            return false;
        }

        if (college === 1 && stream === 1 && semester === 8) {
            window.location = "./html/cse/cse_sem8/cse_sem8.html";
            return false;
        }       

        
        
                if (college === 1 && stream === 4 && semester === 1) {
                    window.location = "./html/it/it_sem1/it_sem1.html";
                    return false;
                }

                if (college === 1 && stream === 4 && semester === 2) {
                    window.location = "./html/it/it_sem2/it_sem2.html";
                    return false;
                }

                if (college === 1 && stream === 4 && semester === 3) {
                    window.location = "./html/it/it_sem3/it_sem3.html";
                    return false;
                }

                if (college === 1 && stream === 4 && semester === 4) {
                    window.location = "./html/it/it_sem4/it_sem4.html";
                    return false;
                }

                if (college === 1 && stream === 4 && semester === 5) {
                    window.location = "./html/it/it_sem5/it_sem5.html";
                    return false;
                }

                if (college === 1 && stream === 4 && semester === 6) {
                    window.location = "./html/it/it_sem6/it_sem6.html";
                    return false;
                }

                if (college === 1 && stream === 4 && semester === 7) {
                    window.location = "./html/it/it_sem7/it_sem7.html";
                    return false;
                }

                if (college === 1 && stream === 4 && semester === 8) {
                    window.location = "./html/it/it_sem8/it_sem8.html";
                    return false;
                }


                                if (college === 1 && stream === 2 && semester === 1) {
                                    window.location = "./html/ece/ece_sem1/ece_sem1.html";
                                    return false;
                                }

                                if (college === 1 && stream === 2 && semester === 2) {
                                    window.location = "./html/ece/ece_sem2/ece_sem2.html";
                                    return false;
                                }

                                if (college === 1 && stream === 2 && semester === 3) {
                                    return false;
                                    window.location = "./html/ece/ece_sem3/ece_sem3.html";
                                }

                                if (college === 1 && stream === 2 && semester === 4) {
                                    window.location = "./html/ece/ece_sem4/ece_sem4.html";
                                    return false;
                                }

                                if (college === 1 && stream === 2 && semester === 5) {
                                    window.location = "./html/ece/ece_sem5/ece_sem5.html";
                                    return false;
                                }

                                if (college === 1 && stream === 2 && semester === 6) {
                                    window.location = "./html/ece/ece_sem6/ece_sem6.html";
                                    return false;
                                }

                                if (college === 1 && stream === 2 && semester === 7) {
                                    window.location = "./html/ece/ece_sem7/ece_sem7.html";
                                    return false;
                                }

                                if (college === 1 && stream === 2 && semester === 8) {
                                    window.location = "./html/ece/ece_sem8/ece_sem8.html";
                                    return false;
                                }

                                                if (college === 1 && stream === 3 && semester === 1) {
                                                    window.location = "./html/mech/mech_sem1/mech_sem1.html";
                                                    return false;
                                                }

                                                if (college === 1 && stream === 3 && semester === 2) {
                                                    window.location = "./html/mech/mech_sem2/mech_sem2.html";
                                                    return false;
                                                }

                                                if (college === 1 && stream === 3 && semester === 3) {
                                                    window.location = "./html/mech/mech_sem3/mech_sem3.html";
                                                    return false;
                                                }

                                                if (college === 1 && stream === 3 && semester === 4) {
                                                    window.location = "./html/mech/mech_sem4/mech_sem4.html";
                                                    return false;
                                                }

                                                if (college === 1 && stream === 3 && semester === 5) {
                                                    window.location = "./html/mech/mech_sem5/mech_sem5.html";
                                                    return false;
                                                }

                                                if (college === 1 && stream === 3 && semester === 6) {
                                                    window.location = "./html/mech/mech_sem6/mech_sem6.html";
                                                    return false;
                                                }

                                                if (college === 1 && stream === 3 && semester === 7) {
                                                    window.location = "./html/mech/mech_sem7/mech_sem7.html";
                                                    return false;
                                                }

                                                if (college === 1 && stream === 3 && semester === 8) {
                                                    window.location = "./html/mech/mech_sem8/mech_sem8.html";
                                                    return false;
                                                }


    else {
        alert('This Selection is not Available!');
    }
}

function gotoPageSelect(select) {
    if(select.selectedIndex !== 1) {
        alert('Sorry! This Feature is in Development. It will be Coming Soon!!');
    }
}
