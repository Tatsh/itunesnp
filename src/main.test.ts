import { beforeEach, describe, expect, it, vi } from 'vitest';

const playerStateMock = vi.fn();
const currentTrackMock = vi.fn();
const runningMock = vi.fn();

global.Application = vi.fn(() => ({
  running: runningMock,
  playerState: playerStateMock,
  currentTrack: currentTrackMock,
})) as unknown as typeof global.Application;

import main from './main';

beforeEach(() => {
  vi.clearAllMocks();
});

describe('main', () => {
  it('reports Music is not open when the app is not running', () => {
    runningMock.mockReturnValue(false);
    expect(main()).toBe('Now Playing: Nothing, Music is not open.');
    expect(playerStateMock).not.toHaveBeenCalled();
  });

  it('reports paused state without touching the current track', () => {
    runningMock.mockReturnValue(true);
    playerStateMock.mockReturnValue('paused');
    expect(main()).toBe('Now Playing: Nothing, Music is currently paused.');
    expect(currentTrackMock).not.toHaveBeenCalled();
  });

  it('reports stopped state without touching the current track', () => {
    runningMock.mockReturnValue(true);
    playerStateMock.mockReturnValue('stopped');
    expect(main()).toBe('Now Playing: Nothing, Music is currently stopped.');
    expect(currentTrackMock).not.toHaveBeenCalled();
  });

  it('reports the artist and track name when playing', () => {
    runningMock.mockReturnValue(true);
    playerStateMock.mockReturnValue('playing');
    currentTrackMock.mockReturnValue({
      artist: () => 'Daft Punk',
      name: () => 'Around the World',
    });
    expect(main()).toBe('Now Playing: Daft Punk - Around the World');
  });

  it('treats fast-forwarding and rewinding as playing', () => {
    runningMock.mockReturnValue(true);
    playerStateMock.mockReturnValue('fast forwarding');
    currentTrackMock.mockReturnValue({
      artist: () => 'Artist',
      name: () => 'Track',
    });
    expect(main()).toBe('Now Playing: Artist - Track');
  });
});
