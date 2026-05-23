import type { PropsWithChildren } from "react";
import Magnet from "./Magnet";

// Alias for prompt naming: Magnetic/Magnet
export default function Magnetic(
  props: PropsWithChildren<{ className?: string }>,
) {
  return <Magnet className={props.className}>{props.children}</Magnet>;
}
