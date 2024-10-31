import CookieContentPopup from "@/components/CookieContentPopup";
import If from "@/components/If";

export default function Home() {
  const cookieIsAccepted = true;

  return (
    <div>
      <If condition={cookieIsAccepted}>
        <CookieContentPopup />
      </If>
    </div>
  );
}
