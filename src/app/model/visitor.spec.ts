import { Visitor } from './visitor';

describe('Visitor', () => {
  it('should create an instance', () => {
    expect(new Visitor(4, 'Samantha Fox', '000-000-000', 'samantha.fox@abc.com', 'Hey'))
      .toBeTruthy();
  });
});
