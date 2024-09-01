---
sidebar_position: 2
---

# Remove old versions

Before installation, you have to uninstall older versions of the runtime if you have previously installed them. Having previous versions may cause conflicts.

To check the system for Node.js versions, follow these instructions:
*
1.  Run the command cmd(to run it, press *Win+R*, type cmd and press *Enter*) nvm list:
   
```
C:\Users\Timeweb>nvm list
    18.9.0
    18.8.0
    16.17.0
 ```
2. If you have several versions installed, delete them:

	1. Execute the command npm cache clean --force.
	2. In **Add or Remove Program**, remove Node.js.
	3. Reboot the computer.
  
```
C:\Users\Timeweb>nvm uninstall 18.9.0
Uninstalling node v18.9.0... done

C:\Users\Timeweb>nvm uninstall 18.8.0
Uninstalling node v18.9.0... done

C:\Users\Timeweb>nvm uninstall 16.17.0
Uninstalling node v18.9.0... done
```
 
3. Check that the versions have been deleted.

```     
C:\Users\Timeweb>nvm list
No installations recognized.
```