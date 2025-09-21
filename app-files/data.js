var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "Вход",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6029509421360881,
          "pitch": 0.1442744640612723,
          "rotation": 0,
          "target": "1--"
        },
        {
          "yaw": -0.49943265119146574,
          "pitch": 0.07464577606976164,
          "rotation": 0,
          "target": "2--"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1--",
      "name": "Узел учёта",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4793863962192155,
          "pitch": 0.1666990083108466,
          "rotation": 0,
          "target": "0-"
        },
        {
          "yaw": 0.61800068387425,
          "pitch": 0.11656447393180969,
          "rotation": 0,
          "target": "2--"
        },
        {
          "yaw": 1.9801493056840878,
          "pitch": 0.20456267175163134,
          "rotation": 0,
          "target": "3--"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2--",
      "name": "Переходной канал",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0428349652508313,
          "pitch": 0.10237141864654298,
          "rotation": 0,
          "target": "1--"
        },
        {
          "yaw": -0.9874175709902175,
          "pitch": 0.20997600791668525,
          "rotation": 0,
          "target": "3--"
        },
        {
          "yaw": 0.9919993963652747,
          "pitch": 0.15955878180409222,
          "rotation": 0,
          "target": "0-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3--",
      "name": "Узел ввода",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.24113083800878599,
          "pitch": 0.14944918903443138,
          "rotation": 0,
          "target": "2--"
        },
        {
          "yaw": -1.081933494646135,
          "pitch": -0.0003711796411245416,
          "rotation": 0,
          "target": "1--"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "ITP",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
