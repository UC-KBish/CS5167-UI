function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === name) {
            return JSON.parse(decodeURIComponent(cookie[1]));
        }
    }
    return null;
}

export default getCookie