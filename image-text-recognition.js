'use latest'

import request from 'request-promise'

const computerVisionApiUrl = 'https://westus.api.cognitive.microsoft.com/vision/v1.0/ocr'
const defaultParams = {
  'language': 'unk',
  'detectOrientation': true
}

/**
 * Returns a JSON response containing text detected from an image URL
 *
 * @param {object} context
 * @param {function} callback
 * @return {object}
 */

module.exports = (context, callback) => {
  if (!context.data.SUBSCRIPTION_KEY) {
    callback(null, "Please obtain your subscription key")
  }
  const subscriptionKey = context.data.SUBSCRIPTION_KEY
  const imageUrl = context.data.imageUrl

  getOpticalCharacterRecognitionData(subscriptionKey, imageUrl)
    .then(response => {
      callback(null, response)
    })
    .catch(err => callback(null, err))
}

/**
 * Fetch POST request to the Microsoft Computer Vision API
 *
 * @param {string} subscriptionKey
 * @param {string} imageUrl
 * @return {object}
 */

function getOpticalCharacterRecognitionData(subscriptionKey, imageUrl) {
    return request.post({
      json: true,
      url: computerVisionApiUrl,
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': subscriptionKey
      },
      qs: defaultParams,
      body: {
        url: imageUrl
      }
    })
}
