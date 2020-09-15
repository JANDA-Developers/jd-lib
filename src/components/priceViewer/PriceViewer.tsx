import React from 'react';
import { arraySum } from '../../utils/elses';
import { autoComma, toNumber } from '../../utils/utils';
import JDtypho from '../typho/Typho';
import JDalign from '../align/Align';
import JDmodal, { JDmodalConfigProps } from '../modal/Modal';
import { IUseModal } from '../../hooks/hook';

export type SubLine = {
  title: string;
  price: number;
  describe?: string;
};

export type PriceLine = {
  title: string;
  price: number;
  sub?: SubLine[];
  describe?: string;
};

export interface ICalculaterProp {
  /** 상품에  대한 정보 */
  priceLine: PriceLine[];
  /** 결과를 보여줄지 결정 */
  shouldShowResult?: boolean;
  /** 마지막라인 */
  lastLine?: PriceLine;
}

export const PriceViewer: React.FC<ICalculaterProp> = ({
  priceLine,
  shouldShowResult = true,
  lastLine,
}) => {
  const total = arraySum(
    priceLine.map(
      p =>
        toNumber(p.price) +
        arraySum(p.sub?.map(subp => toNumber(subp.price)) || [])
    )
  );

  return (
    <div className="calculateViewer">
      {priceLine.map((p, i) => (
        <div key={i + 'priceLine'} className="calculateViewer__history">
          <div className="calculateViewer__historyInner">
            <JDtypho>
              <JDalign
                flex={{
                  between: true,
                }}
                className="calculateViewer__mainLine"
              >
                <span className="calculateViewer__mainLiTitle">{p.title}</span>
                <span className="calculateViewer__mainLiDesc">
                  {p.describe}
                </span>
                <span className="calculateViewer__mainLiPrice">
                  {autoComma(p.price)}
                </span>
              </JDalign>
            </JDtypho>
            {p.sub?.map((subp, i) => (
              <div key={'priceSub' + i} className="calculateViewer__subDetail">
                {subp.price ? (
                  <JDalign
                    className="calculateViewer__subLine"
                    flex={{ between: true, vCenter: true }}
                  >
                    <div className="calculateViewer__subTitle">
                      └{subp.title}
                    </div>
                    {subp.describe && (
                      <JDtypho className="calculateViewer__describe">
                        {subp.describe}
                      </JDtypho>
                    )}
                    <JDtypho mr="no">+{autoComma(subp.price)}</JDtypho>
                  </JDalign>
                ) : (
                  <JDalign
                    flex={{
                      between: true,
                    }}
                    className="calculateViewer__subTitle"
                  >
                    └{subp.title} 무료
                  </JDalign>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {shouldShowResult && (
        <JDalign
          flex={{
            between: true,
          }}
          className="calculateViewer__result"
        >
          <JDtypho size="h6" mb="no">
            최종가
          </JDtypho>
          <JDtypho color={'error'} size="h6" mb="no">
            {autoComma(total)}
          </JDtypho>
        </JDalign>
      )}
      {lastLine && (
        <JDalign
          flex={{
            between: true,
          }}
          className="calculateViewer__result"
        >
          <JDtypho size="h6" mb="no">
            {lastLine.title}
          </JDtypho>
          <JDtypho size="h6" mb="no">
            {lastLine.describe}
          </JDtypho>
          <JDtypho size="h6" mb="no">
            {lastLine.price}
          </JDtypho>
        </JDalign>
      )}
    </div>
  );
};

interface IProp extends ICalculaterProp {
  modalHook: IUseModal<ICalculaterProp>;
  modalProp: JDmodalConfigProps;
}

export const CalculateViewerModal: React.FC<IProp> = ({
  modalHook,
  modalProp,
  ...props
}) => {
  return (
    <JDmodal {...modalProp} {...modalHook}>
      <PriceViewer {...props} {...modalHook.info} />
    </JDmodal>
  );
};

export default PriceViewer;
