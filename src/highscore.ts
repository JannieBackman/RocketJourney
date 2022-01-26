class HighScore {
    scoreBoard: ScoreBoard;


    constructor(scoreBoard: ScoreBoard) {
        this.scoreBoard = scoreBoard;
    }

    public saveHighScoreToLocalStorage() {
    }

    public update() {

    }

    
    public draw() {

        this.saveHighScoreToLocalStorage();
    }
}



//showBestScore [scoreArray] --> saveHighScore  skall presentera siffrorna

// Storing data:
//const myObj = {name: "John", age: 31, city: "New York"};
//const myJSON = JSON.stringify(myObj);
//localStorage.setItem("testJSON", myJSON);

// Retrieving data:
//let text = localStorage.getItem("testJSON");
//let obj = JSON.parse(text);
//document.getElementById("demo").innerHTML = obj.name;