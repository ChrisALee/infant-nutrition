const shell = require("shelljs");

// shell.cp("-R", "src/public/js/lib", "dist/public/js/");
// shell.cp("-R", "src/public/fonts", "dist/public/");
// shell.cp("-R", "src/public/images", "dist/public/");
shell.mkdir("dist/public/");
shell.cp("-R", "src/public/stylesheets", "dist/public/stylesheets/");
