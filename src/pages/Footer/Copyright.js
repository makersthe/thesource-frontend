import React from 'react'
import { css } from 'emotion'

const Copyright = () => {
  return (
    <div
      className={css`
        max-width: calc(800px - (30px * 2));
        margin-left: auto;
        margin-right: auto;
        padding-left: 15px;
        padding-right: 15px;
      `}
    >
      <div>
        <h1
          className={css`
            display: flex;
            align-content: center;
            justify-content: center;
            margin-top: 15px;
            font-size: 2rem;
            font-weight: bold;
          `}
        >
          디소스 저작권 정책
        </h1>
        <p>
          본 정책의 목적은 ‘디소스’ 내에서 이용되는 콘텐츠의 저작권들이
          무단사용,변조등으로 사용되어 플랫폼 유저들에게 피해를 끼치는 사례를
          방지하기 위함입니다. 콘텐츠 저작권 거래 플랫폼 디소스에서 제공하는
          모든 자료는 저작권법에 의하여 보호받는 저작물로서 이용자는 아래의
          저작권 보호 정책을 준수하여야 합니다. <hr />
        </p>
        <p>
          <strong>
            1. 저작권법 제 24조 2에 따라 디소스에서 제공하는 무료 콘텐츠
            저작권의 경우 별도의 이용허락 및 구매 없이 무료로 자유롭게
            이용하셔도 됩니다.
          </strong>
          <br />
          <strong>
            2. 디소스에서는 유료 콘텐츠들도 제공되고 있습니다. 각 콘텐츠 별
            가격정책에 따라 결제 후 이용이 가능합니다. 적정한 가격을 통해 결제를
            진행하실 경우 이는 저작권자와 민법상 저작권 이용에 대한 계약을 맺을
            것으로 간주하며 계약에 관련된 데이터는 디소스 서버내에 저장되어
            법적인 효력이 발생됩니다.
          </strong>
          <br />
          <strong>
            3. 위의 사항과 다르게 녹화, 녹음 등 불법적으로 콘텐츠를 탈취하여
            무단변경, 복제 및 배포, 개작등을 진행할경우 관련법에 의거 법적
            처벌을 받을 수 있음을 알려드립니다.
          </strong>
        </p>
      </div>
    </div>
  )
}

export default Copyright
