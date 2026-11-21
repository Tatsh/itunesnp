#!/usr/bin/env -S osascript -l JavaScript
ObjC.import('stdlib');
import getNowPlaying from './main';
const message = getNowPlaying();
if (message) {
  $.printf('%s', message);
}
$.exit(0);
