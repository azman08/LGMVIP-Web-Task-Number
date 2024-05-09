const registrationForm = document.getElementById("registrationForm");
const enrollmentDetails = document.getElementById("enrollmentDetails");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const userData = getUserData();
  displayEnrollmentDetails(userData);
});

function getUserData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const skills = document.getElementById("skills").value;
  const image = document.getElementById("image").files[0];

  return { name, email, gender, skills, image };
}

function displayEnrollmentDetails(userData) {
  const enrollmentDiv = document.createElement("div");
  enrollmentDiv.classList.add("enrollment-item");

  enrollmentDiv.innerHTML = `
        <h3>Student Enrollment Form</h3>
        <p><strong>Name:</strong> ${userData.name}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <p><strong>Gender:</strong> ${userData.gender}</p>
        <p><strong>Skills:</strong> ${userData.skills}</p>
        <img src="${URL.createObjectURL(userData.image)}" alt="Student Image">
    `;

  enrollmentDetails.appendChild(enrollmentDiv);
}

window.addEventListener("DOMContentLoaded", () => {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  if (userData) {
    displayEnrollmentDetails(userData);
  }
});
