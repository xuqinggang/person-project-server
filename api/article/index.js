/**
 * article api
 * author xuqinggang
 * @date 2017-10-27 11:40
 */
import mongoose from 'mongoose';
import Util from 'util/util';

const Article = mongoose.model('Article');

// 获取文章总数
async function getArticleListCount(paramsObj = {}) {
    let {
        tagsId = [],
        sortName = 'created_time',
        sortOrder = -1,
        status = 1,
    } = paramsObj;

    let condition = { status: { $eq: status } };

    if (tagsId && typeof tagsId === 'string') {
        tagsId = [ tagsId ];
    }
    // 根据tagsId，筛选出文章至少有一个tag包含在tagsId数组内
    if (Array.isArray(tagsId) && tagsId.length > 0) {
        Object.assign(condition, { tags: { $elemMatch: { $in: tagsId } } });
    }

    if (sortOrder === -1) {
        sortName = '-' + sortName;
    }

    const count = await Article.count(condition);
    return count;
}

// 获取文章列表
async function getArticleList(paramsObj = {}) {
    let {
        curPage,
        perPage,
        tagsId = [],
        sortName = 'created_time',
        sortOrder = -1,
        status = 1,
    } = paramsObj;
    const startRow = (curPage - 1) * perPage;
    let condition = { status: { $eq: status } };
    if (tagsId && typeof tagsId === 'string') {
        tagsId = [ tagsId ];
    }
    // 根据tagsId，筛选出文章至少有一个tag包含在tagsId数组内
    if (Array.isArray(tagsId) && tagsId.length > 0) {
        Object.assign(condition, { tags: { $elemMatch: { $in: tagsId } } });
    }
    // 排序
    if (sortOrder === -1) {
        sortName = '-' + sortName;
    }
    { tags: { $all: [] } }
    return await Article.find(condition)
        .select('title brief tags visit_count comment_count like_count is_top publish_time status')
        .skip(startRow)
        .limit(perPage)
        .sort(sortName)
        .populate('tags')
        .exec()
        .then((articles) => {
            console.log('articles', articles);
            return articles;
        })
        .catch((err) => {
            throw(err);
        });
}

export default {
    getArticleList,
    getArticleListCount,
}
