import {
  Code2,
  Cog,
  Cpu,
  FileJson,
  Film,
  Joystick,
  MoreHorizontal,
  Terminal,
} from "lucide-react";
import { OpenFilesSubMenu } from "../OpenFilesTabs/OpenFilesSubMenu";
import { File } from "./File";
import { Folder } from "./Folder";
import { SubMenu } from "./SubMenu";

export type FileType = {
  title: string;
  icon: React.ReactNode;
};

export const explorerFiles: Record<string, FileType> = {
  "/vscode/vs/settings": {
    icon: <FileJson size={16} />,
    title: "settings.json",
  },
  "/vscode/vs/extensions": {
    icon: <FileJson size={16} />,
    title: "extensions.json",
  },
  "/vscode/terminal/general": {
    icon: <Terminal size={16} />,
    title: "General",
  },
  "/vscode/terminal/fish": { icon: <Cog size={16} />, title: "config.fish" },
  "/vscode/others/dev-setup": { icon: <Cpu size={16} />, title: "dev.setup" },
  "/vscode/others/gaming-setup": {
    icon: <Joystick size={16} />,
    title: "gaming.setup",
  },
};

export function Explorer() {
  return (
    <div className="py-2 px-4 text-[#8F8CA8]">
      <strong className="font-medium text-xs pl-2 flex items-center justify-between">
        EXPLORER
        <MoreHorizontal size={16} strokeWidth={1.5} />
      </strong>

      <nav className="mt-4 flex flex-col">
        <SubMenu title="OPEN EDITORS">
          <OpenFilesSubMenu />
        </SubMenu>

        <SubMenu defaultOpen title="PROJETO-VSCODE">
          <Folder defaultOpen title="Visual Studio Code">
            {/* <File href="/vscode/general">
              <Code2 size={16} />
              General
              </File> */}
            <File href="/vscode/vs/settings">
              <FileJson size={16} />
              settings.json
            </File>
            <File href="/vscode/vs/extensions">
              <FileJson size={16} />
              extensions.json
            </File>
          </Folder>

          <Folder title="Terminal">
            <File href="/vscode/terminal/general">
              <Terminal size={16} />
              General
            </File>
            <File href="/vscode/terminal/fish">
              <Cog size={16} />
              config.fish
            </File>
          </Folder>

          <Folder title="Others">
            <File href="/vscode/others/dev-setup">
              <Cpu size={16} />
              dev.setup
            </File>
            <File href="/vscode/others/gaming-setup">
              <Joystick size={16} />
              gaming.setup
            </File>
            {/* <File href="/others/recording-setup">
              <Film size={16} />
              recording.setup
            </File> */}
          </Folder>
        </SubMenu>
      </nav>
    </div>
  );
}
