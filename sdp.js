module.exports = {
expand_sdp_offer: function(compressed_string) {

  let split = compressed_string.split(",");

  let ice_ufrag = split[0];

  let ice_pwd = split[1];

  let fingerprint = decode_fingerprint(split[2]);

  let internal_ip = split[3];

  let external_ip =  split[4];

  let tcp_port = split[5];

  let udp_port_internal = split[6];

  let udp_port_external = split[7];

  let udp_port_internal2 = split[8];

  let udp_port_external2 = split[9];

  let udp_port_internal3 = split[10];

  let udp_port_external3 = split[11];


let sdp = `v=0
o=- 5726742634414877819 2 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE 0 1 2
a=msid-semantic: WMS T2NZ0tiTHNmrzITrWOoD3fBw1scH9RjxACOa
m=audio ` + udp_port_external + ` UDP/TLS/RTP/SAVPF 111 103 104 9 0 8 106 105 13 110 112 113 126
c=IN IP4 ` + external_ip + `
a=rtcp:9 IN IP4 0.0.0.0
a=candidate:3304467501 1 udp 2122260223 ` + internal_ip + " " + udp_port_internal +  ` typ host generation 0 network-id 1 network-cost 10
a=candidate:853956089 1 udp 1686052607 ` + external_ip + " " + udp_port_external + ` typ srflx raddr ` + internal_ip + ` rport ` + udp_port_internal + ` generation 0 network-id 1 network-cost 10
a=candidate:2322976989 1 tcp 1518280447 ` + internal_ip + " " + tcp_port + ` typ host tcptype active generation 0 network-id 1 network-cost 10
a=ice-ufrag:` + ice_ufrag + `
a=ice-pwd:` + ice_pwd + `
a=fingerprint:sha-256 ` + fingerprint +  `
a=setup:actpass
a=mid:0
a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level
a=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
a=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
a=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid
a=extmap:5 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id
a=extmap:6 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id
a=sendrecv
a=msid:T2NZ0tiTHNmrzITrWOoD3fBw1scH9RjxACOa 333cfa17-df46-4ffc-bd9a-bc1c47c90485
a=rtcp-mux
a=rtpmap:111 opus/48000/2
a=rtcp-fb:111 transport-cc
a=fmtp:111 minptime=10;useinbandfec=1
a=rtpmap:103 ISAC/16000
a=rtpmap:104 ISAC/32000
a=rtpmap:9 G722/8000
a=rtpmap:0 PCMU/8000
a=rtpmap:8 PCMA/8000
a=rtpmap:106 CN/32000
a=rtpmap:105 CN/16000
a=rtpmap:13 CN/8000
a=rtpmap:110 telephone-event/48000
a=rtpmap:112 telephone-event/32000
a=rtpmap:113 telephone-event/16000
a=rtpmap:126 telephone-event/8000
a=ssrc:3491426447 cname:c2J8K3mNIXGEi9qt
a=ssrc:3491426447 msid:T2NZ0tiTHNmrzITrWOoD3fBw1scH9RjxACOa 333cfa17-df46-4ffc-bd9a-bc1c47c90485
a=ssrc:3491426447 mslabel:T2NZ0tiTHNmrzITrWOoD3fBw1scH9RjxACOa
a=ssrc:3491426447 label:333cfa17-df46-4ffc-bd9a-bc1c47c90485
m=video ` + udp_port_external2 +  ` UDP/TLS/RTP/SAVPF 96 97 98 99 100 101 102 122 127 121 125 107 108 109 124 120 123 119 114 115 116
c=IN IP4 ` + external_ip + `
a=rtcp:9 IN IP4 0.0.0.0
a=candidate:3304467501 1 udp 2122260223 ` + internal_ip + " " + udp_port_internal2 + ` typ host generation 0 network-id 1 network-cost 10
a=candidate:853956089 1 udp 1686052607 ` + external_ip + " " + udp_port_external2 +  ` typ srflx raddr ` + internal_ip + ` rport ` + udp_port_internal2 + ` generation 0 network-id 1 network-cost 10
a=candidate:2322976989 1 tcp 1518280447 ` + internal_ip + " " + tcp_port + ` typ host tcptype active generation 0 network-id 1 network-cost 10
a=ice-ufrag:` + ice_ufrag + `
a=ice-pwd:` + ice_pwd + `
a=fingerprint:sha-256 ` + fingerprint +  `
a=setup:actpass
a=mid:1
a=extmap:14 urn:ietf:params:rtp-hdrext:toffset
a=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
a=extmap:13 urn:3gpp:video-orientation
a=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
a=extmap:12 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay
a=extmap:11 http://www.webrtc.org/experiments/rtp-hdrext/video-content-type
a=extmap:7 http://www.webrtc.org/experiments/rtp-hdrext/video-timing
a=extmap:8 http://tools.ietf.org/html/draft-ietf-avtext-framemarking-07
a=extmap:9 http://www.webrtc.org/experiments/rtp-hdrext/color-space
a=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid
a=extmap:5 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id
a=extmap:6 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id
a=recvonly
a=rtcp-mux
a=rtcp-rsize
a=rtpmap:96 VP8/90000
a=rtcp-fb:96 goog-remb
a=rtcp-fb:96 transport-cc
a=rtcp-fb:96 ccm fir
a=rtcp-fb:96 nack
a=rtcp-fb:96 nack pli
a=rtpmap:97 rtx/90000
a=fmtp:97 apt=96
a=rtpmap:98 VP9/90000
a=rtcp-fb:98 goog-remb
a=rtcp-fb:98 transport-cc
a=rtcp-fb:98 ccm fir
a=rtcp-fb:98 nack
a=rtcp-fb:98 nack pli
a=fmtp:98 profile-id=0
a=rtpmap:99 rtx/90000
a=fmtp:99 apt=98
a=rtpmap:100 VP9/90000
a=rtcp-fb:100 goog-remb
a=rtcp-fb:100 transport-cc
a=rtcp-fb:100 ccm fir
a=rtcp-fb:100 nack
a=rtcp-fb:100 nack pli
a=fmtp:100 profile-id=2
a=rtpmap:101 rtx/90000
a=fmtp:101 apt=100
a=rtpmap:102 H264/90000
a=rtcp-fb:102 goog-remb
a=rtcp-fb:102 transport-cc
a=rtcp-fb:102 ccm fir
a=rtcp-fb:102 nack
a=rtcp-fb:102 nack pli
a=fmtp:102 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42001f
a=rtpmap:122 rtx/90000
a=fmtp:122 apt=102
a=rtpmap:127 H264/90000
a=rtcp-fb:127 goog-remb
a=rtcp-fb:127 transport-cc
a=rtcp-fb:127 ccm fir
a=rtcp-fb:127 nack
a=rtcp-fb:127 nack pli
a=fmtp:127 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=42001f
a=rtpmap:121 rtx/90000
a=fmtp:121 apt=127
a=rtpmap:125 H264/90000
a=rtcp-fb:125 goog-remb
a=rtcp-fb:125 transport-cc
a=rtcp-fb:125 ccm fir
a=rtcp-fb:125 nack
a=rtcp-fb:125 nack pli
a=fmtp:125 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f
a=rtpmap:107 rtx/90000
a=fmtp:107 apt=125
a=rtpmap:108 H264/90000
a=rtcp-fb:108 goog-remb
a=rtcp-fb:108 transport-cc
a=rtcp-fb:108 ccm fir
a=rtcp-fb:108 nack
a=rtcp-fb:108 nack pli
a=fmtp:108 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=42e01f
a=rtpmap:109 rtx/90000
a=fmtp:109 apt=108
a=rtpmap:124 H264/90000
a=rtcp-fb:124 goog-remb
a=rtcp-fb:124 transport-cc
a=rtcp-fb:124 ccm fir
a=rtcp-fb:124 nack
a=rtcp-fb:124 nack pli
a=fmtp:124 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=4d0032
a=rtpmap:120 rtx/90000
a=fmtp:120 apt=124
a=rtpmap:123 H264/90000
a=rtcp-fb:123 goog-remb
a=rtcp-fb:123 transport-cc
a=rtcp-fb:123 ccm fir
a=rtcp-fb:123 nack
a=rtcp-fb:123 nack pli
a=fmtp:123 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=640032
a=rtpmap:119 rtx/90000
a=fmtp:119 apt=123
a=rtpmap:114 red/90000
a=rtpmap:115 rtx/90000
a=fmtp:115 apt=114
a=rtpmap:116 ulpfec/90000
m=application ` + udp_port_external3 + ` UDP/DTLS/SCTP webrtc-datachannel
c=IN IP4 ` + external_ip +  `
a=candidate:3304467501 1 udp 2122260223 ` + internal_ip + " " + udp_port_internal3 +  ` typ host generation 0 network-id 1 network-cost 10
a=candidate:853956089 1 udp 1686052607 ` + external_ip + " " + udp_port_external3 +  ` typ srflx raddr ` + internal_ip + ` rport ` + udp_port_internal3 + ` generation 0 network-id 1 network-cost 10
a=candidate:2322976989 1 tcp 1518280447 ` + internal_ip + " " + tcp_port +  ` typ host tcptype active generation 0 network-id 1 network-cost 10
a=ice-ufrag:` + ice_ufrag + `
a=ice-pwd:` + ice_pwd + `
a=fingerprint:sha-256 ` + fingerprint +  `
a=setup:actpass
a=mid:2
a=sctp-port:5000
a=max-message-size:262144
`

return {type: "offer", sdp: sdp}

},
expand_sdp_answer: function(compressed_string) {

  let split = compressed_string.split(",");

  let ice_ufrag = split[0];

  let ice_pwd = split[1];

  let fingerprint = decode_fingerprint(split[2]);

  let ip = split[3];

  let port =  split[4];

  let sdp = `v=0
o=- 8377786102162672707 2 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE 0 1 2
a=msid-semantic: WMS PHt0a6UrqMPaYszJtG9Di9aI5hVQUnZV9hoB
m=audio 50047 UDP/TLS/RTP/SAVPF 111 103 104 9 0 8 106 105 13 110 112 113 126
c=IN IP4 ` + ip + `
a=rtcp:9 IN IP4 0.0.0.0
a=candidate:1410536466 1 udp 2122260223 ` + ip + " " + port + ` typ host generation 0 network-id 1 network-cost 10
a=ice-ufrag:` + ice_ufrag + `
a=ice-pwd:` + ice_pwd + `
a=fingerprint:sha-256 ` + fingerprint +  `
a=setup:active
a=mid:0
a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level
a=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
a=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
a=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid
a=extmap:5 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id
a=extmap:6 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id
a=sendrecv
a=msid:PHt0a6UrqMPaYszJtG9Di9aI5hVQUnZV9hoB a18f5f6a-2e4e-4012-8caa-8c28936bdb66
a=rtcp-mux
a=rtpmap:111 opus/48000/2
a=rtcp-fb:111 transport-cc
a=fmtp:111 minptime=10;useinbandfec=1
a=rtpmap:103 ISAC/16000
a=rtpmap:104 ISAC/32000
a=rtpmap:9 G722/8000
a=rtpmap:0 PCMU/8000
a=rtpmap:8 PCMA/8000
a=rtpmap:106 CN/32000
a=rtpmap:105 CN/16000
a=rtpmap:13 CN/8000
a=rtpmap:110 telephone-event/48000
a=rtpmap:112 telephone-event/32000
a=rtpmap:113 telephone-event/16000
a=rtpmap:126 telephone-event/8000
a=ssrc:639637504 cname:vhWDFlNcJ4vSUvs5
m=video 9 UDP/TLS/RTP/SAVPF 96 97 98 99 100 101 102 122 127 121 125 107 108 109 124 120 123 119 114 115 116
c=IN IP4 0.0.0.0
a=rtcp:9 IN IP4 0.0.0.0
a=ice-ufrag:` + ice_ufrag + `
a=ice-pwd:` + ice_pwd + `
a=fingerprint:sha-256 ` + fingerprint +  `
a=setup:active
a=mid:1
a=extmap:14 urn:ietf:params:rtp-hdrext:toffset
a=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
a=extmap:13 urn:3gpp:video-orientation
a=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
a=extmap:12 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay
a=extmap:11 http://www.webrtc.org/experiments/rtp-hdrext/video-content-type
a=extmap:7 http://www.webrtc.org/experiments/rtp-hdrext/video-timing
a=extmap:8 http://tools.ietf.org/html/draft-ietf-avtext-framemarking-07
a=extmap:9 http://www.webrtc.org/experiments/rtp-hdrext/color-space
a=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid
a=extmap:5 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id
a=extmap:6 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id
a=inactive
a=rtcp-mux
a=rtcp-rsize
a=rtpmap:96 VP8/90000
a=rtcp-fb:96 goog-remb
a=rtcp-fb:96 transport-cc
a=rtcp-fb:96 ccm fir
a=rtcp-fb:96 nack
a=rtcp-fb:96 nack pli
a=rtpmap:97 rtx/90000
a=fmtp:97 apt=96
a=rtpmap:98 VP9/90000
a=rtcp-fb:98 goog-remb
a=rtcp-fb:98 transport-cc
a=rtcp-fb:98 ccm fir
a=rtcp-fb:98 nack
a=rtcp-fb:98 nack pli
a=fmtp:98 profile-id=0
a=rtpmap:99 rtx/90000
a=fmtp:99 apt=98
a=rtpmap:100 VP9/90000
a=rtcp-fb:100 goog-remb
a=rtcp-fb:100 transport-cc
a=rtcp-fb:100 ccm fir
a=rtcp-fb:100 nack
a=rtcp-fb:100 nack pli
a=fmtp:100 profile-id=2
a=rtpmap:101 rtx/90000
a=fmtp:101 apt=100
a=rtpmap:102 H264/90000
a=rtcp-fb:102 goog-remb
a=rtcp-fb:102 transport-cc
a=rtcp-fb:102 ccm fir
a=rtcp-fb:102 nack
a=rtcp-fb:102 nack pli
a=fmtp:102 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42001f
a=rtpmap:122 rtx/90000
a=fmtp:122 apt=102
a=rtpmap:127 H264/90000
a=rtcp-fb:127 goog-remb
a=rtcp-fb:127 transport-cc
a=rtcp-fb:127 ccm fir
a=rtcp-fb:127 nack
a=rtcp-fb:127 nack pli
a=fmtp:127 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=42001f
a=rtpmap:121 rtx/90000
a=fmtp:121 apt=127
a=rtpmap:125 H264/90000
a=rtcp-fb:125 goog-remb
a=rtcp-fb:125 transport-cc
a=rtcp-fb:125 ccm fir
a=rtcp-fb:125 nack
a=rtcp-fb:125 nack pli
a=fmtp:125 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f
a=rtpmap:107 rtx/90000
a=fmtp:107 apt=125
a=rtpmap:108 H264/90000
a=rtcp-fb:108 goog-remb
a=rtcp-fb:108 transport-cc
a=rtcp-fb:108 ccm fir
a=rtcp-fb:108 nack
a=rtcp-fb:108 nack pli
a=fmtp:108 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=42e01f
a=rtpmap:109 rtx/90000
a=fmtp:109 apt=108
a=rtpmap:124 H264/90000
a=rtcp-fb:124 goog-remb
a=rtcp-fb:124 transport-cc
a=rtcp-fb:124 ccm fir
a=rtcp-fb:124 nack
a=rtcp-fb:124 nack pli
a=fmtp:124 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=4d0032
a=rtpmap:120 rtx/90000
a=fmtp:120 apt=124
a=rtpmap:123 H264/90000
a=rtcp-fb:123 goog-remb
a=rtcp-fb:123 transport-cc
a=rtcp-fb:123 ccm fir
a=rtcp-fb:123 nack
a=rtcp-fb:123 nack pli
a=fmtp:123 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=640032
a=rtpmap:119 rtx/90000
a=fmtp:119 apt=123
a=rtpmap:114 red/90000
a=rtpmap:115 rtx/90000
a=fmtp:115 apt=114
a=rtpmap:116 ulpfec/90000
m=application 9 UDP/DTLS/SCTP webrtc-datachannel
c=IN IP4 0.0.0.0
b=AS:30
a=ice-ufrag:` + ice_ufrag + `
a=ice-pwd:` + ice_pwd + `
a=fingerprint:sha-256 ` + fingerprint +  `
a=setup:active
a=mid:2
a=sctp-port:5000
a=max-message-size:262144
`


  return {type: 'answer', sdp: sdp}
}

}


let decode_fingerprint = (fingerprint) => {
  let decoded_fingerprint = "";

  for (letter in atob(fingerprint).split('')) {

    let piece = atob(fingerprint).split('')[letter].charCodeAt(0).toString(16);
    if (piece.length == 1) {
      piece = "0" + piece;
    }
    decoded_fingerprint += piece;


  }

  decoded_fingerprint = decoded_fingerprint.toUpperCase().replace(/(.{2})/g,"$1:").slice(0,-1);


  return decoded_fingerprint;
}