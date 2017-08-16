var gulp = require('gulp');
var chokidar = require('chokidar');
var tarsConfig = require('../../../tars-config');
var watcherLog = require('../../helpers/watcher-log');

/**
 * Watcher for misc files
 */
module.exports = function () {
    return chokidar.watch('markup/' + tarsConfig.fs.staticFolderName + '/misc/**/*.*', {
        ignored: '',
        persistent: true,
        ignoreInitial: true
    }).on('all', function (event, path) {
        watcherLog(event, path);
        gulp.start('other:move-misc-files');
    });
};