<template>
  <div class="box">
    <div class="content">
      <div class="contt">
        <index-header-nav-box></index-header-nav-box>
        <select-left-menu :clic="changeInd" :item="selectsdata[0]"></select-left-menu>
        <select-main-data :proin="proIndex" :item="selectsdata[1]"></select-main-data>
      </div>
    </div>
    <index-footer></index-footer>
  </div>


</template>

<script>
  import DataApisServer from "../apis/DataApis"
  import $ from "../../static/js/jquery-3.3.1.min"
    import IndexHeaderNavBox from "../components/index/IndexHeaderNavBox";
    import SelectLeftMenu from "../components/selects/SelectLeftMenu";
    import SelectMainData from "../components/selects/SelectMainData";
  import IndexFooter from "../components/IndexFooter";
    export default {
        name: "selects",
      components: {IndexFooter, SelectMainData, SelectLeftMenu, IndexHeaderNavBox},
      data(){
          return{
            selectsdata:[
              {
                "Menu":
                  [
                    {
                      "title": "推荐分类","shopID":1
                    },
                    {
                      "title": "京东超市","shopID":2
                    },
                    {
                      "title": "国际名牌","shopID":3
                    },
                    {
                      "title": "奢饰品","shopID":4
                    },
                    {
                      "title": "海囤全球","shopID":5
                    },
                    {
                      "title": "唯品会","shopID":6
                    },
                    {
                      "title": "男装","shopID":7
                    },
                    {
                      "title": "女装","shopID":8
                    },
                    {
                      "title": "男鞋","shopID":9
                    },
                    {
                      "title": "女鞋","shopID":10
                    },
                    {
                      "title": "内衣配饰","shopID":11
                    },
                    {
                      "title": "箱包手袋","shopID":12
                    }
                  ]
              },

              {
                "shops":[
                  {
                    "pic":"./static/images/img01.jpg",
                    "subShops":[
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      },
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      },
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      }
                    ]
                  },
                  {
                    "pic":"./static/images/img01.jpg",
                    "subShops":[
                      {
                        "bigtitle":"分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp21.jpg"},
                          {"name":"手机","img":"./static/images/sp22.jpg"},
                          {"name":"零食","img":"./static/images/sp23.jpg"},
                          {"name":"饼干","img":"./static/images/sp24.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp25.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp26.jpg"},
                          {"name":"衣服","img":"./static/images/sp27.jpg"},
                          {"name":"毛衣","img":"./static/images/sp28.png"}
                        ]
                      },
                      {
                        "bigtitle":"品牌",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp23.jpg"},
                          {"name":"手机","img":"./static/images/sp26.jpg"},
                          {"name":"零食","img":"./static/images/sp28.jpg"},
                          {"name":"饼干","img":"./static/images/sp29.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      },
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      }
                    ]
                  },
                  {
                    "pic":"./static/images/img01.jpg",
                    "subShops":[
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      },
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      },
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      }
                    ]
                  },
                  {
                    "pic":"./static/images/img01.jpg",
                    "subShops":[
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      },
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      },
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      }
                    ]
                  },
                  {
                    "pic":"./static/images/img01.jpg",
                    "subShops":[
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      },
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      },
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      }
                    ]
                  },
                  {
                    "pic":"./static/images/img01.jpg",
                    "subShops":[
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      },
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      },
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      }
                    ]
                  },
                  {
                    "pic":"./static/images/img01.jpg",
                    "subShops":[
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      },
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      },
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      }
                    ]
                  },
                  {
                    "pic":"./static/images/img01.jpg",
                    "subShops":[
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      },
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      },
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      }
                    ]
                  },
                  {
                    "pic":"./static/images/img01.jpg",
                    "subShops":[
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      },
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      },
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      }
                    ]
                  },
                  {
                    "pic":"./static/images/img01.jpg",
                    "subShops":[
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      },
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      },
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      }
                    ]
                  },
                  {
                    "pic":"./static/images/img01.jpg",
                    "subShops":[
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      },
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      },
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      }
                    ]
                  },
                  {
                    "pic":"./static/images/img01.jpg",
                    "subShops":[
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      },
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      },
                      {
                        "bigtitle":"热门分类",
                        "everyShop":[
                          {"name":"吃的","img":"./static/images/sp11.jpg"},
                          {"name":"手机","img":"./static/images/sp01.jpg"},
                          {"name":"零食","img":"./static/images/sp02.jpg"},
                          {"name":"饼干","img":"./static/images/sp03.jpg"},
                          {"name":"饼干蛋糕","img":"./static/images/sp04.jpg"},
                          {"name":"休闲食品","img":"./static/images/sp05.jpg"},
                          {"name":"衣服","img":"./static/images/sp06.jpg"},
                          {"name":"毛衣","img":"./static/images/sp07.png"}
                        ]
                      }
                    ]
                  }
                ]
              }

            ],
            proIndex:0,
            scrollPosit:0
          }
      },
      methods:{
        /**
         * 获取分类数据
         * @private
         */
        _initSelectsData(){
          DataApisServer.getSelectsData(data=>{
            this.selectsdata = data
            console.log(this.selectsdata[1].shops[0].pic)
            this._showRight()
          })
        },
        changeInd(i){
          this.proIndex = i
          console.log(this.proIndex)
        },
        _showRight(){
          $(function () {
            //若localstorage为空  则赋值为0
            // if(window.localStorage.getItem("n") == null){
            //   window.localStorage.setItem("n",0)
            // }
            let num=window.localStorage.getItem("n")
            // console.log(num)
            //默认显示第一个li 如果点击过则保存
            if(num){
              $(".menuul").children("li").eq(num).addClass('active')
              $("#product-content").children().eq(num).show()
              // console.log(num)
            }else{
              $(".menuul").children("li").eq(0).addClass('active')
              $("#product-content").children(":first").eq(num).show()
            }

            //点击每个li为其增加样式
            $("#MenuLeft ul li").click(function () {
              $(this).addClass('active').siblings('li').removeClass('active')
              var index = $(this).index()
              // console.log(index)
              //将点击的li的下标保存
              window.localStorage.setItem("n",index)
              // $("#product-content").eq(index).show().siblings("#product-content").hide()
            })

            // 保存滑动位置
            // $(".menu-right").scroll(function (event) {
            //   alert(1)
            //   // let scrollR = $(this).scrollTop()
            //   // console.log(scrollR)
            //   // if(window.localStorage.getItem("rightscroll")==null){
            //   //   window.localStorage.setItem("rightscroll",0)
            //   // }else{
            //   //   window.localStorage.setItem("rightscroll",scrollR)
            //   // }
            //
            // })
          })
        }
      },
      created(){
        this._initSelectsData()
        this._showRight()
        // if(window.localStorage.getItem("rightscroll")==null){
        //   window.localStorage.setItem("rightscroll",0)
        // }else{
        //   this.scrollPosit = window.localStorage.getItem("rightscroll")
        // }
      }
    }
</script>

<style lang="stylus">
@import "../assets/css/select.styl"
.box
  height 100%
  display flex
  flex-direction column
.content
  flex 1
  overflow: auto
</style>
