var sl = Object.create;
var Yn = Object.defineProperty;
var al = Object.getOwnPropertyDescriptor;
var ul = Object.getOwnPropertyNames;
var ll = Object.getPrototypeOf,
  pl = Object.prototype.hasOwnProperty;
var Xn = ((e) =>
  typeof require != "undefined"
    ? require
    : typeof Proxy != "undefined"
      ? new Proxy(e, {
          get: (t, r) => (typeof require != "undefined" ? require : t)[r],
        })
      : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var kt = (e, t) => () => (e && (t = e((e = 0))), t);
var re = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  Vr = (e, t) => {
    for (var r in t) Yn(e, r, { get: t[r], enumerable: !0 });
  },
  cl = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let o of ul(t))
        !pl.call(e, o) &&
          o !== r &&
          Yn(e, o, {
            get: () => t[o],
            enumerable: !(n = al(t, o)) || n.enumerable,
          });
    return e;
  };
var Oe = (e, t, r) => (
  (r = e != null ? sl(ll(e)) : {}),
  cl(
    t || !e || !e.__esModule
      ? Yn(r, "default", { value: e, enumerable: !0 })
      : r,
    e,
  )
);
function V(e) {
  return () => e;
}
function Le() {
  return x;
}
var x,
  c = kt(() => {
    "use strict";
    x = {
      abort: V(void 0),
      addListener: V(Le()),
      allowedNodeEnvironmentFlags: new Set(),
      arch: "x64",
      argv: ["/bin/node"],
      argv0: "node",
      chdir: V(void 0),
      config: {
        target_defaults: {
          cflags: [],
          default_configuration: "",
          defines: [],
          include_dirs: [],
          libraries: [],
        },
        variables: {
          clang: 0,
          host_arch: "x64",
          node_install_npm: !1,
          node_install_waf: !1,
          node_prefix: "",
          node_shared_openssl: !1,
          node_shared_v8: !1,
          node_shared_zlib: !1,
          node_use_dtrace: !1,
          node_use_etw: !1,
          node_use_openssl: !1,
          target_arch: "x64",
          v8_no_strict_aliasing: 0,
          v8_use_snapshot: !1,
          visibility: "",
        },
      },
      connected: !1,
      cpuUsage: () => ({ user: 0, system: 0 }),
      cwd: () => "/",
      debugPort: 0,
      disconnect: V(void 0),
      constrainedMemory: () => {},
      emit: V(Le()),
      emitWarning: V(void 0),
      env: {},
      eventNames: () => [],
      execArgv: [],
      execPath: "/",
      exit: V(void 0),
      features: {
        inspector: !1,
        debug: !1,
        uv: !1,
        ipv6: !1,
        tls_alpn: !1,
        tls_sni: !1,
        tls_ocsp: !1,
        tls: !1,
      },
      getMaxListeners: V(0),
      getegid: V(0),
      geteuid: V(0),
      getgid: V(0),
      getgroups: V([]),
      getuid: V(0),
      hasUncaughtExceptionCaptureCallback: V(!1),
      hrtime: V([0, 0]),
      platform: "linux",
      kill: V(!0),
      listenerCount: V(0),
      listeners: V([]),
      memoryUsage: V({
        arrayBuffers: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0,
        rss: 0,
      }),
      nextTick: (e, ...t) => {
        setTimeout(() => {
          e(...t);
        }, 0);
      },
      off: V(Le()),
      on: V(Le()),
      once: V(Le()),
      openStdin: V({}),
      pid: 0,
      ppid: 0,
      prependListener: V(Le()),
      prependOnceListener: V(Le()),
      rawListeners: V([]),
      release: { name: "node" },
      removeAllListeners: V(Le()),
      removeListener: V(Le()),
      resourceUsage: V({
        fsRead: 0,
        fsWrite: 0,
        involuntaryContextSwitches: 0,
        ipcReceived: 0,
        ipcSent: 0,
        majorPageFault: 0,
        maxRSS: 0,
        minorPageFault: 0,
        sharedMemorySize: 0,
        signalsCount: 0,
        swappedOut: 0,
        systemCPUTime: 0,
        unsharedDataSize: 0,
        unsharedStackSize: 0,
        userCPUTime: 0,
        voluntaryContextSwitches: 0,
      }),
      setMaxListeners: V(Le()),
      setUncaughtExceptionCaptureCallback: V(void 0),
      setegid: V(void 0),
      seteuid: V(void 0),
      setgid: V(void 0),
      setgroups: V(void 0),
      setuid: V(void 0),
      sourceMapsEnabled: !1,
      stderr: { fd: 2 },
      stdin: { fd: 0 },
      stdout: { fd: 1 },
      title: "node",
      traceDeprecation: !1,
      umask: V(0),
      uptime: V(0),
      version: "",
      versions: {
        http_parser: "",
        node: "",
        v8: "",
        ares: "",
        uv: "",
        zlib: "",
        modules: "",
        openssl: "",
      },
    };
  });
var Ai,
  v,
  f = kt(() => {
    "use strict";
    v =
      (Ai = globalThis.performance) != null
        ? Ai
        : (() => {
            let e = Date.now();
            return { now: () => Date.now() - e };
          })();
  });
var b,
  d = kt(() => {
    "use strict";
    b = () => {};
    b.prototype = b;
  });
var E,
  m = kt(() => {
    "use strict";
    E = class {
      constructor(t) {
        this.value = t;
      }
      deref() {
        return this.value;
      }
    };
  });
var Vi = re((Nt) => {
  "use strict";
  g();
  c();
  f();
  d();
  m();
  var Si = (e, t) => () => (
      t || e((t = { exports: {} }).exports, t), t.exports
    ),
    fl = Si((e) => {
      "use strict";
      (e.byteLength = u), (e.toByteArray = p), (e.fromByteArray = T);
      var t = [],
        r = [],
        n = typeof Uint8Array < "u" ? Uint8Array : Array,
        o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (i = 0, s = o.length; i < s; ++i)
        (t[i] = o[i]), (r[o.charCodeAt(i)] = i);
      var i, s;
      (r[45] = 62), (r[95] = 63);
      function a(C) {
        var P = C.length;
        if (P % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var R = C.indexOf("=");
        R === -1 && (R = P);
        var I = R === P ? 0 : 4 - (R % 4);
        return [R, I];
      }
      function u(C) {
        var P = a(C),
          R = P[0],
          I = P[1];
        return ((R + I) * 3) / 4 - I;
      }
      function l(C, P, R) {
        return ((P + R) * 3) / 4 - R;
      }
      function p(C) {
        var P,
          R = a(C),
          I = R[0],
          D = R[1],
          F = new n(l(C, I, D)),
          k = 0,
          $ = D > 0 ? I - 4 : I,
          q;
        for (q = 0; q < $; q += 4)
          (P =
            (r[C.charCodeAt(q)] << 18) |
            (r[C.charCodeAt(q + 1)] << 12) |
            (r[C.charCodeAt(q + 2)] << 6) |
            r[C.charCodeAt(q + 3)]),
            (F[k++] = (P >> 16) & 255),
            (F[k++] = (P >> 8) & 255),
            (F[k++] = P & 255);
        return (
          D === 2 &&
            ((P = (r[C.charCodeAt(q)] << 2) | (r[C.charCodeAt(q + 1)] >> 4)),
            (F[k++] = P & 255)),
          D === 1 &&
            ((P =
              (r[C.charCodeAt(q)] << 10) |
              (r[C.charCodeAt(q + 1)] << 4) |
              (r[C.charCodeAt(q + 2)] >> 2)),
            (F[k++] = (P >> 8) & 255),
            (F[k++] = P & 255)),
          F
        );
      }
      function y(C) {
        return (
          t[(C >> 18) & 63] + t[(C >> 12) & 63] + t[(C >> 6) & 63] + t[C & 63]
        );
      }
      function h(C, P, R) {
        for (var I, D = [], F = P; F < R; F += 3)
          (I =
            ((C[F] << 16) & 16711680) +
            ((C[F + 1] << 8) & 65280) +
            (C[F + 2] & 255)),
            D.push(y(I));
        return D.join("");
      }
      function T(C) {
        for (
          var P, R = C.length, I = R % 3, D = [], F = 16383, k = 0, $ = R - I;
          k < $;
          k += F
        )
          D.push(h(C, k, k + F > $ ? $ : k + F));
        return (
          I === 1
            ? ((P = C[R - 1]), D.push(t[P >> 2] + t[(P << 4) & 63] + "=="))
            : I === 2 &&
              ((P = (C[R - 2] << 8) + C[R - 1]),
              D.push(t[P >> 10] + t[(P >> 4) & 63] + t[(P << 2) & 63] + "=")),
          D.join("")
        );
      }
    }),
    dl = Si((e) => {
      (e.read = function (t, r, n, o, i) {
        var s,
          a,
          u = i * 8 - o - 1,
          l = (1 << u) - 1,
          p = l >> 1,
          y = -7,
          h = n ? i - 1 : 0,
          T = n ? -1 : 1,
          C = t[r + h];
        for (
          h += T, s = C & ((1 << -y) - 1), C >>= -y, y += u;
          y > 0;
          s = s * 256 + t[r + h], h += T, y -= 8
        );
        for (
          a = s & ((1 << -y) - 1), s >>= -y, y += o;
          y > 0;
          a = a * 256 + t[r + h], h += T, y -= 8
        );
        if (s === 0) s = 1 - p;
        else {
          if (s === l) return a ? NaN : (C ? -1 : 1) * (1 / 0);
          (a = a + Math.pow(2, o)), (s = s - p);
        }
        return (C ? -1 : 1) * a * Math.pow(2, s - o);
      }),
        (e.write = function (t, r, n, o, i, s) {
          var a,
            u,
            l,
            p = s * 8 - i - 1,
            y = (1 << p) - 1,
            h = y >> 1,
            T = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            C = o ? 0 : s - 1,
            P = o ? 1 : -1,
            R = r < 0 || (r === 0 && 1 / r < 0) ? 1 : 0;
          for (
            r = Math.abs(r),
              isNaN(r) || r === 1 / 0
                ? ((u = isNaN(r) ? 1 : 0), (a = y))
                : ((a = Math.floor(Math.log(r) / Math.LN2)),
                  r * (l = Math.pow(2, -a)) < 1 && (a--, (l *= 2)),
                  a + h >= 1 ? (r += T / l) : (r += T * Math.pow(2, 1 - h)),
                  r * l >= 2 && (a++, (l /= 2)),
                  a + h >= y
                    ? ((u = 0), (a = y))
                    : a + h >= 1
                      ? ((u = (r * l - 1) * Math.pow(2, i)), (a = a + h))
                      : ((u = r * Math.pow(2, h - 1) * Math.pow(2, i)),
                        (a = 0)));
            i >= 8;
            t[n + C] = u & 255, C += P, u /= 256, i -= 8
          );
          for (
            a = (a << i) | u, p += i;
            p > 0;
            t[n + C] = a & 255, C += P, a /= 256, p -= 8
          );
          t[n + C - P] |= R * 128;
        });
    }),
    eo = fl(),
    Dt = dl(),
    Ti =
      typeof Symbol == "function" && typeof Symbol.for == "function"
        ? Symbol.for("nodejs.util.inspect.custom")
        : null;
  Nt.Buffer = M;
  Nt.SlowBuffer = bl;
  Nt.INSPECT_MAX_BYTES = 50;
  var Kr = 2147483647;
  Nt.kMaxLength = Kr;
  M.TYPED_ARRAY_SUPPORT = ml();
  !M.TYPED_ARRAY_SUPPORT &&
    typeof console < "u" &&
    typeof console.error == "function" &&
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
    );
  function ml() {
    try {
      let e = new Uint8Array(1),
        t = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(t, Uint8Array.prototype),
        Object.setPrototypeOf(e, t),
        e.foo() === 42
      );
    } catch (e) {
      return !1;
    }
  }
  Object.defineProperty(M.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (M.isBuffer(this)) return this.buffer;
    },
  });
  Object.defineProperty(M.prototype, "offset", {
    enumerable: !0,
    get: function () {
      if (M.isBuffer(this)) return this.byteOffset;
    },
  });
  function Je(e) {
    if (e > Kr)
      throw new RangeError(
        'The value "' + e + '" is invalid for option "size"',
      );
    let t = new Uint8Array(e);
    return Object.setPrototypeOf(t, M.prototype), t;
  }
  function M(e, t, r) {
    if (typeof e == "number") {
      if (typeof t == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number',
        );
      return no(e);
    }
    return Oi(e, t, r);
  }
  M.poolSize = 8192;
  function Oi(e, t, r) {
    if (typeof e == "string") return yl(e, t);
    if (ArrayBuffer.isView(e)) return hl(e);
    if (e == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof e,
      );
    if (
      Be(e, ArrayBuffer) ||
      (e && Be(e.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < "u" &&
        (Be(e, SharedArrayBuffer) || (e && Be(e.buffer, SharedArrayBuffer))))
    )
      return ki(e, t, r);
    if (typeof e == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number',
      );
    let n = e.valueOf && e.valueOf();
    if (n != null && n !== e) return M.from(n, t, r);
    let o = xl(e);
    if (o) return o;
    if (
      typeof Symbol < "u" &&
      Symbol.toPrimitive != null &&
      typeof e[Symbol.toPrimitive] == "function"
    )
      return M.from(e[Symbol.toPrimitive]("string"), t, r);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof e,
    );
  }
  M.from = function (e, t, r) {
    return Oi(e, t, r);
  };
  Object.setPrototypeOf(M.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(M, Uint8Array);
  function Fi(e) {
    if (typeof e != "number")
      throw new TypeError('"size" argument must be of type number');
    if (e < 0)
      throw new RangeError(
        'The value "' + e + '" is invalid for option "size"',
      );
  }
  function gl(e, t, r) {
    return (
      Fi(e),
      e <= 0
        ? Je(e)
        : t !== void 0
          ? typeof r == "string"
            ? Je(e).fill(t, r)
            : Je(e).fill(t)
          : Je(e)
    );
  }
  M.alloc = function (e, t, r) {
    return gl(e, t, r);
  };
  function no(e) {
    return Fi(e), Je(e < 0 ? 0 : oo(e) | 0);
  }
  M.allocUnsafe = function (e) {
    return no(e);
  };
  M.allocUnsafeSlow = function (e) {
    return no(e);
  };
  function yl(e, t) {
    if (((typeof t != "string" || t === "") && (t = "utf8"), !M.isEncoding(t)))
      throw new TypeError("Unknown encoding: " + t);
    let r = Ii(e, t) | 0,
      n = Je(r),
      o = n.write(e, t);
    return o !== r && (n = n.slice(0, o)), n;
  }
  function to(e) {
    let t = e.length < 0 ? 0 : oo(e.length) | 0,
      r = Je(t);
    for (let n = 0; n < t; n += 1) r[n] = e[n] & 255;
    return r;
  }
  function hl(e) {
    if (Be(e, Uint8Array)) {
      let t = new Uint8Array(e);
      return ki(t.buffer, t.byteOffset, t.byteLength);
    }
    return to(e);
  }
  function ki(e, t, r) {
    if (t < 0 || e.byteLength < t)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (e.byteLength < t + (r || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let n;
    return (
      t === void 0 && r === void 0
        ? (n = new Uint8Array(e))
        : r === void 0
          ? (n = new Uint8Array(e, t))
          : (n = new Uint8Array(e, t, r)),
      Object.setPrototypeOf(n, M.prototype),
      n
    );
  }
  function xl(e) {
    if (M.isBuffer(e)) {
      let t = oo(e.length) | 0,
        r = Je(t);
      return r.length === 0 || e.copy(r, 0, 0, t), r;
    }
    if (e.length !== void 0)
      return typeof e.length != "number" || so(e.length) ? Je(0) : to(e);
    if (e.type === "Buffer" && Array.isArray(e.data)) return to(e.data);
  }
  function oo(e) {
    if (e >= Kr)
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          Kr.toString(16) +
          " bytes",
      );
    return e | 0;
  }
  function bl(e) {
    return +e != e && (e = 0), M.alloc(+e);
  }
  M.isBuffer = function (e) {
    return e != null && e._isBuffer === !0 && e !== M.prototype;
  };
  M.compare = function (e, t) {
    if (
      (Be(e, Uint8Array) && (e = M.from(e, e.offset, e.byteLength)),
      Be(t, Uint8Array) && (t = M.from(t, t.offset, t.byteLength)),
      !M.isBuffer(e) || !M.isBuffer(t))
    )
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
      );
    if (e === t) return 0;
    let r = e.length,
      n = t.length;
    for (let o = 0, i = Math.min(r, n); o < i; ++o)
      if (e[o] !== t[o]) {
        (r = e[o]), (n = t[o]);
        break;
      }
    return r < n ? -1 : n < r ? 1 : 0;
  };
  M.isEncoding = function (e) {
    switch (String(e).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  };
  M.concat = function (e, t) {
    if (!Array.isArray(e))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (e.length === 0) return M.alloc(0);
    let r;
    if (t === void 0) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
    let n = M.allocUnsafe(t),
      o = 0;
    for (r = 0; r < e.length; ++r) {
      let i = e[r];
      if (Be(i, Uint8Array))
        o + i.length > n.length
          ? (M.isBuffer(i) || (i = M.from(i)), i.copy(n, o))
          : Uint8Array.prototype.set.call(n, i, o);
      else if (M.isBuffer(i)) i.copy(n, o);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      o += i.length;
    }
    return n;
  };
  function Ii(e, t) {
    if (M.isBuffer(e)) return e.length;
    if (ArrayBuffer.isView(e) || Be(e, ArrayBuffer)) return e.byteLength;
    if (typeof e != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof e,
      );
    let r = e.length,
      n = arguments.length > 2 && arguments[2] === !0;
    if (!n && r === 0) return 0;
    let o = !1;
    for (;;)
      switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return r;
        case "utf8":
        case "utf-8":
          return ro(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return r * 2;
        case "hex":
          return r >>> 1;
        case "base64":
          return qi(e).length;
        default:
          if (o) return n ? -1 : ro(e).length;
          (t = ("" + t).toLowerCase()), (o = !0);
      }
  }
  M.byteLength = Ii;
  function wl(e, t, r) {
    let n = !1;
    if (
      ((t === void 0 || t < 0) && (t = 0),
      t > this.length ||
        ((r === void 0 || r > this.length) && (r = this.length), r <= 0) ||
        ((r >>>= 0), (t >>>= 0), r <= t))
    )
      return "";
    for (e || (e = "utf8"); ; )
      switch (e) {
        case "hex":
          return Ol(this, t, r);
        case "utf8":
        case "utf-8":
          return _i(this, t, r);
        case "ascii":
          return Rl(this, t, r);
        case "latin1":
        case "binary":
          return Sl(this, t, r);
        case "base64":
          return Cl(this, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Fl(this, t, r);
        default:
          if (n) throw new TypeError("Unknown encoding: " + e);
          (e = (e + "").toLowerCase()), (n = !0);
      }
  }
  M.prototype._isBuffer = !0;
  function xt(e, t, r) {
    let n = e[t];
    (e[t] = e[r]), (e[r] = n);
  }
  M.prototype.swap16 = function () {
    let e = this.length;
    if (e % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let t = 0; t < e; t += 2) xt(this, t, t + 1);
    return this;
  };
  M.prototype.swap32 = function () {
    let e = this.length;
    if (e % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let t = 0; t < e; t += 4) xt(this, t, t + 3), xt(this, t + 1, t + 2);
    return this;
  };
  M.prototype.swap64 = function () {
    let e = this.length;
    if (e % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let t = 0; t < e; t += 8)
      xt(this, t, t + 7),
        xt(this, t + 1, t + 6),
        xt(this, t + 2, t + 5),
        xt(this, t + 3, t + 4);
    return this;
  };
  M.prototype.toString = function () {
    let e = this.length;
    return e === 0
      ? ""
      : arguments.length === 0
        ? _i(this, 0, e)
        : wl.apply(this, arguments);
  };
  M.prototype.toLocaleString = M.prototype.toString;
  M.prototype.equals = function (e) {
    if (!M.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
    return this === e ? !0 : M.compare(this, e) === 0;
  };
  M.prototype.inspect = function () {
    let e = "",
      t = Nt.INSPECT_MAX_BYTES;
    return (
      (e = this.toString("hex", 0, t)
        .replace(/(.{2})/g, "$1 ")
        .trim()),
      this.length > t && (e += " ... "),
      "<Buffer " + e + ">"
    );
  };
  Ti && (M.prototype[Ti] = M.prototype.inspect);
  M.prototype.compare = function (e, t, r, n, o) {
    if (
      (Be(e, Uint8Array) && (e = M.from(e, e.offset, e.byteLength)),
      !M.isBuffer(e))
    )
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
          typeof e,
      );
    if (
      (t === void 0 && (t = 0),
      r === void 0 && (r = e ? e.length : 0),
      n === void 0 && (n = 0),
      o === void 0 && (o = this.length),
      t < 0 || r > e.length || n < 0 || o > this.length)
    )
      throw new RangeError("out of range index");
    if (n >= o && t >= r) return 0;
    if (n >= o) return -1;
    if (t >= r) return 1;
    if (((t >>>= 0), (r >>>= 0), (n >>>= 0), (o >>>= 0), this === e)) return 0;
    let i = o - n,
      s = r - t,
      a = Math.min(i, s),
      u = this.slice(n, o),
      l = e.slice(t, r);
    for (let p = 0; p < a; ++p)
      if (u[p] !== l[p]) {
        (i = u[p]), (s = l[p]);
        break;
      }
    return i < s ? -1 : s < i ? 1 : 0;
  };
  function Di(e, t, r, n, o) {
    if (e.length === 0) return -1;
    if (
      (typeof r == "string"
        ? ((n = r), (r = 0))
        : r > 2147483647
          ? (r = 2147483647)
          : r < -2147483648 && (r = -2147483648),
      (r = +r),
      so(r) && (r = o ? 0 : e.length - 1),
      r < 0 && (r = e.length + r),
      r >= e.length)
    ) {
      if (o) return -1;
      r = e.length - 1;
    } else if (r < 0)
      if (o) r = 0;
      else return -1;
    if ((typeof t == "string" && (t = M.from(t, n)), M.isBuffer(t)))
      return t.length === 0 ? -1 : Ci(e, t, r, n, o);
    if (typeof t == "number")
      return (
        (t = t & 255),
        typeof Uint8Array.prototype.indexOf == "function"
          ? o
            ? Uint8Array.prototype.indexOf.call(e, t, r)
            : Uint8Array.prototype.lastIndexOf.call(e, t, r)
          : Ci(e, [t], r, n, o)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function Ci(e, t, r, n, o) {
    let i = 1,
      s = e.length,
      a = t.length;
    if (
      n !== void 0 &&
      ((n = String(n).toLowerCase()),
      n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")
    ) {
      if (e.length < 2 || t.length < 2) return -1;
      (i = 2), (s /= 2), (a /= 2), (r /= 2);
    }
    function u(p, y) {
      return i === 1 ? p[y] : p.readUInt16BE(y * i);
    }
    let l;
    if (o) {
      let p = -1;
      for (l = r; l < s; l++)
        if (u(e, l) === u(t, p === -1 ? 0 : l - p)) {
          if ((p === -1 && (p = l), l - p + 1 === a)) return p * i;
        } else p !== -1 && (l -= l - p), (p = -1);
    } else
      for (r + a > s && (r = s - a), l = r; l >= 0; l--) {
        let p = !0;
        for (let y = 0; y < a; y++)
          if (u(e, l + y) !== u(t, y)) {
            p = !1;
            break;
          }
        if (p) return l;
      }
    return -1;
  }
  M.prototype.includes = function (e, t, r) {
    return this.indexOf(e, t, r) !== -1;
  };
  M.prototype.indexOf = function (e, t, r) {
    return Di(this, e, t, r, !0);
  };
  M.prototype.lastIndexOf = function (e, t, r) {
    return Di(this, e, t, r, !1);
  };
  function El(e, t, r, n) {
    r = Number(r) || 0;
    let o = e.length - r;
    n ? ((n = Number(n)), n > o && (n = o)) : (n = o);
    let i = t.length;
    n > i / 2 && (n = i / 2);
    let s;
    for (s = 0; s < n; ++s) {
      let a = parseInt(t.substr(s * 2, 2), 16);
      if (so(a)) return s;
      e[r + s] = a;
    }
    return s;
  }
  function Pl(e, t, r, n) {
    return Gr(ro(t, e.length - r), e, r, n);
  }
  function vl(e, t, r, n) {
    return Gr(_l(t), e, r, n);
  }
  function Al(e, t, r, n) {
    return Gr(qi(t), e, r, n);
  }
  function Tl(e, t, r, n) {
    return Gr(Nl(t, e.length - r), e, r, n);
  }
  M.prototype.write = function (e, t, r, n) {
    if (t === void 0) (n = "utf8"), (r = this.length), (t = 0);
    else if (r === void 0 && typeof t == "string")
      (n = t), (r = this.length), (t = 0);
    else if (isFinite(t))
      (t = t >>> 0),
        isFinite(r)
          ? ((r = r >>> 0), n === void 0 && (n = "utf8"))
          : ((n = r), (r = void 0));
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported",
      );
    let o = this.length - t;
    if (
      ((r === void 0 || r > o) && (r = o),
      (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    n || (n = "utf8");
    let i = !1;
    for (;;)
      switch (n) {
        case "hex":
          return El(this, e, t, r);
        case "utf8":
        case "utf-8":
          return Pl(this, e, t, r);
        case "ascii":
        case "latin1":
        case "binary":
          return vl(this, e, t, r);
        case "base64":
          return Al(this, e, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Tl(this, e, t, r);
        default:
          if (i) throw new TypeError("Unknown encoding: " + n);
          (n = ("" + n).toLowerCase()), (i = !0);
      }
  };
  M.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  };
  function Cl(e, t, r) {
    return t === 0 && r === e.length
      ? eo.fromByteArray(e)
      : eo.fromByteArray(e.slice(t, r));
  }
  function _i(e, t, r) {
    r = Math.min(e.length, r);
    let n = [],
      o = t;
    for (; o < r; ) {
      let i = e[o],
        s = null,
        a = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
      if (o + a <= r) {
        let u, l, p, y;
        switch (a) {
          case 1:
            i < 128 && (s = i);
            break;
          case 2:
            (u = e[o + 1]),
              (u & 192) === 128 &&
                ((y = ((i & 31) << 6) | (u & 63)), y > 127 && (s = y));
            break;
          case 3:
            (u = e[o + 1]),
              (l = e[o + 2]),
              (u & 192) === 128 &&
                (l & 192) === 128 &&
                ((y = ((i & 15) << 12) | ((u & 63) << 6) | (l & 63)),
                y > 2047 && (y < 55296 || y > 57343) && (s = y));
            break;
          case 4:
            (u = e[o + 1]),
              (l = e[o + 2]),
              (p = e[o + 3]),
              (u & 192) === 128 &&
                (l & 192) === 128 &&
                (p & 192) === 128 &&
                ((y =
                  ((i & 15) << 18) |
                  ((u & 63) << 12) |
                  ((l & 63) << 6) |
                  (p & 63)),
                y > 65535 && y < 1114112 && (s = y));
        }
      }
      s === null
        ? ((s = 65533), (a = 1))
        : s > 65535 &&
          ((s -= 65536),
          n.push(((s >>> 10) & 1023) | 55296),
          (s = 56320 | (s & 1023))),
        n.push(s),
        (o += a);
    }
    return Ml(n);
  }
  var Mi = 4096;
  function Ml(e) {
    let t = e.length;
    if (t <= Mi) return String.fromCharCode.apply(String, e);
    let r = "",
      n = 0;
    for (; n < t; )
      r += String.fromCharCode.apply(String, e.slice(n, (n += Mi)));
    return r;
  }
  function Rl(e, t, r) {
    let n = "";
    r = Math.min(e.length, r);
    for (let o = t; o < r; ++o) n += String.fromCharCode(e[o] & 127);
    return n;
  }
  function Sl(e, t, r) {
    let n = "";
    r = Math.min(e.length, r);
    for (let o = t; o < r; ++o) n += String.fromCharCode(e[o]);
    return n;
  }
  function Ol(e, t, r) {
    let n = e.length;
    (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
    let o = "";
    for (let i = t; i < r; ++i) o += Ll[e[i]];
    return o;
  }
  function Fl(e, t, r) {
    let n = e.slice(t, r),
      o = "";
    for (let i = 0; i < n.length - 1; i += 2)
      o += String.fromCharCode(n[i] + n[i + 1] * 256);
    return o;
  }
  M.prototype.slice = function (e, t) {
    let r = this.length;
    (e = ~~e),
      (t = t === void 0 ? r : ~~t),
      e < 0 ? ((e += r), e < 0 && (e = 0)) : e > r && (e = r),
      t < 0 ? ((t += r), t < 0 && (t = 0)) : t > r && (t = r),
      t < e && (t = e);
    let n = this.subarray(e, t);
    return Object.setPrototypeOf(n, M.prototype), n;
  };
  function ie(e, t, r) {
    if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
    if (e + t > r)
      throw new RangeError("Trying to access beyond buffer length");
  }
  M.prototype.readUintLE = M.prototype.readUIntLE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || ie(e, t, this.length);
    let n = this[e],
      o = 1,
      i = 0;
    for (; ++i < t && (o *= 256); ) n += this[e + i] * o;
    return n;
  };
  M.prototype.readUintBE = M.prototype.readUIntBE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || ie(e, t, this.length);
    let n = this[e + --t],
      o = 1;
    for (; t > 0 && (o *= 256); ) n += this[e + --t] * o;
    return n;
  };
  M.prototype.readUint8 = M.prototype.readUInt8 = function (e, t) {
    return (e = e >>> 0), t || ie(e, 1, this.length), this[e];
  };
  M.prototype.readUint16LE = M.prototype.readUInt16LE = function (e, t) {
    return (
      (e = e >>> 0), t || ie(e, 2, this.length), this[e] | (this[e + 1] << 8)
    );
  };
  M.prototype.readUint16BE = M.prototype.readUInt16BE = function (e, t) {
    return (
      (e = e >>> 0), t || ie(e, 2, this.length), (this[e] << 8) | this[e + 1]
    );
  };
  M.prototype.readUint32LE = M.prototype.readUInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || ie(e, 4, this.length),
      (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
        this[e + 3] * 16777216
    );
  };
  M.prototype.readUint32BE = M.prototype.readUInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || ie(e, 4, this.length),
      this[e] * 16777216 +
        ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
    );
  };
  M.prototype.readBigUInt64LE = et(function (e) {
    (e = e >>> 0), _t(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && sr(e, this.length - 8);
    let n = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
      o = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + r * 2 ** 24;
    return BigInt(n) + (BigInt(o) << BigInt(32));
  });
  M.prototype.readBigUInt64BE = et(function (e) {
    (e = e >>> 0), _t(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && sr(e, this.length - 8);
    let n = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e],
      o = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r;
    return (BigInt(n) << BigInt(32)) + BigInt(o);
  });
  M.prototype.readIntLE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || ie(e, t, this.length);
    let n = this[e],
      o = 1,
      i = 0;
    for (; ++i < t && (o *= 256); ) n += this[e + i] * o;
    return (o *= 128), n >= o && (n -= Math.pow(2, 8 * t)), n;
  };
  M.prototype.readIntBE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || ie(e, t, this.length);
    let n = t,
      o = 1,
      i = this[e + --n];
    for (; n > 0 && (o *= 256); ) i += this[e + --n] * o;
    return (o *= 128), i >= o && (i -= Math.pow(2, 8 * t)), i;
  };
  M.prototype.readInt8 = function (e, t) {
    return (
      (e = e >>> 0),
      t || ie(e, 1, this.length),
      this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
    );
  };
  M.prototype.readInt16LE = function (e, t) {
    (e = e >>> 0), t || ie(e, 2, this.length);
    let r = this[e] | (this[e + 1] << 8);
    return r & 32768 ? r | 4294901760 : r;
  };
  M.prototype.readInt16BE = function (e, t) {
    (e = e >>> 0), t || ie(e, 2, this.length);
    let r = this[e + 1] | (this[e] << 8);
    return r & 32768 ? r | 4294901760 : r;
  };
  M.prototype.readInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || ie(e, 4, this.length),
      this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
    );
  };
  M.prototype.readInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || ie(e, 4, this.length),
      (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
    );
  };
  M.prototype.readBigInt64LE = et(function (e) {
    (e = e >>> 0), _t(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && sr(e, this.length - 8);
    let n =
      this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (r << 24);
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24)
    );
  });
  M.prototype.readBigInt64BE = et(function (e) {
    (e = e >>> 0), _t(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && sr(e, this.length - 8);
    let n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r)
    );
  });
  M.prototype.readFloatLE = function (e, t) {
    return (
      (e = e >>> 0), t || ie(e, 4, this.length), Dt.read(this, e, !0, 23, 4)
    );
  };
  M.prototype.readFloatBE = function (e, t) {
    return (
      (e = e >>> 0), t || ie(e, 4, this.length), Dt.read(this, e, !1, 23, 4)
    );
  };
  M.prototype.readDoubleLE = function (e, t) {
    return (
      (e = e >>> 0), t || ie(e, 8, this.length), Dt.read(this, e, !0, 52, 8)
    );
  };
  M.prototype.readDoubleBE = function (e, t) {
    return (
      (e = e >>> 0), t || ie(e, 8, this.length), Dt.read(this, e, !1, 52, 8)
    );
  };
  function Pe(e, t, r, n, o, i) {
    if (!M.isBuffer(e))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > o || t < i)
      throw new RangeError('"value" argument is out of bounds');
    if (r + n > e.length) throw new RangeError("Index out of range");
  }
  M.prototype.writeUintLE = M.prototype.writeUIntLE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), (r = r >>> 0), !n)) {
      let s = Math.pow(2, 8 * r) - 1;
      Pe(this, e, t, r, s, 0);
    }
    let o = 1,
      i = 0;
    for (this[t] = e & 255; ++i < r && (o *= 256); )
      this[t + i] = (e / o) & 255;
    return t + r;
  };
  M.prototype.writeUintBE = M.prototype.writeUIntBE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), (r = r >>> 0), !n)) {
      let s = Math.pow(2, 8 * r) - 1;
      Pe(this, e, t, r, s, 0);
    }
    let o = r - 1,
      i = 1;
    for (this[t + o] = e & 255; --o >= 0 && (i *= 256); )
      this[t + o] = (e / i) & 255;
    return t + r;
  };
  M.prototype.writeUint8 = M.prototype.writeUInt8 = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || Pe(this, e, t, 1, 255, 0),
      (this[t] = e & 255),
      t + 1
    );
  };
  M.prototype.writeUint16LE = M.prototype.writeUInt16LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || Pe(this, e, t, 2, 65535, 0),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  };
  M.prototype.writeUint16BE = M.prototype.writeUInt16BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || Pe(this, e, t, 2, 65535, 0),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  };
  M.prototype.writeUint32LE = M.prototype.writeUInt32LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || Pe(this, e, t, 4, 4294967295, 0),
      (this[t + 3] = e >>> 24),
      (this[t + 2] = e >>> 16),
      (this[t + 1] = e >>> 8),
      (this[t] = e & 255),
      t + 4
    );
  };
  M.prototype.writeUint32BE = M.prototype.writeUInt32BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || Pe(this, e, t, 4, 4294967295, 0),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  };
  function Ni(e, t, r, n, o) {
    $i(t, n, o, e, r, 7);
    let i = Number(t & BigInt(4294967295));
    (e[r++] = i),
      (i = i >> 8),
      (e[r++] = i),
      (i = i >> 8),
      (e[r++] = i),
      (i = i >> 8),
      (e[r++] = i);
    let s = Number((t >> BigInt(32)) & BigInt(4294967295));
    return (
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      r
    );
  }
  function Li(e, t, r, n, o) {
    $i(t, n, o, e, r, 7);
    let i = Number(t & BigInt(4294967295));
    (e[r + 7] = i),
      (i = i >> 8),
      (e[r + 6] = i),
      (i = i >> 8),
      (e[r + 5] = i),
      (i = i >> 8),
      (e[r + 4] = i);
    let s = Number((t >> BigInt(32)) & BigInt(4294967295));
    return (
      (e[r + 3] = s),
      (s = s >> 8),
      (e[r + 2] = s),
      (s = s >> 8),
      (e[r + 1] = s),
      (s = s >> 8),
      (e[r] = s),
      r + 8
    );
  }
  M.prototype.writeBigUInt64LE = et(function (e, t = 0) {
    return Ni(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  M.prototype.writeBigUInt64BE = et(function (e, t = 0) {
    return Li(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  M.prototype.writeIntLE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), !n)) {
      let a = Math.pow(2, 8 * r - 1);
      Pe(this, e, t, r, a - 1, -a);
    }
    let o = 0,
      i = 1,
      s = 0;
    for (this[t] = e & 255; ++o < r && (i *= 256); )
      e < 0 && s === 0 && this[t + o - 1] !== 0 && (s = 1),
        (this[t + o] = (((e / i) >> 0) - s) & 255);
    return t + r;
  };
  M.prototype.writeIntBE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), !n)) {
      let a = Math.pow(2, 8 * r - 1);
      Pe(this, e, t, r, a - 1, -a);
    }
    let o = r - 1,
      i = 1,
      s = 0;
    for (this[t + o] = e & 255; --o >= 0 && (i *= 256); )
      e < 0 && s === 0 && this[t + o + 1] !== 0 && (s = 1),
        (this[t + o] = (((e / i) >> 0) - s) & 255);
    return t + r;
  };
  M.prototype.writeInt8 = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || Pe(this, e, t, 1, 127, -128),
      e < 0 && (e = 255 + e + 1),
      (this[t] = e & 255),
      t + 1
    );
  };
  M.prototype.writeInt16LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || Pe(this, e, t, 2, 32767, -32768),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  };
  M.prototype.writeInt16BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || Pe(this, e, t, 2, 32767, -32768),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  };
  M.prototype.writeInt32LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || Pe(this, e, t, 4, 2147483647, -2147483648),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      (this[t + 2] = e >>> 16),
      (this[t + 3] = e >>> 24),
      t + 4
    );
  };
  M.prototype.writeInt32BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || Pe(this, e, t, 4, 2147483647, -2147483648),
      e < 0 && (e = 4294967295 + e + 1),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  };
  M.prototype.writeBigInt64LE = et(function (e, t = 0) {
    return Ni(
      this,
      e,
      t,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff"),
    );
  });
  M.prototype.writeBigInt64BE = et(function (e, t = 0) {
    return Li(
      this,
      e,
      t,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff"),
    );
  });
  function Bi(e, t, r, n, o, i) {
    if (r + n > e.length) throw new RangeError("Index out of range");
    if (r < 0) throw new RangeError("Index out of range");
  }
  function ji(e, t, r, n, o) {
    return (
      (t = +t),
      (r = r >>> 0),
      o || Bi(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
      Dt.write(e, t, r, n, 23, 4),
      r + 4
    );
  }
  M.prototype.writeFloatLE = function (e, t, r) {
    return ji(this, e, t, !0, r);
  };
  M.prototype.writeFloatBE = function (e, t, r) {
    return ji(this, e, t, !1, r);
  };
  function Ui(e, t, r, n, o) {
    return (
      (t = +t),
      (r = r >>> 0),
      o || Bi(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
      Dt.write(e, t, r, n, 52, 8),
      r + 8
    );
  }
  M.prototype.writeDoubleLE = function (e, t, r) {
    return Ui(this, e, t, !0, r);
  };
  M.prototype.writeDoubleBE = function (e, t, r) {
    return Ui(this, e, t, !1, r);
  };
  M.prototype.copy = function (e, t, r, n) {
    if (!M.isBuffer(e)) throw new TypeError("argument should be a Buffer");
    if (
      (r || (r = 0),
      !n && n !== 0 && (n = this.length),
      t >= e.length && (t = e.length),
      t || (t = 0),
      n > 0 && n < r && (n = r),
      n === r || e.length === 0 || this.length === 0)
    )
      return 0;
    if (t < 0) throw new RangeError("targetStart out of bounds");
    if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
    if (n < 0) throw new RangeError("sourceEnd out of bounds");
    n > this.length && (n = this.length),
      e.length - t < n - r && (n = e.length - t + r);
    let o = n - r;
    return (
      this === e && typeof Uint8Array.prototype.copyWithin == "function"
        ? this.copyWithin(t, r, n)
        : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
      o
    );
  };
  M.prototype.fill = function (e, t, r, n) {
    if (typeof e == "string") {
      if (
        (typeof t == "string"
          ? ((n = t), (t = 0), (r = this.length))
          : typeof r == "string" && ((n = r), (r = this.length)),
        n !== void 0 && typeof n != "string")
      )
        throw new TypeError("encoding must be a string");
      if (typeof n == "string" && !M.isEncoding(n))
        throw new TypeError("Unknown encoding: " + n);
      if (e.length === 1) {
        let i = e.charCodeAt(0);
        ((n === "utf8" && i < 128) || n === "latin1") && (e = i);
      }
    } else
      typeof e == "number"
        ? (e = e & 255)
        : typeof e == "boolean" && (e = Number(e));
    if (t < 0 || this.length < t || this.length < r)
      throw new RangeError("Out of range index");
    if (r <= t) return this;
    (t = t >>> 0), (r = r === void 0 ? this.length : r >>> 0), e || (e = 0);
    let o;
    if (typeof e == "number") for (o = t; o < r; ++o) this[o] = e;
    else {
      let i = M.isBuffer(e) ? e : M.from(e, n),
        s = i.length;
      if (s === 0)
        throw new TypeError(
          'The value "' + e + '" is invalid for argument "value"',
        );
      for (o = 0; o < r - t; ++o) this[o + t] = i[o % s];
    }
    return this;
  };
  var It = {};
  function io(e, t, r) {
    It[e] = class extends r {
      constructor() {
        super(),
          Object.defineProperty(this, "message", {
            value: t.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          (this.name = `${this.name} [${e}]`),
          this.stack,
          delete this.name;
      }
      get code() {
        return e;
      }
      set code(n) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0,
        });
      }
      toString() {
        return `${this.name} [${e}]: ${this.message}`;
      }
    };
  }
  io(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function (e) {
      return e
        ? `${e} is outside of buffer bounds`
        : "Attempt to access memory outside buffer bounds";
    },
    RangeError,
  );
  io(
    "ERR_INVALID_ARG_TYPE",
    function (e, t) {
      return `The "${e}" argument must be of type number. Received type ${typeof t}`;
    },
    TypeError,
  );
  io(
    "ERR_OUT_OF_RANGE",
    function (e, t, r) {
      let n = `The value of "${e}" is out of range.`,
        o = r;
      return (
        Number.isInteger(r) && Math.abs(r) > 2 ** 32
          ? (o = Ri(String(r)))
          : typeof r == "bigint" &&
            ((o = String(r)),
            (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) &&
              (o = Ri(o)),
            (o += "n")),
        (n += ` It must be ${t}. Received ${o}`),
        n
      );
    },
    RangeError,
  );
  function Ri(e) {
    let t = "",
      r = e.length,
      n = e[0] === "-" ? 1 : 0;
    for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
    return `${e.slice(0, r)}${t}`;
  }
  function kl(e, t, r) {
    _t(t, "offset"),
      (e[t] === void 0 || e[t + r] === void 0) && sr(t, e.length - (r + 1));
  }
  function $i(e, t, r, n, o, i) {
    if (e > r || e < t) {
      let s = typeof t == "bigint" ? "n" : "",
        a;
      throw (
        (i > 3
          ? t === 0 || t === BigInt(0)
            ? (a = `>= 0${s} and < 2${s} ** ${(i + 1) * 8}${s}`)
            : (a = `>= -(2${s} ** ${(i + 1) * 8 - 1}${s}) and < 2 ** ${(i + 1) * 8 - 1}${s}`)
          : (a = `>= ${t}${s} and <= ${r}${s}`),
        new It.ERR_OUT_OF_RANGE("value", a, e))
      );
    }
    kl(n, o, i);
  }
  function _t(e, t) {
    if (typeof e != "number") throw new It.ERR_INVALID_ARG_TYPE(t, "number", e);
  }
  function sr(e, t, r) {
    throw Math.floor(e) !== e
      ? (_t(e, r), new It.ERR_OUT_OF_RANGE(r || "offset", "an integer", e))
      : t < 0
        ? new It.ERR_BUFFER_OUT_OF_BOUNDS()
        : new It.ERR_OUT_OF_RANGE(
            r || "offset",
            `>= ${r ? 1 : 0} and <= ${t}`,
            e,
          );
  }
  var Il = /[^+/0-9A-Za-z-_]/g;
  function Dl(e) {
    if (((e = e.split("=")[0]), (e = e.trim().replace(Il, "")), e.length < 2))
      return "";
    for (; e.length % 4 !== 0; ) e = e + "=";
    return e;
  }
  function ro(e, t) {
    t = t || 1 / 0;
    let r,
      n = e.length,
      o = null,
      i = [];
    for (let s = 0; s < n; ++s) {
      if (((r = e.charCodeAt(s)), r > 55295 && r < 57344)) {
        if (!o) {
          if (r > 56319) {
            (t -= 3) > -1 && i.push(239, 191, 189);
            continue;
          } else if (s + 1 === n) {
            (t -= 3) > -1 && i.push(239, 191, 189);
            continue;
          }
          o = r;
          continue;
        }
        if (r < 56320) {
          (t -= 3) > -1 && i.push(239, 191, 189), (o = r);
          continue;
        }
        r = (((o - 55296) << 10) | (r - 56320)) + 65536;
      } else o && (t -= 3) > -1 && i.push(239, 191, 189);
      if (((o = null), r < 128)) {
        if ((t -= 1) < 0) break;
        i.push(r);
      } else if (r < 2048) {
        if ((t -= 2) < 0) break;
        i.push((r >> 6) | 192, (r & 63) | 128);
      } else if (r < 65536) {
        if ((t -= 3) < 0) break;
        i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (r & 63) | 128);
      } else if (r < 1114112) {
        if ((t -= 4) < 0) break;
        i.push(
          (r >> 18) | 240,
          ((r >> 12) & 63) | 128,
          ((r >> 6) & 63) | 128,
          (r & 63) | 128,
        );
      } else throw new Error("Invalid code point");
    }
    return i;
  }
  function _l(e) {
    let t = [];
    for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r) & 255);
    return t;
  }
  function Nl(e, t) {
    let r,
      n,
      o,
      i = [];
    for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
      (r = e.charCodeAt(s)), (n = r >> 8), (o = r % 256), i.push(o), i.push(n);
    return i;
  }
  function qi(e) {
    return eo.toByteArray(Dl(e));
  }
  function Gr(e, t, r, n) {
    let o;
    for (o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o)
      t[o + r] = e[o];
    return o;
  }
  function Be(e, t) {
    return (
      e instanceof t ||
      (e != null &&
        e.constructor != null &&
        e.constructor.name != null &&
        e.constructor.name === t.name)
    );
  }
  function so(e) {
    return e !== e;
  }
  var Ll = (function () {
    let e = "0123456789abcdef",
      t = new Array(256);
    for (let r = 0; r < 16; ++r) {
      let n = r * 16;
      for (let o = 0; o < 16; ++o) t[n + o] = e[r] + e[o];
    }
    return t;
  })();
  function et(e) {
    return typeof BigInt > "u" ? Bl : e;
  }
  function Bl() {
    throw new Error("BigInt not supported");
  }
});
var w,
  g = kt(() => {
    "use strict";
    w = Oe(Vi());
  });
var xo = re((K) => {
  "use strict";
  g();
  c();
  f();
  d();
  m();
  var X = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    ts = X((e, t) => {
      "use strict";
      t.exports = function () {
        if (
          typeof Symbol != "function" ||
          typeof Object.getOwnPropertySymbols != "function"
        )
          return !1;
        if (typeof Symbol.iterator == "symbol") return !0;
        var r = {},
          n = Symbol("test"),
          o = Object(n);
        if (
          typeof n == "string" ||
          Object.prototype.toString.call(n) !== "[object Symbol]" ||
          Object.prototype.toString.call(o) !== "[object Symbol]"
        )
          return !1;
        var i = 42;
        r[n] = i;
        for (n in r) return !1;
        if (
          (typeof Object.keys == "function" && Object.keys(r).length !== 0) ||
          (typeof Object.getOwnPropertyNames == "function" &&
            Object.getOwnPropertyNames(r).length !== 0)
        )
          return !1;
        var s = Object.getOwnPropertySymbols(r);
        if (
          s.length !== 1 ||
          s[0] !== n ||
          !Object.prototype.propertyIsEnumerable.call(r, n)
        )
          return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
          var a = Object.getOwnPropertyDescriptor(r, n);
          if (a.value !== i || a.enumerable !== !0) return !1;
        }
        return !0;
      };
    }),
    Zr = X((e, t) => {
      "use strict";
      var r = ts();
      t.exports = function () {
        return r() && !!Symbol.toStringTag;
      };
    }),
    jl = X((e, t) => {
      "use strict";
      var r = typeof Symbol < "u" && Symbol,
        n = ts();
      t.exports = function () {
        return typeof r != "function" ||
          typeof Symbol != "function" ||
          typeof r("foo") != "symbol" ||
          typeof Symbol("bar") != "symbol"
          ? !1
          : n();
      };
    }),
    Ul = X((e, t) => {
      "use strict";
      var r = { foo: {} },
        n = Object;
      t.exports = function () {
        return (
          { __proto__: r }.foo === r.foo && !({ __proto__: null } instanceof n)
        );
      };
    }),
    $l = X((e, t) => {
      "use strict";
      var r = "Function.prototype.bind called on incompatible ",
        n = Object.prototype.toString,
        o = Math.max,
        i = "[object Function]",
        s = function (l, p) {
          for (var y = [], h = 0; h < l.length; h += 1) y[h] = l[h];
          for (var T = 0; T < p.length; T += 1) y[T + l.length] = p[T];
          return y;
        },
        a = function (l, p) {
          for (var y = [], h = p || 0, T = 0; h < l.length; h += 1, T += 1)
            y[T] = l[h];
          return y;
        },
        u = function (l, p) {
          for (var y = "", h = 0; h < l.length; h += 1)
            (y += l[h]), h + 1 < l.length && (y += p);
          return y;
        };
      t.exports = function (l) {
        var p = this;
        if (typeof p != "function" || n.apply(p) !== i)
          throw new TypeError(r + p);
        for (
          var y = a(arguments, 1),
            h,
            T = function () {
              if (this instanceof h) {
                var D = p.apply(this, s(y, arguments));
                return Object(D) === D ? D : this;
              }
              return p.apply(l, s(y, arguments));
            },
            C = o(0, p.length - y.length),
            P = [],
            R = 0;
          R < C;
          R++
        )
          P[R] = "$" + R;
        if (
          ((h = b(
            "binder",
            "return function (" +
              u(P, ",") +
              "){ return binder.apply(this,arguments); }",
          )(T)),
          p.prototype)
        ) {
          var I = function () {};
          (I.prototype = p.prototype),
            (h.prototype = new I()),
            (I.prototype = null);
        }
        return h;
      };
    }),
    fo = X((e, t) => {
      "use strict";
      var r = $l();
      t.exports = b.prototype.bind || r;
    }),
    ql = X((e, t) => {
      "use strict";
      var r = fo();
      t.exports = r.call(b.call, Object.prototype.hasOwnProperty);
    }),
    mo = X((e, t) => {
      "use strict";
      var r,
        n = SyntaxError,
        o = b,
        i = TypeError,
        s = function (J) {
          try {
            return o('"use strict"; return (' + J + ").constructor;")();
          } catch (G) {}
        },
        a = Object.getOwnPropertyDescriptor;
      if (a)
        try {
          a({}, "");
        } catch (J) {
          a = null;
        }
      var u = function () {
          throw new i();
        },
        l = a
          ? (function () {
              try {
                return arguments.callee, u;
              } catch (J) {
                try {
                  return a(arguments, "callee").get;
                } catch (G) {
                  return u;
                }
              }
            })()
          : u,
        p = jl()(),
        y = Ul()(),
        h =
          Object.getPrototypeOf ||
          (y
            ? function (J) {
                return J.__proto__;
              }
            : null),
        T = {},
        C = typeof Uint8Array > "u" || !h ? r : h(Uint8Array),
        P = {
          "%AggregateError%": typeof AggregateError > "u" ? r : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
          "%ArrayIteratorPrototype%": p && h ? h([][Symbol.iterator]()) : r,
          "%AsyncFromSyncIteratorPrototype%": r,
          "%AsyncFunction%": T,
          "%AsyncGenerator%": T,
          "%AsyncGeneratorFunction%": T,
          "%AsyncIteratorPrototype%": T,
          "%Atomics%": typeof Atomics > "u" ? r : Atomics,
          "%BigInt%": typeof BigInt > "u" ? r : BigInt,
          "%BigInt64Array%": typeof BigInt64Array > "u" ? r : BigInt64Array,
          "%BigUint64Array%": typeof BigUint64Array > "u" ? r : BigUint64Array,
          "%Boolean%": Boolean,
          "%DataView%": typeof DataView > "u" ? r : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": Error,
          "%eval%": void 0,
          "%EvalError%": EvalError,
          "%Float32Array%": typeof Float32Array > "u" ? r : Float32Array,
          "%Float64Array%": typeof Float64Array > "u" ? r : Float64Array,
          "%FinalizationRegistry%":
            typeof FinalizationRegistry > "u" ? r : FinalizationRegistry,
          "%Function%": o,
          "%GeneratorFunction%": T,
          "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
          "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
          "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": p && h ? h(h([][Symbol.iterator]())) : r,
          "%JSON%": typeof JSON == "object" ? JSON : r,
          "%Map%": typeof Map > "u" ? r : Map,
          "%MapIteratorPrototype%":
            typeof Map > "u" || !p || !h ? r : h(new Map()[Symbol.iterator]()),
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": Object,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": typeof Promise > "u" ? r : Promise,
          "%Proxy%": typeof Proxy > "u" ? r : Proxy,
          "%RangeError%": RangeError,
          "%ReferenceError%": ReferenceError,
          "%Reflect%": typeof Reflect > "u" ? r : Reflect,
          "%RegExp%": RegExp,
          "%Set%": typeof Set > "u" ? r : Set,
          "%SetIteratorPrototype%":
            typeof Set > "u" || !p || !h ? r : h(new Set()[Symbol.iterator]()),
          "%SharedArrayBuffer%":
            typeof SharedArrayBuffer > "u" ? r : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": p && h ? h(""[Symbol.iterator]()) : r,
          "%Symbol%": p ? Symbol : r,
          "%SyntaxError%": n,
          "%ThrowTypeError%": l,
          "%TypedArray%": C,
          "%TypeError%": i,
          "%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array,
          "%Uint8ClampedArray%":
            typeof Uint8ClampedArray > "u" ? r : Uint8ClampedArray,
          "%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array,
          "%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array,
          "%URIError%": URIError,
          "%WeakMap%": typeof WeakMap > "u" ? r : WeakMap,
          "%WeakRef%": typeof E > "u" ? r : E,
          "%WeakSet%": typeof WeakSet > "u" ? r : WeakSet,
        };
      if (h)
        try {
          null.error;
        } catch (J) {
          (R = h(h(J))), (P["%Error.prototype%"] = R);
        }
      var R,
        I = function J(G) {
          var _;
          if (G === "%AsyncFunction%") _ = s("async function () {}");
          else if (G === "%GeneratorFunction%") _ = s("function* () {}");
          else if (G === "%AsyncGeneratorFunction%")
            _ = s("async function* () {}");
          else if (G === "%AsyncGenerator%") {
            var le = J("%AsyncGeneratorFunction%");
            le && (_ = le.prototype);
          } else if (G === "%AsyncIteratorPrototype%") {
            var pe = J("%AsyncGenerator%");
            pe && h && (_ = h(pe.prototype));
          }
          return (P[G] = _), _;
        },
        D = {
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": [
            "AsyncGeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": [
            "GeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"],
        },
        F = fo(),
        k = ql(),
        $ = F.call(b.call, Array.prototype.concat),
        q = F.call(b.apply, Array.prototype.splice),
        he = F.call(b.call, String.prototype.replace),
        W = F.call(b.call, String.prototype.slice),
        ee = F.call(b.call, RegExp.prototype.exec),
        Ce =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        te = /\\(\\)?/g,
        Me = function (J) {
          var G = W(J, 0, 1),
            _ = W(J, -1);
          if (G === "%" && _ !== "%")
            throw new n("invalid intrinsic syntax, expected closing `%`");
          if (_ === "%" && G !== "%")
            throw new n("invalid intrinsic syntax, expected opening `%`");
          var le = [];
          return (
            he(J, Ce, function (pe, Ye, ne, gt) {
              le[le.length] = ne ? he(gt, te, "$1") : Ye || pe;
            }),
            le
          );
        },
        Ze = function (J, G) {
          var _ = J,
            le;
          if ((k(D, _) && ((le = D[_]), (_ = "%" + le[0] + "%")), k(P, _))) {
            var pe = P[_];
            if ((pe === T && (pe = I(_)), typeof pe > "u" && !G))
              throw new i(
                "intrinsic " +
                  J +
                  " exists, but is not available. Please file an issue!",
              );
            return { alias: le, name: _, value: pe };
          }
          throw new n("intrinsic " + J + " does not exist!");
        };
      t.exports = function (J, G) {
        if (typeof J != "string" || J.length === 0)
          throw new i("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof G != "boolean")
          throw new i('"allowMissing" argument must be a boolean');
        if (ee(/^%?[^%]*%?$/, J) === null)
          throw new n(
            "`%` may not be present anywhere but at the beginning and end of the intrinsic name",
          );
        var _ = Me(J),
          le = _.length > 0 ? _[0] : "",
          pe = Ze("%" + le + "%", G),
          Ye = pe.name,
          ne = pe.value,
          gt = !1,
          Xe = pe.alias;
        Xe && ((le = Xe[0]), q(_, $([0, 1], Xe)));
        for (var yt = 1, Ge = !0; yt < _.length; yt += 1) {
          var xe = _[yt],
            ht = W(xe, 0, 1),
            Ot = W(xe, -1);
          if (
            (ht === '"' ||
              ht === "'" ||
              ht === "`" ||
              Ot === '"' ||
              Ot === "'" ||
              Ot === "`") &&
            ht !== Ot
          )
            throw new n("property names with quotes must have matching quotes");
          if (
            ((xe === "constructor" || !Ge) && (gt = !0),
            (le += "." + xe),
            (Ye = "%" + le + "%"),
            k(P, Ye))
          )
            ne = P[Ye];
          else if (ne != null) {
            if (!(xe in ne)) {
              if (!G)
                throw new i(
                  "base intrinsic for " +
                    J +
                    " exists, but the property is not available.",
                );
              return;
            }
            if (a && yt + 1 >= _.length) {
              var Ft = a(ne, xe);
              (Ge = !!Ft),
                Ge && "get" in Ft && !("originalValue" in Ft.get)
                  ? (ne = Ft.get)
                  : (ne = ne[xe]);
            } else (Ge = k(ne, xe)), (ne = ne[xe]);
            Ge && !gt && (P[Ye] = ne);
          }
        }
        return ne;
      };
    }),
    Vl = X((e, t) => {
      "use strict";
      var r = fo(),
        n = mo(),
        o = n("%Function.prototype.apply%"),
        i = n("%Function.prototype.call%"),
        s = n("%Reflect.apply%", !0) || r.call(i, o),
        a = n("%Object.getOwnPropertyDescriptor%", !0),
        u = n("%Object.defineProperty%", !0),
        l = n("%Math.max%");
      if (u)
        try {
          u({}, "a", { value: 1 });
        } catch (y) {
          u = null;
        }
      t.exports = function (y) {
        var h = s(r, i, arguments);
        if (a && u) {
          var T = a(h, "length");
          T.configurable &&
            u(h, "length", {
              value: 1 + l(0, y.length - (arguments.length - 1)),
            });
        }
        return h;
      };
      var p = function () {
        return s(r, o, arguments);
      };
      u ? u(t.exports, "apply", { value: p }) : (t.exports.apply = p);
    }),
    go = X((e, t) => {
      "use strict";
      var r = mo(),
        n = Vl(),
        o = n(r("String.prototype.indexOf"));
      t.exports = function (i, s) {
        var a = r(i, !!s);
        return typeof a == "function" && o(i, ".prototype.") > -1 ? n(a) : a;
      };
    }),
    Kl = X((e, t) => {
      "use strict";
      var r = Zr()(),
        n = go(),
        o = n("Object.prototype.toString"),
        i = function (u) {
          return r && u && typeof u == "object" && Symbol.toStringTag in u
            ? !1
            : o(u) === "[object Arguments]";
        },
        s = function (u) {
          return i(u)
            ? !0
            : u !== null &&
                typeof u == "object" &&
                typeof u.length == "number" &&
                u.length >= 0 &&
                o(u) !== "[object Array]" &&
                o(u.callee) === "[object Function]";
        },
        a = (function () {
          return i(arguments);
        })();
      (i.isLegacyArguments = s), (t.exports = a ? i : s);
    }),
    Gl = X((e, t) => {
      "use strict";
      var r = Object.prototype.toString,
        n = b.prototype.toString,
        o = /^\s*(?:function)?\*/,
        i = Zr()(),
        s = Object.getPrototypeOf,
        a = function () {
          if (!i) return !1;
          try {
            return b("return function*() {}")();
          } catch (l) {}
        },
        u;
      t.exports = function (l) {
        if (typeof l != "function") return !1;
        if (o.test(n.call(l))) return !0;
        if (!i) {
          var p = r.call(l);
          return p === "[object GeneratorFunction]";
        }
        if (!s) return !1;
        if (typeof u > "u") {
          var y = a();
          u = y ? s(y) : !1;
        }
        return s(l) === u;
      };
    }),
    Jl = X((e, t) => {
      "use strict";
      var r = b.prototype.toString,
        n = typeof Reflect == "object" && Reflect !== null && Reflect.apply,
        o,
        i;
      if (typeof n == "function" && typeof Object.defineProperty == "function")
        try {
          (o = Object.defineProperty({}, "length", {
            get: function () {
              throw i;
            },
          })),
            (i = {}),
            n(
              function () {
                throw 42;
              },
              null,
              o,
            );
        } catch (k) {
          k !== i && (n = null);
        }
      else n = null;
      var s = /^\s*class\b/,
        a = function (k) {
          try {
            var $ = r.call(k);
            return s.test($);
          } catch (q) {
            return !1;
          }
        },
        u = function (k) {
          try {
            return a(k) ? !1 : (r.call(k), !0);
          } catch ($) {
            return !1;
          }
        },
        l = Object.prototype.toString,
        p = "[object Object]",
        y = "[object Function]",
        h = "[object GeneratorFunction]",
        T = "[object HTMLAllCollection]",
        C = "[object HTML document.all class]",
        P = "[object HTMLCollection]",
        R = typeof Symbol == "function" && !!Symbol.toStringTag,
        I = !(0 in [,]),
        D = function () {
          return !1;
        };
      typeof document == "object" &&
        ((F = document.all),
        l.call(F) === l.call(document.all) &&
          (D = function (k) {
            if ((I || !k) && (typeof k > "u" || typeof k == "object"))
              try {
                var $ = l.call(k);
                return (
                  ($ === T || $ === C || $ === P || $ === p) && k("") == null
                );
              } catch (q) {}
            return !1;
          }));
      var F;
      t.exports = n
        ? function (k) {
            if (D(k)) return !0;
            if (!k || (typeof k != "function" && typeof k != "object"))
              return !1;
            try {
              n(k, null, o);
            } catch ($) {
              if ($ !== i) return !1;
            }
            return !a(k) && u(k);
          }
        : function (k) {
            if (D(k)) return !0;
            if (!k || (typeof k != "function" && typeof k != "object"))
              return !1;
            if (R) return u(k);
            if (a(k)) return !1;
            var $ = l.call(k);
            return $ !== y && $ !== h && !/^\[object HTML/.test($) ? !1 : u(k);
          };
    }),
    rs = X((e, t) => {
      "use strict";
      var r = Jl(),
        n = Object.prototype.toString,
        o = Object.prototype.hasOwnProperty,
        i = function (l, p, y) {
          for (var h = 0, T = l.length; h < T; h++)
            o.call(l, h) && (y == null ? p(l[h], h, l) : p.call(y, l[h], h, l));
        },
        s = function (l, p, y) {
          for (var h = 0, T = l.length; h < T; h++)
            y == null ? p(l.charAt(h), h, l) : p.call(y, l.charAt(h), h, l);
        },
        a = function (l, p, y) {
          for (var h in l)
            o.call(l, h) && (y == null ? p(l[h], h, l) : p.call(y, l[h], h, l));
        },
        u = function (l, p, y) {
          if (!r(p)) throw new TypeError("iterator must be a function");
          var h;
          arguments.length >= 3 && (h = y),
            n.call(l) === "[object Array]"
              ? i(l, p, h)
              : typeof l == "string"
                ? s(l, p, h)
                : a(l, p, h);
        };
      t.exports = u;
    }),
    ns = X((e, t) => {
      "use strict";
      var r = [
          "BigInt64Array",
          "BigUint64Array",
          "Float32Array",
          "Float64Array",
          "Int16Array",
          "Int32Array",
          "Int8Array",
          "Uint16Array",
          "Uint32Array",
          "Uint8Array",
          "Uint8ClampedArray",
        ],
        n = typeof globalThis > "u" ? global : globalThis;
      t.exports = function () {
        for (var o = [], i = 0; i < r.length; i++)
          typeof n[r[i]] == "function" && (o[o.length] = r[i]);
        return o;
      };
    }),
    os = X((e, t) => {
      "use strict";
      var r = mo(),
        n = r("%Object.getOwnPropertyDescriptor%", !0);
      if (n)
        try {
          n([], "length");
        } catch (o) {
          n = null;
        }
      t.exports = n;
    }),
    is = X((e, t) => {
      "use strict";
      var r = rs(),
        n = ns(),
        o = go(),
        i = o("Object.prototype.toString"),
        s = Zr()(),
        a = os(),
        u = typeof globalThis > "u" ? global : globalThis,
        l = n(),
        p =
          o("Array.prototype.indexOf", !0) ||
          function (P, R) {
            for (var I = 0; I < P.length; I += 1) if (P[I] === R) return I;
            return -1;
          },
        y = o("String.prototype.slice"),
        h = {},
        T = Object.getPrototypeOf;
      s &&
        a &&
        T &&
        r(l, function (P) {
          var R = new u[P]();
          if (Symbol.toStringTag in R) {
            var I = T(R),
              D = a(I, Symbol.toStringTag);
            if (!D) {
              var F = T(I);
              D = a(F, Symbol.toStringTag);
            }
            h[P] = D.get;
          }
        });
      var C = function (P) {
        var R = !1;
        return (
          r(h, function (I, D) {
            if (!R)
              try {
                R = I.call(P) === D;
              } catch (F) {}
          }),
          R
        );
      };
      t.exports = function (P) {
        if (!P || typeof P != "object") return !1;
        if (!s || !(Symbol.toStringTag in P)) {
          var R = y(i(P), 8, -1);
          return p(l, R) > -1;
        }
        return a ? C(P) : !1;
      };
    }),
    Ql = X((e, t) => {
      "use strict";
      var r = rs(),
        n = ns(),
        o = go(),
        i = os(),
        s = o("Object.prototype.toString"),
        a = Zr()(),
        u = typeof globalThis > "u" ? global : globalThis,
        l = n(),
        p = o("String.prototype.slice"),
        y = {},
        h = Object.getPrototypeOf;
      a &&
        i &&
        h &&
        r(l, function (P) {
          if (typeof u[P] == "function") {
            var R = new u[P]();
            if (Symbol.toStringTag in R) {
              var I = h(R),
                D = i(I, Symbol.toStringTag);
              if (!D) {
                var F = h(I);
                D = i(F, Symbol.toStringTag);
              }
              y[P] = D.get;
            }
          }
        });
      var T = function (P) {
          var R = !1;
          return (
            r(y, function (I, D) {
              if (!R)
                try {
                  var F = I.call(P);
                  F === D && (R = F);
                } catch (k) {}
            }),
            R
          );
        },
        C = is();
      t.exports = function (P) {
        return C(P)
          ? !a || !(Symbol.toStringTag in P)
            ? p(s(P), 8, -1)
            : T(P)
          : !1;
      };
    }),
    Wl = X((e) => {
      "use strict";
      var t = Kl(),
        r = Gl(),
        n = Ql(),
        o = is();
      function i(O) {
        return O.call.bind(O);
      }
      var s = typeof BigInt < "u",
        a = typeof Symbol < "u",
        u = i(Object.prototype.toString),
        l = i(Number.prototype.valueOf),
        p = i(String.prototype.valueOf),
        y = i(Boolean.prototype.valueOf);
      s && (h = i(BigInt.prototype.valueOf));
      var h;
      a && (T = i(Symbol.prototype.valueOf));
      var T;
      function C(O, il) {
        if (typeof O != "object") return !1;
        try {
          return il(O), !0;
        } catch (Yd) {
          return !1;
        }
      }
      (e.isArgumentsObject = t),
        (e.isGeneratorFunction = r),
        (e.isTypedArray = o);
      function P(O) {
        return (
          (typeof Promise < "u" && O instanceof Promise) ||
          (O !== null &&
            typeof O == "object" &&
            typeof O.then == "function" &&
            typeof O.catch == "function")
        );
      }
      e.isPromise = P;
      function R(O) {
        return typeof ArrayBuffer < "u" && ArrayBuffer.isView
          ? ArrayBuffer.isView(O)
          : o(O) || yt(O);
      }
      e.isArrayBufferView = R;
      function I(O) {
        return n(O) === "Uint8Array";
      }
      e.isUint8Array = I;
      function D(O) {
        return n(O) === "Uint8ClampedArray";
      }
      e.isUint8ClampedArray = D;
      function F(O) {
        return n(O) === "Uint16Array";
      }
      e.isUint16Array = F;
      function k(O) {
        return n(O) === "Uint32Array";
      }
      e.isUint32Array = k;
      function $(O) {
        return n(O) === "Int8Array";
      }
      e.isInt8Array = $;
      function q(O) {
        return n(O) === "Int16Array";
      }
      e.isInt16Array = q;
      function he(O) {
        return n(O) === "Int32Array";
      }
      e.isInt32Array = he;
      function W(O) {
        return n(O) === "Float32Array";
      }
      e.isFloat32Array = W;
      function ee(O) {
        return n(O) === "Float64Array";
      }
      e.isFloat64Array = ee;
      function Ce(O) {
        return n(O) === "BigInt64Array";
      }
      e.isBigInt64Array = Ce;
      function te(O) {
        return n(O) === "BigUint64Array";
      }
      e.isBigUint64Array = te;
      function Me(O) {
        return u(O) === "[object Map]";
      }
      Me.working = typeof Map < "u" && Me(new Map());
      function Ze(O) {
        return typeof Map > "u" ? !1 : Me.working ? Me(O) : O instanceof Map;
      }
      e.isMap = Ze;
      function J(O) {
        return u(O) === "[object Set]";
      }
      J.working = typeof Set < "u" && J(new Set());
      function G(O) {
        return typeof Set > "u" ? !1 : J.working ? J(O) : O instanceof Set;
      }
      e.isSet = G;
      function _(O) {
        return u(O) === "[object WeakMap]";
      }
      _.working = typeof WeakMap < "u" && _(new WeakMap());
      function le(O) {
        return typeof WeakMap > "u"
          ? !1
          : _.working
            ? _(O)
            : O instanceof WeakMap;
      }
      e.isWeakMap = le;
      function pe(O) {
        return u(O) === "[object WeakSet]";
      }
      pe.working = typeof WeakSet < "u" && pe(new WeakSet());
      function Ye(O) {
        return pe(O);
      }
      e.isWeakSet = Ye;
      function ne(O) {
        return u(O) === "[object ArrayBuffer]";
      }
      ne.working = typeof ArrayBuffer < "u" && ne(new ArrayBuffer());
      function gt(O) {
        return typeof ArrayBuffer > "u"
          ? !1
          : ne.working
            ? ne(O)
            : O instanceof ArrayBuffer;
      }
      e.isArrayBuffer = gt;
      function Xe(O) {
        return u(O) === "[object DataView]";
      }
      Xe.working =
        typeof ArrayBuffer < "u" &&
        typeof DataView < "u" &&
        Xe(new DataView(new ArrayBuffer(1), 0, 1));
      function yt(O) {
        return typeof DataView > "u"
          ? !1
          : Xe.working
            ? Xe(O)
            : O instanceof DataView;
      }
      e.isDataView = yt;
      var Ge = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
      function xe(O) {
        return u(O) === "[object SharedArrayBuffer]";
      }
      function ht(O) {
        return typeof Ge > "u"
          ? !1
          : (typeof xe.working > "u" && (xe.working = xe(new Ge())),
            xe.working ? xe(O) : O instanceof Ge);
      }
      e.isSharedArrayBuffer = ht;
      function Ot(O) {
        return u(O) === "[object AsyncFunction]";
      }
      e.isAsyncFunction = Ot;
      function Ft(O) {
        return u(O) === "[object Map Iterator]";
      }
      e.isMapIterator = Ft;
      function el(O) {
        return u(O) === "[object Set Iterator]";
      }
      e.isSetIterator = el;
      function tl(O) {
        return u(O) === "[object Generator]";
      }
      e.isGeneratorObject = tl;
      function rl(O) {
        return u(O) === "[object WebAssembly.Module]";
      }
      e.isWebAssemblyCompiledModule = rl;
      function bi(O) {
        return C(O, l);
      }
      e.isNumberObject = bi;
      function wi(O) {
        return C(O, p);
      }
      e.isStringObject = wi;
      function Ei(O) {
        return C(O, y);
      }
      e.isBooleanObject = Ei;
      function Pi(O) {
        return s && C(O, h);
      }
      e.isBigIntObject = Pi;
      function vi(O) {
        return a && C(O, T);
      }
      e.isSymbolObject = vi;
      function nl(O) {
        return bi(O) || wi(O) || Ei(O) || Pi(O) || vi(O);
      }
      e.isBoxedPrimitive = nl;
      function ol(O) {
        return typeof Uint8Array < "u" && (gt(O) || ht(O));
      }
      (e.isAnyArrayBuffer = ol),
        ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(
          function (O) {
            Object.defineProperty(e, O, {
              enumerable: !1,
              value: function () {
                throw new Error(O + " is not supported in userland");
              },
            });
          },
        );
    }),
    Hl = X((e, t) => {
      t.exports = function (r) {
        return r instanceof w.Buffer;
      };
    }),
    zl = X((e, t) => {
      typeof Object.create == "function"
        ? (t.exports = function (r, n) {
            n &&
              ((r.super_ = n),
              (r.prototype = Object.create(n.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (t.exports = function (r, n) {
            if (n) {
              r.super_ = n;
              var o = function () {};
              (o.prototype = n.prototype),
                (r.prototype = new o()),
                (r.prototype.constructor = r);
            }
          });
    }),
    ss =
      Object.getOwnPropertyDescriptors ||
      function (e) {
        for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++)
          r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
        return r;
      },
    Zl = /%[sdj%]/g;
  K.format = function (e) {
    if (!Xr(e)) {
      for (var t = [], r = 0; r < arguments.length; r++)
        t.push(rt(arguments[r]));
      return t.join(" ");
    }
    for (
      var r = 1,
        n = arguments,
        o = n.length,
        i = String(e).replace(Zl, function (u) {
          if (u === "%%") return "%";
          if (r >= o) return u;
          switch (u) {
            case "%s":
              return String(n[r++]);
            case "%d":
              return Number(n[r++]);
            case "%j":
              try {
                return JSON.stringify(n[r++]);
              } catch (l) {
                return "[Circular]";
              }
            default:
              return u;
          }
        }),
        s = n[r];
      r < o;
      s = n[++r]
    )
      Yr(s) || !Lt(s) ? (i += " " + s) : (i += " " + rt(s));
    return i;
  };
  K.deprecate = function (e, t) {
    if (typeof x < "u" && x.noDeprecation === !0) return e;
    if (typeof x > "u")
      return function () {
        return K.deprecate(e, t).apply(this, arguments);
      };
    var r = !1;
    function n() {
      if (!r) {
        if (x.throwDeprecation) throw new Error(t);
        x.traceDeprecation ? console.trace(t) : console.error(t), (r = !0);
      }
      return e.apply(this, arguments);
    }
    return n;
  };
  var Jr = {},
    as = /^$/;
  x.env.NODE_DEBUG &&
    ((Qr = x.env.NODE_DEBUG),
    (Qr = Qr.replace(/[|\\{}()[\]^$+?.]/g, "\\$&")
      .replace(/\*/g, ".*")
      .replace(/,/g, "$|^")
      .toUpperCase()),
    (as = new RegExp("^" + Qr + "$", "i")));
  var Qr;
  K.debuglog = function (e) {
    if (((e = e.toUpperCase()), !Jr[e]))
      if (as.test(e)) {
        var t = x.pid;
        Jr[e] = function () {
          var r = K.format.apply(K, arguments);
          console.error("%s %d: %s", e, t, r);
        };
      } else Jr[e] = function () {};
    return Jr[e];
  };
  function rt(e, t) {
    var r = { seen: [], stylize: Xl };
    return (
      arguments.length >= 3 && (r.depth = arguments[2]),
      arguments.length >= 4 && (r.colors = arguments[3]),
      yo(t) ? (r.showHidden = t) : t && K._extend(r, t),
      wt(r.showHidden) && (r.showHidden = !1),
      wt(r.depth) && (r.depth = 2),
      wt(r.colors) && (r.colors = !1),
      wt(r.customInspect) && (r.customInspect = !0),
      r.colors && (r.stylize = Yl),
      Hr(r, e, r.depth)
    );
  }
  K.inspect = rt;
  rt.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39],
  };
  rt.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    regexp: "red",
  };
  function Yl(e, t) {
    var r = rt.styles[t];
    return r
      ? "\x1B[" + rt.colors[r][0] + "m" + e + "\x1B[" + rt.colors[r][1] + "m"
      : e;
  }
  function Xl(e, t) {
    return e;
  }
  function ep(e) {
    var t = {};
    return (
      e.forEach(function (r, n) {
        t[r] = !0;
      }),
      t
    );
  }
  function Hr(e, t, r) {
    if (
      e.customInspect &&
      t &&
      Wr(t.inspect) &&
      t.inspect !== K.inspect &&
      !(t.constructor && t.constructor.prototype === t)
    ) {
      var n = t.inspect(r, e);
      return Xr(n) || (n = Hr(e, n, r)), n;
    }
    var o = tp(e, t);
    if (o) return o;
    var i = Object.keys(t),
      s = ep(i);
    if (
      (e.showHidden && (i = Object.getOwnPropertyNames(t)),
      ur(t) && (i.indexOf("message") >= 0 || i.indexOf("description") >= 0))
    )
      return lo(t);
    if (i.length === 0) {
      if (Wr(t)) {
        var a = t.name ? ": " + t.name : "";
        return e.stylize("[Function" + a + "]", "special");
      }
      if (ar(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
      if (zr(t)) return e.stylize(Date.prototype.toString.call(t), "date");
      if (ur(t)) return lo(t);
    }
    var u = "",
      l = !1,
      p = ["{", "}"];
    if ((us(t) && ((l = !0), (p = ["[", "]"])), Wr(t))) {
      var y = t.name ? ": " + t.name : "";
      u = " [Function" + y + "]";
    }
    if (
      (ar(t) && (u = " " + RegExp.prototype.toString.call(t)),
      zr(t) && (u = " " + Date.prototype.toUTCString.call(t)),
      ur(t) && (u = " " + lo(t)),
      i.length === 0 && (!l || t.length == 0))
    )
      return p[0] + u + p[1];
    if (r < 0)
      return ar(t)
        ? e.stylize(RegExp.prototype.toString.call(t), "regexp")
        : e.stylize("[Object]", "special");
    e.seen.push(t);
    var h;
    return (
      l
        ? (h = rp(e, t, r, s, i))
        : (h = i.map(function (T) {
            return co(e, t, r, s, T, l);
          })),
      e.seen.pop(),
      np(h, u, p)
    );
  }
  function tp(e, t) {
    if (wt(t)) return e.stylize("undefined", "undefined");
    if (Xr(t)) {
      var r =
        "'" +
        JSON.stringify(t)
          .replace(/^"|"$/g, "")
          .replace(/'/g, "\\'")
          .replace(/\\"/g, '"') +
        "'";
      return e.stylize(r, "string");
    }
    if (ls(t)) return e.stylize("" + t, "number");
    if (yo(t)) return e.stylize("" + t, "boolean");
    if (Yr(t)) return e.stylize("null", "null");
  }
  function lo(e) {
    return "[" + Error.prototype.toString.call(e) + "]";
  }
  function rp(e, t, r, n, o) {
    for (var i = [], s = 0, a = t.length; s < a; ++s)
      ps(t, String(s)) ? i.push(co(e, t, r, n, String(s), !0)) : i.push("");
    return (
      o.forEach(function (u) {
        u.match(/^\d+$/) || i.push(co(e, t, r, n, u, !0));
      }),
      i
    );
  }
  function co(e, t, r, n, o, i) {
    var s, a, u;
    if (
      ((u = Object.getOwnPropertyDescriptor(t, o) || { value: t[o] }),
      u.get
        ? u.set
          ? (a = e.stylize("[Getter/Setter]", "special"))
          : (a = e.stylize("[Getter]", "special"))
        : u.set && (a = e.stylize("[Setter]", "special")),
      ps(n, o) || (s = "[" + o + "]"),
      a ||
        (e.seen.indexOf(u.value) < 0
          ? (Yr(r) ? (a = Hr(e, u.value, null)) : (a = Hr(e, u.value, r - 1)),
            a.indexOf(`
`) > -1 &&
              (i
                ? (a = a
                    .split(
                      `
`,
                    )
                    .map(function (l) {
                      return "  " + l;
                    })
                    .join(
                      `
`,
                    )
                    .slice(2))
                : (a =
                    `
` +
                    a
                      .split(
                        `
`,
                      )
                      .map(function (l) {
                        return "   " + l;
                      }).join(`
`))))
          : (a = e.stylize("[Circular]", "special"))),
      wt(s))
    ) {
      if (i && o.match(/^\d+$/)) return a;
      (s = JSON.stringify("" + o)),
        s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
          ? ((s = s.slice(1, -1)), (s = e.stylize(s, "name")))
          : ((s = s
              .replace(/'/g, "\\'")
              .replace(/\\"/g, '"')
              .replace(/(^"|"$)/g, "'")),
            (s = e.stylize(s, "string")));
    }
    return s + ": " + a;
  }
  function np(e, t, r) {
    var n = 0,
      o = e.reduce(function (i, s) {
        return (
          n++,
          s.indexOf(`
`) >= 0 && n++,
          i + s.replace(/\u001b\[\d\d?m/g, "").length + 1
        );
      }, 0);
    return o > 60
      ? r[0] +
          (t === ""
            ? ""
            : t +
              `
 `) +
          " " +
          e.join(`,
  `) +
          " " +
          r[1]
      : r[0] + t + " " + e.join(", ") + " " + r[1];
  }
  K.types = Wl();
  function us(e) {
    return Array.isArray(e);
  }
  K.isArray = us;
  function yo(e) {
    return typeof e == "boolean";
  }
  K.isBoolean = yo;
  function Yr(e) {
    return e === null;
  }
  K.isNull = Yr;
  function op(e) {
    return e == null;
  }
  K.isNullOrUndefined = op;
  function ls(e) {
    return typeof e == "number";
  }
  K.isNumber = ls;
  function Xr(e) {
    return typeof e == "string";
  }
  K.isString = Xr;
  function ip(e) {
    return typeof e == "symbol";
  }
  K.isSymbol = ip;
  function wt(e) {
    return e === void 0;
  }
  K.isUndefined = wt;
  function ar(e) {
    return Lt(e) && ho(e) === "[object RegExp]";
  }
  K.isRegExp = ar;
  K.types.isRegExp = ar;
  function Lt(e) {
    return typeof e == "object" && e !== null;
  }
  K.isObject = Lt;
  function zr(e) {
    return Lt(e) && ho(e) === "[object Date]";
  }
  K.isDate = zr;
  K.types.isDate = zr;
  function ur(e) {
    return Lt(e) && (ho(e) === "[object Error]" || e instanceof Error);
  }
  K.isError = ur;
  K.types.isNativeError = ur;
  function Wr(e) {
    return typeof e == "function";
  }
  K.isFunction = Wr;
  function sp(e) {
    return (
      e === null ||
      typeof e == "boolean" ||
      typeof e == "number" ||
      typeof e == "string" ||
      typeof e == "symbol" ||
      typeof e > "u"
    );
  }
  K.isPrimitive = sp;
  K.isBuffer = Hl();
  function ho(e) {
    return Object.prototype.toString.call(e);
  }
  function po(e) {
    return e < 10 ? "0" + e.toString(10) : e.toString(10);
  }
  var ap = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  function up() {
    var e = new Date(),
      t = [po(e.getHours()), po(e.getMinutes()), po(e.getSeconds())].join(":");
    return [e.getDate(), ap[e.getMonth()], t].join(" ");
  }
  K.log = function () {
    console.log("%s - %s", up(), K.format.apply(K, arguments));
  };
  K.inherits = zl();
  K._extend = function (e, t) {
    if (!t || !Lt(t)) return e;
    for (var r = Object.keys(t), n = r.length; n--; ) e[r[n]] = t[r[n]];
    return e;
  };
  function ps(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  var bt = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
  K.promisify = function (e) {
    if (typeof e != "function")
      throw new TypeError('The "original" argument must be of type Function');
    if (bt && e[bt]) {
      var t = e[bt];
      if (typeof t != "function")
        throw new TypeError(
          'The "util.promisify.custom" argument must be of type Function',
        );
      return (
        Object.defineProperty(t, bt, {
          value: t,
          enumerable: !1,
          writable: !1,
          configurable: !0,
        }),
        t
      );
    }
    function t() {
      for (
        var r,
          n,
          o = new Promise(function (a, u) {
            (r = a), (n = u);
          }),
          i = [],
          s = 0;
        s < arguments.length;
        s++
      )
        i.push(arguments[s]);
      i.push(function (a, u) {
        a ? n(a) : r(u);
      });
      try {
        e.apply(this, i);
      } catch (a) {
        n(a);
      }
      return o;
    }
    return (
      Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
      bt &&
        Object.defineProperty(t, bt, {
          value: t,
          enumerable: !1,
          writable: !1,
          configurable: !0,
        }),
      Object.defineProperties(t, ss(e))
    );
  };
  K.promisify.custom = bt;
  function lp(e, t) {
    if (!e) {
      var r = new Error("Promise was rejected with a falsy value");
      (r.reason = e), (e = r);
    }
    return t(e);
  }
  function pp(e) {
    if (typeof e != "function")
      throw new TypeError('The "original" argument must be of type Function');
    function t() {
      for (var r = [], n = 0; n < arguments.length; n++) r.push(arguments[n]);
      var o = r.pop();
      if (typeof o != "function")
        throw new TypeError("The last argument must be of type Function");
      var i = this,
        s = function () {
          return o.apply(i, arguments);
        };
      e.apply(this, r).then(
        function (a) {
          x.nextTick(s.bind(null, null, a));
        },
        function (a) {
          x.nextTick(lp.bind(null, a, s));
        },
      );
    }
    return (
      Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
      Object.defineProperties(t, ss(e)),
      t
    );
  }
  K.callbackify = pp;
});
var fs = re((jg, cs) => {
  "use strict";
  g();
  c();
  f();
  d();
  m();
  var Bt = 1e3,
    jt = Bt * 60,
    Ut = jt * 60,
    Et = Ut * 24,
    cp = Et * 7,
    fp = Et * 365.25;
  cs.exports = function (e, t) {
    t = t || {};
    var r = typeof e;
    if (r === "string" && e.length > 0) return dp(e);
    if (r === "number" && isFinite(e)) return t.long ? gp(e) : mp(e);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(e),
    );
  };
  function dp(e) {
    if (((e = String(e)), !(e.length > 100))) {
      var t =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          e,
        );
      if (t) {
        var r = parseFloat(t[1]),
          n = (t[2] || "ms").toLowerCase();
        switch (n) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return r * fp;
          case "weeks":
          case "week":
          case "w":
            return r * cp;
          case "days":
          case "day":
          case "d":
            return r * Et;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return r * Ut;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return r * jt;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return r * Bt;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return r;
          default:
            return;
        }
      }
    }
  }
  function mp(e) {
    var t = Math.abs(e);
    return t >= Et
      ? Math.round(e / Et) + "d"
      : t >= Ut
        ? Math.round(e / Ut) + "h"
        : t >= jt
          ? Math.round(e / jt) + "m"
          : t >= Bt
            ? Math.round(e / Bt) + "s"
            : e + "ms";
  }
  function gp(e) {
    var t = Math.abs(e);
    return t >= Et
      ? en(e, t, Et, "day")
      : t >= Ut
        ? en(e, t, Ut, "hour")
        : t >= jt
          ? en(e, t, jt, "minute")
          : t >= Bt
            ? en(e, t, Bt, "second")
            : e + " ms";
  }
  function en(e, t, r, n) {
    var o = t >= r * 1.5;
    return Math.round(e / r) + " " + n + (o ? "s" : "");
  }
});
var bo = re((Gg, ds) => {
  "use strict";
  g();
  c();
  f();
  d();
  m();
  function yp(e) {
    (r.debug = r),
      (r.default = r),
      (r.coerce = u),
      (r.disable = i),
      (r.enable = o),
      (r.enabled = s),
      (r.humanize = fs()),
      (r.destroy = l),
      Object.keys(e).forEach((p) => {
        r[p] = e[p];
      }),
      (r.names = []),
      (r.skips = []),
      (r.formatters = {});
    function t(p) {
      let y = 0;
      for (let h = 0; h < p.length; h++)
        (y = (y << 5) - y + p.charCodeAt(h)), (y |= 0);
      return r.colors[Math.abs(y) % r.colors.length];
    }
    r.selectColor = t;
    function r(p) {
      let y,
        h = null,
        T,
        C;
      function P(...R) {
        if (!P.enabled) return;
        let I = P,
          D = Number(new Date()),
          F = D - (y || D);
        (I.diff = F),
          (I.prev = y),
          (I.curr = D),
          (y = D),
          (R[0] = r.coerce(R[0])),
          typeof R[0] != "string" && R.unshift("%O");
        let k = 0;
        (R[0] = R[0].replace(/%([a-zA-Z%])/g, (q, he) => {
          if (q === "%%") return "%";
          k++;
          let W = r.formatters[he];
          if (typeof W == "function") {
            let ee = R[k];
            (q = W.call(I, ee)), R.splice(k, 1), k--;
          }
          return q;
        })),
          r.formatArgs.call(I, R),
          (I.log || r.log).apply(I, R);
      }
      return (
        (P.namespace = p),
        (P.useColors = r.useColors()),
        (P.color = r.selectColor(p)),
        (P.extend = n),
        (P.destroy = r.destroy),
        Object.defineProperty(P, "enabled", {
          enumerable: !0,
          configurable: !1,
          get: () =>
            h !== null
              ? h
              : (T !== r.namespaces && ((T = r.namespaces), (C = r.enabled(p))),
                C),
          set: (R) => {
            h = R;
          },
        }),
        typeof r.init == "function" && r.init(P),
        P
      );
    }
    function n(p, y) {
      let h = r(this.namespace + (typeof y == "undefined" ? ":" : y) + p);
      return (h.log = this.log), h;
    }
    function o(p) {
      r.save(p), (r.namespaces = p), (r.names = []), (r.skips = []);
      let y,
        h = (typeof p == "string" ? p : "").split(/[\s,]+/),
        T = h.length;
      for (y = 0; y < T; y++)
        h[y] &&
          ((p = h[y].replace(/\*/g, ".*?")),
          p[0] === "-"
            ? r.skips.push(new RegExp("^" + p.slice(1) + "$"))
            : r.names.push(new RegExp("^" + p + "$")));
    }
    function i() {
      let p = [...r.names.map(a), ...r.skips.map(a).map((y) => "-" + y)].join(
        ",",
      );
      return r.enable(""), p;
    }
    function s(p) {
      if (p[p.length - 1] === "*") return !0;
      let y, h;
      for (y = 0, h = r.skips.length; y < h; y++)
        if (r.skips[y].test(p)) return !1;
      for (y = 0, h = r.names.length; y < h; y++)
        if (r.names[y].test(p)) return !0;
      return !1;
    }
    function a(p) {
      return p
        .toString()
        .substring(2, p.toString().length - 2)
        .replace(/\.\*\?$/, "*");
    }
    function u(p) {
      return p instanceof Error ? p.stack || p.message : p;
    }
    function l() {
      console.warn(
        "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
      );
    }
    return r.enable(r.load()), r;
  }
  ds.exports = yp;
});
var ms = re((Re, tn) => {
  "use strict";
  g();
  c();
  f();
  d();
  m();
  Re.formatArgs = xp;
  Re.save = bp;
  Re.load = wp;
  Re.useColors = hp;
  Re.storage = Ep();
  Re.destroy = (() => {
    let e = !1;
    return () => {
      e ||
        ((e = !0),
        console.warn(
          "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
        ));
    };
  })();
  Re.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33",
  ];
  function hp() {
    return typeof window != "undefined" &&
      window.process &&
      (window.process.type === "renderer" || window.process.__nwjs)
      ? !0
      : typeof navigator != "undefined" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
        ? !1
        : (typeof document != "undefined" &&
            document.documentElement &&
            document.documentElement.style &&
            document.documentElement.style.WebkitAppearance) ||
          (typeof window != "undefined" &&
            window.console &&
            (window.console.firebug ||
              (window.console.exception && window.console.table))) ||
          (typeof navigator != "undefined" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
            parseInt(RegExp.$1, 10) >= 31) ||
          (typeof navigator != "undefined" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
  }
  function xp(e) {
    if (
      ((e[0] =
        (this.useColors ? "%c" : "") +
        this.namespace +
        (this.useColors ? " %c" : " ") +
        e[0] +
        (this.useColors ? "%c " : " ") +
        "+" +
        tn.exports.humanize(this.diff)),
      !this.useColors)
    )
      return;
    let t = "color: " + this.color;
    e.splice(1, 0, t, "color: inherit");
    let r = 0,
      n = 0;
    e[0].replace(/%[a-zA-Z%]/g, (o) => {
      o !== "%%" && (r++, o === "%c" && (n = r));
    }),
      e.splice(n, 0, t);
  }
  Re.log = console.debug || console.log || (() => {});
  function bp(e) {
    try {
      e ? Re.storage.setItem("debug", e) : Re.storage.removeItem("debug");
    } catch (t) {}
  }
  function wp() {
    let e;
    try {
      e = Re.storage.getItem("debug");
    } catch (t) {}
    return !e && typeof x != "undefined" && "env" in x && (e = x.env.DEBUG), e;
  }
  function Ep() {
    try {
      return localStorage;
    } catch (e) {}
  }
  tn.exports = bo()(Re);
  var { formatters: Pp } = tn.exports;
  Pp.j = function (e) {
    try {
      return JSON.stringify(e);
    } catch (t) {
      return "[UnexpectedJSONParseError]: " + t.message;
    }
  };
});
var wo = re((rn) => {
  "use strict";
  g();
  c();
  f();
  d();
  m();
  rn.isatty = function () {
    return !1;
  };
  function vp() {
    throw new Error("tty.ReadStream is not implemented");
  }
  rn.ReadStream = vp;
  function Ap() {
    throw new Error("tty.WriteStream is not implemented");
  }
  rn.WriteStream = Ap;
});
var gs = re(() => {
  "use strict";
  g();
  c();
  f();
  d();
  m();
});
var hs = re((gy, ys) => {
  "use strict";
  g();
  c();
  f();
  d();
  m();
  ys.exports = (e, t = x.argv) => {
    let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--",
      n = t.indexOf(r + e),
      o = t.indexOf("--");
    return n !== -1 && (o === -1 || n < o);
  };
});
var ws = re((Ey, bs) => {
  "use strict";
  g();
  c();
  f();
  d();
  m();
  var Tp = gs(),
    xs = wo(),
    Fe = hs(),
    { env: se } = x,
    nt;
  Fe("no-color") || Fe("no-colors") || Fe("color=false") || Fe("color=never")
    ? (nt = 0)
    : (Fe("color") || Fe("colors") || Fe("color=true") || Fe("color=always")) &&
      (nt = 1);
  "FORCE_COLOR" in se &&
    (se.FORCE_COLOR === "true"
      ? (nt = 1)
      : se.FORCE_COLOR === "false"
        ? (nt = 0)
        : (nt =
            se.FORCE_COLOR.length === 0
              ? 1
              : Math.min(parseInt(se.FORCE_COLOR, 10), 3)));
  function Eo(e) {
    return e === 0
      ? !1
      : { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 };
  }
  function Po(e, t) {
    if (nt === 0) return 0;
    if (Fe("color=16m") || Fe("color=full") || Fe("color=truecolor")) return 3;
    if (Fe("color=256")) return 2;
    if (e && !t && nt === void 0) return 0;
    let r = nt || 0;
    if (se.TERM === "dumb") return r;
    if (x.platform === "win32") {
      let n = Tp.release().split(".");
      return Number(n[0]) >= 10 && Number(n[2]) >= 10586
        ? Number(n[2]) >= 14931
          ? 3
          : 2
        : 1;
    }
    if ("CI" in se)
      return [
        "TRAVIS",
        "CIRCLECI",
        "APPVEYOR",
        "GITLAB_CI",
        "GITHUB_ACTIONS",
        "BUILDKITE",
      ].some((n) => n in se) || se.CI_NAME === "codeship"
        ? 1
        : r;
    if ("TEAMCITY_VERSION" in se)
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(se.TEAMCITY_VERSION) ? 1 : 0;
    if (se.COLORTERM === "truecolor") return 3;
    if ("TERM_PROGRAM" in se) {
      let n = parseInt((se.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (se.TERM_PROGRAM) {
        case "iTerm.app":
          return n >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    return /-256(color)?$/i.test(se.TERM)
      ? 2
      : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
            se.TERM,
          ) || "COLORTERM" in se
        ? 1
        : r;
  }
  function Cp(e) {
    let t = Po(e, e && e.isTTY);
    return Eo(t);
  }
  bs.exports = {
    supportsColor: Cp,
    stdout: Eo(Po(!0, xs.isatty(1))),
    stderr: Eo(Po(!0, xs.isatty(2))),
  };
});
var Ps = re((ce, on) => {
  "use strict";
  g();
  c();
  f();
  d();
  m();
  var Mp = wo(),
    nn = xo();
  ce.init = Dp;
  ce.log = Fp;
  ce.formatArgs = Sp;
  ce.save = kp;
  ce.load = Ip;
  ce.useColors = Rp;
  ce.destroy = nn.deprecate(
    () => {},
    "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
  );
  ce.colors = [6, 2, 3, 4, 5, 1];
  try {
    let e = ws();
    e &&
      (e.stderr || e).level >= 2 &&
      (ce.colors = [
        20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63,
        68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128,
        129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168,
        169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200,
        201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221,
      ]);
  } catch (e) {}
  ce.inspectOpts = Object.keys(x.env)
    .filter((e) => /^debug_/i.test(e))
    .reduce((e, t) => {
      let r = t
          .substring(6)
          .toLowerCase()
          .replace(/_([a-z])/g, (o, i) => i.toUpperCase()),
        n = x.env[t];
      return (
        /^(yes|on|true|enabled)$/i.test(n)
          ? (n = !0)
          : /^(no|off|false|disabled)$/i.test(n)
            ? (n = !1)
            : n === "null"
              ? (n = null)
              : (n = Number(n)),
        (e[r] = n),
        e
      );
    }, {});
  function Rp() {
    return "colors" in ce.inspectOpts
      ? !!ce.inspectOpts.colors
      : Mp.isatty(x.stderr.fd);
  }
  function Sp(e) {
    let { namespace: t, useColors: r } = this;
    if (r) {
      let n = this.color,
        o = "\x1B[3" + (n < 8 ? n : "8;5;" + n),
        i = `  ${o};1m${t} \x1B[0m`;
      (e[0] =
        i +
        e[0]
          .split(
            `
`,
          )
          .join(
            `
` + i,
          )),
        e.push(o + "m+" + on.exports.humanize(this.diff) + "\x1B[0m");
    } else e[0] = Op() + t + " " + e[0];
  }
  function Op() {
    return ce.inspectOpts.hideDate ? "" : new Date().toISOString() + " ";
  }
  function Fp(...e) {
    return x.stderr.write(
      nn.format(...e) +
        `
`,
    );
  }
  function kp(e) {
    e ? (x.env.DEBUG = e) : delete x.env.DEBUG;
  }
  function Ip() {
    return x.env.DEBUG;
  }
  function Dp(e) {
    e.inspectOpts = {};
    let t = Object.keys(ce.inspectOpts);
    for (let r = 0; r < t.length; r++)
      e.inspectOpts[t[r]] = ce.inspectOpts[t[r]];
  }
  on.exports = bo()(ce);
  var { formatters: Es } = on.exports;
  Es.o = function (e) {
    return (
      (this.inspectOpts.colors = this.useColors),
      nn
        .inspect(e, this.inspectOpts)
        .split(
          `
`,
        )
        .map((t) => t.trim())
        .join(" ")
    );
  };
  Es.O = function (e) {
    return (
      (this.inspectOpts.colors = this.useColors),
      nn.inspect(e, this.inspectOpts)
    );
  };
});
var vs = re((ky, vo) => {
  "use strict";
  g();
  c();
  f();
  d();
  m();
  typeof x == "undefined" ||
  x.type === "renderer" ||
  x.browser === !0 ||
  x.__nwjs
    ? (vo.exports = ms())
    : (vo.exports = Ps());
});
function Bp() {
  return !1;
}
var jp,
  Up,
  fn,
  To = kt(() => {
    "use strict";
    g();
    c();
    f();
    d();
    m();
    (jp = {}), (Up = { existsSync: Bp, promises: jp }), (fn = Up);
  });
var Co = re((Dh, Ds) => {
  "use strict";
  g();
  c();
  f();
  d();
  m();
  function je(e) {
    if (typeof e != "string")
      throw new TypeError(
        "Path must be a string. Received " + JSON.stringify(e),
      );
  }
  function Is(e, t) {
    for (var r = "", n = 0, o = -1, i = 0, s, a = 0; a <= e.length; ++a) {
      if (a < e.length) s = e.charCodeAt(a);
      else {
        if (s === 47) break;
        s = 47;
      }
      if (s === 47) {
        if (!(o === a - 1 || i === 1))
          if (o !== a - 1 && i === 2) {
            if (
              r.length < 2 ||
              n !== 2 ||
              r.charCodeAt(r.length - 1) !== 46 ||
              r.charCodeAt(r.length - 2) !== 46
            ) {
              if (r.length > 2) {
                var u = r.lastIndexOf("/");
                if (u !== r.length - 1) {
                  u === -1
                    ? ((r = ""), (n = 0))
                    : ((r = r.slice(0, u)),
                      (n = r.length - 1 - r.lastIndexOf("/"))),
                    (o = a),
                    (i = 0);
                  continue;
                }
              } else if (r.length === 2 || r.length === 1) {
                (r = ""), (n = 0), (o = a), (i = 0);
                continue;
              }
            }
            t && (r.length > 0 ? (r += "/..") : (r = ".."), (n = 2));
          } else
            r.length > 0
              ? (r += "/" + e.slice(o + 1, a))
              : (r = e.slice(o + 1, a)),
              (n = a - o - 1);
        (o = a), (i = 0);
      } else s === 46 && i !== -1 ? ++i : (i = -1);
    }
    return r;
  }
  function $p(e, t) {
    var r = t.dir || t.root,
      n = t.base || (t.name || "") + (t.ext || "");
    return r ? (r === t.root ? r + n : r + e + n) : n;
  }
  var Vt = {
    resolve: function () {
      for (
        var e = "", t = !1, r, n = arguments.length - 1;
        n >= -1 && !t;
        n--
      ) {
        var o;
        n >= 0 ? (o = arguments[n]) : (r === void 0 && (r = x.cwd()), (o = r)),
          je(o),
          o.length !== 0 && ((e = o + "/" + e), (t = o.charCodeAt(0) === 47));
      }
      return (
        (e = Is(e, !t)),
        t ? (e.length > 0 ? "/" + e : "/") : e.length > 0 ? e : "."
      );
    },
    normalize: function (e) {
      if ((je(e), e.length === 0)) return ".";
      var t = e.charCodeAt(0) === 47,
        r = e.charCodeAt(e.length - 1) === 47;
      return (
        (e = Is(e, !t)),
        e.length === 0 && !t && (e = "."),
        e.length > 0 && r && (e += "/"),
        t ? "/" + e : e
      );
    },
    isAbsolute: function (e) {
      return je(e), e.length > 0 && e.charCodeAt(0) === 47;
    },
    join: function () {
      if (arguments.length === 0) return ".";
      for (var e, t = 0; t < arguments.length; ++t) {
        var r = arguments[t];
        je(r), r.length > 0 && (e === void 0 ? (e = r) : (e += "/" + r));
      }
      return e === void 0 ? "." : Vt.normalize(e);
    },
    relative: function (e, t) {
      if (
        (je(e),
        je(t),
        e === t || ((e = Vt.resolve(e)), (t = Vt.resolve(t)), e === t))
      )
        return "";
      for (var r = 1; r < e.length && e.charCodeAt(r) === 47; ++r);
      for (
        var n = e.length, o = n - r, i = 1;
        i < t.length && t.charCodeAt(i) === 47;
        ++i
      );
      for (
        var s = t.length, a = s - i, u = o < a ? o : a, l = -1, p = 0;
        p <= u;
        ++p
      ) {
        if (p === u) {
          if (a > u) {
            if (t.charCodeAt(i + p) === 47) return t.slice(i + p + 1);
            if (p === 0) return t.slice(i + p);
          } else
            o > u &&
              (e.charCodeAt(r + p) === 47 ? (l = p) : p === 0 && (l = 0));
          break;
        }
        var y = e.charCodeAt(r + p),
          h = t.charCodeAt(i + p);
        if (y !== h) break;
        y === 47 && (l = p);
      }
      var T = "";
      for (p = r + l + 1; p <= n; ++p)
        (p === n || e.charCodeAt(p) === 47) &&
          (T.length === 0 ? (T += "..") : (T += "/.."));
      return T.length > 0
        ? T + t.slice(i + l)
        : ((i += l), t.charCodeAt(i) === 47 && ++i, t.slice(i));
    },
    _makeLong: function (e) {
      return e;
    },
    dirname: function (e) {
      if ((je(e), e.length === 0)) return ".";
      for (
        var t = e.charCodeAt(0), r = t === 47, n = -1, o = !0, i = e.length - 1;
        i >= 1;
        --i
      )
        if (((t = e.charCodeAt(i)), t === 47)) {
          if (!o) {
            n = i;
            break;
          }
        } else o = !1;
      return n === -1 ? (r ? "/" : ".") : r && n === 1 ? "//" : e.slice(0, n);
    },
    basename: function (e, t) {
      if (t !== void 0 && typeof t != "string")
        throw new TypeError('"ext" argument must be a string');
      je(e);
      var r = 0,
        n = -1,
        o = !0,
        i;
      if (t !== void 0 && t.length > 0 && t.length <= e.length) {
        if (t.length === e.length && t === e) return "";
        var s = t.length - 1,
          a = -1;
        for (i = e.length - 1; i >= 0; --i) {
          var u = e.charCodeAt(i);
          if (u === 47) {
            if (!o) {
              r = i + 1;
              break;
            }
          } else
            a === -1 && ((o = !1), (a = i + 1)),
              s >= 0 &&
                (u === t.charCodeAt(s)
                  ? --s === -1 && (n = i)
                  : ((s = -1), (n = a)));
        }
        return r === n ? (n = a) : n === -1 && (n = e.length), e.slice(r, n);
      } else {
        for (i = e.length - 1; i >= 0; --i)
          if (e.charCodeAt(i) === 47) {
            if (!o) {
              r = i + 1;
              break;
            }
          } else n === -1 && ((o = !1), (n = i + 1));
        return n === -1 ? "" : e.slice(r, n);
      }
    },
    extname: function (e) {
      je(e);
      for (
        var t = -1, r = 0, n = -1, o = !0, i = 0, s = e.length - 1;
        s >= 0;
        --s
      ) {
        var a = e.charCodeAt(s);
        if (a === 47) {
          if (!o) {
            r = s + 1;
            break;
          }
          continue;
        }
        n === -1 && ((o = !1), (n = s + 1)),
          a === 46
            ? t === -1
              ? (t = s)
              : i !== 1 && (i = 1)
            : t !== -1 && (i = -1);
      }
      return t === -1 ||
        n === -1 ||
        i === 0 ||
        (i === 1 && t === n - 1 && t === r + 1)
        ? ""
        : e.slice(t, n);
    },
    format: function (e) {
      if (e === null || typeof e != "object")
        throw new TypeError(
          'The "pathObject" argument must be of type Object. Received type ' +
            typeof e,
        );
      return $p("/", e);
    },
    parse: function (e) {
      je(e);
      var t = { root: "", dir: "", base: "", ext: "", name: "" };
      if (e.length === 0) return t;
      var r = e.charCodeAt(0),
        n = r === 47,
        o;
      n ? ((t.root = "/"), (o = 1)) : (o = 0);
      for (
        var i = -1, s = 0, a = -1, u = !0, l = e.length - 1, p = 0;
        l >= o;
        --l
      ) {
        if (((r = e.charCodeAt(l)), r === 47)) {
          if (!u) {
            s = l + 1;
            break;
          }
          continue;
        }
        a === -1 && ((u = !1), (a = l + 1)),
          r === 46
            ? i === -1
              ? (i = l)
              : p !== 1 && (p = 1)
            : i !== -1 && (p = -1);
      }
      return (
        i === -1 ||
        a === -1 ||
        p === 0 ||
        (p === 1 && i === a - 1 && i === s + 1)
          ? a !== -1 &&
            (s === 0 && n
              ? (t.base = t.name = e.slice(1, a))
              : (t.base = t.name = e.slice(s, a)))
          : (s === 0 && n
              ? ((t.name = e.slice(1, i)), (t.base = e.slice(1, a)))
              : ((t.name = e.slice(s, i)), (t.base = e.slice(s, a))),
            (t.ext = e.slice(i, a))),
        s > 0 ? (t.dir = e.slice(0, s - 1)) : n && (t.dir = "/"),
        t
      );
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null,
  };
  Vt.posix = Vt;
  Ds.exports = Vt;
});
var Ls = re((Xh, Ns) => {
  "use strict";
  g();
  c();
  f();
  d();
  m();
  Ns.exports = (e) => {
    let t = e.match(/^[ \t]*(?=\S)/gm);
    return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
  };
});
var js = re((i0, Bs) => {
  "use strict";
  g();
  c();
  f();
  d();
  m();
  var Vp = Ls();
  Bs.exports = (e) => {
    let t = Vp(e);
    if (t === 0) return e;
    let r = new RegExp(`^[ \\t]{${t}}`, "gm");
    return e.replace(r, "");
  };
});
var $s = re((c0, Mo) => {
  "use strict";
  g();
  c();
  f();
  d();
  m();
  var Kp = Object.prototype.hasOwnProperty,
    be = "~";
  function pr() {}
  Object.create &&
    ((pr.prototype = Object.create(null)), new pr().__proto__ || (be = !1));
  function Gp(e, t, r) {
    (this.fn = e), (this.context = t), (this.once = r || !1);
  }
  function Us(e, t, r, n, o) {
    if (typeof r != "function")
      throw new TypeError("The listener must be a function");
    var i = new Gp(r, n || e, o),
      s = be ? be + t : t;
    return (
      e._events[s]
        ? e._events[s].fn
          ? (e._events[s] = [e._events[s], i])
          : e._events[s].push(i)
        : ((e._events[s] = i), e._eventsCount++),
      e
    );
  }
  function dn(e, t) {
    --e._eventsCount === 0 ? (e._events = new pr()) : delete e._events[t];
  }
  function me() {
    (this._events = new pr()), (this._eventsCount = 0);
  }
  me.prototype.eventNames = function () {
    var e = [],
      t,
      r;
    if (this._eventsCount === 0) return e;
    for (r in (t = this._events)) Kp.call(t, r) && e.push(be ? r.slice(1) : r);
    return Object.getOwnPropertySymbols
      ? e.concat(Object.getOwnPropertySymbols(t))
      : e;
  };
  me.prototype.listeners = function (e) {
    var t = be ? be + e : e,
      r = this._events[t];
    if (!r) return [];
    if (r.fn) return [r.fn];
    for (var n = 0, o = r.length, i = new Array(o); n < o; n++) i[n] = r[n].fn;
    return i;
  };
  me.prototype.listenerCount = function (e) {
    var t = be ? be + e : e,
      r = this._events[t];
    return r ? (r.fn ? 1 : r.length) : 0;
  };
  me.prototype.emit = function (e, t, r, n, o, i) {
    var s = be ? be + e : e;
    if (!this._events[s]) return !1;
    var a = this._events[s],
      u = arguments.length,
      l,
      p;
    if (a.fn) {
      switch ((a.once && this.removeListener(e, a.fn, void 0, !0), u)) {
        case 1:
          return a.fn.call(a.context), !0;
        case 2:
          return a.fn.call(a.context, t), !0;
        case 3:
          return a.fn.call(a.context, t, r), !0;
        case 4:
          return a.fn.call(a.context, t, r, n), !0;
        case 5:
          return a.fn.call(a.context, t, r, n, o), !0;
        case 6:
          return a.fn.call(a.context, t, r, n, o, i), !0;
      }
      for (p = 1, l = new Array(u - 1); p < u; p++) l[p - 1] = arguments[p];
      a.fn.apply(a.context, l);
    } else {
      var y = a.length,
        h;
      for (p = 0; p < y; p++)
        switch ((a[p].once && this.removeListener(e, a[p].fn, void 0, !0), u)) {
          case 1:
            a[p].fn.call(a[p].context);
            break;
          case 2:
            a[p].fn.call(a[p].context, t);
            break;
          case 3:
            a[p].fn.call(a[p].context, t, r);
            break;
          case 4:
            a[p].fn.call(a[p].context, t, r, n);
            break;
          default:
            if (!l)
              for (h = 1, l = new Array(u - 1); h < u; h++)
                l[h - 1] = arguments[h];
            a[p].fn.apply(a[p].context, l);
        }
    }
    return !0;
  };
  me.prototype.on = function (e, t, r) {
    return Us(this, e, t, r, !1);
  };
  me.prototype.once = function (e, t, r) {
    return Us(this, e, t, r, !0);
  };
  me.prototype.removeListener = function (e, t, r, n) {
    var o = be ? be + e : e;
    if (!this._events[o]) return this;
    if (!t) return dn(this, o), this;
    var i = this._events[o];
    if (i.fn)
      i.fn === t && (!n || i.once) && (!r || i.context === r) && dn(this, o);
    else {
      for (var s = 0, a = [], u = i.length; s < u; s++)
        (i[s].fn !== t || (n && !i[s].once) || (r && i[s].context !== r)) &&
          a.push(i[s]);
      a.length ? (this._events[o] = a.length === 1 ? a[0] : a) : dn(this, o);
    }
    return this;
  };
  me.prototype.removeAllListeners = function (e) {
    var t;
    return (
      e
        ? ((t = be ? be + e : e), this._events[t] && dn(this, t))
        : ((this._events = new pr()), (this._eventsCount = 0)),
      this
    );
  };
  me.prototype.off = me.prototype.removeListener;
  me.prototype.addListener = me.prototype.on;
  me.prefixed = be;
  me.EventEmitter = me;
  typeof Mo < "u" && (Mo.exports = me);
});
var Vs = re((v0, qs) => {
  "use strict";
  g();
  c();
  f();
  d();
  m();
  qs.exports = (e, t = 1, r) => {
    if (
      ((r = { indent: " ", includeEmptyLines: !1, ...r }), typeof e != "string")
    )
      throw new TypeError(
        `Expected \`input\` to be a \`string\`, got \`${typeof e}\``,
      );
    if (typeof t != "number")
      throw new TypeError(
        `Expected \`count\` to be a \`number\`, got \`${typeof t}\``,
      );
    if (typeof r.indent != "string")
      throw new TypeError(
        `Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``,
      );
    if (t === 0) return e;
    let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return e.replace(n, r.indent.repeat(t));
  };
});
var Js = re((_0, Gs) => {
  "use strict";
  g();
  c();
  f();
  d();
  m();
  Gs.exports = ({ onlyFirst: e = !1 } = {}) => {
    let t = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
    ].join("|");
    return new RegExp(t, e ? void 0 : "g");
  };
});
var Ws = re(($0, Qs) => {
  "use strict";
  g();
  c();
  f();
  d();
  m();
  var zp = Js();
  Qs.exports = (e) => (typeof e == "string" ? e.replace(zp(), "") : e);
});
var Ys = re(() => {
  "use strict";
  g();
  c();
  f();
  d();
  m();
});
var pi = re((Vk, fu) => {
  "use strict";
  g();
  c();
  f();
  d();
  m();
  fu.exports = (function () {
    function e(t, r, n, o, i) {
      return t < r || n < r ? (t > n ? n + 1 : t + 1) : o === i ? r : r + 1;
    }
    return function (t, r) {
      if (t === r) return 0;
      if (t.length > r.length) {
        var n = t;
        (t = r), (r = n);
      }
      for (
        var o = t.length, i = r.length;
        o > 0 && t.charCodeAt(o - 1) === r.charCodeAt(i - 1);

      )
        o--, i--;
      for (var s = 0; s < o && t.charCodeAt(s) === r.charCodeAt(s); ) s++;
      if (((o -= s), (i -= s), o === 0 || i < 3)) return i;
      var a = 0,
        u,
        l,
        p,
        y,
        h,
        T,
        C,
        P,
        R,
        I,
        D,
        F,
        k = [];
      for (u = 0; u < o; u++) k.push(u + 1), k.push(t.charCodeAt(s + u));
      for (var $ = k.length - 1; a < i - 3; )
        for (
          R = r.charCodeAt(s + (l = a)),
            I = r.charCodeAt(s + (p = a + 1)),
            D = r.charCodeAt(s + (y = a + 2)),
            F = r.charCodeAt(s + (h = a + 3)),
            T = a += 4,
            u = 0;
          u < $;
          u += 2
        )
          (C = k[u]),
            (P = k[u + 1]),
            (l = e(C, l, p, R, P)),
            (p = e(l, p, y, I, P)),
            (y = e(p, y, h, D, P)),
            (T = e(y, h, T, F, P)),
            (k[u] = T),
            (h = y),
            (y = p),
            (p = l),
            (l = C);
      for (; a < i; )
        for (R = r.charCodeAt(s + (l = a)), T = ++a, u = 0; u < $; u += 2)
          (C = k[u]), (k[u] = T = e(C, l, T, R, k[u + 1])), (l = C);
      return T;
    };
  })();
});
g();
c();
f();
d();
m();
var Ji = {};
Vr(Ji, { defineExtension: () => Ki, getExtensionContext: () => Gi });
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
function Ki(e) {
  return typeof e == "function" ? e : (t) => t.$extends(e);
}
g();
c();
f();
d();
m();
function Gi(e) {
  return e;
}
var Wi = {};
Vr(Wi, { validator: () => Qi });
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
function Qi(...e) {
  return (t) => t;
}
var Xi = {};
Vr(Xi, {
  Extensions: () => Hi,
  Public: () => zi,
  Result: () => Zi,
  Utils: () => Yi,
});
g();
c();
f();
d();
m();
var Hi = {};
g();
c();
f();
d();
m();
var zi = {};
g();
c();
f();
d();
m();
var Zi = {};
g();
c();
f();
d();
m();
var Yi = {};
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
var tt = (e, t) => {
  let r = {};
  for (let n of e) {
    let o = n[t];
    r[o] = n;
  }
  return r;
};
function es(e) {
  return e.substring(0, 1).toLowerCase() + e.substring(1);
}
var uo = class {
  constructor(t) {
    this.document = t;
  }
  get compositeNames() {
    var t;
    return (t = this._compositeNames) != null
      ? t
      : (this._compositeNames = new Set(
          this.datamodel.types.map((r) => r.name),
        ));
  }
  get inputTypesByName() {
    var t;
    return (t = this._inputTypesByName) != null
      ? t
      : (this._inputTypesByName = this.buildInputTypesMap());
  }
  get typeAndModelMap() {
    var t;
    return (t = this._typeAndModelMap) != null
      ? t
      : (this._typeAndModelMap = this.buildTypeModelMap());
  }
  get mappingsMap() {
    var t;
    return (t = this._mappingsMap) != null
      ? t
      : (this._mappingsMap = this.buildMappingsMap());
  }
  get outputTypeMap() {
    var t;
    return (t = this._outputTypeMap) != null
      ? t
      : (this._outputTypeMap = this.buildMergedOutputTypeMap());
  }
  get rootFieldMap() {
    var t;
    return (t = this._rootFieldMap) != null
      ? t
      : (this._rootFieldMap = this.buildRootFieldMap());
  }
  get datamodel() {
    return this.document.datamodel;
  }
  get mappings() {
    return this.document.mappings;
  }
  get schema() {
    return this.document.schema;
  }
  get inputObjectTypes() {
    return this.schema.inputObjectTypes;
  }
  get outputObjectTypes() {
    return this.schema.outputObjectTypes;
  }
  isComposite(t) {
    return this.compositeNames.has(t);
  }
  getOtherOperationNames() {
    return [
      Object.values(this.mappings.otherOperations.write),
      Object.values(this.mappings.otherOperations.read),
    ].flat();
  }
  hasEnumInNamespace(t, r) {
    var n;
    return (
      ((n = this.schema.enumTypes[r]) == null
        ? void 0
        : n.find((o) => o.name === t)) !== void 0
    );
  }
  resolveInputObjectType(t) {
    return this.inputTypesByName.get(ao(t.type, t.namespace));
  }
  resolveOutputObjectType(t) {
    var r;
    if (t.location === "outputObjectTypes")
      return this.outputObjectTypes[
        (r = t.namespace) != null ? r : "prisma"
      ].find((n) => n.name === t.type);
  }
  buildModelMap() {
    return tt(this.datamodel.models, "name");
  }
  buildTypeMap() {
    return tt(this.datamodel.types, "name");
  }
  buildTypeModelMap() {
    return { ...this.buildTypeMap(), ...this.buildModelMap() };
  }
  buildMappingsMap() {
    return tt(this.mappings.modelOperations, "model");
  }
  buildMergedOutputTypeMap() {
    return {
      model: tt(this.schema.outputObjectTypes.model, "name"),
      prisma: tt(this.schema.outputObjectTypes.prisma, "name"),
    };
  }
  buildRootFieldMap() {
    return {
      ...tt(this.outputTypeMap.prisma.Query.fields, "name"),
      ...tt(this.outputTypeMap.prisma.Mutation.fields, "name"),
    };
  }
  buildInputTypesMap() {
    let t = new Map();
    for (let r of this.inputObjectTypes.prisma) t.set(ao(r.name, "prisma"), r);
    if (!this.inputObjectTypes.model) return t;
    for (let r of this.inputObjectTypes.model) t.set(ao(r.name, "model"), r);
    return t;
  }
};
function ao(e, t) {
  return t ? `${t}.${e}` : e;
}
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
var ke;
((t) => {
  let e;
  ((F) => (
    (F.findUnique = "findUnique"),
    (F.findUniqueOrThrow = "findUniqueOrThrow"),
    (F.findFirst = "findFirst"),
    (F.findFirstOrThrow = "findFirstOrThrow"),
    (F.findMany = "findMany"),
    (F.create = "create"),
    (F.createMany = "createMany"),
    (F.update = "update"),
    (F.updateMany = "updateMany"),
    (F.upsert = "upsert"),
    (F.delete = "delete"),
    (F.deleteMany = "deleteMany"),
    (F.groupBy = "groupBy"),
    (F.count = "count"),
    (F.aggregate = "aggregate"),
    (F.findRaw = "findRaw"),
    (F.aggregateRaw = "aggregateRaw")
  ))((e = t.ModelAction || (t.ModelAction = {})));
})(ke || (ke = {}));
g();
c();
f();
d();
m();
var an = Oe(vs()),
  _p = 100,
  sn = [],
  As,
  Ts;
typeof x != "undefined" &&
  typeof ((As = x.stderr) == null ? void 0 : As.write) != "function" &&
  (an.default.log = (Ts = console.debug) != null ? Ts : console.log);
function Np(e) {
  let t = (0, an.default)(e),
    r = Object.assign(
      (...n) => (
        (t.log = r.log),
        n.length !== 0 && sn.push([e, ...n]),
        sn.length > _p && sn.shift(),
        t("", ...n)
      ),
      t,
    );
  return r;
}
var Cs = Object.assign(Np, an.default);
function Ms() {
  sn.length = 0;
}
var ve = Cs;
g();
c();
f();
d();
m();
var Ao,
  Rs,
  Ss,
  Os,
  Fs = !0;
typeof x != "undefined" &&
  (({
    FORCE_COLOR: Ao,
    NODE_DISABLE_COLORS: Rs,
    NO_COLOR: Ss,
    TERM: Os,
  } = x.env || {}),
  (Fs = x.stdout && x.stdout.isTTY));
var Lp = {
  enabled:
    !Rs && Ss == null && Os !== "dumb" && ((Ao != null && Ao !== "0") || Fs),
};
function z(e, t) {
  let r = new RegExp(`\\x1b\\[${t}m`, "g"),
    n = `\x1B[${e}m`,
    o = `\x1B[${t}m`;
  return function (i) {
    return !Lp.enabled || i == null
      ? i
      : n + (~("" + i).indexOf(o) ? i.replace(r, o + n) : i) + o;
  };
}
var Ky = z(0, 0),
  ot = z(1, 22),
  un = z(2, 22),
  Gy = z(3, 23),
  ks = z(4, 24),
  Jy = z(7, 27),
  Qy = z(8, 28),
  Wy = z(9, 29),
  Hy = z(30, 39),
  $t = z(31, 39),
  ln = z(32, 39),
  pn = z(33, 39),
  qt = z(34, 39),
  zy = z(35, 39),
  it = z(36, 39),
  Zy = z(37, 39),
  cn = z(90, 39),
  Yy = z(90, 39),
  Xy = z(40, 49),
  eh = z(41, 49),
  th = z(42, 49),
  rh = z(43, 49),
  nh = z(44, 49),
  oh = z(45, 49),
  ih = z(46, 49),
  sh = z(47, 49);
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
var _s = "library";
function lr(e) {
  let t = qp();
  return (
    t ||
    ((e == null ? void 0 : e.config.engineType) === "library"
      ? "library"
      : (e == null ? void 0 : e.config.engineType) === "binary"
        ? "binary"
        : _s)
  );
}
function qp() {
  let e = x.env.PRISMA_CLIENT_ENGINE_TYPE;
  return e === "library" ? "library" : e === "binary" ? "binary" : void 0;
}
g();
c();
f();
d();
m();
var cr = Oe(Co());
function Ro(e) {
  return cr.default.sep === cr.default.posix.sep
    ? e
    : e.split(cr.default.sep).join(cr.default.posix.sep);
}
var Kt = {};
Vr(Kt, {
  error: () => Wp,
  info: () => Qp,
  log: () => Jp,
  query: () => Hp,
  should: () => Ks,
  tags: () => fr,
  warn: () => So,
});
g();
c();
f();
d();
m();
var fr = {
    error: $t("prisma:error"),
    warn: pn("prisma:warn"),
    info: it("prisma:info"),
    query: qt("prisma:query"),
  },
  Ks = { warn: () => !x.env.PRISMA_DISABLE_WARNINGS };
function Jp(...e) {
  console.log(...e);
}
function So(e, ...t) {
  Ks.warn() && console.warn(`${fr.warn} ${e}`, ...t);
}
function Qp(e, ...t) {
  console.info(`${fr.info} ${e}`, ...t);
}
function Wp(e, ...t) {
  console.error(`${fr.error} ${e}`, ...t);
}
function Hp(e, ...t) {
  console.log(`${fr.query} ${e}`, ...t);
}
g();
c();
f();
d();
m();
function Pt(e, t) {
  throw new Error(t);
}
g();
c();
f();
d();
m();
function Oo(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
g();
c();
f();
d();
m();
var Fo = (e, t) => e.reduce((r, n) => ((r[t(n)] = n), r), {});
g();
c();
f();
d();
m();
function Gt(e, t) {
  let r = {};
  for (let n of Object.keys(e)) r[n] = t(e[n], n);
  return r;
}
g();
c();
f();
d();
m();
function ko(e, t) {
  if (e.length === 0) return;
  let r = e[0];
  for (let n = 1; n < e.length; n++) t(r, e[n]) < 0 && (r = e[n]);
  return r;
}
g();
c();
f();
d();
m();
function B(e, t) {
  Object.defineProperty(e, "name", { value: t, configurable: !0 });
}
g();
c();
f();
d();
m();
var Hs = new Set(),
  mn = (e, t, ...r) => {
    Hs.has(e) || (Hs.add(e), So(t, ...r));
  };
g();
c();
f();
d();
m();
var we = class extends Error {
  constructor(t, { code: r, clientVersion: n, meta: o, batchRequestIdx: i }) {
    super(t),
      (this.name = "PrismaClientKnownRequestError"),
      (this.code = r),
      (this.clientVersion = n),
      (this.meta = o),
      Object.defineProperty(this, "batchRequestIdx", {
        value: i,
        enumerable: !1,
        writable: !0,
      });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientKnownRequestError";
  }
};
B(we, "PrismaClientKnownRequestError");
var st = class extends we {
  constructor(t, r) {
    super(t, { code: "P2025", clientVersion: r }),
      (this.name = "NotFoundError");
  }
};
B(st, "NotFoundError");
g();
c();
f();
d();
m();
var fe = class e extends Error {
  constructor(t, r, n) {
    super(t),
      (this.name = "PrismaClientInitializationError"),
      (this.clientVersion = r),
      (this.errorCode = n),
      Error.captureStackTrace(e);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientInitializationError";
  }
};
B(fe, "PrismaClientInitializationError");
g();
c();
f();
d();
m();
var at = class extends Error {
  constructor(t, r) {
    super(t),
      (this.name = "PrismaClientRustPanicError"),
      (this.clientVersion = r);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientRustPanicError";
  }
};
B(at, "PrismaClientRustPanicError");
g();
c();
f();
d();
m();
var Ie = class extends Error {
  constructor(t, { clientVersion: r, batchRequestIdx: n }) {
    super(t),
      (this.name = "PrismaClientUnknownRequestError"),
      (this.clientVersion = r),
      Object.defineProperty(this, "batchRequestIdx", {
        value: n,
        writable: !0,
        enumerable: !1,
      });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientUnknownRequestError";
  }
};
B(Ie, "PrismaClientUnknownRequestError");
g();
c();
f();
d();
m();
var ge = class extends Error {
  constructor(r, { clientVersion: n }) {
    super(r);
    this.name = "PrismaClientValidationError";
    this.clientVersion = n;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientValidationError";
  }
};
B(ge, "PrismaClientValidationError");
g();
c();
f();
d();
m();
var dr = class {
  constructor(t) {
    this._engine = t;
  }
  prometheus(t) {
    return this._engine.metrics({ format: "prometheus", ...t });
  }
  json(t) {
    return this._engine.metrics({ format: "json", ...t });
  }
};
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
function mr(e) {
  let t;
  return {
    get() {
      return t || (t = { value: e() }), t.value;
    },
  };
}
function Zp(e, t) {
  let r = mr(() => Yp(t));
  Object.defineProperty(e, "dmmf", { get: () => r.get() });
}
function Yp(e) {
  return {
    datamodel: { models: Io(e.models), enums: Io(e.enums), types: Io(e.types) },
  };
}
function Io(e) {
  return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
}
g();
c();
f();
d();
m();
var Xp = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"],
  Zs = Xp;
g();
c();
f();
d();
m();
var xw = [
    "JsonNullValueInput",
    "NullableJsonNullValueInput",
    "JsonNullValueFilter",
  ],
  gn = Symbol(),
  Do = new WeakMap(),
  Qe = class {
    constructor(t) {
      t === gn
        ? Do.set(this, `Prisma.${this._getName()}`)
        : Do.set(
            this,
            `new Prisma.${this._getNamespace()}.${this._getName()}()`,
          );
    }
    _getName() {
      return this.constructor.name;
    }
    toString() {
      return Do.get(this);
    }
  },
  gr = class extends Qe {
    _getNamespace() {
      return "NullTypes";
    }
  },
  yr = class extends gr {};
No(yr, "DbNull");
var hr = class extends gr {};
No(hr, "JsonNull");
var xr = class extends gr {};
No(xr, "AnyNull");
var _o = {
  classes: { DbNull: yr, JsonNull: hr, AnyNull: xr },
  instances: { DbNull: new yr(gn), JsonNull: new hr(gn), AnyNull: new xr(gn) },
};
function No(e, t) {
  Object.defineProperty(e, "name", { value: t, configurable: !0 });
}
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
function br(e) {
  return {
    ok: !1,
    error: e,
    map() {
      return br(e);
    },
    flatMap() {
      return br(e);
    },
  };
}
var Lo = class {
    constructor() {
      this.registeredErrors = [];
    }
    consumeError(t) {
      return this.registeredErrors[t];
    }
    registerNewError(t) {
      let r = 0;
      for (; this.registeredErrors[r] !== void 0; ) r++;
      return (this.registeredErrors[r] = { error: t }), r;
    }
  },
  Bo = (e) => {
    let t = new Lo(),
      r = vt(t, e.startTransaction.bind(e)),
      n = {
        errorRegistry: t,
        queryRaw: vt(t, e.queryRaw.bind(e)),
        executeRaw: vt(t, e.executeRaw.bind(e)),
        provider: e.provider,
        startTransaction: async (...o) => (await r(...o)).map((s) => ec(t, s)),
      };
    return (
      e.getConnectionInfo &&
        (n.getConnectionInfo = tc(t, e.getConnectionInfo.bind(e))),
      n
    );
  },
  ec = (e, t) => ({
    provider: t.provider,
    options: t.options,
    queryRaw: vt(e, t.queryRaw.bind(t)),
    executeRaw: vt(e, t.executeRaw.bind(t)),
    commit: vt(e, t.commit.bind(t)),
    rollback: vt(e, t.rollback.bind(t)),
  });
function vt(e, t) {
  return async (...r) => {
    try {
      return await t(...r);
    } catch (n) {
      let o = e.registerNewError(n);
      return br({ kind: "GenericJs", id: o });
    }
  };
}
function tc(e, t) {
  return (...r) => {
    try {
      return t(...r);
    } catch (n) {
      let o = e.registerNewError(n);
      return br({ kind: "GenericJs", id: o });
    }
  };
}
var J3 = Oe(Ys()),
  Xu = Oe($s());
To();
var qr = Oe(Co());
g();
c();
f();
d();
m();
var Se = class e {
  constructor(t, r) {
    if (t.length - 1 !== r.length)
      throw t.length === 0
        ? new TypeError("Expected at least 1 string")
        : new TypeError(
            `Expected ${t.length} strings to have ${t.length - 1} values`,
          );
    let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
    (this.values = new Array(n)),
      (this.strings = new Array(n + 1)),
      (this.strings[0] = t[0]);
    let o = 0,
      i = 0;
    for (; o < r.length; ) {
      let s = r[o++],
        a = t[o];
      if (s instanceof e) {
        this.strings[i] += s.strings[0];
        let u = 0;
        for (; u < s.values.length; )
          (this.values[i++] = s.values[u++]), (this.strings[i] = s.strings[u]);
        this.strings[i] += a;
      } else (this.values[i++] = s), (this.strings[i] = a);
    }
  }
  get text() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < t; ) n += `$${r}${this.strings[r++]}`;
    return n;
  }
  get sql() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < t; ) n += `?${this.strings[r++]}`;
    return n;
  }
  get statement() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < t; ) n += `:${r}${this.strings[r++]}`;
    return n;
  }
  inspect() {
    return { text: this.text, sql: this.sql, values: this.values };
  }
};
function rc(e, t = ",", r = "", n = "") {
  if (e.length === 0)
    throw new TypeError(
      "Expected `join([])` to be called with an array of multiple elements, but got an empty array",
    );
  return new Se([r, ...Array(e.length - 1).fill(t), n], e);
}
function Xs(e) {
  return new Se([e], []);
}
var nc = Xs("");
function ea(e, ...t) {
  return new Se(e, t);
}
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
function wr(e) {
  return {
    getKeys() {
      return Object.keys(e);
    },
    getPropertyValue(t) {
      return e[t];
    },
  };
}
g();
c();
f();
d();
m();
function Ee(e, t) {
  return {
    getKeys() {
      return [e];
    },
    getPropertyValue() {
      return t();
    },
  };
}
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
var Ue = class {
  constructor() {
    this._map = new Map();
  }
  get(t) {
    var r;
    return (r = this._map.get(t)) == null ? void 0 : r.value;
  }
  set(t, r) {
    this._map.set(t, { value: r });
  }
  getOrCreate(t, r) {
    let n = this._map.get(t);
    if (n) return n.value;
    let o = r();
    return this.set(t, o), o;
  }
};
function At(e) {
  let t = new Ue();
  return {
    getKeys() {
      return e.getKeys();
    },
    getPropertyValue(r) {
      return t.getOrCreate(r, () => e.getPropertyValue(r));
    },
    getPropertyDescriptor(r) {
      var n;
      return (n = e.getPropertyDescriptor) == null ? void 0 : n.call(e, r);
    },
  };
}
g();
c();
f();
d();
m();
var na = Oe(xo());
g();
c();
f();
d();
m();
var yn = { enumerable: !0, configurable: !0, writable: !0 };
function hn(e) {
  let t = new Set(e);
  return {
    getOwnPropertyDescriptor: () => yn,
    has: (r, n) => t.has(n),
    set: (r, n, o) => t.add(n) && Reflect.set(r, n, o),
    ownKeys: () => [...t],
  };
}
var ta = Symbol.for("nodejs.util.inspect.custom");
function $e(e, t) {
  let r = oc(t),
    n = new Set(),
    o = new Proxy(e, {
      get(i, s) {
        if (n.has(s)) return i[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : i[s];
      },
      has(i, s) {
        var u, l;
        if (n.has(s)) return !0;
        let a = r.get(s);
        return a
          ? (l = (u = a.has) == null ? void 0 : u.call(a, s)) != null
            ? l
            : !0
          : Reflect.has(i, s);
      },
      ownKeys(i) {
        let s = ra(Reflect.ownKeys(i), r),
          a = ra(Array.from(r.keys()), r);
        return [...new Set([...s, ...a, ...n])];
      },
      set(i, s, a) {
        var l, p;
        let u = r.get(s);
        return ((p =
          (l = u == null ? void 0 : u.getPropertyDescriptor) == null
            ? void 0
            : l.call(u, s)) == null
          ? void 0
          : p.writable) === !1
          ? !1
          : (n.add(s), Reflect.set(i, s, a));
      },
      getOwnPropertyDescriptor(i, s) {
        let a = Reflect.getOwnPropertyDescriptor(i, s);
        if (a && !a.configurable) return a;
        let u = r.get(s);
        return u
          ? u.getPropertyDescriptor
            ? { ...yn, ...(u == null ? void 0 : u.getPropertyDescriptor(s)) }
            : yn
          : a;
      },
      defineProperty(i, s, a) {
        return n.add(s), Reflect.defineProperty(i, s, a);
      },
    });
  return (
    (o[ta] = function (i, s, a = na.inspect) {
      let u = { ...this };
      return delete u[ta], a(u, s);
    }),
    o
  );
}
function oc(e) {
  let t = new Map();
  for (let r of e) {
    let n = r.getKeys();
    for (let o of n) t.set(o, r);
  }
  return t;
}
function ra(e, t) {
  return e.filter((r) => {
    var o, i;
    let n = t.get(r);
    return (i =
      (o = n == null ? void 0 : n.has) == null ? void 0 : o.call(n, r)) != null
      ? i
      : !0;
  });
}
g();
c();
f();
d();
m();
function Er(e) {
  return {
    getKeys() {
      return e;
    },
    has() {
      return !1;
    },
    getPropertyValue() {},
  };
}
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
var Jt = class {
  constructor(t = 0, r) {
    this.context = r;
    this.lines = [];
    this.currentLine = "";
    this.currentIndent = 0;
    this.currentIndent = t;
  }
  write(t) {
    return typeof t == "string" ? (this.currentLine += t) : t.write(this), this;
  }
  writeJoined(t, r) {
    let n = r.length - 1;
    for (let o = 0; o < r.length; o++)
      this.write(r[o]), o !== n && this.write(t);
    return this;
  }
  writeLine(t) {
    return this.write(t).newLine();
  }
  newLine() {
    this.lines.push(this.indentedCurrentLine()),
      (this.currentLine = ""),
      (this.marginSymbol = void 0);
    let t = this.afterNextNewLineCallback;
    return (this.afterNextNewLineCallback = void 0), t == null || t(), this;
  }
  withIndent(t) {
    return this.indent(), t(this), this.unindent(), this;
  }
  afterNextNewline(t) {
    return (this.afterNextNewLineCallback = t), this;
  }
  indent() {
    return this.currentIndent++, this;
  }
  unindent() {
    return this.currentIndent > 0 && this.currentIndent--, this;
  }
  addMarginSymbol(t) {
    return (this.marginSymbol = t), this;
  }
  toString() {
    return this.lines.concat(this.indentedCurrentLine()).join(`
`);
  }
  getCurrentLineLength() {
    return this.currentLine.length;
  }
  indentedCurrentLine() {
    let t = this.currentLine.padStart(
      this.currentLine.length + 2 * this.currentIndent,
    );
    return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
  }
};
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
function Qt(e) {
  return (
    e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
  );
}
function xn(e) {
  return e.toString() !== "Invalid Date";
}
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
var Wt = 9e15,
  ct = 1e9,
  jo = "0123456789abcdef",
  wn =
    "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
  En =
    "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
  Uo = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -Wt,
    maxE: Wt,
    crypto: !1,
  },
  aa,
  We,
  j = !0,
  vn = "[DecimalError] ",
  pt = vn + "Invalid argument: ",
  ua = vn + "Precision limit exceeded",
  la = vn + "crypto unavailable",
  pa = "[object Decimal]",
  ye = Math.floor,
  oe = Math.pow,
  ic = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  sc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  ac = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  ca = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  _e = 1e7,
  L = 7,
  uc = 9007199254740991,
  lc = wn.length - 1,
  $o = En.length - 1,
  S = { toStringTag: pa };
S.absoluteValue = S.abs = function () {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), N(e);
};
S.ceil = function () {
  return N(new this.constructor(this), this.e + 1, 2);
};
S.clampedTo = S.clamp = function (e, t) {
  var r,
    n = this,
    o = n.constructor;
  if (((e = new o(e)), (t = new o(t)), !e.s || !t.s)) return new o(NaN);
  if (e.gt(t)) throw Error(pt + t);
  return (r = n.cmp(e)), r < 0 ? e : n.cmp(t) > 0 ? t : new o(n);
};
S.comparedTo = S.cmp = function (e) {
  var t,
    r,
    n,
    o,
    i = this,
    s = i.d,
    a = (e = new i.constructor(e)).d,
    u = i.s,
    l = e.s;
  if (!s || !a)
    return !u || !l ? NaN : u !== l ? u : s === a ? 0 : !s ^ (u < 0) ? 1 : -1;
  if (!s[0] || !a[0]) return s[0] ? u : a[0] ? -l : 0;
  if (u !== l) return u;
  if (i.e !== e.e) return (i.e > e.e) ^ (u < 0) ? 1 : -1;
  for (n = s.length, o = a.length, t = 0, r = n < o ? n : o; t < r; ++t)
    if (s[t] !== a[t]) return (s[t] > a[t]) ^ (u < 0) ? 1 : -1;
  return n === o ? 0 : (n > o) ^ (u < 0) ? 1 : -1;
};
S.cosine = S.cos = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.d
    ? r.d[0]
      ? ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + L),
        (n.rounding = 1),
        (r = pc(n, ya(n, r))),
        (n.precision = e),
        (n.rounding = t),
        N(We == 2 || We == 3 ? r.neg() : r, e, t, !0))
      : new n(1)
    : new n(NaN);
};
S.cubeRoot = S.cbrt = function () {
  var e,
    t,
    r,
    n,
    o,
    i,
    s,
    a,
    u,
    l,
    p = this,
    y = p.constructor;
  if (!p.isFinite() || p.isZero()) return new y(p);
  for (
    j = !1,
      i = p.s * oe(p.s * p, 1 / 3),
      !i || Math.abs(i) == 1 / 0
        ? ((r = de(p.d)),
          (e = p.e),
          (i = (e - r.length + 1) % 3) && (r += i == 1 || i == -2 ? "0" : "00"),
          (i = oe(r, 1 / 3)),
          (e = ye((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
          i == 1 / 0
            ? (r = "5e" + e)
            : ((r = i.toExponential()),
              (r = r.slice(0, r.indexOf("e") + 1) + e)),
          (n = new y(r)),
          (n.s = p.s))
        : (n = new y(i.toString())),
      s = (e = y.precision) + 3;
    ;

  )
    if (
      ((a = n),
      (u = a.times(a).times(a)),
      (l = u.plus(p)),
      (n = H(l.plus(p).times(a), l.plus(u), s + 2, 1)),
      de(a.d).slice(0, s) === (r = de(n.d)).slice(0, s))
    )
      if (((r = r.slice(s - 3, s + 1)), r == "9999" || (!o && r == "4999"))) {
        if (!o && (N(a, e + 1, 0), a.times(a).times(a).eq(p))) {
          n = a;
          break;
        }
        (s += 4), (o = 1);
      } else {
        (!+r || (!+r.slice(1) && r.charAt(0) == "5")) &&
          (N(n, e + 1, 1), (t = !n.times(n).times(n).eq(p)));
        break;
      }
  return (j = !0), N(n, e, y.rounding, t);
};
S.decimalPlaces = S.dp = function () {
  var e,
    t = this.d,
    r = NaN;
  if (t) {
    if (((e = t.length - 1), (r = (e - ye(this.e / L)) * L), (e = t[e]), e))
      for (; e % 10 == 0; e /= 10) r--;
    r < 0 && (r = 0);
  }
  return r;
};
S.dividedBy = S.div = function (e) {
  return H(this, new this.constructor(e));
};
S.dividedToIntegerBy = S.divToInt = function (e) {
  var t = this,
    r = t.constructor;
  return N(H(t, new r(e), 0, 1, 1), r.precision, r.rounding);
};
S.equals = S.eq = function (e) {
  return this.cmp(e) === 0;
};
S.floor = function () {
  return N(new this.constructor(this), this.e + 1, 3);
};
S.greaterThan = S.gt = function (e) {
  return this.cmp(e) > 0;
};
S.greaterThanOrEqualTo = S.gte = function (e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
S.hyperbolicCosine = S.cosh = function () {
  var e,
    t,
    r,
    n,
    o,
    i = this,
    s = i.constructor,
    a = new s(1);
  if (!i.isFinite()) return new s(i.s ? 1 / 0 : NaN);
  if (i.isZero()) return a;
  (r = s.precision),
    (n = s.rounding),
    (s.precision = r + Math.max(i.e, i.sd()) + 4),
    (s.rounding = 1),
    (o = i.d.length),
    o < 32
      ? ((e = Math.ceil(o / 3)), (t = (1 / Tn(4, e)).toString()))
      : ((e = 16), (t = "2.3283064365386962890625e-10")),
    (i = Ht(s, 1, i.times(t), new s(1), !0));
  for (var u, l = e, p = new s(8); l--; )
    (u = i.times(i)), (i = a.minus(u.times(p.minus(u.times(p)))));
  return N(i, (s.precision = r), (s.rounding = n), !0);
};
S.hyperbolicSine = S.sinh = function () {
  var e,
    t,
    r,
    n,
    o = this,
    i = o.constructor;
  if (!o.isFinite() || o.isZero()) return new i(o);
  if (
    ((t = i.precision),
    (r = i.rounding),
    (i.precision = t + Math.max(o.e, o.sd()) + 4),
    (i.rounding = 1),
    (n = o.d.length),
    n < 3)
  )
    o = Ht(i, 2, o, o, !0);
  else {
    (e = 1.4 * Math.sqrt(n)),
      (e = e > 16 ? 16 : e | 0),
      (o = o.times(1 / Tn(5, e))),
      (o = Ht(i, 2, o, o, !0));
    for (var s, a = new i(5), u = new i(16), l = new i(20); e--; )
      (s = o.times(o)), (o = o.times(a.plus(s.times(u.times(s).plus(l)))));
  }
  return (i.precision = t), (i.rounding = r), N(o, t, r, !0);
};
S.hyperbolicTangent = S.tanh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + 7),
        (n.rounding = 1),
        H(r.sinh(), r.cosh(), (n.precision = e), (n.rounding = t)))
    : new n(r.s);
};
S.inverseCosine = S.acos = function () {
  var e,
    t = this,
    r = t.constructor,
    n = t.abs().cmp(1),
    o = r.precision,
    i = r.rounding;
  return n !== -1
    ? n === 0
      ? t.isNeg()
        ? De(r, o, i)
        : new r(0)
      : new r(NaN)
    : t.isZero()
      ? De(r, o + 4, i).times(0.5)
      : ((r.precision = o + 6),
        (r.rounding = 1),
        (t = t.asin()),
        (e = De(r, o + 4, i).times(0.5)),
        (r.precision = o),
        (r.rounding = i),
        e.minus(t));
};
S.inverseHyperbolicCosine = S.acosh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.lte(1)
    ? new n(r.eq(1) ? 0 : NaN)
    : r.isFinite()
      ? ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4),
        (n.rounding = 1),
        (j = !1),
        (r = r.times(r).minus(1).sqrt().plus(r)),
        (j = !0),
        (n.precision = e),
        (n.rounding = t),
        r.ln())
      : new n(r);
};
S.inverseHyperbolicSine = S.asinh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return !r.isFinite() || r.isZero()
    ? new n(r)
    : ((e = n.precision),
      (t = n.rounding),
      (n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6),
      (n.rounding = 1),
      (j = !1),
      (r = r.times(r).plus(1).sqrt().plus(r)),
      (j = !0),
      (n.precision = e),
      (n.rounding = t),
      r.ln());
};
S.inverseHyperbolicTangent = S.atanh = function () {
  var e,
    t,
    r,
    n,
    o = this,
    i = o.constructor;
  return o.isFinite()
    ? o.e >= 0
      ? new i(o.abs().eq(1) ? o.s / 0 : o.isZero() ? o : NaN)
      : ((e = i.precision),
        (t = i.rounding),
        (n = o.sd()),
        Math.max(n, e) < 2 * -o.e - 1
          ? N(new i(o), e, t, !0)
          : ((i.precision = r = n - o.e),
            (o = H(o.plus(1), new i(1).minus(o), r + e, 1)),
            (i.precision = e + 4),
            (i.rounding = 1),
            (o = o.ln()),
            (i.precision = e),
            (i.rounding = t),
            o.times(0.5)))
    : new i(NaN);
};
S.inverseSine = S.asin = function () {
  var e,
    t,
    r,
    n,
    o = this,
    i = o.constructor;
  return o.isZero()
    ? new i(o)
    : ((t = o.abs().cmp(1)),
      (r = i.precision),
      (n = i.rounding),
      t !== -1
        ? t === 0
          ? ((e = De(i, r + 4, n).times(0.5)), (e.s = o.s), e)
          : new i(NaN)
        : ((i.precision = r + 6),
          (i.rounding = 1),
          (o = o.div(new i(1).minus(o.times(o)).sqrt().plus(1)).atan()),
          (i.precision = r),
          (i.rounding = n),
          o.times(2)));
};
S.inverseTangent = S.atan = function () {
  var e,
    t,
    r,
    n,
    o,
    i,
    s,
    a,
    u,
    l = this,
    p = l.constructor,
    y = p.precision,
    h = p.rounding;
  if (l.isFinite()) {
    if (l.isZero()) return new p(l);
    if (l.abs().eq(1) && y + 4 <= $o)
      return (s = De(p, y + 4, h).times(0.25)), (s.s = l.s), s;
  } else {
    if (!l.s) return new p(NaN);
    if (y + 4 <= $o) return (s = De(p, y + 4, h).times(0.5)), (s.s = l.s), s;
  }
  for (
    p.precision = a = y + 10,
      p.rounding = 1,
      r = Math.min(28, (a / L + 2) | 0),
      e = r;
    e;
    --e
  )
    l = l.div(l.times(l).plus(1).sqrt().plus(1));
  for (
    j = !1, t = Math.ceil(a / L), n = 1, u = l.times(l), s = new p(l), o = l;
    e !== -1;

  )
    if (
      ((o = o.times(u)),
      (i = s.minus(o.div((n += 2)))),
      (o = o.times(u)),
      (s = i.plus(o.div((n += 2)))),
      s.d[t] !== void 0)
    )
      for (e = t; s.d[e] === i.d[e] && e--; );
  return (
    r && (s = s.times(2 << (r - 1))),
    (j = !0),
    N(s, (p.precision = y), (p.rounding = h), !0)
  );
};
S.isFinite = function () {
  return !!this.d;
};
S.isInteger = S.isInt = function () {
  return !!this.d && ye(this.e / L) > this.d.length - 2;
};
S.isNaN = function () {
  return !this.s;
};
S.isNegative = S.isNeg = function () {
  return this.s < 0;
};
S.isPositive = S.isPos = function () {
  return this.s > 0;
};
S.isZero = function () {
  return !!this.d && this.d[0] === 0;
};
S.lessThan = S.lt = function (e) {
  return this.cmp(e) < 0;
};
S.lessThanOrEqualTo = S.lte = function (e) {
  return this.cmp(e) < 1;
};
S.logarithm = S.log = function (e) {
  var t,
    r,
    n,
    o,
    i,
    s,
    a,
    u,
    l = this,
    p = l.constructor,
    y = p.precision,
    h = p.rounding,
    T = 5;
  if (e == null) (e = new p(10)), (t = !0);
  else {
    if (((e = new p(e)), (r = e.d), e.s < 0 || !r || !r[0] || e.eq(1)))
      return new p(NaN);
    t = e.eq(10);
  }
  if (((r = l.d), l.s < 0 || !r || !r[0] || l.eq(1)))
    return new p(r && !r[0] ? -1 / 0 : l.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (t)
    if (r.length > 1) i = !0;
    else {
      for (o = r[0]; o % 10 === 0; ) o /= 10;
      i = o !== 1;
    }
  if (
    ((j = !1),
    (a = y + T),
    (s = lt(l, a)),
    (n = t ? Pn(p, a + 10) : lt(e, a)),
    (u = H(s, n, a, 1)),
    Pr(u.d, (o = y), h))
  )
    do
      if (
        ((a += 10),
        (s = lt(l, a)),
        (n = t ? Pn(p, a + 10) : lt(e, a)),
        (u = H(s, n, a, 1)),
        !i)
      ) {
        +de(u.d).slice(o + 1, o + 15) + 1 == 1e14 && (u = N(u, y + 1, 0));
        break;
      }
    while (Pr(u.d, (o += 10), h));
  return (j = !0), N(u, y, h);
};
S.minus = S.sub = function (e) {
  var t,
    r,
    n,
    o,
    i,
    s,
    a,
    u,
    l,
    p,
    y,
    h,
    T = this,
    C = T.constructor;
  if (((e = new C(e)), !T.d || !e.d))
    return (
      !T.s || !e.s
        ? (e = new C(NaN))
        : T.d
          ? (e.s = -e.s)
          : (e = new C(e.d || T.s !== e.s ? T : NaN)),
      e
    );
  if (T.s != e.s) return (e.s = -e.s), T.plus(e);
  if (
    ((l = T.d), (h = e.d), (a = C.precision), (u = C.rounding), !l[0] || !h[0])
  ) {
    if (h[0]) e.s = -e.s;
    else if (l[0]) e = new C(T);
    else return new C(u === 3 ? -0 : 0);
    return j ? N(e, a, u) : e;
  }
  if (((r = ye(e.e / L)), (p = ye(T.e / L)), (l = l.slice()), (i = p - r), i)) {
    for (
      y = i < 0,
        y
          ? ((t = l), (i = -i), (s = h.length))
          : ((t = h), (r = p), (s = l.length)),
        n = Math.max(Math.ceil(a / L), s) + 2,
        i > n && ((i = n), (t.length = 1)),
        t.reverse(),
        n = i;
      n--;

    )
      t.push(0);
    t.reverse();
  } else {
    for (n = l.length, s = h.length, y = n < s, y && (s = n), n = 0; n < s; n++)
      if (l[n] != h[n]) {
        y = l[n] < h[n];
        break;
      }
    i = 0;
  }
  for (
    y && ((t = l), (l = h), (h = t), (e.s = -e.s)),
      s = l.length,
      n = h.length - s;
    n > 0;
    --n
  )
    l[s++] = 0;
  for (n = h.length; n > i; ) {
    if (l[--n] < h[n]) {
      for (o = n; o && l[--o] === 0; ) l[o] = _e - 1;
      --l[o], (l[n] += _e);
    }
    l[n] -= h[n];
  }
  for (; l[--s] === 0; ) l.pop();
  for (; l[0] === 0; l.shift()) --r;
  return l[0]
    ? ((e.d = l), (e.e = An(l, r)), j ? N(e, a, u) : e)
    : new C(u === 3 ? -0 : 0);
};
S.modulo = S.mod = function (e) {
  var t,
    r = this,
    n = r.constructor;
  return (
    (e = new n(e)),
    !r.d || !e.s || (e.d && !e.d[0])
      ? new n(NaN)
      : !e.d || (r.d && !r.d[0])
        ? N(new n(r), n.precision, n.rounding)
        : ((j = !1),
          n.modulo == 9
            ? ((t = H(r, e.abs(), 0, 3, 1)), (t.s *= e.s))
            : (t = H(r, e, 0, n.modulo, 1)),
          (t = t.times(e)),
          (j = !0),
          r.minus(t))
  );
};
S.naturalExponential = S.exp = function () {
  return qo(this);
};
S.naturalLogarithm = S.ln = function () {
  return lt(this);
};
S.negated = S.neg = function () {
  var e = new this.constructor(this);
  return (e.s = -e.s), N(e);
};
S.plus = S.add = function (e) {
  var t,
    r,
    n,
    o,
    i,
    s,
    a,
    u,
    l,
    p,
    y = this,
    h = y.constructor;
  if (((e = new h(e)), !y.d || !e.d))
    return (
      !y.s || !e.s
        ? (e = new h(NaN))
        : y.d || (e = new h(e.d || y.s === e.s ? y : NaN)),
      e
    );
  if (y.s != e.s) return (e.s = -e.s), y.minus(e);
  if (
    ((l = y.d), (p = e.d), (a = h.precision), (u = h.rounding), !l[0] || !p[0])
  )
    return p[0] || (e = new h(y)), j ? N(e, a, u) : e;
  if (((i = ye(y.e / L)), (n = ye(e.e / L)), (l = l.slice()), (o = i - n), o)) {
    for (
      o < 0
        ? ((r = l), (o = -o), (s = p.length))
        : ((r = p), (n = i), (s = l.length)),
        i = Math.ceil(a / L),
        s = i > s ? i + 1 : s + 1,
        o > s && ((o = s), (r.length = 1)),
        r.reverse();
      o--;

    )
      r.push(0);
    r.reverse();
  }
  for (
    s = l.length,
      o = p.length,
      s - o < 0 && ((o = s), (r = p), (p = l), (l = r)),
      t = 0;
    o;

  )
    (t = ((l[--o] = l[o] + p[o] + t) / _e) | 0), (l[o] %= _e);
  for (t && (l.unshift(t), ++n), s = l.length; l[--s] == 0; ) l.pop();
  return (e.d = l), (e.e = An(l, n)), j ? N(e, a, u) : e;
};
S.precision = S.sd = function (e) {
  var t,
    r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(pt + e);
  return (
    r.d ? ((t = fa(r.d)), e && r.e + 1 > t && (t = r.e + 1)) : (t = NaN), t
  );
};
S.round = function () {
  var e = this,
    t = e.constructor;
  return N(new t(e), e.e + 1, t.rounding);
};
S.sine = S.sin = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + L),
        (n.rounding = 1),
        (r = fc(n, ya(n, r))),
        (n.precision = e),
        (n.rounding = t),
        N(We > 2 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
S.squareRoot = S.sqrt = function () {
  var e,
    t,
    r,
    n,
    o,
    i,
    s = this,
    a = s.d,
    u = s.e,
    l = s.s,
    p = s.constructor;
  if (l !== 1 || !a || !a[0])
    return new p(!l || (l < 0 && (!a || a[0])) ? NaN : a ? s : 1 / 0);
  for (
    j = !1,
      l = Math.sqrt(+s),
      l == 0 || l == 1 / 0
        ? ((t = de(a)),
          (t.length + u) % 2 == 0 && (t += "0"),
          (l = Math.sqrt(t)),
          (u = ye((u + 1) / 2) - (u < 0 || u % 2)),
          l == 1 / 0
            ? (t = "5e" + u)
            : ((t = l.toExponential()),
              (t = t.slice(0, t.indexOf("e") + 1) + u)),
          (n = new p(t)))
        : (n = new p(l.toString())),
      r = (u = p.precision) + 3;
    ;

  )
    if (
      ((i = n),
      (n = i.plus(H(s, i, r + 2, 1)).times(0.5)),
      de(i.d).slice(0, r) === (t = de(n.d)).slice(0, r))
    )
      if (((t = t.slice(r - 3, r + 1)), t == "9999" || (!o && t == "4999"))) {
        if (!o && (N(i, u + 1, 0), i.times(i).eq(s))) {
          n = i;
          break;
        }
        (r += 4), (o = 1);
      } else {
        (!+t || (!+t.slice(1) && t.charAt(0) == "5")) &&
          (N(n, u + 1, 1), (e = !n.times(n).eq(s)));
        break;
      }
  return (j = !0), N(n, u, p.rounding, e);
};
S.tangent = S.tan = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + 10),
        (n.rounding = 1),
        (r = r.sin()),
        (r.s = 1),
        (r = H(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0)),
        (n.precision = e),
        (n.rounding = t),
        N(We == 2 || We == 4 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
S.times = S.mul = function (e) {
  var t,
    r,
    n,
    o,
    i,
    s,
    a,
    u,
    l,
    p = this,
    y = p.constructor,
    h = p.d,
    T = (e = new y(e)).d;
  if (((e.s *= p.s), !h || !h[0] || !T || !T[0]))
    return new y(
      !e.s || (h && !h[0] && !T) || (T && !T[0] && !h)
        ? NaN
        : !h || !T
          ? e.s / 0
          : e.s * 0,
    );
  for (
    r = ye(p.e / L) + ye(e.e / L),
      u = h.length,
      l = T.length,
      u < l && ((i = h), (h = T), (T = i), (s = u), (u = l), (l = s)),
      i = [],
      s = u + l,
      n = s;
    n--;

  )
    i.push(0);
  for (n = l; --n >= 0; ) {
    for (t = 0, o = u + n; o > n; )
      (a = i[o] + T[n] * h[o - n - 1] + t),
        (i[o--] = a % _e | 0),
        (t = (a / _e) | 0);
    i[o] = (i[o] + t) % _e | 0;
  }
  for (; !i[--s]; ) i.pop();
  return (
    t ? ++r : i.shift(),
    (e.d = i),
    (e.e = An(i, r)),
    j ? N(e, y.precision, y.rounding) : e
  );
};
S.toBinary = function (e, t) {
  return Ko(this, 2, e, t);
};
S.toDecimalPlaces = S.toDP = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (Ae(e, 0, ct),
        t === void 0 ? (t = n.rounding) : Ae(t, 0, 8),
        N(r, e + r.e + 1, t))
  );
};
S.toExponential = function (e, t) {
  var r,
    n = this,
    o = n.constructor;
  return (
    e === void 0
      ? (r = qe(n, !0))
      : (Ae(e, 0, ct),
        t === void 0 ? (t = o.rounding) : Ae(t, 0, 8),
        (n = N(new o(n), e + 1, t)),
        (r = qe(n, !0, e + 1))),
    n.isNeg() && !n.isZero() ? "-" + r : r
  );
};
S.toFixed = function (e, t) {
  var r,
    n,
    o = this,
    i = o.constructor;
  return (
    e === void 0
      ? (r = qe(o))
      : (Ae(e, 0, ct),
        t === void 0 ? (t = i.rounding) : Ae(t, 0, 8),
        (n = N(new i(o), e + o.e + 1, t)),
        (r = qe(n, !1, e + n.e + 1))),
    o.isNeg() && !o.isZero() ? "-" + r : r
  );
};
S.toFraction = function (e) {
  var t,
    r,
    n,
    o,
    i,
    s,
    a,
    u,
    l,
    p,
    y,
    h,
    T = this,
    C = T.d,
    P = T.constructor;
  if (!C) return new P(T);
  if (
    ((l = r = new P(1)),
    (n = u = new P(0)),
    (t = new P(n)),
    (i = t.e = fa(C) - T.e - 1),
    (s = i % L),
    (t.d[0] = oe(10, s < 0 ? L + s : s)),
    e == null)
  )
    e = i > 0 ? t : l;
  else {
    if (((a = new P(e)), !a.isInt() || a.lt(l))) throw Error(pt + a);
    e = a.gt(t) ? (i > 0 ? t : l) : a;
  }
  for (
    j = !1,
      a = new P(de(C)),
      p = P.precision,
      P.precision = i = C.length * L * 2;
    (y = H(a, t, 0, 1, 1)), (o = r.plus(y.times(n))), o.cmp(e) != 1;

  )
    (r = n),
      (n = o),
      (o = l),
      (l = u.plus(y.times(o))),
      (u = o),
      (o = t),
      (t = a.minus(y.times(o))),
      (a = o);
  return (
    (o = H(e.minus(r), n, 0, 1, 1)),
    (u = u.plus(o.times(l))),
    (r = r.plus(o.times(n))),
    (u.s = l.s = T.s),
    (h =
      H(l, n, i, 1)
        .minus(T)
        .abs()
        .cmp(H(u, r, i, 1).minus(T).abs()) < 1
        ? [l, n]
        : [u, r]),
    (P.precision = p),
    (j = !0),
    h
  );
};
S.toHexadecimal = S.toHex = function (e, t) {
  return Ko(this, 16, e, t);
};
S.toNearest = function (e, t) {
  var r = this,
    n = r.constructor;
  if (((r = new n(r)), e == null)) {
    if (!r.d) return r;
    (e = new n(1)), (t = n.rounding);
  } else {
    if (((e = new n(e)), t === void 0 ? (t = n.rounding) : Ae(t, 0, 8), !r.d))
      return e.s ? r : e;
    if (!e.d) return e.s && (e.s = r.s), e;
  }
  return (
    e.d[0]
      ? ((j = !1), (r = H(r, e, 0, t, 1).times(e)), (j = !0), N(r))
      : ((e.s = r.s), (r = e)),
    r
  );
};
S.toNumber = function () {
  return +this;
};
S.toOctal = function (e, t) {
  return Ko(this, 8, e, t);
};
S.toPower = S.pow = function (e) {
  var t,
    r,
    n,
    o,
    i,
    s,
    a = this,
    u = a.constructor,
    l = +(e = new u(e));
  if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new u(oe(+a, l));
  if (((a = new u(a)), a.eq(1))) return a;
  if (((n = u.precision), (i = u.rounding), e.eq(1))) return N(a, n, i);
  if (((t = ye(e.e / L)), t >= e.d.length - 1 && (r = l < 0 ? -l : l) <= uc))
    return (o = da(u, a, r, n)), e.s < 0 ? new u(1).div(o) : N(o, n, i);
  if (((s = a.s), s < 0)) {
    if (t < e.d.length - 1) return new u(NaN);
    if ((e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1))
      return (a.s = s), a;
  }
  return (
    (r = oe(+a, l)),
    (t =
      r == 0 || !isFinite(r)
        ? ye(l * (Math.log("0." + de(a.d)) / Math.LN10 + a.e + 1))
        : new u(r + "").e),
    t > u.maxE + 1 || t < u.minE - 1
      ? new u(t > 0 ? s / 0 : 0)
      : ((j = !1),
        (u.rounding = a.s = 1),
        (r = Math.min(12, (t + "").length)),
        (o = qo(e.times(lt(a, n + r)), n)),
        o.d &&
          ((o = N(o, n + 5, 1)),
          Pr(o.d, n, i) &&
            ((t = n + 10),
            (o = N(qo(e.times(lt(a, t + r)), t), t + 5, 1)),
            +de(o.d).slice(n + 1, n + 15) + 1 == 1e14 && (o = N(o, n + 1, 0)))),
        (o.s = s),
        (j = !0),
        (u.rounding = i),
        N(o, n, i))
  );
};
S.toPrecision = function (e, t) {
  var r,
    n = this,
    o = n.constructor;
  return (
    e === void 0
      ? (r = qe(n, n.e <= o.toExpNeg || n.e >= o.toExpPos))
      : (Ae(e, 1, ct),
        t === void 0 ? (t = o.rounding) : Ae(t, 0, 8),
        (n = N(new o(n), e, t)),
        (r = qe(n, e <= n.e || n.e <= o.toExpNeg, e))),
    n.isNeg() && !n.isZero() ? "-" + r : r
  );
};
S.toSignificantDigits = S.toSD = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (Ae(e, 1, ct), t === void 0 ? (t = n.rounding) : Ae(t, 0, 8)),
    N(new n(r), e, t)
  );
};
S.toString = function () {
  var e = this,
    t = e.constructor,
    r = qe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
S.truncated = S.trunc = function () {
  return N(new this.constructor(this), this.e + 1, 1);
};
S.valueOf = S.toJSON = function () {
  var e = this,
    t = e.constructor,
    r = qe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function de(e) {
  var t,
    r,
    n,
    o = e.length - 1,
    i = "",
    s = e[0];
  if (o > 0) {
    for (i += s, t = 1; t < o; t++)
      (n = e[t] + ""), (r = L - n.length), r && (i += ut(r)), (i += n);
    (s = e[t]), (n = s + ""), (r = L - n.length), r && (i += ut(r));
  } else if (s === 0) return "0";
  for (; s % 10 === 0; ) s /= 10;
  return i + s;
}
function Ae(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(pt + e);
}
function Pr(e, t, r, n) {
  var o, i, s, a;
  for (i = e[0]; i >= 10; i /= 10) --t;
  return (
    --t < 0 ? ((t += L), (o = 0)) : ((o = Math.ceil((t + 1) / L)), (t %= L)),
    (i = oe(10, L - t)),
    (a = e[o] % i | 0),
    n == null
      ? t < 3
        ? (t == 0 ? (a = (a / 100) | 0) : t == 1 && (a = (a / 10) | 0),
          (s =
            (r < 4 && a == 99999) ||
            (r > 3 && a == 49999) ||
            a == 5e4 ||
            a == 0))
        : (s =
            (((r < 4 && a + 1 == i) || (r > 3 && a + 1 == i / 2)) &&
              ((e[o + 1] / i / 100) | 0) == oe(10, t - 2) - 1) ||
            ((a == i / 2 || a == 0) && ((e[o + 1] / i / 100) | 0) == 0))
      : t < 4
        ? (t == 0
            ? (a = (a / 1e3) | 0)
            : t == 1
              ? (a = (a / 100) | 0)
              : t == 2 && (a = (a / 10) | 0),
          (s = ((n || r < 4) && a == 9999) || (!n && r > 3 && a == 4999)))
        : (s =
            (((n || r < 4) && a + 1 == i) || (!n && r > 3 && a + 1 == i / 2)) &&
            ((e[o + 1] / i / 1e3) | 0) == oe(10, t - 3) - 1),
    s
  );
}
function bn(e, t, r) {
  for (var n, o = [0], i, s = 0, a = e.length; s < a; ) {
    for (i = o.length; i--; ) o[i] *= t;
    for (o[0] += jo.indexOf(e.charAt(s++)), n = 0; n < o.length; n++)
      o[n] > r - 1 &&
        (o[n + 1] === void 0 && (o[n + 1] = 0),
        (o[n + 1] += (o[n] / r) | 0),
        (o[n] %= r));
  }
  return o.reverse();
}
function pc(e, t) {
  var r, n, o;
  if (t.isZero()) return t;
  (n = t.d.length),
    n < 32
      ? ((r = Math.ceil(n / 3)), (o = (1 / Tn(4, r)).toString()))
      : ((r = 16), (o = "2.3283064365386962890625e-10")),
    (e.precision += r),
    (t = Ht(e, 1, t.times(o), new e(1)));
  for (var i = r; i--; ) {
    var s = t.times(t);
    t = s.times(s).minus(s).times(8).plus(1);
  }
  return (e.precision -= r), t;
}
var H = (function () {
  function e(n, o, i) {
    var s,
      a = 0,
      u = n.length;
    for (n = n.slice(); u--; )
      (s = n[u] * o + a), (n[u] = s % i | 0), (a = (s / i) | 0);
    return a && n.unshift(a), n;
  }
  function t(n, o, i, s) {
    var a, u;
    if (i != s) u = i > s ? 1 : -1;
    else
      for (a = u = 0; a < i; a++)
        if (n[a] != o[a]) {
          u = n[a] > o[a] ? 1 : -1;
          break;
        }
    return u;
  }
  function r(n, o, i, s) {
    for (var a = 0; i--; )
      (n[i] -= a), (a = n[i] < o[i] ? 1 : 0), (n[i] = a * s + n[i] - o[i]);
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, o, i, s, a, u) {
    var l,
      p,
      y,
      h,
      T,
      C,
      P,
      R,
      I,
      D,
      F,
      k,
      $,
      q,
      he,
      W,
      ee,
      Ce,
      te,
      Me,
      Ze = n.constructor,
      J = n.s == o.s ? 1 : -1,
      G = n.d,
      _ = o.d;
    if (!G || !G[0] || !_ || !_[0])
      return new Ze(
        !n.s || !o.s || (G ? _ && G[0] == _[0] : !_)
          ? NaN
          : (G && G[0] == 0) || !_
            ? J * 0
            : J / 0,
      );
    for (
      u
        ? ((T = 1), (p = n.e - o.e))
        : ((u = _e), (T = L), (p = ye(n.e / T) - ye(o.e / T))),
        te = _.length,
        ee = G.length,
        I = new Ze(J),
        D = I.d = [],
        y = 0;
      _[y] == (G[y] || 0);
      y++
    );
    if (
      (_[y] > (G[y] || 0) && p--,
      i == null
        ? ((q = i = Ze.precision), (s = Ze.rounding))
        : a
          ? (q = i + (n.e - o.e) + 1)
          : (q = i),
      q < 0)
    )
      D.push(1), (C = !0);
    else {
      if (((q = (q / T + 2) | 0), (y = 0), te == 1)) {
        for (h = 0, _ = _[0], q++; (y < ee || h) && q--; y++)
          (he = h * u + (G[y] || 0)), (D[y] = (he / _) | 0), (h = he % _ | 0);
        C = h || y < ee;
      } else {
        for (
          h = (u / (_[0] + 1)) | 0,
            h > 1 &&
              ((_ = e(_, h, u)),
              (G = e(G, h, u)),
              (te = _.length),
              (ee = G.length)),
            W = te,
            F = G.slice(0, te),
            k = F.length;
          k < te;

        )
          F[k++] = 0;
        (Me = _.slice()), Me.unshift(0), (Ce = _[0]), _[1] >= u / 2 && ++Ce;
        do
          (h = 0),
            (l = t(_, F, te, k)),
            l < 0
              ? (($ = F[0]),
                te != k && ($ = $ * u + (F[1] || 0)),
                (h = ($ / Ce) | 0),
                h > 1
                  ? (h >= u && (h = u - 1),
                    (P = e(_, h, u)),
                    (R = P.length),
                    (k = F.length),
                    (l = t(P, F, R, k)),
                    l == 1 && (h--, r(P, te < R ? Me : _, R, u)))
                  : (h == 0 && (l = h = 1), (P = _.slice())),
                (R = P.length),
                R < k && P.unshift(0),
                r(F, P, k, u),
                l == -1 &&
                  ((k = F.length),
                  (l = t(_, F, te, k)),
                  l < 1 && (h++, r(F, te < k ? Me : _, k, u))),
                (k = F.length))
              : l === 0 && (h++, (F = [0])),
            (D[y++] = h),
            l && F[0] ? (F[k++] = G[W] || 0) : ((F = [G[W]]), (k = 1));
        while ((W++ < ee || F[0] !== void 0) && q--);
        C = F[0] !== void 0;
      }
      D[0] || D.shift();
    }
    if (T == 1) (I.e = p), (aa = C);
    else {
      for (y = 1, h = D[0]; h >= 10; h /= 10) y++;
      (I.e = y + p * T - 1), N(I, a ? i + I.e + 1 : i, s, C);
    }
    return I;
  };
})();
function N(e, t, r, n) {
  var o,
    i,
    s,
    a,
    u,
    l,
    p,
    y,
    h,
    T = e.constructor;
  e: if (t != null) {
    if (((y = e.d), !y)) return e;
    for (o = 1, a = y[0]; a >= 10; a /= 10) o++;
    if (((i = t - o), i < 0))
      (i += L),
        (s = t),
        (p = y[(h = 0)]),
        (u = (p / oe(10, o - s - 1)) % 10 | 0);
    else if (((h = Math.ceil((i + 1) / L)), (a = y.length), h >= a))
      if (n) {
        for (; a++ <= h; ) y.push(0);
        (p = u = 0), (o = 1), (i %= L), (s = i - L + 1);
      } else break e;
    else {
      for (p = a = y[h], o = 1; a >= 10; a /= 10) o++;
      (i %= L),
        (s = i - L + o),
        (u = s < 0 ? 0 : (p / oe(10, o - s - 1)) % 10 | 0);
    }
    if (
      ((n =
        n ||
        t < 0 ||
        y[h + 1] !== void 0 ||
        (s < 0 ? p : p % oe(10, o - s - 1))),
      (l =
        r < 4
          ? (u || n) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : u > 5 ||
            (u == 5 &&
              (r == 4 ||
                n ||
                (r == 6 &&
                  (i > 0 ? (s > 0 ? p / oe(10, o - s) : 0) : y[h - 1]) % 10 &
                    1) ||
                r == (e.s < 0 ? 8 : 7)))),
      t < 1 || !y[0])
    )
      return (
        (y.length = 0),
        l
          ? ((t -= e.e + 1),
            (y[0] = oe(10, (L - (t % L)) % L)),
            (e.e = -t || 0))
          : (y[0] = e.e = 0),
        e
      );
    if (
      (i == 0
        ? ((y.length = h), (a = 1), h--)
        : ((y.length = h + 1),
          (a = oe(10, L - i)),
          (y[h] = s > 0 ? ((p / oe(10, o - s)) % oe(10, s) | 0) * a : 0)),
      l)
    )
      for (;;)
        if (h == 0) {
          for (i = 1, s = y[0]; s >= 10; s /= 10) i++;
          for (s = y[0] += a, a = 1; s >= 10; s /= 10) a++;
          i != a && (e.e++, y[0] == _e && (y[0] = 1));
          break;
        } else {
          if (((y[h] += a), y[h] != _e)) break;
          (y[h--] = 0), (a = 1);
        }
    for (i = y.length; y[--i] === 0; ) y.pop();
  }
  return (
    j &&
      (e.e > T.maxE
        ? ((e.d = null), (e.e = NaN))
        : e.e < T.minE && ((e.e = 0), (e.d = [0]))),
    e
  );
}
function qe(e, t, r) {
  if (!e.isFinite()) return ga(e);
  var n,
    o = e.e,
    i = de(e.d),
    s = i.length;
  return (
    t
      ? (r && (n = r - s) > 0
          ? (i = i.charAt(0) + "." + i.slice(1) + ut(n))
          : s > 1 && (i = i.charAt(0) + "." + i.slice(1)),
        (i = i + (e.e < 0 ? "e" : "e+") + e.e))
      : o < 0
        ? ((i = "0." + ut(-o - 1) + i), r && (n = r - s) > 0 && (i += ut(n)))
        : o >= s
          ? ((i += ut(o + 1 - s)),
            r && (n = r - o - 1) > 0 && (i = i + "." + ut(n)))
          : ((n = o + 1) < s && (i = i.slice(0, n) + "." + i.slice(n)),
            r && (n = r - s) > 0 && (o + 1 === s && (i += "."), (i += ut(n)))),
    i
  );
}
function An(e, t) {
  var r = e[0];
  for (t *= L; r >= 10; r /= 10) t++;
  return t;
}
function Pn(e, t, r) {
  if (t > lc) throw ((j = !0), r && (e.precision = r), Error(ua));
  return N(new e(wn), t, 1, !0);
}
function De(e, t, r) {
  if (t > $o) throw Error(ua);
  return N(new e(En), t, r, !0);
}
function fa(e) {
  var t = e.length - 1,
    r = t * L + 1;
  if (((t = e[t]), t)) {
    for (; t % 10 == 0; t /= 10) r--;
    for (t = e[0]; t >= 10; t /= 10) r++;
  }
  return r;
}
function ut(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function da(e, t, r, n) {
  var o,
    i = new e(1),
    s = Math.ceil(n / L + 4);
  for (j = !1; ; ) {
    if (
      (r % 2 && ((i = i.times(t)), ia(i.d, s) && (o = !0)),
      (r = ye(r / 2)),
      r === 0)
    ) {
      (r = i.d.length - 1), o && i.d[r] === 0 && ++i.d[r];
      break;
    }
    (t = t.times(t)), ia(t.d, s);
  }
  return (j = !0), i;
}
function oa(e) {
  return e.d[e.d.length - 1] & 1;
}
function ma(e, t, r) {
  for (var n, o = new e(t[0]), i = 0; ++i < t.length; )
    if (((n = new e(t[i])), n.s)) o[r](n) && (o = n);
    else {
      o = n;
      break;
    }
  return o;
}
function qo(e, t) {
  var r,
    n,
    o,
    i,
    s,
    a,
    u,
    l = 0,
    p = 0,
    y = 0,
    h = e.constructor,
    T = h.rounding,
    C = h.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new h(
      e.d
        ? e.d[0]
          ? e.s < 0
            ? 0
            : 1 / 0
          : 1
        : e.s
          ? e.s < 0
            ? 0
            : e
          : NaN,
    );
  for (
    t == null ? ((j = !1), (u = C)) : (u = t), a = new h(0.03125);
    e.e > -2;

  )
    (e = e.times(a)), (y += 5);
  for (
    n = ((Math.log(oe(2, y)) / Math.LN10) * 2 + 5) | 0,
      u += n,
      r = i = s = new h(1),
      h.precision = u;
    ;

  ) {
    if (
      ((i = N(i.times(e), u, 1)),
      (r = r.times(++p)),
      (a = s.plus(H(i, r, u, 1))),
      de(a.d).slice(0, u) === de(s.d).slice(0, u))
    ) {
      for (o = y; o--; ) s = N(s.times(s), u, 1);
      if (t == null)
        if (l < 3 && Pr(s.d, u - n, T, l))
          (h.precision = u += 10), (r = i = a = new h(1)), (p = 0), l++;
        else return N(s, (h.precision = C), T, (j = !0));
      else return (h.precision = C), s;
    }
    s = a;
  }
}
function lt(e, t) {
  var r,
    n,
    o,
    i,
    s,
    a,
    u,
    l,
    p,
    y,
    h,
    T = 1,
    C = 10,
    P = e,
    R = P.d,
    I = P.constructor,
    D = I.rounding,
    F = I.precision;
  if (P.s < 0 || !R || !R[0] || (!P.e && R[0] == 1 && R.length == 1))
    return new I(R && !R[0] ? -1 / 0 : P.s != 1 ? NaN : R ? 0 : P);
  if (
    (t == null ? ((j = !1), (p = F)) : (p = t),
    (I.precision = p += C),
    (r = de(R)),
    (n = r.charAt(0)),
    Math.abs((i = P.e)) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      (P = P.times(e)), (r = de(P.d)), (n = r.charAt(0)), T++;
    (i = P.e),
      n > 1 ? ((P = new I("0." + r)), i++) : (P = new I(n + "." + r.slice(1)));
  } else
    return (
      (l = Pn(I, p + 2, F).times(i + "")),
      (P = lt(new I(n + "." + r.slice(1)), p - C).plus(l)),
      (I.precision = F),
      t == null ? N(P, F, D, (j = !0)) : P
    );
  for (
    y = P,
      u = s = P = H(P.minus(1), P.plus(1), p, 1),
      h = N(P.times(P), p, 1),
      o = 3;
    ;

  ) {
    if (
      ((s = N(s.times(h), p, 1)),
      (l = u.plus(H(s, new I(o), p, 1))),
      de(l.d).slice(0, p) === de(u.d).slice(0, p))
    )
      if (
        ((u = u.times(2)),
        i !== 0 && (u = u.plus(Pn(I, p + 2, F).times(i + ""))),
        (u = H(u, new I(T), p, 1)),
        t == null)
      )
        if (Pr(u.d, p - C, D, a))
          (I.precision = p += C),
            (l = s = P = H(y.minus(1), y.plus(1), p, 1)),
            (h = N(P.times(P), p, 1)),
            (o = a = 1);
        else return N(u, (I.precision = F), D, (j = !0));
      else return (I.precision = F), u;
    (u = l), (o += 2);
  }
}
function ga(e) {
  return String((e.s * e.s) / 0);
}
function Vo(e, t) {
  var r, n, o;
  for (
    (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;
    n++
  );
  for (o = t.length; t.charCodeAt(o - 1) === 48; --o);
  if (((t = t.slice(n, o)), t)) {
    if (
      ((o -= n),
      (e.e = r = r - n - 1),
      (e.d = []),
      (n = (r + 1) % L),
      r < 0 && (n += L),
      n < o)
    ) {
      for (n && e.d.push(+t.slice(0, n)), o -= L; n < o; )
        e.d.push(+t.slice(n, (n += L)));
      (t = t.slice(n)), (n = L - t.length);
    } else n -= o;
    for (; n--; ) t += "0";
    e.d.push(+t),
      j &&
        (e.e > e.constructor.maxE
          ? ((e.d = null), (e.e = NaN))
          : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
  } else (e.e = 0), (e.d = [0]);
  return e;
}
function cc(e, t) {
  var r, n, o, i, s, a, u, l, p;
  if (t.indexOf("_") > -1) {
    if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), ca.test(t))) return Vo(e, t);
  } else if (t === "Infinity" || t === "NaN")
    return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
  if (sc.test(t)) (r = 16), (t = t.toLowerCase());
  else if (ic.test(t)) r = 2;
  else if (ac.test(t)) r = 8;
  else throw Error(pt + t);
  for (
    i = t.search(/p/i),
      i > 0
        ? ((u = +t.slice(i + 1)), (t = t.substring(2, i)))
        : (t = t.slice(2)),
      i = t.indexOf("."),
      s = i >= 0,
      n = e.constructor,
      s &&
        ((t = t.replace(".", "")),
        (a = t.length),
        (i = a - i),
        (o = da(n, new n(r), i, i * 2))),
      l = bn(t, r, _e),
      p = l.length - 1,
      i = p;
    l[i] === 0;
    --i
  )
    l.pop();
  return i < 0
    ? new n(e.s * 0)
    : ((e.e = An(l, p)),
      (e.d = l),
      (j = !1),
      s && (e = H(e, o, a * 4)),
      u && (e = e.times(Math.abs(u) < 54 ? oe(2, u) : Tt.pow(2, u))),
      (j = !0),
      e);
}
function fc(e, t) {
  var r,
    n = t.d.length;
  if (n < 3) return t.isZero() ? t : Ht(e, 2, t, t);
  (r = 1.4 * Math.sqrt(n)),
    (r = r > 16 ? 16 : r | 0),
    (t = t.times(1 / Tn(5, r))),
    (t = Ht(e, 2, t, t));
  for (var o, i = new e(5), s = new e(16), a = new e(20); r--; )
    (o = t.times(t)), (t = t.times(i.plus(o.times(s.times(o).minus(a)))));
  return t;
}
function Ht(e, t, r, n, o) {
  var i,
    s,
    a,
    u,
    l = 1,
    p = e.precision,
    y = Math.ceil(p / L);
  for (j = !1, u = r.times(r), a = new e(n); ; ) {
    if (
      ((s = H(a.times(u), new e(t++ * t++), p, 1)),
      (a = o ? n.plus(s) : n.minus(s)),
      (n = H(s.times(u), new e(t++ * t++), p, 1)),
      (s = a.plus(n)),
      s.d[y] !== void 0)
    ) {
      for (i = y; s.d[i] === a.d[i] && i--; );
      if (i == -1) break;
    }
    (i = a), (a = n), (n = s), (s = i), l++;
  }
  return (j = !0), (s.d.length = y + 1), s;
}
function Tn(e, t) {
  for (var r = e; --t; ) r *= e;
  return r;
}
function ya(e, t) {
  var r,
    n = t.s < 0,
    o = De(e, e.precision, 1),
    i = o.times(0.5);
  if (((t = t.abs()), t.lte(i))) return (We = n ? 4 : 1), t;
  if (((r = t.divToInt(o)), r.isZero())) We = n ? 3 : 2;
  else {
    if (((t = t.minus(r.times(o))), t.lte(i)))
      return (We = oa(r) ? (n ? 2 : 3) : n ? 4 : 1), t;
    We = oa(r) ? (n ? 1 : 4) : n ? 3 : 2;
  }
  return t.minus(o).abs();
}
function Ko(e, t, r, n) {
  var o,
    i,
    s,
    a,
    u,
    l,
    p,
    y,
    h,
    T = e.constructor,
    C = r !== void 0;
  if (
    (C
      ? (Ae(r, 1, ct), n === void 0 ? (n = T.rounding) : Ae(n, 0, 8))
      : ((r = T.precision), (n = T.rounding)),
    !e.isFinite())
  )
    p = ga(e);
  else {
    for (
      p = qe(e),
        s = p.indexOf("."),
        C
          ? ((o = 2), t == 16 ? (r = r * 4 - 3) : t == 8 && (r = r * 3 - 2))
          : (o = t),
        s >= 0 &&
          ((p = p.replace(".", "")),
          (h = new T(1)),
          (h.e = p.length - s),
          (h.d = bn(qe(h), 10, o)),
          (h.e = h.d.length)),
        y = bn(p, 10, o),
        i = u = y.length;
      y[--u] == 0;

    )
      y.pop();
    if (!y[0]) p = C ? "0p+0" : "0";
    else {
      if (
        (s < 0
          ? i--
          : ((e = new T(e)),
            (e.d = y),
            (e.e = i),
            (e = H(e, h, r, n, 0, o)),
            (y = e.d),
            (i = e.e),
            (l = aa)),
        (s = y[r]),
        (a = o / 2),
        (l = l || y[r + 1] !== void 0),
        (l =
          n < 4
            ? (s !== void 0 || l) && (n === 0 || n === (e.s < 0 ? 3 : 2))
            : s > a ||
              (s === a &&
                (n === 4 ||
                  l ||
                  (n === 6 && y[r - 1] & 1) ||
                  n === (e.s < 0 ? 8 : 7)))),
        (y.length = r),
        l)
      )
        for (; ++y[--r] > o - 1; ) (y[r] = 0), r || (++i, y.unshift(1));
      for (u = y.length; !y[u - 1]; --u);
      for (s = 0, p = ""; s < u; s++) p += jo.charAt(y[s]);
      if (C) {
        if (u > 1)
          if (t == 16 || t == 8) {
            for (s = t == 16 ? 4 : 3, --u; u % s; u++) p += "0";
            for (y = bn(p, o, t), u = y.length; !y[u - 1]; --u);
            for (s = 1, p = "1."; s < u; s++) p += jo.charAt(y[s]);
          } else p = p.charAt(0) + "." + p.slice(1);
        p = p + (i < 0 ? "p" : "p+") + i;
      } else if (i < 0) {
        for (; ++i; ) p = "0" + p;
        p = "0." + p;
      } else if (++i > u) for (i -= u; i--; ) p += "0";
      else i < u && (p = p.slice(0, i) + "." + p.slice(i));
    }
    p = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + p;
  }
  return e.s < 0 ? "-" + p : p;
}
function ia(e, t) {
  if (e.length > t) return (e.length = t), !0;
}
function dc(e) {
  return new this(e).abs();
}
function mc(e) {
  return new this(e).acos();
}
function gc(e) {
  return new this(e).acosh();
}
function yc(e, t) {
  return new this(e).plus(t);
}
function hc(e) {
  return new this(e).asin();
}
function xc(e) {
  return new this(e).asinh();
}
function bc(e) {
  return new this(e).atan();
}
function wc(e) {
  return new this(e).atanh();
}
function Ec(e, t) {
  (e = new this(e)), (t = new this(t));
  var r,
    n = this.precision,
    o = this.rounding,
    i = n + 4;
  return (
    !e.s || !t.s
      ? (r = new this(NaN))
      : !e.d && !t.d
        ? ((r = De(this, i, 1).times(t.s > 0 ? 0.25 : 0.75)), (r.s = e.s))
        : !t.d || e.isZero()
          ? ((r = t.s < 0 ? De(this, n, o) : new this(0)), (r.s = e.s))
          : !e.d || t.isZero()
            ? ((r = De(this, i, 1).times(0.5)), (r.s = e.s))
            : t.s < 0
              ? ((this.precision = i),
                (this.rounding = 1),
                (r = this.atan(H(e, t, i, 1))),
                (t = De(this, i, 1)),
                (this.precision = n),
                (this.rounding = o),
                (r = e.s < 0 ? r.minus(t) : r.plus(t)))
              : (r = this.atan(H(e, t, i, 1))),
    r
  );
}
function Pc(e) {
  return new this(e).cbrt();
}
function vc(e) {
  return N((e = new this(e)), e.e + 1, 2);
}
function Ac(e, t, r) {
  return new this(e).clamp(t, r);
}
function Tc(e) {
  if (!e || typeof e != "object") throw Error(vn + "Object expected");
  var t,
    r,
    n,
    o = e.defaults === !0,
    i = [
      "precision",
      1,
      ct,
      "rounding",
      0,
      8,
      "toExpNeg",
      -Wt,
      0,
      "toExpPos",
      0,
      Wt,
      "maxE",
      0,
      Wt,
      "minE",
      -Wt,
      0,
      "modulo",
      0,
      9,
    ];
  for (t = 0; t < i.length; t += 3)
    if (((r = i[t]), o && (this[r] = Uo[r]), (n = e[r]) !== void 0))
      if (ye(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(pt + r + ": " + n);
  if (((r = "crypto"), o && (this[r] = Uo[r]), (n = e[r]) !== void 0))
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (
          typeof crypto != "undefined" &&
          crypto &&
          (crypto.getRandomValues || crypto.randomBytes)
        )
          this[r] = !0;
        else throw Error(la);
      else this[r] = !1;
    else throw Error(pt + r + ": " + n);
  return this;
}
function Cc(e) {
  return new this(e).cos();
}
function Mc(e) {
  return new this(e).cosh();
}
function ha(e) {
  var t, r, n;
  function o(i) {
    var s,
      a,
      u,
      l = this;
    if (!(l instanceof o)) return new o(i);
    if (((l.constructor = o), sa(i))) {
      (l.s = i.s),
        j
          ? !i.d || i.e > o.maxE
            ? ((l.e = NaN), (l.d = null))
            : i.e < o.minE
              ? ((l.e = 0), (l.d = [0]))
              : ((l.e = i.e), (l.d = i.d.slice()))
          : ((l.e = i.e), (l.d = i.d ? i.d.slice() : i.d));
      return;
    }
    if (((u = typeof i), u === "number")) {
      if (i === 0) {
        (l.s = 1 / i < 0 ? -1 : 1), (l.e = 0), (l.d = [0]);
        return;
      }
      if ((i < 0 ? ((i = -i), (l.s = -1)) : (l.s = 1), i === ~~i && i < 1e7)) {
        for (s = 0, a = i; a >= 10; a /= 10) s++;
        j
          ? s > o.maxE
            ? ((l.e = NaN), (l.d = null))
            : s < o.minE
              ? ((l.e = 0), (l.d = [0]))
              : ((l.e = s), (l.d = [i]))
          : ((l.e = s), (l.d = [i]));
        return;
      } else if (i * 0 !== 0) {
        i || (l.s = NaN), (l.e = NaN), (l.d = null);
        return;
      }
      return Vo(l, i.toString());
    } else if (u !== "string") throw Error(pt + i);
    return (
      (a = i.charCodeAt(0)) === 45
        ? ((i = i.slice(1)), (l.s = -1))
        : (a === 43 && (i = i.slice(1)), (l.s = 1)),
      ca.test(i) ? Vo(l, i) : cc(l, i)
    );
  }
  if (
    ((o.prototype = S),
    (o.ROUND_UP = 0),
    (o.ROUND_DOWN = 1),
    (o.ROUND_CEIL = 2),
    (o.ROUND_FLOOR = 3),
    (o.ROUND_HALF_UP = 4),
    (o.ROUND_HALF_DOWN = 5),
    (o.ROUND_HALF_EVEN = 6),
    (o.ROUND_HALF_CEIL = 7),
    (o.ROUND_HALF_FLOOR = 8),
    (o.EUCLID = 9),
    (o.config = o.set = Tc),
    (o.clone = ha),
    (o.isDecimal = sa),
    (o.abs = dc),
    (o.acos = mc),
    (o.acosh = gc),
    (o.add = yc),
    (o.asin = hc),
    (o.asinh = xc),
    (o.atan = bc),
    (o.atanh = wc),
    (o.atan2 = Ec),
    (o.cbrt = Pc),
    (o.ceil = vc),
    (o.clamp = Ac),
    (o.cos = Cc),
    (o.cosh = Mc),
    (o.div = Rc),
    (o.exp = Sc),
    (o.floor = Oc),
    (o.hypot = Fc),
    (o.ln = kc),
    (o.log = Ic),
    (o.log10 = _c),
    (o.log2 = Dc),
    (o.max = Nc),
    (o.min = Lc),
    (o.mod = Bc),
    (o.mul = jc),
    (o.pow = Uc),
    (o.random = $c),
    (o.round = qc),
    (o.sign = Vc),
    (o.sin = Kc),
    (o.sinh = Gc),
    (o.sqrt = Jc),
    (o.sub = Qc),
    (o.sum = Wc),
    (o.tan = Hc),
    (o.tanh = zc),
    (o.trunc = Zc),
    e === void 0 && (e = {}),
    e && e.defaults !== !0)
  )
    for (
      n = [
        "precision",
        "rounding",
        "toExpNeg",
        "toExpPos",
        "maxE",
        "minE",
        "modulo",
        "crypto",
      ],
        t = 0;
      t < n.length;

    )
      e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
  return o.config(e), o;
}
function Rc(e, t) {
  return new this(e).div(t);
}
function Sc(e) {
  return new this(e).exp();
}
function Oc(e) {
  return N((e = new this(e)), e.e + 1, 3);
}
function Fc() {
  var e,
    t,
    r = new this(0);
  for (j = !1, e = 0; e < arguments.length; )
    if (((t = new this(arguments[e++])), t.d)) r.d && (r = r.plus(t.times(t)));
    else {
      if (t.s) return (j = !0), new this(1 / 0);
      r = t;
    }
  return (j = !0), r.sqrt();
}
function sa(e) {
  return e instanceof Tt || (e && e.toStringTag === pa) || !1;
}
function kc(e) {
  return new this(e).ln();
}
function Ic(e, t) {
  return new this(e).log(t);
}
function Dc(e) {
  return new this(e).log(2);
}
function _c(e) {
  return new this(e).log(10);
}
function Nc() {
  return ma(this, arguments, "lt");
}
function Lc() {
  return ma(this, arguments, "gt");
}
function Bc(e, t) {
  return new this(e).mod(t);
}
function jc(e, t) {
  return new this(e).mul(t);
}
function Uc(e, t) {
  return new this(e).pow(t);
}
function $c(e) {
  var t,
    r,
    n,
    o,
    i = 0,
    s = new this(1),
    a = [];
  if (
    (e === void 0 ? (e = this.precision) : Ae(e, 1, ct),
    (n = Math.ceil(e / L)),
    this.crypto)
  )
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(n)); i < n; )
        (o = t[i]),
          o >= 429e7
            ? (t[i] = crypto.getRandomValues(new Uint32Array(1))[0])
            : (a[i++] = o % 1e7);
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes((n *= 4)); i < n; )
        (o =
          t[i] + (t[i + 1] << 8) + (t[i + 2] << 16) + ((t[i + 3] & 127) << 24)),
          o >= 214e7
            ? crypto.randomBytes(4).copy(t, i)
            : (a.push(o % 1e7), (i += 4));
      i = n / 4;
    } else throw Error(la);
  else for (; i < n; ) a[i++] = (Math.random() * 1e7) | 0;
  for (
    n = a[--i],
      e %= L,
      n && e && ((o = oe(10, L - e)), (a[i] = ((n / o) | 0) * o));
    a[i] === 0;
    i--
  )
    a.pop();
  if (i < 0) (r = 0), (a = [0]);
  else {
    for (r = -1; a[0] === 0; r -= L) a.shift();
    for (n = 1, o = a[0]; o >= 10; o /= 10) n++;
    n < L && (r -= L - n);
  }
  return (s.e = r), (s.d = a), s;
}
function qc(e) {
  return N((e = new this(e)), e.e + 1, this.rounding);
}
function Vc(e) {
  return (e = new this(e)), e.d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function Kc(e) {
  return new this(e).sin();
}
function Gc(e) {
  return new this(e).sinh();
}
function Jc(e) {
  return new this(e).sqrt();
}
function Qc(e, t) {
  return new this(e).sub(t);
}
function Wc() {
  var e = 0,
    t = arguments,
    r = new this(t[e]);
  for (j = !1; r.s && ++e < t.length; ) r = r.plus(t[e]);
  return (j = !0), N(r, this.precision, this.rounding);
}
function Hc(e) {
  return new this(e).tan();
}
function zc(e) {
  return new this(e).tanh();
}
function Zc(e) {
  return N((e = new this(e)), e.e + 1, 1);
}
S[Symbol.for("nodejs.util.inspect.custom")] = S.toString;
S[Symbol.toStringTag] = "Decimal";
var Tt = (S.constructor = ha(Uo));
wn = new Tt(wn);
En = new Tt(En);
var He = Tt;
function zt(e) {
  return Tt.isDecimal(e)
    ? !0
    : e !== null &&
        typeof e == "object" &&
        typeof e.s == "number" &&
        typeof e.e == "number" &&
        typeof e.toFixed == "function" &&
        Array.isArray(e.d);
}
g();
c();
f();
d();
m();
var vr = class {
  constructor(t, r, n, o, i) {
    (this.modelName = t),
      (this.name = r),
      (this.typeName = n),
      (this.isList = o),
      (this.isEnum = i);
  }
  _toGraphQLInputType() {
    let t = this.isList ? "List" : "",
      r = this.isEnum ? "Enum" : "";
    return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
  }
};
function Zt(e) {
  return e instanceof vr;
}
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
var Cn = class {
  constructor(t) {
    this.value = t;
  }
  write(t) {
    t.write(this.value);
  }
  markAsError() {
    this.value.markAsError();
  }
};
g();
c();
f();
d();
m();
var Mn = (e) => e,
  Rn = { bold: Mn, red: Mn, green: Mn, dim: Mn, enabled: !1 },
  xa = { bold: ot, red: $t, green: ln, dim: un, enabled: !0 },
  Yt = {
    write(e) {
      e.writeLine(",");
    },
  };
g();
c();
f();
d();
m();
var Ve = class {
  constructor(t) {
    this.contents = t;
    this.isUnderlined = !1;
    this.color = (t) => t;
  }
  underline() {
    return (this.isUnderlined = !0), this;
  }
  setColor(t) {
    return (this.color = t), this;
  }
  write(t) {
    let r = t.getCurrentLineLength();
    t.write(this.color(this.contents)),
      this.isUnderlined &&
        t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(
            this.color("~".repeat(this.contents.length)),
          );
        });
  }
};
g();
c();
f();
d();
m();
var ft = class {
  constructor() {
    this.hasError = !1;
  }
  markAsError() {
    return (this.hasError = !0), this;
  }
};
var Xt = class extends ft {
  constructor() {
    super(...arguments);
    this.items = [];
  }
  addItem(r) {
    return this.items.push(new Cn(r)), this;
  }
  getField(r) {
    return this.items[r];
  }
  getPrintWidth() {
    return this.items.length === 0
      ? 2
      : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
  }
  write(r) {
    if (this.items.length === 0) {
      this.writeEmpty(r);
      return;
    }
    this.writeWithItems(r);
  }
  writeEmpty(r) {
    let n = new Ve("[]");
    this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
  }
  writeWithItems(r) {
    let { colors: n } = r.context;
    r
      .writeLine("[")
      .withIndent(() => r.writeJoined(Yt, this.items).newLine())
      .write("]"),
      this.hasError &&
        r.afterNextNewline(() => {
          r.writeLine(n.red("~".repeat(this.getPrintWidth())));
        });
  }
};
g();
c();
f();
d();
m();
var ba = ": ",
  Sn = class {
    constructor(t, r) {
      this.name = t;
      this.value = r;
      this.hasError = !1;
    }
    markAsError() {
      this.hasError = !0;
    }
    getPrintWidth() {
      return this.name.length + this.value.getPrintWidth() + ba.length;
    }
    write(t) {
      let r = new Ve(this.name);
      this.hasError && r.underline().setColor(t.context.colors.red),
        t.write(r).write(ba).write(this.value);
    }
  };
g();
c();
f();
d();
m();
var ae = class e extends ft {
  constructor() {
    super(...arguments);
    this.fields = {};
    this.suggestions = [];
  }
  addField(r) {
    this.fields[r.name] = r;
  }
  addSuggestion(r) {
    this.suggestions.push(r);
  }
  getField(r) {
    return this.fields[r];
  }
  getDeepField(r) {
    let [n, ...o] = r,
      i = this.getField(n);
    if (!i) return;
    let s = i;
    for (let a of o) {
      let u;
      if (
        (s.value instanceof e
          ? (u = s.value.getField(a))
          : s.value instanceof Xt && (u = s.value.getField(Number(a))),
        !u)
      )
        return;
      s = u;
    }
    return s;
  }
  getDeepFieldValue(r) {
    var n;
    return r.length === 0
      ? this
      : (n = this.getDeepField(r)) == null
        ? void 0
        : n.value;
  }
  hasField(r) {
    return !!this.getField(r);
  }
  removeAllFields() {
    this.fields = {};
  }
  removeField(r) {
    delete this.fields[r];
  }
  getFields() {
    return this.fields;
  }
  isEmpty() {
    return Object.keys(this.fields).length === 0;
  }
  getFieldValue(r) {
    var n;
    return (n = this.getField(r)) == null ? void 0 : n.value;
  }
  getDeepSubSelectionValue(r) {
    let n = this;
    for (let o of r) {
      if (!(n instanceof e)) return;
      let i = n.getSubSelectionValue(o);
      if (!i) return;
      n = i;
    }
    return n;
  }
  getDeepSelectionParent(r) {
    let n = this.getSelectionParent();
    if (!n) return;
    let o = n;
    for (let i of r) {
      let s = o.value.getFieldValue(i);
      if (!s || !(s instanceof e)) return;
      let a = s.getSelectionParent();
      if (!a) return;
      o = a;
    }
    return o;
  }
  getSelectionParent() {
    let r = this.getField("select");
    if ((r == null ? void 0 : r.value) instanceof e)
      return { kind: "select", value: r.value };
    let n = this.getField("include");
    if ((n == null ? void 0 : n.value) instanceof e)
      return { kind: "include", value: n.value };
  }
  getSubSelectionValue(r) {
    var n;
    return (n = this.getSelectionParent()) == null
      ? void 0
      : n.value.fields[r].value;
  }
  getPrintWidth() {
    let r = Object.values(this.fields);
    return r.length == 0 ? 2 : Math.max(...r.map((o) => o.getPrintWidth())) + 2;
  }
  write(r) {
    let n = Object.values(this.fields);
    if (n.length === 0 && this.suggestions.length === 0) {
      this.writeEmpty(r);
      return;
    }
    this.writeWithContents(r, n);
  }
  writeEmpty(r) {
    let n = new Ve("{}");
    this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
  }
  writeWithContents(r, n) {
    r.writeLine("{").withIndent(() => {
      r.writeJoined(Yt, [...n, ...this.suggestions]).newLine();
    }),
      r.write("}"),
      this.hasError &&
        r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
  }
};
g();
c();
f();
d();
m();
var ue = class extends ft {
  constructor(r) {
    super();
    this.text = r;
  }
  getPrintWidth() {
    return this.text.length;
  }
  write(r) {
    let n = new Ve(this.text);
    this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
  }
};
var Go = class {
  constructor(t) {
    this.errorMessages = [];
    this.arguments = t;
  }
  write(t) {
    t.write(this.arguments);
  }
  addErrorMessage(t) {
    this.errorMessages.push(t);
  }
  renderAllMessages(t) {
    return this.errorMessages.map((r) => r(t)).join(`
`);
  }
};
function On(e) {
  return new Go(wa(e));
}
function wa(e) {
  let t = new ae();
  for (let [r, n] of Object.entries(e)) {
    let o = new Sn(r, Ea(n));
    t.addField(o);
  }
  return t;
}
function Ea(e) {
  if (typeof e == "string") return new ue(JSON.stringify(e));
  if (typeof e == "number" || typeof e == "boolean") return new ue(String(e));
  if (typeof e == "bigint") return new ue(`${e}n`);
  if (e === null) return new ue("null");
  if (e === void 0) return new ue("undefined");
  if (zt(e)) return new ue(`new Prisma.Decimal("${e.toFixed()}")`);
  if (e instanceof Uint8Array)
    return w.Buffer.isBuffer(e)
      ? new ue(`Buffer.alloc(${e.byteLength})`)
      : new ue(`new Uint8Array(${e.byteLength})`);
  if (e instanceof Date) {
    let t = xn(e) ? e.toISOString() : "Invalid Date";
    return new ue(`new Date("${t}")`);
  }
  return e instanceof Qe
    ? new ue(`Prisma.${e._getName()}`)
    : Zt(e)
      ? new ue(`prisma.${es(e.modelName)}.$fields.${e.name}`)
      : Array.isArray(e)
        ? Xc(e)
        : typeof e == "object"
          ? wa(e)
          : new ue(Object.prototype.toString.call(e));
}
function Xc(e) {
  let t = new Xt();
  for (let r of e) t.addItem(Ea(r));
  return t;
}
function Pa(e) {
  if (e === void 0) return "";
  let t = On(e);
  return new Jt(0, { colors: Rn }).write(t).toString();
}
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
var Ar = "<unknown>";
function va(e) {
  var t = e.split(`
`);
  return t.reduce(function (r, n) {
    var o = rf(n) || of(n) || uf(n) || ff(n) || pf(n);
    return o && r.push(o), r;
  }, []);
}
var ef =
    /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  tf = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function rf(e) {
  var t = ef.exec(e);
  if (!t) return null;
  var r = t[2] && t[2].indexOf("native") === 0,
    n = t[2] && t[2].indexOf("eval") === 0,
    o = tf.exec(t[2]);
  return (
    n && o != null && ((t[2] = o[1]), (t[3] = o[2]), (t[4] = o[3])),
    {
      file: r ? null : t[2],
      methodName: t[1] || Ar,
      arguments: r ? [t[2]] : [],
      lineNumber: t[3] ? +t[3] : null,
      column: t[4] ? +t[4] : null,
    }
  );
}
var nf =
  /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function of(e) {
  var t = nf.exec(e);
  return t
    ? {
        file: t[2],
        methodName: t[1] || Ar,
        arguments: [],
        lineNumber: +t[3],
        column: t[4] ? +t[4] : null,
      }
    : null;
}
var sf =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
  af = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function uf(e) {
  var t = sf.exec(e);
  if (!t) return null;
  var r = t[3] && t[3].indexOf(" > eval") > -1,
    n = af.exec(t[3]);
  return (
    r && n != null && ((t[3] = n[1]), (t[4] = n[2]), (t[5] = null)),
    {
      file: t[3],
      methodName: t[1] || Ar,
      arguments: t[2] ? t[2].split(",") : [],
      lineNumber: t[4] ? +t[4] : null,
      column: t[5] ? +t[5] : null,
    }
  );
}
var lf = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function pf(e) {
  var t = lf.exec(e);
  return t
    ? {
        file: t[3],
        methodName: t[1] || Ar,
        arguments: [],
        lineNumber: +t[4],
        column: t[5] ? +t[5] : null,
      }
    : null;
}
var cf =
  /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function ff(e) {
  var t = cf.exec(e);
  return t
    ? {
        file: t[2],
        methodName: t[1] || Ar,
        arguments: [],
        lineNumber: +t[3],
        column: t[4] ? +t[4] : null,
      }
    : null;
}
var Jo = class {
    getLocation() {
      return null;
    }
  },
  Qo = class {
    constructor() {
      this._error = new Error();
    }
    getLocation() {
      let t = this._error.stack;
      if (!t) return null;
      let n = va(t).find((o) => {
        if (!o.file) return !1;
        let i = Ro(o.file);
        return (
          i !== "<anonymous>" &&
          !i.includes("@prisma") &&
          !i.includes("/packages/client/src/runtime/") &&
          !i.endsWith("/runtime/binary.js") &&
          !i.endsWith("/runtime/library.js") &&
          !i.endsWith("/runtime/edge.js") &&
          !i.endsWith("/runtime/edge-esm.js") &&
          !i.startsWith("internal/") &&
          !o.methodName.includes("new ") &&
          !o.methodName.includes("getCallSite") &&
          !o.methodName.includes("Proxy.") &&
          o.methodName.split(".").length < 4
        );
      });
      return !n || !n.file
        ? null
        : {
            fileName: n.file,
            lineNumber: n.lineNumber,
            columnNumber: n.column,
          };
    }
  };
function dt(e) {
  return e === "minimal" ? new Jo() : new Qo();
}
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
var Aa = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 };
function er(e = {}) {
  let t = mf(e);
  return Object.entries(t).reduce(
    (n, [o, i]) => (
      Aa[o] !== void 0 ? (n.select[o] = { select: i }) : (n[o] = i), n
    ),
    { select: {} },
  );
}
function mf(e = {}) {
  return typeof e._count == "boolean"
    ? { ...e, _count: { _all: e._count } }
    : e;
}
function Fn(e = {}) {
  return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
}
function Ta(e, t) {
  let r = Fn(e);
  return t({ action: "aggregate", unpacker: r, argsMapper: er })(e);
}
g();
c();
f();
d();
m();
function gf(e = {}) {
  let { select: t, ...r } = e;
  return typeof t == "object"
    ? er({ ...r, _count: t })
    : er({ ...r, _count: { _all: !0 } });
}
function yf(e = {}) {
  return typeof e.select == "object"
    ? (t) => Fn(e)(t)._count
    : (t) => Fn(e)(t)._count._all;
}
function Ca(e, t) {
  return t({ action: "count", unpacker: yf(e), argsMapper: gf })(e);
}
g();
c();
f();
d();
m();
function hf(e = {}) {
  let t = er(e);
  if (Array.isArray(t.by))
    for (let r of t.by) typeof r == "string" && (t.select[r] = !0);
  else typeof t.by == "string" && (t.select[t.by] = !0);
  return t;
}
function xf(e = {}) {
  return (t) => (
    typeof (e == null ? void 0 : e._count) == "boolean" &&
      t.forEach((r) => {
        r._count = r._count._all;
      }),
    t
  );
}
function Ma(e, t) {
  return t({ action: "groupBy", unpacker: xf(e), argsMapper: hf })(e);
}
function Ra(e, t, r) {
  if (t === "aggregate") return (n) => Ta(n, r);
  if (t === "count") return (n) => Ca(n, r);
  if (t === "groupBy") return (n) => Ma(n, r);
}
g();
c();
f();
d();
m();
function Sa(e, t) {
  let r = t.fields.filter((o) => !o.relationName),
    n = Fo(r, (o) => o.name);
  return new Proxy(
    {},
    {
      get(o, i) {
        if (i in o || typeof i == "symbol") return o[i];
        let s = n[i];
        if (s) return new vr(e, i, s.type, s.isList, s.kind === "enum");
      },
      ...hn(Object.keys(n)),
    },
  );
}
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
var Oa = (e) => (Array.isArray(e) ? e : e.split(".")),
  Wo = (e, t) => Oa(t).reduce((r, n) => r && r[n], e),
  Fa = (e, t, r) =>
    Oa(t).reduceRight(
      (n, o, i, s) => Object.assign({}, Wo(e, s.slice(0, i)), { [o]: n }),
      r,
    );
function bf(e, t) {
  return e === void 0 || t === void 0 ? [] : [...t, "select", e];
}
function wf(e, t, r) {
  return t === void 0 ? (e != null ? e : {}) : Fa(t, r, e || !0);
}
function Ho(e, t, r, n, o, i) {
  let a = e._runtimeDataModel.models[t].fields.reduce(
    (u, l) => ({ ...u, [l.name]: l }),
    {},
  );
  return (u) => {
    let l = dt(e._errorFormat),
      p = bf(n, o),
      y = wf(u, i, p),
      h = r({ dataPath: p, callsite: l })(y),
      T = Ef(e, t);
    return new Proxy(h, {
      get(C, P) {
        if (!T.includes(P)) return C[P];
        let I = [a[P].type, r, P],
          D = [p, y];
        return Ho(e, ...I, ...D);
      },
      ...hn([...T, ...Object.getOwnPropertyNames(h)]),
    });
  };
}
function Ef(e, t) {
  return e._runtimeDataModel.models[t].fields
    .filter((r) => r.kind === "object")
    .map((r) => r.name);
}
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
var Na = Oe(Vs());
g();
c();
f();
d();
m();
To();
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
var ka = {
  keyword: it,
  entity: it,
  value: (e) => ot(qt(e)),
  punctuation: qt,
  directive: it,
  function: it,
  variable: (e) => ot(qt(e)),
  string: (e) => ot(ln(e)),
  boolean: pn,
  number: it,
  comment: cn,
};
var Pf = (e) => e,
  kn = {},
  vf = 0,
  U = {
    manual: kn.Prism && kn.Prism.manual,
    disableWorkerMessageHandler:
      kn.Prism && kn.Prism.disableWorkerMessageHandler,
    util: {
      encode: function (e) {
        if (e instanceof Ne) {
          let t = e;
          return new Ne(t.type, U.util.encode(t.content), t.alias);
        } else
          return Array.isArray(e)
            ? e.map(U.util.encode)
            : e
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/\u00a0/g, " ");
      },
      type: function (e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      objId: function (e) {
        return (
          e.__id || Object.defineProperty(e, "__id", { value: ++vf }), e.__id
        );
      },
      clone: function e(t, r) {
        let n,
          o,
          i = U.util.type(t);
        switch (((r = r || {}), i)) {
          case "Object":
            if (((o = U.util.objId(t)), r[o])) return r[o];
            (n = {}), (r[o] = n);
            for (let s in t) t.hasOwnProperty(s) && (n[s] = e(t[s], r));
            return n;
          case "Array":
            return (
              (o = U.util.objId(t)),
              r[o]
                ? r[o]
                : ((n = []),
                  (r[o] = n),
                  t.forEach(function (s, a) {
                    n[a] = e(s, r);
                  }),
                  n)
            );
          default:
            return t;
        }
      },
    },
    languages: {
      extend: function (e, t) {
        let r = U.util.clone(U.languages[e]);
        for (let n in t) r[n] = t[n];
        return r;
      },
      insertBefore: function (e, t, r, n) {
        n = n || U.languages;
        let o = n[e],
          i = {};
        for (let a in o)
          if (o.hasOwnProperty(a)) {
            if (a == t) for (let u in r) r.hasOwnProperty(u) && (i[u] = r[u]);
            r.hasOwnProperty(a) || (i[a] = o[a]);
          }
        let s = n[e];
        return (
          (n[e] = i),
          U.languages.DFS(U.languages, function (a, u) {
            u === s && a != e && (this[a] = i);
          }),
          i
        );
      },
      DFS: function e(t, r, n, o) {
        o = o || {};
        let i = U.util.objId;
        for (let s in t)
          if (t.hasOwnProperty(s)) {
            r.call(t, s, t[s], n || s);
            let a = t[s],
              u = U.util.type(a);
            u === "Object" && !o[i(a)]
              ? ((o[i(a)] = !0), e(a, r, null, o))
              : u === "Array" && !o[i(a)] && ((o[i(a)] = !0), e(a, r, s, o));
          }
      },
    },
    plugins: {},
    highlight: function (e, t, r) {
      let n = { code: e, grammar: t, language: r };
      return (
        U.hooks.run("before-tokenize", n),
        (n.tokens = U.tokenize(n.code, n.grammar)),
        U.hooks.run("after-tokenize", n),
        Ne.stringify(U.util.encode(n.tokens), n.language)
      );
    },
    matchGrammar: function (e, t, r, n, o, i, s) {
      for (let P in r) {
        if (!r.hasOwnProperty(P) || !r[P]) continue;
        if (P == s) return;
        let R = r[P];
        R = U.util.type(R) === "Array" ? R : [R];
        for (let I = 0; I < R.length; ++I) {
          let D = R[I],
            F = D.inside,
            k = !!D.lookbehind,
            $ = !!D.greedy,
            q = 0,
            he = D.alias;
          if ($ && !D.pattern.global) {
            let W = D.pattern.toString().match(/[imuy]*$/)[0];
            D.pattern = RegExp(D.pattern.source, W + "g");
          }
          D = D.pattern || D;
          for (let W = n, ee = o; W < t.length; ee += t[W].length, ++W) {
            let Ce = t[W];
            if (t.length > e.length) return;
            if (Ce instanceof Ne) continue;
            if ($ && W != t.length - 1) {
              D.lastIndex = ee;
              var y = D.exec(e);
              if (!y) break;
              var p = y.index + (k ? y[1].length : 0),
                h = y.index + y[0].length,
                a = W,
                u = ee;
              for (
                let _ = t.length;
                a < _ && (u < h || (!t[a].type && !t[a - 1].greedy));
                ++a
              )
                (u += t[a].length), p >= u && (++W, (ee = u));
              if (t[W] instanceof Ne) continue;
              (l = a - W), (Ce = e.slice(ee, u)), (y.index -= ee);
            } else {
              D.lastIndex = 0;
              var y = D.exec(Ce),
                l = 1;
            }
            if (!y) {
              if (i) break;
              continue;
            }
            k && (q = y[1] ? y[1].length : 0);
            var p = y.index + q,
              y = y[0].slice(q),
              h = p + y.length,
              T = Ce.slice(0, p),
              C = Ce.slice(h);
            let te = [W, l];
            T && (++W, (ee += T.length), te.push(T));
            let Me = new Ne(P, F ? U.tokenize(y, F) : y, he, y, $);
            if (
              (te.push(Me),
              C && te.push(C),
              Array.prototype.splice.apply(t, te),
              l != 1 && U.matchGrammar(e, t, r, W, ee, !0, P),
              i)
            )
              break;
          }
        }
      }
    },
    tokenize: function (e, t) {
      let r = [e],
        n = t.rest;
      if (n) {
        for (let o in n) t[o] = n[o];
        delete t.rest;
      }
      return U.matchGrammar(e, r, t, 0, 0, !1), r;
    },
    hooks: {
      all: {},
      add: function (e, t) {
        let r = U.hooks.all;
        (r[e] = r[e] || []), r[e].push(t);
      },
      run: function (e, t) {
        let r = U.hooks.all[e];
        if (!(!r || !r.length)) for (var n = 0, o; (o = r[n++]); ) o(t);
      },
    },
    Token: Ne,
  };
U.languages.clike = {
  comment: [
    { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
    { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
  },
  "class-name": {
    pattern:
      /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: !0,
    inside: { punctuation: /[.\\]/ },
  },
  keyword:
    /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(?:true|false)\b/,
  function: /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  punctuation: /[{}[\];(),.:]/,
};
U.languages.javascript = U.languages.extend("clike", {
  "class-name": [
    U.languages.clike["class-name"],
    {
      pattern:
        /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
      lookbehind: !0,
    },
  ],
  keyword: [
    { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
    {
      pattern:
        /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0,
    },
  ],
  number:
    /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  function:
    /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  operator:
    /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
});
U.languages.javascript["class-name"][0].pattern =
  /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
U.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern:
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
    lookbehind: !0,
    greedy: !0,
  },
  "function-variable": {
    pattern:
      /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: "function",
  },
  parameter: [
    {
      pattern:
        /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
      lookbehind: !0,
      inside: U.languages.javascript,
    },
    {
      pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
      inside: U.languages.javascript,
    },
    {
      pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: U.languages.javascript,
    },
    {
      pattern:
        /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: U.languages.javascript,
    },
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
});
U.languages.markup && U.languages.markup.tag.addInlined("script", "javascript");
U.languages.js = U.languages.javascript;
U.languages.typescript = U.languages.extend("javascript", {
  keyword:
    /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
  builtin:
    /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
});
U.languages.ts = U.languages.typescript;
function Ne(e, t, r, n, o) {
  (this.type = e),
    (this.content = t),
    (this.alias = r),
    (this.length = (n || "").length | 0),
    (this.greedy = !!o);
}
Ne.stringify = function (e, t) {
  return typeof e == "string"
    ? e
    : Array.isArray(e)
      ? e
          .map(function (r) {
            return Ne.stringify(r, t);
          })
          .join("")
      : Af(e.type)(e.content);
};
function Af(e) {
  return ka[e] || Pf;
}
function Ia(e) {
  return Tf(e, U.languages.javascript);
}
function Tf(e, t) {
  return U.tokenize(e, t)
    .map((n) => Ne.stringify(n))
    .join("");
}
g();
c();
f();
d();
m();
var Da = Oe(js());
function _a(e) {
  return (0, Da.default)(e);
}
var In = class e {
  static read(t) {
    let r;
    try {
      typeof $fs != "undefined"
        ? (r = $fs.readFileSync(t, "utf-8"))
        : (r = fn.readFileSync(t, "utf-8"));
    } catch (n) {
      return null;
    }
    return e.fromContent(r);
  }
  static fromContent(t) {
    let r = t.split(/\r?\n/);
    return new e(1, r);
  }
  constructor(t, r) {
    (this.firstLineNumber = t), (this.lines = r);
  }
  get lastLineNumber() {
    return this.firstLineNumber + this.lines.length - 1;
  }
  mapLineAt(t, r) {
    if (
      t < this.firstLineNumber ||
      t > this.lines.length + this.firstLineNumber
    )
      return this;
    let n = t - this.firstLineNumber,
      o = [...this.lines];
    return (o[n] = r(o[n])), new e(this.firstLineNumber, o);
  }
  mapLines(t) {
    return new e(
      this.firstLineNumber,
      this.lines.map((r, n) => t(r, this.firstLineNumber + n)),
    );
  }
  lineAt(t) {
    return this.lines[t - this.firstLineNumber];
  }
  prependSymbolAt(t, r) {
    return this.mapLines((n, o) => (o === t ? `${r} ${n}` : `  ${n}`));
  }
  slice(t, r) {
    let n = this.lines.slice(t - 1, r).join(`
`);
    return new e(
      t,
      _a(n).split(`
`),
    );
  }
  highlight() {
    let t = Ia(this.toString());
    return new e(
      this.firstLineNumber,
      t.split(`
`),
    );
  }
  toString() {
    return this.lines.join(`
`);
  }
};
var Cf = {
    red: $t,
    gray: cn,
    dim: un,
    bold: ot,
    underline: ks,
    highlightSource: (e) => e.highlight(),
  },
  Mf = {
    red: (e) => e,
    gray: (e) => e,
    dim: (e) => e,
    bold: (e) => e,
    underline: (e) => e,
    highlightSource: (e) => e,
  };
function Rf(
  { callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: o },
  i,
) {
  var y;
  let s = {
    functionName: `prisma.${r}()`,
    message: t,
    isPanic: n != null ? n : !1,
    callArguments: o,
  };
  if (!e || typeof window != "undefined" || x.env.NODE_ENV === "production")
    return s;
  let a = e.getLocation();
  if (!a || !a.lineNumber || !a.columnNumber) return s;
  let u = Math.max(1, a.lineNumber - 3),
    l = (y = In.read(a.fileName)) == null ? void 0 : y.slice(u, a.lineNumber),
    p = l == null ? void 0 : l.lineAt(a.lineNumber);
  if (l && p) {
    let h = Of(p),
      T = Sf(p);
    if (!T) return s;
    (s.functionName = `${T.code})`),
      (s.location = a),
      n ||
        (l = l.mapLineAt(a.lineNumber, (P) => P.slice(0, T.openingBraceIndex))),
      (l = i.highlightSource(l));
    let C = String(l.lastLineNumber).length;
    if (
      ((s.contextLines = l
        .mapLines((P, R) => i.gray(String(R).padStart(C)) + " " + P)
        .mapLines((P) => i.dim(P))
        .prependSymbolAt(a.lineNumber, i.bold(i.red("\u2192")))),
      o)
    ) {
      let P = h + C + 1;
      (P += 2), (s.callArguments = (0, Na.default)(o, P).slice(P));
    }
  }
  return s;
}
function Sf(e) {
  let t = Object.keys(ke.ModelAction).join("|"),
    n = new RegExp(String.raw`\.(${t})\(`).exec(e);
  if (n) {
    let o = n.index + n[0].length,
      i = e.lastIndexOf(" ", n.index) + 1;
    return { code: e.slice(i, o), openingBraceIndex: o };
  }
  return null;
}
function Of(e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    if (e.charAt(r) !== " ") return t;
    t++;
  }
  return t;
}
function Ff(
  {
    functionName: e,
    location: t,
    message: r,
    isPanic: n,
    contextLines: o,
    callArguments: i,
  },
  s,
) {
  let a = [""],
    u = t ? " in" : ":";
  if (
    (n
      ? (a.push(
          s.red(
            `Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`,
          ),
        ),
        a.push(
          s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${u}`),
        ))
      : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${u}`)),
    t && a.push(s.underline(kf(t))),
    o)
  ) {
    a.push("");
    let l = [o.toString()];
    i && (l.push(i), l.push(s.dim(")"))), a.push(l.join("")), i && a.push("");
  } else a.push(""), i && a.push(i), a.push("");
  return (
    a.push(r),
    a.join(`
`)
  );
}
function kf(e) {
  let t = [e.fileName];
  return (
    e.lineNumber && t.push(String(e.lineNumber)),
    e.columnNumber && t.push(String(e.columnNumber)),
    t.join(":")
  );
}
function tr(e) {
  let t = e.showColors ? Cf : Mf,
    r = Rf(e, t);
  return Ff(r, t);
}
function La(e, t, r, n) {
  return e === ke.ModelAction.findFirstOrThrow ||
    e === ke.ModelAction.findUniqueOrThrow
    ? If(t, r, n)
    : n;
}
function If(e, t, r) {
  return async (n) => {
    if ("rejectOnNotFound" in n.args) {
      let i = tr({
        originalMethod: n.clientMethod,
        callsite: n.callsite,
        message: "'rejectOnNotFound' option is not supported",
      });
      throw new ge(i, { clientVersion: t });
    }
    return await r(n).catch((i) => {
      throw i instanceof we && i.code === "P2025"
        ? new st(`No ${e} found`, t)
        : i;
    });
  };
}
g();
c();
f();
d();
m();
function Ke(e) {
  return e.replace(/^./, (t) => t.toLowerCase());
}
var Df = [
    "findUnique",
    "findUniqueOrThrow",
    "findFirst",
    "findFirstOrThrow",
    "create",
    "update",
    "upsert",
    "delete",
  ],
  _f = ["aggregate", "count", "groupBy"];
function zo(e, t) {
  var o;
  let r = (o = e._extensions.getAllModelExtensions(t)) != null ? o : {},
    n = [
      Nf(e, t),
      Bf(e, t),
      wr(r),
      Ee("name", () => t),
      Ee("$name", () => t),
      Ee("$parent", () => e._appliedParent),
    ];
  return $e({}, n);
}
function Nf(e, t) {
  let r = Ke(t),
    n = Object.keys(ke.ModelAction).concat("count");
  return {
    getKeys() {
      return n;
    },
    getPropertyValue(o) {
      let i = o,
        s = (u) => e._request(u);
      s = La(i, t, e._clientVersion, s);
      let a = (u) => (l) => {
        let p = dt(e._errorFormat);
        return e._createPrismaPromise((y) => {
          let h = {
            args: l,
            dataPath: [],
            action: i,
            model: t,
            clientMethod: `${r}.${o}`,
            jsModelName: r,
            transaction: y,
            callsite: p,
          };
          return s({ ...h, ...u });
        });
      };
      return Df.includes(i) ? Ho(e, t, a) : Lf(o) ? Ra(e, o, a) : a({});
    },
  };
}
function Lf(e) {
  return _f.includes(e);
}
function Bf(e, t) {
  return At(
    Ee("fields", () => {
      let r = e._runtimeDataModel.models[t];
      return Sa(t, r);
    }),
  );
}
g();
c();
f();
d();
m();
function Ba(e) {
  return e.replace(/^./, (t) => t.toUpperCase());
}
var Zo = Symbol();
function Tr(e) {
  let t = [jf(e), Ee(Zo, () => e), Ee("$parent", () => e._appliedParent)],
    r = e._extensions.getAllClientExtensions();
  return r && t.push(wr(r)), $e(e, t);
}
function jf(e) {
  let t = Object.keys(e._runtimeDataModel.models),
    r = t.map(Ke),
    n = [...new Set(t.concat(r))];
  return At({
    getKeys() {
      return n;
    },
    getPropertyValue(o) {
      let i = Ba(o);
      if (e._runtimeDataModel.models[i] !== void 0) return zo(e, i);
      if (e._runtimeDataModel.models[o] !== void 0) return zo(e, o);
    },
    getPropertyDescriptor(o) {
      if (!r.includes(o)) return { enumerable: !1 };
    },
  });
}
function Dn(e) {
  return e[Zo] ? e[Zo] : e;
}
function ja(e) {
  if (typeof e == "function") return e(this);
  let t = Dn(this),
    r = Object.create(t, {
      _extensions: { value: this._extensions.append(e) },
      _appliedParent: { value: this, configurable: !0 },
      $use: { value: void 0 },
      $on: { value: void 0 },
    });
  return Tr(r);
}
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
function Ua({ result: e, modelName: t, select: r, extensions: n }) {
  let o = n.getAllComputedFields(t);
  if (!o) return e;
  let i = [],
    s = [];
  for (let a of Object.values(o)) {
    if (r) {
      if (!r[a.name]) continue;
      let u = a.needs.filter((l) => !r[l]);
      u.length > 0 && s.push(Er(u));
    }
    Uf(e, a.needs) && i.push($f(a, $e(e, i)));
  }
  return i.length > 0 || s.length > 0 ? $e(e, [...i, ...s]) : e;
}
function Uf(e, t) {
  return t.every((r) => Oo(e, r));
}
function $f(e, t) {
  return At(Ee(e.name, () => e.compute(t)));
}
g();
c();
f();
d();
m();
function _n({
  visitor: e,
  result: t,
  args: r,
  runtimeDataModel: n,
  modelName: o,
}) {
  var s;
  if (Array.isArray(t)) {
    for (let a = 0; a < t.length; a++)
      t[a] = _n({
        result: t[a],
        args: r,
        modelName: o,
        runtimeDataModel: n,
        visitor: e,
      });
    return t;
  }
  let i = (s = e(t, o, r)) != null ? s : t;
  return (
    r.include &&
      $a({
        includeOrSelect: r.include,
        result: i,
        parentModelName: o,
        runtimeDataModel: n,
        visitor: e,
      }),
    r.select &&
      $a({
        includeOrSelect: r.select,
        result: i,
        parentModelName: o,
        runtimeDataModel: n,
        visitor: e,
      }),
    i
  );
}
function $a({
  includeOrSelect: e,
  result: t,
  parentModelName: r,
  runtimeDataModel: n,
  visitor: o,
}) {
  for (let [i, s] of Object.entries(e)) {
    if (!s || t[i] == null) continue;
    let u = n.models[r].fields.find((p) => p.name === i);
    if (!u || u.kind !== "object" || !u.relationName) continue;
    let l = typeof s == "object" ? s : {};
    t[i] = _n({
      visitor: o,
      result: t[i],
      args: l,
      modelName: u.type,
      runtimeDataModel: n,
    });
  }
}
function qa({
  result: e,
  modelName: t,
  args: r,
  extensions: n,
  runtimeDataModel: o,
}) {
  return n.isEmpty() || e == null || typeof e != "object" || !o.models[t]
    ? e
    : _n({
        result: e,
        args: r != null ? r : {},
        modelName: t,
        runtimeDataModel: o,
        visitor: (s, a, u) =>
          Ua({ result: s, modelName: Ke(a), select: u.select, extensions: n }),
      });
}
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
function Va(e) {
  if (e instanceof Se) return qf(e);
  if (Array.isArray(e)) {
    let r = [e[0]];
    for (let n = 1; n < e.length; n++) r[n] = Cr(e[n]);
    return r;
  }
  let t = {};
  for (let r in e) t[r] = Cr(e[r]);
  return t;
}
function qf(e) {
  return new Se(e.strings, e.values);
}
function Cr(e) {
  if (typeof e != "object" || e == null || e instanceof Qe || Zt(e)) return e;
  if (zt(e)) return new He(e.toFixed());
  if (Qt(e)) return new Date(+e);
  if (ArrayBuffer.isView(e)) return e.slice(0);
  if (Array.isArray(e)) {
    let t = e.length,
      r;
    for (r = Array(t); t--; ) r[t] = Cr(e[t]);
    return r;
  }
  if (typeof e == "object") {
    let t = {};
    for (let r in e)
      r === "__proto__"
        ? Object.defineProperty(t, r, {
            value: Cr(e[r]),
            configurable: !0,
            enumerable: !0,
            writable: !0,
          })
        : (t[r] = Cr(e[r]));
    return t;
  }
  Pt(e, "Unknown value");
}
function Ga(e, t, r, n = 0) {
  return e._createPrismaPromise((o) => {
    var s, a;
    let i = t.customDataProxyFetch;
    return (
      "transaction" in t &&
        o !== void 0 &&
        (((s = t.transaction) == null ? void 0 : s.kind) === "batch" &&
          t.transaction.lock.then(),
        (t.transaction = o)),
      n === r.length
        ? e._executeRequest(t)
        : r[n]({
            model: t.model,
            operation: t.model ? t.action : t.clientMethod,
            args: Va((a = t.args) != null ? a : {}),
            __internalParams: t,
            query: (u, l = t) => {
              let p = l.customDataProxyFetch;
              return (
                (l.customDataProxyFetch = Ha(i, p)),
                (l.args = u),
                Ga(e, l, r, n + 1)
              );
            },
          })
    );
  });
}
function Ja(e, t) {
  let { jsModelName: r, action: n, clientMethod: o } = t,
    i = r ? n : o;
  if (e._extensions.isEmpty()) return e._executeRequest(t);
  let s = e._extensions.getAllQueryCallbacks(r != null ? r : "$none", i);
  return Ga(e, t, s);
}
function Qa(e) {
  return (t) => {
    let r = { requests: t },
      n = t[0].extensions.getAllBatchQueryCallbacks();
    return n.length ? Wa(r, n, 0, e) : e(r);
  };
}
function Wa(e, t, r, n) {
  if (r === t.length) return n(e);
  let o = e.customDataProxyFetch,
    i = e.requests[0].transaction;
  return t[r]({
    args: {
      queries: e.requests.map((s) => ({
        model: s.modelName,
        operation: s.action,
        args: s.args,
      })),
      transaction: i
        ? { isolationLevel: i.kind === "batch" ? i.isolationLevel : void 0 }
        : void 0,
    },
    __internalParams: e,
    query(s, a = e) {
      let u = a.customDataProxyFetch;
      return (a.customDataProxyFetch = Ha(o, u)), Wa(a, t, r + 1, n);
    },
  });
}
var Ka = (e) => e;
function Ha(e = Ka, t = Ka) {
  return (r) => e(t(r));
}
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
function Za(e, t, r) {
  let n = Ke(r);
  return !t.result || !(t.result.$allModels || t.result[n])
    ? e
    : Vf({
        ...e,
        ...za(t.name, e, t.result.$allModels),
        ...za(t.name, e, t.result[n]),
      });
}
function Vf(e) {
  let t = new Ue(),
    r = (n, o) =>
      t.getOrCreate(n, () =>
        o.has(n)
          ? [n]
          : (o.add(n), e[n] ? e[n].needs.flatMap((i) => r(i, o)) : [n]),
      );
  return Gt(e, (n) => ({ ...n, needs: r(n.name, new Set()) }));
}
function za(e, t, r) {
  return r
    ? Gt(r, ({ needs: n, compute: o }, i) => ({
        name: i,
        needs: n ? Object.keys(n).filter((s) => n[s]) : [],
        compute: Kf(t, i, o),
      }))
    : {};
}
function Kf(e, t, r) {
  var o;
  let n = (o = e == null ? void 0 : e[t]) == null ? void 0 : o.compute;
  return n ? (i) => r({ ...i, [t]: n(i) }) : r;
}
function Ya(e, t) {
  if (!t) return e;
  let r = { ...e };
  for (let n of Object.values(t))
    if (e[n.name]) for (let o of n.needs) r[o] = !0;
  return r;
}
var Nn = class {
    constructor(t, r) {
      this.extension = t;
      this.previous = r;
      this.computedFieldsCache = new Ue();
      this.modelExtensionsCache = new Ue();
      this.queryCallbacksCache = new Ue();
      this.clientExtensions = mr(() => {
        var t, r;
        return this.extension.client
          ? {
              ...((r = this.previous) == null
                ? void 0
                : r.getAllClientExtensions()),
              ...this.extension.client,
            }
          : (t = this.previous) == null
            ? void 0
            : t.getAllClientExtensions();
      });
      this.batchCallbacks = mr(() => {
        var n, o, i;
        let t =
            (o =
              (n = this.previous) == null
                ? void 0
                : n.getAllBatchQueryCallbacks()) != null
              ? o
              : [],
          r = (i = this.extension.query) == null ? void 0 : i.$__internalBatch;
        return r ? t.concat(r) : t;
      });
    }
    getAllComputedFields(t) {
      return this.computedFieldsCache.getOrCreate(t, () => {
        var r;
        return Za(
          (r = this.previous) == null ? void 0 : r.getAllComputedFields(t),
          this.extension,
          t,
        );
      });
    }
    getAllClientExtensions() {
      return this.clientExtensions.get();
    }
    getAllModelExtensions(t) {
      return this.modelExtensionsCache.getOrCreate(t, () => {
        var n, o;
        let r = Ke(t);
        return !this.extension.model ||
          !(this.extension.model[r] || this.extension.model.$allModels)
          ? (n = this.previous) == null
            ? void 0
            : n.getAllModelExtensions(t)
          : {
              ...((o = this.previous) == null
                ? void 0
                : o.getAllModelExtensions(t)),
              ...this.extension.model.$allModels,
              ...this.extension.model[r],
            };
      });
    }
    getAllQueryCallbacks(t, r) {
      return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
        var s, a;
        let n =
            (a =
              (s = this.previous) == null
                ? void 0
                : s.getAllQueryCallbacks(t, r)) != null
              ? a
              : [],
          o = [],
          i = this.extension.query;
        return !i || !(i[t] || i.$allModels || i[r] || i.$allOperations)
          ? n
          : (i[t] !== void 0 &&
              (i[t][r] !== void 0 && o.push(i[t][r]),
              i[t].$allOperations !== void 0 && o.push(i[t].$allOperations)),
            t !== "$none" &&
              i.$allModels !== void 0 &&
              (i.$allModels[r] !== void 0 && o.push(i.$allModels[r]),
              i.$allModels.$allOperations !== void 0 &&
                o.push(i.$allModels.$allOperations)),
            i[r] !== void 0 && o.push(i[r]),
            i.$allOperations !== void 0 && o.push(i.$allOperations),
            n.concat(o));
      });
    }
    getAllBatchQueryCallbacks() {
      return this.batchCallbacks.get();
    }
  },
  Ln = class e {
    constructor(t) {
      this.head = t;
    }
    static empty() {
      return new e();
    }
    static single(t) {
      return new e(new Nn(t));
    }
    isEmpty() {
      return this.head === void 0;
    }
    append(t) {
      return new e(new Nn(t, this.head));
    }
    getAllComputedFields(t) {
      var r;
      return (r = this.head) == null ? void 0 : r.getAllComputedFields(t);
    }
    getAllClientExtensions() {
      var t;
      return (t = this.head) == null ? void 0 : t.getAllClientExtensions();
    }
    getAllModelExtensions(t) {
      var r;
      return (r = this.head) == null ? void 0 : r.getAllModelExtensions(t);
    }
    getAllQueryCallbacks(t, r) {
      var n, o;
      return (o =
        (n = this.head) == null ? void 0 : n.getAllQueryCallbacks(t, r)) != null
        ? o
        : [];
    }
    getAllBatchQueryCallbacks() {
      var t, r;
      return (r =
        (t = this.head) == null ? void 0 : t.getAllBatchQueryCallbacks()) !=
        null
        ? r
        : [];
    }
  };
g();
c();
f();
d();
m();
var Xa = ve("prisma:client"),
  eu = { Vercel: "vercel", "Netlify CI": "netlify" };
function tu({ postinstall: e, ciName: t, clientVersion: r }) {
  if (
    (Xa("checkPlatformCaching:postinstall", e),
    Xa("checkPlatformCaching:ciName", t),
    e === !0 && t && t in eu)
  ) {
    let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${eu[t]}-build`;
    throw (console.error(n), new fe(n, r));
  }
}
g();
c();
f();
d();
m();
function ru(e, t) {
  return e
    ? e.datasources
      ? e.datasources
      : e.datasourceUrl
        ? { [t[0]]: { url: e.datasourceUrl } }
        : {}
    : {};
}
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
var Gf = "Cloudflare-Workers",
  Jf = "node";
function Yo() {
  var e, t, r;
  return typeof Netlify == "object"
    ? "netlify"
    : typeof EdgeRuntime == "string"
      ? "edge-light"
      : ((e = globalThis.navigator) == null ? void 0 : e.userAgent) === Gf
        ? "workerd"
        : globalThis.Deno
          ? "deno"
          : globalThis.__lagon__
            ? "lagon"
            : ((r = (t = globalThis.process) == null ? void 0 : t.release) ==
                null
                  ? void 0
                  : r.name) === Jf
              ? "node"
              : globalThis.Bun
                ? "bun"
                : globalThis.fastly
                  ? "fastly"
                  : "unknown";
}
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
function Xo({ error: e, user_facing_error: t }, r) {
  return t.error_code
    ? new we(t.message, {
        code: t.error_code,
        clientVersion: r,
        meta: t.meta,
        batchRequestIdx: t.batch_request_idx,
      })
    : new Ie(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
}
g();
c();
f();
d();
m();
var Bn = class {};
g();
c();
f();
d();
m();
function nu(e, t) {
  return {
    batch: e,
    transaction:
      (t == null ? void 0 : t.kind) === "batch"
        ? { isolationLevel: t.options.isolationLevel }
        : void 0,
  };
}
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
function jn({
  inlineDatasources: e,
  overrideDatasources: t,
  env: r,
  clientVersion: n,
}) {
  var u, l;
  let o,
    i = Object.keys(e)[0],
    s = (u = e[i]) == null ? void 0 : u.url,
    a = (l = t[i]) == null ? void 0 : l.url;
  if (
    (i === void 0
      ? (o = void 0)
      : a
        ? (o = a)
        : s != null && s.value
          ? (o = s.value)
          : s != null && s.fromEnvVar && (o = r[s.fromEnvVar]),
    (s == null ? void 0 : s.fromEnvVar) !== void 0 && o === void 0)
  )
    throw Yo() === "workerd"
      ? new fe(
          `error: Environment variable not found: ${s.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`,
          n,
        )
      : new fe(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
  if (o === void 0)
    throw new fe(
      "error: Missing URL environment variable, value, or override.",
      n,
    );
  return o;
}
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
var Un = class extends Error {
  constructor(t, r) {
    super(t), (this.clientVersion = r.clientVersion), (this.cause = r.cause);
  }
  get [Symbol.toStringTag]() {
    return this.name;
  }
};
var Te = class extends Un {
  constructor(t, r) {
    var n;
    super(t, r), (this.isRetryable = (n = r.isRetryable) != null ? n : !0);
  }
};
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
function Q(e, t) {
  return { ...e, isRetryable: t };
}
var rr = class extends Te {
  constructor(r) {
    super("This request must be retried", Q(r, !0));
    this.name = "ForcedRetryError";
    this.code = "P5001";
  }
};
B(rr, "ForcedRetryError");
g();
c();
f();
d();
m();
var Ct = class extends Te {
  constructor(r, n) {
    super(r, Q(n, !1));
    this.name = "InvalidDatasourceError";
    this.code = "P6001";
  }
};
B(Ct, "InvalidDatasourceError");
g();
c();
f();
d();
m();
var Mt = class extends Te {
  constructor(r, n) {
    super(r, Q(n, !1));
    this.name = "NotImplementedYetError";
    this.code = "P5004";
  }
};
B(Mt, "NotImplementedYetError");
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
var Z = class extends Te {
  constructor(t, r) {
    super(t, r), (this.response = r.response);
    let n = this.response.headers.get("prisma-request-id");
    if (n) {
      let o = `(The request id was: ${n})`;
      this.message = this.message + " " + o;
    }
  }
};
var Rt = class extends Z {
  constructor(r) {
    super("Schema needs to be uploaded", Q(r, !0));
    this.name = "SchemaMissingError";
    this.code = "P5005";
  }
};
B(Rt, "SchemaMissingError");
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
var ei = "This request could not be understood by the server",
  Mr = class extends Z {
    constructor(r, n, o) {
      super(n || ei, Q(r, !1));
      this.name = "BadRequestError";
      this.code = "P5000";
      o && (this.code = o);
    }
  };
B(Mr, "BadRequestError");
g();
c();
f();
d();
m();
var Rr = class extends Z {
  constructor(r, n) {
    super("Engine not started: healthcheck timeout", Q(r, !0));
    this.name = "HealthcheckTimeoutError";
    this.code = "P5013";
    this.logs = n;
  }
};
B(Rr, "HealthcheckTimeoutError");
g();
c();
f();
d();
m();
var Sr = class extends Z {
  constructor(r, n, o) {
    super(n, Q(r, !0));
    this.name = "EngineStartupError";
    this.code = "P5014";
    this.logs = o;
  }
};
B(Sr, "EngineStartupError");
g();
c();
f();
d();
m();
var Or = class extends Z {
  constructor(r) {
    super("Engine version is not supported", Q(r, !1));
    this.name = "EngineVersionNotSupportedError";
    this.code = "P5012";
  }
};
B(Or, "EngineVersionNotSupportedError");
g();
c();
f();
d();
m();
var ti = "Request timed out",
  Fr = class extends Z {
    constructor(r, n = ti) {
      super(n, Q(r, !1));
      this.name = "GatewayTimeoutError";
      this.code = "P5009";
    }
  };
B(Fr, "GatewayTimeoutError");
g();
c();
f();
d();
m();
var Qf = "Interactive transaction error",
  kr = class extends Z {
    constructor(r, n = Qf) {
      super(n, Q(r, !1));
      this.name = "InteractiveTransactionError";
      this.code = "P5015";
    }
  };
B(kr, "InteractiveTransactionError");
g();
c();
f();
d();
m();
var Wf = "Request parameters are invalid",
  Ir = class extends Z {
    constructor(r, n = Wf) {
      super(n, Q(r, !1));
      this.name = "InvalidRequestError";
      this.code = "P5011";
    }
  };
B(Ir, "InvalidRequestError");
g();
c();
f();
d();
m();
var ri = "Requested resource does not exist",
  Dr = class extends Z {
    constructor(r, n = ri) {
      super(n, Q(r, !1));
      this.name = "NotFoundError";
      this.code = "P5003";
    }
  };
B(Dr, "NotFoundError");
g();
c();
f();
d();
m();
var ni = "Unknown server error",
  nr = class extends Z {
    constructor(r, n, o) {
      super(n || ni, Q(r, !0));
      this.name = "ServerError";
      this.code = "P5006";
      this.logs = o;
    }
  };
B(nr, "ServerError");
g();
c();
f();
d();
m();
var oi = "Unauthorized, check your connection string",
  _r = class extends Z {
    constructor(r, n = oi) {
      super(n, Q(r, !1));
      this.name = "UnauthorizedError";
      this.code = "P5007";
    }
  };
B(_r, "UnauthorizedError");
g();
c();
f();
d();
m();
var ii = "Usage exceeded, retry again later",
  Nr = class extends Z {
    constructor(r, n = ii) {
      super(n, Q(r, !0));
      this.name = "UsageExceededError";
      this.code = "P5008";
    }
  };
B(Nr, "UsageExceededError");
async function Hf(e) {
  let t;
  try {
    t = await e.text();
  } catch (r) {
    return { type: "EmptyError" };
  }
  try {
    let r = JSON.parse(t);
    if (typeof r == "string")
      switch (r) {
        case "InternalDataProxyError":
          return { type: "DataProxyError", body: r };
        default:
          return { type: "UnknownTextError", body: r };
      }
    if (typeof r == "object" && r !== null) {
      if ("is_panic" in r && "message" in r && "error_code" in r)
        return { type: "QueryEngineError", body: r };
      if (
        "EngineNotStarted" in r ||
        "InteractiveTransactionMisrouted" in r ||
        "InvalidRequestError" in r
      ) {
        let n = Object.values(r)[0].reason;
        return typeof n == "string" &&
          !["SchemaMissing", "EngineVersionNotSupported"].includes(n)
          ? { type: "UnknownJsonError", body: r }
          : { type: "DataProxyError", body: r };
      }
    }
    return { type: "UnknownJsonError", body: r };
  } catch (r) {
    return t === ""
      ? { type: "EmptyError" }
      : { type: "UnknownTextError", body: t };
  }
}
async function Lr(e, t) {
  if (e.ok) return;
  let r = { clientVersion: t, response: e },
    n = await Hf(e);
  if (n.type === "QueryEngineError")
    throw new we(n.body.message, { code: n.body.error_code, clientVersion: t });
  if (n.type === "DataProxyError") {
    if (n.body === "InternalDataProxyError")
      throw new nr(r, "Internal Data Proxy error");
    if ("EngineNotStarted" in n.body) {
      if (n.body.EngineNotStarted.reason === "SchemaMissing") return new Rt(r);
      if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported")
        throw new Or(r);
      if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
        let { msg: o, logs: i } =
          n.body.EngineNotStarted.reason.EngineStartupError;
        throw new Sr(r, o, i);
      }
      if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
        let { msg: o, error_code: i } =
          n.body.EngineNotStarted.reason.KnownEngineStartupError;
        throw new fe(o, t, i);
      }
      if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
        let { logs: o } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
        throw new Rr(r, o);
      }
    }
    if ("InteractiveTransactionMisrouted" in n.body) {
      let o = {
        IDParseError: "Could not parse interactive transaction ID",
        NoQueryEngineFoundError:
          "Could not find Query Engine for the specified host and transaction ID",
        TransactionStartError: "Could not start interactive transaction",
      };
      throw new kr(r, o[n.body.InteractiveTransactionMisrouted.reason]);
    }
    if ("InvalidRequestError" in n.body)
      throw new Ir(r, n.body.InvalidRequestError.reason);
  }
  if (e.status === 401 || e.status === 403) throw new _r(r, or(oi, n));
  if (e.status === 404) return new Dr(r, or(ri, n));
  if (e.status === 429) throw new Nr(r, or(ii, n));
  if (e.status === 504) throw new Fr(r, or(ti, n));
  if (e.status >= 500) throw new nr(r, or(ni, n));
  if (e.status >= 400) throw new Mr(r, or(ei, n));
}
function or(e, t) {
  return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
}
g();
c();
f();
d();
m();
function ou(e) {
  let t = Math.pow(2, e) * 50,
    r = Math.ceil(Math.random() * t) - Math.ceil(t / 2),
    n = t + r;
  return new Promise((o) => setTimeout(() => o(n), n));
}
g();
c();
f();
d();
m();
function iu(e) {
  var r;
  if (
    !!(
      (r = e.generator) != null &&
      r.previewFeatures.some((n) => n.toLowerCase().includes("metrics"))
    )
  )
    throw new fe(
      "The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate",
      e.clientVersion,
    );
}
g();
c();
f();
d();
m();
function zf(e) {
  return e[0] * 1e3 + e[1] / 1e6;
}
function su(e) {
  return new Date(zf(e));
}
g();
c();
f();
d();
m();
var au = {
  "@prisma/debug": "workspace:*",
  "@prisma/engines-version":
    "5.9.0-32.23fdc5965b1e05fc54e5f26ed3de66776b93de64",
  "@prisma/fetch-engine": "workspace:*",
  "@prisma/get-platform": "workspace:*",
};
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
var Br = class extends Te {
  constructor(r, n) {
    super(
      `Cannot fetch data from service:
${r}`,
      Q(n, !0),
    );
    this.name = "RequestError";
    this.code = "P5010";
  }
};
B(Br, "RequestError");
async function St(e, t, r = (n) => n) {
  var o;
  let n = t.clientVersion;
  try {
    return typeof fetch == "function"
      ? await r(fetch)(e, t)
      : await r(si)(e, t);
  } catch (i) {
    let s = (o = i.message) != null ? o : "Unknown error";
    throw new Br(s, { clientVersion: n });
  }
}
function Yf(e) {
  return { ...e.headers, "Content-Type": "application/json" };
}
function Xf(e) {
  return { method: e.method, headers: Yf(e) };
}
function ed(e, t) {
  return {
    text: () => Promise.resolve(w.Buffer.concat(e).toString()),
    json: () =>
      Promise.resolve().then(() => JSON.parse(w.Buffer.concat(e).toString())),
    ok: t.statusCode >= 200 && t.statusCode <= 299,
    status: t.statusCode,
    url: t.url,
    headers: new ai(t.headers),
  };
}
async function si(e, t = {}) {
  let r = td("https"),
    n = Xf(t),
    o = [],
    { origin: i } = new URL(e);
  return new Promise((s, a) => {
    var l;
    let u = r.request(e, n, (p) => {
      let {
        statusCode: y,
        headers: { location: h },
      } = p;
      y >= 301 &&
        y <= 399 &&
        h &&
        (h.startsWith("http") === !1 ? s(si(`${i}${h}`, t)) : s(si(h, t))),
        p.on("data", (T) => o.push(T)),
        p.on("end", () => s(ed(o, p))),
        p.on("error", a);
    });
    u.on("error", a), u.end((l = t.body) != null ? l : "");
  });
}
var td = typeof Xn != "undefined" ? Xn : () => {},
  ai = class {
    constructor(t = {}) {
      this.headers = new Map();
      for (let [r, n] of Object.entries(t))
        if (typeof n == "string") this.headers.set(r, n);
        else if (Array.isArray(n)) for (let o of n) this.headers.set(r, o);
    }
    append(t, r) {
      this.headers.set(t, r);
    }
    delete(t) {
      this.headers.delete(t);
    }
    get(t) {
      var r;
      return (r = this.headers.get(t)) != null ? r : null;
    }
    has(t) {
      return this.headers.has(t);
    }
    set(t, r) {
      this.headers.set(t, r);
    }
    forEach(t, r) {
      for (let [n, o] of this.headers) t.call(r, o, n, this);
    }
  };
var rd = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/,
  uu = ve("prisma:client:dataproxyEngine");
async function nd(e, t) {
  var s, a, u;
  let r = au["@prisma/engines-version"],
    n = (s = t.clientVersion) != null ? s : "unknown";
  if (x.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
    return x.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
  if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory") return n;
  let [o, i] = (a = n == null ? void 0 : n.split("-")) != null ? a : [];
  if (i === void 0 && rd.test(o)) return o;
  if (i !== void 0 || n === "0.0.0" || n === "in-memory") {
    if (e.startsWith("localhost") || e.startsWith("127.0.0.1")) return "0.0.0";
    let [l] = (u = r.split("-")) != null ? u : [],
      [p, y, h] = l.split("."),
      T = od(`<=${p}.${y}.${h}`),
      C = await St(T, { clientVersion: n });
    if (!C.ok)
      throw new Error(
        `Failed to fetch stable Prisma version, unpkg.com status ${C.status} ${C.statusText}, response body: ${(await C.text()) || "<empty body>"}`,
      );
    let P = await C.text();
    uu("length of body fetched from unpkg.com", P.length);
    let R;
    try {
      R = JSON.parse(P);
    } catch (I) {
      throw (
        (console.error("JSON.parse error: body fetched from unpkg.com: ", P), I)
      );
    }
    return R.version;
  }
  throw new Mt(
    "Only `major.minor.patch` versions are supported by Accelerate.",
    { clientVersion: n },
  );
}
async function lu(e, t) {
  let r = await nd(e, t);
  return uu("version", r), r;
}
function od(e) {
  return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
}
var pu = 3,
  ui = ve("prisma:client:dataproxyEngine"),
  li = class {
    constructor({
      apiKey: t,
      tracingHelper: r,
      logLevel: n,
      logQueries: o,
      engineHash: i,
    }) {
      (this.apiKey = t),
        (this.tracingHelper = r),
        (this.logLevel = n),
        (this.logQueries = o),
        (this.engineHash = i);
    }
    build({ traceparent: t, interactiveTransaction: r } = {}) {
      let n = {
        Authorization: `Bearer ${this.apiKey}`,
        "Prisma-Engine-Hash": this.engineHash,
      };
      this.tracingHelper.isEnabled() &&
        (n.traceparent = t != null ? t : this.tracingHelper.getTraceParent()),
        r && (n["X-transaction-id"] = r.id);
      let o = this.buildCaptureSettings();
      return o.length > 0 && (n["X-capture-telemetry"] = o.join(", ")), n;
    }
    buildCaptureSettings() {
      let t = [];
      return (
        this.tracingHelper.isEnabled() && t.push("tracing"),
        this.logLevel && t.push(this.logLevel),
        this.logQueries && t.push("query"),
        t
      );
    }
  },
  jr = class extends Bn {
    constructor(t) {
      super(),
        iu(t),
        (this.config = t),
        (this.env = { ...this.config.env, ...x.env }),
        (this.inlineSchema = t.inlineSchema),
        (this.inlineDatasources = t.inlineDatasources),
        (this.inlineSchemaHash = t.inlineSchemaHash),
        (this.clientVersion = t.clientVersion),
        (this.engineHash = t.engineVersion),
        (this.logEmitter = t.logEmitter),
        (this.tracingHelper = this.config.tracingHelper);
    }
    apiKey() {
      return this.headerBuilder.apiKey;
    }
    version() {
      return this.engineHash;
    }
    async start() {
      this.startPromise !== void 0 && (await this.startPromise),
        (this.startPromise = (async () => {
          let [t, r] = this.extractHostAndApiKey();
          (this.host = t),
            (this.headerBuilder = new li({
              apiKey: r,
              tracingHelper: this.tracingHelper,
              logLevel: this.config.logLevel,
              logQueries: this.config.logQueries,
              engineHash: this.engineHash,
            })),
            (this.remoteClientVersion = await lu(t, this.config)),
            ui("host", this.host);
        })()),
        await this.startPromise;
    }
    async stop() {}
    propagateResponseExtensions(t) {
      var r, n;
      (r = t == null ? void 0 : t.logs) != null &&
        r.length &&
        t.logs.forEach((o) => {
          switch (o.level) {
            case "debug":
            case "error":
            case "trace":
            case "warn":
            case "info":
              break;
            case "query": {
              let i =
                typeof o.attributes.query == "string" ? o.attributes.query : "";
              if (!this.tracingHelper.isEnabled()) {
                let [s] = i.split("/* traceparent");
                i = s;
              }
              this.logEmitter.emit("query", {
                query: i,
                timestamp: su(o.timestamp),
                duration: Number(o.attributes.duration_ms),
                params: o.attributes.params,
                target: o.attributes.target,
              });
            }
          }
        }),
        (n = t == null ? void 0 : t.traces) != null &&
          n.length &&
          this.tracingHelper.createEngineSpan({ span: !0, spans: t.traces });
    }
    onBeforeExit() {
      throw new Error(
        '"beforeExit" hook is not applicable to the remote query engine',
      );
    }
    async url(t) {
      return (
        await this.start(),
        `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t}`
      );
    }
    async uploadSchema() {
      let t = { name: "schemaUpload", internal: !0 };
      return this.tracingHelper.runInChildSpan(t, async () => {
        let r = await St(await this.url("schema"), {
          method: "PUT",
          headers: this.headerBuilder.build(),
          body: this.inlineSchema,
          clientVersion: this.clientVersion,
        });
        r.ok || ui("schema response status", r.status);
        let n = await Lr(r, this.clientVersion);
        if (n)
          throw (
            (this.logEmitter.emit("warn", {
              message: `Error while uploading schema: ${n.message}`,
              timestamp: new Date(),
              target: "",
            }),
            n)
          );
        this.logEmitter.emit("info", {
          message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`,
          timestamp: new Date(),
          target: "",
        });
      });
    }
    request(
      t,
      { traceparent: r, interactiveTransaction: n, customDataProxyFetch: o },
    ) {
      return this.requestInternal({
        body: t,
        traceparent: r,
        interactiveTransaction: n,
        customDataProxyFetch: o,
      });
    }
    async requestBatch(
      t,
      { traceparent: r, transaction: n, customDataProxyFetch: o },
    ) {
      let i = (n == null ? void 0 : n.kind) === "itx" ? n.options : void 0,
        s = nu(t, n),
        { batchResult: a, elapsed: u } = await this.requestInternal({
          body: s,
          customDataProxyFetch: o,
          interactiveTransaction: i,
          traceparent: r,
        });
      return a.map((l) =>
        "errors" in l && l.errors.length > 0
          ? Xo(l.errors[0], this.clientVersion)
          : { data: l, elapsed: u },
      );
    }
    requestInternal({
      body: t,
      traceparent: r,
      customDataProxyFetch: n,
      interactiveTransaction: o,
    }) {
      return this.withRetry({
        actionGerund: "querying",
        callback: async ({ logHttpCall: i }) => {
          let s = o
            ? `${o.payload.endpoint}/graphql`
            : await this.url("graphql");
          i(s);
          let a = await St(
            s,
            {
              method: "POST",
              headers: this.headerBuilder.build({
                traceparent: r,
                interactiveTransaction: o,
              }),
              body: JSON.stringify(t),
              clientVersion: this.clientVersion,
            },
            n,
          );
          a.ok || ui("graphql response status", a.status),
            await this.handleError(await Lr(a, this.clientVersion));
          let u = await a.json(),
            l = u.extensions;
          if ((l && this.propagateResponseExtensions(l), u.errors))
            throw u.errors.length === 1
              ? Xo(u.errors[0], this.config.clientVersion)
              : new Ie(u.errors, { clientVersion: this.config.clientVersion });
          return u;
        },
      });
    }
    async transaction(t, r, n) {
      let o = {
        start: "starting",
        commit: "committing",
        rollback: "rolling back",
      };
      return this.withRetry({
        actionGerund: `${o[t]} transaction`,
        callback: async ({ logHttpCall: i }) => {
          var s, a;
          if (t === "start") {
            let u = JSON.stringify({
                max_wait:
                  (s = n == null ? void 0 : n.maxWait) != null ? s : 2e3,
                timeout: (a = n == null ? void 0 : n.timeout) != null ? a : 5e3,
                isolation_level: n == null ? void 0 : n.isolationLevel,
              }),
              l = await this.url("transaction/start");
            i(l);
            let p = await St(l, {
              method: "POST",
              headers: this.headerBuilder.build({ traceparent: r.traceparent }),
              body: u,
              clientVersion: this.clientVersion,
            });
            await this.handleError(await Lr(p, this.clientVersion));
            let y = await p.json(),
              h = y.extensions;
            h && this.propagateResponseExtensions(h);
            let T = y.id,
              C = y["data-proxy"].endpoint;
            return { id: T, payload: { endpoint: C } };
          } else {
            let u = `${n.payload.endpoint}/${t}`;
            i(u);
            let l = await St(u, {
              method: "POST",
              headers: this.headerBuilder.build({ traceparent: r.traceparent }),
              clientVersion: this.clientVersion,
            });
            await this.handleError(await Lr(l, this.clientVersion));
            let y = (await l.json()).extensions;
            y && this.propagateResponseExtensions(y);
            return;
          }
        },
      });
    }
    extractHostAndApiKey() {
      let t = { clientVersion: this.clientVersion },
        r = Object.keys(this.inlineDatasources)[0],
        n = jn({
          inlineDatasources: this.inlineDatasources,
          overrideDatasources: this.config.overrideDatasources,
          clientVersion: this.clientVersion,
          env: this.env,
        }),
        o;
      try {
        o = new URL(n);
      } catch (l) {
        throw new Ct(
          `Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``,
          t,
        );
      }
      let { protocol: i, host: s, searchParams: a } = o;
      if (i !== "prisma:")
        throw new Ct(
          `Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``,
          t,
        );
      let u = a.get("api_key");
      if (u === null || u.length < 1)
        throw new Ct(
          `Error validating datasource \`${r}\`: the URL must contain a valid API key`,
          t,
        );
      return [s, u];
    }
    metrics() {
      throw new Mt("Metrics are not yet supported for Accelerate", {
        clientVersion: this.clientVersion,
      });
    }
    async withRetry(t) {
      var r;
      for (let n = 0; ; n++) {
        let o = (i) => {
          this.logEmitter.emit("info", {
            message: `Calling ${i} (n=${n})`,
            timestamp: new Date(),
            target: "",
          });
        };
        try {
          return await t.callback({ logHttpCall: o });
        } catch (i) {
          if (!(i instanceof Te) || !i.isRetryable) throw i;
          if (n >= pu) throw i instanceof rr ? i.cause : i;
          this.logEmitter.emit("warn", {
            message: `Attempt ${n + 1}/${pu} failed for ${t.actionGerund}: ${(r = i.message) != null ? r : "(unknown)"}`,
            timestamp: new Date(),
            target: "",
          });
          let s = await ou(n);
          this.logEmitter.emit("warn", {
            message: `Retrying after ${s}ms`,
            timestamp: new Date(),
            target: "",
          });
        }
      }
    }
    async handleError(t) {
      if (t instanceof Rt)
        throw (
          (await this.uploadSchema(),
          new rr({ clientVersion: this.clientVersion, cause: t }))
        );
      if (t) throw t;
    }
  };
function cu(e, t) {
  let r;
  try {
    r = jn({
      inlineDatasources: t.inlineDatasources,
      overrideDatasources: t.overrideDatasources,
      env: { ...t.env, ...x.env },
      clientVersion: t.clientVersion,
    });
  } catch (u) {}
  e.noEngine !== !0 &&
    r != null &&
    r.startsWith("prisma://") &&
    mn(
      "recommend--no-engine",
      "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)",
    );
  let n = lr(t.generator),
    o = !!((r != null && r.startsWith("prisma://")) || e.noEngine),
    i = !!t.adapter,
    s = n === "library",
    a = n === "binary";
  if ((o && i) || i) {
    let u;
    throw (
      ((u = [
        "Prisma Client was configured to use the `adapter` option but it was imported via its `/edge` endpoint.",
        "Please either remove the `/edge` endpoint or remove the `adapter` from the Prisma Client constructor.",
      ]),
      new ge(
        u.join(`
`),
        { clientVersion: t.clientVersion },
      ))
    );
  }
  return new jr(t);
}
g();
c();
f();
d();
m();
function $n({ generator: e }) {
  var t;
  return (t = e == null ? void 0 : e.previewFeatures) != null ? t : [];
}
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
var hu = Oe(pi());
g();
c();
f();
d();
m();
function gu(e, t) {
  let r = yu(e),
    n = id(r),
    o = ad(n);
  o ? qn(o, t) : t.addErrorMessage(() => "Unknown error");
}
function yu(e) {
  return e.errors.flatMap((t) => (t.kind === "Union" ? yu(t) : [t]));
}
function id(e) {
  let t = new Map(),
    r = [];
  for (let n of e) {
    if (n.kind !== "InvalidArgumentType") {
      r.push(n);
      continue;
    }
    let o = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`,
      i = t.get(o);
    i
      ? t.set(o, {
          ...n,
          argument: {
            ...n.argument,
            typeNames: sd(i.argument.typeNames, n.argument.typeNames),
          },
        })
      : t.set(o, n);
  }
  return r.push(...t.values()), r;
}
function sd(e, t) {
  return [...new Set(e.concat(t))];
}
function ad(e) {
  return ko(e, (t, r) => {
    let n = du(t),
      o = du(r);
    return n !== o ? n - o : mu(t) - mu(r);
  });
}
function du(e) {
  let t = 0;
  return (
    Array.isArray(e.selectionPath) && (t += e.selectionPath.length),
    Array.isArray(e.argumentPath) && (t += e.argumentPath.length),
    t
  );
}
function mu(e) {
  switch (e.kind) {
    case "InvalidArgumentValue":
    case "ValueTooLarge":
      return 20;
    case "InvalidArgumentType":
      return 10;
    case "RequiredArgumentMissing":
      return -10;
    default:
      return 0;
  }
}
g();
c();
f();
d();
m();
var ze = class {
  constructor(t, r) {
    this.name = t;
    this.value = r;
    this.isRequired = !1;
  }
  makeRequired() {
    return (this.isRequired = !0), this;
  }
  write(t) {
    let {
      colors: { green: r },
    } = t.context;
    t.addMarginSymbol(r(this.isRequired ? "+" : "?")),
      t.write(r(this.name)),
      this.isRequired || t.write(r("?")),
      t.write(r(": ")),
      typeof this.value == "string"
        ? t.write(r(this.value))
        : t.write(this.value);
  }
};
g();
c();
f();
d();
m();
var Vn = class {
  constructor() {
    this.fields = [];
  }
  addField(t, r) {
    return (
      this.fields.push({
        write(n) {
          let { green: o, dim: i } = n.context.colors;
          n.write(o(i(`${t}: ${r}`))).addMarginSymbol(o(i("+")));
        },
      }),
      this
    );
  }
  write(t) {
    let {
      colors: { green: r },
    } = t.context;
    t.writeLine(r("{"))
      .withIndent(() => {
        t.writeJoined(Yt, this.fields).newLine();
      })
      .write(r("}"))
      .addMarginSymbol(r("+"));
  }
};
function qn(e, t) {
  switch (e.kind) {
    case "IncludeAndSelect":
      ud(e, t);
      break;
    case "IncludeOnScalar":
      ld(e, t);
      break;
    case "EmptySelection":
      pd(e, t);
      break;
    case "UnknownSelectionField":
      cd(e, t);
      break;
    case "UnknownArgument":
      fd(e, t);
      break;
    case "UnknownInputField":
      dd(e, t);
      break;
    case "RequiredArgumentMissing":
      md(e, t);
      break;
    case "InvalidArgumentType":
      gd(e, t);
      break;
    case "InvalidArgumentValue":
      yd(e, t);
      break;
    case "ValueTooLarge":
      hd(e, t);
      break;
    case "SomeFieldsMissing":
      xd(e, t);
      break;
    case "TooManyFieldsGiven":
      bd(e, t);
      break;
    case "Union":
      gu(e, t);
      break;
    default:
      throw new Error("not implemented: " + e.kind);
  }
}
function ud(e, t) {
  var n, o;
  let r = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  r &&
    r instanceof ae &&
    ((n = r.getField("include")) == null || n.markAsError(),
    (o = r.getField("select")) == null || o.markAsError()),
    t.addErrorMessage(
      (i) =>
        `Please ${i.bold("either")} use ${i.green("`include`")} or ${i.green("`select`")}, but ${i.red("not both")} at the same time.`,
    );
}
function ld(e, t) {
  var s, a;
  let [r, n] = Kn(e.selectionPath),
    o = e.outputType,
    i = (s = t.arguments.getDeepSelectionParent(r)) == null ? void 0 : s.value;
  if (i && ((a = i.getField(n)) == null || a.markAsError(), o))
    for (let u of o.fields)
      u.isRelation && i.addSuggestion(new ze(u.name, "true"));
  t.addErrorMessage((u) => {
    let l = `Invalid scalar field ${u.red(`\`${n}\``)} for ${u.bold("include")} statement`;
    return (
      o ? (l += ` on model ${u.bold(o.name)}. ${Ur(u)}`) : (l += "."),
      (l += `
Note that ${u.bold("include")} statements only accept relation fields.`),
      l
    );
  });
}
function pd(e, t) {
  var i, s;
  let r = e.outputType,
    n =
      (i = t.arguments.getDeepSelectionParent(e.selectionPath)) == null
        ? void 0
        : i.value,
    o = (s = n == null ? void 0 : n.isEmpty()) != null ? s : !1;
  n && (n.removeAllFields(), wu(n, r)),
    t.addErrorMessage((a) =>
      o
        ? `The ${a.red("`select`")} statement for type ${a.bold(r.name)} must not be empty. ${Ur(a)}`
        : `The ${a.red("`select`")} statement for type ${a.bold(r.name)} needs ${a.bold("at least one truthy value")}.`,
    );
}
function cd(e, t) {
  var i;
  let [r, n] = Kn(e.selectionPath),
    o = t.arguments.getDeepSelectionParent(r);
  o &&
    ((i = o.value.getField(n)) == null || i.markAsError(),
    wu(o.value, e.outputType)),
    t.addErrorMessage((s) => {
      let a = [`Unknown field ${s.red(`\`${n}\``)}`];
      return (
        o && a.push(`for ${s.bold(o.kind)} statement`),
        a.push(`on model ${s.bold(`\`${e.outputType.name}\``)}.`),
        a.push(Ur(s)),
        a.join(" ")
      );
    });
}
function fd(e, t) {
  var o;
  let r = e.argumentPath[0],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  n instanceof ae &&
    ((o = n.getField(r)) == null || o.markAsError(), wd(n, e.arguments)),
    t.addErrorMessage((i) =>
      xu(
        i,
        r,
        e.arguments.map((s) => s.name),
      ),
    );
}
function dd(e, t) {
  var i;
  let [r, n] = Kn(e.argumentPath),
    o = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  if (o instanceof ae) {
    (i = o.getDeepField(e.argumentPath)) == null || i.markAsError();
    let s = o.getDeepFieldValue(r);
    s instanceof ae && Eu(s, e.inputType);
  }
  t.addErrorMessage((s) =>
    xu(
      s,
      n,
      e.inputType.fields.map((a) => a.name),
    ),
  );
}
function xu(e, t, r) {
  let n = [`Unknown argument \`${e.red(t)}\`.`],
    o = Pd(t, r);
  return (
    o && n.push(`Did you mean \`${e.green(o)}\`?`),
    r.length > 0 && n.push(Ur(e)),
    n.join(" ")
  );
}
function md(e, t) {
  let r;
  t.addErrorMessage((u) =>
    (r == null ? void 0 : r.value) instanceof ue && r.value.text === "null"
      ? `Argument \`${u.green(i)}\` must not be ${u.red("null")}.`
      : `Argument \`${u.green(i)}\` is missing.`,
  );
  let n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  if (!(n instanceof ae)) return;
  let [o, i] = Kn(e.argumentPath),
    s = new Vn(),
    a = n.getDeepFieldValue(o);
  if (a instanceof ae)
    if (
      ((r = a.getField(i)),
      r && a.removeField(i),
      e.inputTypes.length === 1 && e.inputTypes[0].kind === "object")
    ) {
      for (let u of e.inputTypes[0].fields)
        s.addField(u.name, u.typeNames.join(" | "));
      a.addSuggestion(new ze(i, s).makeRequired());
    } else {
      let u = e.inputTypes.map(bu).join(" | ");
      a.addSuggestion(new ze(i, u).makeRequired());
    }
}
function bu(e) {
  return e.kind === "list" ? `${bu(e.elementType)}[]` : e.name;
}
function gd(e, t) {
  var o;
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  n instanceof ae &&
    ((o = n.getDeepFieldValue(e.argumentPath)) == null || o.markAsError()),
    t.addErrorMessage((i) => {
      let s = Gn(
        "or",
        e.argument.typeNames.map((a) => i.green(a)),
      );
      return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${s}, provided ${i.red(e.inferredType)}.`;
    });
}
function yd(e, t) {
  var o;
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  n instanceof ae &&
    ((o = n.getDeepFieldValue(e.argumentPath)) == null || o.markAsError()),
    t.addErrorMessage((i) => {
      let s = [`Invalid value for argument \`${i.bold(r)}\``];
      if (
        (e.underlyingError && s.push(`: ${e.underlyingError}`),
        s.push("."),
        e.argument.typeNames.length > 0)
      ) {
        let a = Gn(
          "or",
          e.argument.typeNames.map((u) => i.green(u)),
        );
        s.push(` Expected ${a}.`);
      }
      return s.join("");
    });
}
function hd(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath),
    o;
  if (n instanceof ae) {
    let i = n.getDeepField(e.argumentPath),
      s = i == null ? void 0 : i.value;
    s == null || s.markAsError(), s instanceof ue && (o = s.text);
  }
  t.addErrorMessage((i) => {
    let s = ["Unable to fit value"];
    return (
      o && s.push(i.red(o)),
      s.push(`into a 64-bit signed integer for field \`${i.bold(r)}\``),
      s.join(" ")
    );
  });
}
function xd(e, t) {
  let r = e.argumentPath[e.argumentPath.length - 1],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  if (n instanceof ae) {
    let o = n.getDeepFieldValue(e.argumentPath);
    o instanceof ae && Eu(o, e.inputType);
  }
  t.addErrorMessage((o) => {
    let i = [
      `Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`,
    ];
    return (
      e.constraints.minFieldCount === 1
        ? e.constraints.requiredFields
          ? i.push(
              `${o.green("at least one of")} ${Gn(
                "or",
                e.constraints.requiredFields.map((s) => `\`${o.bold(s)}\``),
              )} arguments.`,
            )
          : i.push(`${o.green("at least one")} argument.`)
        : i.push(
            `${o.green(`at least ${e.constraints.minFieldCount}`)} arguments.`,
          ),
      i.push(Ur(o)),
      i.join(" ")
    );
  });
}
function bd(e, t) {
  let r = e.argumentPath[e.argumentPath.length - 1],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath),
    o = [];
  if (n instanceof ae) {
    let i = n.getDeepFieldValue(e.argumentPath);
    i instanceof ae && (i.markAsError(), (o = Object.keys(i.getFields())));
  }
  t.addErrorMessage((i) => {
    let s = [
      `Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`,
    ];
    return (
      e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1
        ? s.push(`${i.green("exactly one")} argument,`)
        : e.constraints.maxFieldCount == 1
          ? s.push(`${i.green("at most one")} argument,`)
          : s.push(
              `${i.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`,
            ),
      s.push(
        `but you provided ${Gn(
          "and",
          o.map((a) => i.red(a)),
        )}. Please choose`,
      ),
      e.constraints.maxFieldCount === 1
        ? s.push("one.")
        : s.push(`${e.constraints.maxFieldCount}.`),
      s.join(" ")
    );
  });
}
function wu(e, t) {
  for (let r of t.fields)
    e.hasField(r.name) || e.addSuggestion(new ze(r.name, "true"));
}
function wd(e, t) {
  for (let r of t)
    e.hasField(r.name) ||
      e.addSuggestion(new ze(r.name, r.typeNames.join(" | ")));
}
function Eu(e, t) {
  if (t.kind === "object")
    for (let r of t.fields)
      e.hasField(r.name) ||
        e.addSuggestion(new ze(r.name, r.typeNames.join(" | ")));
}
function Kn(e) {
  let t = [...e],
    r = t.pop();
  if (!r) throw new Error("unexpected empty path");
  return [t, r];
}
function Ur({ green: e, enabled: t }) {
  return (
    "Available options are " +
    (t ? `listed in ${e("green")}` : "marked with ?") +
    "."
  );
}
function Gn(e, t) {
  if (t.length === 1) return t[0];
  let r = [...t],
    n = r.pop();
  return `${r.join(", ")} ${e} ${n}`;
}
var Ed = 3;
function Pd(e, t) {
  let r = 1 / 0,
    n;
  for (let o of t) {
    let i = (0, hu.default)(e, o);
    i > Ed || (i < r && ((r = i), (n = o)));
  }
  return n;
}
function Jn({
  args: e,
  errors: t,
  errorFormat: r,
  callsite: n,
  originalMethod: o,
  clientVersion: i,
}) {
  let s = On(e);
  for (let y of t) qn(y, s);
  let a = r === "pretty" ? xa : Rn,
    u = s.renderAllMessages(a),
    l = new Jt(0, { colors: a }).write(s).toString(),
    p = tr({
      message: u,
      callsite: n,
      originalMethod: o,
      showColors: r === "pretty",
      callArguments: l,
    });
  throw new ge(p, { clientVersion: i });
}
var vd = {
  findUnique: "findUnique",
  findUniqueOrThrow: "findUniqueOrThrow",
  findFirst: "findFirst",
  findFirstOrThrow: "findFirstOrThrow",
  findMany: "findMany",
  count: "aggregate",
  create: "createOne",
  createMany: "createMany",
  update: "updateOne",
  updateMany: "updateMany",
  upsert: "upsertOne",
  delete: "deleteOne",
  deleteMany: "deleteMany",
  executeRaw: "executeRaw",
  queryRaw: "queryRaw",
  aggregate: "aggregate",
  groupBy: "groupBy",
  runCommandRaw: "runCommandRaw",
  findRaw: "findRaw",
  aggregateRaw: "aggregateRaw",
};
function Pu({
  modelName: e,
  action: t,
  args: r,
  runtimeDataModel: n,
  extensions: o,
  callsite: i,
  clientMethod: s,
  errorFormat: a,
  clientVersion: u,
}) {
  let l = new ci({
    runtimeDataModel: n,
    modelName: e,
    action: t,
    rootArgs: r,
    callsite: i,
    extensions: o,
    selectionPath: [],
    argumentPath: [],
    originalMethod: s,
    errorFormat: a,
    clientVersion: u,
  });
  return { modelName: e, action: vd[t], query: fi(r, l) };
}
function fi({ select: e, include: t, ...r } = {}, n) {
  return { arguments: Au(r, n), selection: Ad(e, t, n) };
}
function Ad(e, t, r) {
  return (
    e &&
      t &&
      r.throwValidationError({
        kind: "IncludeAndSelect",
        selectionPath: r.getSelectionPath(),
      }),
    e ? Md(e, r) : Td(r, t)
  );
}
function Td(e, t) {
  let r = {};
  return (
    e.model && !e.isRawAction() && ((r.$composites = !0), (r.$scalars = !0)),
    t && Cd(r, t, e),
    r
  );
}
function Cd(e, t, r) {
  for (let [n, o] of Object.entries(t)) {
    let i = r.findField(n);
    i &&
      (i == null ? void 0 : i.kind) !== "object" &&
      r.throwValidationError({
        kind: "IncludeOnScalar",
        selectionPath: r.getSelectionPath().concat(n),
        outputType: r.getOutputTypeDescription(),
      }),
      o === !0
        ? (e[n] = !0)
        : typeof o == "object" && (e[n] = fi(o, r.nestSelection(n)));
  }
}
function Md(e, t) {
  let r = {},
    n = t.getComputedFields(),
    o = Ya(e, n);
  for (let [i, s] of Object.entries(o)) {
    let a = t.findField(i);
    (n != null && n[i] && !a) ||
      (s === !0
        ? (r[i] = !0)
        : typeof s == "object" && (r[i] = fi(s, t.nestSelection(i))));
  }
  return r;
}
function vu(e, t) {
  if (e === null) return null;
  if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
    return e;
  if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
  if (Qt(e)) {
    if (xn(e)) return { $type: "DateTime", value: e.toISOString() };
    t.throwValidationError({
      kind: "InvalidArgumentValue",
      selectionPath: t.getSelectionPath(),
      argumentPath: t.getArgumentPath(),
      argument: { name: t.getArgumentName(), typeNames: ["Date"] },
      underlyingError: "Provided Date object is invalid",
    });
  }
  if (Zt(e))
    return {
      $type: "FieldRef",
      value: { _ref: e.name, _container: e.modelName },
    };
  if (Array.isArray(e)) return Rd(e, t);
  if (ArrayBuffer.isView(e))
    return { $type: "Bytes", value: w.Buffer.from(e).toString("base64") };
  if (Sd(e)) return e.values;
  if (zt(e)) return { $type: "Decimal", value: e.toFixed() };
  if (e instanceof Qe) {
    if (e !== _o.instances[e._getName()])
      throw new Error("Invalid ObjectEnumValue");
    return { $type: "Enum", value: e._getName() };
  }
  if (Od(e)) return e.toJSON();
  if (typeof e == "object") return Au(e, t);
  t.throwValidationError({
    kind: "InvalidArgumentValue",
    selectionPath: t.getSelectionPath(),
    argumentPath: t.getArgumentPath(),
    argument: { name: t.getArgumentName(), typeNames: [] },
    underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it`,
  });
}
function Au(e, t) {
  if (e.$type) return { $type: "Raw", value: e };
  let r = {};
  for (let n in e) {
    let o = e[n];
    o !== void 0 && (r[n] = vu(o, t.nestArgument(n)));
  }
  return r;
}
function Rd(e, t) {
  let r = [];
  for (let n = 0; n < e.length; n++) {
    let o = t.nestArgument(String(n)),
      i = e[n];
    i === void 0 &&
      t.throwValidationError({
        kind: "InvalidArgumentValue",
        selectionPath: o.getSelectionPath(),
        argumentPath: o.getArgumentPath(),
        argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] },
        underlyingError:
          "Can not use `undefined` value within array. Use `null` or filter out `undefined` values",
      }),
      r.push(vu(i, o));
  }
  return r;
}
function Sd(e) {
  return typeof e == "object" && e !== null && e.__prismaRawParameters__ === !0;
}
function Od(e) {
  return typeof e == "object" && e !== null && typeof e.toJSON == "function";
}
var ci = class e {
  constructor(t) {
    this.params = t;
    this.params.modelName &&
      (this.model = this.params.runtimeDataModel.models[this.params.modelName]);
  }
  throwValidationError(t) {
    var r;
    Jn({
      errors: [t],
      originalMethod: this.params.originalMethod,
      args: (r = this.params.rootArgs) != null ? r : {},
      callsite: this.params.callsite,
      errorFormat: this.params.errorFormat,
      clientVersion: this.params.clientVersion,
    });
  }
  getSelectionPath() {
    return this.params.selectionPath;
  }
  getArgumentPath() {
    return this.params.argumentPath;
  }
  getArgumentName() {
    return this.params.argumentPath[this.params.argumentPath.length - 1];
  }
  getOutputTypeDescription() {
    if (!(!this.params.modelName || !this.model))
      return {
        name: this.params.modelName,
        fields: this.model.fields.map((t) => ({
          name: t.name,
          typeName: "boolean",
          isRelation: t.kind === "object",
        })),
      };
  }
  isRawAction() {
    return [
      "executeRaw",
      "queryRaw",
      "runCommandRaw",
      "findRaw",
      "aggregateRaw",
    ].includes(this.params.action);
  }
  getComputedFields() {
    if (this.params.modelName)
      return this.params.extensions.getAllComputedFields(this.params.modelName);
  }
  findField(t) {
    var r;
    return (r = this.model) == null
      ? void 0
      : r.fields.find((n) => n.name === t);
  }
  nestSelection(t) {
    let r = this.findField(t),
      n = (r == null ? void 0 : r.kind) === "object" ? r.type : void 0;
    return new e({
      ...this.params,
      modelName: n,
      selectionPath: this.params.selectionPath.concat(t),
    });
  }
  nestArgument(t) {
    return new e({
      ...this.params,
      argumentPath: this.params.argumentPath.concat(t),
    });
  }
};
g();
c();
f();
d();
m();
var Tu = (e) => ({ command: e });
g();
c();
f();
d();
m();
g();
c();
f();
d();
m();
var Cu = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
g();
c();
f();
d();
m();
function $r(e) {
  try {
    return Mu(e, "fast");
  } catch (t) {
    return Mu(e, "slow");
  }
}
function Mu(e, t) {
  return JSON.stringify(e.map((r) => Fd(r, t)));
}
function Fd(e, t) {
  return typeof e == "bigint"
    ? { prisma__type: "bigint", prisma__value: e.toString() }
    : Qt(e)
      ? { prisma__type: "date", prisma__value: e.toJSON() }
      : He.isDecimal(e)
        ? { prisma__type: "decimal", prisma__value: e.toJSON() }
        : w.Buffer.isBuffer(e)
          ? { prisma__type: "bytes", prisma__value: e.toString("base64") }
          : kd(e) || ArrayBuffer.isView(e)
            ? {
                prisma__type: "bytes",
                prisma__value: w.Buffer.from(e).toString("base64"),
              }
            : typeof e == "object" && t === "slow"
              ? Su(e)
              : e;
}
function kd(e) {
  return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer
    ? !0
    : typeof e == "object" && e !== null
      ? e[Symbol.toStringTag] === "ArrayBuffer" ||
        e[Symbol.toStringTag] === "SharedArrayBuffer"
      : !1;
}
function Su(e) {
  if (typeof e != "object" || e === null) return e;
  if (typeof e.toJSON == "function") return e.toJSON();
  if (Array.isArray(e)) return e.map(Ru);
  let t = {};
  for (let r of Object.keys(e)) t[r] = Ru(e[r]);
  return t;
}
function Ru(e) {
  return typeof e == "bigint" ? e.toString() : Su(e);
}
var Id = /^(\s*alter\s)/i,
  Ou = ve("prisma:client");
function di(e, t, r, n) {
  if (
    !(e !== "postgresql" && e !== "cockroachdb") &&
    r.length > 0 &&
    Id.exec(t)
  )
    throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
}
var mi =
    ({ clientMethod: e, activeProvider: t }) =>
    (r) => {
      let n = "",
        o;
      if (Array.isArray(r)) {
        let [i, ...s] = r;
        (n = i), (o = { values: $r(s || []), __prismaRawParameters__: !0 });
      } else
        switch (t) {
          case "sqlite":
          case "mysql": {
            (n = r.sql),
              (o = { values: $r(r.values), __prismaRawParameters__: !0 });
            break;
          }
          case "cockroachdb":
          case "postgresql":
          case "postgres": {
            (n = r.text),
              (o = { values: $r(r.values), __prismaRawParameters__: !0 });
            break;
          }
          case "sqlserver": {
            (n = Cu(r)),
              (o = { values: $r(r.values), __prismaRawParameters__: !0 });
            break;
          }
          default:
            throw new Error(`The ${t} provider does not support ${e}`);
        }
      return (
        o != null && o.values
          ? Ou(`prisma.${e}(${n}, ${o.values})`)
          : Ou(`prisma.${e}(${n})`),
        { query: n, parameters: o }
      );
    },
  Fu = {
    requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    },
    middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new Se(t, r);
    },
  },
  ku = {
    requestArgsToMiddlewareArgs(e) {
      return [e];
    },
    middlewareArgsToRequestArgs(e) {
      return e[0];
    },
  };
g();
c();
f();
d();
m();
function gi(e) {
  return function (r) {
    let n,
      o = (i = e) => {
        try {
          return i === void 0 || (i == null ? void 0 : i.kind) === "itx"
            ? n != null
              ? n
              : (n = Iu(r(i)))
            : Iu(r(i));
        } catch (s) {
          return Promise.reject(s);
        }
      };
    return {
      then(i, s) {
        return o().then(i, s);
      },
      catch(i) {
        return o().catch(i);
      },
      finally(i) {
        return o().finally(i);
      },
      requestTransaction(i) {
        let s = o(i);
        return s.requestTransaction ? s.requestTransaction(i) : s;
      },
      [Symbol.toStringTag]: "PrismaPromise",
    };
  };
}
function Iu(e) {
  return typeof e.then == "function" ? e : Promise.resolve(e);
}
g();
c();
f();
d();
m();
var Du = {
    isEnabled() {
      return !1;
    },
    getTraceParent() {
      return "00-10-10-00";
    },
    async createEngineSpan() {},
    getActiveContext() {},
    runInChildSpan(e, t) {
      return t();
    },
  },
  yi = class {
    isEnabled() {
      return this.getGlobalTracingHelper().isEnabled();
    }
    getTraceParent(t) {
      return this.getGlobalTracingHelper().getTraceParent(t);
    }
    createEngineSpan(t) {
      return this.getGlobalTracingHelper().createEngineSpan(t);
    }
    getActiveContext() {
      return this.getGlobalTracingHelper().getActiveContext();
    }
    runInChildSpan(t, r) {
      return this.getGlobalTracingHelper().runInChildSpan(t, r);
    }
    getGlobalTracingHelper() {
      var t, r;
      return (r =
        (t = globalThis.PRISMA_INSTRUMENTATION) == null ? void 0 : t.helper) !=
        null
        ? r
        : Du;
    }
  };
function _u(e) {
  return e.includes("tracing") ? new yi() : Du;
}
g();
c();
f();
d();
m();
function Nu(e, t = () => {}) {
  let r,
    n = new Promise((o) => (r = o));
  return {
    then(o) {
      return --e === 0 && r(t()), o == null ? void 0 : o(n);
    },
  };
}
g();
c();
f();
d();
m();
function Lu(e) {
  return typeof e == "string"
    ? e
    : e.reduce(
        (t, r) => {
          let n = typeof r == "string" ? r : r.level;
          return n === "query"
            ? t
            : t && (r === "info" || t === "info")
              ? "info"
              : n;
        },
        void 0,
      );
}
g();
c();
f();
d();
m();
var Qn = class {
  constructor() {
    this._middlewares = [];
  }
  use(t) {
    this._middlewares.push(t);
  }
  get(t) {
    return this._middlewares[t];
  }
  has(t) {
    return !!this._middlewares[t];
  }
  length() {
    return this._middlewares.length;
  }
};
g();
c();
f();
d();
m();
var ju = Oe(Ws());
g();
c();
f();
d();
m();
function Wn(e) {
  return typeof e.batchRequestIdx == "number";
}
g();
c();
f();
d();
m();
function Hn(e) {
  return e === null
    ? e
    : Array.isArray(e)
      ? e.map(Hn)
      : typeof e == "object"
        ? Dd(e)
          ? _d(e)
          : Gt(e, Hn)
        : e;
}
function Dd(e) {
  return e !== null && typeof e == "object" && typeof e.$type == "string";
}
function _d({ $type: e, value: t }) {
  switch (e) {
    case "BigInt":
      return BigInt(t);
    case "Bytes":
      return w.Buffer.from(t, "base64");
    case "DateTime":
      return new Date(t);
    case "Decimal":
      return new He(t);
    case "Json":
      return JSON.parse(t);
    default:
      Pt(t, "Unknown tagged value");
  }
}
g();
c();
f();
d();
m();
function Bu(e) {
  if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
  let t = [];
  return (
    e.modelName && t.push(e.modelName),
    e.query.arguments && t.push(hi(e.query.arguments)),
    t.push(hi(e.query.selection)),
    t.join("")
  );
}
function hi(e) {
  return `(${Object.keys(e)
    .sort()
    .map((r) => {
      let n = e[r];
      return typeof n == "object" && n !== null ? `(${r} ${hi(n)})` : r;
    })
    .join(" ")})`;
}
g();
c();
f();
d();
m();
var Nd = {
  aggregate: !1,
  aggregateRaw: !1,
  createMany: !0,
  createOne: !0,
  deleteMany: !0,
  deleteOne: !0,
  executeRaw: !0,
  findFirst: !1,
  findFirstOrThrow: !1,
  findMany: !1,
  findRaw: !1,
  findUnique: !1,
  findUniqueOrThrow: !1,
  groupBy: !1,
  queryRaw: !1,
  runCommandRaw: !0,
  updateMany: !0,
  updateOne: !0,
  upsertOne: !0,
};
function xi(e) {
  return Nd[e];
}
g();
c();
f();
d();
m();
var zn = class {
  constructor(t) {
    this.options = t;
    this.tickActive = !1;
    this.batches = {};
  }
  request(t) {
    let r = this.options.batchBy(t);
    return r
      ? (this.batches[r] ||
          ((this.batches[r] = []),
          this.tickActive ||
            ((this.tickActive = !0),
            x.nextTick(() => {
              this.dispatchBatches(), (this.tickActive = !1);
            }))),
        new Promise((n, o) => {
          this.batches[r].push({ request: t, resolve: n, reject: o });
        }))
      : this.options.singleLoader(t);
  }
  dispatchBatches() {
    for (let t in this.batches) {
      let r = this.batches[t];
      delete this.batches[t],
        r.length === 1
          ? this.options
              .singleLoader(r[0].request)
              .then((n) => {
                n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
              })
              .catch((n) => {
                r[0].reject(n);
              })
          : (r.sort((n, o) => this.options.batchOrder(n.request, o.request)),
            this.options
              .batchLoader(r.map((n) => n.request))
              .then((n) => {
                if (n instanceof Error)
                  for (let o = 0; o < r.length; o++) r[o].reject(n);
                else
                  for (let o = 0; o < r.length; o++) {
                    let i = n[o];
                    i instanceof Error ? r[o].reject(i) : r[o].resolve(i);
                  }
              })
              .catch((n) => {
                for (let o = 0; o < r.length; o++) r[o].reject(n);
              }));
    }
  }
  get [Symbol.toStringTag]() {
    return "DataLoader";
  }
};
var Ld = ve("prisma:client:request_handler"),
  Zn = class {
    constructor(t, r) {
      (this.logEmitter = r),
        (this.client = t),
        (this.dataloader = new zn({
          batchLoader: Qa(async ({ requests: n, customDataProxyFetch: o }) => {
            let { transaction: i, otelParentCtx: s } = n[0],
              a = n.map((y) => y.protocolQuery),
              u = this.client._tracingHelper.getTraceParent(s),
              l = n.some((y) => xi(y.protocolQuery.action));
            return (
              await this.client._engine.requestBatch(a, {
                traceparent: u,
                transaction: Bd(i),
                containsWrite: l,
                customDataProxyFetch: o,
              })
            ).map((y, h) => {
              if (y instanceof Error) return y;
              try {
                return this.mapQueryEngineResult(n[h], y);
              } catch (T) {
                return T;
              }
            });
          }),
          singleLoader: async (n) => {
            var s;
            let o =
                ((s = n.transaction) == null ? void 0 : s.kind) === "itx"
                  ? Uu(n.transaction)
                  : void 0,
              i = await this.client._engine.request(n.protocolQuery, {
                traceparent: this.client._tracingHelper.getTraceParent(),
                interactiveTransaction: o,
                isWrite: xi(n.protocolQuery.action),
                customDataProxyFetch: n.customDataProxyFetch,
              });
            return this.mapQueryEngineResult(n, i);
          },
          batchBy: (n) => {
            var o;
            return (o = n.transaction) != null && o.id
              ? `transaction-${n.transaction.id}`
              : Bu(n.protocolQuery);
          },
          batchOrder(n, o) {
            var i, s;
            return ((i = n.transaction) == null ? void 0 : i.kind) ===
              "batch" &&
              ((s = o.transaction) == null ? void 0 : s.kind) === "batch"
              ? n.transaction.index - o.transaction.index
              : 0;
          },
        }));
    }
    async request(t) {
      try {
        return await this.dataloader.request(t);
      } catch (r) {
        let {
          clientMethod: n,
          callsite: o,
          transaction: i,
          args: s,
          modelName: a,
        } = t;
        this.handleAndLogRequestError({
          error: r,
          clientMethod: n,
          callsite: o,
          transaction: i,
          args: s,
          modelName: a,
        });
      }
    }
    mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
      let o = n == null ? void 0 : n.data,
        i = n == null ? void 0 : n.elapsed,
        s = this.unpack(o, t, r);
      return x.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: i } : s;
    }
    handleAndLogRequestError(t) {
      try {
        this.handleRequestError(t);
      } catch (r) {
        throw (
          (this.logEmitter &&
            this.logEmitter.emit("error", {
              message: r.message,
              target: t.clientMethod,
              timestamp: new Date(),
            }),
          r)
        );
      }
    }
    handleRequestError({
      error: t,
      clientMethod: r,
      callsite: n,
      transaction: o,
      args: i,
      modelName: s,
    }) {
      if ((Ld(t), jd(t, o) || t instanceof st)) throw t;
      if (t instanceof we && Ud(t)) {
        let u = $u(t.meta);
        Jn({
          args: i,
          errors: [u],
          callsite: n,
          errorFormat: this.client._errorFormat,
          originalMethod: r,
          clientVersion: this.client._clientVersion,
        });
      }
      let a = t.message;
      if (
        (n &&
          (a = tr({
            callsite: n,
            originalMethod: r,
            isPanic: t.isPanic,
            showColors: this.client._errorFormat === "pretty",
            message: a,
          })),
        (a = this.sanitizeMessage(a)),
        t.code)
      ) {
        let u = s ? { modelName: s, ...t.meta } : t.meta;
        throw new we(a, {
          code: t.code,
          clientVersion: this.client._clientVersion,
          meta: u,
          batchRequestIdx: t.batchRequestIdx,
        });
      } else {
        if (t.isPanic) throw new at(a, this.client._clientVersion);
        if (t instanceof Ie)
          throw new Ie(a, {
            clientVersion: this.client._clientVersion,
            batchRequestIdx: t.batchRequestIdx,
          });
        if (t instanceof fe) throw new fe(a, this.client._clientVersion);
        if (t instanceof at) throw new at(a, this.client._clientVersion);
      }
      throw ((t.clientVersion = this.client._clientVersion), t);
    }
    sanitizeMessage(t) {
      return this.client._errorFormat && this.client._errorFormat !== "pretty"
        ? (0, ju.default)(t)
        : t;
    }
    unpack(t, r, n) {
      if (!t || (t.data && (t = t.data), !t)) return t;
      let o = Object.values(t)[0],
        i = r.filter((a) => a !== "select" && a !== "include"),
        s = Hn(Wo(o, i));
      return n ? n(s) : s;
    }
    get [Symbol.toStringTag]() {
      return "RequestHandler";
    }
  };
function Bd(e) {
  if (e) {
    if (e.kind === "batch")
      return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
    if (e.kind === "itx") return { kind: "itx", options: Uu(e) };
    Pt(e, "Unknown transaction kind");
  }
}
function Uu(e) {
  return { id: e.id, payload: e.payload };
}
function jd(e, t) {
  return (
    Wn(e) &&
    (t == null ? void 0 : t.kind) === "batch" &&
    e.batchRequestIdx !== t.index
  );
}
function Ud(e) {
  return e.code === "P2009" || e.code === "P2012";
}
function $u(e) {
  if (e.kind === "Union") return { kind: "Union", errors: e.errors.map($u) };
  if (Array.isArray(e.selectionPath)) {
    let [, ...t] = e.selectionPath;
    return { ...e, selectionPath: t };
  }
  return e;
}
g();
c();
f();
d();
m();
var qu = "5.9.0";
var Vu = qu;
g();
c();
f();
d();
m();
function Ku(e) {
  return e.map((t) => {
    let r = {};
    for (let n of Object.keys(t)) r[n] = Gu(t[n]);
    return r;
  });
}
function Gu({ prisma__type: e, prisma__value: t }) {
  switch (e) {
    case "bigint":
      return BigInt(t);
    case "bytes":
      return w.Buffer.from(t, "base64");
    case "decimal":
      return new He(t);
    case "datetime":
    case "date":
      return new Date(t);
    case "time":
      return new Date(`1970-01-01T${t}Z`);
    case "array":
      return t.map(Gu);
    default:
      return t;
  }
}
g();
c();
f();
d();
m();
var Hu = Oe(pi());
g();
c();
f();
d();
m();
var Y = class extends Error {
  constructor(t) {
    super(
      t +
        `
Read more at https://pris.ly/d/client-constructor`,
    ),
      (this.name = "PrismaClientConstructorValidationError");
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientConstructorValidationError";
  }
};
B(Y, "PrismaClientConstructorValidationError");
var Ju = [
    "datasources",
    "datasourceUrl",
    "errorFormat",
    "adapter",
    "log",
    "__internal",
  ],
  Qu = ["pretty", "colorless", "minimal"],
  Wu = ["info", "query", "warn", "error"],
  qd = {
    datasources: (e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e))
          throw new Y(
            `Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`,
          );
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let o = ir(r, t) || ` Available datasources: ${t.join(", ")}`;
            throw new Y(
              `Unknown datasource ${r} provided to PrismaClient constructor.${o}`,
            );
          }
          if (typeof n != "object" || Array.isArray(n))
            throw new Y(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object")
            for (let [o, i] of Object.entries(n)) {
              if (o !== "url")
                throw new Y(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof i != "string")
                throw new Y(`Invalid value ${JSON.stringify(i)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    },
    adapter: (e, t) => {
      if (e === null) return;
      if (e === void 0)
        throw new Y(
          '"adapter" property must not be undefined, use null to conditionally disable driver adapters.',
        );
      if (!$n(t).includes("driverAdapters"))
        throw new Y(
          '"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.',
        );
      if (lr() === "binary")
        throw new Y(
          'Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.',
        );
    },
    datasourceUrl: (e) => {
      if (typeof e != "undefined" && typeof e != "string")
        throw new Y(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    },
    errorFormat: (e) => {
      if (e) {
        if (typeof e != "string")
          throw new Y(
            `Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`,
          );
        if (!Qu.includes(e)) {
          let t = ir(e, Qu);
          throw new Y(
            `Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`,
          );
        }
      }
    },
    log: (e) => {
      if (!e) return;
      if (!Array.isArray(e))
        throw new Y(
          `Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`,
        );
      function t(r) {
        if (typeof r == "string" && !Wu.includes(r)) {
          let n = ir(r, Wu);
          throw new Y(
            `Invalid log level "${r}" provided to PrismaClient constructor.${n}`,
          );
        }
      }
      for (let r of e) {
        t(r);
        let n = {
          level: t,
          emit: (o) => {
            let i = ["stdout", "event"];
            if (!i.includes(o)) {
              let s = ir(o, i);
              throw new Y(
                `Invalid value ${JSON.stringify(o)} for "emit" in logLevel provided to PrismaClient constructor.${s}`,
              );
            }
          },
        };
        if (r && typeof r == "object")
          for (let [o, i] of Object.entries(r))
            if (n[o]) n[o](i);
            else
              throw new Y(
                `Invalid property ${o} for "log" provided to PrismaClient constructor`,
              );
      }
    },
    __internal: (e) => {
      if (!e) return;
      let t = ["debug", "engine", "configOverride"];
      if (typeof e != "object")
        throw new Y(
          `Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`,
        );
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = ir(r, t);
          throw new Y(
            `Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`,
          );
        }
    },
  };
function zu(e, t) {
  for (let [r, n] of Object.entries(e)) {
    if (!Ju.includes(r)) {
      let o = ir(r, Ju);
      throw new Y(
        `Unknown property ${r} provided to PrismaClient constructor.${o}`,
      );
    }
    qd[r](n, t);
  }
  if (e.datasourceUrl && e.datasources)
    throw new Y(
      'Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them',
    );
}
function ir(e, t) {
  if (t.length === 0 || typeof e != "string") return "";
  let r = Vd(e, t);
  return r ? ` Did you mean "${r}"?` : "";
}
function Vd(e, t) {
  if (t.length === 0) return null;
  let r = t.map((o) => ({ value: o, distance: (0, Hu.default)(e, o) }));
  r.sort((o, i) => (o.distance < i.distance ? -1 : 1));
  let n = r[0];
  return n.distance < 3 ? n.value : null;
}
g();
c();
f();
d();
m();
function Zu(e) {
  return e.length === 0
    ? Promise.resolve([])
    : new Promise((t, r) => {
        let n = new Array(e.length),
          o = null,
          i = !1,
          s = 0,
          a = () => {
            i || (s++, s === e.length && ((i = !0), o ? r(o) : t(n)));
          },
          u = (l) => {
            i || ((i = !0), r(l));
          };
        for (let l = 0; l < e.length; l++)
          e[l].then(
            (p) => {
              (n[l] = p), a();
            },
            (p) => {
              if (!Wn(p)) {
                u(p);
                return;
              }
              p.batchRequestIdx === l ? u(p) : (o || (o = p), a());
            },
          );
      });
}
var mt = ve("prisma:client");
typeof globalThis == "object" && (globalThis.NODE_CLIENT = !0);
var Kd = {
    requestArgsToMiddlewareArgs: (e) => e,
    middlewareArgsToRequestArgs: (e) => e,
  },
  Gd = Symbol.for("prisma.client.transaction.id"),
  Jd = {
    id: 0,
    nextId() {
      return ++this.id;
    },
  };
function Qd(e) {
  class t {
    constructor(n) {
      this._middlewares = new Qn();
      this._createPrismaPromise = gi();
      this.$extends = ja;
      var u, l, p, y, h, T, C;
      (e = {
        ...e,
        ...((u = n == null ? void 0 : n.__internal) == null
          ? void 0
          : u.configOverride),
      }),
        tu(e),
        n && zu(n, e);
      let o = n != null && n.adapter ? Bo(n.adapter) : void 0,
        i = new Xu.EventEmitter().on("error", () => {});
      (this._extensions = Ln.empty()),
        (this._previewFeatures = $n(e)),
        (this._clientVersion = (l = e.clientVersion) != null ? l : Vu),
        (this._activeProvider = e.activeProvider),
        (this._tracingHelper = _u(this._previewFeatures));
      let s = {
          rootEnvPath:
            e.relativeEnvPaths.rootEnvPath &&
            qr.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath),
          schemaEnvPath:
            e.relativeEnvPaths.schemaEnvPath &&
            qr.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath),
        },
        a = (p = e.injectableEdgeEnv) == null ? void 0 : p.call(e);
      try {
        let P = n != null ? n : {},
          R = (y = P.__internal) != null ? y : {},
          I = R.debug === !0;
        I && ve.enable("prisma:client");
        let D = qr.default.resolve(e.dirname, e.relativePath);
        fn.existsSync(D) || (D = e.dirname),
          mt("dirname", e.dirname),
          mt("relativePath", e.relativePath),
          mt("cwd", D);
        let F = R.engine || {};
        if (
          (P.errorFormat
            ? (this._errorFormat = P.errorFormat)
            : x.env.NODE_ENV === "production"
              ? (this._errorFormat = "minimal")
              : x.env.NO_COLOR
                ? (this._errorFormat = "colorless")
                : (this._errorFormat = "colorless"),
          (this._runtimeDataModel = e.runtimeDataModel),
          (this._engineConfig = {
            cwd: D,
            dirname: e.dirname,
            enableDebugLogs: I,
            allowTriggerPanic: F.allowTriggerPanic,
            datamodelPath: qr.default.join(
              e.dirname,
              (h = e.filename) != null ? h : "schema.prisma",
            ),
            prismaPath: (T = F.binaryPath) != null ? T : void 0,
            engineEndpoint: F.endpoint,
            generator: e.generator,
            showColors: this._errorFormat === "pretty",
            logLevel: P.log && Lu(P.log),
            logQueries:
              P.log &&
              !!(typeof P.log == "string"
                ? P.log === "query"
                : P.log.find((k) =>
                    typeof k == "string" ? k === "query" : k.level === "query",
                  )),
            env: (C = a == null ? void 0 : a.parsed) != null ? C : {},
            flags: [],
            getQueryEngineWasmModule: e.getQueryEngineWasmModule,
            clientVersion: e.clientVersion,
            engineVersion: e.engineVersion,
            previewFeatures: this._previewFeatures,
            activeProvider: e.activeProvider,
            inlineSchema: e.inlineSchema,
            overrideDatasources: ru(P, e.datasourceNames),
            inlineDatasources: e.inlineDatasources,
            inlineSchemaHash: e.inlineSchemaHash,
            tracingHelper: this._tracingHelper,
            logEmitter: i,
            isBundled: e.isBundled,
            adapter: o,
          }),
          mt("clientVersion", e.clientVersion),
          (this._engine = cu(e, this._engineConfig)),
          (this._requestHandler = new Zn(this, i)),
          P.log)
        )
          for (let k of P.log) {
            let $ =
              typeof k == "string" ? k : k.emit === "stdout" ? k.level : null;
            $ &&
              this.$on($, (q) => {
                var he;
                Kt.log(
                  `${(he = Kt.tags[$]) != null ? he : ""}`,
                  q.message || q.query,
                );
              });
          }
        this._metrics = new dr(this._engine);
      } catch (P) {
        throw ((P.clientVersion = this._clientVersion), P);
      }
      return (this._appliedParent = Tr(this));
    }
    get [Symbol.toStringTag]() {
      return "PrismaClient";
    }
    $use(n) {
      this._middlewares.use(n);
    }
    $on(n, o) {
      n === "beforeExit"
        ? this._engine.onBeforeExit(o)
        : n && this._engineConfig.logEmitter.on(n, o);
    }
    $connect() {
      try {
        return this._engine.start();
      } catch (n) {
        throw ((n.clientVersion = this._clientVersion), n);
      }
    }
    async $disconnect() {
      try {
        await this._engine.stop();
      } catch (n) {
        throw ((n.clientVersion = this._clientVersion), n);
      } finally {
        Ms();
      }
    }
    $executeRawInternal(n, o, i, s) {
      let a = this._activeProvider;
      return this._request({
        action: "executeRaw",
        args: i,
        transaction: n,
        clientMethod: o,
        argsMapper: mi({ clientMethod: o, activeProvider: a }),
        callsite: dt(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      });
    }
    $executeRaw(n, ...o) {
      return this._createPrismaPromise((i) => {
        if (n.raw !== void 0 || n.sql !== void 0) {
          let [s, a] = Yu(n, o);
          return (
            di(
              this._activeProvider,
              s.text,
              s.values,
              Array.isArray(n)
                ? "prisma.$executeRaw`<SQL>`"
                : "prisma.$executeRaw(sql`<SQL>`)",
            ),
            this.$executeRawInternal(i, "$executeRaw", s, a)
          );
        }
        throw new ge(
          "`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n",
          { clientVersion: this._clientVersion },
        );
      });
    }
    $executeRawUnsafe(n, ...o) {
      return this._createPrismaPromise(
        (i) => (
          di(
            this._activeProvider,
            n,
            o,
            "prisma.$executeRawUnsafe(<SQL>, [...values])",
          ),
          this.$executeRawInternal(i, "$executeRawUnsafe", [n, ...o])
        ),
      );
    }
    $runCommandRaw(n) {
      if (e.activeProvider !== "mongodb")
        throw new ge(
          `The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,
          { clientVersion: this._clientVersion },
        );
      return this._createPrismaPromise((o) =>
        this._request({
          args: n,
          clientMethod: "$runCommandRaw",
          dataPath: [],
          action: "runCommandRaw",
          argsMapper: Tu,
          callsite: dt(this._errorFormat),
          transaction: o,
        }),
      );
    }
    async $queryRawInternal(n, o, i, s) {
      let a = this._activeProvider;
      return this._request({
        action: "queryRaw",
        args: i,
        transaction: n,
        clientMethod: o,
        argsMapper: mi({ clientMethod: o, activeProvider: a }),
        callsite: dt(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      }).then(Ku);
    }
    $queryRaw(n, ...o) {
      return this._createPrismaPromise((i) => {
        if (n.raw !== void 0 || n.sql !== void 0)
          return this.$queryRawInternal(i, "$queryRaw", ...Yu(n, o));
        throw new ge(
          "`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n",
          { clientVersion: this._clientVersion },
        );
      });
    }
    $queryRawUnsafe(n, ...o) {
      return this._createPrismaPromise((i) =>
        this.$queryRawInternal(i, "$queryRawUnsafe", [n, ...o]),
      );
    }
    _transactionWithArray({ promises: n, options: o }) {
      let i = Jd.nextId(),
        s = Nu(n.length),
        a = n.map((u, l) => {
          var h, T;
          if ((u == null ? void 0 : u[Symbol.toStringTag]) !== "PrismaPromise")
            throw new Error(
              "All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.",
            );
          let p = o == null ? void 0 : o.isolationLevel,
            y = { kind: "batch", id: i, index: l, isolationLevel: p, lock: s };
          return (T =
            (h = u.requestTransaction) == null ? void 0 : h.call(u, y)) != null
            ? T
            : u;
        });
      return Zu(a);
    }
    async _transactionWithCallback({ callback: n, options: o }) {
      let i = { traceparent: this._tracingHelper.getTraceParent() },
        s = await this._engine.transaction("start", i, o),
        a;
      try {
        let u = { kind: "itx", ...s };
        (a = await n(this._createItxClient(u))),
          await this._engine.transaction("commit", i, s);
      } catch (u) {
        throw (
          (await this._engine.transaction("rollback", i, s).catch(() => {}), u)
        );
      }
      return a;
    }
    _createItxClient(n) {
      return Tr(
        $e(Dn(this), [
          Ee("_appliedParent", () => this._appliedParent._createItxClient(n)),
          Ee("_createPrismaPromise", () => gi(n)),
          Ee(Gd, () => n.id),
          Er(Zs),
        ]),
      );
    }
    $transaction(n, o) {
      let i;
      typeof n == "function"
        ? (i = () => this._transactionWithCallback({ callback: n, options: o }))
        : (i = () => this._transactionWithArray({ promises: n, options: o }));
      let s = { name: "transaction", attributes: { method: "$transaction" } };
      return this._tracingHelper.runInChildSpan(s, i);
    }
    _request(n) {
      var l;
      n.otelParentCtx = this._tracingHelper.getActiveContext();
      let o = (l = n.middlewareArgsMapper) != null ? l : Kd,
        i = {
          args: o.requestArgsToMiddlewareArgs(n.args),
          dataPath: n.dataPath,
          runInTransaction: !!n.transaction,
          action: n.action,
          model: n.model,
        },
        s = {
          middleware: {
            name: "middleware",
            middleware: !0,
            attributes: { method: "$use" },
            active: !1,
          },
          operation: {
            name: "operation",
            attributes: {
              method: i.action,
              model: i.model,
              name: i.model ? `${i.model}.${i.action}` : i.action,
            },
          },
        },
        a = -1,
        u = async (p) => {
          let y = this._middlewares.get(++a);
          if (y)
            return this._tracingHelper.runInChildSpan(s.middleware, (I) =>
              y(p, (D) => (I == null || I.end(), u(D))),
            );
          let { runInTransaction: h, args: T, ...C } = p,
            P = { ...n, ...C };
          T && (P.args = o.middlewareArgsToRequestArgs(T)),
            n.transaction !== void 0 && h === !1 && delete P.transaction;
          let R = await Ja(this, P);
          return P.model
            ? qa({
                result: R,
                modelName: P.model,
                args: P.args,
                extensions: this._extensions,
                runtimeDataModel: this._runtimeDataModel,
              })
            : R;
        };
      return this._tracingHelper.runInChildSpan(s.operation, () => u(i));
    }
    async _executeRequest({
      args: n,
      clientMethod: o,
      dataPath: i,
      callsite: s,
      action: a,
      model: u,
      argsMapper: l,
      transaction: p,
      unpacker: y,
      otelParentCtx: h,
      customDataProxyFetch: T,
    }) {
      try {
        n = l ? l(n) : n;
        let C = { name: "serialize" },
          P = this._tracingHelper.runInChildSpan(C, () =>
            Pu({
              modelName: u,
              runtimeDataModel: this._runtimeDataModel,
              action: a,
              args: n,
              clientMethod: o,
              callsite: s,
              extensions: this._extensions,
              errorFormat: this._errorFormat,
              clientVersion: this._clientVersion,
            }),
          );
        return (
          ve.enabled("prisma:client") &&
            (mt("Prisma Client call:"),
            mt(`prisma.${o}(${Pa(n)})`),
            mt("Generated request:"),
            mt(
              JSON.stringify(P, null, 2) +
                `
`,
            )),
          (p == null ? void 0 : p.kind) === "batch" && (await p.lock),
          this._requestHandler.request({
            protocolQuery: P,
            modelName: u,
            action: a,
            clientMethod: o,
            dataPath: i,
            callsite: s,
            args: n,
            extensions: this._extensions,
            transaction: p,
            unpacker: y,
            otelParentCtx: h,
            otelChildCtx: this._tracingHelper.getActiveContext(),
            customDataProxyFetch: T,
          })
        );
      } catch (C) {
        throw ((C.clientVersion = this._clientVersion), C);
      }
    }
    get $metrics() {
      if (!this._hasPreviewFlag("metrics"))
        throw new ge(
          "`metrics` preview feature must be enabled in order to access metrics API",
          { clientVersion: this._clientVersion },
        );
      return this._metrics;
    }
    _hasPreviewFlag(n) {
      var o;
      return !!(
        (o = this._engineConfig.previewFeatures) != null && o.includes(n)
      );
    }
  }
  return t;
}
function Yu(e, t) {
  return Wd(e) ? [new Se(e, t), Fu] : [e, ku];
}
function Wd(e) {
  return Array.isArray(e) && Array.isArray(e.raw);
}
g();
c();
f();
d();
m();
var Hd = new Set([
  "toJSON",
  "$$typeof",
  "asymmetricMatch",
  Symbol.iterator,
  Symbol.toStringTag,
  Symbol.isConcatSpreadable,
  Symbol.toPrimitive,
]);
function zd(e) {
  return new Proxy(e, {
    get(t, r) {
      if (r in t) return t[r];
      if (!Hd.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
    },
  });
}
g();
c();
f();
d();
m();
var export_warnEnvConflicts = void 0;
export {
  ke as DMMF,
  uo as DMMFClass,
  Cs as Debug,
  He as Decimal,
  Ji as Extensions,
  dr as MetricsClient,
  st as NotFoundError,
  Qe as ObjectEnumValue,
  fe as PrismaClientInitializationError,
  we as PrismaClientKnownRequestError,
  at as PrismaClientRustPanicError,
  Ie as PrismaClientUnknownRequestError,
  ge as PrismaClientValidationError,
  Wi as Public,
  Se as Sql,
  Xi as Types,
  Zp as defineDmmfProperty,
  Yo as detectRuntime,
  nc as empty,
  Qd as getPrismaClient,
  Zs as itxClientDenyList,
  rc as join,
  zd as makeStrictEnum,
  xw as objectEnumNames,
  _o as objectEnumValues,
  Xs as raw,
  ea as sqltag,
  export_warnEnvConflicts as warnEnvConflicts,
  mn as warnOnce,
};
//# sourceMappingURL=edge-esm.js.map
