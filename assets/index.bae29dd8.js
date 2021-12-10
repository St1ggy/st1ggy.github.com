var ne = Object.defineProperty,
  ae = Object.defineProperties
var le = Object.getOwnPropertyDescriptors
var A = Object.getOwnPropertySymbols
var E = Object.prototype.hasOwnProperty,
  U = Object.prototype.propertyIsEnumerable
var w = (e, t, o) => (t in e ? ne(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (e[t] = o)),
  x = (e, t) => {
    for (var o in t || (t = {})) E.call(t, o) && w(e, o, t[o])
    if (A) for (var o of A(t)) U.call(t, o) && w(e, o, t[o])
    return e
  },
  O = (e, t) => ae(e, le(t))
var q = (e, t) => {
  var o = {}
  for (var s in e) E.call(e, s) && t.indexOf(s) < 0 && (o[s] = e[s])
  if (e != null && A) for (var s of A(e)) t.indexOf(s) < 0 && U.call(e, s) && (o[s] = e[s])
  return o
}
var J = (e, t, o) => (w(e, typeof t != 'symbol' ? `${t}` : t, o), o)
import {
  d as G,
  c as ie,
  s as re,
  F as ce,
  a as ue,
  b as de,
  e as pe,
  r as _e,
  f as me,
  g as m,
  h,
  i as P,
  o as W,
  j as i,
  k as p,
  w as Q,
  v as X,
  l as r,
  m as I,
  n as C,
  p as B,
  q as N,
  u as l,
  t as Y,
  x as H,
  y as ge,
  z as D,
  V as ve,
  A as he,
  B as fe,
  C as ye,
  D as f,
  E as T,
  G as be,
  H as $e,
  I as Se,
  J as ke,
  K as Ie,
  L as Le,
  M as Ae,
  N as He,
  O as Te,
  P as Ve,
} from './vendor.d928d057.js'
const ze = function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) s(n)
  new MutationObserver((n) => {
    for (const a of n)
      if (a.type === 'childList')
        for (const c of a.addedNodes) c.tagName === 'LINK' && c.rel === 'modulepreload' && s(c)
  }).observe(document, { childList: !0, subtree: !0 })
  function o(n) {
    const a = {}
    return (
      n.integrity && (a.integrity = n.integrity),
      n.referrerpolicy && (a.referrerPolicy = n.referrerpolicy),
      n.crossorigin === 'use-credentials'
        ? (a.credentials = 'include')
        : n.crossorigin === 'anonymous'
        ? (a.credentials = 'omit')
        : (a.credentials = 'same-origin'),
      a
    )
  }
  function s(n) {
    if (n.ep) return
    n.ep = !0
    const a = o(n)
    fetch(n.href, a)
  }
}
ze()
var V
;(function (e) {
  ;(e.dark = 'dark'), (e.light = 'light')
})(V || (V = {}))
const we = G({
    id: 'theme',
    state: () => ({ dark: !1 }),
    getters: {
      current(e) {
        return e.dark ? V.dark : V.light
      },
    },
    persist: !0,
  }),
  xe = G({
    id: 'settings',
    state: () => ({ active: !1 }),
    actions: {
      openSettings() {
        this.active = !0
      },
      closeSettings() {
        this.active = !1
      },
    },
  }),
  Z = ie()
Z.use(re)
const K = () => {
    const e = we(),
      t = xe()
    return { theme: e, settings: t }
  },
  Oe = { brand: pe, regular: _e, solid: me },
  y = Object.assign(ce, { Layers: ue, LayersText: de, icons: Oe })
var g
;(function (e) {
  ;(e.Top = 'top'), (e.Bottom = 'bottom')
})(g || (g = {}))
var $
;(function (e) {
  ;(e.Right = 'right'), (e.Left = 'left')
})($ || ($ = {}))
const M = (e) => e === g.Top || e === g.Bottom,
  Pe = (e) => !M(e)
