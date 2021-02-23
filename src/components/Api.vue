<template>
  <div id="vue" v-cloak>
    <div>名称：{{info.msg}}</div>
    <li v-for="item in info.data.list"> {{decryptByRSA(item.income)}}</li>
  </div>
</template>

<script>
  const axios = require('axios');
  export default {
    name: 'Api',
    data() {
      return {
        info:
          {
            "msg": null,
            "data":
              {
                "date": null,
                "total": null,
                "sum": null,
                "list":
                  [
                    {
                      "evR": null,
                      "date": null,
                      "income": null,
                      "incomeR": null,
                      "issueTime": null,
                      "videoId": null,
                      "hot": null,
                      "top": null,
                      "day": null,
                      "allTop": null,
                      "allTopRingRatio": null,
                      "tag1": null,
                      "cost": null,
                      "issueDay": null,
                      "topR": null,
                      "platformId": null,
                      "tag2": null,
                      "tag3": null,
                      "ev": null,
                      "name": null,
                      "vtype": null,
                      "tevR": null,
                      "tev": null,
                      "tincome": null,
                      "tincomeR": null
                    }]
              }
          }
      }
    },
    mounted() {
      //钩子函数
      axios.get('http://api.zhire.cc/jupiter/i/box/list2?query_type=1&query_date=2021-02-01').then(response => (this.info = response.data));
    },
    methods: {
      // 解密方法
      decryptByRSA: function decryptByRSA(content) {
        if (content === null) return;
        var encrypt = new JSEncrypt();
        // 私钥
        var priKey = 'MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCkQ/xBtxfW7xI4yZVxDHXfbt3uTm/A2ZiZg6vUWauFe4CXAie5UnDO4NrV5/yKjNzZNClWhMPurnF52SlGt3tOjqlJ45cgRN7cdEVJ/nnNLZOQ2U+ShwCnhs6ja/T7KeydKgsJgR/BHLqzV3f9P+lcd8t3IXTyxi0xE0V0e4lLeICBN3pELBu2/riheCWZMEed9nzZRJ9ksj+qHw+UhRuUvucxfODh98Q1HDiJ5BI6WUv+/ANbhE5J9U25wKvH5sn7Fb5UFMJQJKTxbtpatHw/ynspCQIWCjgzTL/hAzimMSzGHpI9ICHlBDgUEUQYvekpPvGAWL3o0LFPTHuMDG6/AgMBAAECggEAMKucIHR5ccugIIdJ6hcBDdSxmRxQbFmMp1+mF+MBuSkgrp2K25QbrJBfBqYX441dGlYkMWhhDWVOZgX7/uH6fQo0CpqOepctWTByHzxxJmPspyxcMVQi04BT1YP1MD35x49fec9ycytp/h1ahgTbxfQQqxmUpyIk3beSCrNXuK5gDcv81PcKXsMRbygc1f2UTv5s5TCDCTY7pEb94D1tE8fW7IO8kVwiMNrocWbPUWbNjM3kA+tkNqJ5FLxmBRVLSimwuay5LMrfKYqCfd3di5OKZv94OgKRRCutRQJAoZZna4ZB92ABsqVCBErlXm4QmW4C5ZIkfVVAuDVRs3moQQKBgQDPZhEOSbErUHFb3d+c7zM2N7F+kL/G9ukdQRLQxXyrMucy0xR1ZM0DK3EJ0cUagLzOKubxOMwCcJxU8WKDRZvNwwSWmpGy09jopCGwSMV7MZcHulLoZjk+GM6E17u2XIawa95HC5DWvA5pMRTt/oCVXUFWnb5Xsl4yVVV639DP7wKBgQDKwlgx57VZ85JlW1h2IF9IPGN5r/Byhd5gDOLEgEG3vhbzTYYsnWerHQ9+L6dbLf6ydnWd9r9BaD/Ld75WDVYvuLM5IqwGKGu+/GkxPKuXOXtUExzxZ4h5+aCD9YlaUSq/088ADTnZdKXoEscNcXGS38IQOaC6A8yQ4w0ZgBN+MQKBgHqGJNtZA7bADkgkep9e3NVR76UC5JkpcyxaLkBx+yW0q8tl0fdMdqVBu8T+TUBL/76Yr9igIj3qwyCXfghpThMv+/zxEdQgvUsq89AOHcSa1ku1cpdjFLwvsYnfXUDtxpBhGW7FUWrarHTOjzvOl64l6py+Eh4C/Q0lRpuRr+23AoGARg2dkSiAROLd2r0TtER9ByUuLVX3WmocKc1p8ABsNEKuBUPsrq93qOwydSOby+n5TMmW24vsCnotSGxHy81x0K0c5wmuq7X9fBATfBp9IpOOo76yykk+Iv53UgBcg2L1xS82HstzCEnAJI2QTnm6hsdecmKmwH4diJWZ6gyRL5ECgYA5wSC7OQTLysZK96dKozJ/TcJoxAFL3AJ7jVe/Y7dXHii/pmvThmxdWDFX/RoaY0GYU2w07FWApJMQ1g25LuQqnWsL8/zBYPaLaHybdZkYrBUNANye3zvwj3movzr2dejoR1gdnYuhqw5KGUxdaqCa49T4PHv9t/MCzXStAQc9DA==';
        encrypt.setPrivateKey(priKey);
        var result = encrypt.decrypt(content);
        console.log("解密结果：", result);
        return result;
      }
    }
  }
</script>


