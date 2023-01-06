var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+919836578565'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>9836578565</label></div> </a> <a href='debayudh.mitra@yahoo.in'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/debamitr1012'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/919836578565'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/deba10'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://www.instagram.com/deba_mitr/'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/debayudh-mitra/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/DebayudhMitra'sResume.png' class='DebayudhMitra'sResume'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Debayudh Mitra's Resume.pdf</label></div><a href='assets/Debayudh Mitra's Resume.pdf' download='Debayudh Mitra's Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/place/22.6635798,88.3458721,21z/data=!4m5!3m4!1s0x39f89ce1200b3aaf:0x54da4372d932dc57!8m2!3d22.6635629!4d88.3458285' class='map'></iframe></div><label class='add'><address>73 Joy Krishna Street<br>Uttarpara, Hooghly-712258<br>Kolkata, West Bengal, INDIA</address>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}
function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}
function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}
function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}
function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}
function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}
function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there,<br><br>My name is <span class='bold'><a class='alink'>Debayudh Mitra</a>.</span><br><br>I am a Computer Science Engineering student at <span class='bold'>Institute of Engineering & Management Kolkata.</span><br><br>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the engineering sphere.<br><br>Send <span class='bold'>'hello'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "hello":
            sendTextMessage("<span class='sk'>Send keyword to get what you want to know about me.<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I am currently pursuing B.Tech degree in Computer Science Engineering.<br><br>I can comfortably write code in following languages :<br><span class='bold'>Python<br>Java<br>C++<br>SQL<br></span><br><br>I've experiance with following frameworks :<span class='bold'><br>Jupyter<br>Numpy<br>Pandas<br>Plotly</span><br><br>I use <span class='bold'>Windows 11</span> as daily driver on my HP Laptop 14s<br>OS: Windows<br>Favourite IDE: VSCode, Anaconda, Google Colab</span>");
            break;
        case "education":
            sendTextMessage("I am currently pusuing B.Tech degree in Computer Science Engineering from Institute of Engineering & Management Kolkata<br>Passing Year: 2024<br><br>I have completed my Higher Secondary School from Pearls Of God School Hindmotor<br>Passing Year: 2020<br><br>I have completed my Secondary School from Pearls Of God School Hindmotor<br>Passing Year: 2018");
            break;
        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>Designed and Developed by <a class='alink' target='_blank' href='https:\/\/instagram.com/deba_mitr/'><span class='bold'>Debayudh Mitra</a></span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/debamitr1012'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you.<br>Send 'hello' to know more about usage.");
            }, 2000);
            break;
    }
}
function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}
function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}
function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Let's catch up more on LinkedIn, GitHub and other social medias like Facebook, Instagram. Thank you for visiting my portfolio.";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}
function playSound() {
    audio.play();
}