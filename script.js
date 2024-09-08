// Sections
var workExp = document.querySelector(".workexp-data");
var education = document.querySelector(".education-data");
var skills = document.querySelector(".skills-data");
// Buttons
var workExpBtn = document.getElementById("workexp-btn");
var skillsBtn = document.getElementById("skills-btn");
var educationBtn = document.getElementById("education-btn");
// Function to handle Work Experience section expansion
function workExpExpander() {
    workExpBtn.addEventListener("click", function () {
        var workExpContent = "\n            <label class=\"labels\" for=\"company\">Enter Your Company Name: </label>\n            <br>\n            <input class=\"inputs\" type=\"text\" placeholder=\"Institution\" id=\"company\">\n            <br>\n            <label class=\"labels\" for=\"position\">Enter Your Position: </label>\n            <br>\n            <input class=\"inputs\" type=\"text\" placeholder=\"Position\" id=\"position\"> \n            <br>\n            <label class=\"labels date-labels\" for=\"work-sdate\">Input Start Date: </label>\n            <br class=\"display-hidden\">\n            <input class=\"workdates\" type=\"date\" name=\"work-startdate\" id=\"work-sdate\">\n            <br>\n            <label class=\"labels date-labels\" for=\"edate\">Input End Date: </label>\n            <br class=\"display-hidden\">\n            <input class=\"workdates\" type=\"date\" name=\"enddate\" id=\"edate\">\n            <br>\n            <label class=\"labels\" for=\"work-desc\">Description: </label>\n            <br>\n            <textarea class=\"inputs\" name=\"work-description\" id=\"work-desc\" placeholder=\"Description\"></textarea> \n            <br>";
        workExp.innerHTML += workExpContent;
    });
}
// Function to handle Skills section expansion
function skillsExpander() {
    skillsBtn.addEventListener("click", function () {
        var skillsContent = "\n            <label class=\"labels\" for=\"skill\">Skill Name: </label>\n            <br>\n            <input class=\"inputs\" type=\"text\" placeholder=\"Skill\" id=\"skill\">\n            <br>\n            <label class=\"labels\" for=\"skill-lvl\">Skill Level: </label>\n            <br>\n            <input class=\"inputs\" type=\"text\" placeholder=\"Skill Level\" id=\"skill-lvl\"> \n            <br>";
        skills.innerHTML += skillsContent;
    });
}
// Function to handle Education section expansion
function educationExpander() {
    educationBtn.addEventListener("click", function () {
        var educationContent = "\n            <label class=\"labels\" for=\"institution\">Enter Your Institution Name: </label>\n            <br>\n            <input class=\"inputs\" type=\"text\" placeholder=\"Institution\" id=\"institution\">\n            <br>\n            <label class=\"labels\" for=\"degree\">Enter Your Degree: </label>\n            <br>\n            <input class=\"inputs\" type=\"text\" placeholder=\"Degree\" id=\"degree\"> \n            <br>\n            <label class=\"labels date-labels\" for=\"sdate\">Input Start Date: </label>\n            <br class=\"display-hidden\">\n            <input class=\"edudates\" type=\"date\" name=\"startdate\" id=\"sdate\">\n            <br>\n            <label class=\"labels date-labels\" for=\"edate\">Input End Date: </label>\n            <br class=\"display-hidden\">\n            <input class=\"edudates edudate-last\" type=\"date\" name=\"enddate\" id=\"edate\">\n            <br>";
        education.innerHTML += educationContent;
    });
}
// Initialize the expanders
educationExpander();
skillsExpander();
workExpExpander();
