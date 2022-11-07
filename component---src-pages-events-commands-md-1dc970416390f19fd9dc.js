"use strict";(self.webpackChunkcommerce_events=self.webpackChunkcommerce_events||[]).push([[242],{6793:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return s},default:function(){return u}});var t,m=a(7462),r=a(3366),i=(a(5007),a(4983)),d=a(1515),o=["components"],s={},l=(t="InlineAlert",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),p={_frontmatter:s},c=d.Z;function u(e){var n=e.components,a=(0,r.Z)(e,o);return(0,i.mdx)(c,(0,m.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"event-management-commands"},"Event management commands"),(0,i.mdx)("p",null,"Adobe I/O Events allow you to receive notifications of real-time events taking place in Adobe services."),(0,i.mdx)("p",null,"Adobe Commerce provides the following commands to configure and process events:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Enable integration between Commerce and Adobe I/O events"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#create-an-event-provider"},"events:create-event-provider"),"  "))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Manage events subscriptions"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#subscribe-to-a-commerce-event"},"events:subscribe")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#create-event-metadata-in-adobe-io"},"events:metadata:populate")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#unsubscribe-from-a-commerce-event"},"events:unsubscribe")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#list-subscribed-commerce-events"},"events:list")))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Manage registrations"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#create-a-registration"},"events:registration:create")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#delete-a-registration"},"events:registration:delete")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#get-registration-details"},"events:registration:get-all")))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Generate a Commerce module"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#generate-a-commerce-module-based-on-a-list-of-subscribed-events"},"events:generate:module"))))),(0,i.mdx)("h2",{id:"create-an-event-provider"},"Create an event provider"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"events:create-event-provider")," command creates an event provider ID in Adobe IO Events and displays this ID. Add the generated ID as the value of the ",(0,i.mdx)("strong",{parentName:"p"},"Stores")," > Configuration > ",(0,i.mdx)("strong",{parentName:"p"},"Adobe Services")," > ",(0,i.mdx)("strong",{parentName:"p"},"Adobe IO Events")," > ",(0,i.mdx)("strong",{parentName:"p"},"Adobe I/O Event Provider ID")," field in the Commerce Admin."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"--label")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"--description")," arguments are optional. However, if you do not specify them, then you must create a system ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/etc/event-types.json")," file and define the values in that file before running the ",(0,i.mdx)("inlineCode",{parentName:"p"},"events:create-event-provider")," command. We recommend specifying the ",(0,i.mdx)("inlineCode",{parentName:"p"},"--label")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"--description")," arguments when you run the command."),(0,i.mdx)("p",null,"If you decide to omit the arguments, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"event-types.json")," file must have the following format:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n "provider": {\n     "label": "My Adobe Commerce Events",\n     "description": "Provides out-of-process extensibility for Adobe Commerce"\n     }\n }\n')),(0,i.mdx)("h3",{id:"usage"},"Usage"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},'bin/magento events:create-event-provider --label "<unique_provider_label>" --description "<provider description>"')),(0,i.mdx)("h3",{id:"arguments"},"Arguments"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"--label")," A name that distinguishes your event provider from others in the project. The name can contain English alphanumeric characters and underscores (_) only. The first character must be a letter."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"--description")," A string that describes your event provider."),(0,i.mdx)("h3",{id:"example"},"Example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'bin/magento events:create-event-provider --label "my_new_event_provider" --description "Event provider for my workspace"\n')),(0,i.mdx)("h3",{id:"response"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},"No event provider found, a new event provider will be created\n\nA new event provider has been created with ID <ID>.\n")),(0,i.mdx)("h2",{id:"subscribe-to-a-commerce-event"},"Subscribe to a Commerce event"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"events:subscribe")," command subscribes the current provider to the specified event. You must define the event code using the following pattern:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"<type>.<event_name>\n")),(0,i.mdx)("p",null,"where:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"type")," specifies the origin of the event. Specify ",(0,i.mdx)("inlineCode",{parentName:"li"},"observer")," if the event is emitted by a Commerce observer, or specify ",(0,i.mdx)("inlineCode",{parentName:"li"},"plugin")," if the event is emitted by a plugin."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"event_name")," identifies the event to subscribe. For example: ",(0,i.mdx)("inlineCode",{parentName:"li"},"catalog_product_save_after"),".")),(0,i.mdx)("p",null,"Adobe Commerce does not send all event fields to your external application by default. Instead, you must use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"--fields")," option to specify which fields to transmit. To send all event fields, you must specify a separate ",(0,i.mdx)("inlineCode",{parentName:"p"},"--fields")," option for each field. This practice keeps data transmission to a minimum and helps prevent accidentally sending sensitive information. If the Commerce event contains objects, use dotted notation to specify fields within an object. For example, if your event contains a ",(0,i.mdx)("inlineCode",{parentName:"p"},"stock_data")," object, and you want to send its ",(0,i.mdx)("inlineCode",{parentName:"p"},"product_id")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"qty")," fields, you would specify the ",(0,i.mdx)("inlineCode",{parentName:"p"},"--fields stock_data.product_id")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"--fields stock_data.qty")," command options. ",(0,i.mdx)("a",{parentName:"p",href:"./module-development.md"},"Commerce module development")," provides a detailed example of using files to register events."),(0,i.mdx)("p",null,"The command supports observer events by default. You must perform additional steps to subscribe to a plugin event:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Run the ",(0,i.mdx)("inlineCode",{parentName:"p"},"bin/magento events:subscribe --fields <event_code> --force")," command to force the subscription.")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Run the ",(0,i.mdx)("inlineCode",{parentName:"p"},"bin/magento events:generate:module")," command to generate or regenerate the ",(0,i.mdx)("inlineCode",{parentName:"p"},"AdobeCommerceEvents")," module.")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Run the ",(0,i.mdx)("inlineCode",{parentName:"p"},"bin/magento setup:di:compile")," command to create the classes necessary to handle the event."))),(0,i.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"You can also subscribe to a plugin event if it was registered in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/etc/config.php")," file and subsequently unsubscribed with the ",(0,i.mdx)("a",{parentName:"p",href:"#unsubscribe-from-a-commerce-event"},(0,i.mdx)("inlineCode",{parentName:"a"},"events:unsubscribe")," command"),". ",(0,i.mdx)("a",{parentName:"p",href:"./module-development.md#register-events"},"Register events")," describes the format of these files.)"),(0,i.mdx)("h3",{id:"usage-1"},"Usage"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"bin/magento events:subscribe <event_code> --fields=<name1> --fields=<name2>")),(0,i.mdx)("h3",{id:"arguments-1"},"Arguments"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"<event_code>")," Required. Specifies the event to subscribe to. The value must in the format ",(0,i.mdx)("inlineCode",{parentName:"p"},"<type.event_name>"),"."),(0,i.mdx)("h3",{id:"options"},"Options"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"--fields=<field_name>")," Required. An event field to transmit to the Adobe App Builder application. You can specify this option multiple times. Each instance can contain only one field name."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"--force"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"-f")," Forces subscription to the event, even if it hasn't been defined locally."),(0,i.mdx)("h3",{id:"example-1"},"Example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento events:subscribe observer.catalog_product_save_after --fields=sku --fields=stock_data.qty \n")),(0,i.mdx)("h3",{id:"response-1"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},"The subscription com.adobe.commerce.observer.catalog_product_save_after was successfully created\n")),(0,i.mdx)("h2",{id:"unsubscribe-from-a-commerce-event"},"Unsubscribe from a Commerce event"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"events:unsubscribe")," command causes the current provider to unsubscribe from the specified event. You cannot unsubscribe from events defined in a module's ",(0,i.mdx)("inlineCode",{parentName:"p"},"etc/io_events.xml")," file. However, you can unsubscribe events that were registered in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/etc/config.php")," file or from the ",(0,i.mdx)("a",{parentName:"p",href:"#subscribe-to-a-commerce-event"},(0,i.mdx)("inlineCode",{parentName:"a"},"events:subscribe")," command"),"."),(0,i.mdx)("p",null,"Use the ",(0,i.mdx)("a",{parentName:"p",href:"#list-subscribed-commerce-events"},(0,i.mdx)("inlineCode",{parentName:"a"},"events:list")," command")," to retrieve a list of subscribed events."),(0,i.mdx)("h3",{id:"usage-2"},"Usage"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"bin/magento events:unsubscribe <event_code>")),(0,i.mdx)("h3",{id:"arguments-2"},"Arguments"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"<event_code>")," Required. Specifies the event to unsubscribe from."),(0,i.mdx)("h3",{id:"example-2"},"Example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento events:unsubscribe observer.catalog_product_save_after\n")),(0,i.mdx)("h3",{id:"response-2"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},"Successfully unsubscribed from the `observer.catalog_product_save_after` event\n")),(0,i.mdx)("h2",{id:"list-subscribed-commerce-events"},"List subscribed Commerce events"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"events:list")," command returns a list of subscribed events."),(0,i.mdx)("h3",{id:"usage-3"},"Usage"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"bin/magento events:list")),(0,i.mdx)("h3",{id:"example-3"},"Example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento events:list\n")),(0,i.mdx)("h3",{id:"response-3"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},"observer.catalog_product_save_after\nobserver.customer_login\n")),(0,i.mdx)("h2",{id:"create-a-registration"},"Create a registration"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"events:registration:create")," command registers the merchant to Adobe Identity Management Services. You must configure the ",(0,i.mdx)("strong",{parentName:"p"},"Stores")," > Configuration > ",(0,i.mdx)("strong",{parentName:"p"},"Adobe Services")," > ",(0,i.mdx)("strong",{parentName:"p"},"Adobe I/O Events")," > ",(0,i.mdx)("strong",{parentName:"p"},"Commerce Events")," > ",(0,i.mdx)("strong",{parentName:"p"},"Merchant ID")," and ",(0,i.mdx)("strong",{parentName:"p"},"Environment ID")," fields before running this command."),(0,i.mdx)("h3",{id:"usage-4"},"Usage"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"bin/magento events:registration:create")),(0,i.mdx)("h3",{id:"example-4"},"Example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento events:registration:create\n")),(0,i.mdx)("h3",{id:"response-4"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},"Registration created\n")),(0,i.mdx)("h2",{id:"delete-a-registration"},"Delete a registration"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"events:registration:delete")," command deletes the specified registrant from the IMS organization."),(0,i.mdx)("h3",{id:"usage-5"},"Usage"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"bin/magento events:registration:delete <registration-id>")),(0,i.mdx)("h3",{id:"arguments-3"},"Arguments"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"<registration-id>")," Required. The ID assigned to the registration. Use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"events:registration:get-all")," command to retrieve the ID."),(0,i.mdx)("h3",{id:"example-5"},"Example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento events:registration:delete e037f0de-3489-49c7-9366-df86491072b4\n")),(0,i.mdx)("h3",{id:"response-5"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},"Registration was deleted\n")),(0,i.mdx)("h2",{id:"get-registration-details"},"Get registration details"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"events:registration:get-all")," command returns details about a registrant. The response includes the registration ID, merchant ID, environment ID, IMS organization ID, and instance ID."),(0,i.mdx)("h3",{id:"usage-6"},"Usage"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"bin/magento events:registration:get-all")),(0,i.mdx)("h3",{id:"example-6"},"Example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento events:registration:get-all\n")),(0,i.mdx)("h3",{id:"response-6"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},'+--------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| e037f0de-3489-49c7-9366-df86491072b4 | {"id":"e037f0de-3489-49c7-9366-df86491072b4","merchant_id":"extension-docs","environment_id":"extension-docs","ims_org_id":"12345678901234567890ABCD@AdobeOrg","instance_id":"extensibility-docs2","event_provider_metadata":"3rd_party_custom_events"} |\n+--------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n')),(0,i.mdx)("h2",{id:"create-event-metadata-in-adobe-io"},"Create event metadata in Adobe I/O"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"events:metadata:populate")," command creates event metadata based on XML and application configurations."),(0,i.mdx)("h3",{id:"usage-7"},"Usage"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"events:metadata:populate")),(0,i.mdx)("h3",{id:"example-7"},"Example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento events:metadata:populate\n")),(0,i.mdx)("h3",{id:"response-7"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},"The events metadata was successfully created:\n")),(0,i.mdx)("h2",{id:"generate-a-commerce-module-based-on-a-list-of-subscribed-events"},"Generate a Commerce module based on a list of subscribed events"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"events:generate:module")," command generates a module with plugins based on your configuration and places it into the Commerce ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/AdobeCommerceEvents")," directory."),(0,i.mdx)("h3",{id:"usage-8"},"Usage"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"bin/magento events:generate:module")),(0,i.mdx)("h3",{id:"example-8"},"Example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento events:generate:module\n")),(0,i.mdx)("h3",{id:"response-8"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},"Module was generated in the app/code/Magento directory\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-events-commands-md-1dc970416390f19fd9dc.js.map