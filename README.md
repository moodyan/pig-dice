# _Pig Dice_

#### _Web Application created for in-class activity during fourth week at Epicodus, May 10th, 2017_

#### By _**Alyssa Moody and Buna Ezeofor**_

## Description

_Web application where two users can play Pig dice against each other. Game Rules:_

_On a turn, a player rolls the die repeatedly until either:_

* _A 1 is rolled_
* _The player chooses to hold (stop rolling)_

_If a 1 is rolled, that player's turn ends and no points are earned._
_If the player chooses to hold, all of the points rolled during that turn are added to his or her score. When a player reaches a total of 100 or more points, the game ends and that player is the winner._

## Program Specifications

| Description  | Input Example | Output Example |
| ------------- | ------------- | ------------- |
| The program does not allow for anything other than numbers to be entered.  | e  | "Please enter a number."  |
| The program recognizes when the "Play" button is pushed and returns a random number between 1 and 6.  | "Play"  | 3  |
| The program will add the players points together when the player presses hold. The program tells player one their total, and tells player two that it is their turn.  | "Play" "Play" "Play" "Hold"  | 3, 4, 6 = 13  |
| If the program returns 1, the program will stop and add "0" to their score and tells player two that it is their turn.  | "Play"  | 1 --> 0  |
| The program retains the players' scores and when one player reaches a total of 100, the program declares the winner.  | 100 points  | "PLAYER ONE IS THE WINNER"  |



## Setup/Installation Requirements

* _Clone repository onto desktop from GitHub_
* _Use preferred browser to view index.html_

## Known Bugs

_NA._

## Support and contact details

_NA._

## Technologies Used

_HTML, CSS, JavaScript, jQuery_

### License

*Nah.*

Copyright (c) 2017 **_Alyssa Moody and Buna Ezeofor_**
