## noVNC: HTML VNC Client Library and Application

[![Build Status](https://travis-ci.org/novnc/noVNC.svg?branch=master)](https://travis-ci.org/novnc/noVNC)
### 部署方式      
* 在需要连接的虚拟机上安装vnc server

    `yum -y install tigervnc-server`       
* 启动vnc server。这里的n就是sessionnumber，不指定的话默认为1，第一次启动时会提示输入密码，以后也可以使用vncpasswd命令修改密码。VNC的默认端口号是5900，而远程桌面连接端口号则是5900+n

    `vncserver或vncserver :n`     
* 安装noVNC

    `git clone https://github.com/cloudplus-lab/noVNC.git`      
    `cd noVNC`
* 启动launch脚本,`--vnc` 用来指定运行着的VNC server的位置

    `./utils/launch.sh --vnc localhost:5901`     
* 访问输出信息中的URL，即可远程连接虚拟机

    `http://localhost:6080/vnc.html?host=localhost&port=6080`
### Description

noVNC is both a HTML VNC client JavaScript library and an application built on
top of that library. noVNC runs well in any modern browser including mobile
browsers (iOS and Android).

Many companies, projects and products have integrated noVNC including
[OpenStack](http://www.openstack.org),
[OpenNebula](http://opennebula.org/),
[LibVNCServer](http://libvncserver.sourceforge.net), and
[ThinLinc](https://cendio.com/thinlinc). See
[the Projects and Companies wiki page](https://github.com/novnc/noVNC/wiki/Projects-and-companies-using-noVNC)
for a more complete list with additional info and links.

### Table of Contents

- [News/help/contact](#newshelpcontact)
- [Features](#features)
- [Screenshots](#screenshots)
- [Browser Requirements](#browser-requirements)
- [Server Requirements](#server-requirements)
- [Quick Start](#quick-start)
- [Installation from Snap Package](#installation-from-snap-package)
- [Integration and Deployment](#integration-and-deployment)
- [Authors/Contributors](#authorscontributors)

### News/help/contact

The project website is found at [novnc.com](http://novnc.com).
Notable commits, announcements and news are posted to
[@noVNC](http://www.twitter.com/noVNC).

If you are a noVNC developer/integrator/user (or want to be) please join the
[noVNC discussion group](https://groups.google.com/forum/?fromgroups#!forum/novnc).

Bugs and feature requests can be submitted via
[github issues](https://github.com/novnc/noVNC/issues). If you have questions
about using noVNC then please first use the
[discussion group](https://groups.google.com/forum/?fromgroups#!forum/novnc).
We also have a [wiki](https://github.com/novnc/noVNC/wiki/) with lots of
helpful information.

If you are looking for a place to start contributing to noVNC, a good place to
start would be the issues that are marked as
["patchwelcome"](https://github.com/novnc/noVNC/issues?labels=patchwelcome).
Please check our
[contribution guide](https://github.com/novnc/noVNC/wiki/Contributing) though.

If you want to show appreciation for noVNC you could donate to a great non-
profits such as:
[Compassion International](http://www.compassion.com/),
[SIL](http://www.sil.org),
[Habitat for Humanity](http://www.habitat.org),
[Electronic Frontier Foundation](https://www.eff.org/),
[Against Malaria Foundation](http://www.againstmalaria.com/),
[Nothing But Nets](http://www.nothingbutnets.net/), etc.
Please tweet [@noVNC](http://www.twitter.com/noVNC) if you do.


### Features

* Supports all modern browsers including mobile (iOS, Android)
* Supported VNC encodings: raw, copyrect, rre, hextile, tight, tightPNG
* Supports scaling, clipping and resizing the desktop
* Local cursor rendering
* Clipboard copy/paste
* Translations
* Licensed mainly under the [MPL 2.0](http://www.mozilla.org/MPL/2.0/), see
  [the license document](LICENSE.txt) for details

### Screenshots

Running in Firefox before and after connecting:

<img src="http://novnc.com/img/noVNC-1-login.png" width=400>&nbsp;
<img src="http://novnc.com/img/noVNC-3-connected.png" width=400>

See more screenshots
[here](http://novnc.com/screenshots.html).


### Browser Requirements

noVNC uses many modern web technologies so a formal requirement list is
not available. However these are the minimum versions we are currently
aware of:

* Chrome 49, Firefox 44, Safari 10, Opera 36, IE 11, Edge 12


### Server Requirements

noVNC follows the standard VNC protocol, but unlike other VNC clients it does
require WebSockets support. Many servers include support (e.g.
[x11vnc/libvncserver](http://libvncserver.sourceforge.net/),
[QEMU](http://www.qemu.org/), and
[MobileVNC](http://www.smartlab.at/mobilevnc/)), but for the others you need to
use a WebSockets to TCP socket proxy. noVNC has a sister project
[websockify](https://github.com/novnc/websockify) that provides a simple such
proxy.


### Quick Start

* Use the launch script to automatically download and start websockify, which
  includes a mini-webserver and the WebSockets proxy. The `--vnc` option is
  used to specify the location of a running VNC server:

    `./utils/launch.sh --vnc localhost:5901`

* Point your browser to the cut-and-paste URL that is output by the launch
  script. Hit the Connect button, enter a password if the VNC server has one
  configured, and enjoy!

### Installation from Snap Package
Running the command below will install the latest release of noVNC from Snap:

`sudo snap install novnc`

#### Running noVNC

You can run the Snap-package installed novnc directly with, for example:

`novnc --listen 6081 --vnc localhost:5901 # /snap/bin/novnc if /snap/bin is not in your PATH`

#### Running as a Service (Daemon)
The Snap package also has the capability to run a 'novnc' service which can be 
configured to listen on multiple ports connecting to multiple VNC servers 
(effectively a service runing multiple instances of novnc).
Instructions (with example values):

List current services (out-of-box this will be blank):

```
sudo snap get novnc services
Key             Value
services.n6080  {...}
services.n6081  {...}
```

Create a new service that listens on port 6082 and connects to the VNC server 
running on port 5902 on localhost:

`sudo snap set novnc services.n6082.listen=6082 services.n6082.vnc=localhost:5902`

(Any services you define with 'snap set' will be automatically started)
Note that the name of the service, 'n6082' in this example, can be anything 
as long as it doesn't start with a number or contain spaces/special characters.

View the configuration of the service just created:

```
sudo snap get novnc services.n6082
Key                    Value
services.n6082.listen  6082
services.n6082.vnc     localhost:5902
```

Disable a service (note that because of a limitation in  Snap it's currently not 
possible to unset config variables, setting them to blank values is the way 
to disable a service):

`sudo snap set novnc services.n6082.listen='' services.n6082.vnc=''`

(Any services you set to blank with 'snap set' like this will be automatically stopped)

Verify that the service is disabled (blank values):

```
sudo snap get novnc services.n6082
Key                    Value
services.n6082.listen  
services.n6082.vnc
```

### Integration and Deployment

Please see our other documents for how to integrate noVNC in your own software,
or deploying the noVNC application in production environments:

* [Embedding](docs/EMBEDDING.md) - For the noVNC application
* [Library](docs/LIBRARY.md) - For the noVNC JavaScript library


### Authors/Contributors

See [AUTHORS](AUTHORS) for a (full-ish) list of authors.  If you're not on
that list and you think you should be, feel free to send a PR to fix that.

* Core team:
    * [Joel Martin](https://github.com/kanaka)
    * [Samuel Mannehed](https://github.com/samhed) (Cendio)
    * [Peter Åstrand](https://github.com/astrand) (Cendio)
    * [Solly Ross](https://github.com/DirectXMan12) (Red Hat / OpenStack)
    * [Pierre Ossman](https://github.com/CendioOssman) (Cendio)

* Notable contributions:
    * UI and Icons : Pierre Ossman, Chris Gordon
    * Original Logo : Michael Sersen
    * tight encoding : Michael Tinglof (Mercuri.ca)

* Included libraries:
    * base64 : Martijn Pieters (Digital Creations 2), Samuel Sieb (sieb.net)
    * DES : Dave Zimmerman (Widget Workshop), Jef Poskanzer (ACME Labs)
    * Pako : Vitaly Puzrin (https://github.com/nodeca/pako)

Do you want to be on this list? Check out our
[contribution guide](https://github.com/novnc/noVNC/wiki/Contributing) and
start hacking!
