function checkCreds() {
    //Box to store First Names
    var firstName = document.getElementById("fName").value;
    //Box to store Last Names
    var lastName = document.getElementById("lName").value;
    //Box to store badge ID
    var badgeNumb = document.getElementById("badgeID").value;
    //Displays Full Name when is granted to page
    var fullName = firstName + " " + lastName;

    //If input names or badge ID are incorrect display error
    if (fullName.length > 20 || fullName.length == 1) {
        document.getElementById("loginStatus").innerHTML = "Full Name has too many characters, Try again.";
    }
    else if (badgeNumb > 999 || badgeNumb < 1) {
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number.";
    }
    else {
        //if they're correct direct to programming data buttons
        alert("Access granted! Welcome " + fullName);
        location.replace("programming buttons.html");
    }

} 