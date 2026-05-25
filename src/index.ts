#!/usr/bin/env -S osascript -l JavaScript
import getNowPlaying from './main';
const message = getNowPlaying();
if (message) {
  $.printf('%s', message);
}
$.exit(0);
