exports.view = function(req, res, next) {
  res.render('alarmView', { noHeader: true });
};
