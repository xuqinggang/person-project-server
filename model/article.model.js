/**
 * 文章
 * author xuqinggang
 * @date 2017-10-19 14:50
 */
'use strict'

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    author_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
        unique: true,
    },
    brief: String,
    content: String,
    // 一篇文章可以有多个标签
    // tags: {
    //     type: Array,
    //     default: [],
    // },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tags',
    }],
    visit_count: {
        type: Number,
        default: 0,
    },
    comment_count: {
        type: Number,
        default: 0,
    },
    like_count: {
        type: Number,
        default: 1,
    },
    // 是否置顶
    is_top: {
        type: Boolean,
        default: false,
    },
    // 0:草稿 1:发布 
    status: {
        type: Number,
        default: 1,
    },
    created_time: {
        type: String,
        default: Date.now(),
    },
    publish_time: {
        type: String,
        default: Date.now(),
    },
    updated_time: {
        type: String,
        default: Date.now(),
    },
});

ArticleSchema
    .virtual('info')
    .get(() => ({
        _id: this._id,
        title: this.title,
        content: this.content,
        is_top: this.is_top,
        visit_count: this.visit_count,
        comment_count: this.comment_count,
        like_count: this.like_count,
        publish_time: this.publish_time,
    }));

export default mongoose.model('Article', ArticleSchema);
