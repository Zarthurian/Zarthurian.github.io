document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    const chatbox = document.getElementById('chatbox');
    if (userInput === "") {
      chatbox.innerHTML += `<br><strong>User:</strong><br> ...<br>`;
    }
    else{
      chatbox.innerHTML += `<br><strong>User:</strong><br> ${userInput}<br>`;
    }
    
    let tr = userInput.includes("translate");
    let g = userInput.includes("generate");
    let he = userInput.includes("hello");
    let hi = userInput.includes("hi");
    let Dime = userInput.includes("dime");
    let hw = userInput.includes("homework");
    let vr = userInput.includes("Verity");
    let mn = userInput.includes("mint");
    let ha = userInput.includes("HATE");
    let zr = userInput.includes("ZaRIMa");
    if (tr === true) {
      chatbox.innerHTML += `<br><strong>Zacho:</strong><br> Sorry, I don't speak your language.<br>`;
    }
    else if (g === true) {
      chatbox.innerHTML += `<br><strong>Zacho:</strong><br> I'm not generating ANYTHING for you, DIY means Do It Yourself!<br>`;
    } 
    else if (Dime === true) {
      chatbox.innerHTML += `<br><strong>Zacho:</strong><br> Dime: The surprising alternative to armedillos!<br>`;
    }
     else if (hw === true) {
      chatbox.innerHTML += `<br><strong>Zacho:</strong><br> What am I? Your professor? You're lazier than a rock<br>`;
    }
     else if (vr === true) {
      chatbox.innerHTML += `<br><strong>Zacho:</strong><br> I'm not based on Verity, I'm actually based on another videogame AI assistant<br>`;
    }
     else if (mn === true) {
      chatbox.innerHTML += `<br><strong>Zacho:</strong><br> My breath doesn't stink! *smells breath. Oh wait, it does.<br>`;
    }
     else if (zr === true) {
      chatbox.innerHTML += `<br><strong>Zacho:</strong><br> ZaRIMa? that's the old AI assistant. I'm the newer and cooler one!<br>`;
    }
    else if (hi === true) {
      chatbox.innerHTML += `<br><strong>Zacho:</strong><br> Hello! My name's Zacho! your AI virtual assistant! I'm here to help you with ANYTHING you need to know about Zachary!<br>`;
    }
    else if (he === true) {
      chatbox.innerHTML += `<br><strong>Zacho:</strong><br> Hello! My name's Zacho! your AI virtual assistant! I'm here to help you with ANYTHING you need to know about Zachary!<br>`;
    }
    else if (ha === true) {
      chatbox.innerHTML += `<br><strong><div>Zacho:</strong><br> Rude!<br>`;
    }
    else{
      chatbox.innerHTML += `<br><strong><div>Zacho:</strong><br> I don't know...<br>`;
    }
    document.getElementById('user-input').value = ''; // Clear input field
});