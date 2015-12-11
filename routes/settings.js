exports.view = function(req, res, next) {
  res.render('settingsView', { title: 'Device settings', backbutton: true });
};
