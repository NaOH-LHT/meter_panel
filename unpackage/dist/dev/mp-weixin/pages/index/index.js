"use strict";
const common_vendor = require("../../common/vendor.js");
const hooks_TCPSocket = require("../../hooks/TCPSocket.js");
const _sfc_main = {
  data() {
    return {
      isConnect: false
    };
  },
  onLoad() {
    common_vendor.index.onGetWifiList((e) => {
      console.log("onGetWifiList", e);
    });
  },
  onUnload() {
    common_vendor.index.offGetWifiList();
  },
  methods: {
    start() {
      this.isConnect = true;
      common_vendor.index.startWifi({
        success(e) {
          console.log("startWifiSuccess", e);
        },
        fail(e) {
          console.log("startWifiFail", e);
        },
        complete(e) {
          console.log("startWifiComplete", e);
        }
      });
    },
    stop() {
      common_vendor.index.stopWifi({
        success(e) {
          console.log("stopWifiSuccess", e);
        },
        fail(e) {
          console.log("stopWifiFail", e);
        },
        complete(e) {
          console.log("stopWifiComplete", e);
        }
      });
    },
    getDetail() {
      common_vendor.index.getConnectedWifi({
        partialInfo: false,
        success(e) {
          console.log("getConnectedWifiSuccess", e);
        },
        fail(e) {
          console.log("getConnectedWifiFail", e);
        },
        complete(e) {
          console.log("getConnectedWifiComplete", e);
        }
      });
    },
    getList() {
      common_vendor.index.getWifiList({
        success(e) {
          console.log("getWifiList_success", e);
        },
        fail(e) {
          console.log("getWifiList_fail", e);
        },
        complete(e) {
          console.log("getWifiList_complete", e);
        }
      });
    },
    goDisplay() {
      common_vendor.index.navigateTo({
        url: "/pages/display/display"
      });
    },
    goInput() {
      common_vendor.index.navigateTo({
        url: "/pages/input/input"
      });
    },
    connectTCP() {
      hooks_TCPSocket.TCPSocket.establish();
      hooks_TCPSocket.TCPSocket.connect("connect success");
      hooks_TCPSocket.TCPSocket.onMessage().then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  _easycom_uni_card2();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  _easycom_uni_card();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.start && $options.start(...args)),
    b: common_vendor.o((...args) => $options.stop && $options.stop(...args)),
    c: common_vendor.o((...args) => $options.getDetail && $options.getDetail(...args)),
    d: common_vendor.o((...args) => $options.getList && $options.getList(...args)),
    e: common_vendor.o((...args) => $options.connectTCP && $options.connectTCP(...args)),
    f: $data.isConnect
  }, $data.isConnect ? {
    g: common_vendor.o((...args) => $options.goDisplay && $options.goDisplay(...args)),
    h: common_vendor.o((...args) => $options.goInput && $options.goInput(...args))
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
