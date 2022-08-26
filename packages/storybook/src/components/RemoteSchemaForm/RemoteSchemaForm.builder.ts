import { Builder } from '@builder.io/react';
import { RemoteSchemaForm } from './RemoteSchemaForm';
import { Component } from '@builder.io/sdk';

export const RemoteSchemaFormBuilderConfig:Component = {
  name: 'Remote Schema Form',

  inputs: [
    {
      name: 'backgroundColor',
      type: 'color',
      defaultValue: '#fafafafa',
    },
    
    {
      name: 'schemaUrl',
      type: 'text',
      defaultValue: "https://raw.githubusercontent.com/dinavinter/json-schema-store/main/contact_basic.json",
      
    },
    {
      name: "examples",
      type: 'text',
      enum: ['custom', 'https://raw.githubusercontent.com/dinavinter/json-schema-store/main/contact_basic.json', 'https://raw.githubusercontent.com/dinavinter/json-schema-store/main/newslatter_channel.json']

    }  
    
  ],
};

Builder.registerComponent(RemoteSchemaForm, RemoteSchemaFormBuilderConfig);
// onChange: 'options.set("schemaUrl", options.get("examples"))',
