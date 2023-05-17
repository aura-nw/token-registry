import { Expose } from "class-transformer";
import { Token } from "./Token";

export class IbcToken extends Token {
  @Expose()
  coinDenom: string;

  @Expose()
  minCoinDenom: string;

  @Expose()
  cosmosDenom: string;

  @Expose()
  channel: string;
}
