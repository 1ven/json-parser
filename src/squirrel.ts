type INode = {
  tagName: string;
  children?: IChildren;
  props?: IProps;
}

type IChildren = INode | string | number;

type IProps = {
  [key: string]: any;
}

function renderChildren(children: IChildren): string {
  if (typeof children === 'string' || typeof children === 'number') {
    return children.toString();
  }

  return '';
}

function renderProps(props: IProps): string {
  return Object.keys(props).reduce((acc, key, i) => (
    acc + ` ${key}="${props[key]}"`
  ), '');
}

export function render({ tagName, children = '', props = {} }: INode): string {
  const childrenString = renderChildren(children);
  const propsString = renderProps(props);
  return `<${tagName}${propsString}>${childrenString}</${tagName}>`;
}
