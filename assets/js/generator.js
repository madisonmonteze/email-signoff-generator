// variables

// variables for buttons within main window
var aboutWindow = document.getElementById("about-window");
var signoffWindow = document.getElementById("generator-window");
var aboutButton = document.getElementById("about-button");
var closeButton = document.getElementById("close-button");
var copyButton = document.getElementById("copy-content");

// variables for switching between screens
var mainScreen = document.getElementById("main");
var restartScreen = document.getElementById("restart");

// original sign-off message
var restoreDirections = document.getElementById("signoff");


// function to randomly select a sign-off from the list on click
function generateSignoff() {
    
    // array of signoffs from https://www.are.na/meg-miller/good-sign-offs
    var signoffs = ['With solidarity,',
    'With appreciation,',
    'With love and tremendous worry,',
    'Follow the whispers,',
    'Thank you,',
    'Your brother in music,',
    'Seacreast out,',
    'Fruit snacks,',
    'The quality without a name,',
    'Solidarity forever,',
    'ACAB,',
    'Burn the bear,',
    'Breaching solace,',
    'Remember 80s movies about the future (not what we expected),',
    'There is no "new normal" - only tomorrow,',
    'HAGS,',
    'Yours... never,',
    'With you in mind,',
    'Deliberately,',
    'Swerve soft,',
    'Watch your step,',
    'This sucks,',
    'Feel the breeze,',
    'Zoom out,',
    'Together alone,',
    'Trust your senses,',
    'Drink plenty of water,',
    'Stay lean,',
    'Bye,',
    'Ok for now,',
    'Take 2, action,',
    'This blows,',
    'Maybe later,',
    'Cautiously optimistic,',
    'Anxiously,',
    'Yours from midfield,',
    'Gotta blast,',
    'Virtually yours,',
    'Go make a TikTok,',
    'With no vested interest,',
    'Finger guns,',
    'As if,',
    'Deuces,',
    'Yeehaw,',
    'Yours for a change,',
    'Occasionally yours,',
    'Farewell punk,',
    'To be continued,',
    'Ciao for now',
    'Poopity scoop,',
    'Thanks for everything,',
    'Thanks for nothing,',
    'Alright!',
    'Birds in flight,',
    'To infinity and beyond,',
    'Etc.,',
    'Blessings,',
    'Godspeed,',
    'Ashes to ashes dust to dust,',
    'Be kind to animals,',
    'Notwithstanding,',
    'Thanks already,',
    'Eat, pray, love,',
    'Wind over water,',
    'No problems - only solutions,',
    'In uptopian conspiracy,',
    'Until more,',
    'Good vibes,',
    'Peace up A town,',
    'No hard feelings,',
    'Charmed,',
    'No, really,',
    'Sent from my iPhone,',
    'See you online,',
    'Ride high,',
    'Over and out,'
]

    // randomly select a sign-off
    var randomSelect = Math.floor(Math.random() * signoffs.length);

    var selectedSignoff = signoffs[randomSelect];

    // show sign-off in html window
    document.getElementById("signoff").innerHTML = selectedSignoff;

    //display copy button
    copyButton.style.display = 'block';

    // copy signoff
    // based on https://github.com/kuldar/kuldar-2020/blob/master/js/site.js
    const copySignoffButton = document.getElementById('copy-content')

    // Copy signoff to clipboard
    copySignoffButton.onclick = e => {
      e.preventDefault()
      copyToClipboard(selectedSignoff)
      e.target.classList.add('is-copied')
      setTimeout(() => { e.target.classList.remove('is-copied') }, 1000)
    }
  
    // Copy-paste straight from the internet
    const copyToClipboard = str => {
      const el = document.createElement('textarea')  // Create a <textarea> element
      el.value = str                                 // Set its value to the string that you want copied
      el.setAttribute('readonly', '')                // Make it readonly to be tamper-proof
      el.style.position = 'absolute'
      el.style.left = '-9999px'                      // Move outside the screen to make it invisible
      document.body.appendChild(el)                  // Append the <textarea> element to the HTML document
      const selected =
        document.getSelection().rangeCount > 0        // Check if there is any content selected previously
          ? document.getSelection().getRangeAt(0)     // Store selection if found
          : false                                    // Mark as false to know no selection existed before
      el.select()                                    // Select the <textarea> content
      document.execCommand('copy')                   // Copy - only works as a result of a user action (e.g. click events)
      document.body.removeChild(el)                  // Remove the <textarea> element
      if (selected) {                                 // If a selection existed before copying
        document.getSelection().removeAllRanges()    // Unselect everything on the HTML document
        document.getSelection().addRange(selected)   // Restore the original selection
      }
    }
}


function showAbout () {
    aboutWindow.style.display = 'block';
    signoffWindow.style.display = 'none';
    aboutButton.style.display = 'none';
    closeButton.style.display = 'block';
}

function closeAbout () {
    aboutWindow.style.display = 'none';
    signoffWindow.style.display = 'block';
    closeButton.style.display = 'none';
    aboutButton.style.display = 'block';
    restoreDirections.innerHTML = 'Click OK to generate a sign-off.';
    copyButton.style.display = 'none';
}

function showRestart () {
    mainScreen.style.display = 'none';
    restartScreen.style.display = 'flex';
}

function showMain () {
    restartScreen.style.display = 'none';
    mainScreen.style.display = 'block';
    restoreDirections.innerHTML = 'Click OK to generate a sign-off.';
    copyButton.style.display = 'none';
}

// click to copy from: https://github.com/kuldar/kuldar-2020/blob/master/js/site.js

(() => {

    const copyEmailLink = document.getElementById('myEmail')
  
    // Copy email to clipboard
    copyEmailLink.onclick = e => {
      e.preventDefault()
      copyToClipboard('madisonmonteze@gmail.com')
      e.target.classList.add('is-copied')
      setTimeout(() => { e.target.classList.remove('is-copied') }, 1000)
    }
  
    // Copy-paste straight from the internet
    const copyToClipboard = str => {
      const el = document.createElement('textarea')  // Create a <textarea> element
      el.value = str                                 // Set its value to the string that you want copied
      el.setAttribute('readonly', '')                // Make it readonly to be tamper-proof
      el.style.position = 'absolute'
      el.style.left = '-9999px'                      // Move outside the screen to make it invisible
      document.body.appendChild(el)                  // Append the <textarea> element to the HTML document
      const selected =
        document.getSelection().rangeCount > 0        // Check if there is any content selected previously
          ? document.getSelection().getRangeAt(0)     // Store selection if found
          : false                                    // Mark as false to know no selection existed before
      el.select()                                    // Select the <textarea> content
      document.execCommand('copy')                   // Copy - only works as a result of a user action (e.g. click events)
      document.body.removeChild(el)                  // Remove the <textarea> element
      if (selected) {                                 // If a selection existed before copying
        document.getSelection().removeAllRanges()    // Unselect everything on the HTML document
        document.getSelection().addRange(selected)   // Restore the original selection
      }
    }
  })()
