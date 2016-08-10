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
});
