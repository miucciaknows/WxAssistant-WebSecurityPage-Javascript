# Watsonx Assistant Security - Instructions

This repository aims to demonstrate how to configure the message security aspect using Watsonx Assistant. To use it, you need to be familiar with the basics of Assistant. If you are unfamiliar and want to learn more, visit the following links:
- https://medium.com/@nathalia.trazzi/list/watsonx-assistant-series-english-97cbc18f5b76
- https://github.com/miucciaknows/WxAssistant-API-Python
- https://github.com/miucciaknows/WxAssistant-API-Javascript

-> In 2023, IBM launched Watsonx. Watsonx is a range of artificial intelligence products owned by IBM. Watson Assistant was renamed Watsonx Assistant, gaining new features and becoming part of Watsonx's range of products. Some names in the screenshots may appear as Watson Assistant because they were taken before the product gained an "x" in its name.

**Requirements to start:**

- A Watsonx Assistant Instance on IBM Cloud
- An Assistant configured

Assuming that you already have an **Watsonx Assistant** configured, followe the steps above:
1. Open your terminal and then type:
   
`git clone https://github.com/miucciaknows/Watson-Assistant-WebSecurityPage`

2. Now you're going to access, the followed directory:

`cd WatsonAssistant-Security/keys`

3. Open your terminal and then type:
4. 
`openssl genrsa -out key.pem 2048`

This will provide you a **private key.**

All this information can be found in your **Watsonx's Assistant Instance**, follow the images above to get it:

**Now:**

1. Go to your **Watsonx's Assistant Instance on IBM's Cloud.**

![Watsoxn Assistant Security](./Images/1.png)

2. Click on **Environments tab**, it's on left side of screen.

Click in **website tab**

![Watsonx Assistant Security](./Images/2.png)

3. go to **Embed** tab

![Watsonx Assistant Security](./Images/3.png)

Copy **integrationID. // The ID of this integration.**, **region: "", // The region your integration is hosted in.**,
and store it on a safe place.

![Watsonx Assistant Security](./Images/4.png)

4. Go to **security** tab.

![Watsonx Assistant Security](./Images/5.png)

**Enable security into your Assistant.**

![Watsonx Assistant Security](./Images/6.png)

Copy all your **public key and store** in a safe place.

![Watsonx Assistant Security](./Images/6.png)

Then paste your key that you created earlier, with `openssl genrsa -out key.pem 2048` command.

![Watsonx Assistant Security](./Images/6-2.png)

Now it's time to open your project again (I'm using Visual Studio to code this project)

Take the credentials that you copy in **step 3** and paste then in **html file:**

![Watsonx Assistant Security](./Images/7.png)

Now get back into your project, Copy your **public key** provited by IBM and paste in into **keys/key.pub.**

![Watsonx Assistant Security](./Images/8.png)

-> Keep your **public key** and your **private key** in the **/keys** directory.

In your terminal:

1. Run `npm install`

2. Start the Node.js server `nodemon` or `node server.js`

3. Open a brownser and type: `localhost:8080/token`

![Watsonx Assistant Security](./Images/9.png)

4. Then go to: `localhost:8080/Assistant`

![Watsonx Assistant Security](./Images/10.png)

click [here](https://cloud.ibm.com/docs/watson-assistant?topic=watson-assistant-web-chat-security-enable) to learn more about security in Watsonx Assistant on IBM Cloud.