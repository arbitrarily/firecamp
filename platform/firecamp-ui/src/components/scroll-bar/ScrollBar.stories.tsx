import { Tabs, ScrollBar } from '@firecamp/ui';
import { ForgetPasswordForm } from '../form/Form.stories';

export default {
  title: 'UI-Kit/ScrollBar',
  component: ScrollBar,
  argTypes: {
    className: '',
  },
};

export const Demo = () => (
  <ScrollBar
    w={200}
    h={200}
  >
    <div style={{ padding: '15px 20px' }}>
      <div className="text-lg font-medium">Content Heading</div>
      <hr />
      {[
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
      ].map((tag) => (
        <div className="text-sm mt-2 pt-3" key={tag}>
          {tag}. &nbsp; "In publishing and graphic design, Lorem ipsum is a
          placeholder text commonly used to demonstrate the visual form of a
          document or a typeface without relying on meaningful content. " "In
          publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. "
        </div>
      ))}
    </div>
  </ScrollBar>
);

export const VerticalScroll = () => (
  <ScrollBar
  >
    <div style={{ padding: '15px 20px' }}>
      <div className="text-lg font-medium">Content Heading</div>
      <hr />
      {[
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
      ].map((tag) => (
        <div className="text-sm mt-2 pt-3" key={tag}>
          {tag}. &nbsp; "In publishing and graphic design, Lorem ipsum is a
          placeholder text commonly used to demonstrate the visual form of a
          document or a typeface without relying on meaningful content. " "In
          publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. "
        </div>
      ))}
    </div>
  </ScrollBar>
);

export const HorizontalScroll = () => (
  <ScrollBar
  >
    <div style={{ padding: '15px 20px' }}>
      <div className="text-lg font-medium">Content Heading</div>
      <hr />
      {['1', '2', '3'].map((tag) => (
        <div className="text-sm mt-2 pt-3" key={tag}>
          {tag}. &nbsp; "In publishing and graphic design, Lorem ipsum is a
          placeholder text commonly used to demonstrate the visual form of a
          document or a typeface without relying on meaningful content. " "In
          publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. "
        </div>
      ))}
    </div>
  </ScrollBar>
);

export const ScrollBarWithModal = () => (
  <ScrollBar h={200}>
    <div style={{ padding: '15px 20px' }}>
      <ForgetPasswordForm />
      <br />
    </div>
  </ScrollBar>
);

export const VSCodeExample = () => (
  <ScrollBar w={200} h={200}>
    <div style={{ padding: '15px 20px' }}>
      <div className="text-lg font-medium">Content Heading</div>
      <hr />
      {[
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
      ].map((tag) => (
        <div className="text-sm mt-2 pt-3" key={tag}>
          {tag}. &nbsp; "In publishing and graphic design, Lorem ipsum is a
          placeholder text commonly used to demonstrate the visual form of a
          document or a typeface without relying on meaningful content. " "In
          publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. "
        </div>
      ))}
    </div>
  </ScrollBar>
);

export const RequestTabExample = () => (
  <div className="p-3 border">
    <ScrollBar
    >
      <Tabs
        list={[
          {
            id: 'body',
            name: 'Body',
          },
          {
            id: 'auth',
            name: 'Auth',
          },
          {
            id: 'header',
            name: 'Header',
          },
          {
            id: 'param',
            name: 'Param',
          },
          {
            id: 'scripts',
            name: 'Scripts',
          },
        ]}
        activeTab={'header'}
        onSelect={() => {}}
      />
    </ScrollBar>
  </div>
);
