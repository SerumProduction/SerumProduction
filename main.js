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
    },
    djObj = {
      id: 'dj-obj',
      src: 'assets/DJTable.obj'
    },
    djMtl = {
      id: 'dj-mtl',
      src: 'assets/DJTable.mtl'
    },
    stageObj = {
      id: 'stage-obj',
      src: 'assets/Stage.obj'
    },
    stageMtl = {
      id: 'stage-mtl',
      src: 'assets/stage.mtl'
    },
    ltMountsObj = {
      id: 'ltMounts-obj',
      src: 'assets/LtMounts.obj'
    },
    ltMountsMtl = {
      id: 'ltMounts-mtl',
      src: 'assets/LtMounts.mtl'
    },
    lightsObj = {
      id: 'lights-obj',
      src: 'assets/Lights.obj'
    },
    lightsMtl = {
      id: 'lights-mtl',
      src: 'assets/Lights.mtl'
    }
  ],
  attributes = [{
      attribute: 'opacity',
      from: '0',
      to: '0.8',
      direction: 'alternate',
      dur: '50',
      repeat: 'indefinite'
    },
    {
      attribute: 'opacity',
      from: '0',
      to: '0.8',
      direction: 'alternate',
      dur: '50',
      repeat: 'indefinite'
    },
    {
      attribute: 'opacity',
      from: '0',
      to: '0.8',
      direction: 'alternate',
      dur: '50',
      repeat: 'indefinite'
    },
    {
      attribute: 'opacity',
      from: '0',
      to: '0.8',
      direction: 'alternate',
      dur: '50',
      repeat: 'indefinite'
    },
    {
      attribute: 'opacity',
      from: '0',
      to: '0.8',
      direction: 'alternate',
      dur: '50',
      repeat: 'indefinite'
    }
  ],
  key = {
    id: 'key',
    src: '#key-obj',
    color: 'gold',
    position: '-3.65 -0.25 -0.11',
    rotation: '0 125 90',
    scale: '0.025 0.025 0.025'
  },
  roomModels = [
    room = {
      id: 'room',
      src: '#room-obj',
      mtl: '#room-mtl'
    },
    sideTable = {
      id: 'sideTable',
      src: '#side-table-obj',
      mtl: '#side-table-mtl'
    },
    drawerTop = {
      id: 'drawerTop',
      src: '#drawer-top-obj',
      mtl: '#drawer-top-mtl'
    },
    drawerMid = {
      id: 'drawerMid',
      src: '#drawer-mid-obj',
      mtl: '#drawer-mid-mtl'
    },
    drawerBot = {
      id: 'drawerBot',
      src: '#drawer-bot-obj',
      mtl: '#drawer-bot-mtl'
    },
    lamps = {
      id: 'lamps',
      src: '#lamps-obj',
      mtl: '#lamps-mtl'
    },
    door = {
      id: 'door',
      src: '#door-obj',
      mtl: '#door-mtl'
    }
  ],
  sounds = [
    topDwrSnd = {
      id: 'drawer-top-snd',
      src: '',
      autoplay: 'true',
      loop: 'false',
      volume: '2'
    },
    midDwrSnd = {
      id: 'drawer-mid-snd',
      src: '',
      autoplay: 'true',
      loop: 'false',
      volume: '2'
    },
    botDrwSnd = {
      id: 'drawer-bot-snd',
      src: '',
      autoplay: 'true',
      loop: 'false',
      volume: '2'
    },
    doorOpenSnd = {
      id: 'door-open-snd',
      src: '',
      autoplay: 'true',
      loop: 'false',
      volume: '2'
    }
  ];

//Scene contstruction
  var html = document.querySelector('html'),
      body = document.querySelector('body'),
      scene = document.querySelector('a-scene'),
      mother = document.createElement('a-entity'),
      assetList = document.createElement('a-assets'),
      sky = document.createElement('a-sphere'),
      camera = document.createElement('a-camera');

