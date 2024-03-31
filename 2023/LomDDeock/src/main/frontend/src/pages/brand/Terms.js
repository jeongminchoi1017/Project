import '../../css/brand/terms.css';
import Icon from '@mdi/react';
import { mdiAccountLock, mdiCashMultiple, mdiMapMarkerRadius, mdiShoppingOutline } from '@mdi/js';
function Terms() {
    return (
        <section id="terms">
            <div id="termsList">
                <h2>서비스 이용약관</h2>
                <div>
                    <ul>
                        <li><a href="#"><Icon path={mdiAccountLock} size={3} />개인정보 처리</a></li>
                        <li><a href="#"><Icon path={mdiMapMarkerRadius} size={3} />위치정보 약관</a></li>
                        <li><a href="#"><Icon path={mdiCashMultiple} size={3} />전자금융거래</a></li>
                        <li><a href="#"><Icon path={mdiShoppingOutline} size={3} />구매회원 약관</a></li>
                    </ul>
                </div>
            </div>
            <div className="termsContent">
                <span id="termsSort">전자금융거래 약관</span>
                <article>
                    <div>
                        <strong>제 1조(목적)</strong>
                        <p>
                            본 약관은 주식회사 롬복떡볶이가 제공하는 전자금융거래서비스를 다음 각 호의 인터넷사이트 등(이하 ‘인
                            터넷사이트’라 합니다)을 통하여 가입한 이용자가 온라인 또는 오프라인으로 이용하는 경우, 회사와 이용자
                            간 전자금융거래의 법률관계를 정함에 그 목적이 있습니다.
                        </p>
                    </div>
                    <div>
                        <strong>제 2조(약관의 명시, 효력과 개정)</strong>
                        <p>2조 약관 내용</p>
                    </div>
                    <div>
                        <strong>제 3조</strong>
                        <p>3조 약관 내용</p>
                    </div>
                </article>
            </div>
        </section>
    );
}
export default Terms;