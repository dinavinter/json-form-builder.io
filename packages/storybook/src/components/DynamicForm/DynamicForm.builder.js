import { Builder } from '@builder.io/react';
import { DynamicForm } from './DynamicForm';

export const DynamicFormBuilderConfig = {
  name: 'Dynamic Form',
  inputs: [
    {
      name: 'backgroundColor',
      type: 'color',
      defaultValue: '#fafafafa',
    },

    {
      name: 'schema',
      type: 'object',
      defaultValue: {
        "properties": {
          "email": {
            "title": "Email",
            "description": "Your Email",
            "type": "string",
            "format": "email"
          },
          "name": {
            "title": "Name",
            "description": "Nickname allowed",
            "type": "string"
          },
          "gender": {
            "title": "Gender",
            "description": "Your gender",
            "type": "string",
            "enum": [
              "male",
              "female",
              "alien"
            ]
          }

        }
      }
    }
    
  ],
};

Builder.registerComponent(DynamicForm, DynamicFormBuilderConfig);
