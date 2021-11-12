const Pulsar = require('pulsar-client')
const options = require('../options')

const thisPulsarFunction = async () => {
  const client = new Pulsar.Client({
    serviceUrl: options.pulsarUri
  })

  await client.subscribe({
    topic: options.topic,
    subscription: options.sharedSubscription,
    subscriptionType: 'Shared',
    listener: (msg, consumer) => {
      console.log(msg.getData().toString())
      consumer.acknowledge(msg)
    }
  })

  console.log(`Exclusive Consumer up and connected to ${options.pulsarUri}, ${options.sharedSubscription}, ${options.topic}`)
}

thisPulsarFunction()