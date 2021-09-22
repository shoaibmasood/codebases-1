var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from 'styled-components';
import { color, typography } from '../../themes/utils';
export var AuthFormStyle = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    .error {\n        margin-top: -20px;\n    }\n\n    .form-separator {\n        border-top: 1px solid ", ";\n        height: 1px;\n        margin: 24px 0;\n\n        p {\n            ", "\n            background: ", ";\n            color: ", ";\n            display: block;\n            margin: -7px auto;\n            text-align: center;\n            width: 30px;\n            font-size: 13px;\n            font-weight: bold;\n        }\n    }\n\n    button {\n        outline: 0;\n        top: 0px;\n        &:active,\n        &:focus {\n            position: relative;\n            top: 0px;\n        }\n\n        &.team {\n            margin-bottom: 11px;\n        }\n\n        &.link {\n            border: none;\n            background: none;\n            ", "\n            cursor: pointer;\n            font-weight: bold;\n            color: ", ";\n\n            &:hover {\n                text-decoration: underline;\n            }\n        }\n    }\n\n    .grecaptcha {\n        visibility: hidden;\n    }\n\n    .facebook-button,\n    .google-button {\n        margin-bottom: 12px;\n    }\n"], ["\n    .error {\n        margin-top: -20px;\n    }\n\n    .form-separator {\n        border-top: 1px solid ", ";\n        height: 1px;\n        margin: 24px 0;\n\n        p {\n            ", "\n            background: ", ";\n            color: ", ";\n            display: block;\n            margin: -7px auto;\n            text-align: center;\n            width: 30px;\n            font-size: 13px;\n            font-weight: bold;\n        }\n    }\n\n    button {\n        outline: 0;\n        top: 0px;\n        &:active,\n        &:focus {\n            position: relative;\n            top: 0px;\n        }\n\n        &.team {\n            margin-bottom: 11px;\n        }\n\n        &.link {\n            border: none;\n            background: none;\n            ", "\n            cursor: pointer;\n            font-weight: bold;\n            color: ", ";\n\n            &:hover {\n                text-decoration: underline;\n            }\n        }\n    }\n\n    .grecaptcha {\n        visibility: hidden;\n    }\n\n    .facebook-button,\n    .google-button {\n        margin-bottom: 12px;\n    }\n"])), color(function (c) { return c.navy; }), typography(function (t) { return t.normal; }), color(function (c) { return c.white; }), color(function (c) { return c.navy; }), typography(function (t) { return t.normal; }), color(function (c) { return c.violet; }));
var templateObject_1;
//# sourceMappingURL=auth-form.style.js.map