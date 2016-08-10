import * as expect from 'expect';
import { render } from '../src/squirrel';

describe('squirrel', () => {
  it('should render 1-level template without children and props', () => {
    expect(render({ tagName: 'div' })).toBe(
      '<div></div>'
    );

    expect(render({ tagName: 'span' })).toBe(
      '<span></span>'
    );

    expect(render({ tagName: 'p' })).toBe(
      '<p></p>'
    );
  });

  it('should render 1-level template with text children and without props', () => {
    expect(render({
      tagName: 'div',
      children: 'Hello world',
    })).toBe(
      '<div>Hello world</div>'
    );

    expect(render({
      tagName: 'div',
      children: 1,
    })).toBe(
      '<div>1</div>'
    );
  });
});
