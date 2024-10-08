"use strict";
var he = Object.defineProperty;
var Je = Object.getOwnPropertyDescriptor;
var We = Object.getOwnPropertyNames;
var je = Object.prototype.hasOwnProperty;
var Ce = (e, n) => {
    for (var i in n) he(e, i, { get: n[i], enumerable: !0 });
  },
  Ge = (e, n, i, r) => {
    if ((n && typeof n == "object") || typeof n == "function")
      for (let t of We(n))
        !je.call(e, t) &&
          t !== i &&
          he(e, t, {
            get: () => n[t],
            enumerable: !(r = Je(n, t)) || r.enumerable,
          });
    return e;
  };
var Xe = (e) => Ge(he({}, "__esModule", { value: !0 }), e);
var jn = {};
Ce(jn, {
  Decimal: () => Ve,
  Public: () => de,
  detectRuntime: () => He,
  makeStrictEnum: () => Pe,
  objectEnumValues: () => Oe,
});
module.exports = Xe(jn);
var de = {};
Ce(de, { validator: () => Me });
function Me(...e) {
  return (n) => n;
}
var ne = Symbol(),
  pe = new WeakMap(),
  ge = class {
    constructor(n) {
      n === ne
        ? pe.set(this, "Prisma.".concat(this._getName()))
        : pe.set(
            this,
            "new Prisma."
              .concat(this._getNamespace(), ".")
              .concat(this._getName(), "()"),
          );
    }
    _getName() {
      return this.constructor.name;
    }
    toString() {
      return pe.get(this);
    }
  },
  j = class extends ge {
    _getNamespace() {
      return "NullTypes";
    }
  },
  G = class extends j {};
me(G, "DbNull");
var X = class extends j {};
me(X, "JsonNull");
var K = class extends j {};
me(K, "AnyNull");
var Oe = {
  classes: { DbNull: G, JsonNull: X, AnyNull: K },
  instances: { DbNull: new G(ne), JsonNull: new X(ne), AnyNull: new K(ne) },
};
function me(e, n) {
  Object.defineProperty(e, "name", { value: n, configurable: !0 });
}
var Ke = new Set([
  "toJSON",
  "$$typeof",
  "asymmetricMatch",
  Symbol.iterator,
  Symbol.toStringTag,
  Symbol.isConcatSpreadable,
  Symbol.toPrimitive,
]);
function Pe(e) {
  return new Proxy(e, {
    get(n, i) {
      if (i in n) return n[i];
      if (!Ke.has(i))
        throw new TypeError("Invalid enum value: ".concat(String(i)));
    },
  });
}
var H = 9e15,
  V = 1e9,
  we = "0123456789abcdef",
  re =
    "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
  te =
    "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
  Ne = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -H,
    maxE: H,
    crypto: !1,
  },
  qe,
  Z,
  w = !0,
  oe = "[DecimalError] ",
  $ = oe + "Invalid argument: ",
  Te = oe + "Precision limit exceeded",
  Le = oe + "crypto unavailable",
  Re = "[object Decimal]",
  A = Math.floor,
  M = Math.pow,
  Qe = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  Ye = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  xe = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  Fe = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  F = 1e7,
  m = 7,
  ze = 9007199254740991,
  ye = re.length - 1,
  ve = te.length - 1,
  d = { toStringTag: Re };
