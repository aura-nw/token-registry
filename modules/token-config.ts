import { copyFile, readFile, readdir } from "fs/promises";
import path from "path";
import * as hasha from "hasha";
import { existsSync } from "fs";
import { IToken } from "./interfaces/itoken";

export class TokenConfig<T> {
  constructor(public token: T) {}
}

export async function loadFromFolder(
  configPath: string,
  tokenType: string,
  network: string
): Promise<any[]> {
  const envConfigPath = path.join(configPath, network, tokenType);

  if (!existsSync(envConfigPath)) return [];

  const directories = (
    await readdir(envConfigPath, {
      withFileTypes: true,
    })
  )
    .filter((direct) => direct.isDirectory())
    .map((direct) => direct.name);

  const filesData = await Promise.all(
    directories.map((dir) => {
      return readFile(path.join(envConfigPath, dir, "info.json"));
    })
  );

  const tokens = [];
  for (const id in directories) {
    const address = directories[id];

    // calculate icon file name
    const icon = `${hasha.fromFileSync(
      path.join(envConfigPath, directories[id], "token.png"),
      {
        algorithm: "sha1",
      }
    )}.png`;

    tokens.push({
      ...JSON.parse(filesData[id].toString()),
      address,
      icon,
      tokenType,
      network,
    });
  }

  return tokens;
}

export async function copyImageToDist(
  configPath: string,
  logoPath: string,
  tokens: IToken[]
): Promise<void> {
  await Promise.all(
    tokens.map((token) => {
      // source path
      const source = path.join(
        configPath,
        token.network,
        token.tokenType,
        token.address,
        "token.png"
      );

      // dest path
      const dest = path.join(logoPath, token.icon);

      return copyFile(source, dest);
    })
  );
}
