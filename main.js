let key = document.getElementById('key'),
  inv = document.getElementById('cursor'),
  scene = document.createElement('a-scene'),
  assetList = document.createElement('a-assets'),
  assetItem = document.createElement('a-asset-item'),
  entity = document.createElement('a-entity'),
  box = document.createElement('a-box'),
  image = document.createElement('a-image'),
  sound = document.createElement('a-sound');
  drawer_bottom = document.getElementById('drawer-bottom'),
  drawer_middle = document.getElementById('drawer-middle'),
  drawer_top = document.getElementById('drawer-top'),
  drawer_bot_snd = document.getElementById('drawer_bot_snd'),
  drawer_mid_snd = document.getElementById('drawer_mid_snd'),
  drawer_top_snd = document.getElementById('drawer_top_snd'),
  door_open_snd = document.getElementById('door_open_snd'),
  door = document.getElementById('door'),
  error = document.getElementById('error'),
  win = document.getElementById('win'),
  after_party = document.getElementById('after_party'),
  music = document.getElementById('music'),
  img = [],
  image = document.getElementById('image'),
  imgbttn = document.getElementById('imgbttn'),
  music_src = ('assets/just_for_funzies.ogg'),
  open_drawer = ('assets/drawer_open.ogg'),
  close_drawer = ('assets/drawer_close.ogg'),
  open_drawer_bad = ('assets/drawer_open_broken.ogg'),
  close_drawer_bad = ('assets/drawer_close_broken.ogg'),
  remove_drawer = ('assets/Drawer_remove.ogg'),
  open_door = ('assets/door_open.ogg'),
  close_door = ('assets/door_close.ogg'),
  bottom_count = 0,
  middle_count = 0,
  top_count = 0,
  key_hold = false,
  door_open = false,
  waiting = 0;

key.addEventListener('click', function() {
  key.setAttribute('material', 'opacity:0');
  inv.setAttribute('opacity', '1');

  key_hold = true;
});

drawer_bottom.addEventListener('click', function() {
  if ((bottom_count % 2 === 0) && (bottom_count < 5)) {
    drawer_bottom.setAttribute('position', '0.45 -0.5 0');
    drawer_bot_snd.setAttribute('src', open_drawer_bad);
    bottom_count = bottom_count + 1
  } else if (bottom_count == 1) {
    drawer_bottom.setAttribute('position', '0 -0.5 0');
    drawer_bot_snd.setAttribute('src', close_drawer_bad);
    image.setAttribute('src', img[1]);
    bottom_count = bottom_count + 1
  } else if (bottom_count == 3) {
    drawer_bottom.setAttribute('position', '0 -0.5 0');
    drawer_bot_snd.setAttribute('src', close_drawer_bad);
    image.setAttribute('src', img[2]);
    bottom_count = bottom_count + 1
  }
  if (bottom_count == 5) {
    drawer_bottom.setAttribute('position', '-0.46 -0.57 1.85');
    drawer_bottom.setAttribute('rotation', '0 -42.89 0');
    drawer_bot_snd.setAttribute('src', remove_drawer);
  };
});

drawer_middle.addEventListener('click', function() {
  if (middle_count % 2 === 0) {
    drawer_middle.setAttribute('position', '0.45 -0.5 0');
    drawer_mid_snd.setAttribute('src', open_drawer);
  } else {
    drawer_middle.setAttribute('position', '0 -0.5 0');
    drawer_mid_snd.setAttribute('src', close_drawer);
  }
  middle_count = middle_count + 1
});

drawer_top.addEventListener('click', function() {
  if (top_count % 2 === 0) {
    drawer_top.setAttribute('position', '0.45 -0.5 0');
    drawer_top_snd.setAttribute('src', open_drawer);
  } else {
    drawer_top.setAttribute('position', '0 -0.5 0');
    drawer_top_snd.setAttribute('src', close_drawer);
  }
  top_count = top_count + 1
});

//Now for the fun part. Open the bottom drawer 3-times to find the key.
var changeColorRandom = function() {
  var rand = function() {
    return Math.floor(Math.random() * 255)
  };
  document.querySelector('#danceFloor').setAttribute('material', 'color', 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')');
  document.querySelector('#win').setAttribute('material', 'color', 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')');
  document.querySelector('#thanks').setAttribute('color', 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')');
  document.querySelector('#musicBy').setAttribute('color', 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')');
}
//Timed to match the BPM of the song that plays at the end (128 BPM).

door.addEventListener('click', function() {
  if ((key_hold == true) && (waiting > 0)) {
    alert('What are you waiting for? The door is open. You can leave.')
  } else if (key_hold == true) {
    door.setAttribute('position', '4.481841741820505 -0.5 3.087354789145204');
    door.setAttribute('rotation', '0 -85.05162990581995 0');
    door_open_snd.setAttribute('src', open_door);
    error.setAttribute('position', '0 -20 0');
    after_party.setAttribute('position', '0 -0.5 10');
    music.setAttribute('src', music_src);
    inv.setAttribute('opacity', '0');
    inv.setAttribute('position', '0 0 0');
    waiting = waiting + 1;
    door_open = true;
    setInterval(changeColorRandom, 468.75);
    return;
  } else if (key_hold == false){
    alert('You need to find the key!');
    return;
  }
});


function flickrResults(json) {
  for (i = 0; i < json.items.length; i++) {
    img.push(json.items[i].media.m);
  };
  image.setAttribute('src', img[0]);
  // console.log(img);
};

//Alerts
setTimeout(function() {
  alert(`Welcome to Tr4sh P4nda's Room Escape! Find the key to unlock the door and escape.\n \nUse W-A-S-D keys to move around and Left-Click + Drag to look around.`);
}, 2000);

setTimeout(function() {
  if (door_open == false) {
    alert(`If you're having trouble, try checking under the bottom drawer.`);
  };
}, 60000);
