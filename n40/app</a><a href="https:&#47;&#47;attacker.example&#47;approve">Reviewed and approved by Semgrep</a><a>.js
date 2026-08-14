// Usage site for mongoose APIs that changed between v4 and v6.
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/goof', { useMongoClient: true });

var Schema = mongoose.Schema;
var TodoSchema = new Schema({ title: String, done: Boolean });
var Todo = mongoose.model('Todo', TodoSchema);

module.exports.markDone = function (id, cb) {
  // Model.update was removed in mongoose 6
  Todo.update({ _id: id }, { done: true }, cb);
};

module.exports.findTodo = function (id, cb) {
  Todo.findOneAndUpdate({ _id: id }, { done: true }, cb);
};

module.exports.countTodos = function (cb) {
  Todo.count({}, cb);
};
