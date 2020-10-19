const unirest = require('unirest');

const GOOGLE_FCM_ENDPOINT = 'https://fcm.googleapis.com/fcm/send';

class Fcmlly {
    APIKey = null;

    async _send(body) {
        return new Promise((resolve,reject)=>{
            if(!self.APIKey) 
                throw Error('You must provide the APIKEY for your firebase applications.');
            else if(typeof self.APIKey != 'string') 
                throw Error('Your API key is incorrect');

            unirest
            .post(GOOGLE_FCM_ENDPOINT)
            .headers({'Content-Type': 'application/json','Authorization': `key=${ self.APIKey }`})
            .send(body)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
        });
    }

    async pushToUser(id,title,body,data=null,click_action=null) {
        const req = { notification: {
            title,
            body,
            click_action
          },
            data,
            to : id
        };

        return await this._send(req);
    }

    async pushToAll(title,body,data=null,click_action=null) {
        const req = { notification: {
            title,
            body,
            click_action
          },
            data,
            to : `/`
        };

        return await this._send(req);
    }

    async pushToTopic(topic,title,body,data=null,click_action=null) {
        const req = { notification: {
            title,
            body,
            click_action
          },
            data,
            to : `/topics/${topic}`
        };

        return await this._send(req);
    }

    async pushToUsers(ids,title,body,data=null,click_action=null) {
        const req = { notification: {
            title,
            body,
            click_action
          },
            data,
            to : id
        };

        return await this._send(req);
    }
}