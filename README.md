# Pulsar Demo
* connect multiple clients to a shared topic
* connect exclusive clients to the same topic

## Seting up Pulsar using Docker
### Pull and tag the Pulsar image from Artifactory
```
docker pull apachepulsar/pulsar
docker tag apachepulsar/pulsar pulsar
```

### Run the docker image
```
docker run -d \
-p 6650:6650 \
-p 8080:8080 \
--mount source=pulsardata,target=/pulsar/data \
--mount source=pulsarconf,target=/pulsar/conf \
pulsar \
bin/pulsar standalone
```
## Install Pulsar
### Install pulsar library on MacOS
```
brew install libpulsar
```

### Install pulsar library on Ubuntu Linux
```
sudo add-apt-repository ppa:ubuntu-toolchain-r/test
sudo apt-get update
sudo apt-get install gcc-4.9
sudo apt-get upgrade libstdc++6

wget https://www.apache.org/dyn/mirrors/mirrors.cgi?action=download&filename=pulsar/pulsar-2.8.1/DEB/apache-pulsar-client.deb

wget https://www.apache.org/dyn/mirrors/mirrors.cgi?action=download&filename=pulsar/pulsar-2.8.1/DEB/apache-pulsar-client-dev.deb

sudo apt install ./apache-pulsar-client*.deb
```
step two above gave me an error for some reason.  But I ran through the rest of the gcc install and it seems to have worked.

### Install pulsar client
```
npm i --save pulsar-client
```
