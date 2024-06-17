import BottomPanel from "@/components/bottom-panel";
import { DrawerAlert } from "@/components/drawers/drawer-alert";
import { DrawerSingle } from "@/components/drawers/drawer-single";

type Props = {};

export default function Homepage({}: Props) {
  return (
    <>
      <DrawerAlert />
      <BottomPanel>
        <div className="ml-auto">
          <DrawerSingle />
        </div>
      </BottomPanel>
    </>
  );
}
