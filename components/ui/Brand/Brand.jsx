import Image from "next/image";

const Brand = ({ ...props }) => (
  <Image src="/hitalker.svg" alt="HiTalker logo" {...props} width={110} height={50} priority />
);
export default Brand;
