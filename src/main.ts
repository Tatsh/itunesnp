/** Build a `Now Playing: <artist> - <track>` line for the current Music.app state. Returns
 *  `undefined` when Music is not running, paused, or stopped. Fast-forwarding and rewinding are
 *  reported as playing. */
export default function getNowPlaying(): string | undefined {
  const music = Application('Music');
  if (!music.running()) {
    return undefined;
  }
  const state = music.playerState();
  if (state === 'paused' || state === 'stopped') {
    return undefined;
  }
  const track = music.currentTrack();
  return `Now Playing: ${track.artist()} - ${track.name()}`;
}
