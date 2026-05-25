import { beforeEach, describe, expect, it, vi } from 'vitest';

const playerStateMock = vi.fn();
const currentTrackMock = vi.fn();
const runningMock = vi.fn();

global.Application = vi.fn(() => ({
  running: runningMock,
  playerState: playerStateMock,
  currentTrack: currentTrackMock,
})) as unknown as typeof global.Application;

import getNowPlaying from './main';

beforeEach(() => {
  vi.clearAllMocks();
});

describe('getNowPlaying', () => {
  it('returns undefined when Music is not open', () => {
    runningMock.mockReturnValue(false);
    expect(getNowPlaying()).toBeUndefined();
    expect(playerStateMock).not.toHaveBeenCalled();
  });

  it('returns undefined when paused and does not touch the current track', () => {
    runningMock.mockReturnValue(true);
    playerStateMock.mockReturnValue('paused');
    expect(getNowPlaying()).toBeUndefined();
    expect(currentTrackMock).not.toHaveBeenCalled();
  });

  it('returns undefined when stopped and does not touch the current track', () => {
    runningMock.mockReturnValue(true);
    playerStateMock.mockReturnValue('stopped');
    expect(getNowPlaying()).toBeUndefined();
    expect(currentTrackMock).not.toHaveBeenCalled();
  });

  it('returns the artist and track name when playing', () => {
    runningMock.mockReturnValue(true);
    playerStateMock.mockReturnValue('playing');
    currentTrackMock.mockReturnValue({
      artist: () => 'Daft Punk',
      name: () => 'Around the World',
    });
    expect(getNowPlaying()).toBe('Now Playing: Daft Punk - Around the World');
  });

  it('treats fast-forwarding and rewinding as playing', () => {
    runningMock.mockReturnValue(true);
    playerStateMock.mockReturnValue('fast forwarding');
    currentTrackMock.mockReturnValue({
      artist: () => 'Artist',
      name: () => 'Track',
    });
    expect(getNowPlaying()).toBe('Now Playing: Artist - Track');
  });
});
