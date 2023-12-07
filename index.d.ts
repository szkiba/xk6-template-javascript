/**
 * ˮsummaryˮ
 *
 * @example
 * ```ts
 * import globalˮPrimaryClassˮ, { ˮPrimaryClassˮ } from "k6/x/ˮnameˮ"
 *
 * export default function () {
 *   console.log(globalˮPrimaryClassˮ.greeting)
 *
 *   let instance = new ˮPrimaryClassˮ("Wonderful World")
 *   console.log(instance.greeting)
 * }
 * ```
 */
export as namespace ˮnameˮ;

/**
 * This is the primary class of the ˮnameˮ extension.
 *
 * @example
 * ```ts
 * import { ˮPrimaryClassˮ } from "k6/x/ˮnameˮ"
 *
 * export default function () {
 *   let instance = new ˮPrimaryClassˮ("Wonderful World")
 *   console.log(instance.greeting)
 * }
 * ```
 */
export declare class ˮPrimaryClassˮ {
  /** Greeting message */
  readonly greeting: string;

  /**
   * Create a new ˮPrimaryClassˮ instance.
   *
   * @param name to whom the greeting is addressed
   */
  constructor(name: string);
}

/** Default ˮPrimaryClassˮ instance. */
declare const defaultˮPrimaryClassˮ: ˮPrimaryClassˮ;

/** Default ˮPrimaryClassˮ instance. */
export default defaultˮPrimaryClassˮ;
