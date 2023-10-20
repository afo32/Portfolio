import { Button } from "../components/WorksPage/Button/Button";
import { CV } from "../components/WorksPage/CV/CV";
import { AppData } from "../components/WorksPage/CV/AppsData/AppData";

export function Work() {
  return (
    <div>
      <Button />
      <CV>
        <AppData />
      </CV>
    </div>
  );
}