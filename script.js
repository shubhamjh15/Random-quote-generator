let quote = document.querySelector('.quote')
let person = document.querySelector('.person')
let newQuote= document.querySelector('#new-quote')
let speakBtn = document.querySelector('#voice-speech')
const quotes = [
    {
      quote: "Success isn't measured by speed but persistence. Step by step, embrace challenges, and you'll achieve greatness. Patience and resilience pave the way to triumph in life’s journey.",
      person: "Norman"
    },
    {
      quote: "Dreams come alive when you act. Plan, stay consistent, and take small steps daily. Every effort pushes you forward, shaping your path to turn imagination into reality with persistence.",
      person: "Sophia"
    },
    {
      quote: "Even the darkest nights end with sunrise. Challenges test strength, yet perseverance builds character. Keep moving forward, and you'll find the brighter days waiting beyond today’s struggles.",
      person: "Eleanor"
    },
    {
      quote: "Mistakes are life’s greatest teachers. Embrace every misstep, learn valuable lessons, and grow stronger. Failures aren't the end but stepping stones guiding you closer to achieving your dreams.",
      person: "Benjamin"
    },
    {
      quote: "In chaos, seek your truth. Authenticity builds meaningful connections, inspiring growth in yourself and others. Speak boldly and live genuinely; your unique perspective matters in a noisy world.",
      person: "Harper"
    },
    {
      quote: "Patience is a silent power. Trust the process, nurture your goals, and allow time to reveal your efforts’ fruits. Growth takes persistence, and success rewards those who endure.",
      person: "Oliver"
    },
    {
      quote: "Your journey is a masterpiece in progress. Celebrate victories, embrace challenges, and learn from every step. Each moment adds color to life, making your story uniquely inspiring and unforgettable.",
      person: "Amelia"
    },
    {
      quote: "Kindness is a ripple that spreads joy. A simple gesture can brighten someone's day, fostering positivity. Share compassion freely and transform your world into a place of hope.",
      person: "Liam"
    },
    {
      quote: "Courage is facing fears head-on. Step into uncertainty and discover new strengths within yourself. Bravery doesn't eliminate fear but empowers you to rise above and embrace new opportunities.",
      person: "Charlotte"
    },
    {
      quote: "Gratitude unlocks happiness. Cherish small blessings, celebrate simple joys, and appreciate life’s beauty. A thankful heart finds contentment not in abundance but in seeing value in everyday moments.",
      person: "Ethan"
    }
  ];


  
newQuote.addEventListener('click',function(){
  let random = Math.floor(Math.random() *quotes.length )
  quote.innerText = quotes[random].quote
  person.innerText = quotes[random].person
})


  
  
  