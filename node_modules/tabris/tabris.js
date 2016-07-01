/*!
 * Tabris.js 1.8.0 (2016-05-13 12:17)
 * 
 * Copyright (c) 2014, 2016 EclipseSource Inc.
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 * 
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 * 
 * * Neither the name of Tabris.js nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
(function(){
if (typeof window === "undefined") {
  global.window = global;
}
delete window.Promise;
require("./polyfill.min.js");

var _ = {

  extend: function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var name in source) {
        target[name] = source[name];
      }
    }
    return target;
  },

  pick: function(object, keys) {
    var result = {};
    for (var key in object) {
      if (keys.indexOf(key) !== -1) {
        result[key] = object[key];
      }
    }
    return result;
  },

  omit: function(object, keys) {
    var result = {};
    for (var key in object) {
      if (keys.indexOf(key) === -1) {
        result[key] = object[key];
      }
    }
    return result;
  },

  drop: function(array, index) {
    return Array.prototype.slice.call(array, arguments.length > 1 ? index : 1);
  },

  clone: function(object) {
    var result = {};
    for (var key in object) {
      result[key] = object[key];
    }
    return result;
  },

  rename: function(object, mapping) {
    var result = {};
    for (var key in object) {
      result[mapping[key] || key] = object[key];
    }
    return result;
  },

  invert: function(object) {
    var result = {};
    for (var key in object) {
      result[object[key]] = key;
    }
    return result;
  },

  extendPrototype: function(fn, target) {
    var Helper = function() {};
    Helper.prototype = fn.prototype;
    return _.extend(new Helper(), target, {
      "_super": function(method, params) {
        return fn.prototype[method].apply(this, params);
      }
    });
  }

};

(function() {

  _.colorArrayToString = function(array) {
    var r = array[0];
    var g = array[1];
    var b = array[2];
    var a = array.length === 3 ? 1 : Math.round(array[3] * 100 / 255) / 100;
    return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
  };

  _.colorStringToArray = function(str) {
    if (str === "transparent") {
      return [0, 0, 0, 0];
    }
    // #xxxxxx
    if (/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/.test(str)) {
      return [
        parseInt(RegExp.$1, 16),
        parseInt(RegExp.$2, 16),
        parseInt(RegExp.$3, 16),
        255
      ];
    }
    // #xxx
    if (/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/.test(str)) {
      return [
        parseInt(RegExp.$1, 16) * 17,
        parseInt(RegExp.$2, 16) * 17,
        parseInt(RegExp.$3, 16) * 17,
        255
      ];
    }
    // #rgb(r, g, b)
    if (/^rgb\s*\(\s*([+\-]?[0-9]+)\s*,\s*([+\-]?[0-9]+)\s*,\s*([+\-]?[0-9]+)\s*\)$/.test(str)) {
      return [
        Math.max(0, Math.min(255, parseInt(RegExp.$1))),
        Math.max(0, Math.min(255, parseInt(RegExp.$2))),
        Math.max(0, Math.min(255, parseInt(RegExp.$3))),
        255
      ];
    }
    // rgba(r, g, b, a)
    if (/^rgba\s*\(\s*([+\-]?[0-9]+)\s*,\s*([+\-]?[0-9]+)\s*,\s*([+\-]?[0-9]+)\s*,\s*([+\-]?([0-9]*\.)?[0-9]+)\s*\)$/.test(str)) {
      return [
        Math.max(0, Math.min(255, parseInt(RegExp.$1))),
        Math.max(0, Math.min(255, parseInt(RegExp.$2))),
        Math.max(0, Math.min(255, parseInt(RegExp.$3))),
        Math.round(Math.max(0, Math.min(1, parseFloat(RegExp.$4))) * 255)
      ];
    }
    // named colors
    if (str in NAMES) {
      var rgb = NAMES[str];
      return [rgb[0], rgb[1], rgb[2], 255];
    }
    throw new Error("invalid color: " + str);
  };

  /*
   * Basic color keywords as defined in CSS 3
   * See http://www.w3.org/TR/css3-color/#html4
   */
  var NAMES = {
    black: [0, 0, 0],
    silver: [192, 192, 192],
    gray: [128, 128, 128],
    white: [255, 255, 255],
    maroon: [128, 0, 0],
    red: [255, 0, 0],
    purple: [128, 0, 128],
    fuchsia: [255, 0, 255],
    green: [0, 128, 0],
    lime: [0, 255, 0],
    olive: [128, 128, 0],
    yellow: [255, 255, 0],
    navy: [0, 0, 128],
    blue: [0, 0, 255],
    teal: [0, 128, 128],
    aqua: [0, 255, 255]
  };

})();

