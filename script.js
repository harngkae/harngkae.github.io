function changeGreeting() {
    const greetings = ["欢迎再次访问！", "希望你有美好的一天！", "感谢您的光临！"];
    const randomIndex = Math.floor(Math.random() * greetings.length);
    document.getElementById('greeting').innerText = greetings[randomIndex];
}
