var gulp = require('gulp');
var fs = require('fs');
var path = require('path');


function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

/**********************************************
 * Copy images folder
 */

gulp.task('images', function() {
   gulp.src('common/images/**')
   .pipe(gulp.dest('Chrome/'))
   .pipe(gulp.dest('Firefox/'));
});

/**********************************************
 * Make Manifest.json for each browser
 */

function parseJSONfile(filename) {
  var jsonfile = __dirname + "/"+ filename;
  var obj = {};

  try {
    obj = JSON.parse(fs.readFileSync(jsonfile, 'utf8'));
  } catch (e) {
    console.log ("Error in file: " + jsonfile);
    console.log(e + "\n");
  }

  return obj;
}

function combine(obj1, obj2, dest) {
  var finalObj = Object.assign(obj1, obj2);
  var fileContents = JSON.stringify(finalObj, null, 2);
  fs.writeFileSync(__dirname + "/"+ dest + "/manifest.json", fileContents);
}

gulp.task('manifest', function(){
  var mCore = parseJSONfile("common/manifest.core.json");
  var mChrome = parseJSONfile("common/manifest.chrome.json");
  var mFF = parseJSONfile("common/manifest.firefox.json");

  combine(mCore, mChrome, "Chrome");
  combine(mCore, mFF, "Firefox");
});

/**********************************************
 * Watch
 */

gulp.task('watch', function() {
  gulp.watch('common/**', ['images', 'manifest']);
});



/**********************************************
 * Default and specific tasks
 */

gulp.task('default', ['images', 'manifest']);