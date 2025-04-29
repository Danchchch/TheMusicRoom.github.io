// Create the global variables: playing, video, and button.
// Set playing to false so the video loads in as paused.
let playing = false;
let video1;
let video1on = true;
let video2;
let video2on = false;
let video3;
let video3on = false;
let video4;
let video4on = false;
let video5;
let video5on = false;
let video6;
let video6on = false;
let video7;
let video7on = false;
let video8;
let video8on = false;
let video9;
let video9on = false;
let video10;
let video10on = false;
let video11;
let video11on = false;
let video12;
let video12on = false;
let video13;
let video13on = false;
let video14;
let video14on = false;
let video15;
let video15on = false;
let timeCheck;
// let videos = ["media/Video test 1.mp4", "media/Video test 2.mp4"]; i=i+1; videos[i].pause(); increase or decrease when it goes left/right;
// crediting, style, colour, project book whole block

function preload() {
  video1 = createVideo('/media/Video test 1.mp4');
  video2 = createVideo('/media/Video test 2.mp4');
  video3 = createVideo('/media/Video test 3.mp4');
  video4 = createVideo('/media/Video test 4.mp4');
  video5 = createVideo('/media/Video test 5.mp4');
  video6 = createVideo('/media/Video test 6.mp4');
  video7 = createVideo('/media/Video test 7.mp4');
  video8 = createVideo('/media/Video test 8.mp4');
  video10 = createVideo('/media/Video test 10.mp4');
  video11 = createVideo('/media/Video test 11.mp4');
  video13 = createVideo('/media/Video test 13.mp4');
  video14 = createVideo('/media/Video test 14.mp4');
}

function setup() {
  // Use the noCanvas() function to remove the canvas.
  noCanvas();

  video1.position(windowWidth/10, windowHeight/25*4);
  video1.size(windowWidth/10*8, windowHeight/10*6);

  video2.position(windowWidth/10, windowHeight/25*4);
  video2.size(windowWidth/10*8, windowHeight/10*6);
  video2.hide();

  video3.position(windowWidth/10, windowHeight/25*4);
  video3.size(windowWidth/10*8, windowHeight/10*6);
  video3.hide();

  video4.position(windowWidth/10, windowHeight/25*4);
  video4.size(windowWidth/10*8, windowHeight/10*6);
  video4.hide();

  video5.position(windowWidth/10, windowHeight/25*4);
  video5.size(windowWidth/10*8, windowHeight/10*6);
  video5.hide();

  video6.position(windowWidth/10, windowHeight/25*4);
  video6.size(windowWidth/10*8, windowHeight/10*6);
  video6.hide();

  video7.position(windowWidth/10, windowHeight/25*4);
  video7.size(windowWidth/10*8, windowHeight/10*6);
  video7.hide();

  video8.position(windowWidth/10, windowHeight/25*4);
  video8.size(windowWidth/10*8, windowHeight/10*6);
  video8.hide();

  video10.position(windowWidth/10, windowHeight/25*4);
  video10.size(windowWidth/10*8, windowHeight/10*6);
  video10.hide();

  video11.position(windowWidth/10, windowHeight/25*4);
  video11.size(windowWidth/10*8, windowHeight/10*6);
  video11.hide();

  video13.position(windowWidth/10, windowHeight/25*4);
  video13.size(windowWidth/10*8, windowHeight/10*6);
  video13.hide();

  video14.position(windowWidth/10, windowHeight/25*4);
  video14.size(windowWidth/10*8, windowHeight/10*6);
  video14.hide();
}

