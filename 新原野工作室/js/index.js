var client = {
  versions: function() {
    var u = navigator.userAgent;
    return {
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端  
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器  
    }
  }()
}

//get value 
var btnvalue = document.getElementById('btn').innerText;
console.log(btnvalue);

if (client.versions.ios) {
  console.log("ios");
  document.getElementById('btn').innerHTML = '长按关注';
} else if (client.versions.android) {
  console.log("andriod");
  document.getElementById('btn').innerHTML = '长按关注';
} else {

  document.getElementById('btn').innerHTML = '扫描微信二维码';
  console.log("不是移动设备");
}