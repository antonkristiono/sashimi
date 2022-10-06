import WithSubnavigation from "../nav";

export default function LandingLayout({ children }) {
  return (
    <>
      <WithSubnavigation />
      <main>{children}</main>
    </>
  );
}
