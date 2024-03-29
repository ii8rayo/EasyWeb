
function redirectToHome() {
    // Redirect to the home page
    window.location.href = "html\home.html";
}

document.addEventListener('DOMContentLoaded', function() {
    const serviceMessages = {
      'Passports': 'The "Passports" service involves the issuance, renewal, or replacement of passports for Canadian citizens. Passports are essential travel documents that verify a persons identity and nationality, allowing them to travel abroad for tourism, business, study, or other purposes.',
      'Social Insurance Number (SIN)': 'The "Social Insurance Number (SIN)" service is a crucial identification number issued by the Canadian government for taxation and other purposes. The SIN is a nine-digit number that uniquely identifies individuals in Canada for various government programs and services. We can help you with issuance, renewal, and to update information.',
      'Birth Certificate': 'The "Birth Certificate" service involves the registration and issuance of official documents that record a persons birth details. Birth certificates are essential legal documents used for identification, proof of citizenship, and various administrative purposes. Wen can help you or your child with issuance, regestration, or certified copies.',
      'Death Certificate': 'The certificate includes vital information about the deceased, such as their full name, date of birth, date and place of death, cause of death (if available), and other relevant details. This certificate is often required for legal and administrative purposes, including inheritance matters, insurance claims, and funeral arrangements.',
      'Extending Your Visa': 'The "Visa Extension" service involves the process of extending the validity or duration of a visa or residency permit for Canadian citizens or residents who wish to prolong their stay in a foreign country beyond the initial expiration date permitted by their current visa. Visa extensions are typically sought for various reasons, such as continued employment, further studies, family reunification, medical treatment, or other legitimate purposes.',
      'Reporting a Stolen or Lost Document': 'The "Reporting a Stolen or Lost Document" service involves the process of notifying the relevant authorities about the theft or loss of important documents, such as passports, identification cards, drivers licenses, or other official paperwork. This service is essential for individuals who have had their documents stolen or misplaced to prevent identity theft, fraud, or misuse of personal information',
      'Add / Remove a User to the Vehicle': 'The Add/Remove a User to the Vehicle service involves updating the list of authorized users or owners of a vehicle registered with the relevant authorities. This service allows individuals to add or remove drivers or owners associated with a specific vehicle, ensuring that the vehicles ownership and usage details are accurate and up-to-date according to legal requirements.',
      'Driver License':'The Drivers License service involves the issuance, renewal, or replacement of drivers licenses for individuals who are eligible to drive vehicles on public roads. A drivers license serves as an official government-issued document that grants the holder the legal authority to operate motor vehicles within a specified jurisdiction.',
      'Permission to Move with a Firearm': 'The Permission to Move with a Firearm service involves obtaining authorization from the appropriate authorities to transport or move a firearm from one location to another. This service is typically required when individuals need to transport firearms for legitimate purposes, such as hunting, shooting competitions, or firearm-related activities.',
      'Inquiry about Tickets and Fines': 'The Inquiry about Tickets and Fines service involves accessing information regarding any outstanding tickets, fines, or penalties associated with a persons vehicle or drivers license record. This service allows individuals to inquire about any traffic violations, parking tickets, or other infractions issued against them, enabling them to address and resolve any outstanding fines or penalties.',
      'Number Plates': 'The Number Plates service involves the issuance, replacement, or transfer of license plates for vehicles registered with the relevant authority. License plates, also known as number plates, are unique identifiers assigned to vehicles to display registration information and facilitate identification. This service ensures that vehicles comply with legal requirements for displaying valid and properly registered license plates.',
      // Add messages for other services...
    };
  
    const promptButtons = document.querySelectorAll('.prompt-button');
    promptButtons.forEach(button => {
      button.addEventListener('click', function() {
        const serviceName = this.parentNode.querySelector('h3').textContent;
        const message = serviceMessages[serviceName];
        window.alert(message);
      });
    });
});

