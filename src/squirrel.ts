type INode = {
  tagName: string;
  children?: IChildren;
  props?: Object;
}

type IChildren = INode | string | number;

function renderChildren(children: IChildren) {
  if (typeof children === 'undefined') {
    return '';
  }

  if (typeof children === 'string' || typeof children === 'number') {
    return children;
  }

  return children;
}

export function render({ tagName, children, props }: INode): string {
  const childrenString = renderChildren(children);
  return `<${tagName}>${childrenString}</${tagName}>`;
}
