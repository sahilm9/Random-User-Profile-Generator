import $ from 'jquery';
/*
async function help in simplify writing the asynchronous code
*/
async function getUserProfile(){
  // Store the url of api
  let url = 'https://randomuser.me/api/';
  /*
  If a promise is rejected using await, an error will be thrown, so used
  try/catch statements to handle errors
  */
  try {
    /*
    await pauses the execution of async function and is followed by a promise/
    The await keyword waits for the promise to resolve and then resumes the
    async function's execution and returns the resolved value.
    */
    let userInfo = await $.getJSON(url);
    /*
    Below line does not run until the promise is resolved
    Simplify by the access to each property by storing till center property
    */
    let data = userInfo.results[0];
    // call the updateProfile with the data
    updateProfile(data);
  } catch (e) {
    // If anything goes wrong, alert the user with statusText and status
    alert(`${e.statusText} ${e.status}`);
  }
}
// A function to updateProfile
function updateProfile(data){
  // call the deleteContent function
  deleteContent();
  // prepend the div to container
  $(".container").prepend(`<div class="details">`);
  // append paragraph for name to details
  $(".details").append(`<p class="details-name"><strong>Name:</strong> ${data.name.first} ${data.name.last}</p>`);
  // append paragraph for username to details
  $(".details").append(`<p class="details-user-name"><strong>Username:</strong> ${data.login.username}</p>`);
  // append paragraph for email to details
  $(".details").append(`<p class="details-email"><strong>Email:</strong> ${data.email} </p>`);
  // append paragraph for gender to details
  $(".details").append(`<p class-"details-gender"><strong>Gender:</strong> ${data.gender}</p>`);
  // append paragraph for address to details
  $(".details").append(`<p class-"details-address"><strong>Address:</strong> ${data.location.street} ${data.location.city} ${data.location.state} ${data.location.postcode} </p>`);
  // prepend the img to container
  $(".container").prepend(`<img class="avatar" src=${data.picture.large}>`);
}
// A function to delete the img and details div
function deleteContent(){
  $(".container img.avatar").remove();
  $(".container .details").remove();
}
// listen for click event on button and call the getUserProfile function
$(".btn").on("click", getUserProfile);