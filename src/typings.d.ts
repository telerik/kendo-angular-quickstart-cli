/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

/* Enable importing from .json files */
declare module "*.json" {
    const value: any;
    export default value;
}