async function buildScene() {
  scene.appendChild(assetList);
  assetList.setAttribute('id', 'assetList');
  mother.setAttribute('id', 'mother');
  mother.setAttribute('rotation', '0 180 0');
  scene.appendChild(mother);
  mother.innerHTML = (
    `<a-entity id="sky" geometry="primitive: sphere; radius: 65;" material="shader: skyGradient; colorTop: #353449; colorBottom: #BC483E; side: back"></a-entity>
    <a-entity id="ground" ground position="0 -0.5 0" rotation="0 90 0" scale="1.5 1.5 1.5"></a-entity>`
  );

  //Group Assembly Functions
  function addAssetsToScene(attributes) {
    var object = document.createElement('a-asset-item');
    for (var key in attributes) {
      object.setAttribute(key, attributes[key]);
    };
    assetList.appendChild(object);
    // console.log(object);
  }

  function addObjectToMother(tag, attributes) {
    var object = document.createElement(tag);
    for (var key in attributes) {
      object.setAttribute(key, attributes[key]);
    };
    mother.appendChild(object);
    // console.log(object);
  };

  function addImagesToError(tag, attributes) {
    var object = document.createElement(tag),
      error = document.querySelector('#error');
    for (var key in attributes) {
      object.setAttribute(key, attributes[key]);
    };
    error.appendChild(object);
    // console.log(object);
  };

  function addObjectToStage(tag, attributes) {
    var object = document.createElement(tag);
    for (var key in attributes) {
      object.setAttribute(key, attributes[key]);
    };
    stage_set.appendChild(object);
    // console.log(object);
  };

  function addObjectToAfterParty(tag, attributes) {
    var object = document.createElement(tag);
    for (var key in attributes) {
      object.setAttribute(key, attributes[key]);
    };
    after_party.appendChild(object);
    // console.log(object);
  };

  function addObjectToLights(tag, attributes) {
    var object = document.createElement(tag);
    for (var key in attributes) {
      object.setAttribute(key, attributes[key]);
    };
    lightsAndStuff.appendChild(object);
    // console.log(object);
  };

  function addObjectToLaser1(tag, attributes) {
    var object = document.createElement(tag);
    for (var key in attributes) {
      object.setAttribute(key, attributes[key]);
    };
    laser1.appendChild(object);
    // console.log(object);
  };

  function addObjectToLaser2(tag, attributes) {
    var object = document.createElement(tag);
    for (var key in attributes) {
      object.setAttribute(key, attributes[key]);
    };
    laser2.appendChild(object);
    // console.log(object);
  };

  function addAnimationToLasers() {
    for (i = 0; i < attributes.length; i++) {
      var object = document.createElement('a-animation');
      var attr = attributes[i];
      object.setAttribute('rotation', attr.rotation);
      object.setAttribute('attribute', attr.attribute);
      object.setAttribute('from', attr.from);
      object.setAttribute('to', attr.to);
      object.setAttribute('direction', attr.direction);
      object.setAttribute('dur', attr.dur);
      if (i < 1) {
        laser11.appendChild(object);
      } else if (i < 2) {
        laser12.appendChild(object);
      } else if (i < 3) {
        laser13.appendChild(object);
      } else if (i < 4) {
        laser14.appendChild(object);
      } else {
        laser15.appendChild(object);
      }
    };
    for (i = 0; i < attributes.length; i++) {
      var object = document.createElement('a-animation');
      var attr = attributes[i];
      object.setAttribute('rotation', attr.rotation);
      object.setAttribute('attribute', attr.attribute);
      object.setAttribute('from', attr.from);
      object.setAttribute('to', attr.to);
      object.setAttribute('direction', attr.direction);
      object.setAttribute('dur', attr.dur);
      if (i < 1) {
        laser21.appendChild(object);
      } else if (i < 2) {
        laser22.appendChild(object);
      } else if (i < 3) {
        laser23.appendChild(object);
      } else if (i < 4) {
        laser24.appendChild(object);
      } else {
        laser25.appendChild(object);
      }
    };
  };

  for (i = 0; i < assetItems.length; i++) {
    addAssetsToScene({
      'id': assetItems[i].id,
      'src': assetItems[i].src
    })
  };

  addObjectToMother('a-obj-model', {
    'id': key.id,
    'src': key.src,
    'color': key.color,
    'position': key.position,
    'rotation': key.rotation,
    'scale': key.scale
  });



  for (i = 0; i < roomModels.length; i++){
    addObjectToMother('a-obj-model', {
      'id': roomModels[i].id,
      'src': roomModels[i].src,
      'mtl': roomModels[i].mtl,
      'position': '0 -0.5 0'
    })
  };


  for (i = 0; i < sounds.length; i++) {
    addObjectToMother('a-sound', {
      'id': sounds[i].id,
      'src': '0',
      'autoplay': 'true',
      'loop': 'false',
      'volume': sounds[i].volume
    })
  };


  addObjectToMother('a-light', {
    'type': 'ambient',
    'color': 'white',
    'intensity': '2',
    'position': '0 1.5 0'
  });
  addObjectToMother('a-entity', {
    'id': 'error',
    'opacity': '1'
  });
  addObjectToMother('a-entity', {
    'id': 'after_party',
    'position': '0 -200 -10',
    'rotation': '0 90 0'
  });
  addImagesToError('a-image', {
    'src': 'assets/error.png',
    'position': '0 1.5 4.04',
    'rotation': '0 0 0',
    'width': '8',
    'height': '4',
    'material': 'side:front'
  });
  addImagesToError('a-image', {
    'src': 'assets/error.png',
    'position': '0 1.5 -4.04',
    'rotation': '0 180 0',
    'width': '8',
    'height': '4',
    'material': 'side:front'
  });
  addImagesToError('a-image', {
    'src': 'assets/error.png',
    'position': '4.04 1.5 0',
    'rotation': '0 90 0',
    'width': '8',
    'height': '4',
    'material': 'side:front'
  });
  addImagesToError('a-image', {
    'src': 'assets/error.png',
    'position': '-4.04 1.5 0',
    'rotation': '0 -90 0',
    'width': '8',
    'height': '4',
    'material': 'side:front'
  });
  addImagesToError('a-box', {
    'id': 'error-box',
    'depth': '8.05',
    'width': '8.05',
    'height': '4.05',
    'color': 'red',
    'position': '0 1.5 0'
  });

  var stage_set = document.createElement('a-entity');
  stage_set.setAttribute('id', 'stage_set');
  stage_set.setAttribute('position', '1 0 0');
  stage_set.setAttribute('rotation', '0 -90 0');
  after_party.appendChild(stage_set);

  addObjectToStage('a-obj-model', {
    'id': 'djTable',
    'src': '#dj-obj',
    'mtl': '#dj-mtl',
    'position': '0 0 5'
  });
  addObjectToStage('a-image', {
    'id': 'Tr4sh-P4nda',
    'src': 'assets/Tr4sh P4nda Suit Vector.png',
    'position': '0 1 5.5',
    'height': '2',
    'side': 'double'
  });
  addObjectToStage('a-text', {
    'id': 'musicBy',
    'value': 'Music mix by: Tr4sh P4nda',
    'position': '0 4 5.5',
    'rotation': '0 180 0',
    'side': 'double',
    'align': 'center'
  });
  addObjectToStage('a-text', {
    'id': 'thanks',
    'value': 'Thanks for playing!',
    'position': '0 3 5.5',
    'rotation': '0 180 0',
    'scale': '2 2 2',
    'side': 'double',
    'align': 'center'
  });
  addObjectToStage('a-obj-model', {
    'id': 'stage',
    'src': '#stage-obj',
    'mtl': '#stage-mtl',
    'position': '0 0 -5.5',
    'rotation': '0 180 0'
  });
  addObjectToStage('a-obj-model', {
    'id': 'ltMounts',
    'src': '#ltMounts-obj',
    'mtl': '#ltMounts-mtl',
    'position': '0 -2 -6.5',
    'rotation': '0 180 0'
  });
  addObjectToStage('a-obj-model', {
    'id': 'lights',
    'src': '#lights-obj',
    'mtl': '#lights-mtl',
    'position': '0 2 -6.5',
    'rotation': '0 180 0'
  });
  addObjectToAfterParty('a-sound', {
    'id': 'music',
    'src': '0',
    'autoplay': 'true',
    'loop': 'true',
    'volume': '2'
  });
  addObjectToAfterParty('a-image', {
    'src': 'assets/TP.png',
    'position': '5.9 2 0',
    'rotation': '0 -90 0',
    'width': '4',
    'height': '4',
    'side': 'front'
  });
  addObjectToAfterParty('a-entity', {
    'id': 'lights-and-stuff'
  });

  var lightsAndStuff = document.querySelector('#lights-and-stuff');

  addObjectToLights('a-box', {
    'id': 'win',
    'depth': '8.05',
    'width': '8.05',
    'height': '4.05',
    'position': '10 2 0'
  });
  addObjectToLights('a-entity', {
    'id': 'laser1',
    'position': '0 0 4'
  });
  addObjectToLights('a-entity', {
    'id': 'laser2',
    'position': '0 0 -4'
  });
  addObjectToLights('a-entity', {
    'id': 'discoball',
    'position': '0 5 0'
  });
  addObjectToLights('a-box', {
    'id': 'dancefloor',
    'scale': '5 0.1 6'
  });

  var laser1 = document.querySelector('#laser1'),
    laser2 = document.querySelector('#laser2');

  laser1.innerHTML = (
    `<a-cylinder position="0 0 0" scale="1 0.39 1" radius="0.15" material="color:#000000"></a-cylinder>
    <a-cylinder position="0 0.2 0" scale="1 0 1" radius="0.125" material="src:url(assets/discoball.jpg);opacity:0.5"></a-cylinder>`
  );

  addObjectToLaser1('a-cylinder', {
    'id': 'laser11',
    'position': '0 -0.27 0',
    'scale': '1 20 1',
    'radius': '0.01',
    'color': '#ff040b',
    'transparent': 'true',
    'rotation': '0 0 -15',
    'visible': 'true'
  });
  addObjectToLaser1('a-cylinder', {
    'id': 'laser12',
    'position': '0 -0.27 0',
    'scale': '1 20 1',
    'radius': '0.01',
    'color': '#00dd22',
    'transparent': 'true',
    'rotation': '0 72 -15',
    'visible': 'true'
  });
  addObjectToLaser1('a-cylinder', {
    'id': 'laser13',
    'position': '0 -0.27 0',
    'scale': '1 20 1',
    'radius': '0.01',
    'color': '#0044ff',
    'transparent': 'true',
    'rotation': '0 144 -15',
    'visible': 'true'
  });
  addObjectToLaser1('a-cylinder', {
    'id': 'laser14',
    'position': '0 -0.27 0',
    'scale': '1 20 1',
    'radius': '0.01',
    'color': '#efff00',
    'transparent': 'true',
    'rotation': '0 216 -15',
    'visible': 'true'
  });
  addObjectToLaser1('a-cylinder', {
    'id': 'laser15',
    'position': '0 -0.27 0',
    'scale': '1 20 1',
    'radius': '0.01',
    'color': '#ff00f7',
    'transparent': 'true',
    'rotation': '0 288 -15',
    'visible': 'true'
  });
  addObjectToLaser1('a-animation', {
    'attribute': 'rotation',
    'from': '0 0 -30',
    'to': '0 0 30',
    'direction': 'alternate',
    'dur': '5000',
    'easing': 'linear',
    'repeat': 'indefinite',
    'easeInOut': 'sine'
  });

  laser2.innerHTML = (`
  <a-cylinder position="0 0 0" scale="1 0.39 1" radius="0.15" material="color:#000000"></a-cylinder>
  <a-cylinder position="0 0.2 0" scale="1 0 1" radius="0.125" material="src:url(assets/discoball.jpg);opacity:0.5"></a-cylinder>
  `);

  addObjectToLaser2('a-cylinder', {
    'position': '0 0.2 0',
    'scale': '1 0 1',
    'radius': '0.125',
    'src': 'url(assets/discoball.jpg)',
    'opacity': '0.5'
  });
  addObjectToLaser2('a-cylinder', {
    'id': 'laser21',
    'position': '0 -0.27 0',
    'scale': '1 20 1',
    'radius': '0.01',
    'color': '#ff040b',
    'transparent': 'true',
    'rotation': '0 0 -15',
    'visible': 'true'
  });
  addObjectToLaser2('a-cylinder', {
    'id': 'laser22',
    'position': '0 -0.27 0',
    'scale': '1 20 1',
    'radius': '0.01',
    'color': '#00dd22',
    'transparent': 'true',
    'rotation': '0 72 -15',
    'visible': 'true'
  });
  addObjectToLaser2('a-cylinder', {
    'id': 'laser23',
    'position': '0 -0.27 0',
    'scale': '1 20 1',
    'radius': '0.01',
    'color': '#0044ff',
    'transparent': 'true',
    'rotation': '0 144 -15',
    'visible': 'true'
  });
  addObjectToLaser2('a-cylinder', {
    'id': 'laser24',
    'position': '0 -0.27 0',
    'scale': '1 20 1',
    'radius': '0.01',
    'color': '#efff00',
    'transparent': 'true',
    'rotation': '0 216 -15',
    'visible': 'true'
  });
  addObjectToLaser2('a-cylinder', {
    'id': 'laser25',
    'position': '0 -0.27 0',
    'scale': '1 20 1',
    'radius': '0.01',
    'color': '#ff00f7',
    'transparent': 'true',
    'rotation': '0 288 -15',
    'visible': 'true'
  });
  addObjectToLaser2('a-animation', {
    'attribute': 'rotation',
    'from': '0 0 -30',
    'to': '0 0 30',
    'direction': 'alternate',
    'dur': '5000',
    'easing': 'linear',
    'repeat': 'indefinite',
    'easeInOut': 'sine'
  });

  var laser11 = document.querySelector('#laser11'),
    laser12 = document.querySelector('#laser12'),
    laser13 = document.querySelector('#laser13'),
    laser14 = document.querySelector('#laser14'),
    laser15 = document.querySelector('#laser15'),
    laser21 = document.querySelector('#laser21'),
    laser22 = document.querySelector('#laser22'),
    laser23 = document.querySelector('#laser23'),
    laser24 = document.querySelector('#laser24'),
    laser25 = document.querySelector('#laser25');

  laser11.innerHTML = (`<a-animation rotation="0 0 0" attribute="rotation" from='0 0 0' to='15 360 0' direction="alternate" dur='1000' easing="linear" repeat='indefinite' easeInOut="sine"></a-animation><a-animation attribute="opacity" from='0' to='0.8' direction="alternate" dur='50' repeat='indefinite'></a-animation>`);
  laser12.innerHTML = (`<a-animation rotation="0 72 0" attribute="rotation" from='0 72 0' to='15 432 0' direction="alternate" dur='1000' easing="linear" repeat='indefinite' easeInOut="sine"></a-animation><a-animation attribute="opacity" from='0' to='0.8' direction="alternate" dur='50' repeat='indefinite'></a-animation>`);
  laser13.innerHTML = (`<a-animation rotation="0 144 0" attribute="rotation" from='0 144 0' to='15 504 0' direction="alternate" dur='1000' easing="linear" repeat='indefinite' easeInOut="sine"></a-animation><a-animation attribute="opacity" from='0' to='0.8' direction="alternate" dur='50' repeat='indefinite'></a-animation>`);
  laser14.innerHTML = (`<a-animation rotation="0 216 0" attribute="rotation" from='0 216 0' to='15 576 0' direction="alternate" dur='1000' easing="linear" repeat='indefinite' easeInOut="sine"></a-animation><a-animation attribute="opacity" from='0' to='0.8' direction="alternate" dur='50' repeat='indefinite'></a-animation>`);
  laser15.innerHTML = (`<a-animation rotation="0 288 0" attribute="rotation" from='0 288 0' to='15 648 0' direction="alternate" dur='1000' easing="linear" repeat='indefinite' easeInOut="sine"></a-animation><a-animation attribute="opacity" from='0' to='0.8' direction="alternate" dur='50' repeat='indefinite'></a-animation>`);
  laser21.innerHTML = (`<a-animation rotation="0 0 0" attribute="rotation" from='0 0 0' to='15 360 0' direction="alternate" dur='1000' easing="linear" repeat='indefinite' easeInOut="sine"></a-animation><a-animation attribute="opacity" from='0' to='0.8' direction="alternate" dur='50' repeat='indefinite'></a-animation>`);
  laser22.innerHTML = (`<a-animation rotation="0 72 0" attribute="rotation" from='0 72 0' to='15 432 0' direction="alternate" dur='1000' easing="linear" repeat='indefinite' easeInOut="sine"></a-animation><a-animation attribute="opacity" from='0' to='0.8' direction="alternate" dur='50' repeat='indefinite'></a-animation>`);
  laser23.innerHTML = (`<a-animation rotation="0 144 0" attribute="rotation" from='0 144 0' to='15 504 0' direction="alternate" dur='1000' easing="linear" repeat='indefinite' easeInOut="sine"></a-animation><a-animation attribute="opacity" from='0' to='0.8' direction="alternate" dur='50' repeat='indefinite'></a-animation>`);
  laser24.innerHTML = (`<a-animation rotation="0 216 0" attribute="rotation" from='0 216 0' to='15 576 0' direction="alternate" dur='1000' easing="linear" repeat='indefinite' easeInOut="sine"></a-animation><a-animation attribute="opacity" from='0' to='0.8' direction="alternate" dur='50' repeat='indefinite'></a-animation>`);
  laser25.innerHTML = (`<a-animation rotation="0 288 0" attribute="rotation" from='0 288 0' to='15 648 0' direction="alternate" dur='1000' easing="linear" repeat='indefinite' easeInOut="sine"></a-animation><a-animation attribute="opacity" from='0' to='0.8' direction="alternate" dur='50' repeat='indefinite'></a-animation>`);


  addAnimationToLasers();

  function addDiscoBall1() {
    console.log(discoball);
    discoball.setAttribute('position', '0 5 0');
    discoball.innerHTML=(
      `<a-sphere segments-height="18" segments-width="18" src="assets/discoball.jpg" width="1" height=".5" radius=".75" side="double" position="0 0 0" rotation="0 0 0">
      <a-animation attribute="rotation" dur="10000" fill="backwards" to="0 360 0" repeat="indefinite" easing="linear"></a-animation></a-sphere>
      <a-sphere segments-height="18" segments-width="18" src="assets/discoball.jpg" width="1" height=".5" radius=".75" side="double" position="0  0 0" rotation="0 0 0">
      <a-animation attribute="rotation" dur="10000" fill="backwards" to="0 -360 0" repeat="indefinite" easing="linear"></a-animation>
      </a-sphere>`
    );
  };

  addDiscoBall1();

  console.log('SCENE LOADED');
  console.log(lightsAndStuff);
};
buildScene();

