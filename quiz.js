const questions = [
    { 
        q: "You're lost in a city you've never been to. What do you do?", 
        a: ["Find someone and ask for directions", "Open maps, retrace my steps", "Just keep walking, I'll figure it out", "Panic, probably"],
        scores: [[0,1], [0,1], [5,1], [1,2, 4,1]]
    },
    { 
        q: "Big test tomorrow, or maybe a conversation you've been dreading. How do you deal?", 
        a: ["Ask someone who's done it before", "Study or prep until I can't anymore", "Show up and see what happens", "Avoid it until I can't"],
        scores: [[0,1], [0,1], [6,1], [2,1, 3,1]]
    },
    { 
        q: "When you really want something, does logic even matter?",
        a: ["Yeah, I think before I act", "Depends on the situation", "Not really, I just go for it", "Logic? What's that?"],
        scores: [[0,1], [0,1], [1,1], [1,3]]
    },
    { 
        q: "New show drops. You love it. What happens?", 
        a: ["Watch an episode or two a night", "Finish it in a week maybe", "Gone by 4am", "It's all I think about now"],
        scores: [[0,1], [0,1], [2,2], [2,3, 1,1]]
    },
    { 
        q: "Friend wants to borrow something you never use. What's going through your head?", 
        a: ["Yeah take it, I don't care", "Fine but I want it back", "Ugh, but what if I need it later", "Just go buy your own"],
        scores: [[0,2], [0,1], [3,2], [3,3, 8,1]]
    },
    { 
        q: "Someone embarrassed you in front of people. It was an accident. A year later, how do you feel?", 
        a: ["Forgot about it", "I remember but whatever", "Still kind of annoyed", "Waiting to return the favor"],
        scores: [[0,2], [0,1], [4,2], [4,3, 6,1]]
    },
    { 
        q: "Everyone around you believes something. You're not sure you do.", 
        a: ["They're probably onto something", "I'll nod along, keep my thoughts to myself", "I need to look into it myself", "If everyone believes it, I'm skeptical"],
        scores: [[0,2], [0,1], [5,1], [5,3, 7,1]]
    },
    { 
        q: "Two of your friends are fighting. Bad. What do you do?", 
        a: ["Get in there, try to fix it", "Stay out of it", "Pick a side", "Let them sort it out themselves"],
        scores: [[0,2], [0,1], [4,1], [6,3, 4,1]]
    },
    { 
        q: "Your paycheck is way higher than it should be. No one noticed.", 
        a: ["Tell HR or whoever", "Bring it up at some point", "Say nothing", "Free money"],
        scores: [[0,2], [0,1], [7,2, 3,1], [7,3]]
    },
    { 
        q: "Your best friend got accused of something serious. You don't know if they did it.", 
        a: ["Stick by them", "Be there, but try to find out what really happened", "Step back for a bit", "Not getting dragged into this"],
        scores: [[0,2], [0,1], [7,1, 8,1], [8,3, 7,1]]
    },
    { 
        q: "You find a wallet with $200 and an ID. No one's around.", 
        a: ["Track down the owner", "Turn it in somewhere", "Take the cash, leave the wallet", "Finders keepers"],
        scores: [[0,2], [0,1], [7,2], [7,3, 3,1]]
    },
    { 
        q: "Someone cuts you off in traffic. Your reaction?", 
        a: ["Whatever, it happens", "Mildly annoyed but move on", "Honk and yell", "Follow them to let them know"],
        scores: [[0,2], [0,1], [4,2], [4,3, 6,1]]
    },
    { 
        q: "You're at a buffet. How do you approach it?", 
        a: ["One reasonable plate", "A couple trips, try different things", "I'm getting my money's worth", "I might need to be rolled out"],
        scores: [[0,2], [0,1], [2,2], [2,3]]
    },
    { 
        q: "A friend tells you a secret about someone else. What do you do?", 
        a: ["Keep it to myself", "Forget about it honestly", "Tell one person I trust", "This is too good not to share"],
        scores: [[0,2], [0,1], [7,1], [7,3, 8,1]]
    },
    { 
        q: "You disagree with a rule at work or school. How do you handle it?", 
        a: ["Follow it anyway", "Bring it up through proper channels", "Quietly ignore it", "Make it known I think it's stupid"],
        scores: [[0,2], [0,1], [5,1, 7,1], [5,2, 4,1]]
    },
    { 
        q: "Someone you don't like fails at something. How do you feel?", 
        a: ["Bad for them honestly", "Neutral, not my business", "A little satisfied maybe", "Couldn't have happened to a nicer person"],
        scores: [[0,2], [0,1], [4,2], [4,3, 6,1]]
    },
    { 
        q: "You could get ahead by stretching the truth. No one would know.", 
        a: ["Not worth it", "Depends on the stakes", "A little embellishment never hurt", "I'd be stupid not to"],
        scores: [[0,2], [0,1], [7,2], [7,3]]
    },
    { 
        q: "How do you feel about spending money on yourself?", 
        a: ["I treat myself when I can", "Save mostly, spend sometimes", "Money's for saving", "I deserve nice things"],
        scores: [[0,1], [0,1], [3,2], [2,2, 3,1]]
    },
    { 
        q: "Someone trusts you with something important. You mess up.", 
        a: ["Tell them right away", "Fix it before they notice", "Hope it doesn't come up", "Blame something else"],
        scores: [[0,2], [0,1], [7,2, 8,1], [7,3, 8,2]]
    },
    { 
        q: "You're offered something you really want, but accepting would hurt someone else.", 
        a: ["Turn it down", "Try to find a compromise", "Take it but feel bad", "They'd do the same to me"],
        scores: [[0,2], [0,1], [3,2, 8,1], [6,2, 8,2]]
    }
];

