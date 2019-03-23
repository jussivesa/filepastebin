module.exports = { contents: "\"use strict\";\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar preact_1 = require(\"preact\");\n// @ts-ignore\nvar index_dialog_module_css_1 = require(\"./index-dialog.module.css\");\nvar HostDialog = /** @class */ (function (_super) {\n    __extends(HostDialog, _super);\n    function HostDialog(props) {\n        var _this = _super.call(this, props) || this;\n        _this.onbackgroundclicked = function () {\n        };\n        return _this;\n    }\n    HostDialog.prototype.render = function () {\n        return (preact_1.h(\"div\", { className: index_dialog_module_css_1.default.dialog },\n            preact_1.h(\"h1\", { id: index_dialog_module_css_1.default.dialogcode, className: index_dialog_module_css_1.default.dialogcode }, this.props.roomId),\n            preact_1.h(\"p\", { className: index_dialog_module_css_1.default.dialogdescription },\n                \"Use this code to receive files \",\n                preact_1.h(\"br\", null),\n                \"(must keep dialog open)\"),\n            preact_1.h(\"div\", { className: index_dialog_module_css_1.default.hostdialogcancel, onClick: this.props.oncancel }, \"CANCEL\")));\n    };\n    return HostDialog;\n}(preact_1.Component));\nexports.HostDialog = HostDialog;\n",
dependencies: ["preact","./index-dialog.module.css"],
sourceMap: {},
headerContent: undefined,
mtime: 1553297990941,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
