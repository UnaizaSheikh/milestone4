var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //collect inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact ').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //generate content of resume
    var resumeHTML = "\n    <h2><b> Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>name :</b><span contenteditable= \"true\">".concat(name, "</span></p>\n    <p><b>email :</b><span contenteditable= \"true\">").concat(email, "</span></p>\n    <p><b>contact :</b><span contenteditable= \"true\"").concat(contact, "</span></p>\n    \n    <h3>education<h3>\n    <P contenteditable= \"true\">").concat(education, "</P>\n    \n    <h3>experience<h3>\n    <P contenteditable= \"true\">").concat(experience, "</P>\n    \n    <h3>skills<h3>\n    <P contenteditable= \"true\">").concat(skills, "</P>\n    ");
    //display generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("something went wrong !");
    }
});
