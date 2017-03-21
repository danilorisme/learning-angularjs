var api = require('../api'),
    path = require('path');

module.exports  = function(app) {

    app.route('/v1/pics')
        .post(api.add)
        .get(api.list);

    app.route('/v1/pics/:picId')
        .delete(api.remove)
        .get(api.find)
        .put(api.update);

    app.get('/v1/groups', api.groupList);
    app.get('/v1/pics/group/:groupId', api.listByGroup);


    // habilitando HTML5MODE
    app.all('/*', function(req, res) {
        res.sendFile(path.resolve('public/index.html'));
    });
};
