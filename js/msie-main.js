
const ua = window.navigator.userAgent;
//My Browser
var mb;


if (ua.indexOf('Edge') != -1 || ua.indexOf('Edg') != -1) {
    mb = "Edge";
    console.log('Microsoft Edge');
} else if (ua.indexOf('Trident') != -1 || ua.indexOf('MSIE') != -1) {
    mb = "Internet Explorer";
    console.log('Microsoft Internet Explorer');
} else if (ua.indexOf('OPR') != -1 || ua.indexOf('Opera') != -1) {
    mb = "Opera";
    console.log('Opera');
} else if (ua.indexOf('Chrome') != -1) {
    mb = "Google Chrome";
    console.log('Google Chrome');
} else if (ua.indexOf('Firefox') != -1) {
    mb = "FireFox";
    console.log('FireFox');
} else if (ua.indexOf('Safari') != -1) {
    mb = "Safari";
    console.log('Safari');
} else {
    mb = "不明";
    console.log('Unknown');
}

$(function () {
    $("#mybrowser").text(mb);
});