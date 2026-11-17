import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KinshimaSiteFrame } from "@/components/sites/kinshima/KinshimaChrome";
import { KinshimaSubpage } from "@/components/sites/kinshima/KinshimaSubpages";
import { kinshimaPageTitles, kinshimaRoutes } from "@/components/sites/kinshima/kinshima-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return kinshimaRoutes.map((route) => ({ slug: route.slice(1).split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = decodeURIComponent(`/${slug.join("/")}`);
  return { title: kinshimaPageTitles[route] ?? "Kinshima" };
}

export default async function KinshimaSubpageRoute({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const route = decodeURIComponent(`/${slug.join("/")}`);
  if (!kinshimaPageTitles[route]) notFound();

  return <KinshimaSiteFrame><KinshimaSubpage route={route} /></KinshimaSiteFrame>;
}
