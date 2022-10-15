export abstract class PayloadSigner {
  abstract sign(payload: string | Buffer | any): string;
}
