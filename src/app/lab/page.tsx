import LabHomeView from "@/components/lab/LabHomeView";
import { labCategories } from "@/content/lab/experiments";

export default function LabGalleryPage() {
  return <LabHomeView categories={labCategories} />;
}