function toggleVid() {

  if (video1on == true) {
      // If the video is playing, pause the video with the pause() method'
      if (playing == true) {
        document.getElementById("play").style.backgroundImage = "url('media/Asset15.png')";
        video1.pause();
       // If the video is paused, play the video with
       // the loop() method'
      } else {
        video1.loop();
        document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";
      } 
    }
  else if (video2on == true) {
    if (playing == true) {
      document.getElementById("play").style.backgroundImage = "url('media/Asset15.png')";
      video2.pause();
    } else {
      video2.loop();
      document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";
    }
  }

  else if (video3on == true) {
    if (playing == true) {
      document.getElementById("play").style.backgroundImage = "url('media/Asset15.png')";
      video3.pause();
    } else {
      video3.loop();
      document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";
    }
  }

  else if (video4on == true) {
    if (playing == true) {
      document.getElementById("play").style.backgroundImage = "url('media/Asset15.png')";
      video4.pause();
    } else {
      video4.loop();
      document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";
    }
  }

  else if (video5on == true) {
    if (playing == true) {
      document.getElementById("play").style.backgroundImage = "url('media/Asset15.png')";
      video5.pause();
    } else {
      video5.loop();
      document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";
    }
  }

  else if (video6on == true) {
    if (playing == true) {
      document.getElementById("play").style.backgroundImage = "url('media/Asset15.png')";
      video6.pause();
    } else {
      video6.loop();
      document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";
    }
  }

  else if (video7on == true) {
    if (playing == true) {
      document.getElementById("play").style.backgroundImage = "url('media/Asset15.png')";
      video7.pause();
    } else {
      video7.loop();
      document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";
    }
  }

  else if (video8on == true) {
    if (playing == true) {
      document.getElementById("play").style.backgroundImage = "url('media/Asset15.png')";
      video8.pause();
    } else {
      video8.loop();
      document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";
    }
  }

  else if (video10on == true) {
    if (playing == true) {
      document.getElementById("play").style.backgroundImage = "url('media/Asset15.png')";
      video10.pause();
    } else {
      video10.loop();
      document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";
    }
  }

  else if (video11on == true) {
    if (playing == true) {
      document.getElementById("play").style.backgroundImage = "url('media/Asset15.png')";
      video11.pause();
    } else {
      video11.loop();
      document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";
    }
  }

  else if (video13on == true) {
    if (playing == true) {
      document.getElementById("play").style.backgroundImage = "url('media/Asset15.png')";
      video13.pause();
    } else {
      video13.loop();
      document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";
    }
  }

  else if (video14on == true) {
    if (playing == true) {
      document.getElementById("play").style.backgroundImage = "url('media/Asset15.png')";
      video14.pause();
    } else {
      video14.loop();
      document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";
    }
  }
 

  // Once the video playing status has been toggled,
  // switch playing to the opposite boolean value.
  playing = !playing;
}

function secmin() {
  if (video1on == true) {
    timeCheck = video1.time();
    timeCheck = timeCheck - 5;
    video1.time(timeCheck);
  } else if (video2on == true) {
    timeCheck = video2.time();
    timeCheck = timeCheck - 5;
    video2.time(timeCheck);
  } else if (video3on == true) {
    timeCheck = video3.time();
    timeCheck = timeCheck - 5;
    video3.time(timeCheck);
  } else if (video4on == true) {
    timeCheck = video4.time();
    timeCheck = timeCheck - 5;
    video4.time(timeCheck);
  } else if (video5on == true) {
    timeCheck = video5.time();
    timeCheck = timeCheck - 5;
    video5.time(timeCheck);
  } else if (video6on == true) {
    timeCheck = video6.time();
    timeCheck = timeCheck - 5;
    video6.time(timeCheck);
  } else if (video7on == true) {
    timeCheck = video7.time();
    timeCheck = timeCheck - 5;
    video7.time(timeCheck);
  } else if (video8on == true) {
    timeCheck = video8.time();
    timeCheck = timeCheck - 5;
    video8.time(timeCheck);
  } else if (video10on == true) {
    timeCheck = video10.time();
    timeCheck = timeCheck - 5;
    video10.time(timeCheck);
  } else if (video11on == true) {
    timeCheck = video11.time();
    timeCheck = timeCheck - 5;
    video11.time(timeCheck);
  } else if (video13on == true) {
    timeCheck = video13.time();
    timeCheck = timeCheck - 5;
    video13.time(timeCheck);
  } else if (video14on == true) {
    timeCheck = video14.time();
    timeCheck = timeCheck - 5;
    video14.time(timeCheck);
  }
}

