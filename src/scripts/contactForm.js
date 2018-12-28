console.log("contactForm.js");
// -----------------------------------------------------------------------------
//                              INSTRUCTIONS:
// When filled out and a submit button is pressed, this component adds a new contact to storage. It should import the ContactCollection component.
// -----------------------------------------------------------------------------
//                              TO DO:
// Create a form with contact input fields and a submit button
    // Optional feature: add an edit button to modify an existing contact
// -----------------------------------------------------------------------------

//                              BEGIN FORM

let createForm = document.getElementById("display-container");
createForm.innerHTML= `
<input id="first-name-input" type="text" placeholder="First Name">
<input id="last-name-input" type="text" placeholder="Last Name">
<input id="phone-input" type="text" placeholder="Phone">
<button id="submit-form-btn">Submit</button>`




//                               END FORM

