module.exports = { contents: "\"use strict\";\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar preact_1 = require(\"preact\");\nvar joindialog_1 = require(\"./joindialog\");\n// @ts-ignore\nvar index_dialog_module_css_1 = require(\"./index-dialog.module.css\");\nvar hostdialog_1 = require(\"./hostdialog\");\nvar DialogManager = /** @class */ (function () {\n    function DialogManager() {\n        var _this = this;\n        this.showJoinDialog = function (joinManager, onsuccess) {\n            _this.showDialog(preact_1.h(joindialog_1.JoinDialog, { joinManager: joinManager, onsuccess: onsuccess, oncancel: _this.hideDialog, ref: function (dialog) {\n                    if (dialog) {\n                        _this.container.addBackgroundClickListener(dialog.onbackgroundclicked);\n                    }\n                } }));\n        };\n        this.showHostDialog = function (roomId, oncancel) {\n            _this.showDialog(preact_1.h(hostdialog_1.HostDialog, { roomId: roomId, oncancel: function () {\n                    oncancel();\n                    _this.hideDialog();\n                } }));\n        };\n        this.hideDialog = function () {\n            _this.container.addBackgroundClickListener(null);\n            _this.container.setState({\n                dialog: null,\n            });\n        };\n        this.showDialog = function (element) {\n            _this.container.setState({\n                dialog: element,\n            });\n        };\n        preact_1.render(preact_1.h(DialogContainer, { ref: function (container) { return _this.container = container; } }), document.getElementById(\"dialog-manager\"));\n    }\n    return DialogManager;\n}());\nexports.DialogManager = DialogManager;\nvar DialogContainer = /** @class */ (function (_super) {\n    __extends(DialogContainer, _super);\n    function DialogContainer(props) {\n        var _this = _super.call(this) || this;\n        _this.props = props;\n        _this.state = {\n            dialog: null\n        };\n        return _this;\n    }\n    DialogContainer.prototype.addBackgroundClickListener = function (handler) {\n        this.backgroundClickListener = handler;\n    };\n    DialogContainer.prototype.render = function () {\n        var _this = this;\n        return (preact_1.h(\"div\", { className: index_dialog_module_css_1.default.dialogcontainer, style: { display: this.state.dialog ? 'flex' : 'none' }, onClick: function () {\n                if (_this.backgroundClickListener) {\n                    _this.backgroundClickListener();\n                }\n            } }, this.state.dialog));\n    };\n    return DialogContainer;\n}(preact_1.Component));\n",
dependencies: ["preact","./joindialog","./index-dialog.module.css","./hostdialog"],
sourceMap: {},
headerContent: undefined,
mtime: 1553298100328,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
