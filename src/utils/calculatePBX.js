function calculatePBX(
  ipLines,
  fxsPorts,
  fxoPorts,
  concurrentCalls,
  callRecording,
) {
  let pbxModel = "";

  if (fxoPorts == 4) {
    pbxModel = "QX200";
  } else if (fxoPorts == 2 || fxsPorts == 2) {
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
    }
  }

  return pbxModel;
}

export default calculatePBX;
