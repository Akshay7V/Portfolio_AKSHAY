    const toggle = document.getElementById("chat-toggle");
    const chat = document.getElementById("chat-container");
    const closeBtn = document.getElementById("close-chat");
    const sendBtn = document.getElementById("send-btn");
    const input = document.getElementById("user-input");
    const body = document.getElementById("chat-body");

    toggle.onclick = () => {
        chat.style.display = "flex";
    };

    closeBtn.onclick = () => {
        chat.style.display = "none";
    };

    const responses = {

    hello:"Hello 👋",
    hi:"Hi there!",
    hey:"Hey 👋",

    name:"I'm Akshay's Portfolio Assistant.",

    skills:"I know Java, Spring Boot, SQL, HTML, CSS, JavaScript, AI, OpenCV and Machine Learning.",

    education:"I'm currently pursuing B.Tech in Computer Science.",

    projects:"I have developed AI projects, Java backend projects, OpenCV applications and web applications.",

    contact:"Email: yourmail@gmail.com",

    resume:"You can download my resume from the Resume section.",

    github:"Visit my GitHub profile from the Contact page.",

    linkedin:"Visit my LinkedIn profile from the Contact page.",

    experience:"Currently building AI and Java projects while improving backend development skills."

    };

    function botReply(message){

        message = message.toLowerCase();

        let reply = "Sorry, I don't understand that. Try asking about Skills, Projects, Education or Contact.";

        for(let key in responses){

            if(message.includes(key)){
                reply = responses[key];
                break;
            }

        }

        return reply;

    }

    function sendMessage(){

        const text = input.value.trim();

        if(text==="") return;

        body.innerHTML += `
            <div class="user-message">${text}</div>
        `;

        input.value="";

        body.scrollTop = body.scrollHeight;

        setTimeout(()=>{

            body.innerHTML += `
                <div class="bot-message">
                    ${botReply(text)}
                </div>
            `;

            body.scrollTop = body.scrollHeight;

        },800);

    }

    sendBtn.onclick = sendMessage;

    input.addEventListener("keypress",function(e){

        if(e.key==="Enter")
            sendMessage();

    });
