Fcmlly - Integrate with Google cloud messaging easily
------------
Best way to send you push notifications.
[![Thanks to brentclouse for this gif](https://cdn.dribbble.com/users/187497/screenshots/9363790/media/34f0f653b8f6fa911bd5ccf8ec9e4bab.gif "Thanks to brentclouse")](https://dribbble.com/brentclouse "Thanks to brentclouse for this gif")


I accept any contributes with open arms \\./

### Instalation
------------
 ```
npm i fcmlly
 ```

### Usage
------------
 ```
 const Fcmlly = requre('fcmlly');
 const fcmlly = new Fcmlly();
 ```

### Samples
------------
```
const res = await fcmlly.pushToUser('user fcm token', 'title', 'body');
console.log(res);

or

fcmlly.pushToUser('user fcm token', 'title', 'body').then((res) => { console.log(res) }).catch((err) => { console.error(err) });



// console res:
// 
// }
 ```



### Methods
------------
* Push to a user
```.push('userId', 'title', 'body') ```        

* Push to all
```.pushToAll('title', 'body') ```        

* Push to all users in a topic
```.pushToTopic('topic name', 'title', 'body') ```        

* Push to users
```.pushToUsers(['userId'], 'title', 'body') ```        



![](https://img.shields.io/github/stars/amindotb/fcmlly.svg) ![](https://img.shields.io/github/forks/amindotb/fcmlly.svg) ![](https://img.shields.io/github/tag/amindotb/fcmlly.svg) ![](https://img.shields.io/github/release/amindotb/fcmlly.svg) ![](https://img.shields.io/github/issues/amindotb/fcmlly.svg)