function secplus() {
  if (video1on == true) {
    timeCheck = video1.time();
    timeCheck = timeCheck + 5;
    video1.time(timeCheck);
  } else if (video2on == true) {
    timeCheck = video2.time();
    timeCheck = timeCheck + 5;
    video2.time(timeCheck);
  } else if (video3on == true) {
    timeCheck = video3.time();
    timeCheck = timeCheck + 5;
    video3.time(timeCheck);
  } else if (video4on == true) {
    timeCheck = video4.time();
    timeCheck = timeCheck + 5;
    video4.time(timeCheck);
  } else if (video5on == true) {
    timeCheck = video5.time();
    timeCheck = timeCheck + 5;
    video5.time(timeCheck);
  } else if (video6on == true) {
    timeCheck = video6.time();
    timeCheck = timeCheck + 5;
    video6.time(timeCheck);
  } else if (video7on == true) {
    timeCheck = video7.time();
    timeCheck = timeCheck + 5;
    video7.time(timeCheck);
  } else if (video8on == true) {
    timeCheck = video8.time();
    timeCheck = timeCheck + 5;
    video8.time(timeCheck);
  } else if (video10on == true) {
    timeCheck = video10.time();
    timeCheck = timeCheck + 5;
    video10.time(timeCheck);
  } else if (video11on == true) {
    timeCheck = video11.time();
    timeCheck = timeCheck + 5;
    video11.time(timeCheck);
  } else if (video13on == true) {
    timeCheck = video13.time();
    timeCheck = timeCheck + 5;
    video13.time(timeCheck);
  } else if (video14on == true) {
    timeCheck = video14.time();
    timeCheck = timeCheck + 5;
    video14.time(timeCheck);
  }
}

// Dani arrows/buttons changes

function changeVid1() {
  document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";

  timeCheck = video1.time();

  video2.time(timeCheck);
  video2.play();
  video2.show();

  video1.pause();
  video1.hide();

  playing = true;
  video1on = false;
  video2on = true;

  document.getElementById("center1").style.display = "none";
  document.getElementById("center2").style.display = "none";
  document.getElementById("left1").style.display = "block";
  document.getElementById("Dani1").style.display = "none";
  document.getElementById("Dani2").style.display = "none";
}

function changeVid2() {
  document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";
  
  timeCheck = video2.time();

  video1.time(timeCheck);
  video1.play();
  video1.show();

  video2.pause();
  video2.hide();

  playing = true;
  video2on = false;
  video1on = true;

  document.getElementById("center1").style.display = "block";
  document.getElementById("center2").style.display = "block";
  document.getElementById("left1").style.display = "none";
  document.getElementById("Dani1").style.display = "block";
  document.getElementById("Dani2").style.display = "block";
}

function changeVid3() {
  document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";

  timeCheck = video1.time();

  video3.time(timeCheck);
  video3.play();
  video3.show();

  video1.pause();
  video1.hide();

  playing = true;
  video1on = false;
  video3on = true;

  document.getElementById("center1").style.display = "none";
  document.getElementById("center2").style.display = "none";
  document.getElementById("right1").style.display = "block";
  document.getElementById("Dani1").style.display = "none";
  document.getElementById("Dani2").style.display = "none";
}

function changeVid4() {
  document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";

  timeCheck = video3.time();

  video1.time(timeCheck);
  video1.play();
  video1.show();

  video3.pause();
  video3.hide();

  playing = true;
  video3on = false;
  video1on = true;

  document.getElementById("center1").style.display = "block";
  document.getElementById("center2").style.display = "block";
  document.getElementById("right1").style.display = "none";
  document.getElementById("Dani1").style.display = "block";
  document.getElementById("Dani2").style.display = "block";
}

 function switchleft1() {
  document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";

  timeCheck = video1.time();

  video4.time(timeCheck);
  video4.play();
  video4.show();

  video1.pause();
  video1.hide();

  playing = true;
  video1on = false;
  video4on = true;

  document.getElementById("dancer").innerHTML = "Mayara";
  document.getElementById("music").innerHTML = "Afrobeat and classical remix (Love Nwantiti (ft. ElGrandeToto) by Ckay remixed with Eshcaton Tony Anderson ";

  document.getElementById("center1").style.display = "none";
  document.getElementById("center2").style.display = "none";
  document.getElementById("center9").style.display = "block";
  document.getElementById("center10").style.display = "block";
  document.getElementById("Dani1").style.display = "none";
  document.getElementById("Dani2").style.display = "none";
  document.getElementById("Mayara1").style.display = "block";
  document.getElementById("Mayara2").style.display = "block";
 }

 function switchright1() {
  document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";

  timeCheck = video1.time();

  video10.time(timeCheck);
  video10.play();
  video10.show();

  video1.pause();
  video1.hide();

  playing = true;
  video1on = false;
  video10on = true;

  document.getElementById("dancer").innerHTML = "Yan Wa";
  document.getElementById("music").innerHTML = "Beethoven, Moonlight Sonata nightmare remix by Musical basics";

  document.getElementById("center1").style.display = "none";
  document.getElementById("center2").style.display = "none";
  document.getElementById("center3").style.display = "block";
  document.getElementById("Dani1").style.display = "none";
  document.getElementById("Dani2").style.display = "none";
  document.getElementById("YanWa1").style.display = "block";
  document.getElementById("YanWa2").style.display = "block";
}

