import { CodePreview } from "../../../../components/vscode/CodePreview";
import { getCodeBlockFromNotion } from "../../../../libVscode/notion-client";
import { getNotionPagesId } from "../../../../libVscode/vercel-edge-config";
import shiki from "shiki";

export const revalidate = 1800; // revalidate every 30 minutes
export const metadata = {
  title: "Gaming Setup",
};
const content = `
#Gaming Setup

Mouse: Mouse Gamer Redragon Cobra, Chroma RGB
Teclado: Teclado Redragon Mecânico Gamer RGB Kumara
Monitor: Monitor Gamer Bluecase 144hz
Headset: Headset Gamer HyperX Cloud Stinger
`;
export default async function GamingSetup() {
  /*   const { setup_gaming } = await getNotionPagesId();
  const { content } = await getCodeBlockFromNotion(setup_gaming); */

  const highlighter = await shiki.getHighlighter({
    theme: "rose-pine-moon",
  });

  const code = highlighter.codeToHtml(content, { lang: "md" });

  return <CodePreview code={code} />;
}
