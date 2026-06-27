---
layout: page
title: AlphaFour
description: A Connect Four-playing machine that beats you at your own game — my mechanical engineering senior design project
img: assets/img/9.jpg
importance: 5
category: fun
github: https://github.com/nsgodshall/AlphaFour
---

AlphaFour was my senior design project at UCLA: a machine that plays Connect Four against a human and, more often than not, wins. The name is a nod to AlphaGo, with considerably lower stakes.

The hardware is a mechanism that physically drops chips into the board. To keep track of the game state, we ran IR sensors across the grid to detect where each chip landed — both the human's moves and its own. That gave the machine a live picture of the board without anyone having to tell it what was happening.

The brain is a minimax algorithm I wrote from scratch. It looks ahead through possible move sequences, assumes you'll play your best, and picks the move that puts it in the strongest position. Connect Four is actually a solved game, so with enough lookahead the machine is very hard to beat — which was exactly the point.

There's a video of it in action [here](https://www.youtube.com/watch?v=e2tkhEhhVOQ).