const circles = [
    { name: "First Circle: Limbo", desc: "The lightest fate - you lived virtuously but without faith. You join Virgil, Homer, Ovid, Aristotle, and Socrates in a peaceful castle. Your only punishment is eternal longing - you see the light of God but can never reach it. The contrapasso: those who lived without knowing Christ exist without His presence forever." },
    { name: "Second Circle: Lust", desc: "You let passion override reason. You join Cleopatra, Helen of Troy, Paris, and the tragic lovers Francesca and Paolo. Your punishment: an endless violent storm tosses you through the dark - just as you were swept away by desire in life, you are swept away literally for eternity. A moderate sin, but one that began your descent." },
    { name: "Third Circle: Gluttony", desc: "You made a god of your stomach. You join Ciacco the Hog and other Florentine gluttons. Your punishment: you lie in freezing, filthy slush while Cerberus the three-headed dog claws and flays you. The contrapasso: those who wallowed in excess now wallow in garbage, the trash of their indulgence." },
    { name: "Fourth Circle: Greed", desc: "Wealth consumed your soul - whether hoarding or squandering it. You join misers and spendthrifts, including many clergy. Your punishment: two groups push enormous weights at each other, clashing and screaming 'Why do you hoard?' and 'Why do you waste?' for eternity. The contrapasso: those obsessed with material goods are now crushed by them." },
    { name: "Fifth Circle: Wrath", desc: "Anger ruled your heart. You join Filippo Argenti and other wrathful souls on the surface of the River Styx, forever fighting and tearing at each other. Below the surface, the sullen gurgle in the mud, having choked on their own repressed rage. The contrapasso: those who lived in fury now exist in eternal conflict." },
    { name: "Sixth Circle: Heresy", desc: "You denied the soul's immortality or rejected established doctrine. You join Farinata degli Uberti, Emperor Frederick II, and Pope Anastasius. Your punishment: you lie in open, flaming tombs for eternity. The contrapasso: those who denied the afterlife are trapped in burning graves, experiencing the death they thought was final - forever." },
    { name: "Seventh Circle: Violence", desc: "You harmed others, yourself, or God's creation. The violent against others (like Alexander the Great and various tyrants) boil in a river of blood. Suicides become gnarled trees torn by Harpies. Blasphemers lie under raining fire. The contrapasso: those who shed blood drown in it; those who destroyed their bodies lose human form entirely." },
    { name: "Eighth Circle: Fraud", desc: "You used your God-given intellect to deceive. This circle has ten ditches for different frauds: seducers are whipped by demons, flatterers swim in excrement, corrupt clergy are buried headfirst in flames, sorcerers have their heads twisted backward, grafters boil in pitch, hypocrites wear gilded lead cloaks, thieves transform into serpents. You join Ulysses and countless deceivers. The contrapasso: each punishment mirrors the deception committed." },
    { name: "Ninth Circle: Treachery", desc: "The absolute worst - you betrayed those who trusted you. Frozen in the ice lake Cocytus, you join history's greatest traitors: Cain (who killed his brother), Antenor (who betrayed Troy), Count Ugolino (who gnaws his betrayer's skull), and in the very center, Judas Iscariot, Brutus, and Cassius - chewed eternally by Satan's three mouths. The contrapasso: those whose hearts were cold to loyalty are frozen forever, closest to Satan, furthest from God's warmth." }
];

let currentQuestion = 0;
let scores = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function showQuestion(index) {
    const container = document.getElementById('quiz');
    const q = questions[index];
    
    let html = '<p><b>' + q.q + '</b></p>';
    html += '<table class="answers"><tr>';
    html += '<td><button onclick="selectAnswer(' + index + ',0)">' + q.a[0] + '</button></td>';
    html += '<td><button onclick="selectAnswer(' + index + ',1)">' + q.a[1] + '</button></td>';
    html += '</tr><tr>';
    html += '<td><button onclick="selectAnswer(' + index + ',2)">' + q.a[2] + '</button></td>';
    html += '<td><button onclick="selectAnswer(' + index + ',3)">' + q.a[3] + '</button></td>';
    html += '</tr></table>';
    
    container.innerHTML = html;
    document.getElementById('current').textContent = index + 1;
}

function selectAnswer(questionIndex, answerIndex) {
    const scoreData = questions[questionIndex].scores[answerIndex];
    for (let i = 0; i < scoreData.length; i += 2) {
        const circleIndex = scoreData[i];
        const points = scoreData[i + 1];
        scores[circleIndex] += points;
    }
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion(currentQuestion);
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz').innerHTML = '';
    document.getElementById('current').parentElement.style.display = 'none';
    
    let maxScore = Math.max(...scores);
    
    // Find all circles with the max score
    let tiedCircles = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === maxScore) {
            tiedCircles.push(i);
        }
    }
    
    // Tie-breaker: deeper circle (higher index = worse sin) wins
    let circle = Math.max(...tiedCircles);
    
    // If score is very low, default to Limbo
    if (maxScore <= 3) circle = 0;
    
    document.getElementById('result').innerHTML = 
        '<h2>Your Fate: ' + circles[circle].name + '</h2>' +
        '<p>' + circles[circle].desc + '</p>' +
        '<br><button onclick="restart()">Take Quiz Again</button>';
}

function restart() {
    currentQuestion = 0;
    scores = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    document.getElementById('result').innerHTML = '';
    document.getElementById('current').parentElement.style.display = '';
    showQuestion(0);
}

showQuestion(0);
