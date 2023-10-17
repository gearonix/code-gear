import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.0c952bb0.js";const g=JSON.parse('{"title":"Config Encapsulation","description":"","frontmatter":{},"headers":[],"relativePath":"features/config-incapsulation.md","filePath":"features/config-incapsulation.md","lastUpdated":1697144842000}'),o={name:"features/config-incapsulation.md"},l=p(`<h1 id="config-encapsulation" tabindex="-1">Config Encapsulation <a class="header-anchor" href="#config-encapsulation" aria-label="Permalink to &quot;Config Encapsulation&quot;">​</a></h1><p>The project uses <em>non-standard</em> configuration. I was especially worried about this because I was interested in how the bundlers (like <code>webpack</code>) work and I wanted to reduce the amount of boilerplate configuration in each library (the millions of configurations that Nx generates) to a minimum.</p><p>So I created a separate library in which all the configs are located:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">~/packages/config</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">├─ babel</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ consts</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ jest</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ storybook</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ tsconfig</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ vite</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ webpack</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">~/packages/config</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">├─ babel</span></span>
<span class="line"><span style="color:#24292e;">├─ consts</span></span>
<span class="line"><span style="color:#24292e;">├─ jest</span></span>
<span class="line"><span style="color:#24292e;">├─ storybook</span></span>
<span class="line"><span style="color:#24292e;">├─ tsconfig</span></span>
<span class="line"><span style="color:#24292e;">├─ vite</span></span>
<span class="line"><span style="color:#24292e;">├─ webpack</span></span></code></pre></div><h2 id="configuration-example-webpack" tabindex="-1">Configuration Example (Webpack) <a class="header-anchor" href="#configuration-example-webpack" aria-label="Permalink to &quot;Configuration Example (Webpack)&quot;">​</a></h2><p>This is an example webpack configuration that has been used in several microservices (I used <a href="https://nx.dev/nx-api/nest" target="_blank" rel="noreferrer">@nx/nest</a> generators and executors)</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// build-webpack-config.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Combines your webpack config with nx modules and</span></span>
<span class="line"><span style="color:#6A737D;"> * custom tsconfig paths</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">rootDir</span><span style="color:#6A737D;"> {string} - root directory of current library</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">layer</span><span style="color:#6A737D;"> {BuildWebpackConfigPayload.layer} - nesting level of your library to include the</span></span>
<span class="line"><span style="color:#6A737D;"> * correct tsconfig paths depending on this</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">buildWebpackConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">  rootDir,</span></span>
<span class="line"><span style="color:#E1E4E8;">  layer</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BuildWebpackConfigPayload</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">composePlugins</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">withNx</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      skipTypeChecking: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    (</span><span style="color:#FFAB70;">config</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Configuration</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WebpackConfigOptions</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        layer,</span></span>
<span class="line"><span style="color:#E1E4E8;">        config,</span></span>
<span class="line"><span style="color:#E1E4E8;">        rootDir</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      config.resolve</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">.alias </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">...</span><span style="color:#B392F0;">resolveTsconfigPaths</span><span style="color:#E1E4E8;">(options)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> config</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// build-webpack-config.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Combines your webpack config with nx modules and</span></span>
<span class="line"><span style="color:#6A737D;"> * custom tsconfig paths</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">rootDir</span><span style="color:#6A737D;"> {string} - root directory of current library</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">layer</span><span style="color:#6A737D;"> {BuildWebpackConfigPayload.layer} - nesting level of your library to include the</span></span>
<span class="line"><span style="color:#6A737D;"> * correct tsconfig paths depending on this</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">buildWebpackConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ({</span></span>
<span class="line"><span style="color:#24292E;">  rootDir,</span></span>
<span class="line"><span style="color:#24292E;">  layer</span></span>
<span class="line"><span style="color:#24292E;">}</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BuildWebpackConfigPayload</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">composePlugins</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">withNx</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      skipTypeChecking: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">    (</span><span style="color:#E36209;">config</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Configuration</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WebpackConfigOptions</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        layer,</span></span>
<span class="line"><span style="color:#24292E;">        config,</span></span>
<span class="line"><span style="color:#24292E;">        rootDir</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      config.resolve</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">.alias </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">...</span><span style="color:#6F42C1;">resolveTsconfigPaths</span><span style="color:#24292E;">(options)</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> config</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  )</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>You can reuse it in any microservice.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// .config/webpack.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { buildWebpackConfig }    </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;cg-config/src/webpack&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { resolve }               </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;path&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Custom webpack configuration</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">rootDir</span><span style="color:#6A737D;"> {string}</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">layer</span><span style="color:#6A737D;"> {BuildWebpackConfigPayload.layer}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">buildWebpackConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  rootDir: </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;..&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  layer: </span><span style="color:#9ECBFF;">&#39;third&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// .config/webpack.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { buildWebpackConfig }    </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;cg-config/src/webpack&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { resolve }               </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;path&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Custom webpack configuration</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">rootDir</span><span style="color:#6A737D;"> {string}</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">layer</span><span style="color:#6A737D;"> {BuildWebpackConfigPayload.layer}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">buildWebpackConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  rootDir: </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;..&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">  layer: </span><span style="color:#032F62;">&#39;third&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="problem-with-tsconfig-paths" tabindex="-1">Problem with tsconfig paths <a class="header-anchor" href="#problem-with-tsconfig-paths" aria-label="Permalink to &quot;Problem with tsconfig paths&quot;">​</a></h2><p>If you&#39;ve ever worked with repositories, you&#39;ve probably encountered this problem.</p><p>We have root <code>tsconfig.base.json</code> file, where we describe the paths to our libraries.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-5v0IE" id="tab-h53V9Qr" checked="checked"><label for="tab-h53V9Qr">tsconfig.base.json</label></div><div class="blocks"><div class="language-json vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;extends&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;cg-config/src/tsconfig/base.json&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;compilerOptions&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;rootDir&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;.&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;baseUrl&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;.&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;paths&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;@code-gear/api/common&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;packages/api/common/src/index.ts&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;extends&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;cg-config/src/tsconfig/base.json&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;compilerOptions&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;rootDir&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;.&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;baseUrl&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;.&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;paths&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;@code-gear/api/common&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;packages/api/common/src/index.ts&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div><p>And we want to bind custom tsconfig paths in our <code>React</code> library.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-lk05F" id="tab-rjiITDn" checked="checked"><label for="tab-rjiITDn">tsconfig.json (editor library)</label></div><div class="blocks"><div class="language-json vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;extends&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./tsconfig.json&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;compilerOptions&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;baseUrl&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;.&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;paths&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;@/*&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;./src/*&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;extends&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;./tsconfig.json&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;compilerOptions&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;baseUrl&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;.&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;paths&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;@/*&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;./src/*&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div><p>By overwriting the paths, we will not be able to access other libraries, since other tsconfigs can only <em>overwrite</em> the configuration, and not extend it.</p><h2 id="solution" tabindex="-1">Solution <a class="header-anchor" href="#solution" aria-label="Permalink to &quot;Solution&quot;">​</a></h2><p>I create two tsconfigs, and split the applications into paths (<code>second</code>/<code>third</code>). This way they can use the same configuration without creating duplication of configs.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-L_mkC" id="tab-NceHThS" checked="checked"><label for="tab-NceHThS">second-layer.json (config library)</label></div><div class="blocks"><div class="language-json vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;extends&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./../base.json&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;compilerOptions&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;paths&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;@/*&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;./src/*&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;@code-gear/api/common&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;../../packages/api/common/src/index.ts&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;@code-gear/api/contracts&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;../../packages/api/contracts/src/index.ts&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;@code-gear/api/services&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;../../packages/api/services/src/index.ts&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;@code-gear/web/editor&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;../../packages/web/editor/src/app/index.ts&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;@code-gear/web/shared&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;../../packages/web/shared/src/index.ts&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;@code-gear/web/ui&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;../../packages/web/ui/src/index.ts&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;@code-gear/config&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;../../packages/config/src/index.ts&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;extends&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;./../base.json&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;compilerOptions&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;paths&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;@/*&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;./src/*&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;@code-gear/api/common&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;../../packages/api/common/src/index.ts&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;@code-gear/api/contracts&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;../../packages/api/contracts/src/index.ts&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;@code-gear/api/services&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;../../packages/api/services/src/index.ts&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;@code-gear/web/editor&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;../../packages/web/editor/src/app/index.ts&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;@code-gear/web/shared&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;../../packages/web/shared/src/index.ts&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;@code-gear/web/ui&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;../../packages/web/ui/src/index.ts&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;@code-gear/config&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;../../packages/config/src/index.ts&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div><p>And we can use here.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-AFG_s" id="tab-nrdlQUa" checked="checked"><label for="tab-nrdlQUa">apps/client/tsconfig.json</label></div><div class="blocks"><div class="language-json vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;extends&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;cg-config/src/tsconfig/paths/second-layer.json&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;extends&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;cg-config/src/tsconfig/paths/second-layer.json&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div>`,22),e=[l];function c(t,r,i,E,y,u){return n(),a("div",null,e)}const h=s(o,[["render",c]]);export{g as __pageData,h as default};