var Ce = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  get Vertical() {
    return g
  },
  get Horizontal() {
    return $
  },
  isVertical: M,
  isHorizontal: Pe,
})
var S = (e, t) => {
  const o = e.__vccOpts || e
  for (const [s, n] of t) o[s] = n
  return o
}
const Be = ['id'],
  Ne = ['for'],
  De = ['onClick'],
  Ke = m({
    props: {
      name: null,
      items: null,
      verticalPosition: { default: g.Top },
      horizontalPosition: { default: $.Left },
      horizontal: { type: Boolean, default: !1 },
    },
    setup(e) {
      const t = e,
        o = h(() => {
          const { horizontal: _, verticalPosition: v, horizontalPosition: d } = t
          return _ ? (d === $.Left ? $.Right : $.Left) : v === g.Top ? g.Bottom : g.Top
        }),
        s = h(() => {
          const { verticalPosition: _, horizontalPosition: v } = t
          return { [_]: '1rem', [v]: '1rem' }
        }),
        n = h(() => {
          const { verticalPosition: _, horizontalPosition: v } = t
          return { [M(o.value) ? v : _]: 'calc(100% + 0.25rem)' }
        }),
        a = P(!1),
        c = () => {
          a.value = !1
        },
        u = P(null)
      W(u, c)
      const k = (_) => {
        c(), _ == null || _()
      }
      return (_, v) => (
        i(),
        p(
          'div',
          {
            class: 'speed-dial',
            style: Y(l(s)),
            ref: (d, j) => {
              ;(j.target = d), (u.value = d)
            },
          },
          [
            Q(
              r(
                'input',
                { id: t.name, type: 'checkbox', 'onUpdate:modelValue': v[0] || (v[0] = (d) => (a.value = d)) },
                null,
                8,
                Be,
              ),
              [[X, a.value]],
            ),
            r('label', { for: t.name }, [I(_.$slots, 'default', { isOpen: a.value }, void 0, !0)], 8, Ne),
            r(
              'div',
              { class: N(['items', l(o)]) },
              [
                (i(!0),
                p(
                  C,
                  null,
                  B(
                    t.items,
                    (d) => (
                      i(),
                      p(
                        'div',
                        { class: 'item', key: d.label, onClick: (j) => k(d.exec) },
                        [
                          d.icon ? (i(), H(l(y), { key: 0, icon: d.icon, size: 'lg' }, null, 8, ['icon'])) : ge('', !0),
                          r('div', { class: 'label', style: Y(l(n)) }, D(d.label), 5),
                        ],
                        8,
                        De,
                      )
                    ),
                  ),
                  128,
                )),
              ],
              2,
            ),
          ],
          4,
        )
      )
    },
  })
var Me = S(Ke, [['__scopeId', 'data-v-29821028']])
const Fe = m({
  props: { isOpen: { type: Boolean, required: !0 } },
  setup(e) {
    return (t, o) => (
      i(),
      p(
        'div',
        { class: N(['menu-burger', { open: e.isOpen }]) },
        [
          (i(),
          p(
            C,
            null,
            B(3, (s) => r('div', { class: 'line', key: s })),
            64,
          )),
        ],
        2,
      )
    )
  },
})
var Re = S(Fe, [['__scopeId', 'data-v-7195991a']])
const je = m({
  props: { options: null, onChange: null },
  setup(e) {
    const t = (o) => o.value
    return (o, s) => (
      i(),
      H(
        l(ve),
        {
          class: 'select',
          clearable: !1,
          options: e.options,
          reduce: t,
          searchable: !1,
          'onOption:selected': e.onChange,
        },
        null,
        8,
        ['options', 'onOption:selected'],
      )
    )
  },
})
const Ee = { class: 'switch' },
  Ue = ['id', 'name'],
  qe = ['for'],
  Je = { class: 'track-inner' },
  Ge = { class: 'track-inner' },
  We = { class: 'thumb' },
  Qe = { class: 'thumb-inner' },
  Xe = { class: 'thumb-inner' },
  Ye = m({
    props: { name: null, modelValue: { type: Boolean } },
    emits: ['update:modelValue'],
    setup(e, { emit: t }) {
      const o = e,
        s = h({ get: () => o.modelValue, set: (n) => t('update:modelValue', n) })
      return (n, a) => (
        i(),
        p('div', Ee, [
          Q(
            r(
              'input',
              {
                id: e.name,
                name: e.name,
                type: 'checkbox',
                'onUpdate:modelValue': a[0] || (a[0] = (c) => (he(s) ? (s.value = c) : null)),
              },
              null,
              8,
              Ue,
            ),
            [[X, l(s)]],
          ),
          r(
            'label',
            { class: 'track', for: e.name },
            [
              r('div', Je, [I(n.$slots, 'on', {}, void 0, !0)]),
              r('div', Ge, [I(n.$slots, 'off', {}, void 0, !0)]),
              r('div', We, [
                r('div', Qe, [I(n.$slots, 'on', {}, void 0, !0)]),
                r('div', Xe, [I(n.$slots, 'off', {}, void 0, !0)]),
              ]),
            ],
            8,
            qe,
          ),
        ])
      )
    },
  })
