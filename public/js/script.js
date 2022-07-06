function copyTextClear() {
    var text_clear = document.getElementById("textClear").textContent;
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(text_clear);
}

function redirectLoading() {
    document.location.href = "/loading"
}


