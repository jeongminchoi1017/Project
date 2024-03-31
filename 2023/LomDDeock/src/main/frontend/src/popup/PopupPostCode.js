import React from 'react';
import DaumPostcode from "react-daum-postcode";

const PopupPostCode = (props) => {
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';
        let zonecode = data.zonecode;
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        props.onClose({addr: fullAddress, zip: zonecode})
    }

    const postCodeStyle = {
        display: "block",
        width: "600px",
        height: "600px",
        padding: "7px",
      };
    return(
        <div style={{position: 'fixed', top: '10%', left: '30%', zIndex: '99'}}>
            {/*<button type='button' onClick={() => {props.onClose()}} className='postCode_btn' style={{float: 'right', backgroundColor: '#dc3545', padding: '6px 12px', border: 'none', borderRadius: '5px'}}>닫기</button>*/}
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
        </div>
    )
}

export default PopupPostCode;