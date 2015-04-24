'use strict';
 
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
 
var CommentSchema = new Schema({
  content: String,
  article : {
    type: Schema.Types.ObjectId,
    ref: 'Article'
  },
  date: { type: Date, default: Date.now },
  upvotes: { type: Number, min: 0, default: 0 },
  downvotes: { type: Number, min: 0, default: 0 },
  author : String,
  authorId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});
 
CommentSchema.statics = {
  loadRecent: function(idArticle, cb) {
    this.find({article : idArticle})
      .populate({path:'author', select: 'name'})
      .sort('-date')
      .limit(20)
      .exec(cb);
  }
};
 
module.exports = mongoose.model('Comment', CommentSchema);
