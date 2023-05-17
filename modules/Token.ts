import { Expose } from "class-transformer";
import { IToken } from "./interfaces/itoken";

export class Token implements IToken {
  @Expose()
  name: string;

  @Expose()
  decimals: number;

  @Expose()
  description: string;

  @Expose()
  tokenType: string;

  @Expose()
  network: string;

  @Expose()
  address: string;

  @Expose()
  icon: string;
}
