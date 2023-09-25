/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/http-parser-js";
exports.ids = ["vendor-chunks/http-parser-js"];
exports.modules = {

/***/ "(ssr)/./node_modules/http-parser-js/http-parser.js":
/*!****************************************************!*\
  !*** ./node_modules/http-parser-js/http-parser.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("/*jshint node:true */\n\nvar assert = __webpack_require__(/*! assert */ \"assert\");\n\nexports.HTTPParser = HTTPParser;\nfunction HTTPParser(type) {\n  assert.ok(type === HTTPParser.REQUEST || type === HTTPParser.RESPONSE || type === undefined);\n  if (type === undefined) {\n    // Node v12+\n  } else {\n    this.initialize(type);\n  }\n  this.maxHeaderSize=HTTPParser.maxHeaderSize\n}\nHTTPParser.prototype.initialize = function (type, async_resource) {\n  assert.ok(type === HTTPParser.REQUEST || type === HTTPParser.RESPONSE);\n  this.type = type;\n  this.state = type + '_LINE';\n  this.info = {\n    headers: [],\n    upgrade: false\n  };\n  this.trailers = [];\n  this.line = '';\n  this.isChunked = false;\n  this.connection = '';\n  this.headerSize = 0; // for preventing too big headers\n  this.body_bytes = null;\n  this.isUserCall = false;\n  this.hadError = false;\n};\n\nHTTPParser.encoding = 'ascii';\nHTTPParser.maxHeaderSize = 80 * 1024; // maxHeaderSize (in bytes) is configurable, but 80kb by default;\nHTTPParser.REQUEST = 'REQUEST';\nHTTPParser.RESPONSE = 'RESPONSE';\n\n// Note: *not* starting with kOnHeaders=0 line the Node parser, because any\n//   newly added constants (kOnTimeout in Node v12.19.0) will overwrite 0!\nvar kOnHeaders = HTTPParser.kOnHeaders = 1;\nvar kOnHeadersComplete = HTTPParser.kOnHeadersComplete = 2;\nvar kOnBody = HTTPParser.kOnBody = 3;\nvar kOnMessageComplete = HTTPParser.kOnMessageComplete = 4;\n\n// Some handler stubs, needed for compatibility\nHTTPParser.prototype[kOnHeaders] =\nHTTPParser.prototype[kOnHeadersComplete] =\nHTTPParser.prototype[kOnBody] =\nHTTPParser.prototype[kOnMessageComplete] = function () {};\n\nvar compatMode0_12 = true;\nObject.defineProperty(HTTPParser, 'kOnExecute', {\n    get: function () {\n      // hack for backward compatibility\n      compatMode0_12 = false;\n      return 99;\n    }\n  });\n\nvar methods = exports.methods = HTTPParser.methods = [\n  'DELETE',\n  'GET',\n  'HEAD',\n  'POST',\n  'PUT',\n  'CONNECT',\n  'OPTIONS',\n  'TRACE',\n  'COPY',\n  'LOCK',\n  'MKCOL',\n  'MOVE',\n  'PROPFIND',\n  'PROPPATCH',\n  'SEARCH',\n  'UNLOCK',\n  'BIND',\n  'REBIND',\n  'UNBIND',\n  'ACL',\n  'REPORT',\n  'MKACTIVITY',\n  'CHECKOUT',\n  'MERGE',\n  'M-SEARCH',\n  'NOTIFY',\n  'SUBSCRIBE',\n  'UNSUBSCRIBE',\n  'PATCH',\n  'PURGE',\n  'MKCALENDAR',\n  'LINK',\n  'UNLINK',\n  'SOURCE',\n];\nvar method_connect = methods.indexOf('CONNECT');\nHTTPParser.prototype.reinitialize = HTTPParser;\nHTTPParser.prototype.close =\nHTTPParser.prototype.pause =\nHTTPParser.prototype.resume =\nHTTPParser.prototype.free = function () {};\nHTTPParser.prototype._compatMode0_11 = false;\nHTTPParser.prototype.getAsyncId = function() { return 0; };\n\nvar headerState = {\n  REQUEST_LINE: true,\n  RESPONSE_LINE: true,\n  HEADER: true\n};\nHTTPParser.prototype.execute = function (chunk, start, length) {\n  if (!(this instanceof HTTPParser)) {\n    throw new TypeError('not a HTTPParser');\n  }\n\n  // backward compat to node < 0.11.4\n  // Note: the start and length params were removed in newer version\n  start = start || 0;\n  length = typeof length === 'number' ? length : chunk.length;\n\n  this.chunk = chunk;\n  this.offset = start;\n  var end = this.end = start + length;\n  try {\n    while (this.offset < end) {\n      if (this[this.state]()) {\n        break;\n      }\n    }\n  } catch (err) {\n    if (this.isUserCall) {\n      throw err;\n    }\n    this.hadError = true;\n    return err;\n  }\n  this.chunk = null;\n  length = this.offset - start;\n  if (headerState[this.state]) {\n    this.headerSize += length;\n    if (this.headerSize > (this.maxHeaderSize||HTTPParser.maxHeaderSize)) {\n      return new Error('max header size exceeded');\n    }\n  }\n  return length;\n};\n\nvar stateFinishAllowed = {\n  REQUEST_LINE: true,\n  RESPONSE_LINE: true,\n  BODY_RAW: true\n};\nHTTPParser.prototype.finish = function () {\n  if (this.hadError) {\n    return;\n  }\n  if (!stateFinishAllowed[this.state]) {\n    return new Error('invalid state for EOF');\n  }\n  if (this.state === 'BODY_RAW') {\n    this.userCall()(this[kOnMessageComplete]());\n  }\n};\n\n// These three methods are used for an internal speed optimization, and it also\n// works if theses are noops. Basically consume() asks us to read the bytes\n// ourselves, but if we don't do it we get them through execute().\nHTTPParser.prototype.consume =\nHTTPParser.prototype.unconsume =\nHTTPParser.prototype.getCurrentBuffer = function () {};\n\n//For correct error handling - see HTTPParser#execute\n//Usage: this.userCall()(userFunction('arg'));\nHTTPParser.prototype.userCall = function () {\n  this.isUserCall = true;\n  var self = this;\n  return function (ret) {\n    self.isUserCall = false;\n    return ret;\n  };\n};\n\nHTTPParser.prototype.nextRequest = function () {\n  this.userCall()(this[kOnMessageComplete]());\n  this.reinitialize(this.type);\n};\n\nHTTPParser.prototype.consumeLine = function () {\n  var end = this.end,\n      chunk = this.chunk;\n  for (var i = this.offset; i < end; i++) {\n    if (chunk[i] === 0x0a) { // \\n\n      var line = this.line + chunk.toString(HTTPParser.encoding, this.offset, i);\n      if (line.charAt(line.length - 1) === '\\r') {\n        line = line.substr(0, line.length - 1);\n      }\n      this.line = '';\n      this.offset = i + 1;\n      return line;\n    }\n  }\n  //line split over multiple chunks\n  this.line += chunk.toString(HTTPParser.encoding, this.offset, this.end);\n  this.offset = this.end;\n};\n\nvar headerExp = /^([^: \\t]+):[ \\t]*((?:.*[^ \\t])|)/;\nvar headerContinueExp = /^[ \\t]+(.*[^ \\t])/;\nHTTPParser.prototype.parseHeader = function (line, headers) {\n  if (line.indexOf('\\r') !== -1) {\n    throw parseErrorCode('HPE_LF_EXPECTED');\n  }\n\n  var match = headerExp.exec(line);\n  var k = match && match[1];\n  if (k) { // skip empty string (malformed header)\n    headers.push(k);\n    headers.push(match[2]);\n  } else {\n    var matchContinue = headerContinueExp.exec(line);\n    if (matchContinue && headers.length) {\n      if (headers[headers.length - 1]) {\n        headers[headers.length - 1] += ' ';\n      }\n      headers[headers.length - 1] += matchContinue[1];\n    }\n  }\n};\n\nvar requestExp = /^([A-Z-]+) ([^ ]+) HTTP\\/(\\d)\\.(\\d)$/;\nHTTPParser.prototype.REQUEST_LINE = function () {\n  var line = this.consumeLine();\n  if (!line) {\n    return;\n  }\n  var match = requestExp.exec(line);\n  if (match === null) {\n    throw parseErrorCode('HPE_INVALID_CONSTANT');\n  }\n  this.info.method = this._compatMode0_11 ? match[1] : methods.indexOf(match[1]);\n  if (this.info.method === -1) {\n    throw new Error('invalid request method');\n  }\n  this.info.url = match[2];\n  this.info.versionMajor = +match[3];\n  this.info.versionMinor = +match[4];\n  this.body_bytes = 0;\n  this.state = 'HEADER';\n};\n\nvar responseExp = /^HTTP\\/(\\d)\\.(\\d) (\\d{3}) ?(.*)$/;\nHTTPParser.prototype.RESPONSE_LINE = function () {\n  var line = this.consumeLine();\n  if (!line) {\n    return;\n  }\n  var match = responseExp.exec(line);\n  if (match === null) {\n    throw parseErrorCode('HPE_INVALID_CONSTANT');\n  }\n  this.info.versionMajor = +match[1];\n  this.info.versionMinor = +match[2];\n  var statusCode = this.info.statusCode = +match[3];\n  this.info.statusMessage = match[4];\n  // Implied zero length.\n  if ((statusCode / 100 | 0) === 1 || statusCode === 204 || statusCode === 304) {\n    this.body_bytes = 0;\n  }\n  this.state = 'HEADER';\n};\n\nHTTPParser.prototype.shouldKeepAlive = function () {\n  if (this.info.versionMajor > 0 && this.info.versionMinor > 0) {\n    if (this.connection.indexOf('close') !== -1) {\n      return false;\n    }\n  } else if (this.connection.indexOf('keep-alive') === -1) {\n    return false;\n  }\n  if (this.body_bytes !== null || this.isChunked) { // || skipBody\n    return true;\n  }\n  return false;\n};\n\nHTTPParser.prototype.HEADER = function () {\n  var line = this.consumeLine();\n  if (line === undefined) {\n    return;\n  }\n  var info = this.info;\n  if (line) {\n    this.parseHeader(line, info.headers);\n  } else {\n    var headers = info.headers;\n    var hasContentLength = false;\n    var currentContentLengthValue;\n    var hasUpgradeHeader = false;\n    for (var i = 0; i < headers.length; i += 2) {\n      switch (headers[i].toLowerCase()) {\n        case 'transfer-encoding':\n          this.isChunked = headers[i + 1].toLowerCase() === 'chunked';\n          break;\n        case 'content-length':\n          currentContentLengthValue = +headers[i + 1];\n          if (hasContentLength) {\n            // Fix duplicate Content-Length header with same values.\n            // Throw error only if values are different.\n            // Known issues:\n            // https://github.com/request/request/issues/2091#issuecomment-328715113\n            // https://github.com/nodejs/node/issues/6517#issuecomment-216263771\n            if (currentContentLengthValue !== this.body_bytes) {\n              throw parseErrorCode('HPE_UNEXPECTED_CONTENT_LENGTH');\n            }\n          } else {\n            hasContentLength = true;\n            this.body_bytes = currentContentLengthValue;\n          }\n          break;\n        case 'connection':\n          this.connection += headers[i + 1].toLowerCase();\n          break;\n        case 'upgrade':\n          hasUpgradeHeader = true;\n          break;\n      }\n    }\n\n    // if both isChunked and hasContentLength, isChunked wins\n    // This is required so the body is parsed using the chunked method, and matches\n    // Chrome's behavior.  We could, maybe, ignore them both (would get chunked\n    // encoding into the body), and/or disable shouldKeepAlive to be more\n    // resilient.\n    if (this.isChunked && hasContentLength) {\n      hasContentLength = false;\n      this.body_bytes = null;\n    }\n\n    // Logic from https://github.com/nodejs/http-parser/blob/921d5585515a153fa00e411cf144280c59b41f90/http_parser.c#L1727-L1737\n    // \"For responses, \"Upgrade: foo\" and \"Connection: upgrade\" are\n    //   mandatory only when it is a 101 Switching Protocols response,\n    //   otherwise it is purely informational, to announce support.\n    if (hasUpgradeHeader && this.connection.indexOf('upgrade') != -1) {\n      info.upgrade = this.type === HTTPParser.REQUEST || info.statusCode === 101;\n    } else {\n      info.upgrade = info.method === method_connect;\n    }\n\n    if (this.isChunked && info.upgrade) {\n      this.isChunked = false;\n    }\n\n    info.shouldKeepAlive = this.shouldKeepAlive();\n    //problem which also exists in original node: we should know skipBody before calling onHeadersComplete\n    var skipBody;\n    if (compatMode0_12) {\n      skipBody = this.userCall()(this[kOnHeadersComplete](info));\n    } else {\n      skipBody = this.userCall()(this[kOnHeadersComplete](info.versionMajor,\n          info.versionMinor, info.headers, info.method, info.url, info.statusCode,\n          info.statusMessage, info.upgrade, info.shouldKeepAlive));\n    }\n    if (skipBody === 2) {\n      this.nextRequest();\n      return true;\n    } else if (this.isChunked && !skipBody) {\n      this.state = 'BODY_CHUNKHEAD';\n    } else if (skipBody || this.body_bytes === 0) {\n      this.nextRequest();\n      // For older versions of node (v6.x and older?), that return skipBody=1 or skipBody=true,\n      //   need this \"return true;\" if it's an upgrade request.\n      return info.upgrade;\n    } else if (this.body_bytes === null) {\n      this.state = 'BODY_RAW';\n    } else {\n      this.state = 'BODY_SIZED';\n    }\n  }\n};\n\nHTTPParser.prototype.BODY_CHUNKHEAD = function () {\n  var line = this.consumeLine();\n  if (line === undefined) {\n    return;\n  }\n  this.body_bytes = parseInt(line, 16);\n  if (!this.body_bytes) {\n    this.state = 'BODY_CHUNKTRAILERS';\n  } else {\n    this.state = 'BODY_CHUNK';\n  }\n};\n\nHTTPParser.prototype.BODY_CHUNK = function () {\n  var length = Math.min(this.end - this.offset, this.body_bytes);\n  this.userCall()(this[kOnBody](this.chunk, this.offset, length));\n  this.offset += length;\n  this.body_bytes -= length;\n  if (!this.body_bytes) {\n    this.state = 'BODY_CHUNKEMPTYLINE';\n  }\n};\n\nHTTPParser.prototype.BODY_CHUNKEMPTYLINE = function () {\n  var line = this.consumeLine();\n  if (line === undefined) {\n    return;\n  }\n  assert.equal(line, '');\n  this.state = 'BODY_CHUNKHEAD';\n};\n\nHTTPParser.prototype.BODY_CHUNKTRAILERS = function () {\n  var line = this.consumeLine();\n  if (line === undefined) {\n    return;\n  }\n  if (line) {\n    this.parseHeader(line, this.trailers);\n  } else {\n    if (this.trailers.length) {\n      this.userCall()(this[kOnHeaders](this.trailers, ''));\n    }\n    this.nextRequest();\n  }\n};\n\nHTTPParser.prototype.BODY_RAW = function () {\n  var length = this.end - this.offset;\n  this.userCall()(this[kOnBody](this.chunk, this.offset, length));\n  this.offset = this.end;\n};\n\nHTTPParser.prototype.BODY_SIZED = function () {\n  var length = Math.min(this.end - this.offset, this.body_bytes);\n  this.userCall()(this[kOnBody](this.chunk, this.offset, length));\n  this.offset += length;\n  this.body_bytes -= length;\n  if (!this.body_bytes) {\n    this.nextRequest();\n  }\n};\n\n// backward compat to node < 0.11.6\n['Headers', 'HeadersComplete', 'Body', 'MessageComplete'].forEach(function (name) {\n  var k = HTTPParser['kOn' + name];\n  Object.defineProperty(HTTPParser.prototype, 'on' + name, {\n    get: function () {\n      return this[k];\n    },\n    set: function (to) {\n      // hack for backward compatibility\n      this._compatMode0_11 = true;\n      method_connect = 'CONNECT';\n      return (this[k] = to);\n    }\n  });\n});\n\nfunction parseErrorCode(code) {\n  var err = new Error('Parse Error');\n  err.code = code;\n  return err;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaHR0cC1wYXJzZXItanMvaHR0cC1wYXJzZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNCQUFROztBQUU3QixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsY0FBYyxlQUFlO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFNBQVM7QUFDckMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLEVBQUU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW5zZHVzdHJ5LXRlY2hub2xvZ2llcy8uL25vZGVfbW9kdWxlcy9odHRwLXBhcnNlci1qcy9odHRwLXBhcnNlci5qcz8xNTgxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qanNoaW50IG5vZGU6dHJ1ZSAqL1xuXG52YXIgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0Jyk7XG5cbmV4cG9ydHMuSFRUUFBhcnNlciA9IEhUVFBQYXJzZXI7XG5mdW5jdGlvbiBIVFRQUGFyc2VyKHR5cGUpIHtcbiAgYXNzZXJ0Lm9rKHR5cGUgPT09IEhUVFBQYXJzZXIuUkVRVUVTVCB8fCB0eXBlID09PSBIVFRQUGFyc2VyLlJFU1BPTlNFIHx8IHR5cGUgPT09IHVuZGVmaW5lZCk7XG4gIGlmICh0eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBOb2RlIHYxMitcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmluaXRpYWxpemUodHlwZSk7XG4gIH1cbiAgdGhpcy5tYXhIZWFkZXJTaXplPUhUVFBQYXJzZXIubWF4SGVhZGVyU2l6ZVxufVxuSFRUUFBhcnNlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICh0eXBlLCBhc3luY19yZXNvdXJjZSkge1xuICBhc3NlcnQub2sodHlwZSA9PT0gSFRUUFBhcnNlci5SRVFVRVNUIHx8IHR5cGUgPT09IEhUVFBQYXJzZXIuUkVTUE9OU0UpO1xuICB0aGlzLnR5cGUgPSB0eXBlO1xuICB0aGlzLnN0YXRlID0gdHlwZSArICdfTElORSc7XG4gIHRoaXMuaW5mbyA9IHtcbiAgICBoZWFkZXJzOiBbXSxcbiAgICB1cGdyYWRlOiBmYWxzZVxuICB9O1xuICB0aGlzLnRyYWlsZXJzID0gW107XG4gIHRoaXMubGluZSA9ICcnO1xuICB0aGlzLmlzQ2h1bmtlZCA9IGZhbHNlO1xuICB0aGlzLmNvbm5lY3Rpb24gPSAnJztcbiAgdGhpcy5oZWFkZXJTaXplID0gMDsgLy8gZm9yIHByZXZlbnRpbmcgdG9vIGJpZyBoZWFkZXJzXG4gIHRoaXMuYm9keV9ieXRlcyA9IG51bGw7XG4gIHRoaXMuaXNVc2VyQ2FsbCA9IGZhbHNlO1xuICB0aGlzLmhhZEVycm9yID0gZmFsc2U7XG59O1xuXG5IVFRQUGFyc2VyLmVuY29kaW5nID0gJ2FzY2lpJztcbkhUVFBQYXJzZXIubWF4SGVhZGVyU2l6ZSA9IDgwICogMTAyNDsgLy8gbWF4SGVhZGVyU2l6ZSAoaW4gYnl0ZXMpIGlzIGNvbmZpZ3VyYWJsZSwgYnV0IDgwa2IgYnkgZGVmYXVsdDtcbkhUVFBQYXJzZXIuUkVRVUVTVCA9ICdSRVFVRVNUJztcbkhUVFBQYXJzZXIuUkVTUE9OU0UgPSAnUkVTUE9OU0UnO1xuXG4vLyBOb3RlOiAqbm90KiBzdGFydGluZyB3aXRoIGtPbkhlYWRlcnM9MCBsaW5lIHRoZSBOb2RlIHBhcnNlciwgYmVjYXVzZSBhbnlcbi8vICAgbmV3bHkgYWRkZWQgY29uc3RhbnRzIChrT25UaW1lb3V0IGluIE5vZGUgdjEyLjE5LjApIHdpbGwgb3ZlcndyaXRlIDAhXG52YXIga09uSGVhZGVycyA9IEhUVFBQYXJzZXIua09uSGVhZGVycyA9IDE7XG52YXIga09uSGVhZGVyc0NvbXBsZXRlID0gSFRUUFBhcnNlci5rT25IZWFkZXJzQ29tcGxldGUgPSAyO1xudmFyIGtPbkJvZHkgPSBIVFRQUGFyc2VyLmtPbkJvZHkgPSAzO1xudmFyIGtPbk1lc3NhZ2VDb21wbGV0ZSA9IEhUVFBQYXJzZXIua09uTWVzc2FnZUNvbXBsZXRlID0gNDtcblxuLy8gU29tZSBoYW5kbGVyIHN0dWJzLCBuZWVkZWQgZm9yIGNvbXBhdGliaWxpdHlcbkhUVFBQYXJzZXIucHJvdG90eXBlW2tPbkhlYWRlcnNdID1cbkhUVFBQYXJzZXIucHJvdG90eXBlW2tPbkhlYWRlcnNDb21wbGV0ZV0gPVxuSFRUUFBhcnNlci5wcm90b3R5cGVba09uQm9keV0gPVxuSFRUUFBhcnNlci5wcm90b3R5cGVba09uTWVzc2FnZUNvbXBsZXRlXSA9IGZ1bmN0aW9uICgpIHt9O1xuXG52YXIgY29tcGF0TW9kZTBfMTIgPSB0cnVlO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUVFBQYXJzZXIsICdrT25FeGVjdXRlJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gaGFjayBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgICAgY29tcGF0TW9kZTBfMTIgPSBmYWxzZTtcbiAgICAgIHJldHVybiA5OTtcbiAgICB9XG4gIH0pO1xuXG52YXIgbWV0aG9kcyA9IGV4cG9ydHMubWV0aG9kcyA9IEhUVFBQYXJzZXIubWV0aG9kcyA9IFtcbiAgJ0RFTEVURScsXG4gICdHRVQnLFxuICAnSEVBRCcsXG4gICdQT1NUJyxcbiAgJ1BVVCcsXG4gICdDT05ORUNUJyxcbiAgJ09QVElPTlMnLFxuICAnVFJBQ0UnLFxuICAnQ09QWScsXG4gICdMT0NLJyxcbiAgJ01LQ09MJyxcbiAgJ01PVkUnLFxuICAnUFJPUEZJTkQnLFxuICAnUFJPUFBBVENIJyxcbiAgJ1NFQVJDSCcsXG4gICdVTkxPQ0snLFxuICAnQklORCcsXG4gICdSRUJJTkQnLFxuICAnVU5CSU5EJyxcbiAgJ0FDTCcsXG4gICdSRVBPUlQnLFxuICAnTUtBQ1RJVklUWScsXG4gICdDSEVDS09VVCcsXG4gICdNRVJHRScsXG4gICdNLVNFQVJDSCcsXG4gICdOT1RJRlknLFxuICAnU1VCU0NSSUJFJyxcbiAgJ1VOU1VCU0NSSUJFJyxcbiAgJ1BBVENIJyxcbiAgJ1BVUkdFJyxcbiAgJ01LQ0FMRU5EQVInLFxuICAnTElOSycsXG4gICdVTkxJTksnLFxuICAnU09VUkNFJyxcbl07XG52YXIgbWV0aG9kX2Nvbm5lY3QgPSBtZXRob2RzLmluZGV4T2YoJ0NPTk5FQ1QnKTtcbkhUVFBQYXJzZXIucHJvdG90eXBlLnJlaW5pdGlhbGl6ZSA9IEhUVFBQYXJzZXI7XG5IVFRQUGFyc2VyLnByb3RvdHlwZS5jbG9zZSA9XG5IVFRQUGFyc2VyLnByb3RvdHlwZS5wYXVzZSA9XG5IVFRQUGFyc2VyLnByb3RvdHlwZS5yZXN1bWUgPVxuSFRUUFBhcnNlci5wcm90b3R5cGUuZnJlZSA9IGZ1bmN0aW9uICgpIHt9O1xuSFRUUFBhcnNlci5wcm90b3R5cGUuX2NvbXBhdE1vZGUwXzExID0gZmFsc2U7XG5IVFRQUGFyc2VyLnByb3RvdHlwZS5nZXRBc3luY0lkID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG52YXIgaGVhZGVyU3RhdGUgPSB7XG4gIFJFUVVFU1RfTElORTogdHJ1ZSxcbiAgUkVTUE9OU0VfTElORTogdHJ1ZSxcbiAgSEVBREVSOiB0cnVlXG59O1xuSFRUUFBhcnNlci5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uIChjaHVuaywgc3RhcnQsIGxlbmd0aCkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgSFRUUFBhcnNlcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdub3QgYSBIVFRQUGFyc2VyJyk7XG4gIH1cblxuICAvLyBiYWNrd2FyZCBjb21wYXQgdG8gbm9kZSA8IDAuMTEuNFxuICAvLyBOb3RlOiB0aGUgc3RhcnQgYW5kIGxlbmd0aCBwYXJhbXMgd2VyZSByZW1vdmVkIGluIG5ld2VyIHZlcnNpb25cbiAgc3RhcnQgPSBzdGFydCB8fCAwO1xuICBsZW5ndGggPSB0eXBlb2YgbGVuZ3RoID09PSAnbnVtYmVyJyA/IGxlbmd0aCA6IGNodW5rLmxlbmd0aDtcblxuICB0aGlzLmNodW5rID0gY2h1bms7XG4gIHRoaXMub2Zmc2V0ID0gc3RhcnQ7XG4gIHZhciBlbmQgPSB0aGlzLmVuZCA9IHN0YXJ0ICsgbGVuZ3RoO1xuICB0cnkge1xuICAgIHdoaWxlICh0aGlzLm9mZnNldCA8IGVuZCkge1xuICAgICAgaWYgKHRoaXNbdGhpcy5zdGF0ZV0oKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmICh0aGlzLmlzVXNlckNhbGwpIHtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gICAgdGhpcy5oYWRFcnJvciA9IHRydWU7XG4gICAgcmV0dXJuIGVycjtcbiAgfVxuICB0aGlzLmNodW5rID0gbnVsbDtcbiAgbGVuZ3RoID0gdGhpcy5vZmZzZXQgLSBzdGFydDtcbiAgaWYgKGhlYWRlclN0YXRlW3RoaXMuc3RhdGVdKSB7XG4gICAgdGhpcy5oZWFkZXJTaXplICs9IGxlbmd0aDtcbiAgICBpZiAodGhpcy5oZWFkZXJTaXplID4gKHRoaXMubWF4SGVhZGVyU2l6ZXx8SFRUUFBhcnNlci5tYXhIZWFkZXJTaXplKSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignbWF4IGhlYWRlciBzaXplIGV4Y2VlZGVkJyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBsZW5ndGg7XG59O1xuXG52YXIgc3RhdGVGaW5pc2hBbGxvd2VkID0ge1xuICBSRVFVRVNUX0xJTkU6IHRydWUsXG4gIFJFU1BPTlNFX0xJTkU6IHRydWUsXG4gIEJPRFlfUkFXOiB0cnVlXG59O1xuSFRUUFBhcnNlci5wcm90b3R5cGUuZmluaXNoID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5oYWRFcnJvcikge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIXN0YXRlRmluaXNoQWxsb3dlZFt0aGlzLnN0YXRlXSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ2ludmFsaWQgc3RhdGUgZm9yIEVPRicpO1xuICB9XG4gIGlmICh0aGlzLnN0YXRlID09PSAnQk9EWV9SQVcnKSB7XG4gICAgdGhpcy51c2VyQ2FsbCgpKHRoaXNba09uTWVzc2FnZUNvbXBsZXRlXSgpKTtcbiAgfVxufTtcblxuLy8gVGhlc2UgdGhyZWUgbWV0aG9kcyBhcmUgdXNlZCBmb3IgYW4gaW50ZXJuYWwgc3BlZWQgb3B0aW1pemF0aW9uLCBhbmQgaXQgYWxzb1xuLy8gd29ya3MgaWYgdGhlc2VzIGFyZSBub29wcy4gQmFzaWNhbGx5IGNvbnN1bWUoKSBhc2tzIHVzIHRvIHJlYWQgdGhlIGJ5dGVzXG4vLyBvdXJzZWx2ZXMsIGJ1dCBpZiB3ZSBkb24ndCBkbyBpdCB3ZSBnZXQgdGhlbSB0aHJvdWdoIGV4ZWN1dGUoKS5cbkhUVFBQYXJzZXIucHJvdG90eXBlLmNvbnN1bWUgPVxuSFRUUFBhcnNlci5wcm90b3R5cGUudW5jb25zdW1lID1cbkhUVFBQYXJzZXIucHJvdG90eXBlLmdldEN1cnJlbnRCdWZmZXIgPSBmdW5jdGlvbiAoKSB7fTtcblxuLy9Gb3IgY29ycmVjdCBlcnJvciBoYW5kbGluZyAtIHNlZSBIVFRQUGFyc2VyI2V4ZWN1dGVcbi8vVXNhZ2U6IHRoaXMudXNlckNhbGwoKSh1c2VyRnVuY3Rpb24oJ2FyZycpKTtcbkhUVFBQYXJzZXIucHJvdG90eXBlLnVzZXJDYWxsID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmlzVXNlckNhbGwgPSB0cnVlO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHJldHVybiBmdW5jdGlvbiAocmV0KSB7XG4gICAgc2VsZi5pc1VzZXJDYWxsID0gZmFsc2U7XG4gICAgcmV0dXJuIHJldDtcbiAgfTtcbn07XG5cbkhUVFBQYXJzZXIucHJvdG90eXBlLm5leHRSZXF1ZXN0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnVzZXJDYWxsKCkodGhpc1trT25NZXNzYWdlQ29tcGxldGVdKCkpO1xuICB0aGlzLnJlaW5pdGlhbGl6ZSh0aGlzLnR5cGUpO1xufTtcblxuSFRUUFBhcnNlci5wcm90b3R5cGUuY29uc3VtZUxpbmUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlbmQgPSB0aGlzLmVuZCxcbiAgICAgIGNodW5rID0gdGhpcy5jaHVuaztcbiAgZm9yICh2YXIgaSA9IHRoaXMub2Zmc2V0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBpZiAoY2h1bmtbaV0gPT09IDB4MGEpIHsgLy8gXFxuXG4gICAgICB2YXIgbGluZSA9IHRoaXMubGluZSArIGNodW5rLnRvU3RyaW5nKEhUVFBQYXJzZXIuZW5jb2RpbmcsIHRoaXMub2Zmc2V0LCBpKTtcbiAgICAgIGlmIChsaW5lLmNoYXJBdChsaW5lLmxlbmd0aCAtIDEpID09PSAnXFxyJykge1xuICAgICAgICBsaW5lID0gbGluZS5zdWJzdHIoMCwgbGluZS5sZW5ndGggLSAxKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubGluZSA9ICcnO1xuICAgICAgdGhpcy5vZmZzZXQgPSBpICsgMTtcbiAgICAgIHJldHVybiBsaW5lO1xuICAgIH1cbiAgfVxuICAvL2xpbmUgc3BsaXQgb3ZlciBtdWx0aXBsZSBjaHVua3NcbiAgdGhpcy5saW5lICs9IGNodW5rLnRvU3RyaW5nKEhUVFBQYXJzZXIuZW5jb2RpbmcsIHRoaXMub2Zmc2V0LCB0aGlzLmVuZCk7XG4gIHRoaXMub2Zmc2V0ID0gdGhpcy5lbmQ7XG59O1xuXG52YXIgaGVhZGVyRXhwID0gL14oW146IFxcdF0rKTpbIFxcdF0qKCg/Oi4qW14gXFx0XSl8KS87XG52YXIgaGVhZGVyQ29udGludWVFeHAgPSAvXlsgXFx0XSsoLipbXiBcXHRdKS87XG5IVFRQUGFyc2VyLnByb3RvdHlwZS5wYXJzZUhlYWRlciA9IGZ1bmN0aW9uIChsaW5lLCBoZWFkZXJzKSB7XG4gIGlmIChsaW5lLmluZGV4T2YoJ1xccicpICE9PSAtMSkge1xuICAgIHRocm93IHBhcnNlRXJyb3JDb2RlKCdIUEVfTEZfRVhQRUNURUQnKTtcbiAgfVxuXG4gIHZhciBtYXRjaCA9IGhlYWRlckV4cC5leGVjKGxpbmUpO1xuICB2YXIgayA9IG1hdGNoICYmIG1hdGNoWzFdO1xuICBpZiAoaykgeyAvLyBza2lwIGVtcHR5IHN0cmluZyAobWFsZm9ybWVkIGhlYWRlcilcbiAgICBoZWFkZXJzLnB1c2goayk7XG4gICAgaGVhZGVycy5wdXNoKG1hdGNoWzJdKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbWF0Y2hDb250aW51ZSA9IGhlYWRlckNvbnRpbnVlRXhwLmV4ZWMobGluZSk7XG4gICAgaWYgKG1hdGNoQ29udGludWUgJiYgaGVhZGVycy5sZW5ndGgpIHtcbiAgICAgIGlmIChoZWFkZXJzW2hlYWRlcnMubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgaGVhZGVyc1toZWFkZXJzLmxlbmd0aCAtIDFdICs9ICcgJztcbiAgICAgIH1cbiAgICAgIGhlYWRlcnNbaGVhZGVycy5sZW5ndGggLSAxXSArPSBtYXRjaENvbnRpbnVlWzFdO1xuICAgIH1cbiAgfVxufTtcblxudmFyIHJlcXVlc3RFeHAgPSAvXihbQS1aLV0rKSAoW14gXSspIEhUVFBcXC8oXFxkKVxcLihcXGQpJC87XG5IVFRQUGFyc2VyLnByb3RvdHlwZS5SRVFVRVNUX0xJTkUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsaW5lID0gdGhpcy5jb25zdW1lTGluZSgpO1xuICBpZiAoIWxpbmUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gcmVxdWVzdEV4cC5leGVjKGxpbmUpO1xuICBpZiAobWF0Y2ggPT09IG51bGwpIHtcbiAgICB0aHJvdyBwYXJzZUVycm9yQ29kZSgnSFBFX0lOVkFMSURfQ09OU1RBTlQnKTtcbiAgfVxuICB0aGlzLmluZm8ubWV0aG9kID0gdGhpcy5fY29tcGF0TW9kZTBfMTEgPyBtYXRjaFsxXSA6IG1ldGhvZHMuaW5kZXhPZihtYXRjaFsxXSk7XG4gIGlmICh0aGlzLmluZm8ubWV0aG9kID09PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCByZXF1ZXN0IG1ldGhvZCcpO1xuICB9XG4gIHRoaXMuaW5mby51cmwgPSBtYXRjaFsyXTtcbiAgdGhpcy5pbmZvLnZlcnNpb25NYWpvciA9ICttYXRjaFszXTtcbiAgdGhpcy5pbmZvLnZlcnNpb25NaW5vciA9ICttYXRjaFs0XTtcbiAgdGhpcy5ib2R5X2J5dGVzID0gMDtcbiAgdGhpcy5zdGF0ZSA9ICdIRUFERVInO1xufTtcblxudmFyIHJlc3BvbnNlRXhwID0gL15IVFRQXFwvKFxcZClcXC4oXFxkKSAoXFxkezN9KSA/KC4qKSQvO1xuSFRUUFBhcnNlci5wcm90b3R5cGUuUkVTUE9OU0VfTElORSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxpbmUgPSB0aGlzLmNvbnN1bWVMaW5lKCk7XG4gIGlmICghbGluZSkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbWF0Y2ggPSByZXNwb25zZUV4cC5leGVjKGxpbmUpO1xuICBpZiAobWF0Y2ggPT09IG51bGwpIHtcbiAgICB0aHJvdyBwYXJzZUVycm9yQ29kZSgnSFBFX0lOVkFMSURfQ09OU1RBTlQnKTtcbiAgfVxuICB0aGlzLmluZm8udmVyc2lvbk1ham9yID0gK21hdGNoWzFdO1xuICB0aGlzLmluZm8udmVyc2lvbk1pbm9yID0gK21hdGNoWzJdO1xuICB2YXIgc3RhdHVzQ29kZSA9IHRoaXMuaW5mby5zdGF0dXNDb2RlID0gK21hdGNoWzNdO1xuICB0aGlzLmluZm8uc3RhdHVzTWVzc2FnZSA9IG1hdGNoWzRdO1xuICAvLyBJbXBsaWVkIHplcm8gbGVuZ3RoLlxuICBpZiAoKHN0YXR1c0NvZGUgLyAxMDAgfCAwKSA9PT0gMSB8fCBzdGF0dXNDb2RlID09PSAyMDQgfHwgc3RhdHVzQ29kZSA9PT0gMzA0KSB7XG4gICAgdGhpcy5ib2R5X2J5dGVzID0gMDtcbiAgfVxuICB0aGlzLnN0YXRlID0gJ0hFQURFUic7XG59O1xuXG5IVFRQUGFyc2VyLnByb3RvdHlwZS5zaG91bGRLZWVwQWxpdmUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmluZm8udmVyc2lvbk1ham9yID4gMCAmJiB0aGlzLmluZm8udmVyc2lvbk1pbm9yID4gMCkge1xuICAgIGlmICh0aGlzLmNvbm5lY3Rpb24uaW5kZXhPZignY2xvc2UnKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodGhpcy5jb25uZWN0aW9uLmluZGV4T2YoJ2tlZXAtYWxpdmUnKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHRoaXMuYm9keV9ieXRlcyAhPT0gbnVsbCB8fCB0aGlzLmlzQ2h1bmtlZCkgeyAvLyB8fCBza2lwQm9keVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbkhUVFBQYXJzZXIucHJvdG90eXBlLkhFQURFUiA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxpbmUgPSB0aGlzLmNvbnN1bWVMaW5lKCk7XG4gIGlmIChsaW5lID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGluZm8gPSB0aGlzLmluZm87XG4gIGlmIChsaW5lKSB7XG4gICAgdGhpcy5wYXJzZUhlYWRlcihsaW5lLCBpbmZvLmhlYWRlcnMpO1xuICB9IGVsc2Uge1xuICAgIHZhciBoZWFkZXJzID0gaW5mby5oZWFkZXJzO1xuICAgIHZhciBoYXNDb250ZW50TGVuZ3RoID0gZmFsc2U7XG4gICAgdmFyIGN1cnJlbnRDb250ZW50TGVuZ3RoVmFsdWU7XG4gICAgdmFyIGhhc1VwZ3JhZGVIZWFkZXIgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhlYWRlcnMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIHN3aXRjaCAoaGVhZGVyc1tpXS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgJ3RyYW5zZmVyLWVuY29kaW5nJzpcbiAgICAgICAgICB0aGlzLmlzQ2h1bmtlZCA9IGhlYWRlcnNbaSArIDFdLnRvTG93ZXJDYXNlKCkgPT09ICdjaHVua2VkJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29udGVudC1sZW5ndGgnOlxuICAgICAgICAgIGN1cnJlbnRDb250ZW50TGVuZ3RoVmFsdWUgPSAraGVhZGVyc1tpICsgMV07XG4gICAgICAgICAgaWYgKGhhc0NvbnRlbnRMZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIEZpeCBkdXBsaWNhdGUgQ29udGVudC1MZW5ndGggaGVhZGVyIHdpdGggc2FtZSB2YWx1ZXMuXG4gICAgICAgICAgICAvLyBUaHJvdyBlcnJvciBvbmx5IGlmIHZhbHVlcyBhcmUgZGlmZmVyZW50LlxuICAgICAgICAgICAgLy8gS25vd24gaXNzdWVzOlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlcXVlc3QvcmVxdWVzdC9pc3N1ZXMvMjA5MSNpc3N1ZWNvbW1lbnQtMzI4NzE1MTEzXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvaXNzdWVzLzY1MTcjaXNzdWVjb21tZW50LTIxNjI2Mzc3MVxuICAgICAgICAgICAgaWYgKGN1cnJlbnRDb250ZW50TGVuZ3RoVmFsdWUgIT09IHRoaXMuYm9keV9ieXRlcykge1xuICAgICAgICAgICAgICB0aHJvdyBwYXJzZUVycm9yQ29kZSgnSFBFX1VORVhQRUNURURfQ09OVEVOVF9MRU5HVEgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGFzQ29udGVudExlbmd0aCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJvZHlfYnl0ZXMgPSBjdXJyZW50Q29udGVudExlbmd0aFZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29ubmVjdGlvbic6XG4gICAgICAgICAgdGhpcy5jb25uZWN0aW9uICs9IGhlYWRlcnNbaSArIDFdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3VwZ3JhZGUnOlxuICAgICAgICAgIGhhc1VwZ3JhZGVIZWFkZXIgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIGJvdGggaXNDaHVua2VkIGFuZCBoYXNDb250ZW50TGVuZ3RoLCBpc0NodW5rZWQgd2luc1xuICAgIC8vIFRoaXMgaXMgcmVxdWlyZWQgc28gdGhlIGJvZHkgaXMgcGFyc2VkIHVzaW5nIHRoZSBjaHVua2VkIG1ldGhvZCwgYW5kIG1hdGNoZXNcbiAgICAvLyBDaHJvbWUncyBiZWhhdmlvci4gIFdlIGNvdWxkLCBtYXliZSwgaWdub3JlIHRoZW0gYm90aCAod291bGQgZ2V0IGNodW5rZWRcbiAgICAvLyBlbmNvZGluZyBpbnRvIHRoZSBib2R5KSwgYW5kL29yIGRpc2FibGUgc2hvdWxkS2VlcEFsaXZlIHRvIGJlIG1vcmVcbiAgICAvLyByZXNpbGllbnQuXG4gICAgaWYgKHRoaXMuaXNDaHVua2VkICYmIGhhc0NvbnRlbnRMZW5ndGgpIHtcbiAgICAgIGhhc0NvbnRlbnRMZW5ndGggPSBmYWxzZTtcbiAgICAgIHRoaXMuYm9keV9ieXRlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gTG9naWMgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL2h0dHAtcGFyc2VyL2Jsb2IvOTIxZDU1ODU1MTVhMTUzZmEwMGU0MTFjZjE0NDI4MGM1OWI0MWY5MC9odHRwX3BhcnNlci5jI0wxNzI3LUwxNzM3XG4gICAgLy8gXCJGb3IgcmVzcG9uc2VzLCBcIlVwZ3JhZGU6IGZvb1wiIGFuZCBcIkNvbm5lY3Rpb246IHVwZ3JhZGVcIiBhcmVcbiAgICAvLyAgIG1hbmRhdG9yeSBvbmx5IHdoZW4gaXQgaXMgYSAxMDEgU3dpdGNoaW5nIFByb3RvY29scyByZXNwb25zZSxcbiAgICAvLyAgIG90aGVyd2lzZSBpdCBpcyBwdXJlbHkgaW5mb3JtYXRpb25hbCwgdG8gYW5ub3VuY2Ugc3VwcG9ydC5cbiAgICBpZiAoaGFzVXBncmFkZUhlYWRlciAmJiB0aGlzLmNvbm5lY3Rpb24uaW5kZXhPZigndXBncmFkZScpICE9IC0xKSB7XG4gICAgICBpbmZvLnVwZ3JhZGUgPSB0aGlzLnR5cGUgPT09IEhUVFBQYXJzZXIuUkVRVUVTVCB8fCBpbmZvLnN0YXR1c0NvZGUgPT09IDEwMTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mby51cGdyYWRlID0gaW5mby5tZXRob2QgPT09IG1ldGhvZF9jb25uZWN0O1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQ2h1bmtlZCAmJiBpbmZvLnVwZ3JhZGUpIHtcbiAgICAgIHRoaXMuaXNDaHVua2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaW5mby5zaG91bGRLZWVwQWxpdmUgPSB0aGlzLnNob3VsZEtlZXBBbGl2ZSgpO1xuICAgIC8vcHJvYmxlbSB3aGljaCBhbHNvIGV4aXN0cyBpbiBvcmlnaW5hbCBub2RlOiB3ZSBzaG91bGQga25vdyBza2lwQm9keSBiZWZvcmUgY2FsbGluZyBvbkhlYWRlcnNDb21wbGV0ZVxuICAgIHZhciBza2lwQm9keTtcbiAgICBpZiAoY29tcGF0TW9kZTBfMTIpIHtcbiAgICAgIHNraXBCb2R5ID0gdGhpcy51c2VyQ2FsbCgpKHRoaXNba09uSGVhZGVyc0NvbXBsZXRlXShpbmZvKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNraXBCb2R5ID0gdGhpcy51c2VyQ2FsbCgpKHRoaXNba09uSGVhZGVyc0NvbXBsZXRlXShpbmZvLnZlcnNpb25NYWpvcixcbiAgICAgICAgICBpbmZvLnZlcnNpb25NaW5vciwgaW5mby5oZWFkZXJzLCBpbmZvLm1ldGhvZCwgaW5mby51cmwsIGluZm8uc3RhdHVzQ29kZSxcbiAgICAgICAgICBpbmZvLnN0YXR1c01lc3NhZ2UsIGluZm8udXBncmFkZSwgaW5mby5zaG91bGRLZWVwQWxpdmUpKTtcbiAgICB9XG4gICAgaWYgKHNraXBCb2R5ID09PSAyKSB7XG4gICAgICB0aGlzLm5leHRSZXF1ZXN0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNDaHVua2VkICYmICFza2lwQm9keSkge1xuICAgICAgdGhpcy5zdGF0ZSA9ICdCT0RZX0NIVU5LSEVBRCc7XG4gICAgfSBlbHNlIGlmIChza2lwQm9keSB8fCB0aGlzLmJvZHlfYnl0ZXMgPT09IDApIHtcbiAgICAgIHRoaXMubmV4dFJlcXVlc3QoKTtcbiAgICAgIC8vIEZvciBvbGRlciB2ZXJzaW9ucyBvZiBub2RlICh2Ni54IGFuZCBvbGRlcj8pLCB0aGF0IHJldHVybiBza2lwQm9keT0xIG9yIHNraXBCb2R5PXRydWUsXG4gICAgICAvLyAgIG5lZWQgdGhpcyBcInJldHVybiB0cnVlO1wiIGlmIGl0J3MgYW4gdXBncmFkZSByZXF1ZXN0LlxuICAgICAgcmV0dXJuIGluZm8udXBncmFkZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm9keV9ieXRlcyA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zdGF0ZSA9ICdCT0RZX1JBVyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAnQk9EWV9TSVpFRCc7XG4gICAgfVxuICB9XG59O1xuXG5IVFRQUGFyc2VyLnByb3RvdHlwZS5CT0RZX0NIVU5LSEVBRCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxpbmUgPSB0aGlzLmNvbnN1bWVMaW5lKCk7XG4gIGlmIChsaW5lID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5ib2R5X2J5dGVzID0gcGFyc2VJbnQobGluZSwgMTYpO1xuICBpZiAoIXRoaXMuYm9keV9ieXRlcykge1xuICAgIHRoaXMuc3RhdGUgPSAnQk9EWV9DSFVOS1RSQUlMRVJTJztcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnN0YXRlID0gJ0JPRFlfQ0hVTksnO1xuICB9XG59O1xuXG5IVFRQUGFyc2VyLnByb3RvdHlwZS5CT0RZX0NIVU5LID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4odGhpcy5lbmQgLSB0aGlzLm9mZnNldCwgdGhpcy5ib2R5X2J5dGVzKTtcbiAgdGhpcy51c2VyQ2FsbCgpKHRoaXNba09uQm9keV0odGhpcy5jaHVuaywgdGhpcy5vZmZzZXQsIGxlbmd0aCkpO1xuICB0aGlzLm9mZnNldCArPSBsZW5ndGg7XG4gIHRoaXMuYm9keV9ieXRlcyAtPSBsZW5ndGg7XG4gIGlmICghdGhpcy5ib2R5X2J5dGVzKSB7XG4gICAgdGhpcy5zdGF0ZSA9ICdCT0RZX0NIVU5LRU1QVFlMSU5FJztcbiAgfVxufTtcblxuSFRUUFBhcnNlci5wcm90b3R5cGUuQk9EWV9DSFVOS0VNUFRZTElORSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxpbmUgPSB0aGlzLmNvbnN1bWVMaW5lKCk7XG4gIGlmIChsaW5lID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgYXNzZXJ0LmVxdWFsKGxpbmUsICcnKTtcbiAgdGhpcy5zdGF0ZSA9ICdCT0RZX0NIVU5LSEVBRCc7XG59O1xuXG5IVFRQUGFyc2VyLnByb3RvdHlwZS5CT0RZX0NIVU5LVFJBSUxFUlMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsaW5lID0gdGhpcy5jb25zdW1lTGluZSgpO1xuICBpZiAobGluZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChsaW5lKSB7XG4gICAgdGhpcy5wYXJzZUhlYWRlcihsaW5lLCB0aGlzLnRyYWlsZXJzKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodGhpcy50cmFpbGVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudXNlckNhbGwoKSh0aGlzW2tPbkhlYWRlcnNdKHRoaXMudHJhaWxlcnMsICcnKSk7XG4gICAgfVxuICAgIHRoaXMubmV4dFJlcXVlc3QoKTtcbiAgfVxufTtcblxuSFRUUFBhcnNlci5wcm90b3R5cGUuQk9EWV9SQVcgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmVuZCAtIHRoaXMub2Zmc2V0O1xuICB0aGlzLnVzZXJDYWxsKCkodGhpc1trT25Cb2R5XSh0aGlzLmNodW5rLCB0aGlzLm9mZnNldCwgbGVuZ3RoKSk7XG4gIHRoaXMub2Zmc2V0ID0gdGhpcy5lbmQ7XG59O1xuXG5IVFRQUGFyc2VyLnByb3RvdHlwZS5CT0RZX1NJWkVEID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4odGhpcy5lbmQgLSB0aGlzLm9mZnNldCwgdGhpcy5ib2R5X2J5dGVzKTtcbiAgdGhpcy51c2VyQ2FsbCgpKHRoaXNba09uQm9keV0odGhpcy5jaHVuaywgdGhpcy5vZmZzZXQsIGxlbmd0aCkpO1xuICB0aGlzLm9mZnNldCArPSBsZW5ndGg7XG4gIHRoaXMuYm9keV9ieXRlcyAtPSBsZW5ndGg7XG4gIGlmICghdGhpcy5ib2R5X2J5dGVzKSB7XG4gICAgdGhpcy5uZXh0UmVxdWVzdCgpO1xuICB9XG59O1xuXG4vLyBiYWNrd2FyZCBjb21wYXQgdG8gbm9kZSA8IDAuMTEuNlxuWydIZWFkZXJzJywgJ0hlYWRlcnNDb21wbGV0ZScsICdCb2R5JywgJ01lc3NhZ2VDb21wbGV0ZSddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyIGsgPSBIVFRQUGFyc2VyWydrT24nICsgbmFtZV07XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVFRQUGFyc2VyLnByb3RvdHlwZSwgJ29uJyArIG5hbWUsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzW2tdO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiAodG8pIHtcbiAgICAgIC8vIGhhY2sgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICAgIHRoaXMuX2NvbXBhdE1vZGUwXzExID0gdHJ1ZTtcbiAgICAgIG1ldGhvZF9jb25uZWN0ID0gJ0NPTk5FQ1QnO1xuICAgICAgcmV0dXJuICh0aGlzW2tdID0gdG8pO1xuICAgIH1cbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gcGFyc2VFcnJvckNvZGUoY29kZSkge1xuICB2YXIgZXJyID0gbmV3IEVycm9yKCdQYXJzZSBFcnJvcicpO1xuICBlcnIuY29kZSA9IGNvZGU7XG4gIHJldHVybiBlcnI7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/http-parser-js/http-parser.js\n");

/***/ })

};
;