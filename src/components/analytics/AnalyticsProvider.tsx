import GoogleAnalytics from "./GoogleAnalytics";
import Clarity from "./Clarity";

export default function AnalyticsProvider() {
  return (
    <>
      <GoogleAnalytics />
      <Clarity />
    </>
  );
}
