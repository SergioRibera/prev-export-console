#!/usr/bin/bash
echo ''
echo 'Checking dependences...'
echo ''
if ! node_loc="$(type -p "node")" || [[ -z $node_loc ]]; then
    echo 'This package require this dependences:'
    echo ''
    echo '      nodejs, npm, banner'
    echo ''
    while true; do
        read -p "Do you wish to install this program? (Y / N)" yn
        case $yn in
            [Yy]* ) installnode; break;;
            [Nn]* ) exit;;
            * ) echo "Please answer yes or no.";;
        esac
    done
fi
function installnode(){
    if pkg="$(type -p "pkg")" || [[ -z $pkg ]]; then
        pkg install node
        cd /usr/ports/www/node && make install
    elif pacman="$(type -p "pacman")" || [[ -z $pacman ]]; then
        sudo pacman -S nodejs npm banner --noconfirm
    elif emerge="$(type -p "emerge")" || [[ -z $emerge ]]; then
        emerge nodejs
    elif yum="$(type -p "yum")" || [[ -z $yum ]]; then
        yum install nodejs12
    elif zypper="$(type -p "zypper")" || [[ -z $zypper ]]; then
        zypper install nodejs4
    else
        echo 'Please install nodejs and nmp to retry'
    fi
}
mkdir /prev-export-console
tar -xzvf prev-export-console.tar.gz -C /prev-export-console
cd /prev-export-console
sudo npm install -g .
cd ..
rm -rf /prev-export-console
if banner="$(type -p "node")" || [[ -z $banner ]]; then
    banner Thanks
fi
echo ''
echo '          Thanks for install this tool, for see more visit https://sergioribera.com (Very soon I will add an app store) '
echo ''
echo '              Made with the <3 by SergioRibera'
echo ''
echo ''
echo '  Excecute prev-export -h for see help of tool'
echo ''
prev-export -h