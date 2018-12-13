// connect to websocket
var ws = new WebSocket('ws:localhost:8080/history/ws');

// Function is called when go_websocket_server recieves a packet and sends it via the websocket
ws.onmessage = function(event) {
  var data = JSON.parse(event.data);
}
