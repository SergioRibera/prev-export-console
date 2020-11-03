# Prev Export Console Tool

prev-export is a tool that is designed to run before launching a web page into production as it eliminates comments and obfuscates js code, it is a fairly initial and immature tool but I think it already has some form, although abstract, it is gaining power .

This library is based on nodejs so you will need it to be able to run it, if you are not good at handling the console you can also try the version with a graphical interface

### Install

```sh
    npm -g install prev-export-console
```

### Dependencies
- NodeJs
- Npm

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

**Please report all bugs and problems**

Thanks for install this tool, for see more visit [my web](https://sergioribera.com) (Very soon I will add an app store)
## Donate
[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Q5Q321D62)
[![](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/SergioRibera)
[![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://paypal.me/SergioRibera)
 
#### Made with the ❤️ by [SergioRibera](https://sergioribera.com)
