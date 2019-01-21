<template>
  <div class="findmain">
    <div id="swiper-container1" class="nav swiper-container1 swiper-container">
      <div class="swiper-wrapper nav-sw">
        <div class="swiper-slide avtive-nav nav-ss" >关注</div>
        <div class="swiper-slide nav-ss" >精选</div>
        <div class="swiper-slide nav-ss" >搭配</div>
        <div class="swiper-slide nav-ss" >优惠</div>
        <div class="swiper-slide nav-ss" >搭配</div>
        <div class="swiper-slide nav-ss" >视频</div>
      </div>
    </div>
    <div class="wrapper" id="conten" ref="wrapper">
      <div class="scroller">
        <div class="download" v-if="pulldown" >
          <img class="personImg" src="../../../static/images/loader.png" >
          <div class="scrolltitle" style="">
            <p>{{pulldownsubTxt}}</p>
            {{pulldownTxt}}
          </div>
        </div>
        <div class="swiper-container swiper-container2 bigmain" id="swiper-container2" >
          <div class="swiper-wrapper">
            <div class="swiper-slide  slide-page">
              <div class="one">
                <div class="title">
                  <img src="../../../static/images/dp01.jpg" alt="">
                  <div class="name">
                    <h4>京东官方自营旗舰店</h4>
                    <p>刚刚发布</p>
                  </div>
                </div>
                <p class="intro">漫长的等待总是西安的索然无味漫长的等待总是西安的索然无味，看不到尽头，只有一段华丽的开端。两年的时光总归还是有了期许，这次久别重逢的Magic有会以怎样的一种方式来与大家见面呢、希望你们期待</p>
                <img class="bigimg" src="../../../static/images/b01.jpg" alt="">
                <div class="read">
                  <span>1.2万人阅读</span>
                  <i class="iconfont icon-xiaoxi"></i>
                </div>
              </div>
              <div class="concern">
                <p>大家都关注他们</p>
                <div class="bot">
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                </div>
              </div>
              <div class="one">
                <div class="title">
                  <img src="../../../static/images/dp01.jpg" alt="">
                  <div class="name">
                    <h4>京东官方自营旗舰店</h4>
                    <p>刚刚发布</p>
                  </div>
                </div>
                <p class="intro">漫长的等待总是西安的索然无味漫长的等待总是西安的索然无味，看不到尽头，只有一段华丽的开端。两年的时光总归还是有了期许，这次久别重逢的Magic有会以怎样的一种方式来与大家见面呢、希望你们期待</p>
                <img class="bigimg" src="../../../static/images/b01.jpg" alt="">
                <div class="read">
                  <span>1.2万人阅读</span>
                  <i class="iconfont icon-xiaoxi"></i>
                </div>
              </div>
              <div class="concern">
                <p>大家都关注他们</p>
                <div class="bot">
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide  slide-page">
              <div class="one">
                <div class="title">
                  <img src="../../../static/images/dp01.jpg" alt="">
                  <div class="name">
                    <h4>京东官方自营旗舰店</h4>
                    <p>刚刚发布</p>
                  </div>
                </div>
                <p class="intro">漫长的等待总是西安的索然无味漫长的等待总是西安的索然无味，看不到尽头，只有一段华丽的开端。两年的时光总归还是有了期许，这次久别重逢的Magic有会以怎样的一种方式来与大家见面呢、希望你们期待</p>
                <img class="bigimg" src="../../../static/images/b01.jpg" alt="">
                <div class="read">
                  <span>1.2万人阅读</span>
                  <i class="iconfont icon-xiaoxi"></i>
                </div>
              </div>
              <div class="concern">
                <p>大家都关注他们</p>
                <div class="bot">
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                </div>
              </div>
              <div class="one">
                <div class="title">
                  <img src="../../../static/images/dp01.jpg" alt="">
                  <div class="name">
                    <h4>京东官方自营旗舰店</h4>
                    <p>刚刚发布</p>
                  </div>
                </div>
                <p class="intro">漫长的等待总是西安的索然无味漫长的等待总是西安的索然无味，看不到尽头，只有一段华丽的开端。两年的时光总归还是有了期许，这次久别重逢的Magic有会以怎样的一种方式来与大家见面呢、希望你们期待</p>
                <img class="bigimg" src="../../../static/images/b01.jpg" alt="">
                <div class="read">
                  <span>1.2万人阅读</span>
                  <i class="iconfont icon-xiaoxi"></i>
                </div>
              </div>
              <div class="concern">
                <p>大家都关注他们</p>
                <div class="bot">
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide  slide-page">
              <div class="one">
                <div class="title">
                  <img src="../../../static/images/dp01.jpg" alt="">
                  <div class="name">
                    <h4>京东官方自营旗舰店</h4>
                    <p>刚刚发布</p>
                  </div>
                </div>
                <p class="intro">漫长的等待总是西安的索然无味漫长的等待总是西安的索然无味，看不到尽头，只有一段华丽的开端。两年的时光总归还是有了期许，这次久别重逢的Magic有会以怎样的一种方式来与大家见面呢、希望你们期待</p>
                <img class="bigimg" src="../../../static/images/b01.jpg" alt="">
                <div class="read">
                  <span>1.2万人阅读</span>
                  <i class="iconfont icon-xiaoxi"></i>
                </div>
              </div>
              <div class="concern">
                <p>大家都关注他们</p>
                <div class="bot">
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                </div>
              </div>
              <div class="one">
                <div class="title">
                  <img src="../../../static/images/dp01.jpg" alt="">
                  <div class="name">
                    <h4>京东官方自营旗舰店</h4>
                    <p>刚刚发布</p>
                  </div>
                </div>
                <p class="intro">漫长的等待总是西安的索然无味漫长的等待总是西安的索然无味，看不到尽头，只有一段华丽的开端。两年的时光总归还是有了期许，这次久别重逢的Magic有会以怎样的一种方式来与大家见面呢、希望你们期待</p>
                <img class="bigimg" src="../../../static/images/b01.jpg" alt="">
                <div class="read">
                  <span>1.2万人阅读</span>
                  <i class="iconfont icon-xiaoxi"></i>
                </div>
              </div>
              <div class="concern">
                <p>大家都关注他们</p>
                <div class="bot">
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide  slide-page">
              <div class="one">
                <div class="title">
                  <img src="../../../static/images/dp01.jpg" alt="">
                  <div class="name">
                    <h4>京东官方自营旗舰店</h4>
                    <p>刚刚发布</p>
                  </div>
                </div>
                <p class="intro">漫长的等待总是西安的索然无味漫长的等待总是西安的索然无味，看不到尽头，只有一段华丽的开端。两年的时光总归还是有了期许，这次久别重逢的Magic有会以怎样的一种方式来与大家见面呢、希望你们期待</p>
                <img class="bigimg" src="../../../static/images/b01.jpg" alt="">
                <div class="read">
                  <span>1.2万人阅读</span>
                  <i class="iconfont icon-xiaoxi"></i>
                </div>
              </div>
              <div class="concern">
                <p>大家都关注他们</p>
                <div class="bot">
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                </div>
              </div>
              <div class="one">
                <div class="title">
                  <img src="../../../static/images/dp01.jpg" alt="">
                  <div class="name">
                    <h4>京东官方自营旗舰店</h4>
                    <p>刚刚发布</p>
                  </div>
                </div>
                <p class="intro">漫长的等待总是西安的索然无味漫长的等待总是西安的索然无味，看不到尽头，只有一段华丽的开端。两年的时光总归还是有了期许，这次久别重逢的Magic有会以怎样的一种方式来与大家见面呢、希望你们期待</p>
                <img class="bigimg" src="../../../static/images/b01.jpg" alt="">
                <div class="read">
                  <span>1.2万人阅读</span>
                  <i class="iconfont icon-xiaoxi"></i>
                </div>
              </div>
              <div class="concern">
                <p>大家都关注他们</p>
                <div class="bot">
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide  slide-page">
              <div class="one">
                <div class="title">
                  <img src="../../../static/images/dp01.jpg" alt="">
                  <div class="name">
                    <h4>京东官方自营旗舰店</h4>
                    <p>刚刚发布</p>
                  </div>
                </div>
                <p class="intro">漫长的等待总是西安的索然无味漫长的等待总是西安的索然无味，看不到尽头，只有一段华丽的开端。两年的时光总归还是有了期许，这次久别重逢的Magic有会以怎样的一种方式来与大家见面呢、希望你们期待</p>
                <img class="bigimg" src="../../../static/images/b01.jpg" alt="">
                <div class="read">
                  <span>1.2万人阅读</span>
                  <i class="iconfont icon-xiaoxi"></i>
                </div>
              </div>
              <div class="concern">
                <p>大家都关注他们</p>
                <div class="bot">
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                </div>
              </div>
              <div class="one">
                <div class="title">
                  <img src="../../../static/images/dp01.jpg" alt="">
                  <div class="name">
                    <h4>京东官方自营旗舰店</h4>
                    <p>刚刚发布</p>
                  </div>
                </div>
                <p class="intro">漫长的等待总是西安的索然无味漫长的等待总是西安的索然无味，看不到尽头，只有一段华丽的开端。两年的时光总归还是有了期许，这次久别重逢的Magic有会以怎样的一种方式来与大家见面呢、希望你们期待</p>
                <img class="bigimg" src="../../../static/images/b01.jpg" alt="">
                <div class="read">
                  <span>1.2万人阅读</span>
                  <i class="iconfont icon-xiaoxi"></i>
                </div>
              </div>
              <div class="concern">
                <p>大家都关注他们</p>
                <div class="bot">
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide  slide-page">
              <div class="one">
                <div class="title">
                  <img src="../../../static/images/dp01.jpg" alt="">
                  <div class="name">
                    <h4>京东官方自营旗舰店</h4>
                    <p>刚刚发布</p>
                  </div>
                </div>
                <p class="intro">漫长的等待总是西安的索然无味漫长的等待总是西安的索然无味，看不到尽头，只有一段华丽的开端。两年的时光总归还是有了期许，这次久别重逢的Magic有会以怎样的一种方式来与大家见面呢、希望你们期待</p>
                <img class="bigimg" src="../../../static/images/b01.jpg" alt="">
                <div class="read">
                  <span>1.2万人阅读</span>
                  <i class="iconfont icon-xiaoxi"></i>
                </div>
              </div>
              <div class="concern">
                <p>大家都关注他们</p>
                <div class="bot">
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                </div>
              </div>
              <div class="one">
                <div class="title">
                  <img src="../../../static/images/dp01.jpg" alt="">
                  <div class="name">
                    <h4>京东官方自营旗舰店</h4>
                    <p>刚刚发布</p>
                  </div>
                </div>
                <p class="intro">漫长的等待总是西安的索然无味漫长的等待总是西安的索然无味，看不到尽头，只有一段华丽的开端。两年的时光总归还是有了期许，这次久别重逢的Magic有会以怎样的一种方式来与大家见面呢、希望你们期待</p>
                <img class="bigimg" src="../../../static/images/b01.jpg" alt="">
                <div class="read">
                  <span>1.2万人阅读</span>
                  <i class="iconfont icon-xiaoxi"></i>
                </div>
              </div>
              <div class="concern">
                <p>大家都关注他们</p>
                <div class="bot">
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                  <div class="bot-o">
                    <img src="../../../static/images/con0.jpg" alt="">
                    <h3>种草达人</h3>
                    <p>走心达人</p>
                    <div class="con">关注</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="upload" v-if="pullup">{{pullupText}}</div>
      </div>
    </div>
  </div>

