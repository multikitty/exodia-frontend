import { SVGProps } from 'react';

export default function Winner({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.4277 15C9.11403 15 6.42773 12.3137 6.42773 9V3.44444C6.42773 3.0306 6.42773 2.82367 6.48804 2.65798C6.58914 2.38021 6.80795 2.16141 7.08571 2.06031C7.25141 2 7.45833 2 7.87218 2H16.9833C17.3971 2 17.6041 2 17.7698 2.06031C18.0475 2.16141 18.2663 2.38021 18.3674 2.65798C18.4277 2.82367 18.4277 3.0306 18.4277 3.44444V9C18.4277 12.3137 15.7414 15 12.4277 15ZM12.4277 15V18M18.4277 4H20.9277C21.3937 4 21.6266 4 21.8104 4.07612C22.0554 4.17761 22.2501 4.37229 22.3516 4.61732C22.4277 4.80109 22.4277 5.03406 22.4277 5.5V6C22.4277 6.92997 22.4277 7.39496 22.3255 7.77646C22.0481 8.81173 21.2395 9.62038 20.2042 9.89778C19.8227 10 19.3577 10 18.4277 10M6.42773 4H3.92773C3.46179 4 3.22882 4 3.04505 4.07612C2.80002 4.17761 2.60535 4.37229 2.50385 4.61732C2.42773 4.80109 2.42773 5.03406 2.42773 5.5V6C2.42773 6.92997 2.42773 7.39496 2.52996 7.77646C2.80736 8.81173 3.616 9.62038 4.65128 9.89778C5.03278 10 5.49776 10 6.42773 10M7.87218 22H16.9833C17.2287 22 17.4277 21.801 17.4277 21.5556C17.4277 19.5919 15.8359 18 13.8722 18H10.9833C9.01961 18 7.42773 19.5919 7.42773 21.5556C7.42773 21.801 7.62672 22 7.87218 22Z"
        stroke="#6B55FD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
