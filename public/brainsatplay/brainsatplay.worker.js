/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 638:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _get(target,property,receiver){if(typeof Reflect!=="undefined"&&Reflect.get){_get=Reflect.get;}else{_get=function _get(target,property,receiver){var base=_superPropBase(target,property);if(!base)return;var desc=Object.getOwnPropertyDescriptor(base,property);if(desc.get){return desc.get.call(receiver);}return desc.value;};}return _get(target,property,receiver||target);}function _superPropBase(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=_getPrototypeOf(object);if(object===null)break;}return object;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}else if(call!==void 0){throw new TypeError("Derived constructors may only return object or undefined");}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/**
 * gpu.js
 * http://gpu.rocks/
 *
 * GPU Accelerated JavaScript
 *
 * @version 2.11.0
 * @date Tue Jan 05 2021 15:55:59 GMT-0500 (Eastern Standard Time)
 *
 * @license MIT
 * The MIT License
 *
 * Copyright (c) 2021 gpu.js Team
 */(function(f){if(( false?0:_typeof(exports))==="object"&&"object"!=="undefined"){module.exports=f();}else if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else{ var g; }})(function(){var define,module,exports;return function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c=undefined;if(!f&&c)return require(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a;}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r);},p,p.exports,r,e,n,t);}return n[i].exports;}for(var u=undefined,i=0;i<t.length;i++){o(t[i]);}return o;}return r;}()({1:[function(require,module,exports){(function(global,factory){_typeof(exports)==='object'&&typeof module!=='undefined'?factory(exports):typeof define==='function'&&define.amd?define(['exports'],factory):(global=global||self,factory(global.acorn={}));})(this,function(exports){'use strict';var reservedWords={3:"abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",5:"class enum extends super const export import",6:"enum",strict:"implements interface let package private protected public static yield",strictBind:"eval arguments"};var ecma5AndLessKeywords="break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";var keywords={5:ecma5AndLessKeywords,"5module":ecma5AndLessKeywords+" export import",6:ecma5AndLessKeywords+" const class extends export import super"};var keywordRelationalOperator=/^in(stanceof)?$/;var nonASCIIidentifierStartChars="\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";var nonASCIIidentifierChars="\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";var nonASCIIidentifierStart=new RegExp("["+nonASCIIidentifierStartChars+"]");var nonASCIIidentifier=new RegExp("["+nonASCIIidentifierStartChars+nonASCIIidentifierChars+"]");nonASCIIidentifierStartChars=nonASCIIidentifierChars=null;var astralIdentifierStartCodes=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,477,28,11,0,9,21,155,22,13,52,76,44,33,24,27,35,30,0,12,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,0,33,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,0,161,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,270,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,754,9486,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42710,42,4148,12,221,3,5761,15,7472,3104,541];var astralIdentifierCodes=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,525,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,4,9,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,232,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,19723,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,792487,239];function isInAstralSet(code,set){var pos=0x10000;for(var i=0;i<set.length;i+=2){pos+=set[i];if(pos>code){return false;}pos+=set[i+1];if(pos>=code){return true;}}}function isIdentifierStart(code,astral){if(code<65){return code===36;}if(code<91){return true;}if(code<97){return code===95;}if(code<123){return true;}if(code<=0xffff){return code>=0xaa&&nonASCIIidentifierStart.test(String.fromCharCode(code));}if(astral===false){return false;}return isInAstralSet(code,astralIdentifierStartCodes);}function isIdentifierChar(code,astral){if(code<48){return code===36;}if(code<58){return true;}if(code<65){return false;}if(code<91){return true;}if(code<97){return code===95;}if(code<123){return true;}if(code<=0xffff){return code>=0xaa&&nonASCIIidentifier.test(String.fromCharCode(code));}if(astral===false){return false;}return isInAstralSet(code,astralIdentifierStartCodes)||isInAstralSet(code,astralIdentifierCodes);}var TokenType=function TokenType(label,conf){if(conf===void 0)conf={};this.label=label;this.keyword=conf.keyword;this.beforeExpr=!!conf.beforeExpr;this.startsExpr=!!conf.startsExpr;this.isLoop=!!conf.isLoop;this.isAssign=!!conf.isAssign;this.prefix=!!conf.prefix;this.postfix=!!conf.postfix;this.binop=conf.binop||null;this.updateContext=null;};function binop(name,prec){return new TokenType(name,{beforeExpr:true,binop:prec});}var beforeExpr={beforeExpr:true},startsExpr={startsExpr:true};var keywords$1={};function kw(name,options){if(options===void 0)options={};options.keyword=name;return keywords$1[name]=new TokenType(name,options);}var types={num:new TokenType("num",startsExpr),regexp:new TokenType("regexp",startsExpr),string:new TokenType("string",startsExpr),name:new TokenType("name",startsExpr),eof:new TokenType("eof"),bracketL:new TokenType("[",{beforeExpr:true,startsExpr:true}),bracketR:new TokenType("]"),braceL:new TokenType("{",{beforeExpr:true,startsExpr:true}),braceR:new TokenType("}"),parenL:new TokenType("(",{beforeExpr:true,startsExpr:true}),parenR:new TokenType(")"),comma:new TokenType(",",beforeExpr),semi:new TokenType(";",beforeExpr),colon:new TokenType(":",beforeExpr),dot:new TokenType("."),question:new TokenType("?",beforeExpr),arrow:new TokenType("=>",beforeExpr),template:new TokenType("template"),invalidTemplate:new TokenType("invalidTemplate"),ellipsis:new TokenType("...",beforeExpr),backQuote:new TokenType("`",startsExpr),dollarBraceL:new TokenType("${",{beforeExpr:true,startsExpr:true}),eq:new TokenType("=",{beforeExpr:true,isAssign:true}),assign:new TokenType("_=",{beforeExpr:true,isAssign:true}),incDec:new TokenType("++/--",{prefix:true,postfix:true,startsExpr:true}),prefix:new TokenType("!/~",{beforeExpr:true,prefix:true,startsExpr:true}),logicalOR:binop("||",1),logicalAND:binop("&&",2),bitwiseOR:binop("|",3),bitwiseXOR:binop("^",4),bitwiseAND:binop("&",5),equality:binop("==/!=/===/!==",6),relational:binop("</>/<=/>=",7),bitShift:binop("<</>>/>>>",8),plusMin:new TokenType("+/-",{beforeExpr:true,binop:9,prefix:true,startsExpr:true}),modulo:binop("%",10),star:binop("*",10),slash:binop("/",10),starstar:new TokenType("**",{beforeExpr:true}),_break:kw("break"),_case:kw("case",beforeExpr),_catch:kw("catch"),_continue:kw("continue"),_debugger:kw("debugger"),_default:kw("default",beforeExpr),_do:kw("do",{isLoop:true,beforeExpr:true}),_else:kw("else",beforeExpr),_finally:kw("finally"),_for:kw("for",{isLoop:true}),_function:kw("function",startsExpr),_if:kw("if"),_return:kw("return",beforeExpr),_switch:kw("switch"),_throw:kw("throw",beforeExpr),_try:kw("try"),_var:kw("var"),_const:kw("const"),_while:kw("while",{isLoop:true}),_with:kw("with"),_new:kw("new",{beforeExpr:true,startsExpr:true}),_this:kw("this",startsExpr),_super:kw("super",startsExpr),_class:kw("class",startsExpr),_extends:kw("extends",beforeExpr),_export:kw("export"),_import:kw("import",startsExpr),_null:kw("null",startsExpr),_true:kw("true",startsExpr),_false:kw("false",startsExpr),_in:kw("in",{beforeExpr:true,binop:7}),_instanceof:kw("instanceof",{beforeExpr:true,binop:7}),_typeof:kw("typeof",{beforeExpr:true,prefix:true,startsExpr:true}),_void:kw("void",{beforeExpr:true,prefix:true,startsExpr:true}),_delete:kw("delete",{beforeExpr:true,prefix:true,startsExpr:true})};var lineBreak=/\r\n?|\n|\u2028|\u2029/;var lineBreakG=new RegExp(lineBreak.source,"g");function isNewLine(code,ecma2019String){return code===10||code===13||!ecma2019String&&(code===0x2028||code===0x2029);}var nonASCIIwhitespace=/[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;var skipWhiteSpace=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;var ref=Object.prototype;var hasOwnProperty=ref.hasOwnProperty;var toString=ref.toString;function has(obj,propName){return hasOwnProperty.call(obj,propName);}var isArray=Array.isArray||function(obj){return toString.call(obj)==="[object Array]";};function wordsRegexp(words){return new RegExp("^(?:"+words.replace(/ /g,"|")+")$");}var Position=function Position(line,col){this.line=line;this.column=col;};Position.prototype.offset=function offset(n){return new Position(this.line,this.column+n);};var SourceLocation=function SourceLocation(p,start,end){this.start=start;this.end=end;if(p.sourceFile!==null){this.source=p.sourceFile;}};function getLineInfo(input,offset){for(var line=1,cur=0;;){lineBreakG.lastIndex=cur;var match=lineBreakG.exec(input);if(match&&match.index<offset){++line;cur=match.index+match[0].length;}else{return new Position(line,offset-cur);}}}var defaultOptions={ecmaVersion:10,sourceType:"script",onInsertedSemicolon:null,onTrailingComma:null,allowReserved:null,allowReturnOutsideFunction:false,allowImportExportEverywhere:false,allowAwaitOutsideFunction:false,allowHashBang:false,locations:false,onToken:null,onComment:null,ranges:false,program:null,sourceFile:null,directSourceFile:null,preserveParens:false};function getOptions(opts){var options={};for(var opt in defaultOptions){options[opt]=opts&&has(opts,opt)?opts[opt]:defaultOptions[opt];}if(options.ecmaVersion>=2015){options.ecmaVersion-=2009;}if(options.allowReserved==null){options.allowReserved=options.ecmaVersion<5;}if(isArray(options.onToken)){var tokens=options.onToken;options.onToken=function(token){return tokens.push(token);};}if(isArray(options.onComment)){options.onComment=pushComment(options,options.onComment);}return options;}function pushComment(options,array){return function(block,text,start,end,startLoc,endLoc){var comment={type:block?"Block":"Line",value:text,start:start,end:end};if(options.locations){comment.loc=new SourceLocation(this,startLoc,endLoc);}if(options.ranges){comment.range=[start,end];}array.push(comment);};}var SCOPE_TOP=1,SCOPE_FUNCTION=2,SCOPE_VAR=SCOPE_TOP|SCOPE_FUNCTION,SCOPE_ASYNC=4,SCOPE_GENERATOR=8,SCOPE_ARROW=16,SCOPE_SIMPLE_CATCH=32,SCOPE_SUPER=64,SCOPE_DIRECT_SUPER=128;function functionFlags(async,generator){return SCOPE_FUNCTION|(async?SCOPE_ASYNC:0)|(generator?SCOPE_GENERATOR:0);}var BIND_NONE=0,BIND_VAR=1,BIND_LEXICAL=2,BIND_FUNCTION=3,BIND_SIMPLE_CATCH=4,BIND_OUTSIDE=5;var Parser=function Parser(options,input,startPos){this.options=options=getOptions(options);this.sourceFile=options.sourceFile;this.keywords=wordsRegexp(keywords[options.ecmaVersion>=6?6:options.sourceType==="module"?"5module":5]);var reserved="";if(options.allowReserved!==true){for(var v=options.ecmaVersion;;v--){if(reserved=reservedWords[v]){break;}}if(options.sourceType==="module"){reserved+=" await";}}this.reservedWords=wordsRegexp(reserved);var reservedStrict=(reserved?reserved+" ":"")+reservedWords.strict;this.reservedWordsStrict=wordsRegexp(reservedStrict);this.reservedWordsStrictBind=wordsRegexp(reservedStrict+" "+reservedWords.strictBind);this.input=String(input);this.containsEsc=false;if(startPos){this.pos=startPos;this.lineStart=this.input.lastIndexOf("\n",startPos-1)+1;this.curLine=this.input.slice(0,this.lineStart).split(lineBreak).length;}else{this.pos=this.lineStart=0;this.curLine=1;}this.type=types.eof;this.value=null;this.start=this.end=this.pos;this.startLoc=this.endLoc=this.curPosition();this.lastTokEndLoc=this.lastTokStartLoc=null;this.lastTokStart=this.lastTokEnd=this.pos;this.context=this.initialContext();this.exprAllowed=true;this.inModule=options.sourceType==="module";this.strict=this.inModule||this.strictDirective(this.pos);this.potentialArrowAt=-1;this.yieldPos=this.awaitPos=this.awaitIdentPos=0;this.labels=[];this.undefinedExports={};if(this.pos===0&&options.allowHashBang&&this.input.slice(0,2)==="#!"){this.skipLineComment(2);}this.scopeStack=[];this.enterScope(SCOPE_TOP);this.regexpState=null;};var prototypeAccessors={inFunction:{configurable:true},inGenerator:{configurable:true},inAsync:{configurable:true},allowSuper:{configurable:true},allowDirectSuper:{configurable:true},treatFunctionsAsVar:{configurable:true}};Parser.prototype.parse=function parse(){var node=this.options.program||this.startNode();this.nextToken();return this.parseTopLevel(node);};prototypeAccessors.inFunction.get=function(){return(this.currentVarScope().flags&SCOPE_FUNCTION)>0;};prototypeAccessors.inGenerator.get=function(){return(this.currentVarScope().flags&SCOPE_GENERATOR)>0;};prototypeAccessors.inAsync.get=function(){return(this.currentVarScope().flags&SCOPE_ASYNC)>0;};prototypeAccessors.allowSuper.get=function(){return(this.currentThisScope().flags&SCOPE_SUPER)>0;};prototypeAccessors.allowDirectSuper.get=function(){return(this.currentThisScope().flags&SCOPE_DIRECT_SUPER)>0;};prototypeAccessors.treatFunctionsAsVar.get=function(){return this.treatFunctionsAsVarInScope(this.currentScope());};Parser.prototype.inNonArrowFunction=function inNonArrowFunction(){return(this.currentThisScope().flags&SCOPE_FUNCTION)>0;};Parser.extend=function extend(){var plugins=[],len=arguments.length;while(len--){plugins[len]=arguments[len];}var cls=this;for(var i=0;i<plugins.length;i++){cls=plugins[i](cls);}return cls;};Parser.parse=function parse(input,options){return new this(options,input).parse();};Parser.parseExpressionAt=function parseExpressionAt(input,pos,options){var parser=new this(options,input,pos);parser.nextToken();return parser.parseExpression();};Parser.tokenizer=function tokenizer(input,options){return new this(options,input);};Object.defineProperties(Parser.prototype,prototypeAccessors);var pp=Parser.prototype;var literal=/^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)")/;pp.strictDirective=function(start){for(;;){skipWhiteSpace.lastIndex=start;start+=skipWhiteSpace.exec(this.input)[0].length;var match=literal.exec(this.input.slice(start));if(!match){return false;}if((match[1]||match[2])==="use strict"){return true;}start+=match[0].length;skipWhiteSpace.lastIndex=start;start+=skipWhiteSpace.exec(this.input)[0].length;if(this.input[start]===";"){start++;}}};pp.eat=function(type){if(this.type===type){this.next();return true;}else{return false;}};pp.isContextual=function(name){return this.type===types.name&&this.value===name&&!this.containsEsc;};pp.eatContextual=function(name){if(!this.isContextual(name)){return false;}this.next();return true;};pp.expectContextual=function(name){if(!this.eatContextual(name)){this.unexpected();}};pp.canInsertSemicolon=function(){return this.type===types.eof||this.type===types.braceR||lineBreak.test(this.input.slice(this.lastTokEnd,this.start));};pp.insertSemicolon=function(){if(this.canInsertSemicolon()){if(this.options.onInsertedSemicolon){this.options.onInsertedSemicolon(this.lastTokEnd,this.lastTokEndLoc);}return true;}};pp.semicolon=function(){if(!this.eat(types.semi)&&!this.insertSemicolon()){this.unexpected();}};pp.afterTrailingComma=function(tokType,notNext){if(this.type===tokType){if(this.options.onTrailingComma){this.options.onTrailingComma(this.lastTokStart,this.lastTokStartLoc);}if(!notNext){this.next();}return true;}};pp.expect=function(type){this.eat(type)||this.unexpected();};pp.unexpected=function(pos){this.raise(pos!=null?pos:this.start,"Unexpected token");};function DestructuringErrors(){this.shorthandAssign=this.trailingComma=this.parenthesizedAssign=this.parenthesizedBind=this.doubleProto=-1;}pp.checkPatternErrors=function(refDestructuringErrors,isAssign){if(!refDestructuringErrors){return;}if(refDestructuringErrors.trailingComma>-1){this.raiseRecoverable(refDestructuringErrors.trailingComma,"Comma is not permitted after the rest element");}var parens=isAssign?refDestructuringErrors.parenthesizedAssign:refDestructuringErrors.parenthesizedBind;if(parens>-1){this.raiseRecoverable(parens,"Parenthesized pattern");}};pp.checkExpressionErrors=function(refDestructuringErrors,andThrow){if(!refDestructuringErrors){return false;}var shorthandAssign=refDestructuringErrors.shorthandAssign;var doubleProto=refDestructuringErrors.doubleProto;if(!andThrow){return shorthandAssign>=0||doubleProto>=0;}if(shorthandAssign>=0){this.raise(shorthandAssign,"Shorthand property assignments are valid only in destructuring patterns");}if(doubleProto>=0){this.raiseRecoverable(doubleProto,"Redefinition of __proto__ property");}};pp.checkYieldAwaitInDefaultParams=function(){if(this.yieldPos&&(!this.awaitPos||this.yieldPos<this.awaitPos)){this.raise(this.yieldPos,"Yield expression cannot be a default value");}if(this.awaitPos){this.raise(this.awaitPos,"Await expression cannot be a default value");}};pp.isSimpleAssignTarget=function(expr){if(expr.type==="ParenthesizedExpression"){return this.isSimpleAssignTarget(expr.expression);}return expr.type==="Identifier"||expr.type==="MemberExpression";};var pp$1=Parser.prototype;pp$1.parseTopLevel=function(node){var exports={};if(!node.body){node.body=[];}while(this.type!==types.eof){var stmt=this.parseStatement(null,true,exports);node.body.push(stmt);}if(this.inModule){for(var i=0,list=Object.keys(this.undefinedExports);i<list.length;i+=1){var name=list[i];this.raiseRecoverable(this.undefinedExports[name].start,"Export '"+name+"' is not defined");}}this.adaptDirectivePrologue(node.body);this.next();node.sourceType=this.options.sourceType;return this.finishNode(node,"Program");};var loopLabel={kind:"loop"},switchLabel={kind:"switch"};pp$1.isLet=function(context){if(this.options.ecmaVersion<6||!this.isContextual("let")){return false;}skipWhiteSpace.lastIndex=this.pos;var skip=skipWhiteSpace.exec(this.input);var next=this.pos+skip[0].length,nextCh=this.input.charCodeAt(next);if(nextCh===91){return true;}if(context){return false;}if(nextCh===123){return true;}if(isIdentifierStart(nextCh,true)){var pos=next+1;while(isIdentifierChar(this.input.charCodeAt(pos),true)){++pos;}var ident=this.input.slice(next,pos);if(!keywordRelationalOperator.test(ident)){return true;}}return false;};pp$1.isAsyncFunction=function(){if(this.options.ecmaVersion<8||!this.isContextual("async")){return false;}skipWhiteSpace.lastIndex=this.pos;var skip=skipWhiteSpace.exec(this.input);var next=this.pos+skip[0].length;return!lineBreak.test(this.input.slice(this.pos,next))&&this.input.slice(next,next+8)==="function"&&(next+8===this.input.length||!isIdentifierChar(this.input.charAt(next+8)));};pp$1.parseStatement=function(context,topLevel,exports){var starttype=this.type,node=this.startNode(),kind;if(this.isLet(context)){starttype=types._var;kind="let";}switch(starttype){case types._break:case types._continue:return this.parseBreakContinueStatement(node,starttype.keyword);case types._debugger:return this.parseDebuggerStatement(node);case types._do:return this.parseDoStatement(node);case types._for:return this.parseForStatement(node);case types._function:if(context&&(this.strict||context!=="if"&&context!=="label")&&this.options.ecmaVersion>=6){this.unexpected();}return this.parseFunctionStatement(node,false,!context);case types._class:if(context){this.unexpected();}return this.parseClass(node,true);case types._if:return this.parseIfStatement(node);case types._return:return this.parseReturnStatement(node);case types._switch:return this.parseSwitchStatement(node);case types._throw:return this.parseThrowStatement(node);case types._try:return this.parseTryStatement(node);case types._const:case types._var:kind=kind||this.value;if(context&&kind!=="var"){this.unexpected();}return this.parseVarStatement(node,kind);case types._while:return this.parseWhileStatement(node);case types._with:return this.parseWithStatement(node);case types.braceL:return this.parseBlock(true,node);case types.semi:return this.parseEmptyStatement(node);case types._export:case types._import:if(this.options.ecmaVersion>10&&starttype===types._import){skipWhiteSpace.lastIndex=this.pos;var skip=skipWhiteSpace.exec(this.input);var next=this.pos+skip[0].length,nextCh=this.input.charCodeAt(next);if(nextCh===40){return this.parseExpressionStatement(node,this.parseExpression());}}if(!this.options.allowImportExportEverywhere){if(!topLevel){this.raise(this.start,"'import' and 'export' may only appear at the top level");}if(!this.inModule){this.raise(this.start,"'import' and 'export' may appear only with 'sourceType: module'");}}return starttype===types._import?this.parseImport(node):this.parseExport(node,exports);default:if(this.isAsyncFunction()){if(context){this.unexpected();}this.next();return this.parseFunctionStatement(node,true,!context);}var maybeName=this.value,expr=this.parseExpression();if(starttype===types.name&&expr.type==="Identifier"&&this.eat(types.colon)){return this.parseLabeledStatement(node,maybeName,expr,context);}else{return this.parseExpressionStatement(node,expr);}}};pp$1.parseBreakContinueStatement=function(node,keyword){var isBreak=keyword==="break";this.next();if(this.eat(types.semi)||this.insertSemicolon()){node.label=null;}else if(this.type!==types.name){this.unexpected();}else{node.label=this.parseIdent();this.semicolon();}var i=0;for(;i<this.labels.length;++i){var lab=this.labels[i];if(node.label==null||lab.name===node.label.name){if(lab.kind!=null&&(isBreak||lab.kind==="loop")){break;}if(node.label&&isBreak){break;}}}if(i===this.labels.length){this.raise(node.start,"Unsyntactic "+keyword);}return this.finishNode(node,isBreak?"BreakStatement":"ContinueStatement");};pp$1.parseDebuggerStatement=function(node){this.next();this.semicolon();return this.finishNode(node,"DebuggerStatement");};pp$1.parseDoStatement=function(node){this.next();this.labels.push(loopLabel);node.body=this.parseStatement("do");this.labels.pop();this.expect(types._while);node.test=this.parseParenExpression();if(this.options.ecmaVersion>=6){this.eat(types.semi);}else{this.semicolon();}return this.finishNode(node,"DoWhileStatement");};pp$1.parseForStatement=function(node){this.next();var awaitAt=this.options.ecmaVersion>=9&&(this.inAsync||!this.inFunction&&this.options.allowAwaitOutsideFunction)&&this.eatContextual("await")?this.lastTokStart:-1;this.labels.push(loopLabel);this.enterScope(0);this.expect(types.parenL);if(this.type===types.semi){if(awaitAt>-1){this.unexpected(awaitAt);}return this.parseFor(node,null);}var isLet=this.isLet();if(this.type===types._var||this.type===types._const||isLet){var init$1=this.startNode(),kind=isLet?"let":this.value;this.next();this.parseVar(init$1,true,kind);this.finishNode(init$1,"VariableDeclaration");if((this.type===types._in||this.options.ecmaVersion>=6&&this.isContextual("of"))&&init$1.declarations.length===1){if(this.options.ecmaVersion>=9){if(this.type===types._in){if(awaitAt>-1){this.unexpected(awaitAt);}}else{node["await"]=awaitAt>-1;}}return this.parseForIn(node,init$1);}if(awaitAt>-1){this.unexpected(awaitAt);}return this.parseFor(node,init$1);}var refDestructuringErrors=new DestructuringErrors();var init=this.parseExpression(true,refDestructuringErrors);if(this.type===types._in||this.options.ecmaVersion>=6&&this.isContextual("of")){if(this.options.ecmaVersion>=9){if(this.type===types._in){if(awaitAt>-1){this.unexpected(awaitAt);}}else{node["await"]=awaitAt>-1;}}this.toAssignable(init,false,refDestructuringErrors);this.checkLVal(init);return this.parseForIn(node,init);}else{this.checkExpressionErrors(refDestructuringErrors,true);}if(awaitAt>-1){this.unexpected(awaitAt);}return this.parseFor(node,init);};pp$1.parseFunctionStatement=function(node,isAsync,declarationPosition){this.next();return this.parseFunction(node,FUNC_STATEMENT|(declarationPosition?0:FUNC_HANGING_STATEMENT),false,isAsync);};pp$1.parseIfStatement=function(node){this.next();node.test=this.parseParenExpression();node.consequent=this.parseStatement("if");node.alternate=this.eat(types._else)?this.parseStatement("if"):null;return this.finishNode(node,"IfStatement");};pp$1.parseReturnStatement=function(node){if(!this.inFunction&&!this.options.allowReturnOutsideFunction){this.raise(this.start,"'return' outside of function");}this.next();if(this.eat(types.semi)||this.insertSemicolon()){node.argument=null;}else{node.argument=this.parseExpression();this.semicolon();}return this.finishNode(node,"ReturnStatement");};pp$1.parseSwitchStatement=function(node){this.next();node.discriminant=this.parseParenExpression();node.cases=[];this.expect(types.braceL);this.labels.push(switchLabel);this.enterScope(0);var cur;for(var sawDefault=false;this.type!==types.braceR;){if(this.type===types._case||this.type===types._default){var isCase=this.type===types._case;if(cur){this.finishNode(cur,"SwitchCase");}node.cases.push(cur=this.startNode());cur.consequent=[];this.next();if(isCase){cur.test=this.parseExpression();}else{if(sawDefault){this.raiseRecoverable(this.lastTokStart,"Multiple default clauses");}sawDefault=true;cur.test=null;}this.expect(types.colon);}else{if(!cur){this.unexpected();}cur.consequent.push(this.parseStatement(null));}}this.exitScope();if(cur){this.finishNode(cur,"SwitchCase");}this.next();this.labels.pop();return this.finishNode(node,"SwitchStatement");};pp$1.parseThrowStatement=function(node){this.next();if(lineBreak.test(this.input.slice(this.lastTokEnd,this.start))){this.raise(this.lastTokEnd,"Illegal newline after throw");}node.argument=this.parseExpression();this.semicolon();return this.finishNode(node,"ThrowStatement");};var empty=[];pp$1.parseTryStatement=function(node){this.next();node.block=this.parseBlock();node.handler=null;if(this.type===types._catch){var clause=this.startNode();this.next();if(this.eat(types.parenL)){clause.param=this.parseBindingAtom();var simple=clause.param.type==="Identifier";this.enterScope(simple?SCOPE_SIMPLE_CATCH:0);this.checkLVal(clause.param,simple?BIND_SIMPLE_CATCH:BIND_LEXICAL);this.expect(types.parenR);}else{if(this.options.ecmaVersion<10){this.unexpected();}clause.param=null;this.enterScope(0);}clause.body=this.parseBlock(false);this.exitScope();node.handler=this.finishNode(clause,"CatchClause");}node.finalizer=this.eat(types._finally)?this.parseBlock():null;if(!node.handler&&!node.finalizer){this.raise(node.start,"Missing catch or finally clause");}return this.finishNode(node,"TryStatement");};pp$1.parseVarStatement=function(node,kind){this.next();this.parseVar(node,false,kind);this.semicolon();return this.finishNode(node,"VariableDeclaration");};pp$1.parseWhileStatement=function(node){this.next();node.test=this.parseParenExpression();this.labels.push(loopLabel);node.body=this.parseStatement("while");this.labels.pop();return this.finishNode(node,"WhileStatement");};pp$1.parseWithStatement=function(node){if(this.strict){this.raise(this.start,"'with' in strict mode");}this.next();node.object=this.parseParenExpression();node.body=this.parseStatement("with");return this.finishNode(node,"WithStatement");};pp$1.parseEmptyStatement=function(node){this.next();return this.finishNode(node,"EmptyStatement");};pp$1.parseLabeledStatement=function(node,maybeName,expr,context){for(var i$1=0,list=this.labels;i$1<list.length;i$1+=1){var label=list[i$1];if(label.name===maybeName){this.raise(expr.start,"Label '"+maybeName+"' is already declared");}}var kind=this.type.isLoop?"loop":this.type===types._switch?"switch":null;for(var i=this.labels.length-1;i>=0;i--){var label$1=this.labels[i];if(label$1.statementStart===node.start){label$1.statementStart=this.start;label$1.kind=kind;}else{break;}}this.labels.push({name:maybeName,kind:kind,statementStart:this.start});node.body=this.parseStatement(context?context.indexOf("label")===-1?context+"label":context:"label");this.labels.pop();node.label=expr;return this.finishNode(node,"LabeledStatement");};pp$1.parseExpressionStatement=function(node,expr){node.expression=expr;this.semicolon();return this.finishNode(node,"ExpressionStatement");};pp$1.parseBlock=function(createNewLexicalScope,node){if(createNewLexicalScope===void 0)createNewLexicalScope=true;if(node===void 0)node=this.startNode();node.body=[];this.expect(types.braceL);if(createNewLexicalScope){this.enterScope(0);}while(!this.eat(types.braceR)){var stmt=this.parseStatement(null);node.body.push(stmt);}if(createNewLexicalScope){this.exitScope();}return this.finishNode(node,"BlockStatement");};pp$1.parseFor=function(node,init){node.init=init;this.expect(types.semi);node.test=this.type===types.semi?null:this.parseExpression();this.expect(types.semi);node.update=this.type===types.parenR?null:this.parseExpression();this.expect(types.parenR);node.body=this.parseStatement("for");this.exitScope();this.labels.pop();return this.finishNode(node,"ForStatement");};pp$1.parseForIn=function(node,init){var isForIn=this.type===types._in;this.next();if(init.type==="VariableDeclaration"&&init.declarations[0].init!=null&&(!isForIn||this.options.ecmaVersion<8||this.strict||init.kind!=="var"||init.declarations[0].id.type!=="Identifier")){this.raise(init.start,(isForIn?"for-in":"for-of")+" loop variable declaration may not have an initializer");}else if(init.type==="AssignmentPattern"){this.raise(init.start,"Invalid left-hand side in for-loop");}node.left=init;node.right=isForIn?this.parseExpression():this.parseMaybeAssign();this.expect(types.parenR);node.body=this.parseStatement("for");this.exitScope();this.labels.pop();return this.finishNode(node,isForIn?"ForInStatement":"ForOfStatement");};pp$1.parseVar=function(node,isFor,kind){node.declarations=[];node.kind=kind;for(;;){var decl=this.startNode();this.parseVarId(decl,kind);if(this.eat(types.eq)){decl.init=this.parseMaybeAssign(isFor);}else if(kind==="const"&&!(this.type===types._in||this.options.ecmaVersion>=6&&this.isContextual("of"))){this.unexpected();}else if(decl.id.type!=="Identifier"&&!(isFor&&(this.type===types._in||this.isContextual("of")))){this.raise(this.lastTokEnd,"Complex binding patterns require an initialization value");}else{decl.init=null;}node.declarations.push(this.finishNode(decl,"VariableDeclarator"));if(!this.eat(types.comma)){break;}}return node;};pp$1.parseVarId=function(decl,kind){decl.id=this.parseBindingAtom();this.checkLVal(decl.id,kind==="var"?BIND_VAR:BIND_LEXICAL,false);};var FUNC_STATEMENT=1,FUNC_HANGING_STATEMENT=2,FUNC_NULLABLE_ID=4;pp$1.parseFunction=function(node,statement,allowExpressionBody,isAsync){this.initFunction(node);if(this.options.ecmaVersion>=9||this.options.ecmaVersion>=6&&!isAsync){if(this.type===types.star&&statement&FUNC_HANGING_STATEMENT){this.unexpected();}node.generator=this.eat(types.star);}if(this.options.ecmaVersion>=8){node.async=!!isAsync;}if(statement&FUNC_STATEMENT){node.id=statement&FUNC_NULLABLE_ID&&this.type!==types.name?null:this.parseIdent();if(node.id&&!(statement&FUNC_HANGING_STATEMENT)){this.checkLVal(node.id,this.strict||node.generator||node.async?this.treatFunctionsAsVar?BIND_VAR:BIND_LEXICAL:BIND_FUNCTION);}}var oldYieldPos=this.yieldPos,oldAwaitPos=this.awaitPos,oldAwaitIdentPos=this.awaitIdentPos;this.yieldPos=0;this.awaitPos=0;this.awaitIdentPos=0;this.enterScope(functionFlags(node.async,node.generator));if(!(statement&FUNC_STATEMENT)){node.id=this.type===types.name?this.parseIdent():null;}this.parseFunctionParams(node);this.parseFunctionBody(node,allowExpressionBody,false);this.yieldPos=oldYieldPos;this.awaitPos=oldAwaitPos;this.awaitIdentPos=oldAwaitIdentPos;return this.finishNode(node,statement&FUNC_STATEMENT?"FunctionDeclaration":"FunctionExpression");};pp$1.parseFunctionParams=function(node){this.expect(types.parenL);node.params=this.parseBindingList(types.parenR,false,this.options.ecmaVersion>=8);this.checkYieldAwaitInDefaultParams();};pp$1.parseClass=function(node,isStatement){this.next();var oldStrict=this.strict;this.strict=true;this.parseClassId(node,isStatement);this.parseClassSuper(node);var classBody=this.startNode();var hadConstructor=false;classBody.body=[];this.expect(types.braceL);while(!this.eat(types.braceR)){var element=this.parseClassElement(node.superClass!==null);if(element){classBody.body.push(element);if(element.type==="MethodDefinition"&&element.kind==="constructor"){if(hadConstructor){this.raise(element.start,"Duplicate constructor in the same class");}hadConstructor=true;}}}node.body=this.finishNode(classBody,"ClassBody");this.strict=oldStrict;return this.finishNode(node,isStatement?"ClassDeclaration":"ClassExpression");};pp$1.parseClassElement=function(constructorAllowsSuper){var this$1=this;if(this.eat(types.semi)){return null;}var method=this.startNode();var tryContextual=function tryContextual(k,noLineBreak){if(noLineBreak===void 0)noLineBreak=false;var start=this$1.start,startLoc=this$1.startLoc;if(!this$1.eatContextual(k)){return false;}if(this$1.type!==types.parenL&&(!noLineBreak||!this$1.canInsertSemicolon())){return true;}if(method.key){this$1.unexpected();}method.computed=false;method.key=this$1.startNodeAt(start,startLoc);method.key.name=k;this$1.finishNode(method.key,"Identifier");return false;};method.kind="method";method["static"]=tryContextual("static");var isGenerator=this.eat(types.star);var isAsync=false;if(!isGenerator){if(this.options.ecmaVersion>=8&&tryContextual("async",true)){isAsync=true;isGenerator=this.options.ecmaVersion>=9&&this.eat(types.star);}else if(tryContextual("get")){method.kind="get";}else if(tryContextual("set")){method.kind="set";}}if(!method.key){this.parsePropertyName(method);}var key=method.key;var allowsDirectSuper=false;if(!method.computed&&!method["static"]&&(key.type==="Identifier"&&key.name==="constructor"||key.type==="Literal"&&key.value==="constructor")){if(method.kind!=="method"){this.raise(key.start,"Constructor can't have get/set modifier");}if(isGenerator){this.raise(key.start,"Constructor can't be a generator");}if(isAsync){this.raise(key.start,"Constructor can't be an async method");}method.kind="constructor";allowsDirectSuper=constructorAllowsSuper;}else if(method["static"]&&key.type==="Identifier"&&key.name==="prototype"){this.raise(key.start,"Classes may not have a static property named prototype");}this.parseClassMethod(method,isGenerator,isAsync,allowsDirectSuper);if(method.kind==="get"&&method.value.params.length!==0){this.raiseRecoverable(method.value.start,"getter should have no params");}if(method.kind==="set"&&method.value.params.length!==1){this.raiseRecoverable(method.value.start,"setter should have exactly one param");}if(method.kind==="set"&&method.value.params[0].type==="RestElement"){this.raiseRecoverable(method.value.params[0].start,"Setter cannot use rest params");}return method;};pp$1.parseClassMethod=function(method,isGenerator,isAsync,allowsDirectSuper){method.value=this.parseMethod(isGenerator,isAsync,allowsDirectSuper);return this.finishNode(method,"MethodDefinition");};pp$1.parseClassId=function(node,isStatement){if(this.type===types.name){node.id=this.parseIdent();if(isStatement){this.checkLVal(node.id,BIND_LEXICAL,false);}}else{if(isStatement===true){this.unexpected();}node.id=null;}};pp$1.parseClassSuper=function(node){node.superClass=this.eat(types._extends)?this.parseExprSubscripts():null;};pp$1.parseExport=function(node,exports){this.next();if(this.eat(types.star)){this.expectContextual("from");if(this.type!==types.string){this.unexpected();}node.source=this.parseExprAtom();this.semicolon();return this.finishNode(node,"ExportAllDeclaration");}if(this.eat(types._default)){this.checkExport(exports,"default",this.lastTokStart);var isAsync;if(this.type===types._function||(isAsync=this.isAsyncFunction())){var fNode=this.startNode();this.next();if(isAsync){this.next();}node.declaration=this.parseFunction(fNode,FUNC_STATEMENT|FUNC_NULLABLE_ID,false,isAsync);}else if(this.type===types._class){var cNode=this.startNode();node.declaration=this.parseClass(cNode,"nullableID");}else{node.declaration=this.parseMaybeAssign();this.semicolon();}return this.finishNode(node,"ExportDefaultDeclaration");}if(this.shouldParseExportStatement()){node.declaration=this.parseStatement(null);if(node.declaration.type==="VariableDeclaration"){this.checkVariableExport(exports,node.declaration.declarations);}else{this.checkExport(exports,node.declaration.id.name,node.declaration.id.start);}node.specifiers=[];node.source=null;}else{node.declaration=null;node.specifiers=this.parseExportSpecifiers(exports);if(this.eatContextual("from")){if(this.type!==types.string){this.unexpected();}node.source=this.parseExprAtom();}else{for(var i=0,list=node.specifiers;i<list.length;i+=1){var spec=list[i];this.checkUnreserved(spec.local);this.checkLocalExport(spec.local);}node.source=null;}this.semicolon();}return this.finishNode(node,"ExportNamedDeclaration");};pp$1.checkExport=function(exports,name,pos){if(!exports){return;}if(has(exports,name)){this.raiseRecoverable(pos,"Duplicate export '"+name+"'");}exports[name]=true;};pp$1.checkPatternExport=function(exports,pat){var type=pat.type;if(type==="Identifier"){this.checkExport(exports,pat.name,pat.start);}else if(type==="ObjectPattern"){for(var i=0,list=pat.properties;i<list.length;i+=1){var prop=list[i];this.checkPatternExport(exports,prop);}}else if(type==="ArrayPattern"){for(var i$1=0,list$1=pat.elements;i$1<list$1.length;i$1+=1){var elt=list$1[i$1];if(elt){this.checkPatternExport(exports,elt);}}}else if(type==="Property"){this.checkPatternExport(exports,pat.value);}else if(type==="AssignmentPattern"){this.checkPatternExport(exports,pat.left);}else if(type==="RestElement"){this.checkPatternExport(exports,pat.argument);}else if(type==="ParenthesizedExpression"){this.checkPatternExport(exports,pat.expression);}};pp$1.checkVariableExport=function(exports,decls){if(!exports){return;}for(var i=0,list=decls;i<list.length;i+=1){var decl=list[i];this.checkPatternExport(exports,decl.id);}};pp$1.shouldParseExportStatement=function(){return this.type.keyword==="var"||this.type.keyword==="const"||this.type.keyword==="class"||this.type.keyword==="function"||this.isLet()||this.isAsyncFunction();};pp$1.parseExportSpecifiers=function(exports){var nodes=[],first=true;this.expect(types.braceL);while(!this.eat(types.braceR)){if(!first){this.expect(types.comma);if(this.afterTrailingComma(types.braceR)){break;}}else{first=false;}var node=this.startNode();node.local=this.parseIdent(true);node.exported=this.eatContextual("as")?this.parseIdent(true):node.local;this.checkExport(exports,node.exported.name,node.exported.start);nodes.push(this.finishNode(node,"ExportSpecifier"));}return nodes;};pp$1.parseImport=function(node){this.next();if(this.type===types.string){node.specifiers=empty;node.source=this.parseExprAtom();}else{node.specifiers=this.parseImportSpecifiers();this.expectContextual("from");node.source=this.type===types.string?this.parseExprAtom():this.unexpected();}this.semicolon();return this.finishNode(node,"ImportDeclaration");};pp$1.parseImportSpecifiers=function(){var nodes=[],first=true;if(this.type===types.name){var node=this.startNode();node.local=this.parseIdent();this.checkLVal(node.local,BIND_LEXICAL);nodes.push(this.finishNode(node,"ImportDefaultSpecifier"));if(!this.eat(types.comma)){return nodes;}}if(this.type===types.star){var node$1=this.startNode();this.next();this.expectContextual("as");node$1.local=this.parseIdent();this.checkLVal(node$1.local,BIND_LEXICAL);nodes.push(this.finishNode(node$1,"ImportNamespaceSpecifier"));return nodes;}this.expect(types.braceL);while(!this.eat(types.braceR)){if(!first){this.expect(types.comma);if(this.afterTrailingComma(types.braceR)){break;}}else{first=false;}var node$2=this.startNode();node$2.imported=this.parseIdent(true);if(this.eatContextual("as")){node$2.local=this.parseIdent();}else{this.checkUnreserved(node$2.imported);node$2.local=node$2.imported;}this.checkLVal(node$2.local,BIND_LEXICAL);nodes.push(this.finishNode(node$2,"ImportSpecifier"));}return nodes;};pp$1.adaptDirectivePrologue=function(statements){for(var i=0;i<statements.length&&this.isDirectiveCandidate(statements[i]);++i){statements[i].directive=statements[i].expression.raw.slice(1,-1);}};pp$1.isDirectiveCandidate=function(statement){return statement.type==="ExpressionStatement"&&statement.expression.type==="Literal"&&typeof statement.expression.value==="string"&&(this.input[statement.start]==="\""||this.input[statement.start]==="'");};var pp$2=Parser.prototype;pp$2.toAssignable=function(node,isBinding,refDestructuringErrors){if(this.options.ecmaVersion>=6&&node){switch(node.type){case"Identifier":if(this.inAsync&&node.name==="await"){this.raise(node.start,"Cannot use 'await' as identifier inside an async function");}break;case"ObjectPattern":case"ArrayPattern":case"RestElement":break;case"ObjectExpression":node.type="ObjectPattern";if(refDestructuringErrors){this.checkPatternErrors(refDestructuringErrors,true);}for(var i=0,list=node.properties;i<list.length;i+=1){var prop=list[i];this.toAssignable(prop,isBinding);if(prop.type==="RestElement"&&(prop.argument.type==="ArrayPattern"||prop.argument.type==="ObjectPattern")){this.raise(prop.argument.start,"Unexpected token");}}break;case"Property":if(node.kind!=="init"){this.raise(node.key.start,"Object pattern can't contain getter or setter");}this.toAssignable(node.value,isBinding);break;case"ArrayExpression":node.type="ArrayPattern";if(refDestructuringErrors){this.checkPatternErrors(refDestructuringErrors,true);}this.toAssignableList(node.elements,isBinding);break;case"SpreadElement":node.type="RestElement";this.toAssignable(node.argument,isBinding);if(node.argument.type==="AssignmentPattern"){this.raise(node.argument.start,"Rest elements cannot have a default value");}break;case"AssignmentExpression":if(node.operator!=="="){this.raise(node.left.end,"Only '=' operator can be used for specifying default value.");}node.type="AssignmentPattern";delete node.operator;this.toAssignable(node.left,isBinding);case"AssignmentPattern":break;case"ParenthesizedExpression":this.toAssignable(node.expression,isBinding,refDestructuringErrors);break;case"MemberExpression":if(!isBinding){break;}default:this.raise(node.start,"Assigning to rvalue");}}else if(refDestructuringErrors){this.checkPatternErrors(refDestructuringErrors,true);}return node;};pp$2.toAssignableList=function(exprList,isBinding){var end=exprList.length;for(var i=0;i<end;i++){var elt=exprList[i];if(elt){this.toAssignable(elt,isBinding);}}if(end){var last=exprList[end-1];if(this.options.ecmaVersion===6&&isBinding&&last&&last.type==="RestElement"&&last.argument.type!=="Identifier"){this.unexpected(last.argument.start);}}return exprList;};pp$2.parseSpread=function(refDestructuringErrors){var node=this.startNode();this.next();node.argument=this.parseMaybeAssign(false,refDestructuringErrors);return this.finishNode(node,"SpreadElement");};pp$2.parseRestBinding=function(){var node=this.startNode();this.next();if(this.options.ecmaVersion===6&&this.type!==types.name){this.unexpected();}node.argument=this.parseBindingAtom();return this.finishNode(node,"RestElement");};pp$2.parseBindingAtom=function(){if(this.options.ecmaVersion>=6){switch(this.type){case types.bracketL:var node=this.startNode();this.next();node.elements=this.parseBindingList(types.bracketR,true,true);return this.finishNode(node,"ArrayPattern");case types.braceL:return this.parseObj(true);}}return this.parseIdent();};pp$2.parseBindingList=function(close,allowEmpty,allowTrailingComma){var elts=[],first=true;while(!this.eat(close)){if(first){first=false;}else{this.expect(types.comma);}if(allowEmpty&&this.type===types.comma){elts.push(null);}else if(allowTrailingComma&&this.afterTrailingComma(close)){break;}else if(this.type===types.ellipsis){var rest=this.parseRestBinding();this.parseBindingListItem(rest);elts.push(rest);if(this.type===types.comma){this.raise(this.start,"Comma is not permitted after the rest element");}this.expect(close);break;}else{var elem=this.parseMaybeDefault(this.start,this.startLoc);this.parseBindingListItem(elem);elts.push(elem);}}return elts;};pp$2.parseBindingListItem=function(param){return param;};pp$2.parseMaybeDefault=function(startPos,startLoc,left){left=left||this.parseBindingAtom();if(this.options.ecmaVersion<6||!this.eat(types.eq)){return left;}var node=this.startNodeAt(startPos,startLoc);node.left=left;node.right=this.parseMaybeAssign();return this.finishNode(node,"AssignmentPattern");};pp$2.checkLVal=function(expr,bindingType,checkClashes){if(bindingType===void 0)bindingType=BIND_NONE;switch(expr.type){case"Identifier":if(bindingType===BIND_LEXICAL&&expr.name==="let"){this.raiseRecoverable(expr.start,"let is disallowed as a lexically bound name");}if(this.strict&&this.reservedWordsStrictBind.test(expr.name)){this.raiseRecoverable(expr.start,(bindingType?"Binding ":"Assigning to ")+expr.name+" in strict mode");}if(checkClashes){if(has(checkClashes,expr.name)){this.raiseRecoverable(expr.start,"Argument name clash");}checkClashes[expr.name]=true;}if(bindingType!==BIND_NONE&&bindingType!==BIND_OUTSIDE){this.declareName(expr.name,bindingType,expr.start);}break;case"MemberExpression":if(bindingType){this.raiseRecoverable(expr.start,"Binding member expression");}break;case"ObjectPattern":for(var i=0,list=expr.properties;i<list.length;i+=1){var prop=list[i];this.checkLVal(prop,bindingType,checkClashes);}break;case"Property":this.checkLVal(expr.value,bindingType,checkClashes);break;case"ArrayPattern":for(var i$1=0,list$1=expr.elements;i$1<list$1.length;i$1+=1){var elem=list$1[i$1];if(elem){this.checkLVal(elem,bindingType,checkClashes);}}break;case"AssignmentPattern":this.checkLVal(expr.left,bindingType,checkClashes);break;case"RestElement":this.checkLVal(expr.argument,bindingType,checkClashes);break;case"ParenthesizedExpression":this.checkLVal(expr.expression,bindingType,checkClashes);break;default:this.raise(expr.start,(bindingType?"Binding":"Assigning to")+" rvalue");}};var pp$3=Parser.prototype;pp$3.checkPropClash=function(prop,propHash,refDestructuringErrors){if(this.options.ecmaVersion>=9&&prop.type==="SpreadElement"){return;}if(this.options.ecmaVersion>=6&&(prop.computed||prop.method||prop.shorthand)){return;}var key=prop.key;var name;switch(key.type){case"Identifier":name=key.name;break;case"Literal":name=String(key.value);break;default:return;}var kind=prop.kind;if(this.options.ecmaVersion>=6){if(name==="__proto__"&&kind==="init"){if(propHash.proto){if(refDestructuringErrors){if(refDestructuringErrors.doubleProto<0){refDestructuringErrors.doubleProto=key.start;}}else{this.raiseRecoverable(key.start,"Redefinition of __proto__ property");}}propHash.proto=true;}return;}name="$"+name;var other=propHash[name];if(other){var redefinition;if(kind==="init"){redefinition=this.strict&&other.init||other.get||other.set;}else{redefinition=other.init||other[kind];}if(redefinition){this.raiseRecoverable(key.start,"Redefinition of property");}}else{other=propHash[name]={init:false,get:false,set:false};}other[kind]=true;};pp$3.parseExpression=function(noIn,refDestructuringErrors){var startPos=this.start,startLoc=this.startLoc;var expr=this.parseMaybeAssign(noIn,refDestructuringErrors);if(this.type===types.comma){var node=this.startNodeAt(startPos,startLoc);node.expressions=[expr];while(this.eat(types.comma)){node.expressions.push(this.parseMaybeAssign(noIn,refDestructuringErrors));}return this.finishNode(node,"SequenceExpression");}return expr;};pp$3.parseMaybeAssign=function(noIn,refDestructuringErrors,afterLeftParse){if(this.isContextual("yield")){if(this.inGenerator){return this.parseYield(noIn);}else{this.exprAllowed=false;}}var ownDestructuringErrors=false,oldParenAssign=-1,oldTrailingComma=-1;if(refDestructuringErrors){oldParenAssign=refDestructuringErrors.parenthesizedAssign;oldTrailingComma=refDestructuringErrors.trailingComma;refDestructuringErrors.parenthesizedAssign=refDestructuringErrors.trailingComma=-1;}else{refDestructuringErrors=new DestructuringErrors();ownDestructuringErrors=true;}var startPos=this.start,startLoc=this.startLoc;if(this.type===types.parenL||this.type===types.name){this.potentialArrowAt=this.start;}var left=this.parseMaybeConditional(noIn,refDestructuringErrors);if(afterLeftParse){left=afterLeftParse.call(this,left,startPos,startLoc);}if(this.type.isAssign){var node=this.startNodeAt(startPos,startLoc);node.operator=this.value;node.left=this.type===types.eq?this.toAssignable(left,false,refDestructuringErrors):left;if(!ownDestructuringErrors){refDestructuringErrors.parenthesizedAssign=refDestructuringErrors.trailingComma=refDestructuringErrors.doubleProto=-1;}if(refDestructuringErrors.shorthandAssign>=node.left.start){refDestructuringErrors.shorthandAssign=-1;}this.checkLVal(left);this.next();node.right=this.parseMaybeAssign(noIn);return this.finishNode(node,"AssignmentExpression");}else{if(ownDestructuringErrors){this.checkExpressionErrors(refDestructuringErrors,true);}}if(oldParenAssign>-1){refDestructuringErrors.parenthesizedAssign=oldParenAssign;}if(oldTrailingComma>-1){refDestructuringErrors.trailingComma=oldTrailingComma;}return left;};pp$3.parseMaybeConditional=function(noIn,refDestructuringErrors){var startPos=this.start,startLoc=this.startLoc;var expr=this.parseExprOps(noIn,refDestructuringErrors);if(this.checkExpressionErrors(refDestructuringErrors)){return expr;}if(this.eat(types.question)){var node=this.startNodeAt(startPos,startLoc);node.test=expr;node.consequent=this.parseMaybeAssign();this.expect(types.colon);node.alternate=this.parseMaybeAssign(noIn);return this.finishNode(node,"ConditionalExpression");}return expr;};pp$3.parseExprOps=function(noIn,refDestructuringErrors){var startPos=this.start,startLoc=this.startLoc;var expr=this.parseMaybeUnary(refDestructuringErrors,false);if(this.checkExpressionErrors(refDestructuringErrors)){return expr;}return expr.start===startPos&&expr.type==="ArrowFunctionExpression"?expr:this.parseExprOp(expr,startPos,startLoc,-1,noIn);};pp$3.parseExprOp=function(left,leftStartPos,leftStartLoc,minPrec,noIn){var prec=this.type.binop;if(prec!=null&&(!noIn||this.type!==types._in)){if(prec>minPrec){var logical=this.type===types.logicalOR||this.type===types.logicalAND;var op=this.value;this.next();var startPos=this.start,startLoc=this.startLoc;var right=this.parseExprOp(this.parseMaybeUnary(null,false),startPos,startLoc,prec,noIn);var node=this.buildBinary(leftStartPos,leftStartLoc,left,right,op,logical);return this.parseExprOp(node,leftStartPos,leftStartLoc,minPrec,noIn);}}return left;};pp$3.buildBinary=function(startPos,startLoc,left,right,op,logical){var node=this.startNodeAt(startPos,startLoc);node.left=left;node.operator=op;node.right=right;return this.finishNode(node,logical?"LogicalExpression":"BinaryExpression");};pp$3.parseMaybeUnary=function(refDestructuringErrors,sawUnary){var startPos=this.start,startLoc=this.startLoc,expr;if(this.isContextual("await")&&(this.inAsync||!this.inFunction&&this.options.allowAwaitOutsideFunction)){expr=this.parseAwait();sawUnary=true;}else if(this.type.prefix){var node=this.startNode(),update=this.type===types.incDec;node.operator=this.value;node.prefix=true;this.next();node.argument=this.parseMaybeUnary(null,true);this.checkExpressionErrors(refDestructuringErrors,true);if(update){this.checkLVal(node.argument);}else if(this.strict&&node.operator==="delete"&&node.argument.type==="Identifier"){this.raiseRecoverable(node.start,"Deleting local variable in strict mode");}else{sawUnary=true;}expr=this.finishNode(node,update?"UpdateExpression":"UnaryExpression");}else{expr=this.parseExprSubscripts(refDestructuringErrors);if(this.checkExpressionErrors(refDestructuringErrors)){return expr;}while(this.type.postfix&&!this.canInsertSemicolon()){var node$1=this.startNodeAt(startPos,startLoc);node$1.operator=this.value;node$1.prefix=false;node$1.argument=expr;this.checkLVal(expr);this.next();expr=this.finishNode(node$1,"UpdateExpression");}}if(!sawUnary&&this.eat(types.starstar)){return this.buildBinary(startPos,startLoc,expr,this.parseMaybeUnary(null,false),"**",false);}else{return expr;}};pp$3.parseExprSubscripts=function(refDestructuringErrors){var startPos=this.start,startLoc=this.startLoc;var expr=this.parseExprAtom(refDestructuringErrors);if(expr.type==="ArrowFunctionExpression"&&this.input.slice(this.lastTokStart,this.lastTokEnd)!==")"){return expr;}var result=this.parseSubscripts(expr,startPos,startLoc);if(refDestructuringErrors&&result.type==="MemberExpression"){if(refDestructuringErrors.parenthesizedAssign>=result.start){refDestructuringErrors.parenthesizedAssign=-1;}if(refDestructuringErrors.parenthesizedBind>=result.start){refDestructuringErrors.parenthesizedBind=-1;}}return result;};pp$3.parseSubscripts=function(base,startPos,startLoc,noCalls){var maybeAsyncArrow=this.options.ecmaVersion>=8&&base.type==="Identifier"&&base.name==="async"&&this.lastTokEnd===base.end&&!this.canInsertSemicolon()&&this.input.slice(base.start,base.end)==="async";while(true){var element=this.parseSubscript(base,startPos,startLoc,noCalls,maybeAsyncArrow);if(element===base||element.type==="ArrowFunctionExpression"){return element;}base=element;}};pp$3.parseSubscript=function(base,startPos,startLoc,noCalls,maybeAsyncArrow){var computed=this.eat(types.bracketL);if(computed||this.eat(types.dot)){var node=this.startNodeAt(startPos,startLoc);node.object=base;node.property=computed?this.parseExpression():this.parseIdent(this.options.allowReserved!=="never");node.computed=!!computed;if(computed){this.expect(types.bracketR);}base=this.finishNode(node,"MemberExpression");}else if(!noCalls&&this.eat(types.parenL)){var refDestructuringErrors=new DestructuringErrors(),oldYieldPos=this.yieldPos,oldAwaitPos=this.awaitPos,oldAwaitIdentPos=this.awaitIdentPos;this.yieldPos=0;this.awaitPos=0;this.awaitIdentPos=0;var exprList=this.parseExprList(types.parenR,this.options.ecmaVersion>=8,false,refDestructuringErrors);if(maybeAsyncArrow&&!this.canInsertSemicolon()&&this.eat(types.arrow)){this.checkPatternErrors(refDestructuringErrors,false);this.checkYieldAwaitInDefaultParams();if(this.awaitIdentPos>0){this.raise(this.awaitIdentPos,"Cannot use 'await' as identifier inside an async function");}this.yieldPos=oldYieldPos;this.awaitPos=oldAwaitPos;this.awaitIdentPos=oldAwaitIdentPos;return this.parseArrowExpression(this.startNodeAt(startPos,startLoc),exprList,true);}this.checkExpressionErrors(refDestructuringErrors,true);this.yieldPos=oldYieldPos||this.yieldPos;this.awaitPos=oldAwaitPos||this.awaitPos;this.awaitIdentPos=oldAwaitIdentPos||this.awaitIdentPos;var node$1=this.startNodeAt(startPos,startLoc);node$1.callee=base;node$1.arguments=exprList;base=this.finishNode(node$1,"CallExpression");}else if(this.type===types.backQuote){var node$2=this.startNodeAt(startPos,startLoc);node$2.tag=base;node$2.quasi=this.parseTemplate({isTagged:true});base=this.finishNode(node$2,"TaggedTemplateExpression");}return base;};pp$3.parseExprAtom=function(refDestructuringErrors){if(this.type===types.slash){this.readRegexp();}var node,canBeArrow=this.potentialArrowAt===this.start;switch(this.type){case types._super:if(!this.allowSuper){this.raise(this.start,"'super' keyword outside a method");}node=this.startNode();this.next();if(this.type===types.parenL&&!this.allowDirectSuper){this.raise(node.start,"super() call outside constructor of a subclass");}if(this.type!==types.dot&&this.type!==types.bracketL&&this.type!==types.parenL){this.unexpected();}return this.finishNode(node,"Super");case types._this:node=this.startNode();this.next();return this.finishNode(node,"ThisExpression");case types.name:var startPos=this.start,startLoc=this.startLoc,containsEsc=this.containsEsc;var id=this.parseIdent(false);if(this.options.ecmaVersion>=8&&!containsEsc&&id.name==="async"&&!this.canInsertSemicolon()&&this.eat(types._function)){return this.parseFunction(this.startNodeAt(startPos,startLoc),0,false,true);}if(canBeArrow&&!this.canInsertSemicolon()){if(this.eat(types.arrow)){return this.parseArrowExpression(this.startNodeAt(startPos,startLoc),[id],false);}if(this.options.ecmaVersion>=8&&id.name==="async"&&this.type===types.name&&!containsEsc){id=this.parseIdent(false);if(this.canInsertSemicolon()||!this.eat(types.arrow)){this.unexpected();}return this.parseArrowExpression(this.startNodeAt(startPos,startLoc),[id],true);}}return id;case types.regexp:var value=this.value;node=this.parseLiteral(value.value);node.regex={pattern:value.pattern,flags:value.flags};return node;case types.num:case types.string:return this.parseLiteral(this.value);case types._null:case types._true:case types._false:node=this.startNode();node.value=this.type===types._null?null:this.type===types._true;node.raw=this.type.keyword;this.next();return this.finishNode(node,"Literal");case types.parenL:var start=this.start,expr=this.parseParenAndDistinguishExpression(canBeArrow);if(refDestructuringErrors){if(refDestructuringErrors.parenthesizedAssign<0&&!this.isSimpleAssignTarget(expr)){refDestructuringErrors.parenthesizedAssign=start;}if(refDestructuringErrors.parenthesizedBind<0){refDestructuringErrors.parenthesizedBind=start;}}return expr;case types.bracketL:node=this.startNode();this.next();node.elements=this.parseExprList(types.bracketR,true,true,refDestructuringErrors);return this.finishNode(node,"ArrayExpression");case types.braceL:return this.parseObj(false,refDestructuringErrors);case types._function:node=this.startNode();this.next();return this.parseFunction(node,0);case types._class:return this.parseClass(this.startNode(),false);case types._new:return this.parseNew();case types.backQuote:return this.parseTemplate();case types._import:if(this.options.ecmaVersion>=11){return this.parseExprImport();}else{return this.unexpected();}default:this.unexpected();}};pp$3.parseExprImport=function(){var node=this.startNode();this.next();switch(this.type){case types.parenL:return this.parseDynamicImport(node);default:this.unexpected();}};pp$3.parseDynamicImport=function(node){this.next();node.source=this.parseMaybeAssign();if(!this.eat(types.parenR)){var errorPos=this.start;if(this.eat(types.comma)&&this.eat(types.parenR)){this.raiseRecoverable(errorPos,"Trailing comma is not allowed in import()");}else{this.unexpected(errorPos);}}return this.finishNode(node,"ImportExpression");};pp$3.parseLiteral=function(value){var node=this.startNode();node.value=value;node.raw=this.input.slice(this.start,this.end);if(node.raw.charCodeAt(node.raw.length-1)===110){node.bigint=node.raw.slice(0,-1);}this.next();return this.finishNode(node,"Literal");};pp$3.parseParenExpression=function(){this.expect(types.parenL);var val=this.parseExpression();this.expect(types.parenR);return val;};pp$3.parseParenAndDistinguishExpression=function(canBeArrow){var startPos=this.start,startLoc=this.startLoc,val,allowTrailingComma=this.options.ecmaVersion>=8;if(this.options.ecmaVersion>=6){this.next();var innerStartPos=this.start,innerStartLoc=this.startLoc;var exprList=[],first=true,lastIsComma=false;var refDestructuringErrors=new DestructuringErrors(),oldYieldPos=this.yieldPos,oldAwaitPos=this.awaitPos,spreadStart;this.yieldPos=0;this.awaitPos=0;while(this.type!==types.parenR){first?first=false:this.expect(types.comma);if(allowTrailingComma&&this.afterTrailingComma(types.parenR,true)){lastIsComma=true;break;}else if(this.type===types.ellipsis){spreadStart=this.start;exprList.push(this.parseParenItem(this.parseRestBinding()));if(this.type===types.comma){this.raise(this.start,"Comma is not permitted after the rest element");}break;}else{exprList.push(this.parseMaybeAssign(false,refDestructuringErrors,this.parseParenItem));}}var innerEndPos=this.start,innerEndLoc=this.startLoc;this.expect(types.parenR);if(canBeArrow&&!this.canInsertSemicolon()&&this.eat(types.arrow)){this.checkPatternErrors(refDestructuringErrors,false);this.checkYieldAwaitInDefaultParams();this.yieldPos=oldYieldPos;this.awaitPos=oldAwaitPos;return this.parseParenArrowList(startPos,startLoc,exprList);}if(!exprList.length||lastIsComma){this.unexpected(this.lastTokStart);}if(spreadStart){this.unexpected(spreadStart);}this.checkExpressionErrors(refDestructuringErrors,true);this.yieldPos=oldYieldPos||this.yieldPos;this.awaitPos=oldAwaitPos||this.awaitPos;if(exprList.length>1){val=this.startNodeAt(innerStartPos,innerStartLoc);val.expressions=exprList;this.finishNodeAt(val,"SequenceExpression",innerEndPos,innerEndLoc);}else{val=exprList[0];}}else{val=this.parseParenExpression();}if(this.options.preserveParens){var par=this.startNodeAt(startPos,startLoc);par.expression=val;return this.finishNode(par,"ParenthesizedExpression");}else{return val;}};pp$3.parseParenItem=function(item){return item;};pp$3.parseParenArrowList=function(startPos,startLoc,exprList){return this.parseArrowExpression(this.startNodeAt(startPos,startLoc),exprList);};var empty$1=[];pp$3.parseNew=function(){if(this.containsEsc){this.raiseRecoverable(this.start,"Escape sequence in keyword new");}var node=this.startNode();var meta=this.parseIdent(true);if(this.options.ecmaVersion>=6&&this.eat(types.dot)){node.meta=meta;var containsEsc=this.containsEsc;node.property=this.parseIdent(true);if(node.property.name!=="target"||containsEsc){this.raiseRecoverable(node.property.start,"The only valid meta property for new is new.target");}if(!this.inNonArrowFunction()){this.raiseRecoverable(node.start,"new.target can only be used in functions");}return this.finishNode(node,"MetaProperty");}var startPos=this.start,startLoc=this.startLoc,isImport=this.type===types._import;node.callee=this.parseSubscripts(this.parseExprAtom(),startPos,startLoc,true);if(isImport&&node.callee.type==="ImportExpression"){this.raise(startPos,"Cannot use new with import()");}if(this.eat(types.parenL)){node.arguments=this.parseExprList(types.parenR,this.options.ecmaVersion>=8,false);}else{node.arguments=empty$1;}return this.finishNode(node,"NewExpression");};pp$3.parseTemplateElement=function(ref){var isTagged=ref.isTagged;var elem=this.startNode();if(this.type===types.invalidTemplate){if(!isTagged){this.raiseRecoverable(this.start,"Bad escape sequence in untagged template literal");}elem.value={raw:this.value,cooked:null};}else{elem.value={raw:this.input.slice(this.start,this.end).replace(/\r\n?/g,"\n"),cooked:this.value};}this.next();elem.tail=this.type===types.backQuote;return this.finishNode(elem,"TemplateElement");};pp$3.parseTemplate=function(ref){if(ref===void 0)ref={};var isTagged=ref.isTagged;if(isTagged===void 0)isTagged=false;var node=this.startNode();this.next();node.expressions=[];var curElt=this.parseTemplateElement({isTagged:isTagged});node.quasis=[curElt];while(!curElt.tail){if(this.type===types.eof){this.raise(this.pos,"Unterminated template literal");}this.expect(types.dollarBraceL);node.expressions.push(this.parseExpression());this.expect(types.braceR);node.quasis.push(curElt=this.parseTemplateElement({isTagged:isTagged}));}this.next();return this.finishNode(node,"TemplateLiteral");};pp$3.isAsyncProp=function(prop){return!prop.computed&&prop.key.type==="Identifier"&&prop.key.name==="async"&&(this.type===types.name||this.type===types.num||this.type===types.string||this.type===types.bracketL||this.type.keyword||this.options.ecmaVersion>=9&&this.type===types.star)&&!lineBreak.test(this.input.slice(this.lastTokEnd,this.start));};pp$3.parseObj=function(isPattern,refDestructuringErrors){var node=this.startNode(),first=true,propHash={};node.properties=[];this.next();while(!this.eat(types.braceR)){if(!first){this.expect(types.comma);if(this.options.ecmaVersion>=5&&this.afterTrailingComma(types.braceR)){break;}}else{first=false;}var prop=this.parseProperty(isPattern,refDestructuringErrors);if(!isPattern){this.checkPropClash(prop,propHash,refDestructuringErrors);}node.properties.push(prop);}return this.finishNode(node,isPattern?"ObjectPattern":"ObjectExpression");};pp$3.parseProperty=function(isPattern,refDestructuringErrors){var prop=this.startNode(),isGenerator,isAsync,startPos,startLoc;if(this.options.ecmaVersion>=9&&this.eat(types.ellipsis)){if(isPattern){prop.argument=this.parseIdent(false);if(this.type===types.comma){this.raise(this.start,"Comma is not permitted after the rest element");}return this.finishNode(prop,"RestElement");}if(this.type===types.parenL&&refDestructuringErrors){if(refDestructuringErrors.parenthesizedAssign<0){refDestructuringErrors.parenthesizedAssign=this.start;}if(refDestructuringErrors.parenthesizedBind<0){refDestructuringErrors.parenthesizedBind=this.start;}}prop.argument=this.parseMaybeAssign(false,refDestructuringErrors);if(this.type===types.comma&&refDestructuringErrors&&refDestructuringErrors.trailingComma<0){refDestructuringErrors.trailingComma=this.start;}return this.finishNode(prop,"SpreadElement");}if(this.options.ecmaVersion>=6){prop.method=false;prop.shorthand=false;if(isPattern||refDestructuringErrors){startPos=this.start;startLoc=this.startLoc;}if(!isPattern){isGenerator=this.eat(types.star);}}var containsEsc=this.containsEsc;this.parsePropertyName(prop);if(!isPattern&&!containsEsc&&this.options.ecmaVersion>=8&&!isGenerator&&this.isAsyncProp(prop)){isAsync=true;isGenerator=this.options.ecmaVersion>=9&&this.eat(types.star);this.parsePropertyName(prop,refDestructuringErrors);}else{isAsync=false;}this.parsePropertyValue(prop,isPattern,isGenerator,isAsync,startPos,startLoc,refDestructuringErrors,containsEsc);return this.finishNode(prop,"Property");};pp$3.parsePropertyValue=function(prop,isPattern,isGenerator,isAsync,startPos,startLoc,refDestructuringErrors,containsEsc){if((isGenerator||isAsync)&&this.type===types.colon){this.unexpected();}if(this.eat(types.colon)){prop.value=isPattern?this.parseMaybeDefault(this.start,this.startLoc):this.parseMaybeAssign(false,refDestructuringErrors);prop.kind="init";}else if(this.options.ecmaVersion>=6&&this.type===types.parenL){if(isPattern){this.unexpected();}prop.kind="init";prop.method=true;prop.value=this.parseMethod(isGenerator,isAsync);}else if(!isPattern&&!containsEsc&&this.options.ecmaVersion>=5&&!prop.computed&&prop.key.type==="Identifier"&&(prop.key.name==="get"||prop.key.name==="set")&&this.type!==types.comma&&this.type!==types.braceR){if(isGenerator||isAsync){this.unexpected();}prop.kind=prop.key.name;this.parsePropertyName(prop);prop.value=this.parseMethod(false);var paramCount=prop.kind==="get"?0:1;if(prop.value.params.length!==paramCount){var start=prop.value.start;if(prop.kind==="get"){this.raiseRecoverable(start,"getter should have no params");}else{this.raiseRecoverable(start,"setter should have exactly one param");}}else{if(prop.kind==="set"&&prop.value.params[0].type==="RestElement"){this.raiseRecoverable(prop.value.params[0].start,"Setter cannot use rest params");}}}else if(this.options.ecmaVersion>=6&&!prop.computed&&prop.key.type==="Identifier"){if(isGenerator||isAsync){this.unexpected();}this.checkUnreserved(prop.key);if(prop.key.name==="await"&&!this.awaitIdentPos){this.awaitIdentPos=startPos;}prop.kind="init";if(isPattern){prop.value=this.parseMaybeDefault(startPos,startLoc,prop.key);}else if(this.type===types.eq&&refDestructuringErrors){if(refDestructuringErrors.shorthandAssign<0){refDestructuringErrors.shorthandAssign=this.start;}prop.value=this.parseMaybeDefault(startPos,startLoc,prop.key);}else{prop.value=prop.key;}prop.shorthand=true;}else{this.unexpected();}};pp$3.parsePropertyName=function(prop){if(this.options.ecmaVersion>=6){if(this.eat(types.bracketL)){prop.computed=true;prop.key=this.parseMaybeAssign();this.expect(types.bracketR);return prop.key;}else{prop.computed=false;}}return prop.key=this.type===types.num||this.type===types.string?this.parseExprAtom():this.parseIdent(this.options.allowReserved!=="never");};pp$3.initFunction=function(node){node.id=null;if(this.options.ecmaVersion>=6){node.generator=node.expression=false;}if(this.options.ecmaVersion>=8){node.async=false;}};pp$3.parseMethod=function(isGenerator,isAsync,allowDirectSuper){var node=this.startNode(),oldYieldPos=this.yieldPos,oldAwaitPos=this.awaitPos,oldAwaitIdentPos=this.awaitIdentPos;this.initFunction(node);if(this.options.ecmaVersion>=6){node.generator=isGenerator;}if(this.options.ecmaVersion>=8){node.async=!!isAsync;}this.yieldPos=0;this.awaitPos=0;this.awaitIdentPos=0;this.enterScope(functionFlags(isAsync,node.generator)|SCOPE_SUPER|(allowDirectSuper?SCOPE_DIRECT_SUPER:0));this.expect(types.parenL);node.params=this.parseBindingList(types.parenR,false,this.options.ecmaVersion>=8);this.checkYieldAwaitInDefaultParams();this.parseFunctionBody(node,false,true);this.yieldPos=oldYieldPos;this.awaitPos=oldAwaitPos;this.awaitIdentPos=oldAwaitIdentPos;return this.finishNode(node,"FunctionExpression");};pp$3.parseArrowExpression=function(node,params,isAsync){var oldYieldPos=this.yieldPos,oldAwaitPos=this.awaitPos,oldAwaitIdentPos=this.awaitIdentPos;this.enterScope(functionFlags(isAsync,false)|SCOPE_ARROW);this.initFunction(node);if(this.options.ecmaVersion>=8){node.async=!!isAsync;}this.yieldPos=0;this.awaitPos=0;this.awaitIdentPos=0;node.params=this.toAssignableList(params,true);this.parseFunctionBody(node,true,false);this.yieldPos=oldYieldPos;this.awaitPos=oldAwaitPos;this.awaitIdentPos=oldAwaitIdentPos;return this.finishNode(node,"ArrowFunctionExpression");};pp$3.parseFunctionBody=function(node,isArrowFunction,isMethod){var isExpression=isArrowFunction&&this.type!==types.braceL;var oldStrict=this.strict,useStrict=false;if(isExpression){node.body=this.parseMaybeAssign();node.expression=true;this.checkParams(node,false);}else{var nonSimple=this.options.ecmaVersion>=7&&!this.isSimpleParamList(node.params);if(!oldStrict||nonSimple){useStrict=this.strictDirective(this.end);if(useStrict&&nonSimple){this.raiseRecoverable(node.start,"Illegal 'use strict' directive in function with non-simple parameter list");}}var oldLabels=this.labels;this.labels=[];if(useStrict){this.strict=true;}this.checkParams(node,!oldStrict&&!useStrict&&!isArrowFunction&&!isMethod&&this.isSimpleParamList(node.params));node.body=this.parseBlock(false);node.expression=false;this.adaptDirectivePrologue(node.body.body);this.labels=oldLabels;}this.exitScope();if(this.strict&&node.id){this.checkLVal(node.id,BIND_OUTSIDE);}this.strict=oldStrict;};pp$3.isSimpleParamList=function(params){for(var i=0,list=params;i<list.length;i+=1){var param=list[i];if(param.type!=="Identifier"){return false;}}return true;};pp$3.checkParams=function(node,allowDuplicates){var nameHash={};for(var i=0,list=node.params;i<list.length;i+=1){var param=list[i];this.checkLVal(param,BIND_VAR,allowDuplicates?null:nameHash);}};pp$3.parseExprList=function(close,allowTrailingComma,allowEmpty,refDestructuringErrors){var elts=[],first=true;while(!this.eat(close)){if(!first){this.expect(types.comma);if(allowTrailingComma&&this.afterTrailingComma(close)){break;}}else{first=false;}var elt=void 0;if(allowEmpty&&this.type===types.comma){elt=null;}else if(this.type===types.ellipsis){elt=this.parseSpread(refDestructuringErrors);if(refDestructuringErrors&&this.type===types.comma&&refDestructuringErrors.trailingComma<0){refDestructuringErrors.trailingComma=this.start;}}else{elt=this.parseMaybeAssign(false,refDestructuringErrors);}elts.push(elt);}return elts;};pp$3.checkUnreserved=function(ref){var start=ref.start;var end=ref.end;var name=ref.name;if(this.inGenerator&&name==="yield"){this.raiseRecoverable(start,"Cannot use 'yield' as identifier inside a generator");}if(this.inAsync&&name==="await"){this.raiseRecoverable(start,"Cannot use 'await' as identifier inside an async function");}if(this.keywords.test(name)){this.raise(start,"Unexpected keyword '"+name+"'");}if(this.options.ecmaVersion<6&&this.input.slice(start,end).indexOf("\\")!==-1){return;}var re=this.strict?this.reservedWordsStrict:this.reservedWords;if(re.test(name)){if(!this.inAsync&&name==="await"){this.raiseRecoverable(start,"Cannot use keyword 'await' outside an async function");}this.raiseRecoverable(start,"The keyword '"+name+"' is reserved");}};pp$3.parseIdent=function(liberal,isBinding){var node=this.startNode();if(this.type===types.name){node.name=this.value;}else if(this.type.keyword){node.name=this.type.keyword;if((node.name==="class"||node.name==="function")&&(this.lastTokEnd!==this.lastTokStart+1||this.input.charCodeAt(this.lastTokStart)!==46)){this.context.pop();}}else{this.unexpected();}this.next(!!liberal);this.finishNode(node,"Identifier");if(!liberal){this.checkUnreserved(node);if(node.name==="await"&&!this.awaitIdentPos){this.awaitIdentPos=node.start;}}return node;};pp$3.parseYield=function(noIn){if(!this.yieldPos){this.yieldPos=this.start;}var node=this.startNode();this.next();if(this.type===types.semi||this.canInsertSemicolon()||this.type!==types.star&&!this.type.startsExpr){node.delegate=false;node.argument=null;}else{node.delegate=this.eat(types.star);node.argument=this.parseMaybeAssign(noIn);}return this.finishNode(node,"YieldExpression");};pp$3.parseAwait=function(){if(!this.awaitPos){this.awaitPos=this.start;}var node=this.startNode();this.next();node.argument=this.parseMaybeUnary(null,false);return this.finishNode(node,"AwaitExpression");};var pp$4=Parser.prototype;pp$4.raise=function(pos,message){var loc=getLineInfo(this.input,pos);message+=" ("+loc.line+":"+loc.column+")";var err=new SyntaxError(message);err.pos=pos;err.loc=loc;err.raisedAt=this.pos;throw err;};pp$4.raiseRecoverable=pp$4.raise;pp$4.curPosition=function(){if(this.options.locations){return new Position(this.curLine,this.pos-this.lineStart);}};var pp$5=Parser.prototype;var Scope=function Scope(flags){this.flags=flags;this["var"]=[];this.lexical=[];this.functions=[];};pp$5.enterScope=function(flags){this.scopeStack.push(new Scope(flags));};pp$5.exitScope=function(){this.scopeStack.pop();};pp$5.treatFunctionsAsVarInScope=function(scope){return scope.flags&SCOPE_FUNCTION||!this.inModule&&scope.flags&SCOPE_TOP;};pp$5.declareName=function(name,bindingType,pos){var redeclared=false;if(bindingType===BIND_LEXICAL){var scope=this.currentScope();redeclared=scope.lexical.indexOf(name)>-1||scope.functions.indexOf(name)>-1||scope["var"].indexOf(name)>-1;scope.lexical.push(name);if(this.inModule&&scope.flags&SCOPE_TOP){delete this.undefinedExports[name];}}else if(bindingType===BIND_SIMPLE_CATCH){var scope$1=this.currentScope();scope$1.lexical.push(name);}else if(bindingType===BIND_FUNCTION){var scope$2=this.currentScope();if(this.treatFunctionsAsVar){redeclared=scope$2.lexical.indexOf(name)>-1;}else{redeclared=scope$2.lexical.indexOf(name)>-1||scope$2["var"].indexOf(name)>-1;}scope$2.functions.push(name);}else{for(var i=this.scopeStack.length-1;i>=0;--i){var scope$3=this.scopeStack[i];if(scope$3.lexical.indexOf(name)>-1&&!(scope$3.flags&SCOPE_SIMPLE_CATCH&&scope$3.lexical[0]===name)||!this.treatFunctionsAsVarInScope(scope$3)&&scope$3.functions.indexOf(name)>-1){redeclared=true;break;}scope$3["var"].push(name);if(this.inModule&&scope$3.flags&SCOPE_TOP){delete this.undefinedExports[name];}if(scope$3.flags&SCOPE_VAR){break;}}}if(redeclared){this.raiseRecoverable(pos,"Identifier '"+name+"' has already been declared");}};pp$5.checkLocalExport=function(id){if(this.scopeStack[0].lexical.indexOf(id.name)===-1&&this.scopeStack[0]["var"].indexOf(id.name)===-1){this.undefinedExports[id.name]=id;}};pp$5.currentScope=function(){return this.scopeStack[this.scopeStack.length-1];};pp$5.currentVarScope=function(){for(var i=this.scopeStack.length-1;;i--){var scope=this.scopeStack[i];if(scope.flags&SCOPE_VAR){return scope;}}};pp$5.currentThisScope=function(){for(var i=this.scopeStack.length-1;;i--){var scope=this.scopeStack[i];if(scope.flags&SCOPE_VAR&&!(scope.flags&SCOPE_ARROW)){return scope;}}};var Node=function Node(parser,pos,loc){this.type="";this.start=pos;this.end=0;if(parser.options.locations){this.loc=new SourceLocation(parser,loc);}if(parser.options.directSourceFile){this.sourceFile=parser.options.directSourceFile;}if(parser.options.ranges){this.range=[pos,0];}};var pp$6=Parser.prototype;pp$6.startNode=function(){return new Node(this,this.start,this.startLoc);};pp$6.startNodeAt=function(pos,loc){return new Node(this,pos,loc);};function finishNodeAt(node,type,pos,loc){node.type=type;node.end=pos;if(this.options.locations){node.loc.end=loc;}if(this.options.ranges){node.range[1]=pos;}return node;}pp$6.finishNode=function(node,type){return finishNodeAt.call(this,node,type,this.lastTokEnd,this.lastTokEndLoc);};pp$6.finishNodeAt=function(node,type,pos,loc){return finishNodeAt.call(this,node,type,pos,loc);};var TokContext=function TokContext(token,isExpr,preserveSpace,override,generator){this.token=token;this.isExpr=!!isExpr;this.preserveSpace=!!preserveSpace;this.override=override;this.generator=!!generator;};var types$1={b_stat:new TokContext("{",false),b_expr:new TokContext("{",true),b_tmpl:new TokContext("${",false),p_stat:new TokContext("(",false),p_expr:new TokContext("(",true),q_tmpl:new TokContext("`",true,true,function(p){return p.tryReadTemplateToken();}),f_stat:new TokContext("function",false),f_expr:new TokContext("function",true),f_expr_gen:new TokContext("function",true,false,null,true),f_gen:new TokContext("function",false,false,null,true)};var pp$7=Parser.prototype;pp$7.initialContext=function(){return[types$1.b_stat];};pp$7.braceIsBlock=function(prevType){var parent=this.curContext();if(parent===types$1.f_expr||parent===types$1.f_stat){return true;}if(prevType===types.colon&&(parent===types$1.b_stat||parent===types$1.b_expr)){return!parent.isExpr;}if(prevType===types._return||prevType===types.name&&this.exprAllowed){return lineBreak.test(this.input.slice(this.lastTokEnd,this.start));}if(prevType===types._else||prevType===types.semi||prevType===types.eof||prevType===types.parenR||prevType===types.arrow){return true;}if(prevType===types.braceL){return parent===types$1.b_stat;}if(prevType===types._var||prevType===types._const||prevType===types.name){return false;}return!this.exprAllowed;};pp$7.inGeneratorContext=function(){for(var i=this.context.length-1;i>=1;i--){var context=this.context[i];if(context.token==="function"){return context.generator;}}return false;};pp$7.updateContext=function(prevType){var update,type=this.type;if(type.keyword&&prevType===types.dot){this.exprAllowed=false;}else if(update=type.updateContext){update.call(this,prevType);}else{this.exprAllowed=type.beforeExpr;}};types.parenR.updateContext=types.braceR.updateContext=function(){if(this.context.length===1){this.exprAllowed=true;return;}var out=this.context.pop();if(out===types$1.b_stat&&this.curContext().token==="function"){out=this.context.pop();}this.exprAllowed=!out.isExpr;};types.braceL.updateContext=function(prevType){this.context.push(this.braceIsBlock(prevType)?types$1.b_stat:types$1.b_expr);this.exprAllowed=true;};types.dollarBraceL.updateContext=function(){this.context.push(types$1.b_tmpl);this.exprAllowed=true;};types.parenL.updateContext=function(prevType){var statementParens=prevType===types._if||prevType===types._for||prevType===types._with||prevType===types._while;this.context.push(statementParens?types$1.p_stat:types$1.p_expr);this.exprAllowed=true;};types.incDec.updateContext=function(){};types._function.updateContext=types._class.updateContext=function(prevType){if(prevType.beforeExpr&&prevType!==types.semi&&prevType!==types._else&&!(prevType===types._return&&lineBreak.test(this.input.slice(this.lastTokEnd,this.start)))&&!((prevType===types.colon||prevType===types.braceL)&&this.curContext()===types$1.b_stat)){this.context.push(types$1.f_expr);}else{this.context.push(types$1.f_stat);}this.exprAllowed=false;};types.backQuote.updateContext=function(){if(this.curContext()===types$1.q_tmpl){this.context.pop();}else{this.context.push(types$1.q_tmpl);}this.exprAllowed=false;};types.star.updateContext=function(prevType){if(prevType===types._function){var index=this.context.length-1;if(this.context[index]===types$1.f_expr){this.context[index]=types$1.f_expr_gen;}else{this.context[index]=types$1.f_gen;}}this.exprAllowed=true;};types.name.updateContext=function(prevType){var allowed=false;if(this.options.ecmaVersion>=6&&prevType!==types.dot){if(this.value==="of"&&!this.exprAllowed||this.value==="yield"&&this.inGeneratorContext()){allowed=true;}}this.exprAllowed=allowed;};var ecma9BinaryProperties="ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";var ecma10BinaryProperties=ecma9BinaryProperties+" Extended_Pictographic";var ecma11BinaryProperties=ecma10BinaryProperties;var unicodeBinaryProperties={9:ecma9BinaryProperties,10:ecma10BinaryProperties,11:ecma11BinaryProperties};var unicodeGeneralCategoryValues="Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";var ecma9ScriptValues="Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";var ecma10ScriptValues=ecma9ScriptValues+" Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";var ecma11ScriptValues=ecma10ScriptValues+" Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";var unicodeScriptValues={9:ecma9ScriptValues,10:ecma10ScriptValues,11:ecma11ScriptValues};var data={};function buildUnicodeData(ecmaVersion){var d=data[ecmaVersion]={binary:wordsRegexp(unicodeBinaryProperties[ecmaVersion]+" "+unicodeGeneralCategoryValues),nonBinary:{General_Category:wordsRegexp(unicodeGeneralCategoryValues),Script:wordsRegexp(unicodeScriptValues[ecmaVersion])}};d.nonBinary.Script_Extensions=d.nonBinary.Script;d.nonBinary.gc=d.nonBinary.General_Category;d.nonBinary.sc=d.nonBinary.Script;d.nonBinary.scx=d.nonBinary.Script_Extensions;}buildUnicodeData(9);buildUnicodeData(10);buildUnicodeData(11);var pp$8=Parser.prototype;var RegExpValidationState=function RegExpValidationState(parser){this.parser=parser;this.validFlags="gim"+(parser.options.ecmaVersion>=6?"uy":"")+(parser.options.ecmaVersion>=9?"s":"");this.unicodeProperties=data[parser.options.ecmaVersion>=11?11:parser.options.ecmaVersion];this.source="";this.flags="";this.start=0;this.switchU=false;this.switchN=false;this.pos=0;this.lastIntValue=0;this.lastStringValue="";this.lastAssertionIsQuantifiable=false;this.numCapturingParens=0;this.maxBackReference=0;this.groupNames=[];this.backReferenceNames=[];};RegExpValidationState.prototype.reset=function reset(start,pattern,flags){var unicode=flags.indexOf("u")!==-1;this.start=start|0;this.source=pattern+"";this.flags=flags;this.switchU=unicode&&this.parser.options.ecmaVersion>=6;this.switchN=unicode&&this.parser.options.ecmaVersion>=9;};RegExpValidationState.prototype.raise=function raise(message){this.parser.raiseRecoverable(this.start,"Invalid regular expression: /"+this.source+"/: "+message);};RegExpValidationState.prototype.at=function at(i){var s=this.source;var l=s.length;if(i>=l){return-1;}var c=s.charCodeAt(i);if(!this.switchU||c<=0xD7FF||c>=0xE000||i+1>=l){return c;}var next=s.charCodeAt(i+1);return next>=0xDC00&&next<=0xDFFF?(c<<10)+next-0x35FDC00:c;};RegExpValidationState.prototype.nextIndex=function nextIndex(i){var s=this.source;var l=s.length;if(i>=l){return l;}var c=s.charCodeAt(i),next;if(!this.switchU||c<=0xD7FF||c>=0xE000||i+1>=l||(next=s.charCodeAt(i+1))<0xDC00||next>0xDFFF){return i+1;}return i+2;};RegExpValidationState.prototype.current=function current(){return this.at(this.pos);};RegExpValidationState.prototype.lookahead=function lookahead(){return this.at(this.nextIndex(this.pos));};RegExpValidationState.prototype.advance=function advance(){this.pos=this.nextIndex(this.pos);};RegExpValidationState.prototype.eat=function eat(ch){if(this.current()===ch){this.advance();return true;}return false;};function codePointToString(ch){if(ch<=0xFFFF){return String.fromCharCode(ch);}ch-=0x10000;return String.fromCharCode((ch>>10)+0xD800,(ch&0x03FF)+0xDC00);}pp$8.validateRegExpFlags=function(state){var validFlags=state.validFlags;var flags=state.flags;for(var i=0;i<flags.length;i++){var flag=flags.charAt(i);if(validFlags.indexOf(flag)===-1){this.raise(state.start,"Invalid regular expression flag");}if(flags.indexOf(flag,i+1)>-1){this.raise(state.start,"Duplicate regular expression flag");}}};pp$8.validateRegExpPattern=function(state){this.regexp_pattern(state);if(!state.switchN&&this.options.ecmaVersion>=9&&state.groupNames.length>0){state.switchN=true;this.regexp_pattern(state);}};pp$8.regexp_pattern=function(state){state.pos=0;state.lastIntValue=0;state.lastStringValue="";state.lastAssertionIsQuantifiable=false;state.numCapturingParens=0;state.maxBackReference=0;state.groupNames.length=0;state.backReferenceNames.length=0;this.regexp_disjunction(state);if(state.pos!==state.source.length){if(state.eat(0x29)){state.raise("Unmatched ')'");}if(state.eat(0x5D)||state.eat(0x7D)){state.raise("Lone quantifier brackets");}}if(state.maxBackReference>state.numCapturingParens){state.raise("Invalid escape");}for(var i=0,list=state.backReferenceNames;i<list.length;i+=1){var name=list[i];if(state.groupNames.indexOf(name)===-1){state.raise("Invalid named capture referenced");}}};pp$8.regexp_disjunction=function(state){this.regexp_alternative(state);while(state.eat(0x7C)){this.regexp_alternative(state);}if(this.regexp_eatQuantifier(state,true)){state.raise("Nothing to repeat");}if(state.eat(0x7B)){state.raise("Lone quantifier brackets");}};pp$8.regexp_alternative=function(state){while(state.pos<state.source.length&&this.regexp_eatTerm(state)){}};pp$8.regexp_eatTerm=function(state){if(this.regexp_eatAssertion(state)){if(state.lastAssertionIsQuantifiable&&this.regexp_eatQuantifier(state)){if(state.switchU){state.raise("Invalid quantifier");}}return true;}if(state.switchU?this.regexp_eatAtom(state):this.regexp_eatExtendedAtom(state)){this.regexp_eatQuantifier(state);return true;}return false;};pp$8.regexp_eatAssertion=function(state){var start=state.pos;state.lastAssertionIsQuantifiable=false;if(state.eat(0x5E)||state.eat(0x24)){return true;}if(state.eat(0x5C)){if(state.eat(0x42)||state.eat(0x62)){return true;}state.pos=start;}if(state.eat(0x28)&&state.eat(0x3F)){var lookbehind=false;if(this.options.ecmaVersion>=9){lookbehind=state.eat(0x3C);}if(state.eat(0x3D)||state.eat(0x21)){this.regexp_disjunction(state);if(!state.eat(0x29)){state.raise("Unterminated group");}state.lastAssertionIsQuantifiable=!lookbehind;return true;}}state.pos=start;return false;};pp$8.regexp_eatQuantifier=function(state,noError){if(noError===void 0)noError=false;if(this.regexp_eatQuantifierPrefix(state,noError)){state.eat(0x3F);return true;}return false;};pp$8.regexp_eatQuantifierPrefix=function(state,noError){return state.eat(0x2A)||state.eat(0x2B)||state.eat(0x3F)||this.regexp_eatBracedQuantifier(state,noError);};pp$8.regexp_eatBracedQuantifier=function(state,noError){var start=state.pos;if(state.eat(0x7B)){var min=0,max=-1;if(this.regexp_eatDecimalDigits(state)){min=state.lastIntValue;if(state.eat(0x2C)&&this.regexp_eatDecimalDigits(state)){max=state.lastIntValue;}if(state.eat(0x7D)){if(max!==-1&&max<min&&!noError){state.raise("numbers out of order in {} quantifier");}return true;}}if(state.switchU&&!noError){state.raise("Incomplete quantifier");}state.pos=start;}return false;};pp$8.regexp_eatAtom=function(state){return this.regexp_eatPatternCharacters(state)||state.eat(0x2E)||this.regexp_eatReverseSolidusAtomEscape(state)||this.regexp_eatCharacterClass(state)||this.regexp_eatUncapturingGroup(state)||this.regexp_eatCapturingGroup(state);};pp$8.regexp_eatReverseSolidusAtomEscape=function(state){var start=state.pos;if(state.eat(0x5C)){if(this.regexp_eatAtomEscape(state)){return true;}state.pos=start;}return false;};pp$8.regexp_eatUncapturingGroup=function(state){var start=state.pos;if(state.eat(0x28)){if(state.eat(0x3F)&&state.eat(0x3A)){this.regexp_disjunction(state);if(state.eat(0x29)){return true;}state.raise("Unterminated group");}state.pos=start;}return false;};pp$8.regexp_eatCapturingGroup=function(state){if(state.eat(0x28)){if(this.options.ecmaVersion>=9){this.regexp_groupSpecifier(state);}else if(state.current()===0x3F){state.raise("Invalid group");}this.regexp_disjunction(state);if(state.eat(0x29)){state.numCapturingParens+=1;return true;}state.raise("Unterminated group");}return false;};pp$8.regexp_eatExtendedAtom=function(state){return state.eat(0x2E)||this.regexp_eatReverseSolidusAtomEscape(state)||this.regexp_eatCharacterClass(state)||this.regexp_eatUncapturingGroup(state)||this.regexp_eatCapturingGroup(state)||this.regexp_eatInvalidBracedQuantifier(state)||this.regexp_eatExtendedPatternCharacter(state);};pp$8.regexp_eatInvalidBracedQuantifier=function(state){if(this.regexp_eatBracedQuantifier(state,true)){state.raise("Nothing to repeat");}return false;};pp$8.regexp_eatSyntaxCharacter=function(state){var ch=state.current();if(isSyntaxCharacter(ch)){state.lastIntValue=ch;state.advance();return true;}return false;};function isSyntaxCharacter(ch){return ch===0x24||ch>=0x28&&ch<=0x2B||ch===0x2E||ch===0x3F||ch>=0x5B&&ch<=0x5E||ch>=0x7B&&ch<=0x7D;}pp$8.regexp_eatPatternCharacters=function(state){var start=state.pos;var ch=0;while((ch=state.current())!==-1&&!isSyntaxCharacter(ch)){state.advance();}return state.pos!==start;};pp$8.regexp_eatExtendedPatternCharacter=function(state){var ch=state.current();if(ch!==-1&&ch!==0x24&&!(ch>=0x28&&ch<=0x2B)&&ch!==0x2E&&ch!==0x3F&&ch!==0x5B&&ch!==0x5E&&ch!==0x7C){state.advance();return true;}return false;};pp$8.regexp_groupSpecifier=function(state){if(state.eat(0x3F)){if(this.regexp_eatGroupName(state)){if(state.groupNames.indexOf(state.lastStringValue)!==-1){state.raise("Duplicate capture group name");}state.groupNames.push(state.lastStringValue);return;}state.raise("Invalid group");}};pp$8.regexp_eatGroupName=function(state){state.lastStringValue="";if(state.eat(0x3C)){if(this.regexp_eatRegExpIdentifierName(state)&&state.eat(0x3E)){return true;}state.raise("Invalid capture group name");}return false;};pp$8.regexp_eatRegExpIdentifierName=function(state){state.lastStringValue="";if(this.regexp_eatRegExpIdentifierStart(state)){state.lastStringValue+=codePointToString(state.lastIntValue);while(this.regexp_eatRegExpIdentifierPart(state)){state.lastStringValue+=codePointToString(state.lastIntValue);}return true;}return false;};pp$8.regexp_eatRegExpIdentifierStart=function(state){var start=state.pos;var ch=state.current();state.advance();if(ch===0x5C&&this.regexp_eatRegExpUnicodeEscapeSequence(state)){ch=state.lastIntValue;}if(isRegExpIdentifierStart(ch)){state.lastIntValue=ch;return true;}state.pos=start;return false;};function isRegExpIdentifierStart(ch){return isIdentifierStart(ch,true)||ch===0x24||ch===0x5F;}pp$8.regexp_eatRegExpIdentifierPart=function(state){var start=state.pos;var ch=state.current();state.advance();if(ch===0x5C&&this.regexp_eatRegExpUnicodeEscapeSequence(state)){ch=state.lastIntValue;}if(isRegExpIdentifierPart(ch)){state.lastIntValue=ch;return true;}state.pos=start;return false;};function isRegExpIdentifierPart(ch){return isIdentifierChar(ch,true)||ch===0x24||ch===0x5F||ch===0x200C||ch===0x200D;}pp$8.regexp_eatAtomEscape=function(state){if(this.regexp_eatBackReference(state)||this.regexp_eatCharacterClassEscape(state)||this.regexp_eatCharacterEscape(state)||state.switchN&&this.regexp_eatKGroupName(state)){return true;}if(state.switchU){if(state.current()===0x63){state.raise("Invalid unicode escape");}state.raise("Invalid escape");}return false;};pp$8.regexp_eatBackReference=function(state){var start=state.pos;if(this.regexp_eatDecimalEscape(state)){var n=state.lastIntValue;if(state.switchU){if(n>state.maxBackReference){state.maxBackReference=n;}return true;}if(n<=state.numCapturingParens){return true;}state.pos=start;}return false;};pp$8.regexp_eatKGroupName=function(state){if(state.eat(0x6B)){if(this.regexp_eatGroupName(state)){state.backReferenceNames.push(state.lastStringValue);return true;}state.raise("Invalid named reference");}return false;};pp$8.regexp_eatCharacterEscape=function(state){return this.regexp_eatControlEscape(state)||this.regexp_eatCControlLetter(state)||this.regexp_eatZero(state)||this.regexp_eatHexEscapeSequence(state)||this.regexp_eatRegExpUnicodeEscapeSequence(state)||!state.switchU&&this.regexp_eatLegacyOctalEscapeSequence(state)||this.regexp_eatIdentityEscape(state);};pp$8.regexp_eatCControlLetter=function(state){var start=state.pos;if(state.eat(0x63)){if(this.regexp_eatControlLetter(state)){return true;}state.pos=start;}return false;};pp$8.regexp_eatZero=function(state){if(state.current()===0x30&&!isDecimalDigit(state.lookahead())){state.lastIntValue=0;state.advance();return true;}return false;};pp$8.regexp_eatControlEscape=function(state){var ch=state.current();if(ch===0x74){state.lastIntValue=0x09;state.advance();return true;}if(ch===0x6E){state.lastIntValue=0x0A;state.advance();return true;}if(ch===0x76){state.lastIntValue=0x0B;state.advance();return true;}if(ch===0x66){state.lastIntValue=0x0C;state.advance();return true;}if(ch===0x72){state.lastIntValue=0x0D;state.advance();return true;}return false;};pp$8.regexp_eatControlLetter=function(state){var ch=state.current();if(isControlLetter(ch)){state.lastIntValue=ch%0x20;state.advance();return true;}return false;};function isControlLetter(ch){return ch>=0x41&&ch<=0x5A||ch>=0x61&&ch<=0x7A;}pp$8.regexp_eatRegExpUnicodeEscapeSequence=function(state){var start=state.pos;if(state.eat(0x75)){if(this.regexp_eatFixedHexDigits(state,4)){var lead=state.lastIntValue;if(state.switchU&&lead>=0xD800&&lead<=0xDBFF){var leadSurrogateEnd=state.pos;if(state.eat(0x5C)&&state.eat(0x75)&&this.regexp_eatFixedHexDigits(state,4)){var trail=state.lastIntValue;if(trail>=0xDC00&&trail<=0xDFFF){state.lastIntValue=(lead-0xD800)*0x400+(trail-0xDC00)+0x10000;return true;}}state.pos=leadSurrogateEnd;state.lastIntValue=lead;}return true;}if(state.switchU&&state.eat(0x7B)&&this.regexp_eatHexDigits(state)&&state.eat(0x7D)&&isValidUnicode(state.lastIntValue)){return true;}if(state.switchU){state.raise("Invalid unicode escape");}state.pos=start;}return false;};function isValidUnicode(ch){return ch>=0&&ch<=0x10FFFF;}pp$8.regexp_eatIdentityEscape=function(state){if(state.switchU){if(this.regexp_eatSyntaxCharacter(state)){return true;}if(state.eat(0x2F)){state.lastIntValue=0x2F;return true;}return false;}var ch=state.current();if(ch!==0x63&&(!state.switchN||ch!==0x6B)){state.lastIntValue=ch;state.advance();return true;}return false;};pp$8.regexp_eatDecimalEscape=function(state){state.lastIntValue=0;var ch=state.current();if(ch>=0x31&&ch<=0x39){do{state.lastIntValue=10*state.lastIntValue+(ch-0x30);state.advance();}while((ch=state.current())>=0x30&&ch<=0x39);return true;}return false;};pp$8.regexp_eatCharacterClassEscape=function(state){var ch=state.current();if(isCharacterClassEscape(ch)){state.lastIntValue=-1;state.advance();return true;}if(state.switchU&&this.options.ecmaVersion>=9&&(ch===0x50||ch===0x70)){state.lastIntValue=-1;state.advance();if(state.eat(0x7B)&&this.regexp_eatUnicodePropertyValueExpression(state)&&state.eat(0x7D)){return true;}state.raise("Invalid property name");}return false;};function isCharacterClassEscape(ch){return ch===0x64||ch===0x44||ch===0x73||ch===0x53||ch===0x77||ch===0x57;}pp$8.regexp_eatUnicodePropertyValueExpression=function(state){var start=state.pos;if(this.regexp_eatUnicodePropertyName(state)&&state.eat(0x3D)){var name=state.lastStringValue;if(this.regexp_eatUnicodePropertyValue(state)){var value=state.lastStringValue;this.regexp_validateUnicodePropertyNameAndValue(state,name,value);return true;}}state.pos=start;if(this.regexp_eatLoneUnicodePropertyNameOrValue(state)){var nameOrValue=state.lastStringValue;this.regexp_validateUnicodePropertyNameOrValue(state,nameOrValue);return true;}return false;};pp$8.regexp_validateUnicodePropertyNameAndValue=function(state,name,value){if(!has(state.unicodeProperties.nonBinary,name)){state.raise("Invalid property name");}if(!state.unicodeProperties.nonBinary[name].test(value)){state.raise("Invalid property value");}};pp$8.regexp_validateUnicodePropertyNameOrValue=function(state,nameOrValue){if(!state.unicodeProperties.binary.test(nameOrValue)){state.raise("Invalid property name");}};pp$8.regexp_eatUnicodePropertyName=function(state){var ch=0;state.lastStringValue="";while(isUnicodePropertyNameCharacter(ch=state.current())){state.lastStringValue+=codePointToString(ch);state.advance();}return state.lastStringValue!=="";};function isUnicodePropertyNameCharacter(ch){return isControlLetter(ch)||ch===0x5F;}pp$8.regexp_eatUnicodePropertyValue=function(state){var ch=0;state.lastStringValue="";while(isUnicodePropertyValueCharacter(ch=state.current())){state.lastStringValue+=codePointToString(ch);state.advance();}return state.lastStringValue!=="";};function isUnicodePropertyValueCharacter(ch){return isUnicodePropertyNameCharacter(ch)||isDecimalDigit(ch);}pp$8.regexp_eatLoneUnicodePropertyNameOrValue=function(state){return this.regexp_eatUnicodePropertyValue(state);};pp$8.regexp_eatCharacterClass=function(state){if(state.eat(0x5B)){state.eat(0x5E);this.regexp_classRanges(state);if(state.eat(0x5D)){return true;}state.raise("Unterminated character class");}return false;};pp$8.regexp_classRanges=function(state){while(this.regexp_eatClassAtom(state)){var left=state.lastIntValue;if(state.eat(0x2D)&&this.regexp_eatClassAtom(state)){var right=state.lastIntValue;if(state.switchU&&(left===-1||right===-1)){state.raise("Invalid character class");}if(left!==-1&&right!==-1&&left>right){state.raise("Range out of order in character class");}}}};pp$8.regexp_eatClassAtom=function(state){var start=state.pos;if(state.eat(0x5C)){if(this.regexp_eatClassEscape(state)){return true;}if(state.switchU){var ch$1=state.current();if(ch$1===0x63||isOctalDigit(ch$1)){state.raise("Invalid class escape");}state.raise("Invalid escape");}state.pos=start;}var ch=state.current();if(ch!==0x5D){state.lastIntValue=ch;state.advance();return true;}return false;};pp$8.regexp_eatClassEscape=function(state){var start=state.pos;if(state.eat(0x62)){state.lastIntValue=0x08;return true;}if(state.switchU&&state.eat(0x2D)){state.lastIntValue=0x2D;return true;}if(!state.switchU&&state.eat(0x63)){if(this.regexp_eatClassControlLetter(state)){return true;}state.pos=start;}return this.regexp_eatCharacterClassEscape(state)||this.regexp_eatCharacterEscape(state);};pp$8.regexp_eatClassControlLetter=function(state){var ch=state.current();if(isDecimalDigit(ch)||ch===0x5F){state.lastIntValue=ch%0x20;state.advance();return true;}return false;};pp$8.regexp_eatHexEscapeSequence=function(state){var start=state.pos;if(state.eat(0x78)){if(this.regexp_eatFixedHexDigits(state,2)){return true;}if(state.switchU){state.raise("Invalid escape");}state.pos=start;}return false;};pp$8.regexp_eatDecimalDigits=function(state){var start=state.pos;var ch=0;state.lastIntValue=0;while(isDecimalDigit(ch=state.current())){state.lastIntValue=10*state.lastIntValue+(ch-0x30);state.advance();}return state.pos!==start;};function isDecimalDigit(ch){return ch>=0x30&&ch<=0x39;}pp$8.regexp_eatHexDigits=function(state){var start=state.pos;var ch=0;state.lastIntValue=0;while(isHexDigit(ch=state.current())){state.lastIntValue=16*state.lastIntValue+hexToInt(ch);state.advance();}return state.pos!==start;};function isHexDigit(ch){return ch>=0x30&&ch<=0x39||ch>=0x41&&ch<=0x46||ch>=0x61&&ch<=0x66;}function hexToInt(ch){if(ch>=0x41&&ch<=0x46){return 10+(ch-0x41);}if(ch>=0x61&&ch<=0x66){return 10+(ch-0x61);}return ch-0x30;}pp$8.regexp_eatLegacyOctalEscapeSequence=function(state){if(this.regexp_eatOctalDigit(state)){var n1=state.lastIntValue;if(this.regexp_eatOctalDigit(state)){var n2=state.lastIntValue;if(n1<=3&&this.regexp_eatOctalDigit(state)){state.lastIntValue=n1*64+n2*8+state.lastIntValue;}else{state.lastIntValue=n1*8+n2;}}else{state.lastIntValue=n1;}return true;}return false;};pp$8.regexp_eatOctalDigit=function(state){var ch=state.current();if(isOctalDigit(ch)){state.lastIntValue=ch-0x30;state.advance();return true;}state.lastIntValue=0;return false;};function isOctalDigit(ch){return ch>=0x30&&ch<=0x37;}pp$8.regexp_eatFixedHexDigits=function(state,length){var start=state.pos;state.lastIntValue=0;for(var i=0;i<length;++i){var ch=state.current();if(!isHexDigit(ch)){state.pos=start;return false;}state.lastIntValue=16*state.lastIntValue+hexToInt(ch);state.advance();}return true;};var Token=function Token(p){this.type=p.type;this.value=p.value;this.start=p.start;this.end=p.end;if(p.options.locations){this.loc=new SourceLocation(p,p.startLoc,p.endLoc);}if(p.options.ranges){this.range=[p.start,p.end];}};var pp$9=Parser.prototype;pp$9.next=function(ignoreEscapeSequenceInKeyword){if(!ignoreEscapeSequenceInKeyword&&this.type.keyword&&this.containsEsc){this.raiseRecoverable(this.start,"Escape sequence in keyword "+this.type.keyword);}if(this.options.onToken){this.options.onToken(new Token(this));}this.lastTokEnd=this.end;this.lastTokStart=this.start;this.lastTokEndLoc=this.endLoc;this.lastTokStartLoc=this.startLoc;this.nextToken();};pp$9.getToken=function(){this.next();return new Token(this);};if(typeof Symbol!=="undefined"){pp$9[Symbol.iterator]=function(){var this$1=this;return{next:function next(){var token=this$1.getToken();return{done:token.type===types.eof,value:token};}};};}pp$9.curContext=function(){return this.context[this.context.length-1];};pp$9.nextToken=function(){var curContext=this.curContext();if(!curContext||!curContext.preserveSpace){this.skipSpace();}this.start=this.pos;if(this.options.locations){this.startLoc=this.curPosition();}if(this.pos>=this.input.length){return this.finishToken(types.eof);}if(curContext.override){return curContext.override(this);}else{this.readToken(this.fullCharCodeAtPos());}};pp$9.readToken=function(code){if(isIdentifierStart(code,this.options.ecmaVersion>=6)||code===92){return this.readWord();}return this.getTokenFromCode(code);};pp$9.fullCharCodeAtPos=function(){var code=this.input.charCodeAt(this.pos);if(code<=0xd7ff||code>=0xe000){return code;}var next=this.input.charCodeAt(this.pos+1);return(code<<10)+next-0x35fdc00;};pp$9.skipBlockComment=function(){var startLoc=this.options.onComment&&this.curPosition();var start=this.pos,end=this.input.indexOf("*/",this.pos+=2);if(end===-1){this.raise(this.pos-2,"Unterminated comment");}this.pos=end+2;if(this.options.locations){lineBreakG.lastIndex=start;var match;while((match=lineBreakG.exec(this.input))&&match.index<this.pos){++this.curLine;this.lineStart=match.index+match[0].length;}}if(this.options.onComment){this.options.onComment(true,this.input.slice(start+2,end),start,this.pos,startLoc,this.curPosition());}};pp$9.skipLineComment=function(startSkip){var start=this.pos;var startLoc=this.options.onComment&&this.curPosition();var ch=this.input.charCodeAt(this.pos+=startSkip);while(this.pos<this.input.length&&!isNewLine(ch)){ch=this.input.charCodeAt(++this.pos);}if(this.options.onComment){this.options.onComment(false,this.input.slice(start+startSkip,this.pos),start,this.pos,startLoc,this.curPosition());}};pp$9.skipSpace=function(){loop:while(this.pos<this.input.length){var ch=this.input.charCodeAt(this.pos);switch(ch){case 32:case 160:++this.pos;break;case 13:if(this.input.charCodeAt(this.pos+1)===10){++this.pos;}case 10:case 8232:case 8233:++this.pos;if(this.options.locations){++this.curLine;this.lineStart=this.pos;}break;case 47:switch(this.input.charCodeAt(this.pos+1)){case 42:this.skipBlockComment();break;case 47:this.skipLineComment(2);break;default:break loop;}break;default:if(ch>8&&ch<14||ch>=5760&&nonASCIIwhitespace.test(String.fromCharCode(ch))){++this.pos;}else{break loop;}}}};pp$9.finishToken=function(type,val){this.end=this.pos;if(this.options.locations){this.endLoc=this.curPosition();}var prevType=this.type;this.type=type;this.value=val;this.updateContext(prevType);};pp$9.readToken_dot=function(){var next=this.input.charCodeAt(this.pos+1);if(next>=48&&next<=57){return this.readNumber(true);}var next2=this.input.charCodeAt(this.pos+2);if(this.options.ecmaVersion>=6&&next===46&&next2===46){this.pos+=3;return this.finishToken(types.ellipsis);}else{++this.pos;return this.finishToken(types.dot);}};pp$9.readToken_slash=function(){var next=this.input.charCodeAt(this.pos+1);if(this.exprAllowed){++this.pos;return this.readRegexp();}if(next===61){return this.finishOp(types.assign,2);}return this.finishOp(types.slash,1);};pp$9.readToken_mult_modulo_exp=function(code){var next=this.input.charCodeAt(this.pos+1);var size=1;var tokentype=code===42?types.star:types.modulo;if(this.options.ecmaVersion>=7&&code===42&&next===42){++size;tokentype=types.starstar;next=this.input.charCodeAt(this.pos+2);}if(next===61){return this.finishOp(types.assign,size+1);}return this.finishOp(tokentype,size);};pp$9.readToken_pipe_amp=function(code){var next=this.input.charCodeAt(this.pos+1);if(next===code){return this.finishOp(code===124?types.logicalOR:types.logicalAND,2);}if(next===61){return this.finishOp(types.assign,2);}return this.finishOp(code===124?types.bitwiseOR:types.bitwiseAND,1);};pp$9.readToken_caret=function(){var next=this.input.charCodeAt(this.pos+1);if(next===61){return this.finishOp(types.assign,2);}return this.finishOp(types.bitwiseXOR,1);};pp$9.readToken_plus_min=function(code){var next=this.input.charCodeAt(this.pos+1);if(next===code){if(next===45&&!this.inModule&&this.input.charCodeAt(this.pos+2)===62&&(this.lastTokEnd===0||lineBreak.test(this.input.slice(this.lastTokEnd,this.pos)))){this.skipLineComment(3);this.skipSpace();return this.nextToken();}return this.finishOp(types.incDec,2);}if(next===61){return this.finishOp(types.assign,2);}return this.finishOp(types.plusMin,1);};pp$9.readToken_lt_gt=function(code){var next=this.input.charCodeAt(this.pos+1);var size=1;if(next===code){size=code===62&&this.input.charCodeAt(this.pos+2)===62?3:2;if(this.input.charCodeAt(this.pos+size)===61){return this.finishOp(types.assign,size+1);}return this.finishOp(types.bitShift,size);}if(next===33&&code===60&&!this.inModule&&this.input.charCodeAt(this.pos+2)===45&&this.input.charCodeAt(this.pos+3)===45){this.skipLineComment(4);this.skipSpace();return this.nextToken();}if(next===61){size=2;}return this.finishOp(types.relational,size);};pp$9.readToken_eq_excl=function(code){var next=this.input.charCodeAt(this.pos+1);if(next===61){return this.finishOp(types.equality,this.input.charCodeAt(this.pos+2)===61?3:2);}if(code===61&&next===62&&this.options.ecmaVersion>=6){this.pos+=2;return this.finishToken(types.arrow);}return this.finishOp(code===61?types.eq:types.prefix,1);};pp$9.getTokenFromCode=function(code){switch(code){case 46:return this.readToken_dot();case 40:++this.pos;return this.finishToken(types.parenL);case 41:++this.pos;return this.finishToken(types.parenR);case 59:++this.pos;return this.finishToken(types.semi);case 44:++this.pos;return this.finishToken(types.comma);case 91:++this.pos;return this.finishToken(types.bracketL);case 93:++this.pos;return this.finishToken(types.bracketR);case 123:++this.pos;return this.finishToken(types.braceL);case 125:++this.pos;return this.finishToken(types.braceR);case 58:++this.pos;return this.finishToken(types.colon);case 63:++this.pos;return this.finishToken(types.question);case 96:if(this.options.ecmaVersion<6){break;}++this.pos;return this.finishToken(types.backQuote);case 48:var next=this.input.charCodeAt(this.pos+1);if(next===120||next===88){return this.readRadixNumber(16);}if(this.options.ecmaVersion>=6){if(next===111||next===79){return this.readRadixNumber(8);}if(next===98||next===66){return this.readRadixNumber(2);}}case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return this.readNumber(false);case 34:case 39:return this.readString(code);case 47:return this.readToken_slash();case 37:case 42:return this.readToken_mult_modulo_exp(code);case 124:case 38:return this.readToken_pipe_amp(code);case 94:return this.readToken_caret();case 43:case 45:return this.readToken_plus_min(code);case 60:case 62:return this.readToken_lt_gt(code);case 61:case 33:return this.readToken_eq_excl(code);case 126:return this.finishOp(types.prefix,1);}this.raise(this.pos,"Unexpected character '"+codePointToString$1(code)+"'");};pp$9.finishOp=function(type,size){var str=this.input.slice(this.pos,this.pos+size);this.pos+=size;return this.finishToken(type,str);};pp$9.readRegexp=function(){var escaped,inClass,start=this.pos;for(;;){if(this.pos>=this.input.length){this.raise(start,"Unterminated regular expression");}var ch=this.input.charAt(this.pos);if(lineBreak.test(ch)){this.raise(start,"Unterminated regular expression");}if(!escaped){if(ch==="["){inClass=true;}else if(ch==="]"&&inClass){inClass=false;}else if(ch==="/"&&!inClass){break;}escaped=ch==="\\";}else{escaped=false;}++this.pos;}var pattern=this.input.slice(start,this.pos);++this.pos;var flagsStart=this.pos;var flags=this.readWord1();if(this.containsEsc){this.unexpected(flagsStart);}var state=this.regexpState||(this.regexpState=new RegExpValidationState(this));state.reset(start,pattern,flags);this.validateRegExpFlags(state);this.validateRegExpPattern(state);var value=null;try{value=new RegExp(pattern,flags);}catch(e){}return this.finishToken(types.regexp,{pattern:pattern,flags:flags,value:value});};pp$9.readInt=function(radix,len){var start=this.pos,total=0;for(var i=0,e=len==null?Infinity:len;i<e;++i){var code=this.input.charCodeAt(this.pos),val=void 0;if(code>=97){val=code-97+10;}else if(code>=65){val=code-65+10;}else if(code>=48&&code<=57){val=code-48;}else{val=Infinity;}if(val>=radix){break;}++this.pos;total=total*radix+val;}if(this.pos===start||len!=null&&this.pos-start!==len){return null;}return total;};pp$9.readRadixNumber=function(radix){var start=this.pos;this.pos+=2;var val=this.readInt(radix);if(val==null){this.raise(this.start+2,"Expected number in radix "+radix);}if(this.options.ecmaVersion>=11&&this.input.charCodeAt(this.pos)===110){val=typeof BigInt!=="undefined"?BigInt(this.input.slice(start,this.pos)):null;++this.pos;}else if(isIdentifierStart(this.fullCharCodeAtPos())){this.raise(this.pos,"Identifier directly after number");}return this.finishToken(types.num,val);};pp$9.readNumber=function(startsWithDot){var start=this.pos;if(!startsWithDot&&this.readInt(10)===null){this.raise(start,"Invalid number");}var octal=this.pos-start>=2&&this.input.charCodeAt(start)===48;if(octal&&this.strict){this.raise(start,"Invalid number");}var next=this.input.charCodeAt(this.pos);if(!octal&&!startsWithDot&&this.options.ecmaVersion>=11&&next===110){var str$1=this.input.slice(start,this.pos);var val$1=typeof BigInt!=="undefined"?BigInt(str$1):null;++this.pos;if(isIdentifierStart(this.fullCharCodeAtPos())){this.raise(this.pos,"Identifier directly after number");}return this.finishToken(types.num,val$1);}if(octal&&/[89]/.test(this.input.slice(start,this.pos))){octal=false;}if(next===46&&!octal){++this.pos;this.readInt(10);next=this.input.charCodeAt(this.pos);}if((next===69||next===101)&&!octal){next=this.input.charCodeAt(++this.pos);if(next===43||next===45){++this.pos;}if(this.readInt(10)===null){this.raise(start,"Invalid number");}}if(isIdentifierStart(this.fullCharCodeAtPos())){this.raise(this.pos,"Identifier directly after number");}var str=this.input.slice(start,this.pos);var val=octal?parseInt(str,8):parseFloat(str);return this.finishToken(types.num,val);};pp$9.readCodePoint=function(){var ch=this.input.charCodeAt(this.pos),code;if(ch===123){if(this.options.ecmaVersion<6){this.unexpected();}var codePos=++this.pos;code=this.readHexChar(this.input.indexOf("}",this.pos)-this.pos);++this.pos;if(code>0x10FFFF){this.invalidStringToken(codePos,"Code point out of bounds");}}else{code=this.readHexChar(4);}return code;};function codePointToString$1(code){if(code<=0xFFFF){return String.fromCharCode(code);}code-=0x10000;return String.fromCharCode((code>>10)+0xD800,(code&1023)+0xDC00);}pp$9.readString=function(quote){var out="",chunkStart=++this.pos;for(;;){if(this.pos>=this.input.length){this.raise(this.start,"Unterminated string constant");}var ch=this.input.charCodeAt(this.pos);if(ch===quote){break;}if(ch===92){out+=this.input.slice(chunkStart,this.pos);out+=this.readEscapedChar(false);chunkStart=this.pos;}else{if(isNewLine(ch,this.options.ecmaVersion>=10)){this.raise(this.start,"Unterminated string constant");}++this.pos;}}out+=this.input.slice(chunkStart,this.pos++);return this.finishToken(types.string,out);};var INVALID_TEMPLATE_ESCAPE_ERROR={};pp$9.tryReadTemplateToken=function(){this.inTemplateElement=true;try{this.readTmplToken();}catch(err){if(err===INVALID_TEMPLATE_ESCAPE_ERROR){this.readInvalidTemplateToken();}else{throw err;}}this.inTemplateElement=false;};pp$9.invalidStringToken=function(position,message){if(this.inTemplateElement&&this.options.ecmaVersion>=9){throw INVALID_TEMPLATE_ESCAPE_ERROR;}else{this.raise(position,message);}};pp$9.readTmplToken=function(){var out="",chunkStart=this.pos;for(;;){if(this.pos>=this.input.length){this.raise(this.start,"Unterminated template");}var ch=this.input.charCodeAt(this.pos);if(ch===96||ch===36&&this.input.charCodeAt(this.pos+1)===123){if(this.pos===this.start&&(this.type===types.template||this.type===types.invalidTemplate)){if(ch===36){this.pos+=2;return this.finishToken(types.dollarBraceL);}else{++this.pos;return this.finishToken(types.backQuote);}}out+=this.input.slice(chunkStart,this.pos);return this.finishToken(types.template,out);}if(ch===92){out+=this.input.slice(chunkStart,this.pos);out+=this.readEscapedChar(true);chunkStart=this.pos;}else if(isNewLine(ch)){out+=this.input.slice(chunkStart,this.pos);++this.pos;switch(ch){case 13:if(this.input.charCodeAt(this.pos)===10){++this.pos;}case 10:out+="\n";break;default:out+=String.fromCharCode(ch);break;}if(this.options.locations){++this.curLine;this.lineStart=this.pos;}chunkStart=this.pos;}else{++this.pos;}}};pp$9.readInvalidTemplateToken=function(){for(;this.pos<this.input.length;this.pos++){switch(this.input[this.pos]){case"\\":++this.pos;break;case"$":if(this.input[this.pos+1]!=="{"){break;}case"`":return this.finishToken(types.invalidTemplate,this.input.slice(this.start,this.pos));}}this.raise(this.start,"Unterminated template");};pp$9.readEscapedChar=function(inTemplate){var ch=this.input.charCodeAt(++this.pos);++this.pos;switch(ch){case 110:return"\n";case 114:return"\r";case 120:return String.fromCharCode(this.readHexChar(2));case 117:return codePointToString$1(this.readCodePoint());case 116:return"\t";case 98:return"\b";case 118:return"\x0B";case 102:return"\f";case 13:if(this.input.charCodeAt(this.pos)===10){++this.pos;}case 10:if(this.options.locations){this.lineStart=this.pos;++this.curLine;}return"";case 56:case 57:if(inTemplate){var codePos=this.pos-1;this.invalidStringToken(codePos,"Invalid escape sequence in template string");return null;}default:if(ch>=48&&ch<=55){var octalStr=this.input.substr(this.pos-1,3).match(/^[0-7]+/)[0];var octal=parseInt(octalStr,8);if(octal>255){octalStr=octalStr.slice(0,-1);octal=parseInt(octalStr,8);}this.pos+=octalStr.length-1;ch=this.input.charCodeAt(this.pos);if((octalStr!=="0"||ch===56||ch===57)&&(this.strict||inTemplate)){this.invalidStringToken(this.pos-1-octalStr.length,inTemplate?"Octal literal in template string":"Octal literal in strict mode");}return String.fromCharCode(octal);}if(isNewLine(ch)){return"";}return String.fromCharCode(ch);}};pp$9.readHexChar=function(len){var codePos=this.pos;var n=this.readInt(16,len);if(n===null){this.invalidStringToken(codePos,"Bad character escape sequence");}return n;};pp$9.readWord1=function(){this.containsEsc=false;var word="",first=true,chunkStart=this.pos;var astral=this.options.ecmaVersion>=6;while(this.pos<this.input.length){var ch=this.fullCharCodeAtPos();if(isIdentifierChar(ch,astral)){this.pos+=ch<=0xffff?1:2;}else if(ch===92){this.containsEsc=true;word+=this.input.slice(chunkStart,this.pos);var escStart=this.pos;if(this.input.charCodeAt(++this.pos)!==117){this.invalidStringToken(this.pos,"Expecting Unicode escape sequence \\uXXXX");}++this.pos;var esc=this.readCodePoint();if(!(first?isIdentifierStart:isIdentifierChar)(esc,astral)){this.invalidStringToken(escStart,"Invalid Unicode escape");}word+=codePointToString$1(esc);chunkStart=this.pos;}else{break;}first=false;}return word+this.input.slice(chunkStart,this.pos);};pp$9.readWord=function(){var word=this.readWord1();var type=types.name;if(this.keywords.test(word)){type=keywords$1[word];}return this.finishToken(type,word);};var version="7.1.0";Parser.acorn={Parser:Parser,version:version,defaultOptions:defaultOptions,Position:Position,SourceLocation:SourceLocation,getLineInfo:getLineInfo,Node:Node,TokenType:TokenType,tokTypes:types,keywordTypes:keywords$1,TokContext:TokContext,tokContexts:types$1,isIdentifierChar:isIdentifierChar,isIdentifierStart:isIdentifierStart,Token:Token,isNewLine:isNewLine,lineBreak:lineBreak,lineBreakG:lineBreakG,nonASCIIwhitespace:nonASCIIwhitespace};function parse(input,options){return Parser.parse(input,options);}function parseExpressionAt(input,pos,options){return Parser.parseExpressionAt(input,pos,options);}function tokenizer(input,options){return Parser.tokenizer(input,options);}exports.Node=Node;exports.Parser=Parser;exports.Position=Position;exports.SourceLocation=SourceLocation;exports.TokContext=TokContext;exports.Token=Token;exports.TokenType=TokenType;exports.defaultOptions=defaultOptions;exports.getLineInfo=getLineInfo;exports.isIdentifierChar=isIdentifierChar;exports.isIdentifierStart=isIdentifierStart;exports.isNewLine=isNewLine;exports.keywordTypes=keywords$1;exports.lineBreak=lineBreak;exports.lineBreakG=lineBreakG;exports.nonASCIIwhitespace=nonASCIIwhitespace;exports.parse=parse;exports.parseExpressionAt=parseExpressionAt;exports.tokContexts=types$1;exports.tokTypes=types;exports.tokenizer=tokenizer;exports.version=version;Object.defineProperty(exports,'__esModule',{value:true});});},{}],2:[function(require,module,exports){},{}],3:[function(require,module,exports){function glWiretap(gl){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var _options$contextName=options.contextName,contextName=_options$contextName===void 0?'gl':_options$contextName,throwGetError=options.throwGetError,useTrackablePrimitives=options.useTrackablePrimitives,readPixelsFile=options.readPixelsFile,_options$recording=options.recording,recording=_options$recording===void 0?[]:_options$recording,_options$variables=options.variables,variables=_options$variables===void 0?{}:_options$variables,onReadPixels=options.onReadPixels,onUnrecognizedArgumentLookup=options.onUnrecognizedArgumentLookup;var proxy=new Proxy(gl,{get:listen});var contextVariables=[];var entityNames={};var imageCount=0;var indent='';var readPixelsVariableName;return proxy;function listen(obj,property){switch(property){case'addComment':return addComment;case'checkThrowError':return checkThrowError;case'getReadPixelsVariableName':return readPixelsVariableName;case'insertVariable':return insertVariable;case'reset':return reset;case'setIndent':return setIndent;case'toString':return toString;case'getContextVariableName':return getContextVariableName;}if(typeof gl[property]==='function'){return function(){switch(property){case'getError':if(throwGetError){recording.push("".concat(indent,"if (").concat(contextName,".getError() !== ").concat(contextName,".NONE) throw new Error('error');"));}else{recording.push("".concat(indent).concat(contextName,".getError();"));}return gl.getError();case'getExtension':{var variableName="".concat(contextName,"Variables").concat(contextVariables.length);recording.push("".concat(indent,"const ").concat(variableName," = ").concat(contextName,".getExtension('").concat(arguments[0],"');"));var extension=gl.getExtension(arguments[0]);if(extension&&_typeof(extension)==='object'){var tappedExtension=glExtensionWiretap(extension,{getEntity:getEntity,useTrackablePrimitives:useTrackablePrimitives,recording:recording,contextName:variableName,contextVariables:contextVariables,variables:variables,indent:indent,onUnrecognizedArgumentLookup:onUnrecognizedArgumentLookup});contextVariables.push(tappedExtension);return tappedExtension;}else{contextVariables.push(null);}return extension;}case'readPixels':var i=contextVariables.indexOf(arguments[6]);var targetVariableName;if(i===-1){var _variableName=getVariableName(arguments[6]);if(_variableName){targetVariableName=_variableName;recording.push("".concat(indent).concat(_variableName));}else{targetVariableName="".concat(contextName,"Variable").concat(contextVariables.length);contextVariables.push(arguments[6]);recording.push("".concat(indent,"const ").concat(targetVariableName," = new ").concat(arguments[6].constructor.name,"(").concat(arguments[6].length,");"));}}else{targetVariableName="".concat(contextName,"Variable").concat(i);}readPixelsVariableName=targetVariableName;var argumentAsStrings=[arguments[0],arguments[1],arguments[2],arguments[3],getEntity(arguments[4]),getEntity(arguments[5]),targetVariableName];recording.push("".concat(indent).concat(contextName,".readPixels(").concat(argumentAsStrings.join(', '),");"));if(readPixelsFile){writePPM(arguments[2],arguments[3]);}if(onReadPixels){onReadPixels(targetVariableName,argumentAsStrings);}return gl.readPixels.apply(gl,arguments);case'drawBuffers':recording.push("".concat(indent).concat(contextName,".drawBuffers([").concat(argumentsToString(arguments[0],{contextName:contextName,contextVariables:contextVariables,getEntity:getEntity,addVariable:addVariable,variables:variables,onUnrecognizedArgumentLookup:onUnrecognizedArgumentLookup}),"]);"));return gl.drawBuffers(arguments[0]);}var result=gl[property].apply(gl,arguments);switch(_typeof(result)){case'undefined':recording.push("".concat(indent).concat(methodCallToString(property,arguments),";"));return;case'number':case'boolean':if(useTrackablePrimitives&&contextVariables.indexOf(trackablePrimitive(result))===-1){recording.push("".concat(indent,"const ").concat(contextName,"Variable").concat(contextVariables.length," = ").concat(methodCallToString(property,arguments),";"));contextVariables.push(result=trackablePrimitive(result));break;}default:if(result===null){recording.push("".concat(methodCallToString(property,arguments),";"));}else{recording.push("".concat(indent,"const ").concat(contextName,"Variable").concat(contextVariables.length," = ").concat(methodCallToString(property,arguments),";"));}contextVariables.push(result);}return result;};}entityNames[gl[property]]=property;return gl[property];}function toString(){return recording.join('\n');}function reset(){while(recording.length>0){recording.pop();}}function insertVariable(name,value){variables[name]=value;}function getEntity(value){var name=entityNames[value];if(name){return contextName+'.'+name;}return value;}function setIndent(spaces){indent=' '.repeat(spaces);}function addVariable(value,source){var variableName="".concat(contextName,"Variable").concat(contextVariables.length);recording.push("".concat(indent,"const ").concat(variableName," = ").concat(source,";"));contextVariables.push(value);return variableName;}function writePPM(width,height){var sourceVariable="".concat(contextName,"Variable").concat(contextVariables.length);var imageVariable="imageDatum".concat(imageCount);recording.push("".concat(indent,"let ").concat(imageVariable," = [\"P3\\n# ").concat(readPixelsFile,".ppm\\n\", ").concat(width,", ' ', ").concat(height,", \"\\n255\\n\"].join(\"\");"));recording.push("".concat(indent,"for (let i = 0; i < ").concat(imageVariable,".length; i += 4) {"));recording.push("".concat(indent,"  ").concat(imageVariable," += ").concat(sourceVariable,"[i] + ' ' + ").concat(sourceVariable,"[i + 1] + ' ' + ").concat(sourceVariable,"[i + 2] + ' ';"));recording.push("".concat(indent,"}"));recording.push("".concat(indent,"if (typeof require !== \"undefined\") {"));recording.push("".concat(indent,"  require('fs').writeFileSync('./").concat(readPixelsFile,".ppm', ").concat(imageVariable,");"));recording.push("".concat(indent,"}"));imageCount++;}function addComment(value){recording.push("".concat(indent,"// ").concat(value));}function checkThrowError(){recording.push("".concat(indent,"(() => {\n      ").concat(indent,"const error = ").concat(contextName,".getError();\n      ").concat(indent,"if (error !== ").concat(contextName,".NONE) {\n      ").concat(indent,"  const names = Object.getOwnPropertyNames(gl);\n      ").concat(indent,"  for (let i = 0; i < names.length; i++) {\n      ").concat(indent,"    const name = names[i];\n      ").concat(indent,"    if (").concat(contextName,"[name] === error) {\n      ").concat(indent,"      throw new Error('").concat(contextName," threw ' + name);\n      ").concat(indent,"    }\n      ").concat(indent,"  }\n      ").concat(indent,"}\n      ").concat(indent,"})();"));}function methodCallToString(method,args){return"".concat(contextName,".").concat(method,"(").concat(argumentsToString(args,{contextName:contextName,contextVariables:contextVariables,getEntity:getEntity,addVariable:addVariable,variables:variables,onUnrecognizedArgumentLookup:onUnrecognizedArgumentLookup}),")");}function getVariableName(value){if(variables){for(var _name in variables){if(variables[_name]===value){return _name;}}}return null;}function getContextVariableName(value){var i=contextVariables.indexOf(value);if(i!==-1){return"".concat(contextName,"Variable").concat(i);}return null;}}function glExtensionWiretap(extension,options){var proxy=new Proxy(extension,{get:listen});var extensionEntityNames={};var contextName=options.contextName,contextVariables=options.contextVariables,getEntity=options.getEntity,useTrackablePrimitives=options.useTrackablePrimitives,recording=options.recording,variables=options.variables,indent=options.indent,onUnrecognizedArgumentLookup=options.onUnrecognizedArgumentLookup;return proxy;function listen(obj,property){if(typeof obj[property]==='function'){return function(){switch(property){case'drawBuffersWEBGL':recording.push("".concat(indent).concat(contextName,".drawBuffersWEBGL([").concat(argumentsToString(arguments[0],{contextName:contextName,contextVariables:contextVariables,getEntity:getExtensionEntity,addVariable:addVariable,variables:variables,onUnrecognizedArgumentLookup:onUnrecognizedArgumentLookup}),"]);"));return extension.drawBuffersWEBGL(arguments[0]);}var result=extension[property].apply(extension,arguments);switch(_typeof(result)){case'undefined':recording.push("".concat(indent).concat(methodCallToString(property,arguments),";"));return;case'number':case'boolean':if(useTrackablePrimitives&&contextVariables.indexOf(trackablePrimitive(result))===-1){recording.push("".concat(indent,"const ").concat(contextName,"Variable").concat(contextVariables.length," = ").concat(methodCallToString(property,arguments),";"));contextVariables.push(result=trackablePrimitive(result));}else{recording.push("".concat(indent,"const ").concat(contextName,"Variable").concat(contextVariables.length," = ").concat(methodCallToString(property,arguments),";"));contextVariables.push(result);}break;default:if(result===null){recording.push("".concat(methodCallToString(property,arguments),";"));}else{recording.push("".concat(indent,"const ").concat(contextName,"Variable").concat(contextVariables.length," = ").concat(methodCallToString(property,arguments),";"));}contextVariables.push(result);}return result;};}extensionEntityNames[extension[property]]=property;return extension[property];}function getExtensionEntity(value){if(extensionEntityNames.hasOwnProperty(value)){return"".concat(contextName,".").concat(extensionEntityNames[value]);}return getEntity(value);}function methodCallToString(method,args){return"".concat(contextName,".").concat(method,"(").concat(argumentsToString(args,{contextName:contextName,contextVariables:contextVariables,getEntity:getExtensionEntity,addVariable:addVariable,variables:variables,onUnrecognizedArgumentLookup:onUnrecognizedArgumentLookup}),")");}function addVariable(value,source){var variableName="".concat(contextName,"Variable").concat(contextVariables.length);contextVariables.push(value);recording.push("".concat(indent,"const ").concat(variableName," = ").concat(source,";"));return variableName;}}function argumentsToString(args,options){var variables=options.variables,onUnrecognizedArgumentLookup=options.onUnrecognizedArgumentLookup;return Array.from(args).map(function(arg){var variableName=getVariableName(arg);if(variableName){return variableName;}return argumentToString(arg,options);}).join(', ');function getVariableName(value){if(variables){for(var _name2 in variables){if(!variables.hasOwnProperty(_name2))continue;if(variables[_name2]===value){return _name2;}}}if(onUnrecognizedArgumentLookup){return onUnrecognizedArgumentLookup(value);}return null;}}function argumentToString(arg,options){var contextName=options.contextName,contextVariables=options.contextVariables,getEntity=options.getEntity,addVariable=options.addVariable,onUnrecognizedArgumentLookup=options.onUnrecognizedArgumentLookup;if(typeof arg==='undefined'){return'undefined';}if(arg===null){return'null';}var i=contextVariables.indexOf(arg);if(i>-1){return"".concat(contextName,"Variable").concat(i);}switch(arg.constructor.name){case'String':var hasLines=/\n/.test(arg);var hasSingleQuotes=/'/.test(arg);var hasDoubleQuotes=/"/.test(arg);if(hasLines){return'`'+arg+'`';}else if(hasSingleQuotes&&!hasDoubleQuotes){return'"'+arg+'"';}else if(!hasSingleQuotes&&hasDoubleQuotes){return"'"+arg+"'";}else{return'\''+arg+'\'';}case'Number':return getEntity(arg);case'Boolean':return getEntity(arg);case'Array':return addVariable(arg,"new ".concat(arg.constructor.name,"([").concat(Array.from(arg).join(','),"])"));case'Float32Array':case'Uint8Array':case'Uint16Array':case'Int32Array':return addVariable(arg,"new ".concat(arg.constructor.name,"(").concat(JSON.stringify(Array.from(arg)),")"));default:if(onUnrecognizedArgumentLookup){var instantiationString=onUnrecognizedArgumentLookup(arg);if(instantiationString){return instantiationString;}}throw new Error("unrecognized argument type ".concat(arg.constructor.name));}}function trackablePrimitive(value){return new value.constructor(value);}if(typeof module!=='undefined'){module.exports={glWiretap:glWiretap,glExtensionWiretap:glExtensionWiretap};}if(typeof window!=='undefined'){glWiretap.glExtensionWiretap=glExtensionWiretap;window.glWiretap=glWiretap;}},{}],4:[function(require,module,exports){function setupArguments(args){var newArguments=new Array(args.length);for(var i=0;i<args.length;i++){var arg=args[i];if(arg.toArray){newArguments[i]=arg.toArray();}else{newArguments[i]=arg;}}return newArguments;}function mock1D(){var args=setupArguments(arguments);var row=new Float32Array(this.output.x);for(var x=0;x<this.output.x;x++){this.thread.x=x;this.thread.y=0;this.thread.z=0;row[x]=this._fn.apply(this,args);}return row;}function mock2D(){var args=setupArguments(arguments);var matrix=new Array(this.output.y);for(var y=0;y<this.output.y;y++){var row=new Float32Array(this.output.x);for(var x=0;x<this.output.x;x++){this.thread.x=x;this.thread.y=y;this.thread.z=0;row[x]=this._fn.apply(this,args);}matrix[y]=row;}return matrix;}function mock2DGraphical(){var args=setupArguments(arguments);for(var y=0;y<this.output.y;y++){for(var x=0;x<this.output.x;x++){this.thread.x=x;this.thread.y=y;this.thread.z=0;this._fn.apply(this,args);}}}function mock3D(){var args=setupArguments(arguments);var cube=new Array(this.output.z);for(var z=0;z<this.output.z;z++){var matrix=new Array(this.output.y);for(var y=0;y<this.output.y;y++){var row=new Float32Array(this.output.x);for(var x=0;x<this.output.x;x++){this.thread.x=x;this.thread.y=y;this.thread.z=z;row[x]=this._fn.apply(this,args);}matrix[y]=row;}cube[z]=matrix;}return cube;}function apiDecorate(kernel){kernel.setOutput=function(output){kernel.output=setupOutput(output);if(kernel.graphical){setupGraphical(kernel);}};kernel.toJSON=function(){throw new Error('Not usable with gpuMock');};kernel.setConstants=function(flag){kernel.constants=flag;return kernel;};kernel.setGraphical=function(flag){kernel.graphical=flag;return kernel;};kernel.setCanvas=function(flag){kernel.canvas=flag;return kernel;};kernel.setContext=function(flag){kernel.context=flag;return kernel;};kernel.destroy=function(){};kernel.validateSettings=function(){};if(kernel.graphical&&kernel.output){setupGraphical(kernel);}kernel.exec=function(){var _arguments=arguments;return new Promise(function(resolve,reject){try{resolve(kernel.apply(kernel,_arguments));}catch(e){reject(e);}});};kernel.getPixels=function(flip){var _kernel$output=kernel.output,x=_kernel$output.x,y=_kernel$output.y;return flip?flipPixels(kernel._imageData.data,x,y):kernel._imageData.data.slice(0);};kernel.color=function(r,g,b,a){if(typeof a==='undefined'){a=1;}r=Math.floor(r*255);g=Math.floor(g*255);b=Math.floor(b*255);a=Math.floor(a*255);var width=kernel.output.x;var height=kernel.output.y;var x=kernel.thread.x;var y=height-kernel.thread.y-1;var index=x+y*width;kernel._colorData[index*4+0]=r;kernel._colorData[index*4+1]=g;kernel._colorData[index*4+2]=b;kernel._colorData[index*4+3]=a;};var mockMethod=function mockMethod(){return kernel;};var methods=['setWarnVarUsage','setArgumentTypes','setTactic','setOptimizeFloatMemory','setDebug','setLoopMaxIterations','setConstantTypes','setFunctions','setNativeFunctions','setInjectedNative','setPipeline','setPrecision','setOutputToTexture','setImmutable','setStrictIntegers','setDynamicOutput','setHardcodeConstants','setDynamicArguments','setUseLegacyEncoder','setWarnVarUsage','addSubKernel'];for(var i=0;i<methods.length;i++){kernel[methods[i]]=mockMethod;}return kernel;}function setupGraphical(kernel){var _kernel$output2=kernel.output,x=_kernel$output2.x,y=_kernel$output2.y;if(kernel.context&&kernel.context.createImageData){var data=new Uint8ClampedArray(x*y*4);kernel._imageData=kernel.context.createImageData(x,y);kernel._colorData=data;}else{var _data=new Uint8ClampedArray(x*y*4);kernel._imageData={data:_data};kernel._colorData=_data;}}function setupOutput(output){var result=null;if(output.length){if(output.length===3){var _output=_slicedToArray(output,3),x=_output[0],y=_output[1],z=_output[2];result={x:x,y:y,z:z};}else if(output.length===2){var _output2=_slicedToArray(output,2),_x=_output2[0],_y=_output2[1];result={x:_x,y:_y};}else{var _output3=_slicedToArray(output,1),_x2=_output3[0];result={x:_x2};}}else{result=output;}return result;}function gpuMock(fn){var settings=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var output=settings.output?setupOutput(settings.output):null;function kernel(){if(kernel.output.z){return mock3D.apply(kernel,arguments);}else if(kernel.output.y){if(kernel.graphical){return mock2DGraphical.apply(kernel,arguments);}return mock2D.apply(kernel,arguments);}else{return mock1D.apply(kernel,arguments);}}kernel._fn=fn;kernel.constants=settings.constants||null;kernel.context=settings.context||null;kernel.canvas=settings.canvas||null;kernel.graphical=settings.graphical||false;kernel._imageData=null;kernel._colorData=null;kernel.output=output;kernel.thread={x:0,y:0,z:0};return apiDecorate(kernel);}function flipPixels(pixels,width,height){var halfHeight=height/2|0;var bytesPerRow=width*4;var temp=new Uint8ClampedArray(width*4);var result=pixels.slice(0);for(var y=0;y<halfHeight;++y){var topOffset=y*bytesPerRow;var bottomOffset=(height-y-1)*bytesPerRow;temp.set(result.subarray(topOffset,topOffset+bytesPerRow));result.copyWithin(topOffset,bottomOffset,bottomOffset+bytesPerRow);result.set(temp,bottomOffset);}return result;}module.exports={gpuMock:gpuMock};},{}],5:[function(require,module,exports){var _require=require('./utils'),utils=_require.utils;function alias(name,source){var fnString=source.toString();return new Function("return function ".concat(name," (").concat(utils.getArgumentNamesFromString(fnString).join(', '),") {\n        ").concat(utils.getFunctionBodyFromString(fnString),"\n      }"))();}module.exports={alias:alias};},{"./utils":114}],6:[function(require,module,exports){var _require2=require('../function-node'),FunctionNode=_require2.FunctionNode;var CPUFunctionNode=/*#__PURE__*/function(_FunctionNode){_inherits(CPUFunctionNode,_FunctionNode);var _super=_createSuper(CPUFunctionNode);function CPUFunctionNode(){_classCallCheck(this,CPUFunctionNode);return _super.apply(this,arguments);}_createClass(CPUFunctionNode,[{key:"astFunction",value:function astFunction(ast,retArr){if(!this.isRootKernel){retArr.push('function');retArr.push(' ');retArr.push(this.name);retArr.push('(');for(var i=0;i<this.argumentNames.length;++i){var argumentName=this.argumentNames[i];if(i>0){retArr.push(', ');}retArr.push('user_');retArr.push(argumentName);}retArr.push(') {\n');}for(var _i2=0;_i2<ast.body.body.length;++_i2){this.astGeneric(ast.body.body[_i2],retArr);retArr.push('\n');}if(!this.isRootKernel){retArr.push('}\n');}return retArr;}},{key:"astReturnStatement",value:function astReturnStatement(ast,retArr){var type=this.returnType||this.getType(ast.argument);if(!this.returnType){this.returnType=type;}if(this.isRootKernel){retArr.push(this.leadingReturnStatement);this.astGeneric(ast.argument,retArr);retArr.push(';\n');retArr.push(this.followingReturnStatement);retArr.push('continue;\n');}else if(this.isSubKernel){retArr.push("subKernelResult_".concat(this.name," = "));this.astGeneric(ast.argument,retArr);retArr.push(';');retArr.push("return subKernelResult_".concat(this.name,";"));}else{retArr.push('return ');this.astGeneric(ast.argument,retArr);retArr.push(';');}return retArr;}},{key:"astLiteral",value:function astLiteral(ast,retArr){if(isNaN(ast.value)){throw this.astErrorOutput('Non-numeric literal not supported : '+ast.value,ast);}retArr.push(ast.value);return retArr;}},{key:"astBinaryExpression",value:function astBinaryExpression(ast,retArr){retArr.push('(');this.astGeneric(ast.left,retArr);retArr.push(ast.operator);this.astGeneric(ast.right,retArr);retArr.push(')');return retArr;}},{key:"astIdentifierExpression",value:function astIdentifierExpression(idtNode,retArr){if(idtNode.type!=='Identifier'){throw this.astErrorOutput('IdentifierExpression - not an Identifier',idtNode);}switch(idtNode.name){case'Infinity':retArr.push('Infinity');break;default:if(this.constants&&this.constants.hasOwnProperty(idtNode.name)){retArr.push('constants_'+idtNode.name);}else{retArr.push('user_'+idtNode.name);}}return retArr;}},{key:"astForStatement",value:function astForStatement(forNode,retArr){if(forNode.type!=='ForStatement'){throw this.astErrorOutput('Invalid for statement',forNode);}var initArr=[];var testArr=[];var updateArr=[];var bodyArr=[];var isSafe=null;if(forNode.init){this.pushState('in-for-loop-init');this.astGeneric(forNode.init,initArr);for(var i=0;i<initArr.length;i++){if(initArr[i].includes&&initArr[i].includes(',')){isSafe=false;}}this.popState('in-for-loop-init');}else{isSafe=false;}if(forNode.test){this.astGeneric(forNode.test,testArr);}else{isSafe=false;}if(forNode.update){this.astGeneric(forNode.update,updateArr);}else{isSafe=false;}if(forNode.body){this.pushState('loop-body');this.astGeneric(forNode.body,bodyArr);this.popState('loop-body');}if(isSafe===null){isSafe=this.isSafe(forNode.init)&&this.isSafe(forNode.test);}if(isSafe){retArr.push("for (".concat(initArr.join(''),";").concat(testArr.join(''),";").concat(updateArr.join(''),"){\n"));retArr.push(bodyArr.join(''));retArr.push('}\n');}else{var iVariableName=this.getInternalVariableName('safeI');if(initArr.length>0){retArr.push(initArr.join(''),';\n');}retArr.push("for (let ".concat(iVariableName,"=0;").concat(iVariableName,"<LOOP_MAX;").concat(iVariableName,"++){\n"));if(testArr.length>0){retArr.push("if (!".concat(testArr.join(''),") break;\n"));}retArr.push(bodyArr.join(''));retArr.push("\n".concat(updateArr.join(''),";"));retArr.push('}\n');}return retArr;}},{key:"astWhileStatement",value:function astWhileStatement(whileNode,retArr){if(whileNode.type!=='WhileStatement'){throw this.astErrorOutput('Invalid while statement',whileNode);}retArr.push('for (let i = 0; i < LOOP_MAX; i++) {');retArr.push('if (');this.astGeneric(whileNode.test,retArr);retArr.push(') {\n');this.astGeneric(whileNode.body,retArr);retArr.push('} else {\n');retArr.push('break;\n');retArr.push('}\n');retArr.push('}\n');return retArr;}},{key:"astDoWhileStatement",value:function astDoWhileStatement(doWhileNode,retArr){if(doWhileNode.type!=='DoWhileStatement'){throw this.astErrorOutput('Invalid while statement',doWhileNode);}retArr.push('for (let i = 0; i < LOOP_MAX; i++) {');this.astGeneric(doWhileNode.body,retArr);retArr.push('if (!');this.astGeneric(doWhileNode.test,retArr);retArr.push(') {\n');retArr.push('break;\n');retArr.push('}\n');retArr.push('}\n');return retArr;}},{key:"astAssignmentExpression",value:function astAssignmentExpression(assNode,retArr){var declaration=this.getDeclaration(assNode.left);if(declaration&&!declaration.assignable){throw this.astErrorOutput("Variable ".concat(assNode.left.name," is not assignable here"),assNode);}this.astGeneric(assNode.left,retArr);retArr.push(assNode.operator);this.astGeneric(assNode.right,retArr);return retArr;}},{key:"astBlockStatement",value:function astBlockStatement(bNode,retArr){if(this.isState('loop-body')){this.pushState('block-body');for(var i=0;i<bNode.body.length;i++){this.astGeneric(bNode.body[i],retArr);}this.popState('block-body');}else{retArr.push('{\n');for(var _i3=0;_i3<bNode.body.length;_i3++){this.astGeneric(bNode.body[_i3],retArr);}retArr.push('}\n');}return retArr;}},{key:"astVariableDeclaration",value:function astVariableDeclaration(varDecNode,retArr){retArr.push("".concat(varDecNode.kind," "));var declarations=varDecNode.declarations;for(var i=0;i<declarations.length;i++){if(i>0){retArr.push(',');}var declaration=declarations[i];var info=this.getDeclaration(declaration.id);if(!info.valueType){info.valueType=this.getType(declaration.init);}this.astGeneric(declaration,retArr);}if(!this.isState('in-for-loop-init')){retArr.push(';');}return retArr;}},{key:"astIfStatement",value:function astIfStatement(ifNode,retArr){retArr.push('if (');this.astGeneric(ifNode.test,retArr);retArr.push(')');if(ifNode.consequent.type==='BlockStatement'){this.astGeneric(ifNode.consequent,retArr);}else{retArr.push(' {\n');this.astGeneric(ifNode.consequent,retArr);retArr.push('\n}\n');}if(ifNode.alternate){retArr.push('else ');if(ifNode.alternate.type==='BlockStatement'||ifNode.alternate.type==='IfStatement'){this.astGeneric(ifNode.alternate,retArr);}else{retArr.push(' {\n');this.astGeneric(ifNode.alternate,retArr);retArr.push('\n}\n');}}return retArr;}},{key:"astSwitchStatement",value:function astSwitchStatement(ast,retArr){var discriminant=ast.discriminant,cases=ast.cases;retArr.push('switch (');this.astGeneric(discriminant,retArr);retArr.push(') {\n');for(var i=0;i<cases.length;i++){if(cases[i].test===null){retArr.push('default:\n');this.astGeneric(cases[i].consequent,retArr);if(cases[i].consequent&&cases[i].consequent.length>0){retArr.push('break;\n');}continue;}retArr.push('case ');this.astGeneric(cases[i].test,retArr);retArr.push(':\n');if(cases[i].consequent&&cases[i].consequent.length>0){this.astGeneric(cases[i].consequent,retArr);retArr.push('break;\n');}}retArr.push('\n}');}},{key:"astThisExpression",value:function astThisExpression(tNode,retArr){retArr.push('_this');return retArr;}},{key:"astMemberExpression",value:function astMemberExpression(mNode,retArr){var _this$getMemberExpres=this.getMemberExpressionDetails(mNode),signature=_this$getMemberExpres.signature,type=_this$getMemberExpres.type,property=_this$getMemberExpres.property,xProperty=_this$getMemberExpres.xProperty,yProperty=_this$getMemberExpres.yProperty,zProperty=_this$getMemberExpres.zProperty,name=_this$getMemberExpres.name,origin=_this$getMemberExpres.origin;switch(signature){case'this.thread.value':retArr.push("_this.thread.".concat(name));return retArr;case'this.output.value':switch(name){case'x':retArr.push('outputX');break;case'y':retArr.push('outputY');break;case'z':retArr.push('outputZ');break;default:throw this.astErrorOutput('Unexpected expression',mNode);}return retArr;case'value':throw this.astErrorOutput('Unexpected expression',mNode);case'value[]':case'value[][]':case'value[][][]':case'value.value':if(origin==='Math'){retArr.push(Math[name]);return retArr;}switch(property){case'r':retArr.push("user_".concat(name,"[0]"));return retArr;case'g':retArr.push("user_".concat(name,"[1]"));return retArr;case'b':retArr.push("user_".concat(name,"[2]"));return retArr;case'a':retArr.push("user_".concat(name,"[3]"));return retArr;}break;case'this.constants.value':case'this.constants.value[]':case'this.constants.value[][]':case'this.constants.value[][][]':break;case'fn()[]':this.astGeneric(mNode.object,retArr);retArr.push('[');this.astGeneric(mNode.property,retArr);retArr.push(']');return retArr;case'fn()[][]':this.astGeneric(mNode.object.object,retArr);retArr.push('[');this.astGeneric(mNode.object.property,retArr);retArr.push(']');retArr.push('[');this.astGeneric(mNode.property,retArr);retArr.push(']');return retArr;default:throw this.astErrorOutput('Unexpected expression',mNode);}if(!mNode.computed){switch(type){case'Number':case'Integer':case'Float':case'Boolean':retArr.push("".concat(origin,"_").concat(name));return retArr;}}var markupName="".concat(origin,"_").concat(name);switch(type){case'Array(2)':case'Array(3)':case'Array(4)':case'Matrix(2)':case'Matrix(3)':case'Matrix(4)':case'HTMLImageArray':case'ArrayTexture(1)':case'ArrayTexture(2)':case'ArrayTexture(3)':case'ArrayTexture(4)':case'HTMLImage':default:var size;var isInput;if(origin==='constants'){var constant=this.constants[name];isInput=this.constantTypes[name]==='Input';size=isInput?constant.size:null;}else{isInput=this.isInput(name);size=isInput?this.argumentSizes[this.argumentNames.indexOf(name)]:null;}retArr.push("".concat(markupName));if(zProperty&&yProperty){if(isInput){retArr.push('[(');this.astGeneric(zProperty,retArr);retArr.push("*".concat(this.dynamicArguments?'(outputY * outputX)':size[1]*size[0],")+("));this.astGeneric(yProperty,retArr);retArr.push("*".concat(this.dynamicArguments?'outputX':size[0],")+"));this.astGeneric(xProperty,retArr);retArr.push(']');}else{retArr.push('[');this.astGeneric(zProperty,retArr);retArr.push(']');retArr.push('[');this.astGeneric(yProperty,retArr);retArr.push(']');retArr.push('[');this.astGeneric(xProperty,retArr);retArr.push(']');}}else if(yProperty){if(isInput){retArr.push('[(');this.astGeneric(yProperty,retArr);retArr.push("*".concat(this.dynamicArguments?'outputX':size[0],")+"));this.astGeneric(xProperty,retArr);retArr.push(']');}else{retArr.push('[');this.astGeneric(yProperty,retArr);retArr.push(']');retArr.push('[');this.astGeneric(xProperty,retArr);retArr.push(']');}}else if(typeof xProperty!=='undefined'){retArr.push('[');this.astGeneric(xProperty,retArr);retArr.push(']');}}return retArr;}},{key:"astCallExpression",value:function astCallExpression(ast,retArr){if(ast.type!=='CallExpression'){throw this.astErrorOutput('Unknown CallExpression',ast);}var functionName=this.astMemberExpressionUnroll(ast.callee);if(this.calledFunctions.indexOf(functionName)<0){this.calledFunctions.push(functionName);}var isMathFunction=this.isAstMathFunction(ast);if(this.onFunctionCall){this.onFunctionCall(this.name,functionName,ast.arguments);}retArr.push(functionName);retArr.push('(');var targetTypes=this.lookupFunctionArgumentTypes(functionName)||[];for(var i=0;i<ast.arguments.length;++i){var argument=ast.arguments[i];var argumentType=this.getType(argument);if(!targetTypes[i]){this.triggerImplyArgumentType(functionName,i,argumentType,this);}if(i>0){retArr.push(', ');}this.astGeneric(argument,retArr);}retArr.push(')');return retArr;}},{key:"astArrayExpression",value:function astArrayExpression(arrNode,retArr){var returnType=this.getType(arrNode);var arrLen=arrNode.elements.length;var elements=[];for(var i=0;i<arrLen;++i){var element=[];this.astGeneric(arrNode.elements[i],element);elements.push(element.join(''));}switch(returnType){case'Matrix(2)':case'Matrix(3)':case'Matrix(4)':retArr.push("[".concat(elements.join(', '),"]"));break;default:retArr.push("new Float32Array([".concat(elements.join(', '),"])"));}return retArr;}},{key:"astDebuggerStatement",value:function astDebuggerStatement(arrNode,retArr){retArr.push('debugger;');return retArr;}}]);return CPUFunctionNode;}(FunctionNode);module.exports={CPUFunctionNode:CPUFunctionNode};},{"../function-node":10}],7:[function(require,module,exports){var _require3=require('../../utils'),utils=_require3.utils;function constantsToString(constants,types){var results=[];for(var _name3 in types){if(!types.hasOwnProperty(_name3))continue;var type=types[_name3];var constant=constants[_name3];switch(type){case'Number':case'Integer':case'Float':case'Boolean':results.push("".concat(_name3,":").concat(constant));break;case'Array(2)':case'Array(3)':case'Array(4)':case'Matrix(2)':case'Matrix(3)':case'Matrix(4)':results.push("".concat(_name3,":new ").concat(constant.constructor.name,"(").concat(JSON.stringify(Array.from(constant)),")"));break;}}return"{ ".concat(results.join()," }");}function cpuKernelString(cpuKernel,name){var header=[];var thisProperties=[];var beforeReturn=[];var useFunctionKeyword=!/^function/.test(cpuKernel.color.toString());header.push('  const { context, canvas, constants: incomingConstants } = settings;',"  const output = new Int32Array(".concat(JSON.stringify(Array.from(cpuKernel.output)),");"),"  const _constantTypes = ".concat(JSON.stringify(cpuKernel.constantTypes),";"),"  const _constants = ".concat(constantsToString(cpuKernel.constants,cpuKernel.constantTypes),";"));thisProperties.push('    constants: _constants,','    context,','    output,','    thread: {x: 0, y: 0, z: 0},');if(cpuKernel.graphical){header.push("  const _imageData = context.createImageData(".concat(cpuKernel.output[0],", ").concat(cpuKernel.output[1],");"));header.push("  const _colorData = new Uint8ClampedArray(".concat(cpuKernel.output[0]," * ").concat(cpuKernel.output[1]," * 4);"));var colorFn=utils.flattenFunctionToString((useFunctionKeyword?'function ':'')+cpuKernel.color.toString(),{thisLookup:function thisLookup(propertyName){switch(propertyName){case'_colorData':return'_colorData';case'_imageData':return'_imageData';case'output':return'output';case'thread':return'this.thread';}return JSON.stringify(cpuKernel[propertyName]);},findDependency:function findDependency(object,name){return null;}});var getPixelsFn=utils.flattenFunctionToString((useFunctionKeyword?'function ':'')+cpuKernel.getPixels.toString(),{thisLookup:function thisLookup(propertyName){switch(propertyName){case'_colorData':return'_colorData';case'_imageData':return'_imageData';case'output':return'output';case'thread':return'this.thread';}return JSON.stringify(cpuKernel[propertyName]);},findDependency:function findDependency(){return null;}});thisProperties.push('    _imageData,','    _colorData,',"    color: ".concat(colorFn,","));beforeReturn.push("  kernel.getPixels = ".concat(getPixelsFn,";"));}var constantTypes=[];var constantKeys=Object.keys(cpuKernel.constantTypes);for(var i=0;i<constantKeys.length;i++){constantTypes.push(cpuKernel.constantTypes[constantKeys]);}if(cpuKernel.argumentTypes.indexOf('HTMLImageArray')!==-1||constantTypes.indexOf('HTMLImageArray')!==-1){var flattenedImageTo3DArray=utils.flattenFunctionToString((useFunctionKeyword?'function ':'')+cpuKernel._imageTo3DArray.toString(),{doNotDefine:['canvas'],findDependency:function findDependency(object,name){if(object==='this'){return(useFunctionKeyword?'function ':'')+cpuKernel[name].toString();}return null;},thisLookup:function thisLookup(propertyName){switch(propertyName){case'canvas':return;case'context':return'context';}}});beforeReturn.push(flattenedImageTo3DArray);thisProperties.push("    _mediaTo2DArray,");thisProperties.push("    _imageTo3DArray,");}else if(cpuKernel.argumentTypes.indexOf('HTMLImage')!==-1||constantTypes.indexOf('HTMLImage')!==-1){var flattenedImageTo2DArray=utils.flattenFunctionToString((useFunctionKeyword?'function ':'')+cpuKernel._mediaTo2DArray.toString(),{findDependency:function findDependency(object,name){return null;},thisLookup:function thisLookup(propertyName){switch(propertyName){case'canvas':return'settings.canvas';case'context':return'settings.context';}throw new Error('unhandled thisLookup');}});beforeReturn.push(flattenedImageTo2DArray);thisProperties.push("    _mediaTo2DArray,");}return"function(settings) {\n      ".concat(header.join('\n'),"\n        for (const p in _constantTypes) {\n          if (!_constantTypes.hasOwnProperty(p)) continue;\n          const type = _constantTypes[p];\n          switch (type) {\n            case 'Number':\n            case 'Integer':\n            case 'Float':\n            case 'Boolean':\n            case 'Array(2)':\n            case 'Array(3)':\n            case 'Array(4)':\n            case 'Matrix(2)':\n            case 'Matrix(3)':\n            case 'Matrix(4)':\n              if (incomingConstants.hasOwnProperty(p)) {\n                console.warn('constant ' + p + ' of type ' + type + ' cannot be resigned');\n              }\n              continue;\n          }\n          if (!incomingConstants.hasOwnProperty(p)) {\n            throw new Error('constant ' + p + ' not found');\n          }\n          _constants[p] = incomingConstants[p];\n        }\n        const kernel = (function() {\n      ").concat(cpuKernel._kernelString,"\n        })\n          .apply({ ").concat(thisProperties.join('\n')," });\n        ").concat(beforeReturn.join('\n'),"\n        return kernel;\n      }");}module.exports={cpuKernelString:cpuKernelString};},{"../../utils":114}],8:[function(require,module,exports){var _require4=require('../kernel'),Kernel=_require4.Kernel;var _require5=require('../function-builder'),FunctionBuilder=_require5.FunctionBuilder;var _require6=require('./function-node'),CPUFunctionNode=_require6.CPUFunctionNode;var _require7=require('../../utils'),utils=_require7.utils;var _require8=require('./kernel-string'),cpuKernelString=_require8.cpuKernelString;var CPUKernel=/*#__PURE__*/function(_Kernel){_inherits(CPUKernel,_Kernel);var _super2=_createSuper(CPUKernel);function CPUKernel(source,settings){var _this;_classCallCheck(this,CPUKernel);_this=_super2.call(this,source,settings);_this.mergeSettings(source.settings||settings);_this._imageData=null;_this._colorData=null;_this._kernelString=null;_this._prependedString=[];_this.thread={x:0,y:0,z:0};_this.translatedSources=null;return _this;}_createClass(CPUKernel,[{key:"initCanvas",value:function initCanvas(){if(typeof document!=='undefined'){return document.createElement('canvas');}else if(typeof OffscreenCanvas!=='undefined'){return new OffscreenCanvas(0,0);}}},{key:"initContext",value:function initContext(){if(!this.canvas)return null;return this.canvas.getContext('2d');}},{key:"initPlugins",value:function initPlugins(settings){return[];}},{key:"validateSettings",value:function validateSettings(args){if(!this.output||this.output.length===0){if(args.length!==1){throw new Error('Auto output only supported for kernels with only one input');}var argType=utils.getVariableType(args[0],this.strictIntegers);if(argType==='Array'){this.output=utils.getDimensions(argType);}else if(argType==='NumberTexture'||argType==='ArrayTexture(4)'){this.output=args[0].output;}else{throw new Error('Auto output not supported for input type: '+argType);}}if(this.graphical){if(this.output.length!==2){throw new Error('Output must have 2 dimensions on graphical mode');}}this.checkOutput();}},{key:"translateSource",value:function translateSource(){this.leadingReturnStatement=this.output.length>1?'resultX[x] = ':'result[x] = ';if(this.subKernels){var followingReturnStatement=[];for(var i=0;i<this.subKernels.length;i++){var _name4=this.subKernels[i].name;followingReturnStatement.push(this.output.length>1?"resultX_".concat(_name4,"[x] = subKernelResult_").concat(_name4,";\n"):"result_".concat(_name4,"[x] = subKernelResult_").concat(_name4,";\n"));}this.followingReturnStatement=followingReturnStatement.join('');}var functionBuilder=FunctionBuilder.fromKernel(this,CPUFunctionNode);this.translatedSources=functionBuilder.getPrototypes('kernel');if(!this.graphical&&!this.returnType){this.returnType=functionBuilder.getKernelResultType();}}},{key:"build",value:function build(){if(this.built)return;this.setupConstants();this.setupArguments(arguments);this.validateSettings(arguments);this.translateSource();if(this.graphical){var canvas=this.canvas,output=this.output;if(!canvas){throw new Error('no canvas available for using graphical output');}var width=output[0];var height=output[1]||1;canvas.width=width;canvas.height=height;this._imageData=this.context.createImageData(width,height);this._colorData=new Uint8ClampedArray(width*height*4);}var kernelString=this.getKernelString();this.kernelString=kernelString;if(this.debug){console.log('Function output:');console.log(kernelString);}try{this.run=new Function([],kernelString).bind(this)();}catch(e){console.error('An error occurred compiling the javascript: ',e);}this.buildSignature(arguments);this.built=true;}},{key:"color",value:function color(r,g,b,a){if(typeof a==='undefined'){a=1;}r=Math.floor(r*255);g=Math.floor(g*255);b=Math.floor(b*255);a=Math.floor(a*255);var width=this.output[0];var height=this.output[1];var x=this.thread.x;var y=height-this.thread.y-1;var index=x+y*width;this._colorData[index*4+0]=r;this._colorData[index*4+1]=g;this._colorData[index*4+2]=b;this._colorData[index*4+3]=a;}},{key:"getKernelString",value:function getKernelString(){if(this._kernelString!==null)return this._kernelString;var kernelThreadString=null;var translatedSources=this.translatedSources;if(translatedSources.length>1){translatedSources=translatedSources.filter(function(fn){if(/^function/.test(fn))return fn;kernelThreadString=fn;return false;});}else{kernelThreadString=translatedSources.shift();}return this._kernelString="  const LOOP_MAX = ".concat(this._getLoopMaxString(),";\n        ").concat(this.injectedNative||'',"\n        const _this = this;\n        ").concat(this._resultKernelHeader(),"\n        ").concat(this._processConstants(),"\n        return (").concat(this.argumentNames.map(function(argumentName){return'user_'+argumentName;}).join(', '),") => {\n          ").concat(this._prependedString.join(''),"\n          ").concat(this._earlyThrows(),"\n          ").concat(this._processArguments(),"\n          ").concat(this.graphical?this._graphicalKernelBody(kernelThreadString):this._resultKernelBody(kernelThreadString),"\n          ").concat(translatedSources.length>0?translatedSources.join('\n'):'',"\n        };");}},{key:"toString",value:function toString(){return cpuKernelString(this);}},{key:"_getLoopMaxString",value:function _getLoopMaxString(){return this.loopMaxIterations?" ".concat(parseInt(this.loopMaxIterations),";"):' 1000;';}},{key:"_processConstants",value:function _processConstants(){if(!this.constants)return'';var result=[];for(var p in this.constants){var type=this.constantTypes[p];switch(type){case'HTMLCanvas':case'HTMLImage':case'HTMLVideo':result.push("    const constants_".concat(p," = this._mediaTo2DArray(this.constants.").concat(p,");\n"));break;case'HTMLImageArray':result.push("    const constants_".concat(p," = this._imageTo3DArray(this.constants.").concat(p,");\n"));break;case'Input':result.push("    const constants_".concat(p," = this.constants.").concat(p,".value;\n"));break;default:result.push("    const constants_".concat(p," = this.constants.").concat(p,";\n"));}}return result.join('');}},{key:"_earlyThrows",value:function _earlyThrows(){var _this2=this;if(this.graphical)return'';if(this.immutable)return'';if(!this.pipeline)return'';var arrayArguments=[];for(var i=0;i<this.argumentTypes.length;i++){if(this.argumentTypes[i]==='Array'){arrayArguments.push(this.argumentNames[i]);}}if(arrayArguments.length===0)return'';var checks=[];var _loop=function _loop(_i4){var argumentName=arrayArguments[_i4];var checkSubKernels=_this2._mapSubKernels(function(subKernel){return"user_".concat(argumentName," === result_").concat(subKernel.name);}).join(' || ');checks.push("user_".concat(argumentName," === result").concat(checkSubKernels?" || ".concat(checkSubKernels):''));};for(var _i4=0;_i4<arrayArguments.length;_i4++){_loop(_i4);}return"if (".concat(checks.join(' || '),") throw new Error('Source and destination arrays are the same.  Use immutable = true');");}},{key:"_processArguments",value:function _processArguments(){var result=[];for(var i=0;i<this.argumentTypes.length;i++){var variableName="user_".concat(this.argumentNames[i]);switch(this.argumentTypes[i]){case'HTMLCanvas':case'HTMLImage':case'HTMLVideo':result.push("    ".concat(variableName," = this._mediaTo2DArray(").concat(variableName,");\n"));break;case'HTMLImageArray':result.push("    ".concat(variableName," = this._imageTo3DArray(").concat(variableName,");\n"));break;case'Input':result.push("    ".concat(variableName," = ").concat(variableName,".value;\n"));break;case'ArrayTexture(1)':case'ArrayTexture(2)':case'ArrayTexture(3)':case'ArrayTexture(4)':case'NumberTexture':case'MemoryOptimizedNumberTexture':result.push("\n          if (".concat(variableName,".toArray) {\n            if (!_this.textureCache) {\n              _this.textureCache = [];\n              _this.arrayCache = [];\n            }\n            const textureIndex = _this.textureCache.indexOf(").concat(variableName,");\n            if (textureIndex !== -1) {\n              ").concat(variableName," = _this.arrayCache[textureIndex];\n            } else {\n              _this.textureCache.push(").concat(variableName,");\n              ").concat(variableName," = ").concat(variableName,".toArray();\n              _this.arrayCache.push(").concat(variableName,");\n            }\n          }"));break;}}return result.join('');}},{key:"_mediaTo2DArray",value:function _mediaTo2DArray(media){var canvas=this.canvas;var width=media.width>0?media.width:media.videoWidth;var height=media.height>0?media.height:media.videoHeight;if(canvas.width<width){canvas.width=width;}if(canvas.height<height){canvas.height=height;}var ctx=this.context;ctx.drawImage(media,0,0,width,height);var pixelsData=ctx.getImageData(0,0,width,height).data;var imageArray=new Array(height);var index=0;for(var y=height-1;y>=0;y--){var row=imageArray[y]=new Array(width);for(var x=0;x<width;x++){var pixel=new Float32Array(4);pixel[0]=pixelsData[index++]/255;pixel[1]=pixelsData[index++]/255;pixel[2]=pixelsData[index++]/255;pixel[3]=pixelsData[index++]/255;row[x]=pixel;}}return imageArray;}},{key:"getPixels",value:function getPixels(flip){var _this$output=_slicedToArray(this.output,2),width=_this$output[0],height=_this$output[1];return flip?utils.flipPixels(this._imageData.data,width,height):this._imageData.data.slice(0);}},{key:"_imageTo3DArray",value:function _imageTo3DArray(images){var imagesArray=new Array(images.length);for(var i=0;i<images.length;i++){imagesArray[i]=this._mediaTo2DArray(images[i]);}return imagesArray;}},{key:"_resultKernelHeader",value:function _resultKernelHeader(){if(this.graphical)return'';if(this.immutable)return'';if(!this.pipeline)return'';switch(this.output.length){case 1:return this._mutableKernel1DResults();case 2:return this._mutableKernel2DResults();case 3:return this._mutableKernel3DResults();}}},{key:"_resultKernelBody",value:function _resultKernelBody(kernelString){switch(this.output.length){case 1:return(!this.immutable&&this.pipeline?this._resultMutableKernel1DLoop(kernelString):this._resultImmutableKernel1DLoop(kernelString))+this._kernelOutput();case 2:return(!this.immutable&&this.pipeline?this._resultMutableKernel2DLoop(kernelString):this._resultImmutableKernel2DLoop(kernelString))+this._kernelOutput();case 3:return(!this.immutable&&this.pipeline?this._resultMutableKernel3DLoop(kernelString):this._resultImmutableKernel3DLoop(kernelString))+this._kernelOutput();default:throw new Error('unsupported size kernel');}}},{key:"_graphicalKernelBody",value:function _graphicalKernelBody(kernelThreadString){switch(this.output.length){case 2:return this._graphicalKernel2DLoop(kernelThreadString)+this._graphicalOutput();default:throw new Error('unsupported size kernel');}}},{key:"_graphicalOutput",value:function _graphicalOutput(){return"\n          this._imageData.data.set(this._colorData);\n          this.context.putImageData(this._imageData, 0, 0);\n          return;";}},{key:"_getKernelResultTypeConstructorString",value:function _getKernelResultTypeConstructorString(){switch(this.returnType){case'LiteralInteger':case'Number':case'Integer':case'Float':return'Float32Array';case'Array(2)':case'Array(3)':case'Array(4)':return'Array';default:if(this.graphical){return'Float32Array';}throw new Error("unhandled returnType ".concat(this.returnType));}}},{key:"_resultImmutableKernel1DLoop",value:function _resultImmutableKernel1DLoop(kernelString){var constructorString=this._getKernelResultTypeConstructorString();return"  const outputX = _this.output[0];\n          const result = new ".concat(constructorString,"(outputX);\n          ").concat(this._mapSubKernels(function(subKernel){return"const result_".concat(subKernel.name," = new ").concat(constructorString,"(outputX);\n");}).join('    '),"\n          ").concat(this._mapSubKernels(function(subKernel){return"let subKernelResult_".concat(subKernel.name,";\n");}).join('    '),"\n          for (let x = 0; x < outputX; x++) {\n            this.thread.x = x;\n            this.thread.y = 0;\n            this.thread.z = 0;\n            ").concat(kernelString,"\n          }");}},{key:"_mutableKernel1DResults",value:function _mutableKernel1DResults(){var constructorString=this._getKernelResultTypeConstructorString();return"  const outputX = _this.output[0];\n          const result = new ".concat(constructorString,"(outputX);\n          ").concat(this._mapSubKernels(function(subKernel){return"const result_".concat(subKernel.name," = new ").concat(constructorString,"(outputX);\n");}).join('    '),"\n          ").concat(this._mapSubKernels(function(subKernel){return"let subKernelResult_".concat(subKernel.name,";\n");}).join('    '));}},{key:"_resultMutableKernel1DLoop",value:function _resultMutableKernel1DLoop(kernelString){return"  const outputX = _this.output[0];\n          for (let x = 0; x < outputX; x++) {\n            this.thread.x = x;\n            this.thread.y = 0;\n            this.thread.z = 0;\n            ".concat(kernelString,"\n          }");}},{key:"_resultImmutableKernel2DLoop",value:function _resultImmutableKernel2DLoop(kernelString){var constructorString=this._getKernelResultTypeConstructorString();return"  const outputX = _this.output[0];\n          const outputY = _this.output[1];\n          const result = new Array(outputY);\n          ".concat(this._mapSubKernels(function(subKernel){return"const result_".concat(subKernel.name," = new Array(outputY);\n");}).join('    '),"\n          ").concat(this._mapSubKernels(function(subKernel){return"let subKernelResult_".concat(subKernel.name,";\n");}).join('    '),"\n          for (let y = 0; y < outputY; y++) {\n            this.thread.z = 0;\n            this.thread.y = y;\n            const resultX = result[y] = new ").concat(constructorString,"(outputX);\n            ").concat(this._mapSubKernels(function(subKernel){return"const resultX_".concat(subKernel.name," = result_").concat(subKernel.name,"[y] = new ").concat(constructorString,"(outputX);\n");}).join(''),"\n            for (let x = 0; x < outputX; x++) {\n              this.thread.x = x;\n              ").concat(kernelString,"\n            }\n          }");}},{key:"_mutableKernel2DResults",value:function _mutableKernel2DResults(){var constructorString=this._getKernelResultTypeConstructorString();return"  const outputX = _this.output[0];\n          const outputY = _this.output[1];\n          const result = new Array(outputY);\n          ".concat(this._mapSubKernels(function(subKernel){return"const result_".concat(subKernel.name," = new Array(outputY);\n");}).join('    '),"\n          ").concat(this._mapSubKernels(function(subKernel){return"let subKernelResult_".concat(subKernel.name,";\n");}).join('    '),"\n          for (let y = 0; y < outputY; y++) {\n            const resultX = result[y] = new ").concat(constructorString,"(outputX);\n            ").concat(this._mapSubKernels(function(subKernel){return"const resultX_".concat(subKernel.name," = result_").concat(subKernel.name,"[y] = new ").concat(constructorString,"(outputX);\n");}).join(''),"\n          }");}},{key:"_resultMutableKernel2DLoop",value:function _resultMutableKernel2DLoop(kernelString){var constructorString=this._getKernelResultTypeConstructorString();return"  const outputX = _this.output[0];\n          const outputY = _this.output[1];\n          for (let y = 0; y < outputY; y++) {\n            this.thread.z = 0;\n            this.thread.y = y;\n            const resultX = result[y];\n            ".concat(this._mapSubKernels(function(subKernel){return"const resultX_".concat(subKernel.name," = result_").concat(subKernel.name,"[y] = new ").concat(constructorString,"(outputX);\n");}).join(''),"\n            for (let x = 0; x < outputX; x++) {\n              this.thread.x = x;\n              ").concat(kernelString,"\n            }\n          }");}},{key:"_graphicalKernel2DLoop",value:function _graphicalKernel2DLoop(kernelString){return"  const outputX = _this.output[0];\n          const outputY = _this.output[1];\n          for (let y = 0; y < outputY; y++) {\n            this.thread.z = 0;\n            this.thread.y = y;\n            for (let x = 0; x < outputX; x++) {\n              this.thread.x = x;\n              ".concat(kernelString,"\n            }\n          }");}},{key:"_resultImmutableKernel3DLoop",value:function _resultImmutableKernel3DLoop(kernelString){var constructorString=this._getKernelResultTypeConstructorString();return"  const outputX = _this.output[0];\n          const outputY = _this.output[1];\n          const outputZ = _this.output[2];\n          const result = new Array(outputZ);\n          ".concat(this._mapSubKernels(function(subKernel){return"const result_".concat(subKernel.name," = new Array(outputZ);\n");}).join('    '),"\n          ").concat(this._mapSubKernels(function(subKernel){return"let subKernelResult_".concat(subKernel.name,";\n");}).join('    '),"\n          for (let z = 0; z < outputZ; z++) {\n            this.thread.z = z;\n            const resultY = result[z] = new Array(outputY);\n            ").concat(this._mapSubKernels(function(subKernel){return"const resultY_".concat(subKernel.name," = result_").concat(subKernel.name,"[z] = new Array(outputY);\n");}).join('      '),"\n            for (let y = 0; y < outputY; y++) {\n              this.thread.y = y;\n              const resultX = resultY[y] = new ").concat(constructorString,"(outputX);\n              ").concat(this._mapSubKernels(function(subKernel){return"const resultX_".concat(subKernel.name," = resultY_").concat(subKernel.name,"[y] = new ").concat(constructorString,"(outputX);\n");}).join('        '),"\n              for (let x = 0; x < outputX; x++) {\n                this.thread.x = x;\n                ").concat(kernelString,"\n              }\n            }\n          }");}},{key:"_mutableKernel3DResults",value:function _mutableKernel3DResults(){var constructorString=this._getKernelResultTypeConstructorString();return"  const outputX = _this.output[0];\n          const outputY = _this.output[1];\n          const outputZ = _this.output[2];\n          const result = new Array(outputZ);\n          ".concat(this._mapSubKernels(function(subKernel){return"const result_".concat(subKernel.name," = new Array(outputZ);\n");}).join('    '),"\n          ").concat(this._mapSubKernels(function(subKernel){return"let subKernelResult_".concat(subKernel.name,";\n");}).join('    '),"\n          for (let z = 0; z < outputZ; z++) {\n            const resultY = result[z] = new Array(outputY);\n            ").concat(this._mapSubKernels(function(subKernel){return"const resultY_".concat(subKernel.name," = result_").concat(subKernel.name,"[z] = new Array(outputY);\n");}).join('      '),"\n            for (let y = 0; y < outputY; y++) {\n              const resultX = resultY[y] = new ").concat(constructorString,"(outputX);\n              ").concat(this._mapSubKernels(function(subKernel){return"const resultX_".concat(subKernel.name," = resultY_").concat(subKernel.name,"[y] = new ").concat(constructorString,"(outputX);\n");}).join('        '),"\n            }\n          }");}},{key:"_resultMutableKernel3DLoop",value:function _resultMutableKernel3DLoop(kernelString){return"  const outputX = _this.output[0];\n          const outputY = _this.output[1];\n          const outputZ = _this.output[2];\n          for (let z = 0; z < outputZ; z++) {\n            this.thread.z = z;\n            const resultY = result[z];\n            for (let y = 0; y < outputY; y++) {\n              this.thread.y = y;\n              const resultX = resultY[y];\n              for (let x = 0; x < outputX; x++) {\n                this.thread.x = x;\n                ".concat(kernelString,"\n              }\n            }\n          }");}},{key:"_kernelOutput",value:function _kernelOutput(){if(!this.subKernels){return'\n    return result;';}return"\n    return {\n            result: result,\n            ".concat(this.subKernels.map(function(subKernel){return"".concat(subKernel.property,": result_").concat(subKernel.name);}).join(',\n      '),"\n          };");}},{key:"_mapSubKernels",value:function _mapSubKernels(fn){return this.subKernels===null?['']:this.subKernels.map(fn);}},{key:"destroy",value:function destroy(removeCanvasReference){if(removeCanvasReference){delete this.canvas;}}},{key:"toJSON",value:function toJSON(){var json=_get(_getPrototypeOf(CPUKernel.prototype),"toJSON",this).call(this);json.functionNodes=FunctionBuilder.fromKernel(this,CPUFunctionNode).toJSON();return json;}},{key:"setOutput",value:function setOutput(output){_get(_getPrototypeOf(CPUKernel.prototype),"setOutput",this).call(this,output);var _this$output2=_slicedToArray(this.output,2),width=_this$output2[0],height=_this$output2[1];if(this.graphical){this._imageData=this.context.createImageData(width,height);this._colorData=new Uint8ClampedArray(width*height*4);}}},{key:"prependString",value:function prependString(value){if(this._kernelString)throw new Error('Kernel already built');this._prependedString.push(value);}},{key:"hasPrependString",value:function hasPrependString(value){return this._prependedString.indexOf(value)>-1;}}],[{key:"getFeatures",value:function getFeatures(){return this.features;}},{key:"features",get:function get(){return Object.freeze({kernelMap:true,isIntegerDivisionAccurate:true});}},{key:"isSupported",get:function get(){return true;}},{key:"isContextMatch",value:function isContextMatch(context){return false;}},{key:"mode",get:function get(){return'cpu';}},{key:"nativeFunctionArguments",value:function nativeFunctionArguments(){return null;}},{key:"nativeFunctionReturnType",value:function nativeFunctionReturnType(){throw new Error("Looking up native function return type not supported on ".concat(this.name));}},{key:"combineKernels",value:function combineKernels(combinedKernel){return combinedKernel;}},{key:"getSignature",value:function getSignature(kernel,argumentTypes){return'cpu'+(argumentTypes.length>0?':'+argumentTypes.join(','):'');}},{key:"destroyContext",value:function destroyContext(context){}}]);return CPUKernel;}(Kernel);module.exports={CPUKernel:CPUKernel};},{"../../utils":114,"../function-builder":9,"../kernel":36,"./function-node":6,"./kernel-string":7}],9:[function(require,module,exports){var FunctionBuilder=/*#__PURE__*/function(){function FunctionBuilder(settings){_classCallCheck(this,FunctionBuilder);settings=settings||{};this.kernel=settings.kernel;this.rootNode=settings.rootNode;this.functionNodes=settings.functionNodes||[];this.subKernelNodes=settings.subKernelNodes||[];this.nativeFunctions=settings.nativeFunctions||[];this.functionMap={};this.nativeFunctionNames=[];this.lookupChain=[];this.functionNodeDependencies={};this.functionCalls={};if(this.rootNode){this.functionMap['kernel']=this.rootNode;}if(this.functionNodes){for(var i=0;i<this.functionNodes.length;i++){this.functionMap[this.functionNodes[i].name]=this.functionNodes[i];}}if(this.subKernelNodes){for(var _i5=0;_i5<this.subKernelNodes.length;_i5++){this.functionMap[this.subKernelNodes[_i5].name]=this.subKernelNodes[_i5];}}if(this.nativeFunctions){for(var _i6=0;_i6<this.nativeFunctions.length;_i6++){var nativeFunction=this.nativeFunctions[_i6];this.nativeFunctionNames.push(nativeFunction.name);}}}_createClass(FunctionBuilder,[{key:"addFunctionNode",value:function addFunctionNode(functionNode){if(!functionNode.name)throw new Error('functionNode.name needs set');this.functionMap[functionNode.name]=functionNode;if(functionNode.isRootKernel){this.rootNode=functionNode;}}},{key:"traceFunctionCalls",value:function traceFunctionCalls(functionName,retList){functionName=functionName||'kernel';retList=retList||[];if(this.nativeFunctionNames.indexOf(functionName)>-1){var nativeFunctionIndex=retList.indexOf(functionName);if(nativeFunctionIndex===-1){retList.push(functionName);}else{var dependantNativeFunctionName=retList.splice(nativeFunctionIndex,1)[0];retList.push(dependantNativeFunctionName);}return retList;}var functionNode=this.functionMap[functionName];if(functionNode){var functionIndex=retList.indexOf(functionName);if(functionIndex===-1){retList.push(functionName);functionNode.toString();for(var i=0;i<functionNode.calledFunctions.length;++i){this.traceFunctionCalls(functionNode.calledFunctions[i],retList);}}else{var dependantFunctionName=retList.splice(functionIndex,1)[0];retList.push(dependantFunctionName);}}return retList;}},{key:"getPrototypeString",value:function getPrototypeString(functionName){return this.getPrototypes(functionName).join('\n');}},{key:"getPrototypes",value:function getPrototypes(functionName){if(this.rootNode){this.rootNode.toString();}if(functionName){return this.getPrototypesFromFunctionNames(this.traceFunctionCalls(functionName,[]).reverse());}return this.getPrototypesFromFunctionNames(Object.keys(this.functionMap));}},{key:"getStringFromFunctionNames",value:function getStringFromFunctionNames(functionList){var ret=[];for(var i=0;i<functionList.length;++i){var node=this.functionMap[functionList[i]];if(node){ret.push(this.functionMap[functionList[i]].toString());}}return ret.join('\n');}},{key:"getPrototypesFromFunctionNames",value:function getPrototypesFromFunctionNames(functionList){var ret=[];for(var i=0;i<functionList.length;++i){var functionName=functionList[i];var functionIndex=this.nativeFunctionNames.indexOf(functionName);if(functionIndex>-1){ret.push(this.nativeFunctions[functionIndex].source);continue;}var node=this.functionMap[functionName];if(node){ret.push(node.toString());}}return ret;}},{key:"toJSON",value:function toJSON(){var _this3=this;return this.traceFunctionCalls(this.rootNode.name).reverse().map(function(name){var nativeIndex=_this3.nativeFunctions.indexOf(name);if(nativeIndex>-1){return{name:name,source:_this3.nativeFunctions[nativeIndex].source};}else if(_this3.functionMap[name]){return _this3.functionMap[name].toJSON();}else{throw new Error("function ".concat(name," not found"));}});}},{key:"fromJSON",value:function fromJSON(jsonFunctionNodes,FunctionNode){this.functionMap={};for(var i=0;i<jsonFunctionNodes.length;i++){var jsonFunctionNode=jsonFunctionNodes[i];this.functionMap[jsonFunctionNode.settings.name]=new FunctionNode(jsonFunctionNode.ast,jsonFunctionNode.settings);}return this;}},{key:"getString",value:function getString(functionName){if(functionName){return this.getStringFromFunctionNames(this.traceFunctionCalls(functionName).reverse());}return this.getStringFromFunctionNames(Object.keys(this.functionMap));}},{key:"lookupReturnType",value:function lookupReturnType(functionName,ast,requestingNode){if(ast.type!=='CallExpression'){throw new Error("expected ast type of \"CallExpression\", but is ".concat(ast.type));}if(this._isNativeFunction(functionName)){return this._lookupNativeFunctionReturnType(functionName);}else if(this._isFunction(functionName)){var node=this._getFunction(functionName);if(node.returnType){return node.returnType;}else{for(var i=0;i<this.lookupChain.length;i++){if(this.lookupChain[i].ast===ast){if(node.argumentTypes.length===0&&ast.arguments.length>0){var args=ast.arguments;for(var j=0;j<args.length;j++){this.lookupChain.push({name:requestingNode.name,ast:args[i],requestingNode:requestingNode});node.argumentTypes[j]=requestingNode.getType(args[j]);this.lookupChain.pop();}return node.returnType=node.getType(node.getJsAST());}throw new Error('circlical logic detected!');}}this.lookupChain.push({name:requestingNode.name,ast:ast,requestingNode:requestingNode});var type=node.getType(node.getJsAST());this.lookupChain.pop();return node.returnType=type;}}return null;}},{key:"_getFunction",value:function _getFunction(functionName){if(!this._isFunction(functionName)){new Error("Function ".concat(functionName," not found"));}return this.functionMap[functionName];}},{key:"_isFunction",value:function _isFunction(functionName){return Boolean(this.functionMap[functionName]);}},{key:"_getNativeFunction",value:function _getNativeFunction(functionName){for(var i=0;i<this.nativeFunctions.length;i++){if(this.nativeFunctions[i].name===functionName)return this.nativeFunctions[i];}return null;}},{key:"_isNativeFunction",value:function _isNativeFunction(functionName){return Boolean(this._getNativeFunction(functionName));}},{key:"_lookupNativeFunctionReturnType",value:function _lookupNativeFunctionReturnType(functionName){var nativeFunction=this._getNativeFunction(functionName);if(nativeFunction){return nativeFunction.returnType;}throw new Error("Native function ".concat(functionName," not found"));}},{key:"lookupFunctionArgumentTypes",value:function lookupFunctionArgumentTypes(functionName){if(this._isNativeFunction(functionName)){return this._getNativeFunction(functionName).argumentTypes;}else if(this._isFunction(functionName)){return this._getFunction(functionName).argumentTypes;}return null;}},{key:"lookupFunctionArgumentName",value:function lookupFunctionArgumentName(functionName,argumentIndex){return this._getFunction(functionName).argumentNames[argumentIndex];}},{key:"lookupFunctionArgumentBitRatio",value:function lookupFunctionArgumentBitRatio(functionName,argumentName){if(!this._isFunction(functionName)){throw new Error('function not found');}if(this.rootNode.name===functionName){var _i7=this.rootNode.argumentNames.indexOf(argumentName);if(_i7!==-1){return this.rootNode.argumentBitRatios[_i7];}}var node=this._getFunction(functionName);var i=node.argumentNames.indexOf(argumentName);if(i===-1){throw new Error('argument not found');}var bitRatio=node.argumentBitRatios[i];if(typeof bitRatio!=='number'){throw new Error('argument bit ratio not found');}return bitRatio;}},{key:"needsArgumentType",value:function needsArgumentType(functionName,i){if(!this._isFunction(functionName))return false;var fnNode=this._getFunction(functionName);return!fnNode.argumentTypes[i];}},{key:"assignArgumentType",value:function assignArgumentType(functionName,i,argumentType,requestingNode){if(!this._isFunction(functionName))return;var fnNode=this._getFunction(functionName);if(!fnNode.argumentTypes[i]){fnNode.argumentTypes[i]=argumentType;}}},{key:"assignArgumentBitRatio",value:function assignArgumentBitRatio(functionName,argumentName,calleeFunctionName,argumentIndex){var node=this._getFunction(functionName);if(this._isNativeFunction(calleeFunctionName))return null;var calleeNode=this._getFunction(calleeFunctionName);var i=node.argumentNames.indexOf(argumentName);if(i===-1){throw new Error("Argument ".concat(argumentName," not found in arguments from function ").concat(functionName));}var bitRatio=node.argumentBitRatios[i];if(typeof bitRatio!=='number'){throw new Error("Bit ratio for argument ".concat(argumentName," not found in function ").concat(functionName));}if(!calleeNode.argumentBitRatios){calleeNode.argumentBitRatios=new Array(calleeNode.argumentNames.length);}var calleeBitRatio=calleeNode.argumentBitRatios[i];if(typeof calleeBitRatio==='number'){if(calleeBitRatio!==bitRatio){throw new Error("Incompatible bit ratio found at function ".concat(functionName," at argument ").concat(argumentName));}return calleeBitRatio;}calleeNode.argumentBitRatios[i]=bitRatio;return bitRatio;}},{key:"trackFunctionCall",value:function trackFunctionCall(functionName,calleeFunctionName,args){if(!this.functionNodeDependencies[functionName]){this.functionNodeDependencies[functionName]=new Set();this.functionCalls[functionName]=[];}this.functionNodeDependencies[functionName].add(calleeFunctionName);this.functionCalls[functionName].push(args);}},{key:"getKernelResultType",value:function getKernelResultType(){return this.rootNode.returnType||this.rootNode.getType(this.rootNode.ast);}},{key:"getSubKernelResultType",value:function getSubKernelResultType(index){var subKernelNode=this.subKernelNodes[index];var called=false;for(var functionCallIndex=0;functionCallIndex<this.rootNode.functionCalls.length;functionCallIndex++){var functionCall=this.rootNode.functionCalls[functionCallIndex];if(functionCall.ast.callee.name===subKernelNode.name){called=true;}}if(!called){throw new Error("SubKernel ".concat(subKernelNode.name," never called by kernel"));}return subKernelNode.returnType||subKernelNode.getType(subKernelNode.getJsAST());}},{key:"getReturnTypes",value:function getReturnTypes(){var result=_defineProperty({},this.rootNode.name,this.rootNode.getType(this.rootNode.ast));var list=this.traceFunctionCalls(this.rootNode.name);for(var i=0;i<list.length;i++){var functionName=list[i];var functionNode=this.functionMap[functionName];result[functionName]=functionNode.getType(functionNode.ast);}return result;}}],[{key:"fromKernel",value:function fromKernel(kernel,FunctionNode,extraNodeOptions){var kernelArguments=kernel.kernelArguments,kernelConstants=kernel.kernelConstants,argumentNames=kernel.argumentNames,argumentSizes=kernel.argumentSizes,argumentBitRatios=kernel.argumentBitRatios,constants=kernel.constants,constantBitRatios=kernel.constantBitRatios,debug=kernel.debug,loopMaxIterations=kernel.loopMaxIterations,nativeFunctions=kernel.nativeFunctions,output=kernel.output,optimizeFloatMemory=kernel.optimizeFloatMemory,precision=kernel.precision,plugins=kernel.plugins,source=kernel.source,subKernels=kernel.subKernels,functions=kernel.functions,leadingReturnStatement=kernel.leadingReturnStatement,followingReturnStatement=kernel.followingReturnStatement,dynamicArguments=kernel.dynamicArguments,dynamicOutput=kernel.dynamicOutput;var argumentTypes=new Array(kernelArguments.length);var constantTypes={};for(var i=0;i<kernelArguments.length;i++){argumentTypes[i]=kernelArguments[i].type;}for(var _i8=0;_i8<kernelConstants.length;_i8++){var kernelConstant=kernelConstants[_i8];constantTypes[kernelConstant.name]=kernelConstant.type;}var needsArgumentType=function needsArgumentType(functionName,index){return functionBuilder.needsArgumentType(functionName,index);};var assignArgumentType=function assignArgumentType(functionName,index,type){functionBuilder.assignArgumentType(functionName,index,type);};var lookupReturnType=function lookupReturnType(functionName,ast,requestingNode){return functionBuilder.lookupReturnType(functionName,ast,requestingNode);};var lookupFunctionArgumentTypes=function lookupFunctionArgumentTypes(functionName){return functionBuilder.lookupFunctionArgumentTypes(functionName);};var lookupFunctionArgumentName=function lookupFunctionArgumentName(functionName,argumentIndex){return functionBuilder.lookupFunctionArgumentName(functionName,argumentIndex);};var lookupFunctionArgumentBitRatio=function lookupFunctionArgumentBitRatio(functionName,argumentName){return functionBuilder.lookupFunctionArgumentBitRatio(functionName,argumentName);};var triggerImplyArgumentType=function triggerImplyArgumentType(functionName,i,argumentType,requestingNode){functionBuilder.assignArgumentType(functionName,i,argumentType,requestingNode);};var triggerImplyArgumentBitRatio=function triggerImplyArgumentBitRatio(functionName,argumentName,calleeFunctionName,argumentIndex){functionBuilder.assignArgumentBitRatio(functionName,argumentName,calleeFunctionName,argumentIndex);};var onFunctionCall=function onFunctionCall(functionName,calleeFunctionName,args){functionBuilder.trackFunctionCall(functionName,calleeFunctionName,args);};var onNestedFunction=function onNestedFunction(ast,source){var argumentNames=[];for(var _i9=0;_i9<ast.params.length;_i9++){argumentNames.push(ast.params[_i9].name);}var nestedFunction=new FunctionNode(source,Object.assign({},nodeOptions,{returnType:null,ast:ast,name:ast.id.name,argumentNames:argumentNames,lookupReturnType:lookupReturnType,lookupFunctionArgumentTypes:lookupFunctionArgumentTypes,lookupFunctionArgumentName:lookupFunctionArgumentName,lookupFunctionArgumentBitRatio:lookupFunctionArgumentBitRatio,needsArgumentType:needsArgumentType,assignArgumentType:assignArgumentType,triggerImplyArgumentType:triggerImplyArgumentType,triggerImplyArgumentBitRatio:triggerImplyArgumentBitRatio,onFunctionCall:onFunctionCall}));nestedFunction.traceFunctionAST(ast);functionBuilder.addFunctionNode(nestedFunction);};var nodeOptions=Object.assign({isRootKernel:false,onNestedFunction:onNestedFunction,lookupReturnType:lookupReturnType,lookupFunctionArgumentTypes:lookupFunctionArgumentTypes,lookupFunctionArgumentName:lookupFunctionArgumentName,lookupFunctionArgumentBitRatio:lookupFunctionArgumentBitRatio,needsArgumentType:needsArgumentType,assignArgumentType:assignArgumentType,triggerImplyArgumentType:triggerImplyArgumentType,triggerImplyArgumentBitRatio:triggerImplyArgumentBitRatio,onFunctionCall:onFunctionCall,optimizeFloatMemory:optimizeFloatMemory,precision:precision,constants:constants,constantTypes:constantTypes,constantBitRatios:constantBitRatios,debug:debug,loopMaxIterations:loopMaxIterations,output:output,plugins:plugins,dynamicArguments:dynamicArguments,dynamicOutput:dynamicOutput},extraNodeOptions||{});var rootNodeOptions=Object.assign({},nodeOptions,{isRootKernel:true,name:'kernel',argumentNames:argumentNames,argumentTypes:argumentTypes,argumentSizes:argumentSizes,argumentBitRatios:argumentBitRatios,leadingReturnStatement:leadingReturnStatement,followingReturnStatement:followingReturnStatement});if(_typeof(source)==='object'&&source.functionNodes){return new FunctionBuilder().fromJSON(source.functionNodes,FunctionNode);}var rootNode=new FunctionNode(source,rootNodeOptions);var functionNodes=null;if(functions){functionNodes=functions.map(function(fn){return new FunctionNode(fn.source,{returnType:fn.returnType,argumentTypes:fn.argumentTypes,output:output,plugins:plugins,constants:constants,constantTypes:constantTypes,constantBitRatios:constantBitRatios,optimizeFloatMemory:optimizeFloatMemory,precision:precision,lookupReturnType:lookupReturnType,lookupFunctionArgumentTypes:lookupFunctionArgumentTypes,lookupFunctionArgumentName:lookupFunctionArgumentName,lookupFunctionArgumentBitRatio:lookupFunctionArgumentBitRatio,needsArgumentType:needsArgumentType,assignArgumentType:assignArgumentType,triggerImplyArgumentType:triggerImplyArgumentType,triggerImplyArgumentBitRatio:triggerImplyArgumentBitRatio,onFunctionCall:onFunctionCall,onNestedFunction:onNestedFunction});});}var subKernelNodes=null;if(subKernels){subKernelNodes=subKernels.map(function(subKernel){var name=subKernel.name,source=subKernel.source;return new FunctionNode(source,Object.assign({},nodeOptions,{name:name,isSubKernel:true,isRootKernel:false}));});}var functionBuilder=new FunctionBuilder({kernel:kernel,rootNode:rootNode,functionNodes:functionNodes,nativeFunctions:nativeFunctions,subKernelNodes:subKernelNodes});return functionBuilder;}}]);return FunctionBuilder;}();module.exports={FunctionBuilder:FunctionBuilder};},{}],10:[function(require,module,exports){var acorn=require('acorn');var _require9=require('../utils'),utils=_require9.utils;var _require10=require('./function-tracer'),FunctionTracer=_require10.FunctionTracer;var FunctionNode=/*#__PURE__*/function(){function FunctionNode(source,settings){_classCallCheck(this,FunctionNode);if(!source&&!settings.ast){throw new Error('source parameter is missing');}settings=settings||{};this.source=source;this.ast=null;this.name=typeof source==='string'?settings.isRootKernel?'kernel':settings.name||utils.getFunctionNameFromString(source):null;this.calledFunctions=[];this.constants={};this.constantTypes={};this.constantBitRatios={};this.isRootKernel=false;this.isSubKernel=false;this.debug=null;this.functions=null;this.identifiers=null;this.contexts=null;this.functionCalls=null;this.states=[];this.needsArgumentType=null;this.assignArgumentType=null;this.lookupReturnType=null;this.lookupFunctionArgumentTypes=null;this.lookupFunctionArgumentBitRatio=null;this.triggerImplyArgumentType=null;this.triggerImplyArgumentBitRatio=null;this.onNestedFunction=null;this.onFunctionCall=null;this.optimizeFloatMemory=null;this.precision=null;this.loopMaxIterations=null;this.argumentNames=typeof this.source==='string'?utils.getArgumentNamesFromString(this.source):null;this.argumentTypes=[];this.argumentSizes=[];this.argumentBitRatios=null;this.returnType=null;this.output=[];this.plugins=null;this.leadingReturnStatement=null;this.followingReturnStatement=null;this.dynamicOutput=null;this.dynamicArguments=null;this.strictTypingChecking=false;this.fixIntegerDivisionAccuracy=null;if(settings){for(var p in settings){if(!settings.hasOwnProperty(p))continue;if(!this.hasOwnProperty(p))continue;this[p]=settings[p];}}this.literalTypes={};this.validate();this._string=null;this._internalVariableNames={};}_createClass(FunctionNode,[{key:"validate",value:function validate(){if(typeof this.source!=='string'&&!this.ast){throw new Error('this.source not a string');}if(!this.ast&&!utils.isFunctionString(this.source)){throw new Error('this.source not a function string');}if(!this.name){throw new Error('this.name could not be set');}if(this.argumentTypes.length>0&&this.argumentTypes.length!==this.argumentNames.length){throw new Error("argumentTypes count of ".concat(this.argumentTypes.length," exceeds ").concat(this.argumentNames.length));}if(this.output.length<1){throw new Error('this.output is not big enough');}}},{key:"isIdentifierConstant",value:function isIdentifierConstant(name){if(!this.constants)return false;return this.constants.hasOwnProperty(name);}},{key:"isInput",value:function isInput(argumentName){return this.argumentTypes[this.argumentNames.indexOf(argumentName)]==='Input';}},{key:"pushState",value:function pushState(state){this.states.push(state);}},{key:"popState",value:function popState(state){if(this.state!==state){throw new Error("Cannot popState ".concat(state," when in ").concat(this.state));}this.states.pop();}},{key:"isState",value:function isState(state){return this.state===state;}},{key:"state",get:function get(){return this.states[this.states.length-1];}},{key:"astMemberExpressionUnroll",value:function astMemberExpressionUnroll(ast){if(ast.type==='Identifier'){return ast.name;}else if(ast.type==='ThisExpression'){return'this';}if(ast.type==='MemberExpression'){if(ast.object&&ast.property){if(ast.object.hasOwnProperty('name')&&ast.object.name!=='Math'){return this.astMemberExpressionUnroll(ast.property);}return this.astMemberExpressionUnroll(ast.object)+'.'+this.astMemberExpressionUnroll(ast.property);}}if(ast.hasOwnProperty('expressions')){var firstExpression=ast.expressions[0];if(firstExpression.type==='Literal'&&firstExpression.value===0&&ast.expressions.length===2){return this.astMemberExpressionUnroll(ast.expressions[1]);}}throw this.astErrorOutput('Unknown astMemberExpressionUnroll',ast);}},{key:"getJsAST",value:function getJsAST(inParser){if(this.ast){return this.ast;}if(_typeof(this.source)==='object'){this.traceFunctionAST(this.source);return this.ast=this.source;}inParser=inParser||acorn;if(inParser===null){throw new Error('Missing JS to AST parser');}var ast=Object.freeze(inParser.parse("const parser_".concat(this.name," = ").concat(this.source,";"),{locations:true}));var functionAST=ast.body[0].declarations[0].init;this.traceFunctionAST(functionAST);if(!ast){throw new Error('Failed to parse JS code');}return this.ast=functionAST;}},{key:"traceFunctionAST",value:function traceFunctionAST(ast){var _FunctionTracer=new FunctionTracer(ast),contexts=_FunctionTracer.contexts,declarations=_FunctionTracer.declarations,functions=_FunctionTracer.functions,identifiers=_FunctionTracer.identifiers,functionCalls=_FunctionTracer.functionCalls;this.contexts=contexts;this.identifiers=identifiers;this.functionCalls=functionCalls;this.functions=functions;for(var i=0;i<declarations.length;i++){var declaration=declarations[i];var _ast=declaration.ast,inForLoopInit=declaration.inForLoopInit,inForLoopTest=declaration.inForLoopTest;var init=_ast.init;var dependencies=this.getDependencies(init);var valueType=null;if(inForLoopInit&&inForLoopTest){valueType='Integer';}else{if(init){var realType=this.getType(init);switch(realType){case'Integer':case'Float':case'Number':if(init.type==='MemberExpression'){valueType=realType;}else{valueType='Number';}break;case'LiteralInteger':valueType='Number';break;default:valueType=realType;}}}declaration.valueType=valueType;declaration.dependencies=dependencies;declaration.isSafe=this.isSafeDependencies(dependencies);}for(var _i10=0;_i10<functions.length;_i10++){this.onNestedFunction(functions[_i10],this.source);}}},{key:"getDeclaration",value:function getDeclaration(ast){for(var i=0;i<this.identifiers.length;i++){var identifier=this.identifiers[i];if(ast===identifier.ast){return identifier.declaration;}}return null;}},{key:"getVariableType",value:function getVariableType(ast){if(ast.type!=='Identifier'){throw new Error("ast of ".concat(ast.type," not \"Identifier\""));}var type=null;var argumentIndex=this.argumentNames.indexOf(ast.name);if(argumentIndex===-1){var declaration=this.getDeclaration(ast);if(declaration){return declaration.valueType;}}else{var argumentType=this.argumentTypes[argumentIndex];if(argumentType){type=argumentType;}}if(!type&&this.strictTypingChecking){throw new Error("Declaration of ".concat(name," not found"));}return type;}},{key:"getLookupType",value:function getLookupType(type){if(!typeLookupMap.hasOwnProperty(type)){throw new Error("unknown typeLookupMap ".concat(type));}return typeLookupMap[type];}},{key:"getConstantType",value:function getConstantType(constantName){if(this.constantTypes[constantName]){var type=this.constantTypes[constantName];if(type==='Float'){return'Number';}else{return type;}}throw new Error("Type for constant \"".concat(constantName,"\" not declared"));}},{key:"toString",value:function toString(){if(this._string)return this._string;return this._string=this.astGeneric(this.getJsAST(),[]).join('').trim();}},{key:"toJSON",value:function toJSON(){var settings={source:this.source,name:this.name,constants:this.constants,constantTypes:this.constantTypes,isRootKernel:this.isRootKernel,isSubKernel:this.isSubKernel,debug:this.debug,output:this.output,loopMaxIterations:this.loopMaxIterations,argumentNames:this.argumentNames,argumentTypes:this.argumentTypes,argumentSizes:this.argumentSizes,returnType:this.returnType,leadingReturnStatement:this.leadingReturnStatement,followingReturnStatement:this.followingReturnStatement};return{ast:this.ast,settings:settings};}},{key:"getType",value:function getType(ast){if(Array.isArray(ast)){return this.getType(ast[ast.length-1]);}switch(ast.type){case'BlockStatement':return this.getType(ast.body);case'ArrayExpression':var childType=this.getType(ast.elements[0]);switch(childType){case'Array(2)':case'Array(3)':case'Array(4)':return"Matrix(".concat(ast.elements.length,")");}return"Array(".concat(ast.elements.length,")");case'Literal':var literalKey=this.astKey(ast);if(this.literalTypes[literalKey]){return this.literalTypes[literalKey];}if(Number.isInteger(ast.value)){return'LiteralInteger';}else if(ast.value===true||ast.value===false){return'Boolean';}else{return'Number';}case'AssignmentExpression':return this.getType(ast.left);case'CallExpression':if(this.isAstMathFunction(ast)){return'Number';}if(!ast.callee||!ast.callee.name){if(ast.callee.type==='SequenceExpression'&&ast.callee.expressions[ast.callee.expressions.length-1].property.name){var functionName=ast.callee.expressions[ast.callee.expressions.length-1].property.name;this.inferArgumentTypesIfNeeded(functionName,ast.arguments);return this.lookupReturnType(functionName,ast,this);}if(this.getVariableSignature(ast.callee,true)==='this.color'){return null;}if(ast.callee.type==='MemberExpression'&&ast.callee.object&&ast.callee.property&&ast.callee.property.name&&ast.arguments){var _functionName=ast.callee.property.name;this.inferArgumentTypesIfNeeded(_functionName,ast.arguments);return this.lookupReturnType(_functionName,ast,this);}throw this.astErrorOutput('Unknown call expression',ast);}if(ast.callee&&ast.callee.name){var _functionName2=ast.callee.name;this.inferArgumentTypesIfNeeded(_functionName2,ast.arguments);return this.lookupReturnType(_functionName2,ast,this);}throw this.astErrorOutput("Unhandled getType Type \"".concat(ast.type,"\""),ast);case'LogicalExpression':return'Boolean';case'BinaryExpression':switch(ast.operator){case'%':case'/':if(this.fixIntegerDivisionAccuracy){return'Number';}else{break;}case'>':case'<':return'Boolean';case'&':case'|':case'^':case'<<':case'>>':case'>>>':return'Integer';}var type=this.getType(ast.left);if(this.isState('skip-literal-correction'))return type;if(type==='LiteralInteger'){var rightType=this.getType(ast.right);if(rightType==='LiteralInteger'){if(ast.left.value%1===0){return'Integer';}else{return'Float';}}return rightType;}return typeLookupMap[type]||type;case'UpdateExpression':return this.getType(ast.argument);case'UnaryExpression':if(ast.operator==='~'){return'Integer';}return this.getType(ast.argument);case'VariableDeclaration':{var declarations=ast.declarations;var lastType;for(var i=0;i<declarations.length;i++){var _declaration=declarations[i];lastType=this.getType(_declaration);}if(!lastType){throw this.astErrorOutput("Unable to find type for declaration",ast);}return lastType;}case'VariableDeclarator':var declaration=this.getDeclaration(ast.id);if(!declaration){throw this.astErrorOutput("Unable to find declarator",ast);}if(!declaration.valueType){throw this.astErrorOutput("Unable to find declarator valueType",ast);}return declaration.valueType;case'Identifier':if(ast.name==='Infinity'){return'Number';}if(this.isAstVariable(ast)){var signature=this.getVariableSignature(ast);if(signature==='value'){return this.getCheckVariableType(ast);}}var origin=this.findIdentifierOrigin(ast);if(origin&&origin.init){return this.getType(origin.init);}return null;case'ReturnStatement':return this.getType(ast.argument);case'MemberExpression':if(this.isAstMathFunction(ast)){switch(ast.property.name){case'ceil':return'Integer';case'floor':return'Integer';case'round':return'Integer';}return'Number';}if(this.isAstVariable(ast)){var variableSignature=this.getVariableSignature(ast);switch(variableSignature){case'value[]':return this.getLookupType(this.getCheckVariableType(ast.object));case'value[][]':return this.getLookupType(this.getCheckVariableType(ast.object.object));case'value[][][]':return this.getLookupType(this.getCheckVariableType(ast.object.object.object));case'value[][][][]':return this.getLookupType(this.getCheckVariableType(ast.object.object.object.object));case'value.thread.value':case'this.thread.value':return'Integer';case'this.output.value':return this.dynamicOutput?'Integer':'LiteralInteger';case'this.constants.value':return this.getConstantType(ast.property.name);case'this.constants.value[]':return this.getLookupType(this.getConstantType(ast.object.property.name));case'this.constants.value[][]':return this.getLookupType(this.getConstantType(ast.object.object.property.name));case'this.constants.value[][][]':return this.getLookupType(this.getConstantType(ast.object.object.object.property.name));case'this.constants.value[][][][]':return this.getLookupType(this.getConstantType(ast.object.object.object.object.property.name));case'fn()[]':case'fn()[][]':case'fn()[][][]':return this.getLookupType(this.getType(ast.object));case'value.value':if(this.isAstMathVariable(ast)){return'Number';}switch(ast.property.name){case'r':case'g':case'b':case'a':return this.getLookupType(this.getCheckVariableType(ast.object));}case'[][]':return'Number';}throw this.astErrorOutput('Unhandled getType MemberExpression',ast);}throw this.astErrorOutput('Unhandled getType MemberExpression',ast);case'ConditionalExpression':return this.getType(ast.consequent);case'FunctionDeclaration':case'FunctionExpression':var lastReturn=this.findLastReturn(ast.body);if(lastReturn){return this.getType(lastReturn);}return null;case'IfStatement':return this.getType(ast.consequent);case'SequenceExpression':return this.getType(ast.expressions[ast.expressions.length-1]);default:throw this.astErrorOutput("Unhandled getType Type \"".concat(ast.type,"\""),ast);}}},{key:"getCheckVariableType",value:function getCheckVariableType(ast){var type=this.getVariableType(ast);if(!type){throw this.astErrorOutput("".concat(ast.type," is not defined"),ast);}return type;}},{key:"inferArgumentTypesIfNeeded",value:function inferArgumentTypesIfNeeded(functionName,args){for(var i=0;i<args.length;i++){if(!this.needsArgumentType(functionName,i))continue;var type=this.getType(args[i]);if(!type){throw this.astErrorOutput("Unable to infer argument ".concat(i),args[i]);}this.assignArgumentType(functionName,i,type);}}},{key:"isAstMathVariable",value:function isAstMathVariable(ast){var mathProperties=['E','PI','SQRT2','SQRT1_2','LN2','LN10','LOG2E','LOG10E'];return ast.type==='MemberExpression'&&ast.object&&ast.object.type==='Identifier'&&ast.object.name==='Math'&&ast.property&&ast.property.type==='Identifier'&&mathProperties.indexOf(ast.property.name)>-1;}},{key:"isAstMathFunction",value:function isAstMathFunction(ast){var mathFunctions=['abs','acos','acosh','asin','asinh','atan','atan2','atanh','cbrt','ceil','clz32','cos','cosh','expm1','exp','floor','fround','imul','log','log2','log10','log1p','max','min','pow','random','round','sign','sin','sinh','sqrt','tan','tanh','trunc'];return ast.type==='CallExpression'&&ast.callee&&ast.callee.type==='MemberExpression'&&ast.callee.object&&ast.callee.object.type==='Identifier'&&ast.callee.object.name==='Math'&&ast.callee.property&&ast.callee.property.type==='Identifier'&&mathFunctions.indexOf(ast.callee.property.name)>-1;}},{key:"isAstVariable",value:function isAstVariable(ast){return ast.type==='Identifier'||ast.type==='MemberExpression';}},{key:"isSafe",value:function isSafe(ast){return this.isSafeDependencies(this.getDependencies(ast));}},{key:"isSafeDependencies",value:function isSafeDependencies(dependencies){return dependencies&&dependencies.every?dependencies.every(function(dependency){return dependency.isSafe;}):true;}},{key:"getDependencies",value:function getDependencies(ast,dependencies,isNotSafe){if(!dependencies){dependencies=[];}if(!ast)return null;if(Array.isArray(ast)){for(var i=0;i<ast.length;i++){this.getDependencies(ast[i],dependencies,isNotSafe);}return dependencies;}switch(ast.type){case'AssignmentExpression':this.getDependencies(ast.left,dependencies,isNotSafe);this.getDependencies(ast.right,dependencies,isNotSafe);return dependencies;case'ConditionalExpression':this.getDependencies(ast.test,dependencies,isNotSafe);this.getDependencies(ast.alternate,dependencies,isNotSafe);this.getDependencies(ast.consequent,dependencies,isNotSafe);return dependencies;case'Literal':dependencies.push({origin:'literal',value:ast.value,isSafe:isNotSafe===true?false:ast.value>-Infinity&&ast.value<Infinity&&!isNaN(ast.value)});break;case'VariableDeclarator':return this.getDependencies(ast.init,dependencies,isNotSafe);case'Identifier':var declaration=this.getDeclaration(ast);if(declaration){dependencies.push({name:ast.name,origin:'declaration',isSafe:isNotSafe?false:this.isSafeDependencies(declaration.dependencies)});}else if(this.argumentNames.indexOf(ast.name)>-1){dependencies.push({name:ast.name,origin:'argument',isSafe:false});}else if(this.strictTypingChecking){throw new Error("Cannot find identifier origin \"".concat(ast.name,"\""));}break;case'FunctionDeclaration':return this.getDependencies(ast.body.body[ast.body.body.length-1],dependencies,isNotSafe);case'ReturnStatement':return this.getDependencies(ast.argument,dependencies);case'BinaryExpression':case'LogicalExpression':isNotSafe=ast.operator==='/'||ast.operator==='*';this.getDependencies(ast.left,dependencies,isNotSafe);this.getDependencies(ast.right,dependencies,isNotSafe);return dependencies;case'UnaryExpression':case'UpdateExpression':return this.getDependencies(ast.argument,dependencies,isNotSafe);case'VariableDeclaration':return this.getDependencies(ast.declarations,dependencies,isNotSafe);case'ArrayExpression':dependencies.push({origin:'declaration',isSafe:true});return dependencies;case'CallExpression':dependencies.push({origin:'function',isSafe:true});return dependencies;case'MemberExpression':var details=this.getMemberExpressionDetails(ast);switch(details.signature){case'value[]':this.getDependencies(ast.object,dependencies,isNotSafe);break;case'value[][]':this.getDependencies(ast.object.object,dependencies,isNotSafe);break;case'value[][][]':this.getDependencies(ast.object.object.object,dependencies,isNotSafe);break;case'this.output.value':if(this.dynamicOutput){dependencies.push({name:details.name,origin:'output',isSafe:false});}break;}if(details){if(details.property){this.getDependencies(details.property,dependencies,isNotSafe);}if(details.xProperty){this.getDependencies(details.xProperty,dependencies,isNotSafe);}if(details.yProperty){this.getDependencies(details.yProperty,dependencies,isNotSafe);}if(details.zProperty){this.getDependencies(details.zProperty,dependencies,isNotSafe);}return dependencies;}case'SequenceExpression':return this.getDependencies(ast.expressions,dependencies,isNotSafe);default:throw this.astErrorOutput("Unhandled type ".concat(ast.type," in getDependencies"),ast);}return dependencies;}},{key:"getVariableSignature",value:function getVariableSignature(ast,returnRawValue){if(!this.isAstVariable(ast)){throw new Error("ast of type \"".concat(ast.type,"\" is not a variable signature"));}if(ast.type==='Identifier'){return'value';}var signature=[];while(true){if(!ast)break;if(ast.computed){signature.push('[]');}else if(ast.type==='ThisExpression'){signature.unshift('this');}else if(ast.property&&ast.property.name){if(ast.property.name==='x'||ast.property.name==='y'||ast.property.name==='z'){signature.unshift(returnRawValue?'.'+ast.property.name:'.value');}else if(ast.property.name==='constants'||ast.property.name==='thread'||ast.property.name==='output'){signature.unshift('.'+ast.property.name);}else{signature.unshift(returnRawValue?'.'+ast.property.name:'.value');}}else if(ast.name){signature.unshift(returnRawValue?ast.name:'value');}else if(ast.callee&&ast.callee.name){signature.unshift(returnRawValue?ast.callee.name+'()':'fn()');}else if(ast.elements){signature.unshift('[]');}else{signature.unshift('unknown');}ast=ast.object;}var signatureString=signature.join('');if(returnRawValue){return signatureString;}var allowedExpressions=['value','value[]','value[][]','value[][][]','value[][][][]','value.value','value.thread.value','this.thread.value','this.output.value','this.constants.value','this.constants.value[]','this.constants.value[][]','this.constants.value[][][]','this.constants.value[][][][]','fn()[]','fn()[][]','fn()[][][]','[][]'];if(allowedExpressions.indexOf(signatureString)>-1){return signatureString;}return null;}},{key:"build",value:function build(){return this.toString().length>0;}},{key:"astGeneric",value:function astGeneric(ast,retArr){if(ast===null){throw this.astErrorOutput('NULL ast',ast);}else{if(Array.isArray(ast)){for(var i=0;i<ast.length;i++){this.astGeneric(ast[i],retArr);}return retArr;}switch(ast.type){case'FunctionDeclaration':return this.astFunctionDeclaration(ast,retArr);case'FunctionExpression':return this.astFunctionExpression(ast,retArr);case'ReturnStatement':return this.astReturnStatement(ast,retArr);case'Literal':return this.astLiteral(ast,retArr);case'BinaryExpression':return this.astBinaryExpression(ast,retArr);case'Identifier':return this.astIdentifierExpression(ast,retArr);case'AssignmentExpression':return this.astAssignmentExpression(ast,retArr);case'ExpressionStatement':return this.astExpressionStatement(ast,retArr);case'EmptyStatement':return this.astEmptyStatement(ast,retArr);case'BlockStatement':return this.astBlockStatement(ast,retArr);case'IfStatement':return this.astIfStatement(ast,retArr);case'SwitchStatement':return this.astSwitchStatement(ast,retArr);case'BreakStatement':return this.astBreakStatement(ast,retArr);case'ContinueStatement':return this.astContinueStatement(ast,retArr);case'ForStatement':return this.astForStatement(ast,retArr);case'WhileStatement':return this.astWhileStatement(ast,retArr);case'DoWhileStatement':return this.astDoWhileStatement(ast,retArr);case'VariableDeclaration':return this.astVariableDeclaration(ast,retArr);case'VariableDeclarator':return this.astVariableDeclarator(ast,retArr);case'ThisExpression':return this.astThisExpression(ast,retArr);case'SequenceExpression':return this.astSequenceExpression(ast,retArr);case'UnaryExpression':return this.astUnaryExpression(ast,retArr);case'UpdateExpression':return this.astUpdateExpression(ast,retArr);case'LogicalExpression':return this.astLogicalExpression(ast,retArr);case'MemberExpression':return this.astMemberExpression(ast,retArr);case'CallExpression':return this.astCallExpression(ast,retArr);case'ArrayExpression':return this.astArrayExpression(ast,retArr);case'DebuggerStatement':return this.astDebuggerStatement(ast,retArr);case'ConditionalExpression':return this.astConditionalExpression(ast,retArr);}throw this.astErrorOutput('Unknown ast type : '+ast.type,ast);}}},{key:"astErrorOutput",value:function astErrorOutput(error,ast){if(typeof this.source!=='string'){return new Error(error);}var debugString=utils.getAstString(this.source,ast);var leadingSource=this.source.substr(ast.start);var splitLines=leadingSource.split(/\n/);var lineBefore=splitLines.length>0?splitLines[splitLines.length-1]:0;return new Error("".concat(error," on line ").concat(splitLines.length,", position ").concat(lineBefore.length,":\n ").concat(debugString));}},{key:"astDebuggerStatement",value:function astDebuggerStatement(arrNode,retArr){return retArr;}},{key:"astConditionalExpression",value:function astConditionalExpression(ast,retArr){if(ast.type!=='ConditionalExpression'){throw this.astErrorOutput('Not a conditional expression',ast);}retArr.push('(');this.astGeneric(ast.test,retArr);retArr.push('?');this.astGeneric(ast.consequent,retArr);retArr.push(':');this.astGeneric(ast.alternate,retArr);retArr.push(')');return retArr;}},{key:"astFunction",value:function astFunction(ast,retArr){throw new Error("\"astFunction\" not defined on ".concat(this.constructor.name));}},{key:"astFunctionDeclaration",value:function astFunctionDeclaration(ast,retArr){if(this.isChildFunction(ast)){return retArr;}return this.astFunction(ast,retArr);}},{key:"astFunctionExpression",value:function astFunctionExpression(ast,retArr){if(this.isChildFunction(ast)){return retArr;}return this.astFunction(ast,retArr);}},{key:"isChildFunction",value:function isChildFunction(ast){for(var i=0;i<this.functions.length;i++){if(this.functions[i]===ast){return true;}}return false;}},{key:"astReturnStatement",value:function astReturnStatement(ast,retArr){return retArr;}},{key:"astLiteral",value:function astLiteral(ast,retArr){this.literalTypes[this.astKey(ast)]='Number';return retArr;}},{key:"astBinaryExpression",value:function astBinaryExpression(ast,retArr){return retArr;}},{key:"astIdentifierExpression",value:function astIdentifierExpression(ast,retArr){return retArr;}},{key:"astAssignmentExpression",value:function astAssignmentExpression(ast,retArr){return retArr;}},{key:"astExpressionStatement",value:function astExpressionStatement(esNode,retArr){this.astGeneric(esNode.expression,retArr);retArr.push(';');return retArr;}},{key:"astEmptyStatement",value:function astEmptyStatement(eNode,retArr){return retArr;}},{key:"astBlockStatement",value:function astBlockStatement(ast,retArr){return retArr;}},{key:"astIfStatement",value:function astIfStatement(ast,retArr){return retArr;}},{key:"astSwitchStatement",value:function astSwitchStatement(ast,retArr){return retArr;}},{key:"astBreakStatement",value:function astBreakStatement(brNode,retArr){retArr.push('break;');return retArr;}},{key:"astContinueStatement",value:function astContinueStatement(crNode,retArr){retArr.push('continue;\n');return retArr;}},{key:"astForStatement",value:function astForStatement(ast,retArr){return retArr;}},{key:"astWhileStatement",value:function astWhileStatement(ast,retArr){return retArr;}},{key:"astDoWhileStatement",value:function astDoWhileStatement(ast,retArr){return retArr;}},{key:"astVariableDeclarator",value:function astVariableDeclarator(iVarDecNode,retArr){this.astGeneric(iVarDecNode.id,retArr);if(iVarDecNode.init!==null){retArr.push('=');this.astGeneric(iVarDecNode.init,retArr);}return retArr;}},{key:"astThisExpression",value:function astThisExpression(ast,retArr){return retArr;}},{key:"astSequenceExpression",value:function astSequenceExpression(sNode,retArr){var expressions=sNode.expressions;var sequenceResult=[];for(var i=0;i<expressions.length;i++){var expression=expressions[i];var expressionResult=[];this.astGeneric(expression,expressionResult);sequenceResult.push(expressionResult.join(''));}if(sequenceResult.length>1){retArr.push('(',sequenceResult.join(','),')');}else{retArr.push(sequenceResult[0]);}return retArr;}},{key:"astUnaryExpression",value:function astUnaryExpression(uNode,retArr){var unaryResult=this.checkAndUpconvertBitwiseUnary(uNode,retArr);if(unaryResult){return retArr;}if(uNode.prefix){retArr.push(uNode.operator);this.astGeneric(uNode.argument,retArr);}else{this.astGeneric(uNode.argument,retArr);retArr.push(uNode.operator);}return retArr;}},{key:"checkAndUpconvertBitwiseUnary",value:function checkAndUpconvertBitwiseUnary(uNode,retArr){}},{key:"astUpdateExpression",value:function astUpdateExpression(uNode,retArr){if(uNode.prefix){retArr.push(uNode.operator);this.astGeneric(uNode.argument,retArr);}else{this.astGeneric(uNode.argument,retArr);retArr.push(uNode.operator);}return retArr;}},{key:"astLogicalExpression",value:function astLogicalExpression(logNode,retArr){retArr.push('(');this.astGeneric(logNode.left,retArr);retArr.push(logNode.operator);this.astGeneric(logNode.right,retArr);retArr.push(')');return retArr;}},{key:"astMemberExpression",value:function astMemberExpression(ast,retArr){return retArr;}},{key:"astCallExpression",value:function astCallExpression(ast,retArr){return retArr;}},{key:"astArrayExpression",value:function astArrayExpression(ast,retArr){return retArr;}},{key:"getMemberExpressionDetails",value:function getMemberExpressionDetails(ast){if(ast.type!=='MemberExpression'){throw this.astErrorOutput("Expression ".concat(ast.type," not a MemberExpression"),ast);}var name=null;var type=null;var variableSignature=this.getVariableSignature(ast);switch(variableSignature){case'value':return null;case'value.thread.value':case'this.thread.value':case'this.output.value':return{signature:variableSignature,type:'Integer',name:ast.property.name};case'value[]':if(typeof ast.object.name!=='string'){throw this.astErrorOutput('Unexpected expression',ast);}name=ast.object.name;return{name:name,origin:'user',signature:variableSignature,type:this.getVariableType(ast.object),xProperty:ast.property};case'value[][]':if(typeof ast.object.object.name!=='string'){throw this.astErrorOutput('Unexpected expression',ast);}name=ast.object.object.name;return{name:name,origin:'user',signature:variableSignature,type:this.getVariableType(ast.object.object),yProperty:ast.object.property,xProperty:ast.property};case'value[][][]':if(typeof ast.object.object.object.name!=='string'){throw this.astErrorOutput('Unexpected expression',ast);}name=ast.object.object.object.name;return{name:name,origin:'user',signature:variableSignature,type:this.getVariableType(ast.object.object.object),zProperty:ast.object.object.property,yProperty:ast.object.property,xProperty:ast.property};case'value[][][][]':if(typeof ast.object.object.object.object.name!=='string'){throw this.astErrorOutput('Unexpected expression',ast);}name=ast.object.object.object.object.name;return{name:name,origin:'user',signature:variableSignature,type:this.getVariableType(ast.object.object.object.object),zProperty:ast.object.object.property,yProperty:ast.object.property,xProperty:ast.property};case'value.value':if(typeof ast.property.name!=='string'){throw this.astErrorOutput('Unexpected expression',ast);}if(this.isAstMathVariable(ast)){name=ast.property.name;return{name:name,origin:'Math',type:'Number',signature:variableSignature};}switch(ast.property.name){case'r':case'g':case'b':case'a':name=ast.object.name;return{name:name,property:ast.property.name,origin:'user',signature:variableSignature,type:'Number'};default:throw this.astErrorOutput('Unexpected expression',ast);}case'this.constants.value':if(typeof ast.property.name!=='string'){throw this.astErrorOutput('Unexpected expression',ast);}name=ast.property.name;type=this.getConstantType(name);if(!type){throw this.astErrorOutput('Constant has no type',ast);}return{name:name,type:type,origin:'constants',signature:variableSignature};case'this.constants.value[]':if(typeof ast.object.property.name!=='string'){throw this.astErrorOutput('Unexpected expression',ast);}name=ast.object.property.name;type=this.getConstantType(name);if(!type){throw this.astErrorOutput('Constant has no type',ast);}return{name:name,type:type,origin:'constants',signature:variableSignature,xProperty:ast.property};case'this.constants.value[][]':{if(typeof ast.object.object.property.name!=='string'){throw this.astErrorOutput('Unexpected expression',ast);}name=ast.object.object.property.name;type=this.getConstantType(name);if(!type){throw this.astErrorOutput('Constant has no type',ast);}return{name:name,type:type,origin:'constants',signature:variableSignature,yProperty:ast.object.property,xProperty:ast.property};}case'this.constants.value[][][]':{if(typeof ast.object.object.object.property.name!=='string'){throw this.astErrorOutput('Unexpected expression',ast);}name=ast.object.object.object.property.name;type=this.getConstantType(name);if(!type){throw this.astErrorOutput('Constant has no type',ast);}return{name:name,type:type,origin:'constants',signature:variableSignature,zProperty:ast.object.object.property,yProperty:ast.object.property,xProperty:ast.property};}case'fn()[]':case'fn()[][]':case'[][]':return{signature:variableSignature,property:ast.property};default:throw this.astErrorOutput('Unexpected expression',ast);}}},{key:"findIdentifierOrigin",value:function findIdentifierOrigin(astToFind){var stack=[this.ast];while(stack.length>0){var atNode=stack[0];if(atNode.type==='VariableDeclarator'&&atNode.id&&atNode.id.name&&atNode.id.name===astToFind.name){return atNode;}stack.shift();if(atNode.argument){stack.push(atNode.argument);}else if(atNode.body){stack.push(atNode.body);}else if(atNode.declarations){stack.push(atNode.declarations);}else if(Array.isArray(atNode)){for(var i=0;i<atNode.length;i++){stack.push(atNode[i]);}}}return null;}},{key:"findLastReturn",value:function findLastReturn(ast){var stack=[ast||this.ast];while(stack.length>0){var atNode=stack.pop();if(atNode.type==='ReturnStatement'){return atNode;}if(atNode.type==='FunctionDeclaration'){continue;}if(atNode.argument){stack.push(atNode.argument);}else if(atNode.body){stack.push(atNode.body);}else if(atNode.declarations){stack.push(atNode.declarations);}else if(Array.isArray(atNode)){for(var i=0;i<atNode.length;i++){stack.push(atNode[i]);}}else if(atNode.consequent){stack.push(atNode.consequent);}else if(atNode.cases){stack.push(atNode.cases);}}return null;}},{key:"getInternalVariableName",value:function getInternalVariableName(name){if(!this._internalVariableNames.hasOwnProperty(name)){this._internalVariableNames[name]=0;}this._internalVariableNames[name]++;if(this._internalVariableNames[name]===1){return name;}return name+this._internalVariableNames[name];}},{key:"astKey",value:function astKey(ast){var separator=arguments.length>1&&arguments[1]!==undefined?arguments[1]:',';if(!ast.start||!ast.end)throw new Error('AST start and end needed');return"".concat(ast.start).concat(separator).concat(ast.end);}}]);return FunctionNode;}();var typeLookupMap={'Number':'Number','Float':'Float','Integer':'Integer','Array':'Number','Array(2)':'Number','Array(3)':'Number','Array(4)':'Number','Matrix(2)':'Number','Matrix(3)':'Number','Matrix(4)':'Number','Array2D':'Number','Array3D':'Number','Input':'Number','HTMLCanvas':'Array(4)','HTMLImage':'Array(4)','HTMLVideo':'Array(4)','HTMLImageArray':'Array(4)','NumberTexture':'Number','MemoryOptimizedNumberTexture':'Number','Array1D(2)':'Array(2)','Array1D(3)':'Array(3)','Array1D(4)':'Array(4)','Array2D(2)':'Array(2)','Array2D(3)':'Array(3)','Array2D(4)':'Array(4)','Array3D(2)':'Array(2)','Array3D(3)':'Array(3)','Array3D(4)':'Array(4)','ArrayTexture(1)':'Number','ArrayTexture(2)':'Array(2)','ArrayTexture(3)':'Array(3)','ArrayTexture(4)':'Array(4)'};module.exports={FunctionNode:FunctionNode};},{"../utils":114,"./function-tracer":11,"acorn":1}],11:[function(require,module,exports){var _require11=require('../utils'),utils=_require11.utils;function last(array){return array.length>0?array[array.length-1]:null;}var states={trackIdentifiers:'trackIdentifiers',memberExpression:'memberExpression',inForLoopInit:'inForLoopInit'};var FunctionTracer=/*#__PURE__*/function(){function FunctionTracer(ast){_classCallCheck(this,FunctionTracer);this.runningContexts=[];this.functionContexts=[];this.contexts=[];this.functionCalls=[];this.declarations=[];this.identifiers=[];this.functions=[];this.returnStatements=[];this.trackedIdentifiers=null;this.states=[];this.newFunctionContext();this.scan(ast);}_createClass(FunctionTracer,[{key:"isState",value:function isState(state){return this.states[this.states.length-1]===state;}},{key:"hasState",value:function hasState(state){return this.states.indexOf(state)>-1;}},{key:"pushState",value:function pushState(state){this.states.push(state);}},{key:"popState",value:function popState(state){if(this.isState(state)){this.states.pop();}else{throw new Error("Cannot pop the non-active state \"".concat(state,"\""));}}},{key:"currentFunctionContext",get:function get(){return last(this.functionContexts);}},{key:"currentContext",get:function get(){return last(this.runningContexts);}},{key:"newFunctionContext",value:function newFunctionContext(){var newContext={'@contextType':'function'};this.contexts.push(newContext);this.functionContexts.push(newContext);}},{key:"newContext",value:function newContext(run){var newContext=Object.assign({'@contextType':'const/let'},this.currentContext);this.contexts.push(newContext);this.runningContexts.push(newContext);run();var currentFunctionContext=this.currentFunctionContext;for(var p in currentFunctionContext){if(!currentFunctionContext.hasOwnProperty(p)||newContext.hasOwnProperty(p))continue;newContext[p]=currentFunctionContext[p];}this.runningContexts.pop();return newContext;}},{key:"useFunctionContext",value:function useFunctionContext(run){var functionContext=last(this.functionContexts);this.runningContexts.push(functionContext);run();this.runningContexts.pop();}},{key:"getIdentifiers",value:function getIdentifiers(run){var trackedIdentifiers=this.trackedIdentifiers=[];this.pushState(states.trackIdentifiers);run();this.trackedIdentifiers=null;this.popState(states.trackIdentifiers);return trackedIdentifiers;}},{key:"getDeclaration",value:function getDeclaration(name){var currentContext=this.currentContext,currentFunctionContext=this.currentFunctionContext,runningContexts=this.runningContexts;var declaration=currentContext[name]||currentFunctionContext[name]||null;if(!declaration&&currentContext===currentFunctionContext&&runningContexts.length>0){var previousRunningContext=runningContexts[runningContexts.length-2];if(previousRunningContext[name]){return previousRunningContext[name];}}return declaration;}},{key:"scan",value:function scan(ast){var _this4=this;if(!ast)return;if(Array.isArray(ast)){for(var i=0;i<ast.length;i++){this.scan(ast[i]);}return;}switch(ast.type){case'Program':this.useFunctionContext(function(){_this4.scan(ast.body);});break;case'BlockStatement':this.newContext(function(){_this4.scan(ast.body);});break;case'AssignmentExpression':case'LogicalExpression':this.scan(ast.left);this.scan(ast.right);break;case'BinaryExpression':this.scan(ast.left);this.scan(ast.right);break;case'UpdateExpression':if(ast.operator==='++'){var declaration=this.getDeclaration(ast.argument.name);if(declaration){declaration.suggestedType='Integer';}}this.scan(ast.argument);break;case'UnaryExpression':this.scan(ast.argument);break;case'VariableDeclaration':if(ast.kind==='var'){this.useFunctionContext(function(){ast.declarations=utils.normalizeDeclarations(ast);_this4.scan(ast.declarations);});}else{ast.declarations=utils.normalizeDeclarations(ast);this.scan(ast.declarations);}break;case'VariableDeclarator':{var currentContext=this.currentContext;var inForLoopInit=this.hasState(states.inForLoopInit);var _declaration2={ast:ast,context:currentContext,name:ast.id.name,origin:'declaration',inForLoopInit:inForLoopInit,inForLoopTest:null,assignable:currentContext===this.currentFunctionContext||!inForLoopInit&&!currentContext.hasOwnProperty(ast.id.name),suggestedType:null,valueType:null,dependencies:null,isSafe:null};if(!currentContext[ast.id.name]){currentContext[ast.id.name]=_declaration2;}this.declarations.push(_declaration2);this.scan(ast.id);this.scan(ast.init);break;}case'FunctionExpression':case'FunctionDeclaration':if(this.runningContexts.length===0){this.scan(ast.body);}else{this.functions.push(ast);}break;case'IfStatement':this.scan(ast.test);this.scan(ast.consequent);if(ast.alternate)this.scan(ast.alternate);break;case'ForStatement':{var testIdentifiers;var context=this.newContext(function(){_this4.pushState(states.inForLoopInit);_this4.scan(ast.init);_this4.popState(states.inForLoopInit);testIdentifiers=_this4.getIdentifiers(function(){_this4.scan(ast.test);});_this4.scan(ast.update);_this4.newContext(function(){_this4.scan(ast.body);});});if(testIdentifiers){for(var p in context){if(p==='@contextType')continue;if(testIdentifiers.indexOf(p)>-1){context[p].inForLoopTest=true;}}}break;}case'DoWhileStatement':case'WhileStatement':this.newContext(function(){_this4.scan(ast.body);_this4.scan(ast.test);});break;case'Identifier':{if(this.isState(states.trackIdentifiers)){this.trackedIdentifiers.push(ast.name);}this.identifiers.push({context:this.currentContext,declaration:this.getDeclaration(ast.name),ast:ast});break;}case'ReturnStatement':this.returnStatements.push(ast);this.scan(ast.argument);break;case'MemberExpression':this.pushState(states.memberExpression);this.scan(ast.object);this.scan(ast.property);this.popState(states.memberExpression);break;case'ExpressionStatement':this.scan(ast.expression);break;case'SequenceExpression':this.scan(ast.expressions);break;case'CallExpression':this.functionCalls.push({context:this.currentContext,ast:ast});this.scan(ast.arguments);break;case'ArrayExpression':this.scan(ast.elements);break;case'ConditionalExpression':this.scan(ast.test);this.scan(ast.alternate);this.scan(ast.consequent);break;case'SwitchStatement':this.scan(ast.discriminant);this.scan(ast.cases);break;case'SwitchCase':this.scan(ast.test);this.scan(ast.consequent);break;case'ThisExpression':case'Literal':case'DebuggerStatement':case'EmptyStatement':case'BreakStatement':case'ContinueStatement':break;default:throw new Error("unhandled type \"".concat(ast.type,"\""));}}}]);return FunctionTracer;}();module.exports={FunctionTracer:FunctionTracer};},{"../utils":114}],12:[function(require,module,exports){var _require12=require('gl-wiretap'),glWiretap=_require12.glWiretap;var _require13=require('../../utils'),utils=_require13.utils;function toStringWithoutUtils(fn){return fn.toString().replace('=>','').replace(/^function /,'').replace(/utils[.]/g,'/*utils.*/');}function glKernelString(Kernel,args,originKernel,setupContextString,destroyContextString){if(!originKernel.built){originKernel.build.apply(originKernel,args);}args=args?Array.from(args).map(function(arg){switch(_typeof(arg)){case'boolean':return new Boolean(arg);case'number':return new Number(arg);default:return arg;}}):null;var uploadedValues=[];var postResult=[];var context=glWiretap(originKernel.context,{useTrackablePrimitives:true,onReadPixels:function onReadPixels(targetName){if(kernel.subKernels){if(!subKernelsResultVariableSetup){postResult.push("    const result = { result: ".concat(getRenderString(targetName,kernel)," };"));subKernelsResultVariableSetup=true;}else{var property=kernel.subKernels[subKernelsResultIndex++].property;postResult.push("    result".concat(isNaN(property)?'.'+property:"[".concat(property,"]")," = ").concat(getRenderString(targetName,kernel),";"));}if(subKernelsResultIndex===kernel.subKernels.length){postResult.push('    return result;');}return;}if(targetName){postResult.push("    return ".concat(getRenderString(targetName,kernel),";"));}else{postResult.push("    return null;");}},onUnrecognizedArgumentLookup:function onUnrecognizedArgumentLookup(argument){var argumentName=findKernelValue(argument,kernel.kernelArguments,[],context,uploadedValues);if(argumentName){return argumentName;}var constantName=findKernelValue(argument,kernel.kernelConstants,constants?Object.keys(constants).map(function(key){return constants[key];}):[],context,uploadedValues);if(constantName){return constantName;}return null;}});var subKernelsResultVariableSetup=false;var subKernelsResultIndex=0;var source=originKernel.source,canvas=originKernel.canvas,output=originKernel.output,pipeline=originKernel.pipeline,graphical=originKernel.graphical,loopMaxIterations=originKernel.loopMaxIterations,constants=originKernel.constants,optimizeFloatMemory=originKernel.optimizeFloatMemory,precision=originKernel.precision,fixIntegerDivisionAccuracy=originKernel.fixIntegerDivisionAccuracy,functions=originKernel.functions,nativeFunctions=originKernel.nativeFunctions,subKernels=originKernel.subKernels,immutable=originKernel.immutable,argumentTypes=originKernel.argumentTypes,constantTypes=originKernel.constantTypes,kernelArguments=originKernel.kernelArguments,kernelConstants=originKernel.kernelConstants,tactic=originKernel.tactic;var kernel=new Kernel(source,{canvas:canvas,context:context,checkContext:false,output:output,pipeline:pipeline,graphical:graphical,loopMaxIterations:loopMaxIterations,constants:constants,optimizeFloatMemory:optimizeFloatMemory,precision:precision,fixIntegerDivisionAccuracy:fixIntegerDivisionAccuracy,functions:functions,nativeFunctions:nativeFunctions,subKernels:subKernels,immutable:immutable,argumentTypes:argumentTypes,constantTypes:constantTypes,tactic:tactic});var result=[];context.setIndent(2);kernel.build.apply(kernel,args);result.push(context.toString());context.reset();kernel.kernelArguments.forEach(function(kernelArgument,i){switch(kernelArgument.type){case'Integer':case'Boolean':case'Number':case'Float':case'Array':case'Array(2)':case'Array(3)':case'Array(4)':case'HTMLCanvas':case'HTMLImage':case'HTMLVideo':context.insertVariable("uploadValue_".concat(kernelArgument.name),kernelArgument.uploadValue);break;case'HTMLImageArray':for(var imageIndex=0;imageIndex<args[i].length;imageIndex++){var arg=args[i];context.insertVariable("uploadValue_".concat(kernelArgument.name,"[").concat(imageIndex,"]"),arg[imageIndex]);}break;case'Input':context.insertVariable("uploadValue_".concat(kernelArgument.name),kernelArgument.uploadValue);break;case'MemoryOptimizedNumberTexture':case'NumberTexture':case'Array1D(2)':case'Array1D(3)':case'Array1D(4)':case'Array2D(2)':case'Array2D(3)':case'Array2D(4)':case'Array3D(2)':case'Array3D(3)':case'Array3D(4)':case'ArrayTexture(1)':case'ArrayTexture(2)':case'ArrayTexture(3)':case'ArrayTexture(4)':context.insertVariable("uploadValue_".concat(kernelArgument.name),args[i].texture);break;default:throw new Error("unhandled kernelArgumentType insertion for glWiretap of type ".concat(kernelArgument.type));}});result.push('/** start of injected functions **/');result.push("function ".concat(toStringWithoutUtils(utils.flattenTo)));result.push("function ".concat(toStringWithoutUtils(utils.flatten2dArrayTo)));result.push("function ".concat(toStringWithoutUtils(utils.flatten3dArrayTo)));result.push("function ".concat(toStringWithoutUtils(utils.flatten4dArrayTo)));result.push("function ".concat(toStringWithoutUtils(utils.isArray)));if(kernel.renderOutput!==kernel.renderTexture&&kernel.formatValues){result.push("  const renderOutput = function ".concat(toStringWithoutUtils(kernel.formatValues),";"));}result.push('/** end of injected functions **/');result.push("  const innerKernel = function (".concat(kernel.kernelArguments.map(function(kernelArgument){return kernelArgument.varName;}).join(', '),") {"));context.setIndent(4);kernel.run.apply(kernel,args);if(kernel.renderKernels){kernel.renderKernels();}else if(kernel.renderOutput){kernel.renderOutput();}result.push('    /** start setup uploads for kernel values **/');kernel.kernelArguments.forEach(function(kernelArgument){result.push('    '+kernelArgument.getStringValueHandler().split('\n').join('\n    '));});result.push('    /** end setup uploads for kernel values **/');result.push(context.toString());if(kernel.renderOutput===kernel.renderTexture){context.reset();var framebufferName=context.getContextVariableName(kernel.framebuffer);if(kernel.renderKernels){var results=kernel.renderKernels();var textureName=context.getContextVariableName(kernel.texture.texture);result.push("    return {\n            result: {\n              texture: ".concat(textureName,",\n              type: '").concat(results.result.type,"',\n              toArray: ").concat(getToArrayString(results.result,textureName,framebufferName),"\n            },"));var _subKernels=kernel.subKernels,mappedTextures=kernel.mappedTextures;for(var i=0;i<_subKernels.length;i++){var texture=mappedTextures[i];var subKernel=_subKernels[i];var subKernelResult=results[subKernel.property];var subKernelTextureName=context.getContextVariableName(texture.texture);result.push("\n            ".concat(subKernel.property,": {\n              texture: ").concat(subKernelTextureName,",\n              type: '").concat(subKernelResult.type,"',\n              toArray: ").concat(getToArrayString(subKernelResult,subKernelTextureName,framebufferName),"\n            },"));}result.push("    };");}else{var rendered=kernel.renderOutput();var _textureName=context.getContextVariableName(kernel.texture.texture);result.push("    return {\n              texture: ".concat(_textureName,",\n              type: '").concat(rendered.type,"',\n              toArray: ").concat(getToArrayString(rendered,_textureName,framebufferName),"\n            };"));}}result.push("    ".concat(destroyContextString?'\n'+destroyContextString+'    ':''));result.push(postResult.join('\n'));result.push('  };');if(kernel.graphical){result.push(getGetPixelsString(kernel));result.push("  innerKernel.getPixels = getPixels;");}result.push('  return innerKernel;');var constantsUpload=[];kernelConstants.forEach(function(kernelConstant){constantsUpload.push("".concat(kernelConstant.getStringValueHandler()));});return"function kernel(settings) {\n        const { context, constants } = settings;\n        ".concat(constantsUpload.join(''),"\n        ").concat(setupContextString?setupContextString:'',"\n      ").concat(result.join('\n'),"\n      }");}function getRenderString(targetName,kernel){var readBackValue=kernel.precision==='single'?targetName:"new Float32Array(".concat(targetName,".buffer)");if(kernel.output[2]){return"renderOutput(".concat(readBackValue,", ").concat(kernel.output[0],", ").concat(kernel.output[1],", ").concat(kernel.output[2],")");}if(kernel.output[1]){return"renderOutput(".concat(readBackValue,", ").concat(kernel.output[0],", ").concat(kernel.output[1],")");}return"renderOutput(".concat(readBackValue,", ").concat(kernel.output[0],")");}function getGetPixelsString(kernel){var getPixels=kernel.getPixels.toString();var useFunctionKeyword=!/^function/.test(getPixels);return utils.flattenFunctionToString("".concat(useFunctionKeyword?'function ':'').concat(getPixels),{findDependency:function findDependency(object,name){if(object==='utils'){return"const ".concat(name," = ").concat(utils[name].toString(),";");}return null;},thisLookup:function thisLookup(property){if(property==='context'){return null;}if(kernel.hasOwnProperty(property)){return JSON.stringify(kernel[property]);}throw new Error("unhandled thisLookup ".concat(property));}});}function getToArrayString(kernelResult,textureName,framebufferName){var toArray=kernelResult.toArray.toString();var useFunctionKeyword=!/^function/.test(toArray);var flattenedFunctions=utils.flattenFunctionToString("".concat(useFunctionKeyword?'function ':'').concat(toArray),{findDependency:function findDependency(object,name){if(object==='utils'){return"const ".concat(name," = ").concat(utils[name].toString(),";");}else if(object==='this'){if(name==='framebuffer'){return'';}return"".concat(useFunctionKeyword?'function ':'').concat(kernelResult[name].toString());}else{throw new Error('unhandled fromObject');}},thisLookup:function thisLookup(property,isDeclaration){if(property==='texture'){return textureName;}if(property==='context'){if(isDeclaration)return null;return'gl';}if(kernelResult.hasOwnProperty(property)){return JSON.stringify(kernelResult[property]);}throw new Error("unhandled thisLookup ".concat(property));}});return"() => {\n        function framebuffer() { return ".concat(framebufferName,"; };\n        ").concat(flattenedFunctions,"\n        return toArray();\n        }");}function findKernelValue(argument,kernelValues,values,context,uploadedValues){if(argument===null)return null;if(kernelValues===null)return null;switch(_typeof(argument)){case'boolean':case'number':return null;}if(typeof HTMLImageElement!=='undefined'&&argument instanceof HTMLImageElement){for(var i=0;i<kernelValues.length;i++){var kernelValue=kernelValues[i];if(kernelValue.type!=='HTMLImageArray'&&kernelValue)continue;if(kernelValue.uploadValue!==argument)continue;var variableIndex=values[i].indexOf(argument);if(variableIndex===-1)continue;var variableName="uploadValue_".concat(kernelValue.name,"[").concat(variableIndex,"]");context.insertVariable(variableName,argument);return variableName;}}for(var _i11=0;_i11<kernelValues.length;_i11++){var _kernelValue=kernelValues[_i11];if(argument!==_kernelValue.uploadValue)continue;var variable="uploadValue_".concat(_kernelValue.name);context.insertVariable(variable,_kernelValue);return variable;}return null;}module.exports={glKernelString:glKernelString};},{"../../utils":114,"gl-wiretap":3}],13:[function(require,module,exports){var _require14=require('../kernel'),Kernel=_require14.Kernel;var _require15=require('../../utils'),utils=_require15.utils;var _require16=require('./texture/array-2-float'),GLTextureArray2Float=_require16.GLTextureArray2Float;var _require17=require('./texture/array-2-float-2d'),GLTextureArray2Float2D=_require17.GLTextureArray2Float2D;var _require18=require('./texture/array-2-float-3d'),GLTextureArray2Float3D=_require18.GLTextureArray2Float3D;var _require19=require('./texture/array-3-float'),GLTextureArray3Float=_require19.GLTextureArray3Float;var _require20=require('./texture/array-3-float-2d'),GLTextureArray3Float2D=_require20.GLTextureArray3Float2D;var _require21=require('./texture/array-3-float-3d'),GLTextureArray3Float3D=_require21.GLTextureArray3Float3D;var _require22=require('./texture/array-4-float'),GLTextureArray4Float=_require22.GLTextureArray4Float;var _require23=require('./texture/array-4-float-2d'),GLTextureArray4Float2D=_require23.GLTextureArray4Float2D;var _require24=require('./texture/array-4-float-3d'),GLTextureArray4Float3D=_require24.GLTextureArray4Float3D;var _require25=require('./texture/float'),GLTextureFloat=_require25.GLTextureFloat;var _require26=require('./texture/float-2d'),GLTextureFloat2D=_require26.GLTextureFloat2D;var _require27=require('./texture/float-3d'),GLTextureFloat3D=_require27.GLTextureFloat3D;var _require28=require('./texture/memory-optimized'),GLTextureMemoryOptimized=_require28.GLTextureMemoryOptimized;var _require29=require('./texture/memory-optimized-2d'),GLTextureMemoryOptimized2D=_require29.GLTextureMemoryOptimized2D;var _require30=require('./texture/memory-optimized-3d'),GLTextureMemoryOptimized3D=_require30.GLTextureMemoryOptimized3D;var _require31=require('./texture/unsigned'),GLTextureUnsigned=_require31.GLTextureUnsigned;var _require32=require('./texture/unsigned-2d'),GLTextureUnsigned2D=_require32.GLTextureUnsigned2D;var _require33=require('./texture/unsigned-3d'),GLTextureUnsigned3D=_require33.GLTextureUnsigned3D;var _require34=require('./texture/graphical'),GLTextureGraphical=_require34.GLTextureGraphical;var GLKernel=/*#__PURE__*/function(_Kernel2){_inherits(GLKernel,_Kernel2);var _super3=_createSuper(GLKernel);function GLKernel(source,settings){var _this5;_classCallCheck(this,GLKernel);_this5=_super3.call(this,source,settings);_this5.transferValues=null;_this5.formatValues=null;_this5.TextureConstructor=null;_this5.renderOutput=null;_this5.renderRawOutput=null;_this5.texSize=null;_this5.translatedSource=null;_this5.compiledFragmentShader=null;_this5.compiledVertexShader=null;_this5.switchingKernels=null;_this5._textureSwitched=null;_this5._mappedTextureSwitched=null;return _this5;}_createClass(GLKernel,[{key:"setFixIntegerDivisionAccuracy",value:function setFixIntegerDivisionAccuracy(fix){this.fixIntegerDivisionAccuracy=fix;return this;}},{key:"setPrecision",value:function setPrecision(flag){this.precision=flag;return this;}},{key:"setFloatTextures",value:function setFloatTextures(flag){utils.warnDeprecated('method','setFloatTextures','setOptimizeFloatMemory');this.floatTextures=flag;return this;}},{key:"checkTextureSize",value:function checkTextureSize(){var features=this.constructor.features;if(this.texSize[0]>features.maxTextureSize||this.texSize[1]>features.maxTextureSize){throw new Error("Texture size [".concat(this.texSize[0],",").concat(this.texSize[1],"] generated by kernel is larger than supported size [").concat(features.maxTextureSize,",").concat(features.maxTextureSize,"]"));}}},{key:"translateSource",value:function translateSource(){throw new Error("\"translateSource\" not defined on ".concat(this.constructor.name));}},{key:"pickRenderStrategy",value:function pickRenderStrategy(args){if(this.graphical){this.renderRawOutput=this.readPackedPixelsToUint8Array;this.transferValues=function(pixels){return pixels;};this.TextureConstructor=GLTextureGraphical;return null;}if(this.precision==='unsigned'){this.renderRawOutput=this.readPackedPixelsToUint8Array;this.transferValues=this.readPackedPixelsToFloat32Array;if(this.pipeline){this.renderOutput=this.renderTexture;if(this.subKernels!==null){this.renderKernels=this.renderKernelsToTextures;}switch(this.returnType){case'LiteralInteger':case'Float':case'Number':case'Integer':if(this.output[2]>0){this.TextureConstructor=GLTextureUnsigned3D;return null;}else if(this.output[1]>0){this.TextureConstructor=GLTextureUnsigned2D;return null;}else{this.TextureConstructor=GLTextureUnsigned;return null;}case'Array(2)':case'Array(3)':case'Array(4)':return this.requestFallback(args);}}else{if(this.subKernels!==null){this.renderKernels=this.renderKernelsToArrays;}switch(this.returnType){case'LiteralInteger':case'Float':case'Number':case'Integer':this.renderOutput=this.renderValues;if(this.output[2]>0){this.TextureConstructor=GLTextureUnsigned3D;this.formatValues=utils.erect3DPackedFloat;return null;}else if(this.output[1]>0){this.TextureConstructor=GLTextureUnsigned2D;this.formatValues=utils.erect2DPackedFloat;return null;}else{this.TextureConstructor=GLTextureUnsigned;this.formatValues=utils.erectPackedFloat;return null;}case'Array(2)':case'Array(3)':case'Array(4)':return this.requestFallback(args);}}}else if(this.precision==='single'){this.renderRawOutput=this.readFloatPixelsToFloat32Array;this.transferValues=this.readFloatPixelsToFloat32Array;if(this.pipeline){this.renderOutput=this.renderTexture;if(this.subKernels!==null){this.renderKernels=this.renderKernelsToTextures;}switch(this.returnType){case'LiteralInteger':case'Float':case'Number':case'Integer':{if(this.optimizeFloatMemory){if(this.output[2]>0){this.TextureConstructor=GLTextureMemoryOptimized3D;return null;}else if(this.output[1]>0){this.TextureConstructor=GLTextureMemoryOptimized2D;return null;}else{this.TextureConstructor=GLTextureMemoryOptimized;return null;}}else{if(this.output[2]>0){this.TextureConstructor=GLTextureFloat3D;return null;}else if(this.output[1]>0){this.TextureConstructor=GLTextureFloat2D;return null;}else{this.TextureConstructor=GLTextureFloat;return null;}}}case'Array(2)':{if(this.output[2]>0){this.TextureConstructor=GLTextureArray2Float3D;return null;}else if(this.output[1]>0){this.TextureConstructor=GLTextureArray2Float2D;return null;}else{this.TextureConstructor=GLTextureArray2Float;return null;}}case'Array(3)':{if(this.output[2]>0){this.TextureConstructor=GLTextureArray3Float3D;return null;}else if(this.output[1]>0){this.TextureConstructor=GLTextureArray3Float2D;return null;}else{this.TextureConstructor=GLTextureArray3Float;return null;}}case'Array(4)':{if(this.output[2]>0){this.TextureConstructor=GLTextureArray4Float3D;return null;}else if(this.output[1]>0){this.TextureConstructor=GLTextureArray4Float2D;return null;}else{this.TextureConstructor=GLTextureArray4Float;return null;}}}}this.renderOutput=this.renderValues;if(this.subKernels!==null){this.renderKernels=this.renderKernelsToArrays;}if(this.optimizeFloatMemory){switch(this.returnType){case'LiteralInteger':case'Float':case'Number':case'Integer':{if(this.output[2]>0){this.TextureConstructor=GLTextureMemoryOptimized3D;this.formatValues=utils.erectMemoryOptimized3DFloat;return null;}else if(this.output[1]>0){this.TextureConstructor=GLTextureMemoryOptimized2D;this.formatValues=utils.erectMemoryOptimized2DFloat;return null;}else{this.TextureConstructor=GLTextureMemoryOptimized;this.formatValues=utils.erectMemoryOptimizedFloat;return null;}}case'Array(2)':{if(this.output[2]>0){this.TextureConstructor=GLTextureArray2Float3D;this.formatValues=utils.erect3DArray2;return null;}else if(this.output[1]>0){this.TextureConstructor=GLTextureArray2Float2D;this.formatValues=utils.erect2DArray2;return null;}else{this.TextureConstructor=GLTextureArray2Float;this.formatValues=utils.erectArray2;return null;}}case'Array(3)':{if(this.output[2]>0){this.TextureConstructor=GLTextureArray3Float3D;this.formatValues=utils.erect3DArray3;return null;}else if(this.output[1]>0){this.TextureConstructor=GLTextureArray3Float2D;this.formatValues=utils.erect2DArray3;return null;}else{this.TextureConstructor=GLTextureArray3Float;this.formatValues=utils.erectArray3;return null;}}case'Array(4)':{if(this.output[2]>0){this.TextureConstructor=GLTextureArray4Float3D;this.formatValues=utils.erect3DArray4;return null;}else if(this.output[1]>0){this.TextureConstructor=GLTextureArray4Float2D;this.formatValues=utils.erect2DArray4;return null;}else{this.TextureConstructor=GLTextureArray4Float;this.formatValues=utils.erectArray4;return null;}}}}else{switch(this.returnType){case'LiteralInteger':case'Float':case'Number':case'Integer':{if(this.output[2]>0){this.TextureConstructor=GLTextureFloat3D;this.formatValues=utils.erect3DFloat;return null;}else if(this.output[1]>0){this.TextureConstructor=GLTextureFloat2D;this.formatValues=utils.erect2DFloat;return null;}else{this.TextureConstructor=GLTextureFloat;this.formatValues=utils.erectFloat;return null;}}case'Array(2)':{if(this.output[2]>0){this.TextureConstructor=GLTextureArray2Float3D;this.formatValues=utils.erect3DArray2;return null;}else if(this.output[1]>0){this.TextureConstructor=GLTextureArray2Float2D;this.formatValues=utils.erect2DArray2;return null;}else{this.TextureConstructor=GLTextureArray2Float;this.formatValues=utils.erectArray2;return null;}}case'Array(3)':{if(this.output[2]>0){this.TextureConstructor=GLTextureArray3Float3D;this.formatValues=utils.erect3DArray3;return null;}else if(this.output[1]>0){this.TextureConstructor=GLTextureArray3Float2D;this.formatValues=utils.erect2DArray3;return null;}else{this.TextureConstructor=GLTextureArray3Float;this.formatValues=utils.erectArray3;return null;}}case'Array(4)':{if(this.output[2]>0){this.TextureConstructor=GLTextureArray4Float3D;this.formatValues=utils.erect3DArray4;return null;}else if(this.output[1]>0){this.TextureConstructor=GLTextureArray4Float2D;this.formatValues=utils.erect2DArray4;return null;}else{this.TextureConstructor=GLTextureArray4Float;this.formatValues=utils.erectArray4;return null;}}}}}else{throw new Error("unhandled precision of \"".concat(this.precision,"\""));}throw new Error("unhandled return type \"".concat(this.returnType,"\""));}},{key:"getKernelString",value:function getKernelString(){throw new Error("abstract method call");}},{key:"getMainResultTexture",value:function getMainResultTexture(){switch(this.returnType){case'LiteralInteger':case'Float':case'Integer':case'Number':return this.getMainResultNumberTexture();case'Array(2)':return this.getMainResultArray2Texture();case'Array(3)':return this.getMainResultArray3Texture();case'Array(4)':return this.getMainResultArray4Texture();default:throw new Error("unhandled returnType type ".concat(this.returnType));}}},{key:"getMainResultKernelNumberTexture",value:function getMainResultKernelNumberTexture(){throw new Error("abstract method call");}},{key:"getMainResultSubKernelNumberTexture",value:function getMainResultSubKernelNumberTexture(){throw new Error("abstract method call");}},{key:"getMainResultKernelArray2Texture",value:function getMainResultKernelArray2Texture(){throw new Error("abstract method call");}},{key:"getMainResultSubKernelArray2Texture",value:function getMainResultSubKernelArray2Texture(){throw new Error("abstract method call");}},{key:"getMainResultKernelArray3Texture",value:function getMainResultKernelArray3Texture(){throw new Error("abstract method call");}},{key:"getMainResultSubKernelArray3Texture",value:function getMainResultSubKernelArray3Texture(){throw new Error("abstract method call");}},{key:"getMainResultKernelArray4Texture",value:function getMainResultKernelArray4Texture(){throw new Error("abstract method call");}},{key:"getMainResultSubKernelArray4Texture",value:function getMainResultSubKernelArray4Texture(){throw new Error("abstract method call");}},{key:"getMainResultGraphical",value:function getMainResultGraphical(){throw new Error("abstract method call");}},{key:"getMainResultMemoryOptimizedFloats",value:function getMainResultMemoryOptimizedFloats(){throw new Error("abstract method call");}},{key:"getMainResultPackedPixels",value:function getMainResultPackedPixels(){throw new Error("abstract method call");}},{key:"getMainResultString",value:function getMainResultString(){if(this.graphical){return this.getMainResultGraphical();}else if(this.precision==='single'){if(this.optimizeFloatMemory){return this.getMainResultMemoryOptimizedFloats();}return this.getMainResultTexture();}else{return this.getMainResultPackedPixels();}}},{key:"getMainResultNumberTexture",value:function getMainResultNumberTexture(){return utils.linesToString(this.getMainResultKernelNumberTexture())+utils.linesToString(this.getMainResultSubKernelNumberTexture());}},{key:"getMainResultArray2Texture",value:function getMainResultArray2Texture(){return utils.linesToString(this.getMainResultKernelArray2Texture())+utils.linesToString(this.getMainResultSubKernelArray2Texture());}},{key:"getMainResultArray3Texture",value:function getMainResultArray3Texture(){return utils.linesToString(this.getMainResultKernelArray3Texture())+utils.linesToString(this.getMainResultSubKernelArray3Texture());}},{key:"getMainResultArray4Texture",value:function getMainResultArray4Texture(){return utils.linesToString(this.getMainResultKernelArray4Texture())+utils.linesToString(this.getMainResultSubKernelArray4Texture());}},{key:"getFloatTacticDeclaration",value:function getFloatTacticDeclaration(){var variablePrecision=this.getVariablePrecisionString(this.texSize,this.tactic);return"precision ".concat(variablePrecision," float;\n");}},{key:"getIntTacticDeclaration",value:function getIntTacticDeclaration(){return"precision ".concat(this.getVariablePrecisionString(this.texSize,this.tactic,true)," int;\n");}},{key:"getSampler2DTacticDeclaration",value:function getSampler2DTacticDeclaration(){return"precision ".concat(this.getVariablePrecisionString(this.texSize,this.tactic)," sampler2D;\n");}},{key:"getSampler2DArrayTacticDeclaration",value:function getSampler2DArrayTacticDeclaration(){return"precision ".concat(this.getVariablePrecisionString(this.texSize,this.tactic)," sampler2DArray;\n");}},{key:"renderTexture",value:function renderTexture(){return this.immutable?this.texture.clone():this.texture;}},{key:"readPackedPixelsToUint8Array",value:function readPackedPixelsToUint8Array(){if(this.precision!=='unsigned')throw new Error('Requires this.precision to be "unsigned"');var texSize=this.texSize,gl=this.context;var result=new Uint8Array(texSize[0]*texSize[1]*4);gl.readPixels(0,0,texSize[0],texSize[1],gl.RGBA,gl.UNSIGNED_BYTE,result);return result;}},{key:"readPackedPixelsToFloat32Array",value:function readPackedPixelsToFloat32Array(){return new Float32Array(this.readPackedPixelsToUint8Array().buffer);}},{key:"readFloatPixelsToFloat32Array",value:function readFloatPixelsToFloat32Array(){if(this.precision!=='single')throw new Error('Requires this.precision to be "single"');var texSize=this.texSize,gl=this.context;var w=texSize[0];var h=texSize[1];var result=new Float32Array(w*h*4);gl.readPixels(0,0,w,h,gl.RGBA,gl.FLOAT,result);return result;}},{key:"getPixels",value:function getPixels(flip){var gl=this.context,output=this.output;var _output4=_slicedToArray(output,2),width=_output4[0],height=_output4[1];var pixels=new Uint8Array(width*height*4);gl.readPixels(0,0,width,height,gl.RGBA,gl.UNSIGNED_BYTE,pixels);return new Uint8ClampedArray((flip?pixels:utils.flipPixels(pixels,width,height)).buffer);}},{key:"renderKernelsToArrays",value:function renderKernelsToArrays(){var result={result:this.renderOutput()};for(var i=0;i<this.subKernels.length;i++){result[this.subKernels[i].property]=this.mappedTextures[i].toArray();}return result;}},{key:"renderKernelsToTextures",value:function renderKernelsToTextures(){var result={result:this.renderOutput()};if(this.immutable){for(var i=0;i<this.subKernels.length;i++){result[this.subKernels[i].property]=this.mappedTextures[i].clone();}}else{for(var _i12=0;_i12<this.subKernels.length;_i12++){result[this.subKernels[_i12].property]=this.mappedTextures[_i12];}}return result;}},{key:"resetSwitchingKernels",value:function resetSwitchingKernels(){var existingValue=this.switchingKernels;this.switchingKernels=null;return existingValue;}},{key:"setOutput",value:function setOutput(output){var newOutput=this.toKernelOutput(output);if(this.program){if(!this.dynamicOutput){throw new Error('Resizing a kernel with dynamicOutput: false is not possible');}var newThreadDim=[newOutput[0],newOutput[1]||1,newOutput[2]||1];var newTexSize=utils.getKernelTextureSize({optimizeFloatMemory:this.optimizeFloatMemory,precision:this.precision},newThreadDim);var oldTexSize=this.texSize;if(oldTexSize){var oldPrecision=this.getVariablePrecisionString(oldTexSize,this.tactic);var newPrecision=this.getVariablePrecisionString(newTexSize,this.tactic);if(oldPrecision!==newPrecision){if(this.debug){console.warn('Precision requirement changed, asking GPU instance to recompile');}this.switchKernels({type:'outputPrecisionMismatch',precision:newPrecision,needed:output});return;}}this.output=newOutput;this.threadDim=newThreadDim;this.texSize=newTexSize;var gl=this.context;gl.bindFramebuffer(gl.FRAMEBUFFER,this.framebuffer);this.updateMaxTexSize();this.framebuffer.width=this.texSize[0];this.framebuffer.height=this.texSize[1];gl.viewport(0,0,this.maxTexSize[0],this.maxTexSize[1]);this.canvas.width=this.maxTexSize[0];this.canvas.height=this.maxTexSize[1];if(this.texture){this.texture["delete"]();}this.texture=null;this._setupOutputTexture();if(this.mappedTextures&&this.mappedTextures.length>0){for(var i=0;i<this.mappedTextures.length;i++){this.mappedTextures[i]["delete"]();}this.mappedTextures=null;this._setupSubOutputTextures();}}else{this.output=newOutput;}return this;}},{key:"renderValues",value:function renderValues(){return this.formatValues(this.transferValues(),this.output[0],this.output[1],this.output[2]);}},{key:"switchKernels",value:function switchKernels(reason){if(this.switchingKernels){this.switchingKernels.push(reason);}else{this.switchingKernels=[reason];}}},{key:"getVariablePrecisionString",value:function getVariablePrecisionString(){var textureSize=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.texSize;var tactic=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.tactic;var isInt=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(!tactic){if(!this.constructor.features.isSpeedTacticSupported)return'highp';var low=this.constructor.features[isInt?'lowIntPrecision':'lowFloatPrecision'];var medium=this.constructor.features[isInt?'mediumIntPrecision':'mediumFloatPrecision'];var high=this.constructor.features[isInt?'highIntPrecision':'highFloatPrecision'];var requiredSize=Math.log2(textureSize[0]*textureSize[1]);if(requiredSize<=low.rangeMax){return'lowp';}else if(requiredSize<=medium.rangeMax){return'mediump';}else if(requiredSize<=high.rangeMax){return'highp';}else{throw new Error("The required size exceeds that of the ability of your system");}}switch(tactic){case'speed':return'lowp';case'balanced':return'mediump';case'precision':return'highp';default:throw new Error("Unknown tactic \"".concat(tactic,"\" use \"speed\", \"balanced\", \"precision\", or empty for auto"));}}},{key:"updateTextureArgumentRefs",value:function updateTextureArgumentRefs(kernelValue,arg){if(!this.immutable)return;if(this.texture.texture===arg.texture){var prevArg=kernelValue.prevArg;if(prevArg){if(prevArg.texture._refs===1){this.texture["delete"]();this.texture=prevArg.clone();this._textureSwitched=true;}prevArg["delete"]();}kernelValue.prevArg=arg.clone();}else if(this.mappedTextures&&this.mappedTextures.length>0){var mappedTextures=this.mappedTextures;for(var i=0;i<mappedTextures.length;i++){var mappedTexture=mappedTextures[i];if(mappedTexture.texture===arg.texture){var _prevArg=kernelValue.prevArg;if(_prevArg){if(_prevArg.texture._refs===1){mappedTexture["delete"]();mappedTextures[i]=_prevArg.clone();this._mappedTextureSwitched[i]=true;}_prevArg["delete"]();}kernelValue.prevArg=arg.clone();return;}}}}},{key:"onActivate",value:function onActivate(previousKernel){this._textureSwitched=true;this.texture=previousKernel.texture;if(this.mappedTextures){for(var i=0;i<this.mappedTextures.length;i++){this._mappedTextureSwitched[i]=true;}this.mappedTextures=previousKernel.mappedTextures;}}},{key:"initCanvas",value:function initCanvas(){}}],[{key:"mode",get:function get(){return'gpu';}},{key:"getIsFloatRead",value:function getIsFloatRead(){var kernelString="function kernelFunction() {\n            return 1;\n          }";var kernel=new this(kernelString,{context:this.testContext,canvas:this.testCanvas,validate:false,output:[1],precision:'single',returnType:'Number',tactic:'speed'});kernel.build();kernel.run();var result=kernel.renderOutput();kernel.destroy(true);return result[0]===1;}},{key:"getIsIntegerDivisionAccurate",value:function getIsIntegerDivisionAccurate(){function kernelFunction(v1,v2){return v1[this.thread.x]/v2[this.thread.x];}var kernel=new this(kernelFunction.toString(),{context:this.testContext,canvas:this.testCanvas,validate:false,output:[2],returnType:'Number',precision:'unsigned',tactic:'speed'});var args=[[6,6030401],[3,3991]];kernel.build.apply(kernel,args);kernel.run.apply(kernel,args);var result=kernel.renderOutput();kernel.destroy(true);return result[0]===2&&result[1]===1511;}},{key:"getIsSpeedTacticSupported",value:function getIsSpeedTacticSupported(){function kernelFunction(value){return value[this.thread.x];}var kernel=new this(kernelFunction.toString(),{context:this.testContext,canvas:this.testCanvas,validate:false,output:[4],returnType:'Number',precision:'unsigned',tactic:'speed'});var args=[[0,1,2,3]];kernel.build.apply(kernel,args);kernel.run.apply(kernel,args);var result=kernel.renderOutput();kernel.destroy(true);return Math.round(result[0])===0&&Math.round(result[1])===1&&Math.round(result[2])===2&&Math.round(result[3])===3;}},{key:"testCanvas",get:function get(){throw new Error("\"testCanvas\" not defined on ".concat(this.name));}},{key:"testContext",get:function get(){throw new Error("\"testContext\" not defined on ".concat(this.name));}},{key:"getFeatures",value:function getFeatures(){var gl=this.testContext;var isDrawBuffers=this.getIsDrawBuffers();return Object.freeze({isFloatRead:this.getIsFloatRead(),isIntegerDivisionAccurate:this.getIsIntegerDivisionAccurate(),isSpeedTacticSupported:this.getIsSpeedTacticSupported(),isTextureFloat:this.getIsTextureFloat(),isDrawBuffers:isDrawBuffers,kernelMap:isDrawBuffers,channelCount:this.getChannelCount(),maxTextureSize:this.getMaxTextureSize(),lowIntPrecision:gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.LOW_INT),lowFloatPrecision:gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.LOW_FLOAT),mediumIntPrecision:gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.MEDIUM_INT),mediumFloatPrecision:gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.MEDIUM_FLOAT),highIntPrecision:gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.HIGH_INT),highFloatPrecision:gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.HIGH_FLOAT)});}},{key:"setupFeatureChecks",value:function setupFeatureChecks(){throw new Error("\"setupFeatureChecks\" not defined on ".concat(this.name));}},{key:"getSignature",value:function getSignature(kernel,argumentTypes){return kernel.getVariablePrecisionString()+(argumentTypes.length>0?':'+argumentTypes.join(','):'');}},{key:"nativeFunctionArguments",value:function nativeFunctionArguments(source){var argumentTypes=[];var argumentNames=[];var states=[];var isStartingVariableName=/^[a-zA-Z_]/;var isVariableChar=/[a-zA-Z_0-9]/;var i=0;var argumentName=null;var argumentType=null;while(i<source.length){var _char=source[i];var nextChar=source[i+1];var state=states.length>0?states[states.length-1]:null;if(state==='FUNCTION_ARGUMENTS'&&_char==='/'&&nextChar==='*'){states.push('MULTI_LINE_COMMENT');i+=2;continue;}else if(state==='MULTI_LINE_COMMENT'&&_char==='*'&&nextChar==='/'){states.pop();i+=2;continue;}else if(state==='FUNCTION_ARGUMENTS'&&_char==='/'&&nextChar==='/'){states.push('COMMENT');i+=2;continue;}else if(state==='COMMENT'&&_char==='\n'){states.pop();i++;continue;}else if(state===null&&_char==='('){states.push('FUNCTION_ARGUMENTS');i++;continue;}else if(state==='FUNCTION_ARGUMENTS'){if(_char===')'){states.pop();break;}if(_char==='f'&&nextChar==='l'&&source[i+2]==='o'&&source[i+3]==='a'&&source[i+4]==='t'&&source[i+5]===' '){states.push('DECLARE_VARIABLE');argumentType='float';argumentName='';i+=6;continue;}else if(_char==='i'&&nextChar==='n'&&source[i+2]==='t'&&source[i+3]===' '){states.push('DECLARE_VARIABLE');argumentType='int';argumentName='';i+=4;continue;}else if(_char==='v'&&nextChar==='e'&&source[i+2]==='c'&&source[i+3]==='2'&&source[i+4]===' '){states.push('DECLARE_VARIABLE');argumentType='vec2';argumentName='';i+=5;continue;}else if(_char==='v'&&nextChar==='e'&&source[i+2]==='c'&&source[i+3]==='3'&&source[i+4]===' '){states.push('DECLARE_VARIABLE');argumentType='vec3';argumentName='';i+=5;continue;}else if(_char==='v'&&nextChar==='e'&&source[i+2]==='c'&&source[i+3]==='4'&&source[i+4]===' '){states.push('DECLARE_VARIABLE');argumentType='vec4';argumentName='';i+=5;continue;}}else if(state==='DECLARE_VARIABLE'){if(argumentName===''){if(_char===' '){i++;continue;}if(!isStartingVariableName.test(_char)){throw new Error('variable name is not expected string');}}argumentName+=_char;if(!isVariableChar.test(nextChar)){states.pop();argumentNames.push(argumentName);argumentTypes.push(typeMap[argumentType]);}}i++;}if(states.length>0){throw new Error('GLSL function was not parsable');}return{argumentNames:argumentNames,argumentTypes:argumentTypes};}},{key:"nativeFunctionReturnType",value:function nativeFunctionReturnType(source){return typeMap[source.match(/int|float|vec[2-4]/)[0]];}},{key:"combineKernels",value:function combineKernels(combinedKernel,lastKernel){combinedKernel.apply(null,arguments);var _lastKernel$texSize=lastKernel.texSize,texSize=_lastKernel$texSize.texSize,context=_lastKernel$texSize.context,threadDim=_lastKernel$texSize.threadDim;var result;if(lastKernel.precision==='single'){var w=texSize[0];var h=Math.ceil(texSize[1]/4);result=new Float32Array(w*h*4*4);context.readPixels(0,0,w,h*4,context.RGBA,context.FLOAT,result);}else{var bytes=new Uint8Array(texSize[0]*texSize[1]*4);context.readPixels(0,0,texSize[0],texSize[1],context.RGBA,context.UNSIGNED_BYTE,bytes);result=new Float32Array(bytes.buffer);}result=result.subarray(0,threadDim[0]*threadDim[1]*threadDim[2]);if(lastKernel.output.length===1){return result;}else if(lastKernel.output.length===2){return utils.splitArray(result,lastKernel.output[0]);}else if(lastKernel.output.length===3){var cube=utils.splitArray(result,lastKernel.output[0]*lastKernel.output[1]);return cube.map(function(x){return utils.splitArray(x,lastKernel.output[0]);});}}}]);return GLKernel;}(Kernel);var typeMap={"int":'Integer',"float":'Number',vec2:'Array(2)',vec3:'Array(3)',vec4:'Array(4)'};module.exports={GLKernel:GLKernel};},{"../../utils":114,"../kernel":36,"./texture/array-2-float":16,"./texture/array-2-float-2d":14,"./texture/array-2-float-3d":15,"./texture/array-3-float":19,"./texture/array-3-float-2d":17,"./texture/array-3-float-3d":18,"./texture/array-4-float":22,"./texture/array-4-float-2d":20,"./texture/array-4-float-3d":21,"./texture/float":25,"./texture/float-2d":23,"./texture/float-3d":24,"./texture/graphical":26,"./texture/memory-optimized":30,"./texture/memory-optimized-2d":28,"./texture/memory-optimized-3d":29,"./texture/unsigned":33,"./texture/unsigned-2d":31,"./texture/unsigned-3d":32}],14:[function(require,module,exports){var _require35=require('../../../utils'),utils=_require35.utils;var _require36=require('./float'),GLTextureFloat=_require36.GLTextureFloat;var GLTextureArray2Float2D=/*#__PURE__*/function(_GLTextureFloat){_inherits(GLTextureArray2Float2D,_GLTextureFloat);var _super4=_createSuper(GLTextureArray2Float2D);function GLTextureArray2Float2D(settings){var _this6;_classCallCheck(this,GLTextureArray2Float2D);_this6=_super4.call(this,settings);_this6.type='ArrayTexture(2)';return _this6;}_createClass(GLTextureArray2Float2D,[{key:"toArray",value:function toArray(){return utils.erect2DArray2(this.renderValues(),this.output[0],this.output[1]);}}]);return GLTextureArray2Float2D;}(GLTextureFloat);module.exports={GLTextureArray2Float2D:GLTextureArray2Float2D};},{"../../../utils":114,"./float":25}],15:[function(require,module,exports){var _require37=require('../../../utils'),utils=_require37.utils;var _require38=require('./float'),GLTextureFloat=_require38.GLTextureFloat;var GLTextureArray2Float3D=/*#__PURE__*/function(_GLTextureFloat2){_inherits(GLTextureArray2Float3D,_GLTextureFloat2);var _super5=_createSuper(GLTextureArray2Float3D);function GLTextureArray2Float3D(settings){var _this7;_classCallCheck(this,GLTextureArray2Float3D);_this7=_super5.call(this,settings);_this7.type='ArrayTexture(2)';return _this7;}_createClass(GLTextureArray2Float3D,[{key:"toArray",value:function toArray(){return utils.erect3DArray2(this.renderValues(),this.output[0],this.output[1],this.output[2]);}}]);return GLTextureArray2Float3D;}(GLTextureFloat);module.exports={GLTextureArray2Float3D:GLTextureArray2Float3D};},{"../../../utils":114,"./float":25}],16:[function(require,module,exports){var _require39=require('../../../utils'),utils=_require39.utils;var _require40=require('./float'),GLTextureFloat=_require40.GLTextureFloat;var GLTextureArray2Float=/*#__PURE__*/function(_GLTextureFloat3){_inherits(GLTextureArray2Float,_GLTextureFloat3);var _super6=_createSuper(GLTextureArray2Float);function GLTextureArray2Float(settings){var _this8;_classCallCheck(this,GLTextureArray2Float);_this8=_super6.call(this,settings);_this8.type='ArrayTexture(2)';return _this8;}_createClass(GLTextureArray2Float,[{key:"toArray",value:function toArray(){return utils.erectArray2(this.renderValues(),this.output[0],this.output[1]);}}]);return GLTextureArray2Float;}(GLTextureFloat);module.exports={GLTextureArray2Float:GLTextureArray2Float};},{"../../../utils":114,"./float":25}],17:[function(require,module,exports){var _require41=require('../../../utils'),utils=_require41.utils;var _require42=require('./float'),GLTextureFloat=_require42.GLTextureFloat;var GLTextureArray3Float2D=/*#__PURE__*/function(_GLTextureFloat4){_inherits(GLTextureArray3Float2D,_GLTextureFloat4);var _super7=_createSuper(GLTextureArray3Float2D);function GLTextureArray3Float2D(settings){var _this9;_classCallCheck(this,GLTextureArray3Float2D);_this9=_super7.call(this,settings);_this9.type='ArrayTexture(3)';return _this9;}_createClass(GLTextureArray3Float2D,[{key:"toArray",value:function toArray(){return utils.erect2DArray3(this.renderValues(),this.output[0],this.output[1]);}}]);return GLTextureArray3Float2D;}(GLTextureFloat);module.exports={GLTextureArray3Float2D:GLTextureArray3Float2D};},{"../../../utils":114,"./float":25}],18:[function(require,module,exports){var _require43=require('../../../utils'),utils=_require43.utils;var _require44=require('./float'),GLTextureFloat=_require44.GLTextureFloat;var GLTextureArray3Float3D=/*#__PURE__*/function(_GLTextureFloat5){_inherits(GLTextureArray3Float3D,_GLTextureFloat5);var _super8=_createSuper(GLTextureArray3Float3D);function GLTextureArray3Float3D(settings){var _this10;_classCallCheck(this,GLTextureArray3Float3D);_this10=_super8.call(this,settings);_this10.type='ArrayTexture(3)';return _this10;}_createClass(GLTextureArray3Float3D,[{key:"toArray",value:function toArray(){return utils.erect3DArray3(this.renderValues(),this.output[0],this.output[1],this.output[2]);}}]);return GLTextureArray3Float3D;}(GLTextureFloat);module.exports={GLTextureArray3Float3D:GLTextureArray3Float3D};},{"../../../utils":114,"./float":25}],19:[function(require,module,exports){var _require45=require('../../../utils'),utils=_require45.utils;var _require46=require('./float'),GLTextureFloat=_require46.GLTextureFloat;var GLTextureArray3Float=/*#__PURE__*/function(_GLTextureFloat6){_inherits(GLTextureArray3Float,_GLTextureFloat6);var _super9=_createSuper(GLTextureArray3Float);function GLTextureArray3Float(settings){var _this11;_classCallCheck(this,GLTextureArray3Float);_this11=_super9.call(this,settings);_this11.type='ArrayTexture(3)';return _this11;}_createClass(GLTextureArray3Float,[{key:"toArray",value:function toArray(){return utils.erectArray3(this.renderValues(),this.output[0]);}}]);return GLTextureArray3Float;}(GLTextureFloat);module.exports={GLTextureArray3Float:GLTextureArray3Float};},{"../../../utils":114,"./float":25}],20:[function(require,module,exports){var _require47=require('../../../utils'),utils=_require47.utils;var _require48=require('./float'),GLTextureFloat=_require48.GLTextureFloat;var GLTextureArray4Float2D=/*#__PURE__*/function(_GLTextureFloat7){_inherits(GLTextureArray4Float2D,_GLTextureFloat7);var _super10=_createSuper(GLTextureArray4Float2D);function GLTextureArray4Float2D(settings){var _this12;_classCallCheck(this,GLTextureArray4Float2D);_this12=_super10.call(this,settings);_this12.type='ArrayTexture(4)';return _this12;}_createClass(GLTextureArray4Float2D,[{key:"toArray",value:function toArray(){return utils.erect2DArray4(this.renderValues(),this.output[0],this.output[1]);}}]);return GLTextureArray4Float2D;}(GLTextureFloat);module.exports={GLTextureArray4Float2D:GLTextureArray4Float2D};},{"../../../utils":114,"./float":25}],21:[function(require,module,exports){var _require49=require('../../../utils'),utils=_require49.utils;var _require50=require('./float'),GLTextureFloat=_require50.GLTextureFloat;var GLTextureArray4Float3D=/*#__PURE__*/function(_GLTextureFloat8){_inherits(GLTextureArray4Float3D,_GLTextureFloat8);var _super11=_createSuper(GLTextureArray4Float3D);function GLTextureArray4Float3D(settings){var _this13;_classCallCheck(this,GLTextureArray4Float3D);_this13=_super11.call(this,settings);_this13.type='ArrayTexture(4)';return _this13;}_createClass(GLTextureArray4Float3D,[{key:"toArray",value:function toArray(){return utils.erect3DArray4(this.renderValues(),this.output[0],this.output[1],this.output[2]);}}]);return GLTextureArray4Float3D;}(GLTextureFloat);module.exports={GLTextureArray4Float3D:GLTextureArray4Float3D};},{"../../../utils":114,"./float":25}],22:[function(require,module,exports){var _require51=require('../../../utils'),utils=_require51.utils;var _require52=require('./float'),GLTextureFloat=_require52.GLTextureFloat;var GLTextureArray4Float=/*#__PURE__*/function(_GLTextureFloat9){_inherits(GLTextureArray4Float,_GLTextureFloat9);var _super12=_createSuper(GLTextureArray4Float);function GLTextureArray4Float(settings){var _this14;_classCallCheck(this,GLTextureArray4Float);_this14=_super12.call(this,settings);_this14.type='ArrayTexture(4)';return _this14;}_createClass(GLTextureArray4Float,[{key:"toArray",value:function toArray(){return utils.erectArray4(this.renderValues(),this.output[0]);}}]);return GLTextureArray4Float;}(GLTextureFloat);module.exports={GLTextureArray4Float:GLTextureArray4Float};},{"../../../utils":114,"./float":25}],23:[function(require,module,exports){var _require53=require('../../../utils'),utils=_require53.utils;var _require54=require('./float'),GLTextureFloat=_require54.GLTextureFloat;var GLTextureFloat2D=/*#__PURE__*/function(_GLTextureFloat10){_inherits(GLTextureFloat2D,_GLTextureFloat10);var _super13=_createSuper(GLTextureFloat2D);function GLTextureFloat2D(settings){var _this15;_classCallCheck(this,GLTextureFloat2D);_this15=_super13.call(this,settings);_this15.type='ArrayTexture(1)';return _this15;}_createClass(GLTextureFloat2D,[{key:"toArray",value:function toArray(){return utils.erect2DFloat(this.renderValues(),this.output[0],this.output[1]);}}]);return GLTextureFloat2D;}(GLTextureFloat);module.exports={GLTextureFloat2D:GLTextureFloat2D};},{"../../../utils":114,"./float":25}],24:[function(require,module,exports){var _require55=require('../../../utils'),utils=_require55.utils;var _require56=require('./float'),GLTextureFloat=_require56.GLTextureFloat;var GLTextureFloat3D=/*#__PURE__*/function(_GLTextureFloat11){_inherits(GLTextureFloat3D,_GLTextureFloat11);var _super14=_createSuper(GLTextureFloat3D);function GLTextureFloat3D(settings){var _this16;_classCallCheck(this,GLTextureFloat3D);_this16=_super14.call(this,settings);_this16.type='ArrayTexture(1)';return _this16;}_createClass(GLTextureFloat3D,[{key:"toArray",value:function toArray(){return utils.erect3DFloat(this.renderValues(),this.output[0],this.output[1],this.output[2]);}}]);return GLTextureFloat3D;}(GLTextureFloat);module.exports={GLTextureFloat3D:GLTextureFloat3D};},{"../../../utils":114,"./float":25}],25:[function(require,module,exports){var _require57=require('../../../utils'),utils=_require57.utils;var _require58=require('./index'),GLTexture=_require58.GLTexture;var GLTextureFloat=/*#__PURE__*/function(_GLTexture){_inherits(GLTextureFloat,_GLTexture);var _super15=_createSuper(GLTextureFloat);function GLTextureFloat(settings){var _this17;_classCallCheck(this,GLTextureFloat);_this17=_super15.call(this,settings);_this17.type='ArrayTexture(1)';return _this17;}_createClass(GLTextureFloat,[{key:"textureType",get:function get(){return this.context.FLOAT;}},{key:"renderRawOutput",value:function renderRawOutput(){var gl=this.context;var size=this.size;gl.bindFramebuffer(gl.FRAMEBUFFER,this.framebuffer());gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,this.texture,0);var result=new Float32Array(size[0]*size[1]*4);gl.readPixels(0,0,size[0],size[1],gl.RGBA,gl.FLOAT,result);return result;}},{key:"renderValues",value:function renderValues(){if(this._deleted)return null;return this.renderRawOutput();}},{key:"toArray",value:function toArray(){return utils.erectFloat(this.renderValues(),this.output[0]);}}]);return GLTextureFloat;}(GLTexture);module.exports={GLTextureFloat:GLTextureFloat};},{"../../../utils":114,"./index":27}],26:[function(require,module,exports){var _require59=require('./unsigned'),GLTextureUnsigned=_require59.GLTextureUnsigned;var GLTextureGraphical=/*#__PURE__*/function(_GLTextureUnsigned){_inherits(GLTextureGraphical,_GLTextureUnsigned);var _super16=_createSuper(GLTextureGraphical);function GLTextureGraphical(settings){var _this18;_classCallCheck(this,GLTextureGraphical);_this18=_super16.call(this,settings);_this18.type='ArrayTexture(4)';return _this18;}_createClass(GLTextureGraphical,[{key:"toArray",value:function toArray(){return this.renderValues();}}]);return GLTextureGraphical;}(GLTextureUnsigned);module.exports={GLTextureGraphical:GLTextureGraphical};},{"./unsigned":33}],27:[function(require,module,exports){var _require60=require('../../../texture'),Texture=_require60.Texture;var GLTexture=/*#__PURE__*/function(_Texture){_inherits(GLTexture,_Texture);var _super17=_createSuper(GLTexture);function GLTexture(){_classCallCheck(this,GLTexture);return _super17.apply(this,arguments);}_createClass(GLTexture,[{key:"textureType",get:function get(){throw new Error("\"textureType\" not implemented on ".concat(this.name));}},{key:"clone",value:function clone(){return new this.constructor(this);}},{key:"beforeMutate",value:function beforeMutate(){if(this.texture._refs>1){this.newTexture();return true;}return false;}},{key:"cloneTexture",value:function cloneTexture(){this.texture._refs--;var gl=this.context,size=this.size,texture=this.texture,kernel=this.kernel;if(kernel.debug){console.warn('cloning internal texture');}gl.bindFramebuffer(gl.FRAMEBUFFER,this.framebuffer());selectTexture(gl,texture);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,texture,0);var target=gl.createTexture();selectTexture(gl,target);gl.texImage2D(gl.TEXTURE_2D,0,this.internalFormat,size[0],size[1],0,this.textureFormat,this.textureType,null);gl.copyTexSubImage2D(gl.TEXTURE_2D,0,0,0,0,0,size[0],size[1]);target._refs=1;this.texture=target;}},{key:"newTexture",value:function newTexture(){this.texture._refs--;var gl=this.context;var size=this.size;var kernel=this.kernel;if(kernel.debug){console.warn('new internal texture');}var target=gl.createTexture();selectTexture(gl,target);gl.texImage2D(gl.TEXTURE_2D,0,this.internalFormat,size[0],size[1],0,this.textureFormat,this.textureType,null);target._refs=1;this.texture=target;}},{key:"clear",value:function clear(){if(this.texture._refs){this.texture._refs--;var _gl=this.context;var target=this.texture=_gl.createTexture();selectTexture(_gl,target);var size=this.size;target._refs=1;_gl.texImage2D(_gl.TEXTURE_2D,0,this.internalFormat,size[0],size[1],0,this.textureFormat,this.textureType,null);}var gl=this.context,texture=this.texture;gl.bindFramebuffer(gl.FRAMEBUFFER,this.framebuffer());gl.bindTexture(gl.TEXTURE_2D,texture);selectTexture(gl,texture);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,texture,0);gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);}},{key:"delete",value:function _delete(){if(this._deleted)return;this._deleted=true;if(this.texture._refs){this.texture._refs--;if(this.texture._refs)return;}this.context.deleteTexture(this.texture);}},{key:"framebuffer",value:function framebuffer(){if(!this._framebuffer){this._framebuffer=this.kernel.getRawValueFramebuffer(this.size[0],this.size[1]);}return this._framebuffer;}}]);return GLTexture;}(Texture);function selectTexture(gl,texture){gl.activeTexture(gl.TEXTURE15);gl.bindTexture(gl.TEXTURE_2D,texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);}module.exports={GLTexture:GLTexture};},{"../../../texture":113}],28:[function(require,module,exports){var _require61=require('../../../utils'),utils=_require61.utils;var _require62=require('./float'),GLTextureFloat=_require62.GLTextureFloat;var GLTextureMemoryOptimized2D=/*#__PURE__*/function(_GLTextureFloat12){_inherits(GLTextureMemoryOptimized2D,_GLTextureFloat12);var _super18=_createSuper(GLTextureMemoryOptimized2D);function GLTextureMemoryOptimized2D(settings){var _this19;_classCallCheck(this,GLTextureMemoryOptimized2D);_this19=_super18.call(this,settings);_this19.type='MemoryOptimizedNumberTexture';return _this19;}_createClass(GLTextureMemoryOptimized2D,[{key:"toArray",value:function toArray(){return utils.erectMemoryOptimized2DFloat(this.renderValues(),this.output[0],this.output[1]);}}]);return GLTextureMemoryOptimized2D;}(GLTextureFloat);module.exports={GLTextureMemoryOptimized2D:GLTextureMemoryOptimized2D};},{"../../../utils":114,"./float":25}],29:[function(require,module,exports){var _require63=require('../../../utils'),utils=_require63.utils;var _require64=require('./float'),GLTextureFloat=_require64.GLTextureFloat;var GLTextureMemoryOptimized3D=/*#__PURE__*/function(_GLTextureFloat13){_inherits(GLTextureMemoryOptimized3D,_GLTextureFloat13);var _super19=_createSuper(GLTextureMemoryOptimized3D);function GLTextureMemoryOptimized3D(settings){var _this20;_classCallCheck(this,GLTextureMemoryOptimized3D);_this20=_super19.call(this,settings);_this20.type='MemoryOptimizedNumberTexture';return _this20;}_createClass(GLTextureMemoryOptimized3D,[{key:"toArray",value:function toArray(){return utils.erectMemoryOptimized3DFloat(this.renderValues(),this.output[0],this.output[1],this.output[2]);}}]);return GLTextureMemoryOptimized3D;}(GLTextureFloat);module.exports={GLTextureMemoryOptimized3D:GLTextureMemoryOptimized3D};},{"../../../utils":114,"./float":25}],30:[function(require,module,exports){var _require65=require('../../../utils'),utils=_require65.utils;var _require66=require('./float'),GLTextureFloat=_require66.GLTextureFloat;var GLTextureMemoryOptimized=/*#__PURE__*/function(_GLTextureFloat14){_inherits(GLTextureMemoryOptimized,_GLTextureFloat14);var _super20=_createSuper(GLTextureMemoryOptimized);function GLTextureMemoryOptimized(settings){var _this21;_classCallCheck(this,GLTextureMemoryOptimized);_this21=_super20.call(this,settings);_this21.type='MemoryOptimizedNumberTexture';return _this21;}_createClass(GLTextureMemoryOptimized,[{key:"toArray",value:function toArray(){return utils.erectMemoryOptimizedFloat(this.renderValues(),this.output[0]);}}]);return GLTextureMemoryOptimized;}(GLTextureFloat);module.exports={GLTextureMemoryOptimized:GLTextureMemoryOptimized};},{"../../../utils":114,"./float":25}],31:[function(require,module,exports){var _require67=require('../../../utils'),utils=_require67.utils;var _require68=require('./unsigned'),GLTextureUnsigned=_require68.GLTextureUnsigned;var GLTextureUnsigned2D=/*#__PURE__*/function(_GLTextureUnsigned2){_inherits(GLTextureUnsigned2D,_GLTextureUnsigned2);var _super21=_createSuper(GLTextureUnsigned2D);function GLTextureUnsigned2D(settings){var _this22;_classCallCheck(this,GLTextureUnsigned2D);_this22=_super21.call(this,settings);_this22.type='NumberTexture';return _this22;}_createClass(GLTextureUnsigned2D,[{key:"toArray",value:function toArray(){return utils.erect2DPackedFloat(this.renderValues(),this.output[0],this.output[1]);}}]);return GLTextureUnsigned2D;}(GLTextureUnsigned);module.exports={GLTextureUnsigned2D:GLTextureUnsigned2D};},{"../../../utils":114,"./unsigned":33}],32:[function(require,module,exports){var _require69=require('../../../utils'),utils=_require69.utils;var _require70=require('./unsigned'),GLTextureUnsigned=_require70.GLTextureUnsigned;var GLTextureUnsigned3D=/*#__PURE__*/function(_GLTextureUnsigned3){_inherits(GLTextureUnsigned3D,_GLTextureUnsigned3);var _super22=_createSuper(GLTextureUnsigned3D);function GLTextureUnsigned3D(settings){var _this23;_classCallCheck(this,GLTextureUnsigned3D);_this23=_super22.call(this,settings);_this23.type='NumberTexture';return _this23;}_createClass(GLTextureUnsigned3D,[{key:"toArray",value:function toArray(){return utils.erect3DPackedFloat(this.renderValues(),this.output[0],this.output[1],this.output[2]);}}]);return GLTextureUnsigned3D;}(GLTextureUnsigned);module.exports={GLTextureUnsigned3D:GLTextureUnsigned3D};},{"../../../utils":114,"./unsigned":33}],33:[function(require,module,exports){var _require71=require('../../../utils'),utils=_require71.utils;var _require72=require('./index'),GLTexture=_require72.GLTexture;var GLTextureUnsigned=/*#__PURE__*/function(_GLTexture2){_inherits(GLTextureUnsigned,_GLTexture2);var _super23=_createSuper(GLTextureUnsigned);function GLTextureUnsigned(settings){var _this24;_classCallCheck(this,GLTextureUnsigned);_this24=_super23.call(this,settings);_this24.type='NumberTexture';return _this24;}_createClass(GLTextureUnsigned,[{key:"textureType",get:function get(){return this.context.UNSIGNED_BYTE;}},{key:"renderRawOutput",value:function renderRawOutput(){var gl=this.context;gl.bindFramebuffer(gl.FRAMEBUFFER,this.framebuffer());gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,this.texture,0);var result=new Uint8Array(this.size[0]*this.size[1]*4);gl.readPixels(0,0,this.size[0],this.size[1],gl.RGBA,gl.UNSIGNED_BYTE,result);return result;}},{key:"renderValues",value:function renderValues(){if(this._deleted)return null;return new Float32Array(this.renderRawOutput().buffer);}},{key:"toArray",value:function toArray(){return utils.erectPackedFloat(this.renderValues(),this.output[0]);}}]);return GLTextureUnsigned;}(GLTexture);module.exports={GLTextureUnsigned:GLTextureUnsigned};},{"../../../utils":114,"./index":27}],34:[function(require,module,exports){var getContext=require('gl');var _require73=require('../web-gl/kernel'),WebGLKernel=_require73.WebGLKernel;var _require74=require('../gl/kernel-string'),glKernelString=_require74.glKernelString;var isSupported=null;var testCanvas=null;var testContext=null;var testExtensions=null;var features=null;var HeadlessGLKernel=/*#__PURE__*/function(_WebGLKernel){_inherits(HeadlessGLKernel,_WebGLKernel);var _super24=_createSuper(HeadlessGLKernel);function HeadlessGLKernel(){_classCallCheck(this,HeadlessGLKernel);return _super24.apply(this,arguments);}_createClass(HeadlessGLKernel,[{key:"initCanvas",value:function initCanvas(){return{};}},{key:"initContext",value:function initContext(){return getContext(2,2,{preserveDrawingBuffer:true});}},{key:"initExtensions",value:function initExtensions(){this.extensions={STACKGL_resize_drawingbuffer:this.context.getExtension('STACKGL_resize_drawingbuffer'),STACKGL_destroy_context:this.context.getExtension('STACKGL_destroy_context'),OES_texture_float:this.context.getExtension('OES_texture_float'),OES_texture_float_linear:this.context.getExtension('OES_texture_float_linear'),OES_element_index_uint:this.context.getExtension('OES_element_index_uint'),WEBGL_draw_buffers:this.context.getExtension('WEBGL_draw_buffers')};}},{key:"build",value:function build(){_get(_getPrototypeOf(HeadlessGLKernel.prototype),"build",this).apply(this,arguments);if(!this.fallbackRequested){this.extensions.STACKGL_resize_drawingbuffer.resize(this.maxTexSize[0],this.maxTexSize[1]);}}},{key:"destroyExtensions",value:function destroyExtensions(){this.extensions.STACKGL_resize_drawingbuffer=null;this.extensions.STACKGL_destroy_context=null;this.extensions.OES_texture_float=null;this.extensions.OES_texture_float_linear=null;this.extensions.OES_element_index_uint=null;this.extensions.WEBGL_draw_buffers=null;}},{key:"toString",value:function toString(){var setupContextString="const gl = context || require('gl')(1, 1);\n";var destroyContextString="    if (!context) { gl.getExtension('STACKGL_destroy_context').destroy(); }\n";return glKernelString(this.constructor,arguments,this,setupContextString,destroyContextString);}},{key:"setOutput",value:function setOutput(output){_get(_getPrototypeOf(HeadlessGLKernel.prototype),"setOutput",this).call(this,output);if(this.graphical&&this.extensions.STACKGL_resize_drawingbuffer){this.extensions.STACKGL_resize_drawingbuffer.resize(this.maxTexSize[0],this.maxTexSize[1]);}return this;}}],[{key:"isSupported",get:function get(){if(isSupported!==null)return isSupported;this.setupFeatureChecks();isSupported=testContext!==null;return isSupported;}},{key:"setupFeatureChecks",value:function setupFeatureChecks(){testCanvas=null;testExtensions=null;if(typeof getContext!=='function')return;try{testContext=getContext(2,2,{preserveDrawingBuffer:true});if(!testContext||!testContext.getExtension)return;testExtensions={STACKGL_resize_drawingbuffer:testContext.getExtension('STACKGL_resize_drawingbuffer'),STACKGL_destroy_context:testContext.getExtension('STACKGL_destroy_context'),OES_texture_float:testContext.getExtension('OES_texture_float'),OES_texture_float_linear:testContext.getExtension('OES_texture_float_linear'),OES_element_index_uint:testContext.getExtension('OES_element_index_uint'),WEBGL_draw_buffers:testContext.getExtension('WEBGL_draw_buffers'),WEBGL_color_buffer_float:testContext.getExtension('WEBGL_color_buffer_float')};features=this.getFeatures();}catch(e){console.warn(e);}}},{key:"isContextMatch",value:function isContextMatch(context){try{return context.getParameter(context.RENDERER)==='ANGLE';}catch(e){return false;}}},{key:"getIsTextureFloat",value:function getIsTextureFloat(){return Boolean(testExtensions.OES_texture_float);}},{key:"getIsDrawBuffers",value:function getIsDrawBuffers(){return Boolean(testExtensions.WEBGL_draw_buffers);}},{key:"getChannelCount",value:function getChannelCount(){return testExtensions.WEBGL_draw_buffers?testContext.getParameter(testExtensions.WEBGL_draw_buffers.MAX_DRAW_BUFFERS_WEBGL):1;}},{key:"getMaxTextureSize",value:function getMaxTextureSize(){return testContext.getParameter(testContext.MAX_TEXTURE_SIZE);}},{key:"testCanvas",get:function get(){return testCanvas;}},{key:"testContext",get:function get(){return testContext;}},{key:"features",get:function get(){return features;}},{key:"destroyContext",value:function destroyContext(context){var extension=context.getExtension('STACKGL_destroy_context');if(extension&&extension.destroy){extension.destroy();}}}]);return HeadlessGLKernel;}(WebGLKernel);module.exports={HeadlessGLKernel:HeadlessGLKernel};},{"../gl/kernel-string":12,"../web-gl/kernel":70,"gl":2}],35:[function(require,module,exports){var KernelValue=/*#__PURE__*/function(){function KernelValue(value,settings){_classCallCheck(this,KernelValue);var name=settings.name,kernel=settings.kernel,context=settings.context,checkContext=settings.checkContext,onRequestContextHandle=settings.onRequestContextHandle,onUpdateValueMismatch=settings.onUpdateValueMismatch,origin=settings.origin,strictIntegers=settings.strictIntegers,type=settings.type,tactic=settings.tactic;if(!name){throw new Error('name not set');}if(!type){throw new Error('type not set');}if(!origin){throw new Error('origin not set');}if(origin!=='user'&&origin!=='constants'){throw new Error("origin must be \"user\" or \"constants\" value is \"".concat(origin,"\""));}if(!onRequestContextHandle){throw new Error('onRequestContextHandle is not set');}this.name=name;this.origin=origin;this.tactic=tactic;this.varName=origin==='constants'?"constants.".concat(name):name;this.kernel=kernel;this.strictIntegers=strictIntegers;this.type=value.type||type;this.size=value.size||null;this.index=null;this.context=context;this.checkContext=checkContext!==null&&checkContext!==undefined?checkContext:true;this.contextHandle=null;this.onRequestContextHandle=onRequestContextHandle;this.onUpdateValueMismatch=onUpdateValueMismatch;this.forceUploadEachRun=null;}_createClass(KernelValue,[{key:"id",get:function get(){return"".concat(this.origin,"_").concat(name);}},{key:"getSource",value:function getSource(){throw new Error("\"getSource\" not defined on ".concat(this.constructor.name));}},{key:"updateValue",value:function updateValue(value){throw new Error("\"updateValue\" not defined on ".concat(this.constructor.name));}}]);return KernelValue;}();module.exports={KernelValue:KernelValue};},{}],36:[function(require,module,exports){var _require75=require('../utils'),utils=_require75.utils;var _require76=require('../input'),Input=_require76.Input;var Kernel=/*#__PURE__*/function(){function Kernel(source,settings){_classCallCheck(this,Kernel);if(_typeof(source)!=='object'){if(typeof source!=='string'){throw new Error('source not a string');}if(!utils.isFunctionString(source)){throw new Error('source not a function string');}}this.useLegacyEncoder=false;this.fallbackRequested=false;this.onRequestFallback=null;this.argumentNames=typeof source==='string'?utils.getArgumentNamesFromString(source):null;this.argumentTypes=null;this.argumentSizes=null;this.argumentBitRatios=null;this.kernelArguments=null;this.kernelConstants=null;this.forceUploadKernelConstants=null;this.source=source;this.output=null;this.debug=false;this.graphical=false;this.loopMaxIterations=0;this.constants=null;this.constantTypes=null;this.constantBitRatios=null;this.dynamicArguments=false;this.dynamicOutput=false;this.canvas=null;this.context=null;this.checkContext=null;this.gpu=null;this.functions=null;this.nativeFunctions=null;this.injectedNative=null;this.subKernels=null;this.validate=true;this.immutable=false;this.pipeline=false;this.precision=null;this.tactic=null;this.plugins=null;this.returnType=null;this.leadingReturnStatement=null;this.followingReturnStatement=null;this.optimizeFloatMemory=null;this.strictIntegers=false;this.fixIntegerDivisionAccuracy=null;this.built=false;this.signature=null;}_createClass(Kernel,[{key:"mergeSettings",value:function mergeSettings(settings){for(var p in settings){if(!settings.hasOwnProperty(p)||!this.hasOwnProperty(p))continue;switch(p){case'output':if(!Array.isArray(settings.output)){this.setOutput(settings.output);continue;}break;case'functions':this.functions=[];for(var i=0;i<settings.functions.length;i++){this.addFunction(settings.functions[i]);}continue;case'graphical':if(settings[p]&&!settings.hasOwnProperty('precision')){this.precision='unsigned';}this[p]=settings[p];continue;case'nativeFunctions':if(!settings.nativeFunctions)continue;this.nativeFunctions=[];for(var _i13=0;_i13<settings.nativeFunctions.length;_i13++){var s=settings.nativeFunctions[_i13];var _name5=s.name,source=s.source;this.addNativeFunction(_name5,source,s);}continue;}this[p]=settings[p];}if(!this.canvas)this.canvas=this.initCanvas();if(!this.context)this.context=this.initContext();if(!this.plugins)this.plugins=this.initPlugins(settings);}},{key:"build",value:function build(){throw new Error("\"build\" not defined on ".concat(this.constructor.name));}},{key:"run",value:function run(){throw new Error("\"run\" not defined on ".concat(this.constructor.name));}},{key:"initCanvas",value:function initCanvas(){throw new Error("\"initCanvas\" not defined on ".concat(this.constructor.name));}},{key:"initContext",value:function initContext(){throw new Error("\"initContext\" not defined on ".concat(this.constructor.name));}},{key:"initPlugins",value:function initPlugins(settings){throw new Error("\"initPlugins\" not defined on ".concat(this.constructor.name));}},{key:"addFunction",value:function addFunction(source){var settings=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};if(source.name&&source.source&&source.argumentTypes&&'returnType'in source){this.functions.push(source);}else if('settings'in source&&'source'in source){this.functions.push(this.functionToIGPUFunction(source.source,source.settings));}else if(typeof source==='string'||typeof source==='function'){this.functions.push(this.functionToIGPUFunction(source,settings));}else{throw new Error("function not properly defined");}return this;}},{key:"addNativeFunction",value:function addNativeFunction(name,source){var settings=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var _ref=settings.argumentTypes?splitArgumentTypes(settings.argumentTypes):this.constructor.nativeFunctionArguments(source)||{},argumentTypes=_ref.argumentTypes,argumentNames=_ref.argumentNames;this.nativeFunctions.push({name:name,source:source,settings:settings,argumentTypes:argumentTypes,argumentNames:argumentNames,returnType:settings.returnType||this.constructor.nativeFunctionReturnType(source)});return this;}},{key:"setupArguments",value:function setupArguments(args){this.kernelArguments=[];if(!this.argumentTypes){if(!this.argumentTypes){this.argumentTypes=[];for(var i=0;i<args.length;i++){var argType=utils.getVariableType(args[i],this.strictIntegers);var type=argType==='Integer'?'Number':argType;this.argumentTypes.push(type);this.kernelArguments.push({type:type});}}}else{for(var _i14=0;_i14<this.argumentTypes.length;_i14++){this.kernelArguments.push({type:this.argumentTypes[_i14]});}}this.argumentSizes=new Array(args.length);this.argumentBitRatios=new Int32Array(args.length);for(var _i15=0;_i15<args.length;_i15++){var arg=args[_i15];this.argumentSizes[_i15]=arg.constructor===Input?arg.size:null;this.argumentBitRatios[_i15]=this.getBitRatio(arg);}if(this.argumentNames.length!==args.length){throw new Error("arguments are miss-aligned");}}},{key:"setupConstants",value:function setupConstants(){this.kernelConstants=[];var needsConstantTypes=this.constantTypes===null;if(needsConstantTypes){this.constantTypes={};}this.constantBitRatios={};if(this.constants){for(var _name6 in this.constants){if(needsConstantTypes){var type=utils.getVariableType(this.constants[_name6],this.strictIntegers);this.constantTypes[_name6]=type;this.kernelConstants.push({name:_name6,type:type});}else{this.kernelConstants.push({name:_name6,type:this.constantTypes[_name6]});}this.constantBitRatios[_name6]=this.getBitRatio(this.constants[_name6]);}}}},{key:"setOptimizeFloatMemory",value:function setOptimizeFloatMemory(flag){this.optimizeFloatMemory=flag;return this;}},{key:"toKernelOutput",value:function toKernelOutput(output){if(output.hasOwnProperty('x')){if(output.hasOwnProperty('y')){if(output.hasOwnProperty('z')){return[output.x,output.y,output.z];}else{return[output.x,output.y];}}else{return[output.x];}}else{return output;}}},{key:"setOutput",value:function setOutput(output){this.output=this.toKernelOutput(output);return this;}},{key:"setDebug",value:function setDebug(flag){this.debug=flag;return this;}},{key:"setGraphical",value:function setGraphical(flag){this.graphical=flag;this.precision='unsigned';return this;}},{key:"setLoopMaxIterations",value:function setLoopMaxIterations(max){this.loopMaxIterations=max;return this;}},{key:"setConstants",value:function setConstants(constants){this.constants=constants;return this;}},{key:"setConstantTypes",value:function setConstantTypes(constantTypes){this.constantTypes=constantTypes;return this;}},{key:"setFunctions",value:function setFunctions(functions){for(var i=0;i<functions.length;i++){this.addFunction(functions[i]);}return this;}},{key:"setNativeFunctions",value:function setNativeFunctions(nativeFunctions){for(var i=0;i<nativeFunctions.length;i++){var settings=nativeFunctions[i];var _name7=settings.name,source=settings.source;this.addNativeFunction(_name7,source,settings);}return this;}},{key:"setInjectedNative",value:function setInjectedNative(injectedNative){this.injectedNative=injectedNative;return this;}},{key:"setPipeline",value:function setPipeline(flag){this.pipeline=flag;return this;}},{key:"setPrecision",value:function setPrecision(flag){this.precision=flag;return this;}},{key:"setDimensions",value:function setDimensions(flag){utils.warnDeprecated('method','setDimensions','setOutput');this.output=flag;return this;}},{key:"setOutputToTexture",value:function setOutputToTexture(flag){utils.warnDeprecated('method','setOutputToTexture','setPipeline');this.pipeline=flag;return this;}},{key:"setImmutable",value:function setImmutable(flag){this.immutable=flag;return this;}},{key:"setCanvas",value:function setCanvas(canvas){this.canvas=canvas;return this;}},{key:"setStrictIntegers",value:function setStrictIntegers(flag){this.strictIntegers=flag;return this;}},{key:"setDynamicOutput",value:function setDynamicOutput(flag){this.dynamicOutput=flag;return this;}},{key:"setHardcodeConstants",value:function setHardcodeConstants(flag){utils.warnDeprecated('method','setHardcodeConstants');this.setDynamicOutput(flag);this.setDynamicArguments(flag);return this;}},{key:"setDynamicArguments",value:function setDynamicArguments(flag){this.dynamicArguments=flag;return this;}},{key:"setUseLegacyEncoder",value:function setUseLegacyEncoder(flag){this.useLegacyEncoder=flag;return this;}},{key:"setWarnVarUsage",value:function setWarnVarUsage(flag){utils.warnDeprecated('method','setWarnVarUsage');return this;}},{key:"getCanvas",value:function getCanvas(){utils.warnDeprecated('method','getCanvas');return this.canvas;}},{key:"getWebGl",value:function getWebGl(){utils.warnDeprecated('method','getWebGl');return this.context;}},{key:"setContext",value:function setContext(context){this.context=context;return this;}},{key:"setArgumentTypes",value:function setArgumentTypes(argumentTypes){if(Array.isArray(argumentTypes)){this.argumentTypes=argumentTypes;}else{this.argumentTypes=[];for(var p in argumentTypes){if(!argumentTypes.hasOwnProperty(p))continue;var argumentIndex=this.argumentNames.indexOf(p);if(argumentIndex===-1)throw new Error("unable to find argument ".concat(p));this.argumentTypes[argumentIndex]=argumentTypes[p];}}return this;}},{key:"setTactic",value:function setTactic(tactic){this.tactic=tactic;return this;}},{key:"requestFallback",value:function requestFallback(args){if(!this.onRequestFallback){throw new Error("\"onRequestFallback\" not defined on ".concat(this.constructor.name));}this.fallbackRequested=true;return this.onRequestFallback(args);}},{key:"validateSettings",value:function validateSettings(){throw new Error("\"validateSettings\" not defined on ".concat(this.constructor.name));}},{key:"addSubKernel",value:function addSubKernel(subKernel){if(this.subKernels===null){this.subKernels=[];}if(!subKernel.source)throw new Error('subKernel missing "source" property');if(!subKernel.property&&isNaN(subKernel.property))throw new Error('subKernel missing "property" property');if(!subKernel.name)throw new Error('subKernel missing "name" property');this.subKernels.push(subKernel);return this;}},{key:"destroy",value:function destroy(removeCanvasReferences){throw new Error("\"destroy\" called on ".concat(this.constructor.name));}},{key:"getBitRatio",value:function getBitRatio(value){if(this.precision==='single'){return 4;}else if(Array.isArray(value[0])){return this.getBitRatio(value[0]);}else if(value.constructor===Input){return this.getBitRatio(value.value);}switch(value.constructor){case Uint8ClampedArray:case Uint8Array:case Int8Array:return 1;case Uint16Array:case Int16Array:return 2;case Float32Array:case Int32Array:default:return 4;}}},{key:"getPixels",value:function getPixels(flip){throw new Error("\"getPixels\" called on ".concat(this.constructor.name));}},{key:"checkOutput",value:function checkOutput(){if(!this.output||!utils.isArray(this.output))throw new Error('kernel.output not an array');if(this.output.length<1)throw new Error('kernel.output is empty, needs at least 1 value');for(var i=0;i<this.output.length;i++){if(isNaN(this.output[i])||this.output[i]<1){throw new Error("".concat(this.constructor.name,".output[").concat(i,"] incorrectly defined as `").concat(this.output[i],"`, needs to be numeric, and greater than 0"));}}}},{key:"prependString",value:function prependString(value){throw new Error("\"prependString\" called on ".concat(this.constructor.name));}},{key:"hasPrependString",value:function hasPrependString(value){throw new Error("\"hasPrependString\" called on ".concat(this.constructor.name));}},{key:"toJSON",value:function toJSON(){return{settings:{output:this.output,pipeline:this.pipeline,argumentNames:this.argumentNames,argumentsTypes:this.argumentTypes,constants:this.constants,pluginNames:this.plugins?this.plugins.map(function(plugin){return plugin.name;}):null,returnType:this.returnType}};}},{key:"buildSignature",value:function buildSignature(args){var Constructor=this.constructor;this.signature=Constructor.getSignature(this,Constructor.getArgumentTypes(this,args));}},{key:"functionToIGPUFunction",value:function functionToIGPUFunction(source){var settings=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};if(typeof source!=='string'&&typeof source!=='function')throw new Error('source not a string or function');var sourceString=typeof source==='string'?source:source.toString();var argumentTypes=[];if(Array.isArray(settings.argumentTypes)){argumentTypes=settings.argumentTypes;}else if(_typeof(settings.argumentTypes)==='object'){argumentTypes=utils.getArgumentNamesFromString(sourceString).map(function(name){return settings.argumentTypes[name];})||[];}else{argumentTypes=settings.argumentTypes||[];}return{name:utils.getFunctionNameFromString(sourceString)||null,source:sourceString,argumentTypes:argumentTypes,returnType:settings.returnType||null};}},{key:"onActivate",value:function onActivate(previousKernel){}}],[{key:"isSupported",get:function get(){throw new Error("\"isSupported\" not implemented on ".concat(this.name));}},{key:"isContextMatch",value:function isContextMatch(context){throw new Error("\"isContextMatch\" not implemented on ".concat(this.name));}},{key:"getFeatures",value:function getFeatures(){throw new Error("\"getFeatures\" not implemented on ".concat(this.name));}},{key:"destroyContext",value:function destroyContext(context){throw new Error("\"destroyContext\" called on ".concat(this.name));}},{key:"nativeFunctionArguments",value:function nativeFunctionArguments(){throw new Error("\"nativeFunctionArguments\" called on ".concat(this.name));}},{key:"nativeFunctionReturnType",value:function nativeFunctionReturnType(){throw new Error("\"nativeFunctionReturnType\" called on ".concat(this.name));}},{key:"combineKernels",value:function combineKernels(){throw new Error("\"combineKernels\" called on ".concat(this.name));}},{key:"getArgumentTypes",value:function getArgumentTypes(kernel,args){var argumentTypes=new Array(args.length);for(var i=0;i<args.length;i++){var arg=args[i];var type=kernel.argumentTypes[i];if(arg.type){argumentTypes[i]=arg.type;}else{switch(type){case'Number':case'Integer':case'Float':case'ArrayTexture(1)':argumentTypes[i]=utils.getVariableType(arg);break;default:argumentTypes[i]=type;}}}return argumentTypes;}},{key:"getSignature",value:function getSignature(kernel,argumentTypes){throw new Error("\"getSignature\" not implemented on ".concat(this.name));}}]);return Kernel;}();function splitArgumentTypes(argumentTypesObject){var argumentNames=Object.keys(argumentTypesObject);var argumentTypes=[];for(var i=0;i<argumentNames.length;i++){var argumentName=argumentNames[i];argumentTypes.push(argumentTypesObject[argumentName]);}return{argumentTypes:argumentTypes,argumentNames:argumentNames};}module.exports={Kernel:Kernel};},{"../input":110,"../utils":114}],37:[function(require,module,exports){var fragmentShader="__HEADER__;\n      __FLOAT_TACTIC_DECLARATION__;\n      __INT_TACTIC_DECLARATION__;\n      __SAMPLER_2D_TACTIC_DECLARATION__;\n      \n      const int LOOP_MAX = __LOOP_MAX__;\n      \n      __PLUGINS__;\n      __CONSTANTS__;\n      \n      varying vec2 vTexCoord;\n      \n      float acosh(float x) {\n        return log(x + sqrt(x * x - 1.0));\n      }\n      \n      float sinh(float x) {\n        return (pow(".concat(Math.E,", x) - pow(").concat(Math.E,", -x)) / 2.0;\n      }\n      \n      float asinh(float x) {\n        return log(x + sqrt(x * x + 1.0));\n      }\n      \n      float atan2(float v1, float v2) {\n        if (v1 == 0.0 || v2 == 0.0) return 0.0;\n        return atan(v1 / v2);\n      }\n      \n      float atanh(float x) {\n        x = (x + 1.0) / (x - 1.0);\n        if (x < 0.0) {\n          return 0.5 * log(-x);\n        }\n        return 0.5 * log(x);\n      }\n      \n      float cbrt(float x) {\n        if (x >= 0.0) {\n          return pow(x, 1.0 / 3.0);\n        } else {\n          return -pow(x, 1.0 / 3.0);\n        }\n      }\n      \n      float cosh(float x) {\n        return (pow(").concat(Math.E,", x) + pow(").concat(Math.E,", -x)) / 2.0; \n      }\n      \n      float expm1(float x) {\n        return pow(").concat(Math.E,", x) - 1.0; \n      }\n      \n      float fround(highp float x) {\n        return x;\n      }\n      \n      float imul(float v1, float v2) {\n        return float(int(v1) * int(v2));\n      }\n      \n      float log10(float x) {\n        return log2(x) * (1.0 / log2(10.0));\n      }\n      \n      float log1p(float x) {\n        return log(1.0 + x);\n      }\n      \n      float _pow(float v1, float v2) {\n        if (v2 == 0.0) return 1.0;\n        return pow(v1, v2);\n      }\n      \n      float tanh(float x) {\n        float e = exp(2.0 * x);\n        return (e - 1.0) / (e + 1.0);\n      }\n      \n      float trunc(float x) {\n        if (x >= 0.0) {\n          return floor(x); \n        } else {\n          return ceil(x);\n        }\n      }\n      \n      vec4 _round(vec4 x) {\n        return floor(x + 0.5);\n      }\n      \n      float _round(float x) {\n        return floor(x + 0.5);\n      }\n      \n      const int BIT_COUNT = 32;\n      int modi(int x, int y) {\n        return x - y * (x / y);\n      }\n      \n      int bitwiseOr(int a, int b) {\n        int result = 0;\n        int n = 1;\n        \n        for (int i = 0; i < BIT_COUNT; i++) {\n          if ((modi(a, 2) == 1) || (modi(b, 2) == 1)) {\n            result += n;\n          }\n          a = a / 2;\n          b = b / 2;\n          n = n * 2;\n          if(!(a > 0 || b > 0)) {\n            break;\n          }\n        }\n        return result;\n      }\n      int bitwiseXOR(int a, int b) {\n        int result = 0;\n        int n = 1;\n        \n        for (int i = 0; i < BIT_COUNT; i++) {\n          if ((modi(a, 2) == 1) != (modi(b, 2) == 1)) {\n            result += n;\n          }\n          a = a / 2;\n          b = b / 2;\n          n = n * 2;\n          if(!(a > 0 || b > 0)) {\n            break;\n          }\n        }\n        return result;\n      }\n      int bitwiseAnd(int a, int b) {\n        int result = 0;\n        int n = 1;\n        for (int i = 0; i < BIT_COUNT; i++) {\n          if ((modi(a, 2) == 1) && (modi(b, 2) == 1)) {\n            result += n;\n          }\n          a = a / 2;\n          b = b / 2;\n          n = n * 2;\n          if(!(a > 0 && b > 0)) {\n            break;\n          }\n        }\n        return result;\n      }\n      int bitwiseNot(int a) {\n        int result = 0;\n        int n = 1;\n        \n        for (int i = 0; i < BIT_COUNT; i++) {\n          if (modi(a, 2) == 0) {\n            result += n;    \n          }\n          a = a / 2;\n          n = n * 2;\n        }\n        return result;\n      }\n      int bitwiseZeroFillLeftShift(int n, int shift) {\n        int maxBytes = BIT_COUNT;\n        for (int i = 0; i < BIT_COUNT; i++) {\n          if (maxBytes >= n) {\n            break;\n          }\n          maxBytes *= 2;\n        }\n        for (int i = 0; i < BIT_COUNT; i++) {\n          if (i >= shift) {\n            break;\n          }\n          n *= 2;\n        }\n      \n        int result = 0;\n        int byteVal = 1;\n        for (int i = 0; i < BIT_COUNT; i++) {\n          if (i >= maxBytes) break;\n          if (modi(n, 2) > 0) { result += byteVal; }\n          n = int(n / 2);\n          byteVal *= 2;\n        }\n        return result;\n      }\n      \n      int bitwiseSignedRightShift(int num, int shifts) {\n        return int(floor(float(num) / pow(2.0, float(shifts))));\n      }\n      \n      int bitwiseZeroFillRightShift(int n, int shift) {\n        int maxBytes = BIT_COUNT;\n        for (int i = 0; i < BIT_COUNT; i++) {\n          if (maxBytes >= n) {\n            break;\n          }\n          maxBytes *= 2;\n        }\n        for (int i = 0; i < BIT_COUNT; i++) {\n          if (i >= shift) {\n            break;\n          }\n          n /= 2;\n        }\n        int result = 0;\n        int byteVal = 1;\n        for (int i = 0; i < BIT_COUNT; i++) {\n          if (i >= maxBytes) break;\n          if (modi(n, 2) > 0) { result += byteVal; }\n          n = int(n / 2);\n          byteVal *= 2;\n        }\n        return result;\n      }\n      \n      vec2 integerMod(vec2 x, float y) {\n        vec2 res = floor(mod(x, y));\n        return res * step(1.0 - floor(y), -res);\n      }\n      \n      vec3 integerMod(vec3 x, float y) {\n        vec3 res = floor(mod(x, y));\n        return res * step(1.0 - floor(y), -res);\n      }\n      \n      vec4 integerMod(vec4 x, vec4 y) {\n        vec4 res = floor(mod(x, y));\n        return res * step(1.0 - floor(y), -res);\n      }\n      \n      float integerMod(float x, float y) {\n        float res = floor(mod(x, y));\n        return res * (res > floor(y) - 1.0 ? 0.0 : 1.0);\n      }\n      \n      int integerMod(int x, int y) {\n        return x - (y * int(x / y));\n      }\n      \n      __DIVIDE_WITH_INTEGER_CHECK__;\n      \n      // Here be dragons!\n      // DO NOT OPTIMIZE THIS CODE\n      // YOU WILL BREAK SOMETHING ON SOMEBODY'S MACHINE\n      // LEAVE IT AS IT IS, LEST YOU WASTE YOUR OWN TIME\n      const vec2 MAGIC_VEC = vec2(1.0, -256.0);\n      const vec4 SCALE_FACTOR = vec4(1.0, 256.0, 65536.0, 0.0);\n      const vec4 SCALE_FACTOR_INV = vec4(1.0, 0.00390625, 0.0000152587890625, 0.0); // 1, 1/256, 1/65536\n      float decode32(vec4 texel) {\n        __DECODE32_ENDIANNESS__;\n        texel *= 255.0;\n        vec2 gte128;\n        gte128.x = texel.b >= 128.0 ? 1.0 : 0.0;\n        gte128.y = texel.a >= 128.0 ? 1.0 : 0.0;\n        float exponent = 2.0 * texel.a - 127.0 + dot(gte128, MAGIC_VEC);\n        float res = exp2(_round(exponent));\n        texel.b = texel.b - 128.0 * gte128.x;\n        res = dot(texel, SCALE_FACTOR) * exp2(_round(exponent-23.0)) + res;\n        res *= gte128.y * -2.0 + 1.0;\n        return res;\n      }\n      \n      float decode16(vec4 texel, int index) {\n        int channel = integerMod(index, 2);\n        if (channel == 0) return texel.r * 255.0 + texel.g * 65280.0;\n        if (channel == 1) return texel.b * 255.0 + texel.a * 65280.0;\n        return 0.0;\n      }\n      \n      float decode8(vec4 texel, int index) {\n        int channel = integerMod(index, 4);\n        if (channel == 0) return texel.r * 255.0;\n        if (channel == 1) return texel.g * 255.0;\n        if (channel == 2) return texel.b * 255.0;\n        if (channel == 3) return texel.a * 255.0;\n        return 0.0;\n      }\n      \n      vec4 legacyEncode32(float f) {\n        float F = abs(f);\n        float sign = f < 0.0 ? 1.0 : 0.0;\n        float exponent = floor(log2(F));\n        float mantissa = (exp2(-exponent) * F);\n        // exponent += floor(log2(mantissa));\n        vec4 texel = vec4(F * exp2(23.0-exponent)) * SCALE_FACTOR_INV;\n        texel.rg = integerMod(texel.rg, 256.0);\n        texel.b = integerMod(texel.b, 128.0);\n        texel.a = exponent*0.5 + 63.5;\n        texel.ba += vec2(integerMod(exponent+127.0, 2.0), sign) * 128.0;\n        texel = floor(texel);\n        texel *= 0.003921569; // 1/255\n        __ENCODE32_ENDIANNESS__;\n        return texel;\n      }\n      \n      // https://github.com/gpujs/gpu.js/wiki/Encoder-details\n      vec4 encode32(float value) {\n        if (value == 0.0) return vec4(0, 0, 0, 0);\n      \n        float exponent;\n        float mantissa;\n        vec4  result;\n        float sgn;\n      \n        sgn = step(0.0, -value);\n        value = abs(value);\n      \n        exponent = floor(log2(value));\n      \n        mantissa = value*pow(2.0, -exponent)-1.0;\n        exponent = exponent+127.0;\n        result   = vec4(0,0,0,0);\n      \n        result.a = floor(exponent/2.0);\n        exponent = exponent - result.a*2.0;\n        result.a = result.a + 128.0*sgn;\n      \n        result.b = floor(mantissa * 128.0);\n        mantissa = mantissa - result.b / 128.0;\n        result.b = result.b + exponent*128.0;\n      \n        result.g = floor(mantissa*32768.0);\n        mantissa = mantissa - result.g/32768.0;\n      \n        result.r = floor(mantissa*8388608.0);\n        return result/255.0;\n      }\n      // Dragons end here\n      \n      int index;\n      ivec3 threadId;\n      \n      ivec3 indexTo3D(int idx, ivec3 texDim) {\n        int z = int(idx / (texDim.x * texDim.y));\n        idx -= z * int(texDim.x * texDim.y);\n        int y = int(idx / texDim.x);\n        int x = int(integerMod(idx, texDim.x));\n        return ivec3(x, y, z);\n      }\n      \n      float get32(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n        int index = x + texDim.x * (y + texDim.y * z);\n        int w = texSize.x;\n        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n        vec4 texel = texture2D(tex, st / vec2(texSize));\n        return decode32(texel);\n      }\n      \n      float get16(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n        int index = x + texDim.x * (y + texDim.y * z);\n        int w = texSize.x * 2;\n        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n        vec4 texel = texture2D(tex, st / vec2(texSize.x * 2, texSize.y));\n        return decode16(texel, index);\n      }\n      \n      float get8(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n        int index = x + texDim.x * (y + texDim.y * z);\n        int w = texSize.x * 4;\n        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n        vec4 texel = texture2D(tex, st / vec2(texSize.x * 4, texSize.y));\n        return decode8(texel, index);\n      }\n      \n      float getMemoryOptimized32(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n        int index = x + texDim.x * (y + texDim.y * z);\n        int channel = integerMod(index, 4);\n        index = index / 4;\n        int w = texSize.x;\n        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n        vec4 texel = texture2D(tex, st / vec2(texSize));\n        if (channel == 0) return texel.r;\n        if (channel == 1) return texel.g;\n        if (channel == 2) return texel.b;\n        if (channel == 3) return texel.a;\n        return 0.0;\n      }\n      \n      vec4 getImage2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n        int index = x + texDim.x * (y + texDim.y * z);\n        int w = texSize.x;\n        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n        return texture2D(tex, st / vec2(texSize));\n      }\n      \n      float getFloatFromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n        vec4 result = getImage2D(tex, texSize, texDim, z, y, x);\n        return result[0];\n      }\n      \n      vec2 getVec2FromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n        vec4 result = getImage2D(tex, texSize, texDim, z, y, x);\n        return vec2(result[0], result[1]);\n      }\n      \n      vec2 getMemoryOptimizedVec2(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n        int index = x + (texDim.x * (y + (texDim.y * z)));\n        int channel = integerMod(index, 2);\n        index = index / 2;\n        int w = texSize.x;\n        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n        vec4 texel = texture2D(tex, st / vec2(texSize));\n        if (channel == 0) return vec2(texel.r, texel.g);\n        if (channel == 1) return vec2(texel.b, texel.a);\n        return vec2(0.0, 0.0);\n      }\n      \n      vec3 getVec3FromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n        vec4 result = getImage2D(tex, texSize, texDim, z, y, x);\n        return vec3(result[0], result[1], result[2]);\n      }\n      \n      vec3 getMemoryOptimizedVec3(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n        int fieldIndex = 3 * (x + texDim.x * (y + texDim.y * z));\n        int vectorIndex = fieldIndex / 4;\n        int vectorOffset = fieldIndex - vectorIndex * 4;\n        int readY = vectorIndex / texSize.x;\n        int readX = vectorIndex - readY * texSize.x;\n        vec4 tex1 = texture2D(tex, (vec2(readX, readY) + 0.5) / vec2(texSize));\n        \n        if (vectorOffset == 0) {\n          return tex1.xyz;\n        } else if (vectorOffset == 1) {\n          return tex1.yzw;\n        } else {\n          readX++;\n          if (readX >= texSize.x) {\n            readX = 0;\n            readY++;\n          }\n          vec4 tex2 = texture2D(tex, vec2(readX, readY) / vec2(texSize));\n          if (vectorOffset == 2) {\n            return vec3(tex1.z, tex1.w, tex2.x);\n          } else {\n            return vec3(tex1.w, tex2.x, tex2.y);\n          }\n        }\n      }\n      \n      vec4 getVec4FromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n        return getImage2D(tex, texSize, texDim, z, y, x);\n      }\n      \n      vec4 getMemoryOptimizedVec4(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n        int index = x + texDim.x * (y + texDim.y * z);\n        int channel = integerMod(index, 2);\n        int w = texSize.x;\n        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n        vec4 texel = texture2D(tex, st / vec2(texSize));\n        return vec4(texel.r, texel.g, texel.b, texel.a);\n      }\n      \n      vec4 actualColor;\n      void color(float r, float g, float b, float a) {\n        actualColor = vec4(r,g,b,a);\n      }\n      \n      void color(float r, float g, float b) {\n        color(r,g,b,1.0);\n      }\n      \n      void color(sampler2D image) {\n        actualColor = texture2D(image, vTexCoord);\n      }\n      \n      float modulo(float number, float divisor) {\n        if (number < 0.0) {\n          number = abs(number);\n          if (divisor < 0.0) {\n            divisor = abs(divisor);\n          }\n          return -mod(number, divisor);\n        }\n        if (divisor < 0.0) {\n          divisor = abs(divisor);\n        }\n        return mod(number, divisor);\n      }\n      \n      __INJECTED_NATIVE__;\n      __MAIN_CONSTANTS__;\n      __MAIN_ARGUMENTS__;\n      __KERNEL__;\n      \n      void main(void) {\n        index = int(vTexCoord.s * float(uTexSize.x)) + int(vTexCoord.t * float(uTexSize.y)) * uTexSize.x;\n        __MAIN_RESULT__;\n      }");module.exports={fragmentShader:fragmentShader};},{}],38:[function(require,module,exports){var _require77=require('../../utils'),utils=_require77.utils;var _require78=require('../function-node'),FunctionNode=_require78.FunctionNode;var WebGLFunctionNode=/*#__PURE__*/function(_FunctionNode2){_inherits(WebGLFunctionNode,_FunctionNode2);var _super25=_createSuper(WebGLFunctionNode);function WebGLFunctionNode(source,settings){var _this25;_classCallCheck(this,WebGLFunctionNode);_this25=_super25.call(this,source,settings);if(settings&&settings.hasOwnProperty('fixIntegerDivisionAccuracy')){_this25.fixIntegerDivisionAccuracy=settings.fixIntegerDivisionAccuracy;}return _this25;}_createClass(WebGLFunctionNode,[{key:"astConditionalExpression",value:function astConditionalExpression(ast,retArr){if(ast.type!=='ConditionalExpression'){throw this.astErrorOutput('Not a conditional expression',ast);}var consequentType=this.getType(ast.consequent);var alternateType=this.getType(ast.alternate);if(consequentType===null&&alternateType===null){retArr.push('if (');this.astGeneric(ast.test,retArr);retArr.push(') {');this.astGeneric(ast.consequent,retArr);retArr.push(';');retArr.push('} else {');this.astGeneric(ast.alternate,retArr);retArr.push(';');retArr.push('}');return retArr;}retArr.push('(');this.astGeneric(ast.test,retArr);retArr.push('?');this.astGeneric(ast.consequent,retArr);retArr.push(':');this.astGeneric(ast.alternate,retArr);retArr.push(')');return retArr;}},{key:"astFunction",value:function astFunction(ast,retArr){if(this.isRootKernel){retArr.push('void');}else{if(!this.returnType){var lastReturn=this.findLastReturn();if(lastReturn){this.returnType=this.getType(ast.body);if(this.returnType==='LiteralInteger'){this.returnType='Number';}}}var returnType=this.returnType;if(!returnType){retArr.push('void');}else{var type=typeMap[returnType];if(!type){throw new Error("unknown type ".concat(returnType));}retArr.push(type);}}retArr.push(' ');retArr.push(this.name);retArr.push('(');if(!this.isRootKernel){for(var i=0;i<this.argumentNames.length;++i){var argumentName=this.argumentNames[i];if(i>0){retArr.push(', ');}var argumentType=this.argumentTypes[this.argumentNames.indexOf(argumentName)];if(!argumentType){throw this.astErrorOutput("Unknown argument ".concat(argumentName," type"),ast);}if(argumentType==='LiteralInteger'){this.argumentTypes[i]=argumentType='Number';}var _type=typeMap[argumentType];if(!_type){throw this.astErrorOutput('Unexpected expression',ast);}var _name8=utils.sanitizeName(argumentName);if(_type==='sampler2D'||_type==='sampler2DArray'){retArr.push("".concat(_type," user_").concat(_name8,",ivec2 user_").concat(_name8,"Size,ivec3 user_").concat(_name8,"Dim"));}else{retArr.push("".concat(_type," user_").concat(_name8));}}}retArr.push(') {\n');for(var _i16=0;_i16<ast.body.body.length;++_i16){this.astGeneric(ast.body.body[_i16],retArr);retArr.push('\n');}retArr.push('}\n');return retArr;}},{key:"astReturnStatement",value:function astReturnStatement(ast,retArr){if(!ast.argument)throw this.astErrorOutput('Unexpected return statement',ast);this.pushState('skip-literal-correction');var type=this.getType(ast.argument);this.popState('skip-literal-correction');var result=[];if(!this.returnType){if(type==='LiteralInteger'||type==='Integer'){this.returnType='Number';}else{this.returnType=type;}}switch(this.returnType){case'LiteralInteger':case'Number':case'Float':switch(type){case'Integer':result.push('float(');this.astGeneric(ast.argument,result);result.push(')');break;case'LiteralInteger':this.castLiteralToFloat(ast.argument,result);if(this.getType(ast)==='Integer'){result.unshift('float(');result.push(')');}break;default:this.astGeneric(ast.argument,result);}break;case'Integer':switch(type){case'Float':case'Number':this.castValueToInteger(ast.argument,result);break;case'LiteralInteger':this.castLiteralToInteger(ast.argument,result);break;default:this.astGeneric(ast.argument,result);}break;case'Array(4)':case'Array(3)':case'Array(2)':case'Matrix(2)':case'Matrix(3)':case'Matrix(4)':case'Input':this.astGeneric(ast.argument,result);break;default:throw this.astErrorOutput("unhandled return type ".concat(this.returnType),ast);}if(this.isRootKernel){retArr.push("kernelResult = ".concat(result.join(''),";"));retArr.push('return;');}else if(this.isSubKernel){retArr.push("subKernelResult_".concat(this.name," = ").concat(result.join(''),";"));retArr.push("return subKernelResult_".concat(this.name,";"));}else{retArr.push("return ".concat(result.join(''),";"));}return retArr;}},{key:"astLiteral",value:function astLiteral(ast,retArr){if(isNaN(ast.value)){throw this.astErrorOutput('Non-numeric literal not supported : '+ast.value,ast);}var key=this.astKey(ast);if(Number.isInteger(ast.value)){if(this.isState('casting-to-integer')||this.isState('building-integer')){this.literalTypes[key]='Integer';retArr.push("".concat(ast.value));}else if(this.isState('casting-to-float')||this.isState('building-float')){this.literalTypes[key]='Number';retArr.push("".concat(ast.value,".0"));}else{this.literalTypes[key]='Number';retArr.push("".concat(ast.value,".0"));}}else if(this.isState('casting-to-integer')||this.isState('building-integer')){this.literalTypes[key]='Integer';retArr.push(Math.round(ast.value));}else{this.literalTypes[key]='Number';retArr.push("".concat(ast.value));}return retArr;}},{key:"astBinaryExpression",value:function astBinaryExpression(ast,retArr){if(this.checkAndUpconvertOperator(ast,retArr)){return retArr;}if(this.fixIntegerDivisionAccuracy&&ast.operator==='/'){retArr.push('divWithIntCheck(');this.pushState('building-float');switch(this.getType(ast.left)){case'Integer':this.castValueToFloat(ast.left,retArr);break;case'LiteralInteger':this.castLiteralToFloat(ast.left,retArr);break;default:this.astGeneric(ast.left,retArr);}retArr.push(', ');switch(this.getType(ast.right)){case'Integer':this.castValueToFloat(ast.right,retArr);break;case'LiteralInteger':this.castLiteralToFloat(ast.right,retArr);break;default:this.astGeneric(ast.right,retArr);}this.popState('building-float');retArr.push(')');return retArr;}retArr.push('(');var leftType=this.getType(ast.left)||'Number';var rightType=this.getType(ast.right)||'Number';if(!leftType||!rightType){throw this.astErrorOutput("Unhandled binary expression",ast);}var key=leftType+' & '+rightType;switch(key){case'Integer & Integer':this.pushState('building-integer');this.astGeneric(ast.left,retArr);retArr.push(operatorMap[ast.operator]||ast.operator);this.astGeneric(ast.right,retArr);this.popState('building-integer');break;case'Number & Float':case'Float & Number':case'Float & Float':case'Number & Number':this.pushState('building-float');this.astGeneric(ast.left,retArr);retArr.push(operatorMap[ast.operator]||ast.operator);this.astGeneric(ast.right,retArr);this.popState('building-float');break;case'LiteralInteger & LiteralInteger':if(this.isState('casting-to-integer')||this.isState('building-integer')){this.pushState('building-integer');this.astGeneric(ast.left,retArr);retArr.push(operatorMap[ast.operator]||ast.operator);this.astGeneric(ast.right,retArr);this.popState('building-integer');}else{this.pushState('building-float');this.castLiteralToFloat(ast.left,retArr);retArr.push(operatorMap[ast.operator]||ast.operator);this.castLiteralToFloat(ast.right,retArr);this.popState('building-float');}break;case'Integer & Float':case'Integer & Number':if(ast.operator==='>'||ast.operator==='<'&&ast.right.type==='Literal'){if(!Number.isInteger(ast.right.value)){this.pushState('building-float');this.castValueToFloat(ast.left,retArr);retArr.push(operatorMap[ast.operator]||ast.operator);this.astGeneric(ast.right,retArr);this.popState('building-float');break;}}this.pushState('building-integer');this.astGeneric(ast.left,retArr);retArr.push(operatorMap[ast.operator]||ast.operator);this.pushState('casting-to-integer');if(ast.right.type==='Literal'){var literalResult=[];this.astGeneric(ast.right,literalResult);var literalType=this.getType(ast.right);if(literalType==='Integer'){retArr.push(literalResult.join(''));}else{throw this.astErrorOutput("Unhandled binary expression with literal",ast);}}else{retArr.push('int(');this.astGeneric(ast.right,retArr);retArr.push(')');}this.popState('casting-to-integer');this.popState('building-integer');break;case'Integer & LiteralInteger':this.pushState('building-integer');this.astGeneric(ast.left,retArr);retArr.push(operatorMap[ast.operator]||ast.operator);this.castLiteralToInteger(ast.right,retArr);this.popState('building-integer');break;case'Number & Integer':this.pushState('building-float');this.astGeneric(ast.left,retArr);retArr.push(operatorMap[ast.operator]||ast.operator);this.castValueToFloat(ast.right,retArr);this.popState('building-float');break;case'Float & LiteralInteger':case'Number & LiteralInteger':this.pushState('building-float');this.astGeneric(ast.left,retArr);retArr.push(operatorMap[ast.operator]||ast.operator);this.castLiteralToFloat(ast.right,retArr);this.popState('building-float');break;case'LiteralInteger & Float':case'LiteralInteger & Number':if(this.isState('casting-to-integer')){this.pushState('building-integer');this.castLiteralToInteger(ast.left,retArr);retArr.push(operatorMap[ast.operator]||ast.operator);this.castValueToInteger(ast.right,retArr);this.popState('building-integer');}else{this.pushState('building-float');this.astGeneric(ast.left,retArr);retArr.push(operatorMap[ast.operator]||ast.operator);this.pushState('casting-to-float');this.astGeneric(ast.right,retArr);this.popState('casting-to-float');this.popState('building-float');}break;case'LiteralInteger & Integer':this.pushState('building-integer');this.castLiteralToInteger(ast.left,retArr);retArr.push(operatorMap[ast.operator]||ast.operator);this.astGeneric(ast.right,retArr);this.popState('building-integer');break;case'Boolean & Boolean':this.pushState('building-boolean');this.astGeneric(ast.left,retArr);retArr.push(operatorMap[ast.operator]||ast.operator);this.astGeneric(ast.right,retArr);this.popState('building-boolean');break;case'Float & Integer':this.pushState('building-float');this.astGeneric(ast.left,retArr);retArr.push(operatorMap[ast.operator]||ast.operator);this.castValueToFloat(ast.right,retArr);this.popState('building-float');break;default:throw this.astErrorOutput("Unhandled binary expression between ".concat(key),ast);}retArr.push(')');return retArr;}},{key:"checkAndUpconvertOperator",value:function checkAndUpconvertOperator(ast,retArr){var bitwiseResult=this.checkAndUpconvertBitwiseOperators(ast,retArr);if(bitwiseResult){return bitwiseResult;}var upconvertableOperators={'%':this.fixIntegerDivisionAccuracy?'integerCorrectionModulo':'modulo','**':'pow'};var foundOperator=upconvertableOperators[ast.operator];if(!foundOperator)return null;retArr.push(foundOperator);retArr.push('(');switch(this.getType(ast.left)){case'Integer':this.castValueToFloat(ast.left,retArr);break;case'LiteralInteger':this.castLiteralToFloat(ast.left,retArr);break;default:this.astGeneric(ast.left,retArr);}retArr.push(',');switch(this.getType(ast.right)){case'Integer':this.castValueToFloat(ast.right,retArr);break;case'LiteralInteger':this.castLiteralToFloat(ast.right,retArr);break;default:this.astGeneric(ast.right,retArr);}retArr.push(')');return retArr;}},{key:"checkAndUpconvertBitwiseOperators",value:function checkAndUpconvertBitwiseOperators(ast,retArr){var upconvertableOperators={'&':'bitwiseAnd','|':'bitwiseOr','^':'bitwiseXOR','<<':'bitwiseZeroFillLeftShift','>>':'bitwiseSignedRightShift','>>>':'bitwiseZeroFillRightShift'};var foundOperator=upconvertableOperators[ast.operator];if(!foundOperator)return null;retArr.push(foundOperator);retArr.push('(');var leftType=this.getType(ast.left);switch(leftType){case'Number':case'Float':this.castValueToInteger(ast.left,retArr);break;case'LiteralInteger':this.castLiteralToInteger(ast.left,retArr);break;default:this.astGeneric(ast.left,retArr);}retArr.push(',');var rightType=this.getType(ast.right);switch(rightType){case'Number':case'Float':this.castValueToInteger(ast.right,retArr);break;case'LiteralInteger':this.castLiteralToInteger(ast.right,retArr);break;default:this.astGeneric(ast.right,retArr);}retArr.push(')');return retArr;}},{key:"checkAndUpconvertBitwiseUnary",value:function checkAndUpconvertBitwiseUnary(ast,retArr){var upconvertableOperators={'~':'bitwiseNot'};var foundOperator=upconvertableOperators[ast.operator];if(!foundOperator)return null;retArr.push(foundOperator);retArr.push('(');switch(this.getType(ast.argument)){case'Number':case'Float':this.castValueToInteger(ast.argument,retArr);break;case'LiteralInteger':this.castLiteralToInteger(ast.argument,retArr);break;default:this.astGeneric(ast.argument,retArr);}retArr.push(')');return retArr;}},{key:"castLiteralToInteger",value:function castLiteralToInteger(ast,retArr){this.pushState('casting-to-integer');this.astGeneric(ast,retArr);this.popState('casting-to-integer');return retArr;}},{key:"castLiteralToFloat",value:function castLiteralToFloat(ast,retArr){this.pushState('casting-to-float');this.astGeneric(ast,retArr);this.popState('casting-to-float');return retArr;}},{key:"castValueToInteger",value:function castValueToInteger(ast,retArr){this.pushState('casting-to-integer');retArr.push('int(');this.astGeneric(ast,retArr);retArr.push(')');this.popState('casting-to-integer');return retArr;}},{key:"castValueToFloat",value:function castValueToFloat(ast,retArr){this.pushState('casting-to-float');retArr.push('float(');this.astGeneric(ast,retArr);retArr.push(')');this.popState('casting-to-float');return retArr;}},{key:"astIdentifierExpression",value:function astIdentifierExpression(idtNode,retArr){if(idtNode.type!=='Identifier'){throw this.astErrorOutput('IdentifierExpression - not an Identifier',idtNode);}var type=this.getType(idtNode);var name=utils.sanitizeName(idtNode.name);if(idtNode.name==='Infinity'){retArr.push('3.402823466e+38');}else if(type==='Boolean'){if(this.argumentNames.indexOf(name)>-1){retArr.push("bool(user_".concat(name,")"));}else{retArr.push("user_".concat(name));}}else{retArr.push("user_".concat(name));}return retArr;}},{key:"astForStatement",value:function astForStatement(forNode,retArr){if(forNode.type!=='ForStatement'){throw this.astErrorOutput('Invalid for statement',forNode);}var initArr=[];var testArr=[];var updateArr=[];var bodyArr=[];var isSafe=null;if(forNode.init){var declarations=forNode.init.declarations;if(declarations.length>1){isSafe=false;}this.astGeneric(forNode.init,initArr);for(var i=0;i<declarations.length;i++){if(declarations[i].init&&declarations[i].init.type!=='Literal'){isSafe=false;}}}else{isSafe=false;}if(forNode.test){this.astGeneric(forNode.test,testArr);}else{isSafe=false;}if(forNode.update){this.astGeneric(forNode.update,updateArr);}else{isSafe=false;}if(forNode.body){this.pushState('loop-body');this.astGeneric(forNode.body,bodyArr);this.popState('loop-body');}if(isSafe===null){isSafe=this.isSafe(forNode.init)&&this.isSafe(forNode.test);}if(isSafe){var initString=initArr.join('');var initNeedsSemiColon=initString[initString.length-1]!==';';retArr.push("for (".concat(initString).concat(initNeedsSemiColon?';':'').concat(testArr.join(''),";").concat(updateArr.join(''),"){\n"));retArr.push(bodyArr.join(''));retArr.push('}\n');}else{var iVariableName=this.getInternalVariableName('safeI');if(initArr.length>0){retArr.push(initArr.join(''),'\n');}retArr.push("for (int ".concat(iVariableName,"=0;").concat(iVariableName,"<LOOP_MAX;").concat(iVariableName,"++){\n"));if(testArr.length>0){retArr.push("if (!".concat(testArr.join(''),") break;\n"));}retArr.push(bodyArr.join(''));retArr.push("\n".concat(updateArr.join(''),";"));retArr.push('}\n');}return retArr;}},{key:"astWhileStatement",value:function astWhileStatement(whileNode,retArr){if(whileNode.type!=='WhileStatement'){throw this.astErrorOutput('Invalid while statement',whileNode);}var iVariableName=this.getInternalVariableName('safeI');retArr.push("for (int ".concat(iVariableName,"=0;").concat(iVariableName,"<LOOP_MAX;").concat(iVariableName,"++){\n"));retArr.push('if (!');this.astGeneric(whileNode.test,retArr);retArr.push(') break;\n');this.astGeneric(whileNode.body,retArr);retArr.push('}\n');return retArr;}},{key:"astDoWhileStatement",value:function astDoWhileStatement(doWhileNode,retArr){if(doWhileNode.type!=='DoWhileStatement'){throw this.astErrorOutput('Invalid while statement',doWhileNode);}var iVariableName=this.getInternalVariableName('safeI');retArr.push("for (int ".concat(iVariableName,"=0;").concat(iVariableName,"<LOOP_MAX;").concat(iVariableName,"++){\n"));this.astGeneric(doWhileNode.body,retArr);retArr.push('if (!');this.astGeneric(doWhileNode.test,retArr);retArr.push(') break;\n');retArr.push('}\n');return retArr;}},{key:"astAssignmentExpression",value:function astAssignmentExpression(assNode,retArr){if(assNode.operator==='%='){this.astGeneric(assNode.left,retArr);retArr.push('=');retArr.push('mod(');this.astGeneric(assNode.left,retArr);retArr.push(',');this.astGeneric(assNode.right,retArr);retArr.push(')');}else if(assNode.operator==='**='){this.astGeneric(assNode.left,retArr);retArr.push('=');retArr.push('pow(');this.astGeneric(assNode.left,retArr);retArr.push(',');this.astGeneric(assNode.right,retArr);retArr.push(')');}else{var leftType=this.getType(assNode.left);var rightType=this.getType(assNode.right);this.astGeneric(assNode.left,retArr);retArr.push(assNode.operator);if(leftType!=='Integer'&&rightType==='Integer'){retArr.push('float(');this.astGeneric(assNode.right,retArr);retArr.push(')');}else{this.astGeneric(assNode.right,retArr);}return retArr;}}},{key:"astBlockStatement",value:function astBlockStatement(bNode,retArr){if(this.isState('loop-body')){this.pushState('block-body');for(var i=0;i<bNode.body.length;i++){this.astGeneric(bNode.body[i],retArr);}this.popState('block-body');}else{retArr.push('{\n');for(var _i17=0;_i17<bNode.body.length;_i17++){this.astGeneric(bNode.body[_i17],retArr);}retArr.push('}\n');}return retArr;}},{key:"astVariableDeclaration",value:function astVariableDeclaration(varDecNode,retArr){var declarations=varDecNode.declarations;if(!declarations||!declarations[0]||!declarations[0].init){throw this.astErrorOutput('Unexpected expression',varDecNode);}var result=[];var lastType=null;var declarationSets=[];var declarationSet=[];for(var i=0;i<declarations.length;i++){var declaration=declarations[i];var init=declaration.init;var info=this.getDeclaration(declaration.id);var actualType=this.getType(declaration.init);var type=actualType;if(type==='LiteralInteger'){if(info.suggestedType==='Integer'){type='Integer';}else{type='Number';}}var markupType=typeMap[type];if(!markupType){throw this.astErrorOutput("Markup type ".concat(type," not handled"),varDecNode);}var declarationResult=[];if(actualType==='Integer'&&type==='Integer'){info.valueType='Number';if(i===0||lastType===null){declarationResult.push('float ');}else if(type!==lastType){throw new Error('Unhandled declaration');}lastType=type;declarationResult.push("user_".concat(utils.sanitizeName(declaration.id.name),"="));declarationResult.push('float(');this.astGeneric(init,declarationResult);declarationResult.push(')');}else{info.valueType=type;if(i===0||lastType===null){declarationResult.push("".concat(markupType," "));}else if(type!==lastType){declarationSets.push(declarationSet.join(','));declarationSet=[];declarationResult.push("".concat(markupType," "));}lastType=type;declarationResult.push("user_".concat(utils.sanitizeName(declaration.id.name),"="));if(actualType==='Number'&&type==='Integer'){if(init.left&&init.left.type==='Literal'){this.astGeneric(init,declarationResult);}else{declarationResult.push('int(');this.astGeneric(init,declarationResult);declarationResult.push(')');}}else if(actualType==='LiteralInteger'&&type==='Integer'){this.castLiteralToInteger(init,declarationResult);}else{this.astGeneric(init,declarationResult);}}declarationSet.push(declarationResult.join(''));}if(declarationSet.length>0){declarationSets.push(declarationSet.join(','));}result.push(declarationSets.join(';'));retArr.push(result.join(''));retArr.push(';');return retArr;}},{key:"astIfStatement",value:function astIfStatement(ifNode,retArr){retArr.push('if (');this.astGeneric(ifNode.test,retArr);retArr.push(')');if(ifNode.consequent.type==='BlockStatement'){this.astGeneric(ifNode.consequent,retArr);}else{retArr.push(' {\n');this.astGeneric(ifNode.consequent,retArr);retArr.push('\n}\n');}if(ifNode.alternate){retArr.push('else ');if(ifNode.alternate.type==='BlockStatement'||ifNode.alternate.type==='IfStatement'){this.astGeneric(ifNode.alternate,retArr);}else{retArr.push(' {\n');this.astGeneric(ifNode.alternate,retArr);retArr.push('\n}\n');}}return retArr;}},{key:"astSwitchStatement",value:function astSwitchStatement(ast,retArr){if(ast.type!=='SwitchStatement'){throw this.astErrorOutput('Invalid switch statement',ast);}var discriminant=ast.discriminant,cases=ast.cases;var type=this.getType(discriminant);var varName="switchDiscriminant".concat(this.astKey(ast,'_'));switch(type){case'Float':case'Number':retArr.push("float ".concat(varName," = "));this.astGeneric(discriminant,retArr);retArr.push(';\n');break;case'Integer':retArr.push("int ".concat(varName," = "));this.astGeneric(discriminant,retArr);retArr.push(';\n');break;}if(cases.length===1&&!cases[0].test){this.astGeneric(cases[0].consequent,retArr);return retArr;}var fallingThrough=false;var defaultResult=[];var movingDefaultToEnd=false;var pastFirstIf=false;for(var i=0;i<cases.length;i++){if(!cases[i].test){if(cases.length>i+1){movingDefaultToEnd=true;this.astGeneric(cases[i].consequent,defaultResult);continue;}else{retArr.push(' else {\n');}}else{if(i===0||!pastFirstIf){pastFirstIf=true;retArr.push("if (".concat(varName," == "));}else{if(fallingThrough){retArr.push("".concat(varName," == "));fallingThrough=false;}else{retArr.push(" else if (".concat(varName," == "));}}if(type==='Integer'){var testType=this.getType(cases[i].test);switch(testType){case'Number':case'Float':this.castValueToInteger(cases[i].test,retArr);break;case'LiteralInteger':this.castLiteralToInteger(cases[i].test,retArr);break;}}else if(type==='Float'){var _testType=this.getType(cases[i].test);switch(_testType){case'LiteralInteger':this.castLiteralToFloat(cases[i].test,retArr);break;case'Integer':this.castValueToFloat(cases[i].test,retArr);break;}}else{throw new Error('unhanlded');}if(!cases[i].consequent||cases[i].consequent.length===0){fallingThrough=true;retArr.push(' || ');continue;}retArr.push(") {\n");}this.astGeneric(cases[i].consequent,retArr);retArr.push('\n}');}if(movingDefaultToEnd){retArr.push(' else {');retArr.push(defaultResult.join(''));retArr.push('}');}return retArr;}},{key:"astThisExpression",value:function astThisExpression(tNode,retArr){retArr.push('this');return retArr;}},{key:"astMemberExpression",value:function astMemberExpression(mNode,retArr){var _this$getMemberExpres2=this.getMemberExpressionDetails(mNode),property=_this$getMemberExpres2.property,name=_this$getMemberExpres2.name,signature=_this$getMemberExpres2.signature,origin=_this$getMemberExpres2.origin,type=_this$getMemberExpres2.type,xProperty=_this$getMemberExpres2.xProperty,yProperty=_this$getMemberExpres2.yProperty,zProperty=_this$getMemberExpres2.zProperty;switch(signature){case'value.thread.value':case'this.thread.value':if(name!=='x'&&name!=='y'&&name!=='z'){throw this.astErrorOutput('Unexpected expression, expected `this.thread.x`, `this.thread.y`, or `this.thread.z`',mNode);}retArr.push("threadId.".concat(name));return retArr;case'this.output.value':if(this.dynamicOutput){switch(name){case'x':if(this.isState('casting-to-float')){retArr.push('float(uOutputDim.x)');}else{retArr.push('uOutputDim.x');}break;case'y':if(this.isState('casting-to-float')){retArr.push('float(uOutputDim.y)');}else{retArr.push('uOutputDim.y');}break;case'z':if(this.isState('casting-to-float')){retArr.push('float(uOutputDim.z)');}else{retArr.push('uOutputDim.z');}break;default:throw this.astErrorOutput('Unexpected expression',mNode);}}else{switch(name){case'x':if(this.isState('casting-to-integer')){retArr.push(this.output[0]);}else{retArr.push(this.output[0],'.0');}break;case'y':if(this.isState('casting-to-integer')){retArr.push(this.output[1]);}else{retArr.push(this.output[1],'.0');}break;case'z':if(this.isState('casting-to-integer')){retArr.push(this.output[2]);}else{retArr.push(this.output[2],'.0');}break;default:throw this.astErrorOutput('Unexpected expression',mNode);}}return retArr;case'value':throw this.astErrorOutput('Unexpected expression',mNode);case'value[]':case'value[][]':case'value[][][]':case'value[][][][]':case'value.value':if(origin==='Math'){retArr.push(Math[name]);return retArr;}var cleanName=utils.sanitizeName(name);switch(property){case'r':retArr.push("user_".concat(cleanName,".r"));return retArr;case'g':retArr.push("user_".concat(cleanName,".g"));return retArr;case'b':retArr.push("user_".concat(cleanName,".b"));return retArr;case'a':retArr.push("user_".concat(cleanName,".a"));return retArr;}break;case'this.constants.value':if(typeof xProperty==='undefined'){switch(type){case'Array(2)':case'Array(3)':case'Array(4)':retArr.push("constants_".concat(utils.sanitizeName(name)));return retArr;}}case'this.constants.value[]':case'this.constants.value[][]':case'this.constants.value[][][]':case'this.constants.value[][][][]':break;case'fn()[]':this.astCallExpression(mNode.object,retArr);retArr.push('[');retArr.push(this.memberExpressionPropertyMarkup(property));retArr.push(']');return retArr;case'fn()[][]':this.astCallExpression(mNode.object.object,retArr);retArr.push('[');retArr.push(this.memberExpressionPropertyMarkup(mNode.object.property));retArr.push(']');retArr.push('[');retArr.push(this.memberExpressionPropertyMarkup(mNode.property));retArr.push(']');return retArr;case'[][]':this.astArrayExpression(mNode.object,retArr);retArr.push('[');retArr.push(this.memberExpressionPropertyMarkup(property));retArr.push(']');return retArr;default:throw this.astErrorOutput('Unexpected expression',mNode);}if(mNode.computed===false){switch(type){case'Number':case'Integer':case'Float':case'Boolean':retArr.push("".concat(origin,"_").concat(utils.sanitizeName(name)));return retArr;}}var markupName="".concat(origin,"_").concat(utils.sanitizeName(name));switch(type){case'Array(2)':case'Array(3)':case'Array(4)':this.astGeneric(mNode.object,retArr);retArr.push('[');retArr.push(this.memberExpressionPropertyMarkup(xProperty));retArr.push(']');break;case'HTMLImageArray':retArr.push("getImage3D(".concat(markupName,", ").concat(markupName,"Size, ").concat(markupName,"Dim, "));this.memberExpressionXYZ(xProperty,yProperty,zProperty,retArr);retArr.push(')');break;case'ArrayTexture(1)':retArr.push("getFloatFromSampler2D(".concat(markupName,", ").concat(markupName,"Size, ").concat(markupName,"Dim, "));this.memberExpressionXYZ(xProperty,yProperty,zProperty,retArr);retArr.push(')');break;case'Array1D(2)':case'Array2D(2)':case'Array3D(2)':retArr.push("getMemoryOptimizedVec2(".concat(markupName,", ").concat(markupName,"Size, ").concat(markupName,"Dim, "));this.memberExpressionXYZ(xProperty,yProperty,zProperty,retArr);retArr.push(')');break;case'ArrayTexture(2)':retArr.push("getVec2FromSampler2D(".concat(markupName,", ").concat(markupName,"Size, ").concat(markupName,"Dim, "));this.memberExpressionXYZ(xProperty,yProperty,zProperty,retArr);retArr.push(')');break;case'Array1D(3)':case'Array2D(3)':case'Array3D(3)':retArr.push("getMemoryOptimizedVec3(".concat(markupName,", ").concat(markupName,"Size, ").concat(markupName,"Dim, "));this.memberExpressionXYZ(xProperty,yProperty,zProperty,retArr);retArr.push(')');break;case'ArrayTexture(3)':retArr.push("getVec3FromSampler2D(".concat(markupName,", ").concat(markupName,"Size, ").concat(markupName,"Dim, "));this.memberExpressionXYZ(xProperty,yProperty,zProperty,retArr);retArr.push(')');break;case'Array1D(4)':case'Array2D(4)':case'Array3D(4)':retArr.push("getMemoryOptimizedVec4(".concat(markupName,", ").concat(markupName,"Size, ").concat(markupName,"Dim, "));this.memberExpressionXYZ(xProperty,yProperty,zProperty,retArr);retArr.push(')');break;case'ArrayTexture(4)':case'HTMLCanvas':case'HTMLImage':case'HTMLVideo':retArr.push("getVec4FromSampler2D(".concat(markupName,", ").concat(markupName,"Size, ").concat(markupName,"Dim, "));this.memberExpressionXYZ(xProperty,yProperty,zProperty,retArr);retArr.push(')');break;case'NumberTexture':case'Array':case'Array2D':case'Array3D':case'Array4D':case'Input':case'Number':case'Float':case'Integer':if(this.precision==='single'){retArr.push("getMemoryOptimized32(".concat(markupName,", ").concat(markupName,"Size, ").concat(markupName,"Dim, "));this.memberExpressionXYZ(xProperty,yProperty,zProperty,retArr);retArr.push(')');}else{var bitRatio=origin==='user'?this.lookupFunctionArgumentBitRatio(this.name,name):this.constantBitRatios[name];switch(bitRatio){case 1:retArr.push("get8(".concat(markupName,", ").concat(markupName,"Size, ").concat(markupName,"Dim, "));break;case 2:retArr.push("get16(".concat(markupName,", ").concat(markupName,"Size, ").concat(markupName,"Dim, "));break;case 4:case 0:retArr.push("get32(".concat(markupName,", ").concat(markupName,"Size, ").concat(markupName,"Dim, "));break;default:throw new Error("unhandled bit ratio of ".concat(bitRatio));}this.memberExpressionXYZ(xProperty,yProperty,zProperty,retArr);retArr.push(')');}break;case'MemoryOptimizedNumberTexture':retArr.push("getMemoryOptimized32(".concat(markupName,", ").concat(markupName,"Size, ").concat(markupName,"Dim, "));this.memberExpressionXYZ(xProperty,yProperty,zProperty,retArr);retArr.push(')');break;case'Matrix(2)':case'Matrix(3)':case'Matrix(4)':retArr.push("".concat(markupName,"[").concat(this.memberExpressionPropertyMarkup(yProperty),"]"));if(yProperty){retArr.push("[".concat(this.memberExpressionPropertyMarkup(xProperty),"]"));}break;default:throw new Error("unhandled member expression \"".concat(type,"\""));}return retArr;}},{key:"astCallExpression",value:function astCallExpression(ast,retArr){if(!ast.callee){throw this.astErrorOutput('Unknown CallExpression',ast);}var functionName=null;var isMathFunction=this.isAstMathFunction(ast);if(isMathFunction||ast.callee.object&&ast.callee.object.type==='ThisExpression'){functionName=ast.callee.property.name;}else if(ast.callee.type==='SequenceExpression'&&ast.callee.expressions[0].type==='Literal'&&!isNaN(ast.callee.expressions[0].raw)){functionName=ast.callee.expressions[1].property.name;}else{functionName=ast.callee.name;}if(!functionName){throw this.astErrorOutput("Unhandled function, couldn't find name",ast);}switch(functionName){case'pow':functionName='_pow';break;case'round':functionName='_round';break;}if(this.calledFunctions.indexOf(functionName)<0){this.calledFunctions.push(functionName);}if(functionName==='random'&&this.plugins&&this.plugins.length>0){for(var i=0;i<this.plugins.length;i++){var plugin=this.plugins[i];if(plugin.functionMatch==='Math.random()'&&plugin.functionReplace){retArr.push(plugin.functionReplace);return retArr;}}}if(this.onFunctionCall){this.onFunctionCall(this.name,functionName,ast.arguments);}retArr.push(functionName);retArr.push('(');if(isMathFunction){for(var _i18=0;_i18<ast.arguments.length;++_i18){var argument=ast.arguments[_i18];var argumentType=this.getType(argument);if(_i18>0){retArr.push(', ');}switch(argumentType){case'Integer':this.castValueToFloat(argument,retArr);break;default:this.astGeneric(argument,retArr);break;}}}else{var targetTypes=this.lookupFunctionArgumentTypes(functionName)||[];for(var _i19=0;_i19<ast.arguments.length;++_i19){var _argument=ast.arguments[_i19];var targetType=targetTypes[_i19];if(_i19>0){retArr.push(', ');}var _argumentType=this.getType(_argument);if(!targetType){this.triggerImplyArgumentType(functionName,_i19,_argumentType,this);targetType=_argumentType;}switch(_argumentType){case'Boolean':this.astGeneric(_argument,retArr);continue;case'Number':case'Float':if(targetType==='Integer'){retArr.push('int(');this.astGeneric(_argument,retArr);retArr.push(')');continue;}else if(targetType==='Number'||targetType==='Float'){this.astGeneric(_argument,retArr);continue;}else if(targetType==='LiteralInteger'){this.castLiteralToFloat(_argument,retArr);continue;}break;case'Integer':if(targetType==='Number'||targetType==='Float'){retArr.push('float(');this.astGeneric(_argument,retArr);retArr.push(')');continue;}else if(targetType==='Integer'){this.astGeneric(_argument,retArr);continue;}break;case'LiteralInteger':if(targetType==='Integer'){this.castLiteralToInteger(_argument,retArr);continue;}else if(targetType==='Number'||targetType==='Float'){this.castLiteralToFloat(_argument,retArr);continue;}else if(targetType==='LiteralInteger'){this.astGeneric(_argument,retArr);continue;}break;case'Array(2)':case'Array(3)':case'Array(4)':if(targetType===_argumentType){if(_argument.type==='Identifier'){retArr.push("user_".concat(utils.sanitizeName(_argument.name)));}else if(_argument.type==='ArrayExpression'||_argument.type==='MemberExpression'||_argument.type==='CallExpression'){this.astGeneric(_argument,retArr);}else{throw this.astErrorOutput("Unhandled argument type ".concat(_argument.type),ast);}continue;}break;case'HTMLCanvas':case'HTMLImage':case'HTMLImageArray':case'HTMLVideo':case'ArrayTexture(1)':case'ArrayTexture(2)':case'ArrayTexture(3)':case'ArrayTexture(4)':case'Array':case'Input':if(targetType===_argumentType){if(_argument.type!=='Identifier')throw this.astErrorOutput("Unhandled argument type ".concat(_argument.type),ast);this.triggerImplyArgumentBitRatio(this.name,_argument.name,functionName,_i19);var _name9=utils.sanitizeName(_argument.name);retArr.push("user_".concat(_name9,",user_").concat(_name9,"Size,user_").concat(_name9,"Dim"));continue;}break;}throw this.astErrorOutput("Unhandled argument combination of ".concat(_argumentType," and ").concat(targetType," for argument named \"").concat(_argument.name,"\""),ast);}}retArr.push(')');return retArr;}},{key:"astArrayExpression",value:function astArrayExpression(arrNode,retArr){var returnType=this.getType(arrNode);var arrLen=arrNode.elements.length;switch(returnType){case'Matrix(2)':case'Matrix(3)':case'Matrix(4)':retArr.push("mat".concat(arrLen,"("));break;default:retArr.push("vec".concat(arrLen,"("));}for(var i=0;i<arrLen;++i){if(i>0){retArr.push(', ');}var subNode=arrNode.elements[i];this.astGeneric(subNode,retArr);}retArr.push(')');return retArr;}},{key:"memberExpressionXYZ",value:function memberExpressionXYZ(x,y,z,retArr){if(z){retArr.push(this.memberExpressionPropertyMarkup(z),', ');}else{retArr.push('0, ');}if(y){retArr.push(this.memberExpressionPropertyMarkup(y),', ');}else{retArr.push('0, ');}retArr.push(this.memberExpressionPropertyMarkup(x));return retArr;}},{key:"memberExpressionPropertyMarkup",value:function memberExpressionPropertyMarkup(property){if(!property){throw new Error('Property not set');}var type=this.getType(property);var result=[];switch(type){case'Number':case'Float':this.castValueToInteger(property,result);break;case'LiteralInteger':this.castLiteralToInteger(property,result);break;default:this.astGeneric(property,result);}return result.join('');}}]);return WebGLFunctionNode;}(FunctionNode);var typeMap={'Array':'sampler2D','Array(2)':'vec2','Array(3)':'vec3','Array(4)':'vec4','Matrix(2)':'mat2','Matrix(3)':'mat3','Matrix(4)':'mat4','Array2D':'sampler2D','Array3D':'sampler2D','Boolean':'bool','Float':'float','Input':'sampler2D','Integer':'int','Number':'float','LiteralInteger':'float','NumberTexture':'sampler2D','MemoryOptimizedNumberTexture':'sampler2D','ArrayTexture(1)':'sampler2D','ArrayTexture(2)':'sampler2D','ArrayTexture(3)':'sampler2D','ArrayTexture(4)':'sampler2D','HTMLVideo':'sampler2D','HTMLCanvas':'sampler2D','HTMLImage':'sampler2D','HTMLImageArray':'sampler2DArray'};var operatorMap={'===':'==','!==':'!='};module.exports={WebGLFunctionNode:WebGLFunctionNode};},{"../../utils":114,"../function-node":10}],39:[function(require,module,exports){var _require79=require('./kernel-value/boolean'),WebGLKernelValueBoolean=_require79.WebGLKernelValueBoolean;var _require80=require('./kernel-value/float'),WebGLKernelValueFloat=_require80.WebGLKernelValueFloat;var _require81=require('./kernel-value/integer'),WebGLKernelValueInteger=_require81.WebGLKernelValueInteger;var _require82=require('./kernel-value/html-image'),WebGLKernelValueHTMLImage=_require82.WebGLKernelValueHTMLImage;var _require83=require('./kernel-value/dynamic-html-image'),WebGLKernelValueDynamicHTMLImage=_require83.WebGLKernelValueDynamicHTMLImage;var _require84=require('./kernel-value/html-video'),WebGLKernelValueHTMLVideo=_require84.WebGLKernelValueHTMLVideo;var _require85=require('./kernel-value/dynamic-html-video'),WebGLKernelValueDynamicHTMLVideo=_require85.WebGLKernelValueDynamicHTMLVideo;var _require86=require('./kernel-value/single-input'),WebGLKernelValueSingleInput=_require86.WebGLKernelValueSingleInput;var _require87=require('./kernel-value/dynamic-single-input'),WebGLKernelValueDynamicSingleInput=_require87.WebGLKernelValueDynamicSingleInput;var _require88=require('./kernel-value/unsigned-input'),WebGLKernelValueUnsignedInput=_require88.WebGLKernelValueUnsignedInput;var _require89=require('./kernel-value/dynamic-unsigned-input'),WebGLKernelValueDynamicUnsignedInput=_require89.WebGLKernelValueDynamicUnsignedInput;var _require90=require('./kernel-value/memory-optimized-number-texture'),WebGLKernelValueMemoryOptimizedNumberTexture=_require90.WebGLKernelValueMemoryOptimizedNumberTexture;var _require91=require('./kernel-value/dynamic-memory-optimized-number-texture'),WebGLKernelValueDynamicMemoryOptimizedNumberTexture=_require91.WebGLKernelValueDynamicMemoryOptimizedNumberTexture;var _require92=require('./kernel-value/number-texture'),WebGLKernelValueNumberTexture=_require92.WebGLKernelValueNumberTexture;var _require93=require('./kernel-value/dynamic-number-texture'),WebGLKernelValueDynamicNumberTexture=_require93.WebGLKernelValueDynamicNumberTexture;var _require94=require('./kernel-value/single-array'),WebGLKernelValueSingleArray=_require94.WebGLKernelValueSingleArray;var _require95=require('./kernel-value/dynamic-single-array'),WebGLKernelValueDynamicSingleArray=_require95.WebGLKernelValueDynamicSingleArray;var _require96=require('./kernel-value/single-array1d-i'),WebGLKernelValueSingleArray1DI=_require96.WebGLKernelValueSingleArray1DI;var _require97=require('./kernel-value/dynamic-single-array1d-i'),WebGLKernelValueDynamicSingleArray1DI=_require97.WebGLKernelValueDynamicSingleArray1DI;var _require98=require('./kernel-value/single-array2d-i'),WebGLKernelValueSingleArray2DI=_require98.WebGLKernelValueSingleArray2DI;var _require99=require('./kernel-value/dynamic-single-array2d-i'),WebGLKernelValueDynamicSingleArray2DI=_require99.WebGLKernelValueDynamicSingleArray2DI;var _require100=require('./kernel-value/single-array3d-i'),WebGLKernelValueSingleArray3DI=_require100.WebGLKernelValueSingleArray3DI;var _require101=require('./kernel-value/dynamic-single-array3d-i'),WebGLKernelValueDynamicSingleArray3DI=_require101.WebGLKernelValueDynamicSingleArray3DI;var _require102=require('./kernel-value/single-array2'),WebGLKernelValueSingleArray2=_require102.WebGLKernelValueSingleArray2;var _require103=require('./kernel-value/single-array3'),WebGLKernelValueSingleArray3=_require103.WebGLKernelValueSingleArray3;var _require104=require('./kernel-value/single-array4'),WebGLKernelValueSingleArray4=_require104.WebGLKernelValueSingleArray4;var _require105=require('./kernel-value/unsigned-array'),WebGLKernelValueUnsignedArray=_require105.WebGLKernelValueUnsignedArray;var _require106=require('./kernel-value/dynamic-unsigned-array'),WebGLKernelValueDynamicUnsignedArray=_require106.WebGLKernelValueDynamicUnsignedArray;var kernelValueMaps={unsigned:{dynamic:{'Boolean':WebGLKernelValueBoolean,'Integer':WebGLKernelValueInteger,'Float':WebGLKernelValueFloat,'Array':WebGLKernelValueDynamicUnsignedArray,'Array(2)':false,'Array(3)':false,'Array(4)':false,'Array1D(2)':false,'Array1D(3)':false,'Array1D(4)':false,'Array2D(2)':false,'Array2D(3)':false,'Array2D(4)':false,'Array3D(2)':false,'Array3D(3)':false,'Array3D(4)':false,'Input':WebGLKernelValueDynamicUnsignedInput,'NumberTexture':WebGLKernelValueDynamicNumberTexture,'ArrayTexture(1)':WebGLKernelValueDynamicNumberTexture,'ArrayTexture(2)':WebGLKernelValueDynamicNumberTexture,'ArrayTexture(3)':WebGLKernelValueDynamicNumberTexture,'ArrayTexture(4)':WebGLKernelValueDynamicNumberTexture,'MemoryOptimizedNumberTexture':WebGLKernelValueDynamicMemoryOptimizedNumberTexture,'HTMLCanvas':WebGLKernelValueDynamicHTMLImage,'HTMLImage':WebGLKernelValueDynamicHTMLImage,'HTMLImageArray':false,'HTMLVideo':WebGLKernelValueDynamicHTMLVideo},"static":{'Boolean':WebGLKernelValueBoolean,'Float':WebGLKernelValueFloat,'Integer':WebGLKernelValueInteger,'Array':WebGLKernelValueUnsignedArray,'Array(2)':false,'Array(3)':false,'Array(4)':false,'Array1D(2)':false,'Array1D(3)':false,'Array1D(4)':false,'Array2D(2)':false,'Array2D(3)':false,'Array2D(4)':false,'Array3D(2)':false,'Array3D(3)':false,'Array3D(4)':false,'Input':WebGLKernelValueUnsignedInput,'NumberTexture':WebGLKernelValueNumberTexture,'ArrayTexture(1)':WebGLKernelValueNumberTexture,'ArrayTexture(2)':WebGLKernelValueNumberTexture,'ArrayTexture(3)':WebGLKernelValueNumberTexture,'ArrayTexture(4)':WebGLKernelValueNumberTexture,'MemoryOptimizedNumberTexture':WebGLKernelValueMemoryOptimizedNumberTexture,'HTMLCanvas':WebGLKernelValueHTMLImage,'HTMLImage':WebGLKernelValueHTMLImage,'HTMLImageArray':false,'HTMLVideo':WebGLKernelValueHTMLVideo}},single:{dynamic:{'Boolean':WebGLKernelValueBoolean,'Integer':WebGLKernelValueInteger,'Float':WebGLKernelValueFloat,'Array':WebGLKernelValueDynamicSingleArray,'Array(2)':WebGLKernelValueSingleArray2,'Array(3)':WebGLKernelValueSingleArray3,'Array(4)':WebGLKernelValueSingleArray4,'Array1D(2)':WebGLKernelValueDynamicSingleArray1DI,'Array1D(3)':WebGLKernelValueDynamicSingleArray1DI,'Array1D(4)':WebGLKernelValueDynamicSingleArray1DI,'Array2D(2)':WebGLKernelValueDynamicSingleArray2DI,'Array2D(3)':WebGLKernelValueDynamicSingleArray2DI,'Array2D(4)':WebGLKernelValueDynamicSingleArray2DI,'Array3D(2)':WebGLKernelValueDynamicSingleArray3DI,'Array3D(3)':WebGLKernelValueDynamicSingleArray3DI,'Array3D(4)':WebGLKernelValueDynamicSingleArray3DI,'Input':WebGLKernelValueDynamicSingleInput,'NumberTexture':WebGLKernelValueDynamicNumberTexture,'ArrayTexture(1)':WebGLKernelValueDynamicNumberTexture,'ArrayTexture(2)':WebGLKernelValueDynamicNumberTexture,'ArrayTexture(3)':WebGLKernelValueDynamicNumberTexture,'ArrayTexture(4)':WebGLKernelValueDynamicNumberTexture,'MemoryOptimizedNumberTexture':WebGLKernelValueDynamicMemoryOptimizedNumberTexture,'HTMLCanvas':WebGLKernelValueDynamicHTMLImage,'HTMLImage':WebGLKernelValueDynamicHTMLImage,'HTMLImageArray':false,'HTMLVideo':WebGLKernelValueDynamicHTMLVideo},"static":{'Boolean':WebGLKernelValueBoolean,'Float':WebGLKernelValueFloat,'Integer':WebGLKernelValueInteger,'Array':WebGLKernelValueSingleArray,'Array(2)':WebGLKernelValueSingleArray2,'Array(3)':WebGLKernelValueSingleArray3,'Array(4)':WebGLKernelValueSingleArray4,'Array1D(2)':WebGLKernelValueSingleArray1DI,'Array1D(3)':WebGLKernelValueSingleArray1DI,'Array1D(4)':WebGLKernelValueSingleArray1DI,'Array2D(2)':WebGLKernelValueSingleArray2DI,'Array2D(3)':WebGLKernelValueSingleArray2DI,'Array2D(4)':WebGLKernelValueSingleArray2DI,'Array3D(2)':WebGLKernelValueSingleArray3DI,'Array3D(3)':WebGLKernelValueSingleArray3DI,'Array3D(4)':WebGLKernelValueSingleArray3DI,'Input':WebGLKernelValueSingleInput,'NumberTexture':WebGLKernelValueNumberTexture,'ArrayTexture(1)':WebGLKernelValueNumberTexture,'ArrayTexture(2)':WebGLKernelValueNumberTexture,'ArrayTexture(3)':WebGLKernelValueNumberTexture,'ArrayTexture(4)':WebGLKernelValueNumberTexture,'MemoryOptimizedNumberTexture':WebGLKernelValueMemoryOptimizedNumberTexture,'HTMLCanvas':WebGLKernelValueHTMLImage,'HTMLImage':WebGLKernelValueHTMLImage,'HTMLImageArray':false,'HTMLVideo':WebGLKernelValueHTMLVideo}}};function lookupKernelValueType(type,dynamic,precision,value){if(!type){throw new Error('type missing');}if(!dynamic){throw new Error('dynamic missing');}if(!precision){throw new Error('precision missing');}if(value.type){type=value.type;}var types=kernelValueMaps[precision][dynamic];if(types[type]===false){return null;}else if(types[type]===undefined){throw new Error("Could not find a KernelValue for ".concat(type));}return types[type];}module.exports={lookupKernelValueType:lookupKernelValueType,kernelValueMaps:kernelValueMaps};},{"./kernel-value/boolean":41,"./kernel-value/dynamic-html-image":42,"./kernel-value/dynamic-html-video":43,"./kernel-value/dynamic-memory-optimized-number-texture":44,"./kernel-value/dynamic-number-texture":45,"./kernel-value/dynamic-single-array":46,"./kernel-value/dynamic-single-array1d-i":47,"./kernel-value/dynamic-single-array2d-i":48,"./kernel-value/dynamic-single-array3d-i":49,"./kernel-value/dynamic-single-input":50,"./kernel-value/dynamic-unsigned-array":51,"./kernel-value/dynamic-unsigned-input":52,"./kernel-value/float":53,"./kernel-value/html-image":54,"./kernel-value/html-video":55,"./kernel-value/integer":57,"./kernel-value/memory-optimized-number-texture":58,"./kernel-value/number-texture":59,"./kernel-value/single-array":60,"./kernel-value/single-array1d-i":61,"./kernel-value/single-array2":62,"./kernel-value/single-array2d-i":63,"./kernel-value/single-array3":64,"./kernel-value/single-array3d-i":65,"./kernel-value/single-array4":66,"./kernel-value/single-input":67,"./kernel-value/unsigned-array":68,"./kernel-value/unsigned-input":69}],40:[function(require,module,exports){var _require107=require('./index'),WebGLKernelValue=_require107.WebGLKernelValue;var _require108=require('../../../input'),Input=_require108.Input;var WebGLKernelArray=/*#__PURE__*/function(_WebGLKernelValue){_inherits(WebGLKernelArray,_WebGLKernelValue);var _super26=_createSuper(WebGLKernelArray);function WebGLKernelArray(){_classCallCheck(this,WebGLKernelArray);return _super26.apply(this,arguments);}_createClass(WebGLKernelArray,[{key:"checkSize",value:function checkSize(width,height){if(!this.kernel.validate)return;var maxTextureSize=this.kernel.constructor.features.maxTextureSize;if(width>maxTextureSize||height>maxTextureSize){if(width>height){throw new Error("Argument texture width of ".concat(width," larger than maximum size of ").concat(maxTextureSize," for your GPU"));}else if(width<height){throw new Error("Argument texture height of ".concat(height," larger than maximum size of ").concat(maxTextureSize," for your GPU"));}else{throw new Error("Argument texture height and width of ".concat(height," larger than maximum size of ").concat(maxTextureSize," for your GPU"));}}}},{key:"setup",value:function setup(){this.requestTexture();this.setupTexture();this.defineTexture();}},{key:"requestTexture",value:function requestTexture(){this.texture=this.onRequestTexture();}},{key:"defineTexture",value:function defineTexture(){var gl=this.context;gl.activeTexture(this.contextHandle);gl.bindTexture(gl.TEXTURE_2D,this.texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);}},{key:"setupTexture",value:function setupTexture(){this.contextHandle=this.onRequestContextHandle();this.index=this.onRequestIndex();this.dimensionsId=this.id+'Dim';this.sizeId=this.id+'Size';}},{key:"getBitRatio",value:function getBitRatio(value){if(Array.isArray(value[0])){return this.getBitRatio(value[0]);}else if(value.constructor===Input){return this.getBitRatio(value.value);}switch(value.constructor){case Uint8ClampedArray:case Uint8Array:case Int8Array:return 1;case Uint16Array:case Int16Array:return 2;case Float32Array:case Int32Array:default:return 4;}}},{key:"destroy",value:function destroy(){if(this.prevArg){this.prevArg["delete"]();}this.context.deleteTexture(this.texture);}}]);return WebGLKernelArray;}(WebGLKernelValue);module.exports={WebGLKernelArray:WebGLKernelArray};},{"../../../input":110,"./index":56}],41:[function(require,module,exports){var _require109=require('../../../utils'),utils=_require109.utils;var _require110=require('./index'),WebGLKernelValue=_require110.WebGLKernelValue;var WebGLKernelValueBoolean=/*#__PURE__*/function(_WebGLKernelValue2){_inherits(WebGLKernelValueBoolean,_WebGLKernelValue2);var _super27=_createSuper(WebGLKernelValueBoolean);function WebGLKernelValueBoolean(value,settings){var _this26;_classCallCheck(this,WebGLKernelValueBoolean);_this26=_super27.call(this,value,settings);_this26.uploadValue=value;return _this26;}_createClass(WebGLKernelValueBoolean,[{key:"getSource",value:function getSource(value){if(this.origin==='constants'){return"const bool ".concat(this.id," = ").concat(value,";\n");}return"uniform bool ".concat(this.id,";\n");}},{key:"getStringValueHandler",value:function getStringValueHandler(){return"const uploadValue_".concat(this.name," = ").concat(this.varName,";\n");}},{key:"updateValue",value:function updateValue(value){if(this.origin==='constants')return;this.kernel.setUniform1i(this.id,this.uploadValue=value);}}]);return WebGLKernelValueBoolean;}(WebGLKernelValue);module.exports={WebGLKernelValueBoolean:WebGLKernelValueBoolean};},{"../../../utils":114,"./index":56}],42:[function(require,module,exports){var _require111=require('../../../utils'),utils=_require111.utils;var _require112=require('./html-image'),WebGLKernelValueHTMLImage=_require112.WebGLKernelValueHTMLImage;var WebGLKernelValueDynamicHTMLImage=/*#__PURE__*/function(_WebGLKernelValueHTML){_inherits(WebGLKernelValueDynamicHTMLImage,_WebGLKernelValueHTML);var _super28=_createSuper(WebGLKernelValueDynamicHTMLImage);function WebGLKernelValueDynamicHTMLImage(){_classCallCheck(this,WebGLKernelValueDynamicHTMLImage);return _super28.apply(this,arguments);}_createClass(WebGLKernelValueDynamicHTMLImage,[{key:"getSource",value:function getSource(){return utils.linesToString(["uniform sampler2D ".concat(this.id),"uniform ivec2 ".concat(this.sizeId),"uniform ivec3 ".concat(this.dimensionsId)]);}},{key:"updateValue",value:function updateValue(value){var width=value.width,height=value.height;this.checkSize(width,height);this.dimensions=[width,height,1];this.textureSize=[width,height];this.kernel.setUniform3iv(this.dimensionsId,this.dimensions);this.kernel.setUniform2iv(this.sizeId,this.textureSize);_get(_getPrototypeOf(WebGLKernelValueDynamicHTMLImage.prototype),"updateValue",this).call(this,value);}}]);return WebGLKernelValueDynamicHTMLImage;}(WebGLKernelValueHTMLImage);module.exports={WebGLKernelValueDynamicHTMLImage:WebGLKernelValueDynamicHTMLImage};},{"../../../utils":114,"./html-image":54}],43:[function(require,module,exports){var _require113=require('./dynamic-html-image'),WebGLKernelValueDynamicHTMLImage=_require113.WebGLKernelValueDynamicHTMLImage;var WebGLKernelValueDynamicHTMLVideo=/*#__PURE__*/function(_WebGLKernelValueDyna){_inherits(WebGLKernelValueDynamicHTMLVideo,_WebGLKernelValueDyna);var _super29=_createSuper(WebGLKernelValueDynamicHTMLVideo);function WebGLKernelValueDynamicHTMLVideo(){_classCallCheck(this,WebGLKernelValueDynamicHTMLVideo);return _super29.apply(this,arguments);}return WebGLKernelValueDynamicHTMLVideo;}(WebGLKernelValueDynamicHTMLImage);module.exports={WebGLKernelValueDynamicHTMLVideo:WebGLKernelValueDynamicHTMLVideo};},{"./dynamic-html-image":42}],44:[function(require,module,exports){var _require114=require('../../../utils'),utils=_require114.utils;var _require115=require('./memory-optimized-number-texture'),WebGLKernelValueMemoryOptimizedNumberTexture=_require115.WebGLKernelValueMemoryOptimizedNumberTexture;var WebGLKernelValueDynamicMemoryOptimizedNumberTexture=/*#__PURE__*/function(_WebGLKernelValueMemo){_inherits(WebGLKernelValueDynamicMemoryOptimizedNumberTexture,_WebGLKernelValueMemo);var _super30=_createSuper(WebGLKernelValueDynamicMemoryOptimizedNumberTexture);function WebGLKernelValueDynamicMemoryOptimizedNumberTexture(){_classCallCheck(this,WebGLKernelValueDynamicMemoryOptimizedNumberTexture);return _super30.apply(this,arguments);}_createClass(WebGLKernelValueDynamicMemoryOptimizedNumberTexture,[{key:"getSource",value:function getSource(){return utils.linesToString(["uniform sampler2D ".concat(this.id),"uniform ivec2 ".concat(this.sizeId),"uniform ivec3 ".concat(this.dimensionsId)]);}},{key:"updateValue",value:function updateValue(inputTexture){this.dimensions=inputTexture.dimensions;this.checkSize(inputTexture.size[0],inputTexture.size[1]);this.textureSize=inputTexture.size;this.kernel.setUniform3iv(this.dimensionsId,this.dimensions);this.kernel.setUniform2iv(this.sizeId,this.textureSize);_get(_getPrototypeOf(WebGLKernelValueDynamicMemoryOptimizedNumberTexture.prototype),"updateValue",this).call(this,inputTexture);}}]);return WebGLKernelValueDynamicMemoryOptimizedNumberTexture;}(WebGLKernelValueMemoryOptimizedNumberTexture);module.exports={WebGLKernelValueDynamicMemoryOptimizedNumberTexture:WebGLKernelValueDynamicMemoryOptimizedNumberTexture};},{"../../../utils":114,"./memory-optimized-number-texture":58}],45:[function(require,module,exports){var _require116=require('../../../utils'),utils=_require116.utils;var _require117=require('./number-texture'),WebGLKernelValueNumberTexture=_require117.WebGLKernelValueNumberTexture;var WebGLKernelValueDynamicNumberTexture=/*#__PURE__*/function(_WebGLKernelValueNumb){_inherits(WebGLKernelValueDynamicNumberTexture,_WebGLKernelValueNumb);var _super31=_createSuper(WebGLKernelValueDynamicNumberTexture);function WebGLKernelValueDynamicNumberTexture(){_classCallCheck(this,WebGLKernelValueDynamicNumberTexture);return _super31.apply(this,arguments);}_createClass(WebGLKernelValueDynamicNumberTexture,[{key:"getSource",value:function getSource(){return utils.linesToString(["uniform sampler2D ".concat(this.id),"uniform ivec2 ".concat(this.sizeId),"uniform ivec3 ".concat(this.dimensionsId)]);}},{key:"updateValue",value:function updateValue(value){this.dimensions=value.dimensions;this.checkSize(value.size[0],value.size[1]);this.textureSize=value.size;this.kernel.setUniform3iv(this.dimensionsId,this.dimensions);this.kernel.setUniform2iv(this.sizeId,this.textureSize);_get(_getPrototypeOf(WebGLKernelValueDynamicNumberTexture.prototype),"updateValue",this).call(this,value);}}]);return WebGLKernelValueDynamicNumberTexture;}(WebGLKernelValueNumberTexture);module.exports={WebGLKernelValueDynamicNumberTexture:WebGLKernelValueDynamicNumberTexture};},{"../../../utils":114,"./number-texture":59}],46:[function(require,module,exports){var _require118=require('../../../utils'),utils=_require118.utils;var _require119=require('./single-array'),WebGLKernelValueSingleArray=_require119.WebGLKernelValueSingleArray;var WebGLKernelValueDynamicSingleArray=/*#__PURE__*/function(_WebGLKernelValueSing){_inherits(WebGLKernelValueDynamicSingleArray,_WebGLKernelValueSing);var _super32=_createSuper(WebGLKernelValueDynamicSingleArray);function WebGLKernelValueDynamicSingleArray(){_classCallCheck(this,WebGLKernelValueDynamicSingleArray);return _super32.apply(this,arguments);}_createClass(WebGLKernelValueDynamicSingleArray,[{key:"getSource",value:function getSource(){return utils.linesToString(["uniform sampler2D ".concat(this.id),"uniform ivec2 ".concat(this.sizeId),"uniform ivec3 ".concat(this.dimensionsId)]);}},{key:"updateValue",value:function updateValue(value){this.dimensions=utils.getDimensions(value,true);this.textureSize=utils.getMemoryOptimizedFloatTextureSize(this.dimensions,this.bitRatio);this.uploadArrayLength=this.textureSize[0]*this.textureSize[1]*this.bitRatio;this.checkSize(this.textureSize[0],this.textureSize[1]);this.uploadValue=new Float32Array(this.uploadArrayLength);this.kernel.setUniform3iv(this.dimensionsId,this.dimensions);this.kernel.setUniform2iv(this.sizeId,this.textureSize);_get(_getPrototypeOf(WebGLKernelValueDynamicSingleArray.prototype),"updateValue",this).call(this,value);}}]);return WebGLKernelValueDynamicSingleArray;}(WebGLKernelValueSingleArray);module.exports={WebGLKernelValueDynamicSingleArray:WebGLKernelValueDynamicSingleArray};},{"../../../utils":114,"./single-array":60}],47:[function(require,module,exports){var _require120=require('../../../utils'),utils=_require120.utils;var _require121=require('./single-array1d-i'),WebGLKernelValueSingleArray1DI=_require121.WebGLKernelValueSingleArray1DI;var WebGLKernelValueDynamicSingleArray1DI=/*#__PURE__*/function(_WebGLKernelValueSing2){_inherits(WebGLKernelValueDynamicSingleArray1DI,_WebGLKernelValueSing2);var _super33=_createSuper(WebGLKernelValueDynamicSingleArray1DI);function WebGLKernelValueDynamicSingleArray1DI(){_classCallCheck(this,WebGLKernelValueDynamicSingleArray1DI);return _super33.apply(this,arguments);}_createClass(WebGLKernelValueDynamicSingleArray1DI,[{key:"getSource",value:function getSource(){return utils.linesToString(["uniform sampler2D ".concat(this.id),"uniform ivec2 ".concat(this.sizeId),"uniform ivec3 ".concat(this.dimensionsId)]);}},{key:"updateValue",value:function updateValue(value){this.setShape(value);this.kernel.setUniform3iv(this.dimensionsId,this.dimensions);this.kernel.setUniform2iv(this.sizeId,this.textureSize);_get(_getPrototypeOf(WebGLKernelValueDynamicSingleArray1DI.prototype),"updateValue",this).call(this,value);}}]);return WebGLKernelValueDynamicSingleArray1DI;}(WebGLKernelValueSingleArray1DI);module.exports={WebGLKernelValueDynamicSingleArray1DI:WebGLKernelValueDynamicSingleArray1DI};},{"../../../utils":114,"./single-array1d-i":61}],48:[function(require,module,exports){var _require122=require('../../../utils'),utils=_require122.utils;var _require123=require('./single-array2d-i'),WebGLKernelValueSingleArray2DI=_require123.WebGLKernelValueSingleArray2DI;var WebGLKernelValueDynamicSingleArray2DI=/*#__PURE__*/function(_WebGLKernelValueSing3){_inherits(WebGLKernelValueDynamicSingleArray2DI,_WebGLKernelValueSing3);var _super34=_createSuper(WebGLKernelValueDynamicSingleArray2DI);function WebGLKernelValueDynamicSingleArray2DI(){_classCallCheck(this,WebGLKernelValueDynamicSingleArray2DI);return _super34.apply(this,arguments);}_createClass(WebGLKernelValueDynamicSingleArray2DI,[{key:"getSource",value:function getSource(){return utils.linesToString(["uniform sampler2D ".concat(this.id),"uniform ivec2 ".concat(this.sizeId),"uniform ivec3 ".concat(this.dimensionsId)]);}},{key:"updateValue",value:function updateValue(value){this.setShape(value);this.kernel.setUniform3iv(this.dimensionsId,this.dimensions);this.kernel.setUniform2iv(this.sizeId,this.textureSize);_get(_getPrototypeOf(WebGLKernelValueDynamicSingleArray2DI.prototype),"updateValue",this).call(this,value);}}]);return WebGLKernelValueDynamicSingleArray2DI;}(WebGLKernelValueSingleArray2DI);module.exports={WebGLKernelValueDynamicSingleArray2DI:WebGLKernelValueDynamicSingleArray2DI};},{"../../../utils":114,"./single-array2d-i":63}],49:[function(require,module,exports){var _require124=require('../../../utils'),utils=_require124.utils;var _require125=require('./single-array3d-i'),WebGLKernelValueSingleArray3DI=_require125.WebGLKernelValueSingleArray3DI;var WebGLKernelValueDynamicSingleArray3DI=/*#__PURE__*/function(_WebGLKernelValueSing4){_inherits(WebGLKernelValueDynamicSingleArray3DI,_WebGLKernelValueSing4);var _super35=_createSuper(WebGLKernelValueDynamicSingleArray3DI);function WebGLKernelValueDynamicSingleArray3DI(){_classCallCheck(this,WebGLKernelValueDynamicSingleArray3DI);return _super35.apply(this,arguments);}_createClass(WebGLKernelValueDynamicSingleArray3DI,[{key:"getSource",value:function getSource(){return utils.linesToString(["uniform sampler2D ".concat(this.id),"uniform ivec2 ".concat(this.sizeId),"uniform ivec3 ".concat(this.dimensionsId)]);}},{key:"updateValue",value:function updateValue(value){this.setShape(value);this.kernel.setUniform3iv(this.dimensionsId,this.dimensions);this.kernel.setUniform2iv(this.sizeId,this.textureSize);_get(_getPrototypeOf(WebGLKernelValueDynamicSingleArray3DI.prototype),"updateValue",this).call(this,value);}}]);return WebGLKernelValueDynamicSingleArray3DI;}(WebGLKernelValueSingleArray3DI);module.exports={WebGLKernelValueDynamicSingleArray3DI:WebGLKernelValueDynamicSingleArray3DI};},{"../../../utils":114,"./single-array3d-i":65}],50:[function(require,module,exports){var _require126=require('../../../utils'),utils=_require126.utils;var _require127=require('./single-input'),WebGLKernelValueSingleInput=_require127.WebGLKernelValueSingleInput;var WebGLKernelValueDynamicSingleInput=/*#__PURE__*/function(_WebGLKernelValueSing5){_inherits(WebGLKernelValueDynamicSingleInput,_WebGLKernelValueSing5);var _super36=_createSuper(WebGLKernelValueDynamicSingleInput);function WebGLKernelValueDynamicSingleInput(){_classCallCheck(this,WebGLKernelValueDynamicSingleInput);return _super36.apply(this,arguments);}_createClass(WebGLKernelValueDynamicSingleInput,[{key:"getSource",value:function getSource(){return utils.linesToString(["uniform sampler2D ".concat(this.id),"uniform ivec2 ".concat(this.sizeId),"uniform ivec3 ".concat(this.dimensionsId)]);}},{key:"updateValue",value:function updateValue(value){var _value$size=_slicedToArray(value.size,3),w=_value$size[0],h=_value$size[1],d=_value$size[2];this.dimensions=new Int32Array([w||1,h||1,d||1]);this.textureSize=utils.getMemoryOptimizedFloatTextureSize(this.dimensions,this.bitRatio);this.uploadArrayLength=this.textureSize[0]*this.textureSize[1]*this.bitRatio;this.checkSize(this.textureSize[0],this.textureSize[1]);this.uploadValue=new Float32Array(this.uploadArrayLength);this.kernel.setUniform3iv(this.dimensionsId,this.dimensions);this.kernel.setUniform2iv(this.sizeId,this.textureSize);_get(_getPrototypeOf(WebGLKernelValueDynamicSingleInput.prototype),"updateValue",this).call(this,value);}}]);return WebGLKernelValueDynamicSingleInput;}(WebGLKernelValueSingleInput);module.exports={WebGLKernelValueDynamicSingleInput:WebGLKernelValueDynamicSingleInput};},{"../../../utils":114,"./single-input":67}],51:[function(require,module,exports){var _require128=require('../../../utils'),utils=_require128.utils;var _require129=require('./unsigned-array'),WebGLKernelValueUnsignedArray=_require129.WebGLKernelValueUnsignedArray;var WebGLKernelValueDynamicUnsignedArray=/*#__PURE__*/function(_WebGLKernelValueUnsi){_inherits(WebGLKernelValueDynamicUnsignedArray,_WebGLKernelValueUnsi);var _super37=_createSuper(WebGLKernelValueDynamicUnsignedArray);function WebGLKernelValueDynamicUnsignedArray(){_classCallCheck(this,WebGLKernelValueDynamicUnsignedArray);return _super37.apply(this,arguments);}_createClass(WebGLKernelValueDynamicUnsignedArray,[{key:"getSource",value:function getSource(){return utils.linesToString(["uniform sampler2D ".concat(this.id),"uniform ivec2 ".concat(this.sizeId),"uniform ivec3 ".concat(this.dimensionsId)]);}},{key:"updateValue",value:function updateValue(value){this.dimensions=utils.getDimensions(value,true);this.textureSize=utils.getMemoryOptimizedPackedTextureSize(this.dimensions,this.bitRatio);this.uploadArrayLength=this.textureSize[0]*this.textureSize[1]*(4/this.bitRatio);this.checkSize(this.textureSize[0],this.textureSize[1]);var Type=this.getTransferArrayType(value);this.preUploadValue=new Type(this.uploadArrayLength);this.uploadValue=new Uint8Array(this.preUploadValue.buffer);this.kernel.setUniform3iv(this.dimensionsId,this.dimensions);this.kernel.setUniform2iv(this.sizeId,this.textureSize);_get(_getPrototypeOf(WebGLKernelValueDynamicUnsignedArray.prototype),"updateValue",this).call(this,value);}}]);return WebGLKernelValueDynamicUnsignedArray;}(WebGLKernelValueUnsignedArray);module.exports={WebGLKernelValueDynamicUnsignedArray:WebGLKernelValueDynamicUnsignedArray};},{"../../../utils":114,"./unsigned-array":68}],52:[function(require,module,exports){var _require130=require('../../../utils'),utils=_require130.utils;var _require131=require('./unsigned-input'),WebGLKernelValueUnsignedInput=_require131.WebGLKernelValueUnsignedInput;var WebGLKernelValueDynamicUnsignedInput=/*#__PURE__*/function(_WebGLKernelValueUnsi2){_inherits(WebGLKernelValueDynamicUnsignedInput,_WebGLKernelValueUnsi2);var _super38=_createSuper(WebGLKernelValueDynamicUnsignedInput);function WebGLKernelValueDynamicUnsignedInput(){_classCallCheck(this,WebGLKernelValueDynamicUnsignedInput);return _super38.apply(this,arguments);}_createClass(WebGLKernelValueDynamicUnsignedInput,[{key:"getSource",value:function getSource(){return utils.linesToString(["uniform sampler2D ".concat(this.id),"uniform ivec2 ".concat(this.sizeId),"uniform ivec3 ".concat(this.dimensionsId)]);}},{key:"updateValue",value:function updateValue(value){var _value$size2=_slicedToArray(value.size,3),w=_value$size2[0],h=_value$size2[1],d=_value$size2[2];this.dimensions=new Int32Array([w||1,h||1,d||1]);this.textureSize=utils.getMemoryOptimizedPackedTextureSize(this.dimensions,this.bitRatio);this.uploadArrayLength=this.textureSize[0]*this.textureSize[1]*(4/this.bitRatio);this.checkSize(this.textureSize[0],this.textureSize[1]);var Type=this.getTransferArrayType(value.value);this.preUploadValue=new Type(this.uploadArrayLength);this.uploadValue=new Uint8Array(this.preUploadValue.buffer);this.kernel.setUniform3iv(this.dimensionsId,this.dimensions);this.kernel.setUniform2iv(this.sizeId,this.textureSize);_get(_getPrototypeOf(WebGLKernelValueDynamicUnsignedInput.prototype),"updateValue",this).call(this,value);}}]);return WebGLKernelValueDynamicUnsignedInput;}(WebGLKernelValueUnsignedInput);module.exports={WebGLKernelValueDynamicUnsignedInput:WebGLKernelValueDynamicUnsignedInput};},{"../../../utils":114,"./unsigned-input":69}],53:[function(require,module,exports){var _require132=require('../../../utils'),utils=_require132.utils;var _require133=require('./index'),WebGLKernelValue=_require133.WebGLKernelValue;var WebGLKernelValueFloat=/*#__PURE__*/function(_WebGLKernelValue3){_inherits(WebGLKernelValueFloat,_WebGLKernelValue3);var _super39=_createSuper(WebGLKernelValueFloat);function WebGLKernelValueFloat(value,settings){var _this27;_classCallCheck(this,WebGLKernelValueFloat);_this27=_super39.call(this,value,settings);_this27.uploadValue=value;return _this27;}_createClass(WebGLKernelValueFloat,[{key:"getStringValueHandler",value:function getStringValueHandler(){return"const uploadValue_".concat(this.name," = ").concat(this.varName,";\n");}},{key:"getSource",value:function getSource(value){if(this.origin==='constants'){if(Number.isInteger(value)){return"const float ".concat(this.id," = ").concat(value,".0;\n");}return"const float ".concat(this.id," = ").concat(value,";\n");}return"uniform float ".concat(this.id,";\n");}},{key:"updateValue",value:function updateValue(value){if(this.origin==='constants')return;this.kernel.setUniform1f(this.id,this.uploadValue=value);}}]);return WebGLKernelValueFloat;}(WebGLKernelValue);module.exports={WebGLKernelValueFloat:WebGLKernelValueFloat};},{"../../../utils":114,"./index":56}],54:[function(require,module,exports){var _require134=require('../../../utils'),utils=_require134.utils;var _require135=require('./array'),WebGLKernelArray=_require135.WebGLKernelArray;var WebGLKernelValueHTMLImage=/*#__PURE__*/function(_WebGLKernelArray){_inherits(WebGLKernelValueHTMLImage,_WebGLKernelArray);var _super40=_createSuper(WebGLKernelValueHTMLImage);function WebGLKernelValueHTMLImage(value,settings){var _this28;_classCallCheck(this,WebGLKernelValueHTMLImage);_this28=_super40.call(this,value,settings);var width=value.width,height=value.height;_this28.checkSize(width,height);_this28.dimensions=[width,height,1];_this28.textureSize=[width,height];_this28.uploadValue=value;return _this28;}_createClass(WebGLKernelValueHTMLImage,[{key:"getStringValueHandler",value:function getStringValueHandler(){return"const uploadValue_".concat(this.name," = ").concat(this.varName,";\n");}},{key:"getSource",value:function getSource(){return utils.linesToString(["uniform sampler2D ".concat(this.id),"ivec2 ".concat(this.sizeId," = ivec2(").concat(this.textureSize[0],", ").concat(this.textureSize[1],")"),"ivec3 ".concat(this.dimensionsId," = ivec3(").concat(this.dimensions[0],", ").concat(this.dimensions[1],", ").concat(this.dimensions[2],")")]);}},{key:"updateValue",value:function updateValue(inputImage){if(inputImage.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(inputImage.constructor);return;}var gl=this.context;gl.activeTexture(this.contextHandle);gl.bindTexture(gl.TEXTURE_2D,this.texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,this.uploadValue=inputImage);this.kernel.setUniform1i(this.id,this.index);}}]);return WebGLKernelValueHTMLImage;}(WebGLKernelArray);module.exports={WebGLKernelValueHTMLImage:WebGLKernelValueHTMLImage};},{"../../../utils":114,"./array":40}],55:[function(require,module,exports){var _require136=require('./html-image'),WebGLKernelValueHTMLImage=_require136.WebGLKernelValueHTMLImage;var WebGLKernelValueHTMLVideo=/*#__PURE__*/function(_WebGLKernelValueHTML2){_inherits(WebGLKernelValueHTMLVideo,_WebGLKernelValueHTML2);var _super41=_createSuper(WebGLKernelValueHTMLVideo);function WebGLKernelValueHTMLVideo(){_classCallCheck(this,WebGLKernelValueHTMLVideo);return _super41.apply(this,arguments);}return WebGLKernelValueHTMLVideo;}(WebGLKernelValueHTMLImage);module.exports={WebGLKernelValueHTMLVideo:WebGLKernelValueHTMLVideo};},{"./html-image":54}],56:[function(require,module,exports){var _require137=require('../../../utils'),utils=_require137.utils;var _require138=require('../../kernel-value'),KernelValue=_require138.KernelValue;var WebGLKernelValue=/*#__PURE__*/function(_KernelValue){_inherits(WebGLKernelValue,_KernelValue);var _super42=_createSuper(WebGLKernelValue);function WebGLKernelValue(value,settings){var _this29;_classCallCheck(this,WebGLKernelValue);_this29=_super42.call(this,value,settings);_this29.dimensionsId=null;_this29.sizeId=null;_this29.initialValueConstructor=value.constructor;_this29.onRequestTexture=settings.onRequestTexture;_this29.onRequestIndex=settings.onRequestIndex;_this29.uploadValue=null;_this29.textureSize=null;_this29.bitRatio=null;_this29.prevArg=null;return _this29;}_createClass(WebGLKernelValue,[{key:"id",get:function get(){return"".concat(this.origin,"_").concat(utils.sanitizeName(this.name));}},{key:"setup",value:function setup(){}},{key:"getTransferArrayType",value:function getTransferArrayType(value){if(Array.isArray(value[0])){return this.getTransferArrayType(value[0]);}switch(value.constructor){case Array:case Int32Array:case Int16Array:case Int8Array:return Float32Array;case Uint8ClampedArray:case Uint8Array:case Uint16Array:case Uint32Array:case Float32Array:case Float64Array:return value.constructor;}console.warn('Unfamiliar constructor type.  Will go ahead and use, but likley this may result in a transfer of zeros');return value.constructor;}},{key:"getStringValueHandler",value:function getStringValueHandler(){throw new Error("\"getStringValueHandler\" not implemented on ".concat(this.constructor.name));}},{key:"getVariablePrecisionString",value:function getVariablePrecisionString(){return this.kernel.getVariablePrecisionString(this.textureSize||undefined,this.tactic||undefined);}},{key:"destroy",value:function destroy(){}}]);return WebGLKernelValue;}(KernelValue);module.exports={WebGLKernelValue:WebGLKernelValue};},{"../../../utils":114,"../../kernel-value":35}],57:[function(require,module,exports){var _require139=require('../../../utils'),utils=_require139.utils;var _require140=require('./index'),WebGLKernelValue=_require140.WebGLKernelValue;var WebGLKernelValueInteger=/*#__PURE__*/function(_WebGLKernelValue4){_inherits(WebGLKernelValueInteger,_WebGLKernelValue4);var _super43=_createSuper(WebGLKernelValueInteger);function WebGLKernelValueInteger(value,settings){var _this30;_classCallCheck(this,WebGLKernelValueInteger);_this30=_super43.call(this,value,settings);_this30.uploadValue=value;return _this30;}_createClass(WebGLKernelValueInteger,[{key:"getStringValueHandler",value:function getStringValueHandler(){return"const uploadValue_".concat(this.name," = ").concat(this.varName,";\n");}},{key:"getSource",value:function getSource(value){if(this.origin==='constants'){return"const int ".concat(this.id," = ").concat(parseInt(value),";\n");}return"uniform int ".concat(this.id,";\n");}},{key:"updateValue",value:function updateValue(value){if(this.origin==='constants')return;this.kernel.setUniform1i(this.id,this.uploadValue=value);}}]);return WebGLKernelValueInteger;}(WebGLKernelValue);module.exports={WebGLKernelValueInteger:WebGLKernelValueInteger};},{"../../../utils":114,"./index":56}],58:[function(require,module,exports){var _require141=require('../../../utils'),utils=_require141.utils;var _require142=require('./array'),WebGLKernelArray=_require142.WebGLKernelArray;var sameError="Source and destination textures are the same.  Use immutable = true and manually cleanup kernel output texture memory with texture.delete()";var WebGLKernelValueMemoryOptimizedNumberTexture=/*#__PURE__*/function(_WebGLKernelArray2){_inherits(WebGLKernelValueMemoryOptimizedNumberTexture,_WebGLKernelArray2);var _super44=_createSuper(WebGLKernelValueMemoryOptimizedNumberTexture);function WebGLKernelValueMemoryOptimizedNumberTexture(value,settings){var _this31;_classCallCheck(this,WebGLKernelValueMemoryOptimizedNumberTexture);_this31=_super44.call(this,value,settings);var _value$size3=_slicedToArray(value.size,2),width=_value$size3[0],height=_value$size3[1];_this31.checkSize(width,height);_this31.dimensions=value.dimensions;_this31.textureSize=value.size;_this31.uploadValue=value.texture;_this31.forceUploadEachRun=true;return _this31;}_createClass(WebGLKernelValueMemoryOptimizedNumberTexture,[{key:"setup",value:function setup(){this.setupTexture();}},{key:"getStringValueHandler",value:function getStringValueHandler(){return"const uploadValue_".concat(this.name," = ").concat(this.varName,".texture;\n");}},{key:"getSource",value:function getSource(){return utils.linesToString(["uniform sampler2D ".concat(this.id),"ivec2 ".concat(this.sizeId," = ivec2(").concat(this.textureSize[0],", ").concat(this.textureSize[1],")"),"ivec3 ".concat(this.dimensionsId," = ivec3(").concat(this.dimensions[0],", ").concat(this.dimensions[1],", ").concat(this.dimensions[2],")")]);}},{key:"updateValue",value:function updateValue(inputTexture){if(inputTexture.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(inputTexture.constructor);return;}if(this.checkContext&&inputTexture.context!==this.context){throw new Error("Value ".concat(this.name," (").concat(this.type,") must be from same context"));}var kernel=this.kernel,gl=this.context;if(kernel.pipeline){if(kernel.immutable){kernel.updateTextureArgumentRefs(this,inputTexture);}else{if(kernel.texture.texture===inputTexture.texture){throw new Error(sameError);}else if(kernel.mappedTextures){var mappedTextures=kernel.mappedTextures;for(var i=0;i<mappedTextures.length;i++){if(mappedTextures[i].texture===inputTexture.texture){throw new Error(sameError);}}}}}gl.activeTexture(this.contextHandle);gl.bindTexture(gl.TEXTURE_2D,this.uploadValue=inputTexture.texture);this.kernel.setUniform1i(this.id,this.index);}}]);return WebGLKernelValueMemoryOptimizedNumberTexture;}(WebGLKernelArray);module.exports={WebGLKernelValueMemoryOptimizedNumberTexture:WebGLKernelValueMemoryOptimizedNumberTexture,sameError:sameError};},{"../../../utils":114,"./array":40}],59:[function(require,module,exports){var _require143=require('../../../utils'),utils=_require143.utils;var _require144=require('./array'),WebGLKernelArray=_require144.WebGLKernelArray;var _require145=require('./memory-optimized-number-texture'),sameError=_require145.sameError;var WebGLKernelValueNumberTexture=/*#__PURE__*/function(_WebGLKernelArray3){_inherits(WebGLKernelValueNumberTexture,_WebGLKernelArray3);var _super45=_createSuper(WebGLKernelValueNumberTexture);function WebGLKernelValueNumberTexture(value,settings){var _this32;_classCallCheck(this,WebGLKernelValueNumberTexture);_this32=_super45.call(this,value,settings);var _value$size4=_slicedToArray(value.size,2),width=_value$size4[0],height=_value$size4[1];_this32.checkSize(width,height);var textureSize=value.size,dimensions=value.dimensions;_this32.bitRatio=_this32.getBitRatio(value);_this32.dimensions=dimensions;_this32.textureSize=textureSize;_this32.uploadValue=value.texture;_this32.forceUploadEachRun=true;return _this32;}_createClass(WebGLKernelValueNumberTexture,[{key:"setup",value:function setup(){this.setupTexture();}},{key:"getStringValueHandler",value:function getStringValueHandler(){return"const uploadValue_".concat(this.name," = ").concat(this.varName,".texture;\n");}},{key:"getSource",value:function getSource(){return utils.linesToString(["uniform sampler2D ".concat(this.id),"ivec2 ".concat(this.sizeId," = ivec2(").concat(this.textureSize[0],", ").concat(this.textureSize[1],")"),"ivec3 ".concat(this.dimensionsId," = ivec3(").concat(this.dimensions[0],", ").concat(this.dimensions[1],", ").concat(this.dimensions[2],")")]);}},{key:"updateValue",value:function updateValue(inputTexture){if(inputTexture.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(inputTexture.constructor);return;}if(this.checkContext&&inputTexture.context!==this.context){throw new Error("Value ".concat(this.name," (").concat(this.type,") must be from same context"));}var kernel=this.kernel,gl=this.context;if(kernel.pipeline){if(kernel.immutable){kernel.updateTextureArgumentRefs(this,inputTexture);}else{if(kernel.texture.texture===inputTexture.texture){throw new Error(sameError);}else if(kernel.mappedTextures){var mappedTextures=kernel.mappedTextures;for(var i=0;i<mappedTextures.length;i++){if(mappedTextures[i].texture===inputTexture.texture){throw new Error(sameError);}}}}}gl.activeTexture(this.contextHandle);gl.bindTexture(gl.TEXTURE_2D,this.uploadValue=inputTexture.texture);this.kernel.setUniform1i(this.id,this.index);}}]);return WebGLKernelValueNumberTexture;}(WebGLKernelArray);module.exports={WebGLKernelValueNumberTexture:WebGLKernelValueNumberTexture};},{"../../../utils":114,"./array":40,"./memory-optimized-number-texture":58}],60:[function(require,module,exports){var _require146=require('../../../utils'),utils=_require146.utils;var _require147=require('./array'),WebGLKernelArray=_require147.WebGLKernelArray;var WebGLKernelValueSingleArray=/*#__PURE__*/function(_WebGLKernelArray4){_inherits(WebGLKernelValueSingleArray,_WebGLKernelArray4);var _super46=_createSuper(WebGLKernelValueSingleArray);function WebGLKernelValueSingleArray(value,settings){var _this33;_classCallCheck(this,WebGLKernelValueSingleArray);_this33=_super46.call(this,value,settings);_this33.bitRatio=4;_this33.dimensions=utils.getDimensions(value,true);_this33.textureSize=utils.getMemoryOptimizedFloatTextureSize(_this33.dimensions,_this33.bitRatio);_this33.uploadArrayLength=_this33.textureSize[0]*_this33.textureSize[1]*_this33.bitRatio;_this33.checkSize(_this33.textureSize[0],_this33.textureSize[1]);_this33.uploadValue=new Float32Array(_this33.uploadArrayLength);return _this33;}_createClass(WebGLKernelValueSingleArray,[{key:"getStringValueHandler",value:function getStringValueHandler(){return utils.linesToString(["const uploadValue_".concat(this.name," = new Float32Array(").concat(this.uploadArrayLength,")"),"flattenTo(".concat(this.varName,", uploadValue_").concat(this.name,")")]);}},{key:"getSource",value:function getSource(){return utils.linesToString(["uniform sampler2D ".concat(this.id),"ivec2 ".concat(this.sizeId," = ivec2(").concat(this.textureSize[0],", ").concat(this.textureSize[1],")"),"ivec3 ".concat(this.dimensionsId," = ivec3(").concat(this.dimensions[0],", ").concat(this.dimensions[1],", ").concat(this.dimensions[2],")")]);}},{key:"updateValue",value:function updateValue(value){if(value.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(value.constructor);return;}var gl=this.context;utils.flattenTo(value,this.uploadValue);gl.activeTexture(this.contextHandle);gl.bindTexture(gl.TEXTURE_2D,this.texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,this.textureSize[0],this.textureSize[1],0,gl.RGBA,gl.FLOAT,this.uploadValue);this.kernel.setUniform1i(this.id,this.index);}}]);return WebGLKernelValueSingleArray;}(WebGLKernelArray);module.exports={WebGLKernelValueSingleArray:WebGLKernelValueSingleArray};},{"../../../utils":114,"./array":40}],61:[function(require,module,exports){var _require148=require('../../../utils'),utils=_require148.utils;var _require149=require('./array'),WebGLKernelArray=_require149.WebGLKernelArray;var WebGLKernelValueSingleArray1DI=/*#__PURE__*/function(_WebGLKernelArray5){_inherits(WebGLKernelValueSingleArray1DI,_WebGLKernelArray5);var _super47=_createSuper(WebGLKernelValueSingleArray1DI);function WebGLKernelValueSingleArray1DI(value,settings){var _this34;_classCallCheck(this,WebGLKernelValueSingleArray1DI);_this34=_super47.call(this,value,settings);_this34.bitRatio=4;_this34.setShape(value);return _this34;}_createClass(WebGLKernelValueSingleArray1DI,[{key:"setShape",value:function setShape(value){var valueDimensions=utils.getDimensions(value,true);this.textureSize=utils.getMemoryOptimizedFloatTextureSize(valueDimensions,this.bitRatio);this.dimensions=new Int32Array([valueDimensions[1],1,1]);this.uploadArrayLength=this.textureSize[0]*this.textureSize[1]*this.bitRatio;this.checkSize(this.textureSize[0],this.textureSize[1]);this.uploadValue=new Float32Array(this.uploadArrayLength);}},{key:"getStringValueHandler",value:function getStringValueHandler(){return utils.linesToString(["const uploadValue_".concat(this.name," = new Float32Array(").concat(this.uploadArrayLength,")"),"flattenTo(".concat(this.varName,", uploadValue_").concat(this.name,")")]);}},{key:"getSource",value:function getSource(){return utils.linesToString(["uniform sampler2D ".concat(this.id),"ivec2 ".concat(this.sizeId," = ivec2(").concat(this.textureSize[0],", ").concat(this.textureSize[1],")"),"ivec3 ".concat(this.dimensionsId," = ivec3(").concat(this.dimensions[0],", ").concat(this.dimensions[1],", ").concat(this.dimensions[2],")")]);}},{key:"updateValue",value:function updateValue(value){if(value.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(value.constructor);return;}var gl=this.context;utils.flatten2dArrayTo(value,this.uploadValue);gl.activeTexture(this.contextHandle);gl.bindTexture(gl.TEXTURE_2D,this.texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,this.textureSize[0],this.textureSize[1],0,gl.RGBA,gl.FLOAT,this.uploadValue);this.kernel.setUniform1i(this.id,this.index);}}]);return WebGLKernelValueSingleArray1DI;}(WebGLKernelArray);module.exports={WebGLKernelValueSingleArray1DI:WebGLKernelValueSingleArray1DI};},{"../../../utils":114,"./array":40}],62:[function(require,module,exports){var _require150=require('../../../utils'),utils=_require150.utils;var _require151=require('./index'),WebGLKernelValue=_require151.WebGLKernelValue;var WebGLKernelValueSingleArray2=/*#__PURE__*/function(_WebGLKernelValue5){_inherits(WebGLKernelValueSingleArray2,_WebGLKernelValue5);var _super48=_createSuper(WebGLKernelValueSingleArray2);function WebGLKernelValueSingleArray2(value,settings){var _this35;_classCallCheck(this,WebGLKernelValueSingleArray2);_this35=_super48.call(this,value,settings);_this35.uploadValue=value;return _this35;}_createClass(WebGLKernelValueSingleArray2,[{key:"getSource",value:function getSource(value){if(this.origin==='constants'){return"const vec2 ".concat(this.id," = vec2(").concat(value[0],",").concat(value[1],");\n");}return"uniform vec2 ".concat(this.id,";\n");}},{key:"getStringValueHandler",value:function getStringValueHandler(){if(this.origin==='constants')return'';return"const uploadValue_".concat(this.name," = ").concat(this.varName,";\n");}},{key:"updateValue",value:function updateValue(value){if(this.origin==='constants')return;this.kernel.setUniform2fv(this.id,this.uploadValue=value);}}]);return WebGLKernelValueSingleArray2;}(WebGLKernelValue);module.exports={WebGLKernelValueSingleArray2:WebGLKernelValueSingleArray2};},{"../../../utils":114,"./index":56}],63:[function(require,module,exports){var _require152=require('../../../utils'),utils=_require152.utils;var _require153=require('./array'),WebGLKernelArray=_require153.WebGLKernelArray;var WebGLKernelValueSingleArray2DI=/*#__PURE__*/function(_WebGLKernelArray6){_inherits(WebGLKernelValueSingleArray2DI,_WebGLKernelArray6);var _super49=_createSuper(WebGLKernelValueSingleArray2DI);function WebGLKernelValueSingleArray2DI(value,settings){var _this36;_classCallCheck(this,WebGLKernelValueSingleArray2DI);_this36=_super49.call(this,value,settings);_this36.bitRatio=4;_this36.setShape(value);return _this36;}_createClass(WebGLKernelValueSingleArray2DI,[{key:"setShape",value:function setShape(value){var valueDimensions=utils.getDimensions(value,true);this.textureSize=utils.getMemoryOptimizedFloatTextureSize(valueDimensions,this.bitRatio);this.dimensions=new Int32Array([valueDimensions[1],valueDimensions[2],1]);this.uploadArrayLength=this.textureSize[0]*this.textureSize[1]*this.bitRatio;this.checkSize(this.textureSize[0],this.textureSize[1]);this.uploadValue=new Float32Array(this.uploadArrayLength);}},{key:"getStringValueHandler",value:function getStringValueHandler(){return utils.linesToString(["const uploadValue_".concat(this.name," = new Float32Array(").concat(this.uploadArrayLength,")"),"flattenTo(".concat(this.varName,", uploadValue_").concat(this.name,")")]);}},{key:"getSource",value:function getSource(){return utils.linesToString(["uniform sampler2D ".concat(this.id),"ivec2 ".concat(this.sizeId," = ivec2(").concat(this.textureSize[0],", ").concat(this.textureSize[1],")"),"ivec3 ".concat(this.dimensionsId," = ivec3(").concat(this.dimensions[0],", ").concat(this.dimensions[1],", ").concat(this.dimensions[2],")")]);}},{key:"updateValue",value:function updateValue(value){if(value.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(value.constructor);return;}var gl=this.context;utils.flatten3dArrayTo(value,this.uploadValue);gl.activeTexture(this.contextHandle);gl.bindTexture(gl.TEXTURE_2D,this.texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,this.textureSize[0],this.textureSize[1],0,gl.RGBA,gl.FLOAT,this.uploadValue);this.kernel.setUniform1i(this.id,this.index);}}]);return WebGLKernelValueSingleArray2DI;}(WebGLKernelArray);module.exports={WebGLKernelValueSingleArray2DI:WebGLKernelValueSingleArray2DI};},{"../../../utils":114,"./array":40}],64:[function(require,module,exports){var _require154=require('../../../utils'),utils=_require154.utils;var _require155=require('./index'),WebGLKernelValue=_require155.WebGLKernelValue;var WebGLKernelValueSingleArray3=/*#__PURE__*/function(_WebGLKernelValue6){_inherits(WebGLKernelValueSingleArray3,_WebGLKernelValue6);var _super50=_createSuper(WebGLKernelValueSingleArray3);function WebGLKernelValueSingleArray3(value,settings){var _this37;_classCallCheck(this,WebGLKernelValueSingleArray3);_this37=_super50.call(this,value,settings);_this37.uploadValue=value;return _this37;}_createClass(WebGLKernelValueSingleArray3,[{key:"getSource",value:function getSource(value){if(this.origin==='constants'){return"const vec3 ".concat(this.id," = vec3(").concat(value[0],",").concat(value[1],",").concat(value[2],");\n");}return"uniform vec3 ".concat(this.id,";\n");}},{key:"getStringValueHandler",value:function getStringValueHandler(){if(this.origin==='constants')return'';return"const uploadValue_".concat(this.name," = ").concat(this.varName,";\n");}},{key:"updateValue",value:function updateValue(value){if(this.origin==='constants')return;this.kernel.setUniform3fv(this.id,this.uploadValue=value);}}]);return WebGLKernelValueSingleArray3;}(WebGLKernelValue);module.exports={WebGLKernelValueSingleArray3:WebGLKernelValueSingleArray3};},{"../../../utils":114,"./index":56}],65:[function(require,module,exports){var _require156=require('../../../utils'),utils=_require156.utils;var _require157=require('./array'),WebGLKernelArray=_require157.WebGLKernelArray;var WebGLKernelValueSingleArray3DI=/*#__PURE__*/function(_WebGLKernelArray7){_inherits(WebGLKernelValueSingleArray3DI,_WebGLKernelArray7);var _super51=_createSuper(WebGLKernelValueSingleArray3DI);function WebGLKernelValueSingleArray3DI(value,settings){var _this38;_classCallCheck(this,WebGLKernelValueSingleArray3DI);_this38=_super51.call(this,value,settings);_this38.bitRatio=4;_this38.setShape(value);return _this38;}_createClass(WebGLKernelValueSingleArray3DI,[{key:"setShape",value:function setShape(value){var valueDimensions=utils.getDimensions(value,true);this.textureSize=utils.getMemoryOptimizedFloatTextureSize(valueDimensions,this.bitRatio);this.dimensions=new Int32Array([valueDimensions[1],valueDimensions[2],valueDimensions[3]]);this.uploadArrayLength=this.textureSize[0]*this.textureSize[1]*this.bitRatio;this.checkSize(this.textureSize[0],this.textureSize[1]);this.uploadValue=new Float32Array(this.uploadArrayLength);}},{key:"getStringValueHandler",value:function getStringValueHandler(){return utils.linesToString(["const uploadValue_".concat(this.name," = new Float32Array(").concat(this.uploadArrayLength,")"),"flattenTo(".concat(this.varName,", uploadValue_").concat(this.name,")")]);}},{key:"getSource",value:function getSource(){return utils.linesToString(["uniform sampler2D ".concat(this.id),"ivec2 ".concat(this.sizeId," = ivec2(").concat(this.textureSize[0],", ").concat(this.textureSize[1],")"),"ivec3 ".concat(this.dimensionsId," = ivec3(").concat(this.dimensions[0],", ").concat(this.dimensions[1],", ").concat(this.dimensions[2],")")]);}},{key:"updateValue",value:function updateValue(value){if(value.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(value.constructor);return;}var gl=this.context;utils.flatten4dArrayTo(value,this.uploadValue);gl.activeTexture(this.contextHandle);gl.bindTexture(gl.TEXTURE_2D,this.texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,this.textureSize[0],this.textureSize[1],0,gl.RGBA,gl.FLOAT,this.uploadValue);this.kernel.setUniform1i(this.id,this.index);}}]);return WebGLKernelValueSingleArray3DI;}(WebGLKernelArray);module.exports={WebGLKernelValueSingleArray3DI:WebGLKernelValueSingleArray3DI};},{"../../../utils":114,"./array":40}],66:[function(require,module,exports){var _require158=require('../../../utils'),utils=_require158.utils;var _require159=require('./index'),WebGLKernelValue=_require159.WebGLKernelValue;var WebGLKernelValueSingleArray4=/*#__PURE__*/function(_WebGLKernelValue7){_inherits(WebGLKernelValueSingleArray4,_WebGLKernelValue7);var _super52=_createSuper(WebGLKernelValueSingleArray4);function WebGLKernelValueSingleArray4(value,settings){var _this39;_classCallCheck(this,WebGLKernelValueSingleArray4);_this39=_super52.call(this,value,settings);_this39.uploadValue=value;return _this39;}_createClass(WebGLKernelValueSingleArray4,[{key:"getSource",value:function getSource(value){if(this.origin==='constants'){return"const vec4 ".concat(this.id," = vec4(").concat(value[0],",").concat(value[1],",").concat(value[2],",").concat(value[3],");\n");}return"uniform vec4 ".concat(this.id,";\n");}},{key:"getStringValueHandler",value:function getStringValueHandler(){if(this.origin==='constants')return'';return"const uploadValue_".concat(this.name," = ").concat(this.varName,";\n");}},{key:"updateValue",value:function updateValue(value){if(this.origin==='constants')return;this.kernel.setUniform4fv(this.id,this.uploadValue=value);}}]);return WebGLKernelValueSingleArray4;}(WebGLKernelValue);module.exports={WebGLKernelValueSingleArray4:WebGLKernelValueSingleArray4};},{"../../../utils":114,"./index":56}],67:[function(require,module,exports){var _require160=require('../../../utils'),utils=_require160.utils;var _require161=require('./array'),WebGLKernelArray=_require161.WebGLKernelArray;var WebGLKernelValueSingleInput=/*#__PURE__*/function(_WebGLKernelArray8){_inherits(WebGLKernelValueSingleInput,_WebGLKernelArray8);var _super53=_createSuper(WebGLKernelValueSingleInput);function WebGLKernelValueSingleInput(value,settings){var _this40;_classCallCheck(this,WebGLKernelValueSingleInput);_this40=_super53.call(this,value,settings);_this40.bitRatio=4;var _value$size5=_slicedToArray(value.size,3),w=_value$size5[0],h=_value$size5[1],d=_value$size5[2];_this40.dimensions=new Int32Array([w||1,h||1,d||1]);_this40.textureSize=utils.getMemoryOptimizedFloatTextureSize(_this40.dimensions,_this40.bitRatio);_this40.uploadArrayLength=_this40.textureSize[0]*_this40.textureSize[1]*_this40.bitRatio;_this40.checkSize(_this40.textureSize[0],_this40.textureSize[1]);_this40.uploadValue=new Float32Array(_this40.uploadArrayLength);return _this40;}_createClass(WebGLKernelValueSingleInput,[{key:"getStringValueHandler",value:function getStringValueHandler(){return utils.linesToString(["const uploadValue_".concat(this.name," = new Float32Array(").concat(this.uploadArrayLength,")"),"flattenTo(".concat(this.varName,".value, uploadValue_").concat(this.name,")")]);}},{key:"getSource",value:function getSource(){return utils.linesToString(["uniform sampler2D ".concat(this.id),"ivec2 ".concat(this.sizeId," = ivec2(").concat(this.textureSize[0],", ").concat(this.textureSize[1],")"),"ivec3 ".concat(this.dimensionsId," = ivec3(").concat(this.dimensions[0],", ").concat(this.dimensions[1],", ").concat(this.dimensions[2],")")]);}},{key:"updateValue",value:function updateValue(input){if(input.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(input.constructor);return;}var gl=this.context;utils.flattenTo(input.value,this.uploadValue);gl.activeTexture(this.contextHandle);gl.bindTexture(gl.TEXTURE_2D,this.texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,this.textureSize[0],this.textureSize[1],0,gl.RGBA,gl.FLOAT,this.uploadValue);this.kernel.setUniform1i(this.id,this.index);}}]);return WebGLKernelValueSingleInput;}(WebGLKernelArray);module.exports={WebGLKernelValueSingleInput:WebGLKernelValueSingleInput};},{"../../../utils":114,"./array":40}],68:[function(require,module,exports){var _require162=require('../../../utils'),utils=_require162.utils;var _require163=require('./array'),WebGLKernelArray=_require163.WebGLKernelArray;var WebGLKernelValueUnsignedArray=/*#__PURE__*/function(_WebGLKernelArray9){_inherits(WebGLKernelValueUnsignedArray,_WebGLKernelArray9);var _super54=_createSuper(WebGLKernelValueUnsignedArray);function WebGLKernelValueUnsignedArray(value,settings){var _this41;_classCallCheck(this,WebGLKernelValueUnsignedArray);_this41=_super54.call(this,value,settings);_this41.bitRatio=_this41.getBitRatio(value);_this41.dimensions=utils.getDimensions(value,true);_this41.textureSize=utils.getMemoryOptimizedPackedTextureSize(_this41.dimensions,_this41.bitRatio);_this41.uploadArrayLength=_this41.textureSize[0]*_this41.textureSize[1]*(4/_this41.bitRatio);_this41.checkSize(_this41.textureSize[0],_this41.textureSize[1]);_this41.TranserArrayType=_this41.getTransferArrayType(value);_this41.preUploadValue=new _this41.TranserArrayType(_this41.uploadArrayLength);_this41.uploadValue=new Uint8Array(_this41.preUploadValue.buffer);return _this41;}_createClass(WebGLKernelValueUnsignedArray,[{key:"getStringValueHandler",value:function getStringValueHandler(){return utils.linesToString(["const preUploadValue_".concat(this.name," = new ").concat(this.TranserArrayType.name,"(").concat(this.uploadArrayLength,")"),"const uploadValue_".concat(this.name," = new Uint8Array(preUploadValue_").concat(this.name,".buffer)"),"flattenTo(".concat(this.varName,", preUploadValue_").concat(this.name,")")]);}},{key:"getSource",value:function getSource(){return utils.linesToString(["uniform sampler2D ".concat(this.id),"ivec2 ".concat(this.sizeId," = ivec2(").concat(this.textureSize[0],", ").concat(this.textureSize[1],")"),"ivec3 ".concat(this.dimensionsId," = ivec3(").concat(this.dimensions[0],", ").concat(this.dimensions[1],", ").concat(this.dimensions[2],")")]);}},{key:"updateValue",value:function updateValue(value){if(value.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(value.constructor);return;}var gl=this.context;utils.flattenTo(value,this.preUploadValue);gl.activeTexture(this.contextHandle);gl.bindTexture(gl.TEXTURE_2D,this.texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,this.textureSize[0],this.textureSize[1],0,gl.RGBA,gl.UNSIGNED_BYTE,this.uploadValue);this.kernel.setUniform1i(this.id,this.index);}}]);return WebGLKernelValueUnsignedArray;}(WebGLKernelArray);module.exports={WebGLKernelValueUnsignedArray:WebGLKernelValueUnsignedArray};},{"../../../utils":114,"./array":40}],69:[function(require,module,exports){var _require164=require('../../../utils'),utils=_require164.utils;var _require165=require('./array'),WebGLKernelArray=_require165.WebGLKernelArray;var WebGLKernelValueUnsignedInput=/*#__PURE__*/function(_WebGLKernelArray10){_inherits(WebGLKernelValueUnsignedInput,_WebGLKernelArray10);var _super55=_createSuper(WebGLKernelValueUnsignedInput);function WebGLKernelValueUnsignedInput(value,settings){var _this42;_classCallCheck(this,WebGLKernelValueUnsignedInput);_this42=_super55.call(this,value,settings);_this42.bitRatio=_this42.getBitRatio(value);var _value$size6=_slicedToArray(value.size,3),w=_value$size6[0],h=_value$size6[1],d=_value$size6[2];_this42.dimensions=new Int32Array([w||1,h||1,d||1]);_this42.textureSize=utils.getMemoryOptimizedPackedTextureSize(_this42.dimensions,_this42.bitRatio);_this42.uploadArrayLength=_this42.textureSize[0]*_this42.textureSize[1]*(4/_this42.bitRatio);_this42.checkSize(_this42.textureSize[0],_this42.textureSize[1]);_this42.TranserArrayType=_this42.getTransferArrayType(value.value);_this42.preUploadValue=new _this42.TranserArrayType(_this42.uploadArrayLength);_this42.uploadValue=new Uint8Array(_this42.preUploadValue.buffer);return _this42;}_createClass(WebGLKernelValueUnsignedInput,[{key:"getStringValueHandler",value:function getStringValueHandler(){return utils.linesToString(["const preUploadValue_".concat(this.name," = new ").concat(this.TranserArrayType.name,"(").concat(this.uploadArrayLength,")"),"const uploadValue_".concat(this.name," = new Uint8Array(preUploadValue_").concat(this.name,".buffer)"),"flattenTo(".concat(this.varName,".value, preUploadValue_").concat(this.name,")")]);}},{key:"getSource",value:function getSource(){return utils.linesToString(["uniform sampler2D ".concat(this.id),"ivec2 ".concat(this.sizeId," = ivec2(").concat(this.textureSize[0],", ").concat(this.textureSize[1],")"),"ivec3 ".concat(this.dimensionsId," = ivec3(").concat(this.dimensions[0],", ").concat(this.dimensions[1],", ").concat(this.dimensions[2],")")]);}},{key:"updateValue",value:function updateValue(input){if(input.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(value.constructor);return;}var gl=this.context;utils.flattenTo(input.value,this.preUploadValue);gl.activeTexture(this.contextHandle);gl.bindTexture(gl.TEXTURE_2D,this.texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,this.textureSize[0],this.textureSize[1],0,gl.RGBA,gl.UNSIGNED_BYTE,this.uploadValue);this.kernel.setUniform1i(this.id,this.index);}}]);return WebGLKernelValueUnsignedInput;}(WebGLKernelArray);module.exports={WebGLKernelValueUnsignedInput:WebGLKernelValueUnsignedInput};},{"../../../utils":114,"./array":40}],70:[function(require,module,exports){var _require166=require('../gl/kernel'),GLKernel=_require166.GLKernel;var _require167=require('../function-builder'),FunctionBuilder=_require167.FunctionBuilder;var _require168=require('./function-node'),WebGLFunctionNode=_require168.WebGLFunctionNode;var _require169=require('../../utils'),utils=_require169.utils;var mrud=require('../../plugins/math-random-uniformly-distributed');var _require170=require('./fragment-shader'),fragmentShader=_require170.fragmentShader;var _require171=require('./vertex-shader'),vertexShader=_require171.vertexShader;var _require172=require('../gl/kernel-string'),glKernelString=_require172.glKernelString;var _require173=require('./kernel-value-maps'),_lookupKernelValueType=_require173.lookupKernelValueType;var isSupported=null;var testCanvas=null;var testContext=null;var testExtensions=null;var features=null;var plugins=[mrud];var canvases=[];var maxTexSizes={};var WebGLKernel=/*#__PURE__*/function(_GLKernel){_inherits(WebGLKernel,_GLKernel);var _super56=_createSuper(WebGLKernel);function WebGLKernel(source,settings){var _this43;_classCallCheck(this,WebGLKernel);_this43=_super56.call(this,source,settings);_this43.program=null;_this43.pipeline=settings.pipeline;_this43.endianness=utils.systemEndianness();_this43.extensions={};_this43.argumentTextureCount=0;_this43.constantTextureCount=0;_this43.fragShader=null;_this43.vertShader=null;_this43.drawBuffersMap=null;_this43.maxTexSize=null;_this43.onRequestSwitchKernel=null;_this43.texture=null;_this43.mappedTextures=null;_this43.mergeSettings(source.settings||settings);_this43.threadDim=null;_this43.framebuffer=null;_this43.buffer=null;_this43.textureCache=[];_this43.programUniformLocationCache={};_this43.uniform1fCache={};_this43.uniform1iCache={};_this43.uniform2fCache={};_this43.uniform2fvCache={};_this43.uniform2ivCache={};_this43.uniform3fvCache={};_this43.uniform3ivCache={};_this43.uniform4fvCache={};_this43.uniform4ivCache={};return _this43;}_createClass(WebGLKernel,[{key:"initCanvas",value:function initCanvas(){if(typeof document!=='undefined'){var canvas=document.createElement('canvas');canvas.width=2;canvas.height=2;return canvas;}else if(typeof OffscreenCanvas!=='undefined'){return new OffscreenCanvas(0,0);}}},{key:"initContext",value:function initContext(){var settings={alpha:false,depth:false,antialias:false};return this.canvas.getContext('webgl',settings)||this.canvas.getContext('experimental-webgl',settings);}},{key:"initPlugins",value:function initPlugins(settings){var pluginsToUse=[];var source=this.source;if(typeof source==='string'){for(var i=0;i<plugins.length;i++){var plugin=plugins[i];if(source.match(plugin.functionMatch)){pluginsToUse.push(plugin);}}}else if(_typeof(source)==='object'){if(settings.pluginNames){var _loop2=function _loop2(_i20){var plugin=plugins[_i20];var usePlugin=settings.pluginNames.some(function(pluginName){return pluginName===plugin.name;});if(usePlugin){pluginsToUse.push(plugin);}};for(var _i20=0;_i20<plugins.length;_i20++){_loop2(_i20);}}}return pluginsToUse;}},{key:"initExtensions",value:function initExtensions(){this.extensions={OES_texture_float:this.context.getExtension('OES_texture_float'),OES_texture_float_linear:this.context.getExtension('OES_texture_float_linear'),OES_element_index_uint:this.context.getExtension('OES_element_index_uint'),WEBGL_draw_buffers:this.context.getExtension('WEBGL_draw_buffers'),WEBGL_color_buffer_float:this.context.getExtension('WEBGL_color_buffer_float')};}},{key:"validateSettings",value:function validateSettings(args){if(!this.validate){this.texSize=utils.getKernelTextureSize({optimizeFloatMemory:this.optimizeFloatMemory,precision:this.precision},this.output);return;}var features=this.constructor.features;if(this.optimizeFloatMemory===true&&!features.isTextureFloat){throw new Error('Float textures are not supported');}else if(this.precision==='single'&&!features.isFloatRead){throw new Error('Single precision not supported');}else if(!this.graphical&&this.precision===null&&features.isTextureFloat){this.precision=features.isFloatRead?'single':'unsigned';}if(this.subKernels&&this.subKernels.length>0&&!this.extensions.WEBGL_draw_buffers){throw new Error('could not instantiate draw buffers extension');}if(this.fixIntegerDivisionAccuracy===null){this.fixIntegerDivisionAccuracy=!features.isIntegerDivisionAccurate;}else if(this.fixIntegerDivisionAccuracy&&features.isIntegerDivisionAccurate){this.fixIntegerDivisionAccuracy=false;}this.checkOutput();if(!this.output||this.output.length===0){if(args.length!==1){throw new Error('Auto output only supported for kernels with only one input');}var argType=utils.getVariableType(args[0],this.strictIntegers);switch(argType){case'Array':this.output=utils.getDimensions(argType);break;case'NumberTexture':case'MemoryOptimizedNumberTexture':case'ArrayTexture(1)':case'ArrayTexture(2)':case'ArrayTexture(3)':case'ArrayTexture(4)':this.output=args[0].output;break;default:throw new Error('Auto output not supported for input type: '+argType);}}if(this.graphical){if(this.output.length!==2){throw new Error('Output must have 2 dimensions on graphical mode');}if(this.precision==='precision'){this.precision='unsigned';console.warn('Cannot use graphical mode and single precision at the same time');}this.texSize=utils.clone(this.output);return;}else if(this.precision===null&&features.isTextureFloat){this.precision='single';}this.texSize=utils.getKernelTextureSize({optimizeFloatMemory:this.optimizeFloatMemory,precision:this.precision},this.output);this.checkTextureSize();}},{key:"updateMaxTexSize",value:function updateMaxTexSize(){var texSize=this.texSize,canvas=this.canvas;if(this.maxTexSize===null){var canvasIndex=canvases.indexOf(canvas);if(canvasIndex===-1){canvasIndex=canvases.length;canvases.push(canvas);maxTexSizes[canvasIndex]=[texSize[0],texSize[1]];}this.maxTexSize=maxTexSizes[canvasIndex];}if(this.maxTexSize[0]<texSize[0]){this.maxTexSize[0]=texSize[0];}if(this.maxTexSize[1]<texSize[1]){this.maxTexSize[1]=texSize[1];}}},{key:"setupArguments",value:function setupArguments(args){var _this44=this;this.kernelArguments=[];this.argumentTextureCount=0;var needsArgumentTypes=this.argumentTypes===null;if(needsArgumentTypes){this.argumentTypes=[];}this.argumentSizes=[];this.argumentBitRatios=[];if(args.length<this.argumentNames.length){throw new Error('not enough arguments for kernel');}else if(args.length>this.argumentNames.length){throw new Error('too many arguments for kernel');}var gl=this.context;var textureIndexes=0;var onRequestTexture=function onRequestTexture(){return _this44.createTexture();};var onRequestIndex=function onRequestIndex(){return _this44.constantTextureCount+textureIndexes++;};var onUpdateValueMismatch=function onUpdateValueMismatch(constructor){_this44.switchKernels({type:'argumentMismatch',needed:constructor});};var onRequestContextHandle=function onRequestContextHandle(){return gl.TEXTURE0+_this44.constantTextureCount+_this44.argumentTextureCount++;};for(var index=0;index<args.length;index++){var _value=args[index];var _name10=this.argumentNames[index];var type=void 0;if(needsArgumentTypes){type=utils.getVariableType(_value,this.strictIntegers);this.argumentTypes.push(type);}else{type=this.argumentTypes[index];}var KernelValue=this.constructor.lookupKernelValueType(type,this.dynamicArguments?'dynamic':'static',this.precision,args[index]);if(KernelValue===null){return this.requestFallback(args);}var kernelArgument=new KernelValue(_value,{name:_name10,type:type,tactic:this.tactic,origin:'user',context:gl,checkContext:this.checkContext,kernel:this,strictIntegers:this.strictIntegers,onRequestTexture:onRequestTexture,onRequestIndex:onRequestIndex,onUpdateValueMismatch:onUpdateValueMismatch,onRequestContextHandle:onRequestContextHandle});this.kernelArguments.push(kernelArgument);kernelArgument.setup();this.argumentSizes.push(kernelArgument.textureSize);this.argumentBitRatios[index]=kernelArgument.bitRatio;}}},{key:"createTexture",value:function createTexture(){var texture=this.context.createTexture();this.textureCache.push(texture);return texture;}},{key:"setupConstants",value:function setupConstants(args){var _this45=this;var gl=this.context;this.kernelConstants=[];this.forceUploadKernelConstants=[];var needsConstantTypes=this.constantTypes===null;if(needsConstantTypes){this.constantTypes={};}this.constantBitRatios={};var textureIndexes=0;for(var _name11 in this.constants){var _value2=this.constants[_name11];var type=void 0;if(needsConstantTypes){type=utils.getVariableType(_value2,this.strictIntegers);this.constantTypes[_name11]=type;}else{type=this.constantTypes[_name11];}var KernelValue=this.constructor.lookupKernelValueType(type,'static',this.precision,_value2);if(KernelValue===null){return this.requestFallback(args);}var kernelValue=new KernelValue(_value2,{name:_name11,type:type,tactic:this.tactic,origin:'constants',context:this.context,checkContext:this.checkContext,kernel:this,strictIntegers:this.strictIntegers,onRequestTexture:function onRequestTexture(){return _this45.createTexture();},onRequestIndex:function onRequestIndex(){return textureIndexes++;},onRequestContextHandle:function onRequestContextHandle(){return gl.TEXTURE0+_this45.constantTextureCount++;}});this.constantBitRatios[_name11]=kernelValue.bitRatio;this.kernelConstants.push(kernelValue);kernelValue.setup();if(kernelValue.forceUploadEachRun){this.forceUploadKernelConstants.push(kernelValue);}}}},{key:"build",value:function build(){if(this.built)return;this.initExtensions();this.validateSettings(arguments);this.setupConstants(arguments);if(this.fallbackRequested)return;this.setupArguments(arguments);if(this.fallbackRequested)return;this.updateMaxTexSize();this.translateSource();var failureResult=this.pickRenderStrategy(arguments);if(failureResult){return failureResult;}var texSize=this.texSize,gl=this.context,canvas=this.canvas;gl.enable(gl.SCISSOR_TEST);if(this.pipeline&&this.precision==='single'){gl.viewport(0,0,this.maxTexSize[0],this.maxTexSize[1]);canvas.width=this.maxTexSize[0];canvas.height=this.maxTexSize[1];}else{gl.viewport(0,0,this.maxTexSize[0],this.maxTexSize[1]);canvas.width=this.maxTexSize[0];canvas.height=this.maxTexSize[1];}var threadDim=this.threadDim=Array.from(this.output);while(threadDim.length<3){threadDim.push(1);}var compiledVertexShader=this.getVertexShader(arguments);var vertShader=gl.createShader(gl.VERTEX_SHADER);gl.shaderSource(vertShader,compiledVertexShader);gl.compileShader(vertShader);this.vertShader=vertShader;var compiledFragmentShader=this.getFragmentShader(arguments);var fragShader=gl.createShader(gl.FRAGMENT_SHADER);gl.shaderSource(fragShader,compiledFragmentShader);gl.compileShader(fragShader);this.fragShader=fragShader;if(this.debug){console.log('GLSL Shader Output:');console.log(compiledFragmentShader);}if(!gl.getShaderParameter(vertShader,gl.COMPILE_STATUS)){throw new Error('Error compiling vertex shader: '+gl.getShaderInfoLog(vertShader));}if(!gl.getShaderParameter(fragShader,gl.COMPILE_STATUS)){throw new Error('Error compiling fragment shader: '+gl.getShaderInfoLog(fragShader));}var program=this.program=gl.createProgram();gl.attachShader(program,vertShader);gl.attachShader(program,fragShader);gl.linkProgram(program);this.framebuffer=gl.createFramebuffer();this.framebuffer.width=texSize[0];this.framebuffer.height=texSize[1];this.rawValueFramebuffers={};var vertices=new Float32Array([-1,-1,1,-1,-1,1,1,1]);var texCoords=new Float32Array([0,0,1,0,0,1,1,1]);var texCoordOffset=vertices.byteLength;var buffer=this.buffer;if(!buffer){buffer=this.buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,vertices.byteLength+texCoords.byteLength,gl.STATIC_DRAW);}else{gl.bindBuffer(gl.ARRAY_BUFFER,buffer);}gl.bufferSubData(gl.ARRAY_BUFFER,0,vertices);gl.bufferSubData(gl.ARRAY_BUFFER,texCoordOffset,texCoords);var aPosLoc=gl.getAttribLocation(this.program,'aPos');gl.enableVertexAttribArray(aPosLoc);gl.vertexAttribPointer(aPosLoc,2,gl.FLOAT,false,0,0);var aTexCoordLoc=gl.getAttribLocation(this.program,'aTexCoord');gl.enableVertexAttribArray(aTexCoordLoc);gl.vertexAttribPointer(aTexCoordLoc,2,gl.FLOAT,false,0,texCoordOffset);gl.bindFramebuffer(gl.FRAMEBUFFER,this.framebuffer);var i=0;gl.useProgram(this.program);for(var p in this.constants){this.kernelConstants[i++].updateValue(this.constants[p]);}this._setupOutputTexture();if(this.subKernels!==null&&this.subKernels.length>0){this._mappedTextureSwitched={};this._setupSubOutputTextures();}this.buildSignature(arguments);this.built=true;}},{key:"translateSource",value:function translateSource(){var functionBuilder=FunctionBuilder.fromKernel(this,WebGLFunctionNode,{fixIntegerDivisionAccuracy:this.fixIntegerDivisionAccuracy});this.translatedSource=functionBuilder.getPrototypeString('kernel');this.setupReturnTypes(functionBuilder);}},{key:"setupReturnTypes",value:function setupReturnTypes(functionBuilder){if(!this.graphical&&!this.returnType){this.returnType=functionBuilder.getKernelResultType();}if(this.subKernels&&this.subKernels.length>0){for(var i=0;i<this.subKernels.length;i++){var subKernel=this.subKernels[i];if(!subKernel.returnType){subKernel.returnType=functionBuilder.getSubKernelResultType(i);}}}}},{key:"run",value:function run(){var kernelArguments=this.kernelArguments,texSize=this.texSize,forceUploadKernelConstants=this.forceUploadKernelConstants,gl=this.context;gl.useProgram(this.program);gl.scissor(0,0,texSize[0],texSize[1]);if(this.dynamicOutput){this.setUniform3iv('uOutputDim',new Int32Array(this.threadDim));this.setUniform2iv('uTexSize',texSize);}this.setUniform2f('ratio',texSize[0]/this.maxTexSize[0],texSize[1]/this.maxTexSize[1]);for(var i=0;i<forceUploadKernelConstants.length;i++){var constant=forceUploadKernelConstants[i];constant.updateValue(this.constants[constant.name]);if(this.switchingKernels)return;}for(var _i21=0;_i21<kernelArguments.length;_i21++){kernelArguments[_i21].updateValue(arguments[_i21]);if(this.switchingKernels)return;}if(this.plugins){for(var _i22=0;_i22<this.plugins.length;_i22++){var plugin=this.plugins[_i22];if(plugin.onBeforeRun){plugin.onBeforeRun(this);}}}if(this.graphical){if(this.pipeline){gl.bindRenderbuffer(gl.RENDERBUFFER,null);gl.bindFramebuffer(gl.FRAMEBUFFER,this.framebuffer);if(this.immutable){this._replaceOutputTexture();}gl.drawArrays(gl.TRIANGLE_STRIP,0,4);return this.immutable?this.texture.clone():this.texture;}gl.bindRenderbuffer(gl.RENDERBUFFER,null);gl.bindFramebuffer(gl.FRAMEBUFFER,null);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);return;}gl.bindFramebuffer(gl.FRAMEBUFFER,this.framebuffer);if(this.immutable){this._replaceOutputTexture();}if(this.subKernels!==null){if(this.immutable){this._replaceSubOutputTextures();}this.drawBuffers();}gl.drawArrays(gl.TRIANGLE_STRIP,0,4);}},{key:"drawBuffers",value:function drawBuffers(){this.extensions.WEBGL_draw_buffers.drawBuffersWEBGL(this.drawBuffersMap);}},{key:"getInternalFormat",value:function getInternalFormat(){return this.context.RGBA;}},{key:"getTextureFormat",value:function getTextureFormat(){var gl=this.context;switch(this.getInternalFormat()){case gl.RGBA:return gl.RGBA;default:throw new Error('Unknown internal format');}}},{key:"_replaceOutputTexture",value:function _replaceOutputTexture(){if(this.texture.beforeMutate()||this._textureSwitched){var gl=this.context;gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,this.texture.texture,0);this._textureSwitched=false;}}},{key:"_setupOutputTexture",value:function _setupOutputTexture(){var gl=this.context;var texSize=this.texSize;if(this.texture){gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,this.texture.texture,0);return;}var texture=this.createTexture();gl.activeTexture(gl.TEXTURE0+this.constantTextureCount+this.argumentTextureCount);gl.bindTexture(gl.TEXTURE_2D,texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);var format=this.getInternalFormat();if(this.precision==='single'){gl.texImage2D(gl.TEXTURE_2D,0,format,texSize[0],texSize[1],0,gl.RGBA,gl.FLOAT,null);}else{gl.texImage2D(gl.TEXTURE_2D,0,format,texSize[0],texSize[1],0,format,gl.UNSIGNED_BYTE,null);}gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,texture,0);this.texture=new this.TextureConstructor({texture:texture,size:texSize,dimensions:this.threadDim,output:this.output,context:this.context,internalFormat:this.getInternalFormat(),textureFormat:this.getTextureFormat(),kernel:this});}},{key:"_replaceSubOutputTextures",value:function _replaceSubOutputTextures(){var gl=this.context;for(var i=0;i<this.mappedTextures.length;i++){var mappedTexture=this.mappedTextures[i];if(mappedTexture.beforeMutate()||this._mappedTextureSwitched[i]){gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0+i+1,gl.TEXTURE_2D,mappedTexture.texture,0);this._mappedTextureSwitched[i]=false;}}}},{key:"_setupSubOutputTextures",value:function _setupSubOutputTextures(){var gl=this.context;if(this.mappedTextures){for(var i=0;i<this.subKernels.length;i++){gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0+i+1,gl.TEXTURE_2D,this.mappedTextures[i].texture,0);}return;}var texSize=this.texSize;this.drawBuffersMap=[gl.COLOR_ATTACHMENT0];this.mappedTextures=[];for(var _i23=0;_i23<this.subKernels.length;_i23++){var texture=this.createTexture();this.drawBuffersMap.push(gl.COLOR_ATTACHMENT0+_i23+1);gl.activeTexture(gl.TEXTURE0+this.constantTextureCount+this.argumentTextureCount+_i23);gl.bindTexture(gl.TEXTURE_2D,texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);if(this.precision==='single'){gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,texSize[0],texSize[1],0,gl.RGBA,gl.FLOAT,null);}else{gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,texSize[0],texSize[1],0,gl.RGBA,gl.UNSIGNED_BYTE,null);}gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0+_i23+1,gl.TEXTURE_2D,texture,0);this.mappedTextures.push(new this.TextureConstructor({texture:texture,size:texSize,dimensions:this.threadDim,output:this.output,context:this.context,internalFormat:this.getInternalFormat(),textureFormat:this.getTextureFormat(),kernel:this}));}}},{key:"setUniform1f",value:function setUniform1f(name,value){if(this.uniform1fCache.hasOwnProperty(name)){var cache=this.uniform1fCache[name];if(value===cache){return;}}this.uniform1fCache[name]=value;var loc=this.getUniformLocation(name);this.context.uniform1f(loc,value);}},{key:"setUniform1i",value:function setUniform1i(name,value){if(this.uniform1iCache.hasOwnProperty(name)){var cache=this.uniform1iCache[name];if(value===cache){return;}}this.uniform1iCache[name]=value;var loc=this.getUniformLocation(name);this.context.uniform1i(loc,value);}},{key:"setUniform2f",value:function setUniform2f(name,value1,value2){if(this.uniform2fCache.hasOwnProperty(name)){var cache=this.uniform2fCache[name];if(value1===cache[0]&&value2===cache[1]){return;}}this.uniform2fCache[name]=[value1,value2];var loc=this.getUniformLocation(name);this.context.uniform2f(loc,value1,value2);}},{key:"setUniform2fv",value:function setUniform2fv(name,value){if(this.uniform2fvCache.hasOwnProperty(name)){var cache=this.uniform2fvCache[name];if(value[0]===cache[0]&&value[1]===cache[1]){return;}}this.uniform2fvCache[name]=value;var loc=this.getUniformLocation(name);this.context.uniform2fv(loc,value);}},{key:"setUniform2iv",value:function setUniform2iv(name,value){if(this.uniform2ivCache.hasOwnProperty(name)){var cache=this.uniform2ivCache[name];if(value[0]===cache[0]&&value[1]===cache[1]){return;}}this.uniform2ivCache[name]=value;var loc=this.getUniformLocation(name);this.context.uniform2iv(loc,value);}},{key:"setUniform3fv",value:function setUniform3fv(name,value){if(this.uniform3fvCache.hasOwnProperty(name)){var cache=this.uniform3fvCache[name];if(value[0]===cache[0]&&value[1]===cache[1]&&value[2]===cache[2]){return;}}this.uniform3fvCache[name]=value;var loc=this.getUniformLocation(name);this.context.uniform3fv(loc,value);}},{key:"setUniform3iv",value:function setUniform3iv(name,value){if(this.uniform3ivCache.hasOwnProperty(name)){var cache=this.uniform3ivCache[name];if(value[0]===cache[0]&&value[1]===cache[1]&&value[2]===cache[2]){return;}}this.uniform3ivCache[name]=value;var loc=this.getUniformLocation(name);this.context.uniform3iv(loc,value);}},{key:"setUniform4fv",value:function setUniform4fv(name,value){if(this.uniform4fvCache.hasOwnProperty(name)){var cache=this.uniform4fvCache[name];if(value[0]===cache[0]&&value[1]===cache[1]&&value[2]===cache[2]&&value[3]===cache[3]){return;}}this.uniform4fvCache[name]=value;var loc=this.getUniformLocation(name);this.context.uniform4fv(loc,value);}},{key:"setUniform4iv",value:function setUniform4iv(name,value){if(this.uniform4ivCache.hasOwnProperty(name)){var cache=this.uniform4ivCache[name];if(value[0]===cache[0]&&value[1]===cache[1]&&value[2]===cache[2]&&value[3]===cache[3]){return;}}this.uniform4ivCache[name]=value;var loc=this.getUniformLocation(name);this.context.uniform4iv(loc,value);}},{key:"getUniformLocation",value:function getUniformLocation(name){if(this.programUniformLocationCache.hasOwnProperty(name)){return this.programUniformLocationCache[name];}return this.programUniformLocationCache[name]=this.context.getUniformLocation(this.program,name);}},{key:"_getFragShaderArtifactMap",value:function _getFragShaderArtifactMap(args){return{HEADER:this._getHeaderString(),LOOP_MAX:this._getLoopMaxString(),PLUGINS:this._getPluginsString(),CONSTANTS:this._getConstantsString(),DECODE32_ENDIANNESS:this._getDecode32EndiannessString(),ENCODE32_ENDIANNESS:this._getEncode32EndiannessString(),DIVIDE_WITH_INTEGER_CHECK:this._getDivideWithIntegerCheckString(),INJECTED_NATIVE:this._getInjectedNative(),MAIN_CONSTANTS:this._getMainConstantsString(),MAIN_ARGUMENTS:this._getMainArgumentsString(args),KERNEL:this.getKernelString(),MAIN_RESULT:this.getMainResultString(),FLOAT_TACTIC_DECLARATION:this.getFloatTacticDeclaration(),INT_TACTIC_DECLARATION:this.getIntTacticDeclaration(),SAMPLER_2D_TACTIC_DECLARATION:this.getSampler2DTacticDeclaration(),SAMPLER_2D_ARRAY_TACTIC_DECLARATION:this.getSampler2DArrayTacticDeclaration()};}},{key:"_getVertShaderArtifactMap",value:function _getVertShaderArtifactMap(args){return{FLOAT_TACTIC_DECLARATION:this.getFloatTacticDeclaration(),INT_TACTIC_DECLARATION:this.getIntTacticDeclaration(),SAMPLER_2D_TACTIC_DECLARATION:this.getSampler2DTacticDeclaration(),SAMPLER_2D_ARRAY_TACTIC_DECLARATION:this.getSampler2DArrayTacticDeclaration()};}},{key:"_getHeaderString",value:function _getHeaderString(){return this.subKernels!==null?'#extension GL_EXT_draw_buffers : require\n':'';}},{key:"_getLoopMaxString",value:function _getLoopMaxString(){return this.loopMaxIterations?" ".concat(parseInt(this.loopMaxIterations),";\n"):' 1000;\n';}},{key:"_getPluginsString",value:function _getPluginsString(){var _this46=this;if(!this.plugins)return'\n';return this.plugins.map(function(plugin){return plugin.source&&_this46.source.match(plugin.functionMatch)?plugin.source:'';}).join('\n');}},{key:"_getConstantsString",value:function _getConstantsString(){var result=[];var threadDim=this.threadDim,texSize=this.texSize;if(this.dynamicOutput){result.push('uniform ivec3 uOutputDim','uniform ivec2 uTexSize');}else{result.push("ivec3 uOutputDim = ivec3(".concat(threadDim[0],", ").concat(threadDim[1],", ").concat(threadDim[2],")"),"ivec2 uTexSize = ivec2(".concat(texSize[0],", ").concat(texSize[1],")"));}return utils.linesToString(result);}},{key:"_getTextureCoordinate",value:function _getTextureCoordinate(){var subKernels=this.subKernels;if(subKernels===null||subKernels.length<1){return'varying vec2 vTexCoord;\n';}else{return'out vec2 vTexCoord;\n';}}},{key:"_getDecode32EndiannessString",value:function _getDecode32EndiannessString(){return this.endianness==='LE'?'':'  texel.rgba = texel.abgr;\n';}},{key:"_getEncode32EndiannessString",value:function _getEncode32EndiannessString(){return this.endianness==='LE'?'':'  texel.rgba = texel.abgr;\n';}},{key:"_getDivideWithIntegerCheckString",value:function _getDivideWithIntegerCheckString(){return this.fixIntegerDivisionAccuracy?"float divWithIntCheck(float x, float y) {\n        if (floor(x) == x && floor(y) == y && integerMod(x, y) == 0.0) {\n          return float(int(x) / int(y));\n        }\n        return x / y;\n      }\n      \n      float integerCorrectionModulo(float number, float divisor) {\n        if (number < 0.0) {\n          number = abs(number);\n          if (divisor < 0.0) {\n            divisor = abs(divisor);\n          }\n          return -(number - (divisor * floor(divWithIntCheck(number, divisor))));\n        }\n        if (divisor < 0.0) {\n          divisor = abs(divisor);\n        }\n        return number - (divisor * floor(divWithIntCheck(number, divisor)));\n      }":'';}},{key:"_getMainArgumentsString",value:function _getMainArgumentsString(args){var results=[];var argumentNames=this.argumentNames;for(var i=0;i<argumentNames.length;i++){results.push(this.kernelArguments[i].getSource(args[i]));}return results.join('');}},{key:"_getInjectedNative",value:function _getInjectedNative(){return this.injectedNative||'';}},{key:"_getMainConstantsString",value:function _getMainConstantsString(){var result=[];var constants=this.constants;if(constants){var i=0;for(var _name12 in constants){if(!this.constants.hasOwnProperty(_name12))continue;result.push(this.kernelConstants[i++].getSource(this.constants[_name12]));}}return result.join('');}},{key:"getRawValueFramebuffer",value:function getRawValueFramebuffer(width,height){if(!this.rawValueFramebuffers[width]){this.rawValueFramebuffers[width]={};}if(!this.rawValueFramebuffers[width][height]){var framebuffer=this.context.createFramebuffer();framebuffer.width=width;framebuffer.height=height;this.rawValueFramebuffers[width][height]=framebuffer;}return this.rawValueFramebuffers[width][height];}},{key:"getKernelResultDeclaration",value:function getKernelResultDeclaration(){switch(this.returnType){case'Array(2)':return'vec2 kernelResult';case'Array(3)':return'vec3 kernelResult';case'Array(4)':return'vec4 kernelResult';case'LiteralInteger':case'Float':case'Number':case'Integer':return'float kernelResult';default:if(this.graphical){return'float kernelResult';}else{throw new Error("unrecognized output type \"".concat(this.returnType,"\""));}}}},{key:"getKernelString",value:function getKernelString(){var result=[this.getKernelResultDeclaration()];var subKernels=this.subKernels;if(subKernels!==null){switch(this.returnType){case'Number':case'Float':case'Integer':for(var i=0;i<subKernels.length;i++){var subKernel=subKernels[i];result.push(subKernel.returnType==='Integer'?"int subKernelResult_".concat(subKernel.name," = 0"):"float subKernelResult_".concat(subKernel.name," = 0.0"));}break;case'Array(2)':for(var _i24=0;_i24<subKernels.length;_i24++){result.push("vec2 subKernelResult_".concat(subKernels[_i24].name));}break;case'Array(3)':for(var _i25=0;_i25<subKernels.length;_i25++){result.push("vec3 subKernelResult_".concat(subKernels[_i25].name));}break;case'Array(4)':for(var _i26=0;_i26<subKernels.length;_i26++){result.push("vec4 subKernelResult_".concat(subKernels[_i26].name));}break;}}return utils.linesToString(result)+this.translatedSource;}},{key:"getMainResultGraphical",value:function getMainResultGraphical(){return utils.linesToString(['  threadId = indexTo3D(index, uOutputDim)','  kernel()','  gl_FragColor = actualColor']);}},{key:"getMainResultPackedPixels",value:function getMainResultPackedPixels(){switch(this.returnType){case'LiteralInteger':case'Number':case'Integer':case'Float':return this.getMainResultKernelPackedPixels()+this.getMainResultSubKernelPackedPixels();default:throw new Error("packed output only usable with Numbers, \"".concat(this.returnType,"\" specified"));}}},{key:"getMainResultKernelPackedPixels",value:function getMainResultKernelPackedPixels(){return utils.linesToString(['  threadId = indexTo3D(index, uOutputDim)','  kernel()',"  gl_FragData[0] = ".concat(this.useLegacyEncoder?'legacyEncode32':'encode32',"(kernelResult)")]);}},{key:"getMainResultSubKernelPackedPixels",value:function getMainResultSubKernelPackedPixels(){var result=[];if(!this.subKernels)return'';for(var i=0;i<this.subKernels.length;i++){var subKernel=this.subKernels[i];if(subKernel.returnType==='Integer'){result.push("  gl_FragData[".concat(i+1,"] = ").concat(this.useLegacyEncoder?'legacyEncode32':'encode32',"(float(subKernelResult_").concat(this.subKernels[i].name,"))"));}else{result.push("  gl_FragData[".concat(i+1,"] = ").concat(this.useLegacyEncoder?'legacyEncode32':'encode32',"(subKernelResult_").concat(this.subKernels[i].name,")"));}}return utils.linesToString(result);}},{key:"getMainResultMemoryOptimizedFloats",value:function getMainResultMemoryOptimizedFloats(){var result=['  index *= 4'];switch(this.returnType){case'Number':case'Integer':case'Float':var channels=['r','g','b','a'];for(var i=0;i<channels.length;i++){var channel=channels[i];this.getMainResultKernelMemoryOptimizedFloats(result,channel);this.getMainResultSubKernelMemoryOptimizedFloats(result,channel);if(i+1<channels.length){result.push('  index += 1');}}break;default:throw new Error("optimized output only usable with Numbers, ".concat(this.returnType," specified"));}return utils.linesToString(result);}},{key:"getMainResultKernelMemoryOptimizedFloats",value:function getMainResultKernelMemoryOptimizedFloats(result,channel){result.push('  threadId = indexTo3D(index, uOutputDim)','  kernel()',"  gl_FragData[0].".concat(channel," = kernelResult"));}},{key:"getMainResultSubKernelMemoryOptimizedFloats",value:function getMainResultSubKernelMemoryOptimizedFloats(result,channel){if(!this.subKernels)return result;for(var i=0;i<this.subKernels.length;i++){var subKernel=this.subKernels[i];if(subKernel.returnType==='Integer'){result.push("  gl_FragData[".concat(i+1,"].").concat(channel," = float(subKernelResult_").concat(this.subKernels[i].name,")"));}else{result.push("  gl_FragData[".concat(i+1,"].").concat(channel," = subKernelResult_").concat(this.subKernels[i].name));}}}},{key:"getMainResultKernelNumberTexture",value:function getMainResultKernelNumberTexture(){return['  threadId = indexTo3D(index, uOutputDim)','  kernel()','  gl_FragData[0][0] = kernelResult'];}},{key:"getMainResultSubKernelNumberTexture",value:function getMainResultSubKernelNumberTexture(){var result=[];if(!this.subKernels)return result;for(var i=0;i<this.subKernels.length;++i){var subKernel=this.subKernels[i];if(subKernel.returnType==='Integer'){result.push("  gl_FragData[".concat(i+1,"][0] = float(subKernelResult_").concat(subKernel.name,")"));}else{result.push("  gl_FragData[".concat(i+1,"][0] = subKernelResult_").concat(subKernel.name));}}return result;}},{key:"getMainResultKernelArray2Texture",value:function getMainResultKernelArray2Texture(){return['  threadId = indexTo3D(index, uOutputDim)','  kernel()','  gl_FragData[0][0] = kernelResult[0]','  gl_FragData[0][1] = kernelResult[1]'];}},{key:"getMainResultSubKernelArray2Texture",value:function getMainResultSubKernelArray2Texture(){var result=[];if(!this.subKernels)return result;for(var i=0;i<this.subKernels.length;++i){result.push("  gl_FragData[".concat(i+1,"][0] = subKernelResult_").concat(this.subKernels[i].name,"[0]"),"  gl_FragData[".concat(i+1,"][1] = subKernelResult_").concat(this.subKernels[i].name,"[1]"));}return result;}},{key:"getMainResultKernelArray3Texture",value:function getMainResultKernelArray3Texture(){return['  threadId = indexTo3D(index, uOutputDim)','  kernel()','  gl_FragData[0][0] = kernelResult[0]','  gl_FragData[0][1] = kernelResult[1]','  gl_FragData[0][2] = kernelResult[2]'];}},{key:"getMainResultSubKernelArray3Texture",value:function getMainResultSubKernelArray3Texture(){var result=[];if(!this.subKernels)return result;for(var i=0;i<this.subKernels.length;++i){result.push("  gl_FragData[".concat(i+1,"][0] = subKernelResult_").concat(this.subKernels[i].name,"[0]"),"  gl_FragData[".concat(i+1,"][1] = subKernelResult_").concat(this.subKernels[i].name,"[1]"),"  gl_FragData[".concat(i+1,"][2] = subKernelResult_").concat(this.subKernels[i].name,"[2]"));}return result;}},{key:"getMainResultKernelArray4Texture",value:function getMainResultKernelArray4Texture(){return['  threadId = indexTo3D(index, uOutputDim)','  kernel()','  gl_FragData[0] = kernelResult'];}},{key:"getMainResultSubKernelArray4Texture",value:function getMainResultSubKernelArray4Texture(){var result=[];if(!this.subKernels)return result;switch(this.returnType){case'Number':case'Float':case'Integer':for(var i=0;i<this.subKernels.length;++i){var subKernel=this.subKernels[i];if(subKernel.returnType==='Integer'){result.push("  gl_FragData[".concat(i+1,"] = float(subKernelResult_").concat(this.subKernels[i].name,")"));}else{result.push("  gl_FragData[".concat(i+1,"] = subKernelResult_").concat(this.subKernels[i].name));}}break;case'Array(2)':for(var _i27=0;_i27<this.subKernels.length;++_i27){result.push("  gl_FragData[".concat(_i27+1,"][0] = subKernelResult_").concat(this.subKernels[_i27].name,"[0]"),"  gl_FragData[".concat(_i27+1,"][1] = subKernelResult_").concat(this.subKernels[_i27].name,"[1]"));}break;case'Array(3)':for(var _i28=0;_i28<this.subKernels.length;++_i28){result.push("  gl_FragData[".concat(_i28+1,"][0] = subKernelResult_").concat(this.subKernels[_i28].name,"[0]"),"  gl_FragData[".concat(_i28+1,"][1] = subKernelResult_").concat(this.subKernels[_i28].name,"[1]"),"  gl_FragData[".concat(_i28+1,"][2] = subKernelResult_").concat(this.subKernels[_i28].name,"[2]"));}break;case'Array(4)':for(var _i29=0;_i29<this.subKernels.length;++_i29){result.push("  gl_FragData[".concat(_i29+1,"][0] = subKernelResult_").concat(this.subKernels[_i29].name,"[0]"),"  gl_FragData[".concat(_i29+1,"][1] = subKernelResult_").concat(this.subKernels[_i29].name,"[1]"),"  gl_FragData[".concat(_i29+1,"][2] = subKernelResult_").concat(this.subKernels[_i29].name,"[2]"),"  gl_FragData[".concat(_i29+1,"][3] = subKernelResult_").concat(this.subKernels[_i29].name,"[3]"));}break;}return result;}},{key:"replaceArtifacts",value:function replaceArtifacts(src,map){return src.replace(/[ ]*__([A-Z]+[0-9]*([_]?[A-Z]*[0-9]?)*)__;\n/g,function(match,artifact){if(map.hasOwnProperty(artifact)){return map[artifact];}throw"unhandled artifact ".concat(artifact);});}},{key:"getFragmentShader",value:function getFragmentShader(args){if(this.compiledFragmentShader!==null){return this.compiledFragmentShader;}return this.compiledFragmentShader=this.replaceArtifacts(this.constructor.fragmentShader,this._getFragShaderArtifactMap(args));}},{key:"getVertexShader",value:function getVertexShader(args){if(this.compiledVertexShader!==null){return this.compiledVertexShader;}return this.compiledVertexShader=this.replaceArtifacts(this.constructor.vertexShader,this._getVertShaderArtifactMap(args));}},{key:"toString",value:function toString(){var setupContextString=utils.linesToString(["const gl = context"]);return glKernelString(this.constructor,arguments,this,setupContextString);}},{key:"destroy",value:function destroy(removeCanvasReferences){if(!this.context)return;if(this.buffer){this.context.deleteBuffer(this.buffer);}if(this.framebuffer){this.context.deleteFramebuffer(this.framebuffer);}for(var width in this.rawValueFramebuffers){for(var height in this.rawValueFramebuffers[width]){this.context.deleteFramebuffer(this.rawValueFramebuffers[width][height]);delete this.rawValueFramebuffers[width][height];}delete this.rawValueFramebuffers[width];}if(this.vertShader){this.context.deleteShader(this.vertShader);}if(this.fragShader){this.context.deleteShader(this.fragShader);}if(this.program){this.context.deleteProgram(this.program);}if(this.texture){this.texture["delete"]();var textureCacheIndex=this.textureCache.indexOf(this.texture.texture);if(textureCacheIndex>-1){this.textureCache.splice(textureCacheIndex,1);}this.texture=null;}if(this.mappedTextures&&this.mappedTextures.length){for(var _i30=0;_i30<this.mappedTextures.length;_i30++){var mappedTexture=this.mappedTextures[_i30];mappedTexture["delete"]();var _textureCacheIndex=this.textureCache.indexOf(mappedTexture.texture);if(_textureCacheIndex>-1){this.textureCache.splice(_textureCacheIndex,1);}}this.mappedTextures=null;}if(this.kernelArguments){for(var _i31=0;_i31<this.kernelArguments.length;_i31++){this.kernelArguments[_i31].destroy();}}if(this.kernelConstants){for(var _i32=0;_i32<this.kernelConstants.length;_i32++){this.kernelConstants[_i32].destroy();}}while(this.textureCache.length>0){var texture=this.textureCache.pop();this.context.deleteTexture(texture);}if(removeCanvasReferences){var idx=canvases.indexOf(this.canvas);if(idx>=0){canvases[idx]=null;maxTexSizes[idx]=null;}}this.destroyExtensions();delete this.context;delete this.canvas;if(!this.gpu)return;var i=this.gpu.kernels.indexOf(this);if(i===-1)return;this.gpu.kernels.splice(i,1);}},{key:"destroyExtensions",value:function destroyExtensions(){this.extensions.OES_texture_float=null;this.extensions.OES_texture_float_linear=null;this.extensions.OES_element_index_uint=null;this.extensions.WEBGL_draw_buffers=null;}},{key:"toJSON",value:function toJSON(){var json=_get(_getPrototypeOf(WebGLKernel.prototype),"toJSON",this).call(this);json.functionNodes=FunctionBuilder.fromKernel(this,WebGLFunctionNode).toJSON();json.settings.threadDim=this.threadDim;return json;}}],[{key:"isSupported",get:function get(){if(isSupported!==null){return isSupported;}this.setupFeatureChecks();isSupported=this.isContextMatch(testContext);return isSupported;}},{key:"setupFeatureChecks",value:function setupFeatureChecks(){if(typeof document!=='undefined'){testCanvas=document.createElement('canvas');}else if(typeof OffscreenCanvas!=='undefined'){testCanvas=new OffscreenCanvas(0,0);}if(!testCanvas)return;testContext=testCanvas.getContext('webgl')||testCanvas.getContext('experimental-webgl');if(!testContext||!testContext.getExtension)return;testExtensions={OES_texture_float:testContext.getExtension('OES_texture_float'),OES_texture_float_linear:testContext.getExtension('OES_texture_float_linear'),OES_element_index_uint:testContext.getExtension('OES_element_index_uint'),WEBGL_draw_buffers:testContext.getExtension('WEBGL_draw_buffers')};features=this.getFeatures();}},{key:"isContextMatch",value:function isContextMatch(context){if(typeof WebGLRenderingContext!=='undefined'){return context instanceof WebGLRenderingContext;}return false;}},{key:"getIsTextureFloat",value:function getIsTextureFloat(){return Boolean(testExtensions.OES_texture_float);}},{key:"getIsDrawBuffers",value:function getIsDrawBuffers(){return Boolean(testExtensions.WEBGL_draw_buffers);}},{key:"getChannelCount",value:function getChannelCount(){return testExtensions.WEBGL_draw_buffers?testContext.getParameter(testExtensions.WEBGL_draw_buffers.MAX_DRAW_BUFFERS_WEBGL):1;}},{key:"getMaxTextureSize",value:function getMaxTextureSize(){return testContext.getParameter(testContext.MAX_TEXTURE_SIZE);}},{key:"lookupKernelValueType",value:function lookupKernelValueType(type,dynamic,precision,value){return _lookupKernelValueType(type,dynamic,precision,value);}},{key:"testCanvas",get:function get(){return testCanvas;}},{key:"testContext",get:function get(){return testContext;}},{key:"features",get:function get(){return features;}},{key:"fragmentShader",get:function get(){return fragmentShader;}},{key:"vertexShader",get:function get(){return vertexShader;}},{key:"destroyContext",value:function destroyContext(context){var extension=context.getExtension('WEBGL_lose_context');if(extension){extension.loseContext();}}}]);return WebGLKernel;}(GLKernel);module.exports={WebGLKernel:WebGLKernel};},{"../../plugins/math-random-uniformly-distributed":112,"../../utils":114,"../function-builder":9,"../gl/kernel":13,"../gl/kernel-string":12,"./fragment-shader":37,"./function-node":38,"./kernel-value-maps":39,"./vertex-shader":71}],71:[function(require,module,exports){var vertexShader="__FLOAT_TACTIC_DECLARATION__;\n      __INT_TACTIC_DECLARATION__;\n      __SAMPLER_2D_TACTIC_DECLARATION__;\n      \n      attribute vec2 aPos;\n      attribute vec2 aTexCoord;\n      \n      varying vec2 vTexCoord;\n      uniform vec2 ratio;\n      \n      void main(void) {\n        gl_Position = vec4((aPos + vec2(1)) * ratio + vec2(-1), 0, 1);\n        vTexCoord = aTexCoord;\n      }";module.exports={vertexShader:vertexShader};},{}],72:[function(require,module,exports){var fragmentShader="#version 300 es\n      __HEADER__;\n      __FLOAT_TACTIC_DECLARATION__;\n      __INT_TACTIC_DECLARATION__;\n      __SAMPLER_2D_TACTIC_DECLARATION__;\n      __SAMPLER_2D_ARRAY_TACTIC_DECLARATION__;\n      \n      const int LOOP_MAX = __LOOP_MAX__;\n      \n      __PLUGINS__;\n      __CONSTANTS__;\n      \n      in vec2 vTexCoord;\n      \n      float atan2(float v1, float v2) {\n        if (v1 == 0.0 || v2 == 0.0) return 0.0;\n        return atan(v1 / v2);\n      }\n      \n      float cbrt(float x) {\n        if (x >= 0.0) {\n          return pow(x, 1.0 / 3.0);\n        } else {\n          return -pow(x, 1.0 / 3.0);\n        }\n      }\n      \n      float expm1(float x) {\n        return pow(".concat(Math.E,", x) - 1.0; \n      }\n      \n      float fround(highp float x) {\n        return x;\n      }\n      \n      float imul(float v1, float v2) {\n        return float(int(v1) * int(v2));\n      }\n      \n      float log10(float x) {\n        return log2(x) * (1.0 / log2(10.0));\n      }\n      \n      float log1p(float x) {\n        return log(1.0 + x);\n      }\n      \n      float _pow(float v1, float v2) {\n        if (v2 == 0.0) return 1.0;\n        return pow(v1, v2);\n      }\n      \n      float _round(float x) {\n        return floor(x + 0.5);\n      }\n      \n      \n      const int BIT_COUNT = 32;\n      int modi(int x, int y) {\n        return x - y * (x / y);\n      }\n      \n      int bitwiseOr(int a, int b) {\n        int result = 0;\n        int n = 1;\n        \n        for (int i = 0; i < BIT_COUNT; i++) {\n          if ((modi(a, 2) == 1) || (modi(b, 2) == 1)) {\n            result += n;\n          }\n          a = a / 2;\n          b = b / 2;\n          n = n * 2;\n          if(!(a > 0 || b > 0)) {\n            break;\n          }\n        }\n        return result;\n      }\n      int bitwiseXOR(int a, int b) {\n        int result = 0;\n        int n = 1;\n        \n        for (int i = 0; i < BIT_COUNT; i++) {\n          if ((modi(a, 2) == 1) != (modi(b, 2) == 1)) {\n            result += n;\n          }\n          a = a / 2;\n          b = b / 2;\n          n = n * 2;\n          if(!(a > 0 || b > 0)) {\n            break;\n          }\n        }\n        return result;\n      }\n      int bitwiseAnd(int a, int b) {\n        int result = 0;\n        int n = 1;\n        for (int i = 0; i < BIT_COUNT; i++) {\n          if ((modi(a, 2) == 1) && (modi(b, 2) == 1)) {\n            result += n;\n          }\n          a = a / 2;\n          b = b / 2;\n          n = n * 2;\n          if(!(a > 0 && b > 0)) {\n            break;\n          }\n        }\n        return result;\n      }\n      int bitwiseNot(int a) {\n        int result = 0;\n        int n = 1;\n        \n        for (int i = 0; i < BIT_COUNT; i++) {\n          if (modi(a, 2) == 0) {\n            result += n;    \n          }\n          a = a / 2;\n          n = n * 2;\n        }\n        return result;\n      }\n      int bitwiseZeroFillLeftShift(int n, int shift) {\n        int maxBytes = BIT_COUNT;\n        for (int i = 0; i < BIT_COUNT; i++) {\n          if (maxBytes >= n) {\n            break;\n          }\n          maxBytes *= 2;\n        }\n        for (int i = 0; i < BIT_COUNT; i++) {\n          if (i >= shift) {\n            break;\n          }\n          n *= 2;\n        }\n      \n        int result = 0;\n        int byteVal = 1;\n        for (int i = 0; i < BIT_COUNT; i++) {\n          if (i >= maxBytes) break;\n          if (modi(n, 2) > 0) { result += byteVal; }\n          n = int(n / 2);\n          byteVal *= 2;\n        }\n        return result;\n      }\n      \n      int bitwiseSignedRightShift(int num, int shifts) {\n        return int(floor(float(num) / pow(2.0, float(shifts))));\n      }\n      \n      int bitwiseZeroFillRightShift(int n, int shift) {\n        int maxBytes = BIT_COUNT;\n        for (int i = 0; i < BIT_COUNT; i++) {\n          if (maxBytes >= n) {\n            break;\n          }\n          maxBytes *= 2;\n        }\n        for (int i = 0; i < BIT_COUNT; i++) {\n          if (i >= shift) {\n            break;\n          }\n          n /= 2;\n        }\n        int result = 0;\n        int byteVal = 1;\n        for (int i = 0; i < BIT_COUNT; i++) {\n          if (i >= maxBytes) break;\n          if (modi(n, 2) > 0) { result += byteVal; }\n          n = int(n / 2);\n          byteVal *= 2;\n        }\n        return result;\n      }\n      \n      vec2 integerMod(vec2 x, float y) {\n        vec2 res = floor(mod(x, y));\n        return res * step(1.0 - floor(y), -res);\n      }\n      \n      vec3 integerMod(vec3 x, float y) {\n        vec3 res = floor(mod(x, y));\n        return res * step(1.0 - floor(y), -res);\n      }\n      \n      vec4 integerMod(vec4 x, vec4 y) {\n        vec4 res = floor(mod(x, y));\n        return res * step(1.0 - floor(y), -res);\n      }\n      \n      float integerMod(float x, float y) {\n        float res = floor(mod(x, y));\n        return res * (res > floor(y) - 1.0 ? 0.0 : 1.0);\n      }\n      \n      int integerMod(int x, int y) {\n        return x - (y * int(x/y));\n      }\n      \n      __DIVIDE_WITH_INTEGER_CHECK__;\n      \n      // Here be dragons!\n      // DO NOT OPTIMIZE THIS CODE\n      // YOU WILL BREAK SOMETHING ON SOMEBODY'S MACHINE\n      // LEAVE IT AS IT IS, LEST YOU WASTE YOUR OWN TIME\n      const vec2 MAGIC_VEC = vec2(1.0, -256.0);\n      const vec4 SCALE_FACTOR = vec4(1.0, 256.0, 65536.0, 0.0);\n      const vec4 SCALE_FACTOR_INV = vec4(1.0, 0.00390625, 0.0000152587890625, 0.0); // 1, 1/256, 1/65536\n      float decode32(vec4 texel) {\n        __DECODE32_ENDIANNESS__;\n        texel *= 255.0;\n        vec2 gte128;\n        gte128.x = texel.b >= 128.0 ? 1.0 : 0.0;\n        gte128.y = texel.a >= 128.0 ? 1.0 : 0.0;\n        float exponent = 2.0 * texel.a - 127.0 + dot(gte128, MAGIC_VEC);\n        float res = exp2(round(exponent));\n        texel.b = texel.b - 128.0 * gte128.x;\n        res = dot(texel, SCALE_FACTOR) * exp2(round(exponent-23.0)) + res;\n        res *= gte128.y * -2.0 + 1.0;\n        return res;\n      }\n      \n      float decode16(vec4 texel, int index) {\n        int channel = integerMod(index, 2);\n        return texel[channel*2] * 255.0 + texel[channel*2 + 1] * 65280.0;\n      }\n      \n      float decode8(vec4 texel, int index) {\n        int channel = integerMod(index, 4);\n        return texel[channel] * 255.0;\n      }\n      \n      vec4 legacyEncode32(float f) {\n        float F = abs(f);\n        float sign = f < 0.0 ? 1.0 : 0.0;\n        float exponent = floor(log2(F));\n        float mantissa = (exp2(-exponent) * F);\n        // exponent += floor(log2(mantissa));\n        vec4 texel = vec4(F * exp2(23.0-exponent)) * SCALE_FACTOR_INV;\n        texel.rg = integerMod(texel.rg, 256.0);\n        texel.b = integerMod(texel.b, 128.0);\n        texel.a = exponent*0.5 + 63.5;\n        texel.ba += vec2(integerMod(exponent+127.0, 2.0), sign) * 128.0;\n        texel = floor(texel);\n        texel *= 0.003921569; // 1/255\n        __ENCODE32_ENDIANNESS__;\n        return texel;\n      }\n      \n      // https://github.com/gpujs/gpu.js/wiki/Encoder-details\n      vec4 encode32(float value) {\n        if (value == 0.0) return vec4(0, 0, 0, 0);\n      \n        float exponent;\n        float mantissa;\n        vec4  result;\n        float sgn;\n      \n        sgn = step(0.0, -value);\n        value = abs(value);\n      \n        exponent = floor(log2(value));\n      \n        mantissa = value*pow(2.0, -exponent)-1.0;\n        exponent = exponent+127.0;\n        result   = vec4(0,0,0,0);\n      \n        result.a = floor(exponent/2.0);\n        exponent = exponent - result.a*2.0;\n        result.a = result.a + 128.0*sgn;\n      \n        result.b = floor(mantissa * 128.0);\n        mantissa = mantissa - result.b / 128.0;\n        result.b = result.b + exponent*128.0;\n      \n        result.g = floor(mantissa*32768.0);\n        mantissa = mantissa - result.g/32768.0;\n      \n        result.r = floor(mantissa*8388608.0);\n        return result/255.0;\n      }\n      // Dragons end here\n      \n      int index;\n      ivec3 threadId;\n      \n      ivec3 indexTo3D(int idx, ivec3 texDim) {\n        int z = int(idx / (texDim.x * texDim.y));\n        idx -= z * int(texDim.x * texDim.y);\n        int y = int(idx / texDim.x);\n        int x = int(integerMod(idx, texDim.x));\n        return ivec3(x, y, z);\n      }\n      \n      float get32(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n        int index = x + texDim.x * (y + texDim.y * z);\n        int w = texSize.x;\n        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n        vec4 texel = texture(tex, st / vec2(texSize));\n        return decode32(texel);\n      }\n      \n      float get16(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n        int index = x + (texDim.x * (y + (texDim.y * z)));\n        int w = texSize.x * 2;\n        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n        vec4 texel = texture(tex, st / vec2(texSize.x * 2, texSize.y));\n        return decode16(texel, index);\n      }\n      \n      float get8(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n        int index = x + (texDim.x * (y + (texDim.y * z)));\n        int w = texSize.x * 4;\n        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n        vec4 texel = texture(tex, st / vec2(texSize.x * 4, texSize.y));\n        return decode8(texel, index);\n      }\n      \n      float getMemoryOptimized32(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n        int index = x + (texDim.x * (y + (texDim.y * z)));\n        int channel = integerMod(index, 4);\n        index = index / 4;\n        int w = texSize.x;\n        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n        index = index / 4;\n        vec4 texel = texture(tex, st / vec2(texSize));\n        return texel[channel];\n      }\n      \n      vec4 getImage2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n        int index = x + texDim.x * (y + texDim.y * z);\n        int w = texSize.x;\n        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n        return texture(tex, st / vec2(texSize));\n      }\n      \n      vec4 getImage3D(sampler2DArray tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n        int index = x + texDim.x * (y + texDim.y * z);\n        int w = texSize.x;\n        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n        return texture(tex, vec3(st / vec2(texSize), z));\n      }\n      \n      float getFloatFromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n        vec4 result = getImage2D(tex, texSize, texDim, z, y, x);\n        return result[0];\n      }\n      \n      vec2 getVec2FromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n        vec4 result = getImage2D(tex, texSize, texDim, z, y, x);\n        return vec2(result[0], result[1]);\n      }\n      \n      vec2 getMemoryOptimizedVec2(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n        int index = x + texDim.x * (y + texDim.y * z);\n        int channel = integerMod(index, 2);\n        index = index / 2;\n        int w = texSize.x;\n        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n        vec4 texel = texture(tex, st / vec2(texSize));\n        if (channel == 0) return vec2(texel.r, texel.g);\n        if (channel == 1) return vec2(texel.b, texel.a);\n        return vec2(0.0, 0.0);\n      }\n      \n      vec3 getVec3FromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n        vec4 result = getImage2D(tex, texSize, texDim, z, y, x);\n        return vec3(result[0], result[1], result[2]);\n      }\n      \n      vec3 getMemoryOptimizedVec3(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n        int fieldIndex = 3 * (x + texDim.x * (y + texDim.y * z));\n        int vectorIndex = fieldIndex / 4;\n        int vectorOffset = fieldIndex - vectorIndex * 4;\n        int readY = vectorIndex / texSize.x;\n        int readX = vectorIndex - readY * texSize.x;\n        vec4 tex1 = texture(tex, (vec2(readX, readY) + 0.5) / vec2(texSize));\n      \n        if (vectorOffset == 0) {\n          return tex1.xyz;\n        } else if (vectorOffset == 1) {\n          return tex1.yzw;\n        } else {\n          readX++;\n          if (readX >= texSize.x) {\n            readX = 0;\n            readY++;\n          }\n          vec4 tex2 = texture(tex, vec2(readX, readY) / vec2(texSize));\n          if (vectorOffset == 2) {\n            return vec3(tex1.z, tex1.w, tex2.x);\n          } else {\n            return vec3(tex1.w, tex2.x, tex2.y);\n          }\n        }\n      }\n      \n      vec4 getVec4FromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n        return getImage2D(tex, texSize, texDim, z, y, x);\n      }\n      \n      vec4 getMemoryOptimizedVec4(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n        int index = x + texDim.x * (y + texDim.y * z);\n        int channel = integerMod(index, 2);\n        int w = texSize.x;\n        vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n        vec4 texel = texture(tex, st / vec2(texSize));\n        return vec4(texel.r, texel.g, texel.b, texel.a);\n      }\n      \n      vec4 actualColor;\n      void color(float r, float g, float b, float a) {\n        actualColor = vec4(r,g,b,a);\n      }\n      \n      void color(float r, float g, float b) {\n        color(r,g,b,1.0);\n      }\n      \n      float modulo(float number, float divisor) {\n        if (number < 0.0) {\n          number = abs(number);\n          if (divisor < 0.0) {\n            divisor = abs(divisor);\n          }\n          return -mod(number, divisor);\n        }\n        if (divisor < 0.0) {\n          divisor = abs(divisor);\n        }\n        return mod(number, divisor);\n      }\n      \n      __INJECTED_NATIVE__;\n      __MAIN_CONSTANTS__;\n      __MAIN_ARGUMENTS__;\n      __KERNEL__;\n      \n      void main(void) {\n        index = int(vTexCoord.s * float(uTexSize.x)) + int(vTexCoord.t * float(uTexSize.y)) * uTexSize.x;\n        __MAIN_RESULT__;\n      }");module.exports={fragmentShader:fragmentShader};},{}],73:[function(require,module,exports){var _require174=require('../../utils'),utils=_require174.utils;var _require175=require('../web-gl/function-node'),WebGLFunctionNode=_require175.WebGLFunctionNode;var WebGL2FunctionNode=/*#__PURE__*/function(_WebGLFunctionNode){_inherits(WebGL2FunctionNode,_WebGLFunctionNode);var _super57=_createSuper(WebGL2FunctionNode);function WebGL2FunctionNode(){_classCallCheck(this,WebGL2FunctionNode);return _super57.apply(this,arguments);}_createClass(WebGL2FunctionNode,[{key:"astIdentifierExpression",value:function astIdentifierExpression(idtNode,retArr){if(idtNode.type!=='Identifier'){throw this.astErrorOutput('IdentifierExpression - not an Identifier',idtNode);}var type=this.getType(idtNode);var name=utils.sanitizeName(idtNode.name);if(idtNode.name==='Infinity'){retArr.push('intBitsToFloat(2139095039)');}else if(type==='Boolean'){if(this.argumentNames.indexOf(name)>-1){retArr.push("bool(user_".concat(name,")"));}else{retArr.push("user_".concat(name));}}else{retArr.push("user_".concat(name));}return retArr;}}]);return WebGL2FunctionNode;}(WebGLFunctionNode);module.exports={WebGL2FunctionNode:WebGL2FunctionNode};},{"../../utils":114,"../web-gl/function-node":38}],74:[function(require,module,exports){var _require176=require('./kernel-value/boolean'),WebGL2KernelValueBoolean=_require176.WebGL2KernelValueBoolean;var _require177=require('./kernel-value/float'),WebGL2KernelValueFloat=_require177.WebGL2KernelValueFloat;var _require178=require('./kernel-value/integer'),WebGL2KernelValueInteger=_require178.WebGL2KernelValueInteger;var _require179=require('./kernel-value/html-image'),WebGL2KernelValueHTMLImage=_require179.WebGL2KernelValueHTMLImage;var _require180=require('./kernel-value/dynamic-html-image'),WebGL2KernelValueDynamicHTMLImage=_require180.WebGL2KernelValueDynamicHTMLImage;var _require181=require('./kernel-value/html-image-array'),WebGL2KernelValueHTMLImageArray=_require181.WebGL2KernelValueHTMLImageArray;var _require182=require('./kernel-value/dynamic-html-image-array'),WebGL2KernelValueDynamicHTMLImageArray=_require182.WebGL2KernelValueDynamicHTMLImageArray;var _require183=require('./kernel-value/html-video'),WebGL2KernelValueHTMLVideo=_require183.WebGL2KernelValueHTMLVideo;var _require184=require('./kernel-value/dynamic-html-video'),WebGL2KernelValueDynamicHTMLVideo=_require184.WebGL2KernelValueDynamicHTMLVideo;var _require185=require('./kernel-value/single-input'),WebGL2KernelValueSingleInput=_require185.WebGL2KernelValueSingleInput;var _require186=require('./kernel-value/dynamic-single-input'),WebGL2KernelValueDynamicSingleInput=_require186.WebGL2KernelValueDynamicSingleInput;var _require187=require('./kernel-value/unsigned-input'),WebGL2KernelValueUnsignedInput=_require187.WebGL2KernelValueUnsignedInput;var _require188=require('./kernel-value/dynamic-unsigned-input'),WebGL2KernelValueDynamicUnsignedInput=_require188.WebGL2KernelValueDynamicUnsignedInput;var _require189=require('./kernel-value/memory-optimized-number-texture'),WebGL2KernelValueMemoryOptimizedNumberTexture=_require189.WebGL2KernelValueMemoryOptimizedNumberTexture;var _require190=require('./kernel-value/dynamic-memory-optimized-number-texture'),WebGL2KernelValueDynamicMemoryOptimizedNumberTexture=_require190.WebGL2KernelValueDynamicMemoryOptimizedNumberTexture;var _require191=require('./kernel-value/number-texture'),WebGL2KernelValueNumberTexture=_require191.WebGL2KernelValueNumberTexture;var _require192=require('./kernel-value/dynamic-number-texture'),WebGL2KernelValueDynamicNumberTexture=_require192.WebGL2KernelValueDynamicNumberTexture;var _require193=require('./kernel-value/single-array'),WebGL2KernelValueSingleArray=_require193.WebGL2KernelValueSingleArray;var _require194=require('./kernel-value/dynamic-single-array'),WebGL2KernelValueDynamicSingleArray=_require194.WebGL2KernelValueDynamicSingleArray;var _require195=require('./kernel-value/single-array1d-i'),WebGL2KernelValueSingleArray1DI=_require195.WebGL2KernelValueSingleArray1DI;var _require196=require('./kernel-value/dynamic-single-array1d-i'),WebGL2KernelValueDynamicSingleArray1DI=_require196.WebGL2KernelValueDynamicSingleArray1DI;var _require197=require('./kernel-value/single-array2d-i'),WebGL2KernelValueSingleArray2DI=_require197.WebGL2KernelValueSingleArray2DI;var _require198=require('./kernel-value/dynamic-single-array2d-i'),WebGL2KernelValueDynamicSingleArray2DI=_require198.WebGL2KernelValueDynamicSingleArray2DI;var _require199=require('./kernel-value/single-array3d-i'),WebGL2KernelValueSingleArray3DI=_require199.WebGL2KernelValueSingleArray3DI;var _require200=require('./kernel-value/dynamic-single-array3d-i'),WebGL2KernelValueDynamicSingleArray3DI=_require200.WebGL2KernelValueDynamicSingleArray3DI;var _require201=require('./kernel-value/single-array2'),WebGL2KernelValueSingleArray2=_require201.WebGL2KernelValueSingleArray2;var _require202=require('./kernel-value/single-array3'),WebGL2KernelValueSingleArray3=_require202.WebGL2KernelValueSingleArray3;var _require203=require('./kernel-value/single-array4'),WebGL2KernelValueSingleArray4=_require203.WebGL2KernelValueSingleArray4;var _require204=require('./kernel-value/unsigned-array'),WebGL2KernelValueUnsignedArray=_require204.WebGL2KernelValueUnsignedArray;var _require205=require('./kernel-value/dynamic-unsigned-array'),WebGL2KernelValueDynamicUnsignedArray=_require205.WebGL2KernelValueDynamicUnsignedArray;var kernelValueMaps={unsigned:{dynamic:{'Boolean':WebGL2KernelValueBoolean,'Integer':WebGL2KernelValueInteger,'Float':WebGL2KernelValueFloat,'Array':WebGL2KernelValueDynamicUnsignedArray,'Array(2)':false,'Array(3)':false,'Array(4)':false,'Array1D(2)':false,'Array1D(3)':false,'Array1D(4)':false,'Array2D(2)':false,'Array2D(3)':false,'Array2D(4)':false,'Array3D(2)':false,'Array3D(3)':false,'Array3D(4)':false,'Input':WebGL2KernelValueDynamicUnsignedInput,'NumberTexture':WebGL2KernelValueDynamicNumberTexture,'ArrayTexture(1)':WebGL2KernelValueDynamicNumberTexture,'ArrayTexture(2)':WebGL2KernelValueDynamicNumberTexture,'ArrayTexture(3)':WebGL2KernelValueDynamicNumberTexture,'ArrayTexture(4)':WebGL2KernelValueDynamicNumberTexture,'MemoryOptimizedNumberTexture':WebGL2KernelValueDynamicMemoryOptimizedNumberTexture,'HTMLCanvas':WebGL2KernelValueDynamicHTMLImage,'HTMLImage':WebGL2KernelValueDynamicHTMLImage,'HTMLImageArray':WebGL2KernelValueDynamicHTMLImageArray,'HTMLVideo':WebGL2KernelValueDynamicHTMLVideo},"static":{'Boolean':WebGL2KernelValueBoolean,'Float':WebGL2KernelValueFloat,'Integer':WebGL2KernelValueInteger,'Array':WebGL2KernelValueUnsignedArray,'Array(2)':false,'Array(3)':false,'Array(4)':false,'Array1D(2)':false,'Array1D(3)':false,'Array1D(4)':false,'Array2D(2)':false,'Array2D(3)':false,'Array2D(4)':false,'Array3D(2)':false,'Array3D(3)':false,'Array3D(4)':false,'Input':WebGL2KernelValueUnsignedInput,'NumberTexture':WebGL2KernelValueNumberTexture,'ArrayTexture(1)':WebGL2KernelValueNumberTexture,'ArrayTexture(2)':WebGL2KernelValueNumberTexture,'ArrayTexture(3)':WebGL2KernelValueNumberTexture,'ArrayTexture(4)':WebGL2KernelValueNumberTexture,'MemoryOptimizedNumberTexture':WebGL2KernelValueDynamicMemoryOptimizedNumberTexture,'HTMLCanvas':WebGL2KernelValueHTMLImage,'HTMLImage':WebGL2KernelValueHTMLImage,'HTMLImageArray':WebGL2KernelValueHTMLImageArray,'HTMLVideo':WebGL2KernelValueHTMLVideo}},single:{dynamic:{'Boolean':WebGL2KernelValueBoolean,'Integer':WebGL2KernelValueInteger,'Float':WebGL2KernelValueFloat,'Array':WebGL2KernelValueDynamicSingleArray,'Array(2)':WebGL2KernelValueSingleArray2,'Array(3)':WebGL2KernelValueSingleArray3,'Array(4)':WebGL2KernelValueSingleArray4,'Array1D(2)':WebGL2KernelValueDynamicSingleArray1DI,'Array1D(3)':WebGL2KernelValueDynamicSingleArray1DI,'Array1D(4)':WebGL2KernelValueDynamicSingleArray1DI,'Array2D(2)':WebGL2KernelValueDynamicSingleArray2DI,'Array2D(3)':WebGL2KernelValueDynamicSingleArray2DI,'Array2D(4)':WebGL2KernelValueDynamicSingleArray2DI,'Array3D(2)':WebGL2KernelValueDynamicSingleArray3DI,'Array3D(3)':WebGL2KernelValueDynamicSingleArray3DI,'Array3D(4)':WebGL2KernelValueDynamicSingleArray3DI,'Input':WebGL2KernelValueDynamicSingleInput,'NumberTexture':WebGL2KernelValueDynamicNumberTexture,'ArrayTexture(1)':WebGL2KernelValueDynamicNumberTexture,'ArrayTexture(2)':WebGL2KernelValueDynamicNumberTexture,'ArrayTexture(3)':WebGL2KernelValueDynamicNumberTexture,'ArrayTexture(4)':WebGL2KernelValueDynamicNumberTexture,'MemoryOptimizedNumberTexture':WebGL2KernelValueDynamicMemoryOptimizedNumberTexture,'HTMLCanvas':WebGL2KernelValueDynamicHTMLImage,'HTMLImage':WebGL2KernelValueDynamicHTMLImage,'HTMLImageArray':WebGL2KernelValueDynamicHTMLImageArray,'HTMLVideo':WebGL2KernelValueDynamicHTMLVideo},"static":{'Boolean':WebGL2KernelValueBoolean,'Float':WebGL2KernelValueFloat,'Integer':WebGL2KernelValueInteger,'Array':WebGL2KernelValueSingleArray,'Array(2)':WebGL2KernelValueSingleArray2,'Array(3)':WebGL2KernelValueSingleArray3,'Array(4)':WebGL2KernelValueSingleArray4,'Array1D(2)':WebGL2KernelValueSingleArray1DI,'Array1D(3)':WebGL2KernelValueSingleArray1DI,'Array1D(4)':WebGL2KernelValueSingleArray1DI,'Array2D(2)':WebGL2KernelValueSingleArray2DI,'Array2D(3)':WebGL2KernelValueSingleArray2DI,'Array2D(4)':WebGL2KernelValueSingleArray2DI,'Array3D(2)':WebGL2KernelValueSingleArray3DI,'Array3D(3)':WebGL2KernelValueSingleArray3DI,'Array3D(4)':WebGL2KernelValueSingleArray3DI,'Input':WebGL2KernelValueSingleInput,'NumberTexture':WebGL2KernelValueNumberTexture,'ArrayTexture(1)':WebGL2KernelValueNumberTexture,'ArrayTexture(2)':WebGL2KernelValueNumberTexture,'ArrayTexture(3)':WebGL2KernelValueNumberTexture,'ArrayTexture(4)':WebGL2KernelValueNumberTexture,'MemoryOptimizedNumberTexture':WebGL2KernelValueMemoryOptimizedNumberTexture,'HTMLCanvas':WebGL2KernelValueHTMLImage,'HTMLImage':WebGL2KernelValueHTMLImage,'HTMLImageArray':WebGL2KernelValueHTMLImageArray,'HTMLVideo':WebGL2KernelValueHTMLVideo}}};function lookupKernelValueType(type,dynamic,precision,value){if(!type){throw new Error('type missing');}if(!dynamic){throw new Error('dynamic missing');}if(!precision){throw new Error('precision missing');}if(value.type){type=value.type;}var types=kernelValueMaps[precision][dynamic];if(types[type]===false){return null;}else if(types[type]===undefined){throw new Error("Could not find a KernelValue for ".concat(type));}return types[type];}module.exports={kernelValueMaps:kernelValueMaps,lookupKernelValueType:lookupKernelValueType};},{"./kernel-value/boolean":75,"./kernel-value/dynamic-html-image":77,"./kernel-value/dynamic-html-image-array":76,"./kernel-value/dynamic-html-video":78,"./kernel-value/dynamic-memory-optimized-number-texture":79,"./kernel-value/dynamic-number-texture":80,"./kernel-value/dynamic-single-array":81,"./kernel-value/dynamic-single-array1d-i":82,"./kernel-value/dynamic-single-array2d-i":83,"./kernel-value/dynamic-single-array3d-i":84,"./kernel-value/dynamic-single-input":85,"./kernel-value/dynamic-unsigned-array":86,"./kernel-value/dynamic-unsigned-input":87,"./kernel-value/float":88,"./kernel-value/html-image":90,"./kernel-value/html-image-array":89,"./kernel-value/html-video":91,"./kernel-value/integer":92,"./kernel-value/memory-optimized-number-texture":93,"./kernel-value/number-texture":94,"./kernel-value/single-array":95,"./kernel-value/single-array1d-i":96,"./kernel-value/single-array2":97,"./kernel-value/single-array2d-i":98,"./kernel-value/single-array3":99,"./kernel-value/single-array3d-i":100,"./kernel-value/single-array4":101,"./kernel-value/single-input":102,"./kernel-value/unsigned-array":103,"./kernel-value/unsigned-input":104}],75:[function(require,module,exports){var _require206=require('../../web-gl/kernel-value/boolean'),WebGLKernelValueBoolean=_require206.WebGLKernelValueBoolean;var WebGL2KernelValueBoolean=/*#__PURE__*/function(_WebGLKernelValueBool){_inherits(WebGL2KernelValueBoolean,_WebGLKernelValueBool);var _super58=_createSuper(WebGL2KernelValueBoolean);function WebGL2KernelValueBoolean(){_classCallCheck(this,WebGL2KernelValueBoolean);return _super58.apply(this,arguments);}return WebGL2KernelValueBoolean;}(WebGLKernelValueBoolean);module.exports={WebGL2KernelValueBoolean:WebGL2KernelValueBoolean};},{"../../web-gl/kernel-value/boolean":41}],76:[function(require,module,exports){var _require207=require('../../../utils'),utils=_require207.utils;var _require208=require('./html-image-array'),WebGL2KernelValueHTMLImageArray=_require208.WebGL2KernelValueHTMLImageArray;var WebGL2KernelValueDynamicHTMLImageArray=/*#__PURE__*/function(_WebGL2KernelValueHTM){_inherits(WebGL2KernelValueDynamicHTMLImageArray,_WebGL2KernelValueHTM);var _super59=_createSuper(WebGL2KernelValueDynamicHTMLImageArray);function WebGL2KernelValueDynamicHTMLImageArray(){_classCallCheck(this,WebGL2KernelValueDynamicHTMLImageArray);return _super59.apply(this,arguments);}_createClass(WebGL2KernelValueDynamicHTMLImageArray,[{key:"getSource",value:function getSource(){var variablePrecision=this.getVariablePrecisionString();return utils.linesToString(["uniform ".concat(variablePrecision," sampler2DArray ").concat(this.id),"uniform ".concat(variablePrecision," ivec2 ").concat(this.sizeId),"uniform ".concat(variablePrecision," ivec3 ").concat(this.dimensionsId)]);}},{key:"updateValue",value:function updateValue(images){var _images$=images[0],width=_images$.width,height=_images$.height;this.checkSize(width,height);this.dimensions=[width,height,images.length];this.textureSize=[width,height];this.kernel.setUniform3iv(this.dimensionsId,this.dimensions);this.kernel.setUniform2iv(this.sizeId,this.textureSize);_get(_getPrototypeOf(WebGL2KernelValueDynamicHTMLImageArray.prototype),"updateValue",this).call(this,images);}}]);return WebGL2KernelValueDynamicHTMLImageArray;}(WebGL2KernelValueHTMLImageArray);module.exports={WebGL2KernelValueDynamicHTMLImageArray:WebGL2KernelValueDynamicHTMLImageArray};},{"../../../utils":114,"./html-image-array":89}],77:[function(require,module,exports){var _require209=require('../../../utils'),utils=_require209.utils;var _require210=require('../../web-gl/kernel-value/dynamic-html-image'),WebGLKernelValueDynamicHTMLImage=_require210.WebGLKernelValueDynamicHTMLImage;var WebGL2KernelValueDynamicHTMLImage=/*#__PURE__*/function(_WebGLKernelValueDyna2){_inherits(WebGL2KernelValueDynamicHTMLImage,_WebGLKernelValueDyna2);var _super60=_createSuper(WebGL2KernelValueDynamicHTMLImage);function WebGL2KernelValueDynamicHTMLImage(){_classCallCheck(this,WebGL2KernelValueDynamicHTMLImage);return _super60.apply(this,arguments);}_createClass(WebGL2KernelValueDynamicHTMLImage,[{key:"getSource",value:function getSource(){var variablePrecision=this.getVariablePrecisionString();return utils.linesToString(["uniform ".concat(variablePrecision," sampler2D ").concat(this.id),"uniform ".concat(variablePrecision," ivec2 ").concat(this.sizeId),"uniform ".concat(variablePrecision," ivec3 ").concat(this.dimensionsId)]);}}]);return WebGL2KernelValueDynamicHTMLImage;}(WebGLKernelValueDynamicHTMLImage);module.exports={WebGL2KernelValueDynamicHTMLImage:WebGL2KernelValueDynamicHTMLImage};},{"../../../utils":114,"../../web-gl/kernel-value/dynamic-html-image":42}],78:[function(require,module,exports){var _require211=require('../../../utils'),utils=_require211.utils;var _require212=require('./dynamic-html-image'),WebGL2KernelValueDynamicHTMLImage=_require212.WebGL2KernelValueDynamicHTMLImage;var WebGL2KernelValueDynamicHTMLVideo=/*#__PURE__*/function(_WebGL2KernelValueDyn){_inherits(WebGL2KernelValueDynamicHTMLVideo,_WebGL2KernelValueDyn);var _super61=_createSuper(WebGL2KernelValueDynamicHTMLVideo);function WebGL2KernelValueDynamicHTMLVideo(){_classCallCheck(this,WebGL2KernelValueDynamicHTMLVideo);return _super61.apply(this,arguments);}return WebGL2KernelValueDynamicHTMLVideo;}(WebGL2KernelValueDynamicHTMLImage);module.exports={WebGL2KernelValueDynamicHTMLVideo:WebGL2KernelValueDynamicHTMLVideo};},{"../../../utils":114,"./dynamic-html-image":77}],79:[function(require,module,exports){var _require213=require('../../../utils'),utils=_require213.utils;var _require214=require('../../web-gl/kernel-value/dynamic-memory-optimized-number-texture'),WebGLKernelValueDynamicMemoryOptimizedNumberTexture=_require214.WebGLKernelValueDynamicMemoryOptimizedNumberTexture;var WebGL2KernelValueDynamicMemoryOptimizedNumberTexture=/*#__PURE__*/function(_WebGLKernelValueDyna3){_inherits(WebGL2KernelValueDynamicMemoryOptimizedNumberTexture,_WebGLKernelValueDyna3);var _super62=_createSuper(WebGL2KernelValueDynamicMemoryOptimizedNumberTexture);function WebGL2KernelValueDynamicMemoryOptimizedNumberTexture(){_classCallCheck(this,WebGL2KernelValueDynamicMemoryOptimizedNumberTexture);return _super62.apply(this,arguments);}_createClass(WebGL2KernelValueDynamicMemoryOptimizedNumberTexture,[{key:"getSource",value:function getSource(){return utils.linesToString(["uniform sampler2D ".concat(this.id),"uniform ivec2 ".concat(this.sizeId),"uniform ivec3 ".concat(this.dimensionsId)]);}}]);return WebGL2KernelValueDynamicMemoryOptimizedNumberTexture;}(WebGLKernelValueDynamicMemoryOptimizedNumberTexture);module.exports={WebGL2KernelValueDynamicMemoryOptimizedNumberTexture:WebGL2KernelValueDynamicMemoryOptimizedNumberTexture};},{"../../../utils":114,"../../web-gl/kernel-value/dynamic-memory-optimized-number-texture":44}],80:[function(require,module,exports){var _require215=require('../../../utils'),utils=_require215.utils;var _require216=require('../../web-gl/kernel-value/dynamic-number-texture'),WebGLKernelValueDynamicNumberTexture=_require216.WebGLKernelValueDynamicNumberTexture;var WebGL2KernelValueDynamicNumberTexture=/*#__PURE__*/function(_WebGLKernelValueDyna4){_inherits(WebGL2KernelValueDynamicNumberTexture,_WebGLKernelValueDyna4);var _super63=_createSuper(WebGL2KernelValueDynamicNumberTexture);function WebGL2KernelValueDynamicNumberTexture(){_classCallCheck(this,WebGL2KernelValueDynamicNumberTexture);return _super63.apply(this,arguments);}_createClass(WebGL2KernelValueDynamicNumberTexture,[{key:"getSource",value:function getSource(){var variablePrecision=this.getVariablePrecisionString();return utils.linesToString(["uniform ".concat(variablePrecision," sampler2D ").concat(this.id),"uniform ".concat(variablePrecision," ivec2 ").concat(this.sizeId),"uniform ".concat(variablePrecision," ivec3 ").concat(this.dimensionsId)]);}}]);return WebGL2KernelValueDynamicNumberTexture;}(WebGLKernelValueDynamicNumberTexture);module.exports={WebGL2KernelValueDynamicNumberTexture:WebGL2KernelValueDynamicNumberTexture};},{"../../../utils":114,"../../web-gl/kernel-value/dynamic-number-texture":45}],81:[function(require,module,exports){var _require217=require('../../../utils'),utils=_require217.utils;var _require218=require('../../web-gl2/kernel-value/single-array'),WebGL2KernelValueSingleArray=_require218.WebGL2KernelValueSingleArray;var WebGL2KernelValueDynamicSingleArray=/*#__PURE__*/function(_WebGL2KernelValueSin){_inherits(WebGL2KernelValueDynamicSingleArray,_WebGL2KernelValueSin);var _super64=_createSuper(WebGL2KernelValueDynamicSingleArray);function WebGL2KernelValueDynamicSingleArray(){_classCallCheck(this,WebGL2KernelValueDynamicSingleArray);return _super64.apply(this,arguments);}_createClass(WebGL2KernelValueDynamicSingleArray,[{key:"getSource",value:function getSource(){var variablePrecision=this.getVariablePrecisionString();return utils.linesToString(["uniform ".concat(variablePrecision," sampler2D ").concat(this.id),"uniform ".concat(variablePrecision," ivec2 ").concat(this.sizeId),"uniform ".concat(variablePrecision," ivec3 ").concat(this.dimensionsId)]);}},{key:"updateValue",value:function updateValue(value){this.dimensions=utils.getDimensions(value,true);this.textureSize=utils.getMemoryOptimizedFloatTextureSize(this.dimensions,this.bitRatio);this.uploadArrayLength=this.textureSize[0]*this.textureSize[1]*this.bitRatio;this.checkSize(this.textureSize[0],this.textureSize[1]);this.uploadValue=new Float32Array(this.uploadArrayLength);this.kernel.setUniform3iv(this.dimensionsId,this.dimensions);this.kernel.setUniform2iv(this.sizeId,this.textureSize);_get(_getPrototypeOf(WebGL2KernelValueDynamicSingleArray.prototype),"updateValue",this).call(this,value);}}]);return WebGL2KernelValueDynamicSingleArray;}(WebGL2KernelValueSingleArray);module.exports={WebGL2KernelValueDynamicSingleArray:WebGL2KernelValueDynamicSingleArray};},{"../../../utils":114,"../../web-gl2/kernel-value/single-array":95}],82:[function(require,module,exports){var _require219=require('../../../utils'),utils=_require219.utils;var _require220=require('../../web-gl2/kernel-value/single-array1d-i'),WebGL2KernelValueSingleArray1DI=_require220.WebGL2KernelValueSingleArray1DI;var WebGL2KernelValueDynamicSingleArray1DI=/*#__PURE__*/function(_WebGL2KernelValueSin2){_inherits(WebGL2KernelValueDynamicSingleArray1DI,_WebGL2KernelValueSin2);var _super65=_createSuper(WebGL2KernelValueDynamicSingleArray1DI);function WebGL2KernelValueDynamicSingleArray1DI(){_classCallCheck(this,WebGL2KernelValueDynamicSingleArray1DI);return _super65.apply(this,arguments);}_createClass(WebGL2KernelValueDynamicSingleArray1DI,[{key:"getSource",value:function getSource(){var variablePrecision=this.getVariablePrecisionString();return utils.linesToString(["uniform ".concat(variablePrecision," sampler2D ").concat(this.id),"uniform ".concat(variablePrecision," ivec2 ").concat(this.sizeId),"uniform ".concat(variablePrecision," ivec3 ").concat(this.dimensionsId)]);}},{key:"updateValue",value:function updateValue(value){this.setShape(value);this.kernel.setUniform3iv(this.dimensionsId,this.dimensions);this.kernel.setUniform2iv(this.sizeId,this.textureSize);_get(_getPrototypeOf(WebGL2KernelValueDynamicSingleArray1DI.prototype),"updateValue",this).call(this,value);}}]);return WebGL2KernelValueDynamicSingleArray1DI;}(WebGL2KernelValueSingleArray1DI);module.exports={WebGL2KernelValueDynamicSingleArray1DI:WebGL2KernelValueDynamicSingleArray1DI};},{"../../../utils":114,"../../web-gl2/kernel-value/single-array1d-i":96}],83:[function(require,module,exports){var _require221=require('../../../utils'),utils=_require221.utils;var _require222=require('../../web-gl2/kernel-value/single-array2d-i'),WebGL2KernelValueSingleArray2DI=_require222.WebGL2KernelValueSingleArray2DI;var WebGL2KernelValueDynamicSingleArray2DI=/*#__PURE__*/function(_WebGL2KernelValueSin3){_inherits(WebGL2KernelValueDynamicSingleArray2DI,_WebGL2KernelValueSin3);var _super66=_createSuper(WebGL2KernelValueDynamicSingleArray2DI);function WebGL2KernelValueDynamicSingleArray2DI(){_classCallCheck(this,WebGL2KernelValueDynamicSingleArray2DI);return _super66.apply(this,arguments);}_createClass(WebGL2KernelValueDynamicSingleArray2DI,[{key:"getSource",value:function getSource(){var variablePrecision=this.getVariablePrecisionString();return utils.linesToString(["uniform ".concat(variablePrecision," sampler2D ").concat(this.id),"uniform ".concat(variablePrecision," ivec2 ").concat(this.sizeId),"uniform ".concat(variablePrecision," ivec3 ").concat(this.dimensionsId)]);}},{key:"updateValue",value:function updateValue(value){this.setShape(value);this.kernel.setUniform3iv(this.dimensionsId,this.dimensions);this.kernel.setUniform2iv(this.sizeId,this.textureSize);_get(_getPrototypeOf(WebGL2KernelValueDynamicSingleArray2DI.prototype),"updateValue",this).call(this,value);}}]);return WebGL2KernelValueDynamicSingleArray2DI;}(WebGL2KernelValueSingleArray2DI);module.exports={WebGL2KernelValueDynamicSingleArray2DI:WebGL2KernelValueDynamicSingleArray2DI};},{"../../../utils":114,"../../web-gl2/kernel-value/single-array2d-i":98}],84:[function(require,module,exports){var _require223=require('../../../utils'),utils=_require223.utils;var _require224=require('../../web-gl2/kernel-value/single-array3d-i'),WebGL2KernelValueSingleArray3DI=_require224.WebGL2KernelValueSingleArray3DI;var WebGL2KernelValueDynamicSingleArray3DI=/*#__PURE__*/function(_WebGL2KernelValueSin4){_inherits(WebGL2KernelValueDynamicSingleArray3DI,_WebGL2KernelValueSin4);var _super67=_createSuper(WebGL2KernelValueDynamicSingleArray3DI);function WebGL2KernelValueDynamicSingleArray3DI(){_classCallCheck(this,WebGL2KernelValueDynamicSingleArray3DI);return _super67.apply(this,arguments);}_createClass(WebGL2KernelValueDynamicSingleArray3DI,[{key:"getSource",value:function getSource(){var variablePrecision=this.getVariablePrecisionString();return utils.linesToString(["uniform ".concat(variablePrecision," sampler2D ").concat(this.id),"uniform ".concat(variablePrecision," ivec2 ").concat(this.sizeId),"uniform ".concat(variablePrecision," ivec3 ").concat(this.dimensionsId)]);}},{key:"updateValue",value:function updateValue(value){this.setShape(value);this.kernel.setUniform3iv(this.dimensionsId,this.dimensions);this.kernel.setUniform2iv(this.sizeId,this.textureSize);_get(_getPrototypeOf(WebGL2KernelValueDynamicSingleArray3DI.prototype),"updateValue",this).call(this,value);}}]);return WebGL2KernelValueDynamicSingleArray3DI;}(WebGL2KernelValueSingleArray3DI);module.exports={WebGL2KernelValueDynamicSingleArray3DI:WebGL2KernelValueDynamicSingleArray3DI};},{"../../../utils":114,"../../web-gl2/kernel-value/single-array3d-i":100}],85:[function(require,module,exports){var _require225=require('../../../utils'),utils=_require225.utils;var _require226=require('../../web-gl2/kernel-value/single-input'),WebGL2KernelValueSingleInput=_require226.WebGL2KernelValueSingleInput;var WebGL2KernelValueDynamicSingleInput=/*#__PURE__*/function(_WebGL2KernelValueSin5){_inherits(WebGL2KernelValueDynamicSingleInput,_WebGL2KernelValueSin5);var _super68=_createSuper(WebGL2KernelValueDynamicSingleInput);function WebGL2KernelValueDynamicSingleInput(){_classCallCheck(this,WebGL2KernelValueDynamicSingleInput);return _super68.apply(this,arguments);}_createClass(WebGL2KernelValueDynamicSingleInput,[{key:"getSource",value:function getSource(){var variablePrecision=this.getVariablePrecisionString();return utils.linesToString(["uniform ".concat(variablePrecision," sampler2D ").concat(this.id),"uniform ".concat(variablePrecision," ivec2 ").concat(this.sizeId),"uniform ".concat(variablePrecision," ivec3 ").concat(this.dimensionsId)]);}},{key:"updateValue",value:function updateValue(value){var _value$size7=_slicedToArray(value.size,3),w=_value$size7[0],h=_value$size7[1],d=_value$size7[2];this.dimensions=new Int32Array([w||1,h||1,d||1]);this.textureSize=utils.getMemoryOptimizedFloatTextureSize(this.dimensions,this.bitRatio);this.uploadArrayLength=this.textureSize[0]*this.textureSize[1]*this.bitRatio;this.checkSize(this.textureSize[0],this.textureSize[1]);this.uploadValue=new Float32Array(this.uploadArrayLength);this.kernel.setUniform3iv(this.dimensionsId,this.dimensions);this.kernel.setUniform2iv(this.sizeId,this.textureSize);_get(_getPrototypeOf(WebGL2KernelValueDynamicSingleInput.prototype),"updateValue",this).call(this,value);}}]);return WebGL2KernelValueDynamicSingleInput;}(WebGL2KernelValueSingleInput);module.exports={WebGL2KernelValueDynamicSingleInput:WebGL2KernelValueDynamicSingleInput};},{"../../../utils":114,"../../web-gl2/kernel-value/single-input":102}],86:[function(require,module,exports){var _require227=require('../../../utils'),utils=_require227.utils;var _require228=require('../../web-gl/kernel-value/dynamic-unsigned-array'),WebGLKernelValueDynamicUnsignedArray=_require228.WebGLKernelValueDynamicUnsignedArray;var WebGL2KernelValueDynamicUnsignedArray=/*#__PURE__*/function(_WebGLKernelValueDyna5){_inherits(WebGL2KernelValueDynamicUnsignedArray,_WebGLKernelValueDyna5);var _super69=_createSuper(WebGL2KernelValueDynamicUnsignedArray);function WebGL2KernelValueDynamicUnsignedArray(){_classCallCheck(this,WebGL2KernelValueDynamicUnsignedArray);return _super69.apply(this,arguments);}_createClass(WebGL2KernelValueDynamicUnsignedArray,[{key:"getSource",value:function getSource(){var variablePrecision=this.getVariablePrecisionString();return utils.linesToString(["uniform ".concat(variablePrecision," sampler2D ").concat(this.id),"uniform ".concat(variablePrecision," ivec2 ").concat(this.sizeId),"uniform ".concat(variablePrecision," ivec3 ").concat(this.dimensionsId)]);}}]);return WebGL2KernelValueDynamicUnsignedArray;}(WebGLKernelValueDynamicUnsignedArray);module.exports={WebGL2KernelValueDynamicUnsignedArray:WebGL2KernelValueDynamicUnsignedArray};},{"../../../utils":114,"../../web-gl/kernel-value/dynamic-unsigned-array":51}],87:[function(require,module,exports){var _require229=require('../../../utils'),utils=_require229.utils;var _require230=require('../../web-gl/kernel-value/dynamic-unsigned-input'),WebGLKernelValueDynamicUnsignedInput=_require230.WebGLKernelValueDynamicUnsignedInput;var WebGL2KernelValueDynamicUnsignedInput=/*#__PURE__*/function(_WebGLKernelValueDyna6){_inherits(WebGL2KernelValueDynamicUnsignedInput,_WebGLKernelValueDyna6);var _super70=_createSuper(WebGL2KernelValueDynamicUnsignedInput);function WebGL2KernelValueDynamicUnsignedInput(){_classCallCheck(this,WebGL2KernelValueDynamicUnsignedInput);return _super70.apply(this,arguments);}_createClass(WebGL2KernelValueDynamicUnsignedInput,[{key:"getSource",value:function getSource(){var variablePrecision=this.getVariablePrecisionString();return utils.linesToString(["uniform ".concat(variablePrecision," sampler2D ").concat(this.id),"uniform ".concat(variablePrecision," ivec2 ").concat(this.sizeId),"uniform ".concat(variablePrecision," ivec3 ").concat(this.dimensionsId)]);}}]);return WebGL2KernelValueDynamicUnsignedInput;}(WebGLKernelValueDynamicUnsignedInput);module.exports={WebGL2KernelValueDynamicUnsignedInput:WebGL2KernelValueDynamicUnsignedInput};},{"../../../utils":114,"../../web-gl/kernel-value/dynamic-unsigned-input":52}],88:[function(require,module,exports){var _require231=require('../../../utils'),utils=_require231.utils;var _require232=require('../../web-gl/kernel-value/float'),WebGLKernelValueFloat=_require232.WebGLKernelValueFloat;var WebGL2KernelValueFloat=/*#__PURE__*/function(_WebGLKernelValueFloa){_inherits(WebGL2KernelValueFloat,_WebGLKernelValueFloa);var _super71=_createSuper(WebGL2KernelValueFloat);function WebGL2KernelValueFloat(){_classCallCheck(this,WebGL2KernelValueFloat);return _super71.apply(this,arguments);}return WebGL2KernelValueFloat;}(WebGLKernelValueFloat);module.exports={WebGL2KernelValueFloat:WebGL2KernelValueFloat};},{"../../../utils":114,"../../web-gl/kernel-value/float":53}],89:[function(require,module,exports){var _require233=require('../../../utils'),utils=_require233.utils;var _require234=require('../../web-gl/kernel-value/array'),WebGLKernelArray=_require234.WebGLKernelArray;var WebGL2KernelValueHTMLImageArray=/*#__PURE__*/function(_WebGLKernelArray11){_inherits(WebGL2KernelValueHTMLImageArray,_WebGLKernelArray11);var _super72=_createSuper(WebGL2KernelValueHTMLImageArray);function WebGL2KernelValueHTMLImageArray(value,settings){var _this47;_classCallCheck(this,WebGL2KernelValueHTMLImageArray);_this47=_super72.call(this,value,settings);_this47.checkSize(value[0].width,value[0].height);_this47.dimensions=[value[0].width,value[0].height,value.length];_this47.textureSize=[value[0].width,value[0].height];return _this47;}_createClass(WebGL2KernelValueHTMLImageArray,[{key:"defineTexture",value:function defineTexture(){var gl=this.context;gl.activeTexture(this.contextHandle);gl.bindTexture(gl.TEXTURE_2D_ARRAY,this.texture);gl.texParameteri(gl.TEXTURE_2D_ARRAY,gl.TEXTURE_MAG_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D_ARRAY,gl.TEXTURE_MIN_FILTER,gl.NEAREST);}},{key:"getStringValueHandler",value:function getStringValueHandler(){return"const uploadValue_".concat(this.name," = ").concat(this.varName,";\n");}},{key:"getSource",value:function getSource(){var variablePrecision=this.getVariablePrecisionString();return utils.linesToString(["uniform ".concat(variablePrecision," sampler2DArray ").concat(this.id),"".concat(variablePrecision," ivec2 ").concat(this.sizeId," = ivec2(").concat(this.textureSize[0],", ").concat(this.textureSize[1],")"),"".concat(variablePrecision," ivec3 ").concat(this.dimensionsId," = ivec3(").concat(this.dimensions[0],", ").concat(this.dimensions[1],", ").concat(this.dimensions[2],")")]);}},{key:"updateValue",value:function updateValue(images){var gl=this.context;gl.activeTexture(this.contextHandle);gl.bindTexture(gl.TEXTURE_2D_ARRAY,this.texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.texImage3D(gl.TEXTURE_2D_ARRAY,0,gl.RGBA,images[0].width,images[0].height,images.length,0,gl.RGBA,gl.UNSIGNED_BYTE,null);for(var i=0;i<images.length;i++){var xOffset=0;var yOffset=0;var imageDepth=1;gl.texSubImage3D(gl.TEXTURE_2D_ARRAY,0,xOffset,yOffset,i,images[i].width,images[i].height,imageDepth,gl.RGBA,gl.UNSIGNED_BYTE,this.uploadValue=images[i]);}this.kernel.setUniform1i(this.id,this.index);}}]);return WebGL2KernelValueHTMLImageArray;}(WebGLKernelArray);module.exports={WebGL2KernelValueHTMLImageArray:WebGL2KernelValueHTMLImageArray};},{"../../../utils":114,"../../web-gl/kernel-value/array":40}],90:[function(require,module,exports){var _require235=require('../../../utils'),utils=_require235.utils;var _require236=require('../../web-gl/kernel-value/html-image'),WebGLKernelValueHTMLImage=_require236.WebGLKernelValueHTMLImage;var WebGL2KernelValueHTMLImage=/*#__PURE__*/function(_WebGLKernelValueHTML3){_inherits(WebGL2KernelValueHTMLImage,_WebGLKernelValueHTML3);var _super73=_createSuper(WebGL2KernelValueHTMLImage);function WebGL2KernelValueHTMLImage(){_classCallCheck(this,WebGL2KernelValueHTMLImage);return _super73.apply(this,arguments);}_createClass(WebGL2KernelValueHTMLImage,[{key:"getSource",value:function getSource(){var variablePrecision=this.getVariablePrecisionString();return utils.linesToString(["uniform ".concat(variablePrecision," sampler2D ").concat(this.id),"".concat(variablePrecision," ivec2 ").concat(this.sizeId," = ivec2(").concat(this.textureSize[0],", ").concat(this.textureSize[1],")"),"".concat(variablePrecision," ivec3 ").concat(this.dimensionsId," = ivec3(").concat(this.dimensions[0],", ").concat(this.dimensions[1],", ").concat(this.dimensions[2],")")]);}}]);return WebGL2KernelValueHTMLImage;}(WebGLKernelValueHTMLImage);module.exports={WebGL2KernelValueHTMLImage:WebGL2KernelValueHTMLImage};},{"../../../utils":114,"../../web-gl/kernel-value/html-image":54}],91:[function(require,module,exports){var _require237=require('../../../utils'),utils=_require237.utils;var _require238=require('./html-image'),WebGL2KernelValueHTMLImage=_require238.WebGL2KernelValueHTMLImage;var WebGL2KernelValueHTMLVideo=/*#__PURE__*/function(_WebGL2KernelValueHTM2){_inherits(WebGL2KernelValueHTMLVideo,_WebGL2KernelValueHTM2);var _super74=_createSuper(WebGL2KernelValueHTMLVideo);function WebGL2KernelValueHTMLVideo(){_classCallCheck(this,WebGL2KernelValueHTMLVideo);return _super74.apply(this,arguments);}return WebGL2KernelValueHTMLVideo;}(WebGL2KernelValueHTMLImage);module.exports={WebGL2KernelValueHTMLVideo:WebGL2KernelValueHTMLVideo};},{"../../../utils":114,"./html-image":90}],92:[function(require,module,exports){var _require239=require('../../web-gl/kernel-value/integer'),WebGLKernelValueInteger=_require239.WebGLKernelValueInteger;var WebGL2KernelValueInteger=/*#__PURE__*/function(_WebGLKernelValueInte){_inherits(WebGL2KernelValueInteger,_WebGLKernelValueInte);var _super75=_createSuper(WebGL2KernelValueInteger);function WebGL2KernelValueInteger(){_classCallCheck(this,WebGL2KernelValueInteger);return _super75.apply(this,arguments);}_createClass(WebGL2KernelValueInteger,[{key:"getSource",value:function getSource(value){var variablePrecision=this.getVariablePrecisionString();if(this.origin==='constants'){return"const ".concat(variablePrecision," int ").concat(this.id," = ").concat(parseInt(value),";\n");}return"uniform ".concat(variablePrecision," int ").concat(this.id,";\n");}},{key:"updateValue",value:function updateValue(value){if(this.origin==='constants')return;this.kernel.setUniform1i(this.id,this.uploadValue=value);}}]);return WebGL2KernelValueInteger;}(WebGLKernelValueInteger);module.exports={WebGL2KernelValueInteger:WebGL2KernelValueInteger};},{"../../web-gl/kernel-value/integer":57}],93:[function(require,module,exports){var _require240=require('../../../utils'),utils=_require240.utils;var _require241=require('../../web-gl/kernel-value/memory-optimized-number-texture'),WebGLKernelValueMemoryOptimizedNumberTexture=_require241.WebGLKernelValueMemoryOptimizedNumberTexture;var WebGL2KernelValueMemoryOptimizedNumberTexture=/*#__PURE__*/function(_WebGLKernelValueMemo2){_inherits(WebGL2KernelValueMemoryOptimizedNumberTexture,_WebGLKernelValueMemo2);var _super76=_createSuper(WebGL2KernelValueMemoryOptimizedNumberTexture);function WebGL2KernelValueMemoryOptimizedNumberTexture(){_classCallCheck(this,WebGL2KernelValueMemoryOptimizedNumberTexture);return _super76.apply(this,arguments);}_createClass(WebGL2KernelValueMemoryOptimizedNumberTexture,[{key:"getSource",value:function getSource(){var id=this.id,sizeId=this.sizeId,textureSize=this.textureSize,dimensionsId=this.dimensionsId,dimensions=this.dimensions;var variablePrecision=this.getVariablePrecisionString();return utils.linesToString(["uniform sampler2D ".concat(id),"".concat(variablePrecision," ivec2 ").concat(sizeId," = ivec2(").concat(textureSize[0],", ").concat(textureSize[1],")"),"".concat(variablePrecision," ivec3 ").concat(dimensionsId," = ivec3(").concat(dimensions[0],", ").concat(dimensions[1],", ").concat(dimensions[2],")")]);}}]);return WebGL2KernelValueMemoryOptimizedNumberTexture;}(WebGLKernelValueMemoryOptimizedNumberTexture);module.exports={WebGL2KernelValueMemoryOptimizedNumberTexture:WebGL2KernelValueMemoryOptimizedNumberTexture};},{"../../../utils":114,"../../web-gl/kernel-value/memory-optimized-number-texture":58}],94:[function(require,module,exports){var _require242=require('../../../utils'),utils=_require242.utils;var _require243=require('../../web-gl/kernel-value/number-texture'),WebGLKernelValueNumberTexture=_require243.WebGLKernelValueNumberTexture;var WebGL2KernelValueNumberTexture=/*#__PURE__*/function(_WebGLKernelValueNumb2){_inherits(WebGL2KernelValueNumberTexture,_WebGLKernelValueNumb2);var _super77=_createSuper(WebGL2KernelValueNumberTexture);function WebGL2KernelValueNumberTexture(){_classCallCheck(this,WebGL2KernelValueNumberTexture);return _super77.apply(this,arguments);}_createClass(WebGL2KernelValueNumberTexture,[{key:"getSource",value:function getSource(){var id=this.id,sizeId=this.sizeId,textureSize=this.textureSize,dimensionsId=this.dimensionsId,dimensions=this.dimensions;var variablePrecision=this.getVariablePrecisionString();return utils.linesToString(["uniform ".concat(variablePrecision," sampler2D ").concat(id),"".concat(variablePrecision," ivec2 ").concat(sizeId," = ivec2(").concat(textureSize[0],", ").concat(textureSize[1],")"),"".concat(variablePrecision," ivec3 ").concat(dimensionsId," = ivec3(").concat(dimensions[0],", ").concat(dimensions[1],", ").concat(dimensions[2],")")]);}}]);return WebGL2KernelValueNumberTexture;}(WebGLKernelValueNumberTexture);module.exports={WebGL2KernelValueNumberTexture:WebGL2KernelValueNumberTexture};},{"../../../utils":114,"../../web-gl/kernel-value/number-texture":59}],95:[function(require,module,exports){var _require244=require('../../../utils'),utils=_require244.utils;var _require245=require('../../web-gl/kernel-value/single-array'),WebGLKernelValueSingleArray=_require245.WebGLKernelValueSingleArray;var WebGL2KernelValueSingleArray=/*#__PURE__*/function(_WebGLKernelValueSing6){_inherits(WebGL2KernelValueSingleArray,_WebGLKernelValueSing6);var _super78=_createSuper(WebGL2KernelValueSingleArray);function WebGL2KernelValueSingleArray(){_classCallCheck(this,WebGL2KernelValueSingleArray);return _super78.apply(this,arguments);}_createClass(WebGL2KernelValueSingleArray,[{key:"getSource",value:function getSource(){var variablePrecision=this.getVariablePrecisionString();return utils.linesToString(["uniform ".concat(variablePrecision," sampler2D ").concat(this.id),"".concat(variablePrecision," ivec2 ").concat(this.sizeId," = ivec2(").concat(this.textureSize[0],", ").concat(this.textureSize[1],")"),"".concat(variablePrecision," ivec3 ").concat(this.dimensionsId," = ivec3(").concat(this.dimensions[0],", ").concat(this.dimensions[1],", ").concat(this.dimensions[2],")")]);}},{key:"updateValue",value:function updateValue(value){if(value.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(value.constructor);return;}var gl=this.context;utils.flattenTo(value,this.uploadValue);gl.activeTexture(this.contextHandle);gl.bindTexture(gl.TEXTURE_2D,this.texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA32F,this.textureSize[0],this.textureSize[1],0,gl.RGBA,gl.FLOAT,this.uploadValue);this.kernel.setUniform1i(this.id,this.index);}}]);return WebGL2KernelValueSingleArray;}(WebGLKernelValueSingleArray);module.exports={WebGL2KernelValueSingleArray:WebGL2KernelValueSingleArray};},{"../../../utils":114,"../../web-gl/kernel-value/single-array":60}],96:[function(require,module,exports){var _require246=require('../../../utils'),utils=_require246.utils;var _require247=require('../../web-gl/kernel-value/single-array1d-i'),WebGLKernelValueSingleArray1DI=_require247.WebGLKernelValueSingleArray1DI;var WebGL2KernelValueSingleArray1DI=/*#__PURE__*/function(_WebGLKernelValueSing7){_inherits(WebGL2KernelValueSingleArray1DI,_WebGLKernelValueSing7);var _super79=_createSuper(WebGL2KernelValueSingleArray1DI);function WebGL2KernelValueSingleArray1DI(){_classCallCheck(this,WebGL2KernelValueSingleArray1DI);return _super79.apply(this,arguments);}_createClass(WebGL2KernelValueSingleArray1DI,[{key:"updateValue",value:function updateValue(value){if(value.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(value.constructor);return;}var gl=this.context;utils.flattenTo(value,this.uploadValue);gl.activeTexture(this.contextHandle);gl.bindTexture(gl.TEXTURE_2D,this.texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA32F,this.textureSize[0],this.textureSize[1],0,gl.RGBA,gl.FLOAT,this.uploadValue);this.kernel.setUniform1i(this.id,this.index);}}]);return WebGL2KernelValueSingleArray1DI;}(WebGLKernelValueSingleArray1DI);module.exports={WebGL2KernelValueSingleArray1DI:WebGL2KernelValueSingleArray1DI};},{"../../../utils":114,"../../web-gl/kernel-value/single-array1d-i":61}],97:[function(require,module,exports){var _require248=require('../../web-gl/kernel-value/single-array2'),WebGLKernelValueSingleArray2=_require248.WebGLKernelValueSingleArray2;var WebGL2KernelValueSingleArray2=/*#__PURE__*/function(_WebGLKernelValueSing8){_inherits(WebGL2KernelValueSingleArray2,_WebGLKernelValueSing8);var _super80=_createSuper(WebGL2KernelValueSingleArray2);function WebGL2KernelValueSingleArray2(){_classCallCheck(this,WebGL2KernelValueSingleArray2);return _super80.apply(this,arguments);}return WebGL2KernelValueSingleArray2;}(WebGLKernelValueSingleArray2);module.exports={WebGL2KernelValueSingleArray2:WebGL2KernelValueSingleArray2};},{"../../web-gl/kernel-value/single-array2":62}],98:[function(require,module,exports){var _require249=require('../../../utils'),utils=_require249.utils;var _require250=require('../../web-gl/kernel-value/single-array2d-i'),WebGLKernelValueSingleArray2DI=_require250.WebGLKernelValueSingleArray2DI;var WebGL2KernelValueSingleArray2DI=/*#__PURE__*/function(_WebGLKernelValueSing9){_inherits(WebGL2KernelValueSingleArray2DI,_WebGLKernelValueSing9);var _super81=_createSuper(WebGL2KernelValueSingleArray2DI);function WebGL2KernelValueSingleArray2DI(){_classCallCheck(this,WebGL2KernelValueSingleArray2DI);return _super81.apply(this,arguments);}_createClass(WebGL2KernelValueSingleArray2DI,[{key:"updateValue",value:function updateValue(value){if(value.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(value.constructor);return;}var gl=this.context;utils.flattenTo(value,this.uploadValue);gl.activeTexture(this.contextHandle);gl.bindTexture(gl.TEXTURE_2D,this.texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA32F,this.textureSize[0],this.textureSize[1],0,gl.RGBA,gl.FLOAT,this.uploadValue);this.kernel.setUniform1i(this.id,this.index);}}]);return WebGL2KernelValueSingleArray2DI;}(WebGLKernelValueSingleArray2DI);module.exports={WebGL2KernelValueSingleArray2DI:WebGL2KernelValueSingleArray2DI};},{"../../../utils":114,"../../web-gl/kernel-value/single-array2d-i":63}],99:[function(require,module,exports){var _require251=require('../../web-gl/kernel-value/single-array3'),WebGLKernelValueSingleArray3=_require251.WebGLKernelValueSingleArray3;var WebGL2KernelValueSingleArray3=/*#__PURE__*/function(_WebGLKernelValueSing10){_inherits(WebGL2KernelValueSingleArray3,_WebGLKernelValueSing10);var _super82=_createSuper(WebGL2KernelValueSingleArray3);function WebGL2KernelValueSingleArray3(){_classCallCheck(this,WebGL2KernelValueSingleArray3);return _super82.apply(this,arguments);}return WebGL2KernelValueSingleArray3;}(WebGLKernelValueSingleArray3);module.exports={WebGL2KernelValueSingleArray3:WebGL2KernelValueSingleArray3};},{"../../web-gl/kernel-value/single-array3":64}],100:[function(require,module,exports){var _require252=require('../../../utils'),utils=_require252.utils;var _require253=require('../../web-gl/kernel-value/single-array3d-i'),WebGLKernelValueSingleArray3DI=_require253.WebGLKernelValueSingleArray3DI;var WebGL2KernelValueSingleArray3DI=/*#__PURE__*/function(_WebGLKernelValueSing11){_inherits(WebGL2KernelValueSingleArray3DI,_WebGLKernelValueSing11);var _super83=_createSuper(WebGL2KernelValueSingleArray3DI);function WebGL2KernelValueSingleArray3DI(){_classCallCheck(this,WebGL2KernelValueSingleArray3DI);return _super83.apply(this,arguments);}_createClass(WebGL2KernelValueSingleArray3DI,[{key:"updateValue",value:function updateValue(value){if(value.constructor!==this.initialValueConstructor){this.onUpdateValueMismatch(value.constructor);return;}var gl=this.context;utils.flattenTo(value,this.uploadValue);gl.activeTexture(this.contextHandle);gl.bindTexture(gl.TEXTURE_2D,this.texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA32F,this.textureSize[0],this.textureSize[1],0,gl.RGBA,gl.FLOAT,this.uploadValue);this.kernel.setUniform1i(this.id,this.index);}}]);return WebGL2KernelValueSingleArray3DI;}(WebGLKernelValueSingleArray3DI);module.exports={WebGL2KernelValueSingleArray3DI:WebGL2KernelValueSingleArray3DI};},{"../../../utils":114,"../../web-gl/kernel-value/single-array3d-i":65}],101:[function(require,module,exports){var _require254=require('../../web-gl/kernel-value/single-array4'),WebGLKernelValueSingleArray4=_require254.WebGLKernelValueSingleArray4;var WebGL2KernelValueSingleArray4=/*#__PURE__*/function(_WebGLKernelValueSing12){_inherits(WebGL2KernelValueSingleArray4,_WebGLKernelValueSing12);var _super84=_createSuper(WebGL2KernelValueSingleArray4);function WebGL2KernelValueSingleArray4(){_classCallCheck(this,WebGL2KernelValueSingleArray4);return _super84.apply(this,arguments);}return WebGL2KernelValueSingleArray4;}(WebGLKernelValueSingleArray4);module.exports={WebGL2KernelValueSingleArray4:WebGL2KernelValueSingleArray4};},{"../../web-gl/kernel-value/single-array4":66}],102:[function(require,module,exports){var _require255=require('../../../utils'),utils=_require255.utils;var _require256=require('../../web-gl/kernel-value/single-input'),WebGLKernelValueSingleInput=_require256.WebGLKernelValueSingleInput;var WebGL2KernelValueSingleInput=/*#__PURE__*/function(_WebGLKernelValueSing13){_inherits(WebGL2KernelValueSingleInput,_WebGLKernelValueSing13);var _super85=_createSuper(WebGL2KernelValueSingleInput);function WebGL2KernelValueSingleInput(){_classCallCheck(this,WebGL2KernelValueSingleInput);return _super85.apply(this,arguments);}_createClass(WebGL2KernelValueSingleInput,[{key:"getSource",value:function getSource(){var variablePrecision=this.getVariablePrecisionString();return utils.linesToString(["uniform ".concat(variablePrecision," sampler2D ").concat(this.id),"".concat(variablePrecision," ivec2 ").concat(this.sizeId," = ivec2(").concat(this.textureSize[0],", ").concat(this.textureSize[1],")"),"".concat(variablePrecision," ivec3 ").concat(this.dimensionsId," = ivec3(").concat(this.dimensions[0],", ").concat(this.dimensions[1],", ").concat(this.dimensions[2],")")]);}},{key:"updateValue",value:function updateValue(input){var gl=this.context;utils.flattenTo(input.value,this.uploadValue);gl.activeTexture(this.contextHandle);gl.bindTexture(gl.TEXTURE_2D,this.texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA32F,this.textureSize[0],this.textureSize[1],0,gl.RGBA,gl.FLOAT,this.uploadValue);this.kernel.setUniform1i(this.id,this.index);}}]);return WebGL2KernelValueSingleInput;}(WebGLKernelValueSingleInput);module.exports={WebGL2KernelValueSingleInput:WebGL2KernelValueSingleInput};},{"../../../utils":114,"../../web-gl/kernel-value/single-input":67}],103:[function(require,module,exports){var _require257=require('../../../utils'),utils=_require257.utils;var _require258=require('../../web-gl/kernel-value/unsigned-array'),WebGLKernelValueUnsignedArray=_require258.WebGLKernelValueUnsignedArray;var WebGL2KernelValueUnsignedArray=/*#__PURE__*/function(_WebGLKernelValueUnsi3){_inherits(WebGL2KernelValueUnsignedArray,_WebGLKernelValueUnsi3);var _super86=_createSuper(WebGL2KernelValueUnsignedArray);function WebGL2KernelValueUnsignedArray(){_classCallCheck(this,WebGL2KernelValueUnsignedArray);return _super86.apply(this,arguments);}_createClass(WebGL2KernelValueUnsignedArray,[{key:"getSource",value:function getSource(){var variablePrecision=this.getVariablePrecisionString();return utils.linesToString(["uniform ".concat(variablePrecision," sampler2D ").concat(this.id),"".concat(variablePrecision," ivec2 ").concat(this.sizeId," = ivec2(").concat(this.textureSize[0],", ").concat(this.textureSize[1],")"),"".concat(variablePrecision," ivec3 ").concat(this.dimensionsId," = ivec3(").concat(this.dimensions[0],", ").concat(this.dimensions[1],", ").concat(this.dimensions[2],")")]);}}]);return WebGL2KernelValueUnsignedArray;}(WebGLKernelValueUnsignedArray);module.exports={WebGL2KernelValueUnsignedArray:WebGL2KernelValueUnsignedArray};},{"../../../utils":114,"../../web-gl/kernel-value/unsigned-array":68}],104:[function(require,module,exports){var _require259=require('../../../utils'),utils=_require259.utils;var _require260=require('../../web-gl/kernel-value/unsigned-input'),WebGLKernelValueUnsignedInput=_require260.WebGLKernelValueUnsignedInput;var WebGL2KernelValueUnsignedInput=/*#__PURE__*/function(_WebGLKernelValueUnsi4){_inherits(WebGL2KernelValueUnsignedInput,_WebGLKernelValueUnsi4);var _super87=_createSuper(WebGL2KernelValueUnsignedInput);function WebGL2KernelValueUnsignedInput(){_classCallCheck(this,WebGL2KernelValueUnsignedInput);return _super87.apply(this,arguments);}_createClass(WebGL2KernelValueUnsignedInput,[{key:"getSource",value:function getSource(){var variablePrecision=this.getVariablePrecisionString();return utils.linesToString(["uniform ".concat(variablePrecision," sampler2D ").concat(this.id),"".concat(variablePrecision," ivec2 ").concat(this.sizeId," = ivec2(").concat(this.textureSize[0],", ").concat(this.textureSize[1],")"),"".concat(variablePrecision," ivec3 ").concat(this.dimensionsId," = ivec3(").concat(this.dimensions[0],", ").concat(this.dimensions[1],", ").concat(this.dimensions[2],")")]);}}]);return WebGL2KernelValueUnsignedInput;}(WebGLKernelValueUnsignedInput);module.exports={WebGL2KernelValueUnsignedInput:WebGL2KernelValueUnsignedInput};},{"../../../utils":114,"../../web-gl/kernel-value/unsigned-input":69}],105:[function(require,module,exports){var _require261=require('../web-gl/kernel'),WebGLKernel=_require261.WebGLKernel;var _require262=require('./function-node'),WebGL2FunctionNode=_require262.WebGL2FunctionNode;var _require263=require('../function-builder'),FunctionBuilder=_require263.FunctionBuilder;var _require264=require('../../utils'),utils=_require264.utils;var _require265=require('./fragment-shader'),fragmentShader=_require265.fragmentShader;var _require266=require('./vertex-shader'),vertexShader=_require266.vertexShader;var _require267=require('./kernel-value-maps'),_lookupKernelValueType2=_require267.lookupKernelValueType;var isSupported=null;var testCanvas=null;var testContext=null;var testExtensions=null;var features=null;var WebGL2Kernel=/*#__PURE__*/function(_WebGLKernel2){_inherits(WebGL2Kernel,_WebGLKernel2);var _super88=_createSuper(WebGL2Kernel);function WebGL2Kernel(){_classCallCheck(this,WebGL2Kernel);return _super88.apply(this,arguments);}_createClass(WebGL2Kernel,[{key:"initContext",value:function initContext(){var settings={alpha:false,depth:false,antialias:false};return this.canvas.getContext('webgl2',settings);}},{key:"initExtensions",value:function initExtensions(){this.extensions={EXT_color_buffer_float:this.context.getExtension('EXT_color_buffer_float'),OES_texture_float_linear:this.context.getExtension('OES_texture_float_linear')};}},{key:"validateSettings",value:function validateSettings(args){if(!this.validate){this.texSize=utils.getKernelTextureSize({optimizeFloatMemory:this.optimizeFloatMemory,precision:this.precision},this.output);return;}var features=this.constructor.features;if(this.precision==='single'&&!features.isFloatRead){throw new Error('Float texture outputs are not supported');}else if(!this.graphical&&this.precision===null){this.precision=features.isFloatRead?'single':'unsigned';}if(this.fixIntegerDivisionAccuracy===null){this.fixIntegerDivisionAccuracy=!features.isIntegerDivisionAccurate;}else if(this.fixIntegerDivisionAccuracy&&features.isIntegerDivisionAccurate){this.fixIntegerDivisionAccuracy=false;}this.checkOutput();if(!this.output||this.output.length===0){if(args.length!==1){throw new Error('Auto output only supported for kernels with only one input');}var argType=utils.getVariableType(args[0],this.strictIntegers);switch(argType){case'Array':this.output=utils.getDimensions(argType);break;case'NumberTexture':case'MemoryOptimizedNumberTexture':case'ArrayTexture(1)':case'ArrayTexture(2)':case'ArrayTexture(3)':case'ArrayTexture(4)':this.output=args[0].output;break;default:throw new Error('Auto output not supported for input type: '+argType);}}if(this.graphical){if(this.output.length!==2){throw new Error('Output must have 2 dimensions on graphical mode');}if(this.precision==='single'){console.warn('Cannot use graphical mode and single precision at the same time');this.precision='unsigned';}this.texSize=utils.clone(this.output);return;}else if(!this.graphical&&this.precision===null&&features.isTextureFloat){this.precision='single';}this.texSize=utils.getKernelTextureSize({optimizeFloatMemory:this.optimizeFloatMemory,precision:this.precision},this.output);this.checkTextureSize();}},{key:"translateSource",value:function translateSource(){var functionBuilder=FunctionBuilder.fromKernel(this,WebGL2FunctionNode,{fixIntegerDivisionAccuracy:this.fixIntegerDivisionAccuracy});this.translatedSource=functionBuilder.getPrototypeString('kernel');this.setupReturnTypes(functionBuilder);}},{key:"drawBuffers",value:function drawBuffers(){this.context.drawBuffers(this.drawBuffersMap);}},{key:"getTextureFormat",value:function getTextureFormat(){var gl=this.context;switch(this.getInternalFormat()){case gl.R32F:return gl.RED;case gl.RG32F:return gl.RG;case gl.RGBA32F:return gl.RGBA;case gl.RGBA:return gl.RGBA;default:throw new Error('Unknown internal format');}}},{key:"getInternalFormat",value:function getInternalFormat(){var gl=this.context;if(this.precision==='single'){if(this.pipeline){switch(this.returnType){case'Number':case'Float':case'Integer':if(this.optimizeFloatMemory){return gl.RGBA32F;}else{return gl.R32F;}case'Array(2)':return gl.RG32F;case'Array(3)':case'Array(4)':return gl.RGBA32F;default:throw new Error('Unhandled return type');}}return gl.RGBA32F;}return gl.RGBA;}},{key:"_setupOutputTexture",value:function _setupOutputTexture(){var gl=this.context;if(this.texture){gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,this.texture.texture,0);return;}gl.bindFramebuffer(gl.FRAMEBUFFER,this.framebuffer);var texture=gl.createTexture();var texSize=this.texSize;gl.activeTexture(gl.TEXTURE0+this.constantTextureCount+this.argumentTextureCount);gl.bindTexture(gl.TEXTURE_2D,texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.REPEAT);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.REPEAT);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);var format=this.getInternalFormat();if(this.precision==='single'){gl.texStorage2D(gl.TEXTURE_2D,1,format,texSize[0],texSize[1]);}else{gl.texImage2D(gl.TEXTURE_2D,0,format,texSize[0],texSize[1],0,format,gl.UNSIGNED_BYTE,null);}gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,texture,0);this.texture=new this.TextureConstructor({texture:texture,size:texSize,dimensions:this.threadDim,output:this.output,context:this.context,internalFormat:this.getInternalFormat(),textureFormat:this.getTextureFormat(),kernel:this});}},{key:"_setupSubOutputTextures",value:function _setupSubOutputTextures(){var gl=this.context;if(this.mappedTextures){for(var i=0;i<this.subKernels.length;i++){gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0+i+1,gl.TEXTURE_2D,this.mappedTextures[i].texture,0);}return;}var texSize=this.texSize;this.drawBuffersMap=[gl.COLOR_ATTACHMENT0];this.mappedTextures=[];for(var _i33=0;_i33<this.subKernels.length;_i33++){var texture=this.createTexture();this.drawBuffersMap.push(gl.COLOR_ATTACHMENT0+_i33+1);gl.activeTexture(gl.TEXTURE0+this.constantTextureCount+this.argumentTextureCount+_i33);gl.bindTexture(gl.TEXTURE_2D,texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);var format=this.getInternalFormat();if(this.precision==='single'){gl.texStorage2D(gl.TEXTURE_2D,1,format,texSize[0],texSize[1]);}else{gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,texSize[0],texSize[1],0,gl.RGBA,gl.UNSIGNED_BYTE,null);}gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0+_i33+1,gl.TEXTURE_2D,texture,0);this.mappedTextures.push(new this.TextureConstructor({texture:texture,size:texSize,dimensions:this.threadDim,output:this.output,context:this.context,internalFormat:this.getInternalFormat(),textureFormat:this.getTextureFormat(),kernel:this}));}}},{key:"_getHeaderString",value:function _getHeaderString(){return'';}},{key:"_getTextureCoordinate",value:function _getTextureCoordinate(){var subKernels=this.subKernels;var variablePrecision=this.getVariablePrecisionString(this.texSize,this.tactic);if(subKernels===null||subKernels.length<1){return"in ".concat(variablePrecision," vec2 vTexCoord;\n");}else{return"out ".concat(variablePrecision," vec2 vTexCoord;\n");}}},{key:"_getMainArgumentsString",value:function _getMainArgumentsString(args){var result=[];var argumentNames=this.argumentNames;for(var i=0;i<argumentNames.length;i++){result.push(this.kernelArguments[i].getSource(args[i]));}return result.join('');}},{key:"getKernelString",value:function getKernelString(){var result=[this.getKernelResultDeclaration()];var subKernels=this.subKernels;if(subKernels!==null){result.push('layout(location = 0) out vec4 data0');switch(this.returnType){case'Number':case'Float':case'Integer':for(var i=0;i<subKernels.length;i++){var subKernel=subKernels[i];result.push(subKernel.returnType==='Integer'?"int subKernelResult_".concat(subKernel.name," = 0"):"float subKernelResult_".concat(subKernel.name," = 0.0"),"layout(location = ".concat(i+1,") out vec4 data").concat(i+1));}break;case'Array(2)':for(var _i34=0;_i34<subKernels.length;_i34++){result.push("vec2 subKernelResult_".concat(subKernels[_i34].name),"layout(location = ".concat(_i34+1,") out vec4 data").concat(_i34+1));}break;case'Array(3)':for(var _i35=0;_i35<subKernels.length;_i35++){result.push("vec3 subKernelResult_".concat(subKernels[_i35].name),"layout(location = ".concat(_i35+1,") out vec4 data").concat(_i35+1));}break;case'Array(4)':for(var _i36=0;_i36<subKernels.length;_i36++){result.push("vec4 subKernelResult_".concat(subKernels[_i36].name),"layout(location = ".concat(_i36+1,") out vec4 data").concat(_i36+1));}break;}}else{result.push('out vec4 data0');}return utils.linesToString(result)+this.translatedSource;}},{key:"getMainResultGraphical",value:function getMainResultGraphical(){return utils.linesToString(['  threadId = indexTo3D(index, uOutputDim)','  kernel()','  data0 = actualColor']);}},{key:"getMainResultPackedPixels",value:function getMainResultPackedPixels(){switch(this.returnType){case'LiteralInteger':case'Number':case'Integer':case'Float':return this.getMainResultKernelPackedPixels()+this.getMainResultSubKernelPackedPixels();default:throw new Error("packed output only usable with Numbers, \"".concat(this.returnType,"\" specified"));}}},{key:"getMainResultKernelPackedPixels",value:function getMainResultKernelPackedPixels(){return utils.linesToString(['  threadId = indexTo3D(index, uOutputDim)','  kernel()',"  data0 = ".concat(this.useLegacyEncoder?'legacyEncode32':'encode32',"(kernelResult)")]);}},{key:"getMainResultSubKernelPackedPixels",value:function getMainResultSubKernelPackedPixels(){var result=[];if(!this.subKernels)return'';for(var i=0;i<this.subKernels.length;i++){var subKernel=this.subKernels[i];if(subKernel.returnType==='Integer'){result.push("  data".concat(i+1," = ").concat(this.useLegacyEncoder?'legacyEncode32':'encode32',"(float(subKernelResult_").concat(this.subKernels[i].name,"))"));}else{result.push("  data".concat(i+1," = ").concat(this.useLegacyEncoder?'legacyEncode32':'encode32',"(subKernelResult_").concat(this.subKernels[i].name,")"));}}return utils.linesToString(result);}},{key:"getMainResultKernelMemoryOptimizedFloats",value:function getMainResultKernelMemoryOptimizedFloats(result,channel){result.push('  threadId = indexTo3D(index, uOutputDim)','  kernel()',"  data0.".concat(channel," = kernelResult"));}},{key:"getMainResultSubKernelMemoryOptimizedFloats",value:function getMainResultSubKernelMemoryOptimizedFloats(result,channel){if(!this.subKernels)return result;for(var i=0;i<this.subKernels.length;i++){var subKernel=this.subKernels[i];if(subKernel.returnType==='Integer'){result.push("  data".concat(i+1,".").concat(channel," = float(subKernelResult_").concat(subKernel.name,")"));}else{result.push("  data".concat(i+1,".").concat(channel," = subKernelResult_").concat(subKernel.name));}}}},{key:"getMainResultKernelNumberTexture",value:function getMainResultKernelNumberTexture(){return['  threadId = indexTo3D(index, uOutputDim)','  kernel()','  data0[0] = kernelResult'];}},{key:"getMainResultSubKernelNumberTexture",value:function getMainResultSubKernelNumberTexture(){var result=[];if(!this.subKernels)return result;for(var i=0;i<this.subKernels.length;++i){var subKernel=this.subKernels[i];if(subKernel.returnType==='Integer'){result.push("  data".concat(i+1,"[0] = float(subKernelResult_").concat(subKernel.name,")"));}else{result.push("  data".concat(i+1,"[0] = subKernelResult_").concat(subKernel.name));}}return result;}},{key:"getMainResultKernelArray2Texture",value:function getMainResultKernelArray2Texture(){return['  threadId = indexTo3D(index, uOutputDim)','  kernel()','  data0[0] = kernelResult[0]','  data0[1] = kernelResult[1]'];}},{key:"getMainResultSubKernelArray2Texture",value:function getMainResultSubKernelArray2Texture(){var result=[];if(!this.subKernels)return result;for(var i=0;i<this.subKernels.length;++i){var subKernel=this.subKernels[i];result.push("  data".concat(i+1,"[0] = subKernelResult_").concat(subKernel.name,"[0]"),"  data".concat(i+1,"[1] = subKernelResult_").concat(subKernel.name,"[1]"));}return result;}},{key:"getMainResultKernelArray3Texture",value:function getMainResultKernelArray3Texture(){return['  threadId = indexTo3D(index, uOutputDim)','  kernel()','  data0[0] = kernelResult[0]','  data0[1] = kernelResult[1]','  data0[2] = kernelResult[2]'];}},{key:"getMainResultSubKernelArray3Texture",value:function getMainResultSubKernelArray3Texture(){var result=[];if(!this.subKernels)return result;for(var i=0;i<this.subKernels.length;++i){var subKernel=this.subKernels[i];result.push("  data".concat(i+1,"[0] = subKernelResult_").concat(subKernel.name,"[0]"),"  data".concat(i+1,"[1] = subKernelResult_").concat(subKernel.name,"[1]"),"  data".concat(i+1,"[2] = subKernelResult_").concat(subKernel.name,"[2]"));}return result;}},{key:"getMainResultKernelArray4Texture",value:function getMainResultKernelArray4Texture(){return['  threadId = indexTo3D(index, uOutputDim)','  kernel()','  data0 = kernelResult'];}},{key:"getMainResultSubKernelArray4Texture",value:function getMainResultSubKernelArray4Texture(){var result=[];if(!this.subKernels)return result;for(var i=0;i<this.subKernels.length;++i){result.push("  data".concat(i+1," = subKernelResult_").concat(this.subKernels[i].name));}return result;}},{key:"destroyExtensions",value:function destroyExtensions(){this.extensions.EXT_color_buffer_float=null;this.extensions.OES_texture_float_linear=null;}},{key:"toJSON",value:function toJSON(){var json=_get(_getPrototypeOf(WebGL2Kernel.prototype),"toJSON",this).call(this);json.functionNodes=FunctionBuilder.fromKernel(this,WebGL2FunctionNode).toJSON();json.settings.threadDim=this.threadDim;return json;}}],[{key:"isSupported",get:function get(){if(isSupported!==null){return isSupported;}this.setupFeatureChecks();isSupported=this.isContextMatch(testContext);return isSupported;}},{key:"setupFeatureChecks",value:function setupFeatureChecks(){if(typeof document!=='undefined'){testCanvas=document.createElement('canvas');}else if(typeof OffscreenCanvas!=='undefined'){testCanvas=new OffscreenCanvas(0,0);}if(!testCanvas)return;testContext=testCanvas.getContext('webgl2');if(!testContext||!testContext.getExtension)return;testExtensions={EXT_color_buffer_float:testContext.getExtension('EXT_color_buffer_float'),OES_texture_float_linear:testContext.getExtension('OES_texture_float_linear')};features=this.getFeatures();}},{key:"isContextMatch",value:function isContextMatch(context){if(typeof WebGL2RenderingContext!=='undefined'){return context instanceof WebGL2RenderingContext;}return false;}},{key:"getFeatures",value:function getFeatures(){var gl=this.testContext;return Object.freeze({isFloatRead:this.getIsFloatRead(),isIntegerDivisionAccurate:this.getIsIntegerDivisionAccurate(),isSpeedTacticSupported:this.getIsSpeedTacticSupported(),kernelMap:true,isTextureFloat:true,isDrawBuffers:true,channelCount:this.getChannelCount(),maxTextureSize:this.getMaxTextureSize(),lowIntPrecision:gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.LOW_INT),lowFloatPrecision:gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.LOW_FLOAT),mediumIntPrecision:gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.MEDIUM_INT),mediumFloatPrecision:gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.MEDIUM_FLOAT),highIntPrecision:gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.HIGH_INT),highFloatPrecision:gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER,gl.HIGH_FLOAT)});}},{key:"getIsTextureFloat",value:function getIsTextureFloat(){return true;}},{key:"getChannelCount",value:function getChannelCount(){return testContext.getParameter(testContext.MAX_DRAW_BUFFERS);}},{key:"getMaxTextureSize",value:function getMaxTextureSize(){return testContext.getParameter(testContext.MAX_TEXTURE_SIZE);}},{key:"lookupKernelValueType",value:function lookupKernelValueType(type,dynamic,precision,value){return _lookupKernelValueType2(type,dynamic,precision,value);}},{key:"testCanvas",get:function get(){return testCanvas;}},{key:"testContext",get:function get(){return testContext;}},{key:"features",get:function get(){return features;}},{key:"fragmentShader",get:function get(){return fragmentShader;}},{key:"vertexShader",get:function get(){return vertexShader;}}]);return WebGL2Kernel;}(WebGLKernel);module.exports={WebGL2Kernel:WebGL2Kernel};},{"../../utils":114,"../function-builder":9,"../web-gl/kernel":70,"./fragment-shader":72,"./function-node":73,"./kernel-value-maps":74,"./vertex-shader":106}],106:[function(require,module,exports){var vertexShader="#version 300 es\n      __FLOAT_TACTIC_DECLARATION__;\n      __INT_TACTIC_DECLARATION__;\n      __SAMPLER_2D_TACTIC_DECLARATION__;\n      \n      in vec2 aPos;\n      in vec2 aTexCoord;\n      \n      out vec2 vTexCoord;\n      uniform vec2 ratio;\n      \n      void main(void) {\n        gl_Position = vec4((aPos + vec2(1)) * ratio + vec2(-1), 0, 1);\n        vTexCoord = aTexCoord;\n      }";module.exports={vertexShader:vertexShader};},{}],107:[function(require,module,exports){var lib=require('./index');var GPU=lib.GPU;for(var p in lib){if(!lib.hasOwnProperty(p))continue;if(p==='GPU')continue;GPU[p]=lib[p];}if(typeof window!=='undefined'){bindTo(window);}if(typeof self!=='undefined'){bindTo(self);}function bindTo(target){if(target.GPU)return;Object.defineProperty(target,'GPU',{get:function get(){return GPU;}});}module.exports=lib;},{"./index":109}],108:[function(require,module,exports){var _require268=require('gpu-mock.js'),gpuMock=_require268.gpuMock;var _require269=require('./utils'),utils=_require269.utils;var _require270=require('./backend/kernel'),Kernel=_require270.Kernel;var _require271=require('./backend/cpu/kernel'),CPUKernel=_require271.CPUKernel;var _require272=require('./backend/headless-gl/kernel'),HeadlessGLKernel=_require272.HeadlessGLKernel;var _require273=require('./backend/web-gl2/kernel'),WebGL2Kernel=_require273.WebGL2Kernel;var _require274=require('./backend/web-gl/kernel'),WebGLKernel=_require274.WebGLKernel;var _require275=require('./kernel-run-shortcut'),kernelRunShortcut=_require275.kernelRunShortcut;var kernelOrder=[HeadlessGLKernel,WebGL2Kernel,WebGLKernel];var kernelTypes=['gpu','cpu'];var internalKernels={'headlessgl':HeadlessGLKernel,'webgl2':WebGL2Kernel,'webgl':WebGLKernel};var validate=true;var GPU=/*#__PURE__*/function(){function GPU(settings){_classCallCheck(this,GPU);settings=settings||{};this.canvas=settings.canvas||null;this.context=settings.context||null;this.mode=settings.mode;this.Kernel=null;this.kernels=[];this.functions=[];this.nativeFunctions=[];this.injectedNative=null;if(this.mode==='dev')return;this.chooseKernel();if(settings.functions){for(var i=0;i<settings.functions.length;i++){this.addFunction(settings.functions[i]);}}if(settings.nativeFunctions){for(var p in settings.nativeFunctions){if(!settings.nativeFunctions.hasOwnProperty(p))continue;var s=settings.nativeFunctions[p];var _name13=s.name,source=s.source;this.addNativeFunction(_name13,source,s);}}}_createClass(GPU,[{key:"chooseKernel",value:function chooseKernel(){if(this.Kernel)return;var Kernel=null;if(this.context){for(var i=0;i<kernelOrder.length;i++){var ExternalKernel=kernelOrder[i];if(ExternalKernel.isContextMatch(this.context)){if(!ExternalKernel.isSupported){throw new Error("Kernel type ".concat(ExternalKernel.name," not supported"));}Kernel=ExternalKernel;break;}}if(Kernel===null){throw new Error('unknown Context');}}else if(this.mode){if(this.mode in internalKernels){if(!validate||internalKernels[this.mode].isSupported){Kernel=internalKernels[this.mode];}}else if(this.mode==='gpu'){for(var _i37=0;_i37<kernelOrder.length;_i37++){if(kernelOrder[_i37].isSupported){Kernel=kernelOrder[_i37];break;}}}else if(this.mode==='cpu'){Kernel=CPUKernel;}if(!Kernel){throw new Error("A requested mode of \"".concat(this.mode,"\" and is not supported"));}}else{for(var _i38=0;_i38<kernelOrder.length;_i38++){if(kernelOrder[_i38].isSupported){Kernel=kernelOrder[_i38];break;}}if(!Kernel){Kernel=CPUKernel;}}if(!this.mode){this.mode=Kernel.mode;}this.Kernel=Kernel;}},{key:"createKernel",value:function createKernel(source,settings){if(typeof source==='undefined'){throw new Error('Missing source parameter');}if(_typeof(source)!=='object'&&!utils.isFunction(source)&&typeof source!=='string'){throw new Error('source parameter not a function');}var kernels=this.kernels;if(this.mode==='dev'){var devKernel=gpuMock(source,upgradeDeprecatedCreateKernelSettings(settings));kernels.push(devKernel);return devKernel;}source=typeof source==='function'?source.toString():source;var switchableKernels={};var settingsCopy=upgradeDeprecatedCreateKernelSettings(settings)||{};if(settings&&_typeof(settings.argumentTypes)==='object'){settingsCopy.argumentTypes=Object.keys(settings.argumentTypes).map(function(argumentName){return settings.argumentTypes[argumentName];});}function onRequestFallback(args){console.warn('Falling back to CPU');var fallbackKernel=new CPUKernel(source,{argumentTypes:kernelRun.argumentTypes,constantTypes:kernelRun.constantTypes,graphical:kernelRun.graphical,loopMaxIterations:kernelRun.loopMaxIterations,constants:kernelRun.constants,dynamicOutput:kernelRun.dynamicOutput,dynamicArgument:kernelRun.dynamicArguments,output:kernelRun.output,precision:kernelRun.precision,pipeline:kernelRun.pipeline,immutable:kernelRun.immutable,optimizeFloatMemory:kernelRun.optimizeFloatMemory,fixIntegerDivisionAccuracy:kernelRun.fixIntegerDivisionAccuracy,functions:kernelRun.functions,nativeFunctions:kernelRun.nativeFunctions,injectedNative:kernelRun.injectedNative,subKernels:kernelRun.subKernels,strictIntegers:kernelRun.strictIntegers,debug:kernelRun.debug});fallbackKernel.build.apply(fallbackKernel,args);var result=fallbackKernel.run.apply(fallbackKernel,args);kernelRun.replaceKernel(fallbackKernel);return result;}function onRequestSwitchKernel(reasons,args,_kernel){if(_kernel.debug){console.warn('Switching kernels');}var newOutput=null;if(_kernel.signature&&!switchableKernels[_kernel.signature]){switchableKernels[_kernel.signature]=_kernel;}if(_kernel.dynamicOutput){for(var i=reasons.length-1;i>=0;i--){var reason=reasons[i];if(reason.type==='outputPrecisionMismatch'){newOutput=reason.needed;}}}var Constructor=_kernel.constructor;var argumentTypes=Constructor.getArgumentTypes(_kernel,args);var signature=Constructor.getSignature(_kernel,argumentTypes);var existingKernel=switchableKernels[signature];if(existingKernel){existingKernel.onActivate(_kernel);return existingKernel;}var newKernel=switchableKernels[signature]=new Constructor(source,{argumentTypes:argumentTypes,constantTypes:_kernel.constantTypes,graphical:_kernel.graphical,loopMaxIterations:_kernel.loopMaxIterations,constants:_kernel.constants,dynamicOutput:_kernel.dynamicOutput,dynamicArgument:_kernel.dynamicArguments,context:_kernel.context,canvas:_kernel.canvas,output:newOutput||_kernel.output,precision:_kernel.precision,pipeline:_kernel.pipeline,immutable:_kernel.immutable,optimizeFloatMemory:_kernel.optimizeFloatMemory,fixIntegerDivisionAccuracy:_kernel.fixIntegerDivisionAccuracy,functions:_kernel.functions,nativeFunctions:_kernel.nativeFunctions,injectedNative:_kernel.injectedNative,subKernels:_kernel.subKernels,strictIntegers:_kernel.strictIntegers,debug:_kernel.debug,gpu:_kernel.gpu,validate:validate,returnType:_kernel.returnType,tactic:_kernel.tactic,onRequestFallback:onRequestFallback,onRequestSwitchKernel:onRequestSwitchKernel,texture:_kernel.texture,mappedTextures:_kernel.mappedTextures,drawBuffersMap:_kernel.drawBuffersMap});newKernel.build.apply(newKernel,args);kernelRun.replaceKernel(newKernel);kernels.push(newKernel);return newKernel;}var mergedSettings=Object.assign({context:this.context,canvas:this.canvas,functions:this.functions,nativeFunctions:this.nativeFunctions,injectedNative:this.injectedNative,gpu:this,validate:validate,onRequestFallback:onRequestFallback,onRequestSwitchKernel:onRequestSwitchKernel},settingsCopy);var kernel=new this.Kernel(source,mergedSettings);var kernelRun=kernelRunShortcut(kernel);if(!this.canvas){this.canvas=kernel.canvas;}if(!this.context){this.context=kernel.context;}kernels.push(kernel);return kernelRun;}},{key:"createKernelMap",value:function createKernelMap(){var fn;var settings;var argument2Type=_typeof(arguments[arguments.length-2]);if(argument2Type==='function'||argument2Type==='string'){fn=arguments[arguments.length-2];settings=arguments[arguments.length-1];}else{fn=arguments[arguments.length-1];}if(this.mode!=='dev'){if(!this.Kernel.isSupported||!this.Kernel.features.kernelMap){if(this.mode&&kernelTypes.indexOf(this.mode)<0){throw new Error("kernelMap not supported on ".concat(this.Kernel.name));}}}var settingsCopy=upgradeDeprecatedCreateKernelSettings(settings);if(settings&&_typeof(settings.argumentTypes)==='object'){settingsCopy.argumentTypes=Object.keys(settings.argumentTypes).map(function(argumentName){return settings.argumentTypes[argumentName];});}if(Array.isArray(arguments[0])){settingsCopy.subKernels=[];var functions=arguments[0];for(var i=0;i<functions.length;i++){var source=functions[i].toString();var _name14=utils.getFunctionNameFromString(source);settingsCopy.subKernels.push({name:_name14,source:source,property:i});}}else{settingsCopy.subKernels=[];var _functions=arguments[0];for(var p in _functions){if(!_functions.hasOwnProperty(p))continue;var _source=_functions[p].toString();var _name15=utils.getFunctionNameFromString(_source);settingsCopy.subKernels.push({name:_name15||p,source:_source,property:p});}}return this.createKernel(fn,settingsCopy);}},{key:"combineKernels",value:function combineKernels(){var firstKernel=arguments[0];var combinedKernel=arguments[arguments.length-1];if(firstKernel.kernel.constructor.mode==='cpu')return combinedKernel;var canvas=arguments[0].canvas;var context=arguments[0].context;var max=arguments.length-1;for(var i=0;i<max;i++){arguments[i].setCanvas(canvas).setContext(context).setPipeline(true);}return function(){var texture=combinedKernel.apply(this,arguments);if(texture.toArray){return texture.toArray();}return texture;};}},{key:"setFunctions",value:function setFunctions(functions){this.functions=functions;return this;}},{key:"setNativeFunctions",value:function setNativeFunctions(nativeFunctions){this.nativeFunctions=nativeFunctions;return this;}},{key:"addFunction",value:function addFunction(source,settings){this.functions.push({source:source,settings:settings});return this;}},{key:"addNativeFunction",value:function addNativeFunction(name,source,settings){if(this.kernels.length>0){throw new Error('Cannot call "addNativeFunction" after "createKernels" has been called.');}this.nativeFunctions.push(Object.assign({name:name,source:source},settings));return this;}},{key:"injectNative",value:function injectNative(source){this.injectedNative=source;return this;}},{key:"destroy",value:function destroy(){var _this48=this;return new Promise(function(resolve,reject){if(!_this48.kernels){resolve();}setTimeout(function(){try{for(var i=0;i<_this48.kernels.length;i++){_this48.kernels[i].destroy(true);}var firstKernel=_this48.kernels[0];if(firstKernel){if(firstKernel.kernel){firstKernel=firstKernel.kernel;}if(firstKernel.constructor.destroyContext){firstKernel.constructor.destroyContext(_this48.context);}}}catch(e){reject(e);}resolve();},0);});}}],[{key:"disableValidation",value:function disableValidation(){validate=false;}},{key:"enableValidation",value:function enableValidation(){validate=true;}},{key:"isGPUSupported",get:function get(){return kernelOrder.some(function(Kernel){return Kernel.isSupported;});}},{key:"isKernelMapSupported",get:function get(){return kernelOrder.some(function(Kernel){return Kernel.isSupported&&Kernel.features.kernelMap;});}},{key:"isOffscreenCanvasSupported",get:function get(){return typeof Worker!=='undefined'&&typeof OffscreenCanvas!=='undefined'||typeof importScripts!=='undefined';}},{key:"isWebGLSupported",get:function get(){return WebGLKernel.isSupported;}},{key:"isWebGL2Supported",get:function get(){return WebGL2Kernel.isSupported;}},{key:"isHeadlessGLSupported",get:function get(){return HeadlessGLKernel.isSupported;}},{key:"isCanvasSupported",get:function get(){return typeof HTMLCanvasElement!=='undefined';}},{key:"isGPUHTMLImageArraySupported",get:function get(){return WebGL2Kernel.isSupported;}},{key:"isSinglePrecisionSupported",get:function get(){return kernelOrder.some(function(Kernel){return Kernel.isSupported&&Kernel.features.isFloatRead&&Kernel.features.isTextureFloat;});}}]);return GPU;}();function upgradeDeprecatedCreateKernelSettings(settings){if(!settings){return{};}var upgradedSettings=Object.assign({},settings);if(settings.hasOwnProperty('floatOutput')){utils.warnDeprecated('setting','floatOutput','precision');upgradedSettings.precision=settings.floatOutput?'single':'unsigned';}if(settings.hasOwnProperty('outputToTexture')){utils.warnDeprecated('setting','outputToTexture','pipeline');upgradedSettings.pipeline=Boolean(settings.outputToTexture);}if(settings.hasOwnProperty('outputImmutable')){utils.warnDeprecated('setting','outputImmutable','immutable');upgradedSettings.immutable=Boolean(settings.outputImmutable);}if(settings.hasOwnProperty('floatTextures')){utils.warnDeprecated('setting','floatTextures','optimizeFloatMemory');upgradedSettings.optimizeFloatMemory=Boolean(settings.floatTextures);}return upgradedSettings;}module.exports={GPU:GPU,kernelOrder:kernelOrder,kernelTypes:kernelTypes};},{"./backend/cpu/kernel":8,"./backend/headless-gl/kernel":34,"./backend/kernel":36,"./backend/web-gl/kernel":70,"./backend/web-gl2/kernel":105,"./kernel-run-shortcut":111,"./utils":114,"gpu-mock.js":4}],109:[function(require,module,exports){var _require276=require('./gpu'),GPU=_require276.GPU;var _require277=require('./alias'),alias=_require277.alias;var _require278=require('./utils'),utils=_require278.utils;var _require279=require('./input'),Input=_require279.Input,input=_require279.input;var _require280=require('./texture'),Texture=_require280.Texture;var _require281=require('./backend/function-builder'),FunctionBuilder=_require281.FunctionBuilder;var _require282=require('./backend/function-node'),FunctionNode=_require282.FunctionNode;var _require283=require('./backend/cpu/function-node'),CPUFunctionNode=_require283.CPUFunctionNode;var _require284=require('./backend/cpu/kernel'),CPUKernel=_require284.CPUKernel;var _require285=require('./backend/headless-gl/kernel'),HeadlessGLKernel=_require285.HeadlessGLKernel;var _require286=require('./backend/web-gl/function-node'),WebGLFunctionNode=_require286.WebGLFunctionNode;var _require287=require('./backend/web-gl/kernel'),WebGLKernel=_require287.WebGLKernel;var _require288=require('./backend/web-gl/kernel-value-maps'),webGLKernelValueMaps=_require288.kernelValueMaps;var _require289=require('./backend/web-gl2/function-node'),WebGL2FunctionNode=_require289.WebGL2FunctionNode;var _require290=require('./backend/web-gl2/kernel'),WebGL2Kernel=_require290.WebGL2Kernel;var _require291=require('./backend/web-gl2/kernel-value-maps'),webGL2KernelValueMaps=_require291.kernelValueMaps;var _require292=require('./backend/gl/kernel'),GLKernel=_require292.GLKernel;var _require293=require('./backend/kernel'),Kernel=_require293.Kernel;var _require294=require('./backend/function-tracer'),FunctionTracer=_require294.FunctionTracer;var mathRandom=require('./plugins/math-random-uniformly-distributed');module.exports={alias:alias,CPUFunctionNode:CPUFunctionNode,CPUKernel:CPUKernel,GPU:GPU,FunctionBuilder:FunctionBuilder,FunctionNode:FunctionNode,HeadlessGLKernel:HeadlessGLKernel,Input:Input,input:input,Texture:Texture,utils:utils,WebGL2FunctionNode:WebGL2FunctionNode,WebGL2Kernel:WebGL2Kernel,webGL2KernelValueMaps:webGL2KernelValueMaps,WebGLFunctionNode:WebGLFunctionNode,WebGLKernel:WebGLKernel,webGLKernelValueMaps:webGLKernelValueMaps,GLKernel:GLKernel,Kernel:Kernel,FunctionTracer:FunctionTracer,plugins:{mathRandom:mathRandom}};},{"./alias":5,"./backend/cpu/function-node":6,"./backend/cpu/kernel":8,"./backend/function-builder":9,"./backend/function-node":10,"./backend/function-tracer":11,"./backend/gl/kernel":13,"./backend/headless-gl/kernel":34,"./backend/kernel":36,"./backend/web-gl/function-node":38,"./backend/web-gl/kernel":70,"./backend/web-gl/kernel-value-maps":39,"./backend/web-gl2/function-node":73,"./backend/web-gl2/kernel":105,"./backend/web-gl2/kernel-value-maps":74,"./gpu":108,"./input":110,"./plugins/math-random-uniformly-distributed":112,"./texture":113,"./utils":114}],110:[function(require,module,exports){var Input=/*#__PURE__*/function(){function Input(value,size){_classCallCheck(this,Input);this.value=value;if(Array.isArray(size)){this.size=size;}else{this.size=new Int32Array(3);if(size.z){this.size=new Int32Array([size.x,size.y,size.z]);}else if(size.y){this.size=new Int32Array([size.x,size.y]);}else{this.size=new Int32Array([size.x]);}}var _this$size=_slicedToArray(this.size,3),w=_this$size[0],h=_this$size[1],d=_this$size[2];if(d){if(this.value.length!==w*h*d){throw new Error("Input size ".concat(this.value.length," does not match ").concat(w," * ").concat(h," * ").concat(d," = ").concat(h*w*d));}}else if(h){if(this.value.length!==w*h){throw new Error("Input size ".concat(this.value.length," does not match ").concat(w," * ").concat(h," = ").concat(h*w));}}else{if(this.value.length!==w){throw new Error("Input size ".concat(this.value.length," does not match ").concat(w));}}}_createClass(Input,[{key:"toArray",value:function toArray(){var _require295=require('./utils'),utils=_require295.utils;var _this$size2=_slicedToArray(this.size,3),w=_this$size2[0],h=_this$size2[1],d=_this$size2[2];if(d){return utils.erectMemoryOptimized3DFloat(this.value.subarray?this.value:new Float32Array(this.value),w,h,d);}else if(h){return utils.erectMemoryOptimized2DFloat(this.value.subarray?this.value:new Float32Array(this.value),w,h);}else{return this.value;}}}]);return Input;}();function input(value,size){return new Input(value,size);}module.exports={Input:Input,input:input};},{"./utils":114}],111:[function(require,module,exports){var _require296=require('./utils'),utils=_require296.utils;function kernelRunShortcut(kernel){var _run=function run(){kernel.build.apply(kernel,arguments);_run=function run(){var result=kernel.run.apply(kernel,arguments);if(kernel.switchingKernels){var reasons=kernel.resetSwitchingKernels();var newKernel=kernel.onRequestSwitchKernel(reasons,arguments,kernel);shortcut.kernel=kernel=newKernel;result=newKernel.run.apply(newKernel,arguments);}if(kernel.renderKernels){return kernel.renderKernels();}else if(kernel.renderOutput){return kernel.renderOutput();}else{return result;}};return _run.apply(kernel,arguments);};var shortcut=function shortcut(){return _run.apply(kernel,arguments);};shortcut.exec=function(){var _arguments2=arguments,_this49=this;return new Promise(function(accept,reject){try{accept(_run.apply(_this49,_arguments2));}catch(e){reject(e);}});};shortcut.replaceKernel=function(replacementKernel){kernel=replacementKernel;bindKernelToShortcut(kernel,shortcut);};bindKernelToShortcut(kernel,shortcut);return shortcut;}function bindKernelToShortcut(kernel,shortcut){if(shortcut.kernel){shortcut.kernel=kernel;return;}var properties=utils.allPropertiesOf(kernel);var _loop3=function _loop3(i){var property=properties[i];if(property[0]==='_'&&property[1]==='_')return"continue";if(typeof kernel[property]==='function'){if(property.substring(0,3)==='add'||property.substring(0,3)==='set'){shortcut[property]=function(){shortcut.kernel[property].apply(shortcut.kernel,arguments);return shortcut;};}else{shortcut[property]=function(){return shortcut.kernel[property].apply(shortcut.kernel,arguments);};}}else{shortcut.__defineGetter__(property,function(){return shortcut.kernel[property];});shortcut.__defineSetter__(property,function(value){shortcut.kernel[property]=value;});}};for(var i=0;i<properties.length;i++){var _ret=_loop3(i);if(_ret==="continue")continue;}shortcut.kernel=kernel;}module.exports={kernelRunShortcut:kernelRunShortcut};},{"./utils":114}],112:[function(require,module,exports){var source="// https://www.shadertoy.com/view/4t2SDh\n      //note: uniformly distributed, normalized rand, [0,1]\n      highp float randomSeedShift = 1.0;\n      highp float slide = 1.0;\n      uniform highp float randomSeed1;\n      uniform highp float randomSeed2;\n      \n      highp float nrand(highp vec2 n) {\n        highp float result = fract(sin(dot((n.xy + 1.0) * vec2(randomSeed1 * slide, randomSeed2 * randomSeedShift), vec2(12.9898, 78.233))) * 43758.5453);\n        randomSeedShift = result;\n        if (randomSeedShift > 0.5) {\n          slide += 0.00009; \n        } else {\n          slide += 0.0009;\n        }\n        return result;\n      }";var name='math-random-uniformly-distributed';var functionMatch="Math.random()";var functionReplace="nrand(vTexCoord)";var functionReturnType='Number';var onBeforeRun=function onBeforeRun(kernel){kernel.setUniform1f('randomSeed1',Math.random());kernel.setUniform1f('randomSeed2',Math.random());};var plugin={name:name,onBeforeRun:onBeforeRun,functionMatch:functionMatch,functionReplace:functionReplace,functionReturnType:functionReturnType,source:source};module.exports=plugin;},{}],113:[function(require,module,exports){var Texture=/*#__PURE__*/function(){function Texture(settings){_classCallCheck(this,Texture);var texture=settings.texture,size=settings.size,dimensions=settings.dimensions,output=settings.output,context=settings.context,_settings$type=settings.type,type=_settings$type===void 0?'NumberTexture':_settings$type,kernel=settings.kernel,internalFormat=settings.internalFormat,textureFormat=settings.textureFormat;if(!output)throw new Error('settings property "output" required.');if(!context)throw new Error('settings property "context" required.');if(!texture)throw new Error('settings property "texture" required.');if(!kernel)throw new Error('settings property "kernel" required.');this.texture=texture;if(texture._refs){texture._refs++;}else{texture._refs=1;}this.size=size;this.dimensions=dimensions;this.output=output;this.context=context;this.kernel=kernel;this.type=type;this._deleted=false;this.internalFormat=internalFormat;this.textureFormat=textureFormat;}_createClass(Texture,[{key:"toArray",value:function toArray(){throw new Error("Not implemented on ".concat(this.constructor.name));}},{key:"clone",value:function clone(){throw new Error("Not implemented on ".concat(this.constructor.name));}},{key:"delete",value:function _delete(){throw new Error("Not implemented on ".concat(this.constructor.name));}},{key:"clear",value:function clear(){throw new Error("Not implemented on ".concat(this.constructor.name));}}]);return Texture;}();module.exports={Texture:Texture};},{}],114:[function(require,module,exports){var acorn=require('acorn');var _require297=require('./input'),Input=_require297.Input;var _require298=require('./texture'),Texture=_require298.Texture;var FUNCTION_NAME=/function ([^(]*)/;var STRIP_COMMENTS=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;var ARGUMENT_NAMES=/([^\s,]+)/g;var utils={systemEndianness:function systemEndianness(){return _systemEndianness;},getSystemEndianness:function getSystemEndianness(){var b=new ArrayBuffer(4);var a=new Uint32Array(b);var c=new Uint8Array(b);a[0]=0xdeadbeef;if(c[0]===0xef)return'LE';if(c[0]===0xde)return'BE';throw new Error('unknown endianness');},isFunction:function isFunction(funcObj){return typeof funcObj==='function';},isFunctionString:function isFunctionString(fn){if(typeof fn==='string'){return fn.slice(0,'function'.length).toLowerCase()==='function';}return false;},getFunctionNameFromString:function getFunctionNameFromString(funcStr){var result=FUNCTION_NAME.exec(funcStr);if(!result||result.length===0)return null;return result[1].trim();},getFunctionBodyFromString:function getFunctionBodyFromString(funcStr){return funcStr.substring(funcStr.indexOf('{')+1,funcStr.lastIndexOf('}'));},getArgumentNamesFromString:function getArgumentNamesFromString(fn){var fnStr=fn.replace(STRIP_COMMENTS,'');var result=fnStr.slice(fnStr.indexOf('(')+1,fnStr.indexOf(')')).match(ARGUMENT_NAMES);if(result===null){result=[];}return result;},clone:function clone(obj){if(obj===null||_typeof(obj)!=='object'||obj.hasOwnProperty('isActiveClone'))return obj;var temp=obj.constructor();for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){obj.isActiveClone=null;temp[key]=utils.clone(obj[key]);delete obj.isActiveClone;}}return temp;},isArray:function isArray(array){return!isNaN(array.length);},getVariableType:function getVariableType(value,strictIntegers){if(utils.isArray(value)){if(value.length>0&&value[0].nodeName==='IMG'){return'HTMLImageArray';}return'Array';}switch(value.constructor){case Boolean:return'Boolean';case Number:if(strictIntegers&&Number.isInteger(value)){return'Integer';}return'Float';case Texture:return value.type;case Input:return'Input';}switch(value.nodeName){case'IMG':return'HTMLImage';case'CANVAS':return'HTMLImage';case'VIDEO':return'HTMLVideo';}if(value.hasOwnProperty('type')){return value.type;}return'Unknown';},getKernelTextureSize:function getKernelTextureSize(settings,dimensions){var _dimensions=_slicedToArray(dimensions,3),w=_dimensions[0],h=_dimensions[1],d=_dimensions[2];var texelCount=(w||1)*(h||1)*(d||1);if(settings.optimizeFloatMemory&&settings.precision==='single'){w=texelCount=Math.ceil(texelCount/4);}if(h>1&&w*h===texelCount){return new Int32Array([w,h]);}return utils.closestSquareDimensions(texelCount);},closestSquareDimensions:function closestSquareDimensions(length){var sqrt=Math.sqrt(length);var high=Math.ceil(sqrt);var low=Math.floor(sqrt);while(high*low<length){high--;low=Math.ceil(length/high);}return new Int32Array([low,Math.ceil(length/low)]);},getMemoryOptimizedFloatTextureSize:function getMemoryOptimizedFloatTextureSize(dimensions,bitRatio){var totalArea=utils.roundTo((dimensions[0]||1)*(dimensions[1]||1)*(dimensions[2]||1)*(dimensions[3]||1),4);var texelCount=totalArea/bitRatio;return utils.closestSquareDimensions(texelCount);},getMemoryOptimizedPackedTextureSize:function getMemoryOptimizedPackedTextureSize(dimensions,bitRatio){var _dimensions2=_slicedToArray(dimensions,3),w=_dimensions2[0],h=_dimensions2[1],d=_dimensions2[2];var totalArea=utils.roundTo((w||1)*(h||1)*(d||1),4);var texelCount=totalArea/(4/bitRatio);return utils.closestSquareDimensions(texelCount);},roundTo:function roundTo(n,d){return Math.floor((n+d-1)/d)*d;},getDimensions:function getDimensions(x,pad){var ret;if(utils.isArray(x)){var dim=[];var temp=x;while(utils.isArray(temp)){dim.push(temp.length);temp=temp[0];}ret=dim.reverse();}else if(x instanceof Texture){ret=x.output;}else if(x instanceof Input){ret=x.size;}else{throw new Error("Unknown dimensions of ".concat(x));}if(pad){ret=Array.from(ret);while(ret.length<3){ret.push(1);}}return new Int32Array(ret);},flatten2dArrayTo:function flatten2dArrayTo(array,target){var offset=0;for(var y=0;y<array.length;y++){target.set(array[y],offset);offset+=array[y].length;}},flatten3dArrayTo:function flatten3dArrayTo(array,target){var offset=0;for(var z=0;z<array.length;z++){for(var y=0;y<array[z].length;y++){target.set(array[z][y],offset);offset+=array[z][y].length;}}},flatten4dArrayTo:function flatten4dArrayTo(array,target){var offset=0;for(var l=0;l<array.length;l++){for(var z=0;z<array[l].length;z++){for(var y=0;y<array[l][z].length;y++){target.set(array[l][z][y],offset);offset+=array[l][z][y].length;}}}},flattenTo:function flattenTo(array,target){if(utils.isArray(array[0])){if(utils.isArray(array[0][0])){if(utils.isArray(array[0][0][0])){utils.flatten4dArrayTo(array,target);}else{utils.flatten3dArrayTo(array,target);}}else{utils.flatten2dArrayTo(array,target);}}else{target.set(array);}},splitArray:function splitArray(array,part){var result=[];for(var i=0;i<array.length;i+=part){result.push(new array.constructor(array.buffer,i*4+array.byteOffset,part));}return result;},getAstString:function getAstString(source,ast){var lines=Array.isArray(source)?source:source.split(/\r?\n/g);var start=ast.loc.start;var end=ast.loc.end;var result=[];if(start.line===end.line){result.push(lines[start.line-1].substring(start.column,end.column));}else{result.push(lines[start.line-1].slice(start.column));for(var i=start.line;i<end.line;i++){result.push(lines[i]);}result.push(lines[end.line-1].slice(0,end.column));}return result.join('\n');},allPropertiesOf:function allPropertiesOf(obj){var props=[];do{props.push.apply(props,Object.getOwnPropertyNames(obj));}while(obj=Object.getPrototypeOf(obj));return props;},linesToString:function linesToString(lines){if(lines.length>0){return lines.join(';\n')+';\n';}else{return'\n';}},warnDeprecated:function warnDeprecated(type,oldName,newName){if(newName){console.warn("You are using a deprecated ".concat(type," \"").concat(oldName,"\". It has been replaced with \"").concat(newName,"\". Fixing, but please upgrade as it will soon be removed."));}else{console.warn("You are using a deprecated ".concat(type," \"").concat(oldName,"\". It has been removed. Fixing, but please upgrade as it will soon be removed."));}},flipPixels:function flipPixels(pixels,width,height){var halfHeight=height/2|0;var bytesPerRow=width*4;var temp=new Uint8ClampedArray(width*4);var result=pixels.slice(0);for(var y=0;y<halfHeight;++y){var topOffset=y*bytesPerRow;var bottomOffset=(height-y-1)*bytesPerRow;temp.set(result.subarray(topOffset,topOffset+bytesPerRow));result.copyWithin(topOffset,bottomOffset,bottomOffset+bytesPerRow);result.set(temp,bottomOffset);}return result;},erectPackedFloat:function erectPackedFloat(array,width){return array.subarray(0,width);},erect2DPackedFloat:function erect2DPackedFloat(array,width,height){var yResults=new Array(height);for(var y=0;y<height;y++){var xStart=y*width;var xEnd=xStart+width;yResults[y]=array.subarray(xStart,xEnd);}return yResults;},erect3DPackedFloat:function erect3DPackedFloat(array,width,height,depth){var zResults=new Array(depth);for(var z=0;z<depth;z++){var yResults=new Array(height);for(var y=0;y<height;y++){var xStart=z*height*width+y*width;var xEnd=xStart+width;yResults[y]=array.subarray(xStart,xEnd);}zResults[z]=yResults;}return zResults;},erectMemoryOptimizedFloat:function erectMemoryOptimizedFloat(array,width){return array.subarray(0,width);},erectMemoryOptimized2DFloat:function erectMemoryOptimized2DFloat(array,width,height){var yResults=new Array(height);for(var y=0;y<height;y++){var offset=y*width;yResults[y]=array.subarray(offset,offset+width);}return yResults;},erectMemoryOptimized3DFloat:function erectMemoryOptimized3DFloat(array,width,height,depth){var zResults=new Array(depth);for(var z=0;z<depth;z++){var yResults=new Array(height);for(var y=0;y<height;y++){var offset=z*height*width+y*width;yResults[y]=array.subarray(offset,offset+width);}zResults[z]=yResults;}return zResults;},erectFloat:function erectFloat(array,width){var xResults=new Float32Array(width);var i=0;for(var x=0;x<width;x++){xResults[x]=array[i];i+=4;}return xResults;},erect2DFloat:function erect2DFloat(array,width,height){var yResults=new Array(height);var i=0;for(var y=0;y<height;y++){var xResults=new Float32Array(width);for(var x=0;x<width;x++){xResults[x]=array[i];i+=4;}yResults[y]=xResults;}return yResults;},erect3DFloat:function erect3DFloat(array,width,height,depth){var zResults=new Array(depth);var i=0;for(var z=0;z<depth;z++){var yResults=new Array(height);for(var y=0;y<height;y++){var xResults=new Float32Array(width);for(var x=0;x<width;x++){xResults[x]=array[i];i+=4;}yResults[y]=xResults;}zResults[z]=yResults;}return zResults;},erectArray2:function erectArray2(array,width){var xResults=new Array(width);var xResultsMax=width*4;var i=0;for(var x=0;x<xResultsMax;x+=4){xResults[i++]=array.subarray(x,x+2);}return xResults;},erect2DArray2:function erect2DArray2(array,width,height){var yResults=new Array(height);var XResultsMax=width*4;for(var y=0;y<height;y++){var xResults=new Array(width);var offset=y*XResultsMax;var i=0;for(var x=0;x<XResultsMax;x+=4){xResults[i++]=array.subarray(x+offset,x+offset+2);}yResults[y]=xResults;}return yResults;},erect3DArray2:function erect3DArray2(array,width,height,depth){var xResultsMax=width*4;var zResults=new Array(depth);for(var z=0;z<depth;z++){var yResults=new Array(height);for(var y=0;y<height;y++){var xResults=new Array(width);var offset=z*xResultsMax*height+y*xResultsMax;var i=0;for(var x=0;x<xResultsMax;x+=4){xResults[i++]=array.subarray(x+offset,x+offset+2);}yResults[y]=xResults;}zResults[z]=yResults;}return zResults;},erectArray3:function erectArray3(array,width){var xResults=new Array(width);var xResultsMax=width*4;var i=0;for(var x=0;x<xResultsMax;x+=4){xResults[i++]=array.subarray(x,x+3);}return xResults;},erect2DArray3:function erect2DArray3(array,width,height){var xResultsMax=width*4;var yResults=new Array(height);for(var y=0;y<height;y++){var xResults=new Array(width);var offset=y*xResultsMax;var i=0;for(var x=0;x<xResultsMax;x+=4){xResults[i++]=array.subarray(x+offset,x+offset+3);}yResults[y]=xResults;}return yResults;},erect3DArray3:function erect3DArray3(array,width,height,depth){var xResultsMax=width*4;var zResults=new Array(depth);for(var z=0;z<depth;z++){var yResults=new Array(height);for(var y=0;y<height;y++){var xResults=new Array(width);var offset=z*xResultsMax*height+y*xResultsMax;var i=0;for(var x=0;x<xResultsMax;x+=4){xResults[i++]=array.subarray(x+offset,x+offset+3);}yResults[y]=xResults;}zResults[z]=yResults;}return zResults;},erectArray4:function erectArray4(array,width){var xResults=new Array(array);var xResultsMax=width*4;var i=0;for(var x=0;x<xResultsMax;x+=4){xResults[i++]=array.subarray(x,x+4);}return xResults;},erect2DArray4:function erect2DArray4(array,width,height){var xResultsMax=width*4;var yResults=new Array(height);for(var y=0;y<height;y++){var xResults=new Array(width);var offset=y*xResultsMax;var i=0;for(var x=0;x<xResultsMax;x+=4){xResults[i++]=array.subarray(x+offset,x+offset+4);}yResults[y]=xResults;}return yResults;},erect3DArray4:function erect3DArray4(array,width,height,depth){var xResultsMax=width*4;var zResults=new Array(depth);for(var z=0;z<depth;z++){var yResults=new Array(height);for(var y=0;y<height;y++){var xResults=new Array(width);var offset=z*xResultsMax*height+y*xResultsMax;var i=0;for(var x=0;x<xResultsMax;x+=4){xResults[i++]=array.subarray(x+offset,x+offset+4);}yResults[y]=xResults;}zResults[z]=yResults;}return zResults;},flattenFunctionToString:function flattenFunctionToString(source,settings){var findDependency=settings.findDependency,thisLookup=settings.thisLookup,doNotDefine=settings.doNotDefine;var flattened=settings.flattened;if(!flattened){flattened=settings.flattened={};}var ast=acorn.parse(source);var functionDependencies=[];var indent=0;function flatten(ast){if(Array.isArray(ast)){var results=[];for(var i=0;i<ast.length;i++){results.push(flatten(ast[i]));}return results.join('');}switch(ast.type){case'Program':return flatten(ast.body)+(ast.body[0].type==='VariableDeclaration'?';':'');case'FunctionDeclaration':return"function ".concat(ast.id.name,"(").concat(ast.params.map(flatten).join(', '),") ").concat(flatten(ast.body));case'BlockStatement':{var _result2=[];indent+=2;for(var _i39=0;_i39<ast.body.length;_i39++){var flat=flatten(ast.body[_i39]);if(flat){_result2.push(' '.repeat(indent)+flat,';\n');}}indent-=2;return"{\n".concat(_result2.join(''),"}");}case'VariableDeclaration':var declarations=utils.normalizeDeclarations(ast).map(flatten).filter(function(r){return r!==null;});if(declarations.length<1){return'';}else{return"".concat(ast.kind," ").concat(declarations.join(','));}case'VariableDeclarator':if(ast.init.object&&ast.init.object.type==='ThisExpression'){var lookup=thisLookup(ast.init.property.name,true);if(lookup){return"".concat(ast.id.name," = ").concat(flatten(ast.init));}else{return null;}}else{return"".concat(ast.id.name," = ").concat(flatten(ast.init));}case'CallExpression':{if(ast.callee.property.name==='subarray'){return"".concat(flatten(ast.callee.object),".").concat(flatten(ast.callee.property),"(").concat(ast.arguments.map(function(value){return flatten(value);}).join(', '),")");}if(ast.callee.object.name==='gl'||ast.callee.object.name==='context'){return"".concat(flatten(ast.callee.object),".").concat(flatten(ast.callee.property),"(").concat(ast.arguments.map(function(value){return flatten(value);}).join(', '),")");}if(ast.callee.object.type==='ThisExpression'){functionDependencies.push(findDependency('this',ast.callee.property.name));return"".concat(ast.callee.property.name,"(").concat(ast.arguments.map(function(value){return flatten(value);}).join(', '),")");}else if(ast.callee.object.name){var foundSource=findDependency(ast.callee.object.name,ast.callee.property.name);if(foundSource===null){return"".concat(ast.callee.object.name,".").concat(ast.callee.property.name,"(").concat(ast.arguments.map(function(value){return flatten(value);}).join(', '),")");}else{functionDependencies.push(foundSource);return"".concat(ast.callee.property.name,"(").concat(ast.arguments.map(function(value){return flatten(value);}).join(', '),")");}}else if(ast.callee.object.type==='MemberExpression'){return"".concat(flatten(ast.callee.object),".").concat(ast.callee.property.name,"(").concat(ast.arguments.map(function(value){return flatten(value);}).join(', '),")");}else{throw new Error('unknown ast.callee');}}case'ReturnStatement':return"return ".concat(flatten(ast.argument));case'BinaryExpression':return"(".concat(flatten(ast.left)).concat(ast.operator).concat(flatten(ast.right),")");case'UnaryExpression':if(ast.prefix){return"".concat(ast.operator," ").concat(flatten(ast.argument));}else{return"".concat(flatten(ast.argument)," ").concat(ast.operator);}case'ExpressionStatement':return"".concat(flatten(ast.expression));case'SequenceExpression':return"(".concat(flatten(ast.expressions),")");case'ArrowFunctionExpression':return"(".concat(ast.params.map(flatten).join(', '),") => ").concat(flatten(ast.body));case'Literal':return ast.raw;case'Identifier':return ast.name;case'MemberExpression':if(ast.object.type==='ThisExpression'){return thisLookup(ast.property.name);}if(ast.computed){return"".concat(flatten(ast.object),"[").concat(flatten(ast.property),"]");}return flatten(ast.object)+'.'+flatten(ast.property);case'ThisExpression':return'this';case'NewExpression':return"new ".concat(flatten(ast.callee),"(").concat(ast.arguments.map(function(value){return flatten(value);}).join(', '),")");case'ForStatement':return"for (".concat(flatten(ast.init),";").concat(flatten(ast.test),";").concat(flatten(ast.update),") ").concat(flatten(ast.body));case'AssignmentExpression':return"".concat(flatten(ast.left)).concat(ast.operator).concat(flatten(ast.right));case'UpdateExpression':return"".concat(flatten(ast.argument)).concat(ast.operator);case'IfStatement':return"if (".concat(flatten(ast.test),") ").concat(flatten(ast.consequent));case'ThrowStatement':return"throw ".concat(flatten(ast.argument));case'ObjectPattern':return ast.properties.map(flatten).join(', ');case'ArrayPattern':return ast.elements.map(flatten).join(', ');case'DebuggerStatement':return'debugger;';case'ConditionalExpression':return"".concat(flatten(ast.test),"?").concat(flatten(ast.consequent),":").concat(flatten(ast.alternate));case'Property':if(ast.kind==='init'){return flatten(ast.key);}}throw new Error("unhandled ast.type of ".concat(ast.type));}var result=flatten(ast);if(functionDependencies.length>0){var flattenedFunctionDependencies=[];for(var i=0;i<functionDependencies.length;i++){var functionDependency=functionDependencies[i];if(!flattened[functionDependency]){flattened[functionDependency]=true;}functionDependency?flattenedFunctionDependencies.push(utils.flattenFunctionToString(functionDependency,settings)+'\n'):'';}return flattenedFunctionDependencies.join('')+result;}return result;},normalizeDeclarations:function normalizeDeclarations(ast){if(ast.type!=='VariableDeclaration')throw new Error('Ast is not of type "VariableDeclaration"');var normalizedDeclarations=[];for(var declarationIndex=0;declarationIndex<ast.declarations.length;declarationIndex++){var declaration=ast.declarations[declarationIndex];if(declaration.id&&declaration.id.type==='ObjectPattern'&&declaration.id.properties){var properties=declaration.id.properties;for(var propertyIndex=0;propertyIndex<properties.length;propertyIndex++){var property=properties[propertyIndex];if(property.value.type==='ObjectPattern'&&property.value.properties){for(var subPropertyIndex=0;subPropertyIndex<property.value.properties.length;subPropertyIndex++){var subProperty=property.value.properties[subPropertyIndex];if(subProperty.type==='Property'){normalizedDeclarations.push({type:'VariableDeclarator',id:{type:'Identifier',name:subProperty.key.name},init:{type:'MemberExpression',object:{type:'MemberExpression',object:declaration.init,property:{type:'Identifier',name:property.key.name},computed:false},property:{type:'Identifier',name:subProperty.key.name},computed:false}});}else{throw new Error('unexpected state');}}}else if(property.value.type==='Identifier'){normalizedDeclarations.push({type:'VariableDeclarator',id:{type:'Identifier',name:property.value&&property.value.name?property.value.name:property.key.name},init:{type:'MemberExpression',object:declaration.init,property:{type:'Identifier',name:property.key.name},computed:false}});}else{throw new Error('unexpected state');}}}else if(declaration.id&&declaration.id.type==='ArrayPattern'&&declaration.id.elements){var elements=declaration.id.elements;for(var elementIndex=0;elementIndex<elements.length;elementIndex++){var element=elements[elementIndex];if(element.type==='Identifier'){normalizedDeclarations.push({type:'VariableDeclarator',id:{type:'Identifier',name:element.name},init:{type:'MemberExpression',object:declaration.init,property:{type:'Literal',value:elementIndex,raw:elementIndex.toString(),start:element.start,end:element.end},computed:true}});}else{throw new Error('unexpected state');}}}else{normalizedDeclarations.push(declaration);}}return normalizedDeclarations;},splitHTMLImageToRGB:function splitHTMLImageToRGB(gpu,image){var rKernel=gpu.createKernel(function(a){var pixel=a[this.thread.y][this.thread.x];return pixel.r*255;},{output:[image.width,image.height],precision:'unsigned',argumentTypes:{a:'HTMLImage'}});var gKernel=gpu.createKernel(function(a){var pixel=a[this.thread.y][this.thread.x];return pixel.g*255;},{output:[image.width,image.height],precision:'unsigned',argumentTypes:{a:'HTMLImage'}});var bKernel=gpu.createKernel(function(a){var pixel=a[this.thread.y][this.thread.x];return pixel.b*255;},{output:[image.width,image.height],precision:'unsigned',argumentTypes:{a:'HTMLImage'}});var aKernel=gpu.createKernel(function(a){var pixel=a[this.thread.y][this.thread.x];return pixel.a*255;},{output:[image.width,image.height],precision:'unsigned',argumentTypes:{a:'HTMLImage'}});var result=[rKernel(image),gKernel(image),bKernel(image),aKernel(image)];result.rKernel=rKernel;result.gKernel=gKernel;result.bKernel=bKernel;result.aKernel=aKernel;result.gpu=gpu;return result;},splitRGBAToCanvases:function splitRGBAToCanvases(gpu,rgba,width,height){var visualKernelR=gpu.createKernel(function(v){var pixel=v[this.thread.y][this.thread.x];this.color(pixel.r/255,0,0,255);},{output:[width,height],graphical:true,argumentTypes:{v:'Array2D(4)'}});visualKernelR(rgba);var visualKernelG=gpu.createKernel(function(v){var pixel=v[this.thread.y][this.thread.x];this.color(0,pixel.g/255,0,255);},{output:[width,height],graphical:true,argumentTypes:{v:'Array2D(4)'}});visualKernelG(rgba);var visualKernelB=gpu.createKernel(function(v){var pixel=v[this.thread.y][this.thread.x];this.color(0,0,pixel.b/255,255);},{output:[width,height],graphical:true,argumentTypes:{v:'Array2D(4)'}});visualKernelB(rgba);var visualKernelA=gpu.createKernel(function(v){var pixel=v[this.thread.y][this.thread.x];this.color(255,255,255,pixel.a/255);},{output:[width,height],graphical:true,argumentTypes:{v:'Array2D(4)'}});visualKernelA(rgba);return[visualKernelR.canvas,visualKernelG.canvas,visualKernelB.canvas,visualKernelA.canvas];},getMinifySafeName:function getMinifySafeName(fn){try{var ast=acorn.parse("const value = ".concat(fn.toString()));var init=ast.body[0].declarations[0].init;return init.body.name||init.body.body[0].argument.name;}catch(e){throw new Error('Unrecognized function type.  Please use `() => yourFunctionVariableHere` or function() { return yourFunctionVariableHere; }');}},sanitizeName:function sanitizeName(name){if(dollarSign.test(name)){name=name.replace(dollarSign,'S_S');}if(doubleUnderscore.test(name)){name=name.replace(doubleUnderscore,'U_U');}else if(singleUnderscore.test(name)){name=name.replace(singleUnderscore,'u_u');}return name;}};var dollarSign=/\$/;var doubleUnderscore=/__/;var singleUnderscore=/_/;var _systemEndianness=utils.getSystemEndianness();module.exports={utils:utils};},{"./input":110,"./texture":113,"acorn":1}]},{},[107])(107);});

/***/ }),

/***/ 992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T9": () => (/* binding */ gpuUtils)
});

// UNUSED EXPORTS: makeCanvasKrnl, makeKrnl

// EXTERNAL MODULE: ./src/utils/gpu/gpu-browser.min.js
var gpu_browser_min = __webpack_require__(638);
;// CONCATENATED MODULE: ./src/utils/gpu/gpuUtils-functs.js
var _createGpuKernels;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//By Joshua Brewster, Dovydas Stirpeika (MIT License)
//------------------------------------
//---------GPU Utility Funcs---------- (gpu.addFunction())
//------------------------------------
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function cadd(a_real, a_imag, b_real, b_imag) {
  return [a_real + b_real, a_imag + b_imag];
}

function csub(a_real, a_imag, b_real, b_imag) {
  return [a_real - b_real, a_imag - b_imag];
}

function cmul(a_real, a_imag, b_real, b_imag) {
  return [a_real * b_real - a_imag * b_imag, a_real * b_imag + a_imag * b_real];
}

function cexp(a_real, a_imag) {
  var er = Math.exp(a_real);
  return [er * Math.cos(a_imag), er * Math.sin(a_imag)];
}

function mag(a, b) {
  // Returns magnitude
  return Math.sqrt(a * a + b * b);
}

function conj(imag) {
  //Complex conjugate of x + iy is x - iy
  return 0 - imag;
}

function lof(n) {
  //Lowest odd factor
  var sqrt_n = Math.sqrt(n);
  var factor = 3;

  while (factor <= sqrt_n) {
    if (n % factor === 0) return factor;
    factor += 2;
  }
}

function mean(arr, len) {
  var mean = 0;

  for (var i = 0; i < len; i++) {
    mean += arr[i];
  }

  return mean / len;
}

function est(arr, mean, len) {
  var est = 0;

  for (var i = 0; i < len; i++) {
    est += (arr[i] - mean) * (arr[i] - mean);
  }

  return Math.sqrt(est);
}

function mse(arr, mean, len) {
  //mean squared error
  var est = 0;
  var vari = 0;

  for (var i = 0; i < len; i++) {
    vari = arr[i] - mean;
    est += vari * vari;
  }

  return est / len;
}

function rms(arr, mean, len) {
  //root mean square error
  var est = 0;
  var vari = 0;

  for (var i = 0; i < len; i++) {
    vari = arr[i] - mean;
    est += vari * vari;
  }

  return Math.sqrt(est / len);
}

function xcor(arr1, arr1mean, arr1Est, arr2, arr2mean, arr2Est, len, delay) {
  //performs a single pass of a cross correlation equation, see correlogramsKern
  var correlation = 0;

  for (var i = 0; i < len; i++) {
    var j = i + delay;
    var k = 0;

    if (j < len) {
      k = arr2[j];
    }

    correlation += (arr1[i] - arr1mean) * (k - arr2mean);
  }

  return correlation / (arr1Est * arr2Est);
}

function softmax(array, len, i) {
  // Returns a single array value for a 1d softmax function.
  var esum = 0;

  for (var j = 0; j < len; j++) {
    esum += Math.exp(array[j]);
  }

  return Math.exp(array[i]) / esum;
}

function DFT(signal, len, freq) {
  //Extract a particular frequency
  var real = 0;
  var imag = 0;

  var _len = 1 / len;

  var shared = 6.28318530718 * freq * _len;

  for (var i = 0; i < len; i++) {
    var sharedi = shared * i; //this.thread.x is the target frequency

    real = real + signal[i] * Math.cos(sharedi);
    imag = imag - signal[i] * Math.sin(sharedi);
  } //var mag = Math.sqrt(real[k]*real[k]+imag[k]*imag[k]);


  return [real * _len, imag * _len]; //mag(real,imag)
}

function DFTlist(signals, len, freq, n) {
  //Extract a particular frequency
  var real = 0;
  var imag = 0;

  var _len = 1 / len;

  var shared = 6.28318530718 * freq * _len;

  for (var i = 0; i < len; i++) {
    var sharedi = shared * i; //this.thread.x is the target frequency

    real = real + signals[i + (len - 1) * n] * Math.cos(sharedi);
    imag = imag - signals[i + (len - 1) * n] * Math.sin(sharedi);
  } //var mag = Math.sqrt(real[k]*real[k]+imag[k]*imag[k]);


  return [real * _len, imag * _len]; //mag(real,imag)
} //FFT, simply implements a nyquist frequency based index skip for frequencies <= sampleRate*.25.
//Other optimization: could do 4 loops per thread and return a vec4, this is what you see in some other ultrafast libs


function FFT(signal, len, freq, sr) {
  //Extract a particular frequency
  var real = 0;
  var imag = 0;

  var _len = 1 / len;

  var shared = 6.28318530718 * freq * _len;
  var skip = 1;
  var N = 0;
  var factor = sr * .25;

  if (freq <= factor) {
    while (freq <= factor) {
      factor = factor * .5;
      skip += 1;
    }
  }

  for (var i = 0; i < len; i += skip) {
    var j = i;

    if (j > len) {
      j = len;
    }

    var sharedi = shared * j; //this.thread.x is the target frequency

    real = real + signal[j] * Math.cos(sharedi);
    imag = imag - signal[j] * Math.sin(sharedi);
    N += 1;
  } //var mag = Math.sqrt(real[k]*real[k]+imag[k]*imag[k]);


  return [real / N, imag / N]; //mag(real,imag)
}

function FFTlist(signals, len, freq, n, sr) {
  //Extract a particular frequency from a 1D list of equal sized signal arrays. Uses less samples for lower frequencies closer to nyquist threshold
  var real = 0;
  var imag = 0;

  var _len = 1 / len;

  var shared = 6.28318530718 * freq * _len;
  var skip = 1;
  var N = 0;
  var factor = sr * .25;

  if (freq <= factor) {
    while (freq <= factor) {
      factor = factor * .5;
      skip += 1;
    }
  }

  for (var i = 0; i < len; i += skip) {
    var j = i;

    if (j > len) {
      j = len;
    }

    var sharedi = shared * j; //this.thread.x is the target frequency

    real = real + signals[j + (len - 1) * n] * Math.cos(sharedi);
    imag = imag - signals[j + (len - 1) * n] * Math.sin(sharedi);
    N += 1;
  } //var mag = Math.sqrt(real[k]*real[k]+imag[k]*imag[k]);


  return [real / N, imag / N]; //mag(real,imag)
} //Conjugated real and imaginary parts for iDFT (need to test still)


function iDFT(fft, len, freq) {
  //inverse DFT to return time domain
  var real = 0;
  var imag = 0;

  var _len = 1 / len;

  var shared = 6.28318530718 * freq * _len;

  for (var i = 0; i < len; i++) {
    var sharedi = shared * i; //this.thread.x is the target frequency

    real = real + fft[i] * Math.cos(sharedi);
    imag = fft[i] * Math.sin(sharedi) - imag;
  } //var mag = Math.sqrt(real[k]*real[k]+imag[k]*imag[k]);


  return [real * _len, imag * _len]; //mag(real,imag)
}

function iDFTlist(fft, len, freq, n) {
  //inverse DFT to return time domain 
  var real = 0;
  var imag = 0;

  var _len = 1 / len;

  var shared = 6.28318530718 * freq * _len;

  for (var i = 0; i < len; i++) {
    var sharedi = shared * i; //this.thread.x is the target frequency

    real = real + fft[i + (len - 1) * n] * Math.cos(sharedi);
    imag = fft[i + (len - 1) * n] * Math.sin(sharedi) - imag;
  } //var mag = Math.sqrt(real[k]*real[k]+imag[k]*imag[k]);


  return [real * _len, imag * _len]; //mag(real,imag)
}

function iFFT(fft, len, freq, sr) {
  //inverse FFT to return time domain
  var real = 0;
  var imag = 0;

  var _len = 1 / len;

  var shared = 6.28318530718 * freq * _len;
  var skip = 1;
  var N = 0;
  var factor = sr * .25;

  if (freq <= factor) {
    while (freq <= factor) {
      factor = factor * .5;
      skip += 1;
    }
  }

  for (var i = 0; i < len; i += skip) {
    var j = i;

    if (j > len) {
      j = len;
    }

    var sharedi = shared * j; //this.thread.x is the target frequency

    real = real + fft[j] * Math.cos(sharedi);
    imag = fft[j] * Math.sin(sharedi) - imag;
    N += 1;
  } //var mag = Math.sqrt(real[k]*real[k]+imag[k]*imag[k]);


  return [real / N, imag / N]; //mag(real,imag)
}

function iFFTlist(signals, len, freq, n, sr) {
  //Extract a particular frequency from a 1D list of equal sized signal arrays. Uses less samples for lower frequencies closer to nyquist threshold
  var real = 0;
  var imag = 0;

  var _len = 1 / len;

  var shared = 6.28318530718 * freq * _len;
  var skip = 1;
  var N = 0;
  var factor = sr * .25;

  if (freq <= factor) {
    while (freq <= factor) {
      factor = factor * .5;
      skip += 1;
    }
  }

  for (var i = 0; i < len; i += skip) {
    var j = i;

    if (j > len) {
      j = len;
    }

    var sharedi = shared * j; //this.thread.x is the target frequency

    real = real + signals[j + (len - 1) * n] * Math.cos(sharedi);
    imag = signals[j + (len - 1) * n] * Math.sin(sharedi) - imag;
    N += 1;
  } //var mag = Math.sqrt(real[k]*real[k]+imag[k]*imag[k]);


  return [real / N, imag / N]; //mag(real,imag)
}

function conv2D(src, width, height, kernel, kernelRadius) {
  var kSize = 2 * kernelRadius + 1;
  var r = 0,
      g = 0,
      b = 0;
  var i = -kernelRadius;
  var imgOffset = 0,
      kernelOffset = 0;

  while (i <= kernelRadius) {
    if (this.thread.x + i < 0 || this.thread.x + i >= width) {
      i++;
      continue;
    }

    var j = -kernelRadius;

    while (j <= kernelRadius) {
      if (this.thread.y + j < 0 || this.thread.y + j >= height) {
        j++;
        continue;
      }

      kernelOffset = (j + kernelRadius) * kSize + i + kernelRadius;
      var weights = kernel[kernelOffset];
      var pixel = src[this.thread.y + i][this.thread.x + j];
      r += pixel.r * weights;
      g += pixel.g * weights;
      b += pixel.b * weights;
      j++;
    }

    i++;
  }

  this.color(r, g, b);
} //------------------------------------
//---------Kernel functions----------- (gpu.createKernel(func))
//------------------------------------


function correlogramsKern(arrays, len) {
  //Computes cross correlations of each pair of arrays given to the function. so xcor[0,1],xcor[2,3],etc
  var k = Math.floor(this.thread.x / len) * 2;
  var delay = this.thread.x - Math.floor(this.thread.x / len) * len;
  var arr1mean = mean(arrays[k], len);
  var arr2mean = mean(arrays[k + 1], len);
  var arr1Est = est(arrays[k], arr1mean, len);
  var arr2Est = est(arrays[k + 1], arr2mean, len);
  var y_x = xcor(arrays[k], arr1mean, arr1Est, arrays[k + 1], arr2mean, arr2Est, len, delay);
  return y_x;
} //Computes cross correlations of each pair of arrays given to the function. so xcor[0,1],xcor[2,3],etc
//Takes precomputed averages and estimators for each array for efficiency


function correlogramsPCKern(arrays, len, means, estimators) {
  var k = Math.floor(this.thread.x / len) * 2;
  var delay = this.thread.x - Math.floor(this.thread.x / len) * len;
  var arr1mean = means[k];
  var arr2mean = means[k + 1];
  var arr1Est = estimators[k];
  var arr2Est = estimators[k + 1];
  var y_x = xcor(arrays[k], arr1mean, arr1Est, arrays[k + 1], arr2mean, arr2Est, len, delay);
  return y_x;
} //Return frequency domain based on DFT


function dftKern(signal, len, scalar) {
  var result = DFT(signal, len, this.thread.x);
  return mag(result[0], result[1]) * scalar;
}

function idftKern(amplitudes, len, scalar) {
  var result = iDFT(amplitudes, len, this.thread.x);
  return mag(result[0], result[1]) * scalar;
}

function fftKern(signal, len, scalar, sampleRate) {
  var result = FFT(signal, len, this.thread.x, sampleRate);
  return mag(result[0], result[1]) * scalar;
}

function ifftKern(amplitudes, len, scalar, sampleRate) {
  var result = iFFT(amplitudes, len, this.thread.x, sampleRate);
  return mag(result[0], result[1]) * scalar;
} // Takes a 2D array input [signal1[],signal2[],signal3[]]; does not work atm


function listdft2DKern(signals, scalar) {
  var len = this.output.x;
  var result = DFT(signals[this.thread.y], len, this.thread.x); //var mag = Math.sqrt(real[k]*real[k]+imag[k]*imag[k]);

  return mag(result[0], result[1]) * scalar; //mag(real,imag)
} // [[signals1][signals2]]
// More like a vertex buffer list to chunk through lists of signals


function listdft1DKern(signals, len, scalar) {
  var result = [0, 0];

  if (this.thread.x <= len) {
    result = DFT(signals, len, this.thread.x);
  } else {
    var n = Math.floor(this.thread.x / len);
    result = DFTlist(signals, len, this.thread.x - n * len, n);
  }

  return mag(result[0], result[1]) * scalar;
} // [signals1,signasl2]
// More like a vertex buffer list to chunk through lists of signals


function listfft1DKern(signals, len, scalar, sps) {
  var result = [0, 0];

  if (this.thread.x <= len) {
    result = FFT(signals, len, this.thread.x, sps);
  } else {
    var n = Math.floor(this.thread.x / len);
    result = FFTlist(signals, len, this.thread.x - n * len, n, sps);
  }

  return mag(result[0], result[1]) * scalar;
} // [signals1,signasl2]


function dft_windowedKern(signal, sampleRate, freqStart, freqEnd, scalar) {
  var result = [0, 0];
  var freq = this.thread.x / sampleRate * (freqEnd - freqStart) + freqStart;
  result = DFT(signal, sampleRate, freq);
  return mag(result[0], result[1]) * scalar;
} //windowed functions should use a 1 second window for these hacky DFTs/FFTs to work right.


function fft_windowedKern(signal, sampleRate, freqStart, freqEnd, scalar) {
  var result = [0, 0];
  var freq = this.thread.x / sampleRate * (freqEnd - freqStart) + freqStart;
  result = FFT(signal, sampleRate, freq);
  return mag(result[0], result[1]) * scalar;
}

function idft_windowedKern(amplitudes, sampleRate, freqStart, freqEnd, scalar) {
  var result = [0, 0];
  var freq = this.thread.x / sampleRate * (freqEnd - freqStart) + freqStart;
  result = iDFT(amplitudes, sampleRate, freq);
  return mag(result[0], result[1]) * scalar;
}

function ifft_windowedKern(amplitudes, sampleRate, freqStart, freqEnd, scalar) {
  var result = [0, 0];
  var freq = this.thread.x / sampleRate * (freqEnd - freqStart) + freqStart;
  result = iFFT(amplitudes, sampleRate, freq);
  return mag(result[0], result[1]) * scalar;
}

function listdft1D_windowedKern(signals, sampleRate, freqStart, freqEnd, scalar) {
  //Will make a higher resolution DFT for a smaller frequency window.
  var result = [0, 0];

  if (this.thread.x < sampleRate) {
    var freq = this.thread.x / sampleRate * (freqEnd - freqStart) + freqStart;
    result = DFT(signals, sampleRate, freq);
  } else {
    var n = Math.floor(this.thread.x / sampleRate);
    var freq = (this.thread.x - n * sampleRate) / sampleRate * (freqEnd - freqStart) + freqStart;
    result = DFTlist(signals, sampleRate, freq - n * sampleRate, n);
  } //var mags = mag(result[0],result[1]);


  return mag(result[0], result[1]) * scalar;
}

function listfft1D_windowedKern(signals, sampleRate, freqStart, freqEnd, scalar) {
  //Will make a higher resolution DFT for a smaller frequency window.
  var result = [0, 0];

  if (this.thread.x < sampleRate) {
    var freq = this.thread.x / sampleRate * (freqEnd - freqStart) + freqStart;
    result = FFT(signals, sampleRate, freq, sampleRate);
  } else {
    var n = Math.floor(this.thread.x / sampleRate);
    var freq = (this.thread.x - n * sampleRate) / sampleRate * (freqEnd - freqStart) + freqStart;
    result = FFTlist(signals, sampleRate, freq - n * sampleRate, n, sampleRate);
  } //var mags = mag(result[0],result[1]);


  return mag(result[0], result[1]) * scalar;
}

function listidft1D_windowedKern(ffts, sampleRate, freqStart, freqEnd, scalar) {
  //Will make a higher resolution DFT for a smaller frequency window.
  var result = [0, 0];

  if (this.thread.x < sampleRate) {
    var freq = this.thread.x / sampleRate * (freqEnd - freqStart) + freqStart;
    result = iDFT(ffts, sampleRate, freq);
  } else {
    var n = Math.floor(this.thread.x / sampleRate);
    var freq = (this.thread.x - n * sampleRate) / sampleRate * (freqEnd - freqStart) + freqStart;
    result = iDFTlist(ffts, sampleRate, freq - n * sampleRate, n);
  } //var mags = mag(result[0],result[1]);


  return mag(result[0] * 2, result[1] * 2) * scalar; //Multiply result by 2 since we are only getting the positive results and want to estimate the actual amplitudes (positive = half power, reflected in the negative axis)
}

function listifft1D_windowedKern(ffts, sampleRate, freqStart, freqEnd, scalar) {
  //Will make a higher resolution DFT for a smaller frequency window.
  var result = [0, 0];

  if (this.thread.x < sampleRate) {
    var freq = this.thread.x / sampleRate * (freqEnd - freqStart) + freqStart;
    result = iFFT(ffts, sampleRate, freq);
  } else {
    var n = Math.floor(this.thread.x / sampleRate);
    var freq = (this.thread.x - n * sampleRate) / sampleRate * (freqEnd - freqStart) + freqStart;
    result = iFFTlist(ffts, sampleRate, freq - n * sampleRate, n);
  } //var mags = mag(result[0],result[1]);


  return mag(result[0] * 2, result[1] * 2) * scalar; //Multiply result by 2 since we are only getting the positive results and want to estimate the actual amplitudes (positive = half power, reflected in the negative axis)
} //e.g. arrays = [[arr1],[arr2],[arr3],[arr4],[arr5],[arr6]], len = 10, n = 2, scalar=1... return results of [arr1*arr2], [arr3*arr4], [arr5*arr6] as one long array that needs to be split


function bulkArrayMulKern(arrays, len, n, scalar) {
  var i = n * Math.floor(this.thread.x / len); //Jump forward in array buffer

  var product = arrays[i][this.thread.x];

  for (var j = 0; j < n; j++) {
    product *= arrays[j][this.thread.x];
  }

  return product * scalar;
}

function multiImgConv2DKern(img, width, height, kernels, kernelLengths, nKernels, graphical) {
  for (var i = 0; i < nKernels; i++) {
    var kernelLength = kernelLengths[i];
    var kernelRadius = (Math.sqrt(kernelLength) - 1) / 2;
    conv2D(img, width, height, kernels[i], kernelRadius);
  }

  if (graphical === 0) {
    return [this.color.r, this.color.g, this.color.b];
  }
}

function transpose2DKern(mat2) {
  //Transpose a 2D matrix, meant to be combined
  return mat2[this.thread.y][this.thread.x];
} //function deferredPass(vPos, vNorm, vAlbedo, vDepth, vSpec) {  } //project geometry, light geometry

/*
Scene drawing:
(With depth testing enabled)
1. Project object local spaces to world space based on geometry and world coordinates
1.5 do some occlusion culling for which texture data to send to the gpu, requires last camera matrix
2. Now send to lighting pass, with coloring properties defined by different texture maps. 
3. Project result to camera space based on camera position and aperture.
4. Draw result
*/
//Note on pixel operations in gpujs: create kernel with setGraphical(true), render() to offscreencanvas, get render.getPixels() on each frame for pixel values which can be stored math operations
//Exports


var createGpuKernels = (_createGpuKernels = {
  correlogramsKern: correlogramsKern,
  correlogramsPCKern: correlogramsPCKern,
  dftKern: dftKern,
  idftKern: idftKern,
  fftKern: fftKern,
  ifftKern: ifftKern,
  dft_windowedKern: dft_windowedKern,
  idft_windowedKern: idft_windowedKern,
  fft_windowedKern: fft_windowedKern,
  ifft_windowedKern: ifft_windowedKern,
  listdft2DKern: listdft2DKern,
  listdft1DKern: listdft1DKern,
  listfft1DKern: listfft1DKern,
  listfft1D_windowedKern: listfft1D_windowedKern,
  listdft1D_windowedKern: listdft1D_windowedKern,
  listidft1D_windowedKern: listidft1D_windowedKern,
  listifft1D_windowedKern: listifft1D_windowedKern,
  bulkArrayMulKern: bulkArrayMulKern
}, _defineProperty(_createGpuKernels, "fftKern", fftKern), _defineProperty(_createGpuKernels, "ifftKern", ifftKern), _defineProperty(_createGpuKernels, "multiImgConv2DKern", multiImgConv2DKern), _createGpuKernels);
var addGpuFunctions = [add, sub, mul, div, cadd, csub, cmul, cexp, mag, conj, lof, mean, est, mse, rms, xcor, softmax, DFT, DFTlist, iDFT, iDFTlist, FFT, iFFT, iFFTlist, conv2D];
;// CONCATENATED MODULE: ./src/utils/gpu/gpuUtils.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // becomes a window variable

 //By Joshua Brewster, Dovydas Stirpeika (MIT License)

function makeKrnl(gpu, f) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    setDynamicOutput: true,
    setDynamicArguments: true,
    setPipeline: true,
    setImmutable: true,
    setGraphical: false
  };
  var k = gpu.createKernel(f);
  if (opts.setDynamicOutput) k.setDynamicOutput(true);
  if (opts.setDynamicArguments) k.setDynamicArguments(true);
  if (opts.setPipeline) k.setPipeline(true);
  if (opts.setImmutable) k.setImmutable(true);
  if (opts.setGraphical) k.setGraphical(true); //.setOutput([signal.length]) //Call before running the kernel
  //.setLoopMaxIterations(signal.length);

  return k;
}
function makeCanvasKrnl(appendToId, gpu, f) {
  var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
    setDynamicOutput: true,
    setDynamicArguments: true,
    setPipeline: true,
    setImmutable: true,
    setGraphical: true
  };
  var k = makeKrnl(gpu, f, opts); //k();

  var canvas = k.canvas;
  document.getElementById(appendToId).appendChild(canvas);
  return k; //run k() with the input arguments in an animation loop, get graphical output.
}
var gpuUtils = /*#__PURE__*/function () {
  function gpuUtils() {
    var gpu = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new GPU();

    _classCallCheck(this, gpuUtils);

    this.gpu = gpu;
    this.kernels = []; // {name:"",f:foo(){}}

    this.canvaskernels = [];
    this.kernel;
    this.PI = 3.141592653589793;
    this.SQRT1_2 = 0.7071067811865476;
    this.addFunctions();
    this.imgkernels = {
      edgeDetection: [-1, -1, -1, -1, 8, -1, -1, -1, -1],
      boxBlur: [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9],
      sobelLeft: [1, 0, -1, 2, 0, -2, 1, 0, -1],
      sobelRight: [-1, 0, 1, -2, 0, 2, -1, 0, 1],
      sobelTop: [1, 2, 1, 0, 0, 0, -1, -2, -1],
      sobelBottom: [-1, 2, 1, 0, 0, 0, 1, 2, 1],
      identity: [0, 0, 0, 0, 1, 0, 0, 0, 0],
      gaussian3x3: [1, 2, 1, 2, 4, 2, 1, 2, 1],
      guassian7x7: [0, 0, 0, 5, 0, 0, 0, 0, 5, 18, 32, 18, 5, 0, 0, 18, 64, 100, 64, 18, 0, 5, 32, 100, 100, 100, 32, 5, 0, 18, 64, 100, 64, 18, 0, 0, 5, 18, 32, 18, 5, 0, 0, 0, 0, 5, 0, 0, 0],
      emboss: [-2, -1, 0, -1, 1, 1, 0, 1, 2],
      sharpen: [0, -1, 0, -1, 5, -1, 0, -1, 0]
    };
  } //adds math functions to use per-thread


  _createClass(gpuUtils, [{
    key: "addFunction",
    value: function addFunction() {
      var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function f() {};
      this.gpu.addFunction(func);
    } //add kernels to run based on input data. Input/Output sizes are dynamically allocated, functions are saved on the gpu to improve runtimes

  }, {
    key: "addKernel",
    value: function addKernel() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var krnl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function foo() {};
      var found = this.kernels.find(function (o) {
        if (o.name === name) {
          return true;
        }
      });

      if (!found) {
        this.kernels.push({
          name: name,
          krnl: makeKrnl(this.gpu, krnl)
        });
        return true;
      } else {
        console.error('Kernel already exists');
        return false;
      }
    }
  }, {
    key: "addCanvasKernel",
    value: function addCanvasKernel(name, f, appendToId) {
      var found = this.canvaskernels.find(function (o) {
        if (o.name === name) {
          return true;
        }
      });

      if (!found) {
        this.kernels.push({
          name: name,
          krnl: makeCanvasKrnl(appendToId, this.gpu, f)
        });
        return true;
      } else {
        console.error('Kernel already exists');
        return false;
      }
    } //combine two or more kernels into a single function, this lets you run multiple kernels on the GPU (with appropriately varying inputs/output sizes) before returning to the CPU.
    //Discount compute shaders

  }, {
    key: "combineKernels",
    value: function combineKernels(name) {
      var _this = this;

      var fs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var ckrnl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function foo() {};
      var found = this.kernels.find(function (o) {
        if (o.name === name) {
          return true;
        }
      });

      if (!found) {
        var _this$gpu;

        fs.forEach(function (f, i) {
          if (typeof f === 'string') {
            var found2 = _this.krnl.find(function (o) {
              if (o.name === name) {
                return true;
              }
            });

            if (found2) fs[i] = found2.kernel;else return false;
          } else if (typeof f === 'function') {
            if (_this[f.name]) {//cool
            } else {
              _this.addKernel(f.name, f);
            }
          }
        });
        this.kernels.push({
          name: name,
          krnl: (_this$gpu = this.gpu).combineKernels.apply(_this$gpu, _toConsumableArray(fs).concat([ckrnl]))
        });
        return true;
      } else {
        console.error('Kernel already exists');
        return false;
      }
    }
  }, {
    key: "callKernel",
    value: function callKernel() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var result;
      var found = this.customFunctions.find(function (o) {
        if (o.name === name) {
          result = o.krnl.apply(o, _toConsumableArray(args));
          return true;
        }
      });

      if (!found) {
        console.error('Kernel not found');
        return false;
      } else return result;
    }
  }, {
    key: "hasKernel",
    value: function hasKernel() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var found = this.customFunctions.find(function (o) {
        if (o.name === name) {
          return true;
        }
      });

      if (!found) {
        return false;
      } else return true;
    }
  }, {
    key: "addFunctions",
    value: function addFunctions() {
      var _this2 = this;

      addGpuFunctions.forEach(function (f) {
        return _this2.gpu.addFunction(f);
      });
      this.correlograms = makeKrnl(this.gpu, createGpuKernels.correlogramsKern);
      this.correlogramsPC = makeKrnl(this.gpu, createGpuKernels.correlogramsKern);
      this.dft = makeKrnl(this.gpu, createGpuKernels.dftKern);
      this.idft = makeKrnl(this.gpu, createGpuKernels.idftKern);
      this.dft_windowed = makeKrnl(this.gpu, createGpuKernels.dft_windowedKern);
      this.idft_windowed = makeKrnl(this.gpu, createGpuKernels.idft_windowedKern);
      this.fft = makeKrnl(this.gpu, createGpuKernels.fftKern);
      this.ifft = makeKrnl(this.gpu, createGpuKernels.ifftKern);
      this.fft_windowed = makeKrnl(this.gpu, createGpuKernels.fft_windowedKern);
      this.ifft_windowed = makeKrnl(this.gpu, createGpuKernels.ifft_windowedKern);
      this.listdft2D = makeKrnl(this.gpu, createGpuKernels.listdft2DKern);
      this.listdft1D = makeKrnl(this.gpu, createGpuKernels.listdft1DKern);
      this.listdft1D_windowed = makeKrnl(this.gpu, createGpuKernels.listdft1D_windowedKern);
      this.listfft1D = makeKrnl(this.gpu, createGpuKernels.listfft1DKern);
      this.listfft1D_windowed = makeKrnl(this.gpu, createGpuKernels.listfft1D_windowedKern);
      this.listidft1D_windowed = makeKrnl(this.gpu, createGpuKernels.listidft1D_windowedKern);
      this.listifft1D_windowed = makeKrnl(this.gpu, createGpuKernels.listifft1D_windowedKern);
      this.bulkArrayMul = makeKrnl(this.gpu, createGpuKernels.bulkArrayMulKern);
      this.multiConv2D = makeKrnl(this.gpu, createGpuKernels.multiImgConv2DKern);
      this.kernels.push({
        name: "correlograms",
        krnl: this.correlograms
      }, {
        name: "correlogramsPC",
        krnl: this.correlogramsPC
      }, {
        name: "dft",
        krnl: this.dft
      }, {
        name: "idft",
        krnl: this.idft
      }, {
        name: "dft_windowed",
        krnl: this.idft_windowed
      }, {
        name: "fft",
        krnl: this.fft
      }, {
        name: "ifft",
        krnl: this.ifft
      }, {
        name: "fft_windowed",
        krnl: this.fft_windowed
      }, {
        name: "ifft_windowed",
        krnl: this.ifft_windowed
      }, {
        name: "listdft2D",
        krnl: this.listdft2D
      }, {
        name: "listdft1D",
        krnl: this.listdft1D
      }, {
        name: "listdft1D_windowed",
        krnl: this.listdft1D_windowed
      }, {
        name: "listfft1D",
        krnl: this.listfft1D
      }, {
        name: "listfft1D_windowed",
        krnl: this.listfft1D_windowed
      }, {
        name: "listidft1D_windowed",
        krnl: this.listidft1D_windowed
      }, {
        name: "listifft1D_windowed",
        krnl: this.listifft1D_windowed
      }, {
        name: "bulkArrayMul",
        krnl: this.bulkArrayMul
      }, {
        name: "multiConv2D",
        krnl: this.multiConv2D
      }); //----------------------------------- Easy gpu pipelining
      //------------Combine Kernels-------- gpu.combineKernels(f1,f2,function(a,b,c) { f1(f2(a,b),c); });
      //----------------------------------- TODO: Make this actually work (weird error)
      //Bandpass FFT+iFFT to return a cleaned up waveform

      var signalBandpass = function signalBandpass(signal, sampleRate, freqStart, freqEnd, scalar) {
        //Returns the signal wave with the bandpass filter applied
        var dft = _this2.fft_windowed(signal, sampleRate, freqStart, freqEnd, scalar, 0);

        var filtered_signal = _this2.ifft_windowed(dft, sampleRate, freqStart, freqEnd, scalar);

        return filtered_signal;
      }; //this.signalBandpass = this.gpu.combineKernels(this.dft_windowedKern,this.idft_windowedKern, signalBandpass);


      var signalBandpassMulti = function signalBandpassMulti(signals, sampleRate, freqStart, freqEnd, scalar) {
        var dfts = _this2.listdft1D_windowed(signals, sampleRate, freqStart, freqEnd, scalar, new Array(Math.ceil(signals / sampleRate)).fill(0));

        var filtered_signals = _this2.listifft1D_windowed(dfts, sampleRate, freqStart, freqEnd, scalar);

        return filtered_signals;
      }; //this.signalBandpassMulti = this.gpu.combineKernels(this.listdft1D_windowed,this.listidft1D_windowed, signalBandpassMulti);
      //TODO: automatic auto/cross correlation and ordering.
      //Input signals like this : [signal1,signal2,autocor1,autocor2,crosscor,...repeat for desired coherence calculations] or any order of that.


      this.gpuCoherence = function (signals, sampleRate, freqStart, freqEnd, scalar) {
        //Take FFTs of the signals, their autocorrelations, and cross correlation (5 FFTs per coherence), then multiply.
        var xcors = _this2.correlograms(signals);

        var dfts = _this2.listfft1D_windowed(xcors, sampleRate, freqStart, freqEnd, scalar, new Array(Math.ceil(signals / sampleRate)).fill(0));

        var products = _this2.bulkArrayMul(dfts, sampleRate, 5, 1);

        return products;
      }; //Need to get this working to be MUCH faster, the above method returns to the CPU each call, the below does not.
      //this.gpuCoherence = this.gpu.combineKernels(this.listdft1D_windowedKern, this.bulkArrayMulKern, this.correlogramsKern, function gpuCoherence(signals,sampleRate,freqStart,freqEnd,scalar) {
      //  var xcors = this.correlograms(signals);
      //  var dfts = this.listdft1D_windowed(xcors, sampleRate, freqStart, freqEnd, scalar, new Array(Math.ceil(signals/sampleRate)).fill(0) );
      //  var products = this.bulkArrayMul(dfts, sampleRate, 5, 1);
      //  return products;
      //});

    }
  }, {
    key: "gpuXCors",
    value: function gpuXCors(arrays) {
      var precompute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var texOut = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      //gpu implementation for bulk cross/auto correlations, outputs [[0:0],[0:1],...,[1:1],...[n:n]]
      var outputTex;

      if (precompute === true) {
        //Precompute the means and estimators rather than in every single thread
        var means = [];
        var ests = [];
        arrays.forEach(function (arr, i) {
          means.push(arr.reduce(function (prev, curr) {
            return curr += prev;
          }) / arr.length);
          ests.push(Math.sqrt(means[i].reduce(function (sum, item) {
            return sum += Math.pow(item - mean1, 2);
          })));
        });
        var meansbuf = [];
        var estsbuf = [];
        var buffer = [];

        for (var i = 0; i < arrays.length; i++) {
          for (var j = i; j < arrays.length; j++) {
            var _buffer;

            (_buffer = buffer).push.apply(_buffer, _toConsumableArray(arrays[i]).concat(_toConsumableArray(arrays[j])));

            meansbuf.push(means[i], means[j]);
            estsbuf.push(ests[i], ests[j]);
          }
        }

        this.correlogramsPC.setOutput([buffer.length]);
        this.correlogramsPC.setLoopMaxIterations(arrays[0].length * 2);
        outputTex = this.correlogramsPC(buffer, arrays[0].length, meansbuf, estsbuf);
      } else {
        var buffer = [];

        for (var i = 0; i < arrays.length; i++) {
          for (var j = i; j < arrays.length; j++) {
            var _buffer2;

            (_buffer2 = buffer).push.apply(_buffer2, _toConsumableArray(arrays[i]).concat(_toConsumableArray(arrays[j])));
          }
        }

        this.correlograms.setOutput([buffer.length]);
        this.correlograms.setLoopMaxIterations(arrays[0].length * 2);
        outputTex = this.correlograms(buffer, arrays[0].length);
      }

      if (texOut === true) {
        return outputTex;
      }

      var outputbuf = outputTex.toArray();
      outputTex["delete"]();
      var outputarrs = [];

      for (var i = 0; i < arrays.length; i++) {
        outputarrs.push(outputbuf.splice(0, arrays[0].length));
      }

      return outputarrs;
    } //Input array buffer and the number of seconds of data

  }, {
    key: "gpuDFT",
    value: function gpuDFT(signalBuffer, nSeconds) {
      var scalar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var texOut = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var nSamples = signalBuffer.length;
      var sampleRate = nSamples / nSeconds;
      this.dft.setOutput([signalBuffer.length]);
      this.dft.setLoopMaxIterations(nSamples);
      var outputTex = this.dft(signalBuffer, nSamples, scalar, DCoffset);
      var output = null;

      if (texOut === false) {
        var freqDist = this.makeFrequencyDistribution(nSamples, sampleRate);
        var signalBufferProcessed = outputTex.toArray(); //console.log(signalBufferProcessed);

        outputTex["delete"]();
        return [freqDist, this.orderMagnitudes(signalBufferProcessed)]; //Returns x (frequencies) and y axis (magnitudes)
      } else {
        var tex = outputTex;
        outputTex["delete"]();
        return tex;
      }
    } //Input array of array buffers of the same length and the number of seconds recorded

  }, {
    key: "MultiChannelDFT",
    value: function MultiChannelDFT(signalBuffer, nSeconds) {
      var scalar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var texOut = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var signalBufferProcessed = [];
      signalBuffer.forEach(function (row) {
        var _signalBufferProcesse;

        (_signalBufferProcesse = signalBufferProcessed).push.apply(_signalBufferProcesse, _toConsumableArray(row));
      }); //console.log(signalBufferProcessed);

      var nSamplesPerChannel = signalBuffer[0].length;
      var sampleRate = nSamplesPerChannel / nSeconds;
      this.listdft1D.setOutput([signalBufferProcessed.length]); //Set output to length of list of signals

      this.listdft1D.setLoopMaxIterations(nSamplesPerChannel); //Set loop size to the length of one signal (assuming all are uniform length)

      var outputTex = this.listdft1D(signalBufferProcessed, nSamplesPerChannel, scalar);

      if (texOut === false) {
        var orderedMagsList = [];
        var freqDist = this.makeFrequencyDistribution(nSamplesPerChannel, sampleRate);
        signalBufferProcessed = outputTex.toArray(); //console.log(signalBufferProcessed);

        for (var i = 0; i < signalBufferProcessed.length; i += nSamplesPerChannel) {
          orderedMagsList.push(this.orderMagnitudes(_toConsumableArray(signalBufferProcessed.slice(i, i + nSamplesPerChannel))));
        } //Now slice up the big buffer into individual arrays for each signal


        outputTex["delete"]();
        return [freqDist, orderedMagsList]; //Returns x (frequencies) and y axis (magnitudes)
      } else {
        var tex = outputTex;
        outputTex["delete"]();
        return tex;
      }
    } //Input buffer of signals [[channel 0],[channel 1],...,[channel n]] with the same number of samples for each signal. Returns arrays of the positive DFT results in the given window.

  }, {
    key: "MultiChannelDFT_Bandpass",
    value: function MultiChannelDFT_Bandpass() {
      var signalBuffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var nSeconds = arguments.length > 1 ? arguments[1] : undefined;
      var freqStart = arguments.length > 2 ? arguments[2] : undefined;
      var freqEnd = arguments.length > 3 ? arguments[3] : undefined;
      var scalar = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var texOut = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var signalBufferProcessed = [];
      signalBuffer.forEach(function (row) {
        var _signalBufferProcesse2;

        (_signalBufferProcesse2 = signalBufferProcessed).push.apply(_signalBufferProcesse2, _toConsumableArray(row));
      }); //console.log(signalBufferProcessed);

      var freqEnd_nyquist = freqEnd * 2;
      var nSamplesPerChannel = signalBuffer[0].length;
      var sampleRate = nSamplesPerChannel / nSeconds;
      this.listdft1D_windowed.setOutput([signalBufferProcessed.length]); //Set output to length of list of signals

      this.listdft1D_windowed.setLoopMaxIterations(nSamplesPerChannel); //Set loop size to the length of one signal (assuming all are uniform length)

      var outputTex = this.listdft1D_windowed(signalBufferProcessed, sampleRate, freqStart, freqEnd_nyquist, scalar);

      if (texOut === true) {
        return outputTex;
      }

      signalBufferProcessed = outputTex.toArray();
      outputTex["delete"](); //console.log(signalBufferProcessed)
      //TODO: Optimize for SPEEEEEEED.. or just pass it str8 to a shader

      var freqDist = this.bandPassWindow(freqStart, freqEnd, sampleRate);
      return [freqDist, this.orderBPMagnitudes(signalBufferProcessed, nSeconds, sampleRate, nSamplesPerChannel)]; //Returns x (frequencies) and y axis (magnitudes)
    } //Input array buffer and the number of seconds of data

  }, {
    key: "gpuFFT",
    value: function gpuFFT(signalBuffer, nSeconds) {
      var scalar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var texOut = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var nSamples = signalBuffer.length;
      var sampleRate = nSamples / nSeconds;
      this.fft.setOutput([signalBuffer.length]);
      this.fft.setLoopMaxIterations(nSamples);
      var outputTex = this.fft(signalBuffer, nSamples, scalar, DCoffset);
      var output = null;

      if (texOut === false) {
        var freqDist = this.makeFrequencyDistribution(nSamples, sampleRate);
        var signalBufferProcessed = outputTex.toArray(); //console.log(signalBufferProcessed);

        outputTex["delete"]();
        return [freqDist, this.orderMagnitudes(signalBufferProcessed)]; //Returns x (frequencies) and y axis (magnitudes)
      } else {
        var tex = outputTex;
        outputTex["delete"]();
        return tex;
      }
    } //Input array of array buffers of the same length and the number of seconds recorded

  }, {
    key: "MultiChannelFFT",
    value: function MultiChannelFFT(signalBuffer, nSeconds) {
      var scalar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var texOut = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var signalBufferProcessed = [];
      signalBuffer.forEach(function (row) {
        var _signalBufferProcesse3;

        (_signalBufferProcesse3 = signalBufferProcessed).push.apply(_signalBufferProcesse3, _toConsumableArray(row));
      }); //console.log(signalBufferProcessed);

      var nSamplesPerChannel = signalBuffer[0].length;
      var sampleRate = nSamplesPerChannel / nSeconds;
      this.listfft1D.setOutput([signalBufferProcessed.length]); //Set output to length of list of signals

      this.listfft1D.setLoopMaxIterations(nSamplesPerChannel); //Set loop size to the length of one signal (assuming all are uniform length)

      var outputTex = this.listfft1D(signalBufferProcessed, nSamplesPerChannel, scalar);

      if (texOut === false) {
        var orderedMagsList = [];
        var freqDist = this.makeFrequencyDistribution(nSamplesPerChannel, sampleRate);
        signalBufferProcessed = outputTex.toArray(); //console.log(signalBufferProcessed);

        for (var i = 0; i < signalBufferProcessed.length; i += nSamplesPerChannel) {
          orderedMagsList.push(this.orderMagnitudes(_toConsumableArray(signalBufferProcessed.slice(i, i + nSamplesPerChannel))));
        } //Now slice up the big buffer into individual arrays for each signal


        outputTex["delete"]();
        return [freqDist, orderedMagsList]; //Returns x (frequencies) and y axis (magnitudes)
      } else {
        var tex = outputTex;
        outputTex["delete"]();
        return tex;
      }
    } //Input buffer of signals [[channel 0],[channel 1],...,[channel n]] with the same number of samples for each signal. Returns arrays of the positive DFT results in the given window.

  }, {
    key: "MultiChannelFFT_Bandpass",
    value: function MultiChannelFFT_Bandpass() {
      var signalBuffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var nSeconds = arguments.length > 1 ? arguments[1] : undefined;
      var freqStart = arguments.length > 2 ? arguments[2] : undefined;
      var freqEnd = arguments.length > 3 ? arguments[3] : undefined;
      var scalar = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var texOut = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var signalBufferProcessed = [];
      signalBuffer.forEach(function (row) {
        var _signalBufferProcesse4;

        (_signalBufferProcesse4 = signalBufferProcessed).push.apply(_signalBufferProcesse4, _toConsumableArray(row));
      }); //console.log(signalBufferProcessed);

      var freqEnd_nyquist = freqEnd * 2;
      var nSamplesPerChannel = signalBuffer[0].length;
      var sampleRate = nSamplesPerChannel / nSeconds;
      this.listfft1D_windowed.setOutput([signalBufferProcessed.length]); //Set output to length of list of signals

      this.listfft1D_windowed.setLoopMaxIterations(nSamplesPerChannel); //Set loop size to the length of one signal (assuming all are uniform length)

      var outputTex = this.listfft1D_windowed(signalBufferProcessed, sampleRate, freqStart, freqEnd_nyquist, scalar);

      if (texOut === true) {
        return outputTex;
      }

      signalBufferProcessed = outputTex.toArray();
      outputTex["delete"](); //console.log(signalBufferProcessed)
      //TODO: Optimize for SPEEEEEEED.. or just pass it str8 to a shader

      var freqDist = this.bandPassWindow(freqStart, freqEnd, sampleRate);
      return [freqDist, this.orderBPMagnitudes(signalBufferProcessed, nSeconds, sampleRate, nSamplesPerChannel)]; //Returns x (frequencies) and y axis (magnitudes)
    }
  }, {
    key: "orderMagnitudes",
    value: function orderMagnitudes(unorderedMags) {
      return [].concat(_toConsumableArray(unorderedMags.slice(Math.ceil(unorderedMags.length * .5), unorderedMags.length)), _toConsumableArray(unorderedMags.slice(0, Math.ceil(unorderedMags.length * .5))));
    }
  }, {
    key: "makeFrequencyDistribution",
    value: function makeFrequencyDistribution(FFTlength, sampleRate) {
      var N = FFTlength; // FFT size

      var df = sampleRate / N; // frequency resolution

      var freqDist = [];

      for (var i = -N / 2; i < N / 2; i++) {
        var freq = i * df;
        freqDist.push(freq);
      }

      return freqDist;
    } //Order and sum positive magnitudes from bandpass DFT

  }, {
    key: "orderBPMagnitudes",
    value: function orderBPMagnitudes(signalBufferProcessed, nSeconds, sampleRate, nSamplesPerChannel) {
      var magList = [];

      for (var i = 0; i < signalBufferProcessed.length; i += nSamplesPerChannel) {
        magList.push(_toConsumableArray(signalBufferProcessed.slice(i, Math.ceil(nSamplesPerChannel * .5 + i))));
      }

      var summedMags = [];

      var _sampleRate = 1 / sampleRate;

      if (nSeconds > 1) {
        //Need to sum results when sample time > 1 sec
        magList.forEach(function (row, k) {
          summedMags.push([]);

          var _max = 1 / Math.max.apply(Math, _toConsumableArray(row)); //uhh


          for (var i = 0; i < row.length; i++) {
            if (i == 0) {
              summedMags[k] = row.slice(i, Math.floor(sampleRate));
              i = Math.floor(sampleRate);
            } else {
              var j = i - Math.floor(Math.floor(i * _sampleRate) * sampleRate) - 1; //console.log(j);

              summedMags[k][j] = summedMags[k][j] * row[i - 1] * _max;
            }
          }

          summedMags[k] = _toConsumableArray(summedMags[k].slice(0, Math.ceil(summedMags[k].length * 0.5)));
        }); //console.log(summedMags);

        return summedMags;
      } else {
        return magList;
      }
    } //Returns the x axis (frequencies) for the bandpass filter amplitudes. The window gets stretched or squeezed between the chosen frequencies based on the sample rate in my implementation.

  }, {
    key: "bandPassWindow",
    value: function bandPassWindow(freqStart, freqEnd, nSteps) {
      var posOnly = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var freqEnd_nyquist = freqEnd * 2;
      var increment = (freqEnd_nyquist - freqStart) / nSteps;
      var fftwindow = [];

      if (posOnly === true) {
        for (var i = 0; i < Math.ceil(0.5 * nSteps); i += increment) {
          fftwindow.push(freqStart + (freqEnd_nyquist - freqStart) * i / nSteps);
        }
      } else {
        for (var i = -Math.ceil(0.5 * nSteps); i < Math.ceil(0.5 * nSteps); i += increment) {
          fftwindow.push(freqStart + (freqEnd_nyquist - freqStart) * i / nSteps);
        }
      }

      return fftwindow;
    }
  }]);

  return gpuUtils;
}();
var mandebrotFrag = "\nuniform sampler1D tex;\nuniform vec2 center;\nuniform float scale;\nuniform int iter;\n\nvoid main() {\n    vec2 z, c;\n\n    c.x = 1.3333 * (gl_TexCoord[0].x - 0.5) * scale - center.x;\n    c.y = (gl_TexCoord[0].y - 0.5) * scale - center.y;\n\n    int i;\n    z = c;\n    for(i=0; i<iter; i++) {\n        float x = (z.x * z.x - z.y * z.y) + c.x;\n        float y = (z.y * z.x + z.x * z.y) + c.y;\n\n        if((x * x + y * y) > 4.0) break;\n        z.x = x;\n        z.y = y;\n    }\n\n    gl_FragColor = texture1D(tex, (i == iter ? 0.0 : float(i)) / 100.0);\n}\n";
var juliaSetFrag = "\nuniform sampler1D tex;\nuniform vec2 c;\nuniform int iter;\n\nvoid main() {\n    vec2 z;\n    z.x = 3.0 * (gl_TexCoord[0].x - 0.5);\n    z.y = 2.0 * (gl_TexCoord[0].y - 0.5);\n\n    int i;\n    for(i=0; i<iter; i++) {\n        float x = (z.x * z.x - z.y * z.y) + c.x;\n        float y = (z.y * z.x + z.x * z.y) + c.y;\n\n        if((x * x + y * y) > 4.0) break;\n        z.x = x;\n        z.y = y;\n    }\n\n    gl_FragColor = texture1D(tex, (i == iter ? 0.0 : float(i)) / 100.0);\n}\n";

/***/ }),

/***/ 148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ Math2)
/* harmony export */ });
var _this3 = undefined;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//By Joshua Brewster (AGPL)

/**
 * Math2 Contains All Static Methods
 * We'll add more useful static things like filter kernels etc. as we get to making them.
 * 
 * //Just type these and the variable inputs that pop up should be easy to follow. Everything is commented otherwise till we document it
 * genSineWave() //generate a sine wave
 * getSineAmplitude() //get amplitude of a sine at time t
 * mean() //array mean
 * mode() //array mode
 * std() //standard dev
 * relError() //relative error
 * informationEntropy() //trying to build a maxent distribution off of this stuff
 * zscore() //array z score
 * variance() //variance
 * dot() //dot product
 * cross3D() //3d cross product
 * magnitude() //vector magnitude
 * distance() //distance function p1-p2
 * normalize() //array normalization
 * newtonsMethod() //root approximation
 * integral() //1d integral
 * dintegral() //2d integral
 * tintegral() //3d integral
 * pintegral() //2d path integral
 * makeVec() 
 * transpose(mat) //2d mat transpose
 * matmul(a,b) 
 * matscale(mat,scalar)
 * matadd(a,b)
 * matsub(a,b)
 * normalDistribution(samples=[], normalize=true) //create a norall (gaussian) distribution
 * expectedValue(samples=[],probabilities=this.normalDistribution(samples)) //get expected value of an array
 * originMoment(samples=[],probabilities=this.normalDistribution(samples),order=1) //statistical moment about origin
 * centralMoment(samples=[],probabilities=this.normalDistribution(samples),order=1) //statistical moment about mean
 * linearDiscriminantAnalysis(samples=[], classifier=[]) //LDA
 * conv1D(arr=[],kern=[],pad=0) //1d convolution //1d convolution
 * conv2D(mat=[[],[],[]],kern=[[],[],[]],pad=0) //2d convolution
 * cov2d(mat) //2d covariance
 * cov1d(arr1=[],arr2=[]) //1d covariance
 * cov3d(x=[],y=[],z=[]) //3d covariance
 * covNd(dimensionalData=[]) //nd covariance
 * eigens2x2(mat=[[1,2],[3,4]]) //fast 2x2 eigenvalue 
 * eigenvectors2x2(mat=[[1,2],[3,4]], eigens=[1,2]) //fast 2x2 eigenvector 
 * fastpca2d(xarr,yarr) //fast 2d pca
 * crosscorrelation(arr1,arr2) //crosscor
 * autocorrelation(arr1) //autocor
 * correlograms(dat=[[],[]]) //return cross correlations of many signals
 * sma(arr=[], window) //simple moving average 
 * sum(arr=[]) //array sum
 * reduceArrByFactor(arr,factor=2) //reduce array sizes
 * makeArr(startValue, stopValue, nSteps) //linspace
 * interpolateArray(data, fitCount, scalar=1) 
 * isExtrema(arr,critical='peak') //peak or valley
 * isCriticalPoint(arr,critical='peak') //peak, valley
 * peakDetect = (smoothedArray,type='peak',window=49) //wider window to find less peaks
 * getPeakThreshold(arr, peakIndices, thresholdVar)
 * 
 * eigens(M=[[],[]], tolerance=0.0001, max_iterations=1000)
 * pca(mat=[[],[]],tolerance = 0.00001) //power iteration method PCA
 * eigenvalue_of_vector(mat, eigenvector)
 * power_iteration(mat, tolerance=0.00001, max_iterations=1000)
 * squared_difference(v1, v2)
 * flatten_vector(v) //column to row
 * column(mat, x) //row to column
 * 
 */
var Math2 = /*#__PURE__*/function () {
  function Math2() {
    _classCallCheck(this, Math2);
  } //----------------------------------------------------------------
  //-------------------- Static Variables---------------------------
  //----------------------------------------------------------------
  //Throwing a bunch in here for the hell of it


  _createClass(Math2, null, [{
    key: "genSineWave",
    value: //----------------------------------------------------------------
    //-------------------- Static Functions --------------------------
    //----------------------------------------------------------------
    //Generate sinewave, you can add a noise frequency in too. Array length will be Math.ceil(fs*nSec)
    function genSineWave() {
      var freq = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
      var peakAmp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var nSec = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var fs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 512;
      var freq2 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var peakAmp2 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
      var sineWave = [];
      var t = [];
      var increment = 1 / fs; //x-axis time increment based on sample rate

      for (var ti = 0; ti < nSec; ti += increment) {
        var amplitude = Math.sin(2 * Math.PI * freq * ti) * peakAmp;
        amplitude += Math.sin(2 * Math.PI * freq2 * ti) * peakAmp2; //Add interference

        sineWave.push(amplitude);
        t.push(ti);
      }

      return [t, sineWave]; // [[times],[amplitudes]]
    } //get the sine amplitude at a particular time (seconds)

  }, {
    key: "getSineAmplitude",
    value: function getSineAmplitude() {
      var frequency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
      var peakAmplitude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var ti = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var tOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      return Math.sin(this.TWO_PI * frequency * ti + tOffset) * peakAmplitude;
    } //average value of array

  }, {
    key: "mean",
    value: function mean(arr) {
      var sum = arr.reduce(function (prev, curr) {
        return curr += prev;
      });
      return sum / arr.length;
    } //array mode (most commonly occurring number)

  }, {
    key: "mode",
    value: function mode(arr) {
      return arr.sort(function (a, b) {
        return arr.filter(function (v) {
          return v === a;
        }).length - arr.filter(function (v) {
          return v === b;
        }).length;
      }).pop();
    } //standard deviation

  }, {
    key: "std",
    value: function std(arr) {
      var mean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var avg = mean;
      if (!mean) avg = this.mean(arr);
      var summed = 0;

      for (var i = 0; i < arr.length; i++) {
        var subbed = arr[i] - avg;
        summed += subbed * subbed;
      }

      return Math.sqrt(summed / arr.length);
    } //find the relative error of predicted results

  }, {
    key: "relError",
    value: function relError() {
      var actual = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var forecast = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var abs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      if (actual.length !== forecast.length) throw new Error('Input arrays of same length!');
      var i = actual.length;
      var d = []; //relative errors

      for (var j = 0; j < i; j++) {
        var dd = (actual[j] - forecast[j]) / actual[j];
        if (abs) dd = Math.abs(dd);
        d.push(dd);
      }

      return d;
    } //returns information entropy in natural units (base e)

  }, {
    key: "informationEntropy",
    value: function informationEntropy() {
      var probabilities = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var entropy = [];
      var len = probabilities.length;

      for (var i = 0; i < len; i++) {
        var ent = probabilities[i] * Math.log(probabilities[i]);
        if (isNaN(ent)) ent = 0;
        entropy.push(ent);
      }

      return entropy;
    } //array zscore (probabilities)

  }, {
    key: "zscore",
    value: function zscore(arr) {
      var mean = this.mean(arr);
      var std = this.std(arr, mean);
      var z = [];

      for (var i = 0; i < arr.length; i++) {
        z.push((arr[i] - mean) / std);
      }

      return z;
    }
  }, {
    key: "variance",
    value: function variance(arr) {
      //Variance of 1D input arrays of length n
      var mean = this.mean(arr);
      return arr.reduce(function (a, b) {
        return a + Math.pow(b - mean, 2);
      }, 0) / arr.length;
    }
  }, {
    key: "dot",
    value: function dot(vec1, vec2) {
      //nDimensional vector dot product
      var dot = 0;

      for (var i = 0; i < vec1.length; i++) {
        dot += vec1[i] * vec2[i];
      }

      return dot;
    }
  }, {
    key: "cross3D",
    value: function cross3D(vec1, vec2) {
      //3D vector cross product
      return [vec1[1] * vec2[2] - vec1[2] * vec2[1], //x
      vec1[2] * vec2[0] - vec1[0] * vec2[2], //y
      vec1[0] * vec2[1] - vec1[1] * vec2[0] //z
      ];
    }
  }, {
    key: "magnitude",
    value: function magnitude(vec) {
      //nDimensional magnitude
      var sqrd = 0;
      vec.forEach(function (c) {
        sqrd += c * c;
      });
      return Math.sqrt(sqrd);
    }
  }, {
    key: "distance",
    value: function distance(point1, point2) {
      //nDimensional vector distance function
      var dsqrd = 0;
      point1.forEach(function (c, i) {
        dsqrd += (point2[i] - c) * (point2[i] - c);
      });
      return Math.sqrt(dsqrd);
    }
  }, {
    key: "normalize",
    value: function normalize(vec) {
      //nDimensional vector normalization
      var norm = 0;
      norm = this.magnitude(vec);
      var vecn = [];
      vec.forEach(function (c, i) {
        vecn.push(c * norm);
      });
      return vecn;
    } //return the quadratic roots based on your input ax^2 + bx + c = 0

  }, {
    key: "quadraticFormula",
    value: function quadraticFormula(a, b, c) {
      var bbmac4 = Math.sqrt(b * b - 4 * a * c);
      if (!isNaN(bbmac4)) return ['complex', 'complex'];

      var _a2 = 1 / (2 * a);

      if (bbmac4 === 0) return [b * _a2];
      var nb = -b;
      return [(nb + bbmac4) * _a2, (nb - bbmac4) * _a2];
    } //approximation of function roots. Provide a function (1d), window, and precision and it will return approximate roots along that window

  }, {
    key: "newtonsMethod",
    value: function newtonsMethod() {
      var foo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (x) {
        return Math.pow(x, 5) + x * x - x - 0.2;
      };
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var precision = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.01;
      var attempts = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 10;
      var roots = [];

      for (var i = 0; i < attempts; i++) {
        var seedx = Math.random() * (end - start);
        var guess = foo(seedx);
        var guess2 = foo(seedx + precision);
        var slope = (guess2 - guess) / precision;
        var xn = seedx + precision;

        while (Math.abs(slope) > precision) {
          var step = -guess / _slope;

          var _xn = xn + step;

          guess = guess2;
          guess2 = foo(_xn);

          var _slope = (guess2 - guess) / (_xn - xn);
        }

        var idx = void 0;
        var f = roots.find(function (root, i) {
          if (Math.abs(xn1 - root) < precision) {
            idx = i;
            return true;
          }
        });
        if (f) roots[idx] = (xn1 + f) * 0.5;else roots.push(xn1);
      }

      return roots;
    } //2D integral approximation using rectangular area under the curve. If you need absolute values be sure to return that.

  }, {
    key: "makeVec",
    value: function makeVec(point1, point2) {
      //Make vector from two nDimensional points (arrays)
      var vec = [];
      point1.forEach(function (c, i) {
        vec.push(point2[i] - c);
      });
      return vec;
    }
  }, {
    key: "transpose",
    value: function transpose(mat) {
      return mat[0].map(function (_, colIndex) {
        return mat.map(function (row) {
          return row[colIndex];
        });
      });
    } //2D Matrix multiplication from: https://stackoverflow.com/questions/27205018/multiply-2-matrices-in-javascript

  }, {
    key: "matmul",
    value: function matmul(a, b) {
      var aNumRows = a.length,
          aNumCols = a[0].length,
          bNumRows = b.length,
          bNumCols = b[0].length,
          m = new Array(aNumRows); // initialize array of rows

      for (var r = 0; r < aNumRows; ++r) {
        m[r] = new Array(bNumCols); // initialize the current row

        for (var c = 0; c < bNumCols; ++c) {
          m[r][c] = 0; // initialize the current cell

          for (var i = 0; i < aNumCols; ++i) {
            m[r][c] += a[r][i] * b[i][c];
          }
        }
      }

      return m;
    } //Apply scalar to 2D matrix 

  }, {
    key: "matscale",
    value: function matscale(mat, scalar) {
      var m = [];

      for (var i = 0; i < mat.length; i++) {
        m[i] = [];

        for (var j = 0; j < mat[0].length; j++) {
          m[i][j] = mat[i][j] * scalar;
        }
      }

      return m;
    } //2d matrix addition

  }, {
    key: "matadd",
    value: function matadd(a, b) {
      var m = [];

      for (var i = 0; i < a.length; i++) {
        m[i] = [];

        for (var j = 0; j < a[0].length; j++) {
          m[i][j] = a[i][j] + b[i][j];
        }
      }

      return m;
    } //2d matrix subtraction

  }, {
    key: "matsub",
    value: function matsub(a, b) {
      var m = [];

      for (var i = 0; i < a.length; i++) {
        m[i] = [];

        for (var j = 0; j < a[0].length; j++) {
          m[i][j] = a[i][j] - b[i][j];
        }
      }

      return m;
    } //return a histogram of the array, use nBins to override binSize

  }, {
    key: "histogram",
    value: function histogram() {
      var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var binSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var nBins = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

      var copy = _toConsumableArray(arr);

      copy.sort(function (a, b) {
        return a - b;
      }); //ascending sort

      var binStart = Math.min.apply(Math, _toConsumableArray(copy));

      if (typeof nBins === 'number') {
        var binEnd = Math.max.apply(Math, _toConsumableArray(copy));
        binSize = Math.abs((binEnd - binStart) / (nBins - 1));
      }

      var j = binStart;
      var binx = [];
      var biny = [];

      for (var i = 0; i < copy.length; i++) {
        var binidx = binSize * j;

        if (copy[i] > binStart + binidx) {
          j++;
          binidx += binSize;
          var binmin = binStart + binidx;
          var binmid = binmin + binidx * 0.5;
          binx.push(binmid);
          biny.push(0);
        }

        biny[biny.length - 1]++;
      }

      return [binx, biny];
    } //Get probability densities for the samples, set a cutoff to avoid obscenely small numbers

  }, {
    key: "normalDistribution",
    value: function normalDistribution() {
      var samples = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var normalize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var cutoff = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.0001;
      var m = this.mean(samples);
      var vari = this.variance(samples);
      var nSamples = samples.length;
      var probabilities = [];
      var denom = 1 / (this.TWO_PI * vari);

      var _variance = 1 / vari;

      var sum = 0; //for normalization

      for (var i = 0; i < nSamples; i++) {
        var px = Math.exp(-0.5 * Math.pow((samples[i] - m) * _variance, 2)) * denom;
        if (px < cutoff) px = 0;
        probabilities.push(px);
        sum += px;
      }

      if (normalize) {
        var _sum = 1 / sum;

        probabilities = probabilities.map(function (x) {
          return x * _sum;
        });
      }

      return probabilities;
    }
  }, {
    key: "expectedValue",
    value: function expectedValue() {
      var samples = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var probabilities = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.normalDistribution(samples);
      return samples.reduce(function (sum, item, idx) {
        return sum + item * probabilities[idx];
      });
    } //moment about the origin (statistics)

  }, {
    key: "originMoment",
    value: function originMoment() {
      var samples = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var probabilities = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.normalDistribution(samples);
      var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      return samples.reduce(function (sum, item, idx) {
        return sum + Math.pow(item, order) * probabilities[idx];
      });
    } //moment about the population mean (statistics)

  }, {
    key: "centralMoment",
    value: function centralMoment() {
      var samples = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var probabilities = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.normalDistribution(samples);
      var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var m = this.mean(samples);
      return samples.reduce(function (sum, item, idx) {
        return sum + Math.pow(item - m, order) * probabilities[idx] / samples.length;
      });
    }
  }, {
    key: "linearDiscriminantAnalysis",
    value: function linearDiscriminantAnalysis() {
      var samples = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var classifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var mean = this.mean(samples);
      var meank = this.mean(classifier);
      var covariance = this.cov1d(samples, classifier);
      var probs = this.normalDistribution(samples);
      var dk = [];

      for (var i = 0; i < samples.length; i++) {
        dk.push(x[i] * covariance * meank - .5 * mean * covariance * meank + Math.log10(probs[i]));
      }

      return dk;
    } //1D convolution (filtering)

  }, {
    key: "conv1D",
    value: function conv1D() {
      var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var kern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [1 / 3, 1 / 3, 1 / 3];
      var pad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Math.floor(kern.length * 0.5);
      var result = [];

      var _n = 1 / kern.length;

      if (pad > 0) {
        var pads = new Array(pad).fill(0);
        arr = [].concat(_toConsumableArray(pads), _toConsumableArray(arr), _toConsumableArray(pads));
      }

      var start = Math.floor(kern.length * 0.5); //offset since kernel will reduce size of array

      var end = arr.length - kern.length + start; //end index

      for (var i = start; i < end; i++) {
        var acc = 0;

        for (var j = 0; j < kern.length; j++) {
          acc += arr[i - start] * kern[j];
        }

        result.push(acc * _n);
      }

      return result;
    } //2D convolution (filtering), input 2d mat and 2d kernel 

  }, {
    key: "conv2D",
    value: function conv2D() {
      var mat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [[], [], []];
      var kern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [[], [], []];
      var pad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var result = new Array(mat.length - Math.ceil(kern.length * 0.5)).fill([]);
      var mat_t;
      var kern_t = Math2.transpose(kern_t);

      if (pad > 0) {
        var pads = new Array(pad).fill(0); //transpose to col/row

        mat_t = Math2.transpose(mat); //hard copy

        for (var _i = 0; _i < mat_t.length; _i++) {
          mat_t[_i] = [].concat(_toConsumableArray(pads), _toConsumableArray(mat_t[_i]), _toConsumableArray(pads));
        } //transpose back


        mat = Math2.transpose(mat_t);

        for (var j = 0; j < mat.length; j++) {
          mat[j] = [].concat(_toConsumableArray(pads), _toConsumableArray(mat[j]), _toConsumableArray(pads));
        }
      }

      var startr = Math.floor(kern[0].length * 0.5); //offset since kernel will reduce size of array

      var startl = Math.floor(kern_t[0].length * 0.5); //offset since kernel will reduce size of array

      var endr = mat[0].length - kern[0].length + startr; //row end

      var endl = mat_t[0].length - kern_t[0].length + startl; //column end

      var _n = 1 / (kern[0].length * kern_t[0].length);

      var iters = endr * endl; //number of convolutions to perform

      var i = startr;
      var x;
      var y = startl;

      while (i < iters) {
        var acc = 0;
        x = i % mat[0].length;

        if (x === 0) {
          y++;
        }

        for (var _j = 0; _j < kern[0].length; _j++) {
          for (var k = 0; k < kern_t[0].length; _j++) {
            acc += mat[y - startl + k][x - startr + _j] * kern[k][_j];
          }

          result[y].push(acc * _n);
        }

        i++;
      }

      return result;
    } //2D matrix covariance (e.g. for lists of signals). Pretty fast!!!

  }, {
    key: "cov2d",
    value: function cov2d(mat) {
      var _this = this;

      //[[x,y,z,w],[x,y,z,w],...] input list of vectors of the same length
      //Get variance of rows and columns
      //console.time("cov2d");
      var mattransposed = this.transpose(mat); //console.log(mattransposed)

      var matproducts = [];
      var rowmeans = [];
      var colmeans = [];
      mat.forEach(function (row, idx) {
        rowmeans.push(_this.mean(row));
      });
      mattransposed.forEach(function (col, idx) {
        colmeans.push(_this.mean(col));
      });
      mat.forEach(function (row, idx) {
        matproducts.push([]);

        for (var col = 0; col < row.length; col++) {
          matproducts[idx].push((mat[idx][col] - rowmeans[idx]) * (mat[idx][col] - colmeans[col]) / (row.length - 1));
        }
      });
      /*
      	mat[y][x] = (x - rowAvg)*(x - colAvg) / (mat[y].length - 1);
      */
      //console.log(matproducts);
      //Transpose matrix

      var matproductstransposed = this.transpose(matproducts); //Matrix multiplication, stolen from: https://stackoverflow.com/questions/27205018/multiply-2-matrices-in-javascript

      var aNumRows = matproducts.length,
          aNumCols = matproducts[0].length,
          bNumRows = matproductstransposed.length,
          bNumCols = matproductstransposed[0].length,
          m = new Array(aNumRows); // initialize array of rows

      for (var r = 0; r < aNumRows; ++r) {
        m[r] = new Array(bNumCols); // initialize the current row

        for (var c = 0; c < bNumCols; ++c) {
          m[r][c] = 0; // initialize the current cell

          for (var i = 0; i < aNumCols; ++i) {
            m[r][c] += matproducts[r][i] * matproductstransposed[i][c] / (mat[0].length - 1); //divide by row length - 1
          }
        }
      } //console.timeEnd("cov2d");


      return m; //Covariance matrix
    } //Covariance between two 1D arrays

  }, {
    key: "cov1d",
    value: function cov1d() {
      var arr1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var arr2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return this.cov2d([arr1, arr2]);
    } //3d covariance

  }, {
    key: "cov3d",
    value: function cov3d() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      return [[this.cov1d(x, x), this.cov1d(x, y), this.cov1d(x, z)], [this.cov1d(y, x), this.cov1d(y, y), this.cov1d(y, z)], [this.cov1d(z, x), this.cov1d(z, y), this.cov1d(z, z)]];
    } //n-dimensional covariance matrix

  }, {
    key: "covNd",
    value: function covNd() {
      var _this2 = this;

      var dimensionalData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var covariance = [];
      dimensionalData.forEach(function (arr, i) {
        covariance.push([]);
        dimensionalData.forEach(function (arr2, j) {
          covariance[i].push(_this2.cov1d(arr, arr2));
        });
      });
    } //fast 2x2 eigenvalue calculator: https://www.youtube.com/watch?v=e50Bj7jn9IQ

  }, {
    key: "eigens2x2",
    value: function eigens2x2() {
      var mat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [[1, 2], [3, 4]];
      var det = mat[0][0] * mat[1][1] - mat[0][1] * mat[1][0];
      var mean = (mat[0][0] + mat[1][1]) * .5;
      var sqrt = Math.sqrt(mean * mean - det);
      var eig1 = mean + sqrt;
      var eig2 = mean - sqrt;
      return [eig1, eig2];
    } //http://math.colgate.edu/~wweckesser/math312Spring06/handouts/IMM_2x2linalg.pdf

  }, {
    key: "eigenvectors2x2",
    value: function eigenvectors2x2() {
      var mat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [[1, 2], [3, 4]];
      var eigens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [1, 2];
      var v1 = [-mat[0][1], mat[0][0] - eigens[0]];

      if (v1[0] === 0 && v1[1] === 0) {
        v1[0] = mat[1][1] - eigens[0];
        v1[1] = -mat[1][0];
      }

      var v2 = [-mat[0][1], mat[0][0] - eigens[1]];

      if (v2[0] === 0 && v2[1] === 0) {
        v2[0] = mat[1][1] - eigens[1];
        v2[1] = -mat[1][0];
      }

      return [v1, v2];
    } //Fast PCA for 2D datasets https://towardsdatascience.com/a-one-stop-shop-for-principal-component-analysis-5582fb7e0a9c

  }, {
    key: "fastpca2d",
    value: function fastpca2d(xarr, yarr) {
      var cov1d = this.cov1d(xarr, yarr); //yields a 2x2 matrix

      var eigs = this.eigens2x2(cov1d);
      if (eigs[1] > eigs[0]) eigs.reverse();
      var evs = this.eigenvectors2x2(cov1d, eigs);
      console.log(eigs, evs);
      return [eigs, evs];
    } //Simple cross correlation.

  }, {
    key: "crosscorrelation",
    value: function crosscorrelation(arr1, arr2) {
      //console.time("crosscorrelation");
      var arr2buf = [].concat(_toConsumableArray(arr2), _toConsumableArray(Array(arr2.length).fill(0)));
      var mean1 = this.mean(arr1);
      var mean2 = this.mean(arr2); //Estimators

      var arr1Est = arr1.reduce(function (sum, item) {
        return sum += Math.pow(item - mean1, 2);
      });
      arr1Est = Math.sqrt(arr1Est);
      var arr2Est = arr2.reduce(function (sum, item) {
        return sum += Math.pow(item - mean1, 2);
      });
      arr2Est = Math.sqrt(arr2Est);

      var _arrEstsMul = 1 / (arr1Est * arr2Est);

      var correlations = new Array(arr1.length).fill(0);

      for (var delay = 0; delay < arr1.length; delay++) {
        var r = arr1.reduce(function (sum, item, i) {
          return sum += (item - mean1) * (arr2buf[delay + i] - mean2);
        });
        correlations[delay] = r * _arrEstsMul;
      } //console.timeEnd("crosscorrelation");


      return correlations;
    } //Simple autocorrelation. Better method for long series: FFT[x1] .* FFT[x2]

  }, {
    key: "autocorrelation",
    value: function autocorrelation(arr1) {
      var delaybuf = [].concat(_toConsumableArray(arr1), _toConsumableArray(Array(arr1.length).fill(0)));
      var mean1 = this.mean(arr1); //Estimators

      var arr1Est = arr1.reduce(function (sum, item) {
        return sum += Math.pow(item - mean1, 2);
      });
      arr1Est = Math.sqrt(arr1Est);

      var _arr1estsqrd = 1 / (arr1Est * arr1Est);

      var correlations = new Array(arr1.length).fill(0);

      for (var delay = 0; delay < arr1.length; delay++) {
        var r = arr1.reduce(function (sum, item, i) {
          return sum += (item - mean1) * (delaybuf[delay + i] - mean1);
        });
        correlations[delay] = r * _arr1estsqrd;
      }

      return correlations;
    } //Compute correlograms of the given array of arrays (of equal length). Input array of equal length arrays of latest raw data (use dat = eeg32instance.getTaggedRawData())

  }, {
    key: "correlograms",
    value: function correlograms() {
      var dat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [[], []];
      //Coherence network math for data pushed to the atlas
      var correlograms = []; //auto and cross correlations for each channel

      dat.forEach(function (row1, i) {
        dat.forEach(function (row2, j) {
          if (j >= i) {
            correlograms.push(Math2.crosscorrelation(row1, row2));
          }
        });
      });
      return correlograms; //Output ordered like (tag1:tag1, tag1:tag2 ... tag2:tag2, tag2:tag3 ... tagn:tagn) where autocorrelograms are also included
    } //Input data and averaging window, output array of moving averages (should be same size as input array, initial values not fully averaged due to window)

  }, {
    key: "sma",
    value: function sma() {
      var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var window = arguments.length > 1 ? arguments[1] : undefined;
      var smaArr = []; //console.log(arr);

      for (var i = 0; i < arr.length; i++) {
        if (i == 0) {
          smaArr.push(arr[0]);
        } else if (i < window) {
          //average partial window (prevents delays on screen)
          var arrslice = arr.slice(0, i + 1);
          smaArr.push(arrslice.reduce(function (previous, current) {
            return current += previous;
          }) / (i + 1));
        } else {
          //average windows
          var arrslice = arr.slice(i - window, i);
          smaArr.push(arrslice.reduce(function (previous, current) {
            return current += previous;
          }) / window);
        }
      } //console.log(temp);


      return smaArr;
    }
  }, {
    key: "sum",
    value: function sum() {
      var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (arr.length > 0) {
        var sum = arr.reduce(function (prev, curr) {
          return curr += prev;
        });
        return sum;
      } else {
        return 0;
      }
    }
  }, {
    key: "reduceArrByFactor",
    value: function reduceArrByFactor(arr) {
      var factor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      //faster than interpolating
      var x = arr.filter(function (element, index) {
        return index % factor === 0;
      });
      return x;
    } //Make an array of size n from a to b 

  }, {
    key: "makeArr",
    value: function makeArr(startValue, stopValue, nSteps) {
      var arr = [];
      var step = (stopValue - startValue) / (nSteps - 1);

      for (var i = 0; i < nSteps; i++) {
        arr.push(startValue + step * i);
      }

      return arr;
    } //Linear interpolation from https://stackoverflow.com/questions/26941168/javascript-interpolate-an-array-of-numbers. Input array and number of samples to fit the data to

  }, {
    key: "interpolateArray",
    value: function interpolateArray(data, fitCount) {
      var scalar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      var linearInterpolate = function linearInterpolate(before, after, atPoint) {
        return (before + (after - before) * atPoint) * scalar;
      };

      var newData = new Array();
      var springFactor = new Number((data.length - 1) / (fitCount - 1));
      newData[0] = data[0]; // for new allocation

      for (var i = 1; i < fitCount - 1; i++) {
        var tmp = i * springFactor;
        var before = new Number(Math.floor(tmp)).toFixed();
        var after = new Number(Math.ceil(tmp)).toFixed();
        var atPoint = tmp - before;
        newData[i] = linearInterpolate(data[before], data[after], atPoint);
      }

      newData[fitCount - 1] = data[data.length - 1]; // for new allocation

      return newData;
    }
  }, {
    key: "isExtrema",
    value: function isExtrema(arr) {
      var critical = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'peak';

      //Checks if the middle point of the (odd-numbered) array is a local extrema. options: 'peak','valley','tangent'. Even numbered arrays are popped
      var ref = _toConsumableArray(arr);

      if (ref.length % 2 === 0) ref.pop();

      if (arr.length > 1) {
        var pass = true;

        for (var i = 0; i < ref.length; i++) {
          var val = ref[i];

          if (critical === 'peak') {
            //search first derivative
            if (i < Math.floor(ref.length * .5) && val >= ref[Math.floor(ref.length * .5)]) {
              pass = false;
              break;
            } else if (i > Math.floor(ref.length * .5) && val >= ref[Math.floor(ref.length * .5)]) {
              pass = false;
              break;
            }
          } else if (critical === 'valley') {
            //search first derivative
            if (i < Math.floor(ref.length * .5) && val <= ref[Math.floor(ref.length * .5)]) {
              pass = false;
              break;
            } else if (i > Math.floor(ref.length * .5) && val <= ref[Math.floor(ref.length * .5)]) {
              pass = false;
              break;
            }
          } else {
            //look for tangents (best with 2nd derivative usually)
            if (i < Math.floor(ref.length * .5) && val <= ref[Math.floor(ref.length * .5)]) {
              pass = false;
              break;
            } else if (i > Math.floor(ref.length * .5) && val <= ref[Math.floor(ref.length * .5)]) {
              pass = false;
              break;
            }
          } //|| (i < ref.length*.5 && val <= 0 ) || (i > ref.length*.5 && val > 0)

        }

        if (critical !== 'peak' && critical !== 'valley' && pass === false) {
          pass = true;

          for (var _i2 = 0; _i2 < ref.length; _i2++) {
            var _val = ref[_i2];

            if (_i2 < Math.floor(ref.length * .5) && _val >= ref[Math.floor(ref.length * .5)]) {
              pass = false;
              break;
            } else if (_i2 > Math.floor(ref.length * .5) && _val >= ref[Math.floor(ref.length * .5)]) {
              pass = false;
              break;
            }
          }
        }

        return pass;
      } else return undefined;
    }
  }, {
    key: "isCriticalPoint",
    value: function isCriticalPoint(arr) {
      var critical = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'peak';

      //Checks if the middle point of the (odd-numbered) array is a critical point. options: 'peak','valley','tangent'. Even numbered arrays are popped
      var ref = _toConsumableArray(arr);

      if (ref.length % 2 === 0) ref.pop();

      if (arr.length > 1) {
        var pass = true;

        for (var i = 0; i < ref.length; i++) {
          var val = ref[i];

          if (critical === 'peak') {
            //search first derivative
            if (i < ref.length * .5 && val <= 0) {
              pass = false;
              break;
            } else if (i > ref.length * .5 && val > 0) {
              pass = false;
              break;
            }
          } else if (critical === 'valley') {
            //search first derivative
            if (i < ref.length * .5 && val >= 0) {
              pass = false;
              break;
            } else if (i > ref.length * .5 && val < 0) {
              pass = false;
              break;
            }
          } else {
            //look for tangents (best with 2nd derivative usually)
            if (i < ref.length * .5 && val >= 0) {
              pass = false;
              break;
            } else if (i > ref.length * .5 && val < 0) {
              pass = false;
              break;
            }
          }
        }

        if (critical !== 'peak' && critical !== 'valley' && pass === false) {
          pass = true;

          for (var _i3 = 0; _i3 < ref.length; _i3++) {
            var _val2 = ref[_i3];

            if (_i3 < ref.length * .5 && _val2 <= 0) {
              pass = false;
              break;
            } else if (_i3 > ref.length * .5 && _val2 > 0) {
              pass = false;
              break;
            }
          }
        }

        return pass;
      } else return undefined;
    } //returns array of indices of detected peaks/valleys

  }, {
    key: "getPeakThreshold",
    value: //gets a mean threshold based on peaks in an array
    function getPeakThreshold(arr, peakIndices, thresholdVar) {
      var threshold;
      var filtered = arr.filter(function (o, i) {
        if (peakIndices.indexOf(i) > -1) return true;
      });

      if (thresholdVar === 0) {
        threshold = this.mean(filtered);
      } else threshold = (thresholdVar + this.mean(filtered)) * 0.5;

      return threshold;
    } //-------------------------------------------------------------
    //The following n-dimensional Eigenvalue/PCA Math was adapted from: https://github.com/johnmihalik/eigenvector/blob/master/pca.js

  }, {
    key: "column",
    value: function column(mat, x) {
      var col = new Array(mat.length).fill(0).map(function () {
        return new Array(1).fill(0);
      });

      for (var i = 0; i < mat.length; i++) {
        col[i][0] = mat[i][x];
      }

      return col;
    } //flatten a vector of 1-value vectors

  }, {
    key: "flatten_vector",
    value: function flatten_vector(v) {
      var v_new = [];

      for (var i = 0; i < v.length; i++) {
        v_new[i] = v[i][0];
      }

      return v_new;
    }
  }, {
    key: "squared_difference",
    value: function squared_difference(v1, v2) {
      var sum = 0.0;

      for (var i = 0; i < v1.length; i++) {
        sum = sum + Math.pow(v1[i] - v2[i], 2);
      }

      return sum;
    } // See: https://math.stackexchange.com/questions/768882/power-method-for-finding-all-eigenvectors

  }, {
    key: "shift_deflate",
    value: function shift_deflate(mat, eigenvalue, eigenvector) {
      var len = Math.sqrt(this.matmul(this.transpose(eigenvector), eigenvector));
      var U = this.matscale(eigenvector, 1.0 / len);
      var delta = this.matscale(this.matmul(U, this.transpose(U)), eigenvalue);
      var M_new = this.matsub(mat, delta);
      return M_new;
    }
  }, {
    key: "eigenvalue_of_vector",
    value: function eigenvalue_of_vector(mat, eigenvector) {
      // Xt * M * x
      ev = this.matmul(this.matmul(this.transpose(eigenvector), mat), eigenvector);
      return ev;
    } //Input square 2D matrix

  }, {
    key: "power_iteration",
    value: function power_iteration(mat) {
      var tolerance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.00001;
      var max_iterations = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
      var rank = mat.length; // Initialize the first guess pf the eigenvector to a row vector of the sqrt of the rank

      var eigenvector = new Array(rank).fill(0).map(function () {
        return new Array(1).fill(Math.sqrt(rank));
      }); // Compute the corresponding eigenvalue

      var eigenvalue = this.eigenvalue_of_vector(mat, eigenvector);
      var epsilon = 1.0;
      var iter = 0;

      while (epsilon > tolerance && iter < max_iterations) {
        var old_eigenvalue = JSON.parse(JSON.stringify(eigenvalue)); // Multiply the Matrix M by the guessed eigenveector

        var Mv = this.matmul(mat, eigenvector); // Normalize the eigenvector to unit length

        eigenvector = this.normalize(Mv); // Calculate the associated eigenvalue with the eigenvector (transpose(v) * M * v)

        eigenvalue = this.eigenvalue_of_vector(mat, eigenvector); // Calculate the epsilon of the differences

        epsilon = Math.abs(eigenvalue - old_eigenvalue);
        iter++;
      }

      ;
      return [eigenvalue, eigenvector];
    } //Input square 2D matrix

  }, {
    key: "eigens",
    value: function eigens(mat) {
      var tolerance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.0001;
      var max_iterations = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
      var eigenvalues = [];
      var eigenvectors = [];

      for (var i = 0; i < mat.length; i++) {
        // Compute the remaining most prominent eigenvector of the matrix M
        var result = this.power_iteration(mat, tolerance, max_iterations); // Separate the eigenvalue and vector from the return array

        var eigenvalue = result[0];
        var eigenvector = result[1];
        eigenvalues[i] = eigenvalue;
        eigenvectors[i] = this.flatten_vector(eigenvector); // Now remove or peel off the last eigenvector

        mat = this.shift_deflate(mat, eigenvalue, eigenvector);
      }

      return [eigenvalues, eigenvectors];
    } //Input square 2D matrix. For eeg data you input a square covariance matrix of the signal data (or the z-scores of the signal data)

  }, {
    key: "pca",
    value: function pca(mat) {
      var tolerance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.00001;
      var dims = mat.length;
      var t = new Array(dims);
      var p = new Array(dims);
      var mat_t = this.transpose(mat);
      t[0] = this.column(mat, 0);
      var epsilon = 1.0;
      var iter = 0;

      while (espilon > tolerance) {
        iter++;
        p[0] = this.matmul(mat_t, t[0]);
        var tp = this.matmul(this.transpose(t[0]), t[0]);
        p[0] = this.matscale(p[0], 1.0 / tp); // Normalize p

        var p_length = Math.sqrt(this.matmul(this.transpose(p[0]), p[0]));
        p[0] = this.matscale(p[0], 1.0 / p_length);
        var t_new = this.matmul(mat, p[0]);
        var pp = this.matmul(this.transpose(p[0]), p[0]);
        t_new = this.matscale(t_new, 1.0 / pp);
        epsilon = this.squared_difference(t[0], t_new);
        t[0] = JSON.parse(JSON.stringify(t_new));
      }

      var components = this.matmul(this.transpose(t[0]), t[0]);
      return components;
    } //-------------------------------------------------------------
    //pass in 1 second of raw data ish recommended, desired event timestamps and signals are ordered from least current to most current 

  }, {
    key: "p300",
    value: function p300() {
      var event_timestamps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var raw_signal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var signal_timestamps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var sps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 256;
      var smoothingstep = Math.floor(sps / 10); //300ms width peak, 1/10th sec smoothing for filtering

      var smoothed = this.sma(raw_signal, smoothingstep);
      var peaks = this.peakDetect(smoothed, 'peak', smoothingstep); //returns indices of peaks

      var mean = this.mean(smoothed);
      var std = this.std(smoothed, mean);
      var p_idx = 0;
      var candidates = [];

      if (peaks.length > 0) {
        event_timestamps.forEach(function (t, j) {
          while (signal_timestamps[peaks[p_idx]] < t + 200) {
            //roll over peaks that are behind of the latest event + 200ms
            p_idx++;
            if (!peaks[p_idx]) break;
          }

          var tempi = 0;
          var tempcandidates = [];

          while (signal_timestamps[peaks[p_idx + tempi]] < t + 600) {
            //get peaks that are behind the latest event + (200ms-600ms)
            tempcandidates.push(p_idx + tempi);
            tempi++;
            if (!peaks[p_idx + tempi]) break;
          }

          if (tempcandidates.length > 1) {
            //if multiple peaks found choose the biggest one for the main p300 peak (not worrying about p1,p2,n1,n2 yet)
            var peakvals = [];
            tempcandidates.forEach(function (tc) {
              peakvals.push(smoothed[peaks[tc]]);
            });
            var max = Math.max.apply(Math, peakvals);
            var maxi = tempcandidates[peakvals.indexOf(max)];
            candidates.push({
              event_timestamp: t,
              event_index: j,
              peak_timestamp: signal_timestamps[[peaks[maxi]]],
              signal_index: [peaks[maxi]],
              signal_amplitude: raw_signal[[peaks[maxi]]],
              zscore: (smoothed[peaks[maxi]] - mean) / std //significance measure

            });
          } else if (tempcandidates.length === 1) candidates.push({
            event_timestamp: t,
            event_index: j,
            peak_timestamp: signal_timestamps[peaks[tempcandidates[0]]],
            signal_index: peaks[tempcandidates[0]],
            signal_amplitude: raw_signal[[peaks[tempcandidates[0]]]],
            zscore: (smoothed[peaks[tempcandidates[0]]] - mean) / std //significance measure

          });
        });
      }

      return candidates;
    }
  }]);

  return Math2;
}();
Math2.TWO_PI = Math.PI * 2;
Math2.C = 299792458;
Math2.G = 6.67430e-11;
Math2.h = 6.62607015e-34;
Math2.R = 8.31432e3;
Math2.Ra = 287;
Math2.H = 69.3;
Math2.kbar = 1.054571817e-34;
Math2.kB = 1.380649e-23;
Math2.ke = 8.9875517923e9;
Math2.me = 9.1093837015e-31;
Math2.mp = 1.67262192369e-27;
Math2.mn = 1.67492749804e-27;
Math2.P0 = 1.01325e5;
Math2.T0 = 288.15;
Math2.p0 = 1.225;
Math2.Na = 6.0220978e23;
Math2.y = 1.405;
Math2.M0 = 28.96643;
Math2.g0 = 9.80665;
Math2.Re = 6.3781e6;
Math2.B = 1.458e-6;
Math2.S = 110.4;
Math2.Sigma = 3.65e-10;
Math2.imgkernels = {
  edgeDetection: [[-1, -1, -1], [-1, 8, -1], [-1, -1, -1]],
  boxBlur: [[1 / 9, 1 / 9, 1 / 9], [1 / 9, 1 / 9, 1 / 9], [1 / 9, 1 / 9, 1 / 9]],
  sobelLeft: [[1, 0, -1], [2, 0, -2], [1, 0, -1]],
  sobelRight: [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]],
  sobelTop: [[1, 2, 1], [0, 0, 0], [-1, -2, -1]],
  sobelBottom: [[-1, 2, 1], [0, 0, 0], [1, 2, 1]],
  identity: [[0, 0, 0], [0, 1, 0], [0, 0, 0]],
  gaussian3x3: [[1, 2, 1], [2, 4, 2], [1, 2, 1]],
  guassian7x7: [[0, 0, 0, 5, 0, 0, 0], [0, 5, 18, 32, 18, 5, 0], [0, 18, 64, 100, 64, 18, 0], [5, 32, 100, 100, 100, 32, 5], [0, 18, 64, 100, 64, 18, 0], [0, 5, 18, 32, 18, 5, 0], [0, 0, 0, 5, 0, 0, 0]],
  emboss: [[-2, -1, 0], [-1, 1, 1], [0, 1, 2]],
  sharpen: [[0, -1, 0], [-1, 5, -1], [0, -1, 0]]
};

Math2.integral = function () {
  var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (x) {
    var y = x;
    return y;
  };
  var range = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var stepx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.01;
  var area = 0;

  for (var i = range[0]; i < range[1]; i += stepx) {
    var y = func(i);
    area += y * stepx;
  }

  return area;
};

Math2.dintegral = function () {
  var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (x, y) {
    var z = x + y;
    return z;
  };
  var range = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [[], []];
  var stepx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.01;
  var stepy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : stepx;
  var volume = 0;

  for (var i = range[0][0] + stepx; i < range[0][1]; i += stepx) {
    for (var j = range[1][0] + stepy; j < range[1][1]; j += stepy) {
      var z = func(i, j);
      volume += z * stepx * stepy;
    }
  }

  return volume;
};

Math2.tintegral = function () {
  var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (x, y, z) {
    var w = x + y + z;
    return w;
  };
  var range = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [[], [], []];
  var stepx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.01;
  var stepy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : stepx;
  var stepz = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : stepx;
  var volume = 0;

  for (var i = range[0][0] + stepx; i < range[0][1]; i += stepx) {
    for (var j = range[1][0] + stepy; j < range[1][1]; j += stepy) {
      for (var k = range[2][0] + stepz; k < range[2][1]; k += stepz) {
        var w = func(i, j, k);
        volume += w * stepx * stepy * stepz;
      }
    }
  }

  return volume;
};

Math2.pintegral = function () {
  var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (x) {
    var y = x;
    return y;
  };
  var range = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var stepx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.01;
  var length = 0;
  var y0 = undefined;
  var yi = undefined;

  for (var i = range[0]; i < range[1]; i += stepx) {
    y0 = yi;
    yi = func(i);
    if (y0) length += _this3.distance([0, y0], [stepx, yi]);
  }

  return length;
};

Math2.peakDetect = function (smoothedArray) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'peak';
  var window = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 49;
  var mid = Math.floor(window * .5);
  var peaks = []; //console.log(smoothedArray.length-window)

  for (var i = 0; i < smoothedArray.length - window; i++) {
    var isPeak = _this3.isExtrema(smoothedArray.slice(i, i + window), type);

    if (isPeak) {
      peaks.push(i + mid - 1);
    }
  }

  return peaks;
};

/***/ }),

/***/ 62:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* binding */ Events)
});

;// CONCATENATED MODULE: ./src/ui/ObjectListener.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
//Example:
let events = new ObjectListener();
let x = { y: 1, z: { w: 2 }}


events.addListener("y",x,"y");
events.addListener("z",x,"z");

x.z.w = 3;
x.y = 2;
//See console

*/
//By Joshua Brewster (MIT License)
//Create instance and then call instance.addListener(listenerName,objectToListenTo,propToListenTo,onchange,interval).
//name, propToListenTo, onchange, and interval are optional (leave or set as undefined). Onchange is a custom callback just like for other event listeners. Set a name to make it easier to start and stop or edit each listener.
var ObjectListener = /*#__PURE__*/function () {
  function ObjectListener() {
    var _this = this;

    var debug = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var synchronous = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, ObjectListener);

    this.addFunc = function () {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var newCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var callbackIdx = null;

      if (newCallback !== null) {
        if (key == null) {
          _this.listeners.forEach(function (obj, i) {
            callbackIdx = obj.listener.addFunc(newCallback);
            if (obj.listener.running == false && start == true) obj.listener.start();
          });
        } else {
          var found = _this.listeners.find(function (obj, i) {
            if (obj.key === key) {
              callbackIdx = obj.listener.addFunc(newCallback);
              if (obj.listener.running == false && start == true) obj.listener.start();
            }
          });
        }
      }

      return callbackIdx;
    };

    this.getFuncs = function () {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

      if (key) {
        var found = _this.listeners.find(function (o, i) {
          if (o.key === key) {
            return true;
          }
        });

        return found.onchangeFuncs;
      } else return undefined;
    };

    this.removeFuncs = function () {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var idx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var stop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (key == null) {
        _this.listeners.forEach(function (obj, i) {
          obj.listener.removeFuncs(idx);
        });
      } else {
        var found = _this.listeners.find(function (o, i) {
          if (o.key === key) {
            o.listener.removeFuncs(idx);

            if (o.listener.onchangeFuncs.length === 0 || stop === true) {
              o.listener.stop();
            }
          }
        });
      }
    };

    this.debug = debug;
    this.listeners = [];
    this.synchronous = synchronous; //check all listeners simulatenously instead of on individual loops. use startSync() to trigger

    this.syncInterval = 'FRAMERATE'; //interval

    this.syncAnim = undefined;
    if (synchronous === true) this.startSync();
  } //add a new object listener with specified props (or none to watch the whole object), and onchange functions, with optional interval


  _createClass(ObjectListener, [{
    key: "addListener",
    value: function addListener() {
      var listenerKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var objectToListenTo = arguments.length > 1 ? arguments[1] : undefined;
      var propToListenTo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var onchange = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
      var interval = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
      var debug = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : this.debug;
      var startRunning = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;

      if (objectToListenTo === undefined) {
        console.error("You must assign an object");
        return;
      }

      var key = listenerKey;

      if (key == null) {
        key = Math.floor(Math.random() * 100000);
      }

      if (this.synchronous === true) startRunning = false; //negate this in case of synchronous runtime

      var listener = {
        key: key,
        listener: new ObjectListenerInstance(objectToListenTo, propToListenTo, onchange, interval, debug, startRunning)
      };
      this.listeners.push(listener);
    }
  }, {
    key: "getListener",
    value: function getListener(key) {
      var found = this.listeners.find(function (item, i) {
        if (item.key === key) return true;
      });
      return found;
    }
  }, {
    key: "hasKey",
    value: function hasKey(key) {
      var found = false;
      this.listeners.forEach(function (item, i) {
        if (item.key === key) {
          found = true;
          return true;
        }
      });
      return found;
    }
  }, {
    key: "getKeyIndices",
    value: function getKeyIndices(key) {
      var indices = [];
      this.listeners.find(function (o, i) {
        if (o.key === key) {
          indices.push(i);
        }
      });
      return indices;
    }
  }, {
    key: "onchange",
    value: function onchange() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var newCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (key == null) {
        this.listeners.forEach(function (obj, i) {
          obj.listener.onchange = newCallback;
        });
      } else {
        var found = this.listeners.find(function (o, i) {
          if (o.name === key) {
            o.listener.onchange = newCallback;
          }
        });
      }
    } //Add extra onchange functions

  }, {
    key: "stop",
    value: //Stop all or named listeners
    function stop() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (this.synchronous) this.stopSync();

      if (key == null) {
        this.listeners.forEach(function (obj, i) {
          obj.listener.stop();
        });
      } else {
        var found = this.listeners.find(function (o, i) {
          if (o.name === key) {
            o.listener.stop();
          }
        });
      }
    } //Restart all or named listeners

  }, {
    key: "start",
    value: function start() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (this.synchronous) this.stopSync();

      if (key == null) {
        this.listeners.forEach(function (obj, i) {
          obj.listener.start();
        });
      } else {
        var found = this.listeners.find(function (o, i) {
          if (o.name === key) {
            o.listener.start();
          }
        });
      }
    } //run listeners synchronously instead of on their own individual loops

  }, {
    key: "startSync",
    value: function startSync() {
      var _this2 = this;

      if (this.synchronous === false) {
        this.synchronous = true;
        this.stop(); //stop the async calls

        var runChecks = function runChecks() {
          if (_this2.synchronous === true) {
            _this2.listeners.forEach(function (l) {
              l.listener.check();
            });

            if (_this2.syncInterval === 'FRAMERATE') {
              _this2.syncAnim = requestAnimationFrame(runChecks);
            } else if (typeof _this2.syncInterval === 'number') {
              setTimeout(runChecks, _this2.syncInterval);
            }
          }
        };

        runChecks();
      }
    } //stop the synchronous checking

  }, {
    key: "stopSync",
    value: function stopSync() {
      this.synchronous = false;
      if (this.syncAnim) cancelAnimationFrame(this.syncAnim);
    }
  }, {
    key: "remove",
    value: function remove() {
      var _this3 = this;

      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (key == null) {
        this.listeners.forEach(function (listener) {
          listener.stop();
        });
        this.listeners.splice(0, this.listeners.length);
      } else {
        var indices = [];
        var found = this.listeners.forEach(function (o, i) {
          if (o.key === key) {
            indices.push(i);
          }
        });
        indices.reverse().forEach(function (idx) {
          _this3.listeners[idx].listener.stop();

          _this3.listeners.splice(idx, 1);
        });
      }
    }
  }]);

  return ObjectListener;
}(); //Instance of an object listener. This will subscribe to object properties (or whole objects) and run attached functions when a change is detected.

var ObjectListenerInstance = /*#__PURE__*/function () {
  function ObjectListenerInstance(object) {
    var _this4 = this;

    var propName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "__ANY__";
    var onchange = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.onchange;
    var interval = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "FRAMERATE";
    var debug = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var startRunning = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;

    _classCallCheck(this, ObjectListenerInstance);

    _initialiseProps.call(this);

    this.debug = debug;
    this.onchange = onchange; //Main onchange function

    this.onchangeFuncs = []; //Execute extra functions pushed to this array

    this.object = object; //Objects are always passed by reference

    this.propName = propName;
    this.propOld = undefined;
    this.setListenerRef(propName);
    this.running = startRunning;
    this.funcs = 0;
    this.interval;

    if (interval < 10) {
      this.interval = 10;
      console.log("Min recommended interval set: 10ms");
    } else {
      this.interval = interval;
    }

    if (startRunning === true) {
      if (typeof window === 'undefined') {
        setTimeout(function () {
          _this4.check();
        }, 60);
      } else {
        this.checker = requestAnimationFrame(this.check);
      }
    }
  } //Main onchange execution


  _createClass(ObjectListenerInstance, [{
    key: "removeFuncs",
    value: //Remove extra onchange functions
    function removeFuncs() {
      var idx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var i = 0;

      if (idx === null) {
        this.onchangeFuncs = [];
      } else if (this.onchangeFuncs.find(function (o, j) {
        if (o.idx === idx) {
          i = j;
          return true;
        }
      }) !== undefined) {
        this.onchangeFuncs.splice(i, 1);
      }
    } //Execute extra onchange functions

  }, {
    key: "start",
    value: function start() {
      var _this5 = this;

      this.running = true;

      if (typeof window === 'undefined') {
        setTimeout(function () {
          _this5.check();
        }, 16);
      } else {
        this.checker = requestAnimationFrame(this.check);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      this.running = false;
      cancelAnimationFrame(this.checker);
    }
  }]);

  return ObjectListenerInstance;
}(); //This only really matters in Chrome and one other browser

var _initialiseProps = function _initialiseProps() {
  var _this6 = this;

  this.onchange = function (newData) {
    console.log(_this6.propName, " changed from: ", _this6.propOld, " to: ", _this6.object[_this6.propName]);
  };

  this.addFunc = function () {
    var onchange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var sub = 0;

    if (onchange !== null) {
      _this6.onchangeFuncs.push({
        idx: _this6.funcs,
        onchange: onchange
      });

      sub = _this6.funcs;
      _this6.funcs++;
    }

    return sub;
  };

  this.onchangeMulti = function (newData) {
    var onChangeCache = _toConsumableArray(_this6.onchangeFuncs);

    onChangeCache.forEach(function (func, i) {
      if (_this6.debug === true) {
        console.log(func.onchange);
      }

      func.onchange(newData);
    });
  };

  this.setListenerRef = function (propName) {
    if (propName === "__ANY__" || propName === null || propName === undefined) {
      _this6.propOld = JSON.stringifyFast(_this6.object);
    } else if (Array.isArray(_this6.object[propName])) {
      _this6.propOld = JSON.stringifyFast(_this6.object[propName].slice(_this6.object[propName].length - 20));
    } else if (_typeof(_this6.object[propName]) === "object") {
      _this6.propOld = JSON.stringifyFast(_this6.object[propName]);
    } else if (typeof _this6.object[propName] === "function") {
      _this6.propOld = _this6.object[propName].toString();
    } else {
      _this6.propOld = _this6.object[propName]; //usually a number, bool, or string;
    }

    if (_this6.debug === true) {
      console.log("propname", propName, ", new assignment: ", _this6.propOld);
    }
  };

  this.check = function () {
    var changed = false;

    if (_this6.propName === "__ANY__" || _this6.propName === null || _this6.propName === undefined) {
      if (_this6.propOld !== JSON.stringifyFast(_this6.object)) {
        if (_this6.debug === true) {
          console.log("onchange: ", _this6.onchange);
        }

        _this6.onchange(_this6.object);

        if (_this6.onchangeFuncs.length > 0) {
          _this6.onchangeMulti(_this6.object);
        }

        _this6.setListenerRef(_this6.propName);

        changed = true;
      }
    } else if (Array.isArray(_this6.object[_this6.propName])) {
      //cut arrays down for speed
      if (_this6.propOld !== JSON.stringifyFast(_this6.object[_this6.propName].slice(_this6.object[_this6.propName].length - 20))) {
        if (_this6.debug === true) {
          console.log("onchange: ", _this6.onchange);
        }

        _this6.onchange(_this6.object[_this6.propName]);

        if (_this6.onchangeFuncs.length > 0) {
          _this6.onchangeMulti(_this6.object[_this6.propName]);
        }

        _this6.setListenerRef(_this6.propName);

        changed = true;
      }
    } else if (_typeof(_this6.object[_this6.propName]) === "object") {
      var string = JSON.stringifyFast(_this6.object[_this6.propName]);

      if (_this6.propOld !== string) {
        if (_this6.debug === true) {
          console.log("onchange: ", _this6.onchange);
        }

        _this6.onchange(_this6.object[_this6.propName]);

        if (_this6.onchangeFuncs.length > 0) {
          _this6.onchangeMulti(_this6.object[_this6.propName]);
        }

        _this6.setListenerRef(_this6.propName);

        changed = true;
      }
    } else if (typeof _this6.object[_this6.propName] === "function") {
      if (_this6.propOld !== _this6.object[_this6.propName].toString()) {
        if (_this6.debug === true) {
          console.log("onchange: ", _this6.onchange);
        }

        _this6.onchange(_this6.object[_this6.propName].toString());

        if (_this6.onchangeFuncs.length > 0) {
          _this6.onchangeMulti(_this6.object[_this6.propName].toString());
        }

        _this6.setListenerRef(_this6.propName);

        changed = true;
      }
    } else if (_this6.object[_this6.propName] !== _this6.propOld) {
      if (_this6.debug === true) {
        console.log("onchange: ", _this6.onchange);
      }

      _this6.onchange(_this6.object[_this6.propName]);

      if (_this6.onchangeFuncs.length > 0) {
        _this6.onchangeMulti(_this6.object[_this6.propName]);
      }

      _this6.setListenerRef(_this6.propName);

      changed = true;
    }

    if (_this6.running === true) {
      if (_this6.debug === true) {
        console.log("checking", _this6.object, _this6.propName);
      }

      if (_this6.interval === "FRAMERATE") {
        if (typeof window === 'undefined') {
          setTimeout(function () {
            _this6.check();
          }, 16);
        } else {
          _this6.checker = requestAnimationFrame(_this6.check);
        }
      } else {
        setTimeout(function () {
          _this6.check();
        }, _this6.interval);
      }
    }

    ;
    return changed;
  };
};

function sortObjectByValue(object) {
  //Sorts number and string objects by numeric value. Strings have charcodes summed for comparison. Objects and functions are stringified.
  var sortable = [];

  for (var prop in object) {
    sortable.push([prop, object[prop]]);
  }

  sortable.sort(function (a, b) {
    var prop1 = a;
    var prop2 = b;

    if (typeof prop1[1] === "function") {
      prop1[1] = prop1[1].toString();
    } else if (_typeof(prop1[1]) === "object") {
      prop1[1] = JSON.stringifyFast(prop1[1]);
    }

    if (typeof prop2[1] === "function") {
      prop2[1] = prop2[1].toString();
    } else if (_typeof(prop2[1]) === "object") {
      prop2[1] = JSON.stringifyFast(prop2[1]);
    }

    if (typeof prop1[1] === "string") {
      var temp = 0;
      prop1.forEach(function (_char, i) {
        temp += prop1.charCodeAt(i);
      });
      prop1 = temp;
    }

    if (typeof prop2[1] === "string") {
      var temp = 0;
      prop2.forEach(function (_char2, i) {
        temp += prop2.charCodeAt(i);
      });
      prop2 = temp;
    }

    return prop1[1] - prop2[1];
  });
  var sorted = {};
  sortable.forEach(function (item) {
    sorted[item[0]] = item[1];
  });
  return sorted;
}
function sortObjectByPropName(object) {
  var sortable = [];

  for (var prop in object) {
    sortable.push([prop, object[prop]]);
  }

  sortable.sort(function (a, b) {
    return a[0] > b[0];
  });
  var sorted = {};
  sortable.forEach(function (item) {
    sorted[item[0]] = item[1];
  });
  return sorted;
} //modified to also cut down the size arrays for faster looping

if (JSON.stringifyFast === undefined) {
  //Workaround for objects containing DOM nodes, which can't be stringified with JSON. From: https://stackoverflow.com/questions/4816099/chrome-sendrequest-error-typeerror-converting-circular-structure-to-json
  JSON.stringifyFast = function () {
    var refs = new Map();
    var parents = [];
    var path = ["this"];

    function clear() {
      refs.clear();
      parents.length = 0;
      path.length = 1;
    }

    function updateParents(key, value) {
      var idx = parents.length - 1;

      if (parents[idx]) {
        var prev = parents[idx];

        if (prev[key] === value || idx === 0) {
          path.push(key);
          parents.push(value.pushed);
        } else {
          while (idx-- >= 0) {
            prev = parents[idx];

            if (prev[key] === value) {
              idx += 2;
              parents.length = idx;
              path.length = idx;
              --idx;
              parents[idx] = value;
              path[idx] = key;
              break;
            }
          }
        }
      }
    }

    function checkValues(key, value) {
      var val;

      if (value != null) {
        if (_typeof(value) === "object") {
          //if (key) { updateParents(key, value); }
          var c = value.constructor.name;

          if (key && c === 'Object') {
            updateParents(key, value);
          }

          var other = refs.get(value);

          if (other) {
            return '[Circular Reference]' + other;
          } else {
            refs.set(value, path.join('.'));
          }

          if (c === "Array") {
            //Cut arrays down to 100 samples for referencing
            if (value.length > 20) {
              val = value.slice(value.length - 20);
            } else val = value; // refs.set(val, path.join('.'));

          } else if (c.includes("Set")) {
            val = Array.from(value);
          } else if (c !== "Object" && c !== "Number" && c !== "String" && c !== "Boolean") {
            //simplify classes, objects, and functions, point to nested objects for the state manager to monitor those properly
            val = "instanceof_" + c;
          } else if (c === 'Object') {
            var obj = {};

            for (var prop in value) {
              if (value[prop] == null) {
                obj[prop] = value[prop];
              } else if (Array.isArray(value[prop])) {
                if (value[prop].length > 20) obj[prop] = value[prop].slice(value[prop].length - 20);else obj[prop] = value[prop];
              } //deal with arrays in nested objects (e.g. means, slices)
              else if (value[prop].constructor.name === 'Object') {
                //additional layer of recursion for 3 object-deep array checks
                obj[prop] = {};

                for (var p in value[prop]) {
                  if (Array.isArray(value[prop][p])) {
                    if (value[prop][p].length > 20) obj[prop][p] = value[prop][p].slice(value[prop][p].length - 20);else obj[prop][p] = value[prop][p];
                  } else {
                    if (value[prop][p] != null) {
                      var con = value[prop][p].constructor.name;

                      if (con.includes("Set")) {
                        obj[prop][p] = Array.from(value[prop][p]);
                      } else if (con !== "Number" && con !== "String" && con !== "Boolean") {
                        obj[prop][p] = "instanceof_" + con; //3-deep nested objects are cut off
                      } else {
                        obj[prop][p] = value[prop][p];
                      }
                    } else {
                      obj[prop][p] = value[prop][p];
                    }
                  }
                }
              } else {
                var _con = value[prop].constructor.name;

                if (_con.includes("Set")) {
                  obj[prop] = Array.from(value[prop]);
                } else if (_con !== "Number" && _con !== "String" && _con !== "Boolean") {
                  obj[prop] = "instanceof_" + _con;
                } else {
                  obj[prop] = value[prop];
                }
              }
            } //console.log(obj, value)


            val = obj; //refs.set(val, path.join('.'));
          } else {
            val = value;
          }
        } else {
          val = value;
        }
      } //console.log(value, val)


      return val;
    }

    return function stringifyFast(obj, space) {
      try {
        parents.push(obj);
        return JSON.stringify(obj, checkValues, space);
      } catch (er) {
        console.error(obj, er);
      } finally {
        clear();
      }
    };
  }();
}

if (JSON.stringifyWithCircularRefs === undefined) {
  //Workaround for objects containing DOM nodes, which can't be stringified with JSON. From: https://stackoverflow.com/questions/4816099/chrome-sendrequest-error-typeerror-converting-circular-structure-to-json
  JSON.stringifyWithCircularRefs = function () {
    var refs = new Map();
    var parents = [];
    var path = ["this"];

    function clear() {
      refs.clear();
      parents.length = 0;
      path.length = 1;
    }

    function updateParents(key, value) {
      var idx = parents.length - 1;
      var prev = parents[idx];

      if (prev[key] === value || idx === 0) {
        path.push(key);
        parents.push(value);
      } else {
        while (idx-- >= 0) {
          prev = parents[idx];

          if (prev[key] === value) {
            idx += 2;
            parents.length = idx;
            path.length = idx;
            --idx;
            parents[idx] = value;
            path[idx] = key;
            break;
          }
        }
      }
    }

    function checkCircular(key, value) {
      if (value != null) {
        if (_typeof(value) === "object") {
          if (key) {
            updateParents(key, value);
          }

          var other = refs.get(value);

          if (other) {
            return '[Circular Reference]' + other;
          } else {
            refs.set(value, path.join('.'));
          }
        }
      }

      return value;
    }

    return function stringifyWithCircularRefs(obj, space) {
      try {
        parents.push(obj);
        return JSON.stringify(obj, checkCircular, space);
      } finally {
        clear();
      }
    };
  }();
}
;// CONCATENATED MODULE: ./src/ui/StateManager.js
function StateManager_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { StateManager_typeof = function _typeof(obj) { return typeof obj; }; } else { StateManager_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return StateManager_typeof(obj); }

function StateManager_toConsumableArray(arr) { return StateManager_arrayWithoutHoles(arr) || StateManager_iterableToArray(arr) || StateManager_unsupportedIterableToArray(arr) || StateManager_nonIterableSpread(); }

function StateManager_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function StateManager_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function StateManager_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return StateManager_arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = StateManager_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function StateManager_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return StateManager_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return StateManager_arrayLikeToArray(o, minLen); }

function StateManager_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function StateManager_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StateManager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function StateManager_createClass(Constructor, protoProps, staticProps) { if (protoProps) StateManager_defineProperties(Constructor.prototype, protoProps); if (staticProps) StateManager_defineProperties(Constructor, staticProps); return Constructor; }

 //By Joshua Brewster (MIT License)
//Simple state manager.
//Set key responses to have functions fire when keyed values change
//add variables to state with addToState(key, value, keyonchange (optional))

var StateManager = /*#__PURE__*/function () {
  function StateManager() {
    var _this = this;

    var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "FRAMERATE";
    var defaultKeyEventLoop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    StateManager_classCallCheck(this, StateManager);

    this.setupSynchronousUpdates = function () {
      if (!_this.listener.hasKey('pushToState')) {
        //we won't add this listener unless we use this function
        var pushToStateResponse = function pushToStateResponse() {
          if (Object.keys(_this.pushToState).length > 0) {
            //Object.assign(this.prev,this.data);//Temp fix until the global state listener function works as expected
            Object.assign(_this.data, _this.pushToState); //console.log("new state: ", this.data); console.log("props set: ", this.pushToState);

            var _iterator = _createForOfIteratorHelper(Object.getOwnPropertyNames(_this.pushToState)),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var prop = _step.value;
                delete _this.pushToState[prop];
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        };

        _this.listener.addListener("pushToState", _this.pushToState, "__ANY__", pushToStateResponse, _this.interval);

        _this.addToState('pushRecord', _this.pushRecord, function (record) {
          var l = record.pushed.length;

          var _loop = function _loop(i) {
            var updateObj = record.pushed[i];

            var _loop2 = function _loop2(prop) {
              if (_this.pushCallbacks[prop]) {
                _this.pushCallbacks[prop].forEach(function (o) {
                  o.onchange(updateObj[prop]);
                });
              }
            };

            for (var prop in updateObj) {
              _loop2(prop);
            }
          };

          for (var i = 0; i < l; i++) {
            _loop(i);
          }

          _this.pushRecord.pushed.splice(0, l);
        });

        _this.data.pushCallbacks = _this.pushCallbacks;
      }
    };

    //Default interval is at the browser framerate
    this.data = init;
    this.interval = interval;
    this.pushToState = {};
    this.pushRecord = {
      pushed: []
    }; //all setStates between frames

    this.pushCallbacks = {};
    this.triggers = {};
    this.listener = new ObjectListener();
    this.defaultStartListenerEventLoop = defaultKeyEventLoop;
    /*
    this.prev = Object.assign({},this.data);
     
    const onStateChanged = () => {
        this.prev = Object.assign({},this.data);
        //this.prev=JSON.parse(JSON.stringifyFast(this.data));
    }
      //Causes app to be stuck on startup
    this.listener.addListener(
        "state",
        this.data,
        "__ANY__",
        onStateChanged,
        interval,
    );
    */
  }

  StateManager_createClass(StateManager, [{
    key: "setInterval",
    value: function setInterval() {
      var _this2 = this;

      var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "FRAMERATE";
      this.interval = interval;
      this.listener.listeners.forEach(function (obj, i) {
        obj.interval = _this2.interval;
      });
    } // Managed State Updates. Must Still Clean Event Listeners

  }, {
    key: "updateState",
    value: function updateState(key, value) {
      if (this.data[key] == null) {
        this.addToState(key, value);
      } else {
        this.data[key] = value;
      }
    }
  }, {
    key: "removeState",
    value: function removeState(key) {
      var sequential = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (sequential) this.unsubscribeAllSequential(key);else this.unsubscribeAll(key);
      delete this.data[key]; // Log Update

      this.setSequentialState({
        stateRemoved: key
      });
    }
  }, {
    key: "addToState",
    value: //Alternatively just add to the state by doing this.state[key] = value with the state manager instance
    function addToState(key, value) {
      var onchange = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var startRunning = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.defaultStartListenerEventLoop;
      var debug = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      if (!this.listener.hasKey('pushToState') && this.defaultStartListenerEventLoop) {
        this.setupSynchronousUpdates();
      }

      this.data[key] = value; // Log Update

      this.setSequentialState({
        stateAdded: key
      });

      if (onchange !== null) {
        return this.addSecondaryKeyResponse(key, onchange, debug, startRunning);
      }
    }
  }, {
    key: "getState",
    value: function getState() {
      //Return a hard copy of the latest state with reduced values. Otherwise just use this.state.data
      return JSON.parse(JSON.stringifyFast(this.data));
    } //Synchronous set-state, only updates main state on interval. Can set to trigger now instead of waiting on interval. Also can append arrays in state instead of replacing them

  }, {
    key: "setState",
    value: function setState() {
      var _this3 = this;

      var updateObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var appendArrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      //Pass object with keys in. Undefined keys in state will be added automatically. State only notifies of change based on update interval
      //console.log("setting state");
      if (!this.listener.hasKey('pushToState') && this.defaultStartListenerEventLoop) {
        this.setupSynchronousUpdates();
      }

      updateObj.stateUpdateTimeStamp = Date.now();
      this.pushRecord.pushed.push(JSON.parse(JSON.stringifyWithCircularRefs(updateObj)));

      if (appendArrs) {
        for (var prop in updateObj) {
          //3 object-deep array checks to buffer values instead of overwriting
          if (this.pushToState[prop]) {
            if (Array.isArray(this.pushToState[prop]) && Array.isArray(updateObj[prop])) {
              var _this$pushToState$pro;

              updateObj[prop] = (_this$pushToState$pro = this.pushToState[prop]).push.apply(_this$pushToState$pro, StateManager_toConsumableArray(updateObj[prop]));
            } else if (StateManager_typeof(this.pushToState[prop]) === 'object' && StateManager_typeof(updateObj[prop]) === 'object') {
              for (var p in updateObj[prop]) {
                if (this.pushToState[prop][p]) {
                  if (Array.isArray(this.pushToState[prop][p]) && Array.isArray(updateObj[prop][p])) {
                    var _this$pushToState$pro2;

                    updateObj[prop][p] = (_this$pushToState$pro2 = this.pushToState[prop][p]).push.apply(_this$pushToState$pro2, StateManager_toConsumableArray(updateObj[prop][p]));
                  } else if (StateManager_typeof(this.pushToState[prop][p]) === 'object' && StateManager_typeof(updateObj[prop][p]) === 'object') {
                    for (var p2 in updateObj[prop][p]) {
                      if (this.pushToState[prop][p][p2]) {
                        if (Array.isArray(this.pushToState[prop][p][p2]) && Array.isArray(updateObj[prop][p][p2])) {
                          var _this$pushToState$pro3;

                          updateObj[prop][p][p2] = (_this$pushToState$pro3 = this.pushToState[prop][p][p2]).push.apply(_this$pushToState$pro3, StateManager_toConsumableArray(updateObj[prop][p][p2]));
                        }
                      } else if (StateManager_typeof(this.pushToState[prop][p][p2]) === 'object' && StateManager_typeof(updateObj[prop][p][p2]) === 'object') {
                        for (var p3 in updateObj[prop][p][p2]) {
                          if (this.pushToState[prop][p][p2][p3]) {
                            if (Array.isArray(this.pushToState[prop][p][p2][p3]) && Array.isArray(updateObj[prop][p][p2][p3])) {
                              var _this$pushToState$pro4;

                              updateObj[prop][p][p2][p3] = (_this$pushToState$pro4 = this.pushToState[prop][p][p2][p3]).push.apply(_this$pushToState$pro4, StateManager_toConsumableArray(updateObj[prop][p][p2][p3]));
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      Object.assign(this.pushToState, updateObj);

      if (Object.keys(this.triggers).length > 0) {
        // Object.assign(this.data,this.pushToState);
        var _iterator2 = _createForOfIteratorHelper(Object.getOwnPropertyNames(this.triggers)),
            _step2;

        try {
          var _loop3 = function _loop3() {
            var prop = _step2.value;

            if (_this3.pushToState[prop]) {
              _this3.data[prop] = _this3.pushToState[prop];
              delete _this3.pushToState[prop];

              _this3.triggers[prop].forEach(function (obj) {
                obj.onchange(_this3.data[prop]);
              });
            }
          };

          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            _loop3();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      return this.pushToState;
    } //Trigger-only functions on otherwise looping listeners

  }, {
    key: "subscribeTrigger",
    value: function subscribeTrigger() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var onchange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (value) {};

      // console.error('SUBSCRIBING')
      if (key) {
        if (!this.triggers[key]) {
          this.triggers[key] = [];
        }

        var l = this.triggers[key].length;
        this.triggers[key].push({
          idx: l,
          onchange: onchange
        });
        return this.triggers[key].length - 1;
      } else return undefined;
    } //Delete specific trigger functions for a key

  }, {
    key: "unsubscribeTrigger",
    value: function unsubscribeTrigger() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var sub = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var idx = undefined;
      var triggers = this.triggers[key];

      if (triggers) {
        var obj = triggers.find(function (o) {
          if (o.idx === sub) {
            return true;
          }
        });
        if (obj) triggers.splice(idx, 1);
      }
    } //Remove all triggers for a key

  }, {
    key: "unsubscribeAllTriggers",
    value: function unsubscribeAllTriggers(key) {
      if (key && this.triggers[key]) {
        delete this.triggers[key];
      }
    } //only push to an object that keeps the sequences of updates instead of synchronously updating the whole state.

  }, {
    key: "setSequentialState",
    value: function setSequentialState() {
      var updateObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      //console.log("setting state");
      if (!this.listener.hasKey('pushToState')) {
        this.setupSynchronousUpdates();
      }

      updateObj.stateUpdateTimeStamp = Date.now();
      this.pushRecord.pushed.push(JSON.parse(JSON.stringify(updateObj)));
    }
  }, {
    key: "subscribeSequential",
    value: function subscribeSequential() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var onchange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      // console.error('SUBSCRIBING')
      if (key) {
        if (this.data[key] === undefined) {
          this.addToState(key, null, undefined);
        }

        if (!this.pushCallbacks[key]) this.pushCallbacks[key] = [];

        if (onchange) {
          var idx = this.pushCallbacks[key].length;
          this.pushCallbacks[key].push({
            idx: idx,
            onchange: onchange
          });
          return this.pushCallbacks[key].length - 1; //get key sub index for unsubscribing
        } else return undefined;
      } else return undefined;
    }
  }, {
    key: "unsubscribeSequential",
    value: function unsubscribeSequential() {
      var _this4 = this;

      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var sub = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (key) {
        if (this.pushCallbacks[key]) {
          if (this.pushCallbacks[key].find(function (o, j) {
            if (o.idx === sub) {
              _this4.pushCallbacks[key].splice(j, 1);

              return true;
            }
          })) {}
        }
      }
    }
  }, {
    key: "unsubscribeAllSequential",
    value: function unsubscribeAllSequential(key) {
      if (key) {
        if (this.pushCallbacks[key]) {
          if (this.pushCallbacks[key]) {
            delete this.pushCallbacks[key];
          }
        }
      }
    } //Set main onchange response for the property-specific object listener. Don't touch the state

  }, {
    key: "setPrimaryKeyResponse",
    value: function setPrimaryKeyResponse() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var onchange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var debug = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var startRunning = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.defaultStartListenerEventLoop;

      if (onchange !== null) {
        if (this.listener.hasKey(key)) {
          this.listener.onchange(key, onchange);
        } else if (key !== null) {
          this.listener.addListener(key, this.data, key, onchange, this.data["stateUpdateInterval"], debug, startRunning);
        }
      }
    } //Add extra onchange responses to the object listener for a set property. Use state key for state-wide change responses

  }, {
    key: "addSecondaryKeyResponse",
    value: function addSecondaryKeyResponse() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var onchange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var debug = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var startRunning = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.defaultStartListenerEventLoop;

      if (onchange !== null) {
        if (this.listener.hasKey(key)) {
          return this.listener.addFunc(key, onchange);
        } else if (key !== null) {
          this.listener.addListener(key, this.data, key, function () {}, this.data["stateUpdateInterval"], debug, startRunning);
          return this.listener.addFunc(key, onchange);
        } else {
          return this.listener.addFunc("state", onchange);
        }
      }
    } //removes all secondary responses if idx left null. use "state" key for state-wide change responses

  }, {
    key: "removeSecondaryKeyResponse",
    value: function removeSecondaryKeyResponse() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var responseIdx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var stopIfEmpty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (key !== null) {
        if (this.listener.hasKey(key)) {
          this.listener.removeFuncs(key, responseIdx, stopIfEmpty);
        } else {
          console.error("key does not exist");
        }
      } else {
        console.error("provide key");
      }
    } //Remove any extra object listeners for a key. Entering "state" will break the state manager's primary response

  }, {
    key: "clearAllKeyResponses",
    value: function clearAllKeyResponses() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (key === null) this.listener.remove(null);else if (this.listener.hasKey(key)) this.listener.remove(key);
    } //Get all of the onchange functions added via subscribe/addSecondaryKeyResponse

  }, {
    key: "getKeySubCallbacks",
    value: function getKeySubCallbacks(key) {
      var callbacks = this.listener.getFuncs(key);
      return callbacks;
    } //Save the return value to provide as the responseIdx in unsubscribe

  }, {
    key: "subscribe",
    value: function subscribe(key, onchange) {
      var startRunning = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      // console.error('SUBSCRIBING')
      if (this.data[key] === undefined) {
        this.addToState(key, null, onchange, startRunning);
      } else {
        return this.addSecondaryKeyResponse(key, onchange);
      }
    } //Unsubscribe from the given key using the index of the response saved from the subscribe() function

  }, {
    key: "unsubscribe",
    value: function unsubscribe(key) {
      var responseIdx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (responseIdx !== null) this.removeSecondaryKeyResponse(key, responseIdx, true);else console.error("Specify a subcription function index");
    }
  }, {
    key: "unsubscribeAll",
    value: function unsubscribeAll(key) {
      // Removes the listener for the key (including the animation loop)
      this.clearAllKeyResponses(key);
      if (this.data[key]) delete this.data[key];
    } //runs only one animation frame to check all state keys

  }, {
    key: "runSynchronousListeners",
    value: function runSynchronousListeners() {
      this.defaultStartListenerEventLoop = false;
      this.listener.startSync();
    } //stops the listener event loops without clearing the keys.

  }, {
    key: "stop",
    value: function stop() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.listener.stop(key);
    }
  }]);

  return StateManager;
}(); //modified to also cut down the size arrays for faster looping

if (JSON.stringifyFast === undefined) {
  //Workaround for objects containing DOM nodes, which can't be stringified with JSON. From: https://stackoverflow.com/questions/4816099/chrome-sendrequest-error-typeerror-converting-circular-structure-to-json
  JSON.stringifyFast = function () {
    var refs = new Map();
    var parents = [];
    var path = ["this"];

    function clear() {
      refs.clear();
      parents.length = 0;
      path.length = 1;
    }

    function updateParents(key, value) {
      var idx = parents.length - 1; //console.log(idx, parents[idx])

      if (parents[idx]) {
        var prev = parents[idx]; //console.log(value); 

        if (prev[key] === value || idx === 0) {
          path.push(key);
          parents.push(value.pushed);
        } else {
          while (idx-- >= 0) {
            prev = parents[idx];

            if (prev[key] === value) {
              idx += 2;
              parents.length = idx;
              path.length = idx;
              --idx;
              parents[idx] = value;
              path[idx] = key;
              break;
            }
          }
        }
      }
    }

    function checkValues(key, value) {
      var val;

      if (value != null) {
        if (StateManager_typeof(value) === "object") {
          //if (key) { updateParents(key, value); }
          var c = value.constructor.name;

          if (key && c === 'Object') {
            updateParents(key, value);
          }

          var other = refs.get(value);

          if (other) {
            return '[Circular Reference]' + other;
          } else {
            refs.set(value, path.join('.'));
          }

          if (c === "Array") {
            //Cut arrays down to 100 samples for referencing
            if (value.length > 20) {
              val = value.slice(value.length - 20);
            } else val = value; // refs.set(val, path.join('.'));

          } else if (c.includes("Set")) {
            val = Array.from(value);
          } else if (c !== "Object" && c !== "Number" && c !== "String" && c !== "Boolean") {
            //simplify classes, objects, and functions, point to nested objects for the state manager to monitor those properly
            val = "instanceof_" + c;
          } else if (c === 'Object') {
            var obj = {};

            for (var prop in value) {
              if (value[prop] == null) {
                obj[prop] = value[prop];
              } else if (Array.isArray(value[prop])) {
                if (value[prop].length > 20) obj[prop] = value[prop].slice(value[prop].length - 20);else obj[prop] = value[prop];
              } //deal with arrays in nested objects (e.g. means, slices)
              else if (value[prop].constructor.name === 'Object') {
                //additional layer of recursion for 3 object-deep array checks
                obj[prop] = {};

                for (var p in value[prop]) {
                  if (Array.isArray(value[prop][p])) {
                    if (value[prop][p].length > 20) obj[prop][p] = value[prop][p].slice(value[prop][p].length - 20);else obj[prop][p] = value[prop][p];
                  } else {
                    if (value[prop][p] != null) {
                      var con = value[prop][p].constructor.name;

                      if (con.includes("Set")) {
                        obj[prop][p] = Array.from(value[prop][p]);
                      } else if (con !== "Number" && con !== "String" && con !== "Boolean") {
                        obj[prop][p] = "instanceof_" + con; //3-deep nested objects are cut off
                      } else {
                        obj[prop][p] = value[prop][p];
                      }
                    } else {
                      obj[prop][p] = value[prop][p];
                    }
                  }
                }
              } else {
                var _con = value[prop].constructor.name;

                if (_con.includes("Set")) {
                  obj[prop] = Array.from(value[prop]);
                } else if (_con !== "Number" && _con !== "String" && _con !== "Boolean") {
                  obj[prop] = "instanceof_" + _con;
                } else {
                  obj[prop] = value[prop];
                }
              }
            } //console.log(obj, value)


            val = obj; //refs.set(val, path.join('.'));
          } else {
            val = value;
          }
        } else {
          val = value;
        }
      } //console.log(value, val)


      return val;
    }

    return function stringifyFast(obj, space) {
      try {
        parents.push(obj);
        return JSON.stringify(obj, checkValues, space);
      } catch (er) {
        console.error(obj, er);
      } finally {
        clear();
      }
    };
  }();
}

if (JSON.stringifyWithCircularRefs === undefined) {
  //Workaround for objects containing DOM nodes, which can't be stringified with JSON. From: https://stackoverflow.com/questions/4816099/chrome-sendrequest-error-typeerror-converting-circular-structure-to-json
  JSON.stringifyWithCircularRefs = function () {
    var refs = new Map();
    var parents = [];
    var path = ["this"];

    function clear() {
      refs.clear();
      parents.length = 0;
      path.length = 1;
    }

    function updateParents(key, value) {
      var idx = parents.length - 1;
      var prev = parents[idx];

      if (prev[key] === value || idx === 0) {
        path.push(key);
        parents.push(value);
      } else {
        while (idx-- >= 0) {
          prev = parents[idx];

          if (prev[key] === value) {
            idx += 2;
            parents.length = idx;
            path.length = idx;
            --idx;
            parents[idx] = value;
            path[idx] = key;
            break;
          }
        }
      }
    }

    function checkCircular(key, value) {
      if (value != null) {
        if (StateManager_typeof(value) === "object") {
          if (key) {
            updateParents(key, value);
          }

          var other = refs.get(value);

          if (other) {
            return '[Circular Reference]' + other;
          } else {
            refs.set(value, path.join('.'));
          }
        }
      }

      return value;
    }

    return function stringifyWithCircularRefs(obj, space) {
      try {
        parents.push(obj);
        return JSON.stringify(obj, checkCircular, space);
      } finally {
        clear();
      }
    };
  }();
}
;// CONCATENATED MODULE: ./src/utils/workers/Event.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Event_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Event_typeof = function _typeof(obj) { return typeof obj; }; } else { Event_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Event_typeof(obj); }

function Event_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Event_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Event_createClass(Constructor, protoProps, staticProps) { if (protoProps) Event_defineProperties(Constructor.prototype, protoProps); if (staticProps) Event_defineProperties(Constructor, staticProps); return Constructor; }

//multithreaded event manager, spawn one per thread and import a single instance elsewhere.

/**
 * This is both a simple wrapper for a trigger-only state manager as well 
 * as an interface for multithreaded events for simpler, more dynamic threading pipelines
 * 
 * From any thread:
 * emit -> tx
 * rx -> run trigger 
 * 
 */

var Events = /*#__PURE__*/function () {
  function Events() {
    var _this = this;

    var workermanager = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

    Event_classCallCheck(this, Events);

    this.workerCallback = function (msg) {
      if (Event_typeof(msg) === 'object') {
        if (msg.eventName !== undefined && msg.output !== undefined) {
          _this.state.setState(_defineProperty({}, msg.eventName, msg.output));
        }
      }
    };

    this["export"] = function () {
      return _this;
    };

    this.state = new StateManager({}, undefined, false); //trigger only state (no overhead)

    this.workermanager = workermanager;

    if (workermanager !== undefined) {
      //only in window
      var found = workermanager.workerResponses.find(function (foo) {
        if (foo.name === 'eventmanager') return true;
      });

      if (!found) {
        workermanager.addCallback('eventmanager', this.workerCallback);
      }
    }
  } //subscribe a to an event, default is the port reponse 


  Event_createClass(Events, [{
    key: "subEvent",
    value: function subEvent(eventName) {
      var response = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (output) {
        console.log(eventName, output);
      };
      return this.state.subscribeTrigger(eventName, response);
    }
  }, {
    key: "unsubEvent",
    value: function unsubEvent(eventName, sub) {
      return this.state.unsubscribeTrigger(eventName, sub);
    } //add an event name, can optionally add them to any threads too from the main thread

  }, {
    key: "addEvent",
    value: function addEvent(eventName) {
      var _this2 = this;

      var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var foo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var workerId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
      this.state.setState(_defineProperty({}, eventName, undefined));

      if (this.workermanager !== undefined) {
        if (origin !== undefined || foo !== undefined) {
          if (workerId !== undefined) {
            this.workermanager.postToWorker({
              origin: origin,
              foo: 'addevent',
              input: [eventName, foo]
            }, workerId);
          } else {
            this.workermanager.workers.forEach(function (w) {
              _this2.workermanager.postToWorker({
                origin: origin,
                foo: 'addevent',
                input: [eventName, foo]
              }, w.id); //add it to all of them since we're assuming we're rotating threads

            });
          }
        }
      }
    } //remove an event

  }, {
    key: "removeEmitter",
    value: function removeEmitter(eventName) {
      this.state.unsubscribeAllTriggers(eventName);
    } //use this to set values by event name, will post messages on threads too

  }, {
    key: "emit",
    value: function emit(eventName, input) {
      var _this3 = this;

      var workerId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var output = {
        eventName: eventName,
        output: input
      };
      ;
      if (!input || !eventName) return;

      if (this.workermanager !== undefined) {
        //when emitting values for workers, input should be an object like {input:0, foo'abc', origin:'here'} for correct worker callback usage
        if (workerId !== undefined) this.workermanager.postToWorker(output, workerId);else {
          this.workermanager.workers.forEach(function (w) {
            _this3.workermanager.postToWorker(output, w.id);
          });
        }
      } else if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
        // run this in global scope of window or worker. since window.self = window, we're ok
        postMessage(output); //thread event 
      }

      this.state.setState(_defineProperty({}, eventName, input)); //local event 
    }
  }]);

  return Events;
}();

/***/ }),

/***/ 346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ CallbackManager)
/* harmony export */ });
/* harmony import */ var _gpu_gpuUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(992);
/* harmony import */ var _mathUtils_Math2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(148);
/* harmony import */ var _Event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(666);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var dynamicImport = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var module;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __webpack_require__(181)(url);

          case 2:
            module = _context.sent;
            return _context.abrupt("return", module);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function dynamicImport(_x) {
    return _ref.apply(this, arguments);
  };
}(); //Get the text inside of a function (regular or arrow);


function getFunctionBody(methodString) {
  return methodString.toString().replace(/^\W*(function[^{]+\{([\s\S]*)\}|[^=]+=>[^{]*\{([\s\S]*)\}|[^=]+=>(.+))/i, '$2$3$4');
}

function getFunctionHead(methodString) {
  var fnstring = methodString.toString();
  return fnstring.slice(0, fnstring.indexOf('{') + 1);
}

function buildNewFunction(head, body) {
  var newFunc = eval(head + body + '}');
  return newFunc;
}

function isFunction(string) {
  var regex = new RegExp('(|[a-zA-Z]\w*|\([a-zA-Z]\w*(,\s*[a-zA-Z]\w*)*\))\s*=>');
  var func = typeof string === 'string' ? string.substring(0, 10).includes('function') : false;
  var arrow = typeof string === 'string' ? regex.test(string) : false;
  if (func || arrow) return true;else return false;
}

function parseFunctionFromText(method) {
  //Get the text inside of a function (regular or arrow);
  var getFunctionBody = function getFunctionBody(methodString) {
    return methodString.replace(/^\W*(function[^{]+\{([\s\S]*)\}|[^=]+=>[^{]*\{([\s\S]*)\}|[^=]+=>(.+))/i, '$2$3$4');
  };

  var getFunctionHead = function getFunctionHead(methodString) {
    var startindex = methodString.indexOf(')');
    return methodString.slice(0, methodString.indexOf('{', startindex) + 1);
  };

  var newFuncHead = getFunctionHead(method);
  var newFuncBody = getFunctionBody(method);
  var newFunc;

  if (newFuncHead.includes('function ')) {
    var varName = newFuncHead.split('(')[1].split(')')[0];
    newFunc = new Function(varName, newFuncBody);
  } else {
    //console.log(newFuncHead,newFuncBody);
    newFunc = eval(newFuncHead + newFuncBody + "}");
  }

  return newFunc;
}

var CallbackManager = /*#__PURE__*/function () {
  function CallbackManager() {
    var _this = this;

    _classCallCheck(this, CallbackManager);

    try {
      window.gpu = new _gpu_gpuUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .gpuUtils */ .T9();
      this.gpu = window.gpu;
    } catch (_unused) {
      var gpu = new _gpu_gpuUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .gpuUtils */ .T9();
      this.gpu = gpu;
    }

    this.events = new _Event_js__WEBPACK_IMPORTED_MODULE_2__/* .Events */ .z();
    this.eventSettings = [];
    this.canvas = new OffscreenCanvas(512, 512); //can add fnctions and refer to this.offscreen 

    this.ctx;
    this.context;
    this.animation = undefined;
    this.animtionFunc = undefined;
    this.animating = false;
    this.ANIMFRAMETIME = performance.now(); //ms based on UTC stamps

    this.threeWorker = undefined; //args = array of expected arguments
    //origin = optional tag on input object
    //self = this. scope for variables within the callbackmanager

    this.callbacks = [{
      "case": 'ping',
      callback: function callback(args, origin, self) {
        return 'pong';
      }
    }, {
      "case": 'list',
      callback: function callback(args, origin, self) {
        var list = [];

        _this.callbacks.forEach(function (obj) {
          list.push(obj["case"]);
        });

        return list;
      }
    }, {
      "case": 'addfunc',
      callback: function callback(args) {
        //arg0 = name, arg1 = function string (arrow or normal)
        var newFunc = parseFunctionFromText(args[1]);
        var newCallback = {
          "case": args[0],
          callback: newFunc
        };

        var found = _this.callbacks.findIndex(function (c) {
          if (c["case"] === newCallback["case"]) return c;
        });

        if (found != -1) _this.callbacks[found] = newCallback;else _this.callbacks.push(newCallback);
        return true;
      }
    }, {
      "case": 'addgpufunc',
      callback: function callback(args) {
        //arg0 = gpu in-thread function string
        return _this.gpu.addFunction(parseFunctionFromText(args[0]));
      }
    }, {
      "case": 'addkernel',
      callback: function callback(args) {
        //arg0 = kernel name, arg1 = kernel function string
        return _this.gpu.addKernel(args[0], parseFunctionFromText(args[1]));
      }
    }, {
      "case": 'callkernel',
      callback: function callback(args) {
        //arg0 = kernel name, args.slice(1) = kernel input arguments
        return _this.gpu.callKernel(args[0], args.slice(1)); //generalized gpu kernel calls
      }
    }, {
      "case": 'addevent',
      callback: function callback(args, origin) {
        //args[0] = eventName, args[1] = case, only fires event if from specific same origin
        _this.eventSettings.push({
          eventName: args[0],
          "case": args[1],
          origin: origin
        });

        return true;
      }
    }, {
      "case": 'subevent',
      callback: function callback(args) {
        //args[0] = eventName, args[1] = case, only fires event if from specific same origin
        return _this.events.subEvent(args[0], parseFunctionFromText(args[1]));
      }
    }, {
      "case": 'unsubevent',
      callback: function callback(args) {
        //args[0] = eventName, args[1] = case, only fires event if from specific same origin
        return _this.events.unsubEvent(args[0], args[1]);
      }
    }, {
      "case": 'resizecanvas',
      callback: function callback(args) {
        _this.canvas.width = args[0];
        _this.canvas.height = args[1];
        return true;
      }
    }, {
      "case": 'initThree',
      callback: function () {
        var _callback = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(args) {
          var module;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (_this.animating) {
                    _this.animating = false;
                    cancelAnimationFrame(_this.animation);
                  }

                  if (_this.threeUtil) {
                    _context2.next = 6;
                    break;
                  }

                  _context2.next = 4;
                  return dynamicImport('./workerThreeUtils.js');

                case 4:
                  module = _context2.sent;
                  _this.threeUtil = new module.threeUtil(_this.canvas);

                case 6:
                  if (args[0]) {
                    //first is the setup function
                    _this.threeUtil.setup = parseFunctionFromText(args[0]);
                  }

                  if (args[1]) {
                    //next is the draw function (for 1 frame)
                    _this.threeUtil.draw = parseFunctionFromText(args[1]);
                  }

                  if (args[2]) {
                    _this.threeUtil.clear = parseFunctionFromText(args[2]);
                  }

                  _this.threeUtil.setup();

                case 10:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function callback(_x2) {
          return _callback.apply(this, arguments);
        }

        return callback;
      }()
    }, {
      "case": 'startThree',
      callback: function callback(args) {
        //run the setup to start the three animation
        if (_this.animating) {
          _this.animating = false;
          cancelAnimationFrame(_this.animation);
        }

        if (_this.threeUtil) {
          _this.threeUtil.setup();
        }
      }
    }, {
      "case": 'clearThree',
      callback: function callback(args) {
        //run the clear function to stop three
        if (_this.threeUtil) {
          _this.threeUtil.clear();
        }
      }
    }, {
      "case": 'setValues',
      callback: function callback(args, origin, self) {
        if (_typeof(args) === 'object') {
          Object.keys(args).forEach(function (key) {
            self[key] = args[key]; //variables will be accessible in functions as this.x or this['x']

            if (self.threeUtil) self.threeUtil[key] = args[key];
          });
          return true;
        } else return false;
      }
    }, {
      //parses an object containing function methods
      "case": 'transferClassObject',
      callback: function callback(args, origin, self) {
        if (_typeof(args) === 'object') {
          Object.keys(args).forEach(function (key) {
            if (typeof args[key] === 'string') {
              var obj = args[key];
              if (args[key].indexOf('class') === 0) obj = eval('(' + args[key] + ')');
              self[key] = obj; //variables will be accessible in functions as this.x or this['x']
              //console.log(self,key,obj);

              if (self.threeUtil) self.threeUtil[key] = obj;
            }
          });
          return true;
        } else return false;
      }
    }, {
      "case": 'setAnimation',
      callback: function callback(args) {
        //pass a draw function to be run on an animation loop. Reference this.canvas and this.context or canvas and context. Reference values with this.x etc. and use setValues to set the values from another thread
        _this.animationFunc = parseFunctionFromText(args[0]);
        return true;
      }
    }, {
      "case": 'startAnimation',
      callback: function callback(args, origin) {
        //console.log(this.animationFunc.toString(), this.canvas, this.angle, this.angleChange, this.bgColor)
        var anim = function anim() {
          if (_this.animating) {
            _this.animationFunc(_this);

            _this.ANIMFRAMETIME = performance.now() - _this.ANIMFRAMETIME;

            var emitevent = _this.checkEvents('render', origin);

            var dict = {
              foo: 'render',
              output: _this.ANIMFRAMETIME,
              id: self.id,
              origin: origin
            };
            _this.ANIMFRAMETIME = performance.now();

            if (emitevent) {
              _this.events.emit('render', dict);
            } else {
              postMessage(dict);
            }

            requestAnimationFrame(anim);
          }
        };

        if (_this.animating) {
          _this.animating = false;
          cancelAnimationFrame(_this.animation);
          setTimeout(function () {
            _this.animating = true;
            _this.animation = requestAnimationFrame(anim);
          }, 300);
        } else {
          _this.animating = true;
          console.log('begin animation');
          _this.animation = requestAnimationFrame(anim);
        }

        return true;
      }
    }, {
      "case": 'stopAnimation',
      callback: function callback(args) {
        if (_this.animating) {
          _this.animating = false;
          cancelAnimationFrame(_this.animation);
          return true;
        } else return false;
      }
    }, {
      "case": 'render',
      callback: function callback(args) {
        //runs the animation function
        _this.animationFunc();

        var time = performance.now() - _this.ANIMFRAMETIME;

        _this.ANIMFRAMETIME = performance.now();
        return time;
      }
    }, {
      "case": 'xcor',
      callback: function callback(args) {
        return _mathUtils_Math2__WEBPACK_IMPORTED_MODULE_1__/* .Math2.crosscorrelation.apply */ .d.crosscorrelation.apply(_mathUtils_Math2__WEBPACK_IMPORTED_MODULE_1__/* .Math2 */ .d, _toConsumableArray(args));
      }
    }, {
      "case": 'autocor',
      callback: function callback(args) {
        return _mathUtils_Math2__WEBPACK_IMPORTED_MODULE_1__/* .Math2.autocorrelation */ .d.autocorrelation(args);
      }
    }, {
      "case": 'cov1d',
      callback: function callback(args) {
        return _mathUtils_Math2__WEBPACK_IMPORTED_MODULE_1__/* .Math2.cov1d.apply */ .d.cov1d.apply(_mathUtils_Math2__WEBPACK_IMPORTED_MODULE_1__/* .Math2 */ .d, _toConsumableArray(args));
      }
    }, {
      "case": 'cov2d',
      callback: function callback(args) {
        return _mathUtils_Math2__WEBPACK_IMPORTED_MODULE_1__/* .Math2.cov2d */ .d.cov2d(args);
      }
    }, {
      "case": 'sma',
      callback: function callback(args) {
        return _mathUtils_Math2__WEBPACK_IMPORTED_MODULE_1__/* .Math2.sma.apply */ .d.sma.apply(_mathUtils_Math2__WEBPACK_IMPORTED_MODULE_1__/* .Math2 */ .d, _toConsumableArray(args));
      }
    }, {
      "case": 'dft',
      callback: function callback(args) {
        var _this$gpu;

        if (args[2] == undefined) args[2] = 1;
        return (_this$gpu = _this.gpu).gpuDFT.apply(_this$gpu, _toConsumableArray(args));
      }
    }, {
      "case": 'multidft',
      callback: function callback(args) {
        var _this$gpu2;

        if (args[2] == undefined) args[2] = 1;
        return (_this$gpu2 = _this.gpu).MultiChannelDFT.apply(_this$gpu2, _toConsumableArray(args));
      }
    }, {
      "case": 'multidftbandpass',
      callback: function callback(args) {
        var _this$gpu3;

        if (args[4] == undefined) args[4] = 1;
        return (_this$gpu3 = _this.gpu).MultiChannelDFT_Bandpass.apply(_this$gpu3, _toConsumableArray(args));
      }
    }, {
      "case": 'fft',
      callback: function callback(args) {
        var _this$gpu4;

        if (args[2] == undefined) args[2] = 1;
        return (_this$gpu4 = _this.gpu).gpuFFT.apply(_this$gpu4, _toConsumableArray(args));
      }
    }, {
      "case": 'multifft',
      callback: function callback(args) {
        var _this$gpu5;

        if (args[2] == undefined) args[2] = 1;
        return (_this$gpu5 = _this.gpu).MultiChannelFFT.apply(_this$gpu5, _toConsumableArray(args));
      }
    }, {
      "case": 'multifftbandpass',
      callback: function callback(args) {
        var _this$gpu6;

        if (args[4] == undefined) args[4] = 1;
        return (_this$gpu6 = _this.gpu).MultiChannelFFT_Bandpass.apply(_this$gpu6, _toConsumableArray(args));
      }
    }, {
      "case": 'gpucoh',
      callback: function callback(args) {
        var _this$gpu7;

        return (_this$gpu7 = _this.gpu).gpuCoherence.apply(_this$gpu7, _toConsumableArray(args));
      }
    }, {
      "case": 'coherence',
      callback: function callback(args) {
        var correlograms = _mathUtils_Math2__WEBPACK_IMPORTED_MODULE_1__/* .Math2.correlograms */ .d.correlograms(args[0]);
        var buffer = [].concat(_toConsumableArray(args[0]), _toConsumableArray(correlograms));
        var dfts;
        var scalar = 1; //console.log(mins)
        //console.log(buffer);

        dfts = _this.gpu.MultiChannelDFT_Bandpass(buffer, args[1], args[2], args[3], scalar); //console.log(dfts)

        var cordfts = dfts[1].splice(args[0].length, buffer.length - args[0].length); //console.log(cordfts)

        var coherenceResults = [];
        var nChannels = args[0].length; //cross-correlation dfts arranged like e.g. for 4 channels: [0:0, 0:1, 0:2, 0:3, 1:1, 1:2, 1:3, 2:2, 2:3, 3:3] etc.

        var k = 0;
        var l = 0;
        cordfts.forEach(function (row, i) {
          //move autocorrelation results to front to save brain power
          if (l + k === nChannels) {
            var temp = cordfts.splice(i, 1);
            k++;
            cordfts.splice.apply(cordfts, [k, 0].concat(_toConsumableArray(temp)));
            l = 0; //console.log(i);
          }

          l++;
        }); //Now arranged like [0:0,1:1,2:2,3:3,0:1,0:2,0:3,1:2,1:3,2:3]
        //Outputs FFT coherence data in order of channel data inputted e.g. for 4 channels resulting DFTs = [0:1,0:2,0:3,1:2,1:3,2:3];

        var autoFFTproducts = [];
        k = 0;
        l = 1;
        cordfts.forEach(function (dft, i) {
          var newdft = new Array(dft.length).fill(0);

          if (i < nChannels) {
            //sort out autocorrelogram FFTs
            dft.forEach(function (amp, j) {
              newdft[j] = amp; //*dfts[1][i][j];
            });
            autoFFTproducts.push(newdft);
          } else {
            //now multiply cross correlogram ffts and divide by autocorrelogram ffts (magnitude squared coherence)
            dft.forEach(function (amp, j) {
              newdft[j] = amp * amp / (autoFFTproducts[k][j] * autoFFTproducts[k + l][j]); //Magnitude squared coherence;

              if (newdft[j] > 1) {
                newdft[j] = 1;
              } //caps the values at 1
              //newdft[j] = Math.pow(newdft[j],.125)

            });
            l++;

            if (l + k === nChannels) {
              k++;
              l = 1;
            }

            coherenceResults.push(newdft);
          }
        });
        return [dfts[0], dfts[1], coherenceResults];
      }
    }];
  }

  _createClass(CallbackManager, [{
    key: "runCallback",
    value: function runCallback(foo) {
      var _this2 = this;

      var input = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var origin = arguments.length > 2 ? arguments[2] : undefined;
      var output = 'function not defined';
      this.callbacks.find(function (o, i) {
        if (o["case"] === foo) {
          if (input) output = o.callback(input, origin, _this2);
          return true;
        }
      });
      return output;
    }
  }, {
    key: "checkEvents",
    value: function checkEvents(foo, origin) {
      var found = this.eventSettings.find(function (o) {
        if (o.origin && origin) {
          if (o["case"] && foo) {
            if (o.origin === origin && o["case"] === foo) return true;
          } else if (o.origin === origin) return true;else return;
        } else if (o["case"] && foo) {
          if (o["case"] === foo) return true;else return;
        } else return;
      });
      return found;
    }
  }, {
    key: "checkCallbacks",
    value: function checkCallbacks(event) {
      var _this3 = this;

      var output = 'function not defined';
      if (!event.data) return output;
      this.callbacks.find(function (o, i) {
        if (o["case"] === event.data.foo || o["case"] === event.data["case"]) {
          if (event.data.input) output = o.callback(event.data.input, event.data.origin, _this3);else if (event.data.args) output = o.callback(event.data.args, event.data.origin, _this3);
          return true;
        }
      });
      return output;
    }
  }]);

  return CallbackManager;
}();

/***/ }),

/***/ 666:
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 181:
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 181;
module.exports = webpackEmptyAsyncContext;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _workerCallbacks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(346);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var manager = new _workerCallbacks__WEBPACK_IMPORTED_MODULE_0__/* .CallbackManager */ .Y();
var id = "worker_".concat(Math.floor(Math.random() * 10000000000));
var canvas = manager.canvas;
var ctx = manager.canvas.context;
var context = (/* unused pure expression or super */ null && (ctx)); //another common reference

var counter = 0;

self.onmessage = function (event) {
  // define gpu instance
  // console.log("worker executing...", event)
  // console.time("worker");
  var input;
  if (event.data.output) input = event.data.output; //from events
  else input = event.data; //console.log(input)

  var dict;
  var output = undefined;
  var emitted = false;

  if (_typeof(input) === 'object') {
    if (input.canvas !== undefined) {
      //if a new canvas is sent (event.data.canvas = htmlCanvasElement.transferControlToOffscreen()).
      manager.canvas = input.canvas;
      canvas = manager.canvas;
    }

    if (input.context !== undefined) {
      //set the context
      manager.ctx = manager.canvas.getContext(input.context);
      manager.context = manager.ctx;
      ctx = manager.ctx;
      context = manager.ctx;
    }

    var eventSetting = manager.checkEvents(input.foo, input.origin); //console.log(event)

    output = manager.checkCallbacks(event); // output some results!

    counter++; //just tracks the number of calls made to the worker

    dict = {
      output: output,
      foo: input.foo,
      origin: input.origin,
      id: id,
      counter: counter
    };

    if (eventSetting) {
      manager.events.emit(eventSetting.eventName, dict);
      emitted = true;
    } //if the origin and foo match an event setting on the thread, this emits output as an event
    else if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
      self.postMessage(dict);
    }
  }
  /*
    now run "addfunc" to render something in the linked canvas from the worker thread
    e.g. workers.postToWorker('addfunc',['offscreenrender',`(args)=>{
      ctx.clearRect(0,0,canvas.width,canvas.height); //or this.offscreenctx
      ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50);
    }`]);
  */
  //if(event.data.eventName) console.log("event sent to thread", event.data)


  if (!emitted) manager.events.workerCallback(event.data); //checks for eventName tag
  // console.timeEnd("worker");

  return dict;
};

if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {//addEventListener('message', self.onmessage);
}

manager.events.emit('newWorker', id);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (self);
})();

/******/ })()
;