/** Build the "Now Playing" message for the current Music.app state. Returns a string suitable
 * for printing to stdout or pasting into an IRC client (e.g. `/np`). */
export default function main(): string {
  const music = Application('Music');
  if (!music.running()) {
    return 'Now Playing: Nothing, Music is not open.';
  }
  const state = music.playerState();
  if (state === 'paused') {
    return 'Now Playing: Nothing, Music is currently paused.';
  }
  if (state === 'stopped') {
    return 'Now Playing: Nothing, Music is currently stopped.';
  }
  const track = music.currentTrack();
  return `Now Playing: ${track.artist()} - ${track.name()}`;
}
