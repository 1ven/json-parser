interface INode {
  tagName: string;
  children?: INode;
  props?: Object;
}

export function render({ tagName, children, props }: INode): string {
  return `<${tagName}></${tagName}>`;
}
