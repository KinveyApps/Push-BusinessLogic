function onRequest(request, response, modules) {
  var push = modules.push;
  var collectionAccess = modules.collectionAccess;
  var logger = modules.logger;
  collectionAccess.collection('user').find({'username': 'titanium'}, function (err, user) {
    var iOSAps = { alert: "targetted custom", badge: 4, sound: "notification.wav" }
    var iOSExtras = {from: "Kinvey", subject: "Welcome to Business Logic"}
    var androidPayload = {message: "You have a new Message", from: "Kinvey", subject: "Welcome to BL" } 
  
    push.sendPayload(user, iOSAps, iOSExtras, androidPayload);
    response.complete();
  });  
}