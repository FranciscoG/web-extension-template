# web-extension-template

### Chrome extension documentation
https://developer.chrome.com/extensions/devguide
`manifest.json`:  https://developer.chrome.com/extensions/manifest

### Firefox WebExtension documentation
This is still not in their production browser yet, only available in their nightlies
https://wiki.mozilla.org/WebExtensions

Firefox's WebExtensions mirrors Chrome's almost exactly. They both use the manifest.json with almost all the similar items. I've created 3 files in the common folder to handle and minor differences between the manifests.   

* `manifest.core.json`  -  for common items shared with both browsers
* `manifest.chrome.json` - for chrome only manifest items
* `manifest.firefox.json` - for Firefox only manifest items

Using gulp to parse, combine, and distribute the proper manifest to the right folder

