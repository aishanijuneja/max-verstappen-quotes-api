// netlify/functions/quote.js

const quotes = [
    "Je m’appelle frikandel.",
    "If my mom had balls, she'd be my dad.",
    "I don't know, and um like I said in the beginning of this press conference, I get really tired of all the questions, so if I get a few more, I might headbutt someone.",
    "Because I'm Dutch.",
    "Hello everyone, eaehh.",
    "Hello, what the fuck?",
    "Um, I don't really have a lot to comment on that except that he was being a pussy.",
    "Thank you, Danny.",
    "Nice and sweaty, you know.",
    "Ki ki aye.",
    "I have a very sweaty ballsack at the moment.",
    "Daniel, look!",
    "I believe I can fly, I believe I can touch the sky…okay, that's enough.",
    "Get me to the chopper.",
    "Man, is this fucking guy blind?",
    "Ay ay ay, these tyres are already vibrating like I flat-spotted for 300 meters.",
    "Nah, I'll just visit the dentist after the weekend.",
    "I hate this fucking DRS.",
    "Yeah, I'm not even gonna say it, wtf happened.",
    "I couldn't do anything there.",
    "Wow, nice gap that.",
    "That's what you get when you don't leave the space.",
    "Mate, we all have no grip.",
    "What a fucking idiot.",
    "Yeah, I know what to say, I hope I don't find him in the paddock because then he is fucked.",
    "I never read this shit, man.",
    "You don't need to finish it, it's Charles.",
    "It was just to put the pressure on Helmut to give me a better contract.",
    "Ni hao!",
    "Why is it so spikey? What is it? Now I can not hold it anymore.",
    "Rapupupup wauuu.",
    "Quack quack.",
    "My dad did that once to a mechanic.",
    "He pushed me, I pushed him, he pushed me off the track."
];

// Lambda handler
exports.handler = async (event, context) => {
    const path = event.path || "";
    const headers = {
        'Access-Control-Allow-Origin': '*',  // Allow CORS
        'Content-Type': 'application/json',
    };

    if (path.includes("/all")) {
        return {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify({ quotes: quotes }),
        };
    } else {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        return {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify({ quote: randomQuote }),
        };
    }
};
