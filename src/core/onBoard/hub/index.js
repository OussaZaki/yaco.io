import Peer from 'peerjs'

export function initialize () {
    const peer = new Peer({host: 'yacohub-live.eu-west-1.elasticbeanstalk.com', port: '', path: '/conference-hub', debug: true})
    return peer
}