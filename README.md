# Detect Text In An Image Using Microsoft's Computer Vision API

Used the Optical Character Recognition method in Microsoft Azure's Computer Vision API to detect text in an image.

I used Webtask to build a serverless endpoint and built the UI using CodePen.

[My UI On CodePen](https://codepen.io/MeredithU/pen/e9c407878b189482ebfc5ae4a8702f8c)

## Tools Used

* [Webtask.io](https://webtask.io/)
* [Microsoft Computer Vision API](https://azure.microsoft.com/en-us/services/cognitive-services/computer-vision/)
* [CodePen](https://codepen.io/MeredithU/pen/e9c407878b189482ebfc5ae4a8702f8c)

#### Setup

In order to run this file locally, you will need to register an account with [Microsoft Azure](https://azure.microsoft.com/en-us/services/cognitive-services/computer-vision/) to obtain a subscription key and computer vision api endpoint.

Next, you will need to set up [Webtask](https://webtask.io).

Install the Webtask CLI:
```
npm install wt-cli -g
```
Initialize Webtask with your email:
```
wt init <your_email>
```
To run this file, take your subscription key and insert it into the below command. It will return a URL for you to use in the browser.
```
wt create image-text-recognition.js --secret SUBSCRIPTION_KEY=<subscription_key>
```

Update your `computerVisionApiUrl` variable, if needed.

Lastly, take the URL from the above command, include an image URL and open up in your browser:
```
<url>?imageUrl=<imageUrl>
```
