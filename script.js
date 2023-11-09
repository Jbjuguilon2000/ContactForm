const form = document.querySelector("form"),
  statusText = form.querySelector(".button-message");

form.onsubmit = (e) => {
  e.preventDefault();
  statusText.style.display = "block";

  let xhr = new XMLHttpsRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = xhr.response;
      console.log(response);
      if (
        response == "Email and Message is required!" ||
        response == "Enter a valid email address!" ||
        response == "Failed to send the message!"
      ) {
        statusText.style.color = "red";
        statusText.innerText = response;
      } else {
        form.reset();
        setTimeout(() => {
          statusText.style.display = "none";
        }, 3000);
      }
      statusText.innerText = response;
    }
  };
  let formData = new FormData(form);
  xhr.send(formData);
};
