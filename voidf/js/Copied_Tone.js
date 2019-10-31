document.onkeydown = keybo;
window.AudioContext = window.AudioContext || window.webkitAudioContext;
if (!window.AudioContext) {
    alert('当前浏览器不支持Web Audio API');
}

var pow = 0;

var audioCtx = new AudioContext();
var arrFrequency = [196.00, 220.00, 246.94, 261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25, 587.33, 659.25, 698.46, 783.99, 880.00, 987.77, 1046.50];
//                  G       A       B       C       D       E       F       G       A       B       C       D       E       F       G       A       B       C       
//                  0       1       2       3       4       5       6       7       8       9       10      11      12      13      14      15      16      17
var arrFrequencb = [207.65, 233.08, /*   */ 277.18, 311.13, /*   */ 369.99, 415.30, 466.16, /*   */ 554.37, 622.25, /*   */ 739.99, 830.61, 932.33, /*   */ 1108.70];
//                  G#      A#              C#      D#              F#      G#      A#              C#      D#              F#      G#      A#              C#
//                  0       1               2       3               4       5       6               7       8               9       10      11              12
//                                                                          db
// 创建一个OscillatorNode, 它表示一个周期性波形（振荡），基本上来说创造了一个音调
var oscillator = [];
var oscillatorb = [];
var gainNode = [];
var gainNodeb = [];
for (var i = 0; i < 18; i++) {

    oscillator.push(audioCtx.createOscillator());
    gainNode.push(audioCtx.createGain());
    oscillator[i].connect(gainNode[i]);
    gainNode[i].connect(audioCtx.destination);
    oscillator[i].type = 'triangle';
    oscillator[i].frequency.value = arrFrequency[i];
    oscillator[i].start(audioCtx.currentTime);
    gainNode[i].gain.setValueAtTime(0, audioCtx.currentTime);
    //gainNode[i].gain.linearRampToValueAtTime(0, audioCtx[i].currentTime + 0.01);
}
for (var i = 0; i < 13; i++) {
    oscillatorb.push(audioCtx.createOscillator());
    gainNodeb.push(audioCtx.createGain());
    oscillatorb[i].connect(gainNodeb[i]);
    gainNodeb[i].connect(audioCtx.destination);
    oscillatorb[i].type = 'triangle';
    oscillatorb[i].frequency.value = arrFrequencb[i];
    oscillatorb[i].start(audioCtx.currentTime);
    gainNodeb[i].gain.setValueAtTime(0, audioCtx.currentTime);

}
// 创建一个GainNode,它可以控制音频的总音量

// // 把音量，音调和终节点进行关联
// 
// // audioCtx.destination返回AudioDestinationNode对象，表示当前audio context中所有节点的最终节点，一般表示音频渲染设备
// 
// // 指定音调的类型，其他还有square|triangle|sawtooth
// 
// // 设置当前播放声音的频率，也就是最终播放声音的调调
// 
// // 当前时间设置音量为0
// 
// // 0.01秒后音量为1
// 
// // 音调从当前时间开始播放
// 
// // 1秒内声音慢慢降低，是个不错的停止声音的方法
// 
// // 1秒后完全停止声音
// 


var pressingkey = [];

function keybo() {
    keyval = event.keyCode;
    if (pressingkey.indexOf(keyval) != -1) {
        return;
    } else {

        console.log(keyval);
        gkd = getkey(keyval);
        if (gkd == 2333) {
            return;
        } else if (gkd >= 0) {
            pressingkey.push(keyval);
            volon(gkd);
        } else {
            gkd = -gkd - 1;
            pressingkey.push(keyval);
            volonb(gkd);
        }
    }
}

function getkey(kv) {
    switch (kv) {
        case 65: //a
            return 0;
        case 83: //s
            return 1;
        case 68: //d
            return 2;
        case 70: //f
            return 3;
        case 71: //g
            return 4;
        case 72: //h
            return 5;
        case 74: //j
            return 6;
        case 75: //k
            return 7;
        case 76: //l
            return 8;
        case 186: //;
            return 9;
        case 222: //'
            return 10;
        case 87: //w
            return -1;
        case 69: //e
            return -2;
        case 84: //t
            return -3;
        case 89: //y
            return -4;
        case 73: //i
            return -5;
        case 79: //o
            return -6;
        case 80: //p
            return -7;
        case 187: //=
            for (var i = 0; i < 18; i++) {
                oscillator[i].frequency.value *= 2;
            }
            for (var i = 0; i < 13; i++) {
                oscillatorb[i].frequency.value *= 2;
            }
            return 2333;
        case 189: //-
            for (var i = 0; i < 18; i++) {
                oscillator[i].frequency.value /= 2;
            }
            for (var i = 0; i < 13; i++) {
                oscillatorb[i].frequency.value /= 2;
            }
            return 2333;
    }
}

function volon(sind) {
    gainNode[sind].gain.setValueAtTime(1, audioCtx.currentTime);
}

function volonb(sind) {
    gainNodeb[sind].gain.setValueAtTime(1, audioCtx.currentTime);
}

function voloff(sind) {
    gainNode[sind].gain.setValueAtTime(0, audioCtx.currentTime);
}

function voloffb(sind) {
    gainNodeb[sind].gain.setValueAtTime(0, audioCtx.currentTime);
}

function dkeybo() {
    keyval = event.keyCode;
    var ind = pressingkey.indexOf(keyval);
    var gkd = getkey(keyval);
    if (gkd == 2333) {
        if (keyval == 189) getkey(187);
        else getkey(189);
        return;
    } else if (gkd >= 0) {
        pressingkey.splice(ind, 1);
        voloff(gkd);
    } else {
        pressingkey.splice(ind, 1);
        gkd = -gkd - 1;
        voloffb(gkd);
    }


    console.log(pressingkey);
}