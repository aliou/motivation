var tips = [
  '<code>a</code> enter into insert mode after the character your cursor is on.',
  '<code>A</code> enter into insert mode at the end of the current line.',
  '<code>b</code> move cursor to first character of previous word.',
  '<code>B</code> move cursor to first character of previous non-blank series of characters.',
  '<code>&lt;C-b&gt;</code> scroll page backwards (move up in the file).',
  '<code>ci(</code> Change all text in between a set of parenthesis.',
  '<code>ct"</code> Change text til the quotes.',
  '<code>2ct"</code> Change text from cursor up til the 2nd quote in a line.',
  '<code>cF"</code> Change from cursor backwards finding and including the previous quote.',
  '<code>C</code> Delete until the end of the line and enter into insert mode.',
  '<code>:cd ../</code> Change directories to one previous.',
  '<code>:cd ~/Sites/projectname</code> Change directories to a known directory.',
  '<code>CTRL-c<code> In Normal mode, any pending command is aborted. Also aborts current search.',
  '<code>dd</code> Delete the current line.',
  '<code>D</code> Delete from cursor until the end of the line. Same as <code>d$</code>.',
  '<code>d^</code> Delete from cursor to beginning of the line.',
  '<code>d/pattern</code> Deletes up to first matched pattern.',
  '<code>di"</code> Delete everything inside of these quotes.',
  '<code>da"</code> Delete everything with quotes wrapped around (including the quotes).',
  '<code>&lt;C-d&gt;</code> Scroll half page (in this case “d” is a mnemonic for “down”).',
  '<code>:%d</code> Deletes all lines in a file.',
  '<code>:2,8d</code> Deletes lines two through eight.',
  '<code>e</code> jumps to the end of the next word.',
  '<code>E</code> jumps to the end of the next non-blank series of characters.',
  '<code>ge</code> jumps to the end of the previous word.',
  '<code>:ea 5m</code> jump to five minutes ago. Seriously.',
  '<code>:ea 1h</code> jump to 1 hour ago.',
  '<code>:ea 14h 30m</code> jump to 14 hours and 30 minutes ago. Ok you get the point.',
  '<code>:e filename</code> open file in the current window.',
  '<code>:e .</code> open file explorer in current directory.',
  '<code>fr</code> jumps to the next r on the (same line only).',
  '<code>ft</code> jumps to the next t on the (same line only).',
  '<code>f,</code> jumps to the next , on the (same line only).',
  '<code>Fr</code> jumps to the previous r (same line only).',
  '<code>Ft</code> jumps to the previous t (same line only).',
  '<code>F,</code> jumps to the previous , (same line only).',
  '<code>2df"</code> delete from cursor through two occurences of “.',
  '<code>&lt;C-f&gt;</code> scrolls one full page forward.',
  '<code>gx</code> Go to url under your cursor in a browser.',
  '<code>gf</code> Go open file under your cursor in the current window.',
  '<code>g;</code> Go to the last place you edited text.',
  '<code>g,</code> Go forward in the change list.',
  '<code>4g,</code> Go forward 4 spots on the change list.',
  '<code>gg=G</code> or <code>1G=G</code> format the entire file.',
  '<code>gn</code> Grab the next match from last search and visually select it.',
  '<code>gi</code> Go into insert mode at the end of the last insert you did.',
  '<code>ge</code> Go to the end of the previous word.',
  '<code>gp</code> Pastes just like p but leave the cursor after the pasted text.',
  '<code>gP</code> Pastes just like P but leave the cursor after the pasted text.',
  '<code>gv</code> Reselects most recent visual selection.',
  '<code>g~~</code> Switch case of all characters in current line.',
  '<code>gq</code> Format selected text.',
  '<code>:%g/pattern/norm @q</code> Run macro q on all lines in a file that match a pattern.',
  '<code>:%g/^$/norm dd</code> Delete all blank lines in a file.',
  '<code>h</code> Move cursor one character to the left.',
  '<code>4h</code> Move cursor four characters to the left.',
  '<code>dh</code> Delete character to the left of cursor.',
  '<code>:h</code> Opens up vim help in a new window.',
  '<code>:h a</code> Opens vim help to documentation on the a key.',
  '<code>H</code> Move cursor to first (highest) line in window.',
  '<code>80i*&lt;escape&gt;</code> Insert 80 * characters.',
  '<code>I</code> Insert text at the very beginning of the line.',
  '<code>j</code> Moves cursor down one line.',
  '<code>32j</code>  Moves the cursor down 32 lines.',
  '<code>J</code> Joins two lines removing indent.',
  '<code>k</code> moves cursor up one line.',
  '<code>8k</code> moves cursor up 8 lines.',
  '<code>&lt;C-w&gt;K</code> rotates window to horizontal split.',
  '<code>dk</code> delete current line and line above cursor.',
  '<code>l</code> Move cursor right one character.',
  '<code>dl</code> Delete character under cursor. Same as x.',
  '<code>L</code> Move cursor to last line in window.',
  '<code>mk</code> mark spot as k.',
  '<code>\'k</code> return the cursor to the spot you marked as “k”.',
  '<code>d\'k</code> delete from the cursor’s position to the spot you marked as “k”.',
  '<code>c\'k</code> change from the cursor’s position to the spot you marked as “k”.',
  '<code>y\'k</code> yank/copy from the cursor’s position to the spot you marked as “k”.',
  '<code>M</code> Move cursor to middle of window.',
  '<code>n</code> moves forward to next match of a search pattern.',
  '<code>N</code> moves backwards to previous match of a search pattern.',
  '<code>gn</code> search forward for the last used search pattern.',
  '<code>o</code> Opens a new line below where your cursor is and places you in insert mode.',
  '<code>O</code> Opens a new line above where your cursor is and places you in insert mode.',
  '<code>:only</code> Closes all splits except for the current one.',
  '<code>p</code> pastes in the last thing you yanked or deleted (copied or cut) after the cursor.',
  '<code>P</code> pastes in the last thing you yanked or deleted (copied or cut) before the cursor.',
  '<code>2p</code> pastes in the last thing you yanked or deleted (copied or cut) twice.',
  '<code>"*p</code> Pastes in text from your system clipboard.',
  '<code>"%p</code> Pastes in the name of the current file.',
  '<code>:212pu</code> Pastes in last copy or delete on line 212. 212 can be any line number.',
  '<code>:42pu *</code> Pastes in system clipboard text at line 42.',
  '<code>"/p</code> Pastes in your last search pattern.',
  '<code>:&lt;c-r&gt;/</code> Pastes in your last search pattern when you are on the command line.',
  '<code>@a</code> Will play back what you just recorded into register a.',
  '<code>:q</code> quits file only if you have no unsaved changes.',
  '<code>:q!</code> quits file without writing any of your changes.',
  '<code>:wq</code> saves and quits file.',
  '<code>:12,42wq</code> saves lines 12 to 42 and quits file.',
  '<code>:wqa</code> saves and quits all files in buffer.',
  '<code>r</code> Replaces character under cursor with next input i.e.',
  '<code>ra</code> Replaces the character under the cursor with a.',
  '<code>:r filename</code> Read the contents of filename and place into the current buffer.',
  '<code>:r !cd -; ls</code> Pastes in the directory listing of the last directory you were in.',
  '<code>:r !tree</code> Pastes in the output from running tree on a directory.',
  '<code>s</code> deletes the character your cursor is on and enters into insert mode.',
  '<code>S</code> deletes the whole line you are on and enters into insert mode.',
  '<code>:sp</code> This will split the current window horizontally. Sp is short for split.',
  '<code>s</code> is how you do find and replace, so let’s just say it is all of the important.',
  '<code>:s/foo/bar</code> replaces foo with bar on the current line for the first occurance of foo.',
  '<code>:12,42s/foo/bar/g</code> replaces all occurances of foo with bar on lines 12,42.',
  '<code>:%s/foo/bar/g</code> replaces all occurances of foo with bar for the entire file.',
  '<code>:%s/\ class=".*"//g"</code> Delete all classes in markup for the current file.',
  '<code>:%s/\ id=".*"//g"</code> Delete all ids in markup for the current file.',
  '<code>:%s/\s\+$//e</code> Removes trailing whitespace.',
  '<code>tf</code> put cursor one character before the next occurance of f.',
  '<code>;</code> repeat latest f, F, t, or T.',
  '<code>,</code> repeat it in the opposite direction.',
  '<code>dt&lt;</code> Delete up until the next <code>&lt;</code>. This is handy in the markup world.',
  '<code>dt"</code> Delete from cursor until next “.',
  '<code>dT}</code> Delete backwards from cursor until previous }.',
  '<code>u</code> Undo changes.',
  '<code>U</code> Undo all latest changes on one line, the line where the latest change was made.',
  '<code>&lt;C-r&gt;</code> Redo changes.',
  '<code>:undol</code> List all the history points in your tree of changes.',
  '<code>v</code> Start visual mode on a per character basis.',
  '<code>V</code> Starts visual mode linewise (selects whole lines).',
  '<code>CTRL-v</code> Starts visual mode blockwise (very favorite).',
  '<code>gv</code> Reselect last visual selection.',
  '<code>w</code> Moves to the next word.',
  '<code>3w</code> Moves to the third word.',
  '<code>x</code> delete character under your cursor.',
  '<code>X</code> this will delete a character before the cursor. Same as <code>dh</code>.',
  '<code>yy</code> Copies current line.',
  '<code>"xyy</code> Copies current line into register x.',
  '<code>:12,112y</code> Copies lines 12 through 112.',
  '<code>yt"</code> Copies from current cursor postion to the next quote on the same line.',
  '<code>yt&gt;</code> Copies from current cursor postion to the next &gt; on the same line.',
  '<code>yT&gt;</code> Copies from current cursor postion to the previous &gt; on the same line.',
  '<code>&lt;C-y&gt;</code> Scroll up by 1 line.',
  '<code>12&lt;C-y&gt;</code> Scroll up 12 lines.',
  '<code>zz</code> Redraws the screen so that your cursor line is at the middle of the window.',
  '<code>#</code> search backward for the word under cursor in current file.',
  '<code>/</code> Forward search for things.',
  '<code>/&lt;p&gt;</code> Forward search for the next opening paragraph tag.',
  '<code>/\</code> Forward search for the next space.',
  '<code>?</code> Backwards search.',
  '<code>?http</code> Search backwards for the string <code>http</code>.',
  '<code>==</code> Format current line of code.',
  '<code>&gt;&gt;</code> Indent current line.',
  '<code>.</code> Repeat last change.',
  '<code>@:</code> Repeat last command line.',
  '<code>:set paste</code> Set this if you are pasting in content from the system clipboard. Trust me.',
  '<code>:12,54=</code> Format lines 12 through 54.',
  '<code>:56,99&gt;</code> Indent lines 56 through 99.',
  '<code>:52,84y</code> Yank / copy lines 52 through 84.',
  '<code>12&gt;&gt;</code> Indent 12 lines including the line you are on.',
  '<code>&lt;C-b&gt;</code> Scroll backwards one full screen.',
  '<code>&lt;C-u&gt;</code> Scroll backwards or ‘up’ a half screen.',
  '<code>&lt;C-d&gt;</code> Scroll forwards or ‘down’ a half screen.',
  '<code>&lt;C-f&gt;</code> Scroll forwards.',
  '<code>&lt;C-y&gt;</code> Scroll backwards count lines (defaults to one).',
  '<code>&lt;C-e&gt;</code> Scroll forwards one full line.',
  '<code>&lt;C-y&gt;</code> Scroll backwards one full line.',
  '<code>a</code> enter into insert mode after the character your cursor is on.',
  '<code>A</code> enter into insert mode at the end of the current line.',
  '<code>b</code> move cursor to first character of previous word.',
  '<code>B</code> move cursor to first character of previous non-blank series of characters.',
  '<code>&lt;C-b&gt;</code> scroll page backwards (move up in the file).',
  '<code>ci(</code> Change all text in between a set of parenthesis.',
  '<code>ct"</code> Change text til the quotes.',
  '<code>2ct"</code> Change text from cursor up til the 2nd quote in a line.',
  '<code>cF"</code> Change from cursor backwards finding and including the previous quote.',
  '<code>C</code> Delete until the end of the line and enter into insert mode.',
  '<code>:cd ../</code> Change directories to one previous.',
  '<code>:cd ~/Sites/projectname</code> Change directories to a known directory.',
  '<code>dd</code> Delete the current line.',
  '<code>D</code> Delete from cursor until the end of the line. Same as <code>d$</code>.',
  '<code>d^</code> Delete from cursor to beginning of the line.',
  '<code>d/pattern</code> Deletes up to first matched pattern.',
  '<code>di"</code> Delete everything inside of these quotes.',
  '<code>da"</code> Delete everything with quotes wrapped around (including the quotes).',
  '<code>&lt;C-d&gt;</code> Scroll half page (in this case “d” is a mnemonic for “down”).',
  '<code>:%d</code> Deletes all lines in a file.'
];
