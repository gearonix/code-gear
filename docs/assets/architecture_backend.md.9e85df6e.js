import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.0c952bb0.js";const F=JSON.parse('{"title":"Backend Architecture","description":"","frontmatter":{},"headers":[],"relativePath":"architecture/backend.md","filePath":"architecture/backend.md","lastUpdated":1697320315000}'),p={name:"architecture/backend.md"},o=l(`<h1 id="backend-architecture" tabindex="-1">Backend Architecture <a class="header-anchor" href="#backend-architecture" aria-label="Permalink to &quot;Backend Architecture&quot;">​</a></h1><p>At first, I stuck to the usual modular architecture. After that, I decided to switch to microservices.</p><p><em>Microservices</em> are very well suited to the monorepository structure, and I&#39;ve also added the CQRS pattern that the <a href="https://docs.nestjs.com/recipes/cqrs" target="_blank" rel="noreferrer">@nestjs/cqrs</a> module provides.</p><h2 id="kafka-as-a-message-broker" tabindex="-1">Kafka as a Message Broker <a class="header-anchor" href="#kafka-as-a-message-broker" aria-label="Permalink to &quot;Kafka as a Message Broker&quot;">​</a></h2><p><a href="https://kafka.apache.org/documentation/" target="_blank" rel="noreferrer">Apache Kafka</a> is often used to solve the problems of messaging and transferring data between different <code>microservices</code>. Unlike <a href="https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html" target="_blank" rel="noreferrer">RabbitMQ</a>, it focuses on high throughput and scalability.</p><p>I used Kafka + Zookeeper to implement communication between microservices.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-VxF37" id="tab-a34HUX1" checked="checked"><label for="tab-a34HUX1">docker-compose.services.yml</label></div><div class="blocks"><div class="language-yaml vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">zookeeper</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">confluentinc/cp-zookeeper:latest</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">container_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">zookeeper</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">networks</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">cgnet</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">env_file</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">.env</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">.docker/.override.env</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">22181:2181</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">kafka</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">confluentinc/cp-kafka:latest</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">container_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">kafka</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">hostname</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">kafka</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">networks</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">cgnet</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">depends_on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">zookeeper</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">29092:29092</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">env_file</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">.env</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">.docker/.override.env</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">zookeeper</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">confluentinc/cp-zookeeper:latest</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">zookeeper</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">networks</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">cgnet</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">env_file</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">.env</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">.docker/.override.env</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">22181:2181</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">kafka</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">confluentinc/cp-kafka:latest</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">kafka</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">hostname</span><span style="color:#24292E;">: </span><span style="color:#032F62;">kafka</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">networks</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">cgnet</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">depends_on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">zookeeper</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">29092:29092</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">env_file</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">.env</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">.docker/.override.env</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p><code>.override.env</code> is a file to overwrite the local configuration for <code>docker</code>. It&#39;s important to add it</p></div></div></div><h2 id="usage-with-nestjs" tabindex="-1">Usage with NestJS <a class="header-anchor" href="#usage-with-nestjs" aria-label="Permalink to &quot;Usage with NestJS&quot;">​</a></h2><p>You can use the module described below to <em>connect</em> the microservice.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#B392F0;">Module</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  imports: [EnvModule],</span></span>
<span class="line"><span style="color:#E1E4E8;">  providers: [KafkaService],</span></span>
<span class="line"><span style="color:#E1E4E8;">  exports: [KafkaService]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> *  Creates a reusable Kafka configuration</span></span>
<span class="line"><span style="color:#6A737D;"> *  </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">service</span><span style="color:#6A737D;"> {Microservice} - name of your microservice</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">KafkaModule</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">forRoot</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">service</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Microservice</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DynamicModule</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">providers</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Provider</span><span style="color:#E1E4E8;">[] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        provide: service,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">useFactory</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">kafkaService</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">KafkaService</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> ClientProxyFactory.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">            kafkaService.</span><span style="color:#B392F0;">getKafkaOptions</span><span style="color:#E1E4E8;">(service)</span></span>
<span class="line"><span style="color:#E1E4E8;">          )</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        inject: [KafkaService]</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      module: KafkaModule,</span></span>
<span class="line"><span style="color:#E1E4E8;">      providers,</span></span>
<span class="line"><span style="color:#E1E4E8;">      exports: providers</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#6F42C1;">Module</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  imports: [EnvModule],</span></span>
<span class="line"><span style="color:#24292E;">  providers: [KafkaService],</span></span>
<span class="line"><span style="color:#24292E;">  exports: [KafkaService]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> *  Creates a reusable Kafka configuration</span></span>
<span class="line"><span style="color:#6A737D;"> *  </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">service</span><span style="color:#6A737D;"> {Microservice} - name of your microservice</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">KafkaModule</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">forRoot</span><span style="color:#24292E;">(</span><span style="color:#E36209;">service</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Microservice</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DynamicModule</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">providers</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Provider</span><span style="color:#24292E;">[] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        provide: service,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">useFactory</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">kafkaService</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">KafkaService</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> ClientProxyFactory.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">            kafkaService.</span><span style="color:#6F42C1;">getKafkaOptions</span><span style="color:#24292E;">(service)</span></span>
<span class="line"><span style="color:#24292E;">          )</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        inject: [KafkaService]</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      module: KafkaModule,</span></span>
<span class="line"><span style="color:#24292E;">      providers,</span></span>
<span class="line"><span style="color:#24292E;">      exports: providers</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Did you know?</p><p>You can also watch the different events at kafka via <a href="https://github.com/provectus/kafka-ui" target="_blank" rel="noreferrer">kafka-ui</a>. To do this, you can open <a href="http://localhost:8080" target="_blank" rel="noreferrer">http://localhost:8080</a>.</p></div><p>Now, it can be connected in a single line.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#B392F0;">Module</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  imports: [KafkaModule.</span><span style="color:#B392F0;">forRoot</span><span style="color:#E1E4E8;">(Microservice.</span><span style="color:#79B8FF;">CODE_EXECUTOR</span><span style="color:#E1E4E8;">)]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> *  You can now use it in the module.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#B392F0;">Controller</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ExampleController</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#B392F0;">Inject</span><span style="color:#E1E4E8;">(Microservice.</span><span style="color:#79B8FF;">CODE_EXECUTOR</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">executorClient</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ClientKafka</span></span>
<span class="line"><span style="color:#E1E4E8;">  ) {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onModuleInit</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.executorClient.</span><span style="color:#B392F0;">subscribeToResponseOf</span><span style="color:#E1E4E8;">(CodeExecutorTopic.</span><span style="color:#79B8FF;">MY_TOPIC</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.executorClient.</span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  @</span><span style="color:#B392F0;">Get</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">myRoute</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    @</span><span style="color:#B392F0;">Body</span><span style="color:#E1E4E8;">() </span><span style="color:#FFAB70;">args</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ExampleDTO</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Promise</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">unknown</span><span style="color:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.executorClient.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(CodeExecutorTopic.</span><span style="color:#79B8FF;">MY_TOPIC</span><span style="color:#E1E4E8;">, args)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#6F42C1;">Module</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  imports: [KafkaModule.</span><span style="color:#6F42C1;">forRoot</span><span style="color:#24292E;">(Microservice.</span><span style="color:#005CC5;">CODE_EXECUTOR</span><span style="color:#24292E;">)]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> *  You can now use it in the module.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#6F42C1;">Controller</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ExampleController</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#6F42C1;">Inject</span><span style="color:#24292E;">(Microservice.</span><span style="color:#005CC5;">CODE_EXECUTOR</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#E36209;">executorClient</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ClientKafka</span></span>
<span class="line"><span style="color:#24292E;">  ) {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onModuleInit</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.executorClient.</span><span style="color:#6F42C1;">subscribeToResponseOf</span><span style="color:#24292E;">(CodeExecutorTopic.</span><span style="color:#005CC5;">MY_TOPIC</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.executorClient.</span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  @</span><span style="color:#6F42C1;">Get</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">myRoute</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    @</span><span style="color:#6F42C1;">Body</span><span style="color:#24292E;">() </span><span style="color:#E36209;">args</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ExampleDTO</span></span>
<span class="line"><span style="color:#24292E;">  )</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Promise</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">unknown</span><span style="color:#24292E;">&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.executorClient.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">(CodeExecutorTopic.</span><span style="color:#005CC5;">MY_TOPIC</span><span style="color:#24292E;">, args)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="contracts-library" tabindex="-1">Contracts Library <a class="header-anchor" href="#contracts-library" aria-label="Permalink to &quot;Contracts Library&quot;">​</a></h2><p><code>@code-gear/api/contracts</code> - This is a library for exchanging kafka topics, interfaces (<code>Request</code>, <code>Response</code>) and <a href="https://en.wikipedia.org/wiki/Data_transfer_object" target="_blank" rel="noreferrer">DTO</a>.</p><h2 id="cqrs-pattern" tabindex="-1">CQRS Pattern <a class="header-anchor" href="#cqrs-pattern" aria-label="Permalink to &quot;CQRS Pattern&quot;">​</a></h2><p>Using <em>CQRS</em> in a project is no different from the cqrs documentation of the NestJS module, which can be found <a href="https://docs.nestjs.com/recipes/cqrs" target="_blank" rel="noreferrer">here</a>.</p><p>You can find examples of usage in the <code>code-executor</code> microservice.</p><h2 id="gateway-pattern" tabindex="-1">Gateway Pattern <a class="header-anchor" href="#gateway-pattern" aria-label="Permalink to &quot;Gateway Pattern&quot;">​</a></h2><p>I&#39;m using the <code>gateway</code> pattern for microservices. In general, it is quite popular, you can read more <a href="https://microservices.io/patterns/apigateway.html" target="_blank" rel="noreferrer">here</a>.</p>`,20),e=[o];function c(t,r,E,y,i,d){return a(),n("div",null,e)}const k=s(p,[["render",c]]);export{F as __pageData,k as default};
