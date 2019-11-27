(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{223:function(t,a,n){"use strict";n.r(a);var e=n(0),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"简易版的数据分页加载，滚动加载下一页"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简易版的数据分页加载，滚动加载下一页"}},[t._v("#")]),t._v(" 简易版的数据分页加载，滚动加载下一页")]),t._v(" "),n("p",[n("strong",[t._v("数据：")])]),t._v(" "),n("pre",[n("code",[t._v("  data: {\n    page: 1, // 第几页\n    hasMoreData: true, // 下一页是否还有新数据（默认有下一页数据）\n    dataList: [] // 数据列表\n  }\n")])]),t._v(" "),n("blockquote",[n("p",[t._v("如果接口会返回类似标志字段这里就不用自己定义了。")])]),t._v(" "),n("p",[n("strong",[t._v("新页加载事件：")])]),t._v(" "),n("pre",[n("code",[t._v("  /**\n   * 页面上拉触底事件的处理函数\n   */\n  onReachBottom: function () {\n    if(!this.data.hasMoreData) {\n      return;\n    }\n    this.data.page ++;\n    wx.showLoading({\n      title: '',\n      mask: true\n    })\n    this.getDataList();\n  }\n")])]),t._v(" "),n("blockquote",[n("p",[t._v("如果还有新数据，将页数加一，请求接口获取下一页数据，否则返回。")])]),t._v(" "),n("p",[n("strong",[t._v("请求接口")]),t._v("：")]),t._v(" "),n("pre",[n("code",[t._v("  // 获取数据列表\n  getDataList() {\n    if (!this.data.hasMoreData) {\n      return;\n    }\n    const params = {\n      id: this.options.id,\n      page: this.data.page\n    }\n    return app.$api.getDataList(params).then(res => {\n      if (res.status == 1) {\n        let resData = res.data || [];\n        if (!resData.length) {\n          this.setData({\n            hasMoreData: false\n          })\n        }\n        resData = this.data.complainList.concat(resData);\n        this.setData({\n          dataList: resData\n        })\n        wx.hideLoading();\n      }\n    })\n  }\n")])]),t._v(" "),n("blockquote",[n("p",[t._v("将当前数据列表与新的返回数据进行连接操作，渲染新列表。如果没有新数据将\n"),n("code",[t._v("hasMoreData")]),t._v("设置为"),n("code",[t._v("false")]),t._v("，避免下拉到底一直请求接口。")])]),t._v(" "),n("p",[n("em",[t._v("有tab切换时要重置数据")])])])}),[],!1,null,null,null);a.default=s.exports}}]);