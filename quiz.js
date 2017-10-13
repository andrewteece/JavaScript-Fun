/* Quiz
1. Ask at least five questions
2. Keep track of the number of
questions the user answered correctly.
3. Provide a final message after the Quiz
letting the user know the number of
questiopns he or she got right.
4. Rank the player. If the player answered
all five correctly, give that player the
gold crown: 3-4 is a silver crown: 1-2
correct answers is a bronze crown and
0 correct is no crown at all.
*/


// quiz begins
var correct = 0;

// ask questions
var answer1 = prompt('Name a programming language that is also a gem');
  if (answer1.toUpperCase() === 'RUBY') {
    correct += 1;
  }

var answer2 = prompt('Name a programming language that is also a snake');
  if (answer2.toUpperCase() === 'PYTHON') {
    correct += 1;
  }

  var answer3 = prompt('What language do you use to style web pages?');
    if (answer3.toUpperCase() === 'CSS') {
      correct += 1;
    }

  var answer4 = prompt('What language do you use to build the structure of web pages?');
    if (answer4.toUpperCase() === 'HTML') {
      correct += 1;
    }

    var answer5 = prompt('What languagedo do you use to add interactivity to a web page?');
      if (answer5.toUpperCase() === 'JAVASCRIPT') {
        correct += 1;
    }

    // output results

    document.write('You got ' + correct + ' out of 5 questions correct.');

    // output rank

    if (correct === 5) {
        document.write ('<strong>You earn a gold crown!</strong>');
    } else if ( correct >= 3) {
        document.wrtie('<strong>You earn a silver crown!</strong>');
    } else if ( correct >= 1) {
        document.write('<strong>You earn a bronze crown!</strong>');
    } else {
      document.write('<strong>Sorry you got ZERO correct!</strong>');
    }
