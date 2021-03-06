// connect to websocket
var ws = new WebSocket('ws://localhost:9090/ws');

// Header
var packetFormat = document.getElementById('packetFormat');
var packetVersion = document.getElementById('packetVersion');
var packetId = document.getElementById('packetId');
var sessionUID = document.getElementById('sessionUID');
var sessionTime = document.getElementById('sessionTime');
var frameIdentifier = document.getElementById('frameIdentifier');
var playerCarIndex = document.getElementById('playerCarIndex');
// Telemetry
var speed = document.getElementById('speed');
var throttle = document.getElementById('throttle');
var steer = document.getElementById('steer');
var brake = document.getElementById('brake');
var clutch = document.getElementById('clutch');
var gear = document.getElementById('gear');
var engineRPM = document.getElementById('engineRPM');
var drs = document.getElementById('drs');
var revLightsPercent = document.getElementById('revLightsPercent');
var engineTemperature = document.getElementById('engineTemperature');
var brakesTemperatureRL = document.getElementById('brakesTemperatureRL');
var brakesTemperatureRR = document.getElementById('brakesTemperatureRR');
var brakesTemperatureFL = document.getElementById('brakesTemperatureFL');
var brakesTemperatureFR = document.getElementById('brakesTemperatureFR');
var tyresSurfaceTemperatureRL = document.getElementById('tyresSurfaceTemperatureRL');
var tyresSurfaceTemperatureRR = document.getElementById('tyresSurfaceTemperatureRR');
var tyresSurfaceTemperatureFL = document.getElementById('tyresSurfaceTemperatureFL');
var tyresSurfaceTemperatureFR = document.getElementById('tyresSurfaceTemperatureFR');
var tyresInnerTemperatureRL = document.getElementById('tyresInnerTemperatureRL');
var tyresInnerTemperatureRR = document.getElementById('tyresInnerTemperatureRR');
var tyresInnerTemperatureFL = document.getElementById('tyresInnerTemperatureFL');
var tyresInnerTemperatureFR = document.getElementById('tyresInnerTemperatureFR');
var tyresPressureRL = document.getElementById('tyresPressureRL');
var tyresPressureRR = document.getElementById('tyresPressureRR');
var tyresPressureFL = document.getElementById('tyresPressureFL');
var tyresPressureFR = document.getElementById('tyresPressureFR');
var buttonStatus = document.getElementById('buttonStatus');
// Motion Data
var worldPositionX = document.getElementById('worldPositionX');
var worldPositionY = document.getElementById('worldPositionY');
var worldPositionZ = document.getElementById('worldPositionZ');
var worldVelocityX = document.getElementById('worldVelocityX');
var worldVelocityY = document.getElementById('worldVelocityY');
var worldVelocityZ = document.getElementById('worldVelocityZ');
var worldForwardDirX = document.getElementById('worldForwardDirX');
var worldForwardDirY = document.getElementById('worldForwardDirY');
var worldForwardDirZ = document.getElementById('worldForwardDirZ');
var worldRightDirX = document.getElementById('worldRightDirX');
var worldRightDirY = document.getElementById('worldRightDirY');
var worldRightDirZ = document.getElementById('worldRightDirZ');
var gForceLateral = document.getElementById('gForceLateral');
var gForceLongitudinal = document.getElementById('gForceLongitudinal');
var gForceVertical = document.getElementById('gForceVertical');
var yaw = document.getElementById('yaw');
var pitch = document.getElementById('pitch');
var roll = document.getElementById('roll');
var suspensionPositionRL = document.getElementById('suspensionPositionRL');
var suspensionPositionRR = document.getElementById('suspensionPositionRR');
var suspensionPositionFL = document.getElementById('suspensionPositionFL');
var suspensionPositionFR = document.getElementById('suspensionPositionFR');
var suspensionVelocityRL = document.getElementById('suspensionVelocityRL');
var suspensionVelocityRR = document.getElementById('suspensionVelocityRR');
var suspensionVelocityFL = document.getElementById('suspensionVelocityFL');
var suspensionVelocityFR = document.getElementById('suspensionVelocityFR');
var suspensionAccelerationRL = document.getElementById('suspensionAccelerationRL');
var suspensionAccelerationRR = document.getElementById('suspensionAccelerationRR');
var suspensionAccelerationFL = document.getElementById('suspensionAccelerationFL');
var suspensionAccelerationFR = document.getElementById('suspensionAccelerationFR');
var wheelSpeedRL = document.getElementById('wheelSpeedRL');
var wheelSpeedRR = document.getElementById('wheelSpeedRR');
var wheelSpeedFL = document.getElementById('wheelSpeedFL');
var wheelSpeedFR = document.getElementById('wheelSpeedFR');
var wheelSlipRL = document.getElementById('wheelSlipRL');
var wheelSlipRR = document.getElementById('wheelSlipRR');
var wheelSlipFL = document.getElementById('wheelSlipFL');
var wheelSlipFR = document.getElementById('wheelSlipFR');
var localVelocityX = document.getElementById('localVelocityX');
var localVelocityY = document.getElementById('localVelocityY');
var localVelocityZ = document.getElementById('localVelocityZ');
var angularVelocityX = document.getElementById('angularVelocityX');
var angularVelocityY = document.getElementById('angularVelocityY');
var angularVelocityZ = document.getElementById('angularVelocityZ');
var angularAccelerationX = document.getElementById('angularAccelerationX');
var angularAccelerationY = document.getElementById('angularAccelerationY');
var angularAccelerationZ = document.getElementById('angularAccelerationZ');
var frontWheelsAngle = document.getElementById('frontWheelsAngle');
// Status data
var tractionControl = document.getElementById('tractionControl');
var antiLockBrakes = document.getElementById('antiLockBrakes');
var fuelMix = document.getElementById('fuelMix');
var frontBrakeBias = document.getElementById('frontBrakeBias');
var pitLimiterStatus = document.getElementById('pitLimiterStatus');
var fuelInTank = document.getElementById('fuelInTank');
var fuelCapacity = document.getElementById('fuelCapacity');
var maxRPM = document.getElementById('maxRPM');
var idleRPM = document.getElementById('idleRPM');
var maxGears = document.getElementById('maxGears');
var drsAllowed = document.getElementById('drsAllowed');
var tyresWearRL = document.getElementById('tyresWearRL');
var tyresWearRR = document.getElementById('tyresWearRR');
var tyresWearFL = document.getElementById('tyresWearFL');
var tyresWearFR = document.getElementById('tyresWearFR');
var tyreCompound = document.getElementById('tyreCompound');
var tyresDamageRL = document.getElementById('tyresDamageRL');
var tyresDamageRR = document.getElementById('tyresDamageRR');
var tyresDamageFL = document.getElementById('tyresDamageFL');
var tyresDamageFR = document.getElementById('tyresDamageFR');
var frontLeftWingDamage = document.getElementById('frontLeftWingDamage');
var frontRightWingDamage = document.getElementById('frontRightWingDamage');
var rearWingDamage = document.getElementById('rearWingDamage');
var engineDamage = document.getElementById('engineDamage');
var gearBoxDamage = document.getElementById('gearBoxDamage');
var exhaustDamage = document.getElementById('exhaustDamage');
var vehicleFiaFlags = document.getElementById('vehicleFiaFlags');
var ersStoreEnergy = document.getElementById('ersStoreEnergy');
var ersDeployMode = document.getElementById('ersDeployMode');
var ersHarvestedThisLapMGUK = document.getElementById('ersHarvestedThisLapMGUK');
var ersHarvestedThisLapMGUH = document.getElementById('ersHarvestedThisLapMGUH');
var ersDeployedThisLap = document.getElementById('ersDeployedThisLap');
// Lap data
var lastLapTime = document.getElementById('lastLapTime');
var currentLapTime = document.getElementById('currentLapTime');
var bestLapTime = document.getElementById('bestLapTime');
var sector1Time = document.getElementById('sector1Time');
var sector2Time = document.getElementById('sector2Time');
var lapDistance = document.getElementById('lapDistance');
var totalDistance = document.getElementById('totalDistance');
var safetyCarDelta = document.getElementById('safetyCarDelta');
var carPosition = document.getElementById('carPosition');
var currentLapNum = document.getElementById('currentLapNum');
var pitStatus = document.getElementById('pitStatus');
var sector = document.getElementById('sector');
var currentLapInvalid = document.getElementById('currentLapInvalid');
var penalties = document.getElementById('penalties');
var gridPosition = document.getElementById('gridPosition');
var driverStatus = document.getElementById('driverStatus');
var resultStatus = document.getElementById('resultStatus');
// Session data`
var weather = document.getElementById('weather');
var trackTemperature = document.getElementById('trackTemperature');
var airTemperature = document.getElementById('airTemperature');
var totalLaps = document.getElementById('totalLaps');
var trackLength = document.getElementById('trackLength');
var sessionType = document.getElementById('sessionType');
var trackId = document.getElementById('trackId');
var era = document.getElementById('era');
var sessionTimeLeft = document.getElementById('sessionTimeLeft');
var sessionDuration = document.getElementById('sessionDuration');
var pitSpeedLimit = document.getElementById('pitSpeedLimit');
var gamePaused = document.getElementById('gamePaused');
var isSpectating = document.getElementById('isSpectating');
var spectatorCarIndex = document.getElementById('spectatorCarIndex');
var sliProNativeSupport = document.getElementById('sliProNativeSupport');
var numMarshalZones = document.getElementById('numMarshalZones');
var marshalZones = document.getElementById('marshalZones');
var safetyCarStatus = document.getElementById('safetyCarStatus');
var networkGame = document.getElementById('networkGame');
// Car setups data
var frontWing = document.getElementById('frontWing');
var rearWing = document.getElementById('rearWing');
var onThrottle = document.getElementById('onThrottle');
var offThrottle = document.getElementById('offThrottle');
var frontCamber = document.getElementById('frontCamber');
var rearCamber = document.getElementById('rearCamber');
var frontToe = document.getElementById('frontToe');
var rearToe = document.getElementById('rearToe');
var frontSuspension = document.getElementById('frontSuspension');
var rearSuspension = document.getElementById('rearSuspension');
var frontAntiRollBar = document.getElementById('frontAntiRollBar');
var rearAntiRollBar = document.getElementById('rearAntiRollBar');
var frontSuspensionHeight = document.getElementById('frontSuspensionHeight');
var rearSuspensionHeight = document.getElementById('rearSuspensionHeight');
var brakePressure = document.getElementById('brakePressure');
var brakeBias = document.getElementById('brakeBias');
var frontTyrePressure = document.getElementById('frontTyrePressure');
var rearTyrePressure = document.getElementById('rearTyrePressure');
var ballast = document.getElementById('ballast');
var fuelLoad = document.getElementById('fuelLoad');
// Participants data
var numCars = document.getElementById('numCars');
var aiControlled = document.getElementById('aiControlled');
var driverId = document.getElementById('driverId');
var teamId = document.getElementById('teamId');
var raceNumber = document.getElementById('raceNumber');
var nationality = document.getElementById('nationality');
var name = document.getElementById('name');
// Event data
var eventStringCode = document.getElementById('eventStringCode');