</template>

<script>

  import Bscroll from "better-scroll"
  // import $ from '../../../static/js/jquery-3.3.1.min'

  import Swiper from '../../../static/js/swiper.min'
  import SwiperCss from '../../../static/js/swiper.min.css'
  import $ from '../../../static/js/jquery-3.3.1.min'
    export default {
        name: "FindMain",
      data(){
        return{

          pulldown:false,
          pulldownTxt:"下拉刷新..",
          pulldownsubTxt:"让购物更便捷....",
          pullup:false,
          pullupText:"上拉获取更多....",
          pullDirection:0,
          pageIndex:1,
          lastY:0,
          list:[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]

        }
      },
      methods:{
        _navSlider(){

          // document.querySelector('#swiper-container2 .swiper-slide').className='swiper-slide active-nav'

          var mySwiper1 = new Swiper('#swiper-container1', {
            //计算每个slide的progress(进度、进程)
            watchSlidesProgress: true,
            // watchSlidesVisibility: true,
            slidesPerView:6,
            spaceBetween:10,
            on: {
              tap: function () {
                mySwiper2.slideTo(mySwiper1.clickedIndex)
              }
            }
          });

          var mySwiper2 = new Swiper('#swiper-container2', {
            on: {
              slideChangeTransitionStart: function () {
                updateNavPosition()
              }
            }
          })

          function updateNavPosition() {
            $('#swiper-container1 .active-nav').removeClass('active-nav')
            var activeNav = $('#swiper-container1 .swiper-slide').eq(mySwiper1.activeIndex).addClass('active-nav');


            if (!activeNav.hasClass('swiper-slide-visible')) {
              if (activeNav.index() > mySwiper1.activeIndex) {
                var thumbsPerNav = Math.floor(mySwiper1.width / activeNav.width()) - 1
                mySwiper1.slideTo(activeNav.index() - thumbsPerNav)
              } else {
                mySwiper1.slideTo(activeNav.index())
              }
            }
          }

        }
      },
      mounted(){
        this._navSlider()

        // var before = $("#all-box").scrollTop();
        // $("#all-box").scroll(function(){
        //   var after = $("#all-box").scrollTop();
        //   if (before<after) {
        //     $(".header").stop().animate({
        //       top:-65
        //     },300)
        //     $(".head").stop().animate({
        //       top:-80
        //     },150)
        //     before = after;
        //   }
        //   if (before>after) {
        //     $(".header").stop().animate({
        //       top:0
        //     },200)
        //     $(".head").stop().animate({
        //       top:0
        //     },300)
        //     before = after;
        //   }
        // })

        //头部滚动添加样式
        // $(".wrapper").scroll(function (event) {
        //   // alert("1")
        //   let scrollT = $(this).scrollTop()
        //   //存储滚动位置
        //   // window.localStorage.setItem("scrollT", scrollT)
        //   //滚动时改变头部样式
        //   if ($(".wrapper").scrollTop() > 0) {
        //     $(".myhead").addClass("myactive")
        //   } else {
        //     $(".myhead").removeClass("myactive")
        //   }
        //   //下拉时也添加头部样式
        //   if ($(".scroller").scrollTop() > 0) {
        //     $(".myhead").addClass("myactive")
        //   }
        // })


        this.$nextTick(()=>{
          var scroller =new Bscroll(this.$refs.wrapper,{
            probeType:3
          })

          scroller.on("scrollStart", ()=> {
            //判断是下拉,还是上拉

          })

          scroller.on("scroll", ()=> {
            console.log("scrollY:"+scroller.y)
            console.log("maxY:"+scroller.maxScrollY)
            //判断是下拉,还是上拉
            //下拉
            if(scroller.y > 0){

              // $(".download").stop()
              // this.pulldownTxt = "松手更新"
              // $(".myhead").stop().fadeOut(100)
              this.pulldown = true;
              this.pullDirection = 1
            }
            //根据下拉高度判断显示内容
            if(scroller.y > 15 && scroller.y <=35){
              this.pulldownTxt = "松开刷新..."
              this.pullDirection = 1
            }

            //上拉
            if(scroller.y-scroller.maxScrollY <0){
              this.pullup = true;
              this.pullDirection = -1;
              this.pullupText="释放分页...."
              console.log("是否在底部:"+(scroller.y-scroller.maxScrollY))
            }

            if(scroller.y-scroller.maxScrollY > -50 && scroller.y-scroller.maxScrollY < -10 ){
              this.pullup = true;
              this.pullDirection = -1;
              this.pullupText="释放分页...."
              console.log("是否在底部:"+(scroller.y-scroller.maxScrollY))
            }
          })

          scroller.on("scrollEnd", ()=> {

            if(this.pullDirection ==1){
              this.pulldownTxt = "更新中..."
              //更新中，请求数据
              setTimeout(()=>{
                //获取数据完成之后，恢复原样
                this.pulldown = false
                // $(".myhead").stop().fadeIn(100)
              },2000)

            }else if(this.pullDirection == -1){

              //如果当前下拉的数比总的scrollerY小,获取新数据
              if(scroller.y <=scroller.maxScrollY){
                this.pullupText = "分页加载中..."
                this.pageIndex++
                for(var i=3;i<100;i++){
                  this.list.push(i)
                }
                //使用refresh 方法 来更新scroll  解决无法滚动的问题
                this.scroller.refresh()
                console.log(`加载了第 ${this.pageIndex} 页`)
              }
            }
            console.log("scrollEnd")
          })
        })

      },
      created(){

      }
    }
</script>

<style lang="stylus" scoped>
@import "../../assets/css/findMain.styl"
  @import "../../assets/css/scrollEvery.styl"
</style>
