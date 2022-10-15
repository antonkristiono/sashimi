import WithSubnavigation from "../nav";
import CaptionCarousel from "../carousel"

export default function LandingLayout({ children }) {
  return (
    <>
      <WithSubnavigation />
      <CaptionCarousel />
      <main>{children}</main>
    </>
  );
}
