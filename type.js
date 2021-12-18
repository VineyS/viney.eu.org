const typed = document.querySelector(".typed");
const cursor = document.querySelector('.cursor');
const text = ['Hello, I am Viney Sunu', 'Hola, soy Viney Sunu', 'Bonjour, je suis Viney Sunu', 'Salve, ego sum Viney Sunu', 'Здравейте, аз съм Винеи Суну', 'Привет, я Вини Суну', 'नमस्ते, मैं हूं विनी सुनु', 'ഹായ്, ഞാൻ വിനി സുനു', 'مرحبًا ، أنا فيني سونو'];
const t_delay = 200;
const e_delay = 100;
const n_delay = 2000;
let i = 0;
let char = 0;
function startTyping() {
    if (char < text[i].length) {
        if (!cursor.classList.contains("typing")) cursor.classList.add("typing");
        typed.textContent += text[i].charAt(char);
        char++;
        setTimeout(startTyping, t_delay);
    }
    else {
        cursor.classList.remove("typing");
        setTimeout(clearTyping, n_delay);
    }
}

function clearTyping() {
	if (char > 0) {
    if(!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typed.textContent = text[i].substring(0, char-1);
    char--;
    setTimeout(clearTyping, e_delay);
  } 
  else {
    cursor.classList.remove("typing");
    i++;
    if(i>=text.length) i=0;
    setTimeout(startTyping, t_delay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { 
    if(text.length) setTimeout(startTyping, n_delay + 250);
  });
