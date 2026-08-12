import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default defineConfig({
  title: "JavaScript Engineering Mastery",
  titleTemplate: "%s | JavaScript Engineering Mastery",
  description: "Lộ trình JavaScript và Frontend Engineering chuyên sâu từ nền tảng runtime, browser, TypeScript, React, Next.js đến performance, security, architecture, production, tư duy Senior và Staff.",

  // Force dark mode to align with the technical editorial design
  appearance: 'force-dark',

  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#0B0D10' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'JavaScript Engineering Mastery' }],
    ['meta', { property: 'og:image', content: '/og-image.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: '/og-image.png' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'JavaScript',

    // Top Navigation Bar
    nav: [
      {
        text: 'Courses',
        items: [
          {
            text: 'TẦNG I — JAVASCRIPT CORE',
            items: [
              { text: 'Stage 0: Language Foundation', link: '/stages/00-javascript-language-foundation/' },
              { text: 'Stage 1: Execution Model', link: '/stages/01-javascript-execution-model/' },
              { text: 'Stage 2: Object Model & Advanced JS', link: '/stages/02-object-model/' },
              { text: 'Stage 3: Async & Concurrency', link: '/stages/03-async-concurrency/' }
            ]
          },
          {
            text: 'TẦNG II — WEB PLATFORM',
            items: [
              { text: 'Stage 4: Browser Runtime & Web Platform', link: '/stages/04-browser-runtime/' },
              { text: 'Stage 5: Network & Web Platform', link: '/stages/05-network/' },
              { text: 'Stage 6: TypeScript Engineering', link: '/stages/06-typescript/' },
              { text: 'Stage 7: Toolchain & Ecosystem', link: '/stages/07-toolchain/' }
            ]
          },
          {
            text: 'TẦNG III — FRONTEND ENGINEERING',
            items: [
              { text: 'Stage 8: React Engineering', link: '/stages/08-react/' },
              { text: 'Stage 9: Production Frontend', link: '/stages/09-production-frontend/' },
              { text: 'Stage 10: Next.js & Full-stack Frontend', link: '/stages/10-nextjs/' },
              { text: 'Stage 11: Performance, Memory & Security', link: '/stages/11-performance-memory-security/' }
            ]
          },
          {
            text: 'TẦNG IV — SYSTEM & LEADERSHIP',
            items: [
              { text: 'Stage 12: Frontend Architecture', link: '/stages/12-architecture/' },
              { text: 'Stage 13: Production & System Engineering', link: '/stages/13-production-system-engineering/' },
              { text: 'Stage 14: Senior Engineering', link: '/stages/14-senior-engineering/' },
              { text: 'Stage 15: Staff Engineering Track', link: '/stages/15-staff-engineering/' }
            ]
          }
        ]
      },
      {
        text: 'Bắt đầu',
        items: [
          { text: 'Giới thiệu khóa học', link: '/intro/' },
          { text: 'Cách học hiệu quả', link: '/how-to-learn/' },
          { text: 'Ma trận năng lực', link: '/competencies/' }
        ]
      },
      { text: 'Roadmap', link: '/roadmap/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Engineering', link: '/engineering/' },
      { text: 'Glossary', link: '/glossary/' },
      { text: 'War Stories', link: '/war-stories/' }
    ],

    // Route-specific Sidebars
    sidebar: {
      // Stage 0
      '/stages/00-javascript-language-foundation/': [
        {
          text: 'Stage 0: Language Foundation',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/stages/00-javascript-language-foundation/' },
            {
              text: 'Module 0.1: Runtime Fundamentals',
              collapsed: false,
              items: [
                { text: 'Lesson 0.1.1: JavaScript là gì?', link: '/stages/00-javascript-language-foundation/0.1.1-what-is-javascript' },
                { text: 'Lesson 0.1.2: Browser vs Node.js', link: '/stages/00-javascript-language-foundation/0.1.2-browser-vs-nodejs' },
                { text: 'Lesson 0.1.3: Execution ở mức khái niệm', link: '/stages/00-javascript-language-foundation/0.1.3-execution-conceptual' }
              ]
            },
            {
              text: 'Module 0.2: Values, Variables & Types',
              collapsed: true,
              items: [
                { text: 'Lesson 0.2.1: Values', link: '/stages/00-javascript-language-foundation/0.2.1-values' },
                { text: 'Lesson 0.2.2: Variables & Bindings', link: '/stages/00-javascript-language-foundation/0.2.2-variables-bindings' },
                { text: 'Lesson 0.2.3: Primitive Types', link: '/stages/00-javascript-language-foundation/0.2.3-primitive-types' },
                { text: 'Lesson 0.2.4: Object Values', link: '/stages/00-javascript-language-foundation/0.2.4-object-values' },
                { text: 'Lesson 0.2.5: typeof', link: '/stages/00-javascript-language-foundation/0.2.5-typeof' }
              ]
            },
            {
              text: 'Module 0.3: Coercion & Equality',
              collapsed: true,
              items: [
                { text: 'Lesson 0.3.1: Truthy & Falsy', link: '/stages/00-javascript-language-foundation/0.3.1-truthy-falsy' },
                { text: 'Lesson 0.3.2: Equality', link: '/stages/00-javascript-language-foundation/0.3.2-equality' },
                { text: 'Lesson 0.3.3: Type Conversion', link: '/stages/00-javascript-language-foundation/0.3.3-type-conversion' },
                { text: 'Lesson 0.3.4: Coercion Lab', link: '/stages/00-javascript-language-foundation/0.3.4-coercion-lab' }
              ]
            },
            {
              text: 'Module 0.4: Operators & Control Flow',
              collapsed: true,
              items: [
                { text: 'Lesson 0.4.1: Operators', link: '/stages/00-javascript-language-foundation/0.4.1-operators' },
                { text: 'Lesson 0.4.2: Conditional Logic', link: '/stages/00-javascript-language-foundation/0.4.2-conditional-logic' },
                { text: 'Lesson 0.4.3: Short-circuit Evaluation', link: '/stages/00-javascript-language-foundation/0.4.3-short-circuit' },
                { text: 'Lesson 0.4.4: Guard Clauses & Early Return', link: '/stages/00-javascript-language-foundation/0.4.4-guard-clauses' },
                { text: 'Lesson 0.4.5: Loops', link: '/stages/00-javascript-language-foundation/0.4.5-loops' },
                { text: 'Lesson 0.4.6: for...of vs for...in', link: '/stages/00-javascript-language-foundation/0.4.6-for-of-for-in' }
              ]
            },
            {
              text: 'Module 0.5: Functions',
              collapsed: true,
              items: [
                { text: 'Lesson 0.5.1: Function Declaration', link: '/stages/00-javascript-language-foundation/0.5.1-function-declaration' },
                { text: 'Lesson 0.5.2: Function Expression', link: '/stages/00-javascript-language-foundation/0.5.2-function-expression' },
                { text: 'Lesson 0.5.3: Arrow Functions', link: '/stages/00-javascript-language-foundation/0.5.3-arrow-functions' },
                { text: 'Lesson 0.5.4: Parameters', link: '/stages/00-javascript-language-foundation/0.5.4-parameters' },
                { text: 'Lesson 0.5.5: Callback', link: '/stages/00-javascript-language-foundation/0.5.5-callback' },
                { text: 'Lesson 0.5.6: Higher-order Functions', link: '/stages/00-javascript-language-foundation/0.5.6-higher-order' },
                { text: 'Lesson 0.5.7: Function Design', link: '/stages/00-javascript-language-foundation/0.5.7-function-design' }
              ]
            },
            {
              text: 'Module 0.6: Data Structures',
              collapsed: true,
              items: [
                { text: 'Lesson 0.6.1: Strings', link: '/stages/00-javascript-language-foundation/0.6.1-strings' },
                { text: 'Lesson 0.6.2: Arrays', link: '/stages/00-javascript-language-foundation/0.6.2-arrays' },
                { text: 'Lesson 0.6.3: Array Iteration', link: '/stages/00-javascript-language-foundation/0.6.3-array-iteration' },
                { text: 'Lesson 0.6.4: Reduce', link: '/stages/00-javascript-language-foundation/0.6.4-reduce' },
                { text: 'Lesson 0.6.5: Objects', link: '/stages/00-javascript-language-foundation/0.6.5-objects' },
                { text: 'Lesson 0.6.6: Object Utilities', link: '/stages/00-javascript-language-foundation/0.6.6-object-utilities' },
                { text: 'Lesson 0.6.7: Destructuring', link: '/stages/00-javascript-language-foundation/0.6.7-destructuring' },
                { text: 'Lesson 0.6.8: Spread & Shallow Copy', link: '/stages/00-javascript-language-foundation/0.6.8-spread-shallow-copy' }
              ]
            },
            {
              text: 'Module 0.7: Error & Code Quality',
              collapsed: true,
              items: [
                { text: 'Lesson 0.7.1: Errors', link: '/stages/00-javascript-language-foundation/0.7.1-errors' },
                { text: 'Lesson 0.7.2: Throw', link: '/stages/00-javascript-language-foundation/0.7.2-throw' },
                { text: 'Lesson 0.7.3: Try/Catch', link: '/stages/00-javascript-language-foundation/0.7.3-try-catch' },
                { text: 'Lesson 0.7.4: Defensive Programming', link: '/stages/00-javascript-language-foundation/0.7.4-defensive' },
                { text: 'Lesson 0.7.5: Readable JavaScript', link: '/stages/00-javascript-language-foundation/0.7.5-readable-js' }
              ]
            },
            { text: 'Project 0: CLI Data Processor', link: '/stages/00-javascript-language-foundation/project-0' },
            { text: 'Stage Checkpoint', link: '/stages/00-javascript-language-foundation/checkpoint' }
          ]
        }
      ],

      // Stage 1
      '/stages/01-javascript-execution-model/': [
        {
          text: 'Stage 1: Execution Model',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/stages/01-javascript-execution-model/' },
            {
              text: 'Module 1.1: Execution Context',
              collapsed: false,
              items: [
                { text: 'Lesson 1.1.1: Execution Context là gì?', link: '/stages/01-javascript-execution-model/1.1.1-execution-context' },
                { text: 'Lesson 1.1.2: Global Execution Context', link: '/stages/01-javascript-execution-model/1.1.2-global-context' },
                { text: 'Lesson 1.1.3: Function Execution Context', link: '/stages/01-javascript-execution-model/1.1.3-function-context' },
                { text: 'Lesson 1.1.4: Creation vs Execution Phase', link: '/stages/01-javascript-execution-model/1.1.4-creation-execution' },
                { text: 'Lesson 1.1.5: Execution Context Stack', link: '/stages/01-javascript-execution-model/1.1.5-context-stack' }
              ]
            },
            {
              text: 'Module 1.2: Scope & Lexical Environment',
              collapsed: true,
              items: [
                { text: 'Lesson 1.2.1: Scope là gì?', link: '/stages/01-javascript-execution-model/1.2.1-scope' },
                { text: 'Lesson 1.2.2: Global Scope', link: '/stages/01-javascript-execution-model/1.2.2-global-scope' },
                { text: 'Lesson 1.2.3: Function Scope', link: '/stages/01-javascript-execution-model/1.2.3-function-scope' },
                { text: 'Lesson 1.2.4: Block Scope', link: '/stages/01-javascript-execution-model/1.2.4-block-scope' },
                { text: 'Lesson 1.2.5: Nested Scope', link: '/stages/01-javascript-execution-model/1.2.5-nested-scope' },
                { text: 'Lesson 1.2.6: Variable Resolution', link: '/stages/01-javascript-execution-model/1.2.6-variable-resolution' },
                { text: 'Lesson 1.2.7: Lexical Environment', link: '/stages/01-javascript-execution-model/1.2.7-lexical-environment' },
                { text: 'Lesson 1.2.8: Scope vs Execution Context', link: '/stages/01-javascript-execution-model/1.2.8-scope-vs-context' }
              ]
            },
            {
              text: 'Module 1.3: Hoisting & TDZ',
              collapsed: true,
              items: [
                { text: 'Lesson 1.3.1: Declaration vs Initialization', link: '/stages/01-javascript-execution-model/1.3.1-declaration-initialization' },
                { text: 'Lesson 1.3.2: var', link: '/stages/01-javascript-execution-model/1.3.2-var' },
                { text: 'Lesson 1.3.3: let và const', link: '/stages/01-javascript-execution-model/1.3.3-let-const' },
                { text: 'Lesson 1.3.4: Temporal Dead Zone', link: '/stages/01-javascript-execution-model/1.3.4-tdz' },
                { text: 'Lesson 1.3.5: Hoisting Mechanism', link: '/stages/01-javascript-execution-model/1.3.5-hoisting-mechanism' },
                { text: 'Lesson 1.3.6: Hoisting in Function', link: '/stages/01-javascript-execution-model/1.3.6-hoisting-function' }
              ]
            },
            {
              text: 'Module 1.4: Closures',
              collapsed: true,
              items: [
                { text: 'Lesson 1.4.1: Closure Formation', link: '/stages/01-javascript-execution-model/1.4.1-closure-formation' },
                { text: 'Lesson 1.4.2: Closure và Lifetime', link: '/stages/01-javascript-execution-model/1.4.2-closure-lifetime' },
                { text: 'Lesson 1.4.3: Closure as Private State', link: '/stages/01-javascript-execution-model/1.4.3-private-state' },
                { text: 'Lesson 1.4.4: Factory Functions', link: '/stages/01-javascript-execution-model/1.4.4-factory-functions' },
                { text: 'Lesson 1.4.5: Closure in Loop', link: '/stages/01-javascript-execution-model/1.4.5-closure-loop' },
                { text: 'Lesson 1.4.6: Closure + Callback', link: '/stages/01-javascript-execution-model/1.4.6-closure-callback' },
                { text: 'Lesson 1.4.7: Closure + Async', link: '/stages/01-javascript-execution-model/1.4.7-closure-async' },
                { text: 'Lesson 1.4.8: Stale Closure', link: '/stages/01-javascript-execution-model/1.4.8-stale-closure' }
              ]
            },
            { text: 'Module 1.5: Call Stack & Tracing', link: '/stages/01-javascript-execution-model/1.5-call-stack' },
            { text: 'Project 1: Mini Module System', link: '/stages/01-javascript-execution-model/project-1' },
            { text: 'Stage Checkpoint', link: '/stages/01-javascript-execution-model/checkpoint' }
          ]
        }
      ],

      // Stage 2
      '/stages/02-object-model/': [
        {
          text: 'Stage 2: Object Model',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/stages/02-object-model/' },
            { text: 'Module 2.1: Object Internals', link: '/stages/02-object-model/2.1-object-internals' },
            {
              text: 'Module 2.2: this Binding',
              collapsed: true,
              items: [
                { text: 'Lesson 2.2.1: Default binding', link: '/stages/02-object-model/2.2.1-default-binding' },
                { text: 'Lesson 2.2.2: Implicit binding', link: '/stages/02-object-model/2.2.2-implicit-binding' },
                { text: 'Lesson 2.2.3: Explicit binding', link: '/stages/02-object-model/2.2.3-explicit-binding' },
                { text: 'Lesson 2.2.4: new binding', link: '/stages/02-object-model/2.2.4-new-binding' },
                { text: 'Lesson 2.2.5: Arrow / Lexical this', link: '/stages/02-object-model/2.2.5-arrow-this' },
                { text: 'Lesson 2.2.6: call, apply, bind', link: '/stages/02-object-model/2.2.6-call-apply-bind' }
              ]
            },
            { text: 'Module 2.3: Prototype System', link: '/stages/02-object-model/2.3-prototype' },
            { text: 'Module 2.4: Classes & OOP', link: '/stages/02-object-model/2.4-classes' },
            { text: 'Module 2.5: Meta Programming', link: '/stages/02-object-model/2.5-meta-programming' },
            { text: 'Module 2.6: Iterators & Generators', link: '/stages/02-object-model/2.6-generators' },
            { text: 'Module 2.7: Built-in Structures', link: '/stages/02-object-model/2.7-built-in' },
            { text: 'Project 2: Mini Object Framework', link: '/stages/02-object-model/project-2' },
            { text: 'Stage Checkpoint', link: '/stages/02-object-model/checkpoint' }
          ]
        }
      ],

      // Stage 3
      '/stages/03-async-concurrency/': [
        {
          text: 'Stage 3: Async & Concurrency',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/stages/03-async-concurrency/' },
            { text: 'Module 3.1: Call Stack & Event Loop', link: '/stages/03-async-concurrency/3.1-event-loop' },
            {
              text: 'Module 3.2: Promise Model',
              collapsed: true,
              items: [
                { text: 'Lesson 3.2.1: Promise States', link: '/stages/03-async-concurrency/3.2.1-promise-states' },
                { text: 'Lesson 3.2.2: Resolution & Rejection', link: '/stages/03-async-concurrency/3.2.2-resolution-rejection' },
                { text: 'Lesson 3.2.3: Thenable Protocol', link: '/stages/03-async-concurrency/3.2.3-thenable' },
                { text: 'Lesson 3.2.4: Promise Chaining', link: '/stages/03-async-concurrency/3.2.4-promise-chaining' },
                { text: 'Lesson 3.2.5: Error Propagation', link: '/stages/03-async-concurrency/3.2.5-error-propagation' },
                { text: 'Lesson 3.2.6: finally handler', link: '/stages/03-async-concurrency/3.2.6-finally' },
                { text: 'Lesson 3.2.7: Microtask Queue', link: '/stages/03-async-concurrency/3.2.7-microtask-queue' }
              ]
            },
            { text: 'Module 3.3: Async/Await Mechanics', link: '/stages/03-async-concurrency/3.3-async-await' },
            { text: 'Module 3.4: Concurrency API', link: '/stages/03-async-concurrency/3.4-concurrency-api' },
            { text: 'Module 3.5: Cancellation Pattern', link: '/stages/03-async-concurrency/3.5-cancellation' },
            { text: 'Module 3.6: Reliability Patterns', link: '/stages/03-async-concurrency/3.6-reliability' },
            { text: 'Project 3: Production Search Engine', link: '/stages/03-async-concurrency/project-3' },
            { text: 'Stage Checkpoint', link: '/stages/03-async-concurrency/checkpoint' }
          ]
        }
      ],

      // Stage 4
      '/stages/04-browser-runtime/': [
        {
          text: 'Stage 4: Browser Runtime',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/stages/04-browser-runtime/' },
            { text: 'Module 4.1: DOM Architecture', link: '/stages/04-browser-runtime/4.1-dom' },
            { text: 'Module 4.2: Event Flow & Delegation', link: '/stages/04-browser-runtime/4.2-events' },
            { text: 'Module 4.3: Rendering Pipeline', link: '/stages/04-browser-runtime/4.3-rendering' },
            { text: 'Module 4.4: Browser Scheduling', link: '/stages/04-browser-runtime/4.4-scheduling' },
            { text: 'Module 4.5: Browser Observer APIs', link: '/stages/04-browser-runtime/4.5-observers' },
            { text: 'Module 4.6: Web Workers & Threads', link: '/stages/04-browser-runtime/4.6-workers' },
            { text: 'Module 4.7: Browser Storage Systems', link: '/stages/04-browser-runtime/4.7-storage' },
            { text: 'Module 4.8: Web Components', link: '/stages/04-browser-runtime/4.8-web-components' },
            { text: 'Project 4: High-perf Browser App', link: '/stages/04-browser-runtime/project-4' }
          ]
        }
      ],

      // Stage 5
      '/stages/05-network/': [
        {
          text: 'Stage 5: Network & Protocols',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/stages/05-network/' },
            { text: 'Module 5.1: Networking Fundamentals', link: '/stages/05-network/5.1-fundamentals' },
            { text: 'Module 5.2: HTTP Semantics', link: '/stages/05-network/5.2-http' },
            { text: 'Module 5.3: HTTP/2 & HTTP/3 (QUIC)', link: '/stages/05-network/5.3-http-evolution' },
            { text: 'Module 5.4: Same-Origin & CORS Security', link: '/stages/05-network/5.4-security' },
            { text: 'Module 5.5: HTTP Caching & CDNs', link: '/stages/05-network/5.5-caching' },
            { text: 'Module 5.6: API Engineering & Pagination', link: '/stages/05-network/5.6-api-design' },
            { text: 'Module 5.7: Realtime: WebSockets & SSE', link: '/stages/05-network/5.7-realtime' },
            { text: 'Project 5: Network-aware App', link: '/stages/05-network/project-5' }
          ]
        }
      ],

      // Stage 6
      '/stages/06-typescript/': [
        {
          text: 'Stage 6: TypeScript',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/stages/06-typescript/' },
            { text: 'Module 6.1: TypeScript Type System', link: '/stages/06-typescript/6.1-type-system' },
            { text: 'Module 6.2: Generics & Utility Types', link: '/stages/06-typescript/6.2-generics' },
            { text: 'Module 6.3: Advanced Conditional Types', link: '/stages/06-typescript/6.3-advanced-types' },
            { text: 'Module 6.4: Compile-time Type Safety', link: '/stages/06-typescript/6.4-type-safety' },
            { text: 'Module 6.5: Runtime Schema Validation', link: '/stages/06-typescript/6.5-runtime-validation' },
            { text: 'Module 6.6: Declaration Files & Library Typing', link: '/stages/06-typescript/6.6-library-typing' },
            { text: 'Project 6: Typed Domain Library', link: '/stages/06-typescript/project-6' }
          ]
        }
      ],

      // Stage 7
      '/stages/07-toolchain/': [
        {
          text: 'Stage 7: Toolchain & Ecosystem',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/stages/07-toolchain/' },
            { text: 'Module 7.1: Module Systems (ESM vs CJS)', link: '/stages/07-toolchain/7.1-modules' },
            { text: 'Module 7.2: Package Management & Monorepos', link: '/stages/07-toolchain/7.2-package-management' },
            { text: 'Module 7.3: Build Pipeline & ASTs', link: '/stages/07-toolchain/7.3-build-pipeline' },
            { text: 'Module 7.4: Bundlers (Vite/Webpack)', link: '/stages/07-toolchain/7.4-bundlers' },
            { text: 'Module 7.5: Code Optimization & Splitting', link: '/stages/07-toolchain/7.5-optimization' },
            { text: 'Module 7.6: Developer Infrastructure', link: '/stages/07-toolchain/7.6-tooling' },
            { text: 'Project 7: Build System from Zero', link: '/stages/07-toolchain/project-7' }
          ]
        }
      ],

      // Stage 8
      '/stages/08-react/': [
        {
          text: 'Stage 8: React Engineering',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/stages/08-react/' },
            { text: 'Module 8.1: React Virtual DOM Model', link: '/stages/08-react/8.1-react-model' },
            { text: 'Module 8.2: Reconciliation & Keys', link: '/stages/08-react/8.2-reconciliation' },
            { text: 'Module 8.3: Fiber Architecture', link: '/stages/08-react/8.3-fiber' },
            { text: 'Module 8.4: Hooks In-depth & Lifecycle', link: '/stages/08-react/8.4-hooks' },
            { text: 'Module 8.5: Client-side State Architecture', link: '/stages/08-react/8.5-state-architecture' },
            { text: 'Module 8.6: Server State & Data Fetching', link: '/stages/08-react/8.6-data-fetching' },
            { text: 'Module 8.7: React Ecosystem Integrations', link: '/stages/08-react/8.7-ecosystem' },
            { text: 'Project 8: Production SaaS UI', link: '/stages/08-react/project-8' }
          ]
        }
      ],

      // Stage 9
      '/stages/09-production-frontend/': [
        {
          text: 'Stage 9: Production Frontend',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/stages/09-production-frontend/' },
            { text: 'Module 9.1: Web Accessibility (a11y)', link: '/stages/09-production-frontend/9.1-accessibility' },
            { text: 'Module 9.2: Form Engineering & UX', link: '/stages/09-production-frontend/9.2-forms' },
            { text: 'Module 9.3: Mobile Web & Pointer Events', link: '/stages/09-production-frontend/9.3-mobile-web' },
            { text: 'Module 9.4: Search Engine Optimization (SEO)', link: '/stages/09-production-frontend/9.4-seo' },
            { text: 'Module 9.5: Testing Strategy (Unit/E2E)', link: '/stages/09-production-frontend/9.5-testing' },
            { text: 'Project 9: Production E-commerce', link: '/stages/09-production-frontend/project-9' }
          ]
        }
      ],

      // Stage 10
      '/stages/10-nextjs/': [
        {
          text: 'Stage 10: Next.js & Full-stack',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/stages/10-nextjs/' },
            { text: 'Module 10.1: Modern Rendering (SSR/ISR)', link: '/stages/10-nextjs/10.1-rendering-models' },
            { text: 'Module 10.2: App Router Architecture', link: '/stages/10-nextjs/10.2-app-router' },
            { text: 'Module 10.3: React Server Components (RSC)', link: '/stages/10-nextjs/10.3-rsc' },
            { text: 'Module 10.4: Server Actions & Mutations', link: '/stages/10-nextjs/10.4-server-actions' },
            { text: 'Module 10.5: Next.js Multi-level Cache', link: '/stages/10-nextjs/10.5-caching' },
            { text: 'Module 10.6: BFF & Backend Integration', link: '/stages/10-nextjs/10.6-bff' },
            { text: 'Project 10: Full-stack SaaS Product', link: '/stages/10-nextjs/project-10' }
          ]
        }
      ],

      // Stage 11
      '/stages/11-performance-memory-security/': [
        {
          text: 'Stage 11: Performance & Security',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/stages/11-performance-memory-security/' },
            { text: 'Module 11.1: V8 Engine & JIT Compilation', link: '/stages/11-performance-memory-security/11.1-engine' },
            { text: 'Module 11.2: V8 Garbage Collector (GC)', link: '/stages/11-performance-memory-security/11.2-gc' },
            { text: 'Module 11.3: Diagnosing Memory Leaks', link: '/stages/11-performance-memory-security/11.3-memory-leaks' },
            { text: 'Module 11.4: CPU & Web Render Bottlenecks', link: '/stages/11-performance-memory-security/11.4-performance' },
            { text: 'Module 11.5: DevTools Performance Profiling', link: '/stages/11-performance-memory-security/11.5-profiling' },
            { text: 'Module 11.6: Web App Security (XSS/CSRF/CSP)', link: '/stages/11-performance-memory-security/11.6-security' },
            { text: 'Project 11: Performance & Incident Lab', link: '/stages/11-performance-memory-security/project-11' }
          ]
        }
      ],

      // Stage 12
      '/stages/12-architecture/': [
        {
          text: 'Stage 12: Frontend Architecture',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/stages/12-architecture/' },
            { text: 'Module 12.1: Architectural Coupling & Boundaries', link: '/stages/12-architecture/12.1-fundamentals' },
            { text: 'Module 12.2: codebase structure (Vertical Slice)', link: '/stages/12-architecture/12.2-application-architecture' },
            { text: 'Module 12.3: Scalable State Architectures', link: '/stages/12-architecture/12.3-state-architecture' },
            { text: 'Module 12.4: Monorepos & Shared UI Libraries', link: '/stages/12-architecture/12.4-monorepos' },
            { text: 'Module 12.5: Micro-frontends (Module Federation)', link: '/stages/12-architecture/12.5-micro-frontends' },
            { text: 'Module 12.6: Architecture Decisions (ADR/RFC)', link: '/stages/12-architecture/12.6-decisions' },
            { text: 'Project 12: Enterprise Dashboard', link: '/stages/12-architecture/project-12' }
          ]
        }
      ],

      // Stage 13
      '/stages/13-production-system-engineering/': [
        {
          text: 'Stage 13: Production Systems',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/stages/13-production-system-engineering/' },
            { text: 'Module 13.1: CI/CD Pipelines & Quality Gates', link: '/stages/13-production-system-engineering/13.1-cicd' },
            { text: 'Module 13.2: Safe Deployments & Feature Flags', link: '/stages/13-production-system-engineering/13.2-deployment' },
            { text: 'Module 13.3: Production Observability (OTel/Sentry)', link: '/stages/13-production-system-engineering/13.3-observability' },
            { text: 'Module 13.4: Distributed Frontends & BFF Resiliency', link: '/stages/13-production-system-engineering/13.4-distributed' },
            { text: 'Module 13.5: Incident Management & Containment', link: '/stages/13-production-system-engineering/13.5-incidents' },
            { text: 'Project 13: Incident Simulation Lab', link: '/stages/13-production-system-engineering/project-13' }
          ]
        }
      ],

      // Stage 14
      '/stages/14-senior-engineering/': [
        {
          text: 'Stage 14: Senior Engineering',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/stages/14-senior-engineering/' },
            { text: 'Module 14.1: Requirement Analysis & Ambiguity', link: '/stages/14-senior-engineering/14.1-requirements' },
            { text: 'Module 14.2: Making Technical Decisions', link: '/stages/14-senior-engineering/14.2-decisions' },
            { text: 'Module 14.3: High-impact Code Review Standards', link: '/stages/14-senior-engineering/14.3-code-review' },
            { text: 'Module 14.4: Safe Refactoring of Legacy Systems', link: '/stages/14-senior-engineering/14.4-refactoring' },
            { text: 'Module 14.5: Strangler Pattern & Incremental Migrations', link: '/stages/14-senior-engineering/14.5-legacy' },
            { text: 'Module 14.6: Managing and Paying Down Tech Debt', link: '/stages/14-senior-engineering/14.6-tech-debt' },
            { text: 'Project 14: Legacy Migration', link: '/stages/14-senior-engineering/project-14' }
          ]
        }
      ],

      // Stage 15
      '/stages/15-staff-engineering/': [
        {
          text: 'Stage 15: Staff Engineering',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/stages/15-staff-engineering/' },
            { text: 'Module 15.1: Systems Thinking & Org Architecture', link: '/stages/15-staff-engineering/15.1-systems-thinking' },
            { text: 'Module 15.2: Technical Strategy (Build vs Buy)', link: '/stages/15-staff-engineering/15.2-strategy' },
            { text: 'Module 15.3: Technical Leadership & Sponsorship', link: '/stages/15-staff-engineering/15.3-leadership' },
            { text: 'Module 15.4: Cross-team Architecture RFCs/ADRs', link: '/stages/15-staff-engineering/15.4-governance' },
            { text: 'Module 15.5: Crisis Incident Command & Communication', link: '/stages/15-staff-engineering/15.5-crisis' },
            { text: 'Module 15.6: Staff-level Technical Judgment Cases', link: '/stages/15-staff-engineering/15.6-judgment' },
            { text: 'Final Project: Staff Architecture Challenge', link: '/stages/15-staff-engineering/project-15' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tuanlee-tech/javascript-engineering-mastery' }
    ]
  }
})
