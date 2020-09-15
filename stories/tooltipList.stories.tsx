import React from 'react';
import TooltipList, {
  TooltipButtons,
} from '../src/components/tooltipList/TooltipList';
import JDcontainer from '../src/components/container/Container';
import JDalign from '../src/components/align/Align';
import JDbutton from '../src/components/button/Button';

export default {
  title: '응용/TooltipList',
  component: <TooltipList />,
  parameters: {
    docs: {
      page: () => (
        <>
          해당 컴포넌트는 DropDown 컴포넌트로 대체되었습니다. 가급적 사용하지
          마세요.
        </>
      ),
    },
  },
};

export const standard = () => {
  return (
    <JDcontainer verticalPadding>
      <JDalign flex>
        <div data-tip data-place="bottom" data-for="menuId" data-event="click">
          <JDbutton label="열기" />
        </div>
      </JDalign>
      <TooltipList floatBottom>
        <TooltipButtons
          Buttons={[
            {
              thema: 'primary',
              onClick: () => {},
              label: 'Apple',
            },
            {
              thema: 'primary',
              onClick: () => {},
              label: 'peer',
            },
            {
              thema: 'primary',
              onClick: () => {},
              label: 'banana',
            },
          ]}
        />
      </TooltipList>
    </JDcontainer>
  );
};

standard.story = {
  name: 'standard',
};
