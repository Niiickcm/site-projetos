import { CodePreview } from "../../../../components/vscode/CodePreview";
import { getCodeBlockFromNotion } from "../../../../libVscode/notion-client";
import { getNotionPagesId } from "../../../../libVscode/vercel-edge-config";
import shiki from "shiki";

export const revalidate = 1800; // revalidate every 30 minutes
export const metadata = {
  title: "Dev Setup",
};
const content = `
#Dev Setup
`;
export default async function DevSetup() {
  /*  const { setup_dev } = await getNotionPagesId();
  const { content } = await getCodeBlockFromNotion(setup_dev); */

  const highlighter = await shiki.getHighlighter({
    theme: "rose-pine-moon",
  });

  const code = highlighter.codeToHtml(content, { lang: "md" });

  return <CodePreview code={code} />;
}
