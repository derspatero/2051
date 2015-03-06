

function scoreCard() {
    this.course = {
        "coursename": "Pitch and Putt",
        "date": "",
        "players": ["P1", "P2", "P3", "P4"],
        "holes": [
            {"hole": 1, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 2, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 3, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 4, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 5, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 6, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 7, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 8, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 9, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 10, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 11, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 12, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 13, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 14, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 15, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 16, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 17, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 18, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
        ],
        "fronttotal": {"yd": 0, "par": 0, "playerscores": [0, 0, 0, 0]},
        "backtotal": {"yd": 0, "par": 0, "playerscores": [0, 0, 0, 0]},
        "total": {"yd": 0, "par": 0, "playerscores": [0, 0, 0, 0]}

    }

    this.calculateScores = function() {

        this.course.fronttotal.yd = 0;
        this.course.fronttotal.par = 0;
        this.course.fronttotal.playerscores[0] = 0;
        this.course.fronttotal.playerscores[1] = 0;
        this.course.fronttotal.playerscores[2] = 0;
        this.course.fronttotal.playerscores[3] = 0;

        for (i = 0; i < this.course.holes.length / 2; i++) {
            this.course.fronttotal.yd += parseInt(this.course.holes[i].yd);
            this.course.fronttotal.par += parseInt(this.course.holes[i].par);
            this.course.fronttotal.playerscores[0] += parseInt(this.course.holes[i].playerscores[0]);
            this.course.fronttotal.playerscores[1] += parseInt(this.course.holes[i].playerscores[1]);
            this.course.fronttotal.playerscores[2] += parseInt(this.course.holes[i].playerscores[2]);
            this.course.fronttotal.playerscores[3] += parseInt(this.course.holes[i].playerscores[3]);
        }

        this.course.backtotal.yd = 0;
        this.course.backtotal.par = 0;
        this.course.backtotal.playerscores[0] = 0;
        this.course.backtotal.playerscores[1] = 0;
        this.course.backtotal.playerscores[2] = 0;
        this.course.backtotal.playerscores[3] = 0;

        this.course.total.yd = 0;
        this.course.total.par = 0;
        this.course.total.playerscores[0] = 0;
        this.course.total.playerscores[1] = 0;
        this.course.total.playerscores[2] = 0;
        this.course.total.playerscores[3] = 0;


        for (i=9; i<this.course.holes.length; i++) {
            this.course.backtotal.yd += parseInt(this.course.holes[i].yd);
            this.course.backtotal.par += parseInt(this.course.holes[i].par);
            this.course.backtotal.playerscores[0] += parseInt(this.course.holes[i].playerscores[0]);
            this.course.backtotal.playerscores[1] += parseInt(this.course.holes[i].playerscores[1]);
            this.course.backtotal.playerscores[2] += parseInt(this.course.holes[i].playerscores[2]);
            this.course.backtotal.playerscores[3] += parseInt(this.course.holes[i].playerscores[3]);
        }

        for (i=0; i<this.course.holes.length; i++) {
            this.course.total.yd += parseInt(this.course.holes[i].yd);
            this.course.total.par += parseInt(this.course.holes[i].par);
            this.course.total.playerscores[0] += parseInt(this.course.holes[i].playerscores[0]);
            this.course.total.playerscores[1] += parseInt(this.course.holes[i].playerscores[1]);
            this.course.total.playerscores[2] += parseInt(this.course.holes[i].playerscores[2]);
            this.course.total.playerscores[3] += parseInt(this.course.holes[i].playerscores[3]);
        }
    }

    this.savegame = function () {
        var textToWrite = JSON.stringify(scorecard.course);
        localStorage.setItem('scorecard', textToWrite);
    }

    this.loadgame = function() {
        scorecard.course = JSON.parse(localStorage.getItem('scorecard'));
        createScoreCard();
    }

    this.createBlankPar72 = function() {
        this.course = {
            "coursename": "Real Golf!",
            "players": ["P1", "P2", "P3", "P4"],
            "holes": [
                {"hole": 1, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 2, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 3, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 4, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 5, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 6, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 7, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 8, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 9, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 10, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 11, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 12, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 13, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 14, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 15, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 16, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 17, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 18, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
            ],
            "fronttotal": {"yd": 0, "par": 0, "playerscores": [0, 0, 0, 0]},
            "backtotal": {"yd": 0, "par": 0, "playerscores": [0, 0, 0, 0]},
            "total": {"yd": 0, "par": 0, "playerscores": [0, 0, 0, 0]},
        }
    }

    /*
    GETTERS AND SETTERS
     */
    this.getCourseName = function() {
        return this.course.coursename;
    }

    this.setPlayerNames = function(p1name, p2name, p3name, p4name){
        this.course.players[0] = p1name;
        this.course.players[1] = p2name;
        this.course.players[2] = p3name;
        this.course.players[3] = p4name;
    }

    this.getPlayerName = function(playerNumber) {
        return this.course.players[playerNumber];
    }

    this.getCourseLength = function() {
        return this.course.holes.length;
    }

    this.setPlayerScoreForHole = function(holeindex,playerindex,score){
        this.course.holes[holeindex].playerscores[playerindex] = parseInt(score);
    }

    this.getPlayerScoreForHole = function(holeindex,playerindex) {
        return this.course.holes[holeindex].playerscores[playerindex];
    }

    this.getHoleNumber = function(holeindex) {
        return this.course.holes[holeindex].hole;
    }

    this.getNumberOfPlayers = function() {
        return this.course.players.length;
    }

    this.getParForHole = function(holeindex) {
        return this.course.holes[holeindex].par;
    }

    this.getFrontTotalForPlayer = function(playerindex) {
        return this.course.fronttotal.playerscores[playerindex];
    }

    this.getBackTotalForPlayer = function(playerindex) {
        return this.course.backtotal.playerscores[playerindex];
    }

    this.getTotalForPlayer = function(playerindex) {
        return this.course.total.playerscores[playerindex];
    }

}














