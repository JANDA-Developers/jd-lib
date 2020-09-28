import React from 'react';
import { Button, IButtonProps } from '../src/components/button/Button';
import JDcontainer from '../src/components/container/Container';
import Align from '../src/components/align/Align';
import {
  Title,
  Description,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs/blocks';

const Template = (args: IButtonProps) => <Button {...args} />;
export const PrimaryStory = Template.bind({});

const args: IButtonProps = {
  label: '예제',
};

PrimaryStory.args = args;

export default {
  title: '기본/Button',
  component: PrimaryStory,
  decorators: [Story => <JDcontainer verticalPadding>{Story()}</JDcontainer>],
  parameters: {
    docs: {
      page: () => (
        <div id="root">
          <Title>Button</Title>
          <Description>Button</Description>
          <Stories />
          <ArgsTable of={PrimaryStory} />
        </div>
      ),
    },
  },
};

export const Standard = () => {
  return (
    <JDcontainer verticalPadding>
      <h3>예시</h3>

      <Align>
        <Button thema="primary" label={'primary'} />
        <Button thema="point" label={'point'} />
        <Button thema="grey4" label={'grey4'} />
        <Button thema="grey3" label={'grey3'} />
        <Button thema="grey2" label={'grey2'} />
        <Button thema="grey1" label={'grey1'} />
        <Button thema="positive" label={'positive'} />
        <Button thema="error" label={'error'} />
      </Align>
      <Align>
        <Button
          onClick={() => {
            document
              .getElementById('root')!
              .style.setProperty('--primary-color', '#000');
          }}
          mode={'flat'}
          label={'default'}
        />

        <Button mode={'flat'} thema="primary" label={'primary'} />
        <Button mode={'flat'} thema="point" label={'point'} />
        <Button mode={'flat'} thema="grey4" label={'grey4'} />
        <Button mode={'flat'} thema="grey3" label={'grey3'} />
        <Button mode={'flat'} thema="grey2" label={'grey2'} />
        <Button mode={'flat'} thema="grey1" label={'grey1'} />
        <Button mode={'flat'} thema="positive" label={'positive'} />
        <Button mode={'flat'} thema="error" label={'error'} />
      </Align>
      <Align>
        <Button mode="border" thema="primary" label={'border'} />
        <Button mode={'border'} thema="point" label={'border'} />
        <Button mode={'border'} thema="error" label={'border'} />
        <Button mode={'border'} label={'border'} />
        <Button mode={'border'} label={'border'} />
      </Align>
      <Align>
        <Button disabled label={'border'} />
        <Button br="square" label={'Square'} />
        <Button padding="largest" label={'padding'} />
        <Button
          iconProp={{
            icon: 'addCircle',
          }}
          label={'icon'}
        />
      </Align>
      <Align>
        <Button size="large" label="large" />
        <Button label="long" size="long" />
        <Button label="longLarge" size="longLarge" />
        <Button label={'noraml'} />
        <Button label="small" size="small" />
      </Align>
      <Align>
        <Button width="large" label="width large" />
        <Button width="huge" label="width huge" />
        <Button width="auto" label="widht auto" />
      </Align>
      <h3>컨트롤</h3>
      <Button
        mode={'flat'}
        br={'normal'}
        size={'long'}
        pulse={false}
        blink={false}
        thema={'primary'}
        disabled={false}
        label={'example'}
      />
    </JDcontainer>
  );
};
