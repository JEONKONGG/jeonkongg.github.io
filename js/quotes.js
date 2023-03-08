// quotes 100
const quotes = [
    // 1 ~ 10
    {
        quote: "When you have faults, do not fear to abandon them.",
        author: "Confucius"
    },
    {
        quote: "They must often change who would be constant in happiness or wisdom.",
        author: "Confucius"
    },
    {
        quote: "Age is no guarantee of maturity.",
        author: "Lawana Blackwell"
    },
    {
        quote: "Youth isn’t always all it’s touted to be.",
        author: "Lawana Blackwell"
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    },
    {
        quote: "The goal of life is living in agreement with nature.",
        author: "Zeno"
    },
    {
        quote: "This too shall pass.",
        author: "Et hoc transibit"
    },
    {
        quote: "The die is cast.",
        author: "Julius caesar"
    },
    // 11 ~ 20
    {
        quote: "Only I can change me life, no one can do it for me.",
        author: "Carol Burnett"
    },
    {
        quote: "When in doubt, choose change.",
        author: "Lily leung"
    },
    {
        quote: "Life is unfair, get used to it.",
        author: "Bill Gates"
    },
    {
        quote: "Being happy never goes out of style.",
        author: "Lilly Pulitzer"
    },
    {
        quote: "All you need in this life is ignorance and confidence, then success is sure.",
        author: "Mark Twain"
    },
    {
        quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
        author: "Maxime Lagacé"
    },
    {
        quote: "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
        author: "Kamal Ravikant"
    },
    {
        quote: "Life can only be understood backwards; but it must be lived forwards.",
        author: "Søren Kierkegaard"
    },
    {
        quote: "Despite the forecast, live like it’s spring.",
        author: "Lilly Pulitzer"
    },
    {
        quote: "The two most important days in your life are the day you are born and the day you find out why.",
        author: "Mark Twain"
    },
    // 21 ~ 30
    {
        quote: "Nothing in more despicable than respect based on fear.",
        author: "Albert camus"
    },
    {
        quote: "Turn your wounds into wisdom.",
        author: "Oprah Gail Winfrey"
    },
    {
        quote: "Change the world by being yourself.",
        author: "Amy Poehler"
    },
    {
        quote: "Great minds have purposes, others have wishes.",
        author: "Washington Irving"
    },
    {
        quote: "Be gentle first with yourself.",
        author: "Anonymous"
    },
    {
        quote: "All we have is now.",
        author: "Anonymous"
    },
    {
        quote: "Believe in yourself.",
        author: "Anonymous"
    },
    {
        quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
        author: "Jim Rohn"
    },
    {
        quote: "No great man ever complains of want of opportunity.",
        author: "Anonymous"
    },
    {
        quote: "A day without laughter is a day wasted.",
        author: "Anonymous"
    },
    // 31 ~ 40
    {
        quote: "love what you have.",
        author: "Anonymous"
    },
    {
        quote: "It ain’t over till it’s over.",
        author: "Anonymous"
    },
    {
        quote: "No pain no gain.",
        author: "Anonymous"
    },
    {
        quote: "Rome is not built in a day.",
        author: "Anonymous"
    },
    {
        quote: "Never lose sight of the face that the most important yard stick to your success is how you treat other people.",
        author: "Barbara Bush"
    },
    {
        quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author: "Winston S. Churchill"
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        quote: "If you really look closely, most overnight successes took a long time.",
        author: "Steve Jobs"
    },
    {
        quote: "The secret of success is to do the common thing uncommonly well.",
        author: "John D. Rockefeller Jr."
    },
    {
        quote: "Don’t be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
    },
    // 41 ~ 50
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill"
    },
    {
        quote: "I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite.",
        author: "G. K. Chesterton"
    },
    {
        quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
        author: "Jim Rohn"
    },
    {
        quote: "The ones who are crazy enough to think they can change the world, are the ones that do.",
        author: "Anonymous"
    },
    {
        quote: "All progress takes place outside the comfort zone.",
        author: "Michael John Bobak"
    },
    {
        quote: "It is kind of fun to do the impossible.",
        author: "Walt Disney"
    },
    {
        quote: "But I know, somehow, that only when it is dark enough can you see the stars.",
        author: "Martin Luther King, Jr"
    },
    {
        quote: "I didn’t get there by wishing for it or hoping for it, but by working for it.",
        author: "Estée Lauder"
    },
    {
        quote: "The less their ability, the more their conceit.",
        author: "Ahad Ha-am"
    },
    {
        quote: "Live life to the fullest.",
        author: "Anonymous"
    },
    // 51 ~ 60
    {
        quote: "Fall 7 times, stand up 8.",
        author: "Anonymous"
    },
    {
        quote: "No one is you and that is your power.",
        author: "Anonymous"
    },
    {
        quote: "Sometimes the right path is not the easiest one.",
        author: "Anonymous"
    },
    {
        quote: "A mind troubled by doubt cannot focus on the course of victory.",
        author: "Arthur Golden"
    },
    {
        quote: "Try not to become a man of success. Rather become a man of value.",
        author: "Albert Einstein"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson"
    },
    {
        quote: "It is better to fail in originality than to succeed in imitation.",
        author: "Herman Melville"
    },
    {
        quote: "The road to success and the road to failure are almost exactly the same.",
        author: "Colin R. Davis"
    },
    {
        quote: "Don’t aim for success if you want it; just do what you love and believe in, and it will come naturally.",
        author: "David Frost"
    },
    // 61 ~ 70
    {
        quote: "Opportunities don’t happen. You create them.",
        author: "Chris Grosser"
    },
    {
        quote: "Stop chasing the money and start chasing the passion.",
        author: "Tony Hsieh"
    },
    {
        quote: "When you go through hardships and decide not to surrender, that is strength.",
        author: "Arnold Schwarzenegger"
    },
    {
        quote: "There are better starters than me but I’m a strong finisher.",
        author: "Usain Bolt"
    },
    {
        quote: "Tough times never last, but tough people do.",
        author: "Robert H. Schuller"
    },
    {
        quote: "I’ve failed over and over and over again in my life and that is why I succeed.",
        author: "Michael Jordan"
    },
    {
        quote: "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
        author: "Angelina Jolie"
    },
    {
        quote: "Grind Hard, Shine Hard.",
        author: "Dwayne Johnson"
    },
    {
        quote: "It hurt because it mattered.",
        author: "John Green"
    },
    {
        quote: "You will never know until you try.",
        author: "Anonymous"
    },
    // 71 ~ 80
    {
        quote: "Every wall is a door.",
        author: "Anonymous"
    },
    {
        quote: "Behind the cloud is the sun still shining.",
        author: "Anonymous"
    },
    {
        quote: "Do one thing every day that scares you.",
        author: "Anonymous"
    },
    {
        quote: "The ones who are crazy enough to think they can change the world, are the ones that do.",
        author: "Anonymous"
    },
    {
        quote: "Better late than never.",
        author: "Anonymous"
    },
    {
        quote: "We can give advice, but we cannot give conduct.",
        author: "Anonymous"
    },
    {
        quote: "Study the past if you would define the future.",
        author: "Confucius"
    },
    {
        quote: "Knowlegde is power and money.",
        author: "Bill gates"
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        quote: "It’s never too late.",
        author: "Anonymous"
    },
    // 81 ~ 90
    {
        quote: "Don’t aim for success if you want it; just do what you love and believe in, and it will come naturally.",
        author: "David Frost"
    },
    {
        quote: "Habit is second nature.",
        author: "Michel de Montaigne"
    },
    {
        quote: "Study without desire spoils the memory, and it retains nothing that it takes in.",
        author: "Leonardo da Vinci"
    },
    {
        quote: "The merit of an action lies in finishing it to the end.",
        author: "Genghis Khan"
    },
    {
        quote: "Education is what survives when what has been learned has been forgotten.",
        author: "B. F. Skinner"
    },
    {
        quote: "Learning is not compulsory… neither is survival.",
        author: "W. Edwards Deming"
    },
    {
        quote: "Seeing much, suffering much, and studying much, are the three pillars of learning.",
        author: "Benjamin Disraeli"
    },
    {
        quote: "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.",
        author: "Abigail Adams"
    },
    {
        quote: "Men acquire a particular quality by constantly acting a particular way… you become just by performing just actions, temperate by performing temperate actions, brave by performing brave actions.",
        author: "Aristotle"
    },
    {
        quote: "What we have to do is to be forever curiously testing new opinions and courting new impressions.",
        author: "Walter Pater"
    },
    // 91 ~ 100
    {
        quote: "That is what learning is. You suddenly understand something you’ve understood all your life, but in a new way.",
        author: "Doris Lessing"
    },
    {
        quote: "Isn’t it a pleasure to study, and to practice what you have learned?",
        author: "Confucius"
    },
    {
        quote: "Courage is being scared to death… and saddling up anyway.",
        author: "John Wayne"
    },
    {
        quote: "I rise like the break of dawn.",
        author: "Anonymous"
    },
    {
        quote: "Push yourself, because no one else is going to do for you.",
        author: "Anonymous"
    },
    {
        quote: "He that can have patience can have what he will.",
        author: "Anonymous"
    },
    {
        quote: "Yesterday you said tomorrow. Just do it.",
        author: "Anonymous"
    },
    {
        quote: "If you eat all three meals, you’ll gain weight.",
        author: "Sarang Kim"
    },
    {
        quote: "You think you’re trying a new flavor, but it’s one you already know.",
        author: "Oak Joo Hyun"
    },
    {
        quote: "You are not hungry. You are bored. Learn the differnce.",
        author: "Anonymous"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;