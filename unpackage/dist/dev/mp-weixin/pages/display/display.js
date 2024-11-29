"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      currentPage: 1
    };
  },
  methods: {
    onHandleConfirmSearch(e) {
      console.log("onHandleConfirmSearch", e.value);
    },
    onHandleInput(value) {
      console.log("onHandleInput", value);
    },
    handleSwiperChange(e) {
      console.log("handleSwiperChange", e.detail.current);
      this.currentPage = e.detail.current + 1;
    },
    onHandlePaginationChange(e) {
      console.log(e);
      this.currentPage = e.current;
    }
  },
  onLoad() {
    common_vendor.index.createSelectorQuery().select(".header").boundingClientRect((data) => {
      console.log(data);
    }).exec();
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_collapse_item2 = common_vendor.resolveComponent("uni-collapse-item");
  const _easycom_uni_collapse2 = common_vendor.resolveComponent("uni-collapse");
  const _easycom_uni_pagination2 = common_vendor.resolveComponent("uni-pagination");
  (_easycom_uni_search_bar2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_collapse_item2 + _easycom_uni_collapse2 + _easycom_uni_pagination2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_collapse_item = () => "../../uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.js";
const _easycom_uni_collapse = () => "../../uni_modules/uni-collapse/components/uni-collapse/uni-collapse.js";
const _easycom_uni_pagination = () => "../../uni_modules/uni-pagination/components/uni-pagination/uni-pagination.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_list_item + _easycom_uni_list + _easycom_uni_collapse_item + _easycom_uni_collapse + _easycom_uni_pagination)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.onHandleConfirmSearch),
    b: common_vendor.o($options.onHandleInput),
    c: common_vendor.p({
      title: "标题使用自定义标题插槽",
      ["show-extra-icon"]: true,
      ["extra-icon"]: _ctx.extraIcon
    }),
    d: common_vendor.p({
      titleBorder: "none"
    }),
    e: common_vendor.p({
      title: "列表文字"
    }),
    f: common_vendor.p({
      disabled: true,
      title: "列表文字",
      note: "列表禁用状态"
    }),
    g: common_vendor.p({
      title: "列表右侧显示 switch",
      ["show-switch"]: true
    }),
    h: common_vendor.p({
      ["show-extra-icon"]: true,
      ["extra-icon"]: _ctx.extraIcon,
      title: "列表左侧带扩展图标"
    }),
    i: common_vendor.p({
      title: "列表左侧带略缩图",
      note: "列表描述信息",
      thumb: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
      ["thumb-size"]: "lg",
      rightText: "右侧文字",
      showArrow: true
    }),
    j: common_vendor.o(_ctx.onClick),
    k: common_vendor.p({
      title: "开启点击反馈",
      clickable: true,
      showArrow: true
    }),
    l: common_vendor.p({
      title: "折叠内容使用 uni-list 组件"
    }),
    m: common_vendor.p({
      title: "标题使用自定义标题插槽",
      ["show-extra-icon"]: true,
      ["extra-icon"]: _ctx.extraIcon
    }),
    n: common_vendor.p({
      titleBorder: "none"
    }),
    o: common_vendor.p({
      title: "列表文字"
    }),
    p: common_vendor.p({
      disabled: true,
      title: "列表文字",
      note: "列表禁用状态"
    }),
    q: common_vendor.p({
      title: "列表右侧显示 switch",
      ["show-switch"]: true
    }),
    r: common_vendor.p({
      ["show-extra-icon"]: true,
      ["extra-icon"]: _ctx.extraIcon,
      title: "列表左侧带扩展图标"
    }),
    s: common_vendor.p({
      title: "列表左侧带略缩图",
      note: "列表描述信息",
      thumb: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
      ["thumb-size"]: "lg",
      rightText: "右侧文字",
      showArrow: true
    }),
    t: common_vendor.o(_ctx.onClick),
    v: common_vendor.p({
      title: "开启点击反馈",
      clickable: true,
      showArrow: true
    }),
    w: common_vendor.p({
      title: "折叠内容使用 uni-list 组件"
    }),
    x: $data.currentPage - 1,
    y: common_vendor.o((...args) => $options.handleSwiperChange && $options.handleSwiperChange(...args)),
    z: common_vendor.o($options.onHandlePaginationChange),
    A: common_vendor.p({
      ["show-icon"]: true,
      pageSize: "1",
      total: 2,
      current: $data.currentPage,
      title: "标题文字"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-048aabb1"]]);
wx.createPage(MiniProgramPage);
