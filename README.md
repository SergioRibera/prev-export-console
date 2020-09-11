# Prev Export Console Tool

prev-export is a tool that is designed to run before launching a web page into production as it eliminates comments and obfuscates js code, it is a fairly initial and immature tool but I think it already has some form, although abstract, it is gaining power .

This library is based on nodejs so you will need it to be able to run it, if you are not good at handling the console you can also try the version with a graphical interface

### Install

Clone this repository whith

```sh
    git clone https://github.com/SergioRibera/prev-export-console.git
```

Excecute the command for automatization:
```sh
    chmod -x install.sh
```
```sh
    bash install.sh
```

Follow the instructions and enjoy

### Dependencies
- NodeJs
- Npm
- Banner (To give you a nice welcome)

## How To Use
You can see the options panel with the command `prev-export -h` or `prev-export --help`, which will show something like this:
```sh
            Opciones:
                  --version  Muestra número de versión                            [booleano]
              -f, --file     Compile file                             [cadena de caracteres]
              -s, --files    Compile all files in array                              [tabla]
              -d, --dir      Compile all files in Directory           [cadena de caracteres]
              -o, --output   This is path where output all files
                                                            [cadena de caracteres] [defecto:
                                                                           "./build-export"]
              -h, --help     Muestra ayuda                                        [booleano]
  ```
  
## Compile One File
For this action use `prev-export -f <file_path>` or `prev-export --file <file_path>`.
Use this command to compile a js file or supported extensions.

## Compile Multiple Files
For this action use `prev-export -s [files_path]` or `prev-export --files [files_path]`
Use this command to compile multiple supported js files or extensions.

## Compile All Files in Directory
For this action use `prev-export -d <files_path>` or `prev-export --dir <dir_path>`
Use this command to compile all supported js files or extensions in this directory.

## Change Output Folder
The default output directory is ./build-export but you can change it with the following command `--output <dir_path>` or `-o <dir_path>`

**Note:** this command does not save the location, it is only executed at the moment.

## Please report all bugs and problems
#### Thanks for install this tool, for see more visit [my web](https://sergioribera.com) (Very soon I will add an app store)
#### Made with the <3 by [SergioRibera](https://sergioribera.com)