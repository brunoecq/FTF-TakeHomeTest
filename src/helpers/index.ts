export function getEnvUrl(): string {
  const URL: string = process.env.VUE_APP_BASE_URL;
  const GIT_USERNAME: string = process.env.VUE_APP_GIT_USERNAME;
  const GIT_PROJECT: string = process.env.VUE_APP_GIT_PROJECT;
  return URL.replace("{0}", GIT_USERNAME).replace("{1}", GIT_PROJECT);
}

export function getCommitUrl(URL: string,GIT_USERNAME: string,GIT_PROJECT :string): string {
  return URL.replace("{0}", GIT_USERNAME).replace("{1}", GIT_PROJECT);
}