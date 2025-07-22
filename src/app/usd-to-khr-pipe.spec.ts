import { UsdToKhrPipe } from './usd-to-khr-pipe';

describe('UsdToKhrPipe', () => {
  it('create an instance', () => {
    const pipe = new UsdToKhrPipe();
    expect(pipe).toBeTruthy();
  });
});
