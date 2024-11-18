document.getElementById("resumeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById("nameInput").value || "Name not provided";
    const jobTitle = document.getElementById("jobTitleInput").value || "Job title not provided";
    const about = document.getElementById("aboutInput").value || "About not provided";
    const email = document.getElementById("emailInput").value || "Email not provided";
    const phone = document.getElementById("phoneInput").value || "Phone not provided";
    const address = document.getElementById("addressInput").value || "Address not provided";
    const expertise = document.getElementById("expertiseInput").value.split(",").map(e => e.trim()) || [];
    const hobbies = document.getElementById("hobbiesInput").value.split(",").map(h => h.trim()) || [];
    const skills = document.getElementById("skillsInput").value.split(",").map(s => s.trim()) || [];
    const workExperience = document.getElementById("workExperienceInput").value || "No experience provided";
    const education = document.getElementById("educationInput").value || "No education provided";

    // Set data in resume preview
    document.getElementById("name").innerText = name;
    document.getElementById("jobTitle").innerText = jobTitle;
    document.getElementById("about").innerText = about;
    document.getElementById("workExperience").innerText = workExperience;
    document.getElementById("educationInfo").innerText = education;

    // Add contact info
    const contactInfo = document.getElementById("contactInfo");
    contactInfo.innerHTML = `<li>Email: ${email}</li><li>Phone: ${phone}</li><li>Address: ${address}</li>`;

    // Add expertise
    const expertiseList = document.getElementById("expertise");
    expertiseList.innerHTML = expertise.map(e => `<li>${e}</li>`).join('');

    // Add hobbies
    const hobbiesList = document.getElementById("hobbies");
    hobbiesList.innerHTML = hobbies.map(h => `<li>${h}</li>`).join('');

    // Add skills
    const skillsList = document.getElementById("skillsList");
    skillsList.innerHTML = skills.map(s => `<li>${s}</li>`).join('');

    // Handle profile image upload
    const profileImageInput = document.getElementById("profileImageInput");
    if (profileImageInput.files && profileImageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const profileImage = document.getElementById("profileImage");
            profileImage.src = e.target.result;
            profileImage.style.display = 'block';
        };
        reader.readAsDataURL(profileImageInput.files[0]);
    }

    // Show the resume
    document.querySelector(".input-form").style.display = 'none';
    document.querySelector(".resume").style.display = 'block';
});

document.getElementById("downloadPdf").addEventListener("click", function() {
    const element = document.getElementById("resumeContent");
    html2pdf()
        .from(element)
        .save('resume.pdf');
});
