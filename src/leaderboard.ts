interface LeaderBoardData {
    name: string;
    score: number;
}
class LeaderBoard {
    public leaderBoardArray: LeaderBoardData[];

    constructor() {
        this.leaderBoardArray = [];
    }

    draw() {
        console.log(this.leaderBoardArray)
        image(images.leaderBoard, (images.background[0].width / 20 - images.leaderBoard.width / 2), (images.background[0].height / 20 - images.leaderBoard.height / 2),);
    }
}