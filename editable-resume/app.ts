var form = document.getElementById('resume-form') as HTMLFormElement;
var resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

//handle form submission
form.addEventListener('submit',(event:Event) =>{
    event.preventDefault();
    //collect inputs
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const contact= (document.getElementById('contact ') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills= (document.getElementById('skills') as HTMLInputElement).value

    //generate content of resume
    const resumeHTML = `
    <h2><b> Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>name :</b><span contenteditable= "true">${name}</span></p>
    <p><b>email :</b><span contenteditable= "true">${email}</span></p>
    <p><b>contact :</b><span contenteditable= "true"${contact }</span></p>
    
    <h3>education<h3>
    <P contenteditable= "true">${education}</P>
    
    <h3>experience<h3>
    <P contenteditable= "true">${experience}</P>
    
    <h3>skills<h3>
    <P contenteditable= "true">${skills}</P>
    ` ;
    //display generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else{
        console.error(`something went wrong !`)
    }
     
    
});