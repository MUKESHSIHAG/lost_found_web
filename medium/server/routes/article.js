const articlecontroller = require('./../controllers/article.ctrl')
const multipart = require('connect-multiparty')
const multipartWare = multipart()

module.exports = (router) => {
    //get all articles
    router.route('/article').get(articlecontroller.getAll)

    //add an article
    router.route('/article').post(multipartWare, articlecontroller.addArticle)

    //clap on article
    router.route('/article/clap').post(articlecontroller.clapArticle)

    //comment on article
    router.route('/article/comment').post(articlecontroller.commentArticle)

    //get a particular article to view
    router.route('/article/:id').get(articlecontroller.getArticle)
}