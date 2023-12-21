import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedIndex } from 'store';
// import './YourComponentStyles.css'; // 스타일 파일을 가져와야 합니다.

const TextContents = ({ items }) => {
  const [localItems, setLocalItems] = useState(null);
  const dispatch =  useDispatch();

  useEffect(() => {
    setLocalItems(items);
  }, [items]);
 
  const checkIndex = (index) => {
   dispatch(setSelectedIndex(index));
  }
  return (
    <div className="text-layout">
      <div className="w-full blex-between px-4 lg:px-12 pt-4 lg:pt-10">
        <div className="text-white text-lg lg:text-xl">RELEASE ELSE</div>
        <div className="text-white text-lg lg:text-xl">(2023)</div>
      </div>

      {/* release else info */}
      <div className="release-info">
        <div className="w-full lg:w-1/2 blex-y-between h-10/12 lg:h-2/3">
          {/* description */}
          <div className="blex-left w-full overflow-hidden description-wrapper">
            <div className="main-desc desc font-ralewary">
              You are cordially invited to attend the first chapter of Else's networking event 'Release'
            </div>
            <div className="desc-a desc">
              'Release' celebrates the establishment of Else in a form of a networking event, held at 'People the
              Terrace'.
            </div>
            <div className="desc-b desc">
              It is our great pleasure to invite friends, clients, and professionals from diverse areas
            </div>
            <div className="desc-c desc">
              including finance, consulting, fashion, F&B, etc. to join us for the beginning of a very long journey to
              come.
            </div>
            <div className="desc-d desc">
              Please come and enjoy the selection of food and beverages which will be provided throughout the event,
            </div>
            <div className="desc-e desc">as well as a special raffle at the end of the night.</div>
          </div>

          {/* party info */}
          <div className="w-full blex-left text-white party-info">
            <div className="w-full blex-left font-semi-bold text-sm lg:text-xl">PARTY INFO</div>
            <div className="w-full lg:w-9/10 blex-left items-start mb-2 lg:mb-4 lg:mb-40 pl-0 lg:pl-4 pt-2 lg:pt-4 flex-no-wrap">
              <div className="blex-left w-1/3">
                <div className="info-title">HOST</div>
                <div className="blex-left w-full text-xs-x lg:text-sm">LEO & HANS</div>
              </div>
              <div className="blex-left w-2/5 lg:w-1/3">
                <div className="info-title">DATE</div>
                <div className="blex-left w-full text-xs-x lg:text-sm">
                  2023. 4. 7, 07 : 00 PM ~
                  <br />
                  2023. 4. 7, 12 : 00 PM
                </div>
              </div>
              <div className="blex-left w-1/3">
                <div className="info-title">LOCATION</div>
                <div className="blex-left w-full text-xs-x lg:text-sm">
                  서울 강남구 도산대로81길 13,
                  <br className="hidden lg:block" />
                  청담동 118-19
                </div>
              </div>
            </div>
            <div className="w-full lg:w-9/10 blex-left mb-4 lg:mb-40 pl-0 lg:pl-4 pt-0 lg:pt-4 flex-no-wrap">
              <div className="blex-left w-1/3">
                <div className="info-title">ENTRY FEE</div>
                <div className="blex-left w-full text-xs-x lg:text-sm">50,000원</div>
              </div>
              <div className="blex-left w-2/5 lg:w-1/3">
                <div className="info-title">DRESS CODED</div>
                <div className="blex-left w-full text-xs-x lg:text-sm">POINT COLOR : RED</div>
              </div>
              <div className="blex-left w-1/3">
                <div className="info-title">MOBILE</div>
                <div className="blex-left w-full text-xs-x lg:text-sm">010. 6313. 9303</div>
              </div>
            </div>
            <div className="w-full blex-left text-white text-xs text-3xs pl-0 lg:pl-4">
              * ‘RELEASE ELSE’ 초대장이 없을 시, 입장이 불가능합니다.
            </div>
          </div>
        </div>
      </div>

      <div style={{flexWrap : 'nowrap'}} className="blex-left w-full absolute bottom-0 flex-nowrap whitespace-nowrap overflow-x-scroll overflow-y-hidden">
        {localItems &&
          localItems.map((item, index) => (
            <div key={index} className="item" onClick={() => checkIndex(index)}>
              <img src={item.image} alt="image" className="w-full" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TextContents;