// Yan Wa arrows/buttons changes

function changeVid5() {
  document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";

  timeCheck = video10.time();

  video11.time(timeCheck);
  video11.play();
  video11.show();

  video10.pause();
  video10.hide();

  playing = true;
  video10on = false;
  video11on = true;

  document.getElementById("center3").style.display = "none";
  document.getElementById("center4").style.display = "none";
  document.getElementById("left2").style.display = "block";
  document.getElementById("YanWa1").style.display = "none";
  document.getElementById("YanWa2").style.display = "none";
}

function changeVid6() {
  document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";
  
  timeCheck = video11.time();

  video10.time(timeCheck);
  video10.play();
  video10.show();

  video11.pause();
  video11.hide();

  playing = true;
  video11on = false;
  video10on = true;

  document.getElementById("center3").style.display = "block";
  document.getElementById("center4").style.display = "none";
  document.getElementById("left2").style.display = "none";
  document.getElementById("YanWa1").style.display = "block";
  document.getElementById("YanWa2").style.display = "block";
}

function switchleft2() {
  document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";

  timeCheck = video10.time();

  video1.time(timeCheck);
  video1.play();
  video1.show();

  video10.pause();
  video10.hide();

  playing = true;
  video10on = false;
  video1on = true;

  document.getElementById("dancer").innerHTML = "Dani";
  document.getElementById("music").innerHTML = "Afrobeat and classical remix (Love Nwantiti (ft. ElGrandeToto) by Ckay remixed with Eshcaton Tony Anderson ";

  document.getElementById("center1").style.display = "block";
  document.getElementById("center2").style.display = "block";
  document.getElementById("center3").style.display = "none";
  document.getElementById("center4").style.display = "none";
  document.getElementById("Dani1").style.display = "block";
  document.getElementById("Dani2").style.display = "block";
  document.getElementById("YanWa1").style.display = "none";
  document.getElementById("YanWa2").style.display = "none";
 }

 function switchright2() {
  document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";

  timeCheck = video10.time();

  video7.time(timeCheck);
  video7.play();
  video7.show();

  video10.pause();
  video10.hide();

  playing = true;
  video10on = false;
  video7on = true;

  document.getElementById("dancer").innerHTML = "Yisola";
  document.getElementById("music").innerHTML = "Drill and classical music remix (original lyrics by Dato & classical song is Don’t Go by Christopher Dennis Coleman)";

  document.getElementById("center3").style.display = "none";
  document.getElementById("center4").style.display = "none";
  document.getElementById("center5").style.display = "block";
  document.getElementById("Yisola1").style.display = "block";
  document.getElementById("Yisola2").style.display = "block";
  document.getElementById("YanWa1").style.display = "none";
  document.getElementById("YanWa2").style.display = "none";
}

// Yisola buttons/arrows changes

function changeVid9() {
  document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";

  timeCheck = video7.time();

  video8.time(timeCheck);
  video8.play();
  video8.show();

  video7.pause();
  video7.hide();

  playing = true;
  video7on = false;
  video8on = true;

  document.getElementById("center5").style.display = "none";
  document.getElementById("left3").style.display = "block";
  document.getElementById("Yisola1").style.display = "none";
  document.getElementById("Yisola2").style.display = "none";
}

