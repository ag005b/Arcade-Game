// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x <= 510){
        this.x = this.x + this.speed * dt;
    }
    else {
        this.x = -10; // returns bug to starting postion and
    }                 // to appear as coming from off the page

    // The follwoing code checks for collision of player and enemy
    if (this.x >= player.x - 40 && this.x <= player.x + 40) {
        if (this.y >= player.y - 40 && this.y <= player.y + 40) {
            alert("Oops! Let's Try Again!")

            player.y = 420;    // Retruns player
            player.x = 200;    // to starting positon
            
        }
    player.winner = "no"; // Resets 'Is Winner' flag as game resets
    }
    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class

var Player = function() {
    // Set the Player to starting position
    this.x = 200;
    this.y = 405;
    // Loading the player image by setting the sprite
    this.sprite = 'images/char-boy.png';
};

// This class requires an update(), render() and
// a handleInput() method.

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Moves the player around the board, Required method for game
Player.prototype.handleInput = function(e) {
    
    // Move Left, Right, Up, Down
    if (e == "left") {
        if (this.x - 100 >= 0)
            this.x -= 100;
    } else if (e == "right") {
        if (this.x + 100 <= 400)
            this.x += 100;
    } else if (e == "down") {
        this.y += 80;
        if (this.y > 325){
            this.y = 405;
        } else if (this.y > 245 && this.y <= 325) {
            this.y = 320;
        } else if (this.y > 165 && this.y <= 245) {
            this.y = 240;
        } else if (this.y > 85 && this.y <= 165) {
            this.y = 160;
        } else if (this.y > 5 && this.y <= 85) {
            this.y = 80;
        }
    } else if (e == "up") {
        this.y -= 80;
        if (this.y > 325) {
            this.y = 405;
        } else if (this.y > 245 && this.y <= 325) {
            this.y = 320;
        } else if (this.y > 165 && this.y <= 245) {
            this.y = 240;
        } else if (this.y > 85 && this.y <= 165) {
            this.y = 160;
        } else if (this.y > 5 && this.y <= 85) {
            this.y = 80;
        } else if (this.y <= 0){
            this.y = -10;
            this.winner = "yes";
        }

        // Sets 'Is Winner' flag used to return player to starting postion
        if(this.winner == "yes") {
           alert("You win!");
           this.x = 200;
           this.y = 405;

           this.winner = "no";
        }
    }
};

// Required method of game
Player.prototype.update = function() {
    // players movement handled in handleInput method
};

// Now instantiate your objects.
var FastBug1 = new Enemy(3, 60, 220);
var FastBug2 = new Enemy(300, 60, 220);
var NormalBug1 = new Enemy(100, 140, 90);
var NormalBug2 = new Enemy(325, 140, 90);
var SlowBug1 = new Enemy(205, 225, 45);
var SlowBug2 = new Enemy(455, 225, 45);

// Place all enemy objects in an array called allEnemies
var allEnemies = [FastBug1, FastBug2, NormalBug1, NormalBug2, SlowBug1, SlowBug2];

// Place the player object in a variable called player
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
