let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/; 

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);


A group of criminals escaped from jail and ran away, but you don't know how many. However, you do know that they stay close together when they are around other people. You are responsible for finding all of the criminals at once.

https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions/find-one-or-more-criminals-in-a-hunt
