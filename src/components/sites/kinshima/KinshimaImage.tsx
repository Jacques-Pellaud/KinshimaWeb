import Image, { type ImageProps } from "next/image";
import { assetUrl } from "@/lib/paths";

export function KinshimaImage({ src, alt, ...props }: ImageProps) {
  const resolvedSrc = typeof src === "string" ? assetUrl(src) : src;
  return <Image src={resolvedSrc} alt={alt} unoptimized {...props} />;
}
