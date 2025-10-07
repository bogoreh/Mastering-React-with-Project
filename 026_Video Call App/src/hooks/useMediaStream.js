import { useState, useEffect, useCallback } from 'react'

const useMediaStream = (localVideoRef, remoteVideoRef, roomId) => {
  const [localStream, setLocalStream] = useState(null)
  const [remoteStream, setRemoteStream] = useState(null)
  const [isVideoEnabled, setIsVideoEnabled] = useState(true)
  const [isAudioEnabled, setIsAudioEnabled] = useState(true)

  useEffect(() => {
    const initializeMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true
        })
        setLocalStream(stream)
      } catch (error) {
        console.error('Error accessing media devices:', error)
      }
    }

    initializeMedia()

    return () => {
      if (localStream) {
        localStream.getTracks().forEach(track => track.stop())
      }
    }
  }, [])

  const toggleVideo = useCallback(() => {
    if (localStream) {
      const videoTrack = localStream.getVideoTracks()[0]
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled
        setIsVideoEnabled(videoTrack.enabled)
      }
    }
  }, [localStream])

  const toggleAudio = useCallback(() => {
    if (localStream) {
      const audioTrack = localStream.getAudioTracks()[0]
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled
        setIsAudioEnabled(audioTrack.enabled)
      }
    }
  }, [localStream])

  const shareScreen = useCallback(async () => {
    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true
      })
      
      // Replace video track in local stream
      const videoTrack = screenStream.getVideoTracks()[0]
      const localVideoTrack = localStream.getVideoTracks()[0]
      localStream.removeTrack(localVideoTrack)
      localStream.addTrack(videoTrack)
      
      videoTrack.onended = () => {
        // Restore camera when screen sharing ends
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(cameraStream => {
            const cameraTrack = cameraStream.getVideoTracks()[0]
            localStream.removeTrack(videoTrack)
            localStream.addTrack(cameraTrack)
          })
      }
    } catch (error) {
      console.error('Error sharing screen:', error)
    }
  }, [localStream])

  const endCall = useCallback(() => {
    if (localStream) {
      localStream.getTracks().forEach(track => track.stop())
    }
    window.location.reload()
  }, [localStream])

  return {
    localStream,
    remoteStream,
    isVideoEnabled,
    isAudioEnabled,
    toggleVideo,
    toggleAudio,
    shareScreen,
    endCall
  }
}

export default useMediaStream