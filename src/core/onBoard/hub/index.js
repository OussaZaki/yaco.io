import Peer from 'peerjs'

export function initialize () {
    const peer = new Peer({host: 'http://yacohub-live.eu-west-1.elasticbeanstalk.com/', port: 9000, path: '/conference-hub', debug: true})
    return peer
}