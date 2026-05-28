import { MotionProvider } from "@/components/animations";
import { PreloaderGate } from "@/components/organisms/Preloader";
import { BankingLandingTemplate } from "@/components/templates/BankingLandingTemplate";

export default function HomePage() {
  return (
    <PreloaderGate>
      <MotionProvider>
        <BankingLandingTemplate />
      </MotionProvider>
    </PreloaderGate>
  );
}
