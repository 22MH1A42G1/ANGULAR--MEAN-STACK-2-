import { Message } from './message';

describe('Message', () => {
  it('should create an instance', () => {
    const directive = new Message();
    expect(directive).toBeTruthy();
  });
});
