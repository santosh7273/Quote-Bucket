const quotes = [
    { text: "The time is always right to do what is right.", author: "Martin Luther King Jr." },
    { text: "Injustice anywhere is a threat to justice everywhere.", author: "Martin Luther King Jr." },
    { text: "The function of education is to teach one to think intensively and to think critically. Intelligence plus character — that is the goal of true education.", author: "Martin Luther King Jr." },
    { text: "I have a dream that one day this nation will rise up and live out the true meaning of its creed.", author: "Martin Luther King Jr." },
    { text: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.", author: "Martin Luther King Jr." },
    { text: "Our lives begin to end the day we become silent about things that matter.", author: "Martin Luther King Jr." },
    { text: "Freedom is never voluntarily given by the oppressor; it must be demanded by the oppressed.", author: "Martin Luther King Jr." },
    { text: "The only way to deal with this life meaningfully is to find one's passion and put everything into it.", author: "Martin Luther King Jr." },
    { text: "Faith is taking the first step even when you don't see the whole staircase.", author: "Martin Luther King Jr." },
    { text: "We must accept finite disappointment, but never lose infinite hope.", author: "Martin Luther King Jr." },
    { text: "I am not a saint, but I am a man of conviction. I am not a hero, but I am a fighter for justice.", author: "Malcolm X" },
    { text: "A man who stands for nothing will fall for anything.", author: "Malcolm X" },
    { text: "The future belongs to those who prepare for it today.", author: "Malcolm X" },
    { text: "The only way to achieve justice is to know what justice means.", author: "Malcolm X" },
    { text: "You can't separate peace from freedom because no one can be at peace unless he has his freedom.", author: "Malcolm X" },
    { text: "To be a Negro in this country and to be relatively conscious is to be in a state of rage almost all the time.", author: "James Baldwin" },
    { text: "Not everything that is faced can be changed, but nothing can be changed until it is faced.", author: "James Baldwin" },
    { text: "The place in which I'll fit will not exist until I make it.", author: "James Baldwin" },
    { text: "I am not your negro.", author: "James Baldwin" },
    { text: "People are trapped in history and history is trapped in them.", author: "James Baldwin" },
    { text: "The time has come for America to hear the truth about itself.", author: "James Baldwin" },
    { text: "The most dangerous creation of any society is the man who has nothing to lose.", author: "James Baldwin" },
    { text: "I have always believed that the purpose of life is to discover what you're meant to do, and then to do it.", author: "Audre Lorde" },
    { text: "I am not free while any woman is unfree, even when her shackles are very different from my own.", author: "Audre Lorde" },
    { text: "Your silence will not protect you.", author: "Audre Lorde" },
    { text: "The master's tools will never dismantle the master's house.", author: "Audre Lorde" },
    { text: "I cannot hide my anger and I don't intend to.", author: "Audre Lorde" },
    { text: "I am not free while any woman is unfree, even when her shackles are very different from my own.", author: "Audre Lorde" },
    { text: "You don't make progress by standing on the sidelines, whimpering and complaining. You make progress by implementing ideas.", author: "Shirley Chisholm" },
    { text: "Tremendous amounts of talent are being lost to our society just because that talent wears a skirt.", author: "Shirley Chisholm" },
    { text: "I want to be remembered as a woman who dared to be a voice of the voiceless.", author: "Shirley Chisholm" },
    { text: "You don't make progress by standing on the sidelines, whimpering and complaining. You make progress by implementing ideas.", author: "Shirley Chisholm" },
    { text: "I am not a liberator. Liberators do not exist. The people liberate themselves.", author: "Che Guevara" },
    { text: "At the risk of seeming ridiculous, let me say that the true revolutionary is guided by a great feeling of love.", author: "Che Guevara" },
    { text: "The revolution is not an apple that falls when it is ripe. You have to make it fall.", author: "Che Guevara" },
    { text: "I am not a liberator. Liberators do not exist. The people liberate themselves.", author: "Che Guevara" },
    { text: "Revolution is not a bed of roses. Revolution is a struggle between the future and the past.", author: "Fidel Castro" },
    { text: "The revolution is not an apple that falls when it is ripe. You have to make it fall.", author: "Fidel Castro" },
    { text: "The only way to deal with this life meaningfully is to find one's passion and put everything into it.", author: "Fidel Castro" },
    { text: "The goal of socialism is communism.", author: "Vladimir Lenin" },
    { text: "Without a revolutionary theory, there can be no revolutionary movement.", author: "Vladimir Lenin" },
    { text: "The best way to control the opposition is to lead it ourselves.", author: "Vladimir Lenin" },
    { text: "Give me a place to stand, and I will move the earth.", author: "Archimedes" },
    { text: "The greatest wealth is to live content with little.", author: "Plato" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { text: "The only way to deal with this life meaningfully is to find one's passion and put everything into it.", author: "Ralph Waldo Emerson" },
    { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
    { text: "The only way to deal with this life meaningfully is to find one's passion and put everything into it.", author: "Franklin D. Roosevelt" },
    { text: "Injustice anywhere is a threat to justice everywhere.", author: "Martin Luther King Jr." },
    { text: "The time is always right to do what is right.", author: "Martin Luther King Jr." },
    { text: "Faith is taking the first step even when you don't see the whole staircase.", author: "Martin Luther King Jr." },
    { text: "Our lives begin to end the day we become silent about things that matter.", author: "Martin Luther King Jr." },
    { text: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.", author: "Martin Luther King Jr." },
    { text: "Freedom is never voluntarily given by the oppressor; it must be demanded by the oppressed.", author: "Martin Luther King Jr." },
    { text: "The function of education is to teach one to think intensively and to think critically. Intelligence plus character — that is the goal of true education.", author: "Martin Luther King Jr." },
    { text: "I have a dream that one day this nation will rise up and live out the true meaning of its creed.", author: "Martin Luther King Jr." },
    { text: "To be a Negro in this country and to be relatively conscious is to be in a state of rage almost all the time.", author: "James Baldwin" },
    { text: "The most dangerous creation of any society is the man who has nothing to lose.", author: "James Baldwin" },
    { text: "Not everything that is faced can be changed, but nothing can be changed until it is faced.", author: "James Baldwin" },
    { text: "The place in which I'll fit will not exist until I make it.", author: "James Baldwin" },
    { text: "The time has come for America to hear the truth about itself.", author: "James Baldwin" },
    { text: "The only way to deal with this life meaningfully is to find one's passion and put everything into it.", author: "James Baldwin" },
    { text: "You don't make progress by standing on the sidelines, whimpering and complaining. You make progress by implementing ideas.", author: "Shirley Chisholm" },
    { text: "I want to be remembered as a woman who dared to be a voice of the voiceless.", author: "Shirley Chisholm" },
    { text: "Tremendous amounts of talent are being lost to our society just because that talent wears a skirt.", author: "Shirley Chisholm" },
    { text: "You don't make progress by standing on the sidelines, whimpering and complaining. You make progress by implementing ideas.", author: "Shirley Chisholm" },
    { text: "I am not a liberator. Liberators do not exist. The people liberate themselves.", author: "Che Guevara" },
    { text: "At the risk of seeming ridiculous, let me say that the true revolutionary is guided by a great feeling of love.", author: "Che Guevara" },
    { text: "The revolution is not an apple that falls when it is ripe. You have to make it fall.", author: "Che Guevara" },
    { text: "Revolution is not a bed of roses. Revolution is a struggle between the future and the past.", author: "Fidel Castro" },
    { text: "The goal of socialism is communism.", author: "Vladimir Lenin" },
    { text: "Without a revolutionary theory, there can be no revolutionary movement.", author: "Vladimir Lenin" },
    { text: "The best way to control the opposition is to lead it ourselves.", author: "Vladimir Lenin" },
    { text: "Give me a place to stand, and I will move the earth.", author: "Archimedes" },
    { text: "The greatest wealth is to live content with little.", author: "Plato" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" }
];

function displayRandomQuote() {
    document.getElementById('quote1').textContent='Loading';
    document.getElementById('author1').textContent='Loading';
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quote1').textContent = `"${quote.text}"`;
    document.getElementById('author1').textContent = `- ${quote.author}`;
}
function dig() {
    window.open(
        "https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.getElementById('quote1').textContent),
        "Tweet Window",
        "width=600,height=300"
    );
}
window.onload = function() {
    displayRandomQuote();
};
displayRandomQuote();