/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h5": () => (/* binding */ h5),
  "pc": () => (/* binding */ pc)
});

;// CONCATENATED MODULE: external "react"
const external_react_namespaceObject = require("react");;
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_namespaceObject);
;// CONCATENATED MODULE: external "react-dom/server"
const server_namespaceObject = require("react-dom/server");;
var server_default = /*#__PURE__*/__webpack_require__.n(server_namespaceObject);
;// CONCATENATED MODULE: external "@babel/runtime/helpers/defineProperty"
const defineProperty_namespaceObject = require("@babel/runtime/helpers/defineProperty");;
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_namespaceObject);
;// CONCATENATED MODULE: external "@babel/runtime/helpers/slicedToArray"
const slicedToArray_namespaceObject = require("@babel/runtime/helpers/slicedToArray");;
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_namespaceObject);
;// CONCATENATED MODULE: external "zarm-form-render"
const external_zarm_form_render_namespaceObject = require("zarm-form-render");;
var external_zarm_form_render_default = /*#__PURE__*/__webpack_require__.n(external_zarm_form_render_namespaceObject);
;// CONCATENATED MODULE: external "zarm"
const external_zarm_namespaceObject = require("zarm");;
;// CONCATENATED MODULE: ./src/h5/App.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // import 'zarm/dist/zarm.min.css';


function App() {
  var _useState = (0,external_react_namespaceObject.useState)({}),
      _useState2 = slicedToArray_default()(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var layoutData = [{
    type: external_zarm_namespaceObject.Input,
    label: '被保人姓名',
    placeholder: '请填写',
    name: 'name'
  }, {
    render: function render() {
      return data.name ? /*#__PURE__*/external_react_default().createElement(external_zarm_namespaceObject.Cell, {
        title: "\u4F60\u586B\u4E86"
      }, data.name) : null;
    }
  }, {
    render: function render() {
      return /*#__PURE__*/external_react_default().createElement(external_zarm_namespaceObject.Cell, {
        title: "\u6027\u522B"
      }, /*#__PURE__*/external_react_default().createElement(external_zarm_namespaceObject.Radio.Group, {
        type: "button",
        value: data.gender,
        onChange: function onChange(value) {
          setData(function (d) {
            return _objectSpread(_objectSpread({}, d), {}, {
              gender: value
            });
          });
        }
      }, /*#__PURE__*/external_react_default().createElement(external_zarm_namespaceObject.Radio, {
        value: "male"
      }, "\u7537"), /*#__PURE__*/external_react_default().createElement(external_zarm_namespaceObject.Radio, {
        value: "female"
      }, "\u5973")));
    }
  }, {
    render: function render() {
      if (!data.gender) {
        return null;
      }

      return /*#__PURE__*/external_react_default().createElement("div", {
        className: "".concat(data.gender)
      });
    }
  }, {
    render: function render() {
      if (!data.gender) return null;
      return /*#__PURE__*/external_react_default().createElement(external_zarm_namespaceObject.Cell, {
        title: "\u4F60\u662F",
        description: data.gender === 'male' ? '男生' : '女生'
      });
    }
  }, {
    type: external_zarm_namespaceObject.Select,
    label: '爱吃的水果',
    name: 'favfood',
    elProps: {
      dataSource: [{
        label: 'apple',
        value: 'apple'
      }, {
        label: 'banana',
        value: 'banana'
      }]
    }
  }, {
    type: external_zarm_namespaceObject.DateSelect,
    label: '出生日期',
    title: '被保人出生日期',
    placeholder: '请选择',
    name: 'birthday',
    min: '1900-01-01',
    elProps: {
      onOk: function onOk(value) {
        setData(function (d) {
          return _objectSpread(_objectSpread({}, d), {}, {
            birthday: value
          });
        });
      }
    }
  }, {
    type: external_zarm_namespaceObject.Input,
    label: '手机号',
    placeholder: '请填写',
    name: 'mobile'
  }, {
    render: function render() {
      return /*#__PURE__*/external_react_default().createElement(external_zarm_namespaceObject.Button, {
        block: true,
        theme: "primary",
        onClick: function onClick() {
          return alert(JSON.stringify(data));
        }
      }, "\u786E\u5B9A");
    }
  }];
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "app"
  }, /*#__PURE__*/external_react_default().createElement((external_zarm_form_render_default()), {
    layoutData: layoutData,
    data: data,
    setData: setData
  }));
}
;// CONCATENATED MODULE: external "antd-form-render"
const external_antd_form_render_namespaceObject = require("antd-form-render");;
var external_antd_form_render_default = /*#__PURE__*/__webpack_require__.n(external_antd_form_render_namespaceObject);
;// CONCATENATED MODULE: external "antd"
const external_antd_namespaceObject = require("antd");;
;// CONCATENATED MODULE: ./src/pc/App.tsx