var drawer_top = document.querySelector('#drawerTop'),
  drawer_middle = document.querySelector('#drawerMid'),
  drawer_bottom = document.querySelector('#drawerBot'),
  inv = document.getElementById('cursor'),
  key = document.getElementById('key'),
  door = document.getElementById('door'),
  drawer_top_snd = document.querySelector('#drawer-top-snd'),
  drawer_mid_snd = document.querySelector('#drawer-mid-snd'),
  drawer_bot_snd = document.querySelector('#drawer-bot-snd'),
  music_src = ('assets/just_for_funzies.ogg'),
  open_drawer = ('assets/drawer_open.ogg'),
  close_drawer = ('assets/drawer_close.ogg'),
  open_drawer_bad = ('assets/drawer_open_broken.ogg'),
  close_drawer_bad = ('assets/drawer_close_broken.ogg'),
  remove_drawer = ('assets/drawer_remove.ogg'),
  open_door = ('assets/door_open.ogg'),
  top_count = 0,
  middle_count = 0,
  bottom_count = 0,
  key_hold = false,
  door_open = false,
  waiting = 0,
  img = [];

  drawer_bottom.innerHTML=(`<a-image id="image" src="" position="-3.75 0.31 0" rotation="-90 90 0" width="0.4" height="0.4"></a-image>`);
