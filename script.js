function sendMessage() {
  let input = document.getElementById("userInput");
  let chat = document.getElementById("chat");

  let msg = input.value.toLowerCase();
  chat.innerHTML += "<p><b>You:</b> " + input.value + "</p>";

  let reply = "Ask about courses, fees, admission, or contact.";

  if (msg.includes("course")) reply = "We offer BCA, BSc, BCom, MBA.";
  else if (msg.includes("fees")) reply = "Fees range ₹25,000 – ₹60,000.";
  else if (msg.includes("admission")) reply = "Admission based on merit.";
  else if (msg.includes("contact")) reply = "Contact: 9876543210";

  chat.innerHTML += "<p><b>Bot:</b> " + reply + "</p>";
  input.value = "";
}
