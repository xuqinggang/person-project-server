/**
 * 初始化数据
 * author xuqinggang
 * @date 2017-10-26 16:58
 */

import mongoose from 'mongoose';

const Tags = mongoose.model('Tags');
const Article = mongoose.model('Article');

export default async () => {
    await Tags.create(
        {
            name: 'js',
        },
        {
            name: 'html',
        },
    );
    const tags = await Tags.find({});
    const tagsId = tags.map((tag) => {
        return tag._id;
    });
    await Article.create(
        {
            title: 'test12',
            brief: 'xx',
            content: 'content1',
            status: 1,
            tags: [tagsId[0]],
        },
        {
            title: 'test1',
            brief: 'yy',
            content: 'content1',
            status: 1,
            tags: [tagsId[1]],
        },
    );
};
