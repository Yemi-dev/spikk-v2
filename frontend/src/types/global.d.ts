// Allow .js files to use default imports from .ts files
declare module "*.js" {
  const value: any;
  export default value;
}
