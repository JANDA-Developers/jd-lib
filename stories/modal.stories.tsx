import React, { useState } from 'react';
import { JDmodal, IProps } from '../src/components/modal/Modal';
import { useModal } from '../src/hooks/hook';
import { JDtabs, Tab, TabList, TabPanel } from '../src/components/tabs/Tabs';
import JDtypho from '../src/components/typho/Typho';
//@ts-ignore
import MDX from './modal.mdx';
import JDbutton from '../src/components/button/Button';
import {
  Title,
  Primary,
  Description,
  Stories,
  ArgsTable,
  Canvas,
  Source,
} from '@storybook/addon-docs/blocks';

const Template = (args: Partial<IProps>) => {
  const modalHook = useModal(false);
  return (
    <>
      <JDbutton thema="primary" onClick={modalHook.openModal}>
        oepn
      </JDbutton>
      <JDmodal {...modalHook} {...args} />
    </>
  );
};

export const PrimaryStory = Template.bind({});

const args: IProps = {};

PrimaryStory.args = args;

type P = {
  defaultOpen?: boolean;
};

export const ElementHeader: React.FC<P> = ({ defaultOpen }) => {
  const modalHook = useModal(defaultOpen || false);
  return (
    <>
      <JDbutton thema="primary" onClick={modalHook.openModal}>
        헤더 포함
      </JDbutton>
      <JDmodal
        sticky
        foot={
          <div>
            <JDbutton thema="primary" mode="flat">
              확인
            </JDbutton>
            <JDbutton thema="error" mode="flat">
              취소
            </JDbutton>
          </div>
        }
        head={{
          element: (
            <div>
              <JDtypho mb="small" size="h6">
                타이틀 커스텀
              </JDtypho>
              <JDtypho size="small">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                officiis fugit quaerat animi cum autem consectetur unde a
                molestiae aliquid alias quae perferendis, praesentium, omnis
                nihil non odio? Debitis, est.
              </JDtypho>
            </div>
          ),
        }}
        {...modalHook}
      >
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
        content content content content content content content content content
      </JDmodal>
    </>
  );
};

export const WithTab: React.FC<P> = ({ defaultOpen }) => {
  const modalHook = useModal(defaultOpen || false);
  return (
    <>
      <JDbutton thema="primary" onClick={modalHook.openModal}>
        탭 모달
      </JDbutton>
      <JDmodal
        head={{
          title: 'Modal Title',
        }}
        contentWrapStyle={{
          paddingTop: '0px',
        }}
        {...modalHook}
      >
        <JDtabs mb="large">
          <TabList>
            <Tab>바나나</Tab>
            <Tab>사과</Tab>
          </TabList>
          <TabPanel>🍌🍌 Banana Banana Banana Banana Banana Banana</TabPanel>
          <TabPanel>🍎🍎 Apple Apple Apple Apple Apple Apple</TabPanel>
        </JDtabs>
      </JDmodal>
    </>
  );
};

export const Standard: React.FC<P> = ({ defaultOpen }) => {
  const modalHook = useModal(defaultOpen || false);
  return (
    <>
      <JDbutton
        thema="primary"
        onClick={() => {
          modalHook.openModal();
        }}
      >
        기본
      </JDbutton>
      <JDmodal
        head={{
          title: 'Modal Title',
        }}
        {...modalHook}
      >
        content content content content content content content content content
      </JDmodal>
    </>
  );
};

export const InfoPassing: React.FC<P> = ({ defaultOpen }) => {
  type TInfo = {
    name: string;
  };
  const modalHook = useModal<TInfo>(defaultOpen || false, {
    name: '기본값',
  });
  return (
    <>
      <JDbutton
        thema="primary"
        onClick={() => {
          modalHook.openModal({
            name: 'Dog',
          });
        }}
      >
        Open Doggy
      </JDbutton>
      <JDbutton
        thema="primary"
        onClick={() => {
          modalHook.openModal({
            name: '고양이',
          });
        }}
      >
        Open Cat
      </JDbutton>
      <JDmodal {...modalHook}>{modalHook.info?.name}</JDmodal>
    </>
  );
};
export const Loading: React.FC<P> = ({ defaultOpen }) => {
  const modalHook = useModal(defaultOpen || false);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <JDbutton
        thema="primary"
        onClick={() => {
          setLoading(true);
        }}
      >
        loading
      </JDbutton>
      <JDbutton thema="primary" onClick={modalHook.openModal}>
        로딩 모달
      </JDbutton>
      <JDmodal loading={loading} {...modalHook}>
        content content content content content content content content content
      </JDmodal>
    </>
  );
};

export const WithPannel: any = ({ defaultOpen }) => {
  const modalHook = useModal(defaultOpen || false);
  const { openModal } = modalHook;
  return (
    <>
      <JDbutton thema="primary" onClick={openModal}>
        패널 모달
      </JDbutton>
      <JDmodal
        pannel={{
          buttons: [
            {
              label: '111',
            },
            {
              label: '222',
            },
            {
              label: '333',
            },
            {
              label: '444',
            },
            {
              label: '555',
            },
          ],
        }}
        {...modalHook}
      >
        content content content content content content content content content
      </JDmodal>
    </>
  );
};

export default {
  title: '기본/Modal',
  component: PrimaryStory,
  decorators: [story => <div>{story()}</div>],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Modal</Title>
          <Description>소스코드는 가장 아래쪽에서 확인 해주세요.</Description>
          <Description>##UseModal</Description>
          <Description>
            useModal은 모달을 핸들링 할 수 있는 객체를 반환합니다.hook 객체의
            openModal closeModal 을 통해서 외부 버튼에서도 모달을 여닫을 수
            있습니다.
          </Description>
          <Description>##모달에 정보전달</Description>
          <Description>
            UseModal의 Info 를 이용하여 정보를 전달할 수 있습니다. openModal 에
            첫번쨰 인자로 Info를 전달 하면 됩니다. 아래쪽 코드드 확인 해주세요.
          </Description>
          <Primary />
          <Stories />
          Standard
          <Source
            language="tsx"
            code={`
const Standard: React.FC<P> = ({ defaultOpen }) => {
	const modalHook = useModal(defaultOpen || false);
	return (
		<>
		<JDbutton
			onClick={() => {
			modalHook.openModal();
			}}
		>
			기본
		</JDbutton>
		<JDmodal
			head={{
			title: 'Modal Title',
			}}
			{...modalHook}
		>
			content content content content content content content content content
		</JDmodal>
		</>
	);
};
			  `}
          />
          정보전달
          <Source
            language="tsx"
            code={`
const InfoPassing: React.FC<P> = ({ defaultOpen }) => {
	type TInfo = {
		name: string;
	};
	const modalHook = useModal<TInfo>(defaultOpen || false, {
		name: '기본값',
	});
	return (
		<>
		<JDbutton
			thema="primary"
			onClick={() => {
			modalHook.openModal({
				name: 'Dog',
			});
			}}
		>
			Open Doggy
		</JDbutton>
		<JDbutton
			thema="primary"
			onClick={() => {
			modalHook.openModal({
				name: '고양이',
			});
			}}
		>
			Open Cat
		</JDbutton>
		<JDmodal {...modalHook}>{modalHook.info?.name}</JDmodal>
		</>
	);
};
			  `}
          />
        </>
      ),
    },
  },
};
