/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* An example of how to specify two TURN server configs:
 * var turnServers = {
 *   local: { iceServers: [{"username":"mozilla","credential":"mozilla","url":"turn:10.0.0.1"}] },
 *   remote: { iceServers: [{"username":"firefox","credential":"firefox","url":"turn:10.0.0.2"}] }
 * };
  */

var turnServers = {
  local: { iceServers:
  [{"username":"webrtc","credential":"firefox","url":"turn:10.252.73.251"},{"username":"webrtc","credential":"firefox","url":"turn:10.252.73.251?trnasport=tcp"}] },
  remote: { iceServers: [{"username":"webrtc","credential":"firefox","url":"turn:10.252.73.251"},{"username":"webrtc","credential":"firefox","url":"turn:10.252.73.251?trnasport=tcp"}] }
};
