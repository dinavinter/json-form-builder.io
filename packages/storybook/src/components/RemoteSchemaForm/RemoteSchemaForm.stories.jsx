import React from 'react';
import { RemoteSchemaFormBuilderConfig } from './RemoteSchemaForm.builder';
import { getDefaultProps } from '@builder.io/storybook';
import {RemoteSchemaForm} from "./RemoteSchemaForm";

const props = getDefaultProps(RemoteSchemaFormBuilderConfig);

export default {
  title: 'Remote Schema Form',
  component: RemoteSchemaForm,
  parameters: {
    builder: {
      config: RemoteSchemaFormBuilderConfig,
    },
  },
};

export const RemoteSchema = () => <RemoteSchemaForm {...props}/>;