var image = document.querySelector('#image');

key.addEventListener('click', async function() {
  key.setAttribute('material', 'opacity:0');
  inv.setAttribute('opacity', '1');
  inv.setAttribute('color', 'gold');
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

drawer_middle.addEventListener('click', async function() {
  var sound = document.querySelector('#drawer-mid-snd');

  if (middle_count % 2 === 0) {
    drawer_middle.setAttribute('position', '0.45 -0.5 0');
    sound.setAttribute('src', open_drawer);
  } else {
    drawer_middle.setAttribute('position', '0 -0.5 0');
    sound.setAttribute('src', close_drawer);
  }
  middle_count = middle_count + 1
});

drawer_top.addEventListener('click', async function() {
  var sound = document.getElementById('drawer-top-snd');

  if (top_count % 2 === 0) {
    drawer_top.setAttribute('position', '0.45 -0.5 0');
    sound.setAttribute('src', open_drawer);
  } else {
    drawer_top.setAttribute('position', '0 -0.5 0');
    sound.setAttribute('src', close_drawer);
  }
  top_count = top_count + 1
});

// Now for the fun part. Open the bottom drawer 3-times to find the key.*/
door.addEventListener('click', function() {
  var sound = document.querySelector('#door-open-snd'),
    music = document.querySelector('#music'),
    error = document.querySelector('#error'),
    after_party = document.querySelector('#after_party');

  if ((key_hold == true) && (waiting > 0)) {
    // alert('What are you waiting for? The door is open. You can leave.')
  } else if (key_hold == true) {
    door.setAttribute('position', '4.481841741820505 -0.5 3.087354789145204');
    door.setAttribute('rotation', '0 -85.05162990581995 0');
    sound.setAttribute('src', open_door);
    error.setAttribute('position', '0 -20 0');
    after_party.setAttribute('position', '0 -0.5 10');
    music.setAttribute('src', music_src);
    inv.setAttribute('opacity', '0');
    inv.setAttribute('position', '0 0 0');
    waiting = waiting + 1
    door_open = true;
  } else {
    // alert('You need to find the key!');
  }
});

var changeColorRandom = function() {
  var rand = function() {
    return Math.floor(Math.random() * 255)
  };
  document.querySelector('#danceFloor').setAttribute('material', 'color', 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')');
  document.querySelector('#win').setAttribute('material', 'color', 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')');
  document.querySelector('#thanks').setAttribute('color', 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')');
  document.querySelector('#musicBy').setAttribute('color', 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')');
}
setInterval(changeColorRandom, 469);

function flickrResults(json) {
  for (i = 0; i < json.items.length; i++) {
    img.push(json.items[i].media.m);
  }
  image.setAttribute('src', img[0]);
};

setTimeout(function() {
  alert(`Welcome to Tr4sh P4nda's Room Escape! \n\nFind the key to unlock the door and escape. \n\nUse W-A-S-D keys to move around and Left-Click + Drag to look around.`);
}, 2000);
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
