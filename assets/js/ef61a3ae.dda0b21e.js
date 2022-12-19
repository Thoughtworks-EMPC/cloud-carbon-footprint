"use strict";(self.webpackChunkwww_cloudcarbonfootprint_org=self.webpackChunkwww_cloudcarbonfootprint_org||[]).push([[823],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4317:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l}});var r=n(3117),a=(n(7294),n(3905));const o={id:"azure",title:"Azure",slug:"/azure",sidebar_position:3},i=void 0,p={unversionedId:"ConnectingData/azure",id:"ConnectingData/azure",title:"Azure",description:"Your Microsoft Azure account needs to have an App registered and Service Principal with permissions to read billing and usage data from your Subscriptions",source:"@site/docs/ConnectingData/Azure.md",sourceDirName:"ConnectingData",slug:"/azure",permalink:"/docs/azure",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"azure",title:"Azure",slug:"/azure",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"GCP",permalink:"/docs/gcp"},next:{title:"On-Premise",permalink:"/docs/on-premise"}},s={},l=[{value:"Unsupported Usage Types",id:"unsupported-usage-types",level:3},{value:"Options for Azure Authentication",id:"options-for-azure-authentication",level:3}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Your Microsoft Azure account needs to have an App registered and Service Principal with permissions to read billing and usage data from your Subscriptions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Register a new Azure Application via your Azure Portal, under \u201cApp Registrations\u201d."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"You do not need to set a Redirect URI or configure platform Settings. Learn more about how to do this ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app"},"here.")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Within this application, go to \u201cCertificates and secrets\u201d, and create a new Client secret."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For the next step, you will need to know the client id, client secret and your tenant id."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Give permissions to this application to access subscriptions:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Learn more about how to do this ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal#assign-a-role-to-the-application"},"here.")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure environmental variables for the api and client."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"After configuring your credentials, we need to set a number of environmental variables in the app, so it can authenticate with AWS. We use .env files to manage this. Reference ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/api/.env.template"},"packages/api/.env.template")," for a template .env file. Rename this file as .env, optionally remove the comments and then set the environment variables for the \u201cBilling Data\u201d approach. If you are only using one of these cloud providers, you can remove the environment variables associated with the other cloud provider in your ",(0,a.kt)("inlineCode",{parentName:"p"},"packgages/api/.env")," file.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"There is also a ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/client/.env")," file that allows you to set some configuration for the data range the application requests data for. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/client/.env.template"},"client/.env.template")," for a template. Rename this file as .env, optionally remove the comments and then set the environment variables.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"By default, the client uses AWS, GCP and Azure. If you are only using one of these cloud providers, please update the ",(0,a.kt)("inlineCode",{parentName:"p"},"appConfig")," object in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/client/src/Config.ts"},"client Config file")," to only include your provider in the ",(0,a.kt)("inlineCode",{parentName:"p"},"CURRENT_PROVIDERS")," array.")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Finally, start up the application:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"yarn start\n")))),(0,a.kt)("p",null,"\u26a0\ufe0f This will incur some cost. Use this sparingly if you wish to test with live data."),(0,a.kt)("p",null,"DISCLAIMER: If your editor of choice is VS Code, we recommend using either your native or custom terminal of choice (i.e. iterm) instead. Unexpected authentication issues have occurred when starting up the server in VS Code terminals."),(0,a.kt)("h3",{id:"unsupported-usage-types"},"Unsupported Usage Types"),(0,a.kt)("p",null,"The application has a file containing supported usage types located ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/azure/src/lib/ConsumptionTypes.ts"},"here"),". The current lists consist of types the application has faced, so there are likely to be some types not yet handled. When querying your data, you may come across unsupported types with a warning like this:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"2021-03-31T09:48:38.815Z [ConsumptionManagement] warn: Unexpected usage type for storage service: LRS Snapshots")),(0,a.kt)("p",null,"If you come across a similar warning message, congratulations! You have found a usage type that the app currently isn\u2019t aware of - this is a great opportunity for you to improve Cloud Carbon Footprint!"),(0,a.kt)("p",null,"The steps to resolve are:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Determine the type in question based on the warning message"),(0,a.kt)("li",{parentName:"ol"},"Add the type to the respective list in the ",(0,a.kt)("inlineCode",{parentName:"li"},"ConsumptionTypes.ts")," file"),(0,a.kt)("li",{parentName:"ol"},"Delete ",(0,a.kt)("inlineCode",{parentName:"li"},"estimates.cache.json")," file and restart the application server"),(0,a.kt)("li",{parentName:"ol"},"Submit an issue or pull request with the update")),(0,a.kt)("h3",{id:"options-for-azure-authentication"},"Options for Azure Authentication"),(0,a.kt)("p",null,"By default, the application authenticates with Azure using environment variables set in the api/.env file. However, if you want to store these secrets is Google Secrets Manager we also provide that option, if you want to set the AZURE_AUTH_MODE environment variable to \u201cGCP\u201d."),(0,a.kt)("p",null,"The authentication mode is set inside ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/common/src/Config.ts"},"packages/common/src/Config.ts"),", and you can see these options being used in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/azure/src/application/AzureCredentialsProvider.ts"},"packages/azure/src/application/AzureCredentialsProvider.ts"),"."))}c.isMDXComponent=!0}}]);