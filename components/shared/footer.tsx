import { PERSONAL_INFO_TERMS_PAGE, SERVICE_TERMS_PAGE } from "@/constants/path";
import {
  BUSINESS_NUMBER,
  CEO_INFO,
  CEO_PHONE,
  COPYRIGHT,
  LOCATION,
  REPORT_NUMBER,
  SERVICE_NAME,
  SERVICE_NAME_KR,
} from "@/constants/service";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const FFC_URL = `http://www.ftc.go.kr/bizCommPop.do?wrkr_no=5865100904`; // 공정거래 위원회 통신판매업 신고번호
  return (
    <div className="inset-x-0 -ml-5 w-screen bg-white px-5 pb-[34px] pt-[53px] web:absolute web:ml-0 web:min-w-[100vw] web:px-0 web:py-[53px]">
      <div className="mx-auto max-w-[600px]">
        <div className="flex flex-col gap-3">
          <Image
            src="/png/character/logo.png"
            width={48}
            height={58}
            alt={SERVICE_NAME}
          />
          <div className="flex flex-col gap-6 button-s-cta">
            <div>
              <p>{SERVICE_NAME_KR}</p>
              <p>{CEO_INFO.name}</p>
            </div>
            <div className="caption">
              <p>{BUSINESS_NUMBER}</p>
              <div className="flex items-start gap-1">
                <p>{REPORT_NUMBER}</p>
                <Link
                  className="mt-[-2px] rounded-md border px-1 py-0"
                  href={FFC_URL}
                >
                  정보 조회
                </Link>
              </div>
              <p>{LOCATION}</p>
              <p>{CEO_PHONE}</p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden py-6">
          <hr className="h-px w-full bg-[#F6F6F6]" />
        </div>
        <div className="flex flex-col gap-2 caption web:flex-row-reverse web:items-center web:justify-between">
          <div className="flex h-[22px] items-center gap-11">
            <Link
              target="_blank"
              className="button-s-cta"
              href={PERSONAL_INFO_TERMS_PAGE}
            >
              개인정보처리방침
            </Link>
            <Link target="_blank" href={SERVICE_TERMS_PAGE}>
              서비스 이용약관
            </Link>
          </div>
          <p className="text-gray-400">{COPYRIGHT}</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
