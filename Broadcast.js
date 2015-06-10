function onRequest(request, response, modules) {
  var push = modules.push;
  push.broadcastMessage("broadcast test");
  response.complete();
}