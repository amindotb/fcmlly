const unirest = require('unirest');

const GOOGLE_FCM_ENDPOINT = 'https://fcm.googleapis.com/fcm/send';

class Fcmlly {

    constructor(APIKEY) {
        this.APIKey = APIKEY;
    }

    async _send(body) {
        return new Promise((resolve,reject)=>{
            if(!this.APIKey) 
                throw Error('You must provide the APIKEY for your firebase applications.');
            else if(typeof this.APIKey != 'string') 
                throw Error('Your API key is incorrect');

            unirest
            .post(GOOGLE_FCM_ENDPOINT)
            .headers({'Content-Type': 'application/json','Authorization': `key=${ this.APIKey }`})
            .send(body)
            .then((response) => {
                resolve(response.raw_body);
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

    // async pushToUsers(ids,title,body,data=null,click_action=null) {
    //     const req = { notification: {
    //         title,
    //         body,
    //         click_action
    //       },
    //         data,
    //         to : id
    //     };

    //     return await this._send(req);
    // }
}

const YOUR_APIKEY =  "AAAAOkuECnI:APA91bG_dHSxyVC_04_y0TSPwCtkvYRAd9aHU8xKbZI3QH-YLJxH2yHehLM12QSaW2DSHr6ABGZZr7CVR2jkOy66-EGSbIdrvKTofYSyxD_Idj8OoW-daZ6SLxnJs_mHbqHVUM3r0luq"
const fcmlly = new Fcmlly(YOUR_APIKEY);


    const result = await fcmlly.pushToUser('eGq0OcR2TwCn1Ez5bgbnCi:APA91bES5pD0z_k29jtf1e-jnAG-wNBATtODxFYC6te06QN8HEMsU_3vMGKnXZCSuzpCTu7KVt59jr_JsDcxag6CoKXoAdFtXGWQR-91xdEIQpP1M_GAe0BrCzl9KBsM27k1kIjh1mev',
    'some title', 'some body')
    console.log(result)

