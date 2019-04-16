(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{165:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=i(0),r=s(a),o=s(i(1));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.handleTriggerClick=i.handleTriggerClick.bind(i),i.handleTransitionEnd=i.handleTransitionEnd.bind(i),i.continueOpenCollapsible=i.continueOpenCollapsible.bind(i),i.setInnerRef=i.setInnerRef.bind(i),e.open?i.state={isClosed:!1,shouldSwitchAutoOnNextCycle:!1,height:"auto",transition:"none",hasBeenOpened:!0,overflow:e.overflowWhenOpen,inTransition:!1}:i.state={isClosed:!0,shouldSwitchAutoOnNextCycle:!1,height:0,transition:"height "+e.transitionTime+"ms "+e.easing,hasBeenOpened:!1,overflow:"hidden",inTransition:!1},i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),n(t,[{key:"componentDidUpdate",value:function(e,t){var i=this;this.state.shouldOpenOnNextCycle&&this.continueOpenCollapsible(),"auto"===t.height&&!0===this.state.shouldSwitchAutoOnNextCycle&&window.setTimeout(function(){i.setState({height:0,overflow:"hidden",isClosed:!0,shouldSwitchAutoOnNextCycle:!1})},50),e.open!==this.props.open&&(!0===this.props.open?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"closeCollapsible",value:function(){this.setState({shouldSwitchAutoOnNextCycle:!0,height:this.innerRef.offsetHeight,transition:"height "+(this.props.transitionCloseTime?this.props.transitionCloseTime:this.props.transitionTime)+"ms "+this.props.easing,inTransition:!0})}},{key:"openCollapsible",value:function(){this.setState({inTransition:!0,shouldOpenOnNextCycle:!0})}},{key:"continueOpenCollapsible",value:function(){this.setState({height:this.innerRef.offsetHeight,transition:"height "+this.props.transitionTime+"ms "+this.props.easing,isClosed:!1,hasBeenOpened:!0,inTransition:!0,shouldOpenOnNextCycle:!1})}},{key:"handleTriggerClick",value:function(e){e.preventDefault(),this.props.triggerDisabled||(this.props.handleTriggerClick?this.props.handleTriggerClick(this.props.accordionPosition):!0===this.state.isClosed?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"renderNonClickableTriggerElement",value:function(){return this.props.triggerSibling&&"string"==typeof this.props.triggerSibling?r.default.createElement("span",{className:this.props.classParentString+"__trigger-sibling"},this.props.triggerSibling):this.props.triggerSibling?r.default.createElement(this.props.triggerSibling,null):null}},{key:"handleTransitionEnd",value:function(){this.state.isClosed?(this.setState({inTransition:!1}),this.props.onClose()):(this.setState({height:"auto",overflow:this.props.overflowWhenOpen,inTransition:!1}),this.props.onOpen())}},{key:"setInnerRef",value:function(e){this.innerRef=e}},{key:"render",value:function(){var e=this,t={height:this.state.height,WebkitTransition:this.state.transition,msTransition:this.state.transition,transition:this.state.transition,overflow:this.state.overflow},i=this.state.isClosed?"is-closed":"is-open",n=this.props.triggerDisabled?"is-disabled":"",a=!1===this.state.isClosed&&void 0!==this.props.triggerWhenOpen?this.props.triggerWhenOpen:this.props.trigger,o=this.props.triggerTagName,s=this.props.lazyRender&&!this.state.hasBeenOpened&&this.state.isClosed&&!this.state.inTransition?null:this.props.children,l=this.props.classParentString+"__trigger "+i+" "+n+" "+(this.state.isClosed?this.props.triggerClassName:this.props.triggerOpenedClassName),d=this.props.classParentString+" "+(this.state.isClosed?this.props.className:this.props.openedClassName),c=this.props.classParentString+"__contentOuter "+this.props.contentOuterClassName,g=this.props.classParentString+"__contentInner "+this.props.contentInnerClassName;return r.default.createElement("div",{className:d.trim()},r.default.createElement(o,{className:l.trim(),onClick:this.handleTriggerClick,style:this.props.triggerStyle&&this.props.triggerStyle,onKeyPress:function(t){var i=t.key;" "!==i&&"Enter"!==i||e.handleTriggerClick(t)},tabIndex:this.props.tabIndex&&this.props.tabIndex},a),this.renderNonClickableTriggerElement(),r.default.createElement("div",{className:c.trim(),style:t,onTransitionEnd:this.handleTransitionEnd},r.default.createElement("div",{className:g.trim(),ref:this.setInnerRef},s)))}}]),t}();l.propTypes={transitionTime:o.default.number,transitionCloseTime:o.default.number,triggerTagName:o.default.string,easing:o.default.string,open:o.default.bool,classParentString:o.default.string,openedClassName:o.default.string,triggerStyle:o.default.object,triggerClassName:o.default.string,triggerOpenedClassName:o.default.string,contentOuterClassName:o.default.string,contentInnerClassName:o.default.string,accordionPosition:o.default.oneOfType([o.default.string,o.default.number]),handleTriggerClick:o.default.func,onOpen:o.default.func,onClose:o.default.func,onOpening:o.default.func,onClosing:o.default.func,trigger:o.default.oneOfType([o.default.string,o.default.element]),triggerWhenOpen:o.default.oneOfType([o.default.string,o.default.element]),triggerDisabled:o.default.bool,lazyRender:o.default.bool,overflowWhenOpen:o.default.oneOf(["hidden","visible","auto","scroll","inherit","initial","unset"]),triggerSibling:o.default.oneOfType([o.default.element,o.default.func]),tabIndex:o.default.number},l.defaultProps={transitionTime:400,transitionCloseTime:null,triggerTagName:"span",easing:"linear",open:!1,classParentString:"Collapsible",triggerDisabled:!1,lazyRender:!1,overflowWhenOpen:"hidden",openedClassName:"",triggerStyle:null,triggerClassName:"",triggerOpenedClassName:"",contentOuterClassName:"",contentInnerClassName:"",className:"",triggerSibling:null,onOpen:function(){},onClose:function(){},onOpening:function(){},onClosing:function(){},tabIndex:null},t.default=l},166:function(e,t){e.exports={chapters:[{title:"The Distribution: Create Powerful APIs with Ease",path:"distribution",items:[{id:"index",title:"Getting Started with API Platform: Hypermedia and GraphQL API, Admin and Progressive Web App",anchors:[{id:"installing-the-framework",title:"Installing the Framework",anchors:[{id:"using-the-official-distribution-recommended",title:"Using the Official Distribution (Recommended)"},{id:"using-symfony-flex-and-composer-advanced-users",title:"Using Symfony Flex and Composer (advanced users)"}]},{id:"its-ready",title:"It's Ready!"},{id:"bringing-your-own-model",title:"Bringing your Own Model"},{id:"validating-data",title:"Validating Data"},{id:"adding-graphql-support",title:"Adding GraphQL Support"},{id:"the-admin",title:"The Admin"},{id:"a-reactredux-progressive-web-app",title:"A React/Redux Progressive Web App"},{id:"other-features",title:"Other Features"}]},{id:"testing",title:"Testing and Specifying the API",anchors:[{id:"creating-data-fixtures",title:"Creating Data Fixtures"},{id:"writing-functional-tests",title:"Writing Functional Tests",anchors:[{id:"additional-and-alternative-testing-tools",title:"Additional and Alternative Testing Tools"}]},{id:"writing-unit-tests",title:"Writing Unit Tests"}]},{id:"debugging",title:"Debugging",anchors:[{id:"add-a-development-stage-to-the-dockerfile",title:"Add a Development Stage to the Dockerfile"},{id:"configure-xdebug-with-docker-compose-override",title:"Configure Xdebug with Docker Compose Override"},{id:"troubleshooting",title:"Troubleshooting"}]}]},{title:"The API Component",path:"core",items:[{id:"index",title:"The API Platform Core Library",anchors:[{id:"features",title:"Features"},{id:"other-resources",title:"Other resources"}]},{id:"getting-started",title:"Getting started",anchors:[{id:"installing-api-platform-core",title:"Installing API Platform Core"},{id:"before-reading-this-documentation",title:"Before Reading this Documentation"},{id:"mapping-the-entities",title:"Mapping the Entities"}]},{id:"design",title:"General Design Considerations"},{id:"operations",title:"Operations",anchors:[{id:"enabling-and-disabling-operations",title:"Enabling and Disabling Operations"},{id:"configuring-operations",title:"Configuring Operations",anchors:[{id:"prefixing-all-routes-of-all-operations",title:"Prefixing All Routes of All Operations"}]},{id:"subresources",title:"Subresources",anchors:[{id:"control-the-path-of-subresources",title:"Control the Path of Subresources"},{id:"access-control-of-subresources",title:"Access Control of Subresources"},{id:"control-the-depth-of-subresources",title:"Control the Depth of Subresources"}]},{id:"creating-custom-operations-and-controllers",title:"Creating Custom Operations and Controllers",anchors:[{id:"recommended-method",title:"Recommended Method",anchors:[{id:"serialization-groups",title:"Serialization Groups"},{id:"entity-retrieval",title:"Entity Retrieval"}]},{id:"alternative-method",title:"Alternative Method"}]}]},{id:"graphql",title:"GraphQL Support",anchors:[{id:"overall-view",title:"Overall View"},{id:"enabling-graphql",title:"Enabling GraphQL"},{id:"graphiql",title:"GraphiQL"},{id:"queries",title:"Queries",anchors:[{id:"global-object-identifier",title:"Global Object Identifier"},{id:"pagination",title:"Pagination"}]},{id:"mutations",title:"Mutations",anchors:[{id:"client-mutation-id",title:"Client Mutation Id"}]},{id:"filters",title:"Filters",anchors:[{id:"filtering-on-nested-properties",title:"Filtering on Nested Properties"}]},{id:"security-access_control",title:"Security (access_control)"},{id:"serialization-groups-1",title:"Serialization Groups"}]},{id:"filters",title:"Filters",anchors:[{id:"doctrine-orm-and-mongodb-odm-filters",title:"Doctrine ORM and MongoDB ODM Filters",anchors:[{id:"basic-knowledge",title:"Basic Knowledge"},{id:"search-filter",title:"Search Filter"},{id:"date-filter",title:"Date Filter",anchors:[{id:"managing-null-values",title:"Managing null Values"}]},{id:"boolean-filter",title:"Boolean Filter"},{id:"numeric-filter",title:"Numeric Filter"},{id:"range-filter",title:"Range Filter"},{id:"exists-filter",title:"Exists Filter"},{id:"order-filter-sorting",title:"Order Filter (Sorting)",anchors:[{id:"comparing-with-null-values",title:"Comparing with Null Values"},{id:"using-a-custom-order-query-parameter-name",title:"Using a Custom Order Query Parameter Name"}]},{id:"filtering-on-nested-properties-1",title:"Filtering on Nested Properties"},{id:"enabling-a-filter-for-all-properties-of-a-resource",title:"Enabling a Filter for All Properties of a Resource"}]},{id:"elasticsearch-filters",title:"Elasticsearch Filters",anchors:[{id:"ordering-filter-sorting",title:"Ordering Filter (Sorting)",anchors:[{id:"using-a-custom-order-query-parameter-name-1",title:"Using a Custom Order Query Parameter Name"}]},{id:"match-filter",title:"Match Filter"},{id:"term-filter",title:"Term Filter"},{id:"filtering-on-nested-properties-2",title:"Filtering on Nested Properties"}]},{id:"serializer-filters",title:"Serializer Filters",anchors:[{id:"group-filter",title:"Group Filter"},{id:"property-filter",title:"Property filter"}]},{id:"creating-custom-filters",title:"Creating Custom Filters",anchors:[{id:"creating-custom-doctrine-orm-filters",title:"Creating Custom Doctrine ORM Filters"},{id:"creating-custom-doctrine-mongodb-odm-filters",title:"Creating Custom Doctrine MongoDB ODM Filters"},{id:"creating-custom-elasticsearch-filters",title:"Creating Custom Elasticsearch Filters"},{id:"using-doctrine-orm-filters",title:"Using Doctrine ORM Filters"}]},{id:"apifilter-annotation",title:"ApiFilter Annotation"}]},{id:"serialization",title:"The Serialization Process",anchors:[{id:"overall-process",title:"Overall Process"},{id:"available-serializers",title:"Available Serializers"},{id:"the-serialization-context-groups-and-relations",title:"The Serialization Context, Groups and Relations",anchors:[{id:"configuration",title:"Configuration"}]},{id:"using-serialization-groups",title:"Using Serialization Groups"},{id:"using-serialization-groups-per-operation",title:"Using Serialization Groups per Operation",anchors:[{id:"embedding-relations",title:"Embedding Relations"},{id:"denormalization",title:"Denormalization"}]},{id:"changing-the-serialization-context-dynamically",title:"Changing the Serialization Context Dynamically"},{id:"changing-the-serialization-context-on-a-per-item-basis",title:"Changing the Serialization Context on a Per-item Basis"},{id:"name-conversion",title:"Name Conversion"},{id:"decorating-a-serializer-and-adding-extra-data",title:"Decorating a Serializer and Adding Extra Data"},{id:"entity-identifier-case",title:"Entity Identifier Case"},{id:"embedding-the-json-ld-context",title:"Embedding the JSON-LD Context"},{id:"collection-relation",title:"Collection Relation"}]},{id:"validation",title:"Validation",anchors:[{id:"validating-submitted-data",title:"Validating Submitted Data"},{id:"using-validation-groups",title:"Using Validation Groups"},{id:"using-validation-groups-on-operations",title:"Using Validation Groups on Operations"},{id:"dynamic-validation-groups",title:"Dynamic Validation Groups"},{id:"error-levels-and-payload-serialization",title:"Error Levels and Payload Serialization"},{id:"validation-on-collection-relations",title:"Validation on Collection Relations"},{id:"open-vocabulary-generated-from-validation-metadata",title:"Open Vocabulary Generated from Validation Metadata"}]},{id:"security",title:"Security",anchors:[{id:"configuring-the-access-control-message",title:"Configuring the Access Control Message"}]},{id:"data-providers",title:"Data Providers",anchors:[{id:"custom-collection-data-provider",title:"Custom Collection Data Provider"},{id:"custom-item-data-provider",title:"Custom Item Data Provider"},{id:"injecting-the-serializer-in-an-itemdataprovider",title:"Injecting the Serializer in an ItemDataProvider"},{id:"injecting-extensions-pagination-filter-eagerloading-etc",title:"Injecting Extensions (Pagination, Filter, EagerLoading etc.)"}]},{id:"data-persisters",title:"Data Persisters",anchors:[{id:"creating-a-custom-data-persister",title:"Creating a Custom Data Persister"}]},{id:"mercure",title:"Pushing Live Updates Using the Mercure Protocol",anchors:[{id:"installing-the-mercure-support",title:"Installing the Mercure Support"},{id:"pushing-the-api-updates",title:"Pushing the API Updates"},{id:"dispatching-private-updates-authorized-mode",title:"Dispatching Private Updates (Authorized Mode)"}]},{id:"mongodb",title:"MongoDB Support",anchors:[{id:"overview",title:"Overview"},{id:"enabling-mongodb-support",title:"Enabling MongoDB Support"},{id:"creating-documents",title:"Creating Documents"},{id:"filtering",title:"Filtering"},{id:"creating-custom-extensions",title:"Creating Custom Extensions"}]},{id:"elasticsearch",title:"Elasticsearch Support",anchors:[{id:"overview-1",title:"Overview"},{id:"enabling-reading-support",title:"Enabling Reading Support"},{id:"creating-models",title:"Creating Models",anchors:[{id:"creating-custom-mapping",title:"Creating custom mapping"}]},{id:"filtering-1",title:"Filtering"},{id:"creating-custom-extensions-1",title:"Creating Custom Extensions"}]},{id:"pagination",title:"Pagination",anchors:[{id:"disabling-the-pagination",title:"Disabling the Pagination",anchors:[{id:"globally",title:"Globally"},{id:"for-a-specific-resource",title:"For a Specific Resource"},{id:"client-side",title:"Client-side",anchors:[{id:"globally-1",title:"Globally"},{id:"for-a-specific-resource-1",title:"For a specific resource"}]}]},{id:"changing-the-number-of-items-per-page",title:"Changing the Number of Items per Page",anchors:[{id:"globally-2",title:"Globally"},{id:"for-a-specific-resource-2",title:"For a Specific Resource"},{id:"client-side-1",title:"Client-side",anchors:[{id:"globally-3",title:"Globally"},{id:"for-a-specific-resource-3",title:"For a Specific Resource"}]}]},{id:"changing-maximum-items-per-page",title:"Changing Maximum items per page",anchors:[{id:"globally-4",title:"Globally"},{id:"for-a-specific-resource-4",title:"For a Specific Resource"},{id:"for-a-specific-resource-collection-operation",title:"For a Specific Resource Collection Operation"}]},{id:"partial-pagination",title:"Partial Pagination",anchors:[{id:"globally-5",title:"Globally"},{id:"for-a-specific-resource-5",title:"For a Specific Resource"},{id:"client-side-2",title:"Client-side",anchors:[{id:"globally-6",title:"Globally"},{id:"for-a-specific-resource-6",title:"For a Specific Resource"}]}]},{id:"controlling-the-behavior-of-the-doctrine-orm-paginator",title:"Controlling the behavior of the Doctrine ORM Paginator"},{id:"custom-controller-action",title:"Custom Controller Action"}]},{id:"events",title:"The Event System"},{id:"content-negotiation",title:"Content Negotiation",anchors:[{id:"enabling-several-formats",title:"Enabling Several Formats"},{id:"enabling-additional-formats-on-a-specific-resourceoperation",title:"Enabling Additional Formats On a Specific Resource/Operation"},{id:"registering-a-custom-serializer",title:"Registering a Custom Serializer"},{id:"writing-a-custom-normalizer",title:"Writing a Custom Normalizer"}]},{id:"deprecations",title:"Deprecating Resources and Properties (Alternative to Versioning)",anchors:[{id:"deprecating-resource-classes-operations-and-properties",title:"Deprecating Resource Classes, Operations and Properties"},{id:"setting-the-sunset-http-header-to-indicate-when-a-resource-or-an-operation-will-be-removed",title:"Setting the Sunset HTTP Header to Indicate When a Resource or an Operation Will Be Removed"}]},{id:"performance",title:"Performance and Cache",anchors:[{id:"enabling-the-built-in-http-cache-invalidation-system",title:"Enabling the Built-in HTTP Cache Invalidation System",anchors:[{id:"extending-cache-tags-for-invalidation",title:"Extending Cache-Tags for invalidation"}]},{id:"setting-custom-http-cache-headers",title:"Setting Custom HTTP Cache Headers"},{id:"enabling-the-metadata-cache",title:"Enabling the Metadata Cache"},{id:"using-ppm-php-pm",title:"Using PPM (PHP-PM)"},{id:"doctrine-queries-and-indexes",title:"Doctrine Queries and Indexes",anchors:[{id:"search-filter-1",title:"Search Filter"},{id:"eager-loading",title:"Eager Loading",anchors:[{id:"max-joins",title:"Max Joins"},{id:"force-eager",title:"Force Eager"},{id:"override-at-resource-and-operation-level",title:"Override at Resource and Operation Level"},{id:"disable-eager-loading",title:"Disable Eager Loading"}]},{id:"partial-pagination-1",title:"Partial Pagination"}]},{id:"profiling-with-blackfireio",title:"Profiling with Blackfire.io"}]},{id:"extensions",title:"Extensions",anchors:[{id:"custom-doctrine-orm-extension",title:"Custom Doctrine ORM Extension",anchors:[{id:"example",title:"Example",anchors:[{id:"blocking-anonymous-users",title:"Blocking Anonymous Users"}]}]},{id:"custom-doctrine-mongodb-odm-extension",title:"Custom Doctrine MongoDB ODM Extension"},{id:"custom-elasticsearch-extension",title:"Custom Elasticsearch Extension"}]},{id:"swagger",title:"OpenAPI Specification Support (formerly Swagger)",anchors:[{id:"using-the-openapi-command",title:"Using the OpenAPI Command"},{id:"overriding-the-openapi-specification",title:"Overriding the OpenAPI Specification"},{id:"using-the-openapi-and-swagger-contexts",title:"Using the OpenAPI and Swagger Contexts"},{id:"changing-the-name-of-a-definition",title:"Changing the Name of a Definition"},{id:"changing-operations-in-the-openapi-documentation",title:"Changing Operations in the OpenAPI Documentation"},{id:"changing-the-location-of-swagger-ui",title:"Changing the Location of Swagger UI",anchors:[{id:"disabling-swagger-ui-or-redoc",title:"Disabling Swagger UI or ReDoc"},{id:"manually-registering-the-swagger-ui-controller",title:"Manually Registering the Swagger UI Controller"}]},{id:"overriding-the-ui-template",title:"Overriding the UI Template"},{id:"compatibilily-layer-with-amazon-api-gateway",title:"Compatibilily Layer with Amazon API Gateway"}]},{id:"messenger",title:"Symfony Messenger Integration: CQRS and Async Message Processing",anchors:[{id:"installing-symfony-messenger",title:"Installing Symfony Messenger"},{id:"dispatching-a-resource-through-the-message-bus",title:"Dispatching a Resource through the Message Bus"},{id:"registering-a-message-handler",title:"Registering a Message Handler"},{id:"accessing-the-data-returned-by-the-handler",title:"Accessing the Data Returned by the Handler"},{id:"detecting-removals",title:"Detecting Removals"},{id:"using-messenger-with-an-input-object",title:"Using Messenger with an Input Object"}]},{id:"dto",title:"Using Data Transfer Objects (DTOs)",anchors:[{id:"specifying-an-input-or-an-output-data-representation",title:"Specifying an Input or an Output Data Representation"},{id:"updating-a-resource-with-a-custom-input",title:"Updating a Resource with a Custom Input"},{id:"disabling-the-input-or-the-output",title:"Disabling the Input or the Output"},{id:"inputoutput-metadata",title:"Input/Output Metadata"},{id:"using-objects-as-relations-inside-resources",title:"Using Objects As Relations Inside Resources"}]},{id:"push-relations",title:"Pushing Related Resources Using HTTP/2"},{id:"file-upload",title:"Handling File Upload",anchors:[{id:"installing-vichuploaderbundle",title:"Installing VichUploaderBundle"},{id:"configuring-the-entity-receiving-the-uploaded-file",title:"Configuring the Entity Receiving the Uploaded File"},{id:"handling-file-upload",title:"Handling File Upload"},{id:"resolving-the-file-url",title:"Resolving the File URL"},{id:"making-a-request-to-the-media_objects-endpoint",title:"Making a Request to the /media_objects Endpoint"},{id:"linking-a-mediaobject-resource-to-another-resource",title:"Linking a MediaObject Resource to Another Resource"}]},{id:"default-order",title:"Overriding Default Order"},{id:"errors",title:"Errors Handling",anchors:[{id:"converting-php-exceptions-to-http-errors",title:"Converting PHP Exceptions to HTTP Errors"}]},{id:"external-vocabularies",title:"Using External Vocabularies"},{id:"operation-path-naming",title:"Operation Path Naming",anchors:[{id:"configuration-1",title:"Configuration"},{id:"create-a-custom-operation-path-resolver",title:"Create a Custom Operation Path Resolver",anchors:[{id:"defining-the-operation-path-resolver",title:"Defining the Operation Path Resolver"},{id:"registering-the-service",title:"Registering the Service"},{id:"configuring-it",title:"Configuring It"}]}]},{id:"extending-jsonld-context",title:"Extending JSON-LD Context"},{id:"form-data",title:"Accept application/x-www-form-urlencoded Form Data",anchors:[{id:"create-your-deserializelistener-decorator",title:"Create your DeserializeListener Decorator"},{id:"creating-the-service-definition",title:"Creating the Service Definition"}]},{id:"identifiers",title:"Identifiers",anchors:[{id:"custom-identifier-normalizer",title:"Custom Identifier Normalizer"},{id:"supported-identifiers",title:"Supported Identifiers"}]},{id:"jwt",title:"JWT Authentication",anchors:[{id:"installing-lexikjwtauthenticationbundle",title:"Installing LexikJWTAuthenticationBundle"},{id:"configuring-the-symfony-securitybundle",title:"Configuring the Symfony SecurityBundle",anchors:[{id:"adding-authentication-to-an-api-which-uses-a-path-prefix",title:"Adding Authentication to an API Which Uses a Path Prefix"}]},{id:"documenting-the-authentication-mechanism-with-swaggeropen-api",title:"Documenting the Authentication Mechanism with Swagger/Open API",anchors:[{id:"configuring-api-platform",title:"Configuring API Platform"},{id:"adding-a-new-api-key",title:"Adding a New API Key"}]},{id:"testing-with-behat",title:"Testing with Behat"}]},{id:"angularjs-integration",title:"AngularJS Integration",anchors:[{id:"restangular",title:"Restangular"},{id:"ng-admin",title:"ng-admin"}]},{id:"fosuser-bundle",title:"FOSUserBundle Integration",anchors:[{id:"installing-the-bundle",title:"Installing the Bundle"},{id:"enabling-the-bridge",title:"Enabling the Bridge"},{id:"creating-a-user-entity-with-serialization-groups",title:"Creating a User Entity with Serialization Groups"}]},{id:"nelmio-api-doc",title:"NelmioApiDocBundle Integration"},{id:"configuration",title:"Configuration"}]},{title:"The Schema Generator Component",path:"schema-generator",items:[{id:"index",title:"The Schema Generator",anchors:[{id:"what-is-schemaorg",title:"What Is Schema.org?"},{id:"why-use-schemaorg-data-to-generate-a-php-model",title:"Why Use Schema.org Data to Generate a PHP Model?",anchors:[{id:"dont-reinvent-the-wheel",title:"Don't Reinvent the Wheel"},{id:"improve-seo-and-user-experience",title:"Improve SEO and User Experience"},{id:"be-ready-for-the-future",title:"Be Ready for The Future"}]},{id:"documentation",title:"Documentation"}]},{id:"getting-started",title:"Getting Started",anchors:[{id:"installation",title:"Installation"},{id:"model-scaffolding",title:"Model Scaffolding",anchors:[{id:"going-further",title:"Going Further"}]},{id:"cardinality-extraction",title:"Cardinality Extraction"}]},{id:"configuration",title:"Configuration",anchors:[{id:"customizing-php-namespaces",title:"Customizing PHP Namespaces"},{id:"forcing-a-field-range",title:"Forcing a Field Range"},{id:"forcing-a-field-cardinality",title:"Forcing a Field Cardinality"},{id:"forcing-a-relation-table-name",title:"Forcing a Relation Table Name"},{id:"forcing-or-disabling-a-class-parent",title:"Forcing (or Disabling) a Class Parent"},{id:"forcing-a-class-to-be-abstract",title:"Forcing a Class to be Abstract"},{id:"forcing-a-nullable-property",title:"Forcing a Nullable Property"},{id:"forcing-a-unique-property",title:"Forcing a Unique Property"},{id:"making-a-property-read-only",title:"Making a Property Read-Only"},{id:"making-a-property-write-only",title:"Making a Property Write-Only"},{id:"forcing-a-property-to-be-in-a-serialization-group",title:"Forcing a Property to be in a Serialization Group"},{id:"forcing-an-embeddable-class-to-be-embedded",title:"Forcing an Embeddable Class to be Embedded"},{id:"author-phpdoc",title:"Author PHPDoc"},{id:"disabling-generators-and-creating-custom-ones",title:"Disabling Generators and Creating Custom Ones"},{id:"skipping-accessor-method-generation",title:"Skipping Accessor Method Generation"},{id:"disabling-the-id-generator",title:"Disabling the id Generator"},{id:"generating-uuids",title:"Generating UUIDs"},{id:"user-submitted-uuids",title:"User submitted UUIDs"},{id:"generating-custom-ids",title:"Generating Custom IDs"},{id:"disabling-usage-of-doctrine-collections",title:"Disabling Usage of Doctrine Collections"},{id:"changing-the-field-visibility",title:"Changing the Field Visibility"},{id:"generating-asserttype-annotations",title:"Generating @Assert\\Type Annotations"},{id:"forcing-doctrine-inheritance-mapping-annotation",title:"Forcing Doctrine Inheritance Mapping Annotation"},{id:"interfaces-and-doctrine-resolve-target-entity-listener",title:"Interfaces and Doctrine Resolve Target Entity Listener"},{id:"custom-schemas",title:"Custom Schemas"},{id:"checking-goodrelation-compatibility",title:"Checking GoodRelation Compatibility"},{id:"php-file-header",title:"PHP File Header"},{id:"full-configuration-reference",title:"Full Configuration Reference"}]}]},{title:"The Admin Component",path:"admin",items:[{id:"index",title:"The API Platform Admin",anchors:[{id:"features-1",title:"Features"}]},{id:"getting-started",title:"Getting Started",anchors:[{id:"installation-1",title:"Installation"},{id:"creating-the-admin",title:"Creating the Admin"},{id:"customizing-the-admin",title:"Customizing the Admin",anchors:[{id:"using-custom-components",title:"Using Custom Components"},{id:"managing-files-and-images",title:"Managing Files and Images"},{id:"using-a-custom-validation-function-or-inject-custom-props",title:"Using a Custom Validation Function or Inject Custom Props"},{id:"show-the-names-of-your-entities-instead-of-their-iris",title:"Show the Names of your Entities Instead of their IRIs"},{id:"using-the-hydra-data-provider-directly-with-react-admin",title:"Using the Hydra Data Provider Directly with react-admin"}]}]},{id:"authentication-support",title:"Authentication Support"},{id:"handling-relations-to-collections",title:"Handling Relations to Collections",anchors:[{id:"customizing-a-property",title:"Customizing a Property"},{id:"customizing-an-icon",title:"Customizing an Icon"},{id:"using-an-autocomplete-input-for-relations",title:"Using an Autocomplete Input for Relations"}]}]},{title:"The Client Generator Component",path:"client-generator",items:[{id:"index",title:"The API Platform Client Generator",anchors:[{id:"features-2",title:"Features"}]},{id:"react",title:"React Generator",anchors:[{id:"install",title:"Install"},{id:"generating-a-progressive-web-app",title:"Generating a Progressive Web App"},{id:"screenshots",title:"Screenshots"}]},{id:"vuejs",title:"Vue.js Generator"},{id:"react-native",title:"React Native generator",anchors:[{id:"install-1",title:"Install"},{id:"generating-a-native-app",title:"Generating a Native App"},{id:"screenshots-in-ios-simulator",title:"Screenshots in iOS Simulator"}]},{id:"typescript",title:"Typescript Interfaces",anchors:[{id:"example-1",title:"Example"}]},{id:"troubleshooting",title:"Troubleshooting"}]},{title:"Deployment",path:"deployment",items:[{id:"index",title:"Deploying API Platform Applications"},{id:"kubernetes",title:"Deploying to a Kubernetes Cluster",anchors:[{id:"preparing-your-cluster-and-your-local-machine",title:"Preparing Your Cluster and Your Local Machine"},{id:"creating-and-publishing-the-docker-images",title:"Creating and Publishing the Docker Images"},{id:"deploying",title:"Deploying"},{id:"initializing-the-database",title:"Initializing the Database"},{id:"tiller-rbac-issue",title:"Tiller RBAC Issue"}]},{id:"heroku",title:"Deploying an API Platform App on Heroku"},{id:"traefik",title:"Implement Traefik Into API Platform Dockerized",anchors:[{id:"basic-implementation",title:"Basic Implementation"},{id:"known-issues",title:"Known Issues"}]}]},{title:"Extra",path:"extra",items:[{id:"releases",title:"The Release Process"},{id:"philosophy",title:"API Platform's Philosophy"},{id:"troubleshooting",title:"Troubleshooting",anchors:[{id:"using-docker",title:"Using Docker",anchors:[{id:"with-docker-toolbox-on-windows",title:"With Docker Toolbox on Windows"},{id:"error-starting-userland-proxy",title:"Error starting userland proxy"}]},{id:"using-api-platform-and-jms-serializer-in-the-same-project",title:"Using API Platform and JMS Serializer in the same project"},{id:"upstream-sent-too-big-header-while-reading-response-header-from-upstream-502-error",title:'"upstream sent too big header while reading response header from upstream" 502 Error'}]},{id:"contribution-guides",title:"Contribution guides"},{id:"conduct",title:"Contributor Code of Conduct"}]}]}},168:function(e,t,i){"use strict";i(88),i(78),i(77),i(26);var n=i(7),a=i.n(n),r=i(0),o=i.n(r),s=i(1),l=i.n(s),d=i(36),c=i(165),g=i.n(c),u=i(157),p=i.n(u),h=function e(t){var i=t.path,n=t.anchors,a=t.location;return o.a.createElement("ul",null,n.map(function(t){var n=i+"#"+t.id;return o.a.createElement("li",{key:n,className:p()("submenu-item__link",{current:""!==a.hash&&"#"+t.id===a.hash})},o.a.createElement(d.Link,{to:n},t.title),t.anchors&&o.a.createElement(e,{path:i,anchors:t.anchors,title:t.title,location:a}))}))},m=h;h.propTypes={path:l.a.string.isRequired,anchors:l.a.array.isRequired,location:l.a.object.isRequired};var f=function(e){var t=e.path,i=e.anchors,n=e.title,a=e.current,r=e.location;return i?o.a.createElement(g.a,{className:"submenu__item",openedClassName:"submenu__item open",open:a,triggerDisabled:!0,transitionTime:500,easing:"ease",trigger:o.a.createElement(d.Link,{to:t},n)},o.a.createElement("ul",null,i.map(function(e){var i=t+"#"+e.id;return o.a.createElement("li",{key:i,className:p()("submenu-item__link",{current:""!==r.hash&&"#"+e.id===r.hash})},o.a.createElement(d.Link,{to:i},e.title),e.anchors&&o.a.createElement(m,{path:t,anchors:e.anchors,title:e.title,location:r}))}))):o.a.createElement(d.Link,{className:p()({current:a}),to:t},n)};f.propTypes={path:l.a.string.isRequired,anchors:l.a.array,title:l.a.string.isRequired,current:l.a.bool,location:l.a.object},f.defaultProps={anchors:null,current:!1,location:null};var b=f,C=function(e){var t=e.item,i=e.location,n=e.current,a=e.onClick,r=t.items,s=t.path,l=t.title,c=s===n;return r?o.a.createElement(g.a,{className:"menu__item",openedClassName:"menu__item open",triggerDisabled:!0,transitionTime:500,open:c,easing:"ease",trigger:o.a.createElement("div",{className:"item__title",role:"presentation",onClick:function(){return a(s)}},o.a.createElement("h2",{key:s},l),o.a.createElement("i",{className:"icon-chevron-"+(c?"top":"down")}))},o.a.createElement("ul",{className:"menu-item__list"},r.map(function(e){var t="index"===e.id?"/docs/"+s+"/":"/docs/"+s+"/"+e.id+"/",n=t===i.pathname;return o.a.createElement("li",{key:t,className:p()("menu-item__link",{active:n})},o.a.createElement(b,{path:t,anchors:e.anchors,title:e.title,current:n,location:i}))}))):o.a.createElement("div",{className:"menu__item"},o.a.createElement(d.Link,{className:"item__title",to:"/docs/"+s+"/"},o.a.createElement("h2",{key:s},l)))};C.propTypes={item:l.a.object.isRequired,location:l.a.object.isRequired,current:l.a.string,onClick:l.a.func},C.defaultProps={current:null,onClick:function(){}};var y=C,v=function(e){function t(){for(var t,i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).updateLocation=function(e){t.setState(function(t){return Object.assign({},t,{locationWithHash:Object.assign({},e)})})},t.getItemByLocation=function(e){var t=e.pathname.match(/docs\/(.*?)(\/|$)/);return t?t[1]:null},t.state={currentItem:null},t.toggleMenu=function(e){return t.setState(function(t){return Object.assign({},t,{currentItem:t.currentItem===e?null:e})})},t}a()(t,e);var i=t.prototype;return i.componentWillMount=function(){var e=this,t=this.props.location;"undefined"!=typeof window&&(window.addEventListener("scroll",this.handleScroll),window.addEventListener("click",this.handleScroll)),this.setState(function(i){return Object.assign({},i,{currentItem:e.getItemByLocation(t)})})},i.componentWillReceiveProps=function(e){var t=this;if(e.location.pathname!==this.props.location.pathname){var i=e.location;this.setState(function(e){return Object.assign({},e,{currentItem:t.getItemByLocation(i)})})}},i.handleScroll=function(){if(void 0!==document.querySelectorAll(".Collapsible.submenu__item.open")[0]){var e=document.querySelectorAll(".Collapsible.submenu__item.open")[0].querySelectorAll("a"),t=[];e.forEach(function(e,i){t[i]=document.getElementById(e.getAttribute("href").split("#")[1]),e.parentElement.classList.remove("current")});for(var i=e.length;0<i;i-=1)if(t[i]&&t[i].offsetTop<window.scrollY+2&&t[i].parentNode.offsetTop<window.scrollY+2)return void e[i].parentNode.classList.add("current")}},i.render=function(){var e=this,t=this.state.currentItem;return o.a.createElement("div",{className:"docs__menu openable"},this.props.nav.map(function(i){return o.a.createElement(y,{item:i,key:i.path,onClick:e.toggleMenu,current:t,location:e.props.location})}))},t}(r.Component);v.propTypes={location:l.a.object.isRequired,nav:l.a.array},v.defaultProps={nav:[]};t.a=v}}]);
//# sourceMappingURL=2-e65ea7d879b5f5445c74.js.map