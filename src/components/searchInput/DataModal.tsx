import React, { forwardRef } from "react";
import { TElements, IDiv } from "../../types/interface";
import JDtypho from "../typho/Typho";
import $ from "jquery";
import { isEmpty } from "../../utils/utils";
import classNames from "classnames";
import Align from "../align/Align";
import { removeSpecial } from "../../utils/autoFormat";

// 리스트에 보여줄 데이터를 API함
export interface ISearchViewData {
  id: string;
  title: string;
  describe?: string;
  tag?: string;
}

interface Ilangs {
  noMatchedMessage: (text: string) => TElements;
}

const DEFUALT_LANGS: Ilangs = {
  noMatchedMessage: (text) => (
    <JDtypho size="small">
      <Align flex={{}}>
        <span>
          검색어 <JDtypho weight={600}> "{text}" </JDtypho>에 관한 결과가
          없습니다.
        </span>
      </Align>
    </JDtypho>
  ),
};

export interface IDateModalProps extends IDiv {
  value?: string;
  dataList?: Array<ISearchViewData>;
  head?: TElements;
  langs?: Ilangs;
  maxModalBodyHeight?: number;
  foot?: TElements;
  onSelectData: (data: ISearchViewData) => any;
  loading?: boolean;
}

export const DataModal = forwardRef<HTMLDivElement, IDateModalProps>(
  (
    {
      foot,
      dataList,
      head,
      onSelectData,
      value,
      langs = DEFUALT_LANGS,
      maxModalBodyHeight,
      loading,
      className,
      ...props
    },
    ref
  ) => {
    if (!value || typeof value !== "string") {
      return (
        <div
          style={{
            position: "absolute",
          }}
        />
      );
    }

    if (typeof value !== "string") {
      alert(value);
      alert(typeof value);
    }

    const haveData = !isEmpty(dataList);
    const words = value.trim().split(" ");
    const regax = RegExp(`${removeSpecial(words.join("|"))}`, "g");

    const classes = classNames("dataModal", className, {
      "dataModal--empty": !haveData,
    });

    const hlilighter = (text: string) => {
      let index = text.search(regax);
      let end = index + 50;
      let start = index - 50;

      if (start < 0) {
        end = end - start;
        start = 0;
      }

      let cuttedValue = text.slice(start, end);

      if (index > 50) {
        cuttedValue = "..." + cuttedValue;
      }

      if (text.length - index > 50) {
        cuttedValue = cuttedValue + "...";
      }

      if (index < 0) return cuttedValue;

      const replaced = cuttedValue.replace(
        regax,
        (str: string) => "@#" + str + "@"
      );

      const splited = replaced.split("@");

      return splited.map((inValue, i) => {
        const isHilight = inValue[0] === "#";
        if (isHilight)
          return (
            <span key={i} className="dataModal__hilight">
              {inValue.replace("#", "")}
            </span>
          );
        else return inValue;
      });
    };

    return (
      <div className={classes} {...props}>
        {head && <div className="dataModal__head">{head}</div>}
        <div
          ref={ref}
          style={{
            maxHeight: maxModalBodyHeight,
          }}
          className="dataModal__body"
        >
          {haveData ? (
            dataList!.map((d) => {
              const { id, title, describe, tag } = d;
              return (
                <div
                  id={id}
                  onTouchStart={() => {}}
                  onMouseDown={() => {
                    onSelectData(d);
                  }}
                  onMouseEnter={(e) => {
                    const selectedClass = "dataModal__li--selected";
                    $("." + selectedClass).removeClass(selectedClass);
                    $(e.currentTarget).addClass(selectedClass);
                  }}
                  className="dataModal__li"
                >
                  <JDtypho
                    weight={100}
                    size="small"
                    className="dataModal__tags"
                  >
                    {hlilighter(tag || "")}
                  </JDtypho>
                  <div className="dataModal__contents">
                    <JDtypho
                      mb="normal"
                      weight={600}
                      className="dataModal__title"
                    >
                      {hlilighter(title)}
                    </JDtypho>
                    <JDtypho
                      size="small"
                      className="dataModal__describ"
                      weight={100}
                    >
                      {hlilighter(describe || "")}
                    </JDtypho>
                  </div>
                </div>
              );
            })
          ) : (
            <div>{langs.noMatchedMessage(value)}</div>
          )}
        </div>
        {foot && <div className="dataModal__foot">{foot}</div>}
      </div>
    );
  }
);

export default React.memo(DataModal, (_, { loading }) => {
  return loading || false;
});
