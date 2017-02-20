<template>
  <div class="row">
    <div class="info col-md-3">
      <div class="bref">
        这就是个没事瞎吹牛逼的播客啦，这个简介应该不会太短，这个简介应该不会太短，这个简介应该不会太短，这个简介应该不会太短，这个简介应该不会太短。
      </div>
      <div class="share row">
        <i class="fa fa-envelope-o col-md-3 fa-2x shareIcon" aria-hidden="true"></i>
        <i class="fa fa-apple col-md-3 fa-2x shareIcon" aria-hidden="true"></i>
        <i class="fa fa-twitter col-md-3 fa-2x shareIcon" aria-hidden="true"></i>
        <i class="fa fa-rss col-md-3 fa-2x shareIcon" aria-hidden="true"></i>
      </div>
      <div class="copyleft">
        <i class="fa fa-copyright" aria-hidden="true"></i>2017 bragfoo.oo,all rights with the god
      </div>
    </div>
    <div class="list col-md-9">
      <div class="border" v-for="entry in listDatas">
        <a class="left">
          <div class="limg"><img class="imageSrc" src="../../assets/logo.png"></div>
        </a>
        <div class="right">
          <div class="title">{{ entry.title }}<span class="pubTime">{{ entry.time }}</span></div>
          <div class="desc">{{ entry.context }}</div>
          <div class="cover"><img src="../../assets/logo.png"></div>
        </div>
        <div class="action">
          <button class="btn btn-default" type="button"><i class="fa fa-info-circle" aria-hidden="true"></i>详情</button>
          <button class="btn btn-default" type="button" @click="play(entry)"><i class="fa fa-play-circle" aria-hidden="true"></i>播放
          </button>
          <button class="btn btn-default" type="button"><i class="fa fa-download" aria-hidden="true"></i>下载</button>
          <div class="player">
            <audio controls="controls">
              <source :src="entry.audio" type="audio/mpeg"/>
            </audio>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .border {
    padding: 20px;
    width: 95%;
    text-align: center;
    margin: 0 auto;
    border-bottom: 1px solid #aaaaaa;
    background: #ffffff;
  }

  .left {
    width: 60px;
    left: 0;
    padding-top: 20px;
    padding-left: 20px;
    top: 0;
    bottom: 0;
    margin: 0;
  }

  .right {
    margin-left: 64px;
    min-height: 65px;
  }

  .limg {
    left: 20px;
    float: left;
    width: 50px;
    height: 50px;
  }

  .imageSrc {
    max-width: 100%;
    height: 100%;
    border-radius: 180px;
    margin: 0 auto;
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    line-height: 22px;
    padding-bottom: 6px;
  }

  .pubTime {
    float: right;
    font-weight: normal;
    color: #aaaaaa;
    font-size: 14px;
  }

  .desc {
    font-size: 15px;
    height: auto;
    overflow: hidden;
    padding-top: 3px;
    line-height: 20px;
  }

  .cover {
    height: 200px;
    overflow: hidden;
    transition: all .3s;
    position: relative;
  }

  .list {
    float: right;
    min-height: 600px;
    background: #f5f5f5;
    margin-right: 5px;
    top: -20px;
  }

  .action {
    text-align: center;
    margin-top: 10px;
  }

  .info {
    position: fixed;
    top: 40px;
    float: left;
    background-color: #333333;
    height: 100%;
    z-index: 100;
    text-align: center;
  }

  .share {
    padding-top: 30px;
    width: 80%;
    text-align: center;
    margin: 0 auto;
  }

  .shareIcon {
    color: #aaaaaa;
    cursor: pointer;
  }

  .shareIcon:hover {
    transition: 0.5s;
    color: white;
    cursor: pointer;
  }

  .bref {
    padding-top: 20%;
    width: 90%;
    text-align: center;
    margin: 0 auto;
    color: white;
  }

  .copyleft {
    bottom: 0px;
    color: white;
    position: fixed;
    font-size: 14px;
    text-align: center;
    margin: 0 auto;
  }

  .player {
    clear: both;
  }
</style>
<script>
  var self = null
  import axios from 'axios'
  export default{
    data () {
      return {
        listDatas: []
      }
    },
    components: {},
    methods: {
      play: function (item) {
        item.showPlay = true
      },
      detail: function (item) {
        self.$router.replace('/detail/' + item.ids)
      },
      download: function (item) {
        window.open(item.audio)
      }
    },
    created: function () {
      self = this
    },
    mounted: function () {
      axios.get('/static/list.json').then(function (data) {
        self.listDatas = data.data
      }).catch(function (err) {
        console.error(err)
      })
    }
  }
</script>