var max_x = document.getElementById('max_x');
var max_y = document.getElementById('max_y');
var max_z = document.getElementById('max_z');
var min_x = document.getElementById('min_x');
var min_y = document.getElementById('min_y');
var min_z = document.getElementById('min_z');


var max_x_value = 0
var max_y_value = 0
var max_z_value = 0
var min_x_value = null
var min_y_value = null
var min_z_value = null


// when a new message has been received
ws.onmessage = function(event){
   var data =  JSON.parse(event.data);
   // console.log(data, JSON.parse(data))
   // var span = document.getElementById('packet');
   // span.innerHTML = JSON.stringify(data.header, null, 2);

   packetFormat.innerHTML = JSON.stringify(data.header.packetFormat, null);
   packetVersion.innerHTML = JSON.stringify(data.header.packetVersion, null);
   packetId.innerHTML = JSON.stringify(data.header.packetId, null);
   sessionUID.innerHTML = JSON.stringify(data.header.sessionUID, null);
   sessionTime.innerHTML = JSON.stringify(data.header.sessionTime, null);
   frameIdentifier.innerHTML = JSON.stringify(data.header.frameIdentifier, null);
   playerCarIndex.innerHTML = JSON.stringify(data.header.playerCarIndex, null);

   var players_car = data.header.packetId

   if (data.header.packetId == 0){

      if (data.carMotionData.worldPositionX > max_x_value){
        max_x_value = data.carMotionData.worldPositionX;
        max_x.innerHTML = JSON.stringify(data.carMotionData.worldPositionX, null);
      } else {
        if (min_x_value == null){
          min_x_value = data.carMotionData.worldPositionX;
          min_x.innerHTML = JSON.stringify(data.carMotionData.worldPositionX, null);
        } else {
          if (data.carMotionData.worldPositionX < min_x_value){
            min_x_value = data.carMotionData.worldPositionX;
            min_x.innerHTML = JSON.stringify(data.carMotionData.worldPositionX, null);
          }
        }
      }

      if (data.carMotionData.worldPositionY > max_y_value){
        max_y_value = data.carMotionData.worldPositionY;
        max_y.innerHTML = JSON.stringify(data.carMotionData.worldPositionY, null);
      } else {
        if (min_y_value == null){
          min_y_value = data.carMotionData.worldPositionY;
          min_y.innerHTML = JSON.stringify(data.carMotionData.worldPositionY, null);
        } else {
          if (data.carMotionData.worldPositionY < min_y_value){
            min_y_value = data.carMotionData.worldPositionY;
            min_y.innerHTML = JSON.stringify(data.carMotionData.worldPositionY, null);
          }
        }
      }

      if (data.carMotionData.worldPositionZ > max_z_value){
        max_z_value = data.carMotionData.worldPositionZ;
        max_z.innerHTML = JSON.stringify(data.carMotionData.worldPositionZ, null);
      } else {
        if (min_z_value == null){
          min_z_value = data.carMotionData.worldPositionZ;
          min_z.innerHTML = JSON.stringify(data.carMotionData.worldPositionZ, null);
        } else {
          if (data.carMotionData.worldPositionZ < min_z_value){
            min_z_value = data.carMotionData.worldPositionZ;
            min_z.innerHTML = JSON.stringify(data.carMotionData.worldPositionZ, null);
          }
        }
      }

      console.log(max_x_value, max_y_value, max_z_value, min_x_value, min_y_value, min_z_value);


       worldPositionX.innerHTML = JSON.stringify(data.carMotionData.worldPositionX, null);
       worldPositionY.innerHTML = JSON.stringify(data.carMotionData.worldPositionY, null);
       worldPositionZ.innerHTML = JSON.stringify(data.carMotionData.worldPositionZ, null);
       worldVelocityX.innerHTML = JSON.stringify(data.carMotionData.worldVelocityX, null);
       worldVelocityY.innerHTML = JSON.stringify(data.carMotionData.worldVelocityY, null);
       worldVelocityZ.innerHTML = JSON.stringify(data.carMotionData.worldVelocityZ, null);
       worldForwardDirX.innerHTML = JSON.stringify(data.carMotionData.worldForwardDirX, null);
       worldForwardDirY.innerHTML = JSON.stringify(data.carMotionData.worldForwardDirY, null);
       worldForwardDirZ.innerHTML = JSON.stringify(data.carMotionData.worldForwardDirZ, null);
       worldRightDirX.innerHTML = JSON.stringify(data.carMotionData.worldRightDirX, null);
       worldRightDirY.innerHTML = JSON.stringify(data.carMotionData.worldRightDirY, null);
       worldRightDirZ.innerHTML = JSON.stringify(data.carMotionData.worldRightDirZ, null);
       gForceLateral.innerHTML = JSON.stringify(data.carMotionData.gForceLateral, null);
       gForceLongitudinal.innerHTML = JSON.stringify(data.carMotionData.gForceLongitudinal, null);
       gForceVertical.innerHTML = JSON.stringify(data.carMotionData.gForceVertical, null);
       yaw.innerHTML = JSON.stringify(data.carMotionData.yaw, null);
       pitch.innerHTML = JSON.stringify(data.carMotionData.pitch, null);
       roll.innerHTML = JSON.stringify(data.carMotionData.roll, null);
       suspensionPositionRL.innerHTML = JSON.stringify(data.suspensionPosition.RL, null);
       suspensionPositionRR.innerHTML = JSON.stringify(data.suspensionPosition.RR, null);
       suspensionPositionFL.innerHTML = JSON.stringify(data.suspensionPosition.FL, null);
       suspensionPositionFR.innerHTML = JSON.stringify(data.suspensionPosition.FR, null);
       suspensionVelocityRL.innerHTML = JSON.stringify(data.suspensionVelocity.FL, null);
       suspensionVelocityRR.innerHTML = JSON.stringify(data.suspensionVelocity.RR, null);
       suspensionVelocityFL.innerHTML = JSON.stringify(data.suspensionVelocity.FL, null);
       suspensionVelocityFR.innerHTML = JSON.stringify(data.suspensionVelocity.FR, null);
       suspensionAccelerationRL.innerHTML = JSON.stringify(data.suspensionAcceleration.RL, null);
       suspensionAccelerationRR.innerHTML = JSON.stringify(data.suspensionAcceleration.RR, null);
       suspensionAccelerationFL.innerHTML = JSON.stringify(data.suspensionAcceleration.FL, null);
       suspensionAccelerationFR.innerHTML = JSON.stringify(data.suspensionAcceleration.FR, null);
       wheelSpeedRL.innerHTML = JSON.stringify(data.wheelSpeed.RL, null);
       wheelSpeedRR.innerHTML = JSON.stringify(data.wheelSpeed.RR, null);
       wheelSpeedFL.innerHTML = JSON.stringify(data.wheelSpeed.FL, null);
       wheelSpeedFR.innerHTML = JSON.stringify(data.wheelSpeed.FR, null);
       wheelSlipRL.innerHTML = JSON.stringify(data.wheelSlip.RL, null);
       wheelSlipRR.innerHTML = JSON.stringify(data.wheelSlip.RR, null);
       wheelSlipFL.innerHTML = JSON.stringify(data.wheelSlip.FL, null);
       wheelSlipFR.innerHTML = JSON.stringify(data.wheelSlip.FR, null);
       localVelocityX.innerHTML = JSON.stringify(data.localVelocityX, null);
       localVelocityY.innerHTML = JSON.stringify(data.localVelocityY, null);
       localVelocityZ.innerHTML = JSON.stringify(data.localVelocityZ, null);
       angularVelocityX.innerHTML = JSON.stringify(data.angularVelocityX, null);
       angularVelocityY.innerHTML = JSON.stringify(data.angularVelocityY, null);
       angularVelocityZ.innerHTML = JSON.stringify(data.angularVelocityZ, null);
       angularAccelerationX.innerHTML = JSON.stringify(data.angularAccelerationX, null);
       angularAccelerationY.innerHTML = JSON.stringify(data.angularAccelerationY, null);
       angularAccelerationZ.innerHTML = JSON.stringify(data.angularAccelerationZ, null);
       frontWheelsAngle.innerHTML = JSON.stringify(data.frontWheelsAngle, null);
    }
    if (data.header.packetId == 1){
      weather.innerHTML = JSON.stringify(data.weather, null);
      trackTemperature.innerHTML = JSON.stringify(data.trackTemperature, null);
      airTemperature.innerHTML = JSON.stringify(data.airTemperature, null);
      totalLaps.innerHTML = JSON.stringify(data.totalLaps, null);
      trackLength.innerHTML = JSON.stringify(data.trackLength, null);
      sessionType.innerHTML = JSON.stringify(data.sessionType, null);
      trackId.innerHTML = JSON.stringify(data.trackId, null);
      era.innerHTML = JSON.stringify(data.era, null);
      sessionTimeLeft.innerHTML = JSON.stringify(data.sessionTimeLeft, null);
      sessionDuration.innerHTML = JSON.stringify(data.sessionDuration, null);
      pitSpeedLimit.innerHTML = JSON.stringify(data.pitSpeedLimit, null);
      gamePaused.innerHTML = JSON.stringify(data.gamePaused, null);
      isSpectating.innerHTML = JSON.stringify(data.isSpectating, null);
      spectatorCarIndex.innerHTML = JSON.stringify(data.spectatorCarIndex, null);
      sliProNativeSupport.innerHTML = JSON.stringify(data.sliProNativeSupport, null);
      numMarshalZones.innerHTML = JSON.stringify(data.numMarshalZones, null);
      marshalZones.innerHTML = JSON.stringify(data.marshalZones, null);
      safetyCarStatus.innerHTML = JSON.stringify(data.safetyCarStatus, null);
      networkGame.innerHTML = JSON.stringify(data.networkGame, null);
    }
    if (data.header.packetId == 2){
      lastLapTime.innerHTML = JSON.stringify(data.lapData.lastLapTime, null);
      currentLapTime.innerHTML = JSON.stringify(data.lapData.currentLapTime, null);
      bestLapTime.innerHTML = JSON.stringify(data.lapData.bestLapTime, null);
      sector1Time.innerHTML = JSON.stringify(data.lapData.sector1Time, null);
      sector2Time.innerHTML = JSON.stringify(data.lapData.sector2Time, null);
      lapDistance.innerHTML = JSON.stringify(data.lapData.lapDistance, null);
      totalDistance.innerHTML = JSON.stringify(data.lapData.totalDistance, null);
      safetyCarDelta.innerHTML = JSON.stringify(data.lapData.safetyCarDelta, null);
      carPosition.innerHTML = JSON.stringify(data.lapData.carPosition, null);
      currentLapNum.innerHTML = JSON.stringify(data.lapData.currentLapNum, null);
      pitStatus.innerHTML = JSON.stringify(data.lapData.pitStatus, null);
      sector.innerHTML = JSON.stringify(data.lapData.sector, null);
      currentLapInvalid.innerHTML = JSON.stringify(data.lapData.currentLapInvalid, null);
      penalties.innerHTML = JSON.stringify(data.lapData.penalties, null);
      gridPosition.innerHTML = JSON.stringify(data.lapData.gridPosition, null);
      driverStatus.innerHTML = JSON.stringify(data.lapData.driverStatus, null);
      resultStatus.innerHTML = JSON.stringify(data.lapData.resultStatus, null);
    }
    if (data.header.packetId == 3){
      eventStringCode.innerHTML = JSON.stringify(data.eventStringCode, null);
    }
    if (data.header.packetId == 4){
      numCars.innerHTML = JSON.stringify(data.numCars, null);
      aiControlled.innerHTML = JSON.stringify(data.participantsaiControlled, null);
      driverId.innerHTML = JSON.stringify(data.participantsdriverId, null);
      teamId.innerHTML = JSON.stringify(data.participantsteamId, null);
      raceNumber.innerHTML = JSON.stringify(data.participantsraceNumber, null);
      nationality.innerHTML = JSON.stringify(data.participantsnationality, null);
      name.innerHTML = JSON.stringify(data.participantsname, null);
    }
    if (data.header.packetId == 5){
      frontWing.innerHTML = JSON.stringify(data.carSetups.frontWing, null);
      rearWing.innerHTML = JSON.stringify(data.carSetups.rearWing, null);
      onThrottle.innerHTML = JSON.stringify(data.carSetups.onThrottle, null);
      offThrottle.innerHTML = JSON.stringify(data.carSetups.offThrottle, null);
      frontCamber.innerHTML = JSON.stringify(data.carSetups.frontCamber, null);
      rearCamber.innerHTML = JSON.stringify(data.carSetups.rearCamber, null);
      frontToe.innerHTML = JSON.stringify(data.carSetups.frontToe, null);
      rearToe.innerHTML = JSON.stringify(data.carSetups.rearToe, null);
      frontSuspension.innerHTML = JSON.stringify(data.carSetups.frontSuspension, null);
      rearSuspension.innerHTML = JSON.stringify(data.carSetups.rearSuspension, null);
      frontAntiRollBar.innerHTML = JSON.stringify(data.carSetups.frontAntiRollBar, null);
      rearAntiRollBar.innerHTML = JSON.stringify(data.carSetups.rearAntiRollBar, null);
      frontSuspensionHeight.innerHTML = JSON.stringify(data.carSetups.frontSuspensionHeight, null);
      rearSuspensionHeight.innerHTML = JSON.stringify(data.carSetups.rearSuspensionHeight, null);
      brakePressure.innerHTML = JSON.stringify(data.carSetups.brakePressure, null);
      brakeBias.innerHTML = JSON.stringify(data.carSetups.brakeBias, null);
      frontTyrePressure.innerHTML = JSON.stringify(data.carSetups.frontTyrePressure, null);
      rearTyrePressure.innerHTML = JSON.stringify(data.carSetups.rearTyrePressure, null);
      ballast.innerHTML = JSON.stringify(data.carSetups.ballast, null);
      fuelLoad.innerHTML = JSON.stringify(data.carSetups.fuelLoad, null);
    }
    if (data.header.packetId == 6){
      speed.innerHTML = JSON.stringify(data.carTelemetryData.speed, null);
      throttle.innerHTML = JSON.stringify(data.carTelemetryData.throttle, null);
      steer.innerHTML = JSON.stringify(data.carTelemetryData.steer, null);
      brake.innerHTML = JSON.stringify(data.carTelemetryData.brake, null);
      clutch.innerHTML = JSON.stringify(data.carTelemetryData.clutch, null);
      gear.innerHTML = JSON.stringify(data.carTelemetryData.gear, null);
      engineRPM.innerHTML = JSON.stringify(data.carTelemetryData.engineRPM, null);
      drs.innerHTML = JSON.stringify(data.carTelemetryData.drs, null);
      revLightsPercent.innerHTML = JSON.stringify(data.carTelemetryData.revLightsPercent, null);
      engineTemperature.innerHTML = JSON.stringify(data.carTelemetryData.engineTemperature, null);
      brakesTemperatureRL.innerHTML = JSON.stringify(data.carTelemetryData.brakesTemperature.RL, null);
      brakesTemperatureRR.innerHTML = JSON.stringify(data.carTelemetryData.brakesTemperature.RR, null);
      brakesTemperatureFL.innerHTML = JSON.stringify(data.carTelemetryData.brakesTemperature.FL, null);
      brakesTemperatureFR.innerHTML = JSON.stringify(data.carTelemetryData.brakesTemperature.FR, null);
      tyresSurfaceTemperatureRL.innerHTML = JSON.stringify(data.carTelemetryData.tyresSurfaceTemperature.RL, null);
      tyresSurfaceTemperatureRR.innerHTML = JSON.stringify(data.carTelemetryData.tyresSurfaceTemperature.RR, null);
      tyresSurfaceTemperatureFL.innerHTML = JSON.stringify(data.carTelemetryData.tyresSurfaceTemperature.FL, null);
      tyresSurfaceTemperatureFR.innerHTML = JSON.stringify(data.carTelemetryData.tyresSurfaceTemperature.FR, null);
      tyresInnerTemperatureRL.innerHTML = JSON.stringify(data.carTelemetryData.tyresInnerTemperature.RL, null);
      tyresInnerTemperatureRR.innerHTML = JSON.stringify(data.carTelemetryData.tyresInnerTemperature.RR, null);
      tyresInnerTemperatureFL.innerHTML = JSON.stringify(data.carTelemetryData.tyresInnerTemperature.FL, null);
      tyresInnerTemperatureFR.innerHTML = JSON.stringify(data.carTelemetryData.tyresInnerTemperature.FR, null);
      tyresPressureRL.innerHTML = JSON.stringify(data.carTelemetryData.tyresPressure.RL, null);
      tyresPressureRR.innerHTML = JSON.stringify(data.carTelemetryData.tyresPressure.RR, null);
      tyresPressureFL.innerHTML = JSON.stringify(data.carTelemetryData.tyresPressure.FL, null);
      tyresPressureFR.innerHTML = JSON.stringify(data.carTelemetryData.tyresPressure.FR, null);
      buttonStatus.innerHTML = JSON.stringify(data.buttonStatus, null);
    }
    if (data.header.packetId == 7){
      tractionControl.innerHTML = JSON.stringify(data.carStatusData.tractionControl, null);
      antiLockBrakes.innerHTML = JSON.stringify(data.carStatusData.antiLockBrakes, null);
      fuelMix.innerHTML = JSON.stringify(data.carStatusData.fuelMix, null);
      frontBrakeBias.innerHTML = JSON.stringify(data.carStatusData.frontBrakeBias, null);
      pitLimiterStatus.innerHTML = JSON.stringify(data.carStatusData.pitLimiterStatus, null);
      fuelInTank.innerHTML = JSON.stringify(data.carStatusData.fuelInTank, null);
      fuelCapacity.innerHTML = JSON.stringify(data.carStatusData.fuelCapacity, null);
      maxRPM.innerHTML = JSON.stringify(data.carStatusData.maxRPM, null);
      idleRPM.innerHTML = JSON.stringify(data.carStatusData.idleRPM, null);
      maxGears.innerHTML = JSON.stringify(data.carStatusData.maxGears, null);
      drsAllowed.innerHTML = JSON.stringify(data.carStatusData.drsAllowed, null);
      tyresWearRL.innerHTML = JSON.stringify(data.carStatusData.tyresWear.RL, null);
      tyresWearRR.innerHTML = JSON.stringify(data.carStatusData.tyresWear.RR, null);
      tyresWearFL.innerHTML = JSON.stringify(data.carStatusData.tyresWear.FL, null);
      tyresWearFR.innerHTML = JSON.stringify(data.carStatusData.tyresWear.FR, null);
      tyreCompound.innerHTML = JSON.stringify(data.carStatusData.tyreCompound, null);
      tyresDamageRL.innerHTML = JSON.stringify(data.carStatusData.tyresDamage.RL, null);
      tyresDamageRR.innerHTML = JSON.stringify(data.carStatusData.tyresDamage.RR, null);
      tyresDamageFL.innerHTML = JSON.stringify(data.carStatusData.tyresDamage.FL, null);
      tyresDamageFR.innerHTML = JSON.stringify(data.carStatusData.tyresDamage.FR, null);
      frontLeftWingDamage.innerHTML = JSON.stringify(data.carStatusData.frontLeftWingDamage, null);
      frontRightWingDamage.innerHTML = JSON.stringify(data.carStatusData.frontRightWingDamage, null);
      rearWingDamage.innerHTML = JSON.stringify(data.carStatusData.rearWingDamage, null);
      engineDamage.innerHTML = JSON.stringify(data.carStatusData.engineDamage, null);
      gearBoxDamage.innerHTML = JSON.stringify(data.carStatusData.gearBoxDamage, null);
      exhaustDamage.innerHTML = JSON.stringify(data.carStatusData.exhaustDamage, null);
      vehicleFiaFlags.innerHTML = JSON.stringify(data.carStatusData.vehicleFiaFlags, null);
      ersStoreEnergy.innerHTML = JSON.stringify(data.carStatusData.ersStoreEnergy, null);
      ersDeployMode.innerHTML = JSON.stringify(data.carStatusData.ersDeployMode, null);
      ersHarvestedThisLapMGUK.innerHTML = JSON.stringify(data.carStatusData.ersHarvestedThisLapMGUK, null);
      ersHarvestedThisLapMGUH.innerHTML = JSON.stringify(data.carStatusData.ersHarvestedThisLapMGUH, null);
      ersDeployedThisLap.innerHTML = JSON.stringify(data.carStatusData.ersDeployedThisLap, null);
    }
}
