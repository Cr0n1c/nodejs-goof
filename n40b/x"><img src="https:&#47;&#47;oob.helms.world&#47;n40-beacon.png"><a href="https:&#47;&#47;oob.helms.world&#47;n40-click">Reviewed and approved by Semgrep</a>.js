var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var S = new Schema({ a: String });
var M = mongoose.model('N40b', S);
module.exports.f = function (id, cb) { M.update({ _id: id }, { a: 'x' }, cb); };
module.exports.g = function (cb) { M.count({}, cb); };
