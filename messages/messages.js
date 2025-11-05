function removeSpecialChars(str) {
  return str.replace(/[^a-zA-Z0-9\s.!?]/g, '');
}

async function submitMessage() {
    val = document.getElementById("messageText").value
    console.log(val)
    document.getElementById("messageText").value = null;

    val = val.toLowerCase();
    val = removeSpecialChars(val);
    document.getElementById("ack").innerHTML = `Message submitted -- "${val}"`

    const response = await fetch("https://hack-box.vercel.app/syndromeMessages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: val}),
    });

    const data = await response.json();
    console.log(data);
}