var Ze = S(Ye, [['__scopeId', 'data-v-7f4dc694']])
const et = '\u0411\u0440\u0430\u0433\u0438\u043D \u0414.\u041D.',
  tt = {
    pageTitle: '\u0413\u043B\u0430\u0432\u043D\u0430\u044F',
    content:
      '\u042D\u0442\u043E \u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430',
  },
  ot = {
    pageTitle: '\u041E\u0431\u043E \u043C\u043D\u0435',
    content:
      '\u042D\u0442\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u041E\u0431\u043E \u043C\u043D\u0435',
  },
  st = { settings: '\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438' },
  nt = { locale: '\u042F\u0437\u044B\u043A', theme: '\u0422\u0435\u043C\u0430' },
  at =
    '{{copyright}} \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B'
var lt = { appName: et, Home: tt, About: ot, general: st, settings: nt, copyright: at }
const it = 'Bragin D.N.',
  rt = { pageTitle: 'Home', content: 'This is Home page' },
  ct = { pageTitle: 'About', content: 'This is About page' },
  ut = { settings: 'Settings' },
  dt = { locale: 'Language', theme: 'Theme' },
  pt = '{{copyright}} All rights reserved'
var _t = { appName: it, Home: rt, About: ct, general: ut, settings: dt, copyright: pt },
  b
;(function (e) {
  ;(e.en = 'en'), (e.ru = 'ru')
})(b || (b = {}))
const ee = { [b.en]: 'English', [b.ru]: '\u0420\u0443\u0441\u0441\u043A\u0438\u0439' },
  mt = { [b.ru]: O(x({}, lt), { locales: ee }), [b.en]: O(x({}, _t), { locales: ee }) }
var F
;(function (e) {
  e.locale = 'locale'
})(F || (F = {}))
class L {
  static setItem(t, o) {
    localStorage.setItem(t, JSON.stringify(o))
  }

  static getItem(t, o) {
    const s = localStorage.getItem(t)
    try {
      return s ? JSON.parse(s) : o
    } catch {
      return s || o
    }
  }
}
J(L, 'LocalStorageKey', F)
const gt = fe({
    globalInjection: !0,
    legacy: !1,
    locale: L.getItem(L.LocalStorageKey.locale, b.en),
    fallbackLocale: b.en,
    messages: mt,
  }),
  z = () => ye({ useScope: 'global' }),
  vt = m({
    setup(e) {
      const { availableLocales: t, t: o } = z(),
        s = ({ value: a }) => {
          L.setItem(L.LocalStorageKey.locale, a)
        },
        n = h(() => t.map((a) => ({ value: a, label: o(`locales.${a}`) })))
      return (a, c) => (
        i(),
        H(
          l(je),
          {
            onChange: s,
            options: l(n),
            modelValue: a.$i18n.locale,
            'onUpdate:modelValue': c[0] || (c[0] = (u) => (a.$i18n.locale = u)),
          },
          null,
          8,
          ['options', 'modelValue'],
        )
      )
    },
  }),
  ht = { class: 'theme-switch' },
  ft = m({
    setup(e) {
      const { theme: t } = K()
      return (o, s) => (
        i(),
        p('div', ht, [
          f(
            l(Ze),
            {
              name: 'theme-switch',
              modelValue: l(t).dark,
              'onUpdate:modelValue': s[0] || (s[0] = (n) => (l(t).dark = n)),
            },
            {
              off: T(() => [f(l(y), { icon: l(y).icons.solid.faMoon, size: 'sm' }, null, 8, ['icon'])]),
              on: T(() => [f(l(y), { icon: l(y).icons.solid.faSun, size: 'sm' }, null, 8, ['icon'])]),
              _: 1,
            },
            8,
            ['modelValue'],
          ),
        ])
      )
    },
  })
