import React from 'react';
import Modal from '../src/components/modal/Modal';
import JDcontainer from '../src/components/container/Container';
import { useModal } from '../src/hooks/hook';
import { JDtabs, Tab, TabList, TabPanel } from '../src/components/tabs/Tabs';
import JDtypho from '../src/components/typho/Typho';
//@ts-ignore
import MDX from './modal.mdx';
import JDbutton from '../src/components/button/Button';

export default {
	title: 'Modal',
	component: () => {
		const modalHook = useModal(true);
		return <Modal {...modalHook} />;
	},
	parameters: {
		componentSubtitle: '모달',
		docs: {
			page: MDX
		}
	}
};

export const elementHeader = () => {
	const modalHook = useModal(true);
	return (
		<JDcontainer verticalPadding>
			<Modal
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
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse officiis fugit quaerat
								animi cum autem consectetur unde a molestiae aliquid alias quae perferendis,
								praesentium, omnis nihil non odio? Debitis, est.
							</JDtypho>
						</div>
					)
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
			</Modal>
		</JDcontainer>
	);
};

export const withTab = () => {
	const modalHook = useModal(true);
	return (
		<JDcontainer verticalPadding>
			<Modal
				head={{
					title: 'Modal Title'
				}}
				contentWrapStyle={{
					paddingTop: '0px'
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
			</Modal>
		</JDcontainer>
	);
};

export const standard = () => {
	const modalHook = useModal(true);
	return (
		<JDcontainer verticalPadding>
			<Modal
				head={{
					title: 'Modal Title'
				}}
				{...modalHook}
			>
				content content content content content content content content content
			</Modal>
		</JDcontainer>
	);
};

export const loading = () => {
	const modalHook = useModal(true);
	return (
		<JDcontainer verticalPadding>
			<Modal loading {...modalHook}>
				content content content content content content content content content
			</Modal>
		</JDcontainer>
	);
};

export const withPannel = () => {
	const modalHook = useModal(true);
	return (
		<JDcontainer verticalPadding>
			<Modal
				pannel={{
					buttons: [
						{
							label: '111'
						},
						{
							label: '222'
						},
						{
							label: '333'
						},
						{
							label: '444'
						},
						{
							label: '555'
						}
					]
				}}
				{...modalHook}
			>
				content content content content content content content content content
			</Modal>
		</JDcontainer>
	);
};

withTab.story = {
	name: 'with tab'
};
standard.story = {
	name: 'standard'
};
loading.story = {
	name: 'loading'
};
withPannel.story = {
	name: 'with pannel'
};
