import { mkdir, writeFile } from "fs/promises";
import { copyImageToDist, loadFromFolder } from "./modules/token-config";
import path from "path";
import config from "./config.json";
import { IbcToken } from "./modules/IBC-token";
import { plainToInstance } from "class-transformer";
import { CW20Token } from "./modules/CW20-token";

const build = async (network: string) => {
  const outputPath = path.join(__dirname, config.outputDir);
  const configPath = path.join(__dirname, config.tokenDir);
  const logoPath = path.join(outputPath, config.iconDir);

  const result = await Promise.all([
    loadFromFolder(configPath, "ibc", network),
    loadFromFolder(configPath, "cw20", network),
  ]);

  const ibcTokens = plainToInstance(IbcToken, result[0], {
    excludeExtraneousValues: true,
    exposeUnsetFields: false,
  });

  const cw20Tokens = plainToInstance(CW20Token, result[1], {
    excludeExtraneousValues: true,
    exposeUnsetFields: false,
  });
  const tokens = {
    ibc: ibcTokens,
    cw20: cw20Tokens,
  };

  // Create dist folder
  await Promise.all([
    mkdir(logoPath, {
      recursive: true,
    }),
  ]);

  // Copy image to logo folder
  await copyImageToDist(configPath, logoPath, [...ibcTokens, ...cw20Tokens]);

  // Write file
  await writeFile(
    path.join(outputPath, `${network}.json`),
    JSON.stringify(tokens, null, 2)
  );
};

const main = async () => {
  await Promise.all(config.networks.map((network) => build(network)));
};

main();
