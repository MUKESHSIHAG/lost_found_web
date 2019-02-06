const usercontroller = require('./../controllers/user.ctrl')

module.exports = (router) => {
    //get a user
    router.route('/user/:id').get(usercontroller.getUser)    

    //get user profile
    router.route('/user/profile/:id').get(usercontroller.getUserProfile)

    //add a user
    router.route('/user').post(usercontroller.addUser)

    //follow a user
    router.route('/user/follow').post(usercontroller.followUser)


}