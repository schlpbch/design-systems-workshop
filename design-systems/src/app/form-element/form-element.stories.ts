import { FormElementComponent } from './form-element.component';
import { moduleMetadata, Story } from '@storybook/angular';
import { FormElementModule } from './form-element.module';
import { InputModule } from '../input/input.module';

const Template: Story<FormElementComponent> = (args) => ({
  props: args,
});

export default {
  title: 'Components/FormElement',
  component: FormElementComponent,
  decorators: [
    moduleMetadata({
      imports: [InputModule],
    }),
  ],
};

export const DefaultFormElement = Template.bind({});

DefaultFormElement.args = {};
