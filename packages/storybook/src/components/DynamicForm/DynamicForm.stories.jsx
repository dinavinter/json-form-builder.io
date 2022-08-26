import React from 'react';
import { DynamicFormBuilderConfig } from './DynamicForm.builder';
import { getDefaultProps } from '@builder.io/storybook';
import {DynamicForm} from "./DynamicForm";

const props = getDefaultProps(DynamicFormBuilderConfig);

export default {
  title: 'Dynamic Form',
  component: DynamicForm,
  parameters: {
    builder: {
      config: DynamicFormBuilderConfig,
    },
  },
};

export const InlineSchema = () => <DynamicForm {...props}/>;
