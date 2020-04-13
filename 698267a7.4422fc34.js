(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{174:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return r})),n.d(e,"metadata",(function(){return l})),n.d(e,"rightToc",(function(){return s})),n.d(e,"default",(function(){return c}));var a=n(1),o=n(11),i=(n(0),n(222)),r={title:"Installing From ISO",sidebar_label:"Installing From ISO"},l={id:"intro_installation_bootable_media",title:"Installing From ISO",description:"## Installing from bootable Media",source:"@site/docs/intro_installation_bootable_media.md",permalink:"/docs/intro_installation_bootable_media",editUrl:"https://github.com/128technology/docs/tree/master/docs/intro_installation_bootable_media.md",lastUpdatedAt:1585860752,sidebar_label:"Installing From ISO",sidebar:"docs",previous:{title:"Installing 128T",permalink:"/docs/intro_installation_installer"},next:{title:"Installing in AWS",permalink:"/docs/intro_installation_aws"}},s=[{value:"Installing from bootable Media",id:"installing-from-bootable-media",children:[{value:"Installing the ISO",id:"installing-the-iso",children:[]},{value:"Installation Notes",id:"installation-notes",children:[]}]}],b={rightToc:s};function c(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"installing-from-bootable-media"},"Installing from bootable Media"),Object(i.b)("p",null,"Before you begin, you must first ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"intro_downloading_iso"}),"obtain a 128T ISO"),". If you are planning on using a bootable USB device, follow the instructions for ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"intro_creating_bootable_usb"}),"creating a bootable USB"),"."),Object(i.b)("h5",{id:"creating-a-cdromdvd"},"Creating a CDROM/DVD"),Object(i.b)("p",null,"Rather than writing the ISO to a USB stick, it may be preferable on systems with an onboard optical drive to write the ISO to CD/DVD/BlueRay. There are many tools available on all of the major platforms to write ISOs to optical discs, suck as K3b, Disco, etc."),Object(i.b)("h4",{id:"bios-configuration"},"BIOS Configuration"),Object(i.b)("p",null,"It may be necessary to change the target system\u2019s BIOS settings to allow booting from removable media. Consult your hardware vendor\u2019s documentation (or pay close attention to the messages displayed during the boot sequence!) to enter into the BIOS to validate that it will boot from USB/CD-ROM/DVD, as necessary."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/intro_installation_bootable_media_bios.png",alt:"BIOS Screen"}))),Object(i.b)("p",null,"After imaging the ISO onto removable media, insert it into the target machine and power it on."),Object(i.b)("h3",{id:"installing-the-iso"},"Installing the ISO"),Object(i.b)("h4",{id:"choose-the-installation-type"},"Choose the Installation Type"),Object(i.b)("p",null,"Upon boot, the user will be prompted with the following screen:"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/intro_installation_bootable_media_boot.png",alt:"Boot Screen"}))),Object(i.b)("p",null,"Note: because not all hardware has video support, booting to console is the default (to account for the fact that a console user may not be able to select an option). The default option is selected after a 30 second timeout."),Object(i.b)("h5",{id:"128t-router-via-serial-console"},"128T Router via Serial Console"),Object(i.b)("p",null,"Use this option when running on hardware with no video chipset. It uses /dev/ttyS0 as the serial console for interacting with the installer.\nNote: selecting the wrong type of console may result in garbage characters being displayed and the install hanging. If this is the case, reboot the target system and select the correct line for the target hardware."),Object(i.b)("h5",{id:"128t-router-with-vga-console"},"128T Router with VGA Console"),Object(i.b)("p",null,"Use this option when running on hardware that has onboard graphics chipsets. This installs 128T using the GUI installer."),Object(i.b)("h5",{id:"centos-linux-only"},"CentOS Linux Only"),Object(i.b)("p",null,"Selecting this option will only install the CentOS 7 Linux operating system. It uses a GUI installer."),Object(i.b)("h4",{id:"128t-installation"},"128T Installation"),Object(i.b)("p",null,"Once Linux is installed, the system will install the 128T software. Note that this may several minutes to complete. After the installation process has completed, the following screen is displayed:"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/intro_installation_bootable_media_install_complete.png",alt:"Installation Complete"}))),Object(i.b)("p",null,"At this point, please remove the install media and select ",Object(i.b)("strong",{parentName:"p"},"Yes")," to reboot the system. Upon reboot, the system will begin the 128T initialization process."),Object(i.b)("h4",{id:"initialization-of-the-node"},"Initialization of the Node"),Object(i.b)("p",null,"The initialization of the new node will follow the standard process outlined in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"intro_installation_installer"}),"128T Installation Guide"),". Please refer to that document for details on how to initialize your system."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/intro_installation_bootable_media_initializer.png",alt:"Initializer"}))),Object(i.b)("p",null,"Once system initialization is complete, the user is prompted to start 128T prior to returning to a Linux login. (Choosing either Yes or No will return to a login prompt.)"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/intro_installation_bootable_media_complete.png",alt:"Initialization Complete"}))),Object(i.b)("h3",{id:"installation-notes"},"Installation Notes"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The following user accounts and passwords are created during the ISO installation process:"),Object(i.b)("table",{parentName:"li"},Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Username"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Password"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"root"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"128tRoutes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"t128"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"128tRoutes")))),Object(i.b)("p",{parentName:"li"},"It is ",Object(i.b)("em",{parentName:"p"},"strongly recommended")," that you change these passwords immediately.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"GUI login via HTTPS is enabled by default on port 443."))))}c.isMDXComponent=!0},222:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var b=o.a.createContext({}),c=function(t){var e=o.a.useContext(b),n=e;return t&&(n="function"==typeof t?t(e):l({},e,{},t)),n},p=function(t){var e=c(t.components);return o.a.createElement(b.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},u=Object(a.forwardRef)((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,r=t.parentName,b=s(t,["components","mdxType","originalType","parentName"]),p=c(n),u=a,m=p["".concat(r,".").concat(u)]||p[u]||d[u]||i;return n?o.a.createElement(m,l({ref:e},b,{components:n})):o.a.createElement(m,l({ref:e},b))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,r[1]=l;for(var b=2;b<i;b++)r[b]=n[b];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);