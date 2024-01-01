import{_ as s,o as n,c as a,Q as o}from"./chunks/framework.0c952bb0.js";const F=JSON.parse('{"title":"Storybook","description":"","frontmatter":{},"headers":[],"relativePath":"features/storybook.md","filePath":"features/storybook.md","lastUpdated":1697242947000}'),l={name:"features/storybook.md"},p=o(`<h1 id="storybook" tabindex="-1">Storybook <a class="header-anchor" href="#storybook" aria-label="Permalink to &quot;Storybook&quot;">​</a></h1><p><a href="https://storybook.js.org/" target="_blank" rel="noreferrer">Storybook</a> is a popular open-source tool for developing UI components in isolation.</p><h2 id="run-storybook" tabindex="-1">Run storybook <a class="header-anchor" href="#run-storybook" aria-label="Permalink to &quot;Run storybook&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-cTkTy" id="tab-BPXKdaX" checked="checked"><label for="tab-BPXKdaX">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">storybook:serve</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">web-ui</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">storybook:serve</span><span style="color:#24292E;"> </span><span style="color:#032F62;">web-ui</span></span></code></pre></div></div></div><p>This will run the components that are written in the <code>packages/web/ui</code> library</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>I&#39;m using a reusable storybook config, which is in the .config folder. All config settings (vite, babel, swc) can be viewed in <code>packages/config</code></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// .config/storybook/main.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">config</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">StorybookConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createStorybookConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  viteConfigPath: </span><span style="color:#9ECBFF;">&#39;packages/web/ui/.config/vite.ts&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">viteFinal</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">config</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">StorybookConfig</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">StorybookConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mergeConfig</span><span style="color:#E1E4E8;">(config, {</span></span>
<span class="line"><span style="color:#E1E4E8;">      define: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;p<wbr>rocess.env&#39;</span><span style="color:#E1E4E8;">: p<wbr>rocess.env</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      plugins: [</span><span style="color:#B392F0;">viteTsConfigPaths</span><span style="color:#E1E4E8;">()]</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> config</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// .config/storybook/main.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">config</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">StorybookConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createStorybookConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  viteConfigPath: </span><span style="color:#032F62;">&#39;packages/web/ui/.config/vite.ts&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">viteFinal</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">config</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">StorybookConfig</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">StorybookConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mergeConfig</span><span style="color:#24292E;">(config, {</span></span>
<span class="line"><span style="color:#24292E;">      define: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;p<wbr>rocess.env&#39;</span><span style="color:#24292E;">: p<wbr>rocess.env</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      plugins: [</span><span style="color:#6F42C1;">viteTsConfigPaths</span><span style="color:#24292E;">()]</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> config</span></span></code></pre></div></div><h2 id="unit-tests-with-storybook" tabindex="-1">Unit Tests with Storybook <a class="header-anchor" href="#unit-tests-with-storybook" aria-label="Permalink to &quot;Unit Tests with Storybook&quot;">​</a></h2><p>You can write storybook unit tests. On the project I use <code>@storybook/testing-library</code> and <code>storybook-test-runner</code>. It allows you to run <code>unit</code> tests in an isolated storybook environment.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-EwjM3" id="tab-yN7she4" checked="checked"><label for="tab-yN7she4">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">storybook:test:development</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">web-ui</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">storybook:test:development</span><span style="color:#24292E;"> </span><span style="color:#032F62;">web-ui</span></span></code></pre></div></div></div><h2 id="using-storybook-in-production" tabindex="-1">Using storybook in production <a class="header-anchor" href="#using-storybook-in-production" aria-label="Permalink to &quot;Using storybook in production&quot;">​</a></h2><p>I&#39;m using <code>Github Actions</code> to automatically deploy and unit test the <code>storybook</code>.</p><p>This is to build storybook assets, push them to github (<code>storybook-build</code> branch) and test them remotely.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Installing dependencies</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">yarn install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Building storybook</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">yarn nx run web-ui:storybook:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Pushing to build-storybook branch</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">JamesIves/github-pages-deploy-action@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">folder</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">dist/storybook/ui</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branch</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">storybook-build</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">GITHUB_TOKEN</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.GITHUB_TOKEN }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Testing storybook in production</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">yarn nx run web-ui:storybook:test:production</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Installing dependencies</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">yarn install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Building storybook</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">yarn nx run web-ui:storybook:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Pushing to build-storybook branch</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">JamesIves/github-pages-deploy-action@v4</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">folder</span><span style="color:#24292E;">: </span><span style="color:#032F62;">dist/storybook/ui</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branch</span><span style="color:#24292E;">: </span><span style="color:#032F62;">storybook-build</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">GITHUB_TOKEN</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.GITHUB_TOKEN }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Testing storybook in production</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">yarn nx run web-ui:storybook:test:production</span></span></code></pre></div><p>Storybook test runner can test your storybook remotely, already on a deployed version.</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;storybook:test:production&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;executor&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;nx:run-commands&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;options&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;command&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;test-storybook -c packages/web/ui/.config/storybook --url=YOUR_URL&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;storybook:test:production&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;executor&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;nx:run-commands&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;options&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;command&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;test-storybook -c packages/web/ui/.config/storybook --url=YOUR_URL&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>You can see all the settings in <code>project.json</code>, it is in every application/service.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If you get error related with <a href="https://playwright.dev/" target="_blank" rel="noreferrer">playwright</a>, just initialize it.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-2JBZu" id="tab-CUtLWtu" checked="checked"><label for="tab-CUtLWtu">pnpm</label><input type="radio" name="group-2JBZu" id="tab-4Ni2raC"><label for="tab-4Ni2raC">npm</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pnpx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">playwright</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pnpx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">playwright</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">playwright</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">playwright</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div></div></div></div><p>You can see all the settings in <code>project.json</code>, it is in every application/service.</p><p>:::</p><h2 id="adding-a-new-ui-component" tabindex="-1">Adding a new UI component <a class="header-anchor" href="#adding-a-new-ui-component" aria-label="Permalink to &quot;Adding a new UI component&quot;">​</a></h2><p>To create a new component, you can use the <code>hygen</code> generator.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-fm_sx" id="tab-qAq6W1d" checked="checked"><label for="tab-qAq6W1d">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">generator:new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--name=ui</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">generator:new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--name=ui</span></span></code></pre></div></div></div><p>This will create a react component with styling (<code>styled-components</code>), and also add a reset for your <code>stories</code>.</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Story</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Meta</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> Select&gt; </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  component: Select,</span></span>
<span class="line"><span style="color:#E1E4E8;">  title: </span><span style="color:#9ECBFF;">&#39;ui/select&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">variant</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createStorybookVariant</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">SelectProps</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">unknown</span><span style="color:#E1E4E8;">&gt;&gt;({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onChange</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  value: </span><span style="color:#9ECBFF;">&#39;val-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  options: selectDefaultOptions,</span></span>
<span class="line"><span style="color:#E1E4E8;">  defaultValue: </span><span style="color:#9ECBFF;">&#39;val-1&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">variant</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Default.</span><span style="color:#B392F0;">play</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">canvasElement</span><span style="color:#E1E4E8;"> }</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TestStory</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> Select&gt;) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">canvas</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">within</span><span style="color:#E1E4E8;">(canvasElement)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">select</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> canvas.</span><span style="color:#B392F0;">findByTestId</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;select&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(select).</span><span style="color:#B392F0;">toBeDefined</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> userEvent.</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">(select)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Story</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Meta</span><span style="color:#24292E;">&lt;</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> Select&gt; </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  component: Select,</span></span>
<span class="line"><span style="color:#24292E;">  title: </span><span style="color:#032F62;">&#39;ui/select&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">variant</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createStorybookVariant</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">SelectProps</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">unknown</span><span style="color:#24292E;">&gt;&gt;({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onChange</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  value: </span><span style="color:#032F62;">&#39;val-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  options: selectDefaultOptions,</span></span>
<span class="line"><span style="color:#24292E;">  defaultValue: </span><span style="color:#032F62;">&#39;val-1&#39;</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">variant</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Default.</span><span style="color:#6F42C1;">play</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> ({ </span><span style="color:#E36209;">canvasElement</span><span style="color:#24292E;"> }</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TestStory</span><span style="color:#24292E;">&lt;</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> Select&gt;) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">canvas</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">within</span><span style="color:#24292E;">(canvasElement)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">select</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> canvas.</span><span style="color:#6F42C1;">findByTestId</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;select&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(select).</span><span style="color:#6F42C1;">toBeDefined</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> userEvent.</span><span style="color:#6F42C1;">click</span><span style="color:#24292E;">(select)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>createStorybookVariant is imported from <code>@code-gear/web/shared</code> library.</p></div><p>You will have to add the <code>data-testid</code> attribute to your react component.</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Select</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">,&gt;(</span><span style="color:#FFAB70;">props</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SelectProps</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt;) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#79B8FF;">MySelect</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// ... props</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">data-testid</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;select&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Select</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> &lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">,&gt;(</span><span style="color:#E36209;">props</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SelectProps</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt;) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#005CC5;">MySelect</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// ... props</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">data-testid</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;select&quot;</span></span>
<span class="line"><span style="color:#24292E;">    /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  )</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>You can read about generators <a href="./code-generation">here</a></p><h2 id="what-about-decorators" tabindex="-1">What about decorators? <a class="header-anchor" href="#what-about-decorators" aria-label="Permalink to &quot;What about decorators?&quot;">​</a></h2><p>I mean <em>storybook</em> decorators. They are in the <code>web/shared</code> library, you can find and easily add yours if needed.</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// ~/storybook/decorators/my-decorator.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Decorator }     </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@storybook/react&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ThemeProvider } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/providers/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CustomThemeDecorator</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Decorator</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">,&gt;(</span><span style="color:#FFAB70;">story</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#79B8FF;">ThemeProvider</span><span style="color:#E1E4E8;">&gt;{</span><span style="color:#B392F0;">story</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt;()}&lt;/</span><span style="color:#79B8FF;">ThemeProvider</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// ~/storybook/decorators/my-decorator.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Decorator }     </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@storybook/react&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ThemeProvider } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/providers/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CustomThemeDecorator</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Decorator</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> &lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">,&gt;(</span><span style="color:#E36209;">story</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#005CC5;">ThemeProvider</span><span style="color:#24292E;">&gt;{</span><span style="color:#6F42C1;">story</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt;()}&lt;/</span><span style="color:#005CC5;">ThemeProvider</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><hr><p>Also you can watch the current version of the storybook here:</p><p><a href="https://gearonix.github.io/code-gear" target="_blank" rel="noreferrer">https://gearonix.github.io/code-gear</a></p>`,34),e=[p];function t(c,r,y,E,i,d){return n(),a("div",null,e)}const h=s(l,[["render",t]]);export{F as __pageData,h as default};