function App_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function App_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { App_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { App_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Option = external_antd_namespaceObject.Select.Option;
function App_App() {
  var _Form$useForm = external_antd_namespaceObject.Form.useForm(),
      _Form$useForm2 = slicedToArray_default()(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = (0,external_react_namespaceObject.useState)({}),
      _useState2 = slicedToArray_default()(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0,external_react_namespaceObject.useState)(4),
      _useState4 = slicedToArray_default()(_useState3, 2),
      cols = _useState4[0],
      setCols = _useState4[1]; // 如果是一维数组，则从上往下一行放一个 item (未设置cols)


  var layout = [{
    type: external_antd_namespaceObject.Input,
    label: '手机号',
    placeholder: '请输入',
    name: 'tel',
    elProps: {
      maxLength: 11,
      addonBefore: /*#__PURE__*/external_react_default().createElement(external_antd_namespaceObject.Form.Item, {
        name: "prefix",
        noStyle: true,
        initialValue: "86"
      }, /*#__PURE__*/external_react_default().createElement(external_antd_namespaceObject.Select, {
        style: {
          width: 70
        }
      }, /*#__PURE__*/external_react_default().createElement(Option, {
        value: "86"
      }, "+86"), /*#__PURE__*/external_react_default().createElement(Option, {
        value: "87"
      }, "+87")))
    },
    itemProps: {
      rules: [{
        required: true,
        message: '请输入'
      }, {
        pattern: /^1\d{10}$/,
        message: '手机号必须为11位数字'
      }]
    }
  }, {
    type: external_antd_namespaceObject.Input.Password,
    label: '密码',
    placeholder: '请输入',
    name: 'pwd',
    itemProps: {
      rules: [{
        required: true,
        message: '请输入'
      }]
    }
  }, {
    type: external_antd_namespaceObject.Input.Password,
    label: '确认密码',
    placeholder: '请输入',
    name: 'confirmPwd',
    itemProps: {
      rules: [{
        required: true,
        message: '请输入'
      }, function (_ref) {
        var getFieldValue = _ref.getFieldValue;
        return {
          validator: function validator(_, value) {
            if (!value || getFieldValue('pwd') === value) {
              return Promise.resolve();
            }

            return Promise.reject(new Error('两次密码不一致'));
          }
        };
      }]
    }
  }, {
    type: external_antd_namespaceObject.Radio.Group,
    label: '性别',
    name: 'gender',
    elProps: {
      options: [{
        label: '男',
        value: '男'
      }, {
        label: '女',
        value: '女'
      }]
    }
  }, {
    // 根据条件动态返回object
    getJSON: function getJSON() {
      return data.gender === '男' ? {
        type: external_antd_namespaceObject.Input,
        label: '兴趣爱好(男)',
        placeholder: '请输入兴趣爱好',
        name: 'hobby',
        itemProps: {
          rules: [{
            required: true,
            message: '请输入兴趣爱好'
          }]
        }
      } : data.gender === '女' ? {
        type: external_antd_namespaceObject.Select,
        label: '兴趣爱好(女)',
        placeholder: '请选择兴趣爱好',
        name: 'hobby',
        itemProps: {
          itemProps: {
            rules: [{
              required: true,
              message: '请选择兴趣爱好'
            }]
          }
        },
        elProps: {
          options: [{
            label: '画画',
            value: '画画'
          }, {
            label: '唱歌',
            value: '唱歌'
          }, {
            label: '跳舞',
            value: '跳舞'
          }]
        }
      } : null;
    }
  }, {
    type: external_antd_namespaceObject.Input.TextArea,
    name: 'desc',
    label: '简介',
    elProps: {
      placeholder: '个人简介',
      rows: 4
    },
    itemProps: {
      rules: [{
        required: true
      }]
    }
  }, {
    // 自定义render
    render: function render() {
      return /*#__PURE__*/external_react_default().createElement(external_antd_namespaceObject.Form.Item, null, /*#__PURE__*/external_react_default().createElement(external_antd_namespaceObject.Space, null, /*#__PURE__*/external_react_default().createElement(external_antd_namespaceObject.Button, {
        htmlType: "submit",
        type: "primary"
      }, "\u786E\u5B9A"), /*#__PURE__*/external_react_default().createElement(external_antd_namespaceObject.Button, {
        htmlType: "reset"
      }, "\u91CD\u7F6E")));
    }
  }]; // 如果是二维数组，则每个子数组元素的数量，则为一行显示的item数量 ,子数组长度被24整除

  var layout1 = [[{
    type: external_antd_namespaceObject.Input,
    label: '姓名1',
    placeholder: '请输入',
    name: 'name1',
    elProps: {
      maxLength: 10
    }
  }, {
    type: external_antd_namespaceObject.Input,
    label: '姓名2',
    placeholder: '请输入',
    name: 'name2',
    elProps: {
      maxLength: 10
    }
  }], [{
    type: external_antd_namespaceObject.Input,
    label: '姓名3',
    placeholder: '请输入',
    name: 'name3',
    elProps: {
      maxLength: 10
    }
  }, {
    type: external_antd_namespaceObject.Input,
    label: '姓名4',
    placeholder: '请输入',
    elProps: {
      maxLength: 10
    }
  }]]; // 一维数组,设置了cols 为1/2/3/4 ,实现自动从左至右，从上到下的 1*cols 1行多列自动布局

  var layout3 = [];

  for (var i = 0; i < 11; i++) {
    layout3.push({
      type: external_antd_namespaceObject.Input,
      label: "\u8F93\u5165\u6846".concat(i + 1),
      placeholder: '请输入',
      name: "name".concat(i)
    });
  }

  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "app"
  }, /*#__PURE__*/external_react_default().createElement("section", null, /*#__PURE__*/external_react_default().createElement(external_antd_namespaceObject.Form, {
    form: form,
    className: "form",
    layout: "horizontal",
    onValuesChange: function onValuesChange(v) {
      setData(function (p) {
        return App_objectSpread(App_objectSpread({}, p), v);
      });
    },
    onFinish: function onFinish(v) {
      external_antd_namespaceObject.message.success(JSON.stringify(v));
    }
  }, /*#__PURE__*/external_react_default().createElement("h2", null, "\u4E00\u884C\u4E00\u5217 (\u914D\u7F6E\u4E00\u7EF4\u6570\u7EC4)"), /*#__PURE__*/external_react_default().createElement((external_antd_form_render_default()), {
    layoutData: layout,
    cols: 1
  })), /*#__PURE__*/external_react_default().createElement(external_antd_namespaceObject.Form, {
    className: "form1",
    layout: "vertical"
  }, /*#__PURE__*/external_react_default().createElement("h2", null, "\u4E00\u884C\u591A\u5217 (\u914D\u7F6E\u4E8C\u7EF4\u6570\u7EC4)"), /*#__PURE__*/external_react_default().createElement((external_antd_form_render_default()), {
    layoutData: layout1,
    cols: 1
  }))), /*#__PURE__*/external_react_default().createElement("section", null, /*#__PURE__*/external_react_default().createElement(external_antd_namespaceObject.Form, {
    className: "form2",
    layout: "vertical"
  }, /*#__PURE__*/external_react_default().createElement("h2", null, "\u4E00\u884C\u591A\u5217 (\u914D\u7F6E\u4E00\u7EF4\u6570\u7EC4\u548Ccols)"), /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      margin: '16px 0'
    }
  }, /*#__PURE__*/external_react_default().createElement(external_antd_namespaceObject.Radio.Group, {
    onChange: function onChange(e) {
      return setCols(Number(e.target.value));
    },
    optionType: "button",
    value: cols
  }, /*#__PURE__*/external_react_default().createElement(external_antd_namespaceObject.Radio, {
    value: 1
  }, "1\u884C1\u5217"), /*#__PURE__*/external_react_default().createElement(external_antd_namespaceObject.Radio, {
    value: 2
  }, "1\u884C2\u5217"), /*#__PURE__*/external_react_default().createElement(external_antd_namespaceObject.Radio, {
    value: 3
  }, "1\u884C3\u5217"), /*#__PURE__*/external_react_default().createElement(external_antd_namespaceObject.Radio, {
    value: 4
  }, "1\u884C4\u5217"))), /*#__PURE__*/external_react_default().createElement((external_antd_form_render_default()), {
    layoutData: layout3,
    cols: cols
  }))));
}
;// CONCATENATED MODULE: ./src/index.ssr.js




var h5 = function h5() {
  return server_default().renderToString( /*#__PURE__*/external_react_default().createElement(App, null));
};
var pc = function pc() {
  return server_default().renderToString( /*#__PURE__*/external_react_default().createElement(App_App, null));
};
module.exports = __webpack_exports__;
/******/ })()
;