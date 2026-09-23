interface BrandLogoProps {
  className?: string;
  nameClassName?: string;
  showName?: boolean;
}

/** Large white mark — used on dark surfaces like the login welcome panel */
export function BrandMark({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="69"
      height="95"
      viewBox="0 0 69 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M30.6116 14.6984H38.0486C38.3245 16.2685 37.6561 22.8037 38.038 23.1963C38.42 23.5888 45.91 22.8992 47.5968 23.1857V28.5008C30.7602 24.5436 38.0699 46.9183 50.1536 46.4727C62.2374 46.0271 62.6406 32.7976 59.0441 23.9495C50.0051 1.69159 16.8834 3.26174 9.1706 25.6152C2.50807 44.8919 24.0128 66.8847 34.3354 81.5253C36.1496 81.5889 47.6499 62.0681 50.1855 60.254C52.2967 58.7369 58.5136 58.4716 61.3993 57.1561L34.3461 94.2562C17.329 71.436 -18.7951 34.9936 12.0457 8.3223C33.3276 -10.0951 67.7542 3.9089 68.8788 32.1716C69.5471 49.1887 53.4106 60.5935 38.7807 50.5997C36.5103 49.0507 30.6435 41.7941 30.6435 39.6404V14.709L30.6116 14.6984Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Compact purple mark — used in navbar and footer */
export function BrandMarkCompact({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="25"
      height="34"
      viewBox="0 0 25 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M11.0422 5.30198H13.7249C13.8244 5.86837 13.5833 8.22574 13.721 8.36734C13.8588 8.50894 16.5606 8.26019 17.1691 8.36351V10.2808C11.0958 8.85336 13.7325 16.9243 18.0914 16.7636C22.4502 16.6029 22.5956 11.8307 21.2983 8.63905C18.0378 0.61019 6.09018 1.17657 3.30801 9.23988C0.904709 16.1934 8.66186 24.1266 12.3854 29.4077C13.0398 29.4307 17.1882 22.3892 18.1029 21.7348C18.8644 21.1875 21.107 21.0918 22.1479 20.6173L12.3893 34C6.25091 25.7683 -6.77973 12.6229 4.3451 3.00201C12.0219 -3.64151 24.4402 1.41001 24.8459 11.6049C25.087 17.7433 19.2662 21.8572 13.9889 18.2523C13.17 17.6935 11.0537 15.0759 11.0537 14.2991V5.30581L11.0422 5.30198Z"
        fill="#4F008C"
      />
    </svg>
  );
}

function BrandLogo({
  className = '',
  nameClassName = 'text-[22px] font-extrabold tracking-[-0.06em] text-[#4f008c]',
  showName = true,
}: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <BrandMarkCompact className="h-[34px] w-[25px] shrink-0" />
      {showName && <span className={nameClassName}>Nestrix</span>}
    </span>
  );
}

export default BrandLogo;
