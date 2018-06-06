/**
 * 标签
 * author xuqinggang
 * @date 2017-10-27 10:50
 */

'use strict';

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TagSchema = new Schema({
    // 标签名称 
    name: {
        type: String,
        unique: true,
    },
    // is_index: {
    //     type: Boolean,
    //     default: false,
    // },
    is_show: {
        type: Boolean,
        default: true,
    },
    sort: {
        type: Number,
        default: 1,
    },
});

export default mongoose.model('Tags', TagSchema);
