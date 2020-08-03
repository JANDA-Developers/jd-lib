import React, { useState } from 'react';
import JDcontainer from '../container/Container';

const options = [
  {
    label: '오전1시',
    value: 1
  },
  {
    label: '오전2시',
    value: 2
  },
  {
    label: '오전3시',
    value: 3
  }
];

export const standard = () => {
  const selectBoxHook = useSelect(options[0], options);

  return (
    <JDcontainer
      verticalPadding
      style={{
        minHeight: '31.25rem'
      }}
    >
      <div>
        <SelectBox mode="underline" label="size" {...selectBoxHook} />
      </div>
      <div>
        <SelectBox mode="underline" size="small" labelPosition="left" label="size" {...selectBoxHook} />
      </div>
      <div>
        <SelectBox labelPosition="right" size="small" label="size" {...selectBoxHook} />
      </div>
      <div>
        <SelectBox nativeOptions={false} label="No-Native" {...selectBoxHook} />
      </div>
      <div>
        <SelectBox require label="asdasd" {...selectBoxHook} />
      </div>
      <div>
        <SelectBox require label="asdasd" {...selectBoxHook2} />
      </div>
    </JDcontainer>
  );
};

