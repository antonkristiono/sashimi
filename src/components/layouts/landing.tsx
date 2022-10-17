import React, {ReactNode} from 'react'
import WithSubnavigation from "../nav";
/* import CaptionCarousel from "../carousel" */
import SplitScreen from "../heroSplit"
import SmallWithSocial from '../footer'

interface Props {
  children?: ReactNode
}

export default function LandingLayout({ children, ...props }: Props) {
  return (
    <>
      <WithSubnavigation />
      {/* <CaptionCarousel /> */}
      <SplitScreen />
      <main {...props}>{children}</main>
      <SmallWithSocial />
    </>
  );
}
