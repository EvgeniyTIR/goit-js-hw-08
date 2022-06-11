import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const throttle = require(`lodash.throttle`);


player.on('play', function() {
    console.log('played the video!');
});

const PLAYER_CURRENT_TIME = "videoplayer-current-time";

const onPlay = function(data) {
    // data is an object containing properties specific to that event
    localStorage.setItem(PLAYER_CURRENT_TIME, data.seconds);
    console.log(`${PLAYER_CURRENT_TIME} : ${data.seconds}`);
};

player.on('timeupdate', throttle(onPlay, 1000));

if (localStorage.getItem(PLAYER_CURRENT_TIME)) {
    player.setCurrentTime(localStorage.getItem(PLAYER_CURRENT_TIME));}


