const Pulsar = require('pulsar-client')
const options = require('../options')

const thisPulsarFunction = async () => {
  const client = new Pulsar.Client({
    serviceUrl: options.pulsarUri
  })

  const producer = await client.createProducer({ topic: options.topic })

  const messages = [
    { message: "000" },
    { message: "111" },
    { message: "222" },
    { message: "333" },
    { message: "444" },
    { message: "555" },
    { message: "666" },
    { message: "777" },
    { message: "888" },
    { message: "999" },
    { message: "AAA" },
    { message: "BBB" },
    { message: "CCC" },
    { message: "DDD" },
    { message: "EEE" },
    { message: "FFF" },
  ]

  messages.forEach(message => {
    producer.send({
      data: Buffer.from(JSON.stringify(message))
    })
  })

  console.log(`Producer sent ${messages.length} messages to ${options.pulsarUri}, ${options.topic}`)

  try {
    await producer.flush()
    await producer.close()
    await client.close()
  } catch (e) {
    throw e
  }
}

thisPulsarFunction()