document.getElementById("category-select").addEventListener("change", function() {
  var selectedCategory = this.value;
  var messageContainer = document.getElementById("message-container");
  var message = document.getElementById("category-message");

  // Hide the message container by default
  messageContainer.style.display = "none";

  // Show a specific message based on the selected category
  switch (selectedCategory) {

    case "passport":
      message.innerHTML = `
        <p class="message" style="color: white;">
          You've selected Passports. Get assistance with passport applications and renewals. <br><br>
          Requirements:<br>
          <ol class="list" style="color: white;">
            <li class="list-item"> - Proof of Citizenship: Applicants must provide valid proof of Canadian citizenship, such as a birth certificate or certificate of citizenship. </li>
            <li class="list-item"> - Proof of Identity: Valid identification documents, such as a driver's license or government-issued ID, are required to verify the applicant's identity. </li>
            <li class="list-item"> - Passport Photos: Recent passport-sized photos meeting specific requirements regarding size, background, and appearance are necessary for passport applications. </li>
            <li class="list-item"> - Application Form: Applicants need to complete the appropriate passport application form, providing accurate information and signatures where required. </li>
            <li class="list-item"> - Fees: Payment of applicable passport fees is necessary for processing applications. Fee amounts may vary depending on the type of passport, and services requested. </li>
          </ol>
        </p>
      `;
    break;
    
    case "sin":
      message.innerHTML = `
      <p class="message" style="color: white;">
          You've selected Social Insurance Number (SIN). Apply for or replace your Social Insurance Number card.<br><br>
          Requirements: <br>
          <ol class="list" style="color: white;">
            <li class="list-item">- Identity Verification: Applicants must provide valid identifications to verify their identity. Acceptable documents: birth certificate, passport, Canadian citizenship certificate, or PR card.</li>
            <li class="list-item">- Eligibility Documentation: Depending on the applicant's status, documents may be required to establish eligibility for a SIN. (Work permit for temporary residents or proof of citizenship).</li>
            <li class="list-item">- Passport Photos: Recent passport-sized photos meeting specific requirements regarding size, background, and appearance are necessary for passport applications.</li>
            <li class="list-item">- Application Form: Applicants need to complete the appropriate SIN application form, providing accurate information and signatures where required.</li>
            <li class="list-item">- Proof of Address: Some applications may require proof of current address, to ensure accurate delivery of the SIN card.</li>
            <li class="list-item">- Fees: There are no fees associated with applying for a SIN card. </li>
          </ol>
        </p>
      `;
    break;

    case "birth-certificate":
      message.innerHTML = `
      <p class="message" style="color: white;">
          You've selected Birth Certificate. Request a birth certificate for yourself or your child. <br><br>
          Requirements: <br>
          <ol class="list" style="color: white;">
            <li class="list-item"> - Proof of Birth: Parents or legal guardians must provide proof of the child's birth, such as a hospital record, midwife statement, or notification of birth registration. </li>
            <li class="list-item"> - Parental Identification: Parents or legal guardians may need to provide valid identification documents to verify their identities and relationship to the child.  </li>
            <li class="list-item"> - Application Form: Depending on the jurisdiction, individuals may need to complete an application form for birth registration or birth certificate issuance.  </li>
            <li class="list-item"> - There may be fees with registering a birth and obtaining certified copies of the birth certificate. Fee amount depends on the jurisdiction and the number of copies requested. </li>
          </ol>
        </p>
      `;
    break;
    
    case "driver-license":
      message.textContent = "You've selected Driver License. Apply for or renew your driver's license.";
    break;

    case "death":
      message.textContent = "You've selected Death Certificate. Obtain a death certificate for a deceased family member.";
    break;
    case "visa":
      message.textContent = "You've selected Extending Your Visa. Extend your visa for continued stay in the country.";
    break;
    case "firearm":
      message.textContent = "You've selected Permission to Move with a Firearm. Get authorization to transport firearms.";
    break;
    case "vehicle-power":
      message.textContent = "You've selected Add/Remove a User to the Vehicle. Update vehicle user permissions.";
    break;
    case "stolen-lost-doc":
      message.textContent = "You've selected Reporting a Stolen or Lost Document. Report and replace stolen or lost documents.";
    break;
    case "fines-tickets":
      message.textContent = "You've selected Inquiry about Tickets and Fines. Check for outstanding fines and tickets.";
    break;
    case "number-plates":
      message.textContent = "You've selected Number Plates. Get new, replace, or transfer license plates for vehicles.";
    break;

    default:
      // If none of the predefined categories are selected, hide the message container
      messageContainer.style.display = "none";
    break;
  }

  // Show the message container if a specific category is selected
  if (selectedCategory !== "") {
    messageContainer.style.display = "block";
  }
});

// Get the file input element
const fileInput = document.getElementById('attachment');

// Get the file list container
const fileListContainer = document.getElementById('file-list');

// Add event listener to listen for changes in the file input
fileInput.addEventListener('change', function() {
  // Iterate through each selected file and add it to the list
  for (const file of this.files) {
    const listItem = document.createElement('li');
    listItem.textContent = file.name;
    fileListContainer.appendChild(listItem);
  }
});

function checkStatus() {
  // Get the application number entered by the user
  var applicationNumber = document.getElementById("applicationNumber").value;

  // Here you would typically make an AJAX request to your server to get the status
  // For demonstration purposes, let's assume the status is retrieved from a function call
  var status = getStatus(applicationNumber);

  // Update the status paragraph with the retrieved status
  document.getElementById("applicationStatus").textContent = status;
}

// Function to retrieve the status (for demonstration purposes)
function getStatus(applicationNumber) {
  // Here you would typically make an AJAX request to your server to get the status
  // For demonstration purposes, let's just return a random status

  var label = ["Your application status is: "]
  var statuses = ["Approved ", "Under Process ", "Rejected " ];
  var randomIndex = Math.floor(Math.random() * statuses.length);
  return label + statuses[randomIndex];
}


function downloadPDF() {
  var selectElement = document.getElementById("category-select");
  var selectedValue = selectElement.value;
  var filenames = [];

  // Determine the filenames based on the selected value
  switch (selectedValue) {
      case "passport":
          // Provide all passport PDF filenames
          filenames = ["AdultPassport.pdf", "ChildPassport.pdf", "RenewPassport.pdf"];
          break;
      case "sin":
          filenames = ["SIN Application Form.pdf"];
          break;
      case "birth-certificate":
          filenames = ["ontario_birth.pdf"];
          break;
      // Add cases for other options as needed
      default:
          filenames = ["default.pdf"];
  }

  // Loop through each filename and trigger download
  filenames.forEach(function(filename) {
      // Construct the path to the PDF file
      var filePath = "assets/" + filename;

      // Create an anchor element to trigger the download
      var link = document.createElement("a");
      link.href = filePath;
      link.download = filename;
      link.click();
  });
}

// ---------------------------------------- CARDS MOVER -------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const cards = document.querySelectorAll(".card");
  let currentCardIndex = 0;

  showCard(currentCardIndex);

  prevBtn.addEventListener("click", function() {
    currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
    showCard(currentCardIndex);
  });

  nextBtn.addEventListener("click", function() {
    currentCardIndex = (currentCardIndex + 1) % cards.length;
    showCard(currentCardIndex);
  });

  function showCard(index) {
    cards.forEach((card, i) => {
      if (i === index) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });
  }
});







