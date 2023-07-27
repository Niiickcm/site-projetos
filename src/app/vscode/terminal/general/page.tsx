import { CodePreview } from "../../../../components/vscode/CodePreview";
import { getCodeBlockFromNotion } from "../../../../libVscode/notion-client";
import { getNotionPagesId } from "../../../../libVscode/vercel-edge-config";
import shiki from "shiki";

export const revalidate = 1800; // revalidate every 30 minutes
export const metadata = {
  title: "Terminal",
};
const content = `
#General


`;
export default async function General() {
  /*  const { terminal_general } = await getNotionPagesId();
  console.log("terminal_general", terminal_general);
  const { content } = await getCodeBlockFromNotion(terminal_general); */

  const highlighter = await shiki.getHighlighter({
    theme: "rose-pine-moon",
  });

  const code = highlighter.codeToHtml(content, { lang: "md" });

  return <CodePreview code={code} />;
}
