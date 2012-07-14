# How to use?

```bash
git clone git://github.com/Tatsh/itunesnp.git
cd itunesnp
osacompile -o itunesnp.scpt itunesnp.scpt.src
```

## In the command line
```bash
osascript /Users/myname/whereTheFileIs/itunesnp.scpt
```

## X-Chat Aqua 
I used it with X-Chat Aqua to display what I'm playing.

You can add a user command manually with the menus, specifying `exec -o osascript /Users/myname/whereTheFileIs/itunesnp.scpt` as the command to run.

Or you can quit X-Chat, modify `~/.xchat2/commands.conf` and add the following lines:

```
NAME NP
CMD exec -o osascript /Users/myname/whereTheFileIs/itunesnp.scpt
```

You can change `NP` to whatever you like such as `MUSIC`. It should be upper-case.

Then restart X-Chat (if necessary) and type `/np` (or whatever command name you chose).
