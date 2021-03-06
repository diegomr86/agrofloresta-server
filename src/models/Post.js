const mongoose = require('mongoose'),
  ObjectId = mongoose.Schema.Types.ObjectId;

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: String,
  tags: [String],
  picture: Object,
  url: String,
  oembed: String,
  start_time: Date,
  end_time: Date,
  location: String,
  score: Number,
  user: {
    type: ObjectId,
    ref: 'User',
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

PostSchema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'post'
});

PostSchema.virtual('likes', {
  ref: 'Like',
  localField: '_id',
  foreignField: 'post'
});

mongoose.model('Post', PostSchema);
