function copyIP() {
    const copyIP = document.createElement('textarea');
    copyIP.value = "play.cascene.net";
    document.body.appendChild(copyIP);
    copyIP.select();
    document.execCommand('copy');
    document.body.removeChild(copyIP);
}
