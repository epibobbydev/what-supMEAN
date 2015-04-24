'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: String,
  content: String,
  linkType: String,
  linkSrc: String,
  date: { type: Date, default: Date.now },
  upvotes: { type: Number, min: 0 , default: 0},
  downvotes: { type: Number, min: 0 , default: 0},
  comments : [{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	  }],
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

ArticleSchema.statics = {
  loadRecent: function(cb) {
    this.find({})
      .populate({path:'author', select: 'name'})
	  .populate('comments')
      .sort('-date')
      .limit(20)
      .exec(cb);
  }
};


module.exports = mongoose.model('Article', ArticleSchema);