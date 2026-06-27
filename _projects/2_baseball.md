---
layout: page
title: In search of the most exciting baseball game
description: A metric for how exciting a game actually was, run across decades of box scores
img: assets/img/12.jpg
importance: 1
category: fun
github: https://github.com/nsgodshall/baseball-excitement
---

This started as an argument: what actually makes a baseball game exciting to watch? I wanted a number instead of a vibe.

The metric I landed on combines two things. The first is the total swing in win probability over the course of a game, weighted toward the end — a lead that flips in the ninth should count for a lot more than one that flips in the second. The second is the game's average leverage index, which is basically a measure of how much each moment mattered. A blowout with one weird inning scores low. A back-and-forth game where every at-bat could decide it scores high.

I pulled the play-by-play and win-probability data from Baseball Reference and FanGraphs, then ran every game through the formula and ranked them.

One of the most exciting games it surfaced was one I had the misfortune of attending in person: [Dodgers vs. Pirates, July 4, 2023](https://www.baseball-reference.com/boxes/LAN/LAN202307040.shtml). I'm a Dodger fan, and we found a way to lose it. The metric, at least, had the decency to confirm it was a great game.

The full ranking lives in the repo.
