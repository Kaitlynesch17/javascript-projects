//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

class CrewCandidate {
    constructor(name, mass, scores = []) {
        this.name = name; 
        this.mass = mass;
        this.scores = scores;
    }

    addScore (newScore) {
        return this.scores.push(newScore);
    }

    average() {
        let sum = 0;
        let numScores = this.scores.length;
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }

        let average = sum / numScores;

        return 	Math.round(average*10)/10;
    }

    status() {
        if (this.average() >= 90) {
            return 'Accepted';
        } else if (this.average() <= 89 && this.average() >= 80) {
            return 'Reserve';
        } else if (this.average() <= 79 && this.average() >= 70) {
            return 'Probationary';
        } else if (this.average() < 70) {
            return 'Rejected';
        }
    }
}

let candidate1 = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let candidate2 = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let candidate3 = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

console.log(candidate1);
console.log(candidate2);
console.log(candidate3);

candidate1.addScore(83);

console.log(candidate1.scores);

console.log(candidate2.average());

console.log(candidate1.status());

console.log(`${candidate1.name} earned an average test score of ${candidate1.average()}% and has a status of ${candidate1.status()}.`);