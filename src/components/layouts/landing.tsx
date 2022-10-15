import React, {ReactNode} from 'react'
import WithSubnavigation from "../nav";
import CaptionCarousel from "../carousel"

interface Props {
  children?: ReactNode
}

export default function LandingLayout({ children, ...props }: Props) {
  return (
    <>
      <WithSubnavigation />
      <CaptionCarousel />
      <main {...props}>{children}</main>
    </>
  );
}