d.absoluteValue = d.abs = function () {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), p(e);
};
d.ceil = function () {
  return p(new this.constructor(this), this.e + 1, 2);
};
d.clampedTo = d.clamp = function (e, n) {
  var i,
    r = this,
    t = r.constructor;
  if (((e = new t(e)), (n = new t(n)), !e.s || !n.s)) return new t(NaN);
  if (e.gt(n)) throw Error($ + n);
  return (i = r.cmp(e)), i < 0 ? e : r.cmp(n) > 0 ? n : new t(r);
};
d.comparedTo = d.cmp = function (e) {
  var n,
    i,
    r,
    t,
    s = this,
    o = s.d,
    u = (e = new s.constructor(e)).d,
    l = s.s,
    f = e.s;
  if (!o || !u)
    return !l || !f ? NaN : l !== f ? l : o === u ? 0 : !o ^ (l < 0) ? 1 : -1;
  if (!o[0] || !u[0]) return o[0] ? l : u[0] ? -f : 0;
  if (l !== f) return l;
  if (s.e !== e.e) return (s.e > e.e) ^ (l < 0) ? 1 : -1;
  for (r = o.length, t = u.length, n = 0, i = r < t ? r : t; n < i; ++n)
    if (o[n] !== u[n]) return (o[n] > u[n]) ^ (l < 0) ? 1 : -1;
  return r === t ? 0 : (r > t) ^ (l < 0) ? 1 : -1;
};
d.cosine = d.cos = function () {
  var e,
    n,
    i = this,
    r = i.constructor;
  return i.d
    ? i.d[0]
      ? ((e = r.precision),
        (n = r.rounding),
        (r.precision = e + Math.max(i.e, i.sd()) + m),
        (r.rounding = 1),
        (i = en(r, Be(r, i))),
        (r.precision = e),
        (r.rounding = n),
        p(Z == 2 || Z == 3 ? i.neg() : i, e, n, !0))
      : new r(1)
    : new r(NaN);
};
d.cubeRoot = d.cbrt = function () {
  var e,
    n,
    i,
    r,
    t,
    s,
    o,
    u,
    l,
    f,
    c = this,
    a = c.constructor;
  if (!c.isFinite() || c.isZero()) return new a(c);
  for (
    w = !1,
      s = c.s * M(c.s * c, 1 / 3),
      !s || Math.abs(s) == 1 / 0
        ? ((i = O(c.d)),
          (e = c.e),
          (s = (e - i.length + 1) % 3) && (i += s == 1 || s == -2 ? "0" : "00"),
          (s = M(i, 1 / 3)),
          (e = A((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
          s == 1 / 0
            ? (i = "5e" + e)
            : ((i = s.toExponential()),
              (i = i.slice(0, i.indexOf("e") + 1) + e)),
          (r = new a(i)),
          (r.s = c.s))
        : (r = new a(s.toString())),
      o = (e = a.precision) + 3;
    ;

  )
    if (
      ((u = r),
      (l = u.times(u).times(u)),
      (f = l.plus(c)),
      (r = S(f.plus(c).times(u), f.plus(l), o + 2, 1)),
      O(u.d).slice(0, o) === (i = O(r.d)).slice(0, o))
    )
      if (((i = i.slice(o - 3, o + 1)), i == "9999" || (!t && i == "4999"))) {
        if (!t && (p(u, e + 1, 0), u.times(u).times(u).eq(c))) {
          r = u;
          break;
        }
        (o += 4), (t = 1);
      } else {
        (!+i || (!+i.slice(1) && i.charAt(0) == "5")) &&
          (p(r, e + 1, 1), (n = !r.times(r).times(r).eq(c)));
        break;
      }
  return (w = !0), p(r, e, a.rounding, n);
};
d.decimalPlaces = d.dp = function () {
  var e,
    n = this.d,
    i = NaN;
  if (n) {
    if (((e = n.length - 1), (i = (e - A(this.e / m)) * m), (e = n[e]), e))
      for (; e % 10 == 0; e /= 10) i--;
    i < 0 && (i = 0);
  }
  return i;
};
d.dividedBy = d.div = function (e) {
  return S(this, new this.constructor(e));
};
d.dividedToIntegerBy = d.divToInt = function (e) {
  var n = this,
    i = n.constructor;
  return p(S(n, new i(e), 0, 1, 1), i.precision, i.rounding);
};
d.equals = d.eq = function (e) {
  return this.cmp(e) === 0;
};
d.floor = function () {
  return p(new this.constructor(this), this.e + 1, 3);
};
d.greaterThan = d.gt = function (e) {
  return this.cmp(e) > 0;
};
d.greaterThanOrEqualTo = d.gte = function (e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
d.hyperbolicCosine = d.cosh = function () {
  var e,
    n,
    i,
    r,
    t,
    s = this,
    o = s.constructor,
    u = new o(1);
  if (!s.isFinite()) return new o(s.s ? 1 / 0 : NaN);
  if (s.isZero()) return u;
  (i = o.precision),
    (r = o.rounding),
    (o.precision = i + Math.max(s.e, s.sd()) + 4),
    (o.rounding = 1),
    (t = s.d.length),
    t < 32
      ? ((e = Math.ceil(t / 3)), (n = (1 / fe(4, e)).toString()))
      : ((e = 16), (n = "2.3283064365386962890625e-10")),
    (s = J(o, 1, s.times(n), new o(1), !0));
  for (var l, f = e, c = new o(8); f--; )
    (l = s.times(s)), (s = u.minus(l.times(c.minus(l.times(c)))));
  return p(s, (o.precision = i), (o.rounding = r), !0);
};
d.hyperbolicSine = d.sinh = function () {
  var e,
    n,
    i,
    r,
    t = this,
    s = t.constructor;
  if (!t.isFinite() || t.isZero()) return new s(t);
  if (
    ((n = s.precision),
    (i = s.rounding),
    (s.precision = n + Math.max(t.e, t.sd()) + 4),
    (s.rounding = 1),
    (r = t.d.length),
    r < 3)
  )
    t = J(s, 2, t, t, !0);
  else {
    (e = 1.4 * Math.sqrt(r)),
      (e = e > 16 ? 16 : e | 0),
      (t = t.times(1 / fe(5, e))),
      (t = J(s, 2, t, t, !0));
    for (var o, u = new s(5), l = new s(16), f = new s(20); e--; )
      (o = t.times(t)), (t = t.times(u.plus(o.times(l.times(o).plus(f)))));
  }
  return (s.precision = n), (s.rounding = i), p(t, n, i, !0);
};
d.hyperbolicTangent = d.tanh = function () {
  var e,
    n,
    i = this,
    r = i.constructor;
  return i.isFinite()
    ? i.isZero()
      ? new r(i)
      : ((e = r.precision),
        (n = r.rounding),
        (r.precision = e + 7),
        (r.rounding = 1),
        S(i.sinh(), i.cosh(), (r.precision = e), (r.rounding = n)))
    : new r(i.s);
};
d.inverseCosine = d.acos = function () {
  var e,
    n = this,
    i = n.constructor,
    r = n.abs().cmp(1),
    t = i.precision,
    s = i.rounding;
  return r !== -1
    ? r === 0
      ? n.isNeg()
        ? R(i, t, s)
        : new i(0)
      : new i(NaN)
    : n.isZero()
      ? R(i, t + 4, s).times(0.5)
      : ((i.precision = t + 6),
        (i.rounding = 1),
        (n = n.asin()),
        (e = R(i, t + 4, s).times(0.5)),
        (i.precision = t),
        (i.rounding = s),
        e.minus(n));
};
d.inverseHyperbolicCosine = d.acosh = function () {
  var e,
    n,
    i = this,
    r = i.constructor;
  return i.lte(1)
    ? new r(i.eq(1) ? 0 : NaN)
    : i.isFinite()
      ? ((e = r.precision),
        (n = r.rounding),
        (r.precision = e + Math.max(Math.abs(i.e), i.sd()) + 4),
        (r.rounding = 1),
        (w = !1),
        (i = i.times(i).minus(1).sqrt().plus(i)),
        (w = !0),
        (r.precision = e),
        (r.rounding = n),
        i.ln())
      : new r(i);
};
d.inverseHyperbolicSine = d.asinh = function () {
  var e,
    n,
    i = this,
    r = i.constructor;
  return !i.isFinite() || i.isZero()
    ? new r(i)
    : ((e = r.precision),
      (n = r.rounding),
      (r.precision = e + 2 * Math.max(Math.abs(i.e), i.sd()) + 6),
      (r.rounding = 1),
      (w = !1),
      (i = i.times(i).plus(1).sqrt().plus(i)),
      (w = !0),
      (r.precision = e),
      (r.rounding = n),
      i.ln());
};
d.inverseHyperbolicTangent = d.atanh = function () {
  var e,
    n,
    i,
    r,
    t = this,
    s = t.constructor;
  return t.isFinite()
    ? t.e >= 0
      ? new s(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN)
      : ((e = s.precision),
        (n = s.rounding),
        (r = t.sd()),
        Math.max(r, e) < 2 * -t.e - 1
          ? p(new s(t), e, n, !0)
          : ((s.precision = i = r - t.e),
            (t = S(t.plus(1), new s(1).minus(t), i + e, 1)),
            (s.precision = e + 4),
            (s.rounding = 1),
            (t = t.ln()),
            (s.precision = e),
            (s.rounding = n),
            t.times(0.5)))
    : new s(NaN);
};
d.inverseSine = d.asin = function () {
  var e,
    n,
    i,
    r,
    t = this,
    s = t.constructor;
  return t.isZero()
    ? new s(t)
    : ((n = t.abs().cmp(1)),
      (i = s.precision),
      (r = s.rounding),
      n !== -1
        ? n === 0
          ? ((e = R(s, i + 4, r).times(0.5)), (e.s = t.s), e)
          : new s(NaN)
        : ((s.precision = i + 6),
          (s.rounding = 1),
          (t = t.div(new s(1).minus(t.times(t)).sqrt().plus(1)).atan()),
          (s.precision = i),
          (s.rounding = r),
          t.times(2)));
};
d.inverseTangent = d.atan = function () {
  var e,
    n,
    i,
    r,
    t,
    s,
    o,
    u,
    l,
    f = this,
    c = f.constructor,
    a = c.precision,
    h = c.rounding;
  if (f.isFinite()) {
    if (f.isZero()) return new c(f);
    if (f.abs().eq(1) && a + 4 <= ve)
      return (o = R(c, a + 4, h).times(0.25)), (o.s = f.s), o;
  } else {
    if (!f.s) return new c(NaN);
    if (a + 4 <= ve) return (o = R(c, a + 4, h).times(0.5)), (o.s = f.s), o;
  }
  for (
    c.precision = u = a + 10,
      c.rounding = 1,
      i = Math.min(28, (u / m + 2) | 0),
      e = i;
    e;
    --e
  )
    f = f.div(f.times(f).plus(1).sqrt().plus(1));
  for (
    w = !1, n = Math.ceil(u / m), r = 1, l = f.times(f), o = new c(f), t = f;
    e !== -1;

  )
    if (
      ((t = t.times(l)),
      (s = o.minus(t.div((r += 2)))),
      (t = t.times(l)),
      (o = s.plus(t.div((r += 2)))),
      o.d[n] !== void 0)
    )
      for (e = n; o.d[e] === s.d[e] && e--; );
  return (
    i && (o = o.times(2 << (i - 1))),
    (w = !0),
    p(o, (c.precision = a), (c.rounding = h), !0)
  );
};
d.isFinite = function () {
  return !!this.d;
};
d.isInteger = d.isInt = function () {
  return !!this.d && A(this.e / m) > this.d.length - 2;
};
d.isNaN = function () {
  return !this.s;
};
d.isNegative = d.isNeg = function () {
  return this.s < 0;
};
d.isPositive = d.isPos = function () {
  return this.s > 0;
};
d.isZero = function () {
  return !!this.d && this.d[0] === 0;
};
d.lessThan = d.lt = function (e) {
  return this.cmp(e) < 0;
};
d.lessThanOrEqualTo = d.lte = function (e) {
  return this.cmp(e) < 1;
};
d.logarithm = d.log = function (e) {
  var n,
    i,
    r,
    t,
    s,
    o,
    u,
    l,
    f = this,
    c = f.constructor,
    a = c.precision,
    h = c.rounding,
    g = 5;
  if (e == null) (e = new c(10)), (n = !0);
  else {
    if (((e = new c(e)), (i = e.d), e.s < 0 || !i || !i[0] || e.eq(1)))
      return new c(NaN);
    n = e.eq(10);
  }
  if (((i = f.d), f.s < 0 || !i || !i[0] || f.eq(1)))
    return new c(i && !i[0] ? -1 / 0 : f.s != 1 ? NaN : i ? 0 : 1 / 0);
  if (n)
    if (i.length > 1) s = !0;
    else {
      for (t = i[0]; t % 10 === 0; ) t /= 10;
      s = t !== 1;
    }
  if (
    ((w = !1),
    (u = a + g),
    (o = B(f, u)),
    (r = n ? se(c, u + 10) : B(e, u)),
    (l = S(o, r, u, 1)),
    Q(l.d, (t = a), h))
  )
    do
      if (
        ((u += 10),
        (o = B(f, u)),
        (r = n ? se(c, u + 10) : B(e, u)),
        (l = S(o, r, u, 1)),
        !s)
      ) {
        +O(l.d).slice(t + 1, t + 15) + 1 == 1e14 && (l = p(l, a + 1, 0));
        break;
      }
    while (Q(l.d, (t += 10), h));
  return (w = !0), p(l, a, h);
};
d.minus = d.sub = function (e) {
  var n,
    i,
    r,
    t,
    s,
    o,
    u,
    l,
    f,
    c,
    a,
    h,
    g = this,
    v = g.constructor;
  if (((e = new v(e)), !g.d || !e.d))
    return (
      !g.s || !e.s
        ? (e = new v(NaN))
        : g.d
          ? (e.s = -e.s)
          : (e = new v(e.d || g.s !== e.s ? g : NaN)),
      e
    );
  if (g.s != e.s) return (e.s = -e.s), g.plus(e);
  if (
    ((f = g.d), (h = e.d), (u = v.precision), (l = v.rounding), !f[0] || !h[0])
  ) {
    if (h[0]) e.s = -e.s;
    else if (f[0]) e = new v(g);
    else return new v(l === 3 ? -0 : 0);
    return w ? p(e, u, l) : e;
  }
  if (((i = A(e.e / m)), (c = A(g.e / m)), (f = f.slice()), (s = c - i), s)) {
    for (
      a = s < 0,
        a
          ? ((n = f), (s = -s), (o = h.length))
          : ((n = h), (i = c), (o = f.length)),
        r = Math.max(Math.ceil(u / m), o) + 2,
        s > r && ((s = r), (n.length = 1)),
        n.reverse(),
        r = s;
      r--;

    )
      n.push(0);
    n.reverse();
  } else {
    for (r = f.length, o = h.length, a = r < o, a && (o = r), r = 0; r < o; r++)
      if (f[r] != h[r]) {
        a = f[r] < h[r];
        break;
      }
    s = 0;
  }
  for (
    a && ((n = f), (f = h), (h = n), (e.s = -e.s)),
      o = f.length,
      r = h.length - o;
    r > 0;
    --r
  )
    f[o++] = 0;
  for (r = h.length; r > s; ) {
    if (f[--r] < h[r]) {
      for (t = r; t && f[--t] === 0; ) f[t] = F - 1;
      --f[t], (f[r] += F);
    }
    f[r] -= h[r];
  }
  for (; f[--o] === 0; ) f.pop();
  for (; f[0] === 0; f.shift()) --i;
  return f[0]
    ? ((e.d = f), (e.e = ue(f, i)), w ? p(e, u, l) : e)
    : new v(l === 3 ? -0 : 0);
};
d.modulo = d.mod = function (e) {
  var n,
    i = this,
    r = i.constructor;
  return (
    (e = new r(e)),
    !i.d || !e.s || (e.d && !e.d[0])
      ? new r(NaN)
      : !e.d || (i.d && !i.d[0])
        ? p(new r(i), r.precision, r.rounding)
        : ((w = !1),
          r.modulo == 9
            ? ((n = S(i, e.abs(), 0, 3, 1)), (n.s *= e.s))
            : (n = S(i, e, 0, r.modulo, 1)),
          (n = n.times(e)),
          (w = !0),
          i.minus(n))
  );
};
d.naturalExponential = d.exp = function () {
  return Ee(this);
};
d.naturalLogarithm = d.ln = function () {
  return B(this);
};
d.negated = d.neg = function () {
  var e = new this.constructor(this);
  return (e.s = -e.s), p(e);
};
d.plus = d.add = function (e) {
  var n,
    i,
    r,
    t,
    s,
    o,
    u,
    l,
    f,
    c,
    a = this,
    h = a.constructor;
  if (((e = new h(e)), !a.d || !e.d))
    return (
      !a.s || !e.s
        ? (e = new h(NaN))
        : a.d || (e = new h(e.d || a.s === e.s ? a : NaN)),
      e
    );
  if (a.s != e.s) return (e.s = -e.s), a.minus(e);
  if (
    ((f = a.d), (c = e.d), (u = h.precision), (l = h.rounding), !f[0] || !c[0])
  )
    return c[0] || (e = new h(a)), w ? p(e, u, l) : e;
  if (((s = A(a.e / m)), (r = A(e.e / m)), (f = f.slice()), (t = s - r), t)) {
    for (
      t < 0
        ? ((i = f), (t = -t), (o = c.length))
        : ((i = c), (r = s), (o = f.length)),
        s = Math.ceil(u / m),
        o = s > o ? s + 1 : o + 1,
        t > o && ((t = o), (i.length = 1)),
        i.reverse();
      t--;

    )
      i.push(0);
    i.reverse();
  }
  for (
    o = f.length,
      t = c.length,
      o - t < 0 && ((t = o), (i = c), (c = f), (f = i)),
      n = 0;
    t;

  )
    (n = ((f[--t] = f[t] + c[t] + n) / F) | 0), (f[t] %= F);
  for (n && (f.unshift(n), ++r), o = f.length; f[--o] == 0; ) f.pop();
  return (e.d = f), (e.e = ue(f, r)), w ? p(e, u, l) : e;
};
d.precision = d.sd = function (e) {
  var n,
    i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error($ + e);
  return (
    i.d ? ((n = Ie(i.d)), e && i.e + 1 > n && (n = i.e + 1)) : (n = NaN), n
  );
};
d.round = function () {
  var e = this,
    n = e.constructor;
  return p(new n(e), e.e + 1, n.rounding);
};
d.sine = d.sin = function () {
  var e,
    n,
    i = this,
    r = i.constructor;
  return i.isFinite()
    ? i.isZero()
      ? new r(i)
      : ((e = r.precision),
        (n = r.rounding),
        (r.precision = e + Math.max(i.e, i.sd()) + m),
        (r.rounding = 1),
        (i = rn(r, Be(r, i))),
        (r.precision = e),
        (r.rounding = n),
        p(Z > 2 ? i.neg() : i, e, n, !0))
    : new r(NaN);
};
d.squareRoot = d.sqrt = function () {
  var e,
    n,
    i,
    r,
    t,
    s,
    o = this,
    u = o.d,
    l = o.e,
    f = o.s,
    c = o.constructor;
  if (f !== 1 || !u || !u[0])
    return new c(!f || (f < 0 && (!u || u[0])) ? NaN : u ? o : 1 / 0);
  for (
    w = !1,
      f = Math.sqrt(+o),
      f == 0 || f == 1 / 0
        ? ((n = O(u)),
          (n.length + l) % 2 == 0 && (n += "0"),
          (f = Math.sqrt(n)),
          (l = A((l + 1) / 2) - (l < 0 || l % 2)),
          f == 1 / 0
            ? (n = "5e" + l)
            : ((n = f.toExponential()),
              (n = n.slice(0, n.indexOf("e") + 1) + l)),
          (r = new c(n)))
        : (r = new c(f.toString())),
      i = (l = c.precision) + 3;
    ;

  )
    if (
      ((s = r),
      (r = s.plus(S(o, s, i + 2, 1)).times(0.5)),
      O(s.d).slice(0, i) === (n = O(r.d)).slice(0, i))
    )
      if (((n = n.slice(i - 3, i + 1)), n == "9999" || (!t && n == "4999"))) {
        if (!t && (p(s, l + 1, 0), s.times(s).eq(o))) {
          r = s;
          break;
        }
        (i += 4), (t = 1);
      } else {
        (!+n || (!+n.slice(1) && n.charAt(0) == "5")) &&
          (p(r, l + 1, 1), (e = !r.times(r).eq(o)));
        break;
      }
  return (w = !0), p(r, l, c.rounding, e);
};
d.tangent = d.tan = function () {
  var e,
    n,
    i = this,
    r = i.constructor;
  return i.isFinite()
    ? i.isZero()
      ? new r(i)
      : ((e = r.precision),
        (n = r.rounding),
        (r.precision = e + 10),
        (r.rounding = 1),
        (i = i.sin()),
        (i.s = 1),
        (i = S(i, new r(1).minus(i.times(i)).sqrt(), e + 10, 0)),
        (r.precision = e),
        (r.rounding = n),
        p(Z == 2 || Z == 4 ? i.neg() : i, e, n, !0))
    : new r(NaN);
};
d.times = d.mul = function (e) {
  var n,
    i,
    r,
    t,
    s,
    o,
    u,
    l,
    f,
    c = this,
    a = c.constructor,
    h = c.d,
    g = (e = new a(e)).d;
  if (((e.s *= c.s), !h || !h[0] || !g || !g[0]))
    return new a(
      !e.s || (h && !h[0] && !g) || (g && !g[0] && !h)
        ? NaN
        : !h || !g
          ? e.s / 0
          : e.s * 0,
    );
  for (
    i = A(c.e / m) + A(e.e / m),
      l = h.length,
      f = g.length,
      l < f && ((s = h), (h = g), (g = s), (o = l), (l = f), (f = o)),
      s = [],
      o = l + f,
      r = o;
    r--;

  )
    s.push(0);
  for (r = f; --r >= 0; ) {
    for (n = 0, t = l + r; t > r; )
      (u = s[t] + g[r] * h[t - r - 1] + n),
        (s[t--] = u % F | 0),
        (n = (u / F) | 0);
    s[t] = (s[t] + n) % F | 0;
  }
  for (; !s[--o]; ) s.pop();
  return (
    n ? ++i : s.shift(),
    (e.d = s),
    (e.e = ue(s, i)),
    w ? p(e, a.precision, a.rounding) : e
  );
};
d.toBinary = function (e, n) {
  return ke(this, 2, e, n);
};
d.toDecimalPlaces = d.toDP = function (e, n) {
  var i = this,
    r = i.constructor;
  return (
    (i = new r(i)),
    e === void 0
      ? i
      : (q(e, 0, V),
        n === void 0 ? (n = r.rounding) : q(n, 0, 8),
        p(i, e + i.e + 1, n))
  );
};
d.toExponential = function (e, n) {
  var i,
    r = this,
    t = r.constructor;
  return (
    e === void 0
      ? (i = I(r, !0))
      : (q(e, 0, V),
        n === void 0 ? (n = t.rounding) : q(n, 0, 8),
        (r = p(new t(r), e + 1, n)),
        (i = I(r, !0, e + 1))),
    r.isNeg() && !r.isZero() ? "-" + i : i
  );
};
d.toFixed = function (e, n) {
  var i,
    r,
    t = this,
    s = t.constructor;
  return (
    e === void 0
      ? (i = I(t))
      : (q(e, 0, V),
        n === void 0 ? (n = s.rounding) : q(n, 0, 8),
        (r = p(new s(t), e + t.e + 1, n)),
        (i = I(r, !1, e + r.e + 1))),
    t.isNeg() && !t.isZero() ? "-" + i : i
  );
};
d.toFraction = function (e) {
  var n,
    i,
    r,
    t,
    s,
    o,
    u,
    l,
    f,
    c,
    a,
    h,
    g = this,
    v = g.d,
    N = g.constructor;
  if (!v) return new N(g);
  if (
    ((f = i = new N(1)),
    (r = l = new N(0)),
    (n = new N(r)),
    (s = n.e = Ie(v) - g.e - 1),
    (o = s % m),
    (n.d[0] = M(10, o < 0 ? m + o : o)),
    e == null)
  )
    e = s > 0 ? n : f;
  else {
    if (((u = new N(e)), !u.isInt() || u.lt(f))) throw Error($ + u);
    e = u.gt(n) ? (s > 0 ? n : f) : u;
  }
  for (
    w = !1,
      u = new N(O(v)),
      c = N.precision,
      N.precision = s = v.length * m * 2;
    (a = S(u, n, 0, 1, 1)), (t = i.plus(a.times(r))), t.cmp(e) != 1;

  )
    (i = r),
      (r = t),
      (t = f),
      (f = l.plus(a.times(t))),
      (l = t),
      (t = n),
      (n = u.minus(a.times(t))),
      (u = t);
  return (
    (t = S(e.minus(i), r, 0, 1, 1)),
    (l = l.plus(t.times(f))),
    (i = i.plus(t.times(r))),
    (l.s = f.s = g.s),
    (h =
      S(f, r, s, 1)
        .minus(g)
        .abs()
        .cmp(S(l, i, s, 1).minus(g).abs()) < 1
        ? [f, r]
        : [l, i]),
    (N.precision = c),
    (w = !0),
    h
  );
};
d.toHexadecimal = d.toHex = function (e, n) {
  return ke(this, 16, e, n);
};
d.toNearest = function (e, n) {
  var i = this,
    r = i.constructor;
  if (((i = new r(i)), e == null)) {
    if (!i.d) return i;
    (e = new r(1)), (n = r.rounding);
  } else {
    if (((e = new r(e)), n === void 0 ? (n = r.rounding) : q(n, 0, 8), !i.d))
      return e.s ? i : e;
    if (!e.d) return e.s && (e.s = i.s), e;
  }
  return (
    e.d[0]
      ? ((w = !1), (i = S(i, e, 0, n, 1).times(e)), (w = !0), p(i))
      : ((e.s = i.s), (i = e)),
    i
  );
};
d.toNumber = function () {
  return +this;
};
d.toOctal = function (e, n) {
  return ke(this, 8, e, n);
};
d.toPower = d.pow = function (e) {
  var n,
    i,
    r,
    t,
    s,
    o,
    u = this,
    l = u.constructor,
    f = +(e = new l(e));
  if (!u.d || !e.d || !u.d[0] || !e.d[0]) return new l(M(+u, f));
  if (((u = new l(u)), u.eq(1))) return u;
  if (((r = l.precision), (s = l.rounding), e.eq(1))) return p(u, r, s);
  if (((n = A(e.e / m)), n >= e.d.length - 1 && (i = f < 0 ? -f : f) <= ze))
    return (t = De(l, u, i, r)), e.s < 0 ? new l(1).div(t) : p(t, r, s);
  if (((o = u.s), o < 0)) {
    if (n < e.d.length - 1) return new l(NaN);
    if ((e.d[n] & 1 || (o = 1), u.e == 0 && u.d[0] == 1 && u.d.length == 1))
      return (u.s = o), u;
  }
  return (
    (i = M(+u, f)),
    (n =
      i == 0 || !isFinite(i)
        ? A(f * (Math.log("0." + O(u.d)) / Math.LN10 + u.e + 1))
        : new l(i + "").e),
    n > l.maxE + 1 || n < l.minE - 1
      ? new l(n > 0 ? o / 0 : 0)
      : ((w = !1),
        (l.rounding = u.s = 1),
        (i = Math.min(12, (n + "").length)),
        (t = Ee(e.times(B(u, r + i)), r)),
        t.d &&
          ((t = p(t, r + 5, 1)),
          Q(t.d, r, s) &&
            ((n = r + 10),
            (t = p(Ee(e.times(B(u, n + i)), n), n + 5, 1)),
            +O(t.d).slice(r + 1, r + 15) + 1 == 1e14 && (t = p(t, r + 1, 0)))),
        (t.s = o),
        (w = !0),
        (l.rounding = s),
        p(t, r, s))
  );
};
d.toPrecision = function (e, n) {
  var i,
    r = this,
    t = r.constructor;
  return (
    e === void 0
      ? (i = I(r, r.e <= t.toExpNeg || r.e >= t.toExpPos))
      : (q(e, 1, V),
        n === void 0 ? (n = t.rounding) : q(n, 0, 8),
        (r = p(new t(r), e, n)),
        (i = I(r, e <= r.e || r.e <= t.toExpNeg, e))),
    r.isNeg() && !r.isZero() ? "-" + i : i
  );
};
d.toSignificantDigits = d.toSD = function (e, n) {
  var i = this,
    r = i.constructor;
  return (
    e === void 0
      ? ((e = r.precision), (n = r.rounding))
      : (q(e, 1, V), n === void 0 ? (n = r.rounding) : q(n, 0, 8)),
    p(new r(i), e, n)
  );
};
d.toString = function () {
  var e = this,
    n = e.constructor,
    i = I(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + i : i;
};
d.truncated = d.trunc = function () {
  return p(new this.constructor(this), this.e + 1, 1);
};
d.valueOf = d.toJSON = function () {
  var e = this,
    n = e.constructor,
    i = I(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + i : i;
};
function O(e) {
  var n,
    i,
    r,
    t = e.length - 1,
    s = "",
    o = e[0];
  if (t > 0) {
    for (s += o, n = 1; n < t; n++)
      (r = e[n] + ""), (i = m - r.length), i && (s += U(i)), (s += r);
    (o = e[n]), (r = o + ""), (i = m - r.length), i && (s += U(i));
  } else if (o === 0) return "0";
  for (; o % 10 === 0; ) o /= 10;
  return s + o;
}
function q(e, n, i) {
  if (e !== ~~e || e < n || e > i) throw Error($ + e);
}
function Q(e, n, i, r) {
  var t, s, o, u;
  for (s = e[0]; s >= 10; s /= 10) --n;
  return (
    --n < 0 ? ((n += m), (t = 0)) : ((t = Math.ceil((n + 1) / m)), (n %= m)),
    (s = M(10, m - n)),
    (u = e[t] % s | 0),
    r == null
      ? n < 3
        ? (n == 0 ? (u = (u / 100) | 0) : n == 1 && (u = (u / 10) | 0),
          (o =
            (i < 4 && u == 99999) ||
            (i > 3 && u == 49999) ||
            u == 5e4 ||
            u == 0))
        : (o =
            (((i < 4 && u + 1 == s) || (i > 3 && u + 1 == s / 2)) &&
              ((e[t + 1] / s / 100) | 0) == M(10, n - 2) - 1) ||
            ((u == s / 2 || u == 0) && ((e[t + 1] / s / 100) | 0) == 0))
      : n < 4
        ? (n == 0
            ? (u = (u / 1e3) | 0)
            : n == 1
              ? (u = (u / 100) | 0)
              : n == 2 && (u = (u / 10) | 0),
          (o = ((r || i < 4) && u == 9999) || (!r && i > 3 && u == 4999)))
        : (o =
            (((r || i < 4) && u + 1 == s) || (!r && i > 3 && u + 1 == s / 2)) &&
            ((e[t + 1] / s / 1e3) | 0) == M(10, n - 3) - 1),
    o
  );
}
function ie(e, n, i) {
  for (var r, t = [0], s, o = 0, u = e.length; o < u; ) {
    for (s = t.length; s--; ) t[s] *= n;
    for (t[0] += we.indexOf(e.charAt(o++)), r = 0; r < t.length; r++)
      t[r] > i - 1 &&
        (t[r + 1] === void 0 && (t[r + 1] = 0),
        (t[r + 1] += (t[r] / i) | 0),
        (t[r] %= i));
  }
  return t.reverse();
}
function en(e, n) {
  var i, r, t;
  if (n.isZero()) return n;
  (r = n.d.length),
    r < 32
      ? ((i = Math.ceil(r / 3)), (t = (1 / fe(4, i)).toString()))
      : ((i = 16), (t = "2.3283064365386962890625e-10")),
    (e.precision += i),
    (n = J(e, 1, n.times(t), new e(1)));
  for (var s = i; s--; ) {
    var o = n.times(n);
    n = o.times(o).minus(o).times(8).plus(1);
  }
  return (e.precision -= i), n;
}
var S = (function () {
  function e(r, t, s) {
    var o,
      u = 0,
      l = r.length;
    for (r = r.slice(); l--; )
      (o = r[l] * t + u), (r[l] = o % s | 0), (u = (o / s) | 0);
    return u && r.unshift(u), r;
  }
  function n(r, t, s, o) {
    var u, l;
    if (s != o) l = s > o ? 1 : -1;
    else
      for (u = l = 0; u < s; u++)
        if (r[u] != t[u]) {
          l = r[u] > t[u] ? 1 : -1;
          break;
        }
    return l;
  }
  function i(r, t, s, o) {
    for (var u = 0; s--; )
      (r[s] -= u), (u = r[s] < t[s] ? 1 : 0), (r[s] = u * o + r[s] - t[s]);
    for (; !r[0] && r.length > 1; ) r.shift();
  }
  return function (r, t, s, o, u, l) {
    var f,
      c,
      a,
      h,
      g,
      v,
      N,
      _,
      C,
      T,
      E,
      P,
      x,
      D,
      le,
      z,
      W,
      ce,
      L,
      y,
      ee = r.constructor,
      ae = r.s == t.s ? 1 : -1,
      b = r.d,
      k = t.d;
    if (!b || !b[0] || !k || !k[0])
      return new ee(
        !r.s || !t.s || (b ? k && b[0] == k[0] : !k)
          ? NaN
          : (b && b[0] == 0) || !k
            ? ae * 0
            : ae / 0,
      );
    for (
      l
        ? ((g = 1), (c = r.e - t.e))
        : ((l = F), (g = m), (c = A(r.e / g) - A(t.e / g))),
        L = k.length,
        W = b.length,
        C = new ee(ae),
        T = C.d = [],
        a = 0;
      k[a] == (b[a] || 0);
      a++
    );
    if (
      (k[a] > (b[a] || 0) && c--,
      s == null
        ? ((D = s = ee.precision), (o = ee.rounding))
        : u
          ? (D = s + (r.e - t.e) + 1)
          : (D = s),
      D < 0)
    )
      T.push(1), (v = !0);
    else {
      if (((D = (D / g + 2) | 0), (a = 0), L == 1)) {
        for (h = 0, k = k[0], D++; (a < W || h) && D--; a++)
          (le = h * l + (b[a] || 0)), (T[a] = (le / k) | 0), (h = le % k | 0);
        v = h || a < W;
      } else {
        for (
          h = (l / (k[0] + 1)) | 0,
            h > 1 &&
              ((k = e(k, h, l)),
              (b = e(b, h, l)),
              (L = k.length),
              (W = b.length)),
            z = L,
            E = b.slice(0, L),
            P = E.length;
          P < L;

        )
          E[P++] = 0;
        (y = k.slice()), y.unshift(0), (ce = k[0]), k[1] >= l / 2 && ++ce;
        do
          (h = 0),
            (f = n(k, E, L, P)),
            f < 0
              ? ((x = E[0]),
                L != P && (x = x * l + (E[1] || 0)),
                (h = (x / ce) | 0),
                h > 1
                  ? (h >= l && (h = l - 1),
                    (N = e(k, h, l)),
                    (_ = N.length),
                    (P = E.length),
                    (f = n(N, E, _, P)),
                    f == 1 && (h--, i(N, L < _ ? y : k, _, l)))
                  : (h == 0 && (f = h = 1), (N = k.slice())),
                (_ = N.length),
                _ < P && N.unshift(0),
                i(E, N, P, l),
                f == -1 &&
                  ((P = E.length),
                  (f = n(k, E, L, P)),
                  f < 1 && (h++, i(E, L < P ? y : k, P, l))),
                (P = E.length))
              : f === 0 && (h++, (E = [0])),
            (T[a++] = h),
            f && E[0] ? (E[P++] = b[z] || 0) : ((E = [b[z]]), (P = 1));
        while ((z++ < W || E[0] !== void 0) && D--);
        v = E[0] !== void 0;
      }
      T[0] || T.shift();
    }
    if (g == 1) (C.e = c), (qe = v);
    else {
      for (a = 1, h = T[0]; h >= 10; h /= 10) a++;
      (C.e = a + c * g - 1), p(C, u ? s + C.e + 1 : s, o, v);
    }
    return C;
  };
})();
function p(e, n, i, r) {
  var t,
    s,
    o,
    u,
    l,
    f,
    c,
    a,
    h,
    g = e.constructor;
  e: if (n != null) {
    if (((a = e.d), !a)) return e;
    for (t = 1, u = a[0]; u >= 10; u /= 10) t++;
    if (((s = n - t), s < 0))
      (s += m),
        (o = n),
        (c = a[(h = 0)]),
        (l = (c / M(10, t - o - 1)) % 10 | 0);
    else if (((h = Math.ceil((s + 1) / m)), (u = a.length), h >= u))
      if (r) {
        for (; u++ <= h; ) a.push(0);
        (c = l = 0), (t = 1), (s %= m), (o = s - m + 1);
      } else break e;
    else {
      for (c = u = a[h], t = 1; u >= 10; u /= 10) t++;
      (s %= m),
        (o = s - m + t),
        (l = o < 0 ? 0 : (c / M(10, t - o - 1)) % 10 | 0);
    }
    if (
      ((r =
        r ||
        n < 0 ||
        a[h + 1] !== void 0 ||
        (o < 0 ? c : c % M(10, t - o - 1))),
      (f =
        i < 4
          ? (l || r) && (i == 0 || i == (e.s < 0 ? 3 : 2))
          : l > 5 ||
            (l == 5 &&
              (i == 4 ||
                r ||
                (i == 6 &&
                  (s > 0 ? (o > 0 ? c / M(10, t - o) : 0) : a[h - 1]) % 10 &
                    1) ||
                i == (e.s < 0 ? 8 : 7)))),
      n < 1 || !a[0])
    )
      return (
        (a.length = 0),
        f
          ? ((n -= e.e + 1), (a[0] = M(10, (m - (n % m)) % m)), (e.e = -n || 0))
          : (a[0] = e.e = 0),
        e
      );
    if (
      (s == 0
        ? ((a.length = h), (u = 1), h--)
        : ((a.length = h + 1),
          (u = M(10, m - s)),
          (a[h] = o > 0 ? ((c / M(10, t - o)) % M(10, o) | 0) * u : 0)),
      f)
    )
      for (;;)
        if (h == 0) {
          for (s = 1, o = a[0]; o >= 10; o /= 10) s++;
          for (o = a[0] += u, u = 1; o >= 10; o /= 10) u++;
          s != u && (e.e++, a[0] == F && (a[0] = 1));
          break;
        } else {
          if (((a[h] += u), a[h] != F)) break;
          (a[h--] = 0), (u = 1);
        }
    for (s = a.length; a[--s] === 0; ) a.pop();
  }
  return (
    w &&
      (e.e > g.maxE
        ? ((e.d = null), (e.e = NaN))
        : e.e < g.minE && ((e.e = 0), (e.d = [0]))),
    e
  );
}
function I(e, n, i) {
  if (!e.isFinite()) return Ue(e);
  var r,
    t = e.e,
    s = O(e.d),
    o = s.length;
  return (
    n
      ? (i && (r = i - o) > 0
          ? (s = s.charAt(0) + "." + s.slice(1) + U(r))
          : o > 1 && (s = s.charAt(0) + "." + s.slice(1)),
        (s = s + (e.e < 0 ? "e" : "e+") + e.e))
      : t < 0
        ? ((s = "0." + U(-t - 1) + s), i && (r = i - o) > 0 && (s += U(r)))
        : t >= o
          ? ((s += U(t + 1 - o)),
            i && (r = i - t - 1) > 0 && (s = s + "." + U(r)))
          : ((r = t + 1) < o && (s = s.slice(0, r) + "." + s.slice(r)),
            i && (r = i - o) > 0 && (t + 1 === o && (s += "."), (s += U(r)))),
    s
  );
}
function ue(e, n) {
  var i = e[0];
  for (n *= m; i >= 10; i /= 10) n++;
  return n;
}
function se(e, n, i) {
  if (n > ye) throw ((w = !0), i && (e.precision = i), Error(Te));
  return p(new e(re), n, 1, !0);
}
function R(e, n, i) {
  if (n > ve) throw Error(Te);
  return p(new e(te), n, i, !0);
}
function Ie(e) {
  var n = e.length - 1,
    i = n * m + 1;
  if (((n = e[n]), n)) {
    for (; n % 10 == 0; n /= 10) i--;
    for (n = e[0]; n >= 10; n /= 10) i++;
  }
  return i;
}
function U(e) {
  for (var n = ""; e--; ) n += "0";
  return n;
}
function De(e, n, i, r) {
  var t,
    s = new e(1),
    o = Math.ceil(r / m + 4);
  for (w = !1; ; ) {
    if (
      (i % 2 && ((s = s.times(n)), Ae(s.d, o) && (t = !0)),
      (i = A(i / 2)),
      i === 0)
    ) {
      (i = s.d.length - 1), t && s.d[i] === 0 && ++s.d[i];
      break;
    }
    (n = n.times(n)), Ae(n.d, o);
  }
  return (w = !0), s;
}
function be(e) {
  return e.d[e.d.length - 1] & 1;
}
function Ze(e, n, i) {
  for (var r, t = new e(n[0]), s = 0; ++s < n.length; )
    if (((r = new e(n[s])), r.s)) t[i](r) && (t = r);
    else {
      t = r;
      break;
    }
  return t;
}
function Ee(e, n) {
  var i,
    r,
    t,
    s,
    o,
    u,
    l,
    f = 0,
    c = 0,
    a = 0,
    h = e.constructor,
    g = h.rounding,
    v = h.precision;
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
    n == null ? ((w = !1), (l = v)) : (l = n), u = new h(0.03125);
    e.e > -2;

  )
    (e = e.times(u)), (a += 5);
  for (
    r = ((Math.log(M(2, a)) / Math.LN10) * 2 + 5) | 0,
      l += r,
      i = s = o = new h(1),
      h.precision = l;
    ;

  ) {
    if (
      ((s = p(s.times(e), l, 1)),
      (i = i.times(++c)),
      (u = o.plus(S(s, i, l, 1))),
      O(u.d).slice(0, l) === O(o.d).slice(0, l))
    ) {
      for (t = a; t--; ) o = p(o.times(o), l, 1);
      if (n == null)
        if (f < 3 && Q(o.d, l - r, g, f))
          (h.precision = l += 10), (i = s = u = new h(1)), (c = 0), f++;
        else return p(o, (h.precision = v), g, (w = !0));
      else return (h.precision = v), o;
    }
    o = u;
  }
}
function B(e, n) {
  var i,
    r,
    t,
    s,
    o,
    u,
    l,
    f,
    c,
    a,
    h,
    g = 1,
    v = 10,
    N = e,
    _ = N.d,
    C = N.constructor,
    T = C.rounding,
    E = C.precision;
  if (N.s < 0 || !_ || !_[0] || (!N.e && _[0] == 1 && _.length == 1))
    return new C(_ && !_[0] ? -1 / 0 : N.s != 1 ? NaN : _ ? 0 : N);
  if (
    (n == null ? ((w = !1), (c = E)) : (c = n),
    (C.precision = c += v),
    (i = O(_)),
    (r = i.charAt(0)),
    Math.abs((s = N.e)) < 15e14)
  ) {
    for (; (r < 7 && r != 1) || (r == 1 && i.charAt(1) > 3); )
      (N = N.times(e)), (i = O(N.d)), (r = i.charAt(0)), g++;
    (s = N.e),
      r > 1 ? ((N = new C("0." + i)), s++) : (N = new C(r + "." + i.slice(1)));
  } else
    return (
      (f = se(C, c + 2, E).times(s + "")),
      (N = B(new C(r + "." + i.slice(1)), c - v).plus(f)),
      (C.precision = E),
      n == null ? p(N, E, T, (w = !0)) : N
    );
  for (
    a = N,
      l = o = N = S(N.minus(1), N.plus(1), c, 1),
      h = p(N.times(N), c, 1),
      t = 3;
    ;

  ) {
    if (
      ((o = p(o.times(h), c, 1)),
      (f = l.plus(S(o, new C(t), c, 1))),
      O(f.d).slice(0, c) === O(l.d).slice(0, c))
    )
      if (
        ((l = l.times(2)),
        s !== 0 && (l = l.plus(se(C, c + 2, E).times(s + ""))),
        (l = S(l, new C(g), c, 1)),
        n == null)
      )
        if (Q(l.d, c - v, T, u))
          (C.precision = c += v),
            (f = o = N = S(a.minus(1), a.plus(1), c, 1)),
            (h = p(N.times(N), c, 1)),
            (t = u = 1);
        else return p(l, (C.precision = E), T, (w = !0));
      else return (C.precision = E), l;
    (l = f), (t += 2);
  }
}
function Ue(e) {
  return String((e.s * e.s) / 0);
}
function Se(e, n) {
  var i, r, t;
  for (
    (i = n.indexOf(".")) > -1 && (n = n.replace(".", "")),
      (r = n.search(/e/i)) > 0
        ? (i < 0 && (i = r), (i += +n.slice(r + 1)), (n = n.substring(0, r)))
        : i < 0 && (i = n.length),
      r = 0;
    n.charCodeAt(r) === 48;
    r++
  );
  for (t = n.length; n.charCodeAt(t - 1) === 48; --t);
  if (((n = n.slice(r, t)), n)) {
    if (
      ((t -= r),
      (e.e = i = i - r - 1),
      (e.d = []),
      (r = (i + 1) % m),
      i < 0 && (r += m),
      r < t)
    ) {
      for (r && e.d.push(+n.slice(0, r)), t -= m; r < t; )
        e.d.push(+n.slice(r, (r += m)));
      (n = n.slice(r)), (r = m - n.length);
    } else r -= t;
    for (; r--; ) n += "0";
    e.d.push(+n),
      w &&
        (e.e > e.constructor.maxE
          ? ((e.d = null), (e.e = NaN))
          : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
  } else (e.e = 0), (e.d = [0]);
  return e;
}
function nn(e, n) {
  var i, r, t, s, o, u, l, f, c;
  if (n.indexOf("_") > -1) {
    if (((n = n.replace(/(\d)_(?=\d)/g, "$1")), Fe.test(n))) return Se(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), (e.e = NaN), (e.d = null), e;
  if (Ye.test(n)) (i = 16), (n = n.toLowerCase());
  else if (Qe.test(n)) i = 2;
  else if (xe.test(n)) i = 8;
  else throw Error($ + n);
  for (
    s = n.search(/p/i),
      s > 0
        ? ((l = +n.slice(s + 1)), (n = n.substring(2, s)))
        : (n = n.slice(2)),
      s = n.indexOf("."),
      o = s >= 0,
      r = e.constructor,
      o &&
        ((n = n.replace(".", "")),
        (u = n.length),
        (s = u - s),
        (t = De(r, new r(i), s, s * 2))),
      f = ie(n, i, F),
      c = f.length - 1,
      s = c;
    f[s] === 0;
    --s
  )
    f.pop();
  return s < 0
    ? new r(e.s * 0)
    : ((e.e = ue(f, c)),
      (e.d = f),
      (w = !1),
      o && (e = S(e, t, u * 4)),
      l && (e = e.times(Math.abs(l) < 54 ? M(2, l) : Y.pow(2, l))),
      (w = !0),
      e);
}
function rn(e, n) {
  var i,
    r = n.d.length;
  if (r < 3) return n.isZero() ? n : J(e, 2, n, n);
  (i = 1.4 * Math.sqrt(r)),
    (i = i > 16 ? 16 : i | 0),
    (n = n.times(1 / fe(5, i))),
    (n = J(e, 2, n, n));
  for (var t, s = new e(5), o = new e(16), u = new e(20); i--; )
    (t = n.times(n)), (n = n.times(s.plus(t.times(o.times(t).minus(u)))));
  return n;
}
function J(e, n, i, r, t) {
  var s,
    o,
    u,
    l,
    f = 1,
    c = e.precision,
    a = Math.ceil(c / m);
  for (w = !1, l = i.times(i), u = new e(r); ; ) {
    if (
      ((o = S(u.times(l), new e(n++ * n++), c, 1)),
      (u = t ? r.plus(o) : r.minus(o)),
      (r = S(o.times(l), new e(n++ * n++), c, 1)),
      (o = u.plus(r)),
      o.d[a] !== void 0)
    ) {
      for (s = a; o.d[s] === u.d[s] && s--; );
      if (s == -1) break;
    }
    (s = u), (u = r), (r = o), (o = s), f++;
  }
  return (w = !0), (o.d.length = a + 1), o;
}
function fe(e, n) {
  for (var i = e; --n; ) i *= e;
  return i;
}
function Be(e, n) {
  var i,
    r = n.s < 0,
    t = R(e, e.precision, 1),
    s = t.times(0.5);
  if (((n = n.abs()), n.lte(s))) return (Z = r ? 4 : 1), n;
  if (((i = n.divToInt(t)), i.isZero())) Z = r ? 3 : 2;
  else {
    if (((n = n.minus(i.times(t))), n.lte(s)))
      return (Z = be(i) ? (r ? 2 : 3) : r ? 4 : 1), n;
    Z = be(i) ? (r ? 1 : 4) : r ? 3 : 2;
  }
  return n.minus(t).abs();
}
function ke(e, n, i, r) {
  var t,
    s,
    o,
    u,
    l,
    f,
    c,
    a,
    h,
    g = e.constructor,
    v = i !== void 0;
  if (
    (v
      ? (q(i, 1, V), r === void 0 ? (r = g.rounding) : q(r, 0, 8))
      : ((i = g.precision), (r = g.rounding)),
    !e.isFinite())
  )
    c = Ue(e);
  else {
    for (
      c = I(e),
        o = c.indexOf("."),
        v
          ? ((t = 2), n == 16 ? (i = i * 4 - 3) : n == 8 && (i = i * 3 - 2))
          : (t = n),
        o >= 0 &&
          ((c = c.replace(".", "")),
          (h = new g(1)),
          (h.e = c.length - o),
          (h.d = ie(I(h), 10, t)),
          (h.e = h.d.length)),
        a = ie(c, 10, t),
        s = l = a.length;
      a[--l] == 0;

    )
      a.pop();
    if (!a[0]) c = v ? "0p+0" : "0";
    else {
      if (
        (o < 0
          ? s--
          : ((e = new g(e)),
            (e.d = a),
            (e.e = s),
            (e = S(e, h, i, r, 0, t)),
            (a = e.d),
            (s = e.e),
            (f = qe)),
        (o = a[i]),
        (u = t / 2),
        (f = f || a[i + 1] !== void 0),
        (f =
          r < 4
            ? (o !== void 0 || f) && (r === 0 || r === (e.s < 0 ? 3 : 2))
            : o > u ||
              (o === u &&
                (r === 4 ||
                  f ||
                  (r === 6 && a[i - 1] & 1) ||
                  r === (e.s < 0 ? 8 : 7)))),
        (a.length = i),
        f)
      )
        for (; ++a[--i] > t - 1; ) (a[i] = 0), i || (++s, a.unshift(1));
      for (l = a.length; !a[l - 1]; --l);
      for (o = 0, c = ""; o < l; o++) c += we.charAt(a[o]);
      if (v) {
        if (l > 1)
          if (n == 16 || n == 8) {
            for (o = n == 16 ? 4 : 3, --l; l % o; l++) c += "0";
            for (a = ie(c, t, n), l = a.length; !a[l - 1]; --l);
            for (o = 1, c = "1."; o < l; o++) c += we.charAt(a[o]);
          } else c = c.charAt(0) + "." + c.slice(1);
        c = c + (s < 0 ? "p" : "p+") + s;
      } else if (s < 0) {
        for (; ++s; ) c = "0" + c;
        c = "0." + c;
      } else if (++s > l) for (s -= l; s--; ) c += "0";
      else s < l && (c = c.slice(0, s) + "." + c.slice(s));
    }
    c = (n == 16 ? "0x" : n == 2 ? "0b" : n == 8 ? "0o" : "") + c;
  }
  return e.s < 0 ? "-" + c : c;
}
function Ae(e, n) {
  if (e.length > n) return (e.length = n), !0;
}
function tn(e) {
  return new this(e).abs();
}
function sn(e) {
  return new this(e).acos();
}
function on(e) {
  return new this(e).acosh();
}
function un(e, n) {
  return new this(e).plus(n);
}
function fn(e) {
  return new this(e).asin();
}
function ln(e) {
  return new this(e).asinh();
}
function cn(e) {
  return new this(e).atan();
}
function an(e) {
  return new this(e).atanh();
}
function hn(e, n) {
  (e = new this(e)), (n = new this(n));
  var i,
    r = this.precision,
    t = this.rounding,
    s = r + 4;
  return (
    !e.s || !n.s
      ? (i = new this(NaN))
      : !e.d && !n.d
        ? ((i = R(this, s, 1).times(n.s > 0 ? 0.25 : 0.75)), (i.s = e.s))
        : !n.d || e.isZero()
          ? ((i = n.s < 0 ? R(this, r, t) : new this(0)), (i.s = e.s))
          : !e.d || n.isZero()
            ? ((i = R(this, s, 1).times(0.5)), (i.s = e.s))
            : n.s < 0
              ? ((this.precision = s),
                (this.rounding = 1),
                (i = this.atan(S(e, n, s, 1))),
                (n = R(this, s, 1)),
                (this.precision = r),
                (this.rounding = t),
                (i = e.s < 0 ? i.minus(n) : i.plus(n)))
              : (i = this.atan(S(e, n, s, 1))),
    i
  );
}
function dn(e) {
  return new this(e).cbrt();
}
function pn(e) {
  return p((e = new this(e)), e.e + 1, 2);
}
function gn(e, n, i) {
  return new this(e).clamp(n, i);
}
function mn(e) {
  if (!e || typeof e != "object") throw Error(oe + "Object expected");
  var n,
    i,
    r,
    t = e.defaults === !0,
    s = [
      "precision",
      1,
      V,
      "rounding",
      0,
      8,
      "toExpNeg",
      -H,
      0,
      "toExpPos",
      0,
      H,
      "maxE",
      0,
      H,
      "minE",
      -H,
      0,
      "modulo",
      0,
      9,
    ];
  for (n = 0; n < s.length; n += 3)
    if (((i = s[n]), t && (this[i] = Ne[i]), (r = e[i]) !== void 0))
      if (A(r) === r && r >= s[n + 1] && r <= s[n + 2]) this[i] = r;
      else throw Error($ + i + ": " + r);
  if (((i = "crypto"), t && (this[i] = Ne[i]), (r = e[i]) !== void 0))
    if (r === !0 || r === !1 || r === 0 || r === 1)
      if (r)
        if (
          typeof crypto < "u" &&
          crypto &&
          (crypto.getRandomValues || crypto.randomBytes)
        )
          this[i] = !0;
        else throw Error(Le);
      else this[i] = !1;
    else throw Error($ + i + ": " + r);
  return this;
}
function wn(e) {
  return new this(e).cos();
}
function Nn(e) {
  return new this(e).cosh();
}
function $e(e) {
  var n, i, r;
  function t(s) {
    var o,
      u,
      l,
      f = this;
    if (!(f instanceof t)) return new t(s);
    if (((f.constructor = t), _e(s))) {
      (f.s = s.s),
        w
          ? !s.d || s.e > t.maxE
            ? ((f.e = NaN), (f.d = null))
            : s.e < t.minE
              ? ((f.e = 0), (f.d = [0]))
              : ((f.e = s.e), (f.d = s.d.slice()))
          : ((f.e = s.e), (f.d = s.d ? s.d.slice() : s.d));
      return;
    }
    if (((l = typeof s), l === "number")) {
      if (s === 0) {
        (f.s = 1 / s < 0 ? -1 : 1), (f.e = 0), (f.d = [0]);
        return;
      }
      if ((s < 0 ? ((s = -s), (f.s = -1)) : (f.s = 1), s === ~~s && s < 1e7)) {
        for (o = 0, u = s; u >= 10; u /= 10) o++;
        w
          ? o > t.maxE
            ? ((f.e = NaN), (f.d = null))
            : o < t.minE
              ? ((f.e = 0), (f.d = [0]))
              : ((f.e = o), (f.d = [s]))
          : ((f.e = o), (f.d = [s]));
        return;
      } else if (s * 0 !== 0) {
        s || (f.s = NaN), (f.e = NaN), (f.d = null);
        return;
      }
      return Se(f, s.toString());
    } else if (l !== "string") throw Error($ + s);
    return (
      (u = s.charCodeAt(0)) === 45
        ? ((s = s.slice(1)), (f.s = -1))
        : (u === 43 && (s = s.slice(1)), (f.s = 1)),
      Fe.test(s) ? Se(f, s) : nn(f, s)
    );
  }
  if (
    ((t.prototype = d),
    (t.ROUND_UP = 0),
    (t.ROUND_DOWN = 1),
    (t.ROUND_CEIL = 2),
    (t.ROUND_FLOOR = 3),
    (t.ROUND_HALF_UP = 4),
    (t.ROUND_HALF_DOWN = 5),
    (t.ROUND_HALF_EVEN = 6),
    (t.ROUND_HALF_CEIL = 7),
    (t.ROUND_HALF_FLOOR = 8),
    (t.EUCLID = 9),
    (t.config = t.set = mn),
    (t.clone = $e),
    (t.isDecimal = _e),
    (t.abs = tn),
    (t.acos = sn),
    (t.acosh = on),
    (t.add = un),
    (t.asin = fn),
    (t.asinh = ln),
    (t.atan = cn),
    (t.atanh = an),
    (t.atan2 = hn),
    (t.cbrt = dn),
    (t.ceil = pn),
    (t.clamp = gn),
    (t.cos = wn),
    (t.cosh = Nn),
    (t.div = vn),
    (t.exp = En),
    (t.floor = Sn),
    (t.hypot = kn),
    (t.ln = Cn),
    (t.log = Mn),
    (t.log10 = Pn),
    (t.log2 = On),
    (t.max = bn),
    (t.min = An),
    (t.mod = _n),
    (t.mul = qn),
    (t.pow = Tn),
    (t.random = Ln),
    (t.round = Rn),
    (t.sign = Fn),
    (t.sin = In),
    (t.sinh = Dn),
    (t.sqrt = Zn),
    (t.sub = Un),
    (t.sum = Bn),
    (t.tan = $n),
    (t.tanh = Vn),
    (t.trunc = Hn),
    e === void 0 && (e = {}),
    e && e.defaults !== !0)
  )
    for (
      r = [
        "precision",
        "rounding",
        "toExpNeg",
        "toExpPos",
        "maxE",
        "minE",
        "modulo",
        "crypto",
      ],
        n = 0;
      n < r.length;

    )
      e.hasOwnProperty((i = r[n++])) || (e[i] = this[i]);
  return t.config(e), t;
}
function vn(e, n) {
  return new this(e).div(n);
}
function En(e) {
  return new this(e).exp();
}
function Sn(e) {
  return p((e = new this(e)), e.e + 1, 3);
}
function kn() {
  var e,
    n,
    i = new this(0);
  for (w = !1, e = 0; e < arguments.length; )
    if (((n = new this(arguments[e++])), n.d)) i.d && (i = i.plus(n.times(n)));
    else {
      if (n.s) return (w = !0), new this(1 / 0);
      i = n;
    }
  return (w = !0), i.sqrt();
}
function _e(e) {
  return e instanceof Y || (e && e.toStringTag === Re) || !1;
}
function Cn(e) {
  return new this(e).ln();
}
function Mn(e, n) {
  return new this(e).log(n);
}
function On(e) {
  return new this(e).log(2);
}
function Pn(e) {
  return new this(e).log(10);
}
function bn() {
  return Ze(this, arguments, "lt");
}
function An() {
  return Ze(this, arguments, "gt");
}
function _n(e, n) {
  return new this(e).mod(n);
}
function qn(e, n) {
  return new this(e).mul(n);
}
function Tn(e, n) {
  return new this(e).pow(n);
}
function Ln(e) {
  var n,
    i,
    r,
    t,
    s = 0,
    o = new this(1),
    u = [];
  if (
    (e === void 0 ? (e = this.precision) : q(e, 1, V),
    (r = Math.ceil(e / m)),
    this.crypto)
  )
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(r)); s < r; )
        (t = n[s]),
          t >= 429e7
            ? (n[s] = crypto.getRandomValues(new Uint32Array(1))[0])
            : (u[s++] = t % 1e7);
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes((r *= 4)); s < r; )
        (t =
          n[s] + (n[s + 1] << 8) + (n[s + 2] << 16) + ((n[s + 3] & 127) << 24)),
          t >= 214e7
            ? crypto.randomBytes(4).copy(n, s)
            : (u.push(t % 1e7), (s += 4));
      s = r / 4;
    } else throw Error(Le);
  else for (; s < r; ) u[s++] = (Math.random() * 1e7) | 0;
  for (
    r = u[--s],
      e %= m,
      r && e && ((t = M(10, m - e)), (u[s] = ((r / t) | 0) * t));
    u[s] === 0;
    s--
  )
    u.pop();
  if (s < 0) (i = 0), (u = [0]);
  else {
    for (i = -1; u[0] === 0; i -= m) u.shift();
    for (r = 1, t = u[0]; t >= 10; t /= 10) r++;
    r < m && (i -= m - r);
  }
  return (o.e = i), (o.d = u), o;
}
function Rn(e) {
  return p((e = new this(e)), e.e + 1, this.rounding);
}
function Fn(e) {
  return (e = new this(e)), e.d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function In(e) {
  return new this(e).sin();
}
function Dn(e) {
  return new this(e).sinh();
}
function Zn(e) {
  return new this(e).sqrt();
}
function Un(e, n) {
  return new this(e).sub(n);
}
function Bn() {
  var e = 0,
    n = arguments,
    i = new this(n[e]);
  for (w = !1; i.s && ++e < n.length; ) i = i.plus(n[e]);
  return (w = !0), p(i, this.precision, this.rounding);
}
function $n(e) {
  return new this(e).tan();
}
function Vn(e) {
  return new this(e).tanh();
}
function Hn(e) {
  return p((e = new this(e)), e.e + 1, 1);
}
d[Symbol.for("nodejs.util.inspect.custom")] = d.toString;
d[Symbol.toStringTag] = "Decimal";
var Y = (d.constructor = $e(Ne));
re = new Y(re);
te = new Y(te);
var Ve = Y;
var Jn = "Cloudflare-Workers",
  Wn = "node";
function He() {
  var e, n, i;
  return typeof Netlify == "object"
    ? "netlify"
    : typeof EdgeRuntime == "string"
      ? "edge-light"
      : ((e = globalThis.navigator) == null ? void 0 : e.userAgent) === Jn
        ? "workerd"
        : globalThis.Deno
          ? "deno"
          : globalThis.__lagon__
            ? "lagon"
            : ((i = (n = globalThis.process) == null ? void 0 : n.release) ==
                null
                  ? void 0
                  : i.name) === Wn
              ? "node"
              : globalThis.Bun
                ? "bun"
                : globalThis.fastly
                  ? "fastly"
                  : "unknown";
}
0 &&
  (module.exports = {
    Decimal,
    Public,
    detectRuntime,
    makeStrictEnum,
    objectEnumValues,
  });
/*! Bundled license information:

decimal.js/decimal.mjs:
  (*!
   *  decimal.js v10.4.3
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   *)
*/
//# sourceMappingURL=index-browser.js.map
