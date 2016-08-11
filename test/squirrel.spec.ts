import * as expect from 'expect';
import { render } from '../src/squirrel';

describe('squirrel', () => {
  it('should render 1-level template without children and props', () => {
    expect(render({
      tagName: 'div'
    })).toBe(
      '<div></div>'
    );

    expect(render({
      tagName: 'span'
    })).toBe(
      '<span></span>'
    );

    expect(render({
      tagName: 'p'
    })).toBe(
      '<p></p>'
    );
  });

  it('should render 1-level template with text / numeric children and without props', () => {
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

  it('should render 1-level template with text / numeric children and props', () => {
    expect(render({
      tagName: 'div',
      children: 'Hello world',
      props: {
        'data-title': 'Greeting',
        'data-date': '08-10-2016',
      },
    })).toBe(
      '<div data-title="Greeting" data-date="08-10-2016">Hello world</div>'
    );
  });

  it('should render 2-level template without children and props', () => {
    expect(render({
      tagName: 'div',
      children: {
        tagName: 'div',
      },
    })).toBe(
      '<div><div></div></div>'
    );
  });
});