(function() {

  _.fontStringToObject = function(str) {
    var result = {family: [], size: 0, style: "normal", weight: "normal"};
    var parts = str.split(/(?:\s|^)\d+px(?:\s|$)/);
    checkTruthy(parts.length === 2 || parts.length === 1, "Invalid font syntax");
    result.size = parseInt(/(?:\s|^)(\d+)px(?:\s|$)/.exec(str)[1], 10);
    parseStyles(result, parts[0]);
    parseFamily(result, parts[1]);
    return result;
  };

  _.fontObjectToString = function(font) {
    return [font.style, font.weight, font.size + "px", font.family.join(", ")].join(" ").trim();
  };

  function parseStyles(fontArr, styles) {
    var styleArr = styles.trim().split(/\s+/);
    checkTruthy(styleArr.length <= 2, "Too many font styles");
    styleArr.forEach(function(property) {
      switch (property.trim()) {
        case "italic":
          checkTruthy(fontArr.style === "normal", "Invalid font variant");
          fontArr.style = "italic";
          break;
        case "black":
        case "bold":
        case "medium":
        case "thin":
        case "light":
          checkTruthy(fontArr.weight === "normal", "Invalid font weight");
          fontArr.weight = property.trim();
          break;
        case "normal":
        case "":
          break;
        default:
          throw new Error("Unknown font property: " + property.trim());
      }
    });
  }

  function parseFamily(fontArr, family) {
    // NOTE: Currently family is optional to allow for default fonts, but this is
    //       not CSS font syntax. See https://github.com/eclipsesource/tabris-js/issues/24
    (family ? family.split(",") : []).forEach(function(name) {
      var valid = /(?:^\s*[^\"\']+\s*$)|(?:^\s*\"[^\"\']+\"\s*$)|(?:^\s*\'[^\"\']+\'\s*$)/.exec(name);
      checkTruthy(valid, "Invalid font family: " + name);
      fontArr.family.push(/^\s*[\"\']?([^\"\']*)/.exec(name)[1].trim());
    });
  }

  function checkTruthy(value, message) {
    if (!value) {
      throw new Error(message);
    }
  }

}());

(function() {

  _.imageToArray = function(value) {
    return [value.src, checkValue(value.width), checkValue(value.height), checkValue(value.scale)];
  };

  _.imageFromArray = function(value) {
    var result = {src: value[0]};
    if (value[1]) {
      result.width = value[1];
    }
    if (value[2]) {
      result.height = value[2];
    }
    if (value[3]) {
      result.scale = value[3];
    }
    return result;
  };

  function checkValue(value) {
    return value != null ? value : null;
  }

}());

(function(module) {

  window.tabris = module.exports = _.extend(function(cid) {
    if (!tabris._proxies[cid]) {
      throw new Error("No native object with cid " + cid);
    }
    return tabris._proxies[cid];
  }, {

    _loadFunctions: [],
    _proxies: {},
    _ready: false,

    load: function(fn) {
      if (tabris._ready) {
        fn.call();
      } else {
        tabris._loadFunctions.push(fn);
      }
    },

    create: function(type, properties) {
      if (!(type in tabris)) {
        throw new Error("Unknown type " + type);
      }
      return new tabris[type](properties || {});
    },

    registerType: function(type, members, superType) {
      if (type in tabris) {
        throw new Error("Type already registered: " + type);
      }
      tabris[type] = function(properties) {
        if (!(this instanceof tabris[type])) {
          throw new Error("Cannot call constructor as a function");
        }
        if (tabris[type]._cid) {
          tabris.Proxy.call(this, tabris[type]._cid);
        } else {
          if (!tabris._nativeBridge) {
            throw new Error("tabris.js not started");
          }
          tabris.Proxy.call(this);
          this._create(properties || {});
        }
      };
      for (var member in staticMembers) {
        tabris[type][member] = members[member] || getDefault(member);
      }
      tabris[type]._events = normalizeEventsMap(tabris[type]._events);
      tabris[type]._properties = normalizePropertiesMap(tabris[type]._properties);
      tabris[type]._trigger = buildTriggerMap(tabris[type]._events);
      var superProto = _.omit(members, Object.keys(staticMembers));
      superProto.type = type;
      superProto.constructor = tabris[type]; // _.extendPrototype can not provide the original
      tabris[type].prototype = _.extendPrototype(superType || tabris.Proxy, superProto);
    },

    version: "1.8.0",

    _init: function(client) {
      tabris.off();
      tabris._off();
      tabris._client = client;
      tabris._nativeBridge = new tabris.NativeBridge(client);
      var i = 0;
      while (i < tabris._loadFunctions.length) {
        tabris._loadFunctions[i++].call();
      }
      tabris._ready = true;
    },

    _setEntryPoint: function(entryPoint) {
      this._entryPoint = entryPoint;
    },

    _notify: function(cid, event, param) {
      var returnValue;
      try {
        var proxy = tabris._proxies[cid];
        if (proxy) {
          try {
            returnValue = proxy._trigger(event, param);
          } catch (error) {
            console.error(error);
            console.log(error.stack);
          }
        }
        tabris.trigger("flush");
      } catch (ex) {
        console.error(ex);
        console.log(ex.stack);
      }
      return returnValue;
    },

    _reset: function() {
      this._loadFunctions = [];
      this._proxies = {};
    }

  });

  // TODO: remove once source files are modules
  tabris.util = _;

  var normalizeEventsMap = tabris.registerType.normalizeEventsMap = function(events) {
    var result = {};
    for (var event in events) {
      var entry = events[event];
      result[event] = typeof entry === "object" ? entry : {};
      if (!result[event].name) {
        result[event].name = typeof entry === "string" ? entry : event;
      }
      if (result[event].alias) {
        result[event].originalName = event;
        result[result[event].alias] = result[event];
      }
    }
    return result;
  };

  var normalizePropertiesMap = tabris.registerType.normalizePropertiesMap = function(properties) {
    var result = {};
    for (var property in properties) {
      var entry = properties[property];
      if (entry === true) {
        // TODO: Remove this block once current tabris.js is considered incompatible with developer
        //       apps older than tabris 1.2 (which have cordova.js files built in using this syntax)
        console.warn("A custom component uses deprecated property type value 'true'");
        entry = "any";
      }
      var shortHand = (typeof entry === "string" || Array.isArray(entry));
      result[property] = {
        type: resolveType((shortHand ? entry : entry.type) || "any"),
        default: entry.default,
        nocache: entry.nocache,
        access: {
          set: entry.access && entry.access.set || defaultSetter,
          get: entry.access && entry.access.get || defaultGetter
        }
      };
    }
    return result;
  };

  function resolveType(type) {
    var typeDef = type;
    if (typeof type === "string") {
      typeDef = tabris.PropertyTypes[type];
    } else if (Array.isArray(type)) {
      typeDef = tabris.PropertyTypes[type[0]];
    }
    if (typeof typeDef !== "object") {
      throw new Error("Can not find property type " + type);
    }
    if (Array.isArray(type)) {
      typeDef = _.clone(typeDef);
      var args = type.slice(1);
      if (typeDef.encode) {
        typeDef.encode = wrapCoder(typeDef.encode, args);
      }
      if (typeDef.decode) {
        typeDef.decode = wrapCoder(typeDef.decode, args);
      }
    }
    return typeDef;
  }

  function wrapCoder(fn, args) {
    return function(value) {
      return fn.apply(window, [value].concat(args));
    };
  }

  function defaultSetter(name, value, options) {
    this._nativeSet(name, value);
    if (this.constructor._properties[name].nocache) {
      this._triggerChangeEvent(name, value, options);
    } else {
      this._storeProperty(name, value, options);
    }
  }

  function defaultGetter(name) {
    var result = this._getStoredProperty(name);
    if (result === undefined) {
      // TODO: cache read property, but not for device properties
      result = this._nativeGet(name);
    }
    return result;
  }

  function buildTriggerMap(events) {
    var result = {};
    for (var event in events) {
      var name = events[event].name;
      result[name] = event;
    }
    return result;
  }

  function getDefault(member) {
    var value = staticMembers[member];
    return value instanceof Object ? _.clone(value) : value;
  }

  var staticMembers = {
    "_events": {},
    "_initProperties": {},
    "_type": null,
    "_cid": null,
    "_properties": {},
    "_supportsChildren": false
  };

}(typeof module !== "undefined" ? module : {}));

(function() {

  tabris.NativeBridge = function(bridge) {
    this._bridge = bridge;
    this._operations = [];
    this._currentOperation = {id: null};
    tabris._on("flush", this.flush, this);
  };

  tabris.NativeBridge.prototype = {

    create: function(id, type) {
      var properties = {};
      this._operations.push(["create", id, type, properties]);
      this._currentOperation = {id: id, properties: properties};
    },

    set: function(id, name, value) {
      if (this._currentOperation.id === id) {
        this._currentOperation.properties[name] = value;
      } else {
        var properties = {};
        properties[name] = value;
        this._operations.push(["set", id, properties]);
        this._currentOperation = {id: id, properties: properties};
      }
    },

    listen: function(id, event, listen) {
      this._operations.push(["listen", id, event, listen]);
      this._currentOperation = {id: null};
    },

    destroy: function(id) {
      this._operations.push(["destroy", id]);
      this._currentOperation = {id: null};
    },

    get: function(id, name) {
      this.flush();
      return this._bridge.get(id, name);
    },

    call: function(id, method, parameters) {
      this.flush();
      return this._bridge.call(id, method, parameters);
    },

    flush: function() {
      tabris.Layout.flushQueue();
      var operations = this._operations;
      this._operations = [];
      this._currentOperation = {id: null};
      var length = operations.length;
      // Using apply() on the native bridge does not work with Rhino. It seems that the parameter
      // count must be known in order to find the associated native method.
      for (var i = 0; i < length; i++) {
        var op = operations[i];
        switch (op[0]) {
          case "create":
            this._bridge.create(op[1], op[2], op[3]);
            break;
          case "set":
            this._bridge.set(op[1], op[2]);
            break;
          case "listen":
            this._bridge.listen(op[1], op[2], op[3]);
            break;
          case "destroy":
            this._bridge.destroy(op[1]);
        }
      }
    }
  };

})();

tabris.Events = {

  on: function(type, callback, context) {
    return this._on(type, callback, context, true);
  },

  off: function(type, callback, context) {
    return this._off(type, callback, context, true);
  },

  _on: function(type, callback, context, isPublic) {
    this._checkDisposed();
    var store = isPublic ? "_callbacks" : "_privateCallbacks";
    var wasListening = this._isListening(type);
    if (!this[store]) {
      this[store] = [];
    }
    this[store][type] = (this[store][type] || []).concat([
      {
        fn: callback,
        ctx: context
      }
    ]);
    if (!wasListening) {
      this._listen(type, true);
    }
    return this;
  },

  _off: function(type, callback, context, isPublic) {
    this._checkDisposed();
    var store = isPublic ? "_callbacks" : "_privateCallbacks";
    if (this[store]) {
      if (!type) {
        delete this[store];
      } else if (type in this[store]) {
        if (!callback) {
          delete this[store][type];
        } else {
          var callbacks = this[store][type].concat();
          for (var i = callbacks.length - 1; i >= 0; i--) {
            if ((callbacks[i].fn === callback || callbacks[i].fn._callback === callback) &&
              (!context || callbacks[i].ctx === context)) {
              callbacks.splice(i, 1);
            }
          }
          if (callbacks.length === 0) {
            delete this[store][type];
            if (Object.keys(this[store]).length === 0) {
              delete this[store];
            }
          } else {
            this[store][type] = callbacks;
          }
        }
      }
    }
    if (!this._isListening(type)) {
      this._listen(type, false);
    }
    return this;
  },

  once: function(type, callback, context) {
    this._checkDisposed();
    var self = this;
    var wrappedCallback = function() {
      if (!self._isDisposed) {
        self.off(type, wrappedCallback, context);
      }
      callback.apply(this, arguments);
    };
    wrappedCallback._callback = callback;
    return this.on(type, wrappedCallback, context);
  },

  trigger: function(type /*, args* */) {
    if (!this._isDisposed) {
      var args = Array.prototype.slice.call(arguments, 1);
      this._callAll(type, args, false);
      this._callAll(type, args, true);
    }
    return this;
  },

  _callAll: function(type, args, isPublic) {
    var store = isPublic ? "_callbacks" : "_privateCallbacks";
    if (this[store] && type in this[store]) {
      var callbacks = this[store][type];
      for (var i = 0; i < callbacks.length; i++) {
        var callback = callbacks[i];
        callback.fn.apply(callback.ctx || this, args);
      }
    }
  },

  _isListening: function(type) {
    return (!!this._callbacks && (!type || type in this._callbacks)) ||
      (!!this._privateCallbacks && (!type || type in this._privateCallbacks));
  },

  _checkDisposed: function() {},
  _listen: function() {}

};

_.extend(tabris, tabris.Events);

(function() {

  tabris.Layout = {

    checkConsistency: function(layoutData) {
      var result = layoutData;
      if ("centerX" in result) {
        if (("left" in result) || ("right" in result)) {
          console.warn("Inconsistent layoutData: centerX overrides left and right");
          result = _.omit(result, ["left", "right"]);
        }
      }
      if ("baseline" in result) {
        if (("top" in result) || ("bottom" in result) || ("centerY" in result)) {
          console.warn("Inconsistent layoutData: baseline overrides top, bottom, and centerY");
          result = _.omit(result, ["top", "bottom", "centerY"]);
        }
      } else if ("centerY" in result) {
        if (("top" in result) || ("bottom" in result)) {
          console.warn("Inconsistent layoutData: centerY overrides top and bottom");
          result = _.omit(result, ["top", "bottom"]);
        }
      }
      if ("left" in result && "right" in result && "width" in result) {
        console.warn("Inconsistent layoutData: left and right are set, ignore width");
        result = _.omit(result, ["width"]);
      }
      if ("top" in result && "bottom" in result && "height" in result) {
        console.warn("Inconsistent layoutData: top and bottom are set, ignore height");
        result = _.omit(result, ["height"]);
      }
      return result;
    },

    resolveReferences: function(layoutData, targetWidget) {
      if (!targetWidget) {
        return layoutData;
      }
      var result = {};
      for (var key in layoutData) {
        result[key] = resolveAttribute(layoutData[key], targetWidget);
      }
      return result;
    },

    addToQueue: function(parent) {
      layoutQueue[parent.cid] = parent;
    },

    flushQueue: function() {
      for (var cid in layoutQueue) {
        layoutQueue[cid]._flushLayout();
      }
      layoutQueue = {};
    }

  };

  var layoutQueue = {};

  function resolveAttribute(value, widget) {
    if (Array.isArray(value)) {
      return resolveArray(value, widget);
    }
    if (isNumber(value)) {
      return value;
    }
    return toProxyId(value, widget);
  }

  function resolveArray(array, widget) {
    if (isNumber(array[0])) {
      return array;
    }
    return [toProxyId(array[0], widget), array[1]];
  }

  function toProxyId(ref, widget) {
    if (ref === "prev()") {
      var children = getParent(widget).children();
      var index = children.indexOf(widget);
      if (index > 0) {
        return tabris.PropertyTypes.proxy.encode(children[index - 1]) || 0;
      }
      return 0;
    }
    if (typeof ref === "string") {
      var proxy = getParent(widget).children(ref)[0];
      return tabris.PropertyTypes.proxy.encode(proxy) || 0;
    }
    return tabris.PropertyTypes.proxy.encode(ref) || 0;
  }

  function isNumber(value) {
    return typeof value === "number" && isFinite(value);
  }

  function getParent(widget) {
    return widget.parent() || emptyParent;
  }

  var emptyParent = {
    children: function() {
      return [];
    }
  };

}());

(function() {

  tabris.Properties = {

    set: function(arg1, arg2, arg3) {
      this._checkDisposed();
      if (typeof arg1 === "string") {
        this._setProperty(arg1, arg2, arg3 || {});
      } else {
        this._setProperties(arg1, arg2 || {});
      }
      return this;
    },

    get: function(name) {
      this._checkDisposed();
      var getter = this._getPropertyGetter(name) || this._getStoredProperty;
      var value = getter.call(this, name);
      return this._decodeProperty(this._getTypeDef(name), value);
    },

    _setProperties: function(properties, options) {
      for (var name in properties) {
        this._setProperty(name, properties[name], options);
      }
    },

    _setProperty: function(name, value, options) {
      var typeDef = this._getTypeDef(name);
      var encodedValue;
      try {
        encodedValue = this._encodeProperty(typeDef, value);
      } catch (ex) {
        console.warn(this.toString() + ": Ignored unsupported value for property \"" + name + "\": " + ex.message);
        return;
      }
      var setter = this._getPropertySetter(name) || this._storeProperty;
      setter.call(this, name, encodedValue, options);
    },

    _storeProperty: function(name, encodedValue, options) {
      var oldEncodedValue = this._getStoredProperty(name);
      if (encodedValue === oldEncodedValue) {
        return;
      }
      if (encodedValue === undefined && this._props) {
        delete this._props[name];
      } else {
        if (!this._props) {
          this._props = {};
        }
        this._props[name] = encodedValue;
      }
      this._triggerChangeEvent(name, encodedValue, options);
    },

    _getStoredProperty: function(name) {
      var result = this._props ? this._props[name] : undefined;
      if (result === undefined) {
        result = this._getDefaultPropertyValue(name);
      }
      return result;
    },

    _getTypeDef: function(name) {
      var prop = this.constructor._properties[name];
      return prop ? prop.type : null;
    },

    _getDefaultPropertyValue: function(name) {
      var prop = this.constructor._properties[name];
      return prop ? valueOf(prop.default) : undefined;
    },

    _encodeProperty: function(typeDef, value) {
      return (typeDef && typeDef.encode) ? typeDef.encode(value) : value;
    },

    _decodeProperty: function(typeDef, value) {
      return (typeDef && typeDef.decode) ? typeDef.decode(value) : value;
    },

    _getPropertyGetter: function(name) {
      var prop = this.constructor._properties[name];
      return prop && prop.access ? prop.access.get : undefined;
    },

    _getPropertySetter: function(name) {
      var prop = this.constructor._properties[name];
      return prop && prop.access ? prop.access.set : undefined;
    },

    _triggerChangeEvent: function(propertyName, newEncodedValue, options) {
      var typeDef = this._getTypeDef(propertyName);
      var decodedValue = this._decodeProperty(typeDef, newEncodedValue);
      this.trigger("change:" + propertyName, this, decodedValue, options || {});
    },

    _checkDisposed: function() {},
    trigger: function() {}

  };

  function valueOf(value) {
    return value instanceof Function ? value() : value;
  }

}());

(function() {

  tabris.Proxy = function(cid) {
    this.cid = cid || generateId();
    if (cid in tabris._proxies) {
      throw new Error("cid already in use: " + cid);
    }
    tabris._proxies[this.cid] = this;
  };

  _.extend(tabris.Proxy.prototype, tabris.Properties, tabris.Events, {

    _create: function(properties) {
      var type = this.constructor._type || this.type;
      tabris._nativeBridge.create(this.cid, type);
      if (this.constructor._initProperties) {
        for (var name in this.constructor._initProperties) {
          this._nativeSet(name, this.constructor._initProperties[name]);
        }
      }
      this._setProperties(properties || {});
      return this;
    },

    dispose: function() {
      this._dispose();
    },

    _dispose: function(skipNative) {
      if (!this._isDisposed && !this._inDispose) {
        this._inDispose = true;
        this.trigger("dispose", this, {});
        this._release();
        if (!skipNative) {
          tabris._nativeBridge.destroy(this.cid);
        }
        delete tabris._proxies[this.cid];
        this._isDisposed = true;
      }
    },

    _release: function() {
    },

    isDisposed: function() {
      return !!this._isDisposed;
    },

    _listen: function(event, state) {
      var config = this._getEventConfig(event);
      if (!config || this._isListeningToAlias(event, config)) {
        return;
      }
      if (config.listen) {
        config.listen.call(this, state, config.alias === event);
      } else {
        this._nativeListen(config.name, state);
      }
    },

    _isListeningToAlias: function(event, config) {
      if (!config.alias) {
        return false;
      }
      var other = event === config.originalName ?  config.alias : config.originalName;
      return this._isListening(other);
    },

    _nativeListen: function(event, state) {
      tabris._nativeBridge.listen(this.cid, event, state);
    },

    _trigger: function(event, params) {
      var name = this.constructor._trigger[event];
      var trigger = name && this.constructor._events[name].trigger;
      if (trigger instanceof Function) {
        return trigger.call(this, params, name);
      } else if (name) {
        this.trigger(name, params);
      } else {
        this.trigger(event, params);
      }
    },

    _checkDisposed: function() {
      if (this._isDisposed) {
        throw new Error("Object is disposed");
      }
    },
    _getEventConfig: function(type) {
      return this.constructor._events[type];
    },

    _nativeSet: function(name, value) {
      tabris._nativeBridge.set(this.cid, name, value);
    },

    _nativeGet: function(name) {
      return tabris._nativeBridge.get(this.cid, name);
    },

    _nativeCall: function(method, parameters) {
      this._checkDisposed();
      return tabris._nativeBridge.call(this.cid, method, parameters);
    },

    toString: function() {
      return this.type;
    }

  });

  var idSequence = 1;

  function generateId() {
    return "o" + (idSequence++);
  }

})();

(function() {

  tabris.ProxyCollection = function(arr, selector, deep) {
    this._array = select(arr, selector || "*", deep);
    for (var i = 0; i < this._array.length; i++) {
      this[i] = this._array[i];
    }
    this.length = this._array.length;
  };

  var proto = tabris.ProxyCollection.prototype = {

    first: function() {
      return this._array[0];
    },

    last: function() {
      return this._array[this._array.length - 1];
    },

    toArray: function() {
      return this._array.concat();
    },

    forEach: function(callback) {
      var that = this;
      this._array.forEach(function(value, index) {
        callback(value, index, that);
      });
    },

    indexOf: function(needle) {
      return this._array.indexOf(needle);
    },

    filter: function(selector) {
      return new tabris.ProxyCollection(this._array, selector);
    },

    get: function(prop) {
      if (this._array[0]) {
        return this._array[0].get(prop);
      }
    },

    parent: function() {
      var result = [];
      for (var i = 0; i < this._array.length; i++) {
        var parent = this._array[i].parent();
        if (parent && result.indexOf(parent) === -1) {
          result.push(parent);
        }
      }
      if (result.length) {
        return new tabris.ProxyCollection(result);
      }
    },

    children: function(selector) {
      var result = [];
      for (var i = 0; i < this._array.length; i++) {
        result.push.apply(result, this._array[i]._getSelectableChildren() || []);
      }
      return new tabris.ProxyCollection(result, selector);
    },

    find: function(selector) {
      return new tabris.ProxyCollection(this.children()._array, selector, true);
    },

    appendTo: function(parent) {
      parent.append(this);
    },

    dispose: function() {
      for (var i = 0; i < this._array.length; i++) {
        this._array[i].dispose();
      }
    }

  };

  ["set", "animate", "on", "off", "once"].forEach(function(key) {
    proto[key] = function() {
      for (var i = 0; i < this._array.length; i++) {
        this._array[i][key].apply(this._array[i], arguments);
      }
      if (key !== "animate") {
        return this;
      }
    };
  });

  function select(array, selector, deep) {
    if (!array || array.length === 0) {
      return [];
    }
    if (selector === "*" && !deep) {
      return array.concat();
    }
    var filter = getFilter(selector);
    if (deep) {
      return deepSelect([], array, filter);
    }
    return array.filter(filter);
  }

  function deepSelect(result, array, filter) {
    for (var i = 0; i < array.length; i++) {
      if (filter(array[i])) {
        result.push(array[i]);
      }
      if (array[i]._children) {
        deepSelect(result, array[i]._getSelectableChildren(), filter);
      }
    }
    return result;
  }

  function getFilter(selector) {
    var matches = {};
    var filter = selector instanceof Function ? selector : createMatcher(selector);
    return function(widget) {
      if (matches[widget.cid]) {
        return false;
      }
      if (filter(widget)) {
        matches[widget.cid] = true;
        return true;
      }
      return false;
    };
  }

  function createMatcher(selector) {
    if (selector.charAt(0) === "#") {
      var expectedId = selector.slice(1);
      return function(proxy) {
        return expectedId === proxy.id;
      };
    }
    if (selector.charAt(0) === ".") {
      var expectedClass = selector.slice(1);
      return function(proxy) {
        return proxy.classList.indexOf(expectedClass) !== -1;
      };
    }
    if (selector === "*") {
      return function() {return true;};
    }
    return function(proxy) {
      return selector === proxy.type;
    };
  }

}());

(function() {

  tabris.PropertyTypes = {

    any: {},

    boolean: {
      encode: function(bool) {
        return !!bool;
      }
    },

    string: {
      encode: function(str) {
        return "" + str;
      }
    },

    number: {
      encode: function(value) {
        return encodeNumber(value);
      }
    },

    natural: {
      encode: function(value) {
        value = encodeNumber(value);
        return value < 0 ? 0 : Math.round(value);
      }
    },

    integer: {
      encode: function(value) {
        value = encodeNumber(value);
        return Math.round(value);
      }
    },

    function: {
      encode: function(value) {
        if ("function" !== typeof value) {
          throw new Error(typeof value + " is not a function: " + value);
        }
        return value;
      }
    },

    choice: {
      encode: function(value, acceptable) {
        if (acceptable.indexOf(value) === -1) {
          throwNotAcceptedError(acceptable, value);
        }
        return value;
      }
    },

    color: {
      encode: function(value) {
        if (value === "initial") {
          return undefined;
        }
        return _.colorStringToArray(value);
      },
      decode: function(value) {
        if (!value) {
          // NOTE: null is only returned for "background" where it means "no background"
          return "rgba(0, 0, 0, 0)";
        }
        return _.colorArrayToString(value);
      }
    },

    font: {
      encode: function(value) {
        if (value === "initial") {
          return undefined;
        }
        return _.fontStringToObject(value);
      },
      decode: function(value) {
        if (!value) {
          // NOTE: workaround to allow triggering a change event when setting font to "initial"
          return "initial";
        }
        return _.fontObjectToString(value);
      }
    },

    image: {
      encode: function(value) {
        if (!value) {
          return null;
        }
        if (typeof value === "string") {
          value = {src: value};
        }
        if (typeof value !== "object") {
          throw new Error("Not an image: " + value);
        }
        if (typeof value.src !== "string") {
          throw new Error("image.src is not a string");
        }
        if (value.src === "") {
          throw new Error("image.src is an empty string");
        }
        ["scale", "width", "height"].forEach(function(prop) {
          if (prop in value && !isDimension(value[prop])) {
            throw new Error("image." + prop + " is not a dimension: " + value[prop]);
          }
        });
        if ("scale" in value && ("width" in value || "height" in value)) {
          console.warn("Image scale is ignored if width or height are given");
        }
        return _.imageToArray(value);
      },
      decode: function(value) {
        if (!value) {
          return null;
        }
        return _.imageFromArray(value);
      }
    },

    layoutData: {
      encode: function(value) {
        return encodeLayoutData(value);
      },
      decode: function(value) {
        return decodeLayoutData(value);
      }
    },

    edge: {
      encode: function(value) {
        return value == null ? null : encodeEdge(value);
      },
      decode: decodeLayoutAttr
    },

    dimension: {
      encode: function(value) {
        return value == null ? null : encodeNumber(value);
      },
      decode: decodeLayoutAttr
    },

    sibling: {
      encode: function(value) {
        return value == null ? null : encodeWidgetRef(value);
      },
      decode: decodeLayoutAttr
    },

    bounds: {
      encode: function(value) {
        return [value.left, value.top, value.width, value.height];
      },
      decode: function(value) {
        return {left: value[0], top: value[1], width: value[2], height: value[3]};
      }
    },

    proxy: {
      encode: function(value) {
        if (value instanceof tabris.Proxy) {
          return value.cid;
        }
        if (value instanceof tabris.ProxyCollection) {
          return value[0] ? value[0].cid : null;
        }
        // TODO: Should throw error instead
        return value;
      },
      decode: tabris
    },

    nullable: {
      encode: function(value, altCheck) {
        if (value === null) {
          return value;
        }
        return tabris.PropertyTypes[altCheck].encode(value);
      }
    },

    opacity: {
      encode: function(value) {
        value = encodeNumber(value);
        if (value < 0 || value > 1) {
          throw new Error("Number is out of bounds: " + value);
        }
        return value;
      }
    },

    transform: {
      encode: function(value) {
        var result = _.extend({}, transformDefaults);
        for (var key in value) {
          if (!(key in transformDefaults)) {
            throw new Error("Not a valid transformation containing \"" + key + "\"");
          }
          result[key] = encodeNumber(value[key]);
        }
        return result;
      }
    },

    array: {
      encode: function(value, type) {
        if (value == null) {
          return [];
        }
        if (!(value instanceof Array)) {
          throw new Error(typeof value + " is not an array: " + value);
        }
        if (type) {
          return value.map(tabris.PropertyTypes[type].encode);
        }
        return value;
      }
    }

  };

  var numberRegex = /^[+-]?([0-9]+|[0-9]*\.[0-9]+)$/;
  var selectorRegex = /^(\*|prev\(\)|([#.]?[A-Za-z_][A-Za-z0-9_-]+))$/;

  function isDimension(value) {
    return typeof value === "number" && !isNaN(value) && value >= 0 && value !== Infinity;
  }

  function throwNotAcceptedError(acceptable, given) {
    var message = ["Accepting \""];
    message.push(acceptable.join("\", \""));
    message.push("\", given was: \"", given + "\"");
    throw new Error(message.join(""));
  }

  function encodeNumber(value) {
    if (typeof value === "string" && numberRegex.test(value)) {
      return parseFloat(value);
    }
    if (typeof value !== "number") {
      throw new Error("Not a number: " + toString(value));
    }
    if (!isFinite(value)) {
      throw new Error("Invalid number: " + toString(value));
    }
    return value;
  }

  var transformDefaults = {
    rotation: 0,
    scaleX: 1,
    scaleY: 1,
    translationX: 0,
    translationY: 0,
    translationZ: 0
  };

  var layoutEncoders = {
    width: encodeNumber,
    height: encodeNumber,
    left: encodeEdge,
    right: encodeEdge,
    top: encodeEdge,
    bottom: encodeEdge,
    centerX: encodeNumber,
    centerY: encodeNumber,
    baseline: encodeWidgetRef
  };

  function encodeLayoutData(layoutData) {
    var result = {};
    for (var key in layoutData) {
      if (layoutData[key] != null) {
        if (!(key in layoutEncoders)) {
          throw new Error("Invalid key '" + key + "' in layoutData");
        }
        try {
          result[key] = layoutEncoders[key](layoutData[key]);
        } catch (error) {
          throw new Error("Invalid value for '" + key + "': " + error.message);
        }
      }
    }
    return result;
  }

  function encodeEdge(value) {
    if (typeof value === "string") {
      if (value.indexOf(" ") !== -1) {
        return encodeEdgeArray(value.split(/\s+/));
      }
      if (value[value.length - 1] === "%") {
        var percentage = encodePercentage(value);
        return percentage === 0 ? 0 : [percentage, 0];
      }
      if (numberRegex.test(value)) {
        return [0, parseFloat(value)];
      }
      if (selectorRegex.test(value)) {
        return [value, 0];
      }
      throw new Error("Invalid dimension: " + toString(value));
    }
    if (typeof value === "number") {
      if (!isFinite(value)) {
        throw new Error("Invalid number: " + toString(value));
      }
      return value;
    }
    if (Array.isArray(value)) {
      return encodeEdgeArray(value);
    }
    if (value instanceof tabris.Proxy) {
      return [value, 0];
    }
    throw new Error("Invalid dimension: " + toString(value));
  }

  function encodeEdgeArray(array) {
    if (array.length !== 2) {
      throw new Error("Wrong number of elements (must be 2): " + toString(array));
    }
    var ref = encodeEdgeRef(array[0]);
    var offset = encodeNumber(array[1]);
    return ref === 0 ? offset : [ref, offset];
  }

  function encodeEdgeRef(value) {
    if (typeof value === "string") {
      if (value[value.length - 1] === "%") {
        return encodePercentage(value);
      }
      if (selectorRegex.test(value)) {
        return value;
      }
    }
    if (typeof value === "number") {
      if (!isFinite(value)) {
        throw new Error("Invalid number: " + toString(value));
      }
      return value;
    }
    if (value instanceof tabris.Proxy) {
      return value;
    }
    throw new Error("Not a percentage or widget reference: " + toString(value));
  }

  function encodePercentage(value) {
    var sub = value.substr(0, value.length - 1);
    if (numberRegex.test(sub)) {
      return parseFloat(sub);
    }
    throw new Error("Invalid percentage value: " + toString(value));
  }

  function encodeWidgetRef(value) {
    if (value instanceof tabris.Proxy) {
      return value;
    }
    if (typeof value === "string" && selectorRegex.test(value)) {
      return value;
    }
    throw new Error("Not a widget reference: " + toString(value));
  }

  function decodeLayoutData(layoutData) {
    if (!layoutData) {
      return null;
    }
    var result = {};
    for (var key in layoutData) {
      result[key] = decodeLayoutAttr(layoutData[key]);
    }
    return result;
  }

  function decodeLayoutAttr(value) {
    if (Array.isArray(value)) {
      if (value[0] === 0) {
        return value[1];
      }
      if (value[1] === 0) {
        return typeof value[0] === "number" ? value[0] + "%" : value[0];
      }
      return [typeof value[0] === "number" ? value[0] + "%" : value[0], value[1]];
    }
    return value;
  }

  function toString(value) {
    if (typeof value === "string") {
      return "'" + value + "'";
    }
    if (Array.isArray(value)) {
      return "[" + value.map(toString).join(", ") + "]";
    }
    if (typeof value === "object" && value != null) {
      return "{" + Object.keys(value).join(", ") + "}";
    }
    return "" + value;
  }

}());

(function() {

  tabris.registerType("_Animation", {

    _type: "tabris.Animation",

    _create: function() {
      this._super("_create", arguments);
      this._nativeListen("Start", true);
      this._nativeListen("Completion", true);
      return this;
    },

    _events: {
      Start: {
        trigger: function() {
          this._target.trigger("animationstart", this._target, this._options);
        }
      },
      Completion: {
        trigger: function() {
          this._target._off("dispose", this.dispose, this);
          this._target.trigger("animationend", this._target, this._options);
          this.dispose();
        }
      }
    },

    _properties: {
      properties: "any",
      delay: "natural",
      duration: "natural",
      repeat: "natural",
      reverse: "boolean",
      easing: ["choice", ["linear", "ease-in", "ease-out", "ease-in-out"]],
      target: "proxy"
    },

    start: function() {
      this._nativeCall("start");
    }

  });

  tabris._Animation.animate = function(properties, options) {
    var animatedProps = {};
    for (var property in properties) {
      if (animatable[property]) {
        try {
          animatedProps[property] =
            this._encodeProperty(this._getTypeDef(property), properties[property]);
          this._storeProperty(property, animatedProps[property], options);
        } catch (ex) {
          console.warn(this.type + ": Ignored invalid animation property value for \"" + property + "\"");
        }
      } else {
        console.warn(this.type + ": Ignored invalid animation property \"" + property + "\"");
      }
    }
    for (var option in options) {
      if (!tabris._Animation._properties[option] && option !== "name") {
        console.warn(this.type + ": Ignored invalid animation option \"" + option + "\"");
      }
    }
    var animation = tabris.create("_Animation", _.extend({}, options, {
      target: this,
      properties: animatedProps
    }));
    animation._target = this;
    animation._options = options;
    this._on("dispose", animation.dispose, animation);
    animation.start();
  };

  var animatable = {
    opacity: true,
    transform: true
  };

}());

tabris.registerType("_GestureRecognizer", {

  _type: "tabris.GestureRecognizer",
  _properties: {
    type: "string",
    target: "proxy",
    fingers: "natural",
    touches: "natural",
    duration: "natural",
    direction: "string"
  },

  _events: {
    gesture: true
  }

});

(function() {

  tabris.registerType("_Device", {
    _cid: "tabris.Device",
    _properties: {
      model: "any",
      platform: "any",
      version: "any",
      language: "any",
      orientation: "any",
      screenWidth: "any",
      screenHeight: "any",
      scaleFactor: "any",
      win_keyboardPresent: "any",
      win_primaryInput: "any"
    },
    _setProperty: function() {},
    _events: {
      "change:orientation": {
        name: "orientationchange",
        trigger: function(event) {
          this._triggerChangeEvent("orientation", event.orientation);
        }
      }
    },
    dispose: function() {
      throw new Error("cannot dispose device object");
    }
  });

  tabris._publishDeviceProperties = function(target) {
    if (!("device" in target)) {
      target.device = createDeviceObject();
    }
    if (!("screen" in target)) {
      target.screen = createScreenObject();
    }
    if (("navigator" in target) && !("language" in target.navigator)) {
      defineReadOnlyProperty(target.navigator, "language", getDevicePropertyFn("language"));
    }
    if (!("devicePixelRatio" in target)) {
      target.devicePixelRatio = tabris.device.get("scaleFactor");
    }
  };

  tabris.load(function() {
    tabris.device = new tabris._Device();
    if (typeof window !== "undefined") {
      tabris._publishDeviceProperties(window);
    }
  });

  function createDeviceObject() {
    var dev = {};
    ["model", "platform", "version"].forEach(function(name) {
      defineReadOnlyProperty(dev, name, getDevicePropertyFn(name));
    });
    return dev;
  }

  function createScreenObject() {
    var screen = {};
    defineReadOnlyProperty(screen, "width", getDevicePropertyFn("screenWidth"));
    defineReadOnlyProperty(screen, "height", getDevicePropertyFn("screenHeight"));
    return screen;
  }

  function defineReadOnlyProperty(target, name, getter) {
    Object.defineProperty(target, name, {
      get: getter,
      set: function() {}
    });
  }

  function getDevicePropertyFn(name) {
    return function() {
      return tabris.device.get(name);
    };
  }

})();

(function() {

  tabris.Widget = function() {
    throw new Error("Cannot instantiate abstract Widget");
  };

  var superProto = tabris.Proxy.prototype;

  tabris.Widget.prototype = _.extendPrototype(tabris.Proxy, {

    append: function() {
      this._checkDisposed();
      var accept = function(proxy) {
        if (!(proxy instanceof tabris.Proxy)) {
          throw new Error("Cannot append non-widget");
        }
        proxy._setParent(this);
      }.bind(this);
      if (arguments[0] instanceof tabris.ProxyCollection) {
        arguments[0].toArray().forEach(accept);
      } else if (Array.isArray(arguments[0])) {
        arguments[0].forEach(accept);
      } else {
        Array.prototype.forEach.call(arguments, accept);
      }
      return this;
    },

    appendTo: function(proxy) {
      this._checkDisposed();
      proxy = proxy instanceof tabris.ProxyCollection ? proxy.first() : proxy;
      if (!(proxy instanceof tabris.Proxy)) {
        throw new Error("Cannot append to non-widget");
      }
      this._setParent(proxy);
      return this;
    },

    insertBefore: function(proxy) {
      this._checkDisposed();
      proxy = proxy instanceof tabris.ProxyCollection ? proxy.first() : proxy;
      if (!(proxy instanceof tabris.Proxy)) {
        throw new Error("Cannot insert before non-widget");
      }
      var parent = proxy.parent();
      var index = parent._children.indexOf(proxy);
      this._setParent(parent, index);
      return this;
    },

    insertAfter: function(proxy) {
      this._checkDisposed();
      proxy = proxy instanceof tabris.ProxyCollection ? proxy.first() : proxy;
      if (!(proxy instanceof tabris.Proxy)) {
        throw new Error("Cannot insert after non-widget");
      }
      var parent = proxy.parent();
      var index = parent._children.indexOf(proxy);
      this._setParent(parent, index + 1);
      return this;
    },

    parent: function() {
      return this._parent;
    },

    children: function(selector) {
      return new tabris.ProxyCollection(this._getSelectableChildren(), selector);
    },

    siblings: function(selector) {
      var siblings = (this._parent ? this._parent._getSelectableChildren() : []);
      var filtered = siblings.filter(function(widget) {
        return widget !== this;
      }.bind(this));
      return new tabris.ProxyCollection(filtered, selector);
    },

    find: function(selector) {
      return new tabris.ProxyCollection(this._getSelectableChildren(), selector, true);
    },

    apply: function(sheet) {
      var scope = new tabris.ProxyCollection(this._children.concat(this), "*", true);
      if (sheet["*"]) {
        scope.set(sheet["*"]);
      }
      var selector;
      for (selector in sheet) {
        if (selector !== "*" && selector[0] !== "#" && selector[0] !== ".") {
          scope.filter(selector).set(sheet[selector]);
        }
      }
      for (selector in sheet) {
        if (selector[0] === ".") {
          scope.filter(selector).set(sheet[selector]);
        }
      }
      for (selector in sheet) {
        if (selector[0] === "#") {
          scope.filter(selector).set(sheet[selector]);
        }
      }
      return this;
    },

    _getContainer: function() {
      return this;
    },

    _getSelectableChildren: function() {
      return this._children;
    },

    _setParent: function(parent, index) {
      this._nativeSet("parent", tabris.PropertyTypes.proxy.encode(parent._getContainer(this)));
      if (this._parent) {
        this._parent._removeChild(this);
        tabris.Layout.addToQueue(this._parent);
      }
      this._parent = parent;
      this._parent._addChild(this, index);
      tabris.Layout.addToQueue(this._parent);
    },

    _addChild: function(child, index) {
      var check = this.constructor._supportsChildren;
      if (check === false) {
        throw new Error(this.type + " cannot contain children");
      }
      if (typeof check === "function" && !check(child)) {
        throw new Error(this.type + " cannot contain children of type " + child.type);
      }
      if (!this._children) {
        this._children = [];
      }
      if (typeof index === "number") {
        this._children.splice(index, 0, child);
      } else {
        this._children.push(child);
      }
      this.trigger("addchild", this, child, {});
    },

    _removeChild: function(child) {
      if (this._children) {
        var index = this._children.indexOf(child);
        if (index !== -1) {
          this._children.splice(index, 1);
        }
        this.trigger("removechild", this, child, {index: index});
      }
    },

    _release: function() {
      if (this._children) {
        var children = this._children.concat();
        for (var i = 0; i < children.length; i++) {
          children[i]._dispose(true);
        }
        delete this._children;
      }
      if (this._parent) {
        this._parent._removeChild(this);
        tabris.Layout.addToQueue(this._parent);
        delete this._parent;
      }
    },

    _getEventConfig: function(type) {
      var result = superProto._getEventConfig.apply(this, arguments);
      if (!result && this.get("gestures")[type]) {
        return getGestureEventConfig(type);
      }
      return result;
    },

    _flushLayout: function() {
      if (this._children) {
        this._children.forEach(function(child) {
          renderLayoutData.call(child);
        });
      }
    },

    classList: {
      get length() {
        return 0;
      },
      indexOf: function() {
        return -1;
      },
      join: function() {
        return "";
      }
    },

    animate: tabris._Animation.animate

  });

  tabris.registerWidget = function(type, members) {
    members = _.extend({}, members);
    members._events = _.extend({}, tabris.registerWidget._defaultEvents, members._events || {});
    if (members._properties !== true) {
      var defaultProperties = tabris.registerWidget._defaultProperties;
      members._properties = _.extend({}, defaultProperties, members._properties || {});
    }
    tabris.registerType(type, members, tabris.Widget);
  };

  var hasAndroidResizeBug;
  tabris.load(function() {
    hasAndroidResizeBug = device.platform === "Android" && device.version <= 17;
  });

  var layoutAccess = {
    set: function(name, value) {
      if (!this._layoutData) {
        this._layoutData = {};
      }
      if (value == null) {
        delete this._layoutData[name];
      } else {
        this._layoutData[name] = value;
      }
      if (this._parent) {
        tabris.Layout.addToQueue(this._parent);
      }
    },
    get: function(name) {
      return this._layoutData && this._layoutData[name] != null ? this._layoutData[name] : null;
    }
  };

  _.extend(tabris.registerWidget, {
    _defaultEvents: {
      touchstart: {trigger: triggerWithTarget},
      touchmove: {trigger: triggerWithTarget},
      touchend: {trigger: triggerWithTarget},
      touchcancel: {trigger: triggerWithTarget},
      "resize": {
        name: "Resize",
        alias: "change:bounds",
        trigger: function(event) {
          if (hasAndroidResizeBug) {
            var self = this;
            setTimeout(function() {
              self._triggerChangeEvent("bounds", event.bounds, {}, "resize");
              self.trigger("resize", self, tabris.PropertyTypes.bounds.decode(event.bounds), {});
            }, 0);
          } else {
            this._triggerChangeEvent("bounds", event.bounds, {}, "resize");
            this.trigger("resize", this, tabris.PropertyTypes.bounds.decode(event.bounds), {});
          }
        }
      }
    },
    _defaultProperties: tabris.registerType.normalizePropertiesMap({
      enabled: {
        type: "boolean",
        default: true
      },
      visible: {
        type: "boolean",
        default: true,
        access: {
          set: function(name, value, options) {
            this._nativeSet("visibility", value);
            this._storeProperty(name, value, options);
          }
        }
      },
      layoutData: {
        type: "layoutData",
        access: {
          set: function(name, value) {
            this._layoutData = value;
            if (this._parent) {
              tabris.Layout.addToQueue(this._parent);
            }
          },
          get: function() {
            return this._layoutData || null;
          }
        }
      },
      left: {type: "edge", access: layoutAccess},
      right: {type: "edge", access: layoutAccess},
      top: {type: "edge", access: layoutAccess},
      bottom: {type: "edge", access: layoutAccess},
      width: {type: "dimension", access: layoutAccess},
      height: {type: "dimension", access: layoutAccess},
      centerX: {type: "dimension", access: layoutAccess},
      centerY: {type: "dimension", access: layoutAccess},
      baseline: {type: "sibling", access: layoutAccess},
      elevation: {
        type: "number",
        default: 0
      },
      font: {
        type: "font",
        access: {
          set: function(name, value, options) {
            this._nativeSet(name, value === undefined ? null : value);
            this._storeProperty(name, value, options);
          }
        },
        default: null
      },
      backgroundImage: "image",
      bounds: {
        type: "bounds",
        access: {
          set: function() {
            console.warn(this.type + ": Can not set read-only property \"bounds\".");
          }
        }
      },
      background: {
        type: "color",
        access: {
          set: function(name, value, options) {
            this._nativeSet(name, value === undefined ? null : value);
            this._storeProperty(name, value, options);
          }
        }
      },
      textColor: {
        type: "color",
        access: {
          set: function(name, value, options) {
            this._nativeSet("foreground", value === undefined ? null : value);
            this._storeProperty(name, value, options);
          },
          get: function(name) {
            var result = this._getStoredProperty(name);
            if (result === undefined) {
              result = this._nativeGet("foreground");
            }
            return result;
          }
        }
      },
      opacity: {
        type: "opacity",
        default: 1
      },
      transform: {
        type: "transform",
        default: function() {
          return {
            rotation: 0,
            scaleX: 1,
            scaleY: 1,
            translationX: 0,
            translationY: 0,
            translationZ: 0
          };
        }
      },
      highlightOnTouch: {
        type: "boolean",
        default: false
      },
      cornerRadius: {
        type: "number",
        default: 0
      },
      id: {
        type: "string",
        access: {
          set: function(name, value) {
            this.id = value;
          },
          get: function() {
            return this.id;
          }
        }
      },
      class: {
        type: "string",
        access: {
          set: function(name, value) {
            this.classList = value.trim().split(/\s+/);
          },
          get: function() {
            return this.classList.join(" ");
          }
        }
      },
      gestures: {
        access: {
          set: function(name, gestures) {
            this._gestures = _.extend({}, defaultGestures, gestures);
          },
          get: function() {
            if (!this._gestures) {
              this._gestures = _.extend({}, defaultGestures);
            }
            return this._gestures;
          }
        }
      },
      win_theme: {
        type: ["choice", ["default", "light", "dark"]],
        default: "default"
      }
    })
  });

  var defaultGestures = {
    tap: {type: "tap"},
    longpress: {type: "longpress"},
    pan: {type: "pan"},
    "pan:left": {type: "pan", direction: "left"},
    "pan:right": {type: "pan", direction: "right"},
    "pan:up": {type: "pan", direction: "up"},
    "pan:down": {type: "pan", direction: "down"},
    "pan:horizontal": {type: "pan", direction: "horizontal"},
    "pan:vertical": {type: "pan", direction: "vertical"},
    "swipe:left": {type: "swipe", direction: "left"},
    "swipe:right": {type: "swipe", direction: "right"},
    "swipe:up": {type: "swipe", direction: "up"},
    "swipe:down": {type: "swipe", direction: "down"}
  };

  function renderLayoutData() {
    if (this._layoutData) {
      var checkedData = tabris.Layout.checkConsistency(this._layoutData);
      this._nativeSet("layoutData", tabris.Layout.resolveReferences(checkedData, this));
    }
  }

  function getGestureEventConfig(name) {
    return {
      listen: function(state) {
        var gestures = this.get("gestures");
        if (state) {
          var properties = _.extend({target: this}, gestures[name]);
          var recognizer = tabris.create("_GestureRecognizer", properties)
            .on("gesture", gestureListener, {target: this, name: name});
          if (!this._recognizers) {
            this._recognizers = {};
          }
          this._recognizers[name] = recognizer;
          this._on("dispose", recognizer.dispose, recognizer);
        } else if (this._recognizers && name in this._recognizers) {
          this._recognizers[name].dispose();
          delete this._recognizers[name];
        }
      }
    };
  }

  function gestureListener(event) {
    this.target.trigger(this.name, this.target, event);
  }

  function triggerWithTarget(event, name) {
    this.trigger(name, this, event || {});
  }

}());

(function() {

  var noop = function() {};

  tabris.DOMEvent = function(type, eventInitDict) {
    this.type = type;
    this.timeStamp = Date.now();
    if (typeof eventInitDict !== "undefined") {
      if ("bubbles" in eventInitDict) {
        this.bubbles = eventInitDict.bubbles;
      }
      if ("cancelable" in eventInitDict) {
        this.cancelable = eventInitDict.cancelable;
      }
    }
  };

  tabris.DOMEvent.prototype = {
    NONE: 0,
    CAPTURING_PHASE: 1,
    AT_TARGET: 2,
    BUBBLING_PHASE: 3,
    target: null,
    currentTarget: null,
    eventPhase: 0,
    type: "",
    bubbles: false,
    cancelable: false,
    defaultPrevented: false,
    isTrusted: false,
    stopPropagation: noop,
    stopImmediatePropagation: noop,
    preventDefault: noop,
    initEvent: function(type, bubbles, cancelable) {
      this.type = type;
      this.bubbles = bubbles;
      this.cancelable = cancelable;
    }
  };

  tabris._addDOMEventTargetMethods = function(target) {

    if (typeof target.addEventListener === "function") {
      return;
    }

    var listeners;

    target.addEventListener = function(type, listener /*, useCapture*/) {
      if (!listeners) {
        listeners = [];
      }
      if (!(type in listeners)) {
        listeners[type] = [];
      }
      var index = listeners[type].indexOf(listener);
      if (index === -1) {
        listeners[type].push(listener);
      }
      return listeners[type].length === 1;
    };

    target.removeEventListener = function(type, listener /*, useCapture*/) {
      if (listeners && type in listeners) {
        var index = listeners[type].indexOf(listener);
        if (index !== -1) {
          listeners[type].splice(index, 1);
          return listeners[type].length === 0;
        }
      }
      return false;
    };

    target.dispatchEvent = function(event) {
      if (listeners && event.type in listeners) {
        var eventListeners = listeners[event.type];
        event.target = target;
        for (var i = 0; i < eventListeners.length; i++) {
          eventListeners[i].call(this, event);
        }
      }
    };

  };

  if (typeof window !== "undefined") {
    tabris._addDOMEventTargetMethods(window);
    if (!window.Event) {
      window.Event = tabris.DOMEvent;
    }
  }

}());

(function() {

  var noop = function() {};
  var HTMLElement = function(tagName) {
    this.tagName = (tagName || "").toUpperCase();
    this.children = [];
  };
  HTMLElement.prototype = {
    setAttribute: noop,
    appendChild: function(el) {
      this.children.push(el);
      handleElementInserted(this, el);
      return el;
    },
    cloneNode: function() {return new HTMLElement();},
    lastChild: function() {return new HTMLElement();}
  };

  tabris._addDOMDocument = function(target) {
    target.document = {
      documentElement: {},
      createDocumentFragment: function() {return new HTMLElement();},
      createElement: function(tagName) {return new HTMLElement(tagName);},
      location: {href: ""},
      readyState: "loading",
      head: new HTMLElement("head"),
      getElementsByTagName: function(tagName) {
        return this.head.children.filter(function(node) {
          return node.tagName === tagName.toUpperCase();
        });
      },
      createEvent: function() {
        return new tabris.DOMEvent();
      }
    };
    tabris._addDOMEventTargetMethods(target.document);
    if (typeof target.location === "undefined") {
      target.location = target.document.location;
    }
    tabris.load(function() {
      target.document.readyState = "complete";
      var event = document.createEvent("Events");
      event.initEvent("DOMContentLoaded", false, false);
      target.document.dispatchEvent(event);
    });
    target.navigator = {
      userAgent: "tabris-js" // TODO: identify OS/device?
    };
  };

  if (typeof window !== "undefined" && !window.document) {
    tabris._addDOMDocument(window);
  }

  function handleElementInserted(parent, child) {
    if (parent.tagName === "HEAD" && child.tagName === "SCRIPT" && child.src) {
      var result;
      try {
        result = tabris._client.loadAndExecute(child.src, "", "");
      } catch (ex) {
        console.error("Error loading " + child.src + ":", ex);
        console.log(ex.stack);
        if (typeof child.onerror === "function") {
          child.onerror.call(window, ex);
        }
        return;
      }
      if (result.loadError) {
        if (typeof child.onerror === "function") {
          child.onerror.call(window, new Error("Could not load " + child.src));
        }
      } else if (typeof child.onload === "function") {
        child.onload.call(window);
      }
    }
  }

}());

(function() {

  tabris.registerType("_Timer", {
    _type: "tabris.Timer",
    _events: {Run: true},
    _properties: {delay: "any", repeat: "any"}
  });

  tabris._addWindowTimerMethods = function(target) {

    if (typeof target.setTimeout === "function") {
      return;
    }

    var taskSequence = 0;
    var timers = {};

    function createTimer(fn, delay, repeat, args) {
      var taskId = taskSequence++;
      // If tabris is not ready, create the timer on load.
      // However, clearTimeout won't work until after load.
      tabris.load(function() {
        var timer = tabris.create("_Timer", {
          delay: delay,
          repeat: repeat
        }).on("Run", function() {
          fn.apply(window, args);
          if (!repeat) {
            timer.dispose();
            delete timers[taskId];
          }
        });
        timer._nativeCall("start");
        timers[taskId] = timer;
      });
      return taskId;
    }

    target.setTimeout = function(fn, delay) {
      if (arguments.length < 1) {
        throw new TypeError("Not enough arguments to setTimeout");
      }
      if (typeof fn !== "function") {
        throw new TypeError("Illegal argument to setTimeout: not a function");
      }
      var args = Array.prototype.slice.call(arguments, 2);
      return createTimer(fn, adjustDelay(delay), false, args);
    };

    target.setInterval = function(fn, delay) {
      if (arguments.length < 1) {
        throw new TypeError("Not enough arguments to setInterval");
      }
      if (typeof fn !== "function") {
        throw new TypeError("Illegal argument to setInterval: not a function");
      }
      var args = Array.prototype.slice.call(arguments, 2);
      return createTimer(fn, adjustDelay(delay), true, args);
    };

    target.clearTimeout = target.clearInterval = function(taskId) {
      var timer = timers[taskId];
      if (timer) {
        timer._nativeCall("cancel", {});
        timer.dispose();
        delete timers[taskId];
      }
    };

  };

  if (typeof window !== "undefined") {
    tabris._addWindowTimerMethods(window);
  }

  function adjustDelay(value) {
    return typeof value === "number" && isFinite(value) ? Math.max(0, Math.round(value)) : 0;
  }

})();

tabris.registerType("_App", {
  _cid: "tabris.App",
  _events: {
    pause: {name: "Pause", trigger: triggerWithTarget},
    resume: {name: "Resume", trigger: triggerWithTarget},
    open: {name: "Open", trigger: triggerWithTarget},
    patchInstall: {trigger: notifyPatchCallback},
    backnavigation: {
      trigger: function() {
        var intercepted = false;
        var event = {};
        event.preventDefault = function() {
          intercepted = true;
        };
        this.trigger("backnavigation", this, event);
        // TODO [2.0]: Remove compat support for setting preventDefault to false
        return intercepted || (event.preventDefault === true);
      }
    }
  },
  getResourceLocation: function(path) {
    if (!this._resourceBaseUrl) {
      this._resourceBaseUrl = this._nativeGet("resourceBaseUrl");
    }
    var subPath = path != null ? "/" + normalizePath("" + path) : "";
    return this._resourceBaseUrl + subPath;
  },
  dispose: function() {
    throw new Error("tabris.app can not be disposed");
  },
  reload: function() {
    this._nativeCall("reload", {});
  },
  installPatch: function(url, callback) {
    if (typeof url !== "string") {
      throw new Error("parameter url is not a string");
    }
    if (!this._pendingPatchCallback) {
      this._pendingPatchCallback = callback || true;
      this._listen("patchInstall", true);
      this._nativeCall("installPatch", {url: url});
    } else if (typeof callback === "function") {
      callback(new Error("Another installPatch operation is already pending."));
    }
  }
});

tabris.load(function() {
  tabris.app = new tabris._App();
});

function triggerWithTarget(event, name) {
  this.trigger(name, this, event);
}

function notifyPatchCallback(event) {
  this._listen("patchInstall", false);
  var callback = this._pendingPatchCallback;
  delete this._pendingPatchCallback;
  if (typeof callback === "function") {
    if (event.error) {
      callback(new Error(event.error));
    } else {
      try {
        var patch = event.success ? JSON.parse(event.success) : null;
        callback(null, patch);
      } catch (error) {
        callback(new Error("Failed to parse patch.json"));
      }
    }
  }
}

function normalizePath(path) {
  return path.split(/\/+/).map(function(segment) {
    if (segment === "..") {
      throw new Error("Path must not contain '..'");
    }
    if (segment === ".") {
      return "";
    }
    return segment;
  }).filter(function(string) {
    return !!string;
  }).join("/");
}

tabris.registerType("_Display", {
  _type: "rwt.widgets.Display"
});

tabris.registerWidget("_Shell", {
  _type: "rwt.widgets.Shell",
  _events: {Close: true},
  _properties: {
    style: "any",
    mode: "any",
    active: "any"
  }
});

tabris.registerWidget("_UI", {

  _type: "tabris.UI",

  _events: {ShowPreviousPage: true},

  _supportsChildren: true,

  _create: function() {
    tabris.create("_Display");
    this._shell = tabris.create("_Shell", {
      style: ["NO_TRIM"],
      mode: "maximized",
      active: true,
      visible: true
    }).on("Close", function() {
      this.dispose();
    });
    this._super("_create", arguments);
    this._nativeSet("shell", this._shell.cid);
    this._pages = [];
    this._drawer = null;
    this._on("ShowPreviousPage", function() {
      var page = this.get("activePage");
      if (page) {
        page.close();
      }
    });
    this._on("change:activePage", this._onChangeActivePage, this);
    this._removedPages = [];
    Object.defineProperty(this, "drawer", {
      get: function() { return this._drawer; }.bind(this),
      set: function() {}
    });
    return this;
  },

  _properties: {
    image: "image",
    toolbarVisible: {type: "boolean", default: true},
    displayMode: {
      type: ["choice", ["normal", "fullscreen"]],
      default: "normal"
    },
    statusBarTheme: {
      type: ["choice", ["light", "dark", "default"]],
      default: "default"
    },
    activePage: {
      access: {
        set: function(name, page, options) {
          if (!(page instanceof tabris.Page)) {
            throw new Error("Value for activePage is not a page");
          }
          this._nativeSet("activePage", page._page.cid);
          this._storeProperty(name, page, options);
        }
      }
    },
    win_toolbarTheme: {
      type: ["choice", ["default", "light", "dark"]],
      default: "default"
    }
  },

  _getContainer: function(child) {
    switch (child.type) {
      case "Drawer":
        return child._drawer ? child._drawer : this; // child._drawer used for the legacy drawer
      case "Action":
      case "SearchAction":
        return this;
      default:
        return this._shell;
    }
  },

  _setCurrentDrawer: function(drawer) {
    if (this._drawer && drawer) {
      throw new Error("Can not create multiple instances of Drawer");
    }
    this._drawer = drawer;
  },

  _pageOpened: function(page) {
    this.set("activePage", page);
  },

  _pageClosed: function(page) {
    if (!this._isOnStack(page)) {
      return;
    }
    if (!page._isTopLevel || page === this._getCurrentTopLevelPage()) {
      this._removePagesOnTop(page);
      this._pages.pop();
    } else if (page._isTopLevel) {
      this._removeFromStack(page);
    }
    var newActivePage = this._getCurrentPage();
    if (!newActivePage) {
      throw new Error("Cannot close the last page");
    }
    this.set("activePage", newActivePage);
  },

  _onChangeActivePage: function(ui, page) {
    if (page !== this._getCurrentPage()) {
      if (!this._getCurrentPage() && !page._isTopLevel) {
        throw new Error("Opened page without a top-level page");
      }
      var onStack = this._isOnStack(page);
      if (onStack || page._isTopLevel) {
        this._removePagesOnTop(page);
        if (onStack && page._isTopLevel) {
          this._removeFromStack(page);
        }
      }
      if (page !== this._getCurrentPage()) {
        this._pages.push(page);
      }
    }
    this._updateActivePage(page);
  },

  _removePagesOnTop: function(page) {
    var topPage = this._getCurrentPage();
    while (topPage) {
      if (topPage === page || topPage._isTopLevel) {
        break;
      }
      this._removedPages.push(this._pages.pop());
      topPage = this._getCurrentPage();
    }
  },

  _getCurrentTopLevelPage: function() {
    var index = this._pages.length - 1;
    while (index > 0) {
      var page = this._pages[index--];
      if (page._isTopLevel) {
        return page;
      }
    }
  },

  _getCurrentPage: function() {
    return this._pages[this._pages.length - 1];
  },

  _removeFromStack: function(page) {
    var index = this._pages.indexOf(page);
    if (index !== -1) {
      this._pages.splice(index, 1);
    }
  },

  _isOnStack: function(page) {
    return this._pages.indexOf(page) !== -1;
  },

  _updateActivePage: function(newPage) {
    var oldPage = this._oldActivePage;
    if (newPage !== oldPage) {
      if (oldPage) {
        oldPage.trigger("disappear", oldPage);
      }
      if (newPage) {
        newPage.trigger("appear", newPage);
      } // TODO else (when last page closed), send SET activePage null ? )
    }
    this._closeRemovedPages();
    this._oldActivePage = newPage;
  },

  _closeRemovedPages: function() {
    this._removedPages.forEach(function(page) {
      page.close();
    });
    this._removedPages = [];
  }

});

tabris.load(function() {
  tabris.ui = tabris.create("_UI");
});

(function() {

  tabris.ImageData = function() {
    var array, width, height;
    if (arguments.length < 2) {
      throw new TypeError("Not enough arguments to ImageData");
    }
    if (arguments[0] instanceof Uint8ClampedArray) {
      array = checkArray(arguments[0]);
      width = checkSize(arguments[1]);
      height = arguments.length > 2 ? checkSize(arguments[2]) : array.byteLength / 4 / width;
      if (array.byteLength !== width * height * 4) {
        throw new Error("Wrong array size");
      }
    } else {
      width = checkSize(arguments[0]);
      height = checkSize(arguments[1]);
      array = new Uint8ClampedArray(width * height * 4);
    }
    Object.defineProperty(this, "data", {
      value: array,
      writable: false
    });
    Object.defineProperty(this, "width", {
      value: width,
      writable: false
    });
    Object.defineProperty(this, "height", {
      value: height,
      writable: false
    });
  };

  if (!("ImageData" in window)) {
    window.ImageData = tabris.ImageData;
  }

  function checkArray(array) {
    if (array.byteLength % 4 !== 0) {
      throw new Error("Illegal array length");
    }
    return array;
  }

  function checkSize(input) {
    var size = Math.floor(input);
    if (size <= 0 || !isFinite(size)) {
      throw new Error("Illegal size for ImageData");
    }
    return size;
  }

}());

(function() {

  tabris.registerType("_GC", {
    _type: "rwt.widgets.GC",
    _properties: {parent: "proxy"}
  });

  tabris.CanvasContext = function(gc) {
    this._gc = gc;
    this._state = createState();
    this._savedStates = [];
    this._opCodes = [];
    this._newOpCodes = [];
    this._operations = [];
    this._doubles = [];
    this._booleans = [];
    this._strings = [];
    this._ints = [];
    this.canvas = {
      width: 0,
      height: 0,
      style: {}
    };
    for (var name in properties) {
      defineProperty(this, name);
    }
    tabris._on("flush", this._flush, this);
    gc._on("dispose", function() {
      tabris._off("flush", this._flush, this);
    }, this);
  };

  tabris.CanvasContext.prototype = {

    fillRect: function(x, y, width, height) {
      // TODO: delegate to native function, once it is implemented (#493)
      if (arguments.length < 4) {
        throw new Error("Not enough arguments to CanvasContext.fillRect");
      }
      this._pushOperation("beginPath");
      this._pushOperation("rect");
      this._doubles.push(x, y, width, height);
      this.fill();
    },

    strokeRect: function(x, y, width, height) {
      // TODO: delegate to native function, once it is implemented (#493)
      if (arguments.length < 4) {
        throw new Error("Not enough arguments to CanvasContext.strokeRect");
      }
      this._pushOperation("beginPath");
      this._pushOperation("rect");
      this._doubles.push(x, y, width, height);
      this.stroke();
    },

    measureText: function(text) {
      // TODO: delegate to native function, once it is implemented (#56)
      return {width: text.length * 5 + 5};
    },

    _init: function(width, height) {
      this.canvas.width = width;
      this.canvas.height = height;
      this._gc._nativeCall("init", {
        width: width,
        height: height,
        font: [["sans-serif"], 12, false, false],
        fillStyle: [0, 0, 0, 255],
        strokeStyle: [0, 0, 0, 255]
      });
    },

    _flush: function() {
      if (this._operations.length > 0) {
        this._gc._nativeCall("draw", {packedOperations: [
          this._newOpCodes,
          this._operations,
          this._doubles,
          this._booleans,
          this._strings,
          this._ints
        ]});
        this._newOpCodes = [];
        this._operations = [];
        this._doubles = [];
        this._booleans = [];
        this._strings = [];
        this._ints = [];
      }
    },

    _pushOperation: function(operation) {
      if (this._opCodes.indexOf(operation) < 0) {
        this._newOpCodes.push(operation);
        this._opCodes.push(operation);
      }
      this._operations.push(this._opCodes.indexOf(operation));
    }

  };

  // State operations

  defineMethod("save", 0, function() {
    this._savedStates.push(_.clone(this._state));
  });

  defineMethod("restore", 0, function() {
    this._state = this._savedStates.pop() || this._state;
  });

  // Path operations

  defineMethod("beginPath");

  defineMethod("closePath");

  defineMethod("lineTo", 2, function(x, y) {
    this._doubles.push(x, y);
  });

  defineMethod("moveTo", 2, function(x, y) {
    this._doubles.push(x, y);
  });

  defineMethod("bezierCurveTo", 6, function(cp1x, cp1y, cp2x, cp2y, x, y) {
    this._doubles.push(cp1x, cp1y, cp2x, cp2y, x, y);
  });

  defineMethod("quadraticCurveTo", 4, function(cpx, cpy, x, y) {
    this._doubles.push(cpx, cpy, x, y);
  });

  defineMethod("rect", 4, function(x, y, width, height) {
    this._doubles.push(x, y, width, height);
  });

  defineMethod("arc", 5, function(x, y, radius, startAngle, endAngle, anticlockwise) {
    this._doubles.push(x, y, radius, startAngle, endAngle);
    this._booleans.push(!!anticlockwise);
  });

  // Transformations

  defineMethod("scale", 2, function(x, y) {
    this._doubles.push(x, y);
  });

  defineMethod("rotate", 1, function(angle) {
    this._doubles.push(angle);
  });

  defineMethod("translate", 2, function(x, y) {
    this._doubles.push(x, y);
  });

  defineMethod("transform", 6, function(a, b, c, d, e, f) {
    this._doubles.push(a, b, c, d, e, f);
  });

  defineMethod("setTransform", 6, function(a, b, c, d, e, f) {
    this._doubles.push(a, b, c, d, e, f);
  });

  // Drawing operations

  defineMethod("clearRect", 4, function(x, y, width, height) {
    this._doubles.push(x, y, width, height);
  });

  defineMethod("fillText", 3, function(text, x, y /* , maxWidth */) {
    this._strings.push(text);
    this._booleans.push(false, false, false);
    this._doubles.push(x, y);
  });

  defineMethod("strokeText", 3, function(text, x, y /* , maxWidth */) {
    this._strings.push(text);
    this._booleans.push(false, false, false);
    this._doubles.push(x, y);
  });

  // ImageData operations

  tabris.CanvasContext.prototype.getImageData = function(x, y, width, height) {
    if (arguments.length < 4) {
      throw new Error("Not enough arguments to CanvasContext.getImageData");
    }
    this._flush();
    // TODO check validity of args
    var array = this._gc._nativeCall("getImageData", {
      x: x,
      y: y,
      width: width,
      height: height
    });
    return new tabris.ImageData(new Uint8ClampedArray(array), width, height);
  };

  tabris.CanvasContext.prototype.putImageData = function(imageData, x, y) {
    if (arguments.length < 3) {
      throw new Error("Not enough arguments to CanvasContext.putImageData");
    }
    this._flush();
    this._gc._nativeCall("putImageData", {
      data: imageData.data,
      width: imageData.width,
      height: imageData.height,
      x: x,
      y: y
    });
  };

  tabris.CanvasContext.prototype.createImageData = function(width, height) {
    if (arguments[0] instanceof tabris.ImageData) {
      var data = arguments[0];
      width = data.width;
      height = data.height;
    } else if (arguments.length < 2) {
      throw new Error("Not enough arguments to CanvasContext.createImageData");
    }
    return new tabris.ImageData(width, height);
  };

  defineMethod("fill");

  defineMethod("stroke");

  tabris.CanvasContext.getContext = function(canvas, width, height) {
    if (!canvas._gc) {
      canvas._gc = tabris.create("_GC", {parent: canvas});
    }
    if (!canvas._ctx) {
      canvas._ctx = device.platform === "Android" ? new tabris.CanvasContext(canvas._gc)
                                                  : new tabris.LegacyCanvasContext(canvas._gc);
    }
    canvas._ctx._init(width, height);
    return canvas._ctx;
  };

  var properties = {
    lineWidth: {
      init: 1,
      encode: function(value) {
        if (value > 0) {
          return value;
        }
        throw new Error(value);
      },
      decode: passThrough,
      addOperations: function(context, value) {
        context._doubles.push(value);
      }
    },
    lineCap: {
      init: "butt",
      values: toObject(["butt", "round", "square"]),
      encode: checkValue,
      decode: passThrough,
      addOperations: function(context, value) {
        context._strings.push(value);
      }
    },
    lineJoin: {
      init: "miter",
      values: toObject(["bevel", "miter", "round"]),
      encode: checkValue,
      decode: passThrough,
      addOperations: function(context, value) {
        context._strings.push(value);
      }
    },
    fillStyle: {
      init: [0, 0, 0, 255],
      encode: _.colorStringToArray,
      decode: _.colorArrayToString,
      addOperations: function(context, value) {
        context._ints.push(value[0], value[1], value[2], value[3]);
      }
    },
    strokeStyle: {
      init: [0, 0, 0, 255],
      encode: _.colorStringToArray,
      decode: _.colorArrayToString,
      addOperations: function(context, value) {
        context._ints.push(value[0], value[1], value[2], value[3]);
      }
    },
    textAlign: {
      init: "start",
      values: toObject(["start", "end", "left", "right", "center"]),
      encode: checkValue,
      decode: passThrough,
      addOperations: function(context, value) {
        context._strings.push(value);
      }
    },
    textBaseline: {
      init: "alphabetic",
      values: toObject(["top", "hanging", "middle", "alphabetic", "ideographic", "bottom"]),
      encode: checkValue,
      decode: passThrough,
      addOperations: function(context, value) {
        context._strings.push(value);
      }
    }
  };

  function passThrough(value) {
    return value;
  }

  function checkValue(value) {
    if (value in this.values) {
      return value;
    }
    throw new Error(value);
  }

  function toObject(array) {
    var obj = {};
    array.forEach(function(name) {
      obj[name] = true;
    });
    return obj;
  }

  function createState() {
    var state = {};
    for (var name in properties) {
      state[name] = properties[name].init;
    }
    return state;
  }

  function defineMethod(name, reqArgCount, fn) {
    tabris.CanvasContext.prototype[name] = function() {
      if (reqArgCount && arguments.length < reqArgCount) {
        throw new Error("Not enough arguments to CanvasContext." + name);
      }
      this._pushOperation(name);
      if (fn) {
        fn.apply(this, arguments);
      }
    };
  }

  function defineProperty(context, name) {
    var prop = properties[name];
    Object.defineProperty(context, name, {
      get: function() {
        return prop.decode(context._state[name]);
      },
      set: function(value) {
        try {
          context._state[name] = prop.encode(value);
          context._pushOperation(name);
          prop.addOperations(context, context._state[name]);
        } catch (error) {
          console.warn("Unsupported value for " + name + ": " + value);
        }
      }
    });
  }

}());

(function() {

  tabris.LegacyCanvasContext = function(gc) {
    this._gc = gc;
    this._state = createState();
    this._savedStates = [];
    this._operations = [];
    this.canvas = {
      width: 0,
      height: 0,
      style: {}
    };
    for (var name in properties) {
      defineProperty(this, name);
    }
    tabris._on("flush", this._flush, this);
    gc._on("dispose", function() {
      tabris._off("flush", this._flush, this);
    }, this);
  };

  tabris.LegacyCanvasContext.prototype = {

    save: function() {
      this._operations.push(["save"]);
      this._savedStates.push(_.clone(this._state));
    },

    restore: function() {
      this._operations.push(["restore"]);
      this._state = this._savedStates.pop() || this._state;
    },

    // Path operations

    beginPath: function() {
      this._operations.push(["beginPath"]);
    },

    closePath: function() {
      this._operations.push(["closePath"]);
    },

    lineTo: function(x, y) {
      this._operations.push(["lineTo", x, y]);
    },

    moveTo: function(x, y) {
      this._operations.push(["moveTo", x, y]);
    },

    bezierCurveTo: function(cp1x, cp1y, cp2x, cp2y, x, y) {
      this._operations.push(["bezierCurveTo", cp1x, cp1y, cp2x, cp2y, x, y]);
    },

    quadraticCurveTo: function(cpx, cpy, x, y) {
      this._operations.push(["quadraticCurveTo", cpx, cpy, x, y]);
    },

    rect: function(x, y, width, height) {
      this._operations.push(["rect", x, y, width, height]);
    },

    arc: function(x, y, radius, startAngle, endAngle, anticlockwise) {
      this._operations.push(["arc", x, y, radius, startAngle, endAngle, !!anticlockwise]);
    },

    // Transformations

    scale: function(x, y) {
      this._operations.push(["scale", x, y]);
    },

    rotate: function(angle) {
      this._operations.push(["rotate", angle]);
    },

    translate: function(x, y) {
      this._operations.push(["translate", x, y]);
    },

    transform: function(a, b, c, d, e, f) {
      this._operations.push(["transform", a, b, c, d, e, f]);
    },

    setTransform: function(a, b, c, d, e, f) {
      this._operations.push(["setTransform", a, b, c, d, e, f]);
    },

    // Drawing operations

    clearRect: function(x, y, width, height) {
      this._operations.push(["clearRect", x, y, width, height]);
    },

    fillRect: function(x, y, width, height) {
      this._operations.push(["beginPath"], ["rect", x, y, width, height]);
      this.fill();
    },

    strokeRect: function(x, y, width, height) {
      this._operations.push(["beginPath"], ["rect", x, y, width, height]);
      this.stroke();
    },

    fillText: function(text, x, y /*, maxWidth*/) {
      this._operations.push(["fillText", text, false, false, false, x, y]);
    },

    strokeText: function(text, x, y /*, maxWidth*/) {
      this._operations.push(["strokeText", text, false, false, false, x, y]);
    },

    fill: function() {
      this._operations.push(["fill"]);
    },

    stroke: function() {
      this._operations.push(["stroke"]);
    },

    measureText: function(text) {
      // TODO wire to native function
      return {width: text.length * 5 + 5};
    },

    // ImageData operations

    getImageData: function(x, y, width, height) {
      if (arguments.length < 4) {
        throw new Error("Not enough arguments to CanvasContext.getImageData");
      }
      this._flush();
      // TODO check validity of args
      var array = this._gc._nativeCall("getImageData", {
        x: x,
        y: y,
        width: width,
        height: height
      });
      return new tabris.ImageData(new Uint8ClampedArray(array), width, height);
    },

    putImageData: function(imageData, x, y) {
      if (arguments.length < 3) {
        throw new Error("Not enough arguments to CanvasContext.putImageData");
      }
      this._flush();
      this._gc._nativeCall("putImageData", {
        data: imageData.data,
        width: imageData.width,
        height: imageData.height,
        x: x,
        y: y
      });
    },

    createImageData: function(width, height) {
      if (arguments[0] instanceof tabris.ImageData) {
        var data = arguments[0];
        width = data.width;
        height = data.height;
      } else if (arguments.length < 2) {
        throw new Error("Not enough arguments to CanvasContext.createImageData");
      }
      return new tabris.ImageData(width, height);
    },

    _init: function(width, height) {
      this.canvas.width = width;
      this.canvas.height = height;
      this._gc._nativeCall("init", {
        width: width,
        height: height,
        font: [["sans-serif"], 12, false, false],
        fillStyle: [0, 0, 0, 255],
        strokeStyle: [0, 0, 0, 255]
      });
    },

    _flush: function() {
      if (this._operations.length > 0) {
        this._gc._nativeCall("draw", {operations: this._operations});
        this._operations = [];
      }
    }

  };

  var properties = {
    lineWidth: {
      init: 1,
      encode: function(value) {
        if (value > 0) {
          return value;
        }
        throw new Error(value);
      },
      decode: passThrough
    },
    lineCap: {
      init: "butt",
      values: toObject(["butt", "round", "square"]),
      encode: checkValue,
      decode: passThrough
    },
    lineJoin: {
      init: "miter",
      values: toObject(["bevel", "miter", "round"]),
      encode: checkValue,
      decode: passThrough
    },
    fillStyle: {
      init: [0, 0, 0, 255],
      encode: _.colorStringToArray,
      decode: _.colorArrayToString
    },
    strokeStyle: {
      init: [0, 0, 0, 255],
      encode: _.colorStringToArray,
      decode: _.colorArrayToString
    },
    textAlign: {
      init: "start",
      values: toObject(["start", "end", "left", "right", "center"]),
      encode: checkValue,
      decode: passThrough
    },
    textBaseline: {
      init: "alphabetic",
      values: toObject(["top", "hanging", "middle", "alphabetic", "ideographic", "bottom"]),
      encode: checkValue,
      decode: passThrough
    }
  };

  function passThrough(value) {
    return value;
  }

  function checkValue(value) {
    if (value in this.values) {
      return value;
    }
    throw new Error(value);
  }

  function toObject(array) {
    var obj = {};
    array.forEach(function(name) {
      obj[name] = true;
    });
    return obj;
  }

  function createState() {
    var state = {};
    for (var name in properties) {
      state[name] = properties[name].init;
    }
    return state;
  }

  function defineProperty(context, name) {
    var prop = properties[name];
    Object.defineProperty(context, name, {
      get: function() {
        return prop.decode(context._state[name]);
      },
      set: function(value) {
        try {
          context._state[name] = prop.encode(value);
          context._operations.push([name, this._state[name]]);
        } catch (error) {
          console.warn("Unsupported value for " + name + ": " + value);
        }
      }
    });
  }

})();

(function() {

  tabris.registerType("_ClientStore", {
    _cid: "tabris.ClientStore"
  });

  var encode = tabris.PropertyTypes.string.encode;
  var proxy;

  tabris.WebStorage = function() {
    proxy = new tabris._ClientStore();
  };

  tabris.WebStorage.prototype = {
    // Note: key and length methods currently not supported

    setItem: function(key, value) {
      if (arguments.length < 2) {
        throw new TypeError("Not enough arguments to 'setItem'");
      }
      proxy._nativeCall("add", {
        key: encode(key),
        value: encode(value)
      });
    },

    getItem: function(key) {
      if (arguments.length < 1) {
        throw new TypeError("Not enough arguments to 'getItem'");
      }
      var result = proxy._nativeCall("get", {key: encode(key)});
      // Note: iOS can not return null, only undefined:
      return result === undefined ? null : result;
    },

    removeItem: function(key) {
      if (arguments.length < 1) {
        throw new TypeError("Not enough arguments to 'removeItem'");
      }
      proxy._nativeCall("remove", {keys: [encode(key)]});
    },

    clear: function() {
      proxy._nativeCall("clear");
    }

  };

  tabris.StorageEvent = function(type) {
    this.type = type;
  };

  tabris.StorageEvent.prototype = _.extendPrototype(tabris.DOMEvent, {
    bubbles: false,
    cancelable: false,
    key: "",
    oldValue: null,
    newValue: null,
    url: "",
    storageArea: null
  });

  if (!window.Storage) {
    window.Storage = tabris.WebStorage;
    window.localStorage = new tabris.WebStorage();
  }

}());

// Created based on the W3C XMLHttpRequest specifications: http://www.w3.org/TR/XMLHttpRequest/
// References to sections listed on the same line as the the function definition.
// Append the section tag to the URL above to get the link to the corresponding section.
// Steps are referenced to with a number inside parentheses, e.g. (2)

(function() {

  tabris.registerType("_HttpRequest", {
    _type: "tabris.HttpRequest",
    _events: {StateChange: true, DownloadProgress: true, UploadProgress: true}
  });

  var eventTypes = [
    "loadstart", "readystatechange", "load", "loadend", "progress", "timeout", "abort", "error"
  ];
  var uploadEventTypes = ["progress", "loadstart", "load", "loadend", "timeout", "abort", "error"];

  // -----------------------------------------------------------------
  // Constructor

  tabris.XMLHttpRequest = function() {
    var scope = createScopeObject(this);
    definePropertyUpload(this, scope);
    definePropertyReadyState(this, scope);
    definePropertyTimeout(this, scope);
    definePropertyResponse(this, scope);
    definePropertyResponseText(this, scope);
    definePropertyResponseType(this, scope);
    definePropertyStatus(this, scope);
    definePropertyStatusText(this, scope);
    definePropertyWithCredentials(this, scope);
    defineEventHandlers(this, scope);
    initializeEventHandlers(scope);
    this.open = createOpenMethod(this, scope);
    this.send = createSendMethod(this, scope);
    this.abort = createAbortMethod(this, scope);
    this.setRequestHeader = createSetRequestHeaderMethod(this, scope);
    this.getResponseHeader = createGetResponseHeaderMethod(this, scope);
    this.getAllResponseHeaders = createGetAllResponseHeadersMethod(this, scope);
    tabris._addDOMEventTargetMethods(this);
    tabris._addDOMEventTargetMethods(scope.uploadEventTarget);
  };

  tabris.XMLHttpRequest.prototype = {
    UNSENT: 0,
    OPENED: 1,
    HEADERS_RECEIVED: 2,
    LOADING: 3,
    DONE: 4
  };

  // -----------------------------------------------------------------
  // Events

  tabris.XMLHttpRequestProgressEvent = function(type) {
    this.type = type;
  };

  tabris.XMLHttpRequestProgressEvent.prototype = _.extendPrototype(tabris.DOMEvent, {
    lengthComputable: false,
    loaded: 0,
    total: 0
  });

  // -----------------------------------------------------------------
  // Properties

  function createScopeObject(xhr) {
    var scope = {};
    scope.proxy = null;
    scope.authorRequestHeaders = {};
    scope.uploadListeners = {};
    scope.uploadEventTarget = {};
    scope.timeout = 0;
    scope.status = 0;
    scope.statusText = "";
    scope.responseHeaders = "";
    scope.readyState = xhr.UNSENT;
    scope.responseText = "";
    scope.withCredentials = false;
    scope.responseType = "";
    scope.sendInvoked = false;
    scope.isSynchronous = false;
    scope.error = false;
    scope.uploadComplete = false;
    return scope;
  }

  function initializeEventHandlers(scope) {
    eventTypes.forEach(function(eventType) {
      scope["on" + eventType] = null;
    });
    uploadEventTypes.forEach(function(eventType) {
      scope.uploadListeners["on" + eventType] = null;
    });
  }

  function definePropertyUpload(xhr, scope) {
    Object.defineProperty(xhr, "upload", {
      get: function() {
        return scope.uploadEventTarget;
      },
      set: function() {}
    });
  }

  function definePropertyReadyState(xhr, scope) {
    Object.defineProperty(xhr, "readyState", {
      get: function() {
        return scope.readyState;
      },
      set: function() {}
    });
  }

  function definePropertyTimeout(xhr, scope) {
    Object.defineProperty(xhr, "timeout", { // #the-timeout-attribute
      get: function() {
        return scope.timeout;
      },
      set: function(value) {
        // (1): superfluous, as we don't support synchronous requests
        if (!isNaN(value)) { // (2)
          scope.timeout = Math.round(value);
        }
      }
    });
  }

  function definePropertyResponseText(xhr, scope) {
    Object.defineProperty(xhr, "responseText", { // #dom-xmlhttprequest-responsetext
      get: function() {
        // Steps merged with #text-response-entity-body, entity body steps marked with '*'
        // Note: HttpRequest's response is already stringified
        if (scope.responseText === null) { // (1*)
          return "";
        }
        if (typeof scope.responseText !== "string") { // (1*)
          throw new Error("IllegalStateError: responseText is not a string");
        }
        if ((scope.readyState !== xhr.LOADING && scope.readyState !== xhr.DONE)) { // (2)
          return "";
        }
        if (scope.error) { // (3)
          return "";
        }
        return scope.responseText;
      },
      set: function() {}
    });
  }

  function definePropertyResponse(xhr, scope) {
    Object.defineProperty(xhr, "response", { // #dom-xmlhttprequest-responsetext
      get: function() {
        // Note: only the if-statement implemented, as response types different than 'text' are
        // currently not supported
        if (scope.readyState !== xhr.LOADING && scope.readyState !== xhr.DONE) { // (1)
          return "";
        }
        if (scope.error) { // (2)
          return "";
        }
        return scope.responseText; // (3)
      },
      set: function() {}
    });
  }

  function definePropertyResponseType(xhr, scope) {
    Object.defineProperty(xhr, "responseType", { // #dom-xmlhttprequest-responsetype
      get: function() {
        return scope.responseType;
      },
      set: function(value) {
        if ((scope.readyState === xhr.LOADING || scope.readyState === xhr.DONE)) { // (1)
          throw new Error(
              "InvalidStateError: state must not be 'LOADING' or 'DONE' when setting responseType"
          );
        }
        // (2): superfluous as we don't support synchronous requests
        // (3): we don't handle the concurrency in this layer, so no worker environments
        // mimicking Chromium and Firefox behaviour when setting a not allowed responseType:
        if (["arraybuffer", "blob", "document", "json", "text"].indexOf(value) < 0) {
          return;
        }
        // currently only the 'text' response type is supported
        if (["arraybuffer", "blob", "document", "json"].indexOf(value) > -1) {
          throw new Error("Only the 'text' response type is supported.");
        }
        scope.responseType = value;
      }
    });
  }

  function defineEventHandlers(xhr, scope) {
    eventTypes.forEach(function(eventType) {
      defineEventHandler(eventType, xhr, scope);
    });
    uploadEventTypes.forEach(function(eventType) {
      defineEventHandler(eventType, scope.uploadEventTarget, scope.uploadListeners);
    });
  }

  function defineEventHandler(eventType, target, listeners) {
    var handler = "on" + eventType;
    Object.defineProperty(target, handler, {
      get: function() {
        return listeners[handler];
      },
      set: function(value) {
        // mimicks the behavior of Firefox and Chromium
        if (typeof value === "function") {
          target.removeEventListener(eventType, target[handler]);
          listeners[handler] = value;
          target.addEventListener(eventType, target[handler]);
        }
      }
    });
  }

  function definePropertyStatus(xhr, scope) {
    Object.defineProperty(xhr, "status", { // #the-status-attribute
      get: function() {
        if ([xhr.OPENED, xhr.UNSENT].indexOf(scope.readyState) > -1) { // (1)
          return 0;
        }
        if (scope.error) { // (2)
          return 0;
        }
        return scope.status; // (3)
      },
      set: function() {}
    });
  }

  function definePropertyStatusText(xhr, scope) {
    Object.defineProperty(xhr, "statusText", {
      get: function() { // #the-statustext-attribute
        if ([xhr.OPENED, xhr.UNSENT].indexOf(scope.readyState) > -1) { // (1)
          return "";
        }
        if (scope.error) { // (2)
          return "";
        }
        return scope.statusText; // (3)
      },
      set: function() {}
    });
  }

  function definePropertyWithCredentials(xhr, scope) {
    Object.defineProperty(xhr, "withCredentials", { // #the-withcredentials-attribute
      set: function(value) {
        if (scope.readyState !== xhr.UNSENT && scope.readyState !== xhr.OPENED) { // (1)
          throw new Error(
              "InvalidStateError: state must be 'UNSENT' or 'OPENED' when setting withCredentials"
          );
        }
        if (scope.sendInvoked) { // (2)
          throw new Error("InvalidStateError: 'send' invoked, failed to set 'withCredentials'");
        }
        // (3): superfluous as we don't support synchronous requests
        // mimicking Chromium and Firefox behaviour when setting a non-boolean value:
        if (typeof value === "boolean") {
          scope.withCredentials = value; // (4)
        }
      },
      get: function() {
        return scope.withCredentials;
      }
    });
  }

  // -----------------------------------------------------------------
  // Methods

  function createOpenMethod(xhr, scope) {
    return function(method, url, async, username, password) { // #dom-xmlhttprequest-open
      var parsedUrl = {};
      // (2), (3), (4): we don't implement the 'settings' object
      validateRequiredOpenArgs(method, url);
      parsedUrl.source = url; // (8), (9): experimental non-standard parsing implementation:
      // regex taken from http://stackoverflow.com/a/8206299:
      var urlWithoutProtocol = url.replace(/.*?:\/\//g, "");
      // regex taken from http://stackoverflow.com/a/19709846:
      parsedUrl.isRelative = !new RegExp("^(?:[a-z]+:)?//", "i").test(url);
      parsedUrl.userdata = urlWithoutProtocol.substring(0, urlWithoutProtocol.indexOf("@"));
      if (typeof async === "undefined") { // (10)
        async = true;
        username = null;
        password = null;
      }
      if (!async) {
        throw new Error("Only asynchronous request supported.");
      }
      if (parsedUrl.isRelative) { // (11)
        if (username && password) {
          parsedUrl.userdata = username + ":" + password;
        }
      }
      // (12): superfluous as we don't support synchronous requests
      // TODO: (13) - should we call 'abort' to the proxy? We'd need to move the creation of the proxy
      // to the open() function
      scope.requestMethod = method; // (14)
      scope.requestUrl = parsedUrl;
      scope.isSynchronous = !async;
      scope.authorRequestHeaders = {};
      scope.sendInvoked = false;
      scope.responseText = null;
      if (scope.readyState !== xhr.OPENED) { // (15)
        scope.readyState = xhr.OPENED;
        dispatchXHREvent("readystatechange", xhr);
      }
    };
  }

  function createSendMethod(xhr, scope) {
    return function(data) { // #the-send()-method
      scope.proxy = tabris.create("_HttpRequest");
      scope.proxy.on("StateChange", function(e) {
        stateChangeHandler(e, xhr, scope);
      });
      scope.proxy.on("DownloadProgress", function(e) {
        dispatchProgressEvent("progress", xhr, e.lengthComputable, e.loaded, e.total);
      });
      scope.proxy.on("UploadProgress", function(e) {
        dispatchProgressEvent("progress", xhr.upload, e.lengthComputable, e.loaded, e.total);
      });
      if (scope.readyState !== xhr.OPENED) { // (1)
        throw new Error(
            "InvalidStateError: Object's state must be 'OPENED', failed to execute 'send'"
        );
      }
      if (scope.sendInvoked) { // (2)
        throw new Error("InvalidStateError: 'send' invoked, failed to execute 'send'");
      }
      if (["GET", "HEAD"].indexOf(scope.requestMethod) > -1) { // (3)
        data = null;
      }
      scope.requestBody = data; // (4)
      // TODO: support encoding and mimetype for string response types
      // (5): no storage mutex
      scope.error = scope.uploadComplete = false; // (6), see (8)
      if (!data) { // (7)
        scope.uploadComplete = true;
      }
      // (8): uploadEvents is relevant for the "force preflight flag", but this logic is handled by
      // the client
      // Basic access authentication
      if (scope.withCredentials) {
        // TODO: encode userdata in base64, will not function if not encoded
        if (scope.requestUrl.userdata) {
          xhr.setRequestHeader("Authorization", "Basic " + scope.requestUrl.userdata);
        }
      }
      scope.sendInvoked = true; // (9.1)
      dispatchProgressEvent("loadstart", xhr); // (9.2)
      if (!scope.uploadComplete) {
        dispatchProgressEvent("loadstart", xhr.upload); // (9.3)
      }
      // (10): only handling the same origin case
      scope.proxy._nativeCall("send", { // request URL fetch
        url: scope.requestUrl.source,
        method: scope.requestMethod,
        timeout: xhr.timeout,
        headers: scope.authorRequestHeaders,
        data: scope.requestBody
      });
    };
  }

  function createAbortMethod(xhr, scope) {
    return function() { // #the-abort()-method
      if (scope.proxy) {
        scope.proxy._nativeCall("abort"); // (1)
      }
      if (!([xhr.UNSENT, xhr.OPENED].indexOf(scope.readyState) > -1 && !scope.sendInvoked ||
          scope.readyState === xhr.DONE)) { // send() interrupted
        // (2.1), (2.2): setting readyState DONE with sendInvoked true or false seems to be an
        // internal state which doesn't affect the behavior and thus cannot be tested
        dispatchXHREvent("readystatechange", xhr); // (2.3)
        if (!scope.uploadComplete) {
          scope.uploadComplete = true; // (2.4.1)
          dispatchAbortProgressEvents(xhr.upload); // (2.4.2), (2.4.3), (2.4.4)
        }
        dispatchAbortProgressEvents(xhr); // (2.5), (2.6), (2.7)
      }
      scope.readyState = xhr.UNSENT; // (3)
    };
  }

  function createSetRequestHeaderMethod(xhr, scope) {
    return function(header, value) { // #dom-xmlhttprequest-setrequestheader
      if (scope.readyState !== xhr.OPENED) { // (1)
        throw new Error("InvalidStateError: " +
                "Object's state must be 'OPENED', failed to execute 'setRequestHeader'");
      }
      if (scope.sendInvoked) { // (2)
        throw new Error("InvalidStateError: " +
                "cannot set request header if 'send()' invoked and request not completed");
      }
      if (!validHttpToken(header)) { // (3)
        throw new TypeError("Invalid HTTP header name, failed to execute 'open'");
      }
      if (!isValidHttpHeaderValue(value)) { // (4)
        throw new TypeError("Invalid HTTP header value, failed to execute 'open'");
      }
      if (isForbiddenHeader(header)) { // (5)
        throw new Error("Cannot set forbidden header '" + header + "'");
      }
      if (header in scope.authorRequestHeaders) { // (6):
        scope.authorRequestHeaders[header] = scope.authorRequestHeaders[header] + ", " + value; // (7)
      } else {
        scope.authorRequestHeaders[header] = value; // (8)
      }
    };
  }

  function createGetResponseHeaderMethod(xhr, scope) {
    return function(header) { // #the-getresponseheader()-method
      if ([xhr.UNSENT, xhr.OPENED].indexOf(xhr.readyState) > -1) { // (1)
        return null;
      }
      if (scope.error) { // (2)
        return null;
      }
      var forbiddenHeaders = ["set-cookie", "set-cookie2", "status"]; // (3)
      if (forbiddenHeaders.indexOf(header.toLowerCase()) > -1) {
        return null;
      }
      for (var key in scope.responseHeaders) { // (4), (5)
        if (key.toLowerCase() === header.toLowerCase()) {
          return scope.responseHeaders[key];
        }
      }
      return null; // (6)
    };
  }

  function createGetAllResponseHeadersMethod(xhr, scope) {
    return function() { // #the-getallresponseheaders()-method
      if ([xhr.UNSENT, xhr.OPENED].indexOf(xhr.readyState) > -1) { // (1)
        return "";
      }
      if (scope.error) { // (2)
        return "";
      }
      return stringifyResponseHeaders(scope.responseHeaders); // (3)
    };
  }

  function stringifyResponseHeaders(headers) {
    var string = [];
    var forbiddenHeaders = ["set-cookie", "set-cookie2", "status"];
    for (var key in headers) {
      if (forbiddenHeaders.indexOf(key.toLowerCase()) < 0) {
        string.push(key + ": " + headers[key]);
      }
    }
    return string.join("\n");
  }

  // -----------------------------------------------------------------
  // Event handler

  function stateChangeHandler(e, xhr, scope) { // #infrastructure-for-the-send()-method
    // Note: we supply lengthComputable, loaded and total only with the "progress" event types
    switch (e.state) {
      case "headers":
        scope.readyState = xhr.HEADERS_RECEIVED;
        scope.status = e.code;
        scope.statusText = e.message;
        scope.responseHeaders = e.headers;
        dispatchXHREvent("readystatechange", xhr);
        scope.uploadComplete = true; // #make-upload-progress-notifications
        dispatchFinishedProgressEvents(xhr.upload);
        break;
      case "loading":
        scope.readyState = xhr.LOADING;
        dispatchXHREvent("readystatechange", xhr);
        break;
      case "finished":
        // TODO create response based on responseType
        scope.responseText = e.response;
        scope.readyState = xhr.DONE;
        dispatchXHREvent("readystatechange", xhr);
        dispatchFinishedProgressEvents(xhr);
        dispatchFinishedProgressEvents(xhr.upload);
        scope.proxy.dispose();
        scope.proxy = null;
        break;
      case "error":
        handleRequestError("error", xhr, scope);
        break;
      case "timeout":
        handleRequestError("timeout", xhr, scope);
        break;
      case "abort":
        handleRequestError("abort", xhr, scope);
        break;
    }
  }

  function handleRequestError(event, xhr, scope) { // #request-error
    scope.error = true; // (1*) (#terminate-the-request)
    scope.readyState = xhr.DONE; // (1)
    // (2): superfluous as we don't support synchronous requests
    dispatchXHREvent("readystatechange", xhr); // (3)
    dispatchErrorProgressEvents(event, xhr);
    if (!scope.uploadComplete) {
      scope.uploadComplete = true;
      dispatchErrorProgressEvents(event, xhr.upload);
    }
    scope.proxy.dispose();
    scope.proxy = null;
  }

  // -----------------------------------------------------------------
  // Validators

  function validateRequiredOpenArgs(method, url) {
    if (!method) {
      throw new TypeError("Method argument should be specified to execute 'open'");
    }
    if (!url) {
      throw new TypeError("URL argument should be specified to execute 'open'");
    }
    validateMethod(method);
    validateUrl(url);
  }

  function validateMethod(method) {
    if (!validHttpToken(method)) {
      throw new TypeError("Invalid HTTP method, failed to execute 'open'");
    }
    // (6):
    var tokens = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT", "TRACE", "TRACK"];
    var uppercaseMethod = method.toUpperCase();
    if (tokens.indexOf(uppercaseMethod) >= 0) {
      method = uppercaseMethod;
    }
    var forbiddenTokens = ["CONNECT", "TRACE", "TRACK"]; // (7)
    if (forbiddenTokens.indexOf(method) >= 0) {
      throw new Error(
              "SecurityError: '" + method + "' HTTP method is not secure, failed to execute 'open'"
      );
    }
  }

  function validHttpToken(httpToken) {
    // RFC-compliant validation for HTTP tokens ported from Chromium:
    // https://chromium.googlesource.com/chromium/blink.git/+/master/Source/platform/network/HTTPParsers.cpp
    var forbiddenCharacters = ["(", ")", "<", ">", "@", ",", ";", ":", "\\", "\"", "\/", "[", "]",
        "?", "=", "{", "}"];
    return !(/[^\x21-\x7E]/.test(httpToken) || forbiddenCharacters.indexOf(httpToken) >= 0);
  }

  function isValidHttpHeaderValue(value) {
    // non-RFC compliant validation for HTTP header values ported from Chromium:
    // https://chromium.googlesource.com/chromium/blink.git/+/master/Source/platform/network/HTTPParsers.cpp
    // Regex for Latin-1 characters based on: http://www.ic.unicamp.br/~stolfi/EXPORT/www/ISO-8859-1-Encoding.html
    return /^[\x09\x0A\x0D\x20-\x7E\xA0-\xFF]*$/.test(value) && value.indexOf("\n") < 0 && value.indexOf("\r") < 0;
  }

  function isForbiddenHeader(header) {
    return forbiddenHeaders.indexOf(header.toLowerCase()) > -1;
  }

  var supportedSchemes = ["http", "https", "file"];

  function validateUrl(url) {
    // TODO: rewrite (8),(9)
    var scheme = extractScheme(url);
    if (scheme && (supportedSchemes.indexOf(scheme) === -1)) {
      throw new SyntaxError("Unsupported URL scheme, failed to execute 'open'");
    }
  }

  function extractScheme(url) {
    var match = /^(\S+?):/.exec(url);
    return match ? match[1] : null;
  }

  var forbiddenHeaders = [
    "accept-charset",
    "accept-encoding",
    "access-control-request-headers",
    "access-control-request-method",
    "connection",
    "content-length",
    "cookie",
    "date",
    "dnt",
    "expect",
    "host",
    "keep-alive",
    "origin",
    "referer",
    "te",
    "trailer",
    "transfer-encoding",
    "upgrade",
    "user-agent",
    "via"
  ];

  // -----------------------------------------------------------------
  // Event dispatcher

  function dispatchProgressEvent(type, target, lengthComputable, loaded, total) {
    target.dispatchEvent(initXhrProgressEvent(type, target, lengthComputable, loaded, total));
  }

  function dispatchAbortProgressEvents(context) {
    dispatchProgressEvent("progress", context);
    dispatchProgressEvent("abort", context);
    dispatchProgressEvent("loadend", context);
  }

  function dispatchErrorProgressEvents(event, context) {
    dispatchProgressEvent("progress", context);
    dispatchProgressEvent(event, context);
    dispatchProgressEvent("loadend", context);
  }

  function dispatchFinishedProgressEvents(context) {
    // Note: progress event is dispatched separately by the DownloadProgress/UploadProgress callbacks
    dispatchProgressEvent("load", context);
    dispatchProgressEvent("loadend", context);
  }

  function initXhrProgressEvent(type, target, lengthComputable, loaded, total) {
    var xhrProgressEvent = new tabris.XMLHttpRequestProgressEvent(type);
    xhrProgressEvent.currentTarget = xhrProgressEvent.target = target;
    if (lengthComputable) {
      xhrProgressEvent.lengthComputable = lengthComputable;
    }
    if (loaded) {
      xhrProgressEvent.loaded = loaded;
    }
    if (total) {
      xhrProgressEvent.total = total;
    }
    return xhrProgressEvent;
  }

  function dispatchXHREvent(type, target) {
    var xhrEvent = initXhrEvent(type, target);
    target.dispatchEvent(xhrEvent);
  }

  function initXhrEvent(type, target) {
    var xhrEvent = new tabris.DOMEvent(type);
    xhrEvent.currentTarget = xhrEvent.target = target;
    return xhrEvent;
  }

  // -----------------------------------------------------------------
  // Export

  if (typeof XMLHttpRequest === "undefined") {
    window.XMLHttpRequest = tabris.XMLHttpRequest;
    window.XMLHttpRequestProgressEvent = tabris.XMLHttpRequestProgressEvent;
  }

})();

tabris.registerWidget("Action", {

  _type: "tabris.Action",

  _properties: {
    image: {type: "image", default: null},
    placementPriority: {
      type: ["choice", ["low", "high", "normal"]],
      access: {
        set: function(name, value, options) {
          this._nativeSet(name, value.toUpperCase());
          this._storeProperty(name, value, options);
        }
      },
      default: "normal"
    },
    title: {type: "string", default: ""},
    win_symbol: {type: "string", default: ""}
  },

  _events: {
    select: {
      name: "Selection",
      listen: function(state) {
        this._nativeListen("Selection", state);
      },
      trigger: function(event) {
        this.trigger("select", this, event);
      }
    }
  },

  _create: function() {
    this._super("_create", arguments);
    tabris.ui.append(this);
    return this;
  }

});

tabris.registerWidget("ActivityIndicator", {
  _type: "rwt.widgets.ProgressBar",
  _initProperties: {style: ["INDETERMINATE"], data: {spinningIndicator: true}}
});

tabris.registerWidget("Button", {
  _type: "rwt.widgets.Button",
  _initProperties: {style: ["PUSH"]},
  _events: {
    select: {
      name: "Selection",
      listen: function(state) {
        this._nativeListen("Selection", state);
      },
      trigger: function(event) {
        this.trigger("select", this, event);
      }
    }
  },
  _properties: {
    alignment: {type: ["choice", ["left", "right", "center"]], default: "center"},
    image: {type: "image", default: null},
    text: {type: "string", default: ""}
  }
});

tabris.registerWidget("Canvas", {
  _type: "rwt.widgets.Canvas",
  _supportsChildren: true,
  getContext: function(type, width, height) {
    if (type === "2d") {
      return tabris.CanvasContext.getContext(this, width, height);
    }
    return null;
  }
});

tabris.registerWidget("CheckBox", {
  _type: "rwt.widgets.Button",
  _initProperties: {style: ["CHECK"]},
  _events: {
    select: {
      name: "Selection",
      alias: "change:selection",
      trigger: function(event) {
        this._triggerChangeEvent("selection", event.selection);
        this.trigger("select", this, event.selection, {});
      }
    }
  },
  _properties: {
    text: {type: "string", default: ""},
    selection: {type: "boolean", nocache: true}
  }
});

(function() {

  tabris.registerWidget("CollectionView", {

    _type: "tabris.CollectionView",

    _supportsChildren: function(child) {
      return child instanceof tabris.Cell;
    },

    _properties: {
      itemHeight: {
        type: "any", // "function|natural",
        default: 0,
        access: {
          set: function(name, value, options) {
            if (typeof value !== "function") {
              // Required for 1.0 compatibility
              this._nativeSet("itemHeight", value);
            }
            this._storeProperty(name, value, options);
          }
        }
      },
      items: {
        type: "array",
        access: {
          set: function(name, value, options) {
            this._setItems(value, options);
          },
          get: function() {
            return this._items;
          }
        }
      },
      initializeCell: {
        type: "function",
        default: null,
        access: {
          set: function(name, value) {
            this._storeProperty(name, value);
          }
        }
      },
      cellType: {
        type: "any", // "string|function",
        default: null,
        access: {
          set: function(name, value, options) {
            this._storeProperty(name, value, options);
          }
        }
      },
      refreshEnabled: {type: "boolean", default: false},
      refreshIndicator: {type: "boolean", default: false},
      refreshMessage: {type: "string", default: ""},
      firstVisibleIndex: {
        type: "number",
        access: {
          set: function(name) {
            console.warn(this.type + ": Cannot set read-only property '" + name + "'.");
          }
        }
      },
      lastVisibleIndex: {
        type: "number",
        access: {
          set: function(name) {
            console.warn(this.type + ": Cannot set read-only property '" + name + "'.");
          }
        }
      },
      columnCount: {
        type: "number",
        default: 1
      }
    },

    _create: function() {
      this._items = [];
      var result = this._super("_create", arguments);
      this._nativeListen("requestinfo", true);
      this._nativeListen("createitem", true);
      this._nativeListen("populateitem", true);
      // TODO call _reload on flush
      this._reload();
      return result;
    },

    set: function() {
      var result = this._super("set", arguments);
      // TODO call _reload on flush, remove override
      this._reload();
      return result;
    },

    _events: {
      refresh: {
        trigger: function(event) {this.trigger("refresh", this, event);}
      },
      requestinfo: {
        trigger: function(event) {
          var item = this._getItem(this._items, event.index);
          var type = resolveProperty(this, "cellType", item);
          var height = resolveProperty(this, "itemHeight", item, type);
          var typeId = encodeCellType(this, type);
          this._nativeCall("describeItem", {index: event.index, type: typeId, height: height});
        }
      },
      createitem: {
        trigger: function(event) {
          var cell = new tabris.Cell();
          cell._parent = this;
          this._addChild(cell);
          this._nativeCall("addItem", {widget: cell.cid});
          var initializeCell = this.get("initializeCell");
          if (typeof initializeCell !== "function") {
            console.warn("initializeCell callback missing");
          } else {
            initializeCell(cell, decodeCellType(this, event.type));
          }
        }
      },
      populateitem: {
        trigger: function(event) {
          var cell = tabris(event.widget);
          var item = this._getItem(this._items, event.index);
          cell.set("itemIndex", event.index);
          if (item !== cell.get("item")) {
            cell.set("item", item);
          } else {
            cell.trigger("change:item", cell, item, {});
          }
        }
      },
      select: {
        name: "selection",
        listen: function(state) {
          this._nativeListen("selection", state);
        },
        trigger: function(event) {
          var item = this._getItem(this._items, event.index);
          this.trigger("select", this, item, {index: event.index});
          this.trigger("selection", {index: event.index, item: item});
        }
      },
      scroll: {
        trigger: function(event) {
          this.trigger("scroll", this, event);
        }
      },
      "change:firstVisibleIndex": {
        listen: function(state) {
          if (state) {
            this._on("scroll", triggerChangeFirstVisibleIndex);
          } else {
            this._off("scroll", triggerChangeFirstVisibleIndex);
          }
        }
      },
      "change:lastVisibleIndex": {
        listen: function(state) {
          if (state) {
            this._on("scroll", triggerChangeLastVisibleIndex);
          } else {
            this._off("scroll", triggerChangeLastVisibleIndex);
          }
        }
      }
    },

    _setItems: function(items, options) {
      this._items = items || [];
      this._triggerChangeEvent("items", this._items, options);
      this._needsReload = true;
    },

    _getItem: function(items, index) {
      return items[index];
    },

    reveal: function(index) {
      index = this._checkIndex(index);
      if (index >= 0 && index < this._items.length) {
        this._nativeCall("reveal", {index: index});
      }
    },

    refresh: function(index) {
      if (arguments.length === 0) {
        this._nativeCall("update", {reload: [0, this._items.length]});
        return;
      }
      index = this._checkIndex(index);
      if (index >= 0 && index < this._items.length) {
        this._nativeCall("update", {reload: [index, 1]});
      }
    },

    insert: function(items, index) {
      if (!Array.isArray(items)) {
        throw new Error("items is not an array");
      }
      if (arguments.length === 1) {
        index = this._items.length;
      } else {
        index = Math.max(0, Math.min(this._items.length, this._checkIndex(index)));
      }
      Array.prototype.splice.apply(this._items, [index, 0].concat(items));
      this._adjustIndicies(index, items.length);
      this._nativeCall("update", {insert: [index, items.length]});
    },

    remove: function(index, count) {
      index = this._checkIndex(index);
      if (arguments.length === 1) {
        count = 1;
      } else if (typeof count === "number" && isFinite(count) && count >= 0) {
        count = Math.min(count, this._items.length - index);
      } else {
        throw new Error("illegal remove count");
      }
      if (index >= 0 && index < this._items.length && count > 0) {
        this._items.splice(index, count);
        this._adjustIndicies(index + count, -count);
        this._nativeCall("update", {remove: [index, count]});
      }
    },

    _reload: function() {
      // We defer the reload call until the end of create/set in order to ensure that
      // we don't receive events before the listeners are attached
      if (this._needsReload) {
        this._nativeCall("reload", {"items": this._items.length});
        delete this._needsReload;
      }
    },

    _checkIndex: function(index) {
      if (typeof index !== "number" || !isFinite(index)) {
        throw new Error("illegal index");
      }
      return index < 0 ? index + this._items.length : index;
    },

    _adjustIndicies: function(offset, diff) {
      var cells = this._children || [];
      for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var itemIndex = cell.get("itemIndex");
        if (itemIndex >= offset) {
          cell.set("itemIndex", itemIndex + diff);
        }
      }
    }

  });

  function resolveProperty(ctx, name) {
    var value = ctx.get(name);
    if (typeof value === "function") {
      return value.apply(null, Array.prototype.slice.call(arguments, 2));
    }
    return value;
  }

  function encodeCellType(ctx, type) {
    var cellTypes = ctx._cellTypes || (ctx._cellTypes = []);
    var index = cellTypes.indexOf(type);
    if (index === -1) {
      index += cellTypes.push(type);
    }
    return index;
  }

  function decodeCellType(ctx, type) {
    var cellTypes = ctx._cellTypes || [];
    return cellTypes[type];
  }

  var triggerChangeFirstVisibleIndex = createDelegate("firstVisibleIndex");
  var triggerChangeLastVisibleIndex = createDelegate("lastVisibleIndex");

  function createDelegate(prop) {
    return function() {
      var actual = this.get(prop);
      if (actual !== this["_prev:" + prop]) {
        this._triggerChangeEvent(prop, actual);
      }
      this["_prev:" + prop] = actual;
    };
  }

  tabris.registerWidget("Cell", {

    _type: "rwt.widgets.Composite",

    _supportsChildren: true,

    dispose: function() {
      console.warn("CollectionView cells are container-managed, they cannot be disposed of");
    }

  });

})();

tabris.registerWidget("Composite", {
  _type: "rwt.widgets.Composite",
  _supportsChildren: true
});

tabris.load(function() {

  if (device.platform === "windows") {

    tabris.registerWidget("Drawer", {

      _type: "tabris.Drawer",

      _supportsChildren: true,

      _create: function() {
        tabris.ui._setCurrentDrawer(this);
        this._super("_create", arguments);
        this._setParent(tabris.ui);
        return this;
      },

      _properties: {
        win_displayMode: {
          type: ["choice", ["overlay", "compactOverlay"]],
          default: "overlay"
        },
        win_buttonBackground: {
          type: "color",
          default: null
        }
      },

      open: function() {
        this._nativeCall("open", {});
        return this;
      },

      close: function() {
        this._nativeCall("close", {});
        return this;
      },

      dispose: function() {
        tabris.ui._setCurrentDrawer(null);
        this._super("dispose", arguments);
      }

    });

  }

});

tabris.load(function() {

  if (device.platform !== "windows") {

    tabris.registerWidget("_Drawer", {
      _type: "tabris.Drawer"
    });

    tabris.registerWidget("Drawer", {

      _type: "rwt.widgets.Composite",

      _supportsChildren: true,

      _create: function(properties) {
        tabris.ui._setCurrentDrawer(this);
        this._drawer = tabris.create("_Drawer", {});
        this._super("_create", [_.extend(properties, {
          layoutData: {left: 0, right: 0, top: 0, bottom: 0}
        })].concat(_.drop(arguments)));
        this._setParent(tabris.ui);
        return this;
      },

      open: function() {
        this._drawer._nativeCall("open", {});
        return this;
      },

      close: function() {
        this._drawer._nativeCall("close", {});
        return this;
      },

      dispose: function() {
        tabris.ui._setCurrentDrawer(null);
        this._drawer.dispose();
        this._super("dispose", arguments);
      }

    });
  }

});

tabris.registerWidget("ImageView", {
  _type: "tabris.ImageView",
  _events: {
    load: {
      trigger: function(event) {
        this.trigger("load", this, event);
      }
    }
  },
  _properties: {
    image: {type: "image", default: null},
    scaleMode: {type: ["choice", ["auto", "fit", "fill", "stretch", "none"]], default: "auto"},
    tintColor: {
      type: "color",
      access: {
        set: function(name, value, options) {
          this._nativeSet(name, value === undefined ? null : value);
          this._storeProperty(name, value, options);
        }
      }
    }
  }
});

(function() {

  tabris.registerWidget("_Page", {
    _type: "tabris.Page",

    _properties: {
      image: {
        type: "image",
        access: {
          set: function(name, image) {
            this._image = image;
            this._nativeSet("image", image);
          },
          get: function() {
            return this._image;
          }
        }
      },
      title: {type: "string", default: ""},
      topLevel: "boolean",
      control: "proxy",
      parent: "proxy",
      style: "any"
    }

  });

  var pageProperty = {
    access: {
      set: function(name, value) {this._page.set(name, value);},
      get: function(name) {return this._page.get(name);}
    }
  };

  var pageProperties = {
    title: pageProperty,
    image: pageProperty,
    style: pageProperty,
    topLevel: pageProperty,
    layoutData: {access: {set: function() {}, get: function() {}}}
  };

  tabris.registerWidget("Page", {

    _type: "rwt.widgets.Composite",

    _supportsChildren: true,

    _properties: pageProperties,

    _create: function(properties) {
      this._super("_create", [_.omit(properties, Object.keys(pageProperties))].concat(_.drop(arguments)));
      this._nativeSet("layoutData", {left: 0, right: 0, top: 0, bottom: 0});
      this._nativeSet("parent", tabris.ui._shell.cid);
      this._page = tabris.create("_Page", _.extend(_.pick(properties, Object.keys(pageProperties)), {
        parent: tabris.ui,
        control: this
      }));
      this._page.widget = this;
      this._parent = tabris.ui;
      tabris.ui._addChild(this);
      this._on("dispose", function() {
        tabris.ui._pageClosed(this);
        this._page.dispose();
      });
      this._isTopLevel = !!properties.topLevel;
      return this;
    },

    open: function() {
      tabris.ui._pageOpened(this);
      return this;
    },

    close: function() {
      this.dispose();
    }

  });

}());

(function() {

  tabris.PageSelector = function(properties) {
    var instance = new tabris.CollectionView(_.extend({
      items: getPages(),
      initializeCell: initializeCell,
      itemHeight: device.platform === "iOS" ? 40 : 48,
      layoutData: {left: 0, top: 0, right: 0, bottom: 0}
    }, properties));
    instance.on("select", function(target, value) {
      if (value instanceof tabris.Page) {
        if (tabris.ui.drawer) {
          tabris.ui.drawer.close();
        }
        value.open();
      }
    });
    tabris.ui.on("addchild", insertPage, instance).on("removechild", removePage, instance);
    instance.on("dispose", function() {
      tabris.ui.off("addchild", insertPage);
      tabris.ui.off("removechild", removePage);
    });
    return instance;
  };

  tabris.PageSelector.prototype.type = "PageSelector";

  function insertPage(ui, child) {
    if (child instanceof tabris.Page && child.get("topLevel")) {
      this.insert([child]);
    }
  }

  function removePage(ui, child) {
    var index = this.get("items").indexOf(child);
    if (index !== -1) {
      this.remove(index);
    }
  }

  function getPages() {
    return tabris.ui.children("Page").toArray().filter(function(page) {
      return page.get("topLevel");
    });
  }

  function initializeCell(cell) {
    new tabris.Composite({
      layoutData: {left: 0, right: 0, bottom: 0, height: 1},
      background: "#bbb"
    }).appendTo(cell);
    var imageView = new tabris.ImageView({
      layoutData: {left: 10, top: 10, bottom: 10}
    }).appendTo(cell);
    var textView = new tabris.TextView({
      layoutData: {left: 72, centerY: 0},
      font: device.platform === "iOS" ? "17px .HelveticaNeueInterface-Regular" : "14px Roboto Medium",
      textColor: device.platform === "iOS" ? "rgb(22, 126, 251)" : "#212121"
    }).appendTo(cell);
    cell.on("change:item", function(widget, page) {
      imageView.set("image", page.get("image"));
      textView.set("text", page.get("title"));
    });
  }

})();

(function() {

  tabris.registerWidget("Picker", {

    _type: "rwt.widgets.Combo",

    _initProperties: {selectionIndex: 0},

    _events: {
      select: {
        name: "Selection",
        alias: "change:selectionIndex",
        trigger: function(event) {
          this._triggerChangeEvent("selectionIndex", event.selectionIndex);
          this.trigger("select", this, this._getItem(event.selectionIndex), {index: event.selectionIndex});
        }
      },
      "change:selection": {
        listen: function(state) {
          if (state) {
            this._on("change:selectionIndex", triggerSelectionChange);
          } else {
            this._off("change:selectionIndex", triggerSelectionChange);
          }
        }
      }
    },

    _properties: {
      items: {
        type: "array",
        default: function() {
          return [];
        },
        access: {
          set: function(name, value, options) {
            this._storeProperty(name, value, options);
            var getText = this.get("itemText");
            this._nativeSet("items", value.map(getText));
          }
        }
      },
      itemText: {
        type: "function",
        default: function() {
          return function(item) {
            return item == null ? "" : item.toString();
          };
        },
        access: {
          set: function(name, value, options) {
            this._storeProperty(name, value, options);
          }
        }
      },
      selectionIndex: {
        type: "natural",
        access: {
          set: function(name, value, options) {
            this._nativeSet(name, value);
            this._triggerChangeEvent(name, value, options);
          }
        }
      },
      selection: {
        access: {
          set: function(name, item, options) {
            var index = this._getItemIndex(item);
            if (index !== -1) {
              this.set("selectionIndex", index, options);
            } else {
              console.warn("Could not set picker selection " + item + ": item not found");
            }
          },
          get: function() {
            return this._getItem(this.get("selectionIndex"));
          }
        }
      }
    },

    _setProperties: function(properties, options) {
      // items property depends on itemText, selection/selectionIndex depend on items
      var deferred = ["items", "selection", "selectionIndex"];
      this._super("_setProperties", [_.omit(properties, deferred)].concat(_.drop(arguments)));
      deferred.forEach(function(name) {
        if (name in properties) {
          this._setProperty(name, properties[name], options);
        }
      }, this);
    },

    _getItem: function(index) {
      return this.get("items")[index];
    },

    _getItemIndex: function(item) {
      return this.get("items").indexOf(item);
    }

  });

  function triggerSelectionChange(widget, index, options) {
    widget._triggerChangeEvent("selection", widget._getItem(index), _.extend({index: index}, options));
  }

}());

tabris.registerWidget("ProgressBar", {
  _type: "rwt.widgets.ProgressBar",
  _properties: {
    minimum: {type: "integer", default: 0},
    maximum: {type: "integer", default: 100},
    selection: {type: "integer", default: 0},
    state: {type: ["choice", ["normal", "paused", "error"]], default: "normal"}
  }
});

tabris.registerWidget("RadioButton", {
  _type: "rwt.widgets.Button",
  _initProperties: {style: ["RADIO"]},
  _events: {
    select: {
      name: "Selection",
      alias: "change:selection",
      trigger: function(event) {
        this._triggerChangeEvent("selection", event.selection);
        this.trigger("select", this, event.selection, {});
      }
    }
  },
  _properties: {
    text: {type: "string", default: ""},
    selection: {type: "boolean", nocache: true}
  }
});

tabris.registerWidget("_ScrollBar", {
  _type: "rwt.widgets.ScrollBar",
  _events: {Selection: true},
  _properties: {
    style: "any"
  }
});

tabris.registerWidget("ScrollView", {

  _type: "rwt.widgets.ScrolledComposite",

  _supportsChildren: true,

  _properties: {
    direction: {
      type: ["choice", ["horizontal", "vertical"]],
      default: "vertical"
    },
    scrollX: {
      type: "number",
      access: {
        set: function(name, value) {
          if (this.get("direction") === "horizontal") {
            this._nativeSet("origin", [value, 0]);
          }
        },
        get: function() {
          return this.get("direction") === "horizontal" ? this._nativeGet("origin")[0] : 0;
        }
      }
    },
    scrollY: {
      type: "number",
      access: {
        set: function(name, value) {
          if (this.get("direction") === "vertical") {
            this._nativeSet("origin", [0, value]);
          }
        },
        get: function() {
          return this.get("direction") === "vertical" ? this._nativeGet("origin")[1] : 0;
        }
      }
    }
  },

  _events: {
    scroll: {
      listen: function(listen) {
        if (listen) {
          this._scrollBar.on("Selection", this._scrollBarListener, this);
        } else {
          this._scrollBar.off("Selection", this._scrollBarListener, this);
        }
      },
      trigger: function(position) {
        this.trigger(this, position, {});
      }
    }
  },

  _create: function(properties) {
    this._super("_create", arguments);
    var style = properties.direction === "horizontal" ? ["H_SCROLL"] : ["V_SCROLL"];
    this._nativeSet("style", style);
    this._scrollBar = tabris.create("_ScrollBar", {
      style: properties.direction === "horizontal" ? ["HORIZONTAL"] : ["VERTICAL"]
    });
    this._scrollBar._nativeSet("parent", this.cid);
    this._composite = new tabris.Composite();
    this._composite._nativeSet("parent", this.cid);
    this._nativeSet("content", this._composite.cid);
    return this;
  },

  _scrollBarListener: function() {
    var origin = this._nativeGet("origin");
    this.trigger("scroll", this, {x: origin[0], y: origin[1]});
  },

  _getContainer: function() {
    return this._composite;
  }

});

tabris.registerWidget("SearchAction", {

  _type: "tabris.SearchAction",

  _properties: {
    image: {type: "image", default: null},
    placementPriority: {
      type: ["choice", ["low", "high", "normal"]],
      access: {
        set: function(name, value, options) {
          this._nativeSet(name, value.toUpperCase());
          this._storeProperty(name, value, options);
        }
      },
      default: "normal"
    },
    title: {type: "string", default: ""},
    proposals: {default: function() {return [];}},
    text: {
      type: "string",
      access: {
        set: function(name, value, options) {
          this._nativeSet("query", value);
          this._triggerChangeEvent(name, value, options);
        },
        get: function() {
          return this._nativeGet("query");
        }
      }
    },
    message: {type: "string", default: ""}
  },

  _events: {
    input: {
      name: "Modify",
      listen: function(state) {
        this._nativeListen("Modify", state);
      },
      trigger: function(event) {
        this.trigger("input", this, event.query, {});
      }
    },
    accept: {
      name: "Search",
      trigger: function(event) {
        this.trigger("accept", this, event.query, {});
      }
    },
    select: {
      name: "Selection",
      trigger: function(event) {
        this.trigger("select", this, event);
      }
    }
  },

  _create: function() {
    this._super("_create", arguments);
    tabris.ui.append(this);
    return this;
  },

  open: function() {
    this._nativeCall("open", {});
    return this;
  }

});

tabris.registerWidget("Slider", {
  _type: "rwt.widgets.Scale",
  _events: {
    select: {
      name: "Selection",
      alias: "change:selection",
      trigger: function(event) {
        this._triggerChangeEvent("selection", event.selection);
        this.trigger("select", this, event.selection, {});
      }
    }
  },
  _properties: {
    minimum: {type: "integer", default: 0},
    maximum: {type: "integer", default: 100},
    selection: {type: "integer", nocache: true}
  }
});

tabris.registerWidget("Switch", {
  _type: "tabris.Switch",
  _events: {
    select: {
      name: "toggle",
      alias: "change:selection",
      trigger: function(event) {
        this._triggerChangeEvent("selection", event.checked);
        this.trigger("select", this, event.checked, {});
      }
    }
  },
  _properties: {
    selection: {
      type: "boolean",
      access: {
        get: function() {
          return this._nativeGet("checked");
        },
        set: function(name, value, options) {
          this._nativeSet("checked", value);
          this._triggerChangeEvent(name, value, options);
        }
      }
    },
    thumbOnColor: {
      type: "color"
    },
    thumbOffColor: {
      type: "color"
    },
    trackOnColor: {
      type: "color"
    },
    trackOffColor: {
      type: "color"
    }
  }

});

tabris.load(function() {

  if (device.platform === "windows") {

    tabris.registerWidget("TabFolder", {

      _type: "tabris.TabFolder",

      _properties: {
        paging: {type: "boolean", default: false},
        selection: {type: "proxy", default: null}
      },

      _supportsChildren: function(child) {
        return child.type === "Tab";
      },

      _events: {
        select: {
          alias: "change:selection",
          trigger: function(event) {
            var tab = tabris(event.selection);
            this._triggerChangeEvent("selection", tab);
            this.trigger("select", this, tab, {});
          }
        }
      }

    });

    tabris.registerWidget("Tab", {

      _type: "tabris.Tab",

      _properties: {
        title: {type: "string", default: ""},
        image: {type: "image", default: null},
        badge: {type: "string", default: ""}
      },

      _supportsChildren: true,

      _setParent: function(parent) {
        if (!(parent instanceof tabris.TabFolder)) {
          throw new Error("Tab must be a child of TabFolder");
        }
        tabris.Widget.prototype._setParent.call(this, parent);
      }

    });

  }

});

tabris.load(function() {

  if (device.platform !== "windows") {

    var itemProps = ["title", "badge", "image", "visible"];

    tabris.registerWidget("_TabItem", {
      _type: "rwt.widgets.TabItem",
      _properties: {
        title: {
          access: {
            set: function(name, value, options) {
              this._nativeSet("text", value);
              this._triggerChangeEvent(name, value, options);
            }
          }
        },
        image: {nocache: true},
        badge: {nocache: true},
        control: "any",
        index: "any"
      }
    });

    tabris.registerWidget("TabFolder", {

      _type: "rwt.widgets.TabFolder",

      _create: function(properties) {
        this._super("_create", arguments);
        if (properties.tabBarLocation === "top") {
          this._nativeSet("style", ["TOP"]);
        } else if (properties.tabBarLocation === "bottom") {
          this._nativeSet("style", ["BOTTOM"]);
        }
        return this;
      },

      _properties: {
        paging: {
          type: "boolean",
          default: false,
          access: {
            set: function(name, value, options) {
              this._nativeSet("data", {paging: value});
              this._storeProperty(name, value, options);
            }
          }
        },
        selection: {
          access: {
            set: function(name, tab, options) {
              if (!(tab instanceof tabris.Tab)) {
                console.warn("Can not set TabFolder selection to " + tab);
                return;
              }
              if (tab._isDisposed) {
                console.warn("Can not set TabFolder selection to disposed Tab");
                return;
              }
              this._nativeSet("selection", tab._tabItem.cid);
              this._triggerChangeEvent("selection", tab, options);
            },
            get: function() {
              var selection = this._nativeGet("selection");
              return selection ? tabris(selection)._tab : null;
            }
          }
        },
        tabBarLocation: {
          type: ["choice", ["top", "bottom", "hidden", "auto"]],
          default: "auto"
        }
      },

      _supportsChildren: function(child) {
        return child.type === "Tab" || child.type === "_TabItem";
      },

      _events: {
        select: {
          name: "Selection",
          alias: "change:selection",
          trigger: function(event) {
            var tab = tabris(event.selection)._tab;
            this._triggerChangeEvent("selection", tab);
            this.trigger("select", this, tab, {});
          }
        }
      },

      _getItems: function() {
        return this._children ? this._children.filter(isItem) : new tabris.ProxyCollection();
      },

      _getSelectableChildren: function() {
        return this._children ? this._children.filter(isTab) : undefined;
      }

    });

    tabris.registerWidget("Tab", {

      _type: "rwt.widgets.Composite",

      _properties: {
        title: {
          type: "string",
          default: "",
          access: {
            set: function(name, value, options) {
              if (this._tabItem) {
                this._tabItem._setProperty("title", value);
              }
              this._storeProperty(name, value, options);
            }
          }
        },
        image: {
          type: "image",
          default: null,
          access: {
            set: function(name, value, options) {
              if (this._tabItem) {
                this._tabItem._setProperty("image", value);
              }
              this._storeProperty(name, value, options);
            }
          }
        },
        badge: {
          type: "string",
          default: "",
          access: {
            set: function(name, value, options) {
              if (this._tabItem) {
                this._tabItem._setProperty("badge", value);
              }
              this._storeProperty(name, value, options);
            }
          }
        },
        visible: {
          type: "boolean",
          default: true,
          access: {
            set: function(name, value, options) {
              if (this._tabItem) {
                this._tabItem._setProperty("visibility", value);
              }
              this._storeProperty(name, value, options);
            }
          }
        }
      },

      _supportsChildren: true,

      _setParent: function(parent) {
        if (!(parent instanceof tabris.TabFolder)) {
          throw new Error("Tab must be a child of TabFolder");
        }
        tabris.Widget.prototype._setParent.call(this, parent);
        this._tabItem = tabris.create("_TabItem", _.extend({
          control: this.cid,
          index: parent._getItems().length
        }, this._getItemProps())).appendTo(parent);
        this._tabItem._tab = this;
        this._on("dispose", this._tabItem.dispose, this._tabItem);
      },

      _getItemProps: function() {
        var result = {};
        for (var i = 0; i < itemProps.length; i++) {
          var prop = itemProps[i];
          if (this._getStoredProperty(prop) !== undefined) {
            result[prop] = this._getStoredProperty(prop);
          }
        }
        return result;
      }

    });

  }

  function isTab(child) {
    return child instanceof tabris.Tab;
  }

  function isItem(child) {
    return !isTab(child);
  }

});

tabris.registerWidget("TextInput", {
  _type: "tabris.TextInput",
  _events: {
    focus: {
      trigger: function() {
        this.trigger("focus", this);
      }
    },
    blur:  {
      trigger: function() {
        this.trigger("blur", this);
      }
    },
    accept: {
      trigger: function(event) {
        this.trigger("accept", this, event.text, {});
      }
    },
    input: {
      name: "modify",
      alias: "change:text",
      trigger: function(event) {
        this._triggerChangeEvent("text", event.text);
        this.trigger("input", this, event.text, {});
      }
    }
  },
  _properties: {
    type: ["choice", ["default", "password", "search", "multiline"]],
    text: {type: "string", nocache: true},
    message: {type: "string", default: ""},
    editable: {type: "boolean", default: true},
    alignment: {type: ["choice", ["left", "center", "right"]], default: "left"},
    autoCorrect: {type: "boolean", default: false},
    autoCapitalize: {type: "boolean", default: false},
    keyboard: {
      type: ["choice", ["ascii", "decimal", "email", "number", "numbersAndPunctuation", "phone", "url", "default"]],
      default: "default"
    }
  }
});

tabris.registerWidget("TextView", {
  _type: "tabris.TextView",
  _properties: {
    alignment: {type: ["choice", ["left", "right", "center"]], default: "left"},
    markupEnabled: {type: "boolean", default: false}, // TODO: readonly
    lineSpacing: {type: "number", default: 1},
    maxLines: {
      type: ["nullable", "natural"],
      default: null,
      access: {
        set: function(name, value, options) {
          this._nativeSet(name, value <= 0 ? null : value);
          this._storeProperty(name, value, options);
        }
      }
    },
    text: {type: "string", default: ""}
  }
});

tabris.registerWidget("ToggleButton", {
  _type: "rwt.widgets.Button",
  _initProperties: {style: ["TOGGLE"]},
  _events: {
    select: {
      name: "Selection",
      alias: "change:selection",
      trigger: function(event) {
        this._triggerChangeEvent("selection", event.selection);
        this.trigger("select", this, event.selection, {});
      }
    }
  },
  _properties: {
    text: {type: "string", default: ""},
    image: {type: "image", default: null},
    selection: {type: "boolean", nocache: true},
    alignment: {type: ["choice", ["left", "right", "center"]], default: "center"}
  }
});

tabris.registerWidget("Video", {
  _type: "tabris.widgets.Video",
  _initProperties: {controls_visible: true, repeat: false},
  _properties: {url: "string"}
});

tabris.registerWidget("WebView", {
  _type: "rwt.widgets.Browser",
  _events: {
    navigate: {
      trigger: function(event, name) {
        var intercepted = false;
        event.preventDefault = function() {
          intercepted = true;
        };
        this.trigger(name, this, event);
        return intercepted;
      }
    },
    load: {
      name: "Progress",
      trigger: function(event) {
        this.trigger("load", this, event);
      }
    }
  },
  _properties: {
    url: {type: "string", nocache: true},
    html: {type: "string", nocache: true},
    headers: {type: "any", default: {}},
    initScript: {type: "string"}
  }
});

}());