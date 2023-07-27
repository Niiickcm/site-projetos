import { GistContent } from "../../../../components/vscode/GistContent";

export const metadata = {
  title: "VSCode Settings",
};

export default async function Settings() {
  return (
    // @ts-ignore
    <GistContent gistUrl="https://gist.githubusercontent.com/diego3g/b1b189063d21b96d6144ca896755be64/raw/765a17e8c439d25b1866c1322437a6da2b9e4be8/settings.json" />
  );
}
