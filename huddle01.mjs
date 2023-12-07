async function createMeeting(meetingTitle, hostWalletAddress) {
    const API_KEY = "DcGKZ3a7sf854w98KzR46-gtNLebOhDT";
    const apiUrl = "https://api.huddle01.com/api/v1/create-iframe-room";

    const requestBody = {
        title: meetingTitle,
        hostWallets: [hostWalletAddress]
    };
    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            'x-api-key': API_KEY,
        },
        body: JSON.stringify(requestBody),
    });
    const responseData = await response.json();
    console.log("Response:", responseData);
}

await createMeeting("Music Huddle", "0x4Ac8f777fB3534B0db123daFd110aE07150F0Cf4");


