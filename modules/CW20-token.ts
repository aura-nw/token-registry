import { Expose } from "class-transformer";
import { Token } from "./Token";

export interface ISocialUrl {
  twitter: string;
  medium: string;
  github: string;
  telegram: string;
}

export class CW20Token extends Token {
  @Expose()
  symbol: string;

  @Expose()
  totalSupply: string;

  @Expose()
  website: string;

  @Expose()
  whitePaper: string;

  @Expose()
  socialUrl: ISocialUrl;
}