const yt = { class: 'title' },
  bt = { class: 'content' },
  $t = m({
    setup(e) {
      const { t } = z(),
        { settings: o } = K(),
        s = h(() => [
          { title: t('settings.locale'), component: vt },
          { title: t('settings.theme'), component: ft },
        ]),
        n = P(null)
      return (
        W(n, o.closeSettings),
        (a, c) => (
          i(),
          p(
            'div',
            {
              class: N(['settings-panel', { active: l(o).active }]),
              ref: (u, k) => {
                ;(k.panel = u), (n.value = u)
              },
            },
            [
              (i(!0),
              p(
                C,
                null,
                B(
                  l(s),
                  (u) => (
                    i(),
                    p('div', { class: 'block', key: u.title }, [
                      r('b', yt, D(u.title), 1),
                      r('div', bt, [(i(), H(be(u.component)))]),
                    ])
                  ),
                ),
                128,
              )),
            ],
            2,
          )
        )
      )
    },
  })
var St = S($t, [['__scopeId', 'data-v-ee5d4e98']])
const te = (e) => {
  const { t } = z(),
    o = h(() => t(`${e}.pageTitle`))
  $e({ title: o })
}
const kt = { class: 'wrapper' },
  It = m({
    setup(e) {
      return te('Home'), (t, o) => (i(), p('div', kt, '{\\{ $t("Home.content") }}'))
    },
  })
var Lt = S(It, [['__scopeId', 'data-v-7c064402']])
const At = { class: 'wrapper' },
  Ht = m({
    setup(e) {
      return te('About'), (t, o) => (i(), p('div', At, D(t.$t('About.content')), 1))
    },
  })
var Tt = S(Ht, [['__scopeId', 'data-v-07053832']])
const oe = [
    { path: '/', component: Lt, name: 'Home', icon: y.icons.solid.faHome },
    { path: '/about', component: Tt, name: 'About', icon: y.icons.solid.faInfoCircle },
  ],
  R = Se({
    history: ke(),
    routes: oe.map((o) => {
      var s = o,
        { icon: e } = s,
        t = q(s, ['icon'])
      return t
    }),
  })
const Vt = (e) => (Ae('data-v-a5b79760'), (e = e()), He(), e),
  zt = { class: 'page-wrapper' },
  wt = Vt(() => r('base', { href: '/' }, null, -1)),
  xt = ['data-theme', 'lang'],
  Ot = m({
    setup(e) {
      const { theme: t, settings: o } = K(),
        { t: s } = z(),
        n = h(() => [
          ...oe.map(({ name: a, icon: c, path: u }) => ({
            label: s(`${a}.pageTitle`),
            icon: c,
            exec: () => {
              R.push(u)
            },
          })),
          { label: s('general.settings'), icon: y.icons.solid.faCog, exec: o.openSettings },
        ])
      return (a, c) => {
        const u = Ie('router-view')
        return (
          i(),
          p('div', zt, [
            f(l(Le), null, {
              default: T(() => [wt, r('html', { 'data-theme': l(t).current, lang: a.$i18n.locale }, null, 8, xt)]),
              _: 1,
            }),
            f(u, { class: 'container' }),
            f(
              l(Me),
              { 'horizontal-position': l(Ce).Horizontal.Right, items: l(n), horizontal: '', name: 'menu' },
              { default: T(({ isOpen: k }) => [f(l(Re), { isOpen: k }, null, 8, ['isOpen'])]), _: 1 },
              8,
              ['horizontal-position', 'items'],
            ),
            f(l(St)),
          ])
        )
      }
    },
  })
var Pt = S(Ot, [['__scopeId', 'data-v-a5b79760']])
const se = Te(Pt, {})
;[gt, R, Z, Ve()].forEach(se.use)
R.isReady().then(() => {
  se.mount('#app')
})
