import { Channel3Client } from './client';

// Basic test to ensure the module exports work
describe('Channel3Client', () => {
  it('should be defined', () => {
    expect(Channel3Client).toBeDefined();
  });

  it('should throw error when no API key is provided', () => {
    expect(() => {
      new Channel3Client({} as any);
    }).toThrow('No API key provided');
  });

  it('should initialize with explicit API key', () => {
    const client = new Channel3Client({ apiKey: 'test_key' });
    expect(client).toBeInstanceOf(Channel3Client);
  });
}); 