export function getCommitUrl(): string {
  const URL: string = process.env.VUE_APP_BASE_URL;
  const GIT_USERNAME: string = process.env.VUE_APP_GIT_USERNAME;
  const GIT_PROJECT: string = process.env.VUE_APP_GIT_PROJECT;
  return URL.replace("{0}", GIT_USERNAME).replace("{1}", GIT_PROJECT);
}