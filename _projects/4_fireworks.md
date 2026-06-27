---
layout: page
title: WiFi-triggered fireworks
description: An ESP32 that sets off fireworks when it hears the right WiFi packet
img: assets/img/5.jpg
importance: 3
category: fun
---

This is exactly as responsible as it sounds. I wanted to set off fireworks without standing right next to them, so I wired an ESP32 to a relay and wrote a script that sits and listens for one specific WiFi packet. When the packet shows up, the relay closes, and the relay was wired to the igniter.

There isn't much more to it than that, which is sort of the point — the whole thing is a microcontroller, a relay, and a few lines of code. It worked on the first real test, which I did not entirely expect it to.
