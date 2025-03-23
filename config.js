window.Config = {

  // 显示标题
  SiteName: 'Uptime-status',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'u2873136-6e865498164b08a6de140d5f', //  github图床 API key
    'ur2873136-d272d74aefdd8fccef071883', // 周润发的博客 API key
    //'m797713213-1c83620d56db599960ad0244', // 周润发的公益订阅 API key
    //'m797713331-835664f191b589688f122e00', // 周润发的公益订阅器 API key
  ],

  // 日志天数
  CountDays: 60,

  // 是否显示检测站点的链接
  ShowLink: true,

  // 导航栏菜单
  Navi: [
    {
      text: '主页',
      url: 'https://uptime.001315.xyz/'
    },    
    {
      text: 'GitHub',
      url: 'https://github.com/shaoyouvip/uptime/'
    },
    {
      text: '博客',
      url: 'https://blog.aizrf.COM/'
    },
  ],
};
