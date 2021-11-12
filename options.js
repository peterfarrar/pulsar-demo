module.exports = {
  pulsarUri: process.env.PULSAR_URI || "pulsar://localhost:6650",
  topic: process.env.TOPIC || 'this-topic',
  exclusiveSubscription: 'multi-client-demo-exclusive-subscription',
  exclusive2Subscription: 'multi-client-demo-second-exclusive-subscription',
  sharedSubscription: 'multi-client-demo-shared-subscription'
}