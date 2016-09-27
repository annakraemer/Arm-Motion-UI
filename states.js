
var IDLE = {
  id: 0,
  master: {
    values: {
      
    },
    events: {
      
    }
  },
  tablet: {
    values: {
      
    },
    events: {
      
    }
  }
};
var STATE_IDLE = 0;
var ROBOTARM = {
  id: 1,
  master: {
    values: {
      stepperPosition: new HardwareValue(1, 0, Manager.TYPE_INT32)
    },
    events: {
      highToLow: function highToLow() { manager.sendEvent(0, 1); },
      lowToHigh: function lowToHigh() { manager.sendEvent(1, 1); },
      moveToHome: function moveToHome() { manager.sendEvent(2, 1); },
      raiseArm: function raiseArm() { manager.sendEvent(3, 1); },
      lowerArm: function lowerArm() { manager.sendEvent(4, 1); },
      turnOnElectromagnet: function turnOnElectromagnet() { manager.sendEvent(5, 1); },
      turnOffElectromagnet: function turnOffElectromagnet() { manager.sendEvent(6, 1); },
      moveToHighTower: function moveToHighTower() { manager.sendEvent(7, 1); },
      moveToLowerTower: function moveToLowerTower() { manager.sendEvent(8, 1); },
      disableStepper: function disableStepper() { manager.sendEvent(9, 1); },
      moveArm: function moveArm() { manager.sendEvent(10, 1); }
    }
  },
  tablet: {
    values: {
      
    },
    events: {
      
    }
  }
};
var STATE_ROBOTARM = 1;
var PERPETUAL = {
  id: 2,
  master: {
    values: {
      
    },
    events: {
      slider: function slider() { manager.sendEvent(0, 2); },
      gateOpen: function gateOpen() { manager.sendEvent(1, 2); },
      gateClose: function gateClose() { manager.sendEvent(2, 2); },
      turnOnStairs: function turnOnStairs() { manager.sendEvent(3, 2); },
      turnOffStairs: function turnOffStairs() { manager.sendEvent(4, 2); },
      disableStepper: function disableStepper() { manager.sendEvent(5, 2); },
      home: function home() { manager.sendEvent(6, 2); }
    }
  },
  tablet: {
    values: {
      
    },
    events: {
      
    }
  }
};
var STATE_PERPETUAL = 2;

var STATES = {
  IDLE: IDLE,
  ROBOTARM: ROBOTARM,
  PERPETUAL: PERPETUAL
};
var manager = new Manager([IDLE, ROBOTARM, PERPETUAL]);
