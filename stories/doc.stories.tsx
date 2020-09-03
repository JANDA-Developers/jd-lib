import React from 'react';
import JDdoc, { DocHeader, DocSection } from '../src/components/doc/Doc';
// @ts-ignore
import DocMdx from './Doc.mdx';

export default {
	title: 'DOC',
	component: () => <JDdoc />,
	parameters: {
		docs: {
			page: DocMdx
		}
	}
};

export const standard = () => {
	return (
		<JDdoc>
			<DocHeader>DOC header</DocHeader>
			<DocSection>
				DOCsection Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo expedita perspiciatis
				quidem et ut dolorem reiciendis vel neque optio nihil, veniam fugit, in ipsa obcaecati iusto. Cum,
				dolorum qui. Nostrum corporis obcaecati quam voluptas provident vel pariatur. Officiis, enim
				exercitationem sed quisquam dolorum minima dicta esse soluta laborum nulla sint corrupti earum impedit
				corporis praesentium reiciendis? A, doloribus voluptatibus. Rerum eum ut dolore, commodi tempore vero
				suscipit delectus neque dolorum? Id sed aut magnam aliquid, fugit qui, incidunt ut nemo asperiores et
				quidem. Est illum unde corrupti illo aut! Dicta officiis eligendi, ratione totam error deserunt. Quia
				rem minima vero, ducimus voluptatum officia atque inventore reprehenderit eveniet quo, reiciendis ad
				consectetur aspernatur consequatur qui repudiandae voluptate maxime ipsum mollitia. Dignissimos debitis
				autem voluptates, rerum laboriosam fugiat nisi at, consequuntur inventore amet harum similique
				molestias. Aliquid, reiciendis, necessitatibus at laboriosam, enim tempora neque libero odio omnis
				eveniet quidem. Alias, natus.
			</DocSection>
			<DocSection>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias unde nemo eveniet dolores. Magni
				asperiores, corporis ullam commodi natus quasi explicabo eum cumque, reprehenderit voluptatem ipsam
				reiciendis laudantium, ab provident. Nisi temporibus quod, perferendis optio laborum dignissimos aut,
				unde expedita et id necessitatibus qui dolorum iste quo, praesentium autem facilis doloremque incidunt
				nemo commodi veritatis nihil ab molestias sunt! Non. Labore, quibusdam commodi fugit, doloribus cumque
				voluptates eligendi illum aperiam velit ab officia qui, quam sapiente repellendus consequatur eum. Natus
				cum cumque ex voluptatibus hic! Odit similique ex excepturi repellendus! Iure, aliquam? Praesentium quos
				ad officiis blanditiis nobis! Dolore, rem nesciunt voluptate doloremque voluptatem magnam laboriosam,
				non quasi eligendi tenetur quae. Nisi quas quo eveniet atque id iure non minima! A consequuntur iste
				fugiat ipsum dicta, quos quas quo, dignissimos aspernatur odio recusandae ratione voluptate porro
				tempora nostrum. Ipsam eum mollitia debitis fugit commodi maxime, id repudiandae vel suscipit nam.
			</DocSection>
		</JDdoc>
	);
};

standard.story = {
	name: 'standard'
};
