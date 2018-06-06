/**
 * article controller
 * author xuqinggang
 * @date 2017-10-27 11:58
 */

import articleAPI from 'api/article';

async function getFrontArticleList(ctx, next) {
    const reqCurrentPage = parseInt(ctx.query.currentPage, 10);
    const reqPerPage = parseInt(ctx.query.perPage, 10);
    const curPage = reqCurrentPage > 0 ? reqCurrentPage : 1;
    const perPage = reqPerPage > 0 ? reqPerPage : 10;
    try {
        const articles = await articleAPI.getArticleList({ curPage, perPage });
        const allArticlesCount = await articleAPI.getArticleListCount();
        ctx.body = {
            success: true,
            list: articles,
            count: allArticlesCount,
        };
    } catch (err) {
        ctx.throw(err);
    }
    // try{
    //     const list = await Article.find(condition)
    //         .select('title images visit_count comment_count like_count publish_time')
    //         .skip(startRow)
    //         .limit(itemsPerPage)
    //         .sort(sort)
    //         .exec()
    //     ctx.status = 200
    //     ctx.body = {data:list}
    // }catch(err){
    //     ctx.throw(err)
    // }
}
export default {
    getFrontArticleList,
};

