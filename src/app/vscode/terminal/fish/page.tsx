import { CodePreview } from "../../../../components/vscode/CodePreview";
import { getCodeBlockFromNotion } from "../../../../libVscode/notion-client";
import { getNotionPagesId } from "../../../../libVscode/vercel-edge-config";
import shiki from "shiki";

export const revalidate = 1800; // revalidate every 30 minutes
export const metadata = {
  title: "Fish",
};

const content = `
#Fish


`;
export default async function FishConfig() {
  /*  const { terminal_fish } = await getNotionPagesId();
  const { content } = await getCodeBlockFromNotion(terminal_fish); */

  const highlighter = await shiki.getHighlighter({
    theme: "rose-pine-moon",
  });

  const code = highlighter.codeToHtml(content, { lang: "fish" });

  return <CodePreview code={code} raw={content} />;
}
