<!-- Include SignalR JavaScript library -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/microsoft-signalr/2.2.2/signalr.min.js"></script>

<script>
    const connection = new signalR.HubConnectionBuilder()
        .withUrl("/appHub")
        .build();

    connection.on("ReceiveMessage", (message) => {
        const li = document.createElement("li");
        li.textContent = message;
        document.getElementById("messagesList").appendChild(li);
    });

    document.getElementById("sendButton").addEventListener("click", () => {
        const message = document.getElementById("messageInput").value;
        connection.invoke("SendMessage", message).catch(err => console.error(err));
    });

    document.getElementById("closeButton").addEventListener("click", () => {
        connection.invoke("CloseApplication").catch(err => console.error(err));
    });

    connection.start().catch(err => console.error(err));
</script>