function changeVid10() {
  document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";
  
  timeCheck = video8.time();

  video7.time(timeCheck);
  video7.play();
  video7.show();

  video8.pause();
  video8.hide();

  playing = true;
  video8on = false;
  video7on = true;

  document.getElementById("center5").style.display = "block";
  document.getElementById("left3").style.display = "none";
  document.getElementById("Yisola1").style.display = "block";
  document.getElementById("Yisola2").style.display = "block";
}

function switchleft3() {
  document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";

  timeCheck = video7.time();

  video10.time(timeCheck);
  video10.play();
  video10.show();

  video7.pause();
  video7.hide();

  playing = true;
  video7on = false;
  video10on = true;

  document.getElementById("dancer").innerHTML = "Yan Wa";
  document.getElementById("music").innerHTML = "Beethoven, Moonlight Sonata nightmare remix by Musical basics";

  document.getElementById("center3").style.display = "block";
  document.getElementById("center5").style.display = "none";
  document.getElementById("center6").style.display = "none";
  document.getElementById("YanWa1").style.display = "block";
  document.getElementById("YanWa2").style.display = "block";
  document.getElementById("Yisola1").style.display = "none";
  document.getElementById("Yisola2").style.display = "none";
 }

 function switchright3() {
  document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";

  timeCheck = video7.time();

  video13.time(timeCheck);
  video13.play();
  video13.show();

  video7.pause();
  video7.hide();

  playing = true;
  video7on = false;
  video13on = true;

  document.getElementById("dancer").innerHTML = "Isha";
  document.getElementById("music").innerHTML = "Yoon Shabnami · Monty Sharma · Parthiv Gohil";

  document.getElementById("center5").style.display = "none";
  document.getElementById("center6").style.display = "none";
  document.getElementById("center7").style.display = "block";
  document.getElementById("Isha1").style.display = "block";
  document.getElementById("Isha2").style.display = "block";
  document.getElementById("Yisola1").style.display = "none";
  document.getElementById("Yisola2").style.display = "none";
}

// Isha buttons/arrows changes

function changeVid13() {
  document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";

  timeCheck = video13.time();

  video14.time(timeCheck);
  video14.play();
  video14.show();

  video13.pause();
  video13.hide();

  playing = true;
  video13on = false;
  video14on = true;

  document.getElementById("center7").style.display = "none";
  document.getElementById("left4").style.display = "block";
  document.getElementById("Isha1").style.display = "none";
  document.getElementById("Isha2").style.display = "none";
}

function changeVid14() {
  document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";
  
  timeCheck = video14.time();

  video13.time(timeCheck);
  video13.play();
  video13.show();

  video14.pause();
  video14.hide();

  playing = true;
  video14on = false;
  video13on = true;

  document.getElementById("center7").style.display = "block";
  document.getElementById("left4").style.display = "none";
  document.getElementById("Isha1").style.display = "block";
  document.getElementById("Isha2").style.display = "block";
}

function switchleft4() {
  document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";

  timeCheck = video13.time();

  video7.time(timeCheck);
  video7.play();
  video7.show();

  video13.pause();
  video13.hide();

  playing = true;
  video13on = false;
  video7on = true;

  document.getElementById("dancer").innerHTML = "Yisola";
  document.getElementById("music").innerHTML = "Drill and classical music remix (original lyrics by Dato & classical song is Don’t Go by Christopher Dennis Coleman)";

  document.getElementById("center5").style.display = "block";
  document.getElementById("center7").style.display = "none";
  document.getElementById("Yisola1").style.display = "block";
  document.getElementById("Yisola2").style.display = "block";
  document.getElementById("Isha1").style.display = "none";
  document.getElementById("Isha2").style.display = "none";
 }

 function switchright4() {
  document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";

  timeCheck = video13.time();

  video4.time(timeCheck);
  video4.play();
  video4.show();

  video13.pause();
  video13.hide();

  playing = true;
  video13on = false;
  video4on = true;

  document.getElementById("dancer").innerHTML = "Mayara";
  document.getElementById("music").innerHTML = "Afrobeat and classical remix (Love Nwantiti (ft. ElGrandeToto) by Ckay remixed with Eshcaton Tony Anderson ";

  document.getElementById("center7").style.display = "none";
  document.getElementById("center9").style.display = "block";
  document.getElementById("center10").style.display = "block";
  document.getElementById("Mayara1").style.display = "block";
  document.getElementById("Mayara2").style.display = "block";
  document.getElementById("Isha1").style.display = "none";
  document.getElementById("Isha2").style.display = "none";
}

