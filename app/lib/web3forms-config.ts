/** Web3Forms public access key for helixfs.co.uk contact form */
export const WEB3FORMS_ACCESS_KEY = "5c6a7b21-0e14-42cc-924b-1d552ddd764d";

export const WEB3FORMS_SUBMIT_URL = "https://api.web3forms.com/submit";

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/** Use env only when it is a valid UUID; ignore mistaken URLs or old keys. */
export function resolveWeb3FormsAccessKey(): string {
  const fromEnv = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim().replace(/^['"]|['"]$/g, "") ?? "";

  if (fromEnv && UUID_PATTERN.test(fromEnv)) {
    return fromEnv;
  }

  return WEB3FORMS_ACCESS_KEY;
}
