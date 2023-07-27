"use client";
import { useOpenFiles } from "../../hooksVscode/useOpenFiles";
import Link from "next/link";
export function Header() {
  const { currentOpenFile } = useOpenFiles();

  const openFileName = currentOpenFile();

  return (
    <div className="flex items-center justify-between px-3">
      <div className="flex items-center gap-2">
        <Link
          type="button"
          className="w-3 h-3 bg-[#ED6A5E] rounded-full"
          href="/"
        />
        <button type="button" className="w-3 h-3 bg-[#F4BF4F] rounded-full" />
        <button type="button" className="w-3 h-3 bg-[#61C554] rounded-full" />
      </div>
      <span className="text-[#908caa] text-sm">
        {openFileName && `${openFileName.title} — `}projeto-vscode
      </span>
      <div className="w-14">&nbsp;</div>
    </div>
  );
}
