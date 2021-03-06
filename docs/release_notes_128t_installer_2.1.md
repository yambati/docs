---
title: 128T Installer 2.1 Release Notes
sidebar_label: 2.1
---
## Release 2.1.0

### Issues Fixed

- **IN-106, IN-111** - Installer fails due to presense of .repodata 
- **IN-112** - 128T not started when installer does not complete but no changes were made on the system
- **IN-130** - New installation or upgrade may result in a failed installation or upgrade 

### Caveats
- **IN-126** - Installation does not fully complete but returns Success
  _**Symptom:**_ When performing an upgrade, the installer will complete however not all packages will be updated and the following Error can be seen in the log:
  ```
Curl error (6): Couldn't resolve host name for https://mirrors.128technology.com/reposnaps/Mirrors/11_01_2018/CentOS/7.5.1804/updates/x86_64/mirror-list.html
[Could not resolve host: mirrors.128technology.com; Unknown error]
  ```

  _**Cause:**_ The router node could not resolve the 128T software repository

  _**Corrective Action:**_ When performing the upgrade from less than 4.1.0 to 4.1.0, ensure internet or Conductor access (where Conducted hosted services are enabled)

- **IN-141** - Unsupported installed rpms result in Canceled upgrade
  _**Symptom:**_ GUI presents a failure on upgrade with the following text provided:
  ```
Error: transaction check vs depsolve:
  ```
  example:
  ```
Cancelling upgrade of the second node on the router due to failure on this node: Failed to install 128T-manifest-0:4.1.0.1.el7.centos-1.x86_64:
        Error: transaction check vs depsolve:
        iptables = 1.4.21-28.el7 is needed by iptables-services-1.4.21-28.el7.x86_64
  ```
  To diagnose the problem, try running: 'rpm -Va --nofiles --nodigest'.
  You probably have corrupted RPMDB, running 'rpm --rebuilddb' might fix the issue."

  _**Cause:**_ Installed version of the RPM's come from a later version of the Supported 128T OS version. 128T Versions 3.2.8, 4.0.0 and 4.0.1 are supported on CentOS 7.4. Version 4.1.0 is supported on CentOS 7.5.
     
  _**Corrective Action:**_ For the offending RPM that comes from a different version of the OS than is installed and running, perform either operation:
  1. Remove the offending rpm (in the example above "iptables-services-1.4.21-28.el7.x86_64" would be removed
  2. Setup a new repo pointing to the support CentOS vault version and downgrade the related rpms
         
