Fcmlly - Integrate with Google cloud messaging easily
------------
Best way to send your push notifications.
[![Thanks to brentclouse for this gif](https://cdn.dribbble.com/users/187497/screenshots/9363790/media/34f0f653b8f6fa911bd5ccf8ec9e4bab.gif "Thanks to brentclouse")](https://dribbble.com/brentclouse "Thanks to brentclouse for this gif")
I accept any contributes with open arms \\./

### Installation
------------
 ```
npm i fcmlly
 ```

### Usage
------------
 ```
 const Fcmlly = require('fcmlly');
 const fcmlly = new Fcmlly('YOUR_APIKEY_HERE'); // Get this key from Firebase console > Settings (page) > Cloud Messaging (tab) > Project credentials (section) > Server Key
 ```

### Samples
------------
```
const res = await fcmlly.pushToUser('user fcm token', 'youe title text', 'your body text');
console.log(res);

or

fcmlly.pushToUser('user fcm token', 'youe title text', 'your body text').then((res) => { console.log(res) }).catch((err) => { console.error(err) });



// sample console output:
// {
//  multicast_id: 76468637435051*****,
//  success: 1,
//  failure: 0,
//  canonical_ids: 0,
//  results: [ { message_id: '0:1603183795340265%a5e3d8a7a5e*****' } ]
// }
 ```



### Methods
------------
* Push to a user
```.push('userId', 'title', 'body') ```        
     
* Push to all users in a topic
```.pushToTopic('topic name', 'title', 'body') ```        

* Subscribe a user to a topic
```.subscribeToTopic('user FCM token', 'topic name') ```    

![](https://img.shields.io/github/stars/amindotb/fcmlly.svg) ![](https://img.shields.io/github/forks/amindotb/fcmlly.svg) ![](https://img.shields.io/github/tag/amindotb/fcmlly.svg) ![](https://img.shields.io/github/release/amindotb/fcmlly.svg) ![](https://img.shields.io/github/issues/amindotb/fcmlly.svg)