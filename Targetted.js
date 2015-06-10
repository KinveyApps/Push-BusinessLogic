function onRequest(request, response, modules) {
  var push = modules.push;
  var collectionAccess = modules.collectionAccess;
  var logger = modules.logger;
  collectionAccess.collection('user').find({'username': 'titanium'}, function (err, user) {
    logger.info("ok: " + user._id);
    push.sendMessage(user, 'targetted from BL');
    response.complete();
  });
}
