var sceneShell = [
      scene = {
        id: 'scene',
        physics: 'debug: true',
        cursoer: 'rayOrigin: Mouse',
        fog: 'color: black; near: -10; far: 30'
      }
    ],
    assetItems = [
      key = {
        id: 'key-obj',
        src: 'assets/key.obj'
      },
      roomObj = {
        id: 'room-obj',
        src: 'assets/room.obj'
      },
      roomMtl = {
        id: 'room-mtl',
        src: 'assets/room.mtl'
      },
      tableObj = {
        id: 'side-table-obj',
        src: 'assets/side-table.obj'
      },
      tableMtl = {
        id: 'side-table-mtl',
        src: 'assets/side-table.mtl'
      },
      topDrawerObj = {
        id: 'drawer-top-obj',
        src: 'assets/drawer-top.obj'
      },
      topDrawerMtl = {
        id: 'drawer-top-mtl',
        src: 'assets/drawer-top.mtl'
      },
      midDrawerObj = {
        id: 'drawer-mid-obj',
        src: 'assets/drawer-middle.obj'
      },
      midDrawerMtl = {
        id: 'drawer-mid-mtl',
        src: 'assets/drawer-middle.mtl'
      },
      botDrawerObj = {
        id: 'drawer-bot-obj',
        src: 'assets/drawer-bottom.obj'
      },
      botDrawerMtl = {
        id: 'drawer-bot-mtl',
        src: 'assets/drawer-bottom.mtl'
      },
      doorObj = {
        id: 'door-obj',
        src: 'assets/door.obj'
      },
      doorMtl = {
        id: 'door-mtl',
        src: 'assets/door.mtl'
      },
      lampsObj = {
        id: 'lamps-obj',
        src: 'assets/lamps.obj'
      },
      lampsMtl = {
        id: 'lamps-mtl',
        src: 'assets/lamps.mtl'
      }
    ];
    key = {
      id: 'key',
      objModel: "obj: #key-obj",
      material: "color: gold",
      position: '-3.73 -0.35 -0.11',
      rotation: '0 125 90',
      scale: '0.025 0.025 0.025'
    };
    models = [
      room = {
        id: 'room',
        obj: '#room-obj',
        mtl: '#room-mtl'
      },
      sideTable = {
        id: 'sideTable',
        obj: '#side-table-obj',
        mtl: '#side-table-mtl'
      },
      drawerTop = {
        id: 'drawerTop',
        obj: '#drawer-top-obj',
        mtl: '#drawer-top-mtl'
      },
      drawerMid = {
        id: 'drawerMid',
        obj: '#drawer-mid-obj',
        mtl: '#drawer-mid-mtl'
      },
      drawerBot = {
        id: 'drawerBot',
        obj: '#drawer-bot-obj',
        mtl: '#drawer-bot-mtl'
      },
      door = {
        id: 'door',
        obj: '#door-obj',
        mtl: '#door-mtl'
      },
      lamps = {
        id: 'lamps',
        obj: '#lamps-obj',
        mtl: '#lamps-mtl'
      }
    ];

var html = document.querySelector('html'),
    body = document.querySelector('body'),
    scene = document.querySelector('a-scene'),
    mother = document.createElement('a-entity'),
    assetList = document.createElement('a-assets');


function buildScene(){

  for (i = 0; i < sceneShell.length; i++){
    var element = `element${i}`;
    element = document.createElement('a-scene');
    element.setAttribute('id', sceneShell[i].id);
    element.setAttribute('physics', sceneShell[i].physics);
    element.setAttribute('cursor', sceneShell[i].cursor);
    element.setAttribute('fog', sceneShell[i].fog);
    body.appendChild(element);
  };



  scene.appendChild(assetList);

  for (i = 0; i < assetItems.length; i++){
    var element = `element${i}`;
    element = document.createElement('a-asset-item');
    element.setAttribute('id', assetItems[i].id);
    element.setAttribute('src', assetItems[i].src);
    assetList.appendChild(element);
  };

  mother.setAttribute('id', 'mother');
  mother.setAttribute('rotation', '0 180 0');
  scene.appendChild(mother);

  for (i = 0; i < models.length; i++){
    var element = "element" + i;
    element = document.createElement('a-entity');
    element.setAttribute('id', models[i].id);
    element.setAttribute('obj', models[i].obj);
    element.setAttribute('mtl', models[i].mtl);
    mother.appendChild(element);
  };
};

