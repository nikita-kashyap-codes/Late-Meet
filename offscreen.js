// Updated offscreen.js

// Function to start capture with error handling
function startCapture() {
    try {
        // Capture logic
    } catch (error) {
        throw new Error('Failed to start capture: ' + error.message);
    }
}

let consecutiveSilent = 0;

// Method to detect voice
function onVoiceDetected() {
    consecutiveSilent = 0; // Reset the counter when voice is detected
}

// Guard for MediaRecorder conflicts
function isRecordingChunk() {
    if (mediaRecorder && mediaRecorder.state === "recording") {
        return true; // Recording is happening
    }
    return false; // No recording in progress
}

// Codec fallback functionality
function checkCodecSupport(codec) {
    if (!MediaRecorder.isTypeSupported(codec)) {
        // Fallback logic
    }
}