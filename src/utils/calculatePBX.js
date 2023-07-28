function calculatePBX(
  ipLines,
  fxsPorts,
  fxoPorts,
  concurrentCalls,
  callRecording,
  isCallCenter,
) {
  let pbxModel = "";

  if (fxoPorts == 4 && ipLines <= 200) {
    pbxModel = "QX200";
  } else if ((fxoPorts == 2 || fxsPorts == 2) && ipLines <= 200) {
    if (ipLines > 48 || concurrentCalls > 16 || callRecording > 12) {
      pbxModel = "QX200";
    } else {
      pbxModel = "QX50";
    }
  } else {
    if (ipLines > 128 || concurrentCalls > 40) {
      pbxModel = "QX500";
    } else if (ipLines > 64 || concurrentCalls > 20) {
      pbxModel = "QX100";
    } else if (ipLines > 32 || concurrentCalls > 6) {
      pbxModel = "QX60";
    } else if (ipLines <= 16 || concurrentCalls <= 6 ) {
      pbxModel = "QX20";
      if (isCallCenter == true) {
        pbxModel = "QX60";
      }
    }
  }

  return pbxModel;
}

export default calculatePBX;