buildScene();
console.log(mother);


// function setAttributes(entity, attrs) {
//   for (var key in attrs) {
//     entity.setAttribute(key, attrs[key]);
//   }
// };
// setAttributes(assets, {
//   "id": "asset-list",
// });
// setAttributes(key, {
//   "id": "key-obj",
//   "src": "assets/key.obj",
//   "color": "gold",
//   "position": "-3.73 -0.35 -0.11",
//   "scale": "0.025 0.025 0.025",
//   "rotation": "0 125 90"
// });

//Building entities
// assets.setAttribute('id', 'asset-list');
// key.setAttribute(id: 'key-obj'), (src: 'assets/key.obj');
// key.setAttribute('src', 'assets/key.obj');
// console.log(key);


//Assembling Scene
// scene.appendChild(assets);
// assets.appendChild(key);



// key.addEventListener('click', function() {
//   key.setAttribute('material', 'opacity:0');
//   key_hold = true;
// });


// drawer_bottom.addEventListener('click', function() {
//   if ((bottom_count % 2 === 0) && (bottom_count < 5)) {
//     drawer_bottom.setAttribute('position', '0.45 -0.5 0');
//     drawer_bot_snd.setAttribute('src', open_drawer_bad);
//     bottom_count = bottom_count + 1
//   } else if (bottom_count <= 3) {
//     drawer_bottom.setAttribute('position', '0 -0.5 0');
//     drawer_bot_snd.setAttribute('src', close_drawer_bad);
//     bottom_count = bottom_count + 1
//   }
//   if (bottom_count == 5) {
//     drawer_bottom.setAttribute('position', '-0.46 -0.57 1.85');
//     drawer_bottom.setAttribute('rotation', '0 -42.89 0');
//     drawer_bot_snd.setAttribute('src', remove_drawer);
//   }
// });
//
// drawer_middle.addEventListener('click', function() {
//   if (middle_count % 2 === 0) {
//     drawer_middle.setAttribute('position', '0.45 -0.5 0');
//     drawer_mid_snd.setAttribute('src', open_drawer);
//   } else {
//     drawer_middle.setAttribute('position', '0 -0.5 0');
//     drawer_mid_snd.setAttribute('src', close_drawer);
//   }
//   middle_count = middle_count + 1
// });
//
// drawer_top.addEventListener('click', function() {
//   if (top_count % 2 === 0) {
//     drawer_top.setAttribute('position', '0.45 -0.5 0');
//     drawer_top_snd.setAttribute('src', open_drawer);
//   } else {
//     drawer_top.setAttribute('position', '0 -0.5 0');
//     drawer_top_snd.setAttribute('src', close_drawer);
//   }
//   top_count = top_count + 1
// });
//
// //Now for the fun part. Open the bottom drawer 3-times to find the key.*/
// door.addEventListener('click', function() {
//   if ((key_hold == true) && (waiting > 0)) {
//     alert('What are you waiting for? The door is open. You can leave.')
//   } else if (key_hold == true) {
//     door.setAttribute('position', '4.481841741820505 -0.5 3.087354789145204');
//     door.setAttribute('rotation', '0 -85.05162990581995 0');
//     door_open_snd.setAttribute('src', open_door);
//     error.setAttribute('position', '0 -20 0');
//     after_party.setAttribute('position', '0 -0.5 10');
//     music.setAttribute('src', music_src);
//     waiting = waiting + 1
//     door_open = true;
//   } else {
//     alert('You need to find the key!');
//   }
// });
//
// var changeColorRandom = function() {
//   var rand = function() {
//     return Math.floor(Math.random() * 255)
//   };
//   document.querySelector('#danceFloor').setAttribute('material', 'color', 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')');
//   document.querySelector('#win').setAttribute('material', 'color', 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')');
// }
// setInterval(changeColorRandom, 469);
//

//
// setTimeout(function() {
//   alert(`Welcome to Tr4sh P4nda's Room Escape! Find the key to unlock the door and escape. Use W-A-S-D keys to move around and Left-Click + Drag to look around.`);
// }, 2000);
// setTimeout(function() {
//   if (key_hold == false){
//     alert(`If you're having trouble, try checking under the bottom drawer.`);
//   }
// }, 60000);
// setTimeout(function() {
//   if ((key_hold == true)&&(door_open == false)){
//     alert(`What are you waiting for? You have the key. Now open the door!`);
//   }
// }, 60000);
