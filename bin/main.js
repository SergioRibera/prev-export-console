#!/usr/bin/env node
var yargs = require('yargs');
var rmcomm = require('kc-rmcomm');
var fs = require('fs');
var path = require('path');
var obfuscator = require('javascript-obfuscator')
const { exec } = require('child_process');



const success = "The compilation was successful";

const args = yargs
    .option('file', {
        alias: 'f',
        description: 'Compile file',
        type: 'string'
    })
    .option('files', {
        alias: 's',
        description: 'Compile all files in array',
        type: 'array'
    })
    .option("dir", { 
        alias: "d",
        describe: "Compile all files in Directory",
        type: "string"
    })
    .option("output", {
        alias: 'o',
        description: 'This is path where output all files',
        type: 'string',
        default: path.resolve('./build-export/')
    })
    .help()
    .alias('help', 'h')
    .argv;

let outputDir = args.output;
if(args.file){
    existsDir(outputDir, (e) => {
        if(e) { console.log(e); return; }
        compileFile(args.file, outputDir);
    });
}
if(args.dir){
    exec("prev-export --files "+getFiles(args.dir).join(' '), (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`${stderr}`);
            return;
        }
        console.log(`${stdout}`);
    });
}
if(args.files){
    args.files.forEach(file => {
        compileFile(file, outputDir);        
    });
}
function compileFile(file, outDir){
    existsDir(outDir, (e) => {
        if(e) { console.log(e); return; }

        if(file.endsWith('js')) {
            fs.readFile(file, 'utf8', (err, data) => {
                if(err) { console.error(err); return; }
                var dataUncomment = rmcomm(data);
                dataUncomment = obfuscator.obfuscate(dataUncomment, {
                    compact: true,
                }).getObfuscatedCode();
                var fileOut = path.join(outDir, path.basename(file));
                fs.writeFile(fileOut, dataUncomment, (err) => {
                    if(err){
                        console.error(err);
                        return;
                    }
                });
                return console.log(success);
            });
        }else{
            exec(`cp \"${file}\" \"${outDir}\"`, (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`${stderr}`);
                    return;
                }
                console.log(`${stdout}`);
            });
        }
    });
}
function existsDir(path, cb){
    fs.mkdir(path, { recursive: true }, (err) => {
        if (err) {
            if (err.code == 'EEXIST') cb(null); // ignore the error if the folder already exists
            if (err.code == 'ENOENT') cb(null);
            else cb(err); // something else went wrong
        } else cb(null); // successfully created folder
    });
}
function getFiles(dir) {
    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(file => {
        var absolute = path.join(dir, file);
        var stat = fs.lstatSync(absolute);
        if (stat.isDirectory()) {
            existsDir(absolute, (e) => {if(e) { return; }});
            results = results.concat(getFiles(file));
        } else
            results.push(absolute);
    });
    return results;
}
var copyRecursiveSync = function(src, dest) {
    var exists = fs.existsSync(src);
    var stats = exists && fs.statSync(src);
    var isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
      fs.mkdirSync(dest);
      fs.readdirSync(src).forEach(function(childItemName) {
        copyRecursiveSync(path.join(src, childItemName),
                          path.join(dest, childItemName));
      });
    } else {
      fs.copyFileSync(src, dest);
    }
};
