
/* Multiplication Quiz 
 * This program should ask five multiplication questions, displaying which question
 * is being asked, and counting the number of equations with at least one error.
 * FLOWCHART: https://lucid.app/lucidchart/5a3164fd-459f-494d-9cae-b4a6be593b13/view
 */
main()
function main() {
    let score = askFive();
    if (score == 0) alert("Perfect!");
    else alert("You had " + score + " errors");
}
/* Setup */
// Define a function called main and then call it up top.
// Define a function called askFive and call it from inside main().
// Define a function called askQuestion and call it from inside askFive() as askQuestion(1);

/* STAGE 1:ASK A QUESTION */

/* askQuestion asks a multiplication question, returns 1 if incorrect
 * @param: question (integer 1-5)
 * @return: integer (0 or 1)
 */
function askQuestion(question){
    let a = Math.floor(Math.random()*7)+3;
    let b = Math.floor(Math.random()*7)+3;
    let product = a*b;
    let equation = a + " * " + b + " = ?";
    let answer = prompt(equation);
    if (answer == "q"){
        alert("Quitter!");
        return 2;
    }
    else if (answer == product){
       alert("Correct!");
       return 0;
    } 
    else {
        alert("incorrect");
        return 1;   
    } 
}
/* TEST BEFORE CONTINUING TO STAGE TWO! */

/* STAGE 1:ASK 5 QUESTIONS */

/* askFive calls askQuestion five times, counting and returning number wrong
 * @param: none
 * @return: score (0-5)
 */
function askFive() {
    let score = 0;
    for (let question = 1; question <= 5; question++) {
        score += askQuestion(question);
    }
    return score;
}
// Create a variable score, set to 0
// Write a for loop with question as the index, values 1 to 5
// Call askQuestion in the loop, with question as argument
// Add the returned value of askQuestion to score each time you call it (same line)
// return score after loop finishes

/* TEST BEFORE CONTINUING TO STAGE THREE! */

/* STAGE 3: MULTIPLE TRIES (CHALLENGE!) */

/* Refactor askQuestion per whileQuestions askFive calls askQuestion five times, counting and returning number wrong
 * Use the whileQuestions tab in the flowchart to guide you. 
 * @param: none
 * @return: score (0-5)
 */