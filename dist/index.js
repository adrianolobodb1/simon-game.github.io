var winningRound = 10;
var GameApp = /** @class */ (function () {
    function GameApp() {
    }
    return GameApp;
}());
/*let gameController = new GameController();
 /* instanciar GameController para já começar a rodar quando carregar a página */ /* TO DO */
var GameButton = /** @class */ (function () {
    function GameButton(color) {
        this.active = false;
        this.element = document.querySelector(".game-button_" + color);
    } /* metodo turn on/off class*/ /* TO DO */
    return GameButton;
}());
var GameController = /** @class */ (function () {
    function GameController() {
        this.gameRunning = false;
        this.gameRunning = true;
        this.colors = ["pink", "blue", "yellow", "green"];
        for (var i = 0; i < 4; i++) {
            var currentColor = new GameButton(this.colors[i]);
            this.gameButtons.push(currentColor);
            console.log(currentColor);
        }
    }
    return GameController;
}());
var Rounds = /** @class */ (function () {
    function Rounds() {
    }
    return Rounds;
}());
var WinScreen = /** @class */ (function () {
    function WinScreen() {
    }
    return WinScreen;
}());
var LoseScreen = /** @class */ (function () {
    function LoseScreen() {
    }
    return LoseScreen;
}());
