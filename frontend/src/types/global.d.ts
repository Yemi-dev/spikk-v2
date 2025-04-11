// Allow .js files to use default imports from .ts files
declare module "*.js" {
  const value: unknown;
  export default value;
}