// Mayara buttons/arrows changes

function changeVid17() {
  document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";

  timeCheck = video4.time();

  video5.time(timeCheck);
  video5.play();
  video5.show();

  video4.pause();
  video4.hide();

  playing = true;
  video4on = false;
  video5on = true;

  document.getElementById("center9").style.display = "none";
  document.getElementById("center10").style.display = "none";
  document.getElementById("left5").style.display = "block";
  document.getElementById("Mayara1").style.display = "none";
  document.getElementById("Mayara2").style.display = "none";
}

function changeVid18() {
  document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";
  
  timeCheck = video5.time();

  video4.time(timeCheck);
  video4.play();
  video4.show();

  video5.pause();
  video5.hide();

  playing = true;
  video5on = false;
  video4on = true;

  document.getElementById("center9").style.display = "block";
  document.getElementById("center10").style.display = "block";
  document.getElementById("left5").style.display = "none";
  document.getElementById("Mayara1").style.display = "block";
  document.getElementById("Mayara2").style.display = "block";
}

function changeVid19() {
  document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";

  timeCheck = video4.time();

  video6.time(timeCheck);
  video6.play();
  video6.show();

  video4.pause();
  video4.hide();

  playing = true;
  video4on = false;
  video6on = true;

  document.getElementById("center9").style.display = "none";
  document.getElementById("center10").style.display = "none";
  document.getElementById("right5").style.display = "block";
  document.getElementById("Mayara1").style.display = "none";
  document.getElementById("Mayara2").style.display = "none";
}

function changeVid20() {
  document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";
  
  timeCheck = video6.time();

  video4.time(timeCheck);
  video4.play();
  video4.show();

  video6.pause();
  video6.hide();

  playing = true;
  video6on = false;
  video4on = true;

  document.getElementById("center9").style.display = "block";
  document.getElementById("center10").style.display = "block";
  document.getElementById("right5").style.display = "none";
  document.getElementById("Mayara1").style.display = "block";
  document.getElementById("Mayara2").style.display = "block";
}

function switchleft5() {
  document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";

  timeCheck = video4.time();

  video13.time(timeCheck);
  video13.play();
  video13.show();

  video4.pause();
  video4.hide();

  playing = true;
  video4on = false;
  video13on = true;

  document.getElementById("dancer").innerHTML = "Isha";
  document.getElementById("music").innerHTML = "Yoon Shabnami · Monty Sharma · Parthiv Gohil";

  document.getElementById("center7").style.display = "block";
  document.getElementById("center9").style.display = "none";
  document.getElementById("center10").style.display = "none";
  document.getElementById("Isha1").style.display = "block";
  document.getElementById("Isha2").style.display = "block";
  document.getElementById("Mayara1").style.display = "none";
  document.getElementById("Mayara2").style.display = "none";
 }

 function switchright5() {
  document.getElementById("play").style.backgroundImage = "url('media/Asset14.png')";

  timeCheck = video4.time();

  video1.time(timeCheck);
  video1.play();
  video1.show();

  video4.pause();
  video4.hide();

  playing = true;
  video4on = false;
  video1on = true;

  document.getElementById("dancer").innerHTML = "Dani";
  document.getElementById("music").innerHTML = "Afrobeat and classical remix (Love Nwantiti (ft. ElGrandeToto) by Ckay remixed with Eshcaton Tony Anderson ";

  document.getElementById("center9").style.display = "none";
  document.getElementById("center10").style.display = "none";
  document.getElementById("center2").style.display = "block";
  document.getElementById("center1").style.display = "block";
  document.getElementById("Dani1").style.display = "block";
  document.getElementById("Dani2").style.display = "block";
  document.getElementById("Mayara1").style.display = "none";
  document.getElementById("Mayara2").style.display = "none";
}