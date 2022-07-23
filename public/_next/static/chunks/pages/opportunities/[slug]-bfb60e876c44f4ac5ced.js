_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [47],
  {
    OaiS: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/opportunities/[slug]',
        function () {
          return i('OkqY');
        },
      ]);
    },
    OkqY: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, '__N_SSG', function () {
          return u;
        });
      var n = i('nKUr'),
        s = (i('q1tI'), i('osSN')),
        a = i.n(s),
        r = i('YFqc'),
        o = i.n(r),
        c = i('6zGK'),
        l = i('CafY'),
        d = i('x5k4'),
        u = !0;
      t.default = function (e) {
        var t = e.job,
          i = e.jobs,
          s = e.data,
          r = null;
        return (
          s.site && (r = s.site),
          Object(n.jsx)(l.a, {
            site: r,
            page: null,
            join: !0,
            gradient: !1,
            children: Object(n.jsxs)('section', {
              className: 'pad-top',
              children: [
                Object(n.jsxs)('div', {
                  className: 'section-post pt-4',
                  children: [
                    Object(n.jsx)('div', {
                      className:
                        'text-3xl md:text-8xl font-bold leading-none tracking-tighter uppercase',
                      children: t.title,
                    }),
                    Object(n.jsxs)('h3', {
                      className: 'text-pink',
                      children: ['STATUS: ', t.status],
                    }),
                  ],
                }),
                (null === t || void 0 === t ? void 0 : t.body) &&
                  Object(n.jsx)(a.a, {
                    className: 'wip-body',
                    blocks: t.body,
                    serializers: c.a,
                  }),
                Object(n.jsxs)('div', {
                  className:
                    'text-xl md:text-2xl section-post bg-white text-black shadow-box-glow md:rounded-2xl text-center p-8',
                  children: [
                    "If you are interested in this role, please apply and if it's a good potential fit, someone from the FWB team will reach out directly:",
                    Object(n.jsx)(o.a, {
                      href: '/contribute',
                      children: Object(n.jsx)('a', {
                        className:
                          'text-2xl underline uppercase block text-pink hover:text-black pt-4',
                        children: 'Apply Now',
                      }),
                    }),
                  ],
                }),
                Object(n.jsxs)('div', {
                  className: 'pt-20 mt-20 border-t',
                  children: [
                    Object(n.jsx)('div', {
                      className: 'section-post pb-8 text-center',
                      children: Object(n.jsx)('h2', {
                        children: 'Other Opportunities',
                      }),
                    }),
                    Object(n.jsx)('div', {
                      className:
                        'section-post grid grid-cols-1 md:grid-cols-2 gap-8',
                      children: i.map(function (e, t) {
                        return Object(n.jsx)(d.Job, { data: e, i: t }, e.slug);
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    jnpm: function (e, t, i) {
      'use strict';
      var n = i('nKUr'),
        s = i('q1tI'),
        a = i('V8Bd'),
        r = i('fkrX'),
        o = i('ATyU'),
        c = i('8wkZ');
      t.a = function (e) {
        var t = e.key,
          i = e.distance,
          l = void 0 === i ? ['5deg', '-5deg'] : i,
          d = (e.rotate, e.innerClassName),
          u = e.className,
          p = void 0 === u ? null : u,
          j = e.children,
          b = Object(a.a)().scrollY,
          h = Object(s.useRef)(),
          x = Object(c.a)().height,
          m = Object(s.useState)(0),
          g = m[0],
          f = m[1],
          O = Object(s.useState)(0),
          v = O[0],
          w = O[1];
        Object(s.useEffect)(
          function () {
            if (h.current) {
              var e = function () {
                var e = h.current;
                f(e.getBoundingClientRect().top + window.pageYOffset),
                  w(e.offsetHeight);
              };
              return (
                setTimeout(function () {
                  return e();
                }, 50),
                window.addEventListener('resize', e),
                function () {
                  window.removeEventListener('resize', e);
                }
              );
            }
          },
          [h]
        );
        var N = [Math.max(0, g - x), g + v],
          y = Object(r.a)(b, N, l, { clamp: !0 });
        return Object(n.jsx)(
          'div',
          {
            ref: h,
            className: p,
            children: Object(n.jsx)(o.a.div, {
              className: d || '',
              initial: { rotate: 0 },
              style: { rotate: y || 0 },
              children: j,
            }),
          },
          t
        );
      };
    },
    x5k4: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, '__N_SSG', function () {
          return c;
        }),
        i.d(t, 'Job', function () {
          return l;
        });
      var n = i('nKUr'),
        s = (i('q1tI'), i('YFqc')),
        a = i.n(s),
        r = i('jnpm'),
        o = i('CafY'),
        c = !0;
      function l(e) {
        var t = e.data,
          i = e.i;
        return Object(n.jsx)(r.a, {
          distance: i % 2 ? ['4deg', '-4deg'] : ['-4deg', '4deg'],
          className: 'h-full pb-6 md:pb-12',
          innerClassName: 'h-full',
          children: Object(n.jsx)(a.a, {
            href: '/opportunities/'.concat(t.slug),
            children: Object(n.jsx)('a', {
              className: 'join-box shadow-box-glow h-full',
              children: Object(n.jsxs)('div', {
                children: [
                  Object(n.jsx)('div', {
                    className: 'join-box-title pb-16',
                    children: t.title,
                  }),
                  Object(n.jsx)('button', {
                    className: 'absolute bottom-4',
                    children: 'View Opportunity',
                  }),
                ],
              }),
            }),
          }),
        });
      }
      t.default = function (e) {
        var t = e.data,
          i = e.jobs,
          s = t.site,
          a = t.page;
        return Object(n.jsx)(o.a, {
          site: s,
          page: a,
          join: !0,
          gradient: !1,
          children: Object(n.jsxs)('section', {
            className: 'section pt-8',
            children: [
              Object(n.jsxs)('div', {
                className: 'text-center mb-8',
                children: [
                  Object(n.jsx)('div', {
                    className:
                      'text-3xl md:text-8xl font-bold leading-none tracking-tighter uppercase',
                    children: 'Open Opportunities',
                  }),
                  Object(n.jsx)('h2', {
                    children: 'Contribute to the FWB DAO',
                  }),
                ],
              }),
              Object(n.jsx)('p', {
                className: 'py-2',
                children:
                  "As we build the future of Web3 together, there are many ways to engage with FWB on a deeper level\u2014either as a member or contributor. Collaborating with FWB isn't like working for a traditional company. As a non-hierarchical organization, everything we do relies on active participation and community buy-in. All members have the opportunity to get involved with the DAO's governance, weigh in on existing projects, spin up creative proposals for the DAO to vote on, and receive funding for community-approved projects.",
              }),
              Object(n.jsx)('p', {
                className: 'py-2',
                children:
                  "Taking it a step further, contributors are compensated for their dedicated work to help steward the DAO's ongoing initiatives and operations. Funded opportunities arise in harmony with the group's needs to help take our projects further, and vary based on the DAO's evolving priorities.",
              }),
              Object(n.jsx)('p', {
                className: 'pt-2 pb-8',
                children:
                  'Each Season, FWB also hosts open calls for Cultural Contributors\u2014including grantees, fellows, and artists-in-residence.',
              }),
              Object(n.jsx)('div', {
                className: 'grid grid-cols-1 md:grid-cols-1 gap-8 my-12',
                children: i.map(function (e, t) {
                  return Object(n.jsx)(l, { data: e, i: t }, e.slug);
                }),
              }),
            ],
          }),
        });
      };
    },
  },
  [['OaiS', 0, 1, 2, 3, 4, 5, 6, 10, 13, 14]],